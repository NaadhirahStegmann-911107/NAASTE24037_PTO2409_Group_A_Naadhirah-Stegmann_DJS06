// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. ForEach Basics
// Log each name
names.forEach(name => console.log(name));
// Log each province
provinces.forEach(province => console.log(province));
//Log name with matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`)
});

// 2. Uppercase Transformation
//Create a new array of provinces in uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths
//Create an array of name lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
// Sort provinces alphabetically without mutuating original array
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape
//Filter out provinces with "Cape" and log count
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

// 6 Finding 'S'
//Create boolean array for names containing 'S'
const hasS = names.map(name => name.toLowerCase().split('').some(char => char ==='s'));
console.log(hasS);

// 7. Creating Object Mapping
// Map names to provinces using reduce
const nameProvinceMap = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(nameProvinceMap);

//Advanced Exercises (Single console.log)

// 8. Log Products
// Log all product names
console.log(products.map(item => item.product));

// 9. Filter by Name Length
// Filter products ith names <= 5 characters
console.log(products.filter(item => item.product.length <= 5).map(item => item.product));

// 10. Price Manipulation
// Filter valid prices, convert to numbers, and sum
console.log(
  products
    .filter(item => item.price !== '' && item.price !== ' ')
    .map(item => Number(item.price))
    .reduce((sum, price) => sum + price, 0)
);

// 11. Cocateenate Product Names
// Concatenate product names into s a single string
console.log(products.reduce((str, item, index) => str + (index ? ', ' : '')+ item.product, ''));

// 12. Find Extremes in Prices
// find the highest and lowest prices
console.log(
  (() => {
    const validPrices = products
      .filter(item => item.price !== '' && item.price !== ' ')
      .map(item => ({ ...item, price: Number(item.price) }));
    const { min, max } = validPrices.reduce((acc, item) => ({
      min: Math.min(acc.min, item.price),
      max: Math.max(acc.max, item.price)
    }),
    { min: Infinity, max: -Infinity}
  );
  const highest = validPrices.find(item =>item.price === max).product;
  const lowest = validPrices.find(item => item.price === min).product;
  return `Highest: ${highest}. Lowest: ${lowest}.`;
})()
);

// 13. Object Transformation
// Transform product to objects with name and cost
console.log(
  products.reduce((acc, item) => {
    acc.push({ name: item.product, cost: item.price });
    return acc;
  }, [])
);

