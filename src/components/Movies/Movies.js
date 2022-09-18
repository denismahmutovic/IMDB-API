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
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import MoviesCss from "./Movies.css";
import Paginacija from "../Paginacija/Paginacija";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(18);

  const navigate = useNavigate();
  const getNews = async (page) => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/Top250TVs/k_ncc5h4yz`
    );

    setMovies(res.data.items.splice(10, 40));
    console.log(res.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="logo">
        <img
          src="https://onthemove.org/wp-content/uploads/2018/11/at-the-movies-web-banner.jpg"
          width="100%"
          height={"400vh"}
        />
      </div>
      <div className="flex">
        {currentPosts.map((el) => {
          return (
            <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
              <CardMedia
                component="img"
                height="220"
                image={el.image}
                alt="green iguana"
                onClick={() => navigate(`/news/:id/${el.id}`)}
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
                <Button size="small"> Share</Button>
                <Button
                  size="small"
                  onClick={() =>
                    navigate(`/movies/${el.id}`, {
                      state: {
                        series: el,
                      },
                    })
                  }
                >
                  Procitaj Vise{" "}
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <Paginacija
        totalPosts={movies.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default Movies;
