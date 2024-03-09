//Double_linked_list_h
#ifndef DOUBLE_LINKED_LIST_H
#define DOUBLE_LINKED_LIST_H

#include<vector>

struct row {
    std::vector<int> row_vals;
    row *next = nullptr;
    row *prev = nullptr;
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
    void add_row(std::vector<int>&);
    void show();
};

void DLList::add_row(std::vector<int> &input_row) {
    row *new_row = new row;
    new_row->row_vals = input_row;
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
        std::cout << "[";
        std::cout << "address of current node  = " << new_node << std::endl;
        std::cout << "address of next node = " << new_node->next << std::endl;
        std::cout << "]" << std::endl;
        new_node = new_node->next;
    }
}

#endif //DOUBLE_LINKED_LIST_H