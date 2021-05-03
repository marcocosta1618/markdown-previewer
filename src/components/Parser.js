import React, { Component } from 'react';
import initState from './initialize';

const marked = require('marked');
marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: false
})


export class Parser extends Component {
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
            <>
                <div className="flex-child1">
                    <header>
                        <h1>Markdown Previewer </h1>
                    </header>
                    <label htmlFor="editor">Edit the textarea to see your markdown parsed:</label>
                    <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
                </div>
                <div className="flex-child2">
                    <Preview markdown={markUp()}></Preview>
                </div>
            </>
        )
    }
}

const Preview = (props) => {
    return (
        <div id="preview" dangerouslySetInnerHTML={props.markdown}></div>
    )
}

