
export async function generateStaticParams(){
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular/?api_key=${process.env.API_KEY}`
        )
    const res = await data.json()
    return res.results.map((movie: any) => ({
        movie: movie.id.toString()
    }))
}

export default async function  MovieDetail({ params }: any){

    

    const {movie} = params

    const imagePath = 'https://image.tmdb.org/t/p/original'

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    // console.log(res)
    return (
        <div>
            <div>
            <h1 className="text-2xl">{res.title}</h1>
            <h2 className="text-lg">{res.release_date}</h2>
            <h3>Runtime: {res.runtime} minutes</h3>
            <h3 className="text-sm bg-green-600 inline-block py-2 px-2 my-2 rounded-md">{res.status}</h3>
            <img 
            className="my-12 w-full"
            src={imagePath + res.poster_path}
            alt={res.title}
            width={1000}
            height={1000}
            />
            <p>{res.overview}</p>
            </div>
        </div>
    )
}