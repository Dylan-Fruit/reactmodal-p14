"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("./Modal.css");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    isShowing,
    hide,
    text
  } = _ref;
  return isShowing ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-container-elements"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-cotainer-elements-close-btn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-btn",
    onClick: hide
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faXmark
  }))), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCircleCheck
  }), /*#__PURE__*/_react.default.createElement("p", null, text)))), document.getElementById("modal-root")) : null;
};
var _default = Modal;
exports.default = _default;