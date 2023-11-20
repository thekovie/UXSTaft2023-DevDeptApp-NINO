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
                <p className="text-center sm:text-xl sm:text-left font-normal">Here is an excuse for you:</p>
            </div>
            <div className="flex justify-center sm:justify-normal">
                <p className="sm:text-xl font-bold">Category:</p>
                <p className="sm:text-xl font-normal ml-1">{ category }</p>
            </div>
        </div>
        <div className="flex flex-col justify-center mt-4 rounded-lg">
            <button className="btn btn-outline btn-accent text-xl sm:text-2xl font-normal h-full p-4 text-center" onClick={() => CopyToClipboard(excuse)}>
                { excuse }
            </button>
            <p className="text-center text-md mt-6">Click on the excuse to copy it to your clipboard!</p>
        </div>
    </div>
  )
}

export default ExcuseResult