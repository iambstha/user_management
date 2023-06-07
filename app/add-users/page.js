import { prisma } from '@/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

async function createTodo(data){
  'use server'
  const title = data.get('title')?.valueOf()
  if(typeof title !== 'string' || title.length === 0){
    throw new Error("invalid title")
  }
  await prisma.todo.create({
    data : {title, complete: false}
  })
  redirect('/')
}

const page = () => {
  return (
    <div className=' flex w-2/3 '>
      <form action={createTodo} className=' flex flex-col justify-between m-2 p-2 w-full ' >
        <input placeholder='Enter the name of the user' type='text' name='title' className='border-2 border-gray-300 outline-none w-full mb-4 h-10 pl-4 pr-4 shadow-sm ' />
        <div className=' flex justify-end gap-2 items-center text-center '>
          <Link href='/' className=' border-2 border-orange-200 rounded p-2 pl-4 pr-4 mr-2 hover:bg-orange-200 w-1/2 ' >Cancel</Link>
          <button type='submit' className=' border-2 border-orange-200 rounded w-1/2 p-2 pl-4 pr-4 mr-2 bg-orange-200 hover:bg-orange-400 hover:border-orange-400 ' >Add</button>
        </div>
      </form>
    </div>
  )
}

export default page