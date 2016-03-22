/* globals window */
var ReactDOM = require('react-dom');
var React = require('react');
var Organ = require('./components/Organ');

var Dispatcher = require('./dispatcher/Dispatcher');
var Note = require('./util/Note');
var KeyStore = require('./stores/key_store');
var KeyActions = require('./actions/KeyActions');
var KeyListener = require('./util/KeyListener').KeyListener;

document.addEventListener("DOMContentLoaded", function () {
  var organ = document.querySelector('#content');
  ReactDOM.render(<Organ />, organ);
});
