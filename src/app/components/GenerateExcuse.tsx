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
          setExcuse(result);
          console.log(result);
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
      {excuse && <ExcuseResult id={excuse[0].id} excuse={excuse[0].excuse} category={excuse[0].category} />}
    </div>
  );
}

export default GenerateExcuse