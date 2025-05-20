import React from 'react';

function Card({header, description}) {
    return (
        <div className='p-6 bg-white border border-gray-200 rounded-lg shadow-sm'>
            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-800'>{header}</h5>
            <p className='mb-3 font-inter text-gray-700'>{description}</p>
        </div>
    )
}

export default Card;