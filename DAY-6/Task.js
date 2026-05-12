// ### QUESTION  1: 
// The Flight Booking Data Cleaner
// **Problem Statement:**
// You are given a list of raw flight strings from a travel agency's database. The data is unformatted and needs to be standardized into objects for a front-end display.
// **Requirements:**
// 1. **Parsing:** Iterate through an array of strings formatted as: "CITY_A-CITY_B:PRICE".
// 2. **Object Creation:** Convert each string into an object with three properties: from, to, and price.
// 3. **Validation & Coercion:**
//   * The price must be explicitly converted to a **Number**.
//   * If the price is not a valid number or is missing, set the price to 0.
// 4. **Filtering:** Create a new array containing only flights where the price is between **$100 and $500** (inclusive).
// 5. **Sorting:** Sort the final array of objects by price in **ascending order** (cheapest first).
// 6. **Return:** Return the final array as a **JSON string**.
// **Input Data Example:**
// ```javascript
// const rawFlights = [
//  "London-Paris:150",
//  "New York-Tokyo:invalid",
//  "Dubai-Mumbai:450",
//  "Berlin-Rome:95"
// ];

// ### Instructions for Candidates:
// * Use const and let appropriately.
// * Ensure the code is clean and handles potential null or undefined values gracefully.
// * The final output for Question 1 must be a valid JSON string.
function cleanFlightData(rawFlights) {
  // Handle null/undefined input
  if (!rawFlights || !Array.isArray(rawFlights)) {
    return JSON.stringify([]);
  }

  const cleanedFlights = rawFlights
    .map(flightStr => {
      // 1. Parsing: "CITY_A-CITY_B:PRICE"
      const [route, priceStr] = flightStr.split(':');
      const [from, to] = route ? route.split('-') : [undefined, undefined];
      
      // 3. Validation & Coercion
      const priceNum = Number(priceStr);
      const price = Number.isFinite(priceNum) ? priceNum : 0;

      // 2. Object Creation
      return { from, to, price };
      
    })
    // 4. Filtering: price between $100 and $500 inclusive
    .filter(flight => flight.price >= 100 && flight.price <= 500)
    // 5. Sorting: ascending by price
    .sort((a, b) => a.price - b.price);

  // 6. Return: JSON string
  return JSON.stringify(cleanedFlights);
}
// Test with your example
const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid", 
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];
console.log(cleanFlightData(rawFlights));

// OUTPUT: [{"from":"London","to":"Paris","price":150},{"from":"Dubai","to":"Mumbai","price":450}]

// --------------------------------------------------------------------------------------------------

// ### QUESTION  2: 
// The E-Commerce Discount Applicator
// **Problem Statement:**
// You are building a promo-code system for a shopping cart. You need to write a function applyPromo(cart, promoCallback) that calculates which items qualify for a specific discount.
// **Requirements:**
// 1. **The Pipeline:** The applyPromo function should accept an array of product objects and a callback function.
// 2. **The Callback (isEligible):** You must define a separate callback function to be passed in. This callback should return true only if a product belongs to the **"Electronics"** category **AND** has a price greater than **$200**.
// 3. **Transformation:**
//   * Use the callback to identify eligible items.
//   * For those items, reduce their price by **10%**.
//   * Add a new property to **all** items in the array called isDiscounted (set to true for eligible items and false for others).
// 4. **Final Summary:** Once the processing is complete, use a **Template Literal** to log to the console: "Promotion applied! [X] items were discounted for a total saving of $[Y]."
// 5. **Delayed Return:** Wrap the final return statement in a setTimeout of **1000ms** to simulate a server calculation, returning the updated cart array.
// **Input Data Example:**
// ```javascript
// const cart = [
//  { name: "Smartphone", price: 800, category: "Electronics" },
//  { name: "Toaster", price: 50, category: "Home" },
//  { name: "Headphones", price: 250, category: "Electronics" },
//  { name: "Monitor", price: 150, category: "Electronics" }
// ];
// ```
// ### Instructions for Candidates:
// * Use const and let appropriately.
// * Ensure the code is clean and handles potential null or undefined values gracefully.

const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

// Step 2: The Callback - isEligible
const isEligible = (product) => {
  // Handle null/undefined safely
  if (!product) return false;
  return product.category === "Electronics" && product.price > 200;
};

// Step 1: The Pipeline function
function applyPromo(cart, promoCallback) {
  // Handle null/undefined cart
  if (!cart) cart = [];

  let discountedItems = 0;
  let totalSaving = 0;

  // Step 3: Transformation
  const newCart = cart.map(item => {
    if (promoCallback(item)) {
      // Eligible: reduce price by 10% and mark discounted
      const discount = item.price * 0.10;
      totalSaving += discount;
      discountedItems++;
      
      return {
        ...item,
        price: item.price - discount,
        isDiscounted: true
      };
    } else {
      // Not eligible: just add isDiscounted false
      return {
        ...item,
        isDiscounted: false
      };
    }
  });

  // Step 4: Final Summary with Template Literal
  console.log(`Promotion applied! ${discountedItems} items were discounted for a total saving of $${totalSaving}.`);

  // Step 5: Delayed Return with setTimeout 1000ms
  setTimeout(() => {
    console.log("Updated cart:", newCart);
  }, 1000);
}
// Run it
applyPromo(cart, isEligible);

