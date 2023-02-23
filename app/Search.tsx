'use client'
import { useRef, useState, useEffect } from "react";

export default function useSearch() {
    const [search, setSearch] = useState('')
    const searchValue = useRef('')

    useEffect(() => {
        searchValue.current.focus()
      }, [])

    function handleSearch() {
        setSearch(searchValue.current.value.toLowerCase())
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return {
    search,
    render: (
        <form onSubmit={handleSubmit}>
            <h1>Search</h1>
            <input type="text" name="search" ref={searchValue} onChange={handleSearch}/>
        </form>
    )}
}