
import { prisma } from '@/db'

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
    <main className=" flex flex-col m-2 p-2 w-full ">
      <h1 className='  flex justify-between items-center mb-4 ' >
        <p className='text-2xl text-orange-400 uppercase  ' >Newest Users</p>
        <button className=' border-2 border-orange-200 p-2 pl-4 pr-4 bg-orange-200 text-blue-950 rounded-md '>Delete All</button>
      </h1>
      {/* <iframe src="https://reactwithbishal.substack.com/embed" width="100%" height="auto" className=' bg-white '  frameborder="0" ></iframe> */}
      <ul className=' flex gap-2 flex-wrap '>
        {
          todos.map(todo => (
            <li key={todo.id} className=' felx text-center justify-center border-2 border-slate-200 p-2 pl-4 pr-4  ' >{todo.title}</li>
          ))
        }
      </ul>
    </main>
  )
}
