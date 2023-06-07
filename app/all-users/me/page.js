import { prisma } from "@/db"

const count = prisma.todo.count()

export default function Me(){
    return (
        <div className=" flex flex-col justify-center ">
            <span>Total number of registered users: {count}</span>
            <span>Hello again</span>
        </div>
    )
}