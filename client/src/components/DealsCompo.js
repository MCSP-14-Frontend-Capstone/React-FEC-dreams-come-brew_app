import DealsItem from "./DealsItems";
import {Link} from 'react-scroll';

const DealsCompo = ({items}) => {
console.log(items)

    //map through items
    return (
        <div className="DealsMain">
            <Link to="Deals" activeClass="active" ignoreCancelEvents={true} offset={-700} smooth={true} horizontal={true} containerId="deals">PREV
            {/* <a href="#prev" className="DealsArrow">&#8249;</a> */}
            </Link>
     
            <div className="Deals" id="deals">
            {items.map((item,i) => (
                <DealsItem item={item} key={i}/>
            ))}
            </div>
        <Link to="Deals" activeClass="active" ignoreCancelEvents={true} offset={700} smooth ={true} horizontal={true} containerId="deals">NEXT
        {/* <a href="#next" className="DealsArrow">&#8250;</a> */}
        </Link>
        </div>
       
    )
}

export default DealsCompo;