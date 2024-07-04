import { MenuIcon } from '@heroicons/react/outline'
import { useRef } from 'react';


function Navbar() {
    const middleElementRef = useRef(null);

    const scrollToMiddle = () => {
      if (middleElementRef.current) {
        middleElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    return (
        <div className="w-full 2xl:w-large px-6 lg:px-28 2xl:px-0 mx-auto flex justify-between items-center pt-6 lg:pt-10">
            <div className="w-logo">
                <a href="#">
                    <img src="/brber.png" alt="logo fintech" />
                </a>
            </div>
            
            <div className="hidden xl:block">
            </div>
            <div className="block xl:hidden">
                <button className='pt-1'><MenuIcon className='w-8 text-white'/></button>
            </div>
        </div>
    )
}

export default Navbar
