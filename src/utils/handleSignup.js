


const handleSignup = async (username, email, password, setCurrentUser, setError, confirmPassword, setLoading) => {
    try {

        setError('');

        setLoading(true);


        if (!username || !email || !password || !confirmPassword) {
            setError("Please fill in all fields")
            return
        }
    
        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);


        setCurrentUser(userCredential.user)

        navigate('/home')
        
    } catch (error) {
       // Handle specific Firebase errors
       if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use');
        } else if (error.code === 'auth/weak-password') {
            setError('Password is too weak');
        } else if (error.code === 'auth/invalid-email') {
            setError('Invalid email address');
        } else {
            setError(error.message || 'Failed to create account');
        }
        console.error(error); 
    } finally {
        setLoading(false);
    }
}

export default handleSignup