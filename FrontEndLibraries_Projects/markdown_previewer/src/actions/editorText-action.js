export default function editorAction (e) {
    
    const text = e.target.value;

    return {
        type: 'TEXT_INPUT',
        text
    }
}