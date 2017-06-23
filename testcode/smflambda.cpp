#include <iostream>
#include <vector>
#include <functional>

using namespace std;

// smurf 
class SMFAA 
{
public:
    void addListener(function<void(int, const char*)> listener);
    void removeListener(function<void(int, const char*)> listener);
    static void dispatch(int type, const char *data);
public:
    static vector<function<void(int, const char*)>> m_listeners; 
};

vector<function<void(int, const char*)>> SMFAA::m_listeners; 

void SMFAA::addListener(function<void(int, const char*)> listener)
{
    m_listeners.push_back(listener);
}

void SMFAA::removeListener(function<void(int, const char*)> listener)
{
    for ( auto it = m_listeners.begin(); it != m_listeners.end(); ++it ) 
    {
        if ( (*it).target_type().hash_code() == listener.target_type().hash_code() ) 
        {
            m_listeners.erase(it); 
            return;
        }
    }
}

void SMFAA::dispatch(int type, const char *data)
{
    for ( auto listener : m_listeners )
       listener(type, data);  
}

// app
class APPAA
{
public:
    APPAA();
    virtual ~APPAA();
    void run();
private:
    SMFAA *m_smfaa; 
    function<void(int, const char*)> m_smfaa_listener;
};

APPAA::APPAA() 
    : m_smfaa(nullptr)
{
}

APPAA::~APPAA()
{
    m_smfaa->removeListener(m_smfaa_listener);
    delete m_smfaa; 
}

void APPAA::run()
{
    m_smfaa = new SMFAA();
    m_smfaa_listener = [=](int type, const char *data)
    {
        cout << "APPAA : type = " << type << ", data = " << data << endl; 
    }; 
    m_smfaa->addListener(m_smfaa_listener);
}

// main 
int main()
{
    APPAA *app = new APPAA();
    app->run();

    // test
    SMFAA::dispatch(1, "hello");
    SMFAA::dispatch(2, "good");

    delete app; 

    SMFAA::dispatch(3, "hi");
    SMFAA::dispatch(4, "nice");

    return 0;
};