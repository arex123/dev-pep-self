import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Signup.css'
import register from '../Assets/register.jpg'
import { ClassNames } from '@emotion/react';
import { Alert } from '@mui/material';
import TextField from '@mui/material/TextField'; //for input 
import { makeStyles } from '@mui/styles';
import cloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from 'react-router-dom';
import {useState} from 'react'

export default function Signup() {

    const useStyle = makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
        },
        card2:{
            height:'5wh',
            marginTop:'2%'
        }
    })
    const classes = useStyle();



    const [user,setUser] = useState({
        fullname: "", email: "", password: "", confirmPsd: ""
    });

    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }





    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
      };




  return (
      <div className="signupWrapper">
          <div className='signupCard'>
          <form onSubmit={handleSubmit}>

            <Card variant='outlined'>
                <div className="register-logo">
                    <img src={register} alt=""/>
                </div>
            <CardContent>
                {/* <Typography className={classes.text1} variant="subtitle1" > 
                    Sign up to see photos and videos from your friends
                </Typography> */}
                {false && <Alert severity='error'>This is an error alert - check it out!</Alert> }
                <TextField id="outlined-basic" name="fullname" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small" 
                    value={user.fullname}
                    onChange={handleInputs}
                
                />
                <TextField id="outlined-basic" name="email" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"
                    value={user.email}
                    onChange={handleInputs}
                />
                <TextField id="outlined-basic" name="password" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"
                value={user.password}
                    onChange={handleInputs} />                
                <TextField id="outlined-basic" name="confirmPsd" label="Confirm Password" variant="outlined" fullWidth={true} margin="dense" size="small"
                value={user.confirmPsd}
                    onChange={handleInputs} />                
                
            </CardContent>
            <CardActions>
                <Button color='primary' fullWidth={true} variant='contained' type="submit">
                    Sign Up
                </Button>
            </CardActions>
            <CardContent>
                <Typography className={classes.text1} variant='subtitle1'>
                    By signing up, you agree to our Terms, Condition and Cookies policy.
                </Typography>
            </CardContent>
            </Card>
            </form>
            <Card variant='outlined' className={classes.card2}>
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1">
                        Having an account ? <Link to="/" style={{textDecoration:'none'}}>Login</Link>
                    </Typography>
                </CardContent>
            </Card>

          </div>
      </div>
  );
}
