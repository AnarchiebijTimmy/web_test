#include <iostream>
#include <vector>

using namespace std;


// listenr 
class SMFAAListener
{
public:
    virtual void onEvent(int type, const char *data) = 0;
};

// smurf 
class SMFAA 
{
public:
    void addListener(SMFAAListener *listener);
    void removeListener(SMFAAListener *listener);
    static void dispatch(int type, const char *data);
public:
    static vector<SMFAAListener *> m_listeners; 
};

vector<SMFAAListener *> SMFAA::m_listeners; 

void SMFAA::addListener(SMFAAListener *listener)
{
    m_listeners.push_back(listener);
}

void SMFAA::removeListener(SMFAAListener *listener)
{
    for ( auto it = m_listeners.begin(); it != m_listeners.end(); ++it ) 
    {
        if ( (*it) == listener ) 
        {
            m_listeners.erase(it); 
            return;
        }
    }
}

void SMFAA::dispatch(int type, const char *data)
{
    for ( auto listener : m_listeners )
       listener->onEvent(type, data);  
}

// app
class APPAA : public SMFAAListener 
{
public:
    APPAA();
    virtual ~APPAA();
    void run();
private:
    virtual void onEvent(int type, const char *data);
private:
    SMFAA *m_smfaa; 
};

APPAA::APPAA() 
    : m_smfaa(nullptr)
{
}

APPAA::~APPAA()
{
    m_smfaa->removeListener(this);
    delete m_smfaa; 
}

void APPAA::run()
{
    m_smfaa = new SMFAA();
    m_smfaa->addListener(this);
}

void APPAA::onEvent(int type, const char *data)
{
    cout << "APPAA : type = " << type << ", data = " << data << endl; 
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