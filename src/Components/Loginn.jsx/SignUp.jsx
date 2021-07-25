import React, { useState } from 'react';
import { Container,Grid,OutlinedInput,Typography , Button} from '@material-ui/core';
import {  IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { 
    Box, 
    makeStyles, 
    withStyles,
    FormHelperText,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';

import { Link, Redirect } from 'react-router-dom';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#f2f2f2",
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
    },
    boxImg: {
        width: "450px",
        display: "flex",
        height: "40px",
        justifyContent: "center",
        margin: "60px 0 30px"
    },
    imgLogo: {
        height: "30px",
        cursor: "pointer"
    },
    boxForm: {
        backgroundColor: "#ffffff",
        width: "450px",
        padding: "20px"
    },
    outlinedInput: {
        // border: "1px solid #cccccc",
        height: "40px",
        width: "410px",
        margin: "7px 0",
    },
    h5: {
        fontWeight: "600"
    },
    formhelperText: {
        fontWeight: "600",
        fontSize: "14px",
        color: "#4b4b4b"
    },
    checkbox: {
        marginBottom: "10px"
    },
    buttona: {
        
        width: "418px",
        display:"flex",
        justifyContent:"flex-start",
        borderRadius: "20px",
        height: "40px"
    },
    divider: {
        backgroundColor: "#f2f2f2",
        heigth: "10px",
        width: "150px",
        margin: "0 30px"
    },
    pageBreak: {
        backgroundColor: "#f2f2f2",
        heigth: "10px",
        width: "440px",
        margin: "30px 30px 20px"
    }
}))

