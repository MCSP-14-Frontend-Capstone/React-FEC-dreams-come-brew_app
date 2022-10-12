const BackgroundDealImg = ({item}) => {

    return (
        <div className="backgroundDeal-div">
            <img className="backgroundDealimg" src={item.image}></img>
        </div>
    )
}

export default BackgroundDealImg;