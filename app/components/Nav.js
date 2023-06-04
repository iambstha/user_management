import Link from "next/link"
export default function Nav(){
    return(
        <nav className=" mb-4 " >
            <ul className=" flex text-orange-700 w-full border-2 ">
                <li className=" p-2 m-2 "><Link href='/' >Home</Link></li>
                <li className=" p-2 m-2 "><Link href='/about' >About</Link></li>
                <li className=" p-2 m-2 "><Link href='/about/me' >Me</Link></li>
            </ul>
        </nav>
    )
}