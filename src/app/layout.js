
import "./globals.css";
import AuthProvider from "./lib/AuthProvider";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";


export const metadata = {
  title: "বাংলা বাজী",
  description: "বাংলা বাজী",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/icon.jpg" sizes="any" />
      </head>
      <body
        className="bg-[#0c494a] text-white"
      >
        <AuthProvider>
          {/* <Navbar /> */}
          <main className="">
            {children}
          </main>
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
