cmake_minimum_required(VERSION 3.26)
project(data_structures_and_cpp)

set(CMAKE_CXX_STANDARD 17)

add_executable(data_structures_and_cpp main.cpp
        Structures/Stack.h
        Concepts/Recursion.h
        Concepts/In_pre_post_fix.h
        Sorting/DLL_w_merge.h
        Sorting/QuickSortRecur.h)
