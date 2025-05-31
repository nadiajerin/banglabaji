"use client"
import Link from "next/link"
import { useContext } from "react"
import { authContext } from "../lib/AuthProvider"
import { usePathname, useRouter } from 'next/navigation';


const Login = () => {

    const value = useContext(authContext)
    const { handleLogin } = value;
    const router = useRouter();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userValue = [email, password];

        if(password.length < 6){
            alert('password should be 6 character')
        }

        // Firebase Login 
        handleLogin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if(user){
                    router.push('/');
                    alert('login success')
                }
                // alert(user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                 alert(errorMessage)
            })
    }


    return (
       <div className='relative min-h-screen'>
                   <div className="flex items-center justify-center min-h-screen reg-bg max-sm:pt-4">
                       <div className="z-10 p-6 rounded-lg w-96 bg-[#004951] shadow-md shadow-black">
                         <p className="text-xl lg:text-2xl font-semibold text-[#00c5ff] text-center">বাংলা বাজী</p>
                           <h2 className="text-xl font-semibold mb-6 text-center">স্বাগতম, লগইন করুন!</h2>
                           <form onSubmit={handleSubmit}>
                                 <p className="text-sm">আপনার ইমেল লিখুন</p>
                                <input
                                   type="email"
                                   name="email"
                                   required
                                  
                                   className="w-full bg-[#002632] p-2 border-none rounded-md  mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                               />
                                <p className="text-sm">পাসওর্য়াড দিন</p>
                                <input
                                   type="password"
                                   name="password"
                                   required
                               
                                   className="w-full bg-[#002632]  p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                               />
                               <button
                                   type="submit"
                                   className="w-full bg-[#ffc400] text-black py-3 rounded-md font-bold hover:bg-orange-600 transition"
                               >
                                  লগইন করুন
                               </button>
                           </form>
                           <p className="text-center mt-4 text-[#14a0ff]">
                               এখনো কোনো একাউন্ট নেই? <Link href="/register" className="text-white hover:underline">নিবন্ধন করুন</Link>
                           </p>
                       </div>
                   </div>
               </div>
    )
}

export default Login
