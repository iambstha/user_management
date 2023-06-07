import { prisma } from '@/db'
export default async function handleDelete(){
    return await prisma.todo.deleteMany()
}