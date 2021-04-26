import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function Fetcher({ name }) {
  const classes = useStyles();
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setState(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(function () {
        console.log("it's all done ");
      });
  }, []);
  {
    if (state != []) {
      return (
        <div>
          <h1>{name}</h1>
          <h1>Featured Products</h1>
          <div className="item-container">
            {state.map((data) => (
              <>
                <Grid item xs={12} md={6}>
                  <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            {data.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {data.id}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            paragraph
                          ></Typography>
                          <Typography variant="subtitle1" color="primary">
                            Continue reading...
                          </Typography>
                        </CardContent>
                      </div>
                      <Hidden xsDown>
                        <CardMedia
                          className={classes.cardMedia}
                          title={data.body}
                        />
                      </Hidden>
                    </Card>
                  </CardActionArea>
                </Grid>
              </>
            ))}
          </div>
        </div>
      );
    } else {
      return <>not working</>;
    }
  }
}
