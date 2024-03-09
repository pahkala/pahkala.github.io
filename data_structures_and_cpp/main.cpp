#include <iostream>
#include <string>
#include <iomanip>
#include "Structures/Double_ended_queue.h"
#include "Structures/Stack.h"
#include "Concepts/Recursion.h"
#include "Structures/Double_linked_list.h"
#include "Concepts/In_pre_post_fix.h"
#include "Sorting/DLL_w_merge.h"
#include "Sorting/QuickSortRecur.h"

using namespace std;

void dequeue_tests(){
    DQue doubleEndedQueue;
    doubleEndedQueue.push_front(6);
    doubleEndedQueue.push_back(7);
    doubleEndedQueue.pop_back();
    doubleEndedQueue.pop_front();
//    doubleEndedQueue.show();
}
void stack_tests(){
    CharStack test_stack;
    test_stack.push( 't');
//    cout << test_stack.top_element() << endl;
//    cout << test_stack.pop() << endl;
//    cout << test_stack.top_element() << endl;
}

void D_L_List_tests(){
    List L;
    vector<string> v = {"chicago", "is", "located", "in", "northeastern", "illinois",
                                  "on", "the", "southwestern", "shores", "of", "freshwater", "lake",
                                  "michigan", "and", "it", "is", "the", "principal", "city", "in",
                                  "the", "chicago", "metropolitan", "area", "situated", "in", "both",
                                  "the", "midwestern", "united", "states", "and", "the", "great",
                                  "lakes", "region"};
    L.generate_list(v);
//    L.print();
    cout << std::fixed << std::setprecision(3);
//    L.prioritize_list();
//    L.print();
//    std::cout << "-------------------" << std::endl;
    L.delete_string("the");
//    L.print();
//    std::cout << "-------------------" << std::endl;
}


int main() {
    dequeue_tests();
    stack_tests();
    //cout << collatz(36) << endl;
    //cout << r_add(6, 7) << endl;
    //cout << r_palindrome("Hello") << endl;
    D_L_List_tests();
   // cout << t_fib(4, 0, 1) << endl;

    string s = ("a-b*c+d-e/f");
    // Function call
    infixToPrefix(s);
    vector<int> a = {3, 5, 7, 9, 2, 5, 3, 8, 4, 7, 5, 3, 8, 6, 3, 0, 2,37};
    quick_sort(a);


    return 0;
}
