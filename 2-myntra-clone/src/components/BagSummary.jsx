import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'


const BagSummary = () => {
    const dispatch = useDispatch();

    const bag = useSelector(state => state.bag);
    const items = useSelector(store => store.items)
    const bagItems = items.filter(item => {
        const itemIndex = bag.indexOf(item.id);
        return itemIndex >= 0;
    })
    console.log(bagItems);


    let CONVENIENCE_FEES = 0;
    let totalItem = bag.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    let specialPrice = 0;
    if (bag.length === 0) {
        CONVENIENCE_FEES = 0;
    }
    else {
        CONVENIENCE_FEES = 99;
    }

    bagItems.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
        specialPrice += bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
    const handlePlaceOrder = () => {

    }


    return (
        <div className="bag-summary">

            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Special Price</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{specialPrice}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{finalPayment}</span>
                </div>
            </div>
            {!bag.length == 0 ? (<Link to="/place-order" target="_blank">
                <button className="btn-place-order" onClick={handlePlaceOrder}>
                    <div className="css-xjhrni">PLACE ORDER</div>

                </button>
            </Link>) : ""}

        </div>
    )
}

export default BagSummary