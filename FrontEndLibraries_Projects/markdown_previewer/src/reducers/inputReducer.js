export default function inputReducer(state = '', action) {

    switch (action.type) {
        case 'TEXT':
            return action.text;
            
        default:
            return state;
    }
}