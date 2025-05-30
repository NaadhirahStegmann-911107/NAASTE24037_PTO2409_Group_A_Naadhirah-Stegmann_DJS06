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
