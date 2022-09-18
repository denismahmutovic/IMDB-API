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

  const [searchData, setSerachData] = React.useState([]);
  const [title, setTitle] = useState("");

  const getSearchData = async (title) => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/SearchTitle/k_u5msz3xh/${title}`
    );

    setSerachData(res.data.results.splice(0, 3));
    console.log(res.data);
  };

  useEffect(() => {
    getSearchData(title);
  }, []);

  return (
    <div className="Boss">
      <Container>
        <div className="Search">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            width={"64"}
            height="32"

            //logo  img
          />
          <input
            value={title}
            placeholder={"Search IMDb"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={() => getSearchData(title)}>search</button>
        </div>

        <div className="flex">
          {searchData.map((el) => {
            return (
              <Card
                sx={{
                  minWidth: 250,
                  maxWidth: 350,
                  mt: 10,
                  minHeight: "320px",
                  maxHeight: "320px",
                  backgroundColor: "#grey",
                  color: "#black",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={el.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                  </Typography>
                  <Typography color="text.secondary" fontSize={20}>
                    {el.description}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
