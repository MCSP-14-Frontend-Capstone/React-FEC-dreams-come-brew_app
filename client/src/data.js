

const products = [
  {
    id: " pr1",
    name: "Jasmine's Roast",
    topChoice: true,
    image:
      "https://static.wikia.nocookie.net/disney/images/c/cd/Profile_-_Jasmine.jpeg/revision/latest/top-crop/width/360/height/360?cb=20190312021628",
      price: 19,
    
     qty:'25',
     description: "Premium coffee cultivated in the best farms in..."
  },
  {
    id: " pr2",
    name: "Mulan's  Bean",
    topChoice: true,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      price: 24,
      qty:'90',
      description: "Great coffee cultivated in the best farms in..."
     
  },
  {
    id: " pr3",
    name: "Rapunzel's Coffee",
    topChoice: true,
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      price: 49,
      qty:'130',
      description: "Sweet coffee cultivated in the best farms in..."
  },
  {
    id: " pr4",
    name: "Aurora's Cure",
    topChoice: false,
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
      price: 9,
      qty:'55',
      description: "Grade A coffee cultivated in the best farms in..."
  },
 
 
  {
    id: " pr1",
    name: "Jasmine's  Roast",
    topChoice: true,
    image:
      "https://images.unsplash.com/photo-1562113530-57ba467cea38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
      price: 19,
    
     qty:'25',
     description: "Premium coffee cultivated in the best farms in..."
  },
  {
    id: " pr2",
    name: "Mulan's Bean",
    topChoice: false,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      price: 24,
      qty:'90',
      description: "Great coffee cultivated in the best farms in..."
     
  },
  {
    id: " pr3",
    name: "Rapunzel's Coffee",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      price: 49,
      qty:'130',
      description: "Sweet coffee cultivated in the best farms in..."
  },
  {
    id: " pr4",
    name: "Aurora's Cure",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
      price: 9,
      qty:'55',
      description: "Grade A coffee cultivated in the best farms in..."
  },
 
 
  {
    id: " pr1",
    name: "Jasmine's  Roast",
    image:
      "https://images.unsplash.com/photo-1562113530-57ba467cea38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
      price: 19,
    
     qty:'25',
     description: "Premium coffee cultivated in the best farms in..."
  },
  {
    id: " pr2",
    name: "Mulan's Bean",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      price: 24,
      qty:'90',
      description: "Great coffee cultivated in the best farms in..."
     
  },
  {
    id: " pr3",
    name: "Rapunzel's Coffee",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      price: 49,
      qty:'130',
      description: "Sweet coffee cultivated in the best farms in..."
  },
  {
    id: " pr4",
    name: "Aurora's Cure",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
      price: 9,
      qty:'55',
      description: "Grade A coffee cultivated in the best farms in..."
  },
 
 
  {
    id: " pr1",
    name: "Jasmine's Roast",
    image:
      "https://images.unsplash.com/photo-1562113530-57ba467cea38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
      price: 19,
    
     qty:'25',
     description: "Premium coffee cultivated in the best farms in..."
  },
  {
    id: " pr2",
    name: "Mulan's Bean",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      price: 24,
      qty:'90',
      description: "Great coffee cultivated in the best farms in..."
     
  },
  {
    id: " pr3",
    name: "Rapunzel's Coffee",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      price: 49,
      qty:'130',
      description: "Sweet coffee cultivated in the best farms in..."
  },
  {
    id: " pr4",
    name: "Aurora's Cure",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
      price: 9,
      qty:'55',
      description: "Grade A coffee cultivated in the best farms in..."
  },
 
 
  
];

export default products
