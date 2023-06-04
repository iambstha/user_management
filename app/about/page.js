import Link from "next/link"

export default function About(){
    return (
        <div>
            <ul className=" p-4 text-blue-800 ">
                <li><Link href='Bishal' >Bishal</Link></li>
                <li><Link href='Angel' >Angel</Link></li>
                <li><Link href='Rabin' >Rabin</Link></li>
            </ul>
        </div>
    )
}