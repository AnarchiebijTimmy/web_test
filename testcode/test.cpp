#include <iostream>

using namespace std;

// base class
class Base 
{
private:
    virtual void print() { cout<<"Base"<<endl; }; 
};

// case 1
class AA : public Base 
{
public:
    virtual void print() { cout<<"AA"<<endl; }; 
};

class AB : public AA
{
public:
    virtual void print() { cout<<"AB"<<endl; }; 
};

// case 2
class BA : public Base 
{
public:
    void print() { cout<<"BA"<<endl; }; 
};

class BB : public BA 
{
public:
    virtual void print() { cout<<"BB"<<endl; }; 
};

int main()
{
    AB *b1 = new AB(); 
    BB *b2 = new BB();

    AB *a1 = new AB();
    BB *a2 = new BB();

    b1->print();
    b2->print();

    a1->print();
    a2->print();

    delete b1; 
    delete b2; 

    return 0; 
}