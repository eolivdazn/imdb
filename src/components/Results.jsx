export default function Results(results) {
    return (
        <div>
            {results.results.map((result) => (
                <div key={result.id}>
                    {result.title }
                </div>
            ))}
        </div>
    )
}
