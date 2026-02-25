db = db.getSiblingDB("Movies")

print("--- Analysis --- ")

print("#1 Filmy z kategorii Action po 2000 roku")
const categorry_year = db.movie.find({
    date: { $gt: new Date("2000-01-01") },
    genres: "Action"
}).toArray()

printjson(categorry_year)

print("#2 Lista średnich ocen filmów")
const average_rating = db.movie.aggregate([
    {$lookup: {from: "reviews", localField: "title", foreignField: "movie_title", as: "review"}},
    {$unwind: {path: "$review"}},
    {$group: {_id: "$title", average_rating: {$avg: "$review.rating"}}},
    {$set: {average_rating: {$round: ["$average_rating", 1]}}}
]).toArray()

printjson(average_rating)


print("#3 Łączna liczba wyświetleń dla reżyserów")
const number_views = db.movie.aggregate([
    {
        $group: {
            _id: "$director",
            total_views: { $sum: "$view_count" }
        }
    },
    {
        $sort: { total_views: -1 }
    }
]).toArray()

printjson(number_views)