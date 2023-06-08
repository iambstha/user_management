import fetchData from "../fetching/fetch"
import Image from "next/image";


export default async  function DynamicPage({ params }) {
    const data = await fetchData()
    let id;
    for (let i = 0; i < data.length; i++) {
      if (encodeURIComponent(data[i].title.toLowerCase()) === params.id.toLowerCase()) {
        id = data[i].id;
        break;
      }
    }
    return <div className=" border-2 border-slate-200 m-4 p-4 ">
        <ul >
            <li className=" text-2xl mb-2 " ><span className="  " >Id:</span> {data[id - 1].id}</li>
            <li className="  " ><span className=" text-orange-500 " >Title:</span> {data[id - 1].title}</li>
            <li className="  " >
              <Image src={data[id - 1].url} width={100} height={100} />
            </li>
        </ul>
    </div>
}