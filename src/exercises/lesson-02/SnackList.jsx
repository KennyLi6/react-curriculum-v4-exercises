function SnackList() {
    const rankings = [
        {name: "Gummies", rank: 3},
        {name: "Chocolate", rank: 2},
        {name: "Chips", rank: 1},
    ]

    const sortedRankings = rankings.toSorted((a, b) => a.rank - b.rank)

    return (
        <ul>
            {sortedRankings.map(item => <li key={item.rank}>{item.name}</li>)}
        </ul>
    );
}

export default SnackList;