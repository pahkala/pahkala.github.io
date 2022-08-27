#include<iostream>

using namespace std;

void remove(B, j, l){
    cout << B << ", " << j << ", " << l << endl;
}

int main(){

    int *A;
    A = new int();  // the new array is not bound by size.
    int n;
    int i = 0;
    
    do {
	    cout << "enter value: " << endl;     
	    cin >> n;
	    A[i] = n;
	    i++;
    } while (n != 0);
    
    cout << "give an integer whose multiples will be removed from the array. " << endl;
    cin >> k;
    remove(A, i-1, k)

    return 0;
}

//Fill the array first, with potential duplicates, 
// then run remove function to remove duplicates, 

// For sorting: don't use the sorting function, fins a way
// given 3 values and their addresses, determine which value is smallest and put 
// that address first. We want to be swapping addresses and not values. 
// (call by constant reference)