import numpy as np
import math

class Quadratic(object):
    def __init__(self, coef_list):
        self.coef_list = coef_list
        self.A = coef_list[0]
        self.B = coef_list[1]
        self.C = coef_list[2]
        self.my_quad = np.poly1d(self.coef_list)

    def __str__(self):
        return str(self.A)+"x^2 + "+str(self.B)+"x + "+str(self.C)

    def roots(self):
        # Fist we calculate the discriminant to figure out how many
        # roots and if they are complex or not
        discr = self.B**2 - 4*self.A*self.C
        if discr >0:
            # 2 solutions (real)
            rootA = -self.B+math.sqrt(discr)
            root1 = rootA/2*self.A
            rootB = -self.B-math.sqrt(discr)
            root2 = rootB/2*self.A
            return [str(round(root1,5))+"+ 0i",
                    str(round(root2,5))+"- 0i"]
        elif discr == 0:
            # 1 solution (real) (2 equivalent solutions really)
            root1 = -(self.B)/2*self.A
            return [str(round(root1, 5))+"+ 0i",
                    str(round(root1, 5))+"- 0i"]
        else:
            # 2 complex roots if discriminant < 0
            root_A = round(-(self.B)/(2*self.A), 5)
            root_B = round((math.sqrt(-discr))/(2*self.A), 5)

            return [str(root_A)+"+"+str(root_B)+"i",
                    str(root_A)+"-"+str(root_B)+"i"]

    def vertex(self):
        # Vertex formula = x=-B/2*A, then plug that value into our
        # quadratic(numpy poly1d object) to get the y value of the
        # vertex!
        vX = (-(self.B))/(2*self.A)
        vY = self.my_quad(vX)
        return round(vX, 5), round(vY, 5)

    def derivative(self):
        # Since we have a numpy poly1d object, we can use the methods
        # within that class to calculate the derivative and integral.
        return np.polyder(self.my_quad)

    def integral(self, a, b):
        integ = np.polyint(self.my_quad)
        return round(integ(b)-integ(a), 5)

    def __add__(self, other):
        # Adding quadratics, we simply add the coefficients
        coeffs = [self.A+other.A, self.B+other.B, self.C+other.C]
        return Quadratic(coeffs)

    def __mul__(self, n):
        # Here we will distribute our integer n to the coefficients
        coeffs = [self.A*n, self.B*n, self.C*n]
        return Quadratic(coeffs)

    def larger_area(self, other, a, b):
        # The area is simply the integral of the function which we
        # have already made a method for, so we just need to compare
        # the two and print the larger one.
        A_1 = self.integral(a, b)
        A_2 = other.integral(a, b)
        if A_1 > A_2:
            return self.my_quad
        elif A_1 < A_2:
            return other.my_quad
        else:
            return "The areas are equivalent."

def main():
    P = Quadratic([3, -7, 5])
    Q = Quadratic([1, 8, -3])
    R = Quadratic([1, 0, 0])
    print(P.larger_area(R, -5, 5))

main()