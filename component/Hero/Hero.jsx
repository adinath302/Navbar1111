import React from 'react'
import img from "../../../public/img.png"
import { FaPlay } from "react-icons/fa";

const Hero = () => {
    return (
        <header className='max-w-[132rem] !mx-auto !mt-10 
        !px-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
                <div className='flex flex-col justify- '>
                    <h1>Consistency with the focus gives you the <span>
                        confidence
                    </span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit ut repellat nesciunt.</p>
                    <div>
                        <button>Order Now</button>
                        <button><FaPlay />
                            Watch Now </button>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Hero