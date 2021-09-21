db.books.find(
    {
        name: "Confident Ruby"
    },
    {
        _id: 0,
        publishedDate: 1,
        authors: 1
    }
).pretty()