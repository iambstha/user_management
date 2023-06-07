'use client'
import React from 'react'
import handleDelete from './serverDelete'

const Delete = async () => {
    const del = await handleDelete()

  return (
    <div>
        <input onClick={del} type='button' className=" border-2 border-slate-300 p-2 pl-4 pr-4 " value='Delete All' />
    </div>
  )
}

export default Delete