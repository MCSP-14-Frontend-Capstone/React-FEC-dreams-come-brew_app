const DealsItem = ({item}) => {

    return (
        <div className="DealItem">

            <div>
                <img className ="DealsImg" src={item.image}></img>
            </div>
            <h1 className="DealItemName">Item: {item.name} </h1>
            <p>Price: {item.price}</p>
        </div>
    )
}

export default DealsItem;