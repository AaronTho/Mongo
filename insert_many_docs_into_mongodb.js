db.books.insertMany([
    {
        "name": "Confident Ruby",
        "publishedDate": new Date(),
        "authors": [
            {
                "name": "Avdi Grimm"}
    ]
  },
  {
    "name": "The War of Art",
    "publishedDate": new Date(),
    "authors": [
      {"name": "Steven Pressfield"}
    ]
  },
  {
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
      {"name": "Malcolm Gladwell"}
    ]
  }
])

// returns: 
// "acknowledged" : true,
//         "insertedIds" : [
//                 ObjectId("614a142d4b46055757a3153b"),
//                 ObjectId("614a142d4b46055757a3153c"),
//                 ObjectId("614a142d4b46055757a3153d")