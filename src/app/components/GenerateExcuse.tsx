"use client"

import React from 'react'
import { useState, useEffect } from "react"
import ExcuseResult from './ExcuseResult'


interface Excuse {
  id: number
  excuse: string
  category: string
}

const GenerateExcuse = () => {
  const [excuse, setExcuse] = useState<Excuse[] | null>();
  const [error, setError] = useState(null);

  useEffect(() => {
    getExcuse();
  } , [])

  async function getExcuse() {
    await fetch("https://excuser-three.vercel.app/v1/excuse")
      .then(res => res.json())
      .then(
        (result) => {
          setExcuse(result[0]);
          console.log(result[0]);
        },
        (error) => {
          setError(error);
        }
      )
  }

  return (
    <div>
      <div className="flex justify-center mt-10">
        <button className="btn btn-primary text-white" onClick={getExcuse}>
          Generate a random excuse
        </button>
      </div>
      <ExcuseResult id={excuse?.id} excuse={excuse?.excuse} category={excuse?.category} />
    </div>
  )
}

export default GenerateExcuse