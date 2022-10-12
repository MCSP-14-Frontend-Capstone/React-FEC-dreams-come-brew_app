

const products = [
  {
    id: " pr1",
    name: "Jasmine's  Roast",
    image:
      "https://i5.walmartimages.com/asr/da71959a-5c1b-4ce1-9ff0-6b7c672b0827_1.55ab91ff06010245224f1f90b1b0abc2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      price: 19,
    
     qty:'25',
     description: "Premium coffe cultivated in the best farms in..."
  },
  {
    id: " pr2",
    name: "Mulan's  Bean",
    image:
      "https://cdnb.artstation.com/p/assets/images/images/007/661/261/4k/inna-drofa-111.jpg?1507673939",
      price: 24,
      qty:'90',
      description: "Great coffe cultivated in the best farms in..."
     
  },
  {
    id: " pr3",
    name: "Rapunzel's Coffee",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      price: 49,
      qty:'130',
      description: "Sweet coffe cultivated in the best farms in..."
  },
  {
    id: " pr4",
    name: "Aurora's Cure",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
      price: 9,
      qty:'55',
      description: "Grade A coffe cultivated in the best farms in..."
  },
 
 
  {
    id: " pr1",
    name: "Mirabel Espesso",
    image:
      "https://joffreys.com/wp-content/uploads/2022/07/WEB-Mockup-2022-Disney-Encanto-G-F-LTO.png",
      price: 19,
    
     qty:'25',
     description: "Premium coffe cultivated in the best farms in..."
  },
  {
    id: " pr2",
    name: "Ariel's Sea Island Coffee",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      price: 24,
      qty:'90',
      description: "Great coffe cultivated in the best farms in..."
     
  },
  {
    id: " pr3",
    name: "Tiana's Light Voovoo Bean",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      price: 49,
      qty:'130',
      description: "Sweet coffe cultivated in the best farms in..."
  },
  {
    id: " pr4",
    name: "Cinderella Pumpkin Ride",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
      price: 9,
      qty:'55',
      description: "Grade A coffe cultivated in the best farms in..."
  },
 
 
  {
    id: " pr1",
    name: "Snow White Ice Coffee",
    image:
      "https://images.unsplash.com/photo-1562113530-57ba467cea38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
      price: 19,
    
     qty:'25',
     description: "Premium coffe cultivated in the best farms in..."
  },
  {
    id: " pr2",
    name: "Elsa's Frozen Latte",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      price: 24,
      qty:'90',
      description: "Great coffe cultivated in the best farms in..."
     
  },
  {
    id: " pr3",
    name: "Anna's Peppermint Delight",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      price: 49,
      qty:'130',
      description: "Sweet coffe cultivated in the best farms in..."
  },
  {
    id: " pr4",
    name: "Merida Gaelic Coffee",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
      price: 9,
      qty:'55',
      description: "Grade A coffe cultivated in the best farms in..."
  },
 
 
  {
    id: " pr1",
    name: "Belle's French Roast",
    image:
      "https://images.unsplash.com/photo-1562113530-57ba467cea38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
      price: 19,
    
     qty:'25',
     description: "Premium coffe cultivated in the best farms in..."
  },
  {
    id: " pr2",
    name: "Pocahontas Earth Bean",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      price: 24,
      qty:'90',
      description: "Great coffe cultivated in the best farms in..."
     
  },
  {
    id: " pr3",
    name: "Moana's Pacific Island Blend",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      price: 49,
      qty:'130',
      description: "Sweet coffe cultivated in the best farms in..."
  },
  {
    id: " pr4",
    name: "Raya's Yogurt Coffee",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
      price: 9,
      qty:'55',
      description: "Grade A coffe cultivated in the best farms in..."
  },
 
 
  
];

export default products
