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


const Hollywood = () => {

  const history=useHistory()

  const hollywood=(hollywoodmovies)=>{
    history.push({
      pathname:'/player',
      state:hollywoodmovies
    })
    console.log(hollywoodmovies)
  }

  const url = "https://forbit.tech/movizo/categories/5fd71d18c67c0e28b00ff023/movies"

  const [hollywoodmovies, sethollywoodmovies] = useState ([])
  
  useEffect(() => {
    if(hollywoodmovies.length===0){
      axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        sethollywoodmovies(response.data)
        
      })
      .catch((err) => console.log(err))
    }
   
  },[])




  return ( 


<Box >
          
<Typography variant='h4'> Hollywood Movies</Typography>     
          <Grid container display="flex">
            
            

          {hollywoodmovies.map((hollywoodmovies , index)=>{

return(
  
<Grid item xs={2} key={index}  >
<Card  style={{ maxWidth: 250, margin: 10 }}>
  <CardHeader subheader={hollywoodmovies.release_date} />
  <CardMedia
    style={{
      height: 0,
      paddingTop: "56%", // 16:9
    }}
    image= {hollywoodmovies.image_url}
  />
  <CardContent>
    <Typography
      variant="subtitle1"
      color="textSecondary"
      component="p"
      style={{ textAlign: "center", height: 20 }}
    >
{hollywoodmovies.title}

    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
    <Typography variant="subtitle1" ></Typography>
  <Button  onClick={()=>hollywood(hollywoodmovies)}>play</Button>

  </CardActions>
  
</Card>
</Grid>
)

          })}
          </Grid>
        </Box>

   );
}
 
export default Hollywood ;