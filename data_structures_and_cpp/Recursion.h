//RECURSION_H
#ifndef RECURSION_H
#define RECURSION_H

//memoization, tail recursion, recursion


int collatz(int input){
    //Base Case
    if(input == 1){
        return input;
    } else if (input %2 == 0){
        return collatz(input/2);
    } else {
        return collatz(3*input+1);
    }
} // end recursive collatz

//recursive integer addition
int r_add(int a, int b){
    if(a == 0)
        return b;
    else
        return r_add(a-1, b)+1;
}

//recursive palindrome check
bool r_palindrome(std::string input){
    if(input.size() <= 1)
        return true;
    else if (input[0] != input[input.size()-1])
        return false;
    else
        return r_palindrome(input.substr(1,input.size()-2));
}

// Recursive merge sort:
// let data denot a list of values to be sorted:
/*            1. find the index of the middle element
            2. sort up to the middle
            3. sort the elements after the middle
            4. merge the left and right sublists

            def recmerge sort(data):
                if len data <= 1:
                    return data
                else:
                    middle = len(data)+1/2
                    left = recmerge sort(left side)
                    right = recmerge sort(right side)
                    return merge(left, right)

    The merge will sort the individual nodes of the list.



            */

// tail recursion

int t_fib(int n, int a0 = 0, int a1 = 1){
    if(n == 0){
        return a0;
    } else if(n == 1){
        return a1;
    } else return t_fib(n-1, a1, a0+a1);
}

// memoization
//  store already computed values in a container
//  initialize our container with values equivalent to n,
//  if we encounter our value just return it from the container

#endif //RECURSION_H
