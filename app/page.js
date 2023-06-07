import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '@/db'

// prisma.todo.create()

export default async function Home() {
  const todos = await prisma.todo.findMany()
  return (
    <main className="">
      <h1>Hello again</h1>
      <iframe src="https://reactwithbishal.substack.com/embed" width="100%" height="auto" className=' bg-white '  frameborder="0" ></iframe>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
      </ul>
    </main>
  )
}
