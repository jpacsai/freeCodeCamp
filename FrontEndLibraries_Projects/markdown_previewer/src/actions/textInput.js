import marked from 'marked';

export default function textInput(t) {
    
    const rawMarkup = marked(t, {sanitize: true});

    return {
        type: 'TEXT',
        text: rawMarkup
    }
}