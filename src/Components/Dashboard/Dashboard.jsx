import "./Dashboard.css"




const Dashboard = () => {




  return (
    <section className="section">
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar Navigation */}
                <nav className='col-md-3 col-lg-2 d-md-block sidebar'>
                    <div className="position-sticky">
                        <h1 className='sidebar-title'>QuickMart</h1>
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