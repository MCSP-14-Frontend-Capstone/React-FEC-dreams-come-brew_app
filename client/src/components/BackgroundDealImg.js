const BackgroundDealImg = ({item}) => {

    return (
        <div className="backgroundDeal-div">
            {/* <div> */}
               <img className="backgroundDealimg" src={item.image}></img> 
               <div className="gradienttest">test</div>
            {/* </div> */}
            
        </div>
    )
}

export default BackgroundDealImg;