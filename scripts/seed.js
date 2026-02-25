db = db.getSiblingDB("Movies")

db.movie.drop()
db.reviews.drop()


print("--- Start")
db.movie.insertMany([
    {
        "title": "Inception",
        "date": ISODate("2010-07-16T00:00:00.000Z"),
        "genres": ["Science Fiction", "Thriller"],
        "director": "Christopher Nolan",
        "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        "isPremium": true,
        "view_count": 1250000
    },
    {
        "title": "Interstellar",
        "date": ISODate("2014-11-07T00:00:00.000Z"),
        "genres": ["Science Fiction", "Drama"],
        "director": "Christopher Nolan",
        "actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        "isPremium": false,
        "view_count": 980000
    },
    {
        "title": "The Dark Knight",
        "date": ISODate("2008-07-18T00:00:00.000Z"),
        "genres": ["Action", "Crime", "Drama"],
        "director": "Christopher Nolan",
        "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "isPremium": true,
        "view_count": 1500000
    },
    {
        "title": "The Shawshank Redemption",
        "date": ISODate("1994-09-23T00:00:00.000Z"),
        "genres": ["Drama"],
        "director": "Frank Darabont",
        "actors": ["Tim Robbins", "Morgan Freeman"],
        "isPremium": false,
        "view_count": 2000000
    },
    {
        "title": "Pulp Fiction",
        "date": ISODate("1994-10-14T00:00:00.000Z"),
        "genres": ["Crime", "Drama"],
        "director": "Quentin Tarantino",
        "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        "isPremium": true,
        "view_count": 1750000
    },
    {
        "title": "The Matrix",
        "date": ISODate("1999-03-31T00:00:00.000Z"),
        "genres": ["Science Fiction", "Action"],
        "director": "Lana Wachowski",
        "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        "isPremium": false,
        "view_count": 1600000
    },
    {
        "title": "Forrest Gump",
        "date": ISODate("1994-07-06T00:00:00.000Z"),
        "genres": ["Drama", "Romance"],
        "director": "Robert Zemeckis",
        "actors": ["Tom Hanks", "Robin Wright"],
        "isPremium": false,
        "view_count": 1400000
    },
    {
        "title": "Gladiator",
        "date": ISODate("2000-05-05T00:00:00.000Z"),
        "genres": ["Action", "Drama", "Adventure"],
        "director": "Ridley Scott",
        "actors": ["Russell Crowe", "Joaquin Phoenix"],
        "isPremium": true,
        "view_count": 1300000
    },
    {
        "title": "Titanic",
        "date": ISODate("1997-12-19T00:00:00.000Z"),
        "genres": ["Drama", "Romance"],
        "director": "James Cameron",
        "actors": ["Leonardo DiCaprio", "Kate Winslet"],
        "isPremium": true,
        "view_count": 2200000
    },
    {
        "title": "Avatar",
        "date": ISODate("2009-12-18T00:00:00.000Z"),
        "genres": ["Science Fiction", "Adventure"],
        "director": "James Cameron",
        "actors": ["Sam Worthington", "Zoe Saldana"],
        "isPremium": true,
        "view_count": 2100000
    }
]);

print("--- Wczytano filmy!")

db.reviews.insertMany([
    {
        "username": "movieFan92",
        "rating": 9.5,
        "review": "Mind-blowing concept and amazing visuals!",
        "movie_title": "Inception"
    },
    {
        "username": "spaceLover",
        "rating": 9,
        "review": "A beautiful and emotional space journey.",
        "movie_title": "Interstellar"
    },
    {
        "username": "batmanForever",
        "rating": 10,
        "review": "Best superhero movie ever made.",
        "movie_title": "The Dark Knight"
    },
    {
        "username": "classicCinema",
        "rating": 9.8,
        "review": "A timeless masterpiece about hope and friendship.",
        "movie_title": "The Shawshank Redemption"
    },
    {
        "username": "tarantinoFan",
        "rating": 8.9,
        "review": "Brilliant dialogues and nonlinear storytelling.",
        "movie_title": "Pulp Fiction"
    },
    {
        "username": "neoMatrix",
        "rating": 9.3,
        "review": "Revolutionary sci-fi action film.",
        "movie_title": "The Matrix"
    },
    {
        "username": "romanticSoul",
        "rating": 8.7,
        "review": "Very touching and emotional story.",
        "movie_title": "Forrest Gump"
    },
    {
        "username": "historyBuff",
        "rating": 8.5,
        "review": "Epic battles and strong performances.",
        "movie_title": "Gladiator"
    },
    {
        "username": "oceanHeart",
        "rating": 9.1,
        "review": "A tragic love story with spectacular production.",
        "movie_title": "Titanic"
    },
    {
        "username": "pandoraExplorer",
        "rating": 8.8,
        "review": "Visually stunning world-building experience.",
        "movie_title": "Avatar"
    },
    {
        "username": "dreamer_obsessed",
        "rating": 9.2,
        "review": "Had to watch it three times to fully grasp the layers. Masterpiece!",
        "movie_title": "Inception"
    },
    {
        "username": "totemSpinner",
        "rating": 8.5,
        "review": "The soundtrack by Hans Zimmer makes this even more intense.",
        "movie_title": "Inception"
    },
    {
        "username": "astronomy_buff",
        "rating": 9.7,
        "review": "Cried like a baby during the message scene. Scientific and emotional.",
        "movie_title": "Interstellar"
    },
    {
        "username": "tars_fan",
        "rating": 8.8,
        "review": "Visuals of the black hole are still the best in cinema history.",
        "movie_title": "Interstellar"
    },
    {
        "username": "joker_quotes",
        "rating": 9.9,
        "review": "Heath Ledger's performance is legendary. Best villain ever.",
        "movie_title": "The Dark Knight"
    },
    {
        "username": "gotham_guard",
        "rating": 9.0,
        "review": "A gritty, realistic take on a superhero story. Truly gripping.",
        "movie_title": "The Dark Knight"
    },
    {
        "username": "hope_eternal",
        "rating": 10.0,
        "review": "Get busy living, or get busy dying. Best movie of all time.",
        "movie_title": "The Shawshank Redemption"
    },
    {
        "username": "prison_break_fan",
        "rating": 9.5,
        "review": "The ending always gives me goosebumps. Pure cinematic gold.",
        "movie_title": "The Shawshank Redemption"
    },
    {
        "username": "royale_w_cheese",
        "rating": 9.4,
        "review": "The dialogue is so sharp you could cut glass with it.",
        "movie_title": "Pulp Fiction"
    },
    {
        "username": "zed_is_dead",
        "rating": 8.7,
        "review": "Cool, stylish, and incredibly violent. Classic Tarantino.",
        "movie_title": "Pulp Fiction"
    },
    {
        "username": "red_pill_only",
        "rating": 9.5,
        "review": "Changed the way I look at reality. Bullet time is iconic.",
        "movie_title": "The Matrix"
    },
    { "username": "cyber_punk88",
        "rating": 8.9,
        "review": "Ahead of its time. The action sequences are still unmatched.",
        "movie_title": "The Matrix"
    },
    {
        "username": "box_of_chocolates",
        "rating": 9.2,
        "review": "A beautiful journey through American history. Tom Hanks is superb.",
        "movie_title": "Forrest Gump"
    },
    {
        "username": "runner_guy",
        "rating": 8.6,
        "review": "Simple, sweet, and deeply moving. A real feel-good movie.",
        "movie_title": "Forrest Gump"
    },
    {
        "username": "maximus_fan",
        "rating": 9.3,
        "review": "Are you not entertained? Because I certainly was!",
        "movie_title": "Gladiator"
    },
    {
        "username": "rome_lover",
        "rating": 8.4,
        "review": "Stunning cinematography and a very powerful lead performance.",
        "movie_title": "Gladiator"
    },
    {
        "username": "unsinkable_soul",
        "rating": 8.8,
        "review": "The scale of the production is still mind-blowing today.",
        "movie_title": "Titanic"
    },
    {
        "username": "jack_and_rose",
        "rating": 9.0,
        "review": "A perfect blend of historical tragedy and romantic drama.",
        "movie_title": "Titanic"
    },
    {
        "username": "navi_warrior",
        "rating": 8.5,
        "review": "Pandora is the most beautiful world ever created on screen.",
        "movie_title": "Avatar"
    },
    {
        "username": "3d_enthusiast",
        "rating": 8.2,
        "review": "A technical marvel that set a new bar for special effects.",
        "movie_title": "Avatar"
    }
]);

print("--- Wczytano opinie!")