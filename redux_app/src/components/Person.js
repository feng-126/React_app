import React, { Component } from 'react';
import { connect } from "react-redux"
import { addPerson } from "../redux/actions/person_action"
class Person extends Component {
    componentDidMount() {

    }
    addPerson =()=>{
        let {value} = this.personValue;
        this.props.addPerson(value);
    }
    render() {
        return (
            <div>
            <ul>
               {this.props.state.map((item,index)=>{
                   return (
                       <li key={index}>{item}</li>
                   );
               })}
            </ul>
            <input type="text" ref={(c)=>{this.personValue = c}}/> 
            <button onClick={this.addPerson}>add</button>
            </div>
        )
    }
}


export default connect(
    state => ({ state: state.personReducer }),
    {
        addPerson
    })
    (Person)