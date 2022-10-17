import Products from '../components/products-boxs'
const ProductsItem = ({items}) => {

    const SaleFilter = (item) => {
        if(item.onSale === true){
            return item.onSale
        }
    }

    const SaleItems = items.filter(SaleFilter)
    console.log(SaleItems)
    
    return (
        <div className="home_row">
         
            {SaleItems.map((item,i) => (
                <Products item={item} key={i}/>
            ))}
           
        </div>
       
    )
}

export default ProductsItem;