import Link from "next/link"
import fecthData from "../fetching/fetch"



export default async function About(){
    const data = await fecthData()
    console.log(data)
    return (
            <ul className=" text-blue-800 flex flex-row w-auto ">
                {data.map(i => {
                    return  <li key={i.id} className="cursor-pointer flex mr-2 mt-2 border-2 border-slate-300 bg-slate-200 hover:border-slate-500 focus-within:border-slate-900 "><Link className=" p-2 " href={i.username} >{i.username}</Link></li>
                })}
            </ul>
    )
}