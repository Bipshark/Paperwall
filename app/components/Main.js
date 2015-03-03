/** @jsx React.DOM */
var React = require('react'),
    Image = require('./Image');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Image image="1.jpg" />
                <Image image="2.jpg" />
                <Image image="3.jpg" />
                <Image image="4.jpg" />
            </div>
        );
    }
});

module.exports = Main;