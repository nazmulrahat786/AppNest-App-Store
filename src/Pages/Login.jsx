import React, { use, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
     useEffect(() => {
        document.title = 'Login';
      }, []);
    const [error, setError] = useState("");
    const { logIn, googleLoginPopUp } = use(AuthContext);
    const location = useLocation();
    const navegate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((result) => {
                const user = result.user;
                toast.success(" Login successfull!");
                  setTimeout(() => {
          navegate(`${location.state ? location.state : "/"}`);
        }, 2000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode + ": " + errorMessage);
            });
    };

    const googleLogin = () => {
        googleLoginPopUp()
            .then((result) => {
                const user = result.user;
                 toast.success(" Login successfull!");
                  setTimeout(() => {
          navegate(`${location.state ? location.state : "/"}`);
        }, 2000);
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className='bg-gradient-to-r '>
           {/* ✅ ToastContainer is outside the form */}
        <ToastContainer position="top-center" autoClose={2000} />
            <div className='flex mx-auto justify-center items-center '>
                <div className="hero bg-gradient-to-r   min-h-screen">
                    <div className="hero-content w-full flex-col lg:flex-row-reverse">
                        <div className="card  bg-white  w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className='flex mx-auto font text-3xl py-6'>Login now!</h1>
                            <div className="card-body">
                                <form onSubmit={handleLogin} className="fieldset">
                                    <label className="label">Email</label>
                                    <input required type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' required type="password" className="input" placeholder="Password" />
                                    <div><Link to="/auth/reset"> Forgot password?</Link></div>

                                    {error && <p className='text-red-600 text-xs'>{error}</p>}

                                    <button type='submit' className="btn btn-neutral mt-4">Login</button>

                                    <p className='text-center py-5'>Don’t have an account yet?
                                        <Link className='text-blue-500 px-1 font-semibold' to="/auth/register">Register</Link> here
                                    </p>
                                </form>
                                <button onClick={googleLogin} className="btn my-2 bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
