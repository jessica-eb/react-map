var NameComponent = React.createClass({
	render: function() {
		return (
			<input className="name" placeholder="where to?" />
		)
	}
})

var RoomComponent = React.createClass({
	render: function() {
		return (
			<div className="room">
			</div>
		)
	}
})

var GreenRoomComponent = React.createClass({
	render: function() {
		return (
			<div className="room room--green">
			</div>
		)
	}
})

var PinkRoomComponent = React.createClass({
	render: function() {
		return (
			<div className="room room--pink">
			</div>
		)
	}
})

var OjRoomComponent = React.createClass({
	render: function() {
		return (
			<div className="room room--oj">
			</div>
		)
	}
})

var BuildingComponent = React.createClass({
	render: function() {
		var roomNodes = this.props.roomNames.map(function() {

		});
		return (
			<div className="building">
				<RoomComponent />
				<GreenRoomComponent />
				<RoomComponent />
				<RoomComponent />
				<RoomComponent />
				<GreenRoomComponent />
				<RoomComponent />
				<RoomComponent />
				<RoomComponent />
				<GreenRoomComponent />
				<RoomComponent />
				<RoomComponent />
				<RoomComponent />
				<GreenRoomComponent />
				<OjRoomComponent />
				<RoomComponent />
				<RoomComponent />
				<GreenRoomComponent />
				<RoomComponent />
				<RoomComponent />
				<PinkRoomComponent />
				<GreenRoomComponent />
				<RoomComponent />
				<PinkRoomComponent />
				<GreenRoomComponent />
				<RoomComponent />
				<RoomComponent />
				<RoomComponent />
				<GreenRoomComponent />
				<PinkRoomComponent />
				<RoomComponent />
			</div>
		)
	}
})

var AppComponent = React.createClass({
	render: function() {
		return (
			<div className="container" >
				<NameComponent />
				<BuildingComponent roomNames={this.props.roomNames} />
			</div>
		)
	}
})

ReactDOM.render(
  <AppComponent roomNames={ROOM_NAMES} />,
  document.getElementById('content')
);