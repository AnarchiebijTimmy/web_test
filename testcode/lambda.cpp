#include <iostream>
#include <vector>
#include <functional>

using namespace std;


class AA 
{
public:
    void init(); 
    void print();
public:
    function<int(int)> m_func; 
    function<int(int)> m_func2; 
    vector<function<int(int)>> m_v; 
};

void AA::init()
{
    m_func = [=](int k) -> int { return k+10; };
    m_func2 = [=](int k) -> int { return k+10; };
    m_v.push_back(m_func);
    m_v.push_back(m_func2);
}

void AA::print()
{ 
    cout << "AA:" << m_func(10) << endl; 
}

int main() 
{
    AA *a = new AA(); 
    a->init();
    a->print();
    cout << a->m_func.target_type().hash_code() << endl;
    cout << a->m_func2.target_type().hash_code() << endl;

    for ( auto func : a->m_v ) 
    {
        cout << func.target_type().hash_code() << endl;
    }
}