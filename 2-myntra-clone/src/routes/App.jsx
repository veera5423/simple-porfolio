import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchStatus from "../components/FetchStatus"
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";



function App() {

  const fetchStatus = useSelector(store => store.fetchStatus);

  return (
    <>
      <div>
        <Header />
        <FetchStatus />
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}


        <Footer />
      </div>

    </>
  )
}

export default App
