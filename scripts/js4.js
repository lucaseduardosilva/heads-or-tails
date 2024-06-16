var a0_0x1b7f = [
  "play",
  "keyCode",
  "heads",
  "bind",
  "toString",
  "table",
  "{}.constructor(\x22return\x20this\x22)(\x20)",
  "add",
  "info",
  "_ds",
  "constructor",
  "preventDefault",
  "remove",
  "classList",
  "__proto__",
  "/media/coin-flip.mp3",
  "$refs",
  "is_flipping",
  "type",
  "flipping-3",
  ".flipping-1{animation:2.8s\x20linear\x200s\x201\x20normal\x20flipping;transform:rotateX(0deg)}.flipping-2{animation:2.4s\x20linear\x200s\x201\x20normal\x20flipping-2;transform:rotateX(0deg)}.flipping-3{animation:3s\x20linear\x200s\x201\x20normal\x20flipping-3;transform:rotateX(0deg)}@-webkit-keyframes\x20flipping{0%{transform:rotateX(0deg)\x20scale(1)}25%{transform:rotateX(2400deg)\x20scale(1.33)}50%{transform:rotateX(3600deg)\x20scale(1.5)}75%{transform:rotateX(5400deg)\x20scale(1.25)}100%{transform:rotateX(7200deg)\x20scale(1)}}@-webkit-keyframes\x20flipping-2{0%{transform:rotateX(0deg)\x20scale(1)}25%{transform:rotateX(2400deg)\x20scale(1.15)}50%{transform:rotateX(3600deg)\x20scale(1.3)}75%{transform:rotateX(5400deg)\x20scale(1.2)}100%{transform:rotateX(7200deg)\x20scale(1)}}@-webkit-keyframes\x20flipping-3{0%{transform:rotateX(0deg)\x20scale(1)}25%{transform:rotateX(2400deg)\x20scale(1.33)}50%{transform:rotateX(3600deg)\x20scale(1.6)}75%{transform:rotateX(5400deg)\x20scale(1.4)}100%{transform:rotateX(7200deg)\x20scale(1)}}",
  "documentElement",
  "random_boolean",
  "createStyle",
  "log",
  "#fc-app",
  "keydown",
  "flipAll",
  "local_stats",
  "length",
  "coinsToFlip",
  "text/css",
  "coin-",
  "getAnimation",
  "nativeFlip",
  "is-flipped",
  "textContent",
  "addEventListener",
  "style",
  "trace",
  "flipping-1",
  "tails",
  "flipping-",
  "error",
  "current_value",
  "console",
  "apply",
  "return\x20(function()\x20",
];
(function (_0x6faf6b, _0x1b7f66) {
  var _0x2f30d0 = function (_0x1d1e01) {
    while (--_0x1d1e01) {
      _0x6faf6b["push"](_0x6faf6b["shift"]());
    }
  };
  _0x2f30d0(++_0x1b7f66);
})(a0_0x1b7f, 0x81);
var a0_0x2f30 = function (_0x6faf6b, _0x1b7f66) {
  _0x6faf6b = _0x6faf6b - 0x0;
  var _0x2f30d0 = a0_0x1b7f[_0x6faf6b];
  return _0x2f30d0;
};
var a0_0x519876 = (function () {
    var _0x11a536 = !![];
    return function (_0x30b27e, _0x2f3e49) {
      var _0x3d9717 = _0x11a536
        ? function () {
            if (_0x2f3e49) {
              var _0xb1898e = _0x2f3e49[a0_0x2f30("0xd")](_0x30b27e, arguments);
              return (_0x2f3e49 = null), _0xb1898e;
            }
          }
        : function () {};
      return (_0x11a536 = ![]), _0x3d9717;
    };
  })(),
  a0_0x12867f = a0_0x519876(this, function () {
    var _0x2effec;
    try {
      var _0x3b15fc = Function(a0_0x2f30("0xe") + a0_0x2f30("0x15") + ");");
      _0x2effec = _0x3b15fc();
    } catch (_0x3776e1) {
      _0x2effec = window;
    }
    var _0x23a79b = (_0x2effec[a0_0x2f30("0xc")] = _0x2effec["console"] || {}),
      _0x5a2803 = [
        a0_0x2f30("0x27"),
        "warn",
        a0_0x2f30("0x17"),
        a0_0x2f30("0xa"),
        "exception",
        a0_0x2f30("0x14"),
        a0_0x2f30("0x6"),
      ];
    for (
      var _0x1c7f36 = 0x0;
      _0x1c7f36 < _0x5a2803[a0_0x2f30("0x2c")];
      _0x1c7f36++
    ) {
      var _0x2e89e9 =
          a0_0x519876[a0_0x2f30("0x19")]["prototype"][a0_0x2f30("0x12")](
            a0_0x519876
          ),
        _0x2355e3 = _0x5a2803[_0x1c7f36],
        _0x10d695 = _0x23a79b[_0x2355e3] || _0x2e89e9;
      (_0x2e89e9[a0_0x2f30("0x1d")] =
        a0_0x519876[a0_0x2f30("0x12")](a0_0x519876)),
        (_0x2e89e9["toString"] =
          _0x10d695[a0_0x2f30("0x13")][a0_0x2f30("0x12")](_0x10d695)),
        (_0x23a79b[_0x2355e3] = _0x2e89e9);
    }
  });
a0_0x12867f();
var FlipSound = new Howl({ src: [a0_0x2f30("0x1e")] }),
  app = new Vue({
    el: a0_0x2f30("0x28"),
    i18n: Vue_I18N,
    mixins: [CommonMixin],
    data: {
      coinsToFlip: 0x1,
      timer: null,
      is_flipping: ![],
      sound: !![],
      styleNode: null,
      current_value: 0x0,
      local_stats: { heads: 0x0, tails: 0x0 },
    },
    mounted: function () {
      $("#vue-loader")[a0_0x2f30("0x1b")]();
    },
    created: function () {
      var _0x338fa4 = this;
      window[a0_0x2f30("0x4")](a0_0x2f30("0x29"), function (_0x25fe50) {
        _0x25fe50[a0_0x2f30("0x10")] === 0x20 &&
          (_0x25fe50[a0_0x2f30("0x1a")](),
          !_0x338fa4["shaking"] && _0x338fa4[a0_0x2f30("0x2a")]());
      });
    },
    methods: {
      flipAll: function () {
        if (this[a0_0x2f30("0x20")]) return ![];
        this[a0_0x2f30("0x26")]();
        for (
          let _0x33ae8c = 0x1;
          _0x33ae8c <= this[a0_0x2f30("0x2d")];
          _0x33ae8c++
        ) {
          var _0xc6423a = a0_0x2f30("0x2f") + _0x33ae8c,
            _0x4d09f3 = this[a0_0x2f30("0x1f")][_0xc6423a][0x0],
            _0x3b96c3 = Math["random"]() < 0.5;
          (this[a0_0x2f30("0xb")] = _0x3b96c3),
            FlipSound[a0_0x2f30("0xf")](),
            this[a0_0x2f30("0x1")](_0x4d09f3, _0x3b96c3),
            (this[a0_0x2f30("0x20")] = !![]);
        }
        setTimeout(this["onFinish"], 0xbb8);
      },
      flip: function (_0x360ffb, _0xde58c) {
        this[a0_0x2f30("0x2a")]();
      },
      nativeFlip: function (_0x22aea5, _0x43f070) {
        var _0x4f5781 = this;
        _0x22aea5[a0_0x2f30("0x1c")][a0_0x2f30("0x1b")](a0_0x2f30("0x7")),
          _0x22aea5[a0_0x2f30("0x1c")]["remove"]("flipping-2"),
          _0x22aea5[a0_0x2f30("0x1c")][a0_0x2f30("0x1b")](a0_0x2f30("0x22")),
          setTimeout(function () {
            var _0x59bccc = a0_0x2f30("0x9") + _0x4f5781[a0_0x2f30("0x0")]();
            _0x22aea5[a0_0x2f30("0x1c")][a0_0x2f30("0x16")](_0x59bccc),
              console[a0_0x2f30("0x27")](a0_0x2f30("0x25"), _0x43f070),
              _0x43f070
                ? _0x22aea5[a0_0x2f30("0x1c")][a0_0x2f30("0x16")](
                    a0_0x2f30("0x2")
                  )
                : _0x22aea5["classList"][a0_0x2f30("0x1b")]("is-flipped");
          }, 0x32);
      },
      getAnimation: function () {
        return rando(0x1, 0x3);
      },
      createStyle: function () {
        var _0x578bdc = a0_0x2f30("0x23"),
          _0x59d9aa = document["createElement"](a0_0x2f30("0x5"));
        (this[a0_0x2f30("0x18")] = _0x59d9aa),
          (_0x59d9aa[a0_0x2f30("0x21")] = a0_0x2f30("0x2e")),
          (_0x59d9aa[a0_0x2f30("0x3")] = _0x578bdc),
          document[a0_0x2f30("0x24")]["appendChild"](_0x59d9aa);
      },
      onFinish: function () {
        this[a0_0x2f30("0x18")] && this["_ds"]["remove"](),
          (this["is_flipping"] = ![]),
          this[a0_0x2f30("0xb")]
            ? this[a0_0x2f30("0x2b")][a0_0x2f30("0x8")]++
            : this[a0_0x2f30("0x2b")][a0_0x2f30("0x11")]++;
      },
    },
  });
