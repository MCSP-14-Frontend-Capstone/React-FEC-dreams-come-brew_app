const CardImg = ({item}) => {

    return (
        <div className="Card-div">
            <h1 className="CardHeader">Hot Item</h1>
               <img className="Cardimg" src={item.image}></img> 
        </div>
    )
}

export default CardImg;