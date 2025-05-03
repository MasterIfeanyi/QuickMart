import "./SplashScreen.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const SplashScreen = () => {


    useEffect(() => {
        // Redirect to main screen after 3 seconds
        const timer = setTimeout(() => {
            // this will set the visibility of the splash screen to false after 2 seconds
            setVisible(false)
    
            // this will navigate to the welcome screen after the transition
            setTimeout(() => {
                navigate('/auth')
              }, 700)
    
        }, 2000)
    
        return () => clearTimeout(timer)
    }, [navigate])

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