import "../styles/Menu.css"
import Grocery from "../Images/Cucmbers.jpg"
import Frozennes from "../Images/Frozennes.jpg"
import Vegtables from "../Images/Vegtables.jpg"
import Dairly from "../Images/Dairly.jpg"
import MenuItem from "../components/MenuItem"

const menuItem = [  
   {
     name: "Grocery " , 
     Image: Grocery,
     More: "Grocery"
   },
   {
    name: " Frozennes " , 
    Image: Frozennes,
    More: "Frozennes"
   },
   {
    name: " Vegetables " , 
    Image: Vegtables,
    More: "/Vegetables"
   },
   {
    name: " Dairly " , 
    Image: Dairly,
    More: "Dairly"
   }
]
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Menu</h1>
      <div className="menuList"> </div>
      {menuItem.map((MarketItem => { 
        return (
          <MenuItem name={MarketItem.name} image={MarketItem.Image} More={MarketItem.More} />
        )
      }
        ))}      
    </div>
  )
}
export default Menu