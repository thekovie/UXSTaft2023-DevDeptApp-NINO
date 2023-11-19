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

  async function getExcuse(category: string = "") {
    await fetch(`https://excuser-three.vercel.app/v1/excuse/${category}`)
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
      <div className="flex flex-col justify-center mt-10">
        <p className="text-xl font-bold text-white text-center">Select what excuse you need:</p>
        <div className="choices grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4">
          <button className="btn btn-accent text-white" onClick={() => getExcuse("")}>
            Random
          </button>
          <button className="btn btn-accent text-white" onClick={() => getExcuse("office")}>
            Office
          </button>
          <button className="btn btn-accent text-white" onClick={() => getExcuse("college")}>
            College
          </button>
          <button className="btn btn-accent text-white" onClick={() => getExcuse("family")}>
            Family
          </button>
          <button className="btn btn-accent text-white" onClick={() => getExcuse("children")}>
            Children
          </button>
          <button className="btn btn-accent text-white" onClick={() => getExcuse("party")}>
            Party
          </button>
          <button className="btn btn-accent text-white" onClick={() => getExcuse("funny")}>
            Funny
          </button>
          <button className="btn btn-accent text-white" onClick={() => getExcuse("unbelievable")}>
            Unbelievable
          </button>
          <button className="btn btn-accent text-white" onClick={() => getExcuse("developers")}>
            Developers
          </button>
          <button className="btn btn-accent text-white" onClick={() => getExcuse("gaming")}>
            Gaming
          </button>
        </div>
      </div>
      {excuse && <ExcuseResult id={excuse[0].id} excuse={excuse[0].excuse} category={excuse[0].category} />}
    </div>
  );
}

export default GenerateExcuse