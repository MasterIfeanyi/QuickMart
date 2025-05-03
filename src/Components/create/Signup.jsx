import { useState } from "react"
import { Link } from "react-router-dom"
import "./Signup.css"

const Signup = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


  return (
    <section className="section">
        <div className="container">

            <div className="row justify-content-center align-items-center">

                <div className="col-lg-7">


                    <div className="section-title">
                        <h2 className="fw-bold mb-1">Create Account</h2>
                        <p className="text-muted mb-4">Sign up to get started</p>
                    </div>

                    <form action="" className="row">
                        <div className="input-group mb-3">
                            <input 
                                type="text" className="form-control custom-input" 
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input 
                                type="email" className="form-control custom-input" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input 
                                type="password" className="form-control custom-input" 
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>

                    <footer className="text-center mt-auto">
                        <p className="text-muted">
                            Already have an account ?
                            <Link to="/login" className="ms-1 fw-medium logIn">
                                Log In
                            </Link>
                        </p>
                    </footer>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup