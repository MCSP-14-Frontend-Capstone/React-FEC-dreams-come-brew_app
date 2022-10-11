import DealsItem from "./DealsItems";

const DealsCompo = ({items}) => {
console.log(items)

    //map through items
    return (
        <div className="Deals">
            <a href="#" className="prev">&#8249;</a>
            {items.map((item,i) => (
                <DealsItem item={item} key={i}/>
            ))}
            <a href="#" className="next">&#8250;</a>
        </div>
    )
}

export default DealsCompo;