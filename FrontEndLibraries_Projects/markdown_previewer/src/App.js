import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import editorAction from './actions/editorText-action';
import marked from 'marked';

class App extends Component {

	render() {

		const markedPreview = marked(this.props.editorText, {sanitize: true});

		return (
			<main>
				<div>
					<textarea 
						id="editor"
						type='text'
						value={ this.props.editorText}
						onChange={(e) => this.props.editorAction(e) }/>
				</div>

				<div id="preview" dangerouslySetInnerHTML={ { __html: markedPreview } }>
				</div>
			</main>
		);
	}
}

function mapStateToProps(state) {
	return {
		editorText: state.editorText
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		editorAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);