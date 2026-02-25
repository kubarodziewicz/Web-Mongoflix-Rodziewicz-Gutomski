db = db.getSiblingDB("Movies")

print("--- Analysis --- ")

print("#2 Lista średnich ocen filmów")
const average_rating = db.movie.aggregate([
    {$lookup: {from: "reviews", localField: "title", foreignField: "movie_title", as: "review"}},
    {$unwind: {path: "$review"}},
    {$group: {_id: "$title", average_rating: {$avg: "$review.rating"}}},
    {$set: {average_rating: {$round: ["$average_rating", 1]}}}
]).toArray()

printjson(average_rating)