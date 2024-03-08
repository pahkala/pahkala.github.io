//DLL_W_MERGE_H
#ifndef DLL_W_MERGE_H
#define DLL_W_MERGE_H

#include <vector>
#include <iomanip>

struct listNode {
    std::string word;
    int word_length;
    listNode *next;
    listNode *prev;
};

class List {
private:
    listNode *head;
    listNode *tail;
    int word_count;
public:
    List() {
        head = nullptr;
        tail = nullptr;
        word_count = 0;
    }
    ~List() {
        while(head != nullptr) {
            listNode *temp = head;
            head = head->next;
            delete temp;
        }
    }
    //member functions declarations:
    void generate_list(std::vector<std::string>);
    void print();
    std::string longest_string();
    double average_word_length();
    std::string build_sentence();
    void prioritize_list();
    listNode *split(listNode*);
    listNode *merge_sort(listNode*);
    listNode *merge(listNode*, listNode*);
    void delete_string(std::string);
};

void List::generate_list(std::vector<std::string> input) {
    for (int i=0; i < input.size(); i++ ){
        auto *new_node = new listNode();
        new_node ->prev = nullptr;
        new_node ->next = nullptr;
        new_node ->word = input[i];
        new_node ->word_length = new_node -> word.size();
        if (head == nullptr){
            head = tail = new_node;
        } else {
            tail ->next = new_node;
            new_node ->prev = tail;
            tail = new_node;
        }
        word_count += 1;
    }
} // end of generate list

void List::print() {
    listNode *curr;
    curr = head;
    if (head == nullptr)
        std::cout << "Empty!" << std::endl;
    else {
        while (curr != nullptr) {
            std::cout << "[\"" << curr->word << "\", " << curr ->word_length << ']' << std::endl;
            curr = curr ->next;
        }
    }
}// end of print

std::string List::longest_string(){
    std::string longest;
    listNode *curr;
    curr = head;
    if (head == nullptr)
        return "EMPTY LIST";
    else {
        while (curr->next != nullptr) {
            if(curr ->word_length >= longest.size())
                longest = curr ->word;
            curr = curr ->next;
        }
    }
    return longest;
} // end of longest string

double List::average_word_length(){
    double av_word_len;
    double char_total=0;
    double word_total=0;
    listNode *curr;
    curr = head;
    if (head == nullptr)
        return -1;
    else {
        while (curr->next != nullptr) {
            char_total += curr ->word_length;
            word_total += 1;
            curr = curr ->next;
        }
    } av_word_len = char_total/word_total;
    return av_word_len;
}// end of average_word_length

std::string List::build_sentence() {
    std::string sentence;
    listNode *curr;
    curr = head;
    if (head == nullptr)
        return "EMPTY!";
    else {
        while (curr->next != nullptr) {
            sentence += curr->word + ' ';
            curr = curr->next;
        }
    }
    return sentence;
} // end of build_sentence

void List::prioritize_list(){
    head = merge_sort(head);
}

listNode *List::merge_sort(listNode* top) {
    if (top == nullptr || top->next == nullptr)
        return top;
    listNode *second = split(top);
    top = merge_sort(top);  // recursion over left side
    second = merge_sort(second); // recursion over right side
    return merge(top,second);
}

listNode *List::split(listNode* top){
    listNode *fast = top;
    listNode *slow = top;
    while (fast->next && fast->next->next){
        fast = fast->next->next;
        slow = slow->next;
    }
    listNode *temp = slow->next;
    slow->next = nullptr;
    return temp;
}
listNode *List::merge(listNode *first, listNode *second){
    if (first == nullptr)
        return second;
    if (second == nullptr)
        return first;
    // choose larger value
    if (first->word_length > second->word_length){
        first->next = merge(first->next,second);
        first->next->prev = first;
        first->prev = nullptr;
        return first;
    } else{
        second->next = merge(first,second->next);
        second->next->prev = second;
        second->prev = nullptr;
        return second;
    }
}

void List::delete_string(std::string delstr){
    listNode *curr = head;
    listNode *before;
    if (head == nullptr)
        std::cout << "EMPTY!" << std::endl;
    else {
        while (curr->next != nullptr) {
            if(delstr == curr ->word){
                before = curr ->prev;
                before ->next = curr ->next;
                curr ->next ->prev = before;
            }
            curr = curr->next;
        }
    }
}

#endif //DLL_W_MERGE_H
