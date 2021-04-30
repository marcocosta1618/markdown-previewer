import React, { Component } from 'react';


export class TextInput extends Component {
      constructor(props) {
          super(props);
          this.state = {
              input: ''
          }
          this.handleChange = (event) => {
              this.setState({
                  input: event.target.value
              })
          }
      }

      render() {
          return (
              <>
              <input value={this.state.input} onChange={this.handleChange}></input>
              <Preview text={this.state.input}/>
              </>
          )
      }
}

export const Preview = (props) => {
    return (
        <div>{props.text}</div>
    )
}

