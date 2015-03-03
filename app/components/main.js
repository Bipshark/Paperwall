/** @jsx React.DOM */
var React = require('react/addons');
var ReactApp = React.createFactory(require('./App'));

var mountNode = document.getElementById('react');

console.log(window.location.pathname);

React.render(new ReactApp({ path: window.location.pathname }), mountNode);