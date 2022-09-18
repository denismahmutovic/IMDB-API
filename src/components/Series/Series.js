import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import { height } from "@mui/system";
import SeriesCss from "./Series.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Pagination } from "semantic-ui-react";
import Paginacija from "../Paginacija/Paginacija";

const Series = () => {
  const [series, setSeries] = React.useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(18);

  const navigate = useNavigate();
  const getNewss = async () => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/Top250Movies/k_ncc5h4yz`
    );

    setSeries(res.data.items);
    console.log(res.data);
  };

  useEffect(() => {
    getNewss();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = series.slice(firstPostIndex, lastPostIndex);
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
        {
          <img
            src="https://i.imgur.com/aokrU9A.png"
            width="100%"
            height={"400vh"}
          />
        }
      </div>
      <div className="flex">
        {currentPosts.map((el) => {
          return (
            <Card
              className="card"
              sx={{
                minWidth: 250,
                maxWidth: 250,
                mt: 3,
                minHeight: "320px",
                maxHeight: "340px",
                // backgroundColor: "#cccccc",
                // color: "#cb2d6f",
              }}
            >
              {" "}
              <CardMedia
                component="img"
                height="194"
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
                <Button
                  className="btn"
                  size="small"
                  onClick={() =>
                    navigate(`/news/${el.id}`, {
                      state: {
                        series: el,
                      },
                    })
                  }
                >
                  Procitaj VIse
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <Paginacija
        totalPosts={series.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default Series;
