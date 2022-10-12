


const CartRec = () => {

    const recData = [
        {
            id: 1,
            target: "1",
            name: "Jasmine's  Roast",
            image:
                "https://i5.walmartimages.com/asr/da71959a-5c1b-4ce1-9ff0-6b7c672b0827_1.55ab91ff06010245224f1f90b1b0abc2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            price: 19,
        }, {
            id: 4,
            target: "4",
            name: "Aurora's Cure",
            image:
                "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
            price: 9,
        }, {
            id: 10,
            target: "10",
            name: "Elsa's Frozen Latte",
            image:
                "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
            price: 24,
        }
    ]





    return (
        <>
            <div className='rec-text-box'>
                <h1 className="rec-text">Recommended Items</h1>
            </div>
            <div className="rec-pics-box">
                {recData.map((item) => (

                    <div href="#" className="DealItem">
                        <div>
                            <img className="DealsImg" alt='' src={item.image}></img>
                        </div>
                        <div>
                            <h1 className="DealItemName">{item.name}</h1>
                            <p className="DealItemName">Price: {item.price}</p>
                        </div>
                    </div>

                ))}




            </div>
        </>
    )


}

export default CartRec


