#include<iostream>
#include<vector>

using namespace std;

void show(vector<vector<int>> Q){
    for (int i = 0; i < Q.size(); i++){
        for (int j = 0; j < Q[i].size(); j++)
            cout << Q[i][j] << ", ";
        }  
        cout << endl;
}

int main(){
    vector<vector<int>> V = {{2,6},{-4,5},{1,4},{-9,3},{8,2},{5,1},{-6,0}};
    show(V);
    return 0;
}