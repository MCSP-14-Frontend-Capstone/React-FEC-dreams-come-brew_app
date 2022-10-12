import SingleItem from "./SingleItem"




const Items = ({ cart, removeItem }) => {




    return (
        <>
            {cart.map((item) => (
                <SingleItem key={item.id} item={item} removeItem={removeItem} />
            ))}

        </>
    )
}


export default Items 