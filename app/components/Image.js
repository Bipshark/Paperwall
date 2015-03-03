/** @jsx React.DOM */
var React = require('react');

var Image = React.createClass({
    handleClick: function(e) {
        e.preventDefault();

        alert('IMAGE');
    },
    render: function() {
        var image = 'images/' + this.props.image;
        return (
            <a href="#" onClick={this.handleClick}>
                <img className="image" src={image} />
            </a>
        );
    }
});

module.exports = Image;