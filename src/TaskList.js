var React = require('react');
var TaskListItem = require('./TaskListItem');


var TaskList = React.createClass({
	removeNode: function (nodeId) {
		this.props.removeNode(nodeId);
		return;
	},
	toggleComplete: function (nodeId) {
		this.props.toggleComplete(nodeId);
		return;
	},
	render: function() {
		var listNodes = this.props.data.map(function (listItem) {
			return (
				<TaskListItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeNode={this.removeNode} toggleComplete={this.toggleComplete} />
			);
		},this);
		return (
            <div className="col-12">
                <ul className="list-group">
                    {listNodes}
                </ul>
            </div>
		);
	}
});
module.exports = TaskList;
