import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.state.name,
      count: this.props.state.count,
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
