import Link from "next/link"
export default function Nav(){
    return(
        <nav className=" mb-4 " >
            <ul className=" flex text-orange-700 w-full border-2 ">
                <li className=" p-2 m-2 "><Link href='/' >Home</Link></li>
                <li className=" p-2 m-2 "><Link href='/all-users' >All Users</Link></li>
                <li className=" p-2 m-2 "><Link href='/all-users/me' >Me</Link></li>
                <li className=" p-2 m-2 "><Link href='/add-users' className=" border-2 border-slate-400 p-2 bg-slate-400 text-slate-100 hover:bg-slate-500 hover:border-slate-500 rounded " >Add users</Link></li>
            </ul>
        </nav>
    )
}