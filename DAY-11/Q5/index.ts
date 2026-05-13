// Q5> Template Literal Types for CSS
// Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
// Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.
type Unit = 'px' | 'rem' | 'vh';
type NumberString = `${number}`;
type MarginValue = `${NumberString}${Unit}`;

// Valid examples
const m1: MarginValue = "10px";
const m2: MarginValue = "2rem";
const m3: MarginValue = "100vh";

console.log(m1);
console.log(m2);
console.log(m3);

// Invalid examples - these will cause compile errors
// const m4: MarginValue = "10%";      // Error: not px, rem, or vh
// const m5: MarginValue = "px";       // Error: missing number
// const m6: MarginValue = "10";       // Error: missing unit
// const m7: MarginValue = "abcpx";    // Error: number must be numeric