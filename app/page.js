
import { prisma } from '@/db'
import Link from 'next/link'

function getTodos(){
  return prisma.todo.findMany()
}

export default async function Home() {
  const todos = await getTodos()
  // await prisma.todo.create({data : {title : 'test',complete: false}})


  // const deleteTopic = async () => {
  //   await prisma.todo.deleteMany()
  // }

  // await prisma.todo.deleteMany()
  
  const handleClick = (e) => {
    console.log("Clicked")
  }

  return (
    <main className=" flex flex-col m-2 p-2 ">
      <h1 className='  flex justify-between items-center mb-4 ' >
        <p className='text-2xl text-orange-400 uppercase  ' >Newest Users</p>
        {/* <Link href='/add-users' className=' border-2 border-orange-200 p-2 pl-4 pr-4 bg-orange-200 text-blue-950 hover:bg-orange-400 hover:border-orange-400 rounded-md '>Add users</Link> */}
      </h1>
      {/* <iframe src="https://reactwithbishal.substack.com/embed" width="100%" height="auto" className=' bg-white '  frameborder="0" ></iframe> */}
      {
       todos.length ? 
       <ul className=' flex gap-4 flex-wrap '>
       {
         todos.map(todo => (
           <li key={todo.id} className=' felx text-center justify-center border-2 border-slate-200 p-2 pl-4 pr-4 hover:bg-slate-200 hover:border-slate-200 cursor-pointer rounded-lg w-60  ' >
             {todo.title}
             <br />
             <span>{todo.createdAt.toLocaleDateString()}</span>
             <br />
             <span>{todo.createdAt.toLocaleTimeString()}</span>
           </li>
         ))
       }
     </ul>
     : 
     <span>No users found . . .</span> 
      }
      
    </main>
  )
}
