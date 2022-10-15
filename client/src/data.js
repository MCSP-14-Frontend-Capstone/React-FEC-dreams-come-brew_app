

// This is our fake data for product.


const products = [
  {
    id: 1,
    target: "1",
    name: "Jasmine's  Roast",
    image:
      "https://i5.walmartimages.com/asr/da71959a-5c1b-4ce1-9ff0-6b7c672b0827_1.55ab91ff06010245224f1f90b1b0abc2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: 19,
    pic1: "https://cdnb.artstation.com/p/assets/images/images/007/661/261/4k/inna-drofa-111.jpg?1507673939",
    pic2: "https://cdnb.artstation.com/p/assets/images/images/007/661/261/4k/inna-drofa-111.jpg?1507673939",
    pic3: "https://cdnb.artstation.com/p/assets/images/images/007/661/261/4k/inna-drofa-111.jpg?1507673939",
    pic4: "https://cdnb.artstation.com/p/assets/images/images/007/661/261/4k/inna-drofa-111.jpg?1507673939",

    qty: '25',
    cartQty: 1,
    oldprice: 25,
    description: "Premium coffe cultivated in the best farms in...",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae consequuntur aliquid dolor ab expedita voluptates pariatur eaque doloribus odio! Sequi reiciendis quidem sunt in ipsa obcaecati amet distinctio, voluptas nihil, voluptatibus pariatur repudiandae perferendis molestias, harum eius suscipit ipsam at. Corrupti esse, cum magnam aut qui in odio quam sit!",
    onSale: true,
  },
  {
    id: 2,
    target: "2",
    name: "Mulan's Bean",
    image:
      "https://images.unsplash.com/photo-1598811465486-475d218a6ff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvZmZlZSUyMGJhZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 24,
    qty: '90',
    cartQty: 1,
    oldprice: 35,
    description: "Great coffe cultivated in the best farms in...",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae consequuntur aliquid dolor ab expedita voluptates pariatur eaque doloribus odio! Sequi reiciendis quidem sunt in ipsa obcaecati amet distinctio, voluptas nihil, voluptatibus pariatur repudiandae perferendis molestias, harum eius suscipit ipsam at. Corrupti esse, cum magnam aut qui in odio quam sit!",
    onSale: false,
  },
  {
    id: 3,
    target: "3",
    name: "Tam Coffee",
    image:
      "https://easybaked.files.wordpress.com/2011/11/mocha2.jpg",
    price: 49,
    qty: '130',
    cartQty: 1,
    oldprice: 55,
    description: "Sweet coffe cultivated in the best farms in...",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae consequuntur aliquid dolor ab expedita voluptates pariatur eaque doloribus odio! Sequi reiciendis quidem sunt in ipsa obcaecati amet distinctio, voluptas nihil, voluptatibus pariatur repudiandae perferendis molestias, harum eius suscipit ipsam at. Corrupti esse, cum magnam aut qui in odio quam sit!",
    onSale: true,
  },
  {
    id: 4,
    target: "4",
    name: "Aurora's Cure",
    image:
      "https://images.unsplash.com/photo-1585230997430-63aec8545d6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvZmZlZSUyMGJhZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 9,
    qty: '55',
    oldprice: 15,
    cartQty: 1,
    description: "Grade A coffe cultivated in the best farms in...",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae consequuntur aliquid dolor ab expedita voluptates pariatur eaque doloribus odio! Sequi reiciendis quidem sunt in ipsa obcaecati amet distinctio, voluptas nihil, voluptatibus pariatur repudiandae perferendis molestias, harum eius suscipit ipsam at. Corrupti esse, cum magnam aut qui in odio quam sit!",
    onSale: true,
  },


  {
    id: 5,
    target: "5",
    name: "Mirabel Espesso",
    image:
      "https://joffreys.com/wp-content/uploads/2022/07/WEB-Mockup-2022-Disney-Encanto-G-F-LTO.png",
    price: 19,

    qty: '25',
    cartQty: 1,
    oldprice: 25,
    description: "Premium coffe cultivated in the best farms in...",
    detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae consequuntur aliquid dolor ab expedita voluptates pariatur eaque doloribus odio! Sequi reiciendis quidem sunt in ipsa obcaecati amet distinctio, voluptas nihil, voluptatibus pariatur repudiandae perferendis molestias, harum eius suscipit ipsam at. Corrupti esse, cum magnam aut qui in odio quam sit!",
    onSale: false,
  },
  {
    id: 6,
    target: "6",
    name: "Ariel's Coffee",
    image:
      "https://images.unsplash.com/photo-1584736286279-5d85d32ba79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvZmZlZSUyMGJhZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 24,
    qty: '90',
    cartQty: 1,
    oldprice: 35,
    description: "Great coffe cultivated in the best farms in...",
    onSale: true,
  },
  {
    id: 7,
    target: "7",
    name: "Tiana's  Bean",
    image:
      "https://images.unsplash.com/photo-1592250819999-c00fed586048?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGNvZmZlZSUyMGJhZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 49,
    qty: '130',
    cartQty: 1,
    oldprice: 65,
    description: "Sweet coffe cultivated in the best farms in...",
    onSale: false,
  },
  {
    id: 8,
    target: "8",
    name: "Cinderella Ride",
    image:
      "https://images.unsplash.com/photo-1642437271884-fe1d3393eef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGNvZmZlZSUyMGJhZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 9,
    qty: '55',
    cartQty: 1,
    oldprice: 15,
    description: "Grade A coffe cultivated in the best farms in...",
    onSale: true,
  },


  {
    id: 9,
    target: "9",
    name: "Snow White Coffee",
    image:
      "https://images.unsplash.com/photo-1611854778863-0c4d1bae5a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: 19,
    qty: '25',
    cartQty: 1,
    oldprice: 25,
    description: "Premium coffe cultivated in the best farms in...",
    onSale: true,
  },
  {
    id: 10,
    target: "10",
    name: "Elsa's  Latte",
    image:
      "https://images.unsplash.com/photo-1612213807634-ab190d1255e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxjb2ZmZWUlMjBiYWdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 24,
    qty: '90',
    cartQty: 1,
    oldprice: 35,
    description: "Great coffe cultivated in the best farms in...",
    onSale: false,
  },


];

export default products