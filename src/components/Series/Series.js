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

const Series = () => {
  const [series, setSeries] = React.useState([]);

  const navigate = useNavigate();
  const getNewss = async () => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/Top250TVs/k_khlg45sc`
    );

    setSeries(res.data.items.splice(10, 8));
    console.log(res.data);
  };

  useEffect(() => {
    getNewss();
  }, []);

  return (
    <div>
      <div className="logo">
        {
          <img
            src="https://i.imgur.com/aokrU9A.png"
            width="100%"
            height={"400vh"}
          />
        }
      </div>
      <div className="flex" width="">
        {series.map((el) => {
          return (
            <Card className="card" sx={{ width: 345 }}>
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
                  size="small"
                  onClick={() =>
                    navigate(`/news/${el.id}`, {
                      state: {
                        series: el,
                      },
                    })
                  }
                >
                  Procitaj Vise
                </Button>
              </CardActions>
            </Card>
          );
        })}
        {/* <Pagination defaultActivePage={1} totalPages={100} /> */}
      </div>
    </div>
  );
};
export default Series;
