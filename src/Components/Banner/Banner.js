import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constant/constant";
import axios from "../../axios";
import "./Banner.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.results[17]);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      });
  }, []);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner",
        start: "top center", // Adjust trigger start
        toggleActions: "play none none reverse", // Animation actions
      },
    });

    // Banner fade-in
    tl.to(".banner", {
      opacity: 1,
      duration: 1.5,
      y: 0, // Reset translateY
      ease: "power2.inOut",
    });

    // Content animation
    tl.to(
      ".content",
      {
        opacity: 1,
        x: 0, // Reset translateX
        duration: 1,
        ease: "power2.inOut",
      },
      "-=1" // Overlap timing
    );

    // Buttons stagger animation
    tl.to(
      ".banner_btn button",
      {
        opacity: 1,
        scale: 1, // Reset scale
        duration: 0.5,
        ease: "power2.inOut",
        stagger: {
          each: 0.3,
        },
      },
      "-=0.5" // Overlap timing
    );

    // Description fade-in
    tl.to(
      ".description",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.5" // Overlap timing
    );
  }, []);

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
      if (counter === 8) {
        setCounter(0);
      }
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_btn">
          <button className="btn">Play</button>
          <button className="btn">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
