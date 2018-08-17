import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import textInput from './actions/textInput';
import editorAction from './actions/editorText-action';

class App extends Component {

	componentDidMount() {
		const text = this.props.editorText;
		this.props.textInput(text);
	}

	render() {
		return (
			<main>
				<div>
					<textarea 
						id="editor"
						type='text'
						value={ this.props.editorText}
						onChange={(e) => {
							const t = e.target.value;
							this.props.editorAction(t)
						} }/>
				</div>

				<div id="preview" dangerouslySetInnerHTML={ { __html: this.props.previewText } }>
				</div>
			</main>
		);
	}
}

function mapStateToProps(state) {
	return {
		editorText: state.editorText,
		previewText: state.previewText
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		textInput,
		editorAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);