import Movie from "./Movie"
import useSearch from "./Search"

export default async function Home() {

  const {render, search} = useSearch()

  const url: string = 'https://api.themoviedb.org/3'
  const searchTerm: string = ''
  const data = await fetch(`${url}/movie/popular?api_key=${process.env.API_KEY}`, )
  const res = await data.json()

  type Movie = {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
  }


  return (
    <main >
      <div>
        {render}
      </div>
      <div className="grid gap-8 grid-cols-fluid">
      {res.results.map((movie: Movie) => ( 
            <Movie 
            key={movie.id}
            id={movie.id}
            title={movie.title} 
            release_date={movie.release_date} 
            poster_path={movie.poster_path}/>
        ))}
        </div>
    </main>
  )
}
