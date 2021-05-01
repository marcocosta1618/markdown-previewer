import React, { Component } from 'react';
import initialize from  './initState';

const marked = require('marked');


export class Editor extends Component {
      constructor(props) {
          super(props);
          this.state = {
              input: initialize
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
              <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
              <Preview markdown={markUp()}></Preview>
              </>
          )
      }
}

export const Preview = (props) => {
    return (
        <div id="preview" dangerouslySetInnerHTML={props.markdown}></div>
    )
}

