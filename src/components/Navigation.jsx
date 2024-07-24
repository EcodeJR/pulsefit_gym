import { Link } from 'react-router-dom';


const SmallScreen = 
            <>
                <nav className='fixed top-0 left-0 w-full h-fit flex items-center justify-around'>
                    <h1 className="text-3xl text-[#fff] tracking-widest font-extrabold">PulseFit</h1>
                    <ul className='flex flex-row items-center justify-center w-full'>
                        <li className="text-xl text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-75 cursor-pointer mx-3 font-bold"><Link to='/'>Home</Link></li>
                        <li className="text-xl text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-75 cursor-pointer mx-3 font-bold"><Link to='/about'>About</Link></li>
                        <li className="text-xl text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-75 cursor-pointer mx-3 font-bold"><Link to='/services'>Services</Link></li>
                        <li className="text-xl text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-75 cursor-pointer mx-3 font-bold"><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </>





const Navigation = () => {
    return ( 
        <nav className="w-full h-fit py-5 px-3 bg-black/20 flex items-center justify-between">
            <ul className="flex">
                <li className="text-sm text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-75 cursor-pointer mx-3 font-bold"><Link to="/">Home</Link></li>
                <li className="text-sm text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-75 cursor-pointer mx-3 font-bold"><Link to="/about">About</Link></li>
            </ul>
            <h1 className="text-3xl text-[#fff] tracking-widest font-extrabold">PulseFit</h1>
            <ul className="flex">
                <li className="text-sm text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-75 cursor-pointer mx-3 font-bold"><Link to="/services">Services</Link></li>
                <li className="text-sm text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-75 cursor-pointer mx-3 font-bold"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navigation;