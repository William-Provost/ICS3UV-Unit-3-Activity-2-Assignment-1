// Author: William Provost
// Version: 1.0.0
// Date: 2025-11-10
// Fileoverview: This program will round off a set of numbers
// to a specific number of decimal places and display them
// using different field sizes.

package main

import "fmt"

func main() {
    // Constants
    const num1 = 8.5467
    const num2 = 9.6382
    const num3 = 18.5146
    const num4 = 125.496

    // Header for the output
    fmt.Println("Number Rounding Program")
    fmt.Println("------------------------")

    // Process and Output
    fmt.Printf("Original: %8.4f | Field size: 10 | 3 decimal places -> %10.3f\n", num1, num1)
    fmt.Printf("Original: %8.4f | Field size: 8  | 5 decimal places -> %8.5f\n", num2, num2)
    fmt.Printf("Original: %8.4f | Field size: 6  | 1 decimal place  -> %6.1f\n", num3, num3)
    fmt.Printf("Original: %8.4f | Field size: 3  | 1 decimal place  -> %3.1f\n", num4, num4)

    // Program end
    fmt.Println("\nDone.")
}