const GreenCheckbox = withStyles({
    root: {
      color: "#085ff7",
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const SignInButton = withStyles((theme) => ({
    root: {
        color: "#ffffff",
      backgroundColor: "#085ff7",
      cursor: "pointer",
      '&:hover': {
        backgroundColor: "#0542ac",
      },
    },
}))(Button);

const HelperButton = withStyles((theme) => ({
    root: {
        color: "#000000",
        backgroundColor: "#ffffff",
        cursor: "pointer",
        '&:hover': {
        backgroundColor: "#eeeeee",
      },
    },
}))(Button);

export function SignUp() {
 
    const classes = useStyles();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    

    let sign = {
        emaild:"",
        pass:""
    }
    
    
    console.log(email,password);
    const onEmailChange = (e) => {
        let y = true
        let x=0
        localStorage.setItem('y',JSON.stringify(y))
        localStorage.setItem('x',JSON.stringify(x))
        setEmail(e.target.value)
        sign.emaild=email
        sign.pass=password

    localStorage.setItem('user',JSON.stringify(sign))

    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
        sign.emaild=email

        sign.pass=password
    localStorage.setItem('user',JSON.stringify(sign))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }


    return ( <Container className = {classes.container} maxWidth = "xl">
           
           
            <Box className = {classes.boxImg}>
                <img
                    className = {classes.imgLogo}
                    src = "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 320 80' focusable='false'%3E%3Cpath d='M287.31 13.4a5.24 5.24 0 0 0-4.22-1.76 5 5 0 0 0-4.22 1.92 9 9 0 0 0-1.49 5.59V37a24.49 24.49 0 0 0-7-5.52 16.88 16.88 0 0 0-5.2-1.56 25.92 25.92 0 0 0-3.6-.24A18.43 18.43 0 0 0 247.06 36c-3.67 4.23-5.51 10.09-5.51 17.65A33.74 33.74 0 0 0 243 63.6a24 24 0 0 0 4.06 8 19.15 19.15 0 0 0 6.41 5.24 17.87 17.87 0 0 0 8 1.84 19.14 19.14 0 0 0 3.75-.35 14.73 14.73 0 0 0 2.27-.55 19.32 19.32 0 0 0 5.12-2.66 30.13 30.13 0 0 0 4.81-4.54v1.17a7.52 7.52 0 0 0 1.6 5.13 5.66 5.66 0 0 0 8.21.08 7.48 7.48 0 0 0 1.8-5.17V18.48a7.76 7.76 0 0 0-1.72-5.08zm-12.15 49.22a11.56 11.56 0 0 1-4.18 5 10.7 10.7 0 0 1-5.78 1.64 10.45 10.45 0 0 1-5.78-1.72 11.84 11.84 0 0 1-4.18-5.16 20.67 20.67 0 0 1-1.52-8.37 20.86 20.86 0 0 1 1.45-8.14 12 12 0 0 1 4-5.4 9.68 9.68 0 0 1 5.94-1.88h.12a9.93 9.93 0 0 1 5.74 1.84 12.56 12.56 0 0 1 4.22 5.28 19.89 19.89 0 0 1 1.56 8.29 20.36 20.36 0 0 1-1.59 8.62zm-37.9.51a4.38 4.38 0 0 0-3-1 4 4 0 0 0-2.62.78c-1.52 1.41-2.74 2.54-3.67 3.36a33.69 33.69 0 0 1-3.13 2.31 12.3 12.3 0 0 1-3.44 1.57 14 14 0 0 1-3.95.51 6.6 6.6 0 0 1-.9 0 10.72 10.72 0 0 1-5-1.57 11.55 11.55 0 0 1-4.3-4.66A17.22 17.22 0 0 1 205.6 57h23.54c3.17 0 5.65-.34 7.37-1.2s2.62-2.9 2.62-5.91a20.41 20.41 0 0 0-2.54-9.66 19.64 19.64 0 0 0-7.59-7.74 23.28 23.28 0 0 0-12.12-3h-.35a27.4 27.4 0 0 0-9.53 1.75 21.07 21.07 0 0 0-7.54 5 22.48 22.48 0 0 0-4.61 7.86 30.26 30.26 0 0 0-1.6 9.94c0 7.59 2.15 13.54 6.45 18 4.06 4.19 9.69 6.38 16.84 6.61h1.25a27.65 27.65 0 0 0 9-1.33 22.39 22.39 0 0 0 6.48-3.32 16 16 0 0 0 3.87-4.23 7.8 7.8 0 0 0 1.29-3.8 3.58 3.58 0 0 0-1.17-2.84zm-28.14-22.4a9.58 9.58 0 0 1 7.39-3.09 9.94 9.94 0 0 1 7.58 3.05c1.91 2 3 5.25 3.32 9.4H205.6c.4-4.09 1.57-7.29 3.52-9.36zM189 63.13a4.38 4.38 0 0 0-3-1 4 4 0 0 0-2.62.78c-1.52 1.41-2.74 2.54-3.67 3.36a33.69 33.69 0 0 1-3.13 2.31 12.3 12.3 0 0 1-3.44 1.57 14 14 0 0 1-3.95.51 6.6 6.6 0 0 1-.9 0 10.72 10.72 0 0 1-5-1.57 11.55 11.55 0 0 1-4.3-4.66 17.22 17.22 0 0 1-1.64-7.43h23.54c3.17 0 5.65-.34 7.37-1.2s2.62-2.9 2.62-5.91a20.41 20.41 0 0 0-2.54-9.66 19.64 19.64 0 0 0-7.58-7.71 23.28 23.28 0 0 0-12.12-3h-.35a27.4 27.4 0 0 0-9.54 1.72 21.07 21.07 0 0 0-7.54 5 22.48 22.48 0 0 0-4.61 7.86 30.26 30.26 0 0 0-1.6 9.94c0 7.59 2.15 13.54 6.45 18 4.06 4.19 9.69 6.38 16.84 6.61h1.25a27.65 27.65 0 0 0 9-1.33A22.39 22.39 0 0 0 185 74a16 16 0 0 0 3.87-4.23 7.8 7.8 0 0 0 1.29-3.8 3.58 3.58 0 0 0-1.16-2.84zm-28.14-22.4a9.58 9.58 0 0 1 7.39-3.09 9.94 9.94 0 0 1 7.58 3.05c1.91 2 3 5.25 3.32 9.4h-21.8c.39-4.09 1.56-7.29 3.52-9.36zm-21.65-27.17A5.26 5.26 0 0 0 135 11.8a5 5 0 0 0-4.22 1.92c-1.31 1.52-1.65 3.24-1.65 5.7V37.2a23.57 23.57 0 0 0-6.62-5.57 17.21 17.21 0 0 0-5.2-1.56 25.92 25.92 0 0 0-3.6-.24 18.38 18.38 0 0 0-14.54 6.34c-3.63 4.23-5.47 10.1-5.47 17.65a35.11 35.11 0 0 0 1.37 9.94 24.13 24.13 0 0 0 4.1 8 19.15 19.15 0 0 0 6.41 5.24 17.87 17.87 0 0 0 8 1.84 19.72 19.72 0 0 0 3.75-.35 14.67 14.67 0 0 0 2.27-.55 19.32 19.32 0 0 0 5.12-2.66 31.93 31.93 0 0 0 4.81-4.54v1.17a7.52 7.52 0 0 0 1.6 5.13 5.62 5.62 0 0 0 8.17.08 7.53 7.53 0 0 0 1.56-5.2V18.68a7.87 7.87 0 0 0-1.65-5.12zm-11.9 49.22a11.37 11.37 0 0 1-4.22 5 10.57 10.57 0 0 1-5.74 1.64 10.44 10.44 0 0 1-5.78-1.72 11.58 11.58 0 0 1-4.18-5.16 20.68 20.68 0 0 1-1.52-8.37 21.64 21.64 0 0 1 1.41-8.14 12.08 12.08 0 0 1 4.06-5.4 9.57 9.57 0 0 1 5.9-1.88h.16a9.72 9.72 0 0 1 5.6 1.88 12.35 12.35 0 0 1 4.26 5.28 20.52 20.52 0 0 1 1.56 8.29 21 21 0 0 1-1.51 8.58zM26 71.27v-28.8c.82.08 1.6.12 2.42.12A20.27 20.27 0 0 0 39 39.65v31.62c0 2.7-.49 4.7-1.71 6a6.16 6.16 0 0 1-4.77 2 6 6 0 0 1-4.69-2c-1.21-1.33-1.84-3.33-1.84-6zm-.12-69C34-.69 43.28-.53 50.23 5.5a11.79 11.79 0 0 1 3.36 4.5c.7 2.27-2.46-.23-2.89-.55a30.92 30.92 0 0 0-7.07-3.6C29.95 1.66 17 9.29 9 21.15A64.11 64.11 0 0 0 1.61 38a9.59 9.59 0 0 1-.7 2.11c-.35.67-.16-1.8-.16-1.88a52 52 0 0 1 1.41-7.36C5.87 17.94 14.08 7.18 25.88 2.25zm10.59 32A9.92 9.92 0 1 1 40.81 21a9.88 9.88 0 0 1-4.34 13.29zm20.87 2.53v1.5a21.48 21.48 0 0 1 6.9-6.13 18.79 18.79 0 0 1 8.65-1.94 17.35 17.35 0 0 1 8.45 2.06 13 13 0 0 1 5.55 5.82 13.56 13.56 0 0 1 1.55 4.78 48.84 48.84 0 0 1 .35 6.48v22.24A7.92 7.92 0 0 1 87.13 77a5.41 5.41 0 0 1-4.27 1.86A5.48 5.48 0 0 1 78.52 77a7.81 7.81 0 0 1-1.62-5.4V51.7c0-4-.59-7-1.68-9.09s-3.3-3.14-6.55-3.14a9.84 9.84 0 0 0-5.82 1.9A11 11 0 0 0 59 46.65c-.58 1.79-.91 5.09-.91 10v14.96c0 2.45-.52 4.23-1.65 5.47a5.68 5.68 0 0 1-4.34 1.82 5.38 5.38 0 0 1-4.29-1.9 7.82 7.82 0 0 1-1.67-5.4V37c0-2.29.5-4 1.51-5.09a5.1 5.1 0 0 1 4.07-1.71 5.41 5.41 0 0 1 2.83.74 5.29 5.29 0 0 1 2.06 2.25 8 8 0 0 1 .74 3.64z' fill='%232164f3' fill-rule='evenodd'/%3E%3C/svg%3E"
                    alt = "Indeed"
                />
            </Box>
            <Box className = {classes.boxForm}>
                <Grid container spacing = {3} >
                    <Grid item>
                        <Typography className = {classes.h5} variant = "h5">Create an Account (it's free)</Typography>
                    </Grid>
                    <Grid container item spacing = {3}>
                        <Grid item >
                            <HelperButton style = {{border: "2px solid #a6a6a6"}} className = {classes.buttona} variant = "outlined">
                               <FcGoogle style={{marginRight:"110px",width:25,height:25}} /> Sign in with Google
                            </HelperButton>
                        </Grid>
                        <Grid item >
                            <HelperButton style = {{border: "2px solid black"}} className = {classes.buttona} variant = "outlined">
                                <FaApple style={{marginRight:"115px",width:25,height:25}} /> Sign in with Apple
                            </HelperButton>
                        </Grid>
                        <Grid item >
                            <HelperButton style = {{border: "2px solid #1877f2", color: "#1877f2"}} className = {classes.buttona} variant = "outlined">
                               <SiFacebook style={{marginRight:"105px",width:25,height:25}} /> Sign in with Facebook
                            </HelperButton>
                        </Grid>
                    </Grid>
                    <Grid style = {{margin: "10px 0"}} container item>
                        <Grid item>
                            <hr className = {classes.divider} ></hr>
                        </Grid>
                        <Grid style = {{lineHeight : "0px"}} item> or</Grid>
                      
                    </Grid>
                    <Grid item>
                        <form onSubmit = { handleSubmit }>
                            <FormHelperText className = {classes.formhelperText}>Email Address</FormHelperText>
                            <OutlinedInput  className = {classes.outlinedInput} onChange = { onEmailChange } label="ssss" required type = "text" variant="outlined"/>
                            <FormHelperText className = {classes.formhelperText}>Password</FormHelperText>
                            <OutlinedInput  className = {classes.outlinedInput} onChange = { onPasswordChange } value = { password } required type = "password" variant="outlined"/>
                            <FormControlLabel className = {classes.checkbox}
                                control = {<GreenCheckbox  />}
                                label = "Keep me signed in on this device."
                            />
                            <br/>
                            <SignInButton style={{justifyContent:"center"}} type = "submit" className = {classes.buttona} variant = "contained">
                                <Link to="/login" style={{color:"white"}}>Create Account</Link>
                            </SignInButton>
                        </form>
                    </Grid>
                    <hr className = {classes.pageBreak}></hr>
                </Grid>
                <Typography align = "left" variant = "caption">
                    By creating an account, you agree to Indeed's <Link to="/" style = {{textDecoration: "none", color: "#085ff8"}} href = "">Terms of Service</Link>, <Link to="/" style = {{textDecoration: "none", color: "#085ff8"}} href = "">Cookie Policy</Link><br/>
                    and <Link to="/" style = {{textDecoration: "none", color: "#085ff8"}} >Privacy Policy.</Link>. You consent to receiving marketing messages from Indeed <br/> 
                    and may opt out from receiving such messages by following the unsubscribe link in our messages, or as detailed in our terms.
                </Typography>
            </Box>
            <Grid container spacing = {3} style = {{ flexDirection : "column", alignContent: "center", margin: "20px 0", color: "#085ff7"}}>
                <Grid item>
                    <Typography variant = "body2" component={Link} to="/login" style = {{cursor: "pointer",color: "#085ff7"}}>
                        Have an account? Sign in
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant = "body2" style = {{cursor: "pointer"}}>
                        Forgot Your Password
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align = "center" variant = "body2" style = {{cursor: "pointer"}}>
                        HelpCentre
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing = {1} style = {{fontSize : "14px", backgroundColor: "white", padding: "15px 10px", margin : "0 -20px "}} >
                <Grid item style = {{cursor: "pointer"}}>
                © 2020 Indeed
                </Grid>
                <Grid item>
                    -
                </Grid>
                <Grid item style = {{cursor: "pointer"}}>
                    Accessibility at Indeed
                </Grid>
                <Grid item>
                    -
                </Grid>
                <Grid item style = {{cursor: "pointer"}}>
                    Privacy Center
                </Grid>
                <Grid item>
                    -
                </Grid>
                <Grid item style = {{cursor: "pointer"}}>
                    Cookies
                </Grid>
                <Grid item>
                    -
                </Grid>
                <Grid item style = {{cursor: "pointer"}}>
                    Privacy
                </Grid>
                <Grid item>
                    -
                </Grid>
                <Grid item style = {{cursor: "pointer"}}>
                    Terms
                </Grid>
            </Grid>
           
        </Container>
    )
}