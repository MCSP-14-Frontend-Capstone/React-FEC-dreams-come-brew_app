

const products = [
  {
    id: "1",
    name: "Jasmine's Roast",
    topChoice: true,
    image:
      "https://assets.teenvogue.com/photos/5cc5dfdd62cd0775db86ea8e/1:1/w_1519,h_1519,c_limit/MSDALAD_EC015.jpg",
    price: 19,

    qty: '25',
    description: "Jasmine's AmazonFresh Colombia Ground Coffee, Medium Roast, 16 Ounce"
  },
  {
    id: "2",
    name: "Mulan's Bean",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDwOtGaIt5qHPCWbf99VgEbxNA84vCKE9777ZShVZ-VGb3oBWGNzH_IVSleWSzMWIwKI&usqp=CAU",
    price: 24,
    qty: '90',
    description: "Mulan's Dark Roast Grounds - 16 Oz - The World's Strongest Coffee - Bold & Intense Blend of Arabica & Robusta Beans"

  },
  {
    id: "3",
    name: "Rapunzel's Coffee",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCe1zSrk3nMBjcVK4yg70u33np0tOyLEBBXoiSXg2-zZ-eHaaeUxGiWl2P-BG7wipxFo&usqp=CAU",
    price: 49,
    qty: '130',
    description: "Rapunzel's Coffee Roasters, Medium Roast Organic Whole Bean Coffee - Holler Mountain 12 Ounce Bag with Flavor Notes of Citrus Zest, Caramel and Hazelnut"
  },
  {
    id: "4",
    name: "Aurora's Cure",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAoLIRf7wjXTMS7Pzj6CIYf1qLx3SmCIJxg&usqp=CAU",
    price: 9,
    qty: '55',
    description: "Aurora's French Vanilla Flavored Coffee, Ground, Medium Roast, 12 Ounce"
  },


  {
    id: "5",
    name: "Mirabel Espresso",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaY8vpIFzxwDqkJEa00El-b8ukdRkitJyyQ&usqp=CAU",
    price: 19,

    qty: '25',
    description: "Mirabel's Coffee Praline Pecan 28 Ounce Ground Medium Roast Flavored Coffee"
  },
  {
    id: "6",
    name: "Ariel's Sea Island Coffee",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqZ8-z4PVwo_HhEuWfpemWoU6TlWKp6HqPA&usqp=CAU",
    price: 24,
    qty: '90',
    description: "Ariel's Sea Island Coffee - St Helena, Bamboo Hedge Estate (Whole Bean, 16 Ounces)"

  },
  {
    id: "7",
    name: "Tiana's Light Voodoo Bean",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMeKArT4Cc-c7iWhyEkPZEe4w_hfJLpEyug&usqp=CAU",
    price: 49,
    qty: '130',
    description: "Tiana's New Orleans Light Voodo Bean Roast - Medium Roast Ground Coffee, 12 Oz"
  },
  {
    id: "8",
    name: "Cinderella Pumpkin Ride",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnIOJ0qfFCiqrV64GGCIKB1FaCHyZtM4XKQ&usqp=CAU",
    price: 9,
    qty: '55',
    description: "Grade A coffe cultivated in the best farms in..."
  },


  {
    id: "9",
    name: "Snow White Ice Coffee",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLRD4rvlqXkXlQrze8HarTERWt4uhXuohaw&usqp=CAU",
    price: 19,

    qty: '25',
    description: "Premium coffe cultivated in the best farms in..."
  },
  {
    id: "10",
    name: "Elsa's Frozen Latte",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7H30BXc8JNs5agaOwflgnYQjISWtwARyMttN7olx5HYsaJBMB6-U9B550xQ06Q1YXKQ&usqp=CAU",
    price: 24,
    qty: '90',
    description: "Great coffe cultivated in the best farms in..."

  },
  {
    id: "11",
    name: "Anna's Peppermint Delight",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejMkCI2SP5ceMfnN5-u0FaEK6S9brQ3IXQw&usqp=CAU",
    price: 49,
    qty: '130',
    description: "Sweet coffe cultivated in the best farms in..."
  },
  {
    id: "12",
    name: "Merida Gaelic Coffee",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIzBJGIQMVzYjvVXdVa2s8K6B1Ifn86G4x_o6rJKHGoN6UxyZDGPhVH9_IuaJXlrWdnQ&usqp=CAU",
    price: 9,
    qty: '55',
    description: "Grade A coffe cultivated in the best farms in..."
  },


  {
    id: "13",
    name: "Belle's French Roast",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzA03Ir_Zh-Oyx3YPnhJltqEPq7v912_j9Q&usqp=CAU",
    price: 19,

    qty: '25',
    description: "Premium coffe cultivated in the best farms in..."
  },
  {
    id: "14",
    name: "Pocahontas Earth Bean",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgfpAFYseymfZE4Sy4qpYfkuo7tbh4Pd9eQ&usqp=CAU",
    price: 24,
    qty: '90',
    description: "Great coffe cultivated in the best farms in..."

  },
  {
    id: "15",
    name: "Moana's Pacific Island Blend",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWI488fVShfP2B-sJ8jxVPDTdMTzVPaKLn5A&usqp=CAU",
    price: 49,
    qty: '130',
    description: "Sweet coffe cultivated in the best farms in..."
  },
  {
    id: "16",
    name: "Mini's Yogurt Coffee",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNT4j8W711m5dtkiAfRVXKbT4QzCCEJB0Tg&usqp=CAU",
    price: 9,
    qty: '55',
    description: "Grade A coffe cultivated in the best farms in..."
  },



];

export default products
