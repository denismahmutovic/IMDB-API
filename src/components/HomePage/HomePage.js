import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Homecss from "./HomePage.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MovieIcon from "@mui/icons-material/Movie";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "semantic-ui-react";
import Footer from "../Footer/Footer";

export default function HomePage() {
  const activeStyle = {
    color: "#cccccc",
    textDecoration: "none",
    transition: "0.3s",
    marginRight: 20,
  };

  const [todos, setTodos] = React.useState([]);
  const [title, setTitle] = useState("fast");

  const getNews = async () => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/k_12345678/${title}`
    );

    setTodos(res.data.results.splice(0, 3));
    console.log(res.data);
  };

  useEffect(() => {
    getNews();
  }, [title]);

  return (
    <div className="Boss">
      <Container>
        <div className="Search">{/* Search */}</div>
        <h1>HOME PAGE</h1>

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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
