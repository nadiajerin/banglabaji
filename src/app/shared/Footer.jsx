"use client"

// components/Footer.tsx
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#00352f] md:py-6 max-md:p-4 main-width">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and License */}
        <div>
          <h2 className="text-xl font-bold mb-4">বাংলা বাজী</h2>
          <p className="text-sm mb-3">
            Licensed by GC Gaming<br />
            Licence No: MGA/B2C/123/2024
          </p>
          <img src="/pay/gaming_license.png" className="w-40" />
           
         
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">গুরুত্বপূর্ণ লিঙ্ক</h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Responsible Gaming</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Affiliate Program</a></li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-semibold mb-4">পেয়েমেন্ট মেথড</h3>
          <div className="flex flex-wrap gap-2">
            <Image src="/pay/pay16.png" alt="Visa" width={50} height={30} />
            <Image src="/pay/pay22.png" alt="MasterCard" width={50} height={30} />
            <Image src="/pay/pay33.png" alt="PayPal" width={50} height={30} />
            <Image src="/pay/pay34.png" alt="Skrill" width={50} height={30} />
            <Image src="/pay/pay45.png" alt="Neteller" width={50} height={30} />
          </div>
        </div>

        {/* Social & Mobile */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ফলো করুন</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook text-xl hover:text-white" /></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter text-xl hover:text-white" /></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram text-xl hover:text-white" /></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube text-xl hover:text-white" /></a>
          </div>
          <p className="text-sm text-gray-400">Download our app:</p>
          <div className="flex space-x-2 mt-2">
            <Image src="/pay/app.png" alt="App Store" width={120} height={40} />
            <Image src="/pay/play.png" alt="Google Play" width={120} height={40} />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} বাংলা বাজী. All Rights Reserved.
      </div>
    </footer>
  );
}
