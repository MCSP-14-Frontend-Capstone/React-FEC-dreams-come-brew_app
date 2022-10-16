

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
  {
    id: 11,
    target: "11",
    name: "Small Planes",
    image:
      "https://res.cloudinary.com/roastcollective/image/upload/h_1000,w_1000,f_auto,fl_progressive:steep,q_auto:good/v1660236778/solidus/mkqkebu7rjor7kkc67jj.png",
    price: 15,
    qty: '90',
    cartQty: 1,
    oldprice: 25,
    description: "Another fantastic Rwandan coffee this year...",
    onSale: false,
  },

  {
    id: 12,
    target: "12",
    name: "Feast latte",
    image:
      "https://res.cloudinary.com/roastcollective/image/upload/h_1000,w_1000,f_auto,fl_progressive:steep,q_auto:good/v1660256122/solidus/oz8dktlpdj3xbahhkdlz.png",
    price: 12,
    qty: '90',
    cartQty: 1,
    oldprice: 20,
    description: "Great coffe cultivated in the best farms in...",
    onSale: false,
  },

  {
    id: 13,
    target: "13",
    name: "Alma Coffee",
    image:
      "https://res.cloudinary.com/roastcollective/image/upload/h_1000,w_1000,f_auto,fl_progressive:steep,q_auto:good/v1660250858/solidus/rqj2vy4wuxvsyxgoguvn.png",
    price: 17,
    qty: '90',
    cartQty: 1,
    oldprice: 20,
    description: "Another fantastic Rwandan coffee this year...",
    onSale: false,
  },
  {
    id: 14,
    target: "14",
    name: "AM Blend",
    image:
      "https://cdn.shopify.com/s/files/1/0069/6467/4613/products/EspressoCoffeeSampler_416x416.jpg?v=1629175455",
    price: 42,
    qty: '90',
    cartQty: 1,
    oldprice: 50,
    description: "Do you love that bold espresso taste...",
    onSale: false,
  },
  {
    id: 15,
    target: "15",
    name: "Folgers",
    image:
      "https://cdn.shopify.com/s/files/1/0063/6154/6850/products/folgers-cappuccino-pp-french-vanilla_large_ee38d3b1-8ac6-4dc2-b6b7-bda2ee152b8b_480x.jpg?v=1643817713",
    price: 10,
    qty: '90',
    cartQty: 1,
    oldprice: 20,
    description: "Same Folgers French Vanilla cappuccino...",
    onSale: false,
  },
  {
    id: 16,
    target: "16",
    name: "American Coffee",
    image:
      "https://cdn.shopify.com/s/files/1/0063/6154/6850/products/Coffee.USA.Classic.American.Coffee.Medium.Roast_600x.jpg?v=1650900264",
    price: 16,
    qty: '90',
    cartQty: 1,
    oldprice: 20,
    description: "Carefully blended and artisan roasted coffee that will instantly remind you of your favorite bakery-house coffee. A classic, great tasting blend of Colombian, Sumatran and Central American coffees, slow roasted in small, handcrafted batches and air-cooled",
    onSale: false,
  },
  {
    id: 17,
    target: "17",
    name: "Colombian Coffee",
    image:
      "https://cdn.shopify.com/s/files/1/0063/6154/6850/products/folgers-100-percent-colombian-coffee-frac-pack-grounds_35062f54-6b80-4b33-b5a5-47eb94f3f7d2_600x.jpg?v=1605269364",
    price: 15,
    qty: '90',
    cartQty: 1,
    oldprice: 20,
    description: "A classic coffee made from mountain grown beans, the world's richest, most aromatic kind. Folgers 100% Colombian coffee is medium-roasted and specially ground for a richer and smoother taste that is distinctively Colombian. The best part of Wakin' Up...is Folgers in your cup!",
    onSale: true,
  },

  {
    id: 18,
    target: "18",
    name: "Espresso Italiano",
    image:
      "https://cdn.shopify.com/s/files/1/0063/6154/6850/products/EspressoItaliano_1_034f26f2-411c-4147-b9b1-87e6608d1afc_600x.jpg?v=1646173664",
    price: 19,
    qty: '90',
    cartQty: 1,
    oldprice: 25,
    description: "Our Italian Roast Espresso Coffee is a Delicious Dark Roast with Tangy Red Fruit Undertones. Made from 100% Arabica Coffee Beans.Available in Whole Bean or Pre-Ground as 16 oz, 2 lb and 5 lb bags. An Exclusive Artisanal Blend of Our Single-Origin Coffees.",
    onSale: false,
  },
  {
    id: 19,
    target: "19",
    name: "Buffalo Blend",
    image:
      "https://cdn.shopify.com/s/files/1/0063/6154/6850/products/NACSAMPLEBUFFALOBLEND_6e065301-2a3c-46b0-99f9-371ccd386a6c_600x.png?v=1646173915",
    price: 19,
    qty: '90',
    cartQty: 1,
    oldprice: 25,
    description: "The Buffalo to the Native Americans is a symbol of sacred life and abundance. Buffalo Blend will warm your body and soul while filling your imagination with the sound of thundering hooves.",
    onSale: false,
  },
  {
    id: 20,
    target: "20",
    name: "Louisiane Coffee",
    image:
      "//cdn.shopify.com/s/files/1/0056/4562/products/Lousiane_12oz_Coffee_web1.jpg?v=1599249490",
    price: 15,
    qty: '90',
    cartQty: 1,
    oldprice: 20,
    description: "Louisiane, a bold and earthy brew, is a love letter to New Orleans, the original U.S. coffee town. This blend is about getting back to the roots of the American coffee tradition and finding that mineral, smoky smoothness that got this country hooked on it in the first place.",
    onSale: false,
  },

];

export default products