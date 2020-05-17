import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
class Personaldetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextstep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prestep();
    }
    render() { 
        const {values,handlechange}=this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="Enter Personal Details"/>
                        <TextField hintText= "Enter Your Occupation" floatingLabelFixed="Your Occupation" onChange={handlechange("occupation")} defaultValue={values.occupation}/>
                    <br></br>
                    <TextField hintText= "Enter Your City" floatingLabelFixed="City" onChange={handlechange("city")} defaultValue={values.city}/>
                    <br></br>
                    <TextField hintText= "Enter Your Bio" floatingLabelFixed="Bio" onChange={handlechange("bio")} defaultValue={values.bio}/>
                   
                    <RaisedButton label="Back" primary={true} style={styles.button} onClick={this.back}/>
                    <RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
 
}
const styles ={
    button:{
        margin:15
    }
}
 
export default Personaldetails;