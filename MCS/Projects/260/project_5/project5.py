"""Polynomial Graphing Window w/ Derivative"""
# MCS 260 Spring 2021 Project 5
# Josh Pahkala
# Declaration: I am sole author of this program I am submitting and I
# followed the rules from the course syllabus in preparing it.

from tkinter import *
import matplotlib.pyplot as plt
import numpy as np


class Application:
    def __init__(self, myParent):
        self.mainContainer = Frame(myParent)
        self.mainContainer.pack()

        # the specifications of the frame that holds the widgets:
        myParent.geometry('675x350')
        myParent.title('Polynomial Graphing')

        self.ent_coeffs = StringVar()
        self.x_values = StringVar()
        self.derv_check = BooleanVar()

        # the widgets themselves:

        # Button 1 (to graph)
        self.graph_button = Button(self.mainContainer,
                                   command=self.graph_buttonClick)
        self.graph_button["text"] = "Graph Polynomial"
        self.graph_button["foreground"] = "green"
        self.graph_button.grid(row=2, column=1)

        # Button 2 (to view polynomial)
        self.visualize_button = Button(self.mainContainer,
                                       command=self.visualize_buttonClick)
        self.visualize_button["text"] = "View Polynomial"
        self.visualize_button["foreground"] = "blue"
        self.visualize_button.grid(row=1, column=1)

        # Entry 1 (for coefficients of polynomial)
        self.coeff_entry = Entry(self.mainContainer)
        self.coeff_entry["textvariable"] = self.ent_coeffs
        self.coeff_entry.insert(0, 'Give coefficients')
        self.coeff_entry.grid(row=1, column=0)

        # Entry 2 (x-values to graph)
        self.x_values_entry = Entry(self.mainContainer)
        self.x_values_entry["textvariable"] = self.x_values
        self.x_values_entry.insert(0, 'Give start/stop x-values')
        self.x_values_entry.grid(row=2, column=0)

        # Derivative Checkbutton (to also plot derivative)
        self.deriv_option = Checkbutton(self.mainContainer)
        self.deriv_option['text'] = 'Check me to show ' \
                                    '\nderivative on graph'
        self.deriv_option['variable'] = self.derv_check
        self.deriv_option.grid(row=3, column=1)

        # Textbox widget for printing the poly/derivative:
        self.printed_poly = Text(self.mainContainer)
        self.printed_poly['width'] = 70
        self.printed_poly['height'] = 15
        self.printed_poly.grid(row=3, column=0)


    def graph_buttonClick(self):
        # When graph is clicked: gets, separates, and changes the
        # type of our entered text to become usable by the program

        # our x-values:
        try:
            x_in = self.x_values.get().split(',')
            x_as_list = list(map(float, x_in))

            # The list of coefficients:
            coeffs = self.ent_coeffs.get().split(',')
            coeffs_list = list(coeffs)
            coeffs_float_convert = list(map(float, coeffs_list))

            # Here we use numpy's poly1d method to get a poly1d object
            # from our list of coefficients:
            init_polynomial = np.poly1d(coeffs_float_convert)

            # We use numpy object poly1d's method .deriv() to get the
            # derivative of our polynomial:
            init_derivative = init_polynomial.deriv()
            x_for_derivative = np.arange(x_as_list[0], x_as_list[1])

            # this will be what gives us the y values for our derivative
            derivative = init_derivative(x_for_derivative)

            # My polynomial y value calculator requires coefficients
            # in reverse ascending order by degree of term, so our
            # list must be reversed:
            coeffs_final = coeffs_list[::-1]
            x_for_poly = np.linspace(x_as_list[0], x_as_list[1], 10000)
            fig, ax = plt.subplots()

            # Here we draw axes and grids on our graph to make it more
            # readable.
            plt.axvline(color="black")
            plt.axhline(color="black")
            plt.title(init_polynomial, fontdict={'ha':'left',
                                            'stretch':'expanded'},
                        loc='left')
            plt.grid()

            if not self.derv_check.get():
                # If our checkbutton is unchecked:
                plt.plot(x_for_poly,
                         self.polynomial(x_for_poly, coeffs_final),
                         "blue")
                ax.set_ylim([-125, 125])
                ax.set_xlim([-125, 125])
                plt.show()

            elif self.derv_check.get():
                # Else if our checkbutton is checked:
                plt.plot(x_for_poly,
                         self.polynomial(x_for_poly, coeffs_final),
                         "blue")
                plt.plot(x_for_derivative, derivative, "red")
                ax.set_ylim([-150, 150])
                ax.set_xlim([-150, 150])
                plt.show()

        except ValueError:
            # This except block gives suggestions to the user for the
            # most common errors that can be encountered.
            self.printed_poly.delete(1.0, "end")
            self.printed_poly.insert(1.0, "Please ensure you have "
                                          "entered the values \n"
                                          "separated by commas with"
                                          " no "
                                          "trailing commas \n and that "
                                          "you have given only "
                                          "integers for coefficients.\n"
                                          "You must also ensure you "
                                          "give a start and stop \n"
                                          "value for the range of "
                                          "x-values you wish to plot.")

    def visualize_buttonClick(self):
        # This button will display on the window a more readable
        # representation of our polynomial, with it's derivative.
        try:
            coeffs = self.ent_coeffs.get().split(',')
            coeffs_list = list(map(int, coeffs))

            poly_representation = np.poly1d(coeffs_list)
            poly_derivative = poly_representation.deriv()
            # we have to clear the textbox otherwise our entries will all
            # stack on top of each other.
            self.printed_poly.delete(1.0, "end")
            self.printed_poly.insert(1.0, f"Polynomial (blue on graph):"
                                          f"\n{poly_representation}\n\n"
                                          f"Derivative (red on graph): "
                                          f"\n {poly_derivative}")
        except ValueError:
            # This except block gives suggestions to the user for the
            # most common errors that can be encountered.
            self.printed_poly.delete(1.0, "end")
            self.printed_poly.insert(1.0, "Please ensure you have "
                                          "entered the values \n"
                                          "separated by commas with"
                                          " no "
                                          "trailing commas \n and that "
                                          "you have given only "
                                          "integers for coefficients.\n"
                                          "You must also ensure you "
                                          "give a start and stop \n"
                                          "value for the range of "
                                          "x-values you wish to plot.")

    # Here is our method that takes as input an x value and a
    # list of coefficients and calculates our polynomials value for
    # plotting.

    def polynomial(self, x, mylist):
        coeffs_poly = mylist
        number_terms = len(coeffs_poly)
        y = 0
        for i in range(number_terms):
            y += int(coeffs_poly[i]) * (x ** i)
        return y


root = Tk()
# Generates an instance of our tkinter window class (Application) and
# keeps it running until we close the window.
myapp = Application(root)
root.mainloop()
