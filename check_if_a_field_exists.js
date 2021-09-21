db.books.find({ reviews: { $exists: true } })
db.books.find({ reviews: { $exists: false } })

// true returns the objects that do have that attribute. false returns everything that does NOT have the attribute.