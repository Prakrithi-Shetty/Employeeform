
import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router';



const useStyles = makeStyles(theme => ({
  root: {
    width: 600,
    height: 600,
    marginLeft: 400,
    marginRight: 45,
    marginTop: 60,
    
    "&:hover": {
      // backgroundColor: 'rgb(7, 177, 77, 0.42)'
      // border: "solid",
      // padding: 10,
      // boxShadow: 10
      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.70)"
    }
  },
  button: {
    float: "Right",
    marginTop: 20,
    fontFamily: "Roboto"
  },
  textTransform: {
    textTransform: "capitalize"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: " 'Roboto', sans-serif",
    "& label": {
      fontWeight: "bold",
      fontSize: 14,
      fontFamily: " 'Roboto', sans-serif",
   
    }
  },
  
  div1:{
marginLeft:40,
marginRight:40,
  },
  typo:{
  
        fontFamily: "Roboto medium",
        fontSize: 28,
    paddingTop:30,
        marginBottom: 30,
        textAlign: "center",
        color:"blue"
    
  }
 
}));
function Details(props) {
  const classes = useStyles();

  const a={
 firstname:"prakrithi",
 lastname:"shetty"
  };

  const[info,setinfo]=useState(a);
  console.log(info);
  return (
    <div>
    <div>info.firstname</div>
    
     
    </div>
    
  );
}

export default withRouter(Details);
