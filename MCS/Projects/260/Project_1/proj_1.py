# josh pahkala
# jpahka2@uic.edu
# I hereby attest that I have adhered to the rules for quizzes and
# projects as well as UIC’s Academic Integrity standards.
# Signed: [josh t pahkala]

# First Action
'''
User inputted x will be converted into float when plugged into the
equation, a following print function will output that y-value rounded
to 3 decimal places.
'''
x = input("Please provide a value for x: ")
y = ((((float(x)**2)+9)**0.5)-7)/((2**float(x)+5))
print("The value of y is equal to : ", (round(y, 3)))
print('-' * 72)

# Second Action
'''
Method <.count()> is applied to user inputted string to calculate total
of e's and 4's. The e_4_percent var calculates percentage e's and 4's 
are of the entire inputted string.
'''
input_string = input("Please enter a string: ")
num_e_4 = (input_string.count('e'))+input_string.count('4')
e_4_percent = (100*(num_e_4/len(input_string)))
print("Percentage of e's and 4's in the string <", input_string, ">:",
      round(e_4_percent, 1), "%")
print('-' * 72)

# Third Action
'''
num_GB is quotient of total bits and bits per GB, num_MB is quotient of
remainder from num_GB and bits per MB, num_KB is quotient of total bits
minus int of num_GB + num_MB (both in bits) and num. of bits per KB
'''
total_bits = input("Please enter a number of bits: ")
num_GB = float(total_bits) / (8*(10**9))
num_MB = (float(total_bits)%(8*(10**9))) / (8*(10**6))
num_KB = (float(total_bits) - (int(num_GB)*(8*(10**9)))
          - (int(num_MB)*(8*(10**6))))/8000
print("The number of bits given is equal to", int(num_GB),
      " gigabyte(s)", int(num_MB), " megabyte(s)", int(num_KB),
      " kilobyte(s)\n (Rounded down to nearest kilobyte)")

