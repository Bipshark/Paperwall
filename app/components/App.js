/** @jsx React.DOM */
var React = require("react"),
	Router = require('react-router-component'),
	Header = require("./Header"),
	Taco = require("./Taco");

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
	render: function() {
		return (
			<Locations path={this.props.path}>
				<Location path="/" handler={Taco} />
				<Location path="/header" handler={Header} />
			</Locations>
		);
	}
});

module.exports = App;