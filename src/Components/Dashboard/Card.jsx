import "./Dashboard.css"
import { FiShoppingBag } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";

const Card = ({image, name, price}) => {


  return (
    <div className="photo_card">
      <img src={image} className="img-fluid"  alt={name} />
      <div className="overlay">
          <div>
              <h6 className="text-white">{name}</h6>
              <strong className="text-white">$ {price}</strong>
          </div>

          <div className="circle">
              <FaCartShopping className="splash-logo mb-3" size={19} color="black" />
          </div>
      </div>
    </div>
  )
}

export default Card