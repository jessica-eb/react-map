var NameComponent = React.createClass({
	getInitialState: function() {
		return {
			roomName: ''
		}
	},
	handleTextChange: function(e) {
		this.setState({
			roomName: e.target.value 
		}, function() {
			this.handleAppChange()
		})
	},
	handleAppChange: function() {
		this.props.onAppChange(this.state.roomName);
	},
	render: function() {
		return (
			<input onChange={this.handleTextChange} className="name" placeholder="where to?" />
		)
	}
})

var RoomComponent = React.createClass({
	render: function() {
		var roomClass = "room room--" + this.props.color + " " + this.props.selected;
		return (
			<div style={this.props.coords} className={ roomClass }>
			</div>
		)
	}
})

var BuildingComponent = React.createClass({
	render: function() {
		var self = this;
		var roomNodes = this.props.roomNames.map(function(item, index) {
			var selected = "";
			if (item.name.toLowerCase() === self.props.selectedRoom.toLowerCase()) {
				selected = "room--active";
			};
			return (
				<RoomComponent coords={item.style} selected={selected} name={item.name} color={item.color} key={index} />
			)
		});
		return (
			<div className="building">
				{ roomNodes }
			</div>
		)
	}
})

var AppComponent = React.createClass({
	getInitialState: function() {
		return {
			roomName: ''
		}
	},
	handleAppChange: function(roomName) {
		this.setState({ roomName: roomName })
	},
	render: function() {
		return (
			<div className="container" >
				<NameComponent onAppChange={this.handleAppChange} />
				<BuildingComponent selectedRoom={this.state.roomName} roomNames={this.props.roomNames} />
			</div>
		)
	}
})

ReactDOM.render(
  <AppComponent roomNames={ROOM_NAMES} />,
  document.getElementById('content')
);