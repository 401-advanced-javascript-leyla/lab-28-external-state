import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: props.newState.name,
      count: props.newState.count,
    };      
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleNameChange(this.state.name);
  };
  
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.name} onChange={
        this.handleChange
        } />
        <button type="submit">Change Name</button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  newState: PropTypes.object,
  handleNameChange: PropTypes.func,
};
