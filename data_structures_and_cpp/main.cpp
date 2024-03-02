#include <iostream>
#include "Dequeue.h"

using namespace std;

void dequeue_tests(){
    DQue doubleEndedQueue;
    doubleEndedQueue.push_front(6);
    doubleEndedQueue.push_back(7);
    doubleEndedQueue.push_front(5);
    doubleEndedQueue.pop_back();
    doubleEndedQueue.pop_front();
    doubleEndedQueue.show();
    //Should print 6 to console.
}

int main() {
    //dequeue_tests();


    return 0;
}
