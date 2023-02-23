import Movie from "./Movie"




export default async function Home() {

  
  const url: string = 'https://api.themoviedb.org/3'
  const data = await fetch(`${url}/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()

  type Movie = {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    name: string,
    first_air_date: string,
  }


  return (
    <main >
      <div className="grid gap-5 grid-cols-fluid">
      {res?.results?.map((movie: Movie) => ( 
            <Movie 
            name={movie.name}
            first_air_date={movie.first_air_date}
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
