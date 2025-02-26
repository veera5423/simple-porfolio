import { useSelector } from "react-redux";
import BagItem from "../components/BagItem"
import BagSummary from "../components/BagSummary"



const Bag = () => {
    const bag = useSelector(state => state.bag);
    const items = useSelector(store => store.items)
    const bagItems = items.filter(item => {
        const itemIndex = bag.indexOf(item.id);
        return itemIndex >= 0;
    })



    return (



        < main >
            <div className="bag-page">
                <div className="bag-items-container">
                    {bagItems.map((item) => <BagItem key={item.id} item={item} />)}

                </div>

                <BagSummary />

            </div>
        </main >


    )
}

export default Bag