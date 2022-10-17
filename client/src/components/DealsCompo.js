import DealsItem from "./DealsItems";
// import {Link} from 'react-scroll';
import { Link } from "react-router-dom";
import Newsletter from '../components/Newsletter';

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
<div className="homeNewsLetter">
<marquee scrolldelay="1" marquee loop="4" className='marquee'>Donate to Victims of hurrican Ian &nbsp;&nbsp;&nbsp;&nbsp;    | &nbsp;&nbsp;&nbsp;&nbsp; Guided By Your Taste + Brewing Habits&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;Flexible Plans &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;Delivered on Your Schedule&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp; Ethically Sourced&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;  Support Local Businesses&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;Free Shipping &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 25+ Curated Coffees &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; Family Owned </marquee>
    <Newsletter/>

       
</div>
          
        </div>
       
    )
}

export default DealsCompo;