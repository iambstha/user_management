'use client'
import fetchData from '../fetching/fetch'
import { useState } from "react"
const Search = async (props) => {
  const [keyword, setKeyword] = useState()
  const [filteredData, setFilteredData] = useState([])
  const handleChange = (e)=> {
    setKeyword(e.target.value)
  }
  const data = await fetchData()
  return (
    <div>
        <input onChange={(e) => handleChange(e)} type="text" placeholder="Search users ..." className=" border-2 border-slate-200 rounded outline-none p-1 pl-2 focus-within:border-slate-600 flex w-full" />
    </div>
  )
}

export default Search