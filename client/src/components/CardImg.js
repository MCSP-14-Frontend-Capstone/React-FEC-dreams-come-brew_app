import { useNavigate } from "react-router-dom";

const CardImg = ({item}) => {

    const HotItemNav = useNavigate();

    const NavToHotItems = () => {
        HotItemNav('/hotItems')
    }

    return (
        <div className="Card-div" onClick={NavToHotItems}>
            <h2>Hot Item</h2>
               <img className="Cardimg" src={item.image}></img> 
        </div>
    )
}

export default CardImg;