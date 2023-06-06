export default async function fecthData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
}