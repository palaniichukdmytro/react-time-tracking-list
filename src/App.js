var React = require('react');
var TaskList = require('./TaskList');
var TaskForm = require('./TaskForm');




var App = React.createClass({
	getInitialState: function () {
		return {
			data: [
				{"id":"00001","task":"Wake up","complete":"false"},
				{"id":"00002","task":"Eat breakfast","complete":"false"},
        {"id":"00003","task":"Go to work","complete":"false"}
			]
		};
	},
	generateId: function () {
		return Math.floor(Math.random()*90000) + 10000;
	},
	handleNodeRemoval: function (nodeId) {
		var data = this.state.data;
		data = data.filter(function (el) {
			return el.id !== nodeId;
		});
		this.setState({data});
		return;
	},
	handleSubmit: function (task) {
		var data = this.state.data;
		var id = this.generateId().toString();
		var complete = 'false';
		data = data.concat([{id, task, complete}]);
		this.setState({data});
	},
	handleToggleComplete: function (nodeId) {
		var data = this.state.data;
		for (var i in data) {
			if (data[i].id === nodeId) {
				data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
				break;
			}
		}
		this.setState({data});
		return;
	},
	render: function() {
		return (
			<div className="container">
        <div className="row">
          <h1 className="col-12">Y-Productive Task List</h1>
          <TaskForm onTaskSubmit={this.handleSubmit} />
          <TaskList data={this.state.data} removeNode={this.handleNodeRemoval} toggleComplete={this.handleToggleComplete} />
        </div>
				
			</div>
		);
	}
});

module.exports = App;
