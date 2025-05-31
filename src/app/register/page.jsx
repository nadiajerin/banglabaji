"use client"

import { useContext } from "react";

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { authContext } from "../lib/AuthProvider";


const page = () => {

     const value = useContext(authContext)
    const { handleRegister } = value;
    const router = useRouter();
    
    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const mobileNumber = form.mobileNumber.value;
        const password = form.password.value;
        const balance = 0.00;
        // console.log(name, gameId, mobileNumber, email, password)

        if (password.length < 6) {
          alert('Password should be at least 6 characters');
          return;
        }
      
        try {
          // Firebase Register
          const userCredential = await handleRegister(email, password);
          const user = userCredential.user;
      
          if (user) {
            alert('Register success');
            router.push('/');
            // Now post the user data into database
            const response = await fetch('/api/info', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, mobileNumber, password, balance })
            });
      
            const data = await response.json();  // <- NEED to await here
            // console.log('Server Response:', data);
      
            if (response.ok) {
              // maybe redirect or show success message
            } else {
             alert('Failed to save user info:', data.message);
            }
          }
        } catch (error) {
          alert('Error during register:', error.message);
        }
      }
      

    return (
        <div className='relative min-h-screen'>
            <div className="flex items-center justify-center min-h-screen reg-bg max-sm:pt-4">
                <div className="bg-[#004951]  z-10 p-6 rounded-lg shadow-md shadow-black w-96 ">
                   <p className="text-xl lg:text-2xl font-semibold text-[#00c5ff] text-center">বাংলা বাজী</p>
                    <h2 className="text-xl font-semibold mb-6 text-center">নিবন্ধন করুন!</h2>
                    <form onSubmit={handleSubmit}>
                      <p className="text-sm">আপনার ইমেল লিখুন</p>
                        <input
                            type="text"
                            name="email"
                            required
                            className="w-full p-2 bg-[#002632] rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                        />
                         <p className="text-sm">মোবাইল নাম্বার</p>
                         <input
                            type="number"
                            name="mobileNumber"
                            required
                            className="w-full p-2 bg-[#002632] rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                        />
                         <p className="text-sm">পাসওর্য়াড দিন</p>
                         <input
                            type="password"
                            name="password"
                            required
                            className="w-full p-2 bg-[#002632] rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#002632]"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ffc400] text-black py-3 rounded-md font-bold hover:bg-orange-600 transition"
                        >
                            নিবন্ধন করুন!
                        </button>
                    </form>
                    <p className="text-center mt-4 text-[#14a0ff]">
                        ইতিমধ্যে আপনার একটি একাউন্ট রয়েছে? <Link href="/login" className="text-white hover:underline">লগইন করুন</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page
