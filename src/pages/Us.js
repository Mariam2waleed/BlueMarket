import "../styles/Us.css"
import contactimage from "../Images/About.jpg"


function Us() {

  return (
    
    <div className= "contact" >
      <div className= "leftSide" style={{backgroundImage: `url(${contactimage})`}} > </div>
      <div className= "rightSide">'
       <h1> About Us </h1>
        <p><h4> The hypermarket typically has places for fresh 
meat, fresh produce, dairy, deli items, 
baked goods, etc.
 Shelf space is also reserved for canned and 
packaged goods and for various non-food
 items such as kitchenware , 
household cleaners,
 pharmacy products and pet supplies. 
Some supermarkets also sell other household
 products that are consumed regularly, 
medicine, and clothing, and some sell a much 
wider range of non-food products </h4></p>
       

      </div>
    </div>
  )
}

export default Us;
