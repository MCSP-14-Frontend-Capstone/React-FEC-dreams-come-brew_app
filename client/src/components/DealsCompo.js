import DealsItem from "./DealsItem";

const DealsCompo = ({items}) => {
console.log(items)

    //map through items
    return (
        <div className="Deals">
            {items.map((item,i) => (
                <DealsItem item={item} key={i}/>
            ))}
        </div>
    )
}

export default DealsCompo;