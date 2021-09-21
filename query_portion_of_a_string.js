db.books.findOne({ name: /.*deep work.*/i })

// the * tell mongo to look for this string anywhere in the document. the .i makes the search case insensitive.