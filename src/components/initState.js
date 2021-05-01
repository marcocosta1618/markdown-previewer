// initialize the state of the Editor component with a default markdown

const initialize = 
`# Hello 👋👋👋,
## and welcome to my little markdown previewer.
It uses [marked](https://marked.js.org/) to convert your markdown into HTML...how cool is that??  

Now, we can easily do a bunch of stuff with this tool. Let's make a list:

- this is an item in an unordered list;
- this is *another one*, in italicized text;
- of course we can have **bold items**;
- and, just because we can, an ordered list within an unordered list:
    1. Lorem;
    2. Ipsum;
    3. Dolor;
    
### But wait, there's more!

We can display \`code\`, and also code box, like so:
~~~
function App() {
    return (
      <div className="App">
        <Editor />
        <Preview />
      </div>
    );
}
~~~


Want to quote your favorite author? We got you covered!

> “Self-education is, I firmly believe, the only kind of education there is.”
>
> *Isaac Asimov* 

![A beautiful night sky from a lake surrounded by snowy mountains.](https://i.postimg.cc/nz8hdWgz/night-sky-2.jpg)

`

export default initialize;

