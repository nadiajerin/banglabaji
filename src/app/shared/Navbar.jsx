'use client';

import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { authContext } from '../lib/AuthProvider';
import { useRouter } from 'next/navigation';



export default function Navbar() {

    const router = useRouter();
    const currentUser = useContext(authContext)
    const { user, loading } = currentUser;
    const [finaluser, setUser] = useState('');

      useEffect(() => {
        async function fetchUser() {
          try {
            const response = await fetch(`/api/info/${user.email}`, {
              method: 'GET'
            });
            const data = await response.json();
            // console.log("data", data)
            setUser(data);
            // console.log(finaluser)
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        }

        fetchUser();
      }, [user, setUser]);

      if(!user){
        router.push("/register")
      }

    return (
        <nav className="bg-[#00352f] md:py-6 max-md:p-4 main-width ">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div >
                    <Link href="/">
                        <p className="text-xl lg:text-2xl font-semibold text-[#00c5ff]">Zaiqel Arveen</p>
                    </Link>
                </div>


                {/* Sign In/Sign Up Buttons */}
                {user ?
                    <div className='flex gap-2 items-center'>
                       
                        <p className='bg-[#013941] px-3 py-1 shadow-sm shadow-black font-bold'>Balance:   {JSON.stringify(finaluser?.balance)}.00</p> 
                        <Link href="/user-dashboard">
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJxOLfDct_vEPdS-6OsRnS-kDl_HCv5nI2A&s"
                         className='w-10 h-auto rounded-2xl' alt="" />
                         </Link>
                    </div> :
                    <div className="md:flex space-x-2 md:space-x-4">
                        <Link href="/login" className="px-4 py-2 bg-[#045861] rounded-lg shadow-md ">লগইন</Link>
                        <Link href="/register" className="px-4 py-2  bg-[#f6aa1d] rounded-lg shadow-md">নিবন্ধন করুন</Link>
                    </div>
                }


            </div>

            {/* Mobile Menu */}

        </nav>
    )
}
