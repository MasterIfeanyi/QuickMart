import "./SplashScreen.css"

const SplashScreen = () => {

  return (
    <section className="section d-flex justify-content-center align-items-center bg-color">
        <div className="splash_message-container">
            <img src="./eagle.png" alt="logo" className='splash-logo' />
            <p className='fw-bold fs-2'>QuickMart</p>
        </div>
    </section>
  )
}

export default SplashScreen