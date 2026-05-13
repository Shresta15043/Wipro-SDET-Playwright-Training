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

// 6. Conditional Types & the infer Keyword
// Scenario: You are working with a library that returns data wrapped in a Promise, and you need to extract the underlying type.
// Task: Create a utility type UnwrapPromise<T>.
//  It should check if T is a Promise. 
//  If it is, use the infer keyword to return the type the promise resolves to; otherwise, return T itself.

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type UsernameType = UnwrapPromise<Promise<string>>;
type EmailType = UnwrapPromise<Promise<string>>;
type LoginStatusType = UnwrapPromise<boolean>;

const username: UsernameType = "keerthana";
const email: EmailType = "keer@gmail.com";
const isLoggedIn: LoginStatusType = true;

console.log(username);
console.log(email);
console.log(isLoggedIn);


// 7. The Union Manipulation Puzzle
// Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
// Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
// Use Extract to create MouseEvents (only click and dbclick).
// Use Exclude to create NonFormEvents (everything except submit and reset).

type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';

type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;
type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;

const mouseEvents: MouseEvents = 'click';
const nonFormEvent: NonFormEvents = 'keypress';

console.log(mouseEvents);
console.log(nonFormEvent);

// 8. Async Higher-Order Function (HOF)
//  Scenario: You want to wrap any asynchronous function with a standard error logger. ● Task: Write a generic function safeExecute<T> 
// that takes an async function as an argument.
//  It should return a new function that, when called, executes the original function inside a try/catch block and returns null if it fails.

function safeExecute<Args extends any[], T>(asyncFnc: (...args: Args) => Promise<T>) {
    return async (...args: Args): Promise<T | null> => {
        try {
            return await asyncFnc(...args);
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

const info = async (id: number): Promise<string> => {
    if(id === -1) throw new Error("Invalid ID");
    return `Data for ID: ${id}`
}


async function dryRun() {
    const getData = safeExecute(info);
    const res = await getData(10);
    const res1 = await getData(0);
    const res2 = await getData(-1);
    console.log(res, res1, res2);
}

dryRun();