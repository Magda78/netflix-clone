import React, { useEffect, useState, forwardRef } from 'react';
import axios from './axios';
import requests from './Requests'
import YouTube from 'react-youtube';
import FlipMove from 'react-flip-move';
import './Row.css';
const movieTrailer = require('movie-trailer');

const base_url = 'https://image.tmdb.org/t/p/original/';
const API_KEY = "5fccd529a8719ecb7be9ff9e9ceed81c";


const Row = forwardRef(({ title, fetchUrl, isLargeRow = false }, ref) => {
	const [ movies, setMovies ] = useState([]);
	const [ trailerUrl, setTrailerUrl ] = useState("");
	const [open, setOpen] = useState(false)
	useEffect(
		() => {
			async function fetchData() {
				const request = await axios.get(fetchUrl);
				setMovies(request.data.results);
				console.log(request)
				return request;
			}
			fetchData();
		},
		[ fetchUrl ]
	);

	const openVideoHandler = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		  } else {
			movieTrailer(movie?.name || "")
			  .then((url) => {
				const urlParams = new URLSearchParams(new URL(url).search);
				setTrailerUrl(urlParams.get("v"));
			  })
			  .catch((e) => console.log(e));
			
			}
	};

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
		  // https://developers.google.com/youtube/player_parameters
		  autoplay: 1,
		  enablejsapi: 1,
		},
	  };




	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row__posters">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
							<img
								ref={ref}
								onClick={() => openVideoHandler(movie)}
								className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
								key={movie.id}
								src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
								alt={movie.name}
							/>
						)
				)}
			</div>{
				trailerUrl ? <YouTube videoId={trailerUrl} opts={opts}  /> : null
			}
			
		</div>
	);
});



export default Row;
