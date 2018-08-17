import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import editorReducer from './editorReducer';

export default combineReducers({
    editorText: editorReducer,
    previewText: inputReducer
})