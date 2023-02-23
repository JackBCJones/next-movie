'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Movie = {
    title: string
    release_date : string
    poster_path: string
    id: number
}

export default function Movie({title, release_date, poster_path, id}: Movie) {

    const imagePath = 'https://image.tmdb.org/t/p/original'
    const [watchList, setWatchList] = useState([])
    const [watched, setWatched] = useState([])

    //  function handleList(id: number) {
    //     if(watchList.includes(id)) {
    //         const newWatch = [...watchList.filter((i) => i !== id)]
    //         setWatchList(newWatch)
    //     } else {
    //         const newWatch = [...watchList, id]
    //         setWatchList(newWatch)
    //     }
    // }

    // function handleWatched(id: number) {
    //     if(watched.includes(id)) {
    //         const newWatch = [...watched.filter((i) => i !== id)]
    //         setWatched(newWatch)
    //     } else {
    //         const newWatch = [...watched, id]
    //         setWatched(newWatch)
    //     }
    // }

    

    return (
        <div className="flex flex-col my-5">
            <Link href={`/${id}`}>
                <img 
                width={300}
                // height={300}
                src={imagePath + poster_path}
                alt={title}
                />
            </Link>
            <div className="bg-teal-500 inline-block">
                <h1 className="text-bold">{title}</h1>
                <h2 className="text-gray-700 text-sm">{release_date}</h2>
            </div>
            <div className="flex gap-5">
                <button className="bg-blue-500 rounded-lg">Save to watch later</button>
                <button className="bg-red-500 rounded-lg">Save to already watched</button>
            </div>
        </div>
    )
}