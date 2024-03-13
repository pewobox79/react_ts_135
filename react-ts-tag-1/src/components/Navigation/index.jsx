import { nav } from "../../store/nav"
import NavItem from "./components/NavItem"

const Navigation = () => {

    const NavList = nav.map((item, index)=>{
        //spread {...spread} operator konsolidiert alle werte und übergibt sie an die Komponente
        return <NavItem key={item.name + index} {...item}/>
    })

    return (
        <nav>
            {NavList}
        </nav>
    )
}

export default Navigation
