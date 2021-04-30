import React, { Component } from 'react';
const marked = require('marked');


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
          const markUp = () => {
              return {__html: marked(this.state.input)};
          }
          
          return (
              <>
              <input value={this.state.input} onChange={this.handleChange}></input>
              <Preview markdown={markUp()}></Preview>
              </>
          )
      }
}

export const Preview = (props) => {
    return (
        <div dangerouslySetInnerHTML={props.markdown}></div>
    )
}

