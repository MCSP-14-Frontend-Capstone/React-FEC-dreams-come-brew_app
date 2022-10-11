const DealsItem = ({item}) => {

    return (
        <div href="#" className="DealItem">

            <div>
                <img className ="DealsImg" src={item.image}></img>
            </div>
            <div>
            <h1 className="DealItemName">{item.name} </h1>
            <p className="DealItemName">Price: {item.price}</p>
            </div>
        </div>
    )
}

export default DealsItem;