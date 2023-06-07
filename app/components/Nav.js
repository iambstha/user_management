import Link from "next/link"
export default function Nav() {
    return (
        <nav className=" mb-4 flex justify-between w-full border-2 " >
            <ul className=" flex justify-start text-orange-700 ">
                <li className=" p-2 m-2 "><Link href='/' >Homepage</Link></li>
            </ul>
            <ul className=" flex justify-end text-orange-700 ">
                <li className=" p-2 m-2 "><Link href='/all-users' >Sample Users</Link></li>
                <li className=" p-2 m-2 border-2 border-orange-100 bg-orange-100 hover:bg-orange-200 hover:border-orange-200 transition-colors  "><Link href='/all-users/me' >My Profile</Link></li>
                <li className=" p-2 m-2 border-2 border-orange-100 bg-orange-100 hover:bg-orange-200 hover:border-orange-200 transition-colors  "><Link href='/add-users'  >Add users</Link></li>
            </ul>
        </nav>
    )
}