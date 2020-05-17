import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
class Userdetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextstep();
    }
    render() { 
        const {values,handlechange}=this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user  Details"/>
                        <TextField hintText= "Enter Your First Name" floatingLabelFixed="First Name" onChange={handlechange("firstname")} defaultValue={values.firstname}></TextField>
                    <br></br>
                    <TextField hintText= "Enter Your Last Name" floatingLabelFixed="Last Name" onChange={handlechange("lastname")} defaultValue={values.lastname}></TextField>
                    <br></br>
                    <TextField hintText= "Enter Your Email" floatingLabelFixed="Email" onChange={handlechange("email")} defaultValue={values.email}></TextField>
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
 
export default Userdetails;