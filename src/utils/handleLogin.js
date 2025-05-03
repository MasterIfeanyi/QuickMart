import { auth, signInWithEmailAndPassword } from '../firebase/config';

const handleLogin = async (email, password) => {
    if (!email || !password) {
        setError("Please fill in all fields")
        return
    }

    try {
        setLoading(true);


        // Sign in with Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
        
    }


}



export default handleLogin