//Stack.h
#ifndef STACK_H
#define STACK_H

struct StackObj{
    char data;
    StackObj *previous;
};

class CharStack{
private:
    StackObj *top;
public:
    CharStack(){
        top = nullptr;
    }
    ~CharStack(){};
        
    void push(char value) {
        if (top == nullptr) {
            auto *new_obj = new StackObj();
            new_obj->data = value;
            top = new_obj;
        } else {
            auto *new_obj = new StackObj();
            new_obj->data = value;
            new_obj->previous = top;
            top = new_obj;
        }
    }

    char top_element(){
        auto *curr = new StackObj;
        curr = top;
        if(top != nullptr) {
            char r = curr->data;
            return r;
        } else return -1;
    }

    char pop(){
        if(top == nullptr){
            return -1;
        } else {
            char r = top->data;
            StackObj *curr = new StackObj();
            curr = top;
            top = curr->previous;
            delete curr;
            return r;
        }
    }
};

#endif
