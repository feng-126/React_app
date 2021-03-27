import { add,asyncAdd } from "../redux/actions/count_action";
import React, { Component } from "react";
import { connect } from "react-redux";

class Count extends Component {
  componentDidMount() {
    //console.log(this.props)
  }

  add = () => {
    this.props.add(this.stateValue.value * 1);
  }
  minus = () => {
    alert(this.stateValue.value)
  }

  asyncAdd = () => {
    this.props.asyncAdd(this.stateValue.value * 1,1000)
  }

  render() {
    return (
      <div>
        <h3>State :{this.props.state} </h3>
        <select ref={c => this.stateValue = c}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyncAdd}>asyncAdd</button>
      </div>
    );
  }

}

export default connect(
  state => ({ state: state.countReducer }),
  {
    add,
    asyncAdd
  })(Count);
