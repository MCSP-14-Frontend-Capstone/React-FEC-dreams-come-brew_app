import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import products from "../../data";

const CartRec = () => {

    const sortedData = (elem) => {
        if (elem.id > 7) {
            return elem.id
        }
    }
    const recData = products.filter(sortedData)


    return (
        <>
            <div className='rec-text-box'>
                <h1 className="rec-text">Recommended Items</h1>
            </div>
            <div className="rec-pics-box">
                {recData.map((item) => (

                    <div href="#" className="RecItem" key={item.id}>
                        <div>
                            <img className="RecImg" alt='' src={item.image}></img>
                        </div>
                        <div className="Rec-info">
                            <h1 className="RecItemName">{item.name}</h1>
                            <div className="rec-stars">
                                <FontAwesomeIcon
                                    className="rating-icon"
                                    icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                    className="rating-icon"
                                    icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                    className="rating-icon"
                                    icon={faStar}
                                ></FontAwesomeIcon>
                            </div>

                            <p className="RecItemName">Price: ${item.price.toFixed(2)}</p>
                        </div>
                    </div>

                ))}




            </div>
        </>
    )


}

export default CartRec


