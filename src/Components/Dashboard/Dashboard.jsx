import "./Dashboard.css"
import { FiShoppingBag } from "react-icons/fi";





const Dashboard = () => {




  return (
    <section className="">
        <div className="container-fluid">
            <div className="row">
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
                <main className="col-md-9 col-lg-10 px-md-4">

                </main>
            </div>
        </div>
    </section>
  )
}

export default Dashboard