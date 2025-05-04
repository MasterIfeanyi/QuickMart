import "./Login.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import handleLogin from "../../utils/handleLogin"
import { useAuth } from "../../context/AuthConext"

const Login = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const {setCurrentUser, setError} = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await handleLogin(email, password, setCurrentUser, setError)
            console.log("Login successful", response)
        } catch (error) {
            console.error("Login Failed", error)
        }
    }

  return (
    <section className="section">
        <div className="container">

            <div className="row justify-content-center align-items-center">

                <div className="col-lg-7">

                    <div className="section-title">
                        <h2 className="fw-bold mb-1">Welcome back</h2>
                        <p className="text-muted mb-4">Enter your details to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="row">
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
                        <div className="">
                            <button type="submit" className="btn btn-brand mt-2 w-100">Log in</button>
                        </div>
                    </form>

                    <footer className="text-center mt-2">
                        <p className="text-muted">
                            Don't have an account ?
                            <Link to="/signup" className="ms-1 fw-medium logIn">
                               Sign up
                            </Link>
                        </p>
                    </footer>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Login