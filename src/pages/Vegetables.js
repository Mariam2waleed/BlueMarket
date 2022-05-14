import "../styles/Menu.css"
import Cucmbers from "../Images/Cucmbers.jpg"
import Carrot from "../Images/Carrot.jpg"
import Tomato from "../Images/Tomato.jpg"
import Vegetable from "../components/VegetablesItem"

const VegetablesItem = [  
   {
     Name: "Cucmbers " , 
     Price: "10$ per 1kg",
     Image: Cucmbers
   },
   {
    Name: " Carrot " , 
    Price: "7$ per 1kg ",
    Image: Carrot
   },
   {
    Name: " Tomato " , 
    Price: "8$ per 1kg",
    Image: Tomato
   }
]

function Vegetables() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Vegetables</h1>
      <div className="menuList"> </div>
      {VegetablesItem.map((MariamItem => { 
        return (
          <Vegetable Name={MariamItem.Name} Price={MariamItem.Price} Image={MariamItem.Image} />
        )
      }
        ))}      
    </div>
  )
}
export default Vegetables