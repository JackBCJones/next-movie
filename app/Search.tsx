'use client'
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";

export default function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter(); 

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`${search}`)
    }




    return (
        <form onSubmit={handleSubmit}>
            <input 
            className="p-5 inline-block"
            type="text" 
            value={search} 
            placeholder="Search for a movie or TV show"
            onChange={(e) => setSearch(e.target.value)}/>
            <button className="m-8 bg-blue-500 rounded-lg p-3" type="submit">
                Search
            </button>
        </form>
    )
}