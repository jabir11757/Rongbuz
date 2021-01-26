import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import rongbaz from '../img/icon.png'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {blue} from '@material-ui/core/colors'
import { Box } from "@material-ui/core";
import {BrowserRouter as Router, Link, useHistory} from 'react-router-dom'






 

  const Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        title: {
          flexGrow: 1,
          display: 'none',
          [theme.breakpoints.up('sm')]: {
            display: 'block',
          },
        },
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
          },
        },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          color: 'inherit',
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));


      const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };




  //navlink dropdown

  const history = useHistory()

  const bollywood=()=>{
    history.push("./bollywood")
  }

  const hollywood=()=>{
    history.push("./hollywood")
  }
  

    const classes = useStyles();


   
    
      return ( 

        <div className={classes.root}>
        <AppBar position="">
          <Toolbar>

              <img src={rongbaz} alt="" style={{height:65, width:100}} />
<div style={{ marginLeft:0,
          width: '100%'}}>
              <Button
              aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}

               color="primary" style={{color:'whitesmoke',marginRight:70}}>Movies</Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box style={{backgroundColor:"grey"}}>
        <MenuItem onClick={bollywood}> <Link to='/bollywood'></Link> Bollywood</MenuItem>
        <MenuItem onClick={hollywood}>Hollywood</MenuItem>
        <MenuItem onClick={handleClose}>Tamil</MenuItem>
        <MenuItem onClick={handleClose}>Turkish</MenuItem>
        <MenuItem onClick={handleClose}>Indian Bangla</MenuItem>
        <MenuItem onClick={handleClose}>French</MenuItem> 
        <MenuItem onClick={handleClose}>Italian</MenuItem>
        <MenuItem onClick={handleClose}>Malayalam</MenuItem>
        <MenuItem onClick={handleClose}>Foreign</MenuItem>
        <MenuItem onClick={handleClose}>Japanese</MenuItem>
        <MenuItem onClick={handleClose}>Animation</MenuItem>
        </Box>

      </Menu>


              <Button color="primary" style={{color:'whitesmoke',marginRight:70}}>Tv Series</Button>
              <Button color="primary" style={{color:'whitesmoke',marginRight:70}}>Live Tv</Button>
              <Button color="primary" style={{color:'whitesmoke',marginRight:70}}>Upcomming</Button>
              <Button color="primary" style={{color:'whitesmoke',marginRight:70}}>Kids Zone</Button>
</div>

              
           
            <Typography className={classes.title} variant="h6" noWrap>
              
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>


        


      </div>
       );
  }

  function Bollywood(){
    return(
      <div>
        <Bollywood/>
      </div>
    )
  }
   
  export default Navbar;

