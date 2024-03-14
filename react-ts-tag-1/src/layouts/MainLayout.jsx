import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
const MainLayout = () => {
    return (
        <div>
            <Header />
                <Outlet /> {/** equivalent zu {children} bei React */}
            <Footer />
        </div>
    )
}

export default MainLayout
