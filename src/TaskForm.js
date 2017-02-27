var React = require('react');
var ReactDOM = require('react-dom');

var TaskForm = React.createClass({
	doSubmit: function (e) {
		e.preventDefault();
		var task = ReactDOM.findDOMNode(this.refs.task).value.trim();
		if (!task) {
			return;
		}
		this.props.onTaskSubmit(task);
		ReactDOM.findDOMNode(this.refs.task).value = '';
		return;
	},
	render: function() {
		return (
            <div className="col-12 mb-4">
					<form className="d-flex"  onSubmit={this.doSubmit}>

								<input className="form-control" type="text" id="task" ref="task"  placeholder="What do you need to do?" />
								<input className="btn btn-primary" type="submit" value="Add Task"  />
					</form>
            </div>
		);
	}
});

module.exports = TaskForm;