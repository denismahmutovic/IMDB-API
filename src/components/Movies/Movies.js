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
const Movies = () => {
  const [todos, setTodos] = React.useState([]);
  const [title, setTitle] = useState("");

  const getNews = async () => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/k_u5msz3xh/Items`
    );

    setTodos(res.data.results);
    console.log(res.data);
  };

  useEffect(() => {
    getNews();
  }, []);

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
        {todos.map((el) => {
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
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
        {/* <Pagination defaultActivePage={1} totalPages={100} /> */}
      </div>
    </div>
  );
};
export default Movies;
