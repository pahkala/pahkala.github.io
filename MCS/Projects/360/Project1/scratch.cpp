#include <iostream>

using namespace std;

int main(){

	int *A;
	A = new int();
	
	for(int i =0; i <10; i++){
	    A[i] = i;
	}
    cout << A << endl;
    
    cout << A[9] << endl;

    return 0;
}