#include <iostream>
#include "Dequeue.h"
#include "Stack.h"
#include "Recursion.h"

using namespace std;

void dequeue_tests(){
    DQue doubleEndedQueue;
    doubleEndedQueue.push_front(6);
    doubleEndedQueue.push_back(7);
    doubleEndedQueue.pop_back();
    doubleEndedQueue.pop_front();
    doubleEndedQueue.show();
}
void stack_tests(){
    CharStack test_stack;
    test_stack.push( 't');
    cout << test_stack.top_element() << endl;
    cout << test_stack.pop() << endl;
    cout << test_stack.top_element() << endl;
}


int main() {
    //dequeue_tests();
    //stack_tests();
    //cout << collatz(36) << endl;
    //cout << r_add(6, 7) << endl;
    cout << r_palindrome("Hello") << endl;

    return 0;
}
