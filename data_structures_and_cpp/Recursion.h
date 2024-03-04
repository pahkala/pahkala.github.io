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

#endif //RECURSION_H
