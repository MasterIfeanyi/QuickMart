import "./Dashboard.css"
import { useState } from "react";
import { FiMenu, FiShoppingBag } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import products from "../../utils/products";
import Card from "./Card";




const Dashboard = () => {


    // State to track the selected category
    const [selectedCategory, setSelectedCategory] = useState("Fashion");

    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

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
                <nav className="navbar">
                    
                    <a href="" className="logo">
                        <FiShoppingBag className="splash-logo mb-3" size={20} color="white" />
                        <h3 className='sidebar-title'>QuickMart</h3>
                    </a>

                    <div className={`navbar-nav`}>
                        <ul className={`nav-items ${navOpen ? "show" : ""}`}>
                            <div className="nav-links">
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
                            </div>

                            <div className="circle">
                                <FaCartShopping />
                            </div>
                            
                            <a href="" className="btn btn-brand">Logout</a>
                        </ul>
                    </div>

                    <div className="nav-toggler" onClick={toggleNav}>
                        <FiMenu size={20} className="" />
                    </div>

                </nav>




                {/* <nav className='col-md-3 col-lg-3 d-md-block sidebar sticky-top'>

                    <div className="sidebar-logo">
                        <FiShoppingBag className="splash-logo mb-3" size={20} color="white" />
                        <h3 className='sidebar-title'>QuickMart</h3>
                    </div>


                    <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                    <label htmlFor="menu-toggle" className="hamburger">
                        ☰
                    </label>
                    

                    <div className="sidebar-container sidebar-content-wrapper pb-2">
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

                            
                            
                            <a href="" className="btn btn-brand logout">Logout</a>
                        </div>
                    </div>

                </nav> */}



                {/* Main content */}
                <main className="col-lg- col-md-10 px-4 py-2 main-content">

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