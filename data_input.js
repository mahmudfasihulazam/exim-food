
const fs = require('fs');
var data = {
  hours: [
    { name: 'Monday' , hours: '09:00AM - 09:00PM' },
    { name: 'Tuesday' , hours: '09:00AM - 09:00PM' },
    { name: 'Wednesday' , hours: '09:00AM - 09:00PM' },
    { name: 'Thursday' , hours: '09:00AM - 09:00PM' },
    { name: 'Friday' , hours: '09:00AM - 01:00PM, 02:00PM - 09:00PM' },
    { name: 'Saturday' , hours: '09:00AM - 09:00PM' },
    { name: 'Sunday' , hours: '09:00AM - 09:00PM' }
  ],
  items: [
    {
      itemInfo: {
        item_name: 'Chicken',
        price: 4.99,
        unit: 'kg',
        description: 'Fresh chicken from the farms',
        sale_information: '',
        categories: ['Meat', 'Bird Meat']
      },
      fileInfo: { path: '../../assets/img//exim-food-item-img/Chicken/whole Chicken.jpg' },
      root: '../../www'
    },
    {
      itemInfo: {
        item_name: 'Carrots',
        price: 2.50,
        unit: 'kg',
        description: 'Fresh colourful carrots',
        sale_information: '',
        categories: ['Vegetables']
      },
      fileInfo: { path: '../../assets/img//exim-food-item-img/Beef/Beef 1.jpg' },
      root: '../../www'
    },
    {
      itemInfo: {
        item_name: 'Cauliflower',
        price: 5.00,
        unit: 'kg',
        description: 'Fresh clean Cauliflower',
        sale_information: '',
        categories: ['Vegetables']
      },
      fileInfo: { path: '../../assets/img//exim-food-item-img/Beef/Beef 1.jpg' },
      root: '../../www'
    },
    {
      itemInfo: {
        item_name: 'Beef',
        price: 5.99,
        unit: 'kg',
        description: 'Fresh beef from the farms',
        sale_information: '',
        categories: ['Meat', 'Cattle Meat']
      },
      fileInfo: { path: '../../assets/img//exim-food-item-img/Beef/Beef 1.jpg' },
      root: '../../www'
    },
    {
      itemInfo: {
        item_name: 'Duck',
        price: 5.99,
        unit: 'kg',
        description: 'Fresh duck',
        sale_information: '',
        categories: ['Meat', 'Bird Meat']
      },
      fileInfo: { path: '../../assets/img//exim-food-item-img/Chicken/Duck.jpg' },
      root: '../../www'
    }
  ],
  test: {
    test_name: 'pushAssetInfoTest',
    test_data: 'data'
  }
}
fs.writeFileSync('./database_data.json', JSON.stringify(data));
var readData = JSON.parse(fs.readFileSync('./database_data.json'));
console.assert(readData.test.test_name === data.test.test_name);
console.log('Done');
