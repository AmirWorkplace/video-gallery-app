import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searched } from "../../features/filters/filterSlice"
import { useMatch, useNavigate } from "react-router-dom"

export default function Search({ searchImg }) {
  const dispatch = useDispatch()
  const match = useMatch("/")
  const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState(
    useSelector((state) => state.filters.search)
  )

  function searchFormHandler(event) {
    event.preventDefault()
    searchHandler(searchQuery)
  }

  function searchHandler(searchQuery) {
    dispatch(searched(searchQuery))
    if (!match) {
      navigate("/")
    }
  }

  useEffect(() => {
    if (searchQuery === null || searchQuery === "")
      dispatch(searched(searchQuery))
  }, [dispatch, searchQuery])

  return (
    <div className='border border-slate-200 flex items-center bg-white h-10 pl-3 pr-1.5 rounded-lg text-sm ring-emerald-200'>
      <form onSubmit={searchFormHandler}>
        <input
          className='outline-none border-none mr-2'
          type='search'
          name='search'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <div
        className='w-7 h-7 flex items-center justify-center rounded-md bg-slate-300 hover:bg-cyan-300 duration-300  cursor-pointer'
        onClick={() => searchHandler(searchQuery)}>
        <img className='inline h-4' src={searchImg} alt='Search' />
      </div>
    </div>
  )
}
