# Josh Pahkala; jpahka2@uic.edu
# I hereby attest that I have adhered to the rules for quizzes and
# projects as well as UIC's Academic Integrity standards.
# Signed: [josh pahkala]
import math


class Bubble:
    def __init__(self, a, b, r):
        # a, b, and r represent themselves
        self.a = a
        self.b = b
        self.r = r

    def area(self):
        # uses pi from math module to calculate area of circle based
        # on the given radius.
        return math.pi * (float(self.r) ** 2)

    def contains_point(self, x, y):
        # If the given x & y fulfill the equation, they are on the
        # circle, otherwise returns false.
        if (x - self.a) ** 2 + (y - self.b) ** 2 == self.r ** 2:
            print("The given point is in this circle:")
            return True
        else:
            print("The given point is not in this circle:")
            # print("(x - a)^2 + (y - b)^2 =", (x-float(self.a)**2) +
            #       (y-float(self.b)**2))
            # print("r^2", self.r**2)
            return False

    def __repr__(self):
        # print a representation of the equation for the circle based
        # on the paramaters of the object.
        return "(x - " + str(self.a) + ")^2 + (y - " + str(
            self.b) + ")^2 = " + str(self.r) + "^2"

    def __add__(self, other):
        a = (self.a + other.a) / 2
        b = (self.b + other.b) / 2
        area = self.area() + other.area()
        # new radius is derived from the combined area of the two
        # objects being added together
        rad = math.sqrt(area / math.pi)
        return Bubble(a, b, rad)


class BubbleCollection:
    def __init__(self, bubble_list):
        self.bubble_list = bubble_list

    def contains_point(self, x, y):
        bub_count = len(self.bubble_list)
        for i in range(bub_count):
            # for each item in the list of bubbles, this uses the
            # contains_point method to check the points against
            # the equation for the bubble, using the method from
            # the Bubble class.
            self.bubble_list[i].contains_point(x, y)
            print(self.bubble_list[i])

    def combine(self):
        bub_count = len(self.bubble_list)
        # We need an initial bubble to add to
        init_bub = self.bubble_list[0]
        # Adds the subsequent bubbles from the list to the initial bub.
        for i in range(bub_count - 1):
            init_bub += self.bubble_list[i + 1]
        # Returns the newly created bub that is all bubs in the
        # collection added together

        return init_bub
