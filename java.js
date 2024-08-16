def calculate_rectangle_area(width, height):
    return width * height

def calculate_rectangle_perimeter(width, height):
    return 2 * (width + height)

def calculate_square_area(side_length):
    return side_length ** 2

def calculate_square_perimeter(side_length):
    return 4 * side_length

def main():
    shape = input("Enter 'rectangle' or 'square': ").lower()

    if shape == 'rectangle':
        width = float(input("Enter the width of the rectangle: "))
        height = float(input("Enter the height of the rectangle: "))
        area = calculate_rectangle_area(width, height)
        perimeter = calculate_rectangle_perimeter(width, height)
    elif shape == 'square':
        side_length = float(input("Enter the side length of the square: "))
        area = calculate_square_area(side_length)
        perimeter = calculate_square_perimeter(side_length)
    else:
        print("Invalid shape. Please enter 'rectangle' or 'square'.")
        return

    print(f"Area: {area:.2f}")
    print(f"Perimeter: {perimeter:.2f}")

if __name__ == "__main__":
    main()
