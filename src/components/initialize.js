// initialize the state of the Editor component with a default markdown

const initState = 
`# Hello 👋👋👋,
### and welcome to my little markdown previewer.
It uses [marked](https://marked.js.org/) to convert your markdown into HTML...how cool is that??  

Now, we can easily do a bunch of stuff with this tool. 

Let's make a list:

- this is an item in an unordered list;
- this is *another one*, in italicized text;
- we can have **bold items**, of course;
- and, just because we can, an ordered list within an unordered list:
    1. Lorem;
    2. Ipsum;
    3. Dolor;
   

A tasks list:

- [x] something done
- [ ] something to do
- [ ] something else to do

And a table:

| Tables  |      Are      |  Cool   | 
|   ---   |      ---      |   ---   |
|  item1  |     item2     |  item3  |
|  item4  |     item5     |  item6  |    

## But wait, there's more!

We can display inline code, as in \`const square = (x) => x * x;\`  and also code box, like so:
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

Last but not least, we can also link to images!

Have a look at the [Markdown Guide](https://www.markdownguide.org/) to see what else you can do.

![A robot laying down on the side waving hello.](https://i.postimg.cc/z3mdq9BM/robot-01.jpg)
`

export default initState;

