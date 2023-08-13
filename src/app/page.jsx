import Results from "@/components/Results";
export const dynamic = "force-dynamic"; // this is the fix
const API_KEY = process.env.API_KEY
export default async function Home({searchParams}) {

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};
    const genre = searchParams.genre || "fetchTrending";

    const res = await fetch(`http://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 
        'trending/all/week'}?language=en-US&page=1`,{...options, next: { revalidate: 3600 } })
        .then(response => response.json())
        .catch(err => console.error(err));

if(!res) {
    throw new Error("Failed to fetch API");
}

    return <Results results={res.results} />;
}
