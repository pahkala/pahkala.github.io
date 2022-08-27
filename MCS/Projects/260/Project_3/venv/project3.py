# Josh Pahkala, jpahka2@uic.eduu
# I hereby attest that I have adhered to the rules for quizzes and
# projects as well as UIC’s Academic Integrity standards.
# Signed: Josh pahkala

def func_1(filename):
    monthly_dict = {}  # dict. of the monthly data based on city.
    keys_list = []  # what will become keys in the dict.
    values_list = []  # what will become values in the dict.
    with open(filename, 'r') as in_filename:
        for line in in_filename:
            keys_list.append(line[0:37])
            values = line[51:123]
            value_spl = values.split()
            values_list.append(value_spl)
    # ^in the above code: the data file is read and divided into keys
    # and values. Then appended into corresponding lists.
    for city in range(1, len(keys_list)):
        new_key = keys_list[city]
        monthly_dict[new_key] = values_list[city]
    # ^iterating over the list of keys (as new_key), since the values
    # will have same index as keys, creates the dict where keys are
    # all city names (first 37 characters per line) and the values
    # are the temp for each month (characters indexed from 51:123) as
    # a list.
    return monthly_dict


def func_2(filename):
    avg_calc_start = func_1(filename)
    # ^ Starting with the dict from func_1
    avg_dict = {}
    # ^ what will be the returned dict with (city) keys, and
    # (yearly avg) for the values.
    for keys in avg_calc_start:
        list_sum = 0
        list_temps = avg_calc_start[keys]
        # ^ This will get the sum of all temps for the year

        for i in range(len(list_temps)):
            list_sum += int(list_temps[i])
        avg_dict[keys] = list_sum / len(
            list_temps)  # The average is the sum of the full years
        # temps divided by how  # many temps went into the sum.
    return avg_dict


def func_3(filename, o_filename):
    out_string = "City                                 Average\n"
    # Start with the string that will always be the same no matter
    # what the data is.
    avg_dictionary = func_2(filename)
    # use the dict from func_2 to get the avg. temps.
    for key in avg_dictionary:
        out_string += key + str(avg_dictionary[
                                    key]) + '\n'  # add a new string
        # on a new line to the out_string that  # contains the city
        # name and the avg. temp.
    with open(o_filename, 'w') as out_file:
        out_file.write(
            out_string)  # Finally, write that date to a new file
        # whose name is given  # in the function call.
