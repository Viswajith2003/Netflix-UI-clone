import "./RowPost.css";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { imageUrl, API_KEY } from "../../constant/constant";
import YouTube from "react-youtube";
import { gsap } from "gsap";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    // Fetch movies
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
        // Animate posters once they are fetched
        gsap.from(".poster", {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.1, // Animates each poster sequentially
        });
      })
      .catch((err) => {
        alert("Network error");
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array empty");
        }
      });
  };

  // Auto horizontal scrolling
  useEffect(() => {
    const postersContainer = document.querySelector(".posters");
    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (postersContainer) {
        // Scroll 5px to the right
        postersContainer.scrollLeft += 5;
        scrollAmount += 5;

        // Reset scrolling when reaching the end
        if (
          scrollAmount >=
          postersContainer.scrollWidth - postersContainer.offsetWidth
        ) {
          scrollAmount = 0;
          postersContainer.scrollLeft = 0;
        }
      }
    }, 50); // Adjust speed here (lower is faster)

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <div className="row">
      <h3>{props.title}</h3>
      <div className="posters">
        {movies.map((obj) => (
          <img
            key={obj.id}
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
