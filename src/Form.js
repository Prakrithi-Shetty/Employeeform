
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
import Details from "./Table";

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


function Form(props) {
  const classes = useStyles();

  let click=()=>{
    props.history.push("/Details");
  }
  return (
    <div>
      
    <Card className={classes.root}>
    <Typography className={classes.typo}>
      Interview form            
    </Typography>
    <div className={classes.div1}>
    <TextField
             
              hintText="First Name"
              floatingLabelText=" First Name"
              label="First Name"
              type="text"
              fullWidth

              className={classes.textField}
    />
        
        
    <TextField
           hintText="Last Name"
             floatingLabelText=" Last Name"
             label="Last Name"
             type="text"
             fullWidth
             className={classes.textField}
            
    />
    <TextField
           hintText="Phone Number"
             floatingLabelText=" Phone Number"
             label="Phone Number"
             type="Number"
             fullWidth
             className={classes.textField}
            
    />
    <TextField
           hintText="Total Years of experience"
             floatingLabelText=" Total Years of experience"
             label="Total Years of experience"
             type="Number"
             fullWidth
             className={classes.textField}
            
    />
    <TextField
           hintText="Current Company"
             floatingLabelText=" Current Company"
             label="Current Company"
             type="text"
             fullWidth
             className={classes.textField}
            
    />
     <TextField
           hintText="Current CTC"
             floatingLabelText=" Current CTC"
             label="Current CTC"
             type="Number"
             fullWidth
             className={classes.textField}
            
    />
    <TextField
           hintText="Expected  CTC"
             floatingLabelText=" Expected CTC"
             label="Expected CTC"
             type="Number"
             fullWidth
             className={classes.textField}
            
    />
   
    <TextField
                id="Upload Your resume here"
                type="file"
                style={{ display: "none" }}
                fullWidth
                
                margin="normal"
                className={classes.textField}
              />
              <label htmlFor="Upload Your resume here">
                <TextField
                  label="Upload Your resume here"
                  fullWidth
                  margin="normal"
                  className={classes.textField}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" className={classes.icon}>
                        <CloudUploadIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </label>
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={click}
                  
                >
                  <span className={classes.textTransform}>Submit</span>
                </Button>

    </div>
    </Card>
      
    </div>
  );
}

export default withRouter(Form);
