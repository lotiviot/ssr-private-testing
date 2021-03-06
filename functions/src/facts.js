"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFacts;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import React from 'react'
function getFacts() {
  return (0, _isomorphicFetch["default"])('https://ssr-react.firebaseio.com/facts.json').then(function (res) {
    return res.json();
  });
}