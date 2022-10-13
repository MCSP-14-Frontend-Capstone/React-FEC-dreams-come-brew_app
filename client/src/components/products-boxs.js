import {Routes, Route, useNavigate} from 'react-router-dom';
const Products = ({item}) =>{
   
    const navigate = useNavigate();

    const navigateToProducts = () => {
        navigate('/Products')
    };
    
    return (
  <div className="product">
      <div className="product_info">
          <h2 className='a-color-base headline truncate-2line'>50% off!</h2>
          <p>{item.name}</p>
          <p className="product_price">
          </p>
      </div>
  
      <img id='products-img' src={item.image} alt=""></img>
  
      <button className='myButton' onClick={navigateToProducts}>See more in our products!</button>
  </div>
)
  }
  
  export default Products 