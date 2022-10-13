import DealsItem from "./DealsItems";
// import {Link} from 'react-scroll';

const DealsCompo = ({items}) => {

    //map through items
    return (
        <div className="DealsMain">
            <h2>Popular items</h2>
        {/* <Link className="DealsArrow" to="Deals" activeClass="active" duration={650} ignoreCancelEvents={false} offset={-700} smooth={true} horizontal={true} containerId="deals">&#8249;</Link> */}
     
            <div className="Deals" id="deals">
            {items.map((item,i) => (
                <DealsItem item={item} key={i}/>
            ))}
            </div>
        {/* <Link className="DealsArrow" to="Deals" activeClass="active" duration={650} ignoreCancelEvents={false} offset={2000} smooth ={true} horizontal={true} containerId="deals">&#8250;</Link> */}
        </div>
       
    )
}

export default DealsCompo;