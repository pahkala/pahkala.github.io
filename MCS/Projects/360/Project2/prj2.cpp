#include<iostream>
#include<vector>
#include<cmath>

using namespace std;


struct Monomial{
    int coeff;
    int degree;
    Monomial *next;
};

class Polynomial{
    private:
        Monomial *head;
        Monomial *tail;
    public:
        Polynomial(){
            head = NULL;
            tail = NULL;
        }
        
        ~Polynomial(){};
        
    void generate_polynomial(vector<vector<int>> Q){
        for(int i=0; i < Q.size(); i++){
                Monomial *new_monomial = new Monomial();
                new_monomial -> coeff = Q[i][0];
                new_monomial -> degree = Q[i][1];
                new_monomial -> next = NULL;
                
                if (head == NULL){
                    head = tail = new_monomial;
                }
                else {
                    tail ->next = new_monomial;
                    tail = new_monomial;
                }
            } cout << endl;
    }
    
    void print_polynomial() {
        Monomial *new_node;
        new_node = head;
        while (new_node != NULL){
            if (new_node -> next != NULL){
                cout<< new_node-> coeff << "x^" <<  new_node -> degree << " + ";
                new_node = new_node->next;
            }
            else {
                if(new_node -> coeff != 0){
                    cout<< new_node-> coeff << "x^" <<  new_node -> degree;
                    new_node = new_node ->next;
                }
                else{
                    cout << 0;
                    new_node = new_node -> next;
                }
            }
         }
     cout << endl;
    }
    
    Polynomial derivative(){
        Polynomial der;
        vector<vector<int>> Q1;
        vector<int> Q2;
        Monomial *curr;
        curr = head;

        while (curr != NULL){
            int c = curr-> coeff;
            int d = curr-> degree;
            Q2.push_back(c);
            Q2.push_back(d);
            Q1.push_back(Q2);
            curr = curr-> next;
            Q2.clear();
        } cout << endl;
        for(int i=0; i< Q1.size(); i++){
            Q1[i][0] = Q1[i][0]*Q1[i][1];
            Q1[i][1] = Q1[i][1]-1;
        }
        der.generate_polynomial(Q1);
        return der;
    }
    

    double slope_at_point(int k){
        double slope;
        Monomial *curr;
        curr = head;
        while (curr != NULL){
            slope += (curr->coeff*curr->degree)*(pow(k, (curr->degree-1)));
            curr = curr -> next;
        }
        return slope;
    }
    
    double function_at_point(int x){
        double y = 0;
        Monomial *curr;
        curr = head;
        while (curr != NULL){
            y += curr-> coeff*pow(x, curr->degree);
            curr = curr -> next;
        }
        return y;
    }
  
    Polynomial tangent_line_at_point(int k){
        Polynomial tangent;
        double slope = slope_at_point(k);
        double y = function_at_point(k);
        double b = y-(slope*k);
        vector<vector<int>> Q1;
        vector<int> Q2;
        Q2.push_back(slope);
        Q2.push_back(1);
        Q1.push_back(Q2);
        Q2.clear();
        Q2.push_back(b);
        Q2.push_back(0);
        Q1.push_back(Q2);
        tangent.generate_polynomial(Q1);
        return tangent;
    }        
};


int main(){
    Polynomial P;
    Polynomial D;
    Polynomial T;
    
    vector<vector<int>> V = {{2,6},{-4,5},{1,4},{-9,3},{8,2},{5,1},{-6,0}};
    
    P.generate_polynomial(V);
    P.print_polynomial();
    D = P.derivative();
    D.print_polynomial();
    cout << P.slope_at_point(7) << endl;
    T = P.tangent_line_at_point(7);
    T.print_polynomial();
    
    return 0;
}