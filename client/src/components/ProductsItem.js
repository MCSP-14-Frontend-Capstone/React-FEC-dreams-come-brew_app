import Products from '../components/products-boxs';

const ProductsItem = ({ items }) => {

    const SaleFilter = (item) => {
        if (item.on_sale === true) {
            return item.on_sale
        }
    }

    const SaleItems = items.filter(SaleFilter);

    return (
        <div className="home_row">

            {SaleItems.map((item, i) => (
                <Products item={item} key={i}/>
            ))}

        </div>

    )
}

export default ProductsItem;