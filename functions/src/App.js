"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

require("./app.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App(props) {
  var facts = props.facts.map(function (fact, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i
    }, fact.text);
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, facts);
}