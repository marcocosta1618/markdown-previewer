import React, { Component } from 'react';
import initState from './initialize';
import Footer from './Footer';

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
            input: localStorage.userInput || initState
        }
        this.handleChange = (event) => {
            this.setState({
                input: event.target.value
            })
            localStorage.setItem('userInput', event.target.value);
        }
        this.resetText = () => {
            this.setState({
                input: ''
            })
            localStorage.setItem('userInput', '');
        }
    }

    render() {
        const markUp = () => {
            return { __html: marked(this.state.input) };
        }

        return (
            <>
                <header>
                    <h1>Markdown previewer </h1>
                </header>
                <div className="flex-container">
                    <div className="flex-child1">
                        <label htmlFor="editor">Edit the textarea to see your markdown parsed (after any edit, reset and reload the page to see the initial markdown).</label>
                        <button onClick={this.resetText}>Reset markdown</button>
                        <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="flex-child2">
                        <Preview markdown={markUp()}></Preview>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

const Preview = (props) => {
    return (
        <div id="preview" dangerouslySetInnerHTML={props.markdown}></div>
    )
}

