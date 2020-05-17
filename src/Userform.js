import React, { Component } from 'react';
import Userdetails from './Userdetails';
import Personaldetails from './Personaldetails'
import Confirm from './Confirm'
 
class Userform extends Component {
    state={
        step:1,
        firstname:'',
        lastname:'',
        email:'',
        occupation:'',
        city:'',
        bio:'',
    }
    nextstep=()=>{
        const {step}=this.state;
        this.setState({
            step:step + 1
        })
    }
    prestep=()=>{
        const {step}=this.state;
        this.setState({
            step:step - 1
        })
    }
    handlechange = input =>(e)=>{
       this.setState({[input]:e.target.value});
    }
    render() { 
        const {step}=this.state;
        const {firstname,lastname,email,city,occupation,bio}=this.state;
        const values ={firstname,lastname,email,city,occupation,bio}
        switch(step){
            case 1:
                return(
                    <Userdetails
                    nextstep={this.nextstep}
                    handlechange={this.handlechange}
                    values={values}
                    />
                )
              case 2:
                  return(
                    <Personaldetails
                    nextstep={this.nextstep}
                    prestep={this.prestep}
                    handlechange={this.handlechange}
                    values={values}
                    />
                  )
              case 3:
                  return(
                        <Confirm
                        nextstep={this.nextstep}
                        prestep={this.prestep}
                        values={values}
                        />
                    )  
              case 4 :
                 return(
                         <h1>Success</h1>
                        )            

        }
        return (
            <div>
                Userform
            </div>
        );
    }
}
 
export default Userform;