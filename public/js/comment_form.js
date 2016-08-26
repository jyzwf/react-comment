import React from 'react';
class CommentForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {author:'',text:''};
	}

	handleAuthorChange(e){

			this.setState({
				author:e.target.value
			})
		
	}

	handleTextChange(e){
		this.setState({
			text:e.target.value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		let author = this.state.author.trim(),
			text = this.state.text.trim();

		if(!text || !author){
			alert('请填写完整');
			return false;
		}

		this.props.onCommentSubmit({
			author:author,
			text:text
		});

		this.setState({
			author:'',
			text:''
		})
	}

	render(){
		return(
			<form className='commentForm' onSubmit={this.handleSubmit.bind(this)}>
				<input type='text' placeholder='name' value={this.state.author}
				onChange={e => this.handleAuthorChange(e)} />
				<input type='text' placeholder='say something...' value={this.state.text}
				onChange={this.handleTextChange.bind(this)} />
				<input type='submit' value='Post' />
			</form>
		);
	}
}

export {CommentForm};