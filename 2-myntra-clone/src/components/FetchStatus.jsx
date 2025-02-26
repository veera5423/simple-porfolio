import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { itemsActions } from '../store/itemSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';

const FetchStatus = () => {
    const fetchStatus = useSelector(store => store.fetchStatus);


    const dispatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        if (fetchStatus.fetchDone) return;

        dispatch(fetchStatusActions.markFetchingStartred());
        fetch("http://localhost:8080/items", { signal })
            .then((res) => res.json())
            .then(({ items }) => {
                dispatch(fetchStatusActions.markFetchingFinished());
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(itemsActions.addInitialItems(items[0]));
            });
        return () => {
            controller.abort();
        }
    }, [fetchStatus]);


    return (
        <></>
    )
}

export default FetchStatus;