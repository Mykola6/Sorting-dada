import { render } from '@testing-library/react';
import React, { Component } from 'react';
import loader from './loader/loader';
import Table from './table'




class App extends Component {

  state = {
    isLoding: true,
    data: []
  }
  

  componentDidMount = async() => {
    const response = await fetch('sort_data\sort_data.json')
    const data = await response.json()
    console.log(data)

    this.setState({
      isLoding: false,
      data
    })
  }

  render() {
    return (
      <div className="container">
        {
          this.state.isLoding
            ? <loader></loader>
            : <table data={this.state.data}></table>
        }
      </div>
    );
  }
}

export default App;
