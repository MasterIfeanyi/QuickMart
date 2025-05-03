import "./AuthScreen.css"

const AuthScreen = () => {



  return (
    <section className='section'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <h1>Skip the store, shop from home</h1>
                    <p>Order groceries in a few taps and get them delivered to your door</p>
                    <div className="btns">
                        <button className="btn btn-brand">Create account</button>
                        <button className="btn btn-outline-brand">Sign in</button>
                    </div>
                </div>

                <div className="col-lg-6 fruit-basket offset-lg-1 mt-3 mt-lg-0">
                    <img src="./food-illu.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AuthScreen