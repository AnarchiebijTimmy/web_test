#include <iostream>

using namespace std;

class SUM 
{
public:
    SUM() {};
    int operator()(int x, int y)
    {
        return x+y; 
    };
};

int main() 
{
    SUM sum; 
    cout<<sum(1,2)<<endl;
    return 0; 
}