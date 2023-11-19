import React from 'react'

interface Excuse {
    id: number
    excuse: string
    category: string
}

function CopyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
}

const ExcuseResult = ( {id, excuse, category}: Excuse ) => {
  category = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div>
        <div className="flex flex-col sm:flex-row justify-between mt-12">
            <div>
                <p className="text-center sm:text-xl sm:text-left font-normal text-white">Here is an excuse for you:</p>
            </div>
            <div className="flex justify-center sm:justify-normal">
                <p className="sm:text-xl font-bold text-white">Category:</p>
                <p className="sm:text-xl font-normal ml-1 text-white">{ category }</p>
            </div>
        </div>
        <div className="flex flex-col justify-center mt-4 rounded-lg border border-gray-300 bg-base-100 p-4">
            <p className="text-xl sm:text-2xl font-normal text-center text-white">{ excuse }</p>
        </div>
    </div>
  )
}

export default ExcuseResult