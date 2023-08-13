import Results from "@/components/Results";

const API_KEY = process.env.APLI_KEY

async function getSearch(searchParams) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    return await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchParams}&include_adult=false&language=en-US&page=1`, {
        ...options
    })
        .then(response => response.json())
        .catch(err => console.error(err))
}

export default async function SearchPage({params}) {

    const searchResult = await getSearch(params.search)
    console.log(searchResult)
    if (!searchResult) {
        throw new Error("Failed to fetch API");
    }
    return (
        <div>
            {searchResult && searchResult.results.length === 0 && (
                <h1>No search results...</h1>
            )}
            <Results results={searchResult.results}/>
        </div>
    );
}
