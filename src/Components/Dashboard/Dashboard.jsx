import "./Dashboard.css"
import { FiShoppingBag } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import products from "../../utils/products";
import Card from "./Card";




const Dashboard = () => {




  return (
    <section className="dashboard-section">
        <div className="container-fluid p-0">
            <div className="row g-0">
                {/* Sidebar Navigation */}
                <nav className='col-md-3 col-lg-2 d-md-block sidebar'>
                    <div className="position-sticky">
                        <div className="sidebar-logo">
                            <FiShoppingBag className="splash-logo mb-3" size={20} color="white" />
                            <h3 className='sidebar-title'>QuickMart</h3>
                        </div>
                        <ul className="nav category-btns">
                            <li className="nav-item">
                                <a href="" className="nav-link active">Fashion</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Computing</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Beauty</a>
                            </li>
                        </ul>
                    </div>
                </nav>



                {/* Main content */}
                <main className="col-lg-9 col-md-9 px-4 py-2 main-content">

                    <div className="row g-4">

                        {products.map((product) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <Card 
                                    name={product.name} 
                                    image={product.image} 
                                    price={product.price}
                                />
                            </div>
                        ))}
                    </div>


                    

                </main>
            </div>
        </div>
    </section>
  )
}

export default Dashboard