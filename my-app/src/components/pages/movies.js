"use client";
import { useState } from "react";

const originalMovies = [
  {
    title: "Inception",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    releaseYear: 2010,
  },

  {
    title: "The Dark Knight",
    actors: ["Christian Bale", " Heath Ledger", "Aaron Eckhart"],
    releaseYear: 2008,
  },

  {
    title: "Avatar",
    actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    releaseYear: 2009,
  },

  {
    title: "Pulp Fiction",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    releaseYear: 1994,
  },

  {
    title: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    releaseYear: 1994,
  },

  {
    title: "The Avengers",
    actors: ["Robert Downey Jr", "Chris Evans", "Scarlett Johansson"],
    releaseYear: 2012,
  },

  {
    title: "Forrest Gump",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    releaseYear: 1994,
  },
];

function MoviesList() {
  const [userType, setUserType] = useState("guest");
  const [movies, setMovies] = useState(originalMovies);
  const [editIndex, setEditIndex] = useState(null);
  const [newMovie, setNewMovie] = useState({
    title: "",
    actors: [],
    releaseYear: "",
  });

  const handleLogin = (user) => {
    setUserType(user);
  };

  const handleLogout = () => {
    setUserType("guest");
  };

  const handleDelete = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const movieToEdit = movies[index];
    setNewMovie({
      title: movieToEdit.title,
      actors: [...movieToEdit.actors],
      releaseYear: movieToEdit.releaseYear,
    });
  };

  const handleSave = () => {
    const updatedMovies = [...movies];
    if (editIndex !== null) {
      updatedMovies[editIndex] = newMovie;
    } else {
      updatedMovies.push(newMovie);
    }
    setMovies(updatedMovies);
    setNewMovie({ title: "", actors: [], releaseYear: "" });
    setEditIndex(null);
  };

  return (
    <div>
      {userType === "guest" ? (
        <h2>Normal user</h2>
      ) : (
        <main>
          <h1>Movies List</h1>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <h2>Title: {movie.title}</h2>
                <p>Actors: {movie.actors.join(", ")}</p>
                <p>Release Year: {movie.releaseYear}</p>
                {userType === "admin" && (
                  <div>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {userType === "admin" && (
            <div>
              <h2>{editIndex !== null ? "Edit Movie" : "Add Movie"}</h2>
              <input
                type="text"
                placeholder="Title"
                value={newMovie.title}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Actors (comma-separated)"
                value={newMovie.actors.join(", ")}
                onChange={(e) =>
                  setNewMovie({
                    ...newMovie,
                    actors: e.target.value.split(", "),
                  })
                }
              />
              <input
                type="text"
                placeholder="Release Year"
                value={newMovie.releaseYear}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, releaseYear: e.target.value })
                }
              />
              <button onClick={handleSave}>
                {editIndex !== null ? "Save" : "Add"}
              </button>
            </div>
          )}
          <h2>Logout</h2>
          <button onClick={handleLogout}>Logout</button>
        </main>
      )}
    </div>
  );
}

export default MoviesList;
