import React from 'react';
import { categories } from '../data/data'; // Fixed typo in variable name

const Categories = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center mb-6'>
                Top Rated Menu Items
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((item) => (
                    <div 
                        key={item.id} // Use unique ID instead of index
                        className='bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:shadow-lg transition-shadow duration-300'
                    >
                        <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className='w-20 h-20 object-cover rounded-md' 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;