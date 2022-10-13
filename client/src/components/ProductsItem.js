import Products from '../components/products-boxs'
const ProductsItem = ({items}) => {
    return (
        <div className="home_row">
         
            {items.map((item,i) => (
                <Products item={item} key={i}/>
            ))}
           
        </div>
       
    )
}

export default ProductsItem;