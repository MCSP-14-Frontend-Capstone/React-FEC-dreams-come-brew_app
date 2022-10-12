import BackgroundDealImg from "./BackgroundDealImg";

const BackgroundDeal = ({items}) => {

    //filter through images to get items with id less that 5
    const filters = (item) => {
        if(item.id < 5){
            //return obj within condition set
            return item.id
        }
    }

    const imgItems = items.filter(filters);
    

    return (
        <div className="bkgroundDeal-Container">
            {
                imgItems.map(item => (
                    <BackgroundDealImg key={item.id} item={item}/>
                ))
            }
        </div>
    )
}

export default BackgroundDeal;