import CardImg from "./CardImg";

const HomeCard = ({items}) => {

    //filter through images to get items with id less that 5
    const filters = (item) => {
        if(item.product_id < 5){
            //return obj within condition set
            return item.product_id
        }
    }

    const imgItems = items.filter(filters);
    

    return (
        <div className="CardMain-Container">
            {
                imgItems.map(item => (
                    <CardImg key={item.product_id} item={item}/>
                ))
            }
        </div>
    )
}

export default HomeCard;