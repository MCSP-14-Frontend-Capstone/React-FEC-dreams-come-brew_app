import { Link } from "react-router-dom";

const DealsItem = ({item}) => {

    return (
        <div href="#" className="DealItem">

            <div>
                <Link className="single-link" to={`/products/${item.target}`}>
                <img className ="DealsImg" src={item.image} alt={""}></img>
                </Link>
            </div>
            <div>
            <h1 className="DealItemName">{item.name} </h1>
            <p className="DealItemName">Price: {item.price}</p>
            </div>
        </div>
    )
}

export default DealsItem;