import Marquee from "react-fast-marquee";

const MarqueePage = () => {
    return (
        <div className="rounded-xl shadow-md shadow-black bg-[#002c35] p-2">
            <Marquee speed={100}>
                <p className="mr-6">🐻‍❄️🏆 বাংলা বাজীতে আপনাকে স্বাগতম । </p>
                <p className="mr-6">🏆🏆🏆 আপনার প্রথম জমাতে ৮০% বোনাস পান । </p>
                <p className="mr-6">🏆🏆🏆 আপনার বন্ধুকে আমন্ত্রণ জানান এবং ১০০০ হাজার টাকা জিতে নিন। </p>
            </Marquee>
            
        </div>
    )
}

export default MarqueePage
