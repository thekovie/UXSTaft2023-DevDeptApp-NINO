import React from 'react'

interface Excuse {
    id: number
    excuse: string
    category: string
}

const ExcuseResult = ( {id, excuse, category}: Excuse ) => {
  return (
    <div>
        <div className="flex justify-center mt-10">
            <p className="text-2xl font-bold text-center text-white">{ excuse }</p>
        </div>
    </div>
  )
}

export default ExcuseResult