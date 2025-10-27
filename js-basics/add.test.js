function add(a, b) {  // Line 1: Test function. Why: Demo. How: Simple add. Pitfall: No export needed for local test.

    return a + b;  // Line 2: Return sum. Why: Output. How: +. Pitfall: String concat if args strings.

}  // Line 3: Closes function.

test('adds 1 + 2 to equal 3', () => {  // Line 4: Test case. Why: Specific check. How: test(name, fn). Pitfall: No fn = no run. TOP: Simple tests for functions.

    expect(add(1, 2)).toBe(3);  // Line 5: Assertion. Why: Verify. How: expect(actual).toBe(expected). Pitfall: toEqual for objects. TOP: toBe for numbers.

});  // Line 6: Closes test.