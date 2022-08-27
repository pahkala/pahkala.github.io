#include<iostream>
#include<string>
#include<vector>

using namespace std;

struct Node{
    char data;
    Node *left = NULL;
    Node *right = NULL;
    Node *parent = NULL;
};

class Btree{
    private:
        Node *root;
        Node* Insert(Node*, char);
        void show_h(Node*);
    public: 
        vector<char> Alph = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        char letter(string);
        string word(string);
        string binary(char);
        bool contains(char);
        void insert(char);
        void generateTree(int);
        void show();
    
    Btree(int depth){
        root = NULL;
        generateTree(depth);
    }
};

Node* Btree::Insert(Node* curr, char C){
    if(curr->data == 'Z'){
        //cout << "data == Z" << endl;
        Node* tmp = root;
        curr->parent = new Node;
        root = curr->parent;
        root->left = tmp;
        Insert(root, C);    
    }
    else{
        //cout << "data != Z" << endl;
        curr->parent = new Node;
        curr->parent->left = curr;
        curr->parent->right = new Node;
        curr->parent->right->data = C;
        root = curr -> parent;
        root->data = 'Z';
    }
}

void Btree::insert(char C){
    if (root != NULL){
        //cout << "insert: " << C << endl;
        Insert(root, C);
    }
    else{
        root = new Node;
        root->data = C;
        root->left = NULL;
        root->right = NULL;
        root->parent = NULL;
        }
}

char Btree::letter(string s){
    return 'n';
} 

string Btree::word(string s){
    return "done";
}

string Btree::binary(char s){
    return "1100";
}

bool Btree::contains(char c){
    if (c == 'p')
        return true;
    else if (c== 'r')
        return false;
}


void Btree::generateTree(int depth){
// Depending on the depth of the tree, insert the relevant amount of letters from the alphabet
    if (depth == 1){
        for (int i = 0; i < 2; i++){
            //cout << Alph[i] << endl;
            insert(Alph[i]);
        }
    }
    else if (depth == 2){
        for (int i = 0; i < 4; i++){
            //cout << Alph[i] << endl;
            insert(Alph[i]);
        }
    }
    else if (depth == 3){
        for (int i = 0; i < 8; i++){
            //cout << Alph[i] << endl;
            insert(Alph[i]);
        }
    }
    else if (depth == 4){
        for (int i = 0; i < 16; i++){
            //cout << Alph[i] << endl;
            insert(Alph[i]);
        }
    }
    else if (depth == 5){
        for (int i = 0; i < 26; i++){
            //cout << Alph[i] << endl;
            insert(Alph[i]);
        }
    }
    
}

void Btree::show_h(Node *curr){
    if(curr != NULL){
        if (curr ->data == 'Z'){
            show_h(curr->left);
            show_h(curr->right);
        
        }
        else{ 
        cout << curr->data << endl;
        show_h(curr->left);
        show_h(curr->right);
        }
    }
}

void Btree::show(){
    show_h(root);
}

 





int main(){
    Btree T(4);
    cout << T.letter("1101") << endl;
    cout << T.word("0011111011010100") << endl;
    cout << T.binary('m') << endl;
    cout << T.contains('p') << endl;
    cout << T.contains('r') << endl;
    return 0;
}



        