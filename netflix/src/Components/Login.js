import Header from "./Header";
import { useState ,useRef} from "react";
import { CheckValidate } from "../Utils/validate";
const Login = () => {

    const[isSignInForm,setIsSignInForm] = useState(true);
    const [checkErrorMsg,setcheckErrorMsg] =  useState(null)

    const email = useRef(null);
    const  password = useRef(null);
    const  name = useRef(null);



    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }


    const handleSubmitButton = () =>{
        // validation
         const nameValue = isSignInForm ? null : name.current?.value;
        const message = CheckValidate(email.current.value , password.current.value ,nameValue);
        setcheckErrorMsg(message);
        
        

    }
    return (<>
         <div className="relative">

            <Header />
        </div>

        <div className=" absolute  bg-cover bg-center">

            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg" alt="BG-img"></img>
        </div>

        <div >
            <form onSubmit={(e)=>e.preventDefault()} className="absolute text-center p-6  w-4/12 text-white bg-black my-36 mx-auto right-0 left-0 bg-opacity-90 ">
                <h1 className=" text-left mx-16 m-4 p-2 text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input ref={name} type="text" placeholder="Name" className="my-2 p-2 bg-gray-900 w-9/12 rounded-lg" />}

                <input ref={email} type="text" placeholder="Email" className="my-2 p-2 bg-gray-900 w-9/12 rounded-md" />
                <input ref={password} type="text" placeholder="Password" className="my-2 p-2 bg-gray-900 w-9/12 rounded-lg" />
                <p className="text-left mx-16 text-red-500 text-md bold">{checkErrorMsg}</p>
              
                <button className="bg-red-600 my-4 p-3 cursor-pointer rounded-lg w-9/12" onClick={handleSubmitButton}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className=" text-left mx-16 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already regested? Sign In Now" }</p>

            </form>
        </div>



    </>)
}
export default Login;