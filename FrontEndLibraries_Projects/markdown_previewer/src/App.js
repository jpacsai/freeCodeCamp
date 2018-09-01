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
				<h1 className='title'>Markdown previewer</h1>
				<div className='containers'>
					<div className='editor-container'>
						<h2 className='container-header'>Editor</h2>
						<textarea 
							id="editor"
							type='text'
							value={ this.props.editorText}
							onChange={(e) => this.props.editorAction(e) }/>
					</div>

					<div className='preview-container'>
						<h2 className='container-header'>Preview</h2>
						<div id="preview" dangerouslySetInnerHTML={ { __html: markedPreview } }>
						</div>
					</div>
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