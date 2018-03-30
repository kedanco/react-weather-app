import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};

    // if callback has 'this', then we need to bind.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    // the 'this' here is not the 'this' from this function, but from the callback at line 26, onChange, which is the input.
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    // fetch weather data here yo

    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render(){
    return (
      // Add event handler to prevent default form auto-submit & page refresh
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a 5 day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null here -> we don't need any state, putting mapDis.. as 2nd argument
export default connect(null, mapDispatchToProps)(SearchBar);
