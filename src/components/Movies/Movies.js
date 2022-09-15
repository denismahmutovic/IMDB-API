import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "semantic-ui-react";
import { Stack } from "@mui/system";
import MoviesCss from "./Movies.css";
const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = useState(1);

  const getNews = async (page) => {
    const res = await axios.get(
      `https://imdb-api.com/_page=${page}&en/API/Top250TVs/k_khlg45sc`
    );

    setMovies(res.data.items.splice(10, 9));
    console.log(res.data);
  };

  useEffect(() => {
    getNews(page);
  }, [page]);

  return (
    <div>
      <div className="logo">
        <img
          src="https://onthemove.org/wp-content/uploads/2018/11/at-the-movies-web-banner.jpg"
          width="100%"
          height={"400vh"}
        />
      </div>
      <div className="flex">
        {movies.map((el) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={el.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {el.crew}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
        <Pagination
          defaultActivePage={1}
          totalPages={100}
          onClick={() => setPage((prev) => prev + 1)}
        />
      </div>
    </div>
  );
};
export default Movies;
