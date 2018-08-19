const defaultState = `
# Hello
## World!

This is a [link](https://www.freecodecamp.org/) to freeCodeCamp.

\`<p>Some inline code</p>\`

A code block:
\`\`\`
<h1>Hello World!</h1>
<p>freeCodeCamp is great :)</p>
\`\`\`

Some list items:
- one
- two
- three

> "Without hard work, nothing grows but weeds. 
> Gordon B. Hinckley"

**Bold text**

An image:  
![react logo](https://i.imgur.com/MqUvs9s.png)
`

export default function editorReducer(state = defaultState, action) {
    switch (action.type) {
        case 'TEXT_INPUT':
            console.log(action.text)
            return action.text;
            
        default:
            return state;
    }
}