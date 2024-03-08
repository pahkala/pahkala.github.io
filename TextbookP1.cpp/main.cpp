#include <iostream>
#include <vector>

using namespace std;


struct row {
    vector<int> row_vals;
    row *next;
    row *prev;
};
class DLList {
private:
    row *head;
    row *tail;
public:
    DLList(){
        head = nullptr;
        tail = nullptr;
    }
    ~DLList()= default;
    void add_row(vector<int>&);
    void show();
};

void DLList::add_row(vector<int> &input_row) {
    row *new_row = new row;
    new_row->row_vals = input_row;
    new_row->next = nullptr;
    new_row->prev = nullptr;
    if (head == nullptr) {
        head = tail = new_row;
    } else {
        tail->next = new_row;
        new_row->prev = tail;
        tail = new_row;
    }
}
    void DLList::show() {
        row *new_node;
        new_node = head;
        while (new_node != nullptr) {
            cout << "[";
            cout << "address of previous node = " << new_node->prev << endl;
            cout << "address of current node  = " << new_node << endl;
            cout << "address of next node = " << new_node->next << endl;
            cout << "]" << endl;
            new_node = new_node->next;
        }
    }



int main() {
    vector<int> row1 = {1,2,3,4,5,6,7};
    vector<int> row2 = {7,6,5,4,3,2};
    DLList my_list;
    my_list.add_row(row1);
    my_list.show();
    my_list.add_row(row2);
    my_list.show();


    return 0;
}
