#include <iostream>
#include <vector>
#include <functional>

using namespace std;

class CC
{
public:
    static CC *getInstance() { if ( !s_cc ) s_cc = new CC();  return s_cc; }; 
    void addFunc(function<int(int)> func) { m_funcs.push_back(func); };
    void removeFunc(function<int(int)> func); 
    void dispatch(); 
private:
    CC() {};
public:
    static CC *s_cc;
    vector<function<int(int)>> m_funcs;
};

CC *CC::s_cc = nullptr;

void CC::dispatch()
{
    for ( auto func : m_funcs )
    {
        cout << "CC:" << func(10) << endl;
    }
}

void CC::removeFunc(function<int(int)> func)
{
    for ( auto it = m_funcs.begin(); it != m_funcs.end(); ++it ) 
    {
        cout << "_func : " << (*it).target_type().hash_code() << endl;
        cout << " func : " << func.target_type().hash_code() << endl;
        if ( (*it).target_type().hash_code() == func.target_type().hash_code() )
        {
            m_funcs.erase(it);
            return;
        }
    }
}

class AA 
{
public:
    virtual ~AA();
    void init() { m_func = [=](int k) -> int { return k+10; }; CC::getInstance()->addFunc(m_func); };
    void print() { cout << "AA:" << m_func(10) << endl; };
public:
    function<int(int)> m_func; 
};

AA::~AA()
{
    CC::getInstance()->removeFunc(m_func);
}

class BB
{
public:
    virtual ~BB();
    void init() { m_func = [=](int k) -> int { return k+20; }; CC::getInstance()->addFunc(m_func); };
    void print() { cout << "BB:" << m_func(10) << endl; };
public:
    
    function<int(int)> m_func; 
};

BB::~BB()
{
    CC::getInstance()->removeFunc(m_func);
}


int main() 
{
    AA *a = new AA(); 
    a->init();
    a->print();

    BB *b = new BB(); 
    b->init();
    b->print();

    CC::getInstance()->dispatch();

    delete a; 
    //delete b;

    CC::getInstance()->dispatch();
}