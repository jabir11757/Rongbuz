import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from "@material-ui/core/CardHeader";
import { Box } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router";



const axios = require ('axios')


const AllMovies = () => {

  // const history = useHistory()

  // const allMovie=(movies)=>{
  //  history.push({
  //     pathname: '/player',
  //     state: movies
  //   })
  //   console.log(movies)
  // }

  const history = useHistory()

  const allmovie=(movies)=>{
   
   history.push({
      pathname: '/player',
      state: movies
    })
    
  }

  

  const url = "https://forbit.tech/movizo/movies"

  const [movies, setmovies] = useState([])

  useEffect(()=>{
    if(movies.length===0){
        axios
        .get(url)
        .then((response)=>{
          console.log(response.data)
          setmovies(response.data)
        })

        .catch((err)=> console.log(err))
    }
  }, [])



  return (
    <Box>
      <Typography variant='h6'>All Movies</Typography>
      <Grid container display="flex">
        {movies.map((movies,index)=>{

return ( 

                <Grid item xs={2} key={index}  >
              <Card  style={{ maxWidth: 250, margin: 10 }}>
              <CardHeader subheader={movies.release_date}/>
              <CardMedia
                style={{
                  height: 0,
                  paddingTop: "56%", // 16:9
                }}
                image= {movies.image_url}
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="a"
                  

                  style={{ textAlign: "center", height: 20 ,}}
                >
                  {movies.title}

                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Typography variant="subtitle1"></Typography>
                < Button onClick={() => allmovie(movies) }>play</Button>

              </CardActions>

              </Card>
              </Grid>


              );

                      })}
                    </Grid>
                  </Box>
  )

  
}
 
export default AllMovies;