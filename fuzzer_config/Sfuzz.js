// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Sfuzz = factory(root.KaitaiStream);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream) {
var Sfuzz = (function() {
  Sfuzz.ParseType = Object.freeze({
    LINE_GRAPH: 1,
    SOURCE_COV: 2,

    1: "LINE_GRAPH",
    2: "SOURCE_COV",
  });

  function Sfuzz(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Sfuzz.prototype._read = function() {
    this.pType = this._io.readU1();
    this.xVal = this._io.readU8be();
    this.yVal = this._io.readU8be();
    this.xNameLen = this._io.readU2be();
    this.yNameLen = this._io.readU2be();
    this.xName = KaitaiStream.bytesToStr(this._io.readBytes(this.xNameLen), "ASCII");
    this.yName = KaitaiStream.bytesToStr(this._io.readBytes(this.yNameLen), "ASCII");
    console.log("HI");
  }

  return Sfuzz;
})();
return Sfuzz;
}));
