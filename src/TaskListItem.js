var React = require('react');
var TaskTimer = require('./TaskTimer')

var TaskListItem = React.createClass({
	removeNode: function (e) {
		e.preventDefault();
		this.props.removeNode(this.props.nodeId);
		return;
	},
	toggleComplete: function (e) {
		e.preventDefault();
		this.props.toggleComplete(this.props.nodeId);
        
		return;
	},
	updateClass: function () {
		
	},
	render: function() {
        var classesListItem = 'list-group-item d-flex justify-content-between align-items-center';
		if (this.props.complete === 'true') {
			classesListItem += ' list-group-item-success';
		}
		return (
			<li className={classesListItem}>
				<p className="m-0">{this.props.task}</p>
				<div className="" role="group">
                    <TaskTimer />
					<button className="btn btn-outline-success btn-sm ml-1" type="button" onClick={this.toggleComplete}>&#x2713;</button>
                     <button className="btn btn-outline-danger btn-sm ml-1" type="button" onClick={this.removeNode}>&#xff38;</button>
				</div>
			</li>
		);
	}
});
module.exports = TaskListItem;
