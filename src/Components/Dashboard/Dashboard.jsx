import "./Dashboard.css"
import { FiShoppingBag } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";





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
                        <ul className="nav flex-column">
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
                <main className="col-md-9 col-lg-9 px-md-4 py-2 main-content">

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="photo_card">
                                <img src="./img/gucci_shirt_model.avif" className="img-fluid"  alt="" />
                                <div className="overlay">
                                    <div>
                                        <h6 className="text-white">Balenciaga Model</h6>
                                        <strong className="text-white">$ 900</strong>
                                    </div>

                                    <div className="circle">
                                        <FaCartShopping className="splash-logo mb-3" size={19} color="black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="photo_card">
                                <img src="./img/gucci_shirt_model.avif" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="photo_card">
                                <img src="./img/gucci_shirt_model.avif" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>




                    {/* <div className="row">
                        <div className="col-lg-4 ">
                            <div className="photo_card">
                                <img src="./img/gucci_shirt_model.avif" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="photo_card">
                                <img src="./img/gucci_shirt_model.avif" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="photo_card">
                                <img src="./img/gucci_shirt_model.avif" alt="" />
                            </div>
                        </div>
                    </div> */}


                </main>
            </div>
        </div>
    </section>
  )
}

export default Dashboard