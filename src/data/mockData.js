export const mockData = [
  {
    id: 1,
    country: 'Canada',
    region: 'Ontario',
    city: 'Toronto',
    segment: 'Urban Professionals',
    ageGroup: '25-34',
    category: 'Electronics',
    product: 'Laptop',
    year: 2024,
    month: 'Jan',
    sales: 120000,
    population: 2930000,
    households: 1100000,
    avgIncome: 85000
  },
  {
    id: 2,
    country: 'Canada',
    region: 'Ontario',
    city: 'Toronto',
    segment: 'Urban Professionals',
    ageGroup: '35-44',
    category: 'Electronics',
    product: 'Phone',
    year: 2024,
    month: 'Jan',
    sales: 90000,
    population: 2100000,
    households: 900000,
    avgIncome: 92000
  },
  {
    id: 3,
    country: 'Canada',
    region: 'Ontario',
    city: 'Ottawa',
    segment: 'Families',
    ageGroup: '35-44',
    category: 'Home Goods',
    product: 'Furniture',
    year: 2024,
    month: 'Jan',
    sales: 65000,
    population: 994000,
    households: 420000,
    avgIncome: 78000
  },
  {
    id: 4,
    country: 'Canada',
    region: 'Quebec',
    city: 'Montreal',
    segment: 'Students',
    ageGroup: '18-24',
    category: 'Electronics',
    product: 'Tablet',
    year: 2024,
    month: 'Jan',
    sales: 48000,
    population: 1780000,
    households: 700000,
    avgIncome: 42000
  },
  {
    id: 5,
    country: 'Canada',
    region: 'British Columbia',
    city: 'Vancouver',
    segment: 'Urban Professionals',
    ageGroup: '25-34',
    category: 'Fitness',
    product: 'Wearables',
    year: 2024,
    month: 'Jan',
    sales: 72000,
    population: 675000,
    households: 310000,
    avgIncome: 88000
  },

  // 🔁 Add variation across months, categories, segments

  {
    id: 6,
    country: 'Canada',
    region: 'Ontario',
    city: 'Toronto',
    segment: 'Families',
    ageGroup: '45-54',
    category: 'Home Goods',
    product: 'Appliances',
    year: 2024,
    month: 'Feb',
    sales: 110000,
    population: 2500000,
    households: 1000000,
    avgIncome: 95000
  },
  {
    id: 7,
    country: 'Canada',
    region: 'Alberta',
    city: 'Calgary',
    segment: 'Professionals',
    ageGroup: '35-44',
    category: 'Automotive',
    product: 'EV',
    year: 2024,
    month: 'Feb',
    sales: 150000,
    population: 1400000,
    households: 550000,
    avgIncome: 99000
  },
  {
    id: 8,
    country: 'Canada',
    region: 'Quebec',
    city: 'Quebec City',
    segment: 'Retirees',
    ageGroup: '65+',
    category: 'Healthcare',
    product: 'Insurance',
    year: 2024,
    month: 'Feb',
    sales: 60000,
    population: 550000,
    households: 230000,
    avgIncome: 60000
  },

  // 🔁 Continue pattern to simulate large dataset
];

// OPTIONAL: generate more data dynamically
export function generateMockData(count = 500) {
  const regions = ['Ontario', 'Quebec', 'Alberta', 'BC'];
  const cities = ['Toronto', 'Montreal', 'Calgary', 'Vancouver', 'Ottawa'];
  const segments = ['Urban Professionals', 'Families', 'Students', 'Retirees'];
  
  // Create logical category-product relationships
  const categoryProducts = {
    'Electronics': ['Laptop', 'Phone', 'Tablet', 'Smartwatch', 'Headphones'],
    'Home Goods': ['Furniture', 'Appliances', 'Kitchenware', 'Bedding', 'Decor'],
    'Fitness': ['Treadmill', 'Weights', 'Yoga Mat', 'Bike', 'Protein Powder'],
    'Automotive': ['EV', 'Hybrid Car', 'SUV', 'Truck', 'Motorcycle']
  };
  
  const categories = Object.keys(categoryProducts);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  return Array.from({ length: count }, (_, i) => {
    // First select category, then select appropriate product
    const category = categories[Math.floor(Math.random() * categories.length)];
    const products = categoryProducts[category];
    const product = products[Math.floor(Math.random() * products.length)];
    
    return {
      id: i + 1,
      country: 'Canada',
      region: regions[Math.floor(Math.random() * regions.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      segment: segments[Math.floor(Math.random() * segments.length)],
      ageGroup: ['18-24', '25-34', '35-44', '45-54', '65+'][Math.floor(Math.random() * 5)],
      category: category,
      product: product,
      year: 2024,
      month: months[Math.floor(Math.random() * months.length)],
      sales: Math.floor(Math.random() * 150000),
      population: Math.floor(Math.random() * 3000000),
      households: Math.floor(Math.random() * 1200000),
      avgIncome: Math.floor(Math.random() * 100000)
    };
  });
}