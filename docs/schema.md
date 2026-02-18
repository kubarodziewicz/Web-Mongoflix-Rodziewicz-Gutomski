### collection `movies`
| Field | Type | Description |
| :--- | :--- | :--- |
| `title` | **String** | Movie title |
| `date` | **Date** | Cinema admission date |
| `genres` | **Array** | Genres of the movie |
| `director` | **String** | Director of the movie |
| `actors` | **Array** | Starring actors |
| `isPremium` | **Boolean** | Premium or Public |
| `view_count` | **Int** | Views count |

---

### collection `reviews`
| Field | Type | Description |
| :--- | :--- | :--- |
| `username` | **String** | Reviewer username |
| `rating` | **Float** | Movie rating |
| `review` | **String** | User review |
| `movie_title` | **String** | Reference to movies.title | 
