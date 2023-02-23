import React from 'react'
import Movie from '../Movie';

type PageProps = {
  params: {
    searchTerm: string
  };
};


const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${searchTerm}&page=1`);
    
    const data = await res.json();
    return data;
}

async function SearchResults({params: {searchTerm}}: PageProps) {

  const searchResults = await search(searchTerm)
  // console.log(searchResults)


  return (
    <div className="grid gap-5 grid-cols-fluid">
      {searchResults.results.map((result: any) => (
        <Movie 
        key={result.id}
        id={result.id}
        title={result.title} 
        name={result.name}
        release_date={result.release_date} 
        first_air_date={result.first_air_date}
        poster_path={result.poster_path}/>
    ))}
    </div>
  )
}

export default SearchResults
