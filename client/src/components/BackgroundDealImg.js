const BackgroundDealImg = ({item}) => {

    return (
        <div className="backgroundDeal-div">
            {/* <div> */}
            <div className="gradienttest">test</div>
               <img className="backgroundDealimg" src={item.image}></img> 

            {/* </div> */}
            
        </div>
    )
}

export default BackgroundDealImg;