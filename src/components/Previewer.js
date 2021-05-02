import React, { Component } from 'react';
import initState from './initialize';

const marked = require('marked');
marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: false
})

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: initState
        }
        this.handleChange = (event) => {
            this.setState({
                input: event.target.value
            })
        }
    }


    render() {
        const markUp = () => {
            return { __html: marked(this.state.input) };
        }

        return (
            <div>
                <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
                <Preview markdown={markUp()}></Preview>
            </div>
        )
    }
}

export const Preview = (props) => {
    return (
        <div id="preview" dangerouslySetInnerHTML={props.markdown}></div>
    )
}

