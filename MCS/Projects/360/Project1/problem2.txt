#include <iostream>

using namespace std;

void show(int ARRAY[][3], int LEN){ 
    cout << "{";
    for(int i=0; i < LEN; i++){
        cout << "{";
        for(int j=0; j < 3; j++){ // iterates over each value in the subarrays
            if (j < 2){
                cout << ARRAY[i][j] << ",";
            } else {
                cout << ARRAY[i][j] <<"";
            }   
        }
        if (i < LEN-1){
            cout << "},";        
        } else {
            cout << "}";
        }
    }
    cout << "}" << endl;  
}

void sorter(int ARRAY[][3], int LEN){
    for(int i = 0; i < LEN; i++){
    // iterates through the array and reassigns the sub array values in order 
        if(ARRAY[i][0]>ARRAY[i][1]){
            int tempVar = ARRAY[i][0]; // tempVar to not loose the value of A[i][0]
            ARRAY[i][0] = ARRAY[i][1];
            ARRAY[i][1] = tempVar;  
        }
        if(ARRAY[i][0]>ARRAY[i][2]){
            int tempVar = ARRAY[i][0];
            ARRAY[i][0] = ARRAY[i][2];
            ARRAY[i][2] = tempVar;
        }
        if(ARRAY[i][1]>ARRAY[i][2]){
            int tempVar = ARRAY[i][1];
            ARRAY[i][1]=ARRAY[i][2];
            ARRAY[i][2]=tempVar;
        }
    }  
}

int main(){
    // Array can be an arbitrary number of elements, but each sub array has only 3 elements. 
    int A[7][3] = {{9,6,4}, {1,2,5}, {8,3,9}, {2,7,5}, {1,2,4}, {1, 2, 1}, {65, 0, 3}};
    int lenA = sizeof(A)/sizeof(A[0]);
    cout << "UNSORTED:" << endl;
    show(A, lenA);
    
    sorter(A, lenA);  // sorts the elements of the sub arrays in place.
    
    cout << "SORTED:" << endl;
    
    // shows that the sub-arrays have been sorted in place. 
    show(A, lenA);
    
    return 0;
}