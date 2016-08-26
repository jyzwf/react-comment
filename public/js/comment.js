import React from 'react';
class Comment extends React.Component{
	render(){
		return (
    	  <div className="comment">
    	    <h2 className="commentAuthor">
    	      {this.props.author}
    	    </h2>
    	    <span>{this.props.children}</span>
    	  </div>
    	);
	}
}

export {Comment};