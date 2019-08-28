import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    search: ""
   
  };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.search) {
      ;
    } else{
      alert("Please enter search item!")
    }

    this.setState({
      search: ""
      
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Here are the results for {this.state.search} 
        </p>
        
        
        
        
      </div>
    );
  }
}

export default Form;
