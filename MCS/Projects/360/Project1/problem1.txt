#include <iostream>
#include <string>

using namespace std;

int *remove_K(int A[], int N, int K){
    int *B;   //initialize a new array B to hold non K multiple values.
    B = new int();
    int j = 0; 
    // iterate through A, when A-value is not a multiple of K it is added to B
    for (int i=0; i < N; i++){ 
        if (A[i] % K != 0){
            B[j] = A[i];
            j++;
        } else {
            cout << A[i] << " Is a multiple of " << K << endl; // identified multiples of K
        }
    }
    return B;
}

int sum(int A[], int N){
    int sumB = 0;
    int k;
    cout << "Enter a nonzero integer whose multiples you wish to remove. " << endl;
    cin >> k; // user chooses K, whose multiples will be removed.
    cout << "*****" << endl;
    int *C = remove_K(A, N, k); // This array will be all non k multiples from A
    
    for (int i=0; i < N; i++){
        sumB += C[i]; // the sum of all non k multiple from A
    }
    cout << "The sum of B (All of A whose values are not multiples of " << k << "): " << endl;
    return sumB; 
}

int main(){
    int n;        
    int i = 0; 
    int *A;           // *A is the dereferenced value of the first element 
    A = new int();    // A is equivalent to the address of the first element
   
    cout << "Give a positive integer then press enter." << endl;
    cout << "Type 0 then press enter when you are done." << endl;
   
    do {

        cin >> n;
        cout << "\n";
        A[i] = n;
        i++;
    } while (n != 0);
    
    cout << "*****" << endl;
    cout << "Array A has values: " << endl;
	for(int j = 0; j<(i-1); j++){
        cout << A[j] << endl;
        }
    cout << "*****" << endl;
    cout << sum(A, (i-1)) << endl;
	
    return 0;
}