import { navData } from "../../store/nav"
import NavItem from "./components/NavItem"


const Navigation = () => {

    const NavItemsList = navData.map((item, index)=>{
        return <NavItem key={item.name + index} {...item}/>
    })
  return (
    <nav>
      {NavItemsList}
    </nav>
  )
}

export default Navigation
