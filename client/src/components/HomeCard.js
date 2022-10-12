import CardImg from "./CardImg";

const HomeCard = ({items}) => {

    //filter through images to get items with id less that 5
    const filters = (item) => {
        if(item.id < 5){
            //return obj within condition set
            return item.id
        }
    }

    const imgItems = items.filter(filters);
    

    return (
        <div className="CardMain-Container">
            {
                imgItems.map(item => (
                    <CardImg key={item.id} item={item}/>
                ))
            }
        </div>
    )
}

export default HomeCard;