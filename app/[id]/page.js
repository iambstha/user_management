import fecthData from "../fetching/fetch"


export default async  function DynamicPage({ params }) {
    const data = await fecthData()
    console.log(await data)
    let id;
    for (let i = 0; i < data.length; i++) {
      if (data[i].username.toLowerCase() === params.id.toLowerCase()) {
        id = data[i].id;
        break;
      }
    }
    return <div className=" border-2 border-slate-200 m-4 p-4 ">
        <ul >
            <li className=" text-2xl mb-2 " ><span className="  " >Id:</span> {data[id - 1].id}</li>
            <li className="  " ><span className=" text-orange-500 " >Name:</span> {data[id - 1].name}</li>
            <li className="  " ><span className=" text-orange-500 " >Username:</span> {data[id - 1].username}</li>
            <li className="  " ><span className=" text-orange-500 " >Email:</span> {data[id - 1].email}</li>
            <li className="  " ><span className=" text-orange-500 " >Website:</span> {data[id - 1].website}</li>
            <li className="  " ><span className=" text-orange-500 " >Phone:</span> {data[id - 1].phone}</li>
        </ul>
    </div>
}