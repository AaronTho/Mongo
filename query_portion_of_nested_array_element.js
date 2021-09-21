db.books.find(
    {
        name: "Blink"
    },
    {
        publishedDate: 1,
        name: 1,
        authors: { $slice: 1}
    }
).pretty()

// will return only the 1st author. $slice: returns an index location of an object