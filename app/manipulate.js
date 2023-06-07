import { prisma } from '@/db'
export function getTodos(){
    return prisma.todo.findMany()
  }
  
export function deleteTodo(){
    return prisma.todo.deleteMany()
  }
  