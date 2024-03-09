#ifndef IN_PRE_POST_FIX_H
#define IN_PRE_POST_FIX_H

#include <stack>

// Function to check if the character is an operator
bool isOperator(char c)
{
    return (!isalpha(c) && !isdigit(c));
}

// Function to get the priority of operators
int getPriority(char C)
{
    if (C == '-' || C == '+')
        return 1;
    else if (C == '*' || C == '/')
        return 2;
    else if (C == '^')
        return 3;
    return 0;
}

// Function to convert the infix expression to postfix

std::string infixToPostfix(std::string infix)
{
    infix = '(' + infix + ')';
    int l = infix.size();
    std::stack<char> char_stack;
    std::string output;

    for (int i = 0; i < l; i++) {

        // If the scanned character is an
        // operand, add it to output.
        if (isalpha(infix[i]) || isdigit(infix[i]))
            output += infix[i];

            // If the scanned character is left parenthesis
            // push it to the stack.
        else if (infix[i] == '(')
            char_stack.push('(');

            // If the scanned character is a right parenthesis
            //  pop and output from the stack
            // until a left parenthesis is encountered.
        else if (infix[i] == ')') {
            while (char_stack.top() != '(') {
                output += char_stack.top();
                char_stack.pop();
            }

            // Remove left parenthesis from the stack
            char_stack.pop();
        }

            // Operator found
        else {
            if (isOperator(char_stack.top())) {
                if (infix[i] == '^') {
                    while (
                            getPriority(infix[i])
                            <= getPriority(char_stack.top())) {
                        output += char_stack.top();
                        char_stack.pop();
                    }
                }
                else {
                    while (
                            getPriority(infix[i])
                            < getPriority(char_stack.top())) {
                        output += char_stack.top();
                        char_stack.pop();
                    }
                }

                // Push current Operator on stack
                char_stack.push(infix[i]);
            }
        }
    }
    while (!char_stack.empty()) {
        output += char_stack.top();
        char_stack.pop();
    }
    return output;
}

// Function to convert infix to prefix notation
std::string infixToPrefix(std::string infix)
{
    // Reverse String and replace ( with ) and vice versa
    // Get Postfix
    // Reverse Postfix
    int l = infix.size();

    // Reverse infix
    reverse(infix.begin(), infix.end());

    // Replace ( with ) and vice versa
    for (int i = 0; i < l; i++) {

        if (infix[i] == '(') {
            infix[i] = ')';
        }
        else if (infix[i] == ')') {
            infix[i] = '(';
        }
    }

    std::string prefix = infixToPostfix(infix);

    // Reverse postfix
    reverse(prefix.begin(), prefix.end());

    return prefix;
}

#endif //IN_PRE_POST_FIX_H
