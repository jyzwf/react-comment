import React from 'react';
import $ from 'webpack-zepto';
import {CommentList} from './comment_list';
import {CommentForm} from './comment_form';

class CommentBox extends React.Component{
	constructor(props){
		super(props)
		this.state = {data: []};
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	}

	loadCommentsFromServer(){
		let _this = this;
		$.ajax({
			url:_this.props.url,
			dataType:'json',
			cache:false,
			success(data){
				_this.setState({data:data});
			},
			error(xhr, status, err){
				 console.error(_this.props.url, status, err.toString());
			}
		})
	
	}

  	componentDidMount(){
  		this.loadCommentsFromServer();
  		// setInterval(this.loadCommentsFromServer.bind(this),this.props.pollInterval);
  	}

  	handleCommentSubmit(comment){
  		let comments = this.state.data;
  		comment.id = Date.now();
  		let newComments = [...comments,...comment];
  		this.setState({
  			data:newComments
  		});

  		let _this = this;

  		
  		$.ajax({
  			url: _this.props.url,
      		dataType: 'json',
      		type: 'POST',
      		data: comment,
      		success(data) {
      		  _this.setState({data: data});
      		},
      		error(xhr, status, err) {
      		  _this.setState({data: comments});
      		  console.error(_this.props.url, status, err.toString());
      		}
  		})
  	}

  	render(){
  		return(
  			<div className="commentBox">
      		  <h1>Comments:</h1>
      		 <CommentList data={this.state.data} />
      		  <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      		</div>
  		);
  	}
}

export {CommentBox};
