import React from 'react';

const HadelineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            
            <div className='rounded-xl relative'>
                <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-4'>Sun's Out , BOGO's Out </p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>


                <div className='rounded-xl relative'>
                <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-4'>The Chhabara</p>
                    <p className='px-2'>Added Delay</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>


                <div className='rounded-xl relative'>
                <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-4'>Highway King  </p>
                    <p className='px-2'>Available 24/7</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>


        </div>
    );
}

export default HadelineCards;
