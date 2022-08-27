"""POLYNOMIAL GRAPHING WINDOW VISUALIZER README"""
MCS Project 5
Josh Pahkala
Polynomial Visualiser

Initial Proposal:
This program will be a tkinter window that allows us to visualise the graph
of a polynomial, and has options to allow me to quickly graph a lot of
polynomials.

Description:
This program takes as input a list of coefficients and a range of x-values
and uses that information to show and plot a polynomial with the option to
plot the derivative of that polynomial as well. From here, the built in
matplotlib functionality allows you to change your view and save a .png
image of the graph you have created.


Program Instructions:

Quick version:
    -You must know the equation for the polynomial you wish to graph

    -Give coefficients of polynomial is descending order from highest degree
    term down to the constant (0 if degree term isn't in your polynomial).

    -Give start and stop X-values (This will be the domain of the
    polynomial that is graphed).

    -Click visualize to see the equation being graphed and its derivative.

    -Click graph to open a new window which contains the plotted graph
    and optional derivative.

Long Version:
Upon opening this program you will see that it requires user input to
fully function. The "Give Coefficients" entry box is how you create your
polynomial. This program requires that you enter as many coefficients as
the degree of your polynomial plus one. Starting with the highest degree term,
give the coefficient of that term followed by a comma, then the coefficient of
the term of one less degree followed by a comma and so on until you have
entered the constant. Please give a zero coefficient for any degree terms
of a constant that are not in your polynomial. In order to graph you will also
need to give a range of x values separated by a comma like -100, 100 or 0, 16.
After you have given coefficients you can now click the view polynomial button
to see exactly what is being graphed. It is not necessary to view your
polynomial before graphing but is recommended to confirm your polynomial's
equation. We will also be able to see the equation for the derivative of our
polynomial at this time. If you want to include that on your graph please ensure
 the "Check me to show derivative on graph" checkbutton is checked. Once you are
viewing the graph you have some builtin matplotlib options that allow you to
zoom in, move around and save your graph to your computer. To make another graph
 you can simply exit the current graph, refactor your coefficients and/or
 x-values, then click graph again!

Testing:
The self testing done was accomplished by inputting from 1 to 15 coefficients of
positive or negative integer values and comparing to a graph of the same
equation and derivative using a graphing calculator. The biggest limitation of
this application is that for extremely large graphs like x^2 + 55x +2 it goes
larger than the scope of my plot, and is difficult to visualise.