// OUTPUT: 
// Promotion applied! 2 items were discounted for a total saving of $105.
// Updated cart: [
//   {
//     name: 'Smartphone',
//     price: 720,
//     category: 'Electronics',
//     isDiscounted: true
//   },
//   { name: 'Toaster', price: 50, category: 'Home', isDiscounted: false },
//   {
//     name: 'Headphones',
//     price: 225,
//     category: 'Electronics',
//     isDiscounted: true
//   },
//   {
//     name: 'Monitor',
//     price: 150,
//     category: 'Electronics',
//     isDiscounted: false
//   }
// ]

// -------------------------------------------------------------------------------------------

// ### QUESTION 3:
//  The Movie Stream Analytics
// **Problem Statement:**
// You are given an array of raw strings representing movie data from a streaming platform. You need to convert this raw data into a structured format to identify top-performing content.
// **Requirements:**
// 1. Parse strings formatted as: "MOVIE_NAME|GENRE|VIEW_COUNT".
// 2. Convert each string into an object with properties for name, genre, and views.
// 3. Ensure the views property is an actual Number. If the views data is corrupted or not a number, default it to 0.
// 4. Create a new list containing only movies from the "Action" or "Sci-Fi" genres with more than 5,000 views.
// 5. Sort the final list by views in descending order (highest views first).
// 6. Return the final array as a JSON string.
// **Input Data Example:**
// ```javascript
// const rawMovies = [
//  "Inception|Sci-Fi|12000",
//  "The Lion King|Animation|8000",
//  "Mad Max|Action|invalid",
//  "The Matrix|Sci-Fi|15000",
//  "Gladiator|Action|4500"
// ];
// ```

const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];

function processMovies(rawData) {
  // Step 1, 2, 3: Parse strings -> objects, convert views to Number, default to 0 if corrupted
  const movies = rawData.map(str => {
    const [name, genre, viewStr] = str.split("|");
    const views = Number(viewStr);
    
    return {
      name: name,
      genre: genre,
      views: isNaN(views) ? 0 : views  // Step 3: default to 0 if not a number
    };
  });

  // Step 4: Filter for Action or Sci-Fi AND views > 5000
  const topMovies = movies.filter(movie => {
    return (movie.genre === "Action" || movie.genre === "Sci-Fi") && movie.views > 5000;
  });

  // Step 5: Sort by views descending - highest first
  topMovies.sort((a, b) => b.views - a.views);

  // Step 6: Return as JSON string
  return JSON.stringify(topMovies);
}

const result = processMovies(rawMovies);
console.log(result);

// OUTPUT: [{"name":"The Matrix","genre":"Sci-Fi","views":15000},{"name":"Inception","genre":"Sci-Fi","views":12000}]

// -----------------------------------------------------------------------------------------------

// // ### QUESTION 4: 
// The Automated Payroll Processor
// **Problem Statement:**
// You are developing a payroll system. You need to write a function calculatePayroll(employees, taxCallback) that applies tax deductions and calculates final payouts.
// **Requirements:**
// 1. Create a callback function (taxLogic) that determines the tax rate: If a salary is > 5000, the tax is 20%. Otherwise, the tax is 10%.
// 2. The calculatePayroll function should use this callback to process each employee.
// 3. Calculate the netSalary (Salary minus Tax). Add a property status to each employee: If the net salary is > 4000, set status to "Premium", otherwise set it to "Standard".
// 4. Use a Template Literal to log: "Payroll Processed: Total Net Payout is $[Z] for [X] employees."
// 5. The function must use setTimeout to wait 2000ms before returning the final array of processed employee objects.
// **Input Data Example:**
// ```javascript
// const employees = [
//  { id: 101, name: "Alice", salary: 6000 },
//  { id: 102, name: "Bob", salary: 3500 },
//  { id: 103, name: "Charlie", salary: 5200 }
// ];
// ```

const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

// 1. Callback function - taxLogic
const taxLogic = (salary) => {
  if (!salary || typeof salary !== 'number') return 0;
  return salary > 5000 ? 0.20 : 0.10; // 20% if > 5000, else 10%
};

// 2. calculatePayroll function uses the callback
function calculatePayroll(employees, taxCallback) {
  if (!Array.isArray(employees)) employees = [];

  let totalNetPayout = 0;

  // 3. Process each employee: calc netSalary + add status
  const processedEmployees = employees.map(emp => {
    if (!emp || typeof emp !== 'object') {
      return { ...emp, netSalary: 0, status: "Standard" };
    }

    const taxRate = taxCallback(emp.salary);
    const taxAmount = emp.salary * taxRate;
    const netSalary = emp.salary - taxAmount;
    
    totalNetPayout += netSalary;

    return {
      ...emp,
      netSalary: Number(netSalary.toFixed(2)),
      status: netSalary > 4000 ? "Premium" : "Standard" // > 4000 = Premium
    };
  });

  // 4. Template Literal log
  console.log(`Payroll Processed: Total Net Payout is $${totalNetPayout.toFixed(2)} for ${processedEmployees.length} employees.`);

  // 5. setTimeout 2000ms before returning final array
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(processedEmployees);
    }, 2000);
  });
}

// Run it
calculatePayroll(employees, taxLogic).then(result => {
console.log("Final payroll:", result);
});

// OUTPUT:
// Payroll Processed: Total Net Payout is $12160.00 for 3 employees.
// Final payroll: [
//   { id: 101, name: "Alice", salary: 6000, netSalary: 4800, status: "Premium" },
//   { id: 102, name: "Bob", salary: 3500, netSalary: 3150, status: "Standard" },
//   { id: 103, name: "Charlie", salary: 5200, netSalary: 4160, status: "Premium" }
// ]

