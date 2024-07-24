import { useRef, useEffect } from 'react';
import dumbbell from '../assets/dumbbells.png'
import { FaArrowDownLong } from "react-icons/fa6";
import { gsap } from 'gsap'
const Hero = () => {

    let BigText = useRef(null);
    useEffect(() => {
        gsap.to(BigText.current, { opacity: 1, duration: 2 });
    }, [])
    
    return ( 
        <>
        <section className="w-full h-[80vh] bg-transparent flex items-center justify-center relative">
            <p className="absolute top-5 md:top-10 left-3 text-gray-200 font-bold text-xs md:text-sm">BE THE BEST</p>
            {/* <video src={ dumbbell } className='w-10 absolute top-10 right-4'></video> */}
            <img src={dumbbell} className='w-10 md:w-20 absolute top-5 md:top-10 right-4 animate-bounce' alt="A dumbbell" />
            <div className="flex flex-col items-center justify-between w-fit h-[90%] mt-10 md:h-fit relative">
                
                <h1 ref={BigText} className="font-bold text-6xl md:text-8xl text-right tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 opacity-0">Bring Out <br /> The Best - <br /> Side Of <br /> You</h1>
                <p className="text-xs md:text-sm text-left text-gray-400 md:absolute bottom-20 -right-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Voluptas quod ratione illum iusto voluptatem excepturi, <br /> magni nihil odio deleniti ipsum ullam maiores corrupti..</p>

                <div className='h-20 w-20 bg-transparent rounded-full flex items-center justify-center relative cursor-pointer'>
                    <div className='absolute top-0 left-0 h-20 w-20 bg-transparent rounded-full border-white border-dotted border-4 animate-spin-slow'>
                    </div>
                    <FaArrowDownLong className='text-white text-2xl' />
                </div>
            </div>
        </section>
    </>
     );
}
 
export default Hero;