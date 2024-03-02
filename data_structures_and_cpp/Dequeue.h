//CDequeue.h
#ifndef DEQUEUE_H
#define DEQUEUE_H

struct DQNode {
    int data;
    DQNode *next;
    DQNode *prev;
}; //Base unit of the Dequeue

class DQue {
private:
    DQNode *front;
    DQNode *rear;

public:
    DQue(){
        front = nullptr;
        rear = nullptr;
    }
    ~DQue(){};
    //^constructor & destructor

    void push_front(int value){
        auto *new_node = new DQNode();
        new_node -> data = value;
        new_node -> prev = nullptr;
        new_node -> next = nullptr;

        if (front == nullptr){
            front = rear = new_node;
        }else{
            new_node -> next = front;
            front -> prev = new_node;
            front = new_node;
        }
    } // end of push_front

    void push_back(int value){
        auto *new_node = new DQNode();
        new_node -> data = value;
        new_node -> prev = nullptr;
        new_node -> next = nullptr;

        if (front == nullptr){
            front = rear = new_node;
        }else{
            new_node -> prev = rear;
            rear -> next = new_node;
            rear = new_node;
        }
    } // end of push_back

    int pop_front() {
        int r =  front -> data;
        DQNode *tmp = front;
        front = front -> next;
        front -> prev = nullptr;
        delete tmp;
        return r;
    } // end of pop_front

    int pop_back() {
        int r =  rear -> data;
        DQNode *curr = rear;
        rear = rear -> prev;
        rear -> next = nullptr;
        delete curr;
        return r;
    } // end of pop_back

    int front_node() {
        return front->data;
    } // end of front_node

    int back_node() {
        return rear -> data;
    } // end of rear_node

    bool empty(){
        if (front == nullptr)
            return true;
        else
            return false;
    } // end of empty

    void show(){
        DQNode *tmp = front;
        while (tmp != nullptr){
            std::cout << tmp -> data << std::endl;
            tmp = tmp -> next;
        }
    }
};
#endif