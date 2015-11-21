var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, World! I am comment box
      </div>
    );
  }
});

ReactDOM.render(<CommentBox/>, document.getElementById('content'));