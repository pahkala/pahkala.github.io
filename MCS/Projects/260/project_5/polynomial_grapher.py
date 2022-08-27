"""Polynomial Graphing Window"""
# MCS 260 Spring 2021 Project 5
# Josh Pahkala
# Declaration: I am sole author of this program I am submitting and I
# followed the rules from the course syllabus in preparing it.

import tkinter as tk
import matplotlib.pyplot as plt
import numpy as np


class MainWindow(tk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.graphButton = tk.Button(self)
        self.xValEntry = tk.Entry(self)
        self.polEntry = tk.Entry(self)
        self.title = tk.Label(self)
        self.master = master
        self.master.geometry('650x200')
        self.master.polyEntry = tk.StringVar()
        self.master.xEntry = tk.StringVar()
        self.pack()
        self.create_widgets()

    def create_widgets(self):
        # Window title widget options
        self.title["text"] = "Polynomial Graphing Application"
        self.title.grid(row=0, column=1)

        # Entry box for polynomial widget
        self.polEntry["textvariable"] = self.master.polyEntry
        self.polEntry.insert(0, 'Polynomial coefficients.')
        self.polEntry.grid(row=1, column=0)

        # Entry box for range of x values to plot
        self.xValEntry["textvariable"] = self.master.xEntry
        self.xValEntry.insert(0, 'Range of x-values to plot.')
        self.xValEntry.grid(row=1, column=1)

        # Button to plot and show the graph
        self.graphButton["text"] = "Click to show graph."
        self.graphButton["command"] = self.makeGraph
        self.graphButton.grid(row=1, column=2)

        # Label to show the polynomial being graphed  # TO BE ADDED!!!!!

        # check button, when selected displays the derivative of the
        # polynomial on top of the graph.

    def makeGraph(self):
        # will pull from the entry boxes to create the graph
        xlist = self.xValEntry.get().split(",")
        coeffList = list(map(int, self.polEntry.get().split(",")))
        # ^ This converts the coefficients into a list
        x = np.linspace(xlist[0], xlist[1], 10000)
        plt.axvline(color="black")
        plt.axhline(color="black")
        plt.style.use('ggplot')
        plt.plot(x, polynomial(x, coeffList))
        plt.show()

def polynomial(x, mylist):
    # A polynomial is an expression of the form
    # A_0 + A_1*x + A_2*x^2 + .... + A_n*x^n
    lenCoeff = len(mylist)
    y = 0
    for i in range(lenCoeff):
        y += mylist[i] * x ** i
    return y


root = tk.Tk()
graph = MainWindow(master=root)
graph.mainloop()
