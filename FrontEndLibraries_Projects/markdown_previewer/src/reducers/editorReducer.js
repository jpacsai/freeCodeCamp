const defaultState = `
# Hello
## World!

This is a [link](https://www.freecodecamp.org/) to freeCodeCamp.

Some inline code: \`<p></p>\`

A code block:
\`\`\`
<h1>Hello World!</h1>
<p>freeCodeCamp is great :)</p>
\`\`\`

Some list items:
- one
- two
- three

> Block quote

An image:
![freeCodeCamp logo](https://secure.meetupstatic.com/photos/event/4/c/b/b/600_468259643.jpeg)
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