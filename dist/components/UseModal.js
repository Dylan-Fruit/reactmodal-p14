"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const UseModal = () => {
  const [isShowing, setIsShowing] = (0, _react.useState)(false);
  function toggle() {
    setIsShowing(!isShowing);
  }
  return {
    isShowing,
    toggle
  };
};
var _default = UseModal;
exports.default = _default;