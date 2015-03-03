/** @jsx React.DOM */
var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <header id="header">Paperwall<span className="beta">BETA</span></header>
        );
    }
});

module.exports = Header;