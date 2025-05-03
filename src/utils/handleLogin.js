import { auth, signInWithEmailAndPassword } from '../firebase/config';

const handleLogin = async (email, password, setError, setCurrentUser) => {
    if (!email || !password) {
        setError("Please fill in all fields")
        return
    }

    try {
        setLoading(true);


        // Sign in with Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        setCurrentUser(userCredential.user)

        navigate('/dashboard')

    } catch (error) {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            setError('Invalid email or password');
        } else if (error.code === 'auth/invalid-email') {
            setError('Invalid email address');
        } else if (error.code === 'auth/too-many-requests') {
            setError('Too many failed login attempts. Please try again later.');
        } else {
            setError(error.message || 'Failed to sign in');
        }
        console.error(error);
    } finally {
        setLoading(false)
    }
}



export default handleLogin