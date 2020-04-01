import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Swipe from "./Components/Swipe/Swipe";

const images = [
	'https://picsum.photos/400/300/?image=926',
	'https://picsum.photos/400/300/?image=925',
	'https://picsum.photos/400/300/?image=924',
	'https://picsum.photos/400/300/?image=923',
	'https://picsum.photos/400/300/?image=922',
	'https://picsum.photos/400/300/?image=921',
];

const profiles = [
  {
    "image": "https://picsum.photos/400/300/?image=926",
    "firstname": "Sanjay",
    "lastname": "Joshi",
    "phonenumber": "7946138521",
    "totalYearsExp": "5",
    "currentCompany": " Flipkart",
    "currentCtc": "8L",
    "expectedCtc": "10L"
  },
  {
    "image": "https://picsum.photos/400/300/?image=925",
    "firstname": "Ayansh",
    "lastname": "Shetty",
    
    "phonenumber": "9008254789",
    "totalYearsExp": "5",
    "currentCompany": " Amazon",
    "currentCtc": "8L",
    "expectedCtc": "10L"
  },
  {
    "image": "https://picsum.photos/400/300/?image=924",
    "firstname": "Bhavya",
    "lastname": "K",
    
    "phonenumber": "9874563214",
    "totalYearsExp": "5",
    "currentCompany": " Razor",
    "currentCtc": "8L",
    "expectedCtc": "10L"
  },
  {
    "image": "https://picsum.photos/400/300/?image=923",
    "firstname": "name3",
    "lastname": "last3",
    "dob": "1 jan 2020",
    "phonenumber": "292929012",
    "totalYearsExp": "5",
    "currentCompany": " Flipkart",
    "currentCtc": "8L",
    "expectedCtc": "10L"
  },
  {
    "image": "https://picsum.photos/400/300/?image=922",
    "firstname": "name4",
    "lastname": "last4",
    "dob": "1 jan 2020",
    "phonenumber": "292929012",
    "totalYearsExp": "5",
    "currentCompany": " Flipkart",
    "currentCtc": "8L",
    "expectedCtc": "10L"
  },
  {
    "image": "https://picsum.photos/400/300/?image=921",
    "firstname": "name5",
    "lastname": "last5",
    "dob": "1 jan 2020",
    "phonenumber": "292929012",
    "totalYearsExp": "5",
    "currentCompany": " Flipkart",
    "currentCtc": "8L",
    "expectedCtc": "10L"
  }
]


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
    
  },
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
  }
 
}));

function Details(props) {
  const classes = useStyles();
  return (
    <div>
   <Card className={classes.root}>
     <Swipe images={images} profiles={profiles} />
   </Card>
    </div>
  );
}

export default Details;