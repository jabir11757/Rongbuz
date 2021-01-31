import React, { useEffect, useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router";


const axios = require("axios")


const Recent = () => {

  const history = useHistory()

  const recent=(recentmovie)=>{
   history.push({
      pathname: '/player',
      state: recentmovie
    })
    console.log(recentmovie)
  }

  const url = "https://forbit.tech/movizo/movies/featured"

  const [recentmovies, setrecentmovies] = useState ([])
  
  useEffect(() => {
    if(recentmovies.length===0){
      axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        setrecentmovies(response.data)
        
      })
      .catch((err) => console.log(err))
    }
   
  },[])

  return ( 


<Box >
          
<Typography variant='h6'> Recent Movies</Typography>     
          <Grid container display="flex">
            
            

          {recentmovies.map((recentmovie , index)=>{

return(
  
<Grid item xs={2} key={index}  >
<Card  style={{ maxWidth: 250, margin: 10 }}>
  <CardHeader subheader={recentmovie.release_date} />
  <CardMedia
    style={{
      height: 0,
      paddingTop: "56%", // 16:9
    }}
    image= {recentmovie.image_url}
  />
  <CardContent>
    <Typography
      variant="subtitle1"
      color="textSecondary"
      component="p"
      style={{ textAlign: "center", height: 20 }}
    >
      {recentmovie.title}

    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
    <Typography variant="subtitle1" ></Typography>
  <Button  onClick={()=>recent(recentmovie)}>play</Button>

  </CardActions>

</Card>
</Grid>
)

          })}
          </Grid>
        </Box>

   );
}
 
export default Recent ;