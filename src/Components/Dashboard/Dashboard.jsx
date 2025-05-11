import "./Dashboard.css"
import { FiShoppingBag } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import products from "../../utils/products";
import Card from "./Card";
import { useState } from "react";




const Dashboard = () => {


    // State to track the selected category
    const [selectedCategory, setSelectedCategory] = useState("Fashion");

    // Filter products based on the selected category
    const filteredProducts = products.filter(product => 
        product.category === selectedCategory
    );

    // Handle category selection
    const handleCategorySelect = (category, e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setSelectedCategory(category);
    };


  return (
    <section className="dashboard-section">
        <div className="container-fluid p-0">
            <div className="row g-0">
                {/* Sidebar Navigation */}
                <nav className='col-md-3 col-lg-3 d-md-block sidebar'>

                    <div className="sidebar-logo">
                        <FiShoppingBag className="splash-logo mb-3" size={20} color="white" />
                        <h3 className='sidebar-title'>QuickMart</h3>
                    </div>


                    <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                    <label htmlFor="menu-toggle" className="hamburger">
                        ☰
                    </label>
                    

                    <div className="position-sticky sidebar-container sidebar-content-wrapper">
                        <div className="sidebar-content">


                            <ul className="nav category-btns">
                                <li className="nav-item">
                                    <a href="" className={`nav-link ${selectedCategory === "Fashion" ? "active" : ""}`} onClick={(e) => handleCategorySelect("Fashion", e)}>
                                        Fashion
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className={`nav-link ${selectedCategory === "Computing" ? "active" : ""}`}
                                    onClick={(e) => handleCategorySelect("Computing", e)}>
                                        Computing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className={`nav-link ${selectedCategory === "Beauty" ? "active" : ""}`}
                                    onClick={(e) => handleCategorySelect("Beauty", e)}>
                                        Beauty
                                    </a>
                                </li>
                            </ul>

                            
                            
                            <a href="" className="btn btn-brand">Logout</a>
                        </div>
                    </div>





                    {/* <div className="position-sticky sidebar-container">
                        <div className="sidebar-logo">
                            <FiShoppingBag className="splash-logo mb-3" size={20} color="white" />
                            <h3 className='sidebar-title'>QuickMart</h3>
                        </div>

                        <div className="sidebar-content">
                            <ul className="nav category-btns">
                                <li className="nav-item">
                                    <a href="" className={`nav-link ${selectedCategory === "Fashion" ? "active" : ""}`} onClick={(e) => handleCategorySelect("Fashion", e)}>
                                        Fashion
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className={`nav-link ${selectedCategory === "Computing" ? "active" : ""}`}
                                    onClick={(e) => handleCategorySelect("Computing", e)}>
                                        Computing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className={`nav-link ${selectedCategory === "Beauty" ? "active" : ""}`}
                                    onClick={(e) => handleCategorySelect("Beauty", e)}>
                                        Beauty
                                    </a>
                                </li>
                            </ul>
                            <a href="" className="btn btn-brand">Logout</a>
                        </div>  
                    </div> */}
                </nav>



                {/* Main content */}
                <main className="col-lg-8 col-md-10 px-4 py-2 main-content">

                    <div className="row g-4">

                        {filteredProducts.length > 0 ? (filteredProducts.map((product) => (
                            <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <Card 
                                    name={product.name} 
                                    image={product.image} 
                                    price={product.price}
                                    category={product.category}
                                />
                            </div>
                        ))) : (
                            <div className="col-12 text-center">
                                <p>No products found in this category.</p>
                            </div>
                        )}
                    </div>

                </main>
            </div>
        </div>
    </section>
  )
}

export default Dashboard