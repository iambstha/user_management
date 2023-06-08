

export default async function fetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    return data
}