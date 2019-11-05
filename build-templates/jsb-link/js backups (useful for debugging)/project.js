window.__require = function e(t, o, n) {
function i(a, s) {
if (!o[a]) {
if (!t[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!t[l]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
}
var c = o[a] = {
exports: {}
};
t[a][0].call(c.exports, function(e) {
return i(t[a][1][e] || e);
}, c, c.exports, e, t, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
AgariIndexA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "01d0cxro+5AkojsZ56RJh7i", "AgariIndexA");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, i = e("../lobby/lcore/LCoreExports"), r = e("./proto/protoGameA"), a = r.proto.pokerface, s = r.proto.prunfast, l = ((n = {})[a.CardID.R2H] = 0, 
n[a.CardID.R2D] = 1, n[a.CardID.R2C] = 2, n[a.CardID.R2S] = 3, n[a.CardID.R3H] = 4, 
n[a.CardID.R3D] = 5, n[a.CardID.R3C] = 6, n[a.CardID.R3S] = 7, n[a.CardID.R4H] = 8, 
n[a.CardID.R4D] = 9, n[a.CardID.R4C] = 10, n[a.CardID.R4S] = 11, n[a.CardID.R5H] = 12, 
n[a.CardID.R5D] = 13, n[a.CardID.R5C] = 14, n[a.CardID.R5S] = 15, n[a.CardID.R6H] = 16, 
n[a.CardID.R6D] = 17, n[a.CardID.R6C] = 18, n[a.CardID.R6S] = 19, n[a.CardID.R7H] = 20, 
n[a.CardID.R7D] = 21, n[a.CardID.R7C] = 22, n[a.CardID.R7S] = 23, n[a.CardID.R8H] = 24, 
n[a.CardID.R8D] = 25, n[a.CardID.R8C] = 26, n[a.CardID.R8S] = 27, n[a.CardID.R9H] = 28, 
n[a.CardID.R9D] = 29, n[a.CardID.R9C] = 30, n[a.CardID.R9S] = 31, n[a.CardID.R10H] = 32, 
n[a.CardID.R10D] = 33, n[a.CardID.R10C] = 34, n[a.CardID.R10S] = 35, n[a.CardID.JH] = 36, 
n[a.CardID.JD] = 37, n[a.CardID.JC] = 38, n[a.CardID.JS] = 39, n[a.CardID.QH] = 40, 
n[a.CardID.QD] = 41, n[a.CardID.QC] = 42, n[a.CardID.QS] = 43, n[a.CardID.KH] = 44, 
n[a.CardID.KD] = 45, n[a.CardID.KC] = 46, n[a.CardID.KS] = 47, n[a.CardID.AH] = 48, 
n[a.CardID.AD] = 49, n[a.CardID.AC] = 50, n[a.CardID.AS] = 51, n[a.CardID.JOB] = 52, 
n[a.CardID.JOR] = 53, n[a.CardID.CARDMAX] = 54, n);
(function(e) {
for (var t, o = [], n = 0; n <= 14; n++) o.push(0);
var u = ((t = {})[1111111111] = 657921, t[333] = 198920, t[33333] = 331528, t[4] = 1026, 
t[1] = 259, t[2] = 516, t[32] = 1287, t[1111111] = 460545, t[222] = 132101, t[3322] = 133641, 
t[33] = 132616, t[3333] = 265224, t[11111111] = 526337, t[111111111] = 592129, t[22] = 132613, 
t[2222] = 198149, t[22222] = 264197, t[222222] = 330245, t[2222222] = 396293, t[22222222] = 462341, 
t[3] = 774, t[11111] = 328961, t[111111] = 394753, t[11111111111] = 723713, t[111111111111] = 789505, 
t[333222] = 200457, t), c = function(e) {
for (var t = 0; t < 14; t++) o[t] = 0;
for (var n = 0, i = e; n < i.length; n++) {
var r = i[n];
if (void 0 !== r && null !== r) {
var a = Math.floor(r / 4);
o[a] = o[a] + 1;
}
}
};
e.tileId2ArtId = function(e) {
var t = l[e];
if (null == t) {
i.Logger.debug("no art id for tile:" + e);
throw Error("no art id for tile:" + e);
}
return t;
};
var d = function(e) {
for (var t = o.length, n = 0; n < t; n++) o[n] = 0;
var i = e.length;
for (n = 0; n < i; n++) {
var r = e[n];
o[Math.floor(r / 4)]++;
}
for (n = 0; n < t; n++) if (o[n] > 4) throw Error("card type great than 4,card:" + n);
o.sort(function(e, t) {
return e - t;
});
var a = 0;
for (n = t - 1; n >= 0 && 0 !== o[n]; n--) a = 10 * a + o[n];
for (n = 0; n < t; n++) o[n] = 0;
for (n = 0; n < i; n++) {
r = e[n];
o[Math.floor(r / 4)]++;
}
return a;
}, h = function(e, t) {
var n = 0;
switch (e) {
case r.proto.prunfast.CardHandType.Flush:
n = 1;
break;

case r.proto.prunfast.CardHandType.Pair2X:
n = 2;
break;

case r.proto.prunfast.CardHandType.Triplet2X:
case r.proto.prunfast.CardHandType.Triplet2X2Pair:
n = 3;
}
if (0 === n) return !0;
for (var i = 0, a = o.length, s = 1; s < a; s++) if (o[s] === n) {
i = s;
break;
}
var l = 1;
for (s = i + 1; s < a && o[s] === n; s++) l++;
return l >= t;
};
e.agariConvertMsgCardHand = function(e) {
var t = d(e);
if (void 0 === u[t]) {
i.Logger.debug("agariConvertMsgCardHand undefined...");
return null;
}
var o = u[t], n = 255 & o, s = new a.MsgCardHand();
s.cardHandType = n;
e.sort(function(e, t) {
return t - e;
});
var l = o >> 16 & 255;
if (l > 0 && !h(n, l)) {
i.Logger.debug("agariConvertMsgCardHand 顺子类型...");
return null;
}
var c = [], p = e.length;
switch (n) {
case r.proto.prunfast.CardHandType.TripletPair:
case r.proto.prunfast.CardHandType.Triplet2X2Pair:
for (var f = 0; f < p; f++) {
var g = e[f];
3 === Math.floor(g / 4) && c.push(g);
}
for (f = 0; f < p; f++) {
g = e[f];
3 !== Math.floor(g / 4) && c.push(g);
}
break;

default:
c = c.concat(e);
}
s.cards = c;
if (n === r.proto.prunfast.CardHandType.Triplet) if (Math.floor(s.cards[0] / 4) === Math.floor(r.proto.pokerface.CardID.R3H / 4)) {
for (var y = !1, m = 0, b = s.cards; m < b.length; m++) {
var v = b[m];
if (Number(v) === r.proto.pokerface.CardID.R3H) {
y = !0;
break;
}
}
y || (s.cardHandType = r.proto.prunfast.CardHandType.Bomb);
} else Math.floor(s.cards[0] / 4) === Math.floor(r.proto.pokerface.CardID.AH / 4) && (s.cardHandType = r.proto.prunfast.CardHandType.Bomb);
return s;
};
e.agariGreatThan = function(e, t) {
if (t.cardHandType === r.proto.prunfast.CardHandType.Bomb) return e.cardHandType !== r.proto.prunfast.CardHandType.Bomb || Math.floor(t.cards[0] / 4) > Math.floor(e.cards[0] / 4);
if (e.cardHandType === r.proto.prunfast.CardHandType.Bomb) return !1;
if (e.cardHandType !== t.cardHandType) return !1;
if (e.cards.length !== t.cards.length) return !1;
if (e.cardHandType === r.proto.prunfast.CardHandType.Single) {
if (0 === Math.floor(e.cards[0] / 4)) return !1;
if (0 === Math.floor(t.cards[0] / 4)) return !0;
}
return Math.floor(t.cards[0] / 4) > Math.floor(e.cards[0] / 4);
};
var p = function(e, t, o) {
for (var n = [], i = 0, r = 0, a = e; r < a.length; r++) {
var s = a[r];
if (Math.floor(s / 4) === t) {
n.push(s);
if ((i += 1) === o) break;
}
}
return n;
}, f = function(e, t, o, n) {
for (var i = [], r = t; r <= o; r++) for (var a = 0, s = 0, l = e; s < l.length; s++) {
var u = l[s];
if (Math.floor(u / 4) === r) {
i.push(u);
if ((a += 1) === n) break;
}
}
return i;
}, g = function(e) {
var t = [];
c(e);
for (var n = Math.floor(a.CardID.AH / 4), i = 2; i < n; i++) if (o[i] > 3) {
(m = new r.proto.pokerface.MsgCardHand()).cardHandType = s.CardHandType.Bomb;
var l = p(e, i, 4);
m.cards = l;
t.push(m);
}
var u = Math.floor(a.CardID.AH / 4);
if (o[u] > 2) {
(m = new r.proto.pokerface.MsgCardHand()).cardHandType = s.CardHandType.Bomb;
l = p(e, u, 4);
m.cards = l;
t.push(m);
}
var d = Math.floor(a.CardID.R3H / 4);
if (o[d] > 2) {
for (var h = [], f = 0, g = e; f < g.length; f++) {
var y = g[f];
Math.floor(y / 4) === d && y !== a.CardID.R3H && h.push(y);
}
if (3 === h.length) {
var m;
(m = new r.proto.pokerface.MsgCardHand()).cardHandType = s.CardHandType.Bomb;
l = p(e, u, 4);
m.cards = l;
t.push(m);
}
}
return t;
}, y = function(e, t) {
var n = [];
c(t);
for (var i = Math.floor(e.cards.length / 5), l = Math.floor(e.cards[0] / 4) + 1, u = Math.floor(a.CardID.AH / 4); l <= u; ) {
for (var d = l, h = !0, g = 0; g < i; g++) if (o[d - g + 2] < 3) {
l += 1;
h = !1;
break;
}
if (h) {
for (var y = l + 1 - i, m = l, b = 0, v = [], w = 0; w < y - 1; w++) if (o[w + 1] > 1) {
b += 1;
v.push(w);
}
var C = Math.floor(a.CardID.AH / 4);
for (w = m + 1; w < C; w++) if (o[w] > 1) {
b += 1;
v.push(w);
}
if (b >= i) {
var R = new r.proto.pokerface.MsgCardHand();
R.cardHandType = s.CardHandType.Triplet2X2Pair;
var I = f(t, y, m, 3);
R.cards = R.cards.concat(I);
for (g = 0; g < v.length; g++) {
I = p(t, v[g], 2);
R.cards = R.cards.concat(I);
if (g === i) break;
}
n.push(R);
}
l += 1;
}
}
return n;
}, m = function(e, t) {
var n = [];
c(t);
for (var i = e.cards.length - 2, l = Math.floor(e.cards[0] / 4), u = Math.floor(i / 3), d = l + 1, h = Math.floor(a.CardID.AH / 4); d <= h; ) {
for (var f = d, g = !0, y = 0; y < u; y++) if (o[f - y] < 3) {
d += 1;
g = !1;
break;
}
if (g) {
for (var m = d + 1 - u, b = d, v = 0, w = [], C = 0; C < m; C++) if (o[C] > 1) {
v += 1;
w.push(C);
}
var R = Math.floor(a.CardID.AH / 4);
for (C = b; C < R; C++) if (o[C] > 1) {
v += 1;
w.push(C);
}
if (v > 0) {
var I = new r.proto.pokerface.MsgCardHand();
I.cardHandType = s.CardHandType.TripletPair;
var T = p(t, m, 3);
I.cards = I.cards.concat(T);
T = p(t, w[0], 2);
I.cards = I.cards.concat(T);
n.push(I);
}
d += 1;
}
}
return n;
}, b = function(e, t) {
var n = [];
c(t);
for (var i = Math.floor(e.cards[0] / 4), l = Math.floor(a.CardID.AH / 4), u = i + 1; u < l; u++) if (o[u] > 2) {
var d = new r.proto.pokerface.MsgCardHand();
d.cardHandType = s.CardHandType.Triplet;
var h = p(t, u, 3);
d.cards = h;
n.push(d);
}
return n;
}, v = function(e, t) {
var n = [];
c(t);
for (var i = e.cards.length, l = Math.floor(e.cards[0] / 4), u = Math.floor(i / 3), d = l + 1, h = Math.floor(a.CardID.AH / 4); d <= h; ) {
for (var p = d, g = !0, y = 0; y < u; y++) if (o[p - y] < 3) {
d += 1;
g = !1;
break;
}
if (g) {
var m = new r.proto.pokerface.MsgCardHand();
m.cardHandType = s.CardHandType.Triplet2X;
var b = f(t, p - u + 1, p, 3);
m.cards = b;
n.push(m);
d += 1;
}
}
return n;
}, w = function(e, t) {
var n = [];
c(t);
for (var i = e.cards.length, l = Math.floor(e.cards[0] / 4), u = Math.floor(i / 2), d = l + 1, h = Math.floor(a.CardID.AH / 4); d <= h; ) {
for (var p = d, g = !0, y = 0; y < u; y++) if (o[p - y] < 2) {
d += 1;
g = !1;
break;
}
if (g) {
var m = new r.proto.pokerface.MsgCardHand();
m.cardHandType = s.CardHandType.Pair2X;
var b = f(t, p - u + 1, p, 2);
m.cards = b;
n.push(m);
d += 1;
}
}
return n;
}, C = function(e, t) {
var n = [];
c(t);
for (var i = Math.floor(e.cards[0] / 4), l = Math.floor(a.CardID.AH / 4), u = i + 1; u < l; u++) if (o[u] > 1) {
var d = new r.proto.pokerface.MsgCardHand();
d.cardHandType = s.CardHandType.Pair;
var h = p(t, u, 2);
d.cards = h;
n.push(d);
}
return n;
}, R = function(e, t) {
var n = [];
c(t);
var i = Math.floor(e.cards[0] / 4);
if (0 === i) return n;
for (var l = Math.floor(a.CardID.AH / 4), u = i + 1; u <= l; ) {
if (o[u] > 0) {
(h = new r.proto.pokerface.MsgCardHand()).cardHandType = s.CardHandType.Single;
var d = p(t, u, 1);
h.cards = d;
n.push(h);
}
u += 1;
}
if (o[0] > 0) {
var h;
(h = new r.proto.pokerface.MsgCardHand()).cardHandType = s.CardHandType.Single;
d = p(t, 0, 1);
h.cards = d;
n.push(h);
}
return n;
}, I = function(e, t) {
var n = [];
c(t);
for (var i = e.cards.length, l = Math.floor(e.cards[0] / 4) + 1, u = Math.floor(a.CardID.AH / 4); l < u; ) {
for (var d = !0, h = 0; h < i; h++) if (o[l - h] < 1) {
d = !1;
break;
}
if (d) {
var p = new r.proto.pokerface.MsgCardHand();
p.cardHandType = s.CardHandType.Flush;
var g = f(t, l - i + 1, l, 1);
p.cards = g;
n.push(p);
}
l++;
}
return n;
}, T = function(e, t) {
var n = [];
c(t);
for (var i = Math.floor(e.cards[0] / 4), l = Math.floor(a.CardID.AH / 4), u = i; u < l; u++) if (o[u + 1] > 3) {
(h = new r.proto.pokerface.MsgCardHand()).cardHandType = s.CardHandType.Bomb;
var d = p(t, u, 4);
h.cards = d;
n.push(h);
}
if (o[l] > 2) {
var h;
(h = new r.proto.pokerface.MsgCardHand()).cardHandType = s.CardHandType.Bomb;
d = p(t, l, 4);
h.cards = d;
n.push(h);
}
return n;
}, _ = function(e) {
var t = [];
c(e);
for (var n = Math.floor(a.CardID.AH / 4), i = 0; i < n; i++) if (o[i + 1] > 0) {
(u = new r.proto.pokerface.MsgCardHand()).cardHandType = s.CardHandType.Single;
var l = p(e, i, 1);
u.cards = l;
t.push(u);
}
if (o[0] > 0) {
var u;
(u = new r.proto.pokerface.MsgCardHand()).cardHandType = s.CardHandType.Single;
l = p(e, 0, 1);
u.cards = l;
t.push(u);
}
return t;
};
e.searchLongestDiscardCardHand = function(e, t) {
e.sort(function(e, t) {
return e - t;
});
var o = _(e);
if (t >= 0) for (var n = 0, i = o; n < i.length; n++) for (var r = i[n], s = 0; s < r.cards.length - 1; s++) if (r.cards[s] === a.CardID.R3H) return [ r ];
return o;
};
e.findAllGreatThanCardHands = function(e, t, o) {
var n, i = e.cardHandType, a = !1, l = [];
if (o >= 0) {
var u = new r.proto.pokerface.MsgCardHand();
u.cardHandType = s.CardHandType.Single;
u.cards = p(t, 0, 1);
l.push(u);
return l;
}
i === s.CardHandType.Bomb && (a = !0);
l = (0, ((n = {})[s.CardHandType.Bomb] = function(e, t) {
return T(e, t);
}, n[s.CardHandType.Flush] = function(e, t) {
return I(e, t);
}, n[s.CardHandType.Single] = function(e, t) {
return R(e, t);
}, n[s.CardHandType.Pair] = function(e, t) {
return C(e, t);
}, n[s.CardHandType.Pair2X] = function(e, t) {
return w(e, t);
}, n[s.CardHandType.Triplet] = function(e, t) {
return b(e, t);
}, n[s.CardHandType.Triplet2X] = function(e, t) {
return v(e, t);
}, n[s.CardHandType.Triplet2X2Pair] = function(e, t) {
return y(e, t);
}, n[s.CardHandType.TripletPair] = function(e, t) {
return m(e, t);
}, n)[i])(e, t);
if (!a) {
var c = g(t);
l = l.concat(c);
}
return l;
};
})(o.AgariIndexA || (o.AgariIndexA = {}));
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"./proto/protoGameA": "protoGameA"
} ],
AgariIndex: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c6b75iQLnRCcoex61cw2C8C", "AgariIndex");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../lobby/lcore/LCoreExports"), i = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "21", "22", "23", "24", "25", "26", "27", "28", "29", "11", "12", "13", "14", "15", "16", "17", "18", "19", "31", "32", "33", "34", "43", "42", "41", "51", "52", "53", "54", "55", "56", "57", "58" ];
(function(e) {
e.tileId2ArtId = function(e) {
var t = i[e];
if (null == t) {
n.Logger.debug("no art id for tile:" + e);
throw Error("no art id for tile:" + e);
}
return t;
};
})(o.AgariIndex || (o.AgariIndex = {}));
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports"
} ],
AnimationMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "eef8cRS6ZhLAKHDA6JWnXau", "AnimationMgr");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("./Logger"), a = function() {
function e(e) {
this.map = {};
this.loader = e;
}
e.prototype.coPlay = function(e, t, o) {
return n(this, void 0, Promise, function() {
var n = this;
return i(this, function(i) {
r.Logger.debug("Animation.coPlay prefabName:", e);
return [ 2, new Promise(function(i, a) {
var s = o;
void 0 !== s && null !== s || (s = {});
s.onFinished = function(t) {
null !== t && r.Logger.debug("Animation.coPlay error:", t);
r.Logger.debug("Animation.coPlay completed, prefabName:", e);
i();
};
n.play(e, t, s);
}) ];
});
});
};
e.prototype.play = function(e, t, o) {
var n = void 0 !== o && void 0 !== o.onFinished && null !== o.onFinished, i = void 0 !== o && void 0 !== o.onCreate && null !== o.onCreate, a = function(e) {
n && o.onFinished(e);
};
this.getAnimationHolder(e, function(s, l) {
if (null !== s) {
r.Logger.debug("AnimationMgr.play failed:", s);
a(s);
} else {
var u = l.node, c = u.getComponent(cc.Animation);
if (null === c) {
a(new Error(e + " has no animation component"));
return;
}
u.removeFromParent();
t.addChild(u);
t.active = !0;
u.active = !0;
i && o.onCreate(u);
c.off(cc.Animation.EventType.FINISHED);
c.stop();
c.play();
n && c.on(cc.Animation.EventType.FINISHED, function() {
r.Logger.debug("AnimationMgr.play FINISHED:", e);
a(null);
});
}
});
};
e.prototype.getAnimationHolder = function(e, t) {
var o = this, n = this.map[e];
void 0 !== n && n.node.isValid ? t(null, n) : this.loader.loadPrefab(e, function(n, i) {
if (null !== n) t(n, null); else {
var r = {};
r.node = cc.instantiate(i);
r.prefab = i;
r.prefabName = e;
o.map[e] = r;
t(null, r);
}
});
};
return e;
}();
o.AnimationMgr = a;
cc._RF.pop();
}, {
"./Logger": "Logger"
} ],
ApplyRecordView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3dbdfsI9iVLuppxDhKOTPAc", "ApplyRecordView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lcore/LCoreExports"), a = e("../../proto/protoLobby"), s = e("./ClubRequestError"), l = cc._decorator.ccclass, u = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.records = [];
return t;
}
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "applyRecord").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.recordList = this.view.getChild("recordList").asList;
this.recordList.itemRenderer = function(t, o) {
e.renderPhraseListItem(t, o);
};
this.recordList.setVirtual();
this.loadMyRecord();
};
t.prototype.renderPhraseListItem = function(e, t) {
var o = this.records[e], n = t.asCom.getChild("time"), i = t.asCom.getChild("result");
if (void 0 !== o) {
var r = o.generatedTime, a = new Date(1e3 * r), s = a.getMonth() < 9 ? "0" + (a.getMonth() + 1) : "" + (a.getMonth() + 1), l = a.getDay() < 10 ? "0" + a.getDay() : "" + a.getDay(), u = a.getHours() < 10 ? "0" + a.getHours() : "" + a.getHours(), c = a.getMinutes() < 10 ? "0" + a.getMinutes() : "" + a.getMinutes();
n.text = a.getFullYear() + "/" + s + "/" + l + "   " + u + ":" + c;
var d = "", h = new cc.Color().fromHEX("000000");
switch (o.approvalResult) {
case 0:
d = "提交申请";
h = new cc.Color().fromHEX("b3522e");
break;

case 1:
d = "已同意";
h = new cc.Color().fromHEX("b3522e");
break;

case 2:
d = "已拒绝";
h = new cc.Color().fromHEX("4b8a0e");
}
i.text = d;
i.asTextField.color = h;
}
};
t.prototype.loadMyRecord = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.loadMyApplyEvent + "?&tk=" + t;
this.clubRequest(o, function(t, o) {
var n = t.response;
if (null !== n) {
var i = a.proto.club.MsgClubReply.decode(n);
if (i.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
var r = a.proto.club.MsgClubLoadEventsReply.decode(i.content);
null !== r.events && e.updateList(r.events);
} else if (i.replyCode === a.proto.club.ClubReplyCode.RCError) {
var l = a.proto.club.MsgCubOperGenericReply.decode(i.content);
s.ClubRequestError.showErrMsg(l.errorCode);
}
}
});
};
t.prototype.updateList = function(e) {
this.records = e;
this.recordList.numItems = this.records.length;
};
t.prototype.clubRequest = function(e, t) {
if (null === e) return null;
r.Logger.debug("clubRequest url = ", e);
r.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t = i([ l ], t);
}(cc.Component);
o.ApplyRecordView = u;
cc._RF.pop();
}, {
"../../lcore/LCoreExports": "LCoreExports",
"../../proto/protoLobby": "protoLobby",
"./ClubRequestError": "ClubRequestError"
} ],
AppointManagerView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "40112lwFgNNZrg22H/Ww1E4", "AppointManagerView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../../lcore/LCoreExports"), a = e("../../../proto/protoLobby"), s = e("../ClubRequestError"), l = cc._decorator.ccclass, u = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.show = function(e) {
this.clubInfo = e;
this.win.show();
this.loadClubMgrs();
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "appointManager").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.managerList = this.view.getChild("managerList").asList;
this.memberList = this.view.getChild("memberList").asList;
this.managerList.itemRenderer = function(t, o) {
e.renderManagerListItem(t, o);
};
this.memberList.itemRenderer = function(t, o) {
e.renderMemberListItem(t, o);
};
this.memberList.setVirtual();
};
t.prototype.renderMemberListItem = function(e, t) {
var o = this.membersWithoutManager[e];
t.asCom.getController("item").selectedIndex = 2;
var n = t.asCom.getChild("name").asTextField, i = t.asCom.getChild("id").asTextField;
n.text = "" === o.displayInfo.nick ? "" + o.userID : o.displayInfo.nick;
i.text = "ID : " + o.userID;
var a = t.asCom.getChild("loader").asLoader;
r.CommonFunction.setHead(a, o.displayInfo.headIconURL);
var s = t.asCom.getChild("up2ManagerBtn").asButton;
s.offClick(this.up2ManagerBtn, this);
s.onClick(this.up2ManagerBtn, this);
s.data = o;
};
t.prototype.up2ManagerBtn = function(e) {
var t = e.initiator.data, o = a.proto.club.ClubRoleType.CRoleTypeMgr;
this.changeManagerRequest(t, o);
};
t.prototype.onRemoveBtnClick = function(e) {
var t = e.initiator.data;
this.changeManagerRequest(t, a.proto.club.ClubRoleType.CRoleTypeMember);
};
t.prototype.onAddBtnClick = function() {
this.view.getController("view").selectedIndex = 1;
this.loadMember();
};
t.prototype.loadClubMgrs = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.loadClubMgrs + "?&tk=" + t + "&clubID=" + this.clubInfo.baseInfo.clubID;
this.clubRequest(o, function(t, o) {
var n = t.response, i = a.proto.club.MsgClubReply.decode(n);
if (i.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
var r = a.proto.club.MsgClubLoadMembersReply.decode(i.content).members;
e.updateManagerList(r);
}
});
};
t.prototype.updateManagerList = function(e) {
this.managers = e;
this.managerList.numItems = 2;
};
t.prototype.updateMemberList = function(e) {
this.membersWithoutManager = [];
for (var t = this.clubInfo.managers, o = 0, n = e; o < n.length; o++) {
var i = n[o];
if (i.userID !== this.clubInfo.creatorUserID) {
for (var r = !1, a = 0, s = t; a < s.length; a++) {
var l = s[a];
i.userID === l && (r = !0);
}
!1 === r && this.membersWithoutManager.push(i);
}
}
this.memberList.numItems = this.membersWithoutManager.length;
};
t.prototype.renderManagerListItem = function(e, t) {
var o = this.managers[e], n = t.asCom.getController("item");
if (null === o || void 0 === o) {
n.selectedIndex = 1;
var i = t.asCom.getChild("add").asButton;
i.offClick(this.onAddBtnClick, this);
i.onClick(this.onAddBtnClick, this);
} else {
n.selectedIndex = 0;
var a = t.asCom.getChild("name").asTextField, s = t.asCom.getChild("id").asTextField;
a.text = "" === o.displayInfo.nick ? "" + o.userID : o.displayInfo.nick;
s.text = "ID : " + o.userID;
var l = t.asCom.getChild("loader").asLoader;
r.CommonFunction.setHead(l, o.displayInfo.headIconURL);
var u = t.asCom.getChild("removeBtn").asButton;
u.offClick(this.onRemoveBtnClick, this);
u.onClick(this.onRemoveBtnClick, this);
u.data = o;
}
};
t.prototype.loadMember = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.loadClubMembers + "?&tk=" + t + "&clubID=" + this.clubInfo.baseInfo.clubID + " ";
this.clubRequest(o, function(t, o) {
var n = t.response, i = a.proto.club.MsgClubReply.decode(n);
if (i.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
var r = a.proto.club.MsgClubLoadMembersReply.decode(i.content).members;
e.updateMemberList(r);
}
});
};
t.prototype.removeManager = function(e) {
var t = this.managers.indexOf(e);
this.managers.splice(t, 1);
this.managerList.numItems = 2;
};
t.prototype.changeManagerRequest = function(e, t) {
var o = this, n = r.DataStore.getString(r.KeyConstants.TOKEN, ""), i = "" + ("" + r.LEnv.rootURL + r.LEnv.changeRole + "?&") + ("tk=" + n + "&clubID=" + this.clubInfo.baseInfo.clubID + "&memberID=" + e.userID + "&role=" + t);
this.clubRequest(i, function(t, n) {
var i = t.response, r = a.proto.club.MsgClubReply.decode(i);
if (r.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
var l = a.proto.club.MsgClubMemberInfo.decode(r.content);
o.changeManager(l, e);
} else if (r.replyCode === a.proto.club.ClubReplyCode.RCError) {
var u = a.proto.club.MsgCubOperGenericReply.decode(r.content);
u.errorCode !== a.proto.club.ClubOperError.CERR_OK && s.ClubRequestError.showErrMsg(u.errorCode);
}
});
};
t.prototype.changeManager = function(e, t) {
this.saveMember(e, t);
if (t.role === a.proto.club.ClubRoleType.CRoleTypeMgr) {
this.clubInfo.managers.push(e.userID);
this.view.getController("view").selectedIndex = 0;
this.loadClubMgrs();
} else {
var o = this.clubInfo.managers.indexOf(e.userID);
this.clubInfo.managers.splice(o, 1);
this.removeManager(e);
}
};
t.prototype.saveMember = function(e, t) {
t.allowCreateRoom = e.allowCreateRoom;
t.displayInfo = e.displayInfo;
t.online = e.online;
t.role = e.role;
t.userID = e.userID;
};
t.prototype.clubRequest = function(e, t) {
if (null === e) return null;
r.Logger.debug("clubRequest url = ", e);
r.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t = i([ l ], t);
}(cc.Component);
o.AppointManagerView = u;
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports",
"../../../proto/protoLobby": "protoLobby",
"../ClubRequestError": "ClubRequestError"
} ],
Boot: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "04880QShcBFMa5gCVdTBcln", "Boot");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator.ccclass, a = e("./modules/lobby/LobbyModule"), s = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {
cc.game.setFrameRate(29);
cc.debug.setDisplayStats(!0);
cc.debug._resetDebugSetting(cc.debug.DebugMode.INFO);
fgui.addLoadHandler();
fgui.GRoot.create();
this.addComponent(a.LobbyModule);
};
return t = i([ r ], t);
}(cc.Component);
o.Boot = s;
cc._RF.pop();
}, {
"./modules/lobby/LobbyModule": "LobbyModule"
} ],
1: [ function(e, t, o) {
(function(e) {
function t(e, t) {
for (var o = 0, n = e.length - 1; n >= 0; n--) {
var i = e[n];
if ("." === i) e.splice(n, 1); else if (".." === i) {
e.splice(n, 1);
o++;
} else if (o) {
e.splice(n, 1);
o--;
}
}
if (t) for (;o--; o) e.unshift("..");
return e;
}
o.resolve = function() {
for (var o = "", n = !1, r = arguments.length - 1; r >= -1 && !n; r--) {
var a = r >= 0 ? arguments[r] : e.cwd();
if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
if (a) {
o = a + "/" + o;
n = "/" === a.charAt(0);
}
}
o = t(i(o.split("/"), function(e) {
return !!e;
}), !n).join("/");
return (n ? "/" : "") + o || ".";
};
o.normalize = function(e) {
var n = o.isAbsolute(e), a = "/" === r(e, -1);
(e = t(i(e.split("/"), function(e) {
return !!e;
}), !n).join("/")) || n || (e = ".");
e && a && (e += "/");
return (n ? "/" : "") + e;
};
o.isAbsolute = function(e) {
return "/" === e.charAt(0);
};
o.join = function() {
var e = Array.prototype.slice.call(arguments, 0);
return o.normalize(i(e, function(e, t) {
if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
return e;
}).join("/"));
};
o.relative = function(e, t) {
e = o.resolve(e).substr(1);
t = o.resolve(t).substr(1);
function n(e) {
for (var t = 0; t < e.length && "" === e[t]; t++) ;
for (var o = e.length - 1; o >= 0 && "" === e[o]; o--) ;
return t > o ? [] : e.slice(t, o - t + 1);
}
for (var i = n(e.split("/")), r = n(t.split("/")), a = Math.min(i.length, r.length), s = a, l = 0; l < a; l++) if (i[l] !== r[l]) {
s = l;
break;
}
var u = [];
for (l = s; l < i.length; l++) u.push("..");
return (u = u.concat(r.slice(s))).join("/");
};
o.sep = "/";
o.delimiter = ":";
o.dirname = function(e) {
"string" != typeof e && (e += "");
if (0 === e.length) return ".";
for (var t = e.charCodeAt(0), o = 47 === t, n = -1, i = !0, r = e.length - 1; r >= 1; --r) if (47 === (t = e.charCodeAt(r))) {
if (!i) {
n = r;
break;
}
} else i = !1;
return -1 === n ? o ? "/" : "." : o && 1 === n ? "/" : e.slice(0, n);
};
function n(e) {
"string" != typeof e && (e += "");
var t, o = 0, n = -1, i = !0;
for (t = e.length - 1; t >= 0; --t) if (47 === e.charCodeAt(t)) {
if (!i) {
o = t + 1;
break;
}
} else if (-1 === n) {
i = !1;
n = t + 1;
}
return -1 === n ? "" : e.slice(o, n);
}
o.basename = function(e, t) {
var o = n(e);
t && o.substr(-1 * t.length) === t && (o = o.substr(0, o.length - t.length));
return o;
};
o.extname = function(e) {
"string" != typeof e && (e += "");
for (var t = -1, o = 0, n = -1, i = !0, r = 0, a = e.length - 1; a >= 0; --a) {
var s = e.charCodeAt(a);
if (47 !== s) {
if (-1 === n) {
i = !1;
n = a + 1;
}
46 === s ? -1 === t ? t = a : 1 !== r && (r = 1) : -1 !== t && (r = -1);
} else if (!i) {
o = a + 1;
break;
}
}
return -1 === t || -1 === n || 0 === r || 1 === r && t === n - 1 && t === o + 1 ? "" : e.slice(t, n);
};
function i(e, t) {
if (e.filter) return e.filter(t);
for (var o = [], n = 0; n < e.length; n++) t(e[n], n, e) && o.push(e[n]);
return o;
}
var r = "b" === "ab".substr(-1) ? function(e, t, o) {
return e.substr(t, o);
} : function(e, t, o) {
t < 0 && (t = e.length + t);
return e.substr(t, o);
};
}).call(this, e("_process"));
}, {
_process: 2
} ],
2: [ function(e, t, o) {
var n, i, r = t.exports = {};
function a() {
throw new Error("setTimeout has not been defined");
}
function s() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
n = "function" == typeof setTimeout ? setTimeout : a;
} catch (e) {
n = a;
}
try {
i = "function" == typeof clearTimeout ? clearTimeout : s;
} catch (e) {
i = s;
}
})();
function l(e) {
if (n === setTimeout) return setTimeout(e, 0);
if ((n === a || !n) && setTimeout) {
n = setTimeout;
return setTimeout(e, 0);
}
try {
return n(e, 0);
} catch (t) {
try {
return n.call(null, e, 0);
} catch (t) {
return n.call(this, e, 0);
}
}
}
function u(e) {
if (i === clearTimeout) return clearTimeout(e);
if ((i === s || !i) && clearTimeout) {
i = clearTimeout;
return clearTimeout(e);
}
try {
return i(e);
} catch (t) {
try {
return i.call(null, e);
} catch (t) {
return i.call(this, e);
}
}
}
var c, d = [], h = !1, p = -1;
function f() {
if (h && c) {
h = !1;
c.length ? d = c.concat(d) : p = -1;
d.length && g();
}
}
function g() {
if (!h) {
var e = l(f);
h = !0;
for (var t = d.length; t; ) {
c = d;
d = [];
for (;++p < t; ) c && c[p].run();
p = -1;
t = d.length;
}
c = null;
h = !1;
u(e);
}
}
r.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
d.push(new y(e, t));
1 !== d.length || h || l(g);
};
function y(e, t) {
this.fun = e;
this.array = t;
}
y.prototype.run = function() {
this.fun.apply(null, this.array);
};
r.title = "browser";
r.browser = !0;
r.env = {};
r.argv = [];
r.version = "";
r.versions = {};
function m() {}
r.on = m;
r.addListener = m;
r.once = m;
r.off = m;
r.removeListener = m;
r.removeAllListeners = m;
r.emit = m;
r.prependListener = m;
r.prependOnceListener = m;
r.listeners = function(e) {
return [];
};
r.binding = function(e) {
throw new Error("process.binding is not supported");
};
r.cwd = function() {
return "/";
};
r.chdir = function(e) {
throw new Error("process.chdir is not supported");
};
r.umask = function() {
return 0;
};
}, {} ],
ChatExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b2e329yE0hJCKY6RZaqp8EW", "ChatExports");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
})(e("./ChatView"));
cc._RF.pop();
}, {
"./ChatView": "ChatView"
} ],
ChatView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "839b2xJ9ZhMLLRpCIPQVsuG", "ChatView");
var n, i = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lcore/LCoreExports"), a = e("../../proto/protoLobby"), s = e("../../protobufjs/bytebuffer"), l = ((n = {})[1] = "不好意思 刚才有点小事情", 
n[2] = "冲过围墙就是银行", n[3] = "大姑爷爷 小姨奶奶 大家好啊", n[4] = "乖乖 这牌不丑呢", n[5] = "宽的很尼 过能松额把我吃两口啊", 
n[6] = "没得命了 打了错喽", n[7] = "朋友 你高手啊", n[8] = "朋友 你个能弄额扫点子啊", n[9] = "上碰下自摸 一点不瞎掐", 
n[10] = "头一坑 就往前冲", n[11] = "瞎打啊 你把我心都打凉啦", n[12] = "小时候胖不为胖 长大胖才叫胖呢", n[13] = "辛辛苦苦几十年 一把回到解放前啊", 
n[14] = "早打是个碰 安大是个冲", n[15] = "做大梦 打什么来什么", n), u = function() {
return function(e) {
this.fromUserID = e.from;
this.toUserID = e.to;
this.id = e.id;
this.dataType = e.dataType;
this.scope = e.scope;
this.data = e.data;
};
}();
o.ChatData = u;
var c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.view = null;
return t;
}
t.prototype.show = function(e, t, o) {
this.msgCallBack = t;
if (void 0 === this.view || null === this.view) {
e.fguiAddPackage("lobby/fui_chat/lobby_chat");
this.view = fgui.UIPackage.createObject("lobby_chat", "chat").asCom;
this.initView();
this.testLists();
this.userID = r.DataStore.getString(r.KeyConstants.USER_ID, "");
this.lobbyModule = this.node.getParent().getComponent("LobbyModule");
null !== this.lobbyModule && (this.onMessageFunc = this.lobbyModule.eventTarget.on("" + a.proto.lobby.MessageCode.OPChat, this.onMessage, this));
}
fgui.GRoot.inst.showPopup(this.view);
var n = o - 500;
this.view.setPosition(n, 0);
};
t.prototype.onMessage = function(e) {
this.addMsg(e);
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
};
t.prototype.onDestroy = function() {
null !== this.lobbyModule && this.lobbyModule.eventTarget.off("" + a.proto.lobby.MessageCode.OPChat, this.onMessageFunc);
this.view.dispose();
};
t.prototype.initView = function() {
var e = this;
this.phraseBtn = this.view.getChild("phraseBtn").asButton;
this.expressionBtn = this.view.getChild("expressionBtn").asButton;
this.historyBtn = this.view.getChild("historyBtn").asButton;
this.phraseBtn.onClick(this.onPhraseBtnClick, this);
this.expressionBtn.onClick(this.onExpressionBtnClick, this);
this.historyBtn.onClick(this.onHistoryBtnClick, this);
this.phraseList = this.view.getChild("phraseList").asList;
this.phraseList.on(fgui.Event.CLICK_ITEM, this.onPhraseListItemClick, this);
this.phraseList.itemRenderer = function(t, o) {
e.renderPhraseListItem(t, o);
};
this.phraseList.setVirtual();
this.expressionList = this.view.getChild("expressionList").asList;
this.historyList = this.view.getChild("historyList").asList;
this.historyList.itemRenderer = function(t, o) {
e.renderHistoryListItem(t, o);
};
this.historyList.itemProvider = function(t) {
return e.getHistoryListItemResource(t);
};
this.historyList.setVirtual();
this.chatText = this.view.getChild("chatText").asTextInput;
this.view.getChild("sendBtn").onClick(this.onSendBtnClick, this);
};
t.prototype.onPhraseBtnClick = function() {
this.changeList(0);
this.phraseBtn.selected = !0;
};
t.prototype.onExpressionBtnClick = function() {
this.changeList(1);
this.expressionBtn.selected = !0;
};
t.prototype.onHistoryBtnClick = function() {
this.changeList(2);
this.historyBtn.selected = !0;
};
t.prototype.onSendBtnClick = function() {
this.sendMsg(this.chatText.text, a.proto.lobby.ChatDataType.Text);
this.chatText.text = "";
};
t.prototype.onPhraseListItemClick = function(e) {
this.changeList(2);
this.historyBtn.selected = !0;
this.sendMsg(e.name, a.proto.lobby.ChatDataType.Buildin);
};
t.prototype.getHistoryListItemResource = function(e) {
return this.msgList[e + 1].fromUserID === this.userID ? "ui://lobby_chat/chat_history_me_item" : "ui://lobby_chat/chat_history_other_item";
};
t.prototype.changeList = function(e) {
this.phraseBtn.selected = !1;
this.expressionBtn.selected = !1;
this.historyBtn.selected = !1;
this.phraseList.visible = !1;
this.expressionList.visible = !1;
this.historyList.visible = !1;
0 === e ? this.phraseList.visible = !0 : 1 === e ? this.expressionList.visible = !0 : 2 === e && (this.historyList.visible = !0);
};
t.prototype.sendMsg = function(e, t) {
var o = r.DataStore.getString(r.KeyConstants.TOKEN, ""), n = r.DataStore.getString(r.KeyConstants.NICK_NAME, ""), i = "" + r.LEnv.rootURL + r.LEnv.chat + "?tk=" + o, l = {
msg: e,
url: "",
nickname: n,
sex: "",
index: 0
}, u = JSON.stringify(l), c = new a.proto.lobby.MsgChat();
c.from = this.userID;
c.scope = a.proto.lobby.ChatScopeType.InRoom;
c.dataType = t;
c.data = s.fromUTF8(u);
var d = a.proto.lobby.MsgChat.encode(c).toArrayBuffer();
r.HTTP.hPost(this.eventTarget, i, function(e, t) {
var o = null;
null !== t ? o = "创建房间错误，错误码:" + t : null === (o = r.HTTP.hError(e)) && r.Logger.debug("send msg ok");
if (null !== o) {
r.Logger.debug("NewRoomView.createRoom failed:", o);
r.Dialog.showDialog(o);
}
}, "arraybuffer", d);
};
t.prototype.testLists = function() {
this.updatePhraseList();
this.updateExpressionList();
this.updateHistoryList();
};
t.prototype.updateExpressionList = function() {
for (var e = 0; e < 16; e++) {
var t = fgui.UIPackage.createObject("lobby_chat", "chat_expression_item").asCom;
this.expressionList.addChild(t);
}
};
t.prototype.updatePhraseList = function() {
this.phraseList.numItems = Object.keys(l).length;
};
t.prototype.updateHistoryList = function() {
this.msgList = {};
};
t.prototype.renderPhraseListItem = function(e, t) {
var o = t.asCom, n = l[e + 1];
o.getChild("n3").text = n;
t.name = (e + 1).toString();
};
t.prototype.renderHistoryListItem = function(e, t) {
var o = this.msgList[e + 1];
t.asCom.getChild("text").text = o.msg;
};
t.prototype.addMsg = function(e) {
var t = a.proto.lobby.MsgChat.decode(e), o = new u(t), n = t.data.toUTF8(), i = JSON.parse(n);
o.msg = i.msg;
if (t.dataType === a.proto.lobby.ChatDataType.Buildin) {
o.msg = l[+i.msg];
o.buildinId = i.msg;
}
var r = Object.keys(this.msgList).length + 1;
this.msgList[r] = o;
this.historyList.numItems = r;
this.historyList.scrollPane.scrollBottom();
void 0 !== this.msgCallBack && null !== this.msgCallBack && this.msgCallBack(o);
};
return t;
}(cc.Component);
o.ChatView = c;
cc._RF.pop();
}, {
"../../lcore/LCoreExports": "LCoreExports",
"../../proto/protoLobby": "protoLobby",
"../../protobufjs/bytebuffer": "bytebuffer"
} ],
ClubModuleInterface: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c8a42bi3VtPNaXStoHW+IUz", "ClubModuleInterface");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
e[e.ALL = 0] = "ALL";
e[e.DFMJ = 1] = "DFMJ";
e[e.ZJMJ = 21] = "ZJMJ";
})(o.RoomType || (o.RoomType = {}));
cc._RF.pop();
}, {} ],
ClubRequestError: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "11255IrdRZGfbTYhfPgyV45", "ClubRequestError");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../lcore/LCoreExports"), i = e("../../proto/protoLobby");
(function(e) {
e.showErrMsg = function(e) {
var t, o = i.proto.club, r = ((t = {})[o.ClubOperError.CERR_OK] = "没有错误", t[o.ClubOperError.CERR_Exceed_Max_Club_Count_Limit] = "超过最大限制", 
t[o.ClubOperError.CERR_No_Valid_Club_Number] = "无法申请到有效的俱乐部编号", t[o.ClubOperError.CERR_Database_IO] = "编码解码错误", 
t[o.ClubOperError.CERR_Encode_Decode] = "无效输入参数", t[o.ClubOperError.CERR_Invalid_Input_Parameter] = "无效输入参数", 
t[o.ClubOperError.CERR_Only_Creator_And_Mgr_Can_KickOut] = "只有创建者才可以踢人", t[o.ClubOperError.CERR_You_Already_In_Club] = "你已经在此俱乐部", 
t[o.ClubOperError.CERR_You_Are_In_Club_Block_List] = "你已经在此俱乐部黑名单，不能申请加入", t[o.ClubOperError.CERR_You_Already_Applicate] = "你已经申请过，请耐心等候部长批准", 
t[o.ClubOperError.CERR_Invitee_Already_In_Club] = "你已经在此俱乐部", t[o.ClubOperError.CERR_Invitee_Are_In_Club_Block_List] = "你已经在此俱乐部黑名单，不能申请加入", 
t[o.ClubOperError.CERR_Invitee_Already_Applicate] = "你已经申请过，请耐心等候部长批准", t[o.ClubOperError.CERR_Club_Not_Exist] = "俱乐部不存在", 
t[o.ClubOperError.CERR_Only_Creator_Can_Invite] = "只有部长可以邀请别人", t[o.ClubOperError.CERR_Only_Creator_And_Mgr_Can_Approve] = "只有部长可以批准", 
t[o.ClubOperError.CERR_No_Applicant] = "没有对应的申请者", t[o.ClubOperError.CERR_Applicant_Already_In_Club] = "申请者已经是俱乐部成员", 
t[o.ClubOperError.CERR_Applicant_In_Club_Block_List] = "申请者在俱乐部的黑名单中", t[o.ClubOperError.CERR_Token_Invalid] = "token无效", 
t[o.ClubOperError.CERR_Club_Name_Too_Long] = "俱乐部名字太长", t[o.ClubOperError.CERR_Club_Name_Exist] = "同名的俱乐部已经存在", 
t[o.ClubOperError.CERR_Club_Only_Owner_Can_Disband] = "只有部长可以解散俱乐部", t[o.ClubOperError.CERR_Owner_Can_not_quit] = "部长不能退出自己的俱乐部，只能解散", 
t[o.ClubOperError.CERR_User_Not_In_Club] = "玩家不在俱乐部中", t[o.ClubOperError.CERR_Club_Only_Owner_And_Mgr_Can_Set] = "只有部长可以设置俱乐部", 
t[o.ClubOperError.CERR_Club_Forbit_Join] = "俱乐部禁止加入", t[o.ClubOperError.CERR_Input_Text_Too_Long] = "输入文字过长", 
t[o.ClubOperError.CERR_Club_Has_Room_In_PlayingState] = "俱乐部还有正在游戏中的房间，不能解散", t)[e];
void 0 === r && (r = "未知错误 ,错误码 = " + e);
n.Dialog.showDialog(r, function() {}, function() {});
};
})(o.ClubRequestError || (o.ClubRequestError = {}));
cc._RF.pop();
}, {
"../../lcore/LCoreExports": "LCoreExports",
"../../proto/protoLobby": "protoLobby"
} ],
ClubView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "29346Tm7LJFG6KYpW55HoTL", "ClubView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lcore/LCoreExports"), a = e("../../proto/protoLobby"), s = e("../LobbyError"), l = e("../NewRoomView"), u = e("./ApplyRecordView"), c = e("./appointManager/AppointManagerView"), d = e("./ClubModuleInterface"), h = e("./ClubRequestError"), p = e("./CreateClubView"), f = e("./FilterGameView"), g = e("./JoinClubView"), y = e("./memberManager/MemberManagerView"), m = e("./quicklyCreateRoom/QuicklyCreateRoomView"), b = e("./quicklyCreateRoom/RoomRuleString"), v = e("./roomManage/RoomManageView"), w = e("./settingPopup/SettingPopupView"), C = cc._decorator.ccclass, R = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.ENTER_GAME_EVENT = "enterGameEvent";
t.ON_CLUB_VIEW_SHOW = "onClubViewShow";
t.clubs = [];
t.allRoomInfos = [];
t.filterRoomInfos = [];
t.selectRoomType = d.RoomType.ALL;
return t;
}
t.prototype.showQuicklyCreateView = function() {
this.showQuickCreateRoomView();
};
t.prototype.selectGame = function(e) {
this.selectRoomType = e;
this.setFilterBtnName();
this.updateClubRoomsList();
};
t.prototype.disbandClub = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.deleteClub + "?&tk=" + t + "&clubID=" + this.selectedClub.baseInfo.clubID;
this.clubRequest(o, function(t, o) {
var n = t.response;
e.reloadCLub(n);
});
};
t.prototype.modifyClubName = function(e) {
var t = this, o = r.DataStore.getString(r.KeyConstants.TOKEN, ""), n = "" + r.LEnv.rootURL + r.LEnv.renameClub + "?&tk=" + o + "&clubID=" + this.selectedClub.baseInfo.clubID + "&clname=" + e;
this.clubRequest(n, function(e, o) {
var n = e.response, i = a.proto.club.MsgClubReply.decode(n);
if (i.replyCode === a.proto.club.ClubReplyCode.RCError) {
var r = a.proto.club.MsgCubOperGenericReply.decode(i.content);
r.errorCode === a.proto.club.ClubOperError.CERR_OK ? t.loadAllClub() : h.ClubRequestError.showErrMsg(r.errorCode);
}
});
};
t.prototype.quitClub = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.quitClub + "?&tk=" + t + "&clubID=" + this.selectedClub.baseInfo.clubID;
this.clubRequest(o, function(t, o) {
var n = t.response;
e.reloadCLub(n);
});
};
t.prototype.addClub = function(e) {
this.clubs.unshift(e);
this.clubList.numItems = this.clubs.length + 1;
this.clubList.selectedIndex = 0;
this.setContent(e);
};
t.prototype.loadClubRooms = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.loadClubRooms + "?&tk=" + t + "&clubID=" + this.selectedClub.baseInfo.clubID;
this.clubRequest(o, function(t, o) {
var n = t.response;
if (null !== n) {
var i = a.proto.lobby.MsgLoadRoomListRsp.decode(n);
if (i.result === a.proto.lobby.MsgError.ErrSuccess) e.updateClubRooms(i.roomInfos); else {
var l = s.LobbyError.getErrorString(i.result);
r.Dialog.showDialog(l, function() {}, function() {});
}
}
});
};
t.prototype.disBandRoomNotify = function(e) {
var t = r.DataStore.getString(r.KeyConstants.ROOM_INFO_DATA);
if (void 0 !== t && null !== t && "" !== t) try {
if (JSON.parse(t).roomID === e) {
r.DataStore.setItem(r.KeyConstants.ROOM_INFO_DATA, "");
this.getComponent("LobbyModule").eventTarget.emit("checkRoomInfo");
}
} catch (e) {}
};
t.prototype.onDestroy = function() {
if (null !== this.lobbyModule) {
this.lobbyModule.eventTarget.off(this.ON_CLUB_VIEW_SHOW, this.onClubViewShow);
this.lobbyModule.eventTarget.off(this.ENTER_GAME_EVENT, this.hide);
this.lobbyModule.eventTarget.off("" + a.proto.lobby.MessageCode.OPClubNotify, this.refreshClubInfo, this);
}
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
this.getComponent("LobbyModule").loader.fguiAddPackage("lobby/fui_club/lobby_club");
var e = fgui.UIPackage.createObject("lobby_club", "clubView").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.initView = function() {
var e = this;
this.content = this.view.getChild("content").asCom;
this.clubPage = this.content.getChild("clubPage").asCom;
this.noClubPage = this.content.getChild("noClubPage").asCom;
this.view.getChild("diamondText").text = r.DataStore.getString(r.KeyConstants.DIAMOND);
this.initClickListener();
this.clubList = this.view.getChild("clubList").asList;
this.clubList.itemRenderer = function(t, o) {
e.renderClubListItem(t, o);
};
this.clubList.setVirtual();
this.roomList = this.clubPage.getChild("roomList").asList;
this.roomList.itemRenderer = function(t, o) {
e.renderClubRoomListItem(t, o);
};
this.roomList.setVirtual();
this.lobbyModule = this.getComponent("LobbyModule");
if (null !== this.lobbyModule) {
this.lobbyModule.eventTarget.on(this.ON_CLUB_VIEW_SHOW, this.onClubViewShow, this);
this.lobbyModule.eventTarget.on(this.ENTER_GAME_EVENT, this.hide, this);
this.lobbyModule.eventTarget.on("" + a.proto.lobby.MessageCode.OPClubNotify, this.refreshClubInfo, this);
}
this.loadAllClub();
};
t.prototype.onClubViewShow = function() {
if (null !== this.win) {
this.win.show();
this.loadClubRooms();
}
};
t.prototype.initClickListener = function() {
var e = this;
this.view.getChild("backBtn").onClick(this.onCloseClick, this);
this.view.getChild("applyRecordBtn").onClick(function() {
e.addComponent(u.ApplyRecordView);
}, this);
this.view.getChild("buyBtn").onClick(this.onBuyBtnClick, this);
this.view.getChild("copyIdBtn").onClick(this.onCopyIdBtnClick, this);
this.view.getChild("shareBtn").onClick(this.onShareBtnClick, this);
this.view.getChild("appointManagerBtn").onClick(this.onAppointManagerBtnClick, this);
this.view.getChild("memberSettingBtn").onClick(this.onMemberSettingBtnClick, this);
this.view.getChild("managerBtn").onClick(this.onManagerBtnClick, this);
this.noClubPage.asCom.getChild("createClubBtn").onClick(function() {
e.addComponent(p.CreateClubView).bind(e);
}, this);
this.noClubPage.asCom.getChild("joinClubBtn").onClick(function() {
e.addComponent(g.JoinClubView);
}, this);
this.noClubPage.asCom.getChild("copyBtn").onClick(this.onCopyWXBtnClick, this);
this.clubPage.asCom.getChild("allBtn").onClick(this.onAllBtnClick, this);
this.clubPage.asCom.getChild("refreshBtn").onClick(this.onRefreshBtnClick, this);
this.clubPage.asCom.getChild("gameRecordBtn").onClick(this.onGameRecordBtnClick, this);
this.clubPage.asCom.getChild("quicklyCreateRoom").onClick(this.onQuicklyCreateRoomClick, this);
var t = this.clubPage.asCom.getChild("tipsBtn");
t.on(fgui.Event.TOUCH_BEGIN, this.onTipsBtnTouchBegin, this);
t.on(fgui.Event.TOUCH_END, this.onTipsBtnTouchEnd, this);
this.clubPage.asCom.getChild("createRoomBtn").onClick(this.onCreateRoomBtnClick, this);
this.clubPage.asCom.getChild("return2GameBtn").onClick(this.onReturn2GameBtnClick, this);
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.onCopyIdBtnClick = function() {
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
var e = {
data: "" + this.selectedClub.baseInfo.clubNumber,
success: function(e) {
r.Logger.debug("res", e);
}
};
wx.setClipboardData(e);
} else r.Dialog.prompt("运行环境不是微信平台");
};
t.prototype.onShareBtnClick = function() {
cc.sys.platform === cc.sys.WECHAT_GAME ? wx.shareAppMessage({
title: "茶馆 " + this.selectedClub.baseInfo.clubNumber + " 邀请您来打牌.",
imageUrl: "",
query: ""
}) : r.Dialog.prompt("运行环境不是微信平台");
};
t.prototype.onAppointManagerBtnClick = function() {
this.addComponent(c.AppointManagerView).show(this.selectedClub);
};
t.prototype.onBuyBtnClick = function() {};
t.prototype.onAllBtnClick = function() {
var e = this.addComponent(f.FilterGameView), t = this.view.node;
e.show(this, this.selectRoomType, t.x);
};
t.prototype.onRefreshBtnClick = function() {
this.loadClubRooms();
};
t.prototype.onGameRecordBtnClick = function() {};
t.prototype.onQuicklyCreateRoomClick = function() {
if (null !== this.selectedClub.createRoomOptions && "" !== this.selectedClub.createRoomOptions) {
var e = r.DataStore.getString(r.KeyConstants.ROOM_INFO_DATA);
void 0 !== e && null !== e && "" !== e ? r.Dialog.prompt("已经在房间内") : this.quickCreateRoom();
} else r.Dialog.prompt("还未设置一键组局配置");
};
t.prototype.onTipsBtnTouchBegin = function() {
var e = this.selectedClub.createRoomOptions;
if (void 0 !== e && null !== e) {
var t = b.RoomRuleString.getRoomRuleStr(e), o = this.clubPage.asCom.getChild("ruleText"), n = o.asCom.getChild("text"), i = o.asCom.getChild("bg"), r = o.y, a = o.height;
n.text = t;
var s = n.height;
i.height = s;
o.height = s;
var l = r - (s - a);
o.y = l;
o.visible = !0;
}
};
t.prototype.onTipsBtnTouchEnd = function() {
this.clubPage.asCom.getChild("ruleText").visible = !1;
};
t.prototype.onCreateRoomBtnClick = function() {
this.addComponent(l.NewRoomView).showView(r.NewRoomViewPath.Form_Club, this.selectedClub);
};
t.prototype.onRoomItemClick = function(e) {
var t = e.initiator.data;
if (void 0 !== t || null !== t) {
this.addComponent(v.RoomManageView).show(this, t, this.selectedClub.baseInfo.clubID);
}
};
t.prototype.onReturn2GameBtnClick = function() {
var e = r.DataStore.getString(r.KeyConstants.ROOM_INFO_DATA);
if ("" !== e) try {
var t = JSON.parse(e);
this.win.hide();
var o = {
roomID: t.roomID,
roomNumber: t.roomNumber,
config: t.config,
gameServerID: t.gameServerID
};
this.getComponent("LobbyModule").enterGame(o);
} catch (e) {
r.Logger.error("parse config error:", e);
r.DataStore.setItem(r.KeyConstants.ROOM_INFO_DATA, "");
}
};
t.prototype.showQuickCreateRoomView = function() {
this.addComponent(m.QuicklyCreateRoomView).show(this.selectedClub);
};
t.prototype.quickCreateRoom = function() {
var e = this, t = this.selectedClub.createRoomOptions;
r.Logger.debug("ClubView.quickCreateRoom, ruleJson:", t);
var o = r.DataStore.getString(r.KeyConstants.TOKEN, ""), n = "" + r.LEnv.rootURL + r.LEnv.createClubRoom + "?&tk=" + o + "&clubID=" + this.selectedClub.baseInfo.clubID;
r.Logger.trace("createRoom, createRoomURL:", n);
var i = new a.proto.lobby.MsgCreateRoomReq();
i.config = t;
var l = a.proto.lobby.MsgCreateRoomReq.encode(i).toArrayBuffer();
r.HTTP.hPost(this.eventTarget, n, function(t, o) {
var n = null;
if (null !== o) n = "创建房间错误，错误码:" + o; else if (null === (n = r.HTTP.hError(t))) {
var i = t.response, l = a.proto.lobby.MsgCreateRoomRsp.decode(i), u = e.getComponent("LobbyModule");
r.Logger.debug("msgCreateRoomRsp:", l);
if (l.result === a.proto.lobby.MsgError.ErrSuccess) u.enterGame(l.roomInfo); else if (l.result === a.proto.lobby.MsgError.ErrUserInOtherRoom) u.enterGame(l.roomInfo); else {
r.Logger.error("Create room error:, code:", l.result);
var c = s.LobbyError.getErrorString(l.result);
r.Dialog.showDialog(c);
}
}
if (null !== n) {
r.Logger.debug("NewRoomView.createRoom failed:", n);
r.Dialog.showDialog(n, function() {});
}
}, "arraybuffer", l);
};
t.prototype.refreshClubInfo = function(e) {
if (null !== e) {
var t = a.proto.club.MsgClubNotify.decode(e);
t.notifyType === a.proto.club.ClubNotifyType.CNotify_Change_Member_Role && this.loadClub(t.clubID);
}
};
t.prototype.hide = function() {
this.win.hide();
};
t.prototype.onCopyWXBtnClick = function() {};
t.prototype.onManagerBtnClick = function() {
var e = this.addComponent(w.SettingPopupView), t = this.view.node;
e.show(this, this.selectedClub, t.x);
};
t.prototype.onMemberSettingBtnClick = function() {
this.addComponent(y.MemberManagerView).setClubInfo(this.selectedClub);
};
t.prototype.onJoinRoomBtnClick = function(e) {
var t = e.initiator.data, o = this.filterRoomInfos[t];
this.win.hide();
var n = {
roomID: o.roomID,
roomNumber: o.roomNumber,
config: o.config,
gameServerID: o.gameServerID
};
this.getComponent("LobbyModule").enterGame(n);
};
t.prototype.setOperationBtnVisible = function(e) {
var t = this.view.getController("isManager");
t.selectedIndex = !1 === e ? 0 : 1;
};
t.prototype.renderClubRoomListItem = function(e, t) {
var o;
void 0 !== this.filterRoomInfos && (o = this.filterRoomInfos[e]);
var n = t.asCom.getChild("name"), i = t.asCom.getChild("status").asTextField, r = t.asCom.getChild("inviteBtn").asButton, a = t.asCom.getChild("JoinBtn").asButton;
a.offClick(void 0, void 0);
a.onClick(this.onJoinRoomBtnClick, this);
a.data = e;
n.text = this.getGameName(o.config);
var s = o.state;
if (0 === s || 1 === s) {
i.text = "等待中...";
i.color = new cc.Color().fromHEX("#4b8a0e");
} else if (2 === s) {
i.text = "已开局";
i.color = new cc.Color().fromHEX("#b3522e");
r._touchDisabled = !0;
r.getController("gray").selectedIndex = 1;
a._touchDisabled = !0;
a.getController("gray").selectedIndex = 1;
}
if (this.getPlayerNumAcquired(o.config) === o.users.length) {
r._touchDisabled = !0;
r.getController("gray").selectedIndex = 1;
a._touchDisabled = !0;
a.getController("gray").selectedIndex = 1;
}
var l = this.isManager();
t.offClick(void 0, void 0);
if (l) {
t.onClick(this.onRoomItemClick, this);
t.data = o;
}
this.setIcon(o, t);
};
t.prototype.setIcon = function(e, t) {
for (var o, n = this.getPlayerNumAcquired(e.config), i = 1; i < 7; i++) {
t.asCom.getChild("iconFrame" + i).visible = !1;
t.asCom.getChild("loader" + i).visible = !1;
t.asCom.getChild("notPlayer" + i).visible = !1;
}
for (i = 1; i < n + 1; i++) t.asCom.getChild("notPlayer" + i).visible = !0;
for (i = 0; i < e.users.length; i++) {
var a = e.users[i];
t.asCom.getChild("iconFrame" + (i + 1)).visible = !0;
t.asCom.getChild("notPlayer" + (i + 1)).visible = !1;
(o = t.asCom.getChild("loader" + (i + 1)).asLoader).visible = !0;
r.CommonFunction.setHead(o, a.avatarURL);
}
};
t.prototype.getPlayerNumAcquired = function(e) {
return JSON.parse(e).playerNumAcquired;
};
t.prototype.getGameName = function(e) {
var t = "";
switch (JSON.parse(e).roomType) {
case d.RoomType.ZJMJ:
t = "湛江麻将";
break;

case d.RoomType.DFMJ:
t = "大丰麻将";
}
return t;
};
t.prototype.renderClubListItem = function(e, t) {
var o, n = this;
void 0 !== this.clubs && (o = this.clubs[e]);
var i = t.asCom.getController("isClub"), r = t.asCom.getController("button");
if (void 0 === o || null === o) i.selectedIndex = 0; else {
i.selectedIndex = 1;
var a = t.asCom.getChild("clubName"), s = t.asCom.getChild("clubId");
a.text = o.baseInfo.clubName;
s.text = "ID: " + o.baseInfo.clubNumber;
}
var l = t.asCom.getChild("spaceBtn");
l.offClick(void 0, void 0);
l.onClick(function() {
0 === r.selectedIndex && n.setContent(o);
}, this);
};
t.prototype.filterGame = function() {
var e = this;
this.filterRoomInfos = [];
this.allRoomInfos.forEach(function(t) {
JSON.parse(t.config).roomType !== e.selectRoomType && e.selectRoomType !== d.RoomType.ALL || e.filterRoomInfos.push(t);
});
};
t.prototype.updateClubList = function(e) {
null !== e && (this.clubs = e.clubs);
this.clubList.numItems = this.clubs.length + 1;
this.clubList.selectedIndex = 0;
var t = this.clubs[0];
this.setContent(t);
};
t.prototype.setContent = function(e) {
this.selectedClub = null;
if (void 0 === e || null === e) {
this.content.getController("isClub").selectedIndex = 0;
this.view.getController("isClub").selectedIndex = 0;
} else {
this.content.getController("isClub").selectedIndex = 1;
this.view.getController("isClub").selectedIndex = 1;
this.updateSelectedClub(e);
}
};
t.prototype.updateClubBaseInfo = function() {
this.view.getChild("memberCountText").asTextField.text = this.selectedClub.memberCount + " 人";
};
t.prototype.updateSelectedClub = function(e) {
this.selectedClub = e;
this.updateClubBaseInfo();
this.updateUIByClubManager();
this.loadClubRooms();
};
t.prototype.updateUIByClubManager = function() {
var e = this.isManager();
this.setOperationBtnVisible(e);
};
t.prototype.isManager = function() {
for (var e = r.DataStore.getString(r.KeyConstants.USER_ID, ""), t = this.selectedClub.creatorUserID, o = !1, n = 0, i = this.selectedClub.managers; n < i.length; n++) {
i[n] === e && (o = !0);
}
(o || e === t) && (o = !0);
return o;
};
t.prototype.updateClubInfo = function(e) {
for (var t = 0; t < this.clubs.length; t++) {
if (this.clubs[t].baseInfo.clubID === e.baseInfo.clubID) {
this.clubs[t] = e;
break;
}
}
this.selectedClub.baseInfo.clubID === e.baseInfo.clubID && this.setContent(e);
};
t.prototype.loadAllClub = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.loadMyClubs + "?&tk=" + t;
this.clubRequest(o, function(t, o) {
var n = t.response, i = null;
if (null !== n) {
var r = a.proto.club.MsgClubReply.decode(n);
r.replyCode === a.proto.club.ClubReplyCode.RCOperation && (i = a.proto.club.MsgClubLoadMyClubsReply.decode(r.content));
}
e.updateClubList(i);
});
};
t.prototype.loadClub = function(e) {
var t = this, o = r.DataStore.getString(r.KeyConstants.TOKEN, ""), n = "" + r.LEnv.rootURL + r.LEnv.loadClub + "?&tk=" + o + "&clubID=" + e;
this.clubRequest(n, function(e, o) {
var n = e.response, i = null;
if (null !== n) {
var r = a.proto.club.MsgClubReply.decode(n);
if (r.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
i = a.proto.club.MsgClubInfo.decode(r.content);
t.updateClubInfo(i);
}
}
});
};
t.prototype.updateClubRooms = function(e) {
this.allRoomInfos = [];
var t = r.DataStore.getString(r.KeyConstants.ROOM_INFO_DATA);
this.clubPage.asCom.getController("isInRoom").selectedIndex = void 0 !== t && null !== t && "" !== t ? 1 : 0;
if (0 === e.length) this.clubPage.asCom.getController("hasRoom").selectedIndex = 0; else {
this.clubPage.asCom.getController("hasRoom").selectedIndex = 1;
this.allRoomInfos = e;
this.updateClubRoomsList();
}
};
t.prototype.setFilterBtnName = function() {
var e = this.clubPage.asCom.getChild("allBtn").asButton.getChild("selectedGameName").asTextField;
switch (this.selectRoomType) {
case d.RoomType.ALL:
e.text = "全部";
break;

case d.RoomType.DFMJ:
e.text = "大丰麻将";
break;

case d.RoomType.ZJMJ:
e.text = "湛江麻将";
break;

default:
e.text = "未知游戏";
}
};
t.prototype.updateClubRoomsList = function() {
this.filterGame();
this.roomList.numItems = this.filterRoomInfos.length;
};
t.prototype.reloadCLub = function(e) {
var t = null;
if (null !== e) {
var o = a.proto.club.MsgClubReply.decode(e);
if (o.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
t = a.proto.club.MsgClubLoadMyClubsReply.decode(o.content);
this.updateClubList(t);
} else if (o.replyCode === a.proto.club.ClubReplyCode.RCError) {
var n = a.proto.club.MsgCubOperGenericReply.decode(o.content);
h.ClubRequestError.showErrMsg(n.errorCode);
}
}
};
t.prototype.clubRequest = function(e, t) {
if (null === e) return null;
r.Logger.debug("clubRequest url = ", e);
r.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t = i([ C ], t);
}(cc.Component);
o.ClubView = R;
cc._RF.pop();
}, {
"../../lcore/LCoreExports": "LCoreExports",
"../../proto/protoLobby": "protoLobby",
"../LobbyError": "LobbyError",
"../NewRoomView": "NewRoomView",
"./ApplyRecordView": "ApplyRecordView",
"./ClubModuleInterface": "ClubModuleInterface",
"./ClubRequestError": "ClubRequestError",
"./CreateClubView": "CreateClubView",
"./FilterGameView": "FilterGameView",
"./JoinClubView": "JoinClubView",
"./appointManager/AppointManagerView": "AppointManagerView",
"./memberManager/MemberManagerView": "MemberManagerView",
"./quicklyCreateRoom/QuicklyCreateRoomView": "QuicklyCreateRoomView",
"./quicklyCreateRoom/RoomRuleString": "RoomRuleString",
"./roomManage/RoomManageView": "RoomManageView",
"./settingPopup/SettingPopupView": "SettingPopupView"
} ],
CommonFunction: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "42486WGUiVITYRQpPWossRZ", "CommonFunction");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./DataStore"), i = e("./KeyConstants");
(function(e) {
e.IOS_ADAPTER_WIDTH = 55;
e.setHead = function(e, t, o) {
void 0 === o && (o = 0);
var n = "ui://lobby_bg_package/girl_img";
1 === o && (n = "ui://lobby_bg_package/boy_img");
void 0 !== t && null !== t && "" !== t && t.indexOf("http") >= 0 && t.indexOf(".jpg") < 0 && t.indexOf(".png") < 0 && (n = t + "??aaa=aa.jpg");
e.url = n;
};
e.setViewInCenter = function(e) {
var t = cc.winSize.width / 2 - 1136 * cc.winSize.height / 640 / 2;
e.setPosition(t, e.y);
return t;
};
e.setBaseViewInCenter = function(t) {
var o = cc.winSize.width / 2 - 1136 * cc.winSize.height / 640 / 2;
"1" === n.DataStore.getString(i.KeyConstants.ADAPTIVE_PHONE_KEY) && (o = (cc.winSize.width - e.IOS_ADAPTER_WIDTH) / 2 - 1136 * cc.winSize.height / 640 / 2 + e.IOS_ADAPTER_WIDTH);
t.setPosition(o, t.y);
return o;
};
e.setBgFullScreenScale = function(e) {
var t = Math.min(cc.view.getCanvasSize().width / e.width, cc.view.getCanvasSize().height / e.height), o = e.width * t, n = e.height * t;
e.scaleX = Math.max(cc.view.getCanvasSize().width / o, cc.view.getCanvasSize().height / n);
e.scaleY = Math.max(cc.view.getCanvasSize().width / o, cc.view.getCanvasSize().height / n);
};
e.setBgFullScreen = function(t) {
var o = Math.min(cc.view.getCanvasSize().width / t.width, cc.view.getCanvasSize().height / t.height), r = t.width * o, a = t.height * o, s = 0;
"1" === n.DataStore.getString(i.KeyConstants.ADAPTIVE_PHONE_KEY) && (s += e.IOS_ADAPTER_WIDTH);
t.width = t.width * (cc.view.getCanvasSize().width / r) - s;
t.height = t.height * (cc.view.getCanvasSize().height / a);
};
})(o.CommonFunction || (o.CommonFunction = {}));
cc._RF.pop();
}, {
"./DataStore": "DataStore",
"./KeyConstants": "KeyConstants"
} ],
Constant: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1896fCuOFVDmaGyc/m2asyn", "Constant");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
e.gameVersion = "1.1.97.0604";
e.env = "test";
e.debug = !1;
e.accountUrlConfig = {
develop: "https://test-ddd-common.qianz.com/auth",
test: "https://test-ddd-common.qianz.com/auth",
prepublish: "https://auth-recharge.qianz.com/auth",
online: "https://auth-recharge.qianz.com/auth"
};
e.scheduleUrlConfig = {
develop: "https://ddd-test.qianz.com/common",
test: "https://ddd-test.qianz.com/common",
prepublish: "https://ddd-online-common.qianz.com/common",
online: "https://ddd-online-common.qianz.com/common"
};
e.serverKickOtherAreaCode = "3000";
e.serverIllegalityKickCode = "3001";
e.clientCloseCode = 3099;
e.showshare2xFlagLevel = 20;
e.qualityColor = [ "#49A71A", "#49A71A", "#49A71A" ];
e.releaseFrameRate = 60;
e.debugFrameRate = 60;
e.initValue = "1";
e.storageOpenLevel = 6;
e.arenaOpenLevel = 15;
e.worldBossOpenLevel = 30;
e.callBossOpenLevel = 30;
e.maxMapDifficultyNum = 6;
e.maxMapNum = 6;
e.maxMapStageNum = 100;
e.maxPlayerLevel = 150;
e.maxHeroStarNum = 11;
e.maxHeroDebrisLevelNum = 6;
e.typeDebris = "hb";
e.maxHeroQualityNum = 15;
e.maxHeroLevelNum = 150;
e.maxHeroSkillLevelNum = 30;
e.maxEquipmentLevelNum = 15;
e.maxEquipmentStarNum = 5;
e.guideMonsterStage = "st_101_1_1";
e.guideHeroIds = [ "he_1", "he_4", "he_7" ];
e.guideFightId = "guide_1_1";
e.guideFightEndId = "guide_1_4";
e.guideClickTeachId = "guide_1_1";
e.firstToHall = "guide_2_1";
e.worldChatMsgCount = 50;
e.friendChatMsgCount = 20;
e.youQingXin = "gs_24_1";
e.qiYuanQuan = "gs_25_1";
e.gaojiQiYuanQuan = "gs_26_1";
e.underline = "_";
e.typeGoods = "gs";
e.typeEquip = "eq";
e.typePlayerLevel = "pl";
e.typeHero = "he";
e.typeMonster = "mo";
e.typeHeroLevel = "hl";
e.typeHeroQuality = "hq";
e.typeHeroLeveStar = "hs";
e.typeMapStage = "st";
e.typeGuide = "guide";
e.typeRecruit = "re";
e.firstStageCfgId = "st_1_1_1";
e.mainHeroCfgId = "he_1";
e.typeGold = "gs_1_1";
e.typeDiamond = "gs_2_1";
e.typeExp = "gs_23_1";
e.typeGoodExp = "gs_3_1";
e.typeGuardExp = "gs_4_1";
e.typeShield = "gs_19_1";
e.typeJingJiBi = "gs_33_1";
e.typeBossBi = "gs_90_1";
e.typeTiaoZhanQuan = "gs_34_1";
e.typeHorn = "gs_21_1";
e.typeFriend = "gs_24_1";
e.typeWanted = "gs_20_1";
e.typeShare = "gs_75_1";
e.typeFriendCard = "gs_32_1";
e.typeStrangerCard = "gs_31_1";
e.typeNormalCallStone = "gs_88_1";
e.typeSeniorCallStone = "gs_89_1";
e.musicState = "DDDMusicState";
e.soundState = "DDDSoundState";
e.tipsStr = [ "战役中掉落各种装备。", "装备可以升级、升星、升品。", "每隔4小时可收获一次。", "宝库里要帮助其他玩家。", "宝库可加护盾防御抢夺。", "邀请好友可获得奖励。", "祈愿有三种方式。", "不同祈愿，消耗不同。" ];
e.scenes = {
Main: "main",
Game: "game",
Test: "test"
};
e.WX_KEY_COMBATPOWER = "COMBAT_POWER";
e.dialogViewTag = {
HttpRetryDialog: "HttpRetryDialog",
GameResRetryDialog: "GameResRetryDialog",
RetryDialog: "RetryDialog"
};
e.loadingViewTag = {
Loading: "Loading",
ResLoading: "ResLoading",
RetryLoading: "RetryLoading",
OpenViewLoading: "OpenViewLoading",
HttpLoading: "HttpLoading"
};
e.resTag = {
Game: "Game",
Scene: "Scene"
};
e.persistPrefabConfig = [ "prefab/view/guide/GuideView" ];
e.redpotTag = {
Applyfriend: "applyFriend",
FriendMsg: "friendMsg",
Lottery: "lottery",
Goldpoint: "goldpoint",
Monthcard: "monthcard",
MonthcardThreeDay: "monthcard3day",
AfkReward: "afkreward",
Daily: "daily",
Achv: "achv",
SignIn: "signin",
Dayrecharge: "dayrecharge",
Redpacket: "redpacket",
ArenaReward: "arenareward",
ShareBack: "shareback",
CustomsBox: "customsbox",
CallBossReward: "callbossrewardreddot",
WordBossReward: "worldbossrewardreddot",
CancelCallBossFriendNeedHelp: "cancelhelpfriendreddot",
CallBossFriendNeedHelp: "helpfriendreddot",
StorageGuard: "havenewheroarray",
WareHouseSmokeReddot: "warehousesmokereddot"
};
(function(e) {
e[e.StrengthEquip = 0] = "StrengthEquip";
e[e.UpgradeHero = 1] = "UpgradeHero";
e[e.SummonHero = 2] = "SummonHero";
e[e.BattleView = 3] = "BattleView";
})(e.SETTLEMENT_CLICK_TYPE || (e.SETTLEMENT_CLICK_TYPE = {}));
e.maxMapOpened = "DDDmaxMapOpened";
(function(e) {
e[e.HELMET = 1] = "HELMET";
e[e.BREASTPLATE = 2] = "BREASTPLATE";
e[e.SHOES = 3] = "SHOES";
e[e.WEAPONRY = 4] = "WEAPONRY";
})(e.EQUIPMENT_TYPE || (e.EQUIPMENT_TYPE = {}));
(function(e) {
e[e.HERO = 1] = "HERO";
e[e.GUARD = 2] = "GUARD";
})(e.HERO_TYPE || (e.HERO_TYPE = {}));
(function(e) {
e[e.ACHV_TASK = 1] = "ACHV_TASK";
e[e.DAILY_TASK = 2] = "DAILY_TASK";
})(e.TASK_TYPE || (e.TASK_TYPE = {}));
(function(e) {
e[e.NOT_TASK = 0] = "NOT_TASK";
e[e.BATTLE_TASK = 1] = "BATTLE_TASK";
e[e.HEAR_TASK = 2] = "HEAR_TASK";
e[e.GOLD_TASK = 3] = "GOLD_TASK";
e[e.STORAGE_TASK = 4] = "STORAGE_TASK";
e[e.MONSTER_TASK = 5] = "MONSTER_TASK";
e[e.MALL_TASK = 6] = "MALL_TASK";
e[e.RECRUIT_TASK = 7] = "RECRUIT_TASK";
e[e.INVITE = 8] = "INVITE";
e[e.ARENA = 9] = "ARENA";
})(e.TASK_JUMP_TYPE || (e.TASK_JUMP_TYPE = {}));
(function(e) {
e[e.MONSTER = 1] = "MONSTER";
e[e.BOSS = 2] = "BOSS";
e[e.EGG = 3] = "EGG";
})(e.MONSTER_TYPE || (e.MONSTER_TYPE = {}));
e.localResVersionKey = "localResVersionKey";
(function(e) {
e[e.Success = 0] = "Success";
e[e.Error = 1] = "Error";
e[e.Cencel = 2] = "Cencel";
e[e.Close = 3] = "Close";
})(e.SmallMallBackType || (e.SmallMallBackType = {}));
(function(e) {
e[e.Other = 0] = "Other";
e[e.Rob = 1] = "Rob";
e[e.Help = 2] = "Help";
e[e.Wanted = 3] = "Wanted";
e[e.Shield = 4] = "Shield";
})(e.StorageTagType || (e.StorageTagType = {}));
(function(e) {
e[e.MALL = 1] = "MALL";
e[e.FIRST = 3] = "FIRST";
e[e.LIMIT = 4] = "LIMIT";
e[e.MONTH = 5] = "MONTH";
e[e.RECHARGE_TRIPLE = 6] = "RECHARGE_TRIPLE";
e[e.WEEK_GIFT = 7] = "WEEK_GIFT";
e[e.MONTH_GIFT = 8] = "MONTH_GIFT";
})(e.MallType || (e.MallType = {}));
(function(e) {
e[e.INVALID = -1] = "INVALID";
e[e.LEVEL = 0] = "LEVEL";
e[e.QUALITYS = 1] = "QUALITYS";
e[e.STAR = 2] = "STAR";
e[e.SKILL = 3] = "SKILL";
e[e.EQUIPMENT = 4] = "EQUIPMENT";
e[e.PLAYER_LEVEL = 5] = "PLAYER_LEVEL";
})(e.HeroUpgradesType || (e.HeroUpgradesType = {}));
(function(e) {
e[e.HP = 0] = "HP";
e[e.PATK = 1] = "PATK";
e[e.MATK = 2] = "MATK";
e[e.PDEF = 3] = "PDEF";
e[e.MDEF = 4] = "MDEF";
e[e.ASPD = 5] = "ASPD";
e[e.COMBATPOWER = 6] = "COMBATPOWER";
})(e.HeroPropertyType || (e.HeroPropertyType = {}));
(function(e) {
e[e.HeroUpdateStar = 1] = "HeroUpdateStar";
e[e.HeroUpdateQuality = 2] = "HeroUpdateQuality";
e[e.GetItem = 3] = "GetItem";
e[e.GetHero = 4] = "GetHero";
e[e.GetGuard = 5] = "GetGuard";
e[e.GuardUpdateStar = 6] = "GuardUpdateStar";
e[e.GuardUpdateQuality = 7] = "GuardUpdateQuality";
e[e.Normal = 8] = "Normal";
})(e.TipType || (e.TipType = {}));
(function(e) {
e[e.NotStarted = 0] = "NotStarted";
e[e.BossAlive = 1] = "BossAlive";
e[e.BossDead = 2] = "BossDead";
e[e.TimeOver = 3] = "TimeOver";
})(e.BossState || (e.BossState = {}));
(function(e) {
e[e.Free = 1] = "Free";
e[e.Normal = 2] = "Normal";
e[e.Senior = 3] = "Senior";
e[e.Help = 4] = "Help";
})(e.CallBossType || (e.CallBossType = {}));
e.bossFightBg = "battlebj_yzbk1";
e.arenaFightBg = "battlebj_yzbk1";
e.storageFightBg = "battlebj_yzbk1";
e.callBossSingleTime = 300;
e.worldBossSingleTime = 300;
(function(e) {
e[e.Arena = 1] = "Arena";
e[e.Boss = 2] = "Boss";
})(e.MallViewType || (e.MallViewType = {}));
e.openBoss = !0;
})(o.Constant || (o.Constant = {}));
cc._RF.pop();
}, {} ],
CreateClubView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0f31a/z/41E2YHdFDnujpLB", "CreateClubView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lcore/LCoreExports"), a = e("../../proto/protoLobby"), s = e("./ClubRequestError"), l = cc._decorator.ccclass, u = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.bind = function(e) {
this.clubView = e;
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "createClubView").asCom;
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
var t = this.view.getChild("confirmBtn"), o = this.view.getChild("needDiamond");
t.onClick(function() {
e.onConfirmBtnClick();
}, this);
o.text = "9999";
};
t.prototype.onConfirmBtnClick = function() {
var e = this.view.getChild("inputField").text, t = this.checkLegal(e);
void 0 === t ? this.createClub(e) : r.Dialog.showDialog(t, function() {});
};
t.prototype.checkLegal = function(e) {
var t;
null === e ? t = "输出名称为空" : (e.length < 3 || e.length > 7) && (t = "群名不合法，长于3个文字，并且小于七个文字,当前长度为" + e.length);
return t;
};
t.prototype.createClub = function(e) {
var t = this, o = r.DataStore.getString(r.KeyConstants.TOKEN, ""), n = "" + r.LEnv.rootURL + r.LEnv.createClub + "?&tk=" + o + "&&clname=" + e;
this.clubRequest(n, function(e, o) {
var n, i = e.response, r = a.proto.club.MsgClubReply.decode(i);
if (r.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
n = a.proto.club.MsgCreateClubReply.decode(r.content);
t.updateViewClubList(n.clubInfo);
} else if (r.replyCode === a.proto.club.ClubReplyCode.RCError) {
var l = a.proto.club.MsgCubOperGenericReply.decode(r.content);
s.ClubRequestError.showErrMsg(l.errorCode);
}
});
};
t.prototype.updateViewClubList = function(e) {
this.clubView.addClub(e);
this.destroy();
};
t.prototype.clubRequest = function(e, t) {
if (null === e) return null;
r.Logger.debug("clubRequest url = ", e);
r.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t = i([ l ], t);
}(cc.Component);
o.CreateClubView = u;
cc._RF.pop();
}, {
"../../lcore/LCoreExports": "LCoreExports",
"../../proto/protoLobby": "protoLobby",
"./ClubRequestError": "ClubRequestError"
} ],
DFRuleView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2fdd1RqhttNPY3QtvI9cGo0", "DFRuleView");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lcore/LCoreExports"), r = cc._decorator.ccclass, a = function() {
function e() {
var e;
this.toggleRoundCounts = [];
this.togglePays = [];
this.togglePlayerNums = [];
this.toggleFengDingTypes = [];
this.toggleDunziPointTypes = [];
this.priceCfg = null;
this.recordKey = "GZRule";
this.rules = ((e = {}).roomType = 1, e.playerNumAcquired = 4, e.payNum = 24, e.payType = 0, 
e.handNum = 4, e.doubleScoreWhenSelfDrawn = !0, e.doubleScoreWhenContinuousBanker = !0, 
e.doubleScoreWhenZuoYuanZi = !0, e.fengDingType = 0, e.dunziPointType = 0, e.modName = "gameb", 
e);
}
e.prototype.show = function() {
this.view.visible = !0;
};
e.prototype.hide = function() {
this.view.visible = !1;
};
e.prototype.destroy = function() {
this.newRoomView.forReview || this.saveRule();
};
e.prototype.updatePriceCfg = function(e) {
if (null !== e) {
var t = this.rules.roomType;
this.priceCfg = e["" + t];
i.Logger.debug("dfmj RuleVIew.updateComsumer roomType:" + t + ", priceCfg:" + JSON.stringify(this.priceCfg));
}
this.updateComsumer();
};
e.prototype.updateComsumer = function() {
var e = this.getConfigTable(), t = this.getToggleIndex(this.togglePays), o = e.payType[t], n = this.getToggleIndex(this.toggleRoundCounts), i = e.handNum[n], r = this.getToggleIndex(this.togglePlayerNums), a = e.playerNumAcquired[r], s = this.getCost(o, a, i);
this.newRoomView.updatePrice(s);
};
e.prototype.bindView = function(e) {
this.newRoomView = e;
var t = fgui.UIPackage.createObject("lobby_create_room", "mjRoom").asCom;
this.view = t;
var o = e.getView(), n = o.getChild("mount");
t.setPosition(n.x, n.y);
o.addChild(t);
this.initAllView();
if (this.newRoomView.forReview) this.initItems(this.newRoomView.itemsJSON); else if (i.DataStore.hasKey(this.recordKey)) {
var r = i.DataStore.getString(this.recordKey, "");
i.Logger.debug("jsnoStr:", r);
if ("" !== r) try {
var a = JSON.parse(r);
this.initItems(a);
} catch (e) {
i.Logger.error("parse config error:", e);
i.DataStore.setItem(this.recordKey, "");
}
}
};
e.prototype.getRules = function() {
var e = this.getConfigTable(), t = this.rules, o = this.getToggleIndex(this.toggleRoundCounts);
t.handNum = e.handNum[o];
var n = this.getToggleIndex(this.togglePays);
t.payType = e.payType[n];
var i = this.getToggleIndex(this.togglePlayerNums);
t.playerNumAcquired = e.playerNumAcquired[i];
var r = this.getToggleIndex(this.toggleFengDingTypes);
t.fengDingType = e.fengDingType[r];
var a = this.getToggleIndex(this.toggleDunziPointTypes);
t.dunziPointType = e.dunziPointType[a];
t.doubleScoreWhenSelfDrawn = this.toggleZMJF.selected;
t.doubleScoreWhenContinuousBanker = this.toggleLZJF.selected;
t.doubleScoreWhenZuoYuanZi = this.toggleJYZ.selected;
return JSON.stringify(t);
};
e.prototype.setToggleIndex = function(e, t, o) {
Object.keys(t).forEach(function(n) {
t[Number(n)] === o && (e[Number(n)].selected = !0);
});
};
e.prototype.initItems = function(e) {
try {
var t = this.getConfigTable();
this.setToggleIndex(this.toggleRoundCounts, t.handNum, e.handNum);
this.setToggleIndex(this.togglePays, t.payType, e.payType);
this.setToggleIndex(this.togglePlayerNums, t.playerNumAcquired, e.playerNumAcquired);
this.setToggleIndex(this.toggleFengDingTypes, t.fengDingType, e.fengDingType);
this.setToggleIndex(this.toggleDunziPointTypes, t.dunziPointType, e.dunziPointType);
this.toggleZMJF.selected = e.doubleScoreWhenSelfDrawn;
this.toggleLZJF.selected = e.doubleScoreWhenContinuousBanker;
this.toggleJYZ.selected = e.doubleScoreWhenZuoYuanZi;
} catch (e) {
i.Logger.error(e);
}
};
e.prototype.initAllView = function() {
this.toggleRoundCounts[0] = this.view.getChild("round4Button").asButton;
this.toggleRoundCounts[1] = this.view.getChild("round8Button").asButton;
this.toggleRoundCounts[2] = this.view.getChild("round16Button").asButton;
this.toggleRoundCounts[0].getChild("title").text = "4局";
this.toggleRoundCounts[1].getChild("title").text = "8局";
this.toggleRoundCounts[2].getChild("title").text = "16局";
this.toggleRoundCounts[0].onClick(this.updateComsumer, this);
this.toggleRoundCounts[1].onClick(this.updateComsumer, this);
this.toggleRoundCounts[2].onClick(this.updateComsumer, this);
this.togglePays[0] = this.view.getChild("ownerPayButton").asButton;
this.togglePays[1] = this.view.getChild("aapPayButton").asButton;
this.togglePays[0].getChild("title").text = "房主支付";
this.togglePays[1].getChild("title").text = "AA支付";
this.togglePays[0].onClick(this.updateComsumer, this);
this.togglePays[1].onClick(this.updateComsumer, this);
this.togglePlayerNums[0] = this.view.getChild("2Player").asButton;
this.togglePlayerNums[1] = this.view.getChild("3Player").asButton;
this.togglePlayerNums[2] = this.view.getChild("4Player").asButton;
this.togglePlayerNums[0].getChild("title").text = "2人";
this.togglePlayerNums[1].getChild("title").text = "3人";
this.togglePlayerNums[2].getChild("title").text = "4人";
this.togglePlayerNums[0].onClick(this.updateComsumer, this);
this.togglePlayerNums[1].onClick(this.updateComsumer, this);
this.togglePlayerNums[2].onClick(this.updateComsumer, this);
this.toggleFengDingTypes[0] = this.view.getChild("fengding1").asButton;
this.toggleFengDingTypes[1] = this.view.getChild("fengding2").asButton;
this.toggleFengDingTypes[2] = this.view.getChild("fengding3").asButton;
this.toggleFengDingTypes[3] = this.view.getChild("fengding4").asButton;
this.toggleFengDingTypes[0].getChild("title").text = "20/40";
this.toggleFengDingTypes[1].getChild("title").text = "30/60";
this.toggleFengDingTypes[2].getChild("title").text = "50/100/150";
this.toggleFengDingTypes[3].getChild("title").text = "100/200/300";
this.toggleDunziPointTypes[0] = this.view.getChild("dunzi1").asButton;
this.toggleDunziPointTypes[1] = this.view.getChild("dunzi2").asButton;
this.toggleDunziPointTypes[0].getChild("title").text = "1分/两分";
this.toggleDunziPointTypes[1].getChild("title").text = "10分/20分/30分";
this.toggleZMJF = this.view.getChild("zimojiafen").asButton;
this.toggleLZJF = this.view.getChild("lianzhuangjiafen").asButton;
this.toggleJYZ = this.view.getChild("jinyuanzi").asButton;
this.toggleZMJF.getChild("title").text = "自摸加分";
this.toggleLZJF.getChild("title").text = "连庄加分";
this.toggleJYZ.getChild("title").text = "进园子";
};
e.prototype.getConfigTable = function() {
var e, t, o, n, i, r, a, s, l, u, c;
return (e = {}).playerNumAcquired = ((t = {})[0] = 2, t[1] = 3, t[2] = 4, t), e.payNum = ((o = {})[0] = 24, 
o[1] = 36, o[2] = 66, o), e.dunziPointType = ((n = {})[0] = 0, n[1] = 1, n), e.dunziPointTypeBig = ((i = {})[0] = 2, 
i[1] = 3, i), e.payType = ((r = {})[0] = 0, r[1] = 1, r), e.handNum = ((a = {})[0] = 4, 
a[1] = 8, a[2] = 16, a), e.fengDingType = ((s = {})[0] = 0, s[1] = 1, s[2] = 2, 
s[3] = 3, s), e.neededDiamond = ((l = {})[0] = 32, l[1] = 48, l[2] = 88, l), e.neededDiamond4ThreePlayers = ((u = {})[0] = 24, 
u[1] = 36, u[2] = 66, u), e.neededDiamond4TwoPlayers = ((c = {})[0] = 16, c[1] = 24, 
c[2] = 44, c), e;
};
e.prototype.getCost = function(e, t, o) {
var n = "ownerPay:" + t + ":" + o;
1 === e && (n = "aaPay:" + t + ":" + o);
if (void 0 === this.priceCfg) {
i.Logger.debug("this.priceCfg === undefine");
return 0;
}
i.Logger.debug("key: " + n);
var r = this.priceCfg, a = r.activityPriceCfg;
if (null !== a) {
return a.discountCfg[n];
}
var s = r.originalPriceCfg;
return null !== s ? s[n] : 0;
};
e.prototype.getToggleIndex = function(e) {
for (var t = e.length, o = 0; o < t; o++) {
if (e[o].selected) return o;
}
return 0;
};
e.prototype.saveRule = function() {
i.Logger.debug("dfmj RuleVIew.saveRule()");
var e = this.getRules();
i.DataStore.setItem(this.recordKey, e);
};
return e = n([ r ], e);
}();
o.DFRuleView = a;
cc._RF.pop();
}, {
"../lcore/LCoreExports": "LCoreExports"
} ],
DataStore: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1bd187xcBVIY4uHLLKw8iqQ", "DataStore");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
e.getString = function(e, t) {
void 0 === t && (t = "");
var o = cc.sys.localStorage.getItem(e);
return void 0 !== o && null !== o ? o : t;
};
e.setItem = function(e, t) {
cc.sys.localStorage.setItem(e, t);
};
e.hasKey = function(e) {
var t = cc.sys.localStorage.getItem(e);
return void 0 !== t && null !== t;
};
})(o.DataStore || (o.DataStore = {}));
cc._RF.pop();
}, {} ],
Dialog: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4715b5+cQhGHanjjLzZufPb", "Dialog");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("./CommonFunction"), a = e("./Logger"), s = function() {
function e(e) {
this.packageLoaded = !1;
this.prompts = [];
this.loader = e;
}
e.initDialogs = function(t) {
if (void 0 !== this.inst) throw Error("dialogs has been initialized");
this.inst = new e(t);
};
e.hideDialog = function() {
void 0 !== e.inst.dlgView && e.inst.dlgWin.hide();
};
e.coShowDialog = function(t, o, r) {
return n(this, void 0, Promise, function() {
return i(this, function(n) {
return [ 2, new Promise(function(n, i) {
var a, s;
o && (a = function() {
n(!0);
});
r && (s = function() {
n(!1);
});
e.showDialog(t, a, s);
}) ];
});
});
};
e.showWaiting = function() {
if (void 0 === e.inst.waitWin) {
e.inst.loader.fguiAddPackage("lobby/fui_lobby_progress_bar/lobby_progress_bar");
var t = fgui.UIPackage.createObject("lobby_progress_bar", "rolling").asCom, o = new fgui.Window();
o.modal = !0;
o.contentPane = t;
o.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
e.inst.waitWin = o;
}
e.inst.waitWin.show();
};
e.hideWaiting = function() {
void 0 !== e.inst.waitWin && e.inst.waitWin.hide();
};
e.showProgress = function() {
if (void 0 === e.inst.progressBarWin) {
e.inst.loader.fguiAddPackage("lobby/fui_lobby_progress_bar/lobby_progress_bar");
var t = fgui.UIPackage.createObject("lobby_progress_bar", "progressBar").asCom, o = new fgui.Window();
o.modal = !0;
o.contentPane = t;
r.CommonFunction.setViewInCenter(o);
e.inst.progressBarWin = o;
e.inst.progressBarView = t;
e.inst.progressBarView.getChild("n0").asProgress.value = 0;
}
e.inst.progressBarWin.show();
};
e.updateProgress = function(t) {
if (void 0 !== e.inst.progressBarWin) {
e.inst.progressBarView.getChild("n0").asProgress.value = 100 * t;
}
};
e.hideProgress = function() {
void 0 !== e.inst.progressBarWin && e.inst.progressBarWin.hide();
};
e.prompt = function(t) {
if (!e.inst.packageLoaded) {
e.inst.loader.fguiAddPackage("lobby/fui_dialog/lobby_dialog");
e.inst.packageLoaded = !0;
}
var o = fgui.UIPackage.createObject("lobby_dialog", "prompt").asCom;
o.getChild("text").text = t;
o.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
o.getTransition("t1").play(function() {
o.dispose();
var t = e.inst.prompts.indexOf(o);
e.inst.prompts.splice(t, 1);
});
e.inst.prompts.push(o);
fgui.GRoot.inst.addChild(o);
};
e.hidePrompt = function() {
if (e.inst.prompts.length > 0) for (var t = 0, o = e.inst.prompts; t < o.length; t++) {
o[t].dispose();
}
};
e.showDialog = function(t, o, n) {
void 0 === o && (o = null);
void 0 === n && (n = null);
if (void 0 === e.inst.dlgView) {
a.Logger.debug("showDialog view is null, create new");
if (!e.inst.packageLoaded) {
e.inst.loader.fguiAddPackage("lobby/fui_dialog/lobby_dialog");
e.inst.packageLoaded = !0;
}
var i = fgui.UIPackage.createObject("lobby_dialog", "dialog").asCom, r = new fgui.Window();
r.modal = !0;
r.contentPane = i;
r.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
e.inst.dlgView = i;
e.inst.dlgWin = r;
}
e.inst.dlgView.getChild("text").text = t;
var s = e.inst.dlgView.getChild("ok_btn");
s.offClick(void 0, void 0);
var l = o;
null === o && null === n && (l = function() {});
if (null !== l) {
a.Logger.debug("showDialog, callBackOK valid");
s.visible = !0;
s.onClick(function() {
e.inst.dlgWin.hide();
l();
}, void 0);
} else s.visible = !1;
var u = e.inst.dlgView.getChild("cancel_btn");
u.offClick(void 0, void 0);
if (null !== n) {
a.Logger.debug("showDialog, callBackOK valid");
u.visible = !0;
u.onClick(function() {
e.inst.dlgWin.hide();
n();
}, void 0);
} else u.visible = !1;
e.inst.dlgWin.show();
};
return e;
}();
o.Dialog = s;
cc._RF.pop();
}, {
"./CommonFunction": "CommonFunction",
"./Logger": "Logger"
} ],
DisbandClubView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7cdbd8kIWpCR7K0c8rY1YnY", "DisbandClubView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../../lcore/LCoreExports"), r = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.view = null;
return t;
}
t.prototype.bind = function(e, t) {
this.settingPopupView = e;
this.view.getChild("confirmText").asRichTextField.text = '确定要解散<font color="#96693a"> ' + t + " </font>吗?";
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "disbandClubCom").asCom;
i.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.view.getChild("confirmBtn").asButton.onClick(this.onConfirmBtnClick, this);
};
t.prototype.onConfirmBtnClick = function() {
this.settingPopupView.disbandClub();
this.destroy();
};
return t;
}(cc.Component);
o.DisbandClubView = r;
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports"
} ],
DisbandViewExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7a5b9hXXKxF25oIq7vwlMy8", "DisbandViewExports");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
})(e("./DisbandView"));
cc._RF.pop();
}, {
"./DisbandView": "DisbandView"
} ],
DisbandView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e8352v3JEVCFrZ0yyjPRSPX", "DisbandView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../../gameb/proto/protoGame"), r = e("../../lcore/LCoreExports"), a = function() {
return function(e, t, o) {
this.userID = e;
this.chairID = t;
this.nick = o;
};
}();
o.DisBandPlayerInfo = a;
var s = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.saveRoomView = function(e, t, o, n, i) {
this.myInfo = n;
this.room = e;
this.playersInfo = i;
this.msgDisbandNotify = t;
if (null === this.view || void 0 === this.view) {
o.fguiAddPackage("lobby/fui_room_other_view/room_other_view");
var r = fgui.UIPackage.createObject("room_other_view", "disband_room").asCom;
r.x = cc.winSize.width / 2 - 1136 * cc.winSize.height / 640 / 2;
this.view = r;
var a = new fgui.Window();
a.contentPane = r;
a.modal = !0;
this.win = a;
this.win.show();
this.initView();
}
this.updateView();
};
t.prototype.updateView = function() {
var e = this.msgDisbandNotify;
r.Logger.debug("msgDisbandNotify = ", e);
this.updateTexts(e);
var t = i.proto.mahjong.DisbandState, o = e.disbandState === t.DoneWithOtherReject, n = e.disbandState === t.DoneWithWaitReplyTimeout, a = e.disbandState === t.DoneWithRoomServerNotResponse, s = e.disbandState === t.Done, l = e.disbandState === t.Waiting;
if (o || n || a) {
this.myCountDown.visible = !1;
this.agreeBtn.visible = !0;
this.refuseBtn.visible = !1;
this.isDisbandDone = !0;
this.onAgreeBtnClicked();
} else if (!0 === s) {
this.isDisbandDone = !0;
this.onAgreeBtnClicked();
} else if (!0 === l && void 0 !== e.countdown) {
this.unschedule(this.disbandCountDown);
this.leftTime = e.countdown;
var u = !1, c = this.myInfo;
e.waits.forEach(function(e) {
e === c.chairID && (u = !0);
});
if (!1 === u) {
if (e.waits.length > 0) {
this.myCountDownTxt.text = "" + this.leftTime;
this.leftTime <= 0 && this.unschedule(this.disbandCountDown);
r.Logger.debug("disabnd countdown for others");
this.myCountDown.visible = !0;
this.isForMe = !1;
this.schedule(this.disbandCountDown, 1, cc.macro.REPEAT_FOREVER);
}
this.showButtons(!1);
} else {
r.Logger.debug("disabnd countdown for me");
this.myCountDown.visible = !0;
this.showButtons(!0);
this.isForMe = !0;
this.schedule(this.disbandCountDown, 1, cc.macro.REPEAT_FOREVER);
}
}
};
t.prototype.onDestroy = function() {
this.view.dispose();
this.win.hide();
this.win.dispose();
};
t.prototype.disbandCountDown = function() {
this.leftTime = this.leftTime - 1;
this.myCountDownTxt.text = "" + this.leftTime;
if (this.leftTime <= 0) {
this.unschedule(this.disbandCountDown);
void 0 !== this.isForMe && !0 === this.isForMe && this.onAgreeBtnClicked();
}
};
t.prototype.onRefuseBtnClicked = function() {
this.showButtons(!1);
this.room.sendDisbandAgree(!1);
this.unschedule(this.disbandCountDown);
};
t.prototype.onAgreeBtnClicked = function() {
this.unschedule(this.disbandCountDown);
if (!0 === this.isDisbandDone) this.destroy(); else {
r.Logger.debug(" you choose to agree disband");
this.showButtons(!1);
this.room.sendDisbandAgree(!0);
}
};
t.prototype.showButtons = function(e) {
this.refuseBtn.visible = e;
this.agreeBtn.visible = e;
};
t.prototype.initView = function() {
this.myCountDown = this.view.getChild("n9");
this.myCountDownTxt = this.view.getChild("time");
this.refuseBtn = this.view.getChild("unagreeBtn").asButton;
this.agreeBtn = this.view.getChild("agreeBtn").asButton;
this.refuseBtn.onClick(this.onRefuseBtnClicked, this);
this.agreeBtn.onClick(this.onAgreeBtnClicked, this);
};
t.prototype.updateTexts = function(e) {
var t = this, o = this.getPlayerNick(e.applicant);
this.view.getChild("name").text = o;
for (var n = [], i = 1; i < 5; i++) {
var a = this.view.getChild("player" + i).asCom;
n.push(a);
var s = a.getChild("agree"), l = a.getChild("unagree"), u = a.getChild("wait");
a.visible = !1;
s.visible = !1;
l.visible = !1;
u.visible = !1;
}
if (void 0 !== this.getPlayerByChairID(e.applicant) && null !== this.getPlayerByChairID(e.applicant)) {
a = n[e.applicant];
o = this.getPlayerNick(e.applicant);
a.getChild("name").text = "玩家(" + o + ")";
a.getChild("agree").visible = !0;
a.visible = !0;
}
if (void 0 !== e.waits && null !== e.waits) {
r.Logger.debug("llwant, msgDisbandNotify.waits length:", e.waits.length);
e.waits.forEach(function(e) {
if (void 0 !== t.getPlayerByChairID(e)) {
r.Logger.debug("llwant, msgDisbandNotify.waits chairID:", e);
var i = n[e];
o = t.getPlayerNick(e);
i.getChild("name").text = "玩家(" + o + ")";
i.getChild("wait").visible = !0;
i.visible = !0;
}
});
}
if (void 0 !== e.agrees && null !== e.agrees) {
r.Logger.debug("llwant, msgDisbandNotify.agrees length:", e.agrees.length);
e.agrees.forEach(function(e) {
if (void 0 !== t.getPlayerByChairID(e)) {
r.Logger.debug("llwant, msgDisbandNotify.agrees chairID:", e);
var i = n[e];
o = t.getPlayerNick(e);
i.getChild("name").text = "玩家(" + o + ")";
i.getChild("agree").visible = !0;
i.visible = !0;
}
});
}
if (void 0 !== e.rejects && null !== e.rejects) {
var c = !0;
r.Logger.debug("llwant, msgDisbandNotify.rejects length:", e.rejects.length);
e.rejects.forEach(function(e) {
if (void 0 !== t.getPlayerByChairID(e)) {
r.Logger.debug("llwant, msgDisbandNotify.rejects chairID:", e);
var i = n[e];
o = t.getPlayerNick(e);
i.getChild("name").text = "玩家(" + o + ")";
i.getChild("unagree").visible = !0;
i.visible = !0;
if (!0 === c) {
var a = "玩家 " + o + " 不同意解散，解散不成功!";
t.showDialog(a);
c = !1;
}
}
});
}
};
t.prototype.showDialog = function(e) {
r.Dialog.showDialog(e, function() {}, function() {});
};
t.prototype.getPlayerNick = function(e) {
var t = this.getPlayerByChairID(e), o = t.nick;
void 0 !== o && void 0 !== o && "" !== o || (o = t.userID);
return o;
};
t.prototype.getPlayerByChairID = function(e) {
for (var t = null, o = 0, n = this.playersInfo; o < n.length; o++) {
var i = n[o];
i.chairID === e && (t = i);
}
return t;
};
return t;
}(cc.Component);
o.DisbandView = s;
cc._RF.pop();
}, {
"../../../gameb/proto/protoGame": "protoGame",
"../../lcore/LCoreExports": "LCoreExports"
} ],
EmailView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "71b056iydpDXbwAtat8Lftv", "EmailView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lcore/LCoreExports"), r = e("../proto/protoLobby"), a = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onMessage = function(e) {
i.Logger.debug("EmailView.onMessage");
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
this.getComponent("LobbyModule").loader.fguiAddPackage("lobby/fui_email/lobby_email");
var e = fgui.UIPackage.createObject("lobby_email", "emailView").asCom;
i.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
this.lobbyModule = this.getComponent("LobbyModule");
this.onMessageFunc = this.lobbyModule.eventTarget.on("" + r.proto.lobby.MessageCode.OPMail, this.onMessage, this);
};
t.prototype.onDestroy = function() {
this.lobbyModule.eventTarget.off("" + r.proto.lobby.MessageCode.OPMail, this.onMessageFunc);
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
var t = this.view.getChild("back");
null !== t && t.onClick(this.onCloseClick, this);
var o = this.view.getChild("takeBtn").asButton;
this.takeBtn = o;
this.takeBtn.visible = !1;
this.takeBtn.onClick(this.onTakeBtnClick, this);
this.emailContent = this.view.getChild("textComponent").asCom.getChild("text");
this.emailTitle = this.view.getChild("title");
this.attachmentsList = this.view.getChild("emailAttachmentList").asList;
this.attachmentsList.itemRenderer = function(t, o) {
e.renderAttachmentListItem(t, o);
};
this.emailList = this.view.getChild("mailList").asList;
this.emailList.itemRenderer = function(t, o) {
e.renderPhraseListItem(t, o);
};
this.emailList.setVirtual();
this.loadEmail();
};
t.prototype.updateList = function(e) {
this.emails = e.mails;
this.emailList.numItems = this.emails.length;
if (this.emails.length >= 1) {
this.emailList.selectedIndex = 0;
var t = this.emailList.getChildAt(0), o = this.emails[0];
this.selectEmail(o, t);
}
};
t.prototype.renderAttachmentListItem = function(e, t) {
var o = this.selectedEmail.attachments;
t.asCom.getChild("count").text = "x  " + o.num;
var n = t.asCom.getController("c3");
!0 === o.isReceive ? n.selectedIndex = 0 : n.selectedIndex = 1;
};
t.prototype.renderPhraseListItem = function(e, t) {
var o = this, n = this.emails[e], i = t.asCom.getController("c1");
!1 === n.isRead ? i.selectedIndex = 0 : i.selectedIndex = 1;
t.asCom.getChild("title").text = "邮件";
t.asCom.getChild("spaceBtn").onClick(function() {
o.selectEmail(n, t);
}, this);
};
t.prototype.loadEmail = function() {
var e = this, t = i.DataStore.getString(i.KeyConstants.TOKEN, ""), o = "" + i.LEnv.rootURL + i.LEnv.loadMails + "?&rt=1&tk=" + t;
this.emailRequest(o, function(t, o) {
var n;
if (null !== o) {
n = "错误码:" + o;
i.Dialog.showDialog(n);
} else if (null === (n = i.HTTP.hError(t))) {
var a = t.response, s = r.proto.lobby.MsgLoadMail.decode(a);
e.updateList(s);
}
});
};
t.prototype.selectEmail = function(e, t) {
this.emailContent.text = e.content;
this.emailTitle.text = e.title;
var o = e;
this.selectedEmail = o;
var n = this.view.getController("hasAttachment");
if (null !== o && null !== o.attachments) {
this.updateAttachmentsView();
n.selectedIndex = 0;
} else n.selectedIndex = 1;
!1 === e.isRead && this.setRead(e, t);
};
t.prototype.updateAttachmentsView = function() {
if (void 0 !== this.selectedEmail.attachments || null !== this.selectedEmail.attachments) {
this.takeBtn.visible = !0;
this.attachmentsList.numItems = 1;
} else {
this.takeBtn.visible = !1;
this.attachmentsList.numItems = 0;
}
};
t.prototype.setRead = function(e, t) {
var o = i.DataStore.getString(i.KeyConstants.TOKEN, ""), n = "" + i.LEnv.rootURL + i.LEnv.setMailRead + "?&tk=" + o + "&mailID=" + e.id;
this.emailRequest(n, function(o, n) {
var r;
if (null !== n) {
r = "错误码:" + n;
i.Dialog.showDialog(r);
} else if (null === (r = i.HTTP.hError(o))) {
e.isRead = !0;
t.asCom.getController("c1").selectedIndex = 1;
}
});
};
t.prototype.onTakeBtnClick = function() {
void 0 !== this.selectedEmail.attachments && null !== this.selectedEmail.attachments && (!1 === this.selectedEmail.attachments.isReceive ? this.takeAttachment(this.selectedEmail) : i.Dialog.prompt("附件已领取"));
};
t.prototype.takeAttachment = function(e) {
var t = this, o = i.DataStore.getString(i.KeyConstants.TOKEN, ""), n = "" + i.LEnv.rootURL + i.LEnv.receiveAttachment + "?&tk=" + o + "&mailID=" + e.id;
this.emailRequest(n, function(o, n) {
var r;
if (null !== n) {
r = "错误码:" + n;
i.Dialog.showDialog(r);
} else if (null === (r = i.HTTP.hError(o))) {
t.attachmentsList.getChildAt(0).asCom.getController("c3").selectedIndex = 0;
e.attachments.isReceive = !0;
}
});
};
t.prototype.emailRequest = function(e, t) {
if (null === e) return null;
i.Logger.debug("emailRequest url = ", e);
i.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t;
}(cc.Component);
o.EmailView = a;
cc._RF.pop();
}, {
"../lcore/LCoreExports": "LCoreExports",
"../proto/protoLobby": "protoLobby"
} ],
Enum: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a7330wVXwZMtZekumBN4bAv", "Enum");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t, o;
(function(e) {
e[e.DAFENG = 1] = "DAFENG";
e[e.GUANGZHANG = 8] = "GUANGZHANG";
e[e.ZHANJIANG = 21] = "ZHANJIANG";
})(o = e.GAME_TYPE || (e.GAME_TYPE = {}));
e.GAME_NAME = ((t = {})[o.DAFENG] = "大丰麻将", t[o.ZHANJIANG] = "湛江麻将", t[o.GUANGZHANG] = "大丰关张", 
t);
(function(e) {
e[e.WEIXIN = 104] = "WEIXIN";
e[e.TOUTIAO = 107] = "TOUTIAO";
})(e.CHANNEL_TYPE || (e.CHANNEL_TYPE = {}));
})(o.Enum || (o.Enum = {}));
cc._RF.pop();
}, {} ],
FilterGameView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4eb898etpZAEpiTkOWDht7b", "FilterGameView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("./ClubModuleInterface"), r = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.view = null;
return t;
}
t.prototype.show = function(e, t, o) {
this.clubView = e;
var n = fgui.UIPackage.createObject("lobby_club", "filterPopup").asCom;
this.view = n;
this.initView(t);
fgui.GRoot.inst.showPopup(this.view);
var i = o + 199;
this.view.setPosition(i, 266);
};
t.prototype.initView = function(e) {
var t = this.view.getChild("allBtn").asButton, o = this.view.getChild("dfmj").asButton, n = this.view.getChild("zjmj").asButton;
switch (e) {
case i.RoomType.ALL:
t.selected = !0;
break;

case i.RoomType.DFMJ:
o.selected = !0;
break;

case i.RoomType.ZJMJ:
n.selected = !0;
}
t.on(fgui.Event.TOUCH_END, this.onAllGameBtnClick, this);
o.on(fgui.Event.TOUCH_END, this.onDFMJBtmClick, this);
n.on(fgui.Event.TOUCH_END, this.onZJMJBtnClick, this);
};
t.prototype.onAllGameBtnClick = function() {
this.clubView.selectGame(i.RoomType.ALL);
};
t.prototype.onDFMJBtmClick = function() {
this.clubView.selectGame(i.RoomType.DFMJ);
};
t.prototype.onZJMJBtnClick = function() {
this.clubView.selectGame(i.RoomType.ZJMJ);
};
return t;
}(cc.Component);
o.FilterGameView = r;
cc._RF.pop();
}, {
"./ClubModuleInterface": "ClubModuleInterface"
} ],
GResLoaderImpl: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3fcb8zR+hdFk5hNXePtzVFA", "GResLoaderImpl");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./lcore/Logger"), i = function() {
function e(e) {
this.loadedResSet = {};
this.loadedPackages = {};
this.name = e;
}
e.prototype.fguiAddPackage = function(e) {
fgui.UIPackage.addPackage(e);
this.loadedPackages[e] = !0;
};
e.prototype.loadResDir = function(e, t, o) {
var i = this;
cc.loader.loadResDir(e, function(e, t, i) {
n.Logger.debug("GResLoader load progress:" + e + "/" + t);
null !== o && void 0 !== o && 0 !== t && o(e / t);
}, function(e, o, r) {
n.Logger.debug("GResLoader load, error:" + e);
r.forEach(function(e) {
n.Logger.debug("GResLoader loaded:", e);
i.loadedResSet[e] = !0;
});
t(e);
});
};
e.prototype.loadPrefab = function(e, t) {
var o = this;
cc.loader.loadRes(e, cc.Prefab, function(n, i) {
if (null !== n) t(n, null); else {
o.loadedResSet[e] = !0;
t(null, i);
}
});
};
e.prototype.unload = function() {
var e = Object.keys(this.loadedResSet);
cc.loader.release(e);
Object.keys(this.loadedPackages).forEach(function(e) {
fgui.UIPackage.removePackage(e);
});
this.loadedPackages = {};
this.loadedResSet = {};
};
return e;
}();
o.GResLoaderImpl = i;
cc._RF.pop();
}, {
"./lcore/Logger": "Logger"
} ],
GameModuleA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "45d85nzPCRJUbnPgcGyrCR3", "GameModuleA");
var n, i = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../lobby/lcore/LCoreExports"), l = e("./proto/protoGameA"), u = e("./ReplayA"), c = e("./RoomA"), d = l.proto.pokerface.MessageCode, h = ((n = {})[d.OPDisbandRequest] = 1, 
n[d.OPDisbandNotify] = 1, n[d.OPDisbandAnswer] = 1, n), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.timeElapsed = 0;
t.retry = !1;
t.forceExit = !1;
return t;
}
t.prototype.getLobbyModuleLoader = function() {
return this.lm.loader;
};
Object.defineProperty(t.prototype, "room", {
get: function() {
return this.mRoom;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "resLoader", {
get: function() {
return this.loader;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "component", {
get: function() {
return this;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "user", {
get: function() {
return this.mUser;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "animationMgr", {
get: function() {
return this.mAnimationMgr;
},
enumerable: !0,
configurable: !0
});
t.prototype.launch = function(e) {
return r(this, void 0, Promise, function() {
var t, o, n, i;
return a(this, function(r) {
switch (r.label) {
case 0:
this.lm = e.lm;
this.loader = e.loader;
this.loader.fguiAddPackage("lobby/fui_lobby_poker/lobby_poker");
this.loader.fguiAddPackage("gamea/runfast");
t = fgui.UIPackage.createObject("runfast", "desk").asCom;
fgui.GRoot.inst.addChild(t);
o = s.CommonFunction.setBaseViewInCenter(t);
this.view = t;
"1" === s.DataStore.getString(s.KeyConstants.ADAPTIVE_PHONE_KEY) && (o -= s.CommonFunction.IOS_ADAPTER_WIDTH);
(n = t.getChild("blueBg")).setPosition(-o, 0);
s.CommonFunction.setBgFullScreen(n);
this.mAnimationMgr = new s.AnimationMgr(this.lm.loader);
if ("replay" !== e.jsonString) return [ 3, 2 ];
i = 0;
return [ 4, this.tryEnterReplayRoom(e.userInfo.userID, e.record, i) ];

case 1:
r.sent();
return [ 3, 4 ];

case 2:
return [ 4, this.tryEnterRoom(e.userInfo, e.roomInfo) ];

case 3:
r.sent();
r.label = 4;

case 4:
return [ 2 ];
}
});
});
};
t.prototype.sendBinary = function(e) {
this.ws.ww.send(e.toArrayBuffer());
};
t.prototype.quit = function() {
void 0 !== this.mq && null !== this.mq && this.mq.pushQuit();
};
t.prototype.unblockNormal = function() {
void 0 !== this.mq && null !== this.mq && this.mq.unblockNormal();
};
t.prototype.blockNormal = function() {
void 0 !== this.mq && null !== this.mq && this.mq.blockNormal();
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
};
t.prototype.start = function() {};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
fgui.GRoot.inst.removeChild(this.view);
this.view.dispose();
this.lm.returnFromGame();
};
t.prototype.update = function(e) {
this.timeElapsed += e;
};
t.prototype.tryEnterRoom = function(e, t) {
return r(this, void 0, Promise, function() {
var o, n, i, r, l, u, c, d;
return a(this, function(a) {
switch (a.label) {
case 0:
o = s.LEnv.gameHost;
n = s.DataStore.getString(s.KeyConstants.TOKEN, "");
r = t.roomID;
l = e.userID;
u = "monkey-room" === t.roomID ? s.LEnv.cfmt(s.LEnv.gameWebsocketMonkey, t.gameServerID) : s.LEnv.cfmt(s.LEnv.gameWebsocketPlay, t.gameServerID);
i = "" + o + u + "?userID=" + l + "&roomID=" + r + "&tk=" + n + "&web=1";
s.Logger.debug("tryEnterRoom, url:", i);
this.mUser = e;
this.ws = null;
this.mRoom = null;
this.connectErrorCount = 0;
c = !0;
a.label = 1;

case 1:
return c ? [ 4, this.doEnterRoom(i, e, t) ] : [ 3, 3 ];

case 2:
a.sent();
s.Logger.debug("doEnterRoom return, retry:", this.retry, ", forceExit:", this.forceExit);
this.connectErrorCount++;
if (null !== this.ws) {
d = this.ws;
this.ws = null;
d.ww.close();
}
this.retry && !this.forceExit || (c = !1);
return [ 3, 1 ];

case 3:
null !== this.mRoom && (this.mRoom = null);
this.backToLobby();
return [ 2 ];
}
});
});
};
t.prototype.backToLobby = function() {
this.destroy();
};
t.prototype.doEnterRoom = function(e, t, o) {
return r(this, void 0, Promise, function() {
var n, i, r, u, c, p, f;
return a(this, function(a) {
switch (a.label) {
case 0:
s.Logger.debug("doEnterRoom enter---");
this.retry = !1;
null === this.mRoom && this.createRoom(t, o);
n = "正在进入房间";
i = {
comp: this,
destroyListener: this.eventTarget,
startPing: !0,
pingFrequency: 3,
pingPacketProvider: function(e) {
var t = {
Ops: l.proto.pokerface.MessageCode.OPPing,
Data: e
};
return l.proto.pokerface.GameMessage.encode(t).toArrayBuffer();
}
};
r = {
pingCmd: d.OPPing,
pongCmd: d.OPPong,
decode: l.proto.pokerface.GameMessage.decode,
encode: l.proto.pokerface.GameMessage.encode
};
u = new s.MsgQueue(h);
c = new s.WS(e, u, i, r);
this.mq = u;
this.ws = c;
return [ 4, this.waitConnect(n) ];

case 1:
if (0 === a.sent()) return [ 3, 4 ];
this.retry = !0;
return this.connectErrorCount > 0 ? [ 4, this.showRetryMsgBox() ] : [ 3, 3 ];

case 2:
a.sent();
a.label = 3;

case 3:
return [ 2 ];

case 4:
s.Logger.debug("waitWebsocketMessage wait mRoom reply");
return [ 4, this.waitWebsocketMessage(n) ];

case 5:
p = a.sent();
a.label = 6;

case 6:
if (null !== p) return [ 3, 9 ];
s.Logger.debug(" waitWebsocketMessage return nil");
this.retry = !0;
return this.connectErrorCount > 0 ? [ 4, this.showRetryMsgBox() ] : [ 3, 8 ];

case 7:
a.sent();
a.label = 8;

case 8:
return [ 2 ];

case 9:
f = l.proto.pokerface.MsgEnterRoomResult.decode(p.Data);
s.Logger.debug(" server reply enter mRoom status:", f.status);
if (0 === f.status) return [ 3, 11 ];
s.Logger.debug(" server return enter mRoom ~= 0");
return [ 4, this.showEnterRoomError(f.status) ];

case 10:
a.sent();
return [ 2 ];

case 11:
return [ 4, this.pumpMsg() ];

case 12:
a.sent();
s.Logger.debug("doEnterRoom leave---");
return [ 2 ];
}
});
});
};
t.prototype.createRoom = function(e, t, o) {
this.mRoom = new c.RoomA(e, t, this, o);
this.mRoom.loadRoomView(this.view);
};
t.prototype.waitConnect = function(e) {
return r(this, void 0, Promise, function() {
var t;
return a(this, function(o) {
switch (o.label) {
case 0:
s.Logger.debug("Game.waitConnect, ", e);
return [ 4, this.mq.waitMsg() ];

case 1:
t = o.sent();
s.Logger.debug("Game.waitConnect, mq.waitMsg return:", t);
return t.mt === s.MsgType.wsOpen ? [ 2, 0 ] : [ 2, -1 ];
}
});
});
};
t.prototype.showRetryMsgBox = function(e) {
return r(this, void 0, Promise, function() {
var t, o;
return a(this, function(n) {
switch (n.label) {
case 0:
t = void 0 !== e ? e : "连接游戏服务器失败，是否重连？";
return [ 4, s.Dialog.coShowDialog(t, !0, !0) ];

case 1:
o = n.sent();
this.retry = o;
return [ 2 ];
}
});
});
};
t.prototype.showEnterRoomError = function(e) {
return r(this, void 0, Promise, function() {
var t;
return a(this, function(o) {
switch (o.label) {
case 0:
t = this.getEnterRoomErrorCode(e);
s.Logger.warn("enter mRoom failed, server return error：", t);
return [ 4, s.Dialog.coShowDialog(t, !0, !1) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
t.prototype.getEnterRoomErrorCode = function(e) {
var t, o = l.proto.pokerface.EnterRoomStatus, n = ((t = {})[o.RoomNotExist] = "房间不存在", 
t[o.RoomIsFulled] = "你输入的房间已满，无法加入", t[o.RoomPlaying] = "房间正在游戏中", t[o.InAnotherRoom] = "您已经再另一个房间", 
t[o.MonkeyRoomUserIDNotMatch] = "测试房间userID不匹配", t[o.MonkeyRoomUserLoginSeqNotMatch] = "测试房间进入顺序不匹配", 
t[o.AppModuleNeedUpgrade] = "您的APP版本过老，请升级到最新版本", t[o.InRoomBlackList] = "您被房主踢出房间，10分钟内无法再次加入此房间", 
t[o.TakeoffDiamondFailedNotEnough] = "您的钻石不足，不能进入房间，请充值", t[o.TakeoffDiamondFailedIO] = "抱歉，系统扣除钻石失败，不能进入房间", 
t[o.RoomInApplicateDisband] = "房间正在解散", t);
return void 0 !== n[e] ? n[e] : "未知错误";
};
t.prototype.waitWebsocketMessage = function(e) {
return r(this, void 0, Promise, function() {
var t;
return a(this, function(o) {
switch (o.label) {
case 0:
s.Logger.debug("SG:waitWebsocketMessage, ", e);
return [ 4, this.mq.waitMsg() ];

case 1:
if ((t = o.sent()).mt === s.MsgType.wsData) return [ 2, t.data ];
s.Logger.error("expected normal websocket msg, but got:", t);
return [ 2, null ];
}
});
});
};
t.prototype.pumpMsg = function() {
return r(this, void 0, Promise, function() {
var e, t, o, n;
return a(this, function(i) {
switch (i.label) {
case 0:
e = !0;
i.label = 1;

case 1:
return e ? [ 4, this.mq.waitMsg() ] : [ 3, 9 ];

case 2:
if ((t = i.sent()).mt === s.MsgType.quit) return [ 3, 9 ];
if (t.mt !== s.MsgType.wsData) return [ 3, 4 ];
if ((o = t.data).Ops === l.proto.pokerface.MessageCode.OPPlayerLeaveRoom) {
if (void 0 === o.Data || null === o.Data) {
e = !1;
return [ 3, 9 ];
}
n = l.proto.pokerface.MsgEnterRoomResult.decode(o.Data);
s.Logger.debug("用户主动离开房间--------------- leaveReplyMsg = ", n);
void 0 !== n.status && null !== n.status && 0 !== n.status && s.Logger.debug("游戏已经开始或者房间正在申请解散，不能退出");
}
return [ 4, this.mRoom.dispatchWebsocketMsg(t.data) ];

case 3:
i.sent();
return [ 3, 8 ];

case 4:
if (t.mt !== s.MsgType.wsClosed && t.mt !== s.MsgType.wsError) return [ 3, 8 ];
s.Logger.debug(" websocket connection has broken");
if (this.mRoom.isDestroy) {
s.Logger.debug(" mRoom has been destroy");
return [ 3, 9 ];
}
return [ 4, this.showRetryMsgBox("与游戏服务器连接断开，是否重连？") ];

case 5:
i.sent();
this.retry = !0;
return this.connectErrorCount > 2 ? [ 4, this.showRetryMsgBox() ] : [ 3, 7 ];

case 6:
i.sent();
i.label = 7;

case 7:
e = !1;
i.label = 8;

case 8:
return [ 3, 1 ];

case 9:
return [ 2 ];
}
});
});
};
t.prototype.tryEnterReplayRoom = function(e, t, o) {
return r(this, void 0, Promise, function() {
var n, i, r, c;
return a(this, function(a) {
switch (a.label) {
case 0:
(n = l.proto.pokerface.SRMsgHandRecorder.decode(t.replayRecordBytes)).roomConfigID = t.roomJSONConfig;
s.Logger.debug(" sr-actions count:", n.actions.length);
if (null === (i = e)) {
s.Logger.debug(" userID is nil, use chairID to find userID");
n.players.forEach(function(e) {
e.chairID === o && (i = e.userID);
});
}
null !== i && void 0 !== i || s.Dialog.prompt("您输入的回放码不存在,或录像已过期!");
s.Logger.debug(" tryEnterReplayRoom userID:", i);
this.mUser = {
userID: i
};
r = {
roomID: "",
roomNumber: n.roomNumber,
config: t.roomJSONConfig,
gameServerID: "",
state: 1,
roomConfigID: n.roomConfigID,
timeStamp: "",
handStartted: n.handNum,
lastActiveTime: 0
};
c = new u.ReplayA(n);
this.createRoom(this.user, r, c);
return [ 4, c.gogogo(this.room) ];

case 1:
a.sent();
this.backToLobby();
return [ 2 ];
}
});
});
};
return t;
}(cc.Component);
o.GameModuleA = p;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"./ReplayA": "ReplayA",
"./RoomA": "RoomA",
"./proto/protoGameA": "protoGameA"
} ],
GameModule: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dcfa2nd4eRMh7j93umVHx5X", "GameModule");
var n, i = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../lobby/lcore/LCoreExports"), l = e("./proto/protoGame"), u = e("./Replay"), c = e("./Room"), d = l.proto.mahjong.MessageCode, h = ((n = {})[d.OPDisbandRequest] = 1, 
n[d.OPDisbandNotify] = 1, n[d.OPDisbandAnswer] = 1, n), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.timeElapsed = 0;
t.retry = !1;
t.forceExit = !1;
return t;
}
t.prototype.getLobbyModuleLoader = function() {
return this.lm.loader;
};
Object.defineProperty(t.prototype, "room", {
get: function() {
return this.mRoom;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "resLoader", {
get: function() {
return this.loader;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "component", {
get: function() {
return this;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "user", {
get: function() {
return this.mUser;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "animationMgr", {
get: function() {
return this.mAnimationMgr;
},
enumerable: !0,
configurable: !0
});
t.prototype.launch = function(e) {
return r(this, void 0, Promise, function() {
var t, o, n, i;
return a(this, function(r) {
switch (r.label) {
case 0:
this.lm = e.lm;
this.loader = e.loader;
this.loader.fguiAddPackage("lobby/fui_lobby_mahjong/lobby_mahjong");
this.loader.fguiAddPackage("gameb/dafeng");
t = fgui.UIPackage.createObject("dafeng", "desk").asCom;
fgui.GRoot.inst.addChild(t);
o = s.CommonFunction.setBaseViewInCenter(t);
this.view = t;
"1" === s.DataStore.getString(s.KeyConstants.ADAPTIVE_PHONE_KEY) && (o -= s.CommonFunction.IOS_ADAPTER_WIDTH);
(n = t.getChild("blueBg")).setPosition(-o, 0);
s.CommonFunction.setBgFullScreen(n);
(n = t.getChild("classBg")).setPosition(-o, 0);
s.CommonFunction.setBgFullScreen(n);
this.mAnimationMgr = new s.AnimationMgr(this.lm.loader);
if ("replay" !== e.jsonString) return [ 3, 2 ];
i = 0;
return [ 4, this.tryEnterReplayRoom(e.userInfo.userID, e.record, i) ];

case 1:
r.sent();
return [ 3, 4 ];

case 2:
return [ 4, this.tryEnterRoom(e.userInfo, e.roomInfo) ];

case 3:
r.sent();
r.label = 4;

case 4:
return [ 2 ];
}
});
});
};
t.prototype.sendBinary = function(e) {
this.ws.ww.send(e.toArrayBuffer());
};
t.prototype.quit = function() {
void 0 !== this.mq && null !== this.mq && this.mq.pushQuit();
};
t.prototype.unblockNormal = function() {
void 0 !== this.mq && null !== this.mq && this.mq.unblockNormal();
};
t.prototype.blockNormal = function() {
void 0 !== this.mq && null !== this.mq && this.mq.blockNormal();
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
};
t.prototype.start = function() {};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
fgui.GRoot.inst.removeChild(this.view);
this.view.dispose();
this.lm.returnFromGame();
};
t.prototype.update = function(e) {
this.timeElapsed += e;
};
t.prototype.tryEnterRoom = function(e, t) {
return r(this, void 0, Promise, function() {
var o, n, i, r, l, u, c, d;
return a(this, function(a) {
switch (a.label) {
case 0:
o = s.LEnv.gameHost;
n = s.DataStore.getString(s.KeyConstants.TOKEN, "");
r = t.roomID;
l = e.userID;
u = "monkey-room" === t.roomID ? s.LEnv.cfmt(s.LEnv.gameWebsocketMonkey, t.gameServerID) : s.LEnv.cfmt(s.LEnv.gameWebsocketPlay, t.gameServerID);
i = "" + o + u + "?userID=" + l + "&roomID=" + r + "&tk=" + n + "&web=1";
s.Logger.debug("tryEnterRoom, url:", i);
this.mUser = e;
this.ws = null;
this.mRoom = null;
this.connectErrorCount = 0;
c = !0;
a.label = 1;

case 1:
return c ? [ 4, this.doEnterRoom(i, e, t) ] : [ 3, 3 ];

case 2:
a.sent();
s.Logger.debug("doEnterRoom return, retry:", this.retry, ", forceExit:", this.forceExit);
this.connectErrorCount++;
if (null !== this.ws) {
d = this.ws;
this.ws = null;
d.ww.close();
}
this.retry && !this.forceExit || (c = !1);
return [ 3, 1 ];

case 3:
null !== this.mRoom && (this.mRoom = null);
this.backToLobby();
return [ 2 ];
}
});
});
};
t.prototype.backToLobby = function() {
this.destroy();
};
t.prototype.doEnterRoom = function(e, t, o) {
return r(this, void 0, Promise, function() {
var n, i, r, u, c, p, f;
return a(this, function(a) {
switch (a.label) {
case 0:
s.Logger.debug("doEnterRoom enter---");
this.retry = !1;
null === this.mRoom && this.createRoom(t, o);
n = "正在进入房间";
i = {
comp: this,
destroyListener: this.eventTarget,
startPing: !0,
pingFrequency: 3,
pingPacketProvider: function(e) {
var t = {
Ops: l.proto.mahjong.MessageCode.OPPing,
Data: e
};
return l.proto.mahjong.GameMessage.encode(t).toArrayBuffer();
}
};
r = {
pingCmd: d.OPPing,
pongCmd: d.OPPong,
decode: l.proto.mahjong.GameMessage.decode,
encode: l.proto.mahjong.GameMessage.encode
};
u = new s.MsgQueue(h);
c = new s.WS(e, u, i, r);
this.mq = u;
this.ws = c;
return [ 4, this.waitConnect(n) ];

case 1:
if (0 === a.sent()) return [ 3, 4 ];
this.retry = !0;
return this.connectErrorCount > 0 ? [ 4, this.showRetryMsgBox() ] : [ 3, 3 ];

case 2:
a.sent();
a.label = 3;

case 3:
return [ 2 ];

case 4:
s.Logger.debug("waitWebsocketMessage wait mRoom reply");
return [ 4, this.waitWebsocketMessage(n) ];

case 5:
p = a.sent();
a.label = 6;

case 6:
if (null !== p) return [ 3, 9 ];
s.Logger.debug(" waitWebsocketMessage return nil");
this.retry = !0;
return this.connectErrorCount > 0 ? [ 4, this.showRetryMsgBox() ] : [ 3, 8 ];

case 7:
a.sent();
a.label = 8;

case 8:
return [ 2 ];

case 9:
f = l.proto.mahjong.MsgEnterRoomResult.decode(p.Data);
s.Logger.debug(" server reply enter mRoom status:", f.status);
if (0 === f.status) return [ 3, 11 ];
s.Logger.debug(" server return enter mRoom ~= 0");
s.DataStore.setItem(s.KeyConstants.ROOM_INFO_DATA, "");
return [ 4, this.showEnterRoomError(f.status) ];

case 10:
a.sent();
return [ 2 ];

case 11:
s.DataStore.setItem(s.KeyConstants.ROOM_INFO_DATA, "");
return [ 4, this.pumpMsg() ];

case 12:
a.sent();
s.Logger.debug("doEnterRoom leave---");
return [ 2 ];
}
});
});
};
t.prototype.createRoom = function(e, t, o) {
this.mRoom = new c.Room(e, t, this, o);
this.mRoom.loadRoomView(this.view);
};
t.prototype.waitConnect = function(e) {
return r(this, void 0, Promise, function() {
var t;
return a(this, function(o) {
switch (o.label) {
case 0:
s.Logger.debug("Game.waitConnect, ", e);
return [ 4, this.mq.waitMsg() ];

case 1:
t = o.sent();
s.Logger.debug("Game.waitConnect, mq.waitMsg return:", t);
return t.mt === s.MsgType.wsOpen ? [ 2, 0 ] : [ 2, -1 ];
}
});
});
};
t.prototype.showRetryMsgBox = function(e) {
return r(this, void 0, Promise, function() {
var t, o;
return a(this, function(n) {
switch (n.label) {
case 0:
t = void 0 !== e ? e : "连接游戏服务器失败，是否重连？";
return [ 4, s.Dialog.coShowDialog(t, !0, !0) ];

case 1:
o = n.sent();
this.retry = o;
return [ 2 ];
}
});
});
};
t.prototype.showEnterRoomError = function(e) {
return r(this, void 0, Promise, function() {
var t;
return a(this, function(o) {
switch (o.label) {
case 0:
t = this.getEnterRoomErrorCode(e);
s.Logger.warn("enter mRoom failed, server return error：", t);
return [ 4, s.Dialog.coShowDialog(t, !0, !1) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
t.prototype.getEnterRoomErrorCode = function(e) {
var t, o = l.proto.mahjong.EnterRoomStatus, n = ((t = {})[o.RoomNotExist] = "房间不存在", 
t[o.RoomIsFulled] = "你输入的房间已满，无法加入", t[o.RoomPlaying] = "房间正在游戏中", t[o.InAnotherRoom] = "您已经再另一个房间", 
t[o.MonkeyRoomUserIDNotMatch] = "测试房间userID不匹配", t[o.MonkeyRoomUserLoginSeqNotMatch] = "测试房间进入顺序不匹配", 
t[o.AppModuleNeedUpgrade] = "您的APP版本过老，请升级到最新版本", t[o.InRoomBlackList] = "您被房主踢出房间，10分钟内无法再次加入此房间", 
t[o.TakeoffDiamondFailedNotEnough] = "您的钻石不足，不能进入房间，请充值", t[o.TakeoffDiamondFailedIO] = "抱歉，系统扣除钻石失败，不能进入房间", 
t[o.RoomInApplicateDisband] = "房间正在解散", t);
return void 0 !== n[e] ? n[e] : "未知错误";
};
t.prototype.waitWebsocketMessage = function(e) {
return r(this, void 0, Promise, function() {
var t;
return a(this, function(o) {
switch (o.label) {
case 0:
s.Logger.debug("SG:waitWebsocketMessage, ", e);
return [ 4, this.mq.waitMsg() ];

case 1:
if ((t = o.sent()).mt === s.MsgType.wsData) return [ 2, t.data ];
s.Logger.error("expected normal websocket msg, but got:", t);
return [ 2, null ];
}
});
});
};
t.prototype.pumpMsg = function() {
return r(this, void 0, Promise, function() {
var e, t, o, n;
return a(this, function(i) {
switch (i.label) {
case 0:
e = !0;
i.label = 1;

case 1:
return e ? [ 4, this.mq.waitMsg() ] : [ 3, 9 ];

case 2:
if ((t = i.sent()).mt === s.MsgType.quit) return [ 3, 9 ];
if (t.mt !== s.MsgType.wsData) return [ 3, 4 ];
if ((o = t.data).Ops === l.proto.mahjong.MessageCode.OPPlayerLeaveRoom) {
if (void 0 === o.Data || null === o.Data) {
e = !1;
return [ 3, 9 ];
}
n = l.proto.mahjong.MsgEnterRoomResult.decode(o.Data);
s.Logger.debug("用户主动离开房间--------------- leaveReplyMsg = ", n);
void 0 !== n.status && null !== n.status && 0 !== n.status && s.Logger.debug("游戏已经开始或者房间正在申请解散，不能退出");
}
return [ 4, this.mRoom.dispatchWebsocketMsg(t.data) ];

case 3:
i.sent();
return [ 3, 8 ];

case 4:
if (t.mt !== s.MsgType.wsClosed && t.mt !== s.MsgType.wsError) return [ 3, 8 ];
s.Logger.debug(" websocket connection has broken");
if (this.mRoom.isDestroy) {
s.Logger.debug(" mRoom has been destroy");
return [ 3, 9 ];
}
return [ 4, this.showRetryMsgBox("与游戏服务器连接断开，是否重连？") ];

case 5:
i.sent();
this.retry = !0;
return this.connectErrorCount > 2 ? [ 4, this.showRetryMsgBox() ] : [ 3, 7 ];

case 6:
i.sent();
i.label = 7;

case 7:
e = !1;
i.label = 8;

case 8:
return [ 3, 1 ];

case 9:
return [ 2 ];
}
});
});
};
t.prototype.tryEnterReplayRoom = function(e, t, o) {
return r(this, void 0, Promise, function() {
var n, i, r, c;
return a(this, function(a) {
switch (a.label) {
case 0:
(n = l.proto.mahjong.SRMsgHandRecorder.decode(t.replayRecordBytes)).roomConfigID = t.roomJSONConfig;
s.Logger.debug(" sr-actions count:", n.actions.length);
if (null === (i = e)) {
s.Logger.debug(" userID is nil, use chairID to find userID");
n.players.forEach(function(e) {
e.chairID === o && (i = e.userID);
});
}
null !== i && void 0 !== i || s.Dialog.prompt("您输入的回放码不存在,或录像已过期!");
s.Logger.debug(" tryEnterReplayRoom userID:", i);
this.mUser = {
userID: i
};
r = {
roomID: "",
roomNumber: n.roomNumber,
config: t.roomJSONConfig,
gameServerID: "",
state: 1,
roomConfigID: n.roomConfigID,
timeStamp: "",
handStartted: n.handNum,
lastActiveTime: 0
};
c = new u.Replay(n);
this.createRoom(this.user, r, c);
return [ 4, c.gogogo(this.room) ];

case 1:
a.sent();
this.backToLobby();
return [ 2 ];
}
});
});
};
return t;
}(cc.Component);
o.GameModule = p;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"./Replay": "Replay",
"./Room": "Room",
"./proto/protoGame": "protoGame"
} ],
GameOverResultViewA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "573cblnpVNNk5QUUsAXO7/P", "GameOverResultViewA");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lobby/shareUtil/ShareExports"), r = function() {
return function() {};
}(), a = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.unityViewNode = null;
t.maxScore = 0;
return t;
}
t.prototype.showView = function(e, t) {
this.eventTarget = new cc.EventTarget();
e.isReplayMode() || e.getRoomHost().blockNormal();
e.getRoomHost().loader.fguiAddPackage("gamea/runfast");
var o = fgui.UIPackage.createObject("runfast", "game_over").asCom;
o.x = cc.winSize.width / 2 - 1136 * cc.winSize.height / 640 / 2;
this.unityViewNode = o;
var n = new fgui.Window();
n.contentPane = o;
this.win = n;
this.initAllView();
this.room = e;
this.msgGameOver = t;
this.unityViewNode.getChild("backHallBtn").onClick(this.onCloseButtonClick, this);
var i = this.unityViewNode.getChild("shanreBtn");
i.visible = cc.sys.platform === cc.sys.WECHAT_GAME;
i.onClick(this.onShareButtonClick, this);
this.updateAllData();
this.win.show();
};
t.prototype.updateRoomData = function() {
this.room.getRoomHost().animationMgr.play("lobby/prefabs/mahjong/Effect_zi_jiesuan", this.aniPos.node);
var e = this.room.roomInfo.roomNumber;
this.textRoomNumber.text = "房号:" + e;
};
t.prototype.updatePlayerInfoData = function(e, t) {
var o = e.playerInfo.nick, n = e.userID;
null != o && "" !== o || (o = n);
t.textName.text = o;
t.textId.text = "ID:" + n;
t.imageRoom.visible = e.isMe();
};
t.prototype.setDYJEffect = function(e) {};
t.prototype.updatePlayerScoreData = function(e, t) {
var o = e.score, n = e.winSelfDrawnCounter;
t.textWin.text = "胜利局数: " + n + " 局";
if (o > this.maxScore) {
this.maxScoreIndexs = [];
this.maxScoreIndexs.push(t);
this.maxScore = o;
} else o === this.maxScore && this.maxScoreIndexs.push(t);
if (o >= 0) {
var i = "+";
0 === o && (i = "");
t.textCountT.text = "" + i + o;
t.textCountT.visible = !0;
t.textCountLoseT.visible = !1;
} else {
t.textCountLoseT.text = o.toString();
t.textCountLoseT.visible = !0;
t.textCountT.visible = !1;
}
};
t.prototype.updateAllData = function() {
this.updateRoomData();
var e = this.room;
this.maxScore = 0;
this.maxScoreIndexs = [];
if (null !== this.msgGameOver) {
var t = this.msgGameOver.playerStats;
void 0 !== t && t.sort(function(t, o) {
var n = e.getPlayerViewChairIDByChairID(t.chairID);
return e.getPlayerViewChairIDByChairID(o.chairID) - n;
});
for (var o = 0; o < t.length; o++) {
var n = t[o];
if (void 0 !== n && null !== n) {
var i = this.contentGroup[o];
i.group.visible = !0;
var r = this.room.getPlayerByChairID(n.chairID);
this.updatePlayerInfoData(r, i);
this.updatePlayerScoreData(n, i);
}
if (this.maxScore > 0 && void 0 !== this.maxScoreIndexs) for (var a = 0, s = this.maxScoreIndexs; a < s.length; a++) {
var l = s[a];
this.setDYJEffect(l);
}
}
}
};
t.prototype.initAllView = function() {
this.textRoomNumber = this.unityViewNode.getChild("roomNumber");
this.aniPos = this.unityViewNode.getChild("aniPos");
for (var e = [], t = 0; t < 3; t++) {
var o = new r(), n = this.unityViewNode.getChild("player" + (t + 1)).asCom;
o.group = n;
o.imageIcon = n.getChild("head");
o.imageRoom = n.getChild("roomOwner");
o.imageRoom.visible = !1;
o.aniPos = n.getChild("aniPos");
o.textName = n.getChild("name");
o.textId = n.getChild("id");
o.textWin = n.getChild("number");
o.textCountT = n.getChild("text_win");
o.textCountT.text = "0";
o.textCountT.visible = !1;
o.textCountLoseT = n.getChild("text_lose");
o.textCountLoseT.text = "0";
o.textCountLoseT.visible = !1;
e[t] = o;
n.visible = !1;
}
this.contentGroup = e;
};
t.prototype.onCloseButtonClick = function() {
this.room.isReplayMode() || this.room.getRoomHost().unblockNormal();
this.eventTarget.emit("destroy");
this.unityViewNode = null;
this.destroy();
this.win.hide();
this.win.dispose();
this.room.quit();
};
t.prototype.onShareButtonClick = function() {
i.Share.shareGame(this.eventTarget, i.Share.ShareSrcType.GameShare, i.Share.ShareMediaType.Image, i.Share.ShareDestType.Friend);
};
return t;
}(cc.Component);
o.GameOverResultViewA = a;
cc._RF.pop();
}, {
"../lobby/shareUtil/ShareExports": "ShareExports"
} ],
GameOverResultView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "59024uVut1KVpdbv/eWO+K7", "GameOverResultView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lobby/shareUtil/ShareExports"), r = function() {
return function() {};
}(), a = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.unityViewNode = null;
t.maxScore = 0;
t.maxChucker = 0;
return t;
}
t.prototype.showView = function(e, t) {
this.eventTarget = new cc.EventTarget();
e.isReplayMode() || e.getRoomHost().blockNormal();
e.getRoomHost().loader.fguiAddPackage("gameb/dafeng");
var o = fgui.UIPackage.createObject("dafeng", "game_over").asCom;
o.x = cc.winSize.width / 2 - 1136 * cc.winSize.height / 640 / 2;
this.unityViewNode = o;
var n = new fgui.Window();
n.contentPane = o;
this.win = n;
this.initAllView();
this.room = e;
this.msgGameOver = t;
this.unityViewNode.getChild("backHallBtn").onClick(this.onCloseButtonClick, this);
var i = this.unityViewNode.getChild("shanreBtn");
i.visible = cc.sys.platform === cc.sys.WECHAT_GAME;
i.onClick(this.onShareButtonClick, this);
this.updateAllData();
this.win.show();
};
t.prototype.updateRoomData = function() {
this.room.getRoomHost().animationMgr.play("lobby/prefabs/mahjong/Effect_zi_jiesuan", this.aniPos.node);
var e = this.room.roomInfo.roomNumber;
this.textRoomNumber.text = "房号:" + e;
};
t.prototype.updatePlayerInfoData = function(e, t) {
var o = e.playerInfo.nick, n = e.userID;
null != o && "" !== o || (o = n);
t.textName.text = o;
t.textId.text = "ID:" + n;
t.imageRoom.visible = e.isMe();
t.zhuang.visible = this.room.bankerChairID === e.chairID;
};
t.prototype.setDYJEffect = function(e) {
null !== e && this.room.getRoomHost().animationMgr.play("lobby/prefabs/mahjong/Effect_zi_dayingjia", e.aniPos.node);
};
t.prototype.updatePlayerScoreData = function(e, t) {
var o = e.score, n = e.chuckerCounter;
if (o > this.maxScore) {
this.maxScoreIndexs = [];
this.maxScoreIndexs.push(t);
this.maxScore = o;
} else o === this.maxScore && this.maxScoreIndexs.push(t);
if (o < this.maxChucker) {
this.maxChuckerIndexs = [];
this.maxChuckerIndexs.push(t);
this.maxChucker = o;
} else o === this.maxChucker && this.maxChuckerIndexs.push(t);
if (o >= 0) {
var i = "+";
0 === o && (i = "");
t.textCountT.text = "" + i + o;
t.textCountT.visible = !0;
t.textCountLoseT.visible = !1;
} else {
t.textCountLoseT.text = o.toString();
t.textCountLoseT.visible = !0;
t.textCountT.visible = !1;
}
t.textJiepao.text = "接炮次数: " + e.winChuckCounter;
t.textFangpao.text = "放炮次数: " + n;
t.textZimo.text = "自摸次数: " + e.winSelfDrawnCounter;
};
t.prototype.updateAllData = function() {
this.updateRoomData();
var e = this.room;
this.maxScore = 0;
this.maxScoreIndexs = [];
this.maxChucker = 0;
this.maxChuckerIndexs = [];
if (null !== this.msgGameOver) {
var t = this.msgGameOver.playerStats;
void 0 !== t && t.sort(function(t, o) {
var n = e.getPlayerViewChairIDByChairID(t.chairID);
return e.getPlayerViewChairIDByChairID(o.chairID) - n;
});
for (var o = 0; o < t.length; o++) {
var n = t[o];
if (void 0 !== n && null !== n) {
var i = this.contentGroup[o];
i.group.visible = !0;
var r = this.room.getPlayerByChairID(n.chairID);
this.updatePlayerInfoData(r, i);
this.updatePlayerScoreData(n, i);
}
if (this.maxScore > 0 && void 0 !== this.maxScoreIndexs) for (var a = 0, s = this.maxScoreIndexs; a < s.length; a++) {
var l = s[a];
this.setDYJEffect(l);
}
}
}
};
t.prototype.initAllView = function() {
this.textRoomNumber = this.unityViewNode.getChild("roomNumber");
this.aniPos = this.unityViewNode.getChild("aniPos");
for (var e = [], t = 0; t < 4; t++) {
var o = new r(), n = this.unityViewNode.getChild("player" + (t + 1)).asCom;
o.group = n;
o.imageIcon = n.getChild("head");
o.imageRoom = n.getChild("roomOwner");
o.imageRoom.visible = !1;
o.aniPos = n.getChild("aniPos");
o.zhuang = n.getChild("zhuang");
o.zhuang.visible = !1;
o.textName = n.getChild("name");
o.textId = n.getChild("id");
o.textJiepao = n.getChild("num_jiepao");
o.textFangpao = n.getChild("num_fangpao");
o.textZimo = n.getChild("num_zimo");
o.textCountT = n.getChild("text_win");
o.textCountT.text = "0";
o.textCountT.visible = !1;
o.textCountLoseT = n.getChild("text_lose");
o.textCountLoseT.text = "0";
o.textCountLoseT.visible = !1;
e[t] = o;
n.visible = !1;
}
this.contentGroup = e;
};
t.prototype.onCloseButtonClick = function() {
this.room.isReplayMode() || this.room.getRoomHost().unblockNormal();
this.eventTarget.emit("destroy");
this.unityViewNode = null;
this.destroy();
this.win.hide();
this.win.dispose();
this.room.quit();
};
t.prototype.onShareButtonClick = function() {
i.Share.shareGame(this.eventTarget, i.Share.ShareSrcType.GameShare, i.Share.ShareMediaType.Image, i.Share.ShareDestType.Friend);
};
return t;
}(cc.Component);
o.GameOverResultView = a;
cc._RF.pop();
}, {
"../lobby/shareUtil/ShareExports": "ShareExports"
} ],
GameRecordView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "221756rBfJGB6Mm4ivIc40U", "GameRecordView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lcore/LCoreExports"), r = e("../proto/protoLobby"), a = e("./GameSubRecordView"), s = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.replayRooms = [];
return t;
}
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
this.getComponent("LobbyModule").loader.fguiAddPackage("lobby/fui_game_record/lobby_game_record");
var e = fgui.UIPackage.createObject("lobby_game_record", "recordView").asCom;
i.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.onDestroy = function() {
null !== this.lobbyModule && this.lobbyModule.eventTarget.off("onGameRecordShow", this.onGameRecordShow);
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.recordList = this.view.getChild("list").asList;
this.recordList.itemRenderer = function(t, o) {
e.renderListItem(t, o);
};
this.recordList.setVirtual();
this.loadGameRecord();
this.lobbyModule = this.getComponent("LobbyModule");
null !== this.lobbyModule && this.lobbyModule.eventTarget.on("onGameRecordShow", this.onGameRecordShow, this);
};
t.prototype.onGameRecordShow = function() {
null !== this.win && this.win.show();
};
t.prototype.renderListItem = function(e, t) {
var o = this.replayRooms[e];
t.offClick(this.goSubRecordView, this);
t.onClick(this.goSubRecordView, this);
t.data = e;
var n, r, a, s = this.getGameName(o.recordRoomType), l = o.records.length + " 局";
t.asCom.getChild("gameName").text = s + " " + l;
t.asCom.getChild("roomNumber").text = o.roomNumber + " 号 房间";
t.asCom.getChild("time").text = this.getTimeFormat(o.startTime);
var u, c = 0;
this.initItemView(t);
for (var d = 0; d < o.players.length; d++) {
var h = o.players[d];
this.setItemView(t, d + 1);
var p = t.asCom.getChild("loader" + (d + 1)).asLoader;
i.CommonFunction.setHead(p, h.headIconURI);
n = t.asCom.getChild("playerName" + (d + 1));
var f = "" === h.nick ? h.userID : h.nick;
n.text = "" + f;
r = t.asCom.getChild("playerScore" + (d + 1));
if (h.totalScore > 0) {
r.text = "+" + h.totalScore;
r.asTextField.color = new cc.Color().fromHEX("#D52012");
} else {
r.text = "" + h.totalScore;
r.asTextField.color = new cc.Color().fromHEX("#359031");
}
(a = t.asCom.getChild("winner" + (d + 1))).visible = !1;
if (h.totalScore >= c) {
u = a;
c = h.totalScore;
}
t.asCom.getChild("owner" + (d + 1)).visible = !1;
h.userID === o.ownerUserID && (t.asCom.getChild("owner" + (d + 1)).visible = !0);
}
void 0 !== u && (u.visible = !0);
};
t.prototype.getTimeFormat = function(e) {
var t = new Date(1e3 * e), o = t.getMonth() < 9 ? "0" + (t.getMonth() + 1) + " " : t.getMonth() + 1 + " ", n = t.getDay() < 10 ? "0" + t.getDay() + " " : t.getDay() + " ", i = t.getHours() < 10 ? "0" + t.getHours() + " " : t.getHours() + " ", r = t.getMinutes() < 10 ? "0" + t.getMinutes() + " " : t.getMinutes() + " ";
return t.getFullYear() + " /" + o + "/" + n + " " + i + ": " + r + " ";
};
t.prototype.getGameName = function(e) {
var t = "未知麻将";
switch (e) {
case 1:
t = "大丰麻将";
break;

case 3:
t = "东台麻将";
break;

case 8:
t = "关张";
break;

case 9:
t = "7王523";
break;

case 11:
t = "斗地主";
}
return t;
};
t.prototype.setItemView = function(e, t) {
e.asCom.getChild("bg" + t).visible = !0;
e.asCom.getChild("loader" + t).visible = !0;
e.asCom.getChild("iconFrame" + t).visible = !0;
e.asCom.getChild("playerName" + t).visible = !0;
e.asCom.getChild("playerScore" + t).visible = !0;
};
t.prototype.initItemView = function(e) {
for (var t = 1; t < 5; t++) {
e.asCom.getChild("bg" + t).visible = !1;
e.asCom.getChild("loader" + t).visible = !1;
e.asCom.getChild("iconFrame" + t).visible = !1;
e.asCom.getChild("owner" + t).visible = !1;
e.asCom.getChild("winner" + t).visible = !1;
e.asCom.getChild("playerName" + t).visible = !1;
e.asCom.getChild("playerScore" + t).visible = !1;
}
};
t.prototype.loadGameRecord = function() {
var e = this, t = i.DataStore.getString(i.KeyConstants.TOKEN, ""), o = "" + i.LEnv.rootURL + i.LEnv.lrproom + "?&rt=1&tk=" + t;
i.Logger.debug("loadGameRecord loadGameRecordUrl:", o);
i.HTTP.hGet(this.eventTarget, o, function(t, o) {
var n;
if (null !== o) {
n = "错误码: " + o + " ";
i.Dialog.showDialog(n);
} else if (null === (n = i.HTTP.hError(t))) {
var a = t.response, s = r.proto.lobby.MsgAccLoadReplayRoomsReply.decode(a);
e.updateList(s);
}
});
};
t.prototype.updateList = function(e) {
var t = this;
e.replayRooms.forEach(function(e) {
var o = r.proto.lobby.MsgReplayRoom.decode(e.replayRoomBytes);
t.replayRooms.push(o);
});
this.recordList.numItems = void 0 === this.replayRooms ? 0 : this.replayRooms.length;
};
t.prototype.goSubRecordView = function(e) {
var t = e.initiator.data, o = this.addComponent(a.GameSubRecordView), n = this.replayRooms[t];
o.updateData(n);
this.win.hide();
};
return t;
}(cc.Component);
o.GameRecordView = s;
cc._RF.pop();
}, {
"../lcore/LCoreExports": "LCoreExports",
"../proto/protoLobby": "protoLobby",
"./GameSubRecordView": "GameSubRecordView"
} ],
GameRulesA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ba115ThFDZJe77X/uO/1yx2", "GameRulesA");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../lobby/lcore/LCoreExports");
(function(e) {
e.gameName = function(e) {
return n.Enum.GAME_NAME[e];
};
})(o.GameRulesA || (o.GameRulesA = {}));
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports"
} ],
GameRules: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a840aAHTsVKA5vmP5yn0k2b", "GameRules");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, i, r, a, s, l, u, c, d, h, p, f, g = e("../lobby/lcore/LCoreExports"), y = e("./proto/protoGame"), m = y.proto.dfmahjong.MiniWinType, b = y.proto.dfmahjong.GreatWinType, v = y.proto.zjmahjong.GreatWinType, w = ((n = {})[m.enumMiniWinType_Continuous_Banker] = "连庄", 
n[m.enumMiniWinType_NoFlowers] = "无花10花", n[m.enumMiniWinType_Kong2Discard] = "杠冲", 
n[m.enumMiniWinType_Kong2SelfDraw] = "杠开", n[m.enumMiniWinType_SecondFrontClear] = "小门清", 
n), C = ((i = {})[v.PureSame] = "清一色", i[v.SevenPair] = "小七对", i[v.GreatSevenPair] = "大七对", 
i[v.Thirteen] = "十三幺", i[v.RobKong] = "抢杠胡", i[v.Heaven] = "天胡", i[v.AfterConcealedKong] = "自杠胡", 
i[v.AfterExposedKong] = "放杠胡", i[v.FinalDraw] = "海底捞", i[v.PongPong] = "碰碰胡", i[v.AllWind] = "全风子", 
i[v.AfterKong] = "杠爆", i), R = ((r = {})[b.enumGreatWinType_ChowPongKong] = "独钓", 
r[b.enumGreatWinType_FinalDraw] = "海底捞月", r[b.enumGreatWinType_PongKong] = "碰碰胡", 
r[b.enumGreatWinType_PureSame] = "清一色", r[b.enumGreatWinType_MixedSame] = "混一色", 
r[b.enumGreatWinType_ClearFront] = "大门清", r[b.enumGreatWinType_SevenPair] = "七对", 
r[b.enumGreatWinType_GreatSevenPair] = "豪华大七对", r[b.enumGreatWinType_Heaven] = "天胡", 
r[b.enumGreatWinType_AfterConcealedKong] = "暗杠胡", r[b.enumGreatWinType_AfterExposedKong] = "明杠胡", 
r[b.enumGreatWinType_Richi] = "起手报听胡牌", r[b.enumGreatWinType_PureSameWithFlowerNoMeld] = "清一色", 
r[b.enumGreatWinType_PureSameWithMeld] = "清一色", r[b.enumGreatWinType_MixSameWithFlowerNoMeld] = "混一色", 
r[b.enumGreatWinType_MixSameWithMeld] = "混一色", r[b.enumGreatWinType_PongKongWithFlowerNoMeld] = "碰碰胡", 
r[b.enumGreatWinType_RobKong] = "明杠冲", r[b.enumGreatWinType_OpponentsRichi] = "报听", 
r), I = ((a = {})[g.Enum.GAME_TYPE.DAFENG] = w, a), T = ((s = {})[g.Enum.GAME_TYPE.DAFENG] = R, 
s[g.Enum.GAME_TYPE.ZHANJIANG] = C, s), _ = ((l = {})[g.Enum.GAME_TYPE.DAFENG] = "墩子分+", 
l[g.Enum.GAME_TYPE.ZHANJIANG] = "中马数", l), M = ((u = {})[g.Enum.GAME_TYPE.DAFENG] = "连庄x", 
u), E = ((c = {})[g.Enum.GAME_TYPE.DAFENG] = "包牌", c[g.Enum.GAME_TYPE.ZHANJIANG] = "杠分", 
c), D = ((d = {})[g.Enum.GAME_TYPE.DAFENG] = "报听", d), P = ((h = {})[g.Enum.GAME_TYPE.ZHANJIANG] = !0, 
h), A = ((p = {})[g.Enum.GAME_TYPE.DAFENG] = "辣子数 +", p), S = ((f = {})[g.Enum.GAME_TYPE.DAFENG] = "基本分", 
f);
(function(e) {
e.haveFakeListOfTitles = function(e) {
var t = P[e];
return void 0 !== t && t;
};
e.getFakeListStrs = function(e, t) {
if (void 0 !== t.fakeList && t.fakeList.length > 0) {
var o = D[e];
if (void 0 !== o) return o;
}
return "";
};
e.getGreatWinStrs = function(e, t) {
if (void 0 === t || null === t) return "";
var o = "", n = t.greatWinType;
if (void 0 === n || null === n) return o;
for (var i = T[e], r = 1; r <= 262144; r *= 2) if (0 != (n & r)) {
var a = i[r];
void 0 !== a ? o = "" + o + a + " " : g.Logger.error("not find wType : ", r);
}
return o;
};
e.getMiniWinStrs = function(e, t) {
if (void 0 === t || null === t) return "";
var o = t.miniWinType;
if (void 0 === o || null === o || 0 === o) return "小胡";
for (var n = "", i = I[e], r = 1; r <= 32; r *= 2) if (0 != (o & r)) {
var a = i[r];
void 0 !== a ? n = "" + n + a + " " : g.Logger.error("not find wType : ", r);
}
null !== t.miniMultiple && t.miniMultiple > 0 && (n = n + "倍数" + t.miniMultiple / 10 + "  ");
return n;
};
e.getScoreStrs = function(e, t) {
var o = "";
if (void 0 !== t.specialScore && t.specialScore > 0) {
void 0 !== (n = _[e]) && (o = "" + n + t.specialScore + " ");
}
if (void 0 !== t.fakeWinScore && 0 !== t.fakeWinScore) {
void 0 !== (n = E[e]) && (o = "" + o + n + t.fakeWinScore + "  ");
}
if (void 0 !== t.isContinuousBanker && t.isContinuousBanker) {
var n;
void 0 !== (n = M[e]) && (o = "" + o + n + t.continuousBankerMultiple / 10 + "  ");
}
return o;
};
e.getGreatWinScoreStrs = function(e, t) {
var o = "";
if (void 0 !== t.trimGreatWinPoints && t.trimGreatWinPoints > 0) {
void 0 !== (n = A[e]) && (o = "" + n + t.trimGreatWinPoints / 10 + "  ");
}
if (void 0 !== t.baseWinScore && t.baseWinScore > 0) {
var n;
void 0 !== (n = S[e]) && (o = "" + o + n + t.baseWinScore + "  ");
}
return o;
};
e.haveFlower = function(e) {
return e === g.Enum.GAME_TYPE.DAFENG;
};
e.haveJiaJiaZhuang = function(e) {
return e === g.Enum.GAME_TYPE.DAFENG;
};
e.haveRoundMask = function(e) {
return e === g.Enum.GAME_TYPE.DAFENG;
};
e.gameName = function(e) {
return g.Enum.GAME_NAME[e];
};
})(o.GameRules || (o.GameRules = {}));
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"./proto/protoGame": "protoGame"
} ],
GameSubRecordView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "45679w8A9FEG7M/waGKD4fm", "GameSubRecordView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lcore/LCoreExports"), r = e("../proto/protoLobby"), a = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.updateData = function(e) {
this.replayRoom = e;
var t = e.players, o = this.getGameName(e.recordRoomType), n = e.records.length + " 局";
this.view.asCom.getChild("gameName").text = o + " " + n;
this.view.asCom.getChild("roomNumber").text = e.roomNumber + " 号 房间";
var i, r, a, s, l = this.view.asCom.getChild("time"), u = new Date(1e3 * e.startTime), c = u.getMonth() < 9 ? "0" + (u.getMonth() + 1) + " " : u.getMonth() + 1 + " ", d = u.getDay() < 10 ? "0" + u.getDay() + " " : u.getDay() + " ", h = u.getHours() < 10 ? "0" + u.getHours() + " " : u.getHours() + " ", p = u.getMinutes() < 10 ? "0" + u.getMinutes() + " " : u.getMinutes() + " ";
l.text = u.getFullYear() + " /" + c + "/" + d + " " + h + ": " + p + " ";
this.hidePlayerView(this.view);
for (var f = 0; f < t.length; f++) {
i = (s = t[f]).nick;
a = s.userID;
r = this.view.getChild("playName" + (f + 1));
var g = "" === i ? a : i;
r.text = "" + g;
this.view.getChild("owner" + (f + 1)).visible = !1;
s.userID === e.ownerUserID && (this.view.getChild("owner" + (f + 1)).visible = !0);
}
this.updateList();
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
this.getComponent("LobbyModule").loader.fguiAddPackage("lobby/fui_game_record/lobby_game_record");
var e = fgui.UIPackage.createObject("lobby_game_record", "subRecordView").asCom;
i.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.onDestroy = function() {
null !== this.lobbyModule && this.lobbyModule.eventTarget.off("onGameSubRecordShow", this.onGameSubRecordShow);
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
null !== this.lobbyModule && this.lobbyModule.eventTarget.emit("onGameRecordShow");
this.destroy();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.view.getChild("arrow").onClick(this.onCloseClick, this);
this.recordList = this.view.getChild("list").asList;
this.recordList.itemRenderer = function(t, o) {
e.renderListItem(t, o);
};
this.recordList.setVirtual();
this.lobbyModule = this.getComponent("LobbyModule");
null !== this.lobbyModule && this.lobbyModule.eventTarget.on("onGameSubRecordShow", this.onGameSubRecordShow, this);
};
t.prototype.onGameSubRecordShow = function() {
null !== this.win && this.win.show();
};
t.prototype.hidePlayerView = function(e) {
for (var t = 1; t < 5; t++) e.asCom.getChild("owner" + t).visible = !1;
};
t.prototype.getGameName = function(e) {
var t = "未知麻将";
switch (e) {
case 1:
t = "大丰麻将";
break;

case 3:
t = "东台麻将";
break;

case 8:
t = "关张";
break;

case 9:
t = "7王523";
break;

case 11:
t = "斗地主";
}
return t;
};
t.prototype.renderListItem = function(e, t) {
var o, n = this.replayRoom.records[e], i = t.asCom.getChild("roundText"), r = e + 1, a = r < 10 ? "0" + r + " " : r + " ";
i.text = "" + a;
t.asCom.getChild("time").text = this.getTimeFormat(n.startTime);
for (var s = 0; s < n.playerScores.length; s++) {
o = t.asCom.getChild("score" + (s + 1));
var l = n.playerScores[s].score;
if (l > 0) {
o.text = "" + +l;
o.asTextField.color = new cc.Color().fromHEX("#D52012");
} else {
o.text = "" + l;
o.asTextField.color = new cc.Color().fromHEX("#359031");
}
}
var u = t.asCom.getChild("playBtn");
u.offClick(this.onPlayBtnClick, this);
u.onClick(this.onPlayBtnClick, this);
u.data = n.recordUUID;
};
t.prototype.getTimeFormat = function(e) {
var t = new Date(1e3 * e);
return (t.getHours() < 10 ? "0" + t.getHours() + " " : t.getHours() + " ") + ": " + (t.getMinutes() < 10 ? "0" + t.getMinutes() + " " : t.getMinutes() + " ") + ":" + (t.getSeconds() < 10 ? "0" + t.getSeconds() + " " : t.getSeconds() + " ") + " ";
};
t.prototype.onPlayBtnClick = function(e) {
var t = e.initiator.data;
this.loadRecord(t);
};
t.prototype.enterReplayRoom = function(e) {
var t, o = this.replayRoom;
1 === o.recordRoomType ? t = "gameb" : 21 === o.recordRoomType ? t = "gameb" : 8 === o.recordRoomType && (t = "gamea");
this.win.hide();
var n = {
jsonString: "replay",
userInfo: {
userID: i.DataStore.getString(i.KeyConstants.USER_ID, "")
},
roomInfo: null,
record: e
};
this.getComponent("LobbyModule").switchToGame(n, t);
};
t.prototype.loadRecord = function(e) {
var t = this, o = i.DataStore.getString(i.KeyConstants.TOKEN, ""), n = "" + i.LEnv.rootURL + i.LEnv.lrprecord + "?&rt=1&tk=" + o + "&rid=" + e;
i.Logger.debug("loadRecord loadGameRecordUrl:", n);
i.HTTP.hGet(this.eventTarget, n, function(e, o) {
var n;
if (null !== o) {
n = "错误码:" + o;
i.Dialog.showDialog(n);
} else if (null === (n = i.HTTP.hError(e))) {
var a = e.response, s = r.proto.lobby.MsgAccLoadReplayRecord.decode(a);
i.Logger.debug("record:", s);
t.enterReplayRoom(s);
}
});
};
t.prototype.updateList = function() {
this.recordList.numItems = void 0 === this.replayRoom.records ? 0 : this.replayRoom.records.length;
};
return t;
}(cc.Component);
o.GameSubRecordView = a;
cc._RF.pop();
}, {
"../lcore/LCoreExports": "LCoreExports",
"../proto/protoLobby": "protoLobby"
} ],
GamebExportsA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0b4ad3wM79I0ZS3TF6BPvOZ", "GamebExportsA");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
})(e("./GameModuleA"));
cc._RF.pop();
}, {
"./GameModuleA": "GameModuleA"
} ],
GamebExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "67455CYsHZGmaLxaTgbSGJ1", "GamebExports");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
})(e("./GameModule"));
cc._RF.pop();
}, {
"./GameModule": "GameModule"
} ],
HTTP: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d87a2C898NFwLjQouhLYHv3", "HTTP");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./Dialog"), i = e("./Logger");
(function(e) {
var t = function(e, t, o, r, a) {
var s = cc.loader.getXMLHttpRequest();
0 === o.indexOf("https") && (s.withCredentials = !0);
var l = function() {
s.abort();
}, u = function(t) {
a.waitWin && n.Dialog.hideWaiting();
e.off("destroy", l);
r(s, t);
};
e.once("destory", l);
s.onabort = function() {
i.Logger.trace("xhr onabort");
e.off("destroy", l);
i.Logger.debug("xhr abort for url:", o);
};
s.onloadend = function() {
i.Logger.trace("xhr onloaded");
u(null);
};
s.onerror = function() {
i.Logger.trace("xhr onerror");
u(Error("xhr onerror"));
};
s.ontimeout = function() {
i.Logger.trace("xhr ontimeout");
u(Error("xhr ontimeout"));
};
var c = 5e4;
void 0 !== a.timeout && (c = a.timeout);
s.timeout = c;
s.responseType = a.responseType;
s.open(t, o, !0);
if (null !== a.body && void 0 !== a.body) {
"string" == typeof a.body ? s.setRequestHeader("Content-Type", "application/json") : s.setRequestHeader("Content-Type", "application/octet-stream");
s.send(a.body);
} else s.send();
a.waitWin && n.Dialog.showWaiting();
return s;
};
e.hGet = function(e, o, n, i) {
void 0 === i && (i = "arraybuffer");
var r = {
responseType: i,
waitWin: !0
};
return t(e, "GET", o, n, r);
};
e.hPost = function(e, o, n, i, r) {
void 0 === i && (i = "arraybuffer");
var a = {
responseType: i,
waitWin: !0
};
a.body = r;
return t(e, "POST", o, n, a);
};
e.hError = function(e) {
return 200 === e.status ? null : "HTTP请求失败, status:" + e.status;
};
})(o.HTTP || (o.HTTP = {}));
cc._RF.pop();
}, {
"./Dialog": "Dialog",
"./Logger": "Logger"
} ],
HandResultViewA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7d411cvTZdHvLVfWEkLCpf8", "HandResultViewA");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lobby/lcore/LCoreExports"), r = e("../lobby/shareUtil/ShareExports"), a = e("./TileImageMounterA"), s = function() {
return function() {};
}(), l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.unityViewNode = null;
return t;
}
t.prototype.showView = function(e, t) {
this.eventTarget = new cc.EventTarget();
this.room = e;
e.isReplayMode() || e.getRoomHost().blockNormal();
e.getRoomHost().loader.fguiAddPackage("gamea/runfast");
var o = fgui.UIPackage.createObject("runfast", "hand_result").asCom;
o.x = cc.winSize.width / 2 - 1136 * cc.winSize.height / 640 / 2;
this.unityViewNode = o;
var n = new fgui.Window();
n.contentPane = o;
this.win = n;
this.initAllView();
this.msgHandOver = t;
var i = e.getPlayers(), r = [], a = 0;
Object.keys(i).forEach(function(e) {
var t = i[e];
r[a] = t;
a += 1;
});
r.sort(function(e, t) {
return t.playerView.viewChairID - e.playerView.viewChairID;
});
this.players = r;
var s = this.unityViewNode.getChild("againBtn");
s.onClick(this.onAgainButtonClick, this);
var l = this.unityViewNode.getChild("shanreBtn");
l.visible = cc.sys.platform === cc.sys.WECHAT_GAME;
l.onClick(this.onShareButtonClick, this);
if (e.isReplayMode()) {
s.visible = !1;
l.visible = !1;
}
this.updateAllData();
this.win.show();
};
t.prototype.updateRoomData = function() {
var e;
e = this.room.getMyPlayer().playerScore.score > 0 ? "Effect_jiemian_shengli" : "Effect_jiemian_shibai";
this.room.getRoomHost().animationMgr.play("lobby/prefabs/mahjong/" + e, this.aniPos.node);
if (null !== this.room.roomInfo) {
var t = this.room.roomInfo.roomNumber;
null == t && (t = "");
this.textRoomNumber.text = "房号:" + t;
}
};
t.prototype.updatePlayerInfoData = function(e, t) {
var o = e.playerInfo.nick, n = e.userID;
null != o && "" !== o || (o = n);
t.textName.text = o;
t.textId.text = "ID:" + n;
t.imageRoom.visible = e.isMe();
};
t.prototype.updatePlayerTileData = function(e, t) {
var o = e.tilesHand, n = o.length;
if (n > 0) {
for (var i = 0; i < n; i++) {
var r = o[i], s = t.cards[i];
a.TileImageMounterA.mountTileImage(s, r);
s.visible = !0;
}
t.textPlayerScore.text = "剩余手牌:" + n;
t.textPlayerScore.visible = !0;
} else {
t.textPlayerScore.visible = !1;
for (var l = 0, u = t.cards; l < u.length; l++) {
(s = u[l]).visible = !1;
}
}
};
t.prototype.updateAllData = function() {
var e = 0;
this.updateRoomData();
for (var t = 0, o = this.players; t < o.length; t++) {
var n = o[t], i = this.contentGroup[e];
i.group.visible = !0;
this.updatePlayerInfoData(n, i);
var r = n.playerScore.score;
this.updatePlayerTileData(n, i);
if (r > 0) {
i.textCountT.text = "+" + r;
i.textCountT.visible = !0;
i.textCountLoseT.visible = !1;
this.showWin(i);
} else {
i.textCountLoseT.text = "" + r;
i.textCountLoseT.visible = !0;
i.textCountT.visible = !1;
}
e += 1;
}
};
t.prototype.showWin = function(e) {
i.Logger.debug("显示赢标志");
};
t.prototype.initHands = function(e) {
for (var t = [], o = e.getChild("hands").asCom, n = 0; n < 16; n++) {
var i = "n" + (n + 1), r = o.getChild(i).asCom;
r.visible = !1;
t[n] = r;
}
return t;
};
t.prototype.initAllView = function() {
this.textRoomNumber = this.unityViewNode.getChild("roomNumber");
this.aniPos = this.unityViewNode.getChild("aniPos");
for (var e = [], t = 0; t < 3; t++) {
var o = new s(), n = this.unityViewNode.getChild("player" + (t + 1)).asCom;
o.group = n;
o.imageIcon = n.getChild("head");
o.imageRoom = n.getChild("roomOwner");
o.imageRoom.visible = !1;
o.cards = this.initHands(n);
o.textName = n.getChild("name");
o.textId = n.getChild("id");
o.textCountT = n.getChild("text_win");
o.textCountT.text = "0";
o.textCountT.visible = !1;
o.textCountLoseT = n.getChild("text_lose");
o.textCountLoseT.text = "0";
o.textCountLoseT.visible = !1;
o.textPlayerScore = n.getChild("remainderHands");
o.aniPos = n.getChild("aniPos");
e[t] = o;
n.visible = !1;
}
this.contentGroup = e;
};
t.prototype.onShareButtonClick = function() {
r.Share.shareGame(this.eventTarget, r.Share.ShareSrcType.GameShare, r.Share.ShareMediaType.Image, r.Share.ShareDestType.Friend);
};
t.prototype.onAgainButtonClick = function() {
this.room.isReplayMode() || this.room.getRoomHost().unblockNormal();
this.eventTarget.emit("destroy");
this.destroy();
this.win.hide();
this.win.dispose();
this.msgHandOver.continueAble && this.room.onReadyButtonClick();
};
return t;
}(cc.Component);
o.HandResultViewA = l;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"../lobby/shareUtil/ShareExports": "ShareExports",
"./TileImageMounterA": "TileImageMounterA"
} ],
HandResultView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f5d69jVCmhDTK/bTBWvpDQj", "HandResultView");
var n, i = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../lobby/shareUtil/ShareExports"), a = e("./GameRules"), s = e("./proto/protoGame"), l = e("./RoomRuleView"), u = e("./TileImageMounter"), c = s.proto.mahjong, d = ((n = {})[c.MeldType.enumMeldTypeTriplet2Kong] = "gang1", 
n[c.MeldType.enumMeldTypeExposedKong] = "gang1", n[c.MeldType.enumMeldTypeConcealedKong] = "gang2", 
n[c.MeldType.enumMeldTypeSequence] = "chipeng", n[c.MeldType.enumMeldTypeTriplet] = "chipeng", 
n), h = function() {
return function() {};
}(), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.unityViewNode = null;
return t;
}
t.prototype.showView = function(e, t) {
this.eventTarget = new cc.EventTarget();
this.room = e;
e.isReplayMode() || e.getRoomHost().blockNormal();
e.getRoomHost().loader.fguiAddPackage("gameb/dafeng");
var o = fgui.UIPackage.createObject("dafeng", "hand_result").asCom;
o.x = cc.winSize.width / 2 - 1136 * cc.winSize.height / 640 / 2;
this.unityViewNode = o;
var n = new fgui.Window();
n.contentPane = o;
this.win = n;
this.initAllView();
this.msgHandOver = t;
var i = e.getPlayers(), r = [], a = 0;
Object.keys(i).forEach(function(e) {
var t = i[e];
r[a] = t;
a += 1;
});
r.sort(function(e, t) {
return t.playerView.viewChairID - e.playerView.viewChairID;
});
this.players = r;
var s = this.unityViewNode.getChild("againBtn");
s.onClick(this.onAgainButtonClick, this);
this.unityViewNode.getChild("guizeBtn").onClick(this.onRoomRuleBtnClick, this);
var l = this.unityViewNode.getChild("shanreBtn");
l.visible = cc.sys.platform === cc.sys.WECHAT_GAME;
l.onClick(this.onShareButtonClick, this);
if (e.isReplayMode()) {
s.visible = !1;
l.visible = !1;
}
this.updateAllData();
this.win.show();
};
t.prototype.updateRoomData = function() {
var e;
if (this.msgHandOver.endType !== s.proto.mahjong.HandOverType.enumHandOverType_None) {
e = this.room.getMyPlayer().playerScore.score > 0 ? "Effect_jiemian_shengli" : "Effect_jiemian_shibai";
} else e = "Effect_jiemian_huangzhuang";
this.room.getRoomHost().animationMgr.play("lobby/prefabs/mahjong/" + e, this.aniPos.node);
if (null !== this.room.roomInfo) {
var t = this.room.roomInfo.roomNumber;
null == t && (t = "");
this.textRoomNumber.text = "房号:" + t;
}
};
t.prototype.updateFakeList = function(e) {
if (e.length > 0) for (var t = 0; t < e.length; t++) {
var o = e[t], n = this.fakes[t];
u.TileImageMounter.mountTileImage(n, o);
n.visible = !0;
}
};
t.prototype.updatePlayerInfoData = function(e, t) {
var o = e.playerInfo.nick, n = e.userID;
null != o && "" !== o || (o = n);
t.textName.text = o;
t.textId.text = "ID:" + n;
t.imageRoom.visible = e.isMe();
t.zhuang.visible = this.room.bankerChairID === e.chairID;
};
t.prototype.updatePlayerTileData = function(e, t) {
for (var o = e.melds, n = e.tilesHand, i = e.lastTile, r = 1; r <= 4; r++) {
var a = t.melds.getChild("myMeld" + r);
void 0 !== a && null !== a && t.melds.removeChild(a, !0);
}
for (r = 0; r < o.length; r++) {
var s = o[r], l = t.melds.getChild("meld" + (r + 1)), c = "mahjong_mine_meld_" + d[s.meldType], h = fgui.UIPackage.createObject("lobby_mahjong", c).asCom;
h.setPosition(l.x, l.y);
h.name = "myMeld" + r;
t.melds.addChild(h);
e.playerView.mountMeldImage(h, s);
}
for (var p = -1, f = !1, g = o.length, y = n.length, m = 3 * g + y > 13, b = 0, v = t.cards; b < v.length; b++) {
(C = v[b]).visible = !1;
}
for (r = 0; r < y; r++) {
var w = n[r];
if (i === w && !f && m) {
f = !0;
u.TileImageMounter.mountTileImage(t.cards[13], w);
t.cards[13].visible = !0;
t.hu.visible = !0;
} else {
p += 1;
var C = t.cards[p];
u.TileImageMounter.mountTileImage(C, w);
C.visible = !0;
}
}
};
t.prototype.updatePlayerScoreData = function(e, t) {
var o = s.proto.mahjong.HandOverType, n = e.playerScore, i = a.GameRules.getScoreStrs(this.room.roomType, n);
if (n.winType !== o.enumHandOverType_None && n.winType !== o.enumHandOverType_Chucker) {
var r = n.greatWin;
if (null !== r) {
i = "" + (i = "" + i + a.GameRules.getGreatWinScoreStrs(this.room.roomType, r)) + this.processGreatWin(r) + "  ";
} else {
var l = n.miniWin;
i = "" + i + this.processMiniWin(l);
}
a.GameRules.haveJiaJiaZhuang(this.room.roomType) && void 0 !== this.room.markup && this.room.markup > 0 && (i += "家家庄x2  ");
}
i = "" + i + a.GameRules.getFakeListStrs(this.room.roomType, n) + "  ";
t.textPlayerScore.text = i;
};
t.prototype.updateAllData = function() {
this.updateRoomData();
for (var e = [], t = 0; t < this.players.length; t++) {
var o = this.players[t], n = this.contentGroup[t];
n.group.visible = !0;
this.updatePlayerInfoData(o, n);
var i = 0;
if (this.msgHandOver.endType !== s.proto.mahjong.HandOverType.enumHandOverType_None) {
var r = o.playerScore;
i = r.score;
this.updatePlayerScoreData(o, n);
if (a.GameRules.haveFakeListOfTitles(this.room.roomType) && void 0 !== r.fakeList) for (var l = 0, u = r.fakeList; l < u.length; l++) {
var c = u[l];
e.push(c);
}
}
this.updatePlayerTileData(o, n);
if (i > 0) {
n.textCountT.text = "+" + i;
n.textCountT.visible = !0;
n.textCountLoseT.visible = !1;
} else {
n.textCountLoseT.text = i.toString();
n.textCountLoseT.visible = !0;
n.textCountT.visible = !1;
}
this.updateFakeList(e);
}
};
t.prototype.processGreatWin = function(e) {
return a.GameRules.getGreatWinStrs(this.room.roomType, e);
};
t.prototype.processMiniWin = function(e) {
return a.GameRules.getMiniWinStrs(this.room.roomType, e);
};
t.prototype.initFakes = function(e) {
for (var t = [], o = e.getChild("fakeList").asCom, n = 0; n < 13; n++) {
var i = "n" + (n + 1), r = o.getChild(i).asCom;
r.visible = !1;
t[n] = r;
}
return t;
};
t.prototype.initHands = function(e) {
for (var t = [], o = e.getChild("hands").asCom, n = 0; n < 14; n++) {
var i = "n" + (n + 1), r = o.getChild(i).asCom;
r.visible = !1;
t[n] = r;
}
return t;
};
t.prototype.initAllView = function() {
this.textRoomNumber = this.unityViewNode.getChild("roomNumber");
this.aniPos = this.unityViewNode.getChild("aniPos");
this.fakes = this.initFakes(this.unityViewNode);
for (var e = [], t = 0; t < 4; t++) {
var o = new h(), n = this.unityViewNode.getChild("player" + (t + 1)).asCom;
o.group = n;
o.imageIcon = n.getChild("head");
o.imageRoom = n.getChild("roomOwner");
o.imageRoom.visible = !1;
o.cards = this.initHands(n);
o.melds = n.getChild("melds").asCom;
o.textName = n.getChild("name");
o.textId = n.getChild("id");
o.zhuang = n.getChild("zhuang");
o.zhuang.visible = !1;
o.lianzhuang = n.getChild("lianzhuang");
o.lianzhuang.visible = !1;
o.textCountT = n.getChild("text_win");
o.textCountT.text = "0";
o.textCountT.visible = !1;
o.textCountLoseT = n.getChild("text_lose");
o.textCountLoseT.text = "0";
o.textCountLoseT.visible = !1;
o.textPlayerScore = n.getChild("score");
o.hu = n.getChild("hu");
o.aniPos = n.getChild("aniPos");
e[t] = o;
n.visible = !1;
}
this.contentGroup = e;
};
t.prototype.onShareButtonClick = function() {
r.Share.shareGame(this.eventTarget, r.Share.ShareSrcType.GameShare, r.Share.ShareMediaType.Image, r.Share.ShareDestType.Friend);
};
t.prototype.onRoomRuleBtnClick = function() {
var e = this.getComponent(l.RoomRuleView);
void 0 !== e && null != e || (e = this.addComponent(l.RoomRuleView));
e.updateView(this.room.roomInfo.config);
};
t.prototype.onAgainButtonClick = function() {
this.room.isReplayMode() || this.room.getRoomHost().unblockNormal();
this.eventTarget.emit("destroy");
this.destroy();
this.win.hide();
this.win.dispose();
this.msgHandOver.continueAble && this.room.onReadyButtonClick();
};
return t;
}(cc.Component);
o.HandResultView = p;
cc._RF.pop();
}, {
"../lobby/shareUtil/ShareExports": "ShareExports",
"./GameRules": "GameRules",
"./RoomRuleView": "RoomRuleView",
"./TileImageMounter": "TileImageMounter",
"./proto/protoGame": "protoGame"
} ],
HandlerActionResultChow: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5059e5w1YdDPYmwK1LCa7xp", "HandlerActionResultChow");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, r, a, s, l, u, c;
return i(this, function(i) {
switch (i.label) {
case 0:
t = e.actionMeld;
n = e.targetChairID;
r = o.getPlayerByChairID(n);
a = e.actionTile;
for (s = 0; s <= 2; s++) (l = t.tile1 + s) !== a && r.removeTileFromHand(l);
r.addMeld(t);
void 0 !== (u = e.newFlowers) && u.length > 0 && r.refreshConcealedMelds(u);
c = o.getPlayerByChairID(t.contributor);
return [ 4, r.chowResultAnimation() ];

case 1:
i.sent();
r.hand2UI(!0);
c.removeLatestDiscarded(a);
c.discarded2UI(!1, !1);
o.setArrowByParent(null);
o.hideDiscardedTips();
return [ 2 ];
}
});
});
};
})(o.HandlerActionResultChow || (o.HandlerActionResultChow = {}));
cc._RF.pop();
}, {} ],
HandlerActionResultDiscardedA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "026f4zEa91Fk5ZQ1q8KoX0K", "HandlerActionResultDiscardedA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, r, a, s, l;
return i(this, function(i) {
t = e.targetChairID;
n = o.getPlayerByChairID(t);
r = e.actionHand.cards;
for (a = 0, s = r; a < s.length; a++) {
l = s[a];
n.removeTileFromHand(l);
}
n.addDiscardedTiles(r);
n.sortHands();
n.hand2UI(!1);
n.discarded2UI();
n.showCardHandType(e.actionHand.cardHandType, r[1]);
return [ 2 ];
});
});
};
})(o.HandlerActionResultDiscardedA || (o.HandlerActionResultDiscardedA = {}));
cc._RF.pop();
}, {} ],
HandlerActionResultDiscarded: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e6725EC3GNCyIuhGmUKe7D9", "HandlerActionResultDiscarded");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, r, a, s, l, u, c;
return i(this, function(i) {
t = e.targetChairID;
n = o.getPlayerByChairID(t);
r = e.actionTile;
a = o.getMyPlayer();
s = n.isMe();
l = o.isReplayMode();
s && !l || n.discardOutTileID(r);
if (s && !l) return [ 2 ];
o.cleanUI();
n.addDicardedTile(r);
n.discarded2UI(!0, e.waitDiscardReAction);
if (void 0 !== (u = a.readyHandList) && null !== u && u.length > 0) for (c = 0; c < a.readyHandList.length; c += 2) if (u[c] === r) {
u[c + 1] > 1 ? u[c + 1] = u[c + 1] - 1 : u.splice(c, 2);
a.readyHandList = u;
break;
}
return [ 2 ];
});
});
};
})(o.HandlerActionResultDiscarded || (o.HandlerActionResultDiscarded = {}));
cc._RF.pop();
}, {} ],
HandlerActionResultDrawA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "16937qN9FVPnb0td2dZMpKe", "HandlerActionResultDrawA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGameA");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, a;
return i(this, function(i) {
t = e.targetChairID;
n = o.getPlayerByChairID(t);
if ((a = e.actionHand.cards[0]) !== r.proto.pokerface.CardID.CARDMAX + 1) {
n.addHandTile(a);
n.sortHands();
n.hand2UI(!1);
}
return [ 2 ];
});
});
};
})(o.HandlerActionResultDrawA || (o.HandlerActionResultDrawA = {}));
cc._RF.pop();
}, {
"../proto/protoGameA": "protoGameA"
} ],
HandlerActionResultDraw: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "48ae1672XtPh5BRMMPvps/3", "HandlerActionResultDraw");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGame");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, a, s, l, u, c, d;
return i(this, function(i) {
switch (i.label) {
case 0:
t = e.newFlowers;
n = e.targetChairID;
a = o.getPlayerByChairID(n);
s = e.actionTile;
if (!(void 0 !== t && t.length > 0)) return [ 3, 4 ];
l = 0, u = t;
i.label = 1;

case 1:
if (!(l < u.length)) return [ 3, 4 ];
c = u[l];
d = [];
a.playerView.showFlowerOnHandTail(c);
return [ 4, a.playerView.playDrawFlowerAnimation() ];

case 2:
i.sent();
a.playerView.hideFlowerOnHandTail();
d.push(c);
a.addFlowerTiles(d);
a.flower2UI();
i.label = 3;

case 3:
l++;
return [ 3, 1 ];

case 4:
if (s !== r.proto.mahjong.TileID.enumTid_MAX + 1) {
a.addHandTile(s);
a.sortHands(!0);
a.hand2UI(!1);
}
o.tilesInWall = e.tilesInWall;
o.updateTilesInWallUI();
o.hideDiscardedTips();
return [ 2 ];
}
});
});
};
})(o.HandlerActionResultDraw || (o.HandlerActionResultDraw = {}));
cc._RF.pop();
}, {
"../proto/protoGame": "protoGame"
} ],
HandlerActionResultKongConcealed: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "975a0CNlPNJz4U5HP2SPa3+", "HandlerActionResultKongConcealed");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGame");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, a, s, l;
return i(this, function(i) {
switch (i.label) {
case 0:
t = e.targetChairID;
n = o.getPlayerByChairID(t);
a = e.actionTile;
for (s = 1; s <= 4; s++) n.removeTileFromHand(a);
(l = new r.proto.mahjong.MsgMeldTile()).meldType = r.proto.mahjong.MeldType.enumMeldTypeConcealedKong;
l.tile1 = a;
l.contributor = n.chairID;
n.addMeld(l);
return [ 4, n.concealedKongResultAnimation() ];

case 1:
i.sent();
n.hand2UI(!1);
return [ 2 ];
}
});
});
};
})(o.HandlerActionResultKongConcealed || (o.HandlerActionResultKongConcealed = {}));
cc._RF.pop();
}, {
"../proto/protoGame": "protoGame"
} ],
HandlerActionResultKongExposed: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c4949jEPwNMtZt/HpUhBVIj", "HandlerActionResultKongExposed");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, r, a, s, l, u;
return i(this, function(i) {
switch (i.label) {
case 0:
t = e.actionMeld;
n = e.targetChairID;
r = o.getPlayerByChairID(n);
a = t.tile1;
o.cleanUI();
for (s = 1; s <= 3; s++) r.removeTileFromHand(a);
r.addMeld(t);
void 0 !== (l = e.newFlowers) && l.length > 0 && r.refreshConcealedMelds(l);
u = o.getPlayerByChairID(t.contributor);
return [ 4, r.exposedKongResultAnimation() ];

case 1:
i.sent();
r.hand2UI(!0);
u.removeLatestDiscarded(a);
u.discarded2UI(!1, !1);
o.setArrowByParent(null);
o.hideDiscardedTips();
return [ 2 ];
}
});
});
};
})(o.HandlerActionResultKongExposed || (o.HandlerActionResultKongExposed = {}));
cc._RF.pop();
}, {} ],
HandlerActionResultNotifyA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "84d26eOHutJ0JpOiEYZU3qw", "HandlerActionResultNotifyA");
var n, i = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../lobby/lcore/LCoreExports"), s = e("../proto/protoGameA"), l = e("./HandlerActionResultDiscardedA"), u = e("./HandlerActionResultDrawA"), c = e("./HandlerActionResultSkipA"), d = s.proto.prunfast.ActionType, h = ((n = {})[d.enumActionType_SKIP] = c.HandlerActionResultSkipA.onMsg, 
n[d.enumActionType_DRAW] = u.HandlerActionResultDrawA.onMsg, n[d.enumActionType_DISCARD] = l.HandlerActionResultDiscardedA.onMsg, 
n);
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return i(t, void 0, Promise, function() {
var t, n, i;
return r(this, function(r) {
switch (r.label) {
case 0:
t = s.proto.pokerface.MsgActionResultNotify.decode(e);
n = t.action;
return void 0 === (i = h[n]) ? [ 3, 2 ] : [ 4, i(t, o) ];

case 1:
r.sent();
return [ 3, 3 ];

case 2:
a.Logger.debug("HandlerActionResultNotify failed, no action handler for:", n);
r.label = 3;

case 3:
return [ 2 ];
}
});
});
};
})(o.HandlerActionResultNotifyA || (o.HandlerActionResultNotifyA = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGameA": "protoGameA",
"./HandlerActionResultDiscardedA": "HandlerActionResultDiscardedA",
"./HandlerActionResultDrawA": "HandlerActionResultDrawA",
"./HandlerActionResultSkipA": "HandlerActionResultSkipA"
} ],
HandlerActionResultNotify: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a10f8MGdK5I47XY8cdG3VpY", "HandlerActionResultNotify");
var n, i = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../lobby/lcore/LCoreExports"), s = e("../proto/protoGame"), l = e("./HandlerActionResultChow"), u = e("./HandlerActionResultDiscarded"), c = e("./HandlerActionResultDraw"), d = e("./HandlerActionResultKongConcealed"), h = e("./HandlerActionResultKongExposed"), p = e("./HandlerActionResultPong"), f = e("./HandlerActionResultReadyHand"), g = e("./HandlerActionResultTriplet2Kong"), y = s.proto.mahjong.ActionType, m = ((n = {})[y.enumActionType_CHOW] = l.HandlerActionResultChow.onMsg, 
n[y.enumActionType_DRAW] = c.HandlerActionResultDraw.onMsg, n[y.enumActionType_KONG_Concealed] = d.HandlerActionResultKongConcealed.onMsg, 
n[y.enumActionType_KONG_Exposed] = h.HandlerActionResultKongExposed.onMsg, n[y.enumActionType_PONG] = p.HandlerActionResultPong.onMsg, 
n[y.enumActionType_KONG_Triplet2] = g.HandlerActionResultTriplet2Kong.onMsg, n[y.enumActionType_DISCARD] = u.HandlerActionResultDiscarded.onMsg, 
n[y.enumActionType_FirstReadyHand] = f.HandlerActionResultReadyHand.onMsg, n);
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return i(t, void 0, Promise, function() {
var t, n, i;
return r(this, function(r) {
switch (r.label) {
case 0:
t = s.proto.mahjong.MsgActionResultNotify.decode(e);
n = t.action;
return void 0 === (i = m[n]) ? [ 3, 2 ] : [ 4, i(t, o) ];

case 1:
r.sent();
return [ 3, 3 ];

case 2:
a.Logger.debug("HandlerActionResultNotify failed, no action handler for:", n);
r.label = 3;

case 3:
s.proto.mahjong.ActionType.enumActionType_FirstReadyHand;
return [ 2 ];
}
});
});
};
})(o.HandlerActionResultNotify || (o.HandlerActionResultNotify = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGame": "protoGame",
"./HandlerActionResultChow": "HandlerActionResultChow",
"./HandlerActionResultDiscarded": "HandlerActionResultDiscarded",
"./HandlerActionResultDraw": "HandlerActionResultDraw",
"./HandlerActionResultKongConcealed": "HandlerActionResultKongConcealed",
"./HandlerActionResultKongExposed": "HandlerActionResultKongExposed",
"./HandlerActionResultPong": "HandlerActionResultPong",
"./HandlerActionResultReadyHand": "HandlerActionResultReadyHand",
"./HandlerActionResultTriplet2Kong": "HandlerActionResultTriplet2Kong"
} ],
HandlerActionResultPong: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6e8d3RZ56FF04JQtm68vRCf", "HandlerActionResultPong");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, r, a, s, l, u;
return i(this, function(i) {
switch (i.label) {
case 0:
t = e.actionMeld;
n = e.targetChairID;
r = o.getPlayerByChairID(n);
a = t.tile1;
o.cleanUI();
for (s = 1; s <= 2; s++) r.removeTileFromHand(a);
r.addMeld(t);
void 0 !== (l = e.newFlowers) && null !== l && l.length > 0 && r.refreshConcealedMelds(l);
u = o.getPlayerByChairID(t.contributor);
return [ 4, r.pongResultAnimation() ];

case 1:
i.sent();
r.hand2UI(!0);
u.removeLatestDiscarded(a);
u.discarded2UI(!1, !1);
o.setArrowByParent(null);
o.hideDiscardedTips();
return [ 2 ];
}
});
});
};
})(o.HandlerActionResultPong || (o.HandlerActionResultPong = {}));
cc._RF.pop();
}, {} ],
HandlerActionResultReadyHand: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "79a62J1MhJAOrHlBu/2loo3", "HandlerActionResultReadyHand");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n;
return i(this, function(i) {
t = e.targetChairID;
(n = o.getPlayerByChairID(t)).isRichi = !0;
n.readyHandEffect();
n.richiIconShow(!0);
return [ 2 ];
});
});
};
})(o.HandlerActionResultReadyHand || (o.HandlerActionResultReadyHand = {}));
cc._RF.pop();
}, {} ],
HandlerActionResultSkipA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bbdfasHTWhBMZqg33hWoh+V", "HandlerActionResultSkipA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n;
return i(this, function(i) {
t = e.targetChairID;
(n = o.getPlayerByChairID(t)).hideDiscarded();
n.playSkipAnimation();
return [ 2 ];
});
});
};
})(o.HandlerActionResultSkipA || (o.HandlerActionResultSkipA = {}));
cc._RF.pop();
}, {} ],
HandlerActionResultTriplet2Kong: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "162c8Tqb1pH7aWsIXh315cF", "HandlerActionResultTriplet2Kong");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGame");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, a;
return i(this, function(i) {
switch (i.label) {
case 0:
t = e.targetChairID;
n = o.getPlayerByChairID(t);
a = e.actionTile;
n.removeTileFromHand(a);
n.getMeld(a, r.proto.mahjong.MeldType.enumMeldTypeTriplet).meldType = r.proto.mahjong.MeldType.enumMeldTypeTriplet2Kong;
return [ 4, n.triplet2KongResultAnimation() ];

case 1:
i.sent();
n.hand2UI(!1);
return [ 2 ];
}
});
});
};
})(o.HandlerActionResultTriplet2Kong || (o.HandlerActionResultTriplet2Kong = {}));
cc._RF.pop();
}, {
"../proto/protoGame": "protoGame"
} ],
HandlerMsg2LobbyA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "daea3AlLSJA2513vaoBX5uF", "HandlerMsg2LobbyA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
return i(this, function(e) {
return [ 2 ];
});
});
};
})(o.HandlerMsg2LobbyA || (o.HandlerMsg2LobbyA = {}));
cc._RF.pop();
}, {} ],
HandlerMsg2Lobby: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "48472a4ZuFIh7gKev7TGmJN", "HandlerMsg2Lobby");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var e, t, n;
return i(this, function(i) {
e = o.roomInfo;
t = {
roomID: e.roomID,
roomNumber: e.roomNumber,
config: e.config,
gameServerID: e.gameServerID
};
n = JSON.stringify(t);
r.DataStore.setItem(r.KeyConstants.ROOM_INFO_DATA, n);
o.quit();
return [ 2 ];
});
});
};
})(o.HandlerMsg2Lobby || (o.HandlerMsg2Lobby = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports"
} ],
HandlerMsgActionAllowedA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7205d/yBkpPbID7LX4R/eMh", "HandlerMsgActionAllowedA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../proto/protoGameA");
(function(e) {
var t = this, o = function(e, t) {
var o = e.allowedActions;
t.allowedActionMsg = e;
t.allowedReActionMsg = null;
t.playerView.skipBtn.visible = !1;
t.playerView.discardBtn.visible = !1;
t.playerView.tipBtn.visible = !0;
var n = a.proto.prunfast.ActionType;
if (0 != (o & n.enumActionType_SKIP)) {
r.Logger.debug("llwant, can skip");
t.playerView.skipBtn.visible = !0;
}
if (0 != (o & n.enumActionType_DISCARD)) {
r.Logger.debug("llwant, can discard");
t.playerView.discardBtn.visible = !0;
}
};
e.onMsg = function(e, s) {
return n(t, void 0, Promise, function() {
var t, n, l;
return i(this, function(i) {
t = a.proto.pokerface.MsgAllowPlayerAction.decode(e);
n = t.actionChairID;
(l = s.getPlayerByChairID(n)).hideDiscarded();
t.timeoutInSeconds;
if (l.isMe()) {
r.Logger.debug("llwant, my allowed action");
o(t, l);
} else r.Logger.debug("llwant, opponents allowed action");
s.setWaitingPlayer(l.chairID);
return [ 2 ];
});
});
};
})(o.HandlerMsgActionAllowedA || (o.HandlerMsgActionAllowedA = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgActionAllowed: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f8b43lROqJKubSWpvpnQcZc", "HandlerMsgActionAllowed");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../PlayerInterface"), s = e("../proto/protoGame");
(function(e) {
var t = this;
e.showButton = function(e, t, o) {
if (e) {
t.waitSkip = !0;
t.playerView.showButton(o);
}
};
var o = function(t, o) {
var n = t.allowedActions;
o.allowedActionMsg = t;
o.allowedReActionMsg = null;
o.updateReadyHandList(null);
var i = o.playerView, l = !1;
o.waitSkip = !1;
o.isGuoHuTips = !1;
var u = s.proto.mahjong.ActionType, c = [];
if (0 != (n & u.enumActionType_CustomB)) {
r.Logger.debug("llwant, can zhua");
l = !0;
c.push(a.ButtonDef.Zhua);
o.waitSkip = !0;
}
if (0 != (n & u.enumActionType_FirstReadyHand)) {
r.Logger.debug("llwant, can ready hand");
l = !0;
c.push(a.ButtonDef.Ting);
o.waitSkip = !0;
}
if (0 != (n & u.enumActionType_SKIP)) {
r.Logger.debug("llwant, can skip");
l = !0;
c.push(a.ButtonDef.Skip);
}
if (0 != (n & u.enumActionType_KONG_Concealed)) {
r.Logger.debug("llwant, can concealed kong");
l = !0;
c.push(a.ButtonDef.Kong);
}
if (0 != (n & u.enumActionType_KONG_Triplet2)) {
r.Logger.debug("llwant, can triplet2 kong");
l = !0;
c.push(a.ButtonDef.Kong);
}
if (0 != (n & u.enumActionType_WIN_SelfDrawn)) {
r.Logger.debug("llwant, can win self drawn");
l = !0;
c.push(a.ButtonDef.Hu);
}
0 != (n & u.enumActionType_WIN_SelfDrawn) && 0 != (n & u.enumActionType_SKIP) && (o.isGuoHuTips = !0);
if (0 != (n & u.enumActionType_DISCARD)) {
for (var d = [], h = t.tipsForAction, p = 0, f = h; p < f.length; p++) {
d[(w = f[p]).targetTile] = w;
}
var g = i.handsClickCtrls;
if (o.isRichi) {
for (var y = 0; y < 14; y++) {
(b = g[y]).isDiscardable = !1;
b.isGray = !0;
i.setGray(b.h);
}
var m = g[13];
m.isDiscardable = !0;
h[1].readyHandList.length < 1 ? m.t.visible = !1 : m.t.visible = !0;
} else for (y = 0; y < 14; y++) {
var b, v = (b = g[y]).tileID, w = d[v];
if (null !== v) if (void 0 !== w) {
b.isDiscardable = !0;
var C = w.readyHandList;
void 0 !== C && null !== C && 0 !== C.length || (C = []);
b.t.visible = C.length > 0;
b.readyHandList = C;
} else {
b.isGray = !0;
i.setGray(b.h);
b.isDiscardable = !1;
}
}
}
e.showButton(l, o, c);
};
e.onMsg = function(e, a) {
return n(t, void 0, Promise, function() {
var t, n, l;
return i(this, function(i) {
t = s.proto.mahjong.MsgAllowPlayerAction.decode(e);
n = t.actionChairID;
if ((l = a.getPlayerByChairID(n)).isMe()) {
r.Logger.debug("llwant, my allowed action");
o(t, l);
} else r.Logger.debug("llwant, opponents allowed action");
a.setWaitingPlayer(l.chairID);
l.isRichi && l.isMe() && l.autoDiscard();
return [ 2 ];
});
});
};
})(o.HandlerMsgActionAllowed || (o.HandlerMsgActionAllowed = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../PlayerInterface": "PlayerInterface",
"../proto/protoGame": "protoGame"
} ],
HandlerMsgActionResultA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4c247WcppxKNpj0qV/mcGd2", "HandlerMsgActionResultA");
var n, i = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../lobby/lcore/LCoreExports"), s = e("../proto/protoGameA"), l = e("./HandlerActionResultDiscardedA"), u = e("./HandlerActionResultSkipA"), c = s.proto.prunfast.ActionType, d = ((n = {})[c.enumActionType_SKIP] = u.HandlerActionResultSkipA.onMsg, 
n[c.enumActionType_DISCARD] = l.HandlerActionResultDiscardedA.onMsg, n);
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return i(t, void 0, Promise, function() {
var t, n;
return r(this, function(i) {
switch (i.label) {
case 0:
t = e.action;
return void 0 === (n = d[t]) ? [ 3, 2 ] : [ 4, n(e, o) ];

case 1:
i.sent();
return [ 3, 3 ];

case 2:
a.Logger.debug("HandlerActionResultNotify failed, no action handler for:", t);
i.label = 3;

case 3:
return [ 2 ];
}
});
});
};
})(o.HandlerMsgActionResultA || (o.HandlerMsgActionResultA = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGameA": "protoGameA",
"./HandlerActionResultDiscardedA": "HandlerActionResultDiscardedA",
"./HandlerActionResultSkipA": "HandlerActionResultSkipA"
} ],
HandlerMsgDealA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "99d30iUVGdBJquRgKiTOgbN", "HandlerMsgDealA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGameA");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, a, s, l, u, c, d, h;
return i(this, function(i) {
t = r.proto.pokerface.MsgDeal.decode(e);
o.resetForNewHand();
o.bankerChairID = t.bankerChairID;
o.windFlowerID = t.windFlowerID;
o.markup = t.markup;
n = o.getPlayers();
a = t.playerCardLists;
for (s = 0, l = a; s < l.length; s++) {
u = l[s];
c = u;
d = u.chairID;
(h = o.getPlayerByChairID(d)).isMe() ? h.addHandTiles(c.cardsOnHand) : h.tileCountInHand = c.cardCountOnHand;
}
o.setWaitingPlayer(o.bankerChairID);
o.getMyPlayer().sortHands();
Object.keys(n).forEach(function(e) {
n[e].hand2UI(!1);
});
return [ 2 ];
});
});
};
})(o.HandlerMsgDealA || (o.HandlerMsgDealA = {}));
cc._RF.pop();
}, {
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgDeal: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0eb4eCIrF5JBIxLYiZg+rjX", "HandlerMsgDeal");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGame");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, a, s, l, u, c, d, h, p;
return i(this, function(i) {
t = r.proto.mahjong.MsgDeal.decode(e);
o.resetForNewHand();
o.bankerChairID = t.bankerChairID;
o.isContinuousBanker = t.isContinuousBanker;
o.windFlowerID = t.windFlowerID;
o.tilesInWall = t.tilesInWall;
o.markup = t.markup;
o.updateTilesInWallUI();
n = o.getPlayers();
o.setJiaJiaZhuang();
o.setRoundMask();
o.setBankerFlag();
o.cleanUI();
a = t.playerTileLists;
for (s = 0, l = a; s < l.length; s++) {
u = l[s];
c = u;
d = u.chairID;
(h = o.getPlayerByChairID(d)).isMe() ? h.addHandTiles(c.tilesHand) : h.tileCountInHand = c.tileCountInHand;
h.addFlowerTiles(c.tilesFlower);
}
o.setWaitingPlayer(o.bankerChairID);
(p = o.getMyPlayer()).sortHands(p.chairID === o.bankerChairID);
Object.keys(n).forEach(function(e) {
var t = n[e];
t.hand2UI(!1);
t.flower2UI();
});
return [ 2 ];
});
});
};
})(o.HandlerMsgDeal || (o.HandlerMsgDeal = {}));
cc._RF.pop();
}, {
"../proto/protoGame": "protoGame"
} ],
HandlerMsgDeletedA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a2411qaMB1JJ4NXslOqaegP", "HandlerMsgDeletedA");
var n, i = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../lobby/lcore/LCoreExports"), s = e("../proto/protoGameA"), l = s.proto.pokerface.RoomDeleteReason, u = ((n = {})[l.IdleTimeout] = "房间空置时间过长，被解散", 
n[l.DisbandByOwnerFromRMS] = "房间被房主解散", n[l.DisbandByApplication] = "房间被申请解散", n[l.DisbandBySystem] = "房间被系统解散", 
n[l.DisbandMaxHand] = "房间已达到最大局数，被解散", n[l.DisbandInLoseProtected] = "房间已有足够人进园子，牌局被解散", 
n);
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return i(t, void 0, Promise, function() {
var t, n;
return r(this, function(i) {
o.isDestroy = !0;
t = s.proto.pokerface.MsgRoomDelete.decode(e);
void 0 === (n = u[t.reason]) && (n = "房间已解散");
a.Logger.debug("room deleted reason:", n);
o.quit();
return [ 2 ];
});
});
};
})(o.HandlerMsgDeletedA || (o.HandlerMsgDeletedA = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgDeleted: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4d8b1sC+yBC27SEK6Sn5TgC", "HandlerMsgDeleted");
var n, i = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../lobby/lcore/LCoreExports"), s = e("../proto/protoGame"), l = s.proto.mahjong.RoomDeleteReason, u = ((n = {})[l.IdleTimeout] = "房间空置时间过长，被解散", 
n[l.DisbandByOwnerFromRMS] = "房间被房主解散", n[l.DisbandByApplication] = "房间被申请解散", n[l.DisbandBySystem] = "房间被系统解散", 
n[l.DisbandMaxHand] = "房间已达到最大局数，被解散", n[l.DisbandInLoseProtected] = "房间已有足够人进园子，牌局被解散", 
n);
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return i(t, void 0, Promise, function() {
var t, n;
return r(this, function(i) {
o.isDestroy = !0;
t = s.proto.mahjong.MsgRoomDelete.decode(e);
void 0 === (n = u[t.reason]) && (n = "房间已解散");
a.Logger.debug("room deleted reason:", n);
o.quit();
return [ 2 ];
});
});
};
})(o.HandlerMsgDeleted || (o.HandlerMsgDeleted = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGame": "protoGame"
} ],
HandlerMsgDisbandNotifyA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6a3c9qU0kVOJ5lSuPmhQhH5", "HandlerMsgDisbandNotifyA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../proto/protoGameA");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n;
return i(this, function(i) {
r.Logger.debug("HandlerMsgDisbandNotify");
t = a.proto.pokerface.MsgDisbandNotify.decode(e);
if ((n = t.disbandState) === a.proto.pokerface.DisbandState.ErrorDuplicateAcquire) {
r.Dialog.prompt("已经有人申请了解散房间");
return [ 2 ];
}
if (n === a.proto.pokerface.DisbandState.ErrorNeedOwnerWhenGameNotStart) {
r.Dialog.prompt("牌局未开始，只有房主可以解散房间");
return [ 2 ];
}
o.updateDisbandVoteView(t);
return [ 2 ];
});
});
};
})(o.HandlerMsgDisbandNotifyA || (o.HandlerMsgDisbandNotifyA = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgDisbandNotify: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d89d3sdRVpN8IDupZW8xEga", "HandlerMsgDisbandNotify");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../proto/protoGame");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n;
return i(this, function(i) {
r.Logger.debug("HandlerMsgDisbandNotify");
t = a.proto.mahjong.MsgDisbandNotify.decode(e);
if ((n = t.disbandState) === a.proto.mahjong.DisbandState.ErrorDuplicateAcquire) {
r.Dialog.prompt("已经有人申请了解散房间");
return [ 2 ];
}
if (n === a.proto.mahjong.DisbandState.ErrorNeedOwnerWhenGameNotStart) {
r.Dialog.prompt("牌局未开始，只有房主可以解散房间");
return [ 2 ];
}
o.updateDisbandVoteView(t);
return [ 2 ];
});
});
};
})(o.HandlerMsgDisbandNotify || (o.HandlerMsgDisbandNotify = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGame": "protoGame"
} ],
HandlerMsgDonateA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "94af0nvUZ9E7qlcqFCuY04N", "HandlerMsgDonateA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGameA");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t;
return i(this, function(n) {
t = r.proto.pokerface.MsgDonate.decode(e);
o.showDonate(t);
return [ 2 ];
});
});
};
})(o.HandlerMsgDonateA || (o.HandlerMsgDonateA = {}));
cc._RF.pop();
}, {
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgDonate: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b5324T2kCJOCb0uM8leHoMb", "HandlerMsgDonate");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGame");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t;
return i(this, function(n) {
t = r.proto.mahjong.MsgDonate.decode(e);
o.showDonate(t);
return [ 2 ];
});
});
};
})(o.HandlerMsgDonate || (o.HandlerMsgDonate = {}));
cc._RF.pop();
}, {
"../proto/protoGame": "protoGame"
} ],
HandlerMsgGameOverA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2881etQscpBoqbd9Sqa3nR5", "HandlerMsgGameOverA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../proto/protoGameA");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t;
return i(this, function(n) {
r.Logger.debug("HandlerMsgGameOver");
t = a.proto.pokerface.MsgGameOver.decode(e);
o.loadGameOverResultView(t);
return [ 2 ];
});
});
};
})(o.HandlerMsgGameOverA || (o.HandlerMsgGameOverA = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgGameOver: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9ae6bPIKtVOZ6i3TxJ6f1Hx", "HandlerMsgGameOver");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../proto/protoGame");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t;
return i(this, function(n) {
r.Logger.debug("HandlerMsgGameOver");
t = a.proto.mahjong.MsgGameOver.decode(e);
o.loadGameOverResultView(t);
return [ 2 ];
});
});
};
})(o.HandlerMsgGameOver || (o.HandlerMsgGameOver = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGame": "protoGame"
} ],
HandlerMsgHandOverA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "31b39CZ0ORBmJGA5iWgEeVU", "HandlerMsgHandOverA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../proto/protoGameA");
(function(e) {
var t = this;
e.onHandOver = function(e, o) {
return n(t, void 0, void 0, function() {
var t, n, r;
return i(this, function(i) {
if (e.endType !== a.proto.prunfast.HandOverType.enumHandOverType_None) for (t = 0, 
n = e.scores.playerScores; t < n.length; t++) {
r = n[t];
o.getPlayerByChairID(r.targetChairID).playerScore = r;
}
o.loadHandResultView(e);
return [ 2 ];
});
});
};
e.onMsg = function(o, s) {
return n(t, void 0, Promise, function() {
var t, n, l;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant hand over msg");
(t = s).roomView.stopDiscardCountdown();
n = a.proto.pokerface.MsgHandOver.decode(o);
n.playerCardLists.forEach(function(e) {
var o = e, n = e.chairID, i = t.getPlayerByChairID(n);
i.tilesHand = [];
i.addHandTiles(o.cardsOnHand);
});
t.roomView.clearWaitingPlayer();
t.getMyPlayer().playerView.hideOperationButtons();
l = t.getPlayers();
Object.keys(l).forEach(function(e) {
var t = l[e];
t.lastTile = t.tilesHand[t.tilesHand.length - 1];
t.sortHands();
t.hand2Exposed();
});
return [ 4, e.onHandOver(n, t) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
})(o.HandlerMsgHandOverA || (o.HandlerMsgHandOverA = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgHandOver: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2fb2euZqWxPJ4oquznZHMtd", "HandlerMsgHandOver");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../proto/protoGame");
(function(e) {
var t = this;
e.onHandOver = function(e, o) {
return n(t, void 0, void 0, function() {
var t, n, r, s, l;
return i(this, function(i) {
switch (i.label) {
case 0:
if (e.endType === a.proto.mahjong.HandOverType.enumHandOverType_None) return [ 3, 9 ];
t = a.proto.mahjong.HandOverType;
n = 0, r = e.scores.playerScores;
i.label = 1;

case 1:
if (!(n < r.length)) return [ 3, 9 ];
s = r[n];
l = o.getPlayerByChairID(s.targetChairID);
return s.winType !== t.enumHandOverType_Win_SelfDrawn ? [ 3, 3 ] : [ 4, l.playZiMoAnimation() ];

case 2:
i.sent();
return [ 3, 7 ];

case 3:
return s.winType !== t.enumHandOverType_Chucker ? [ 3, 5 ] : [ 4, l.playDianPaoAnimation() ];

case 4:
i.sent();
return [ 3, 7 ];

case 5:
return s.winType !== t.enumHandOverType_Win_Chuck ? [ 3, 7 ] : [ 4, l.playChiChongAnimation() ];

case 6:
i.sent();
i.label = 7;

case 7:
l.playerScore = s;
i.label = 8;

case 8:
n++;
return [ 3, 1 ];

case 9:
o.loadHandResultView(e);
return [ 2 ];
}
});
});
};
e.onMsg = function(o, s) {
return n(t, void 0, Promise, function() {
var t, n, l;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant hand over msg");
(t = s).roomView.stopDiscardCountdown();
t.hideDiscardedTips();
n = a.proto.mahjong.MsgHandOver.decode(o);
n.playerTileLists.forEach(function(e) {
var o = e, n = e.chairID, i = t.getPlayerByChairID(n);
i.tilesHand = [];
i.addHandTiles(o.tilesHand);
i.melds = [];
i.addMelds(o.melds);
});
t.roomView.clearWaitingPlayer();
t.getMyPlayer().playerView.hideOperationButtons();
l = t.getPlayers();
Object.keys(l).forEach(function(e) {
var t = l[e];
t.lastTile = t.tilesHand[t.tilesHand.length - 1];
t.sortHands(!1);
t.hand2Exposed();
});
return [ 4, e.onHandOver(n, t) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
})(o.HandlerMsgHandOver || (o.HandlerMsgHandOver = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGame": "protoGame"
} ],
HandlerMsgKickoutA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3fcfaQwQf5PDoR2ko+ov5E0", "HandlerMsgKickoutA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
return i(this, function(e) {
return [ 2 ];
});
});
};
})(o.HandlerMsgKickoutA || (o.HandlerMsgKickoutA = {}));
cc._RF.pop();
}, {} ],
HandlerMsgKickout: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cf4f1fWAJBDo6T02/s0vGla", "HandlerMsgKickout");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
return i(this, function(e) {
return [ 2 ];
});
});
};
})(o.HandlerMsgKickout || (o.HandlerMsgKickout = {}));
cc._RF.pop();
}, {} ],
HandlerMsgReActionAllowedA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "07b84QdW31GaKDGwuo8MbkR", "HandlerMsgReActionAllowedA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../proto/protoGameA");
(function(e) {
var t = this, o = function(e, t) {
var o = e.allowedActions;
t.allowedReActionMsg = e;
t.allowedActionMsg = null;
t.playerView.skipBtn.visible = !1;
t.playerView.discardBtn.visible = !1;
t.playerView.tipBtn.visible = !0;
var n = a.proto.prunfast.ActionType;
if (0 != (o & n.enumActionType_SKIP)) {
r.Logger.debug("llwant, can skip");
t.playerView.skipBtn.visible = !0;
}
if (0 != (o & n.enumActionType_DISCARD)) {
r.Logger.debug("llwant, can discard");
t.playerView.discardBtn.visible = !0;
}
};
e.onMsg = function(e, s) {
return n(t, void 0, Promise, function() {
var t, n, l;
return i(this, function(i) {
t = a.proto.pokerface.MsgAllowPlayerReAction.decode(e);
n = t.actionChairID;
(l = s.getPlayerByChairID(n)).hideDiscarded();
l.tipCards = null;
l.tipCardsIndex = 0;
if (l.isMe()) {
r.Logger.debug("llwant, my allowed action");
o(t, l);
} else r.Logger.debug("llwant, opponents allowed action");
t.timeoutInSeconds;
s.setWaitingPlayer(l.chairID);
return [ 2 ];
});
});
};
})(o.HandlerMsgReActionAllowedA || (o.HandlerMsgReActionAllowedA = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgReActionAllowed: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "933b4kF8QBB57yW6iIqYjTu", "HandlerMsgReActionAllowed");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lobby/lcore/LCoreExports"), a = e("../PlayerInterface"), s = e("../proto/protoGame");
(function(e) {
var t = this, o = function(e, t) {
var o = e.allowedActions;
t.allowedReActionMsg = e;
t.allowedActionMsg = null;
var n = t.playerView, i = !1;
t.waitSkip = !1;
t.isGuoHuTips = !1;
var l = s.proto.mahjong.ActionType, u = [];
if (0 != (o & l.enumActionType_CHOW)) {
r.Logger.debug("llwant, can chow");
i = !0;
u.push(a.ButtonDef.Chow);
}
if (0 != (o & l.enumActionType_PONG)) {
r.Logger.debug("llwant, can peng");
i = !0;
u.push(a.ButtonDef.Pong);
}
if (0 != (o & l.enumActionType_KONG_Exposed)) {
r.Logger.debug("llwant, can concealed kong");
i = !0;
u.push(a.ButtonDef.Kong);
}
if (0 != (o & l.enumActionType_WIN_Chuck)) {
r.Logger.debug("llwant, can win chuck");
i = !0;
u.push(a.ButtonDef.Hu);
}
if (0 != (o & l.enumActionType_SKIP)) {
r.Logger.debug("llwant, can skip");
i = !0;
u.push(a.ButtonDef.Skip);
}
0 != (o & l.enumActionType_WIN_SelfDrawn) && 0 != (o & l.enumActionType_SKIP) && (t.isGuoHuTips = !0);
i && n.showButton(u);
};
e.onMsg = function(e, a) {
return n(t, void 0, Promise, function() {
var t, n, l;
return i(this, function(i) {
t = s.proto.mahjong.MsgAllowPlayerReAction.decode(e);
n = t.actionChairID;
if ((l = a.getPlayerByChairID(n)).isMe()) {
r.Logger.debug("llwant, my allowed action");
o(t, l);
} else r.Logger.debug("llwant, opponents allowed action");
a.setWaitingPlayer(l.chairID);
return [ 2 ];
});
});
};
})(o.HandlerMsgReActionAllowed || (o.HandlerMsgReActionAllowed = {}));
cc._RF.pop();
}, {
"../../lobby/lcore/LCoreExports": "LCoreExports",
"../PlayerInterface": "PlayerInterface",
"../proto/protoGame": "protoGame"
} ],
HandlerMsgRestoreA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9f2e2X5oUdATZv52i/Aggn7", "HandlerMsgRestoreA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGameA");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, a, s, l, u, c, d, h, p, f, g, y;
return i(this, function(i) {
t = r.proto.pokerface.MsgRestore.decode(e);
n = o.getPlayers();
Object.keys(n).forEach(function(e) {
n[e].resetForNewHand();
});
a = t.msgDeal;
o.bankerChairID = a.bankerChairID;
o.windFlowerID = a.windFlowerID;
o.markup = a.markup;
s = a.playerCardLists;
for (l = 0, u = s; l < u.length; l++) {
c = u[l];
d = c;
h = c.chairID;
(p = o.getPlayerByChairID(h)).isMe() ? p.addHandTiles(d.cardsOnHand) : p.tileCountInHand = d.cardCountOnHand;
if (void 0 !== d.discardedHands && (f = d.discardedHands.length) > 0 && void 0 !== (g = d.discardedHands[f - 1])) {
void 0 !== (y = g.cards) && y.length > 0 && p.addDiscardedTiles(y);
p.discarded2UI();
}
p.chairID === o.bankerChairID && o.setWaitingPlayer(p.chairID);
}
o.getMyPlayer().sortHands();
Object.keys(n).forEach(function(e) {
var i = n[e];
i.hand2UI(!0);
i.chairID === t.prevActionChairID && o.setWaitingPlayer(i.chairID);
});
return [ 2 ];
});
});
};
})(o.HandlerMsgRestoreA || (o.HandlerMsgRestoreA = {}));
cc._RF.pop();
}, {
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgRestore: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "df379siWMhBfLO4YTI+qBzX", "HandlerMsgRestore");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGame");
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
var t, n, a, s, l, u, c, d, h, p, f, g, y, m;
return i(this, function(i) {
t = r.proto.mahjong.MsgRestore.decode(e);
n = o.getPlayers();
Object.keys(n).forEach(function(e) {
n[e].resetForNewHand();
});
a = t.msgDeal;
o.bankerChairID = a.bankerChairID;
o.isContinuousBanker = a.isContinuousBanker;
o.windFlowerID = a.windFlowerID;
o.tilesInWall = a.tilesInWall;
o.markup = a.markup;
for (s = 0, l = t.readyHandChairs; s < l.length; s++) {
f = l[s];
(g = o.getPlayerByChairID(f)).richiIconShow(!0);
}
o.updateTilesInWallUI();
o.setRoundMask();
o.setBankerFlag();
o.cleanUI();
u = a.playerTileLists;
for (c = 0, d = u; c < d.length; c++) {
h = d[c];
p = h;
f = h.chairID;
(g = o.getPlayerByChairID(f)).isMe() ? g.addHandTiles(p.tilesHand) : g.tileCountInHand = p.tileCountInHand;
g.addFlowerTiles(p.tilesFlower);
g.addDiscardedTiles(p.tilesDiscard);
g.addMelds(p.melds);
g.chairID === o.bankerChairID && o.setWaitingPlayer(g.chairID);
}
y = o.getMyPlayer();
m = t.isMeNewDraw;
y.sortHands(m);
Object.keys(n).forEach(function(e) {
var i = n[e];
i.hand2UI(!m);
i.flower2UI();
var r = !1;
if (i.chairID === t.lastDiscaredChairID) {
o.setWaitingPlayer(i.chairID);
r = !0;
}
i.discarded2UI(r, t.waitDiscardReAction);
});
return [ 2 ];
});
});
};
})(o.HandlerMsgRestore || (o.HandlerMsgRestore = {}));
cc._RF.pop();
}, {
"../proto/protoGame": "protoGame"
} ],
HandlerMsgRoomUpdateA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4627bpD4C1MULbEGMl5vPBw", "HandlerMsgRoomUpdateA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGameA");
(function(e) {
var t = this, o = function(e, t) {
var o = t.scoreRecords;
e.scoreRecords = o;
if (null !== o && o.length > 0) for (var n = [ 0, 0, 0, 0 ], i = 0, r = o; i < r.length; i++) for (var a = r[i].playerRecords, s = 0; s < 3; s++) {
var l = a[s];
if (void 0 !== l && null !== l) {
var u = l.score, c = l.userID, d = e.getPlayerByUserID(c);
n[s] = n[s] + u;
d.totalScores = n[s];
}
}
};
e.onMsg = function(e, a) {
return n(t, void 0, Promise, function() {
var t, n, s, l, u, c, d, h, p, f, g, y, m, b, v, w, C, R, I, T, _;
return i(this, function(i) {
t = r.proto.pokerface.MsgRoomInfo.decode(e);
n = t.players;
a.state = t.state;
a.ownerID = t.ownerID;
void 0 !== t.handStartted && t.handStartted >= 0 && (a.handStartted = t.handStartted);
s = 0;
a.showRoomNumber();
l = {};
u = [];
for (c = 0, d = n; c < d.length; c++) {
C = d[c];
l[C.userID] = C;
}
h = a.getPlayers();
Object.keys(h).forEach(function(e) {
var t = h[e];
void 0 !== l[t.userID] && l[t.userID].chairID === t.chairID || u.push(t);
});
for (p = 0, f = u; p < f.length; p++) {
R = f[p];
a.removePlayer(R.userID);
R.unbindView();
s = -1;
}
for (g = 0, y = n; g < y.length; g++) {
C = y[g];
if (a.isMe(C.userID)) {
if (null === (R = a.getPlayerByChairID(C.chairID))) a.createMyPlayer(C); else if (R.chairID !== C.chairID) {
a.removePlayer(R.userID);
R.unbindView();
a.createMyPlayer(C);
}
break;
}
}
m = a.getMyPlayer();
b = m.state;
for (v = 0, w = n; v < w.length; v++) {
C = w[v];
if (null === (R = a.getPlayerByChairID(C.chairID))) {
a.createPlayerByInfo(C);
0 === s && (s = 1);
} else R.updateByPlayerInfo(C);
}
I = r.proto.pokerface.RoomState;
T = r.proto.pokerface.PlayerState;
t.state === I.SRoomWaiting && (m.state !== T.PSReady ? a.showOrHideReadyButton(!0) : b !== T.PSReady && a.showOrHideReadyButton(!1));
a.onUpdateStatus(t.state);
o(a, t);
_ = a.getPlayers();
Object.keys(_).forEach(function(e) {
var t = _[e];
(0, t.playerView.onUpdateStatus[t.state])(a.state);
t.playerView.showOwner();
});
return [ 2 ];
});
});
};
})(o.HandlerMsgRoomUpdateA || (o.HandlerMsgRoomUpdateA = {}));
cc._RF.pop();
}, {
"../proto/protoGameA": "protoGameA"
} ],
HandlerMsgRoomUpdate: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "90af9DbqGJP77s0I8vaf8h8", "HandlerMsgRoomUpdate");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../proto/protoGame");
(function(e) {
var t = this, o = function(e, t) {
var o = t.scoreRecords;
e.scoreRecords = o;
if (void 0 !== o && o.length > 0) for (var n = [ 0, 0, 0, 0 ], i = 0, r = o; i < r.length; i++) for (var a = r[i].playerRecords, s = 0; s < 3; s++) {
var l = a[s];
if (void 0 !== l && null !== l) {
var u = l.score, c = l.userID, d = e.getPlayerByUserID(c);
n[s] = n[s] + u;
d.totalScores = n[s];
}
}
};
e.onMsg = function(e, a) {
return n(t, void 0, Promise, function() {
var t, n, s, l, u, c, d, h, p, f, g, y, m, b, v, w, C, R, I, T, _;
return i(this, function(i) {
t = r.proto.mahjong.MsgRoomInfo.decode(e);
n = t.players;
a.state = t.state;
a.ownerID = t.ownerID;
void 0 !== t.handStartted && t.handStartted >= 0 && (a.handStartted = t.handStartted);
s = 0;
a.showRoomNumber();
l = {};
u = [];
for (c = 0, d = n; c < d.length; c++) {
C = d[c];
l[C.userID] = C;
}
h = a.getPlayers();
Object.keys(h).forEach(function(e) {
var t = h[e];
void 0 !== l[t.userID] && l[t.userID].chairID === t.chairID || u.push(t);
});
for (p = 0, f = u; p < f.length; p++) {
R = f[p];
a.removePlayer(R.userID);
R.unbindView();
s = -1;
}
for (g = 0, y = n; g < y.length; g++) {
C = y[g];
if (a.isMe(C.userID)) {
if (null === (R = a.getPlayerByChairID(C.chairID))) a.createMyPlayer(C); else if (R.chairID !== C.chairID) {
a.removePlayer(R.userID);
R.unbindView();
a.createMyPlayer(C);
}
break;
}
}
m = a.getMyPlayer();
b = m.state;
for (v = 0, w = n; v < w.length; v++) {
C = w[v];
if (null === (R = a.getPlayerByChairID(C.chairID))) {
a.createPlayerByInfo(C);
0 === s && (s = 1);
} else R.updateByPlayerInfo(C);
}
I = r.proto.mahjong.RoomState;
T = r.proto.mahjong.PlayerState;
t.state === I.SRoomWaiting && (m.state !== T.PSReady ? a.showOrHideReadyButton(!0) : b !== T.PSReady && a.showOrHideReadyButton(!1));
a.onUpdateStatus(t.state);
o(a, t);
_ = a.getPlayers();
Object.keys(_).forEach(function(e) {
var t = _[e];
(0, t.playerView.onUpdateStatus[t.state])(a.state);
t.playerView.showOwner();
});
return [ 2 ];
});
});
};
})(o.HandlerMsgRoomUpdate || (o.HandlerMsgRoomUpdate = {}));
cc._RF.pop();
}, {
"../proto/protoGame": "protoGame"
} ],
HandlerMsgShowTipsA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6db8dTyNKRCnbgBBMLjkqJc", "HandlerMsgShowTipsA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
return i(this, function(e) {
return [ 2 ];
});
});
};
})(o.HandlerMsgShowTipsA || (o.HandlerMsgShowTipsA = {}));
cc._RF.pop();
}, {} ],
HandlerMsgShowTips: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3dbc42mANNCHJzjy+yvu4Us", "HandlerMsgShowTips");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
return i(this, function(e) {
return [ 2 ];
});
});
};
})(o.HandlerMsgShowTips || (o.HandlerMsgShowTips = {}));
cc._RF.pop();
}, {} ],
HandlerMsgUpdateLocationA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0bb12A57dxJyLIY2kEvgPQw", "HandlerMsgUpdateLocationA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
return i(this, function(e) {
return [ 2 ];
});
});
};
})(o.HandlerMsgUpdateLocationA || (o.HandlerMsgUpdateLocationA = {}));
cc._RF.pop();
}, {} ],
HandlerMsgUpdateLocation: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "054c161YOtBTLqf6MGYByfz", "HandlerMsgUpdateLocation");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
return i(this, function(e) {
return [ 2 ];
});
});
};
})(o.HandlerMsgUpdateLocation || (o.HandlerMsgUpdateLocation = {}));
cc._RF.pop();
}, {} ],
HandlerMsgUpdatePropCfgA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8b515RS4zpF3oEDMnwS2MOy", "HandlerMsgUpdatePropCfgA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
return i(this, function(e) {
return [ 2 ];
});
});
};
})(o.HandlerMsgUpdatePropCfgA || (o.HandlerMsgUpdatePropCfgA = {}));
cc._RF.pop();
}, {} ],
HandlerMsgUpdatePropCfg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5914dHhgx5PSIFlVIFyyFYq", "HandlerMsgUpdatePropCfg");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
var t = this;
e.onMsg = function(e, o) {
return n(t, void 0, Promise, function() {
return i(this, function(e) {
return [ 2 ];
});
});
};
})(o.HandlerMsgUpdatePropCfg || (o.HandlerMsgUpdatePropCfg = {}));
cc._RF.pop();
}, {} ],
JoinClubView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "889dbak3x5CnaMlIRTs7aK2", "JoinClubView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../lcore/LCoreExports"), a = e("../../proto/protoLobby"), s = e("./ClubRequestError"), l = cc._decorator.ccclass, u = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.numbers = [];
return t;
}
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "joinClub").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.view.getChild("buttonCS").onClick(this.onResetBtnClick, this);
this.view.getChild("buttonSC").onClick(this.onBackBtnClick, this);
for (var t = function(t) {
o.view.getChild("button" + t).onClick(function() {
e.onInputButton(t);
}, o);
}, o = this, n = 0; n < 10; n++) t(n);
for (n = 1; n < 6; n++) {
var i = this.view.getChild("number" + n);
this.numbers.push(i);
}
this.hintText = this.view.getChild("hintText");
};
t.prototype.onResetBtnClick = function() {
this.numbers.forEach(function(e) {
e.text = "";
});
this.clubNumber = "";
this.hintText.visible = !0;
};
t.prototype.onBackBtnClick = function() {
if (void 0 !== this.clubNumber) {
var e = this.clubNumber.length - 1;
if (e >= 0 && e < 6) {
this.numbers[e].text = "";
this.clubNumber = this.clubNumber.substring(0, e);
"" === this.clubNumber ? this.hintText.visible = !0 : this.hintText.visible = !1;
}
}
};
t.prototype.onInputButton = function(e) {
var t = 0;
void 0 !== this.clubNumber && (t = this.clubNumber.length);
if (t < 5) {
var o = t, n = this.numbers[o];
void 0 !== n ? n.text = " " + e : r.Logger.error('"JoinRoomView:onInputButton, index ' + o + ' out of range"');
void 0 !== this.clubNumber ? this.clubNumber = "" + this.clubNumber + e : this.clubNumber = "" + e;
"" === this.clubNumber ? this.hintText.visible = !0 : this.hintText.visible = !1;
}
this.joinRoomCheck(this.clubNumber);
};
t.prototype.joinRoomCheck = function(e) {
5 === e.length && this.requestJoinClub(e);
};
t.prototype.requestJoinClub = function(e) {
var t = this, o = r.DataStore.getString(r.KeyConstants.TOKEN, ""), n = "" + r.LEnv.rootURL + r.LEnv.joinClub + "?&tk=" + o + "&clubNumber=" + e;
this.clubRequest(n, function(e, o) {
var n = e.response, i = a.proto.club.MsgClubReply.decode(n);
if (i.replyCode === a.proto.club.ClubReplyCode.RCOperation) ; else if (i.replyCode === a.proto.club.ClubReplyCode.RCError) {
var l = a.proto.club.MsgCubOperGenericReply.decode(i.content);
l.errorCode === a.proto.club.ClubOperError.CERR_OK ? r.Dialog.showDialog("已经发送申请，请等待结果", function() {
t.destroy();
}, function() {}) : s.ClubRequestError.showErrMsg(l.errorCode);
}
});
};
t.prototype.clubRequest = function(e, t) {
if (null === e) return null;
r.Logger.debug("clubRequest url = ", e);
r.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t = i([ l ], t);
}(cc.Component);
o.JoinClubView = u;
cc._RF.pop();
}, {
"../../lcore/LCoreExports": "LCoreExports",
"../../proto/protoLobby": "protoLobby",
"./ClubRequestError": "ClubRequestError"
} ],
JoinRoom: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c0cd6jwmK9Ge58EkyhDo+Za", "JoinRoom");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../lcore/LCoreExports"), a = cc._decorator.ccclass, s = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.roomNumber = "";
return t;
}
t.prototype.onLoad = function() {
this.lm = this.getComponent("LobbyModule");
this.lm.loader.fguiAddPackage("lobby/fui_join_room/lobby_join_room");
var e = fgui.UIPackage.createObject("lobby_join_room", "joinRoom").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.initView();
this.win.show();
};
t.prototype.onDestroy = function() {
this.win.hide();
this.win.dispose();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseBtnClick, this);
this.view.getChild("buttonCS").onClick(this.onResetBtnClick, this);
this.view.getChild("buttonSC").onClick(this.onBackBtnClick, this);
for (var t = function(t) {
o.view.getChild("button" + t).onClick(function() {
e.onInputButton(t);
}, o);
}, o = this, n = 0; n < 10; n++) t(n);
this.numbers = [];
for (n = 0; n < 6; n++) {
var i = this.view.getChild("number" + (n + 1));
this.numbers.push(i);
}
this.hintText = this.view.getChild("hintText").asTextField;
};
t.prototype.onCloseBtnClick = function() {
this.destroy();
};
t.prototype.onResetBtnClick = function() {
r.Logger.debug("onResetBtnClick");
for (var e = 0; e < 6; e++) this.numbers[e].text = "";
this.roomNumber = "";
this.hintText.visible = !0;
};
t.prototype.onBackBtnClick = function() {
r.Logger.debug("onBackBtnClick");
var e = this.roomNumber.length;
0 !== e && (this.numbers[e - 1].text = "");
this.roomNumber = this.roomNumber.substring(0, e - 1);
"" === this.roomNumber ? this.hintText.visible = !0 : this.hintText.visible = !1;
};
t.prototype.onInputButton = function(e) {
r.Logger.debug("onInputButton, input:" + e);
var t = this.roomNumber.length;
if (t < 6) {
this.numbers[t].text = "" + e;
this.roomNumber = "" + this.roomNumber + e;
"" === this.roomNumber ? this.hintText.visible = !0 : this.hintText.visible = !1;
}
this.joinRoomCheck(this.roomNumber);
};
t.prototype.joinRoomCheck = function(e) {
if (6 === e.length) {
this.lm.requetJoinRoom(e);
this.win.hide();
this.win.dispose();
this.destroy();
}
};
return t = i([ a ], t);
}(cc.Component);
o.JoinRoom = s;
cc._RF.pop();
}, {
"../lcore/LCoreExports": "LCoreExports"
} ],
KeyConstants: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b70369MhoJM8YmZuJmQDJsJ", "KeyConstants");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
e.TOKEN = "token";
e.USER_ID = "userID";
e.NICK_NAME = "nickName";
e.ROOM_INFO_DATA = "roomInfoData";
e.HEAL_IMG_URL = "headImgUrl";
e.ACCOUNT = "account";
e.SEX = "sex";
e.DIAMOND = "diamond";
e.SOUND_VOLUME = "soundVolume";
e.MUSIC_VOLUME = "musicVolume";
e.ADAPTIVE_PHONE_KEY = "newIPhone";
})(o.KeyConstants || (o.KeyConstants = {}));
cc._RF.pop();
}, {} ],
LCoreExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7d4289950pKn5S/HwnC9m/3", "LCoreExports");
function n(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
}
Object.defineProperty(o, "__esModule", {
value: !0
});
n(e("./DataStore"));
n(e("./Dialog"));
n(e("./HTTP"));
n(e("./LEnv"));
n(e("./Logger"));
n(e("./WebsocketWrapper"));
n(e("./PromiseDeferred"));
n(e("./LDataType"));
n(e("./WS"));
n(e("./MsgQueue"));
n(e("./AnimationMgr"));
n(e("./Enum"));
n(e("./SoundMgr"));
n(e("./CommonFunction"));
n(e("./KeyConstants"));
cc._RF.pop();
}, {
"./AnimationMgr": "AnimationMgr",
"./CommonFunction": "CommonFunction",
"./DataStore": "DataStore",
"./Dialog": "Dialog",
"./Enum": "Enum",
"./HTTP": "HTTP",
"./KeyConstants": "KeyConstants",
"./LDataType": "LDataType",
"./LEnv": "LEnv",
"./Logger": "Logger",
"./MsgQueue": "MsgQueue",
"./PromiseDeferred": "PromiseDeferred",
"./SoundMgr": "SoundMgr",
"./WS": "WS",
"./WebsocketWrapper": "WebsocketWrapper"
} ],
LDataType: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e6ee7+D/TJKpLHlzTmmm4k5", "LDataType");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
return function() {};
}();
o.Record = n;
var i = function() {
return function() {};
}();
o.UserInfo = i;
var r = function() {
return function() {};
}();
o.RoomInfo = r;
(function(e) {
e[e.Normal = 0] = "Normal";
e[e.Form_Club = 1] = "Form_Club";
e[e.Form_Club_Setting = 2] = "Form_Club_Setting";
})(o.NewRoomViewPath || (o.NewRoomViewPath = {}));
cc._RF.pop();
}, {} ],
LEnv: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3669bIPWAtLFZCkF4/quXHd", "LEnv");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
e.VER_STR = "v1.0.0";
e.updateQuery = "/lobby/uuid/upgradeQuery";
e.updateDownload = "http://localhost:8080";
e.gameWebsocketMonkey = "/game/{0}/ws/monkey";
e.gameWebsocketPlay = "/game/{0}/ws/play";
e.rootURL = "https://www.llwant.com";
e.gameHost = "wss://www.llwant.com";
e.quicklyLogin = "/lobby/uuid/quicklyLogin";
e.accountLogin = "/lobby/uuid/accountLogin";
e.wxLogin = "/lobby/uuid/wxLogin";
e.nativeWxLogin = "/lobby/uuid/nativeWxLogin?code=";
e.wxShareInfo = "/lobby/uuid/getShareInfo";
e.register = "/lobby/uuid/register";
e.chat = "/lobby/uuid/chat";
e.lobbyWebsocket = "wss://www.llwant.com/lobby/uuid/ws";
e.createRoom = "/lobby/uuid/createRoom";
e.loadRoomPriceCfgs = "/lobby/uuid/loadPrices";
e.requestRoomInfo = "/lobby/uuid/requestRoomInfo";
e.lrproom = "/lobby/uuid/lrproom";
e.lrprecord = "/lobby/uuid/lrprecord";
e.loadMails = "/lobby/uuid/loadMails";
e.setMailRead = "/lobby/uuid/setMailRead";
e.deleteMail = "/lobby/uuid/deleteMail";
e.receiveAttachment = "/lobby/uuid/receiveAttachment";
e.createClub = "/lobby/uuid/createClub";
e.loadMyClubs = "/lobby/uuid/loadMyClubs";
e.deleteClub = "/lobby/uuid/disbandClub";
e.joinClub = "/lobby/uuid/joinClub";
e.quitClub = "/lobby/uuid/quitClub";
e.loadClubMembers = "/lobby/uuid/loadClubMembers";
e.joinApproval = "/lobby/uuid/joinApproval";
e.loadClubEvents = "/lobby/uuid/loadClubEvents";
e.loadClubRooms = "/lobby/uuid/loadClubRooms";
e.loadMyApplyEvent = "/lobby/uuid/loadMyApplyEvent";
e.renameClub = "/lobby/uuid/renameClub";
e.kickOut = "/lobby/uuid/kickOut";
e.changeRole = "/lobby/uuid/changeRole";
e.loadClubMgrs = "/lobby/uuid/loadClubMgrs";
e.loadClub = "/lobby/uuid/loadClub";
e.createClubRoom = "/lobby/uuid/createClubRoom";
e.deleteClubRoom = "/lobby/uuid/deleteClubRoom";
e.allowMemberCreateRoom = "/lobby/uuid/allowMemberCreateRoom";
e.setRoomOptions = "/lobby/uuid/setRoomOptions";
e.cfmt = function(e) {
for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
return e.replace(/{(\d+)}/g, function(e, o) {
return "undefined" != typeof t[o] ? t[o] : e;
});
};
})(o.LEnv || (o.LEnv = {}));
cc._RF.pop();
}, {} ],
LInterfaceExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ede4508kyVJZ4cs9IF4FElp", "LInterfaceExports");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
})(e("./RoomHost"));
cc._RF.pop();
}, {
"./RoomHost": "RoomHost"
} ],
LMsgCenter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "404aaqwe/VNsJp7Kp7U+W+M", "LMsgCenter");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("./lcore/LCoreExports"), a = e("./proto/protoLobby"), s = function() {
function e(e, t, o) {
this.retry = !1;
this.connectErrorCount = 0;
this.url = e;
this.component = t;
this.lobbyModule = o;
this.eventTarget = new cc.EventTarget();
}
e.prototype.start = function() {
return n(this, void 0, Promise, function() {
var e, t;
return i(this, function(o) {
switch (o.label) {
case 0:
r.Logger.debug("LMsgCenter.start");
e = !0;
o.label = 1;

case 1:
return e ? [ 4, this.connectServer() ] : [ 3, 6 ];

case 2:
o.sent();
r.Logger.debug("MsgCenter, retry:", this.retry);
this.connectErrorCount++;
if (null !== this.ws) {
t = this.ws;
this.ws = null;
t.ww.close();
}
if (this.retry) return [ 3, 3 ];
e = !1;
return [ 3, 5 ];

case 3:
r.Logger.trace("Wait 3 seconds to retry, connectErrorCount:" + this.connectErrorCount);
return [ 4, this.waitSecond(3) ];

case 4:
o.sent();
o.label = 5;

case 5:
return [ 3, 1 ];

case 6:
return [ 2 ];
}
});
});
};
e.prototype.destory = function() {
this.eventTarget.emit("destroy");
};
e.prototype.connectServer = function() {
return n(this, void 0, Promise, function() {
var e, t, o, n, s, l;
return i(this, function(i) {
switch (i.label) {
case 0:
e = a.proto.lobby.MessageCode;
t = {
comp: this.component,
destroyListener: this.eventTarget,
startPing: !0,
pingFrequency: 3,
pingPacketProvider: function(t) {
var o = {
Ops: e.OPPing,
Data: t
};
return a.proto.lobby.LobbyMessage.encode(o).toArrayBuffer();
}
};
o = {
pingCmd: e.OPPing,
pongCmd: e.OPPong,
decode: a.proto.lobby.LobbyMessage.decode,
encode: a.proto.lobby.LobbyMessage.encode
};
n = {};
s = new r.MsgQueue(n);
l = new r.WS(this.url, s, t, o);
this.mq = s;
this.ws = l;
return [ 4, this.waitConnect() ];

case 1:
if (0 !== i.sent()) {
this.retry = !0;
return [ 2 ];
}
r.Logger.trace("LMsgCenter connect success");
return [ 4, this.pumpMsg() ];

case 2:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.waitSecond = function(e) {
return n(this, void 0, Promise, function() {
var t = this;
return i(this, function(o) {
return [ 2, new Promise(function(o) {
t.component.scheduleOnce(function() {
o();
}, e);
}) ];
});
});
};
e.prototype.waitConnect = function() {
return n(this, void 0, Promise, function() {
var e;
return i(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.mq.waitMsg() ];

case 1:
e = t.sent();
r.Logger.debug("Game.waitConnect, mq.waitMsg return:", e);
return e.mt === r.MsgType.wsOpen ? [ 2, 0 ] : [ 2, -1 ];
}
});
});
};
e.prototype.pumpMsg = function() {
return n(this, void 0, Promise, function() {
var e, t;
return i(this, function(o) {
switch (o.label) {
case 0:
e = !0;
o.label = 1;

case 1:
return e ? [ 4, this.mq.waitMsg() ] : [ 3, 3 ];

case 2:
if ((t = o.sent()).mt === r.MsgType.quit) return [ 3, 3 ];
if (t.mt === r.MsgType.wsData) this.dispatchWeboscketMessage(t.data); else if (t.mt === r.MsgType.wsClosed || t.mt === r.MsgType.wsError) {
this.retry = !0;
e = !1;
}
return [ 3, 1 ];

case 3:
return [ 2 ];
}
});
});
};
e.prototype.dispatchWeboscketMessage = function(e) {
r.Logger.trace("msgCenter.dispatchWeboscketMessage Ops:", e.Ops);
var t = e.Ops;
if (t !== a.proto.lobby.MessageCode.OPConnectReply) null !== this.lobbyModule && this.lobbyModule.eventTarget.emit("" + t, e.Data); else {
var o = a.proto.lobby.MsgWebsocketConnectReply.decode(e.Data);
r.Logger.debug("MsgCenter websocket connect result:", o.result);
}
};
return e;
}();
o.LMsgCenter = s;
cc._RF.pop();
}, {
"./lcore/LCoreExports": "LCoreExports",
"./proto/protoLobby": "protoLobby"
} ],
LobbyError: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "02c87oYJ3dBkr29RoH9e6KP", "LobbyError");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../proto/protoLobby");
(function(e) {
var t, o = ((t = {})[n.proto.lobby.MsgError.ErrSuccess] = "操作成功", t[n.proto.lobby.MsgError.ErrDecode] = "解码错误", 
t[n.proto.lobby.MsgError.ErrEncode] = "编码错误", t[n.proto.lobby.MsgError.ErrRoomExist] = "房间已经存在", 
t[n.proto.lobby.MsgError.ErrNoRoomConfig] = "没有房间配置", t[n.proto.lobby.MsgError.ErrServerIsFull] = "服务器已经满", 
t[n.proto.lobby.MsgError.ErrDecodeRoomConfig] = "解码房间配置错误", t[n.proto.lobby.MsgError.ErrRoomNotExist] = "房间不存在", 
t[n.proto.lobby.MsgError.ErrDatabase] = "数据库错误", t[n.proto.lobby.MsgError.ErrRequestGameServerTimeOut] = "请求游戏服务器超时", 
t[n.proto.lobby.MsgError.ErrWaitGameServerSN] = "分配的序列号错误", t[n.proto.lobby.MsgError.ErrRoomIDIsEmpty] = "房间ID为空", 
t[n.proto.lobby.MsgError.ErrNotRoomCreater] = "你不是房间创建者", t[n.proto.lobby.MsgError.ErrGameIsPlaying] = "游戏正在进行中", 
t[n.proto.lobby.MsgError.ErrTokenIsEmpty] = "token为空", t[n.proto.lobby.MsgError.ErrUserIdIsEmpty] = "用户ID为空", 
t[n.proto.lobby.MsgError.ErrRoomCountIsOutOfLimit] = "房间数量已经达到上限", t[n.proto.lobby.MsgError.ErrRoomNumberNotExist] = "你输入的房间号不存在，请确认", 
t[n.proto.lobby.MsgError.ErrGameServerIDNotExist] = "游戏服务器ID不存在", t[n.proto.lobby.MsgError.ErrRoomNumberIsEmpty] = "房间号为空", 
t[n.proto.lobby.MsgError.ErrRequestInvalidParam] = "请求的参数无效", t[n.proto.lobby.MsgError.ErrTakeoffDiamondFailedNotEnough] = "剩余钻石不足", 
t[n.proto.lobby.MsgError.ErrTakeoffDiamondFailedIO] = "数据库IO出错", t[n.proto.lobby.MsgError.ErrTakeoffDiamondFailedRepeat] = "已经扣取钻石", 
t[n.proto.lobby.MsgError.ErrGameServerUnsupportRoomType] = "游戏服务器不支持房间类型", t[n.proto.lobby.MsgError.ErrGameServerRoomExist] = "游戏服务器已经存在这个房间", 
t[n.proto.lobby.MsgError.ErrGameServerNoRoomConfig] = "游戏服务器没有房间配置", t[n.proto.lobby.MsgError.ErrGameServerDecodeRoomConfig] = "游戏服务器解码房间配置错误", 
t[n.proto.lobby.MsgError.ErrGameServerRoomNotExist] = "游戏服务器不存在这个房间", t[n.proto.lobby.MsgError.ErrUserInOtherRoom] = "用户正在别的房间", 
t[n.proto.lobby.MsgError.ErrRoomIsFull] = "你输入的房间已满，无法加入", t[n.proto.lobby.MsgError.ErrUserInBlacklist] = "你已经在黑名单中", 
t[n.proto.lobby.MsgError.ErrClubIDIsEmtpy] = "牌友群ID为空", t[n.proto.lobby.MsgError.ErrRoomPriceCfgNotExist] = "服务器房间价格配置不存在", 
t[n.proto.lobby.MsgError.ErrUserCreateRoomLock] = "正在创建房间中，请稍等...", t[n.proto.lobby.MsgError.ErrGenerateRoomNumber] = "生成房间号失败", 
t[n.proto.lobby.MsgError.ErrIsNeedUpdate] = "需要更新", t[n.proto.lobby.MsgError.ErrOnlyClubCreatorOrManagerAllowCreateRoom] = "只有群主或者管理员才允许创建房间", 
t[n.proto.lobby.MsgError.ErrOnlyClubCreatorOrManagerAllowDeleteRoom] = "只有群主或者管理员才允许解散房间", 
t[n.proto.lobby.MsgError.ErrNotClubMember] = "不是牌友圈成员", t);
e.getErrorString = function(e) {
var t = o[e];
return void 0 === t || "" === t ? "Unknow error code: " + e : t;
};
})(o.LobbyError || (o.LobbyError = {}));
cc._RF.pop();
}, {
"../proto/protoLobby": "protoLobby"
} ],
LobbyModule: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f7edaKg6EJEQogELfzNlspB", "LobbyModule");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r, a = cc._decorator.ccclass, s = e("../gamea/GamebExportsA"), l = e("../gameb/GamebExports"), u = e("./GResLoaderImpl"), c = e("./lcore/Dialog"), d = e("./lcore/LCoreExports"), h = e("./lcore/Logger"), p = e("./proto/protoLobby"), f = e("./views/LobbyError"), g = e("./views/LobbyView"), y = e("./views/LoginView");
(function(e) {
e[e.ERR_OK = 0] = "ERR_OK";
e[e.ERR_COMM = -1] = "ERR_COMM";
e[e.ERR_USER_CANCEL = -2] = "ERR_USER_CANCEL";
e[e.ERR_SENT_FAILED = -3] = "ERR_SENT_FAILED";
e[e.ERR_AUTH_DENIED = -4] = "ERR_AUTH_DENIED";
e[e.ERR_UNSUPPORT = -5] = "ERR_UNSUPPORT";
e[e.ERR_BAN = -6] = "ERR_BAN";
})(r || (r = {}));
var m = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.adaptivePhones = [ "iPhone X", "iPhone XS", "iPhone XR", "iPhone XS Max" ];
return t;
}
t.prototype.cleanupGRoot = function() {
var e = [];
fgui.GRoot.inst._children.forEach(function(t) {
t instanceof fgui.Window && e.push(t);
});
e.forEach(function(e) {
e.hide();
e.dispose();
});
fgui.GRoot.inst.removeChildren(0, -1, !0);
};
t.prototype.returnFromGame = function() {
this.cleanupGRoot();
this.gameNode.destroyAllChildren();
this.gameNode.destroy();
delete this.gameNode;
var e = fgui.GRoot.inst.numChildren;
if (e > 0) throw new Error("returnFromGame failed, ui count should be 0, now:" + e);
fgui.GRoot.inst.addChild(this.view);
this.eventTarget.emit("checkRoomInfo");
this.eventTarget.emit("onGameSubRecordShow");
this.eventTarget.emit("onClubViewShow");
};
t.prototype.requetJoinRoom = function(e) {
var t = this, o = d.DataStore.getString(d.KeyConstants.TOKEN, ""), n = "" + d.LEnv.rootURL + d.LEnv.requestRoomInfo + "?&tk=" + o + "&roomNumber=" + e;
h.Logger.trace("joinRoomURL, joinRoomURL:", n);
d.HTTP.hGet(this.eventTarget, n, function(e, o) {
var n = null;
if (null !== o) n = "加入房间错误，错误码:" + o; else if (null === (n = d.HTTP.hError(e))) {
var i = e.response, r = p.proto.lobby.MsgRequestRoomInfoRsp.decode(i);
if (r.result === p.proto.lobby.MsgError.ErrSuccess) t.enterGame(r.roomInfo); else {
var a = f.LobbyError.getErrorString(r.result);
c.Dialog.showDialog(a);
}
}
if (null !== n) {
h.Logger.debug("quickly login failed:", n);
c.Dialog.showDialog(n, function() {});
}
});
};
t.prototype.enterGame = function(e) {
c.Dialog.hidePrompt();
this.eventTarget.emit("enterGameEvent");
var t = {
userID: d.DataStore.getString(d.KeyConstants.USER_ID, "")
}, o = {
roomID: e.roomID,
roomNumber: e.roomNumber,
config: e.config,
gameServerID: e.gameServerID
}, n = e.config, i = JSON.parse(n).modName, r = {
jsonString: "",
userInfo: t,
roomInfo: o,
record: null
};
this.switchToGame(r, i);
};
t.prototype.switchToGame = function(e, t) {
var o = this;
if (void 0 === this.gameNode) {
c.Dialog.showProgress();
if (void 0 !== this.gameLoader && this.gameLoader.name !== t) {
this.gameLoader.unload();
delete this.gameLoader;
}
void 0 === this.gameLoader && (this.gameLoader = new u.GResLoaderImpl(t));
e.loader = this.gameLoader;
e.lm = this;
this.gameLoader.loadResDir(t, function(n) {
h.Logger.debug("gamea load, error:" + n);
c.Dialog.hideProgress();
o.view = fgui.GRoot.inst.getChildAt(0);
fgui.GRoot.inst.removeChild(o.view);
var i = fgui.GRoot.inst.numChildren;
if (i > 0) h.Logger.fatal("switch to game failed, GRoot numChildren not zero:", i); else if (null == n) switch (t) {
case "gamea":
var r = new cc.Node(t);
o.node.addChild(r);
o.gameNode = r;
o.gameNode.addComponent(s.GameModuleA).launch(e);
break;

case "gameb":
var a = new cc.Node(t);
o.node.addChild(a);
o.gameNode = a;
o.gameNode.addComponent(l.GameModule).launch(e);
}
}, function(e) {
c.Dialog.updateProgress(e);
});
} else h.Logger.error("switch to game failed, there is a game running:", this.gameNode.name);
};
t.prototype.onLoad = function() {
var e = this;
d.DataStore.setItem(d.KeyConstants.ADAPTIVE_PHONE_KEY, "0");
cc.sys.platform === cc.sys.WECHAT_GAME && wx.getSystemInfo({
success: function(t) {
h.Logger.debug("wx.getSystemInfo res = ", t);
var o = t.model;
-1 !== e.adaptivePhones.indexOf(o) && d.DataStore.setItem(d.KeyConstants.ADAPTIVE_PHONE_KEY, "1");
}
});
if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID) {
cc.NativeJsFun = function(t) {
e.onJavaCallback(t);
};
cc.CallFromShare = function(t) {
e.onCallFromShare(t);
};
}
};
t.prototype.start = function() {
var e = this;
this.loader = new u.GResLoaderImpl("lobby");
this.eventTarget = new cc.EventTarget();
c.Dialog.initDialogs(this.loader);
this.loader.loadResDir("launch", function(t) {
h.Logger.debug("launch load, error:" + t);
if (null == t) {
e.loginView = e.addComponent(y.LoginView);
e.loadLobbyRes();
}
});
};
t.prototype.loadLobbyRes = function() {
var e = this;
this.loader.loadResDir("lobby", function(t) {
h.Logger.debug("lobby load, error:" + t);
null == t && e.onResLoadedCompleted();
}, function(t) {
e.loginView.updateProgressBar(t);
});
};
t.prototype.onResLoadedCompleted = function() {
this.loader.fguiAddPackage("lobby/fui_create_room/lobby_create_room");
this.loginView.updateCompleted();
};
t.prototype.getAuthRespErrString = function(e) {
switch (e) {
case r.ERR_COMM:
return "ERR_COMM";

case r.ERR_USER_CANCEL:
return "用户取消";

case r.ERR_SENT_FAILED:
return "发送请求失败";

case r.ERR_AUTH_DENIED:
return "用户拒绝";

case r.ERR_UNSUPPORT:
return "不支持错误";

case r.ERR_BAN:
return "ERR_BAN";

default:
return "Unkonw error";
}
};
t.prototype.onJavaCallback = function(e) {
h.Logger.debug("llwant, LobbyModule.onJavaCallback:", e);
if ("" !== e) {
var t = JSON.parse(e);
null !== t ? t.errCode === r.ERR_OK ? t.code && this.eventTarget.emit("onRequestCode", t.code) : c.Dialog.showDialog(this.getAuthRespErrString(t.errCode)) : h.Logger.debug("llwant, LobbyModule.onJavaCallback, authResp === null");
}
};
t.prototype.onCallFromShare = function(e) {
h.Logger.debug("llwant, LobbyModule.onCallFromShare:", e);
var t = this.getUrlParameter("roomType", e), o = this.getUrlParameter("roomNumber", e);
if ("" !== t && "" !== o) {
var n = this.getComponent(g.LobbyView);
void 0 !== n && null !== n && this.eventTarget.emit("onCallFromShare", +t, o);
h.Logger.debug("roomType:" + t + ", roomNumber:" + o);
}
};
t.prototype.getUrlParameter = function(e, t) {
for (var o = t.split("&"), n = o.length, i = 0; i < n; i++) {
var r = o[i].split("=");
if (r[0] === e) return void 0 === r[1] ? "" : decodeURIComponent(r[1]);
}
return "";
};
return t = i([ a ], t);
}(cc.Component);
o.LobbyModule = m;
cc._RF.pop();
}, {
"../gamea/GamebExportsA": "GamebExportsA",
"../gameb/GamebExports": "GamebExports",
"./GResLoaderImpl": "GResLoaderImpl",
"./lcore/Dialog": "Dialog",
"./lcore/LCoreExports": "LCoreExports",
"./lcore/Logger": "Logger",
"./proto/protoLobby": "protoLobby",
"./views/LobbyError": "LobbyError",
"./views/LobbyView": "LobbyView",
"./views/LoginView": "LoginView"
} ],
LobbyView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "30b5aNtr/dNOJxWwlK11YRu", "LobbyView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, r = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../chanelSdk/wxSdk/WeiXinSDkExports"), l = e("../lcore/LCoreExports"), u = e("../LMsgCenter"), c = e("../proto/protoLobby"), d = e("../shareUtil/ShareExports"), h = e("./club/ClubView"), p = e("./EmailView"), f = e("./GameRecordView"), g = e("./JoinRoom"), y = e("./NewRoomView"), m = e("./UserInfoView"), b = cc._decorator.ccclass, v = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onMessage = function(e) {
l.Logger.debug("LobbyView.onMessage");
var t = c.proto.lobby.MsgUpdateUserDiamond.decode(e).diamond;
this.updateDiamond(t);
};
t.prototype.start = function() {
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
var e = s.WeiXinSDK.getLaunchOption().roomNumber;
void 0 !== e && null !== e && this.lm.requetJoinRoom(e);
this.wxShowCallBackFunction = this.wxShowCallBack.bind(this);
wx.onShow(this.wxShowCallBackFunction);
}
};
t.prototype.onLoad = function() {
return r(this, void 0, Promise, function() {
var e, t, o, n, i;
return a(this, function(r) {
switch (r.label) {
case 0:
e = this.getComponent("LobbyModule");
this.lm = e;
(t = e.loader).fguiAddPackage("lobby/fui_bg/lobby_bg_package");
t.fguiAddPackage("lobby/fui/lobby_main");
o = fgui.UIPackage.createObject("lobby_main", "Main").asCom;
fgui.GRoot.inst.addChild(o);
n = l.CommonFunction.setBaseViewInCenter(o);
this.view = o;
"1" === l.DataStore.getString(l.KeyConstants.ADAPTIVE_PHONE_KEY) && (n -= l.CommonFunction.IOS_ADAPTER_WIDTH);
(i = this.view.getChild("bg")).setPosition(-n, 0);
l.CommonFunction.setBgFullScreen(i);
this.lm.eventTarget.on("onCallFromShare", this.onCallFromShare, this);
this.initView();
return [ 4, this.startWebSocket() ];

case 1:
r.sent();
return [ 2 ];
}
});
});
};
t.prototype.onDestroy = function() {
this.lm.eventTarget.off(c.proto.lobby.MessageCode.OPUpdateDiamond + " ", this.onMessageFunc);
this.lm.eventTarget.off(c.proto.lobby.MessageCode.OPMail + " ", this.updateEmailRedPoint);
this.lm.eventTarget.off("checkRoomInfo", this.checkRoomInfo);
this.lm.eventTarget.on("onCallFromShare", this.onCallFromShare);
this.msgCenter.destory();
cc.sys.platform === cc.sys.WECHAT_GAME && wx.offShow(this.wxShowCallBack);
};
t.prototype.updateEmailRedPoint = function() {
this.view.getChild("emailBtn").asCom.getChild("redPoint").visible = !0;
};
t.prototype.updateDiamond = function(e) {
this.diamondText.text = e + " ";
};
t.prototype.wxShowCallBack = function(e) {
var t = e.query.roomNumber;
void 0 !== t && null !== t && this.lm.requetJoinRoom(t);
};
t.prototype.onCallFromShare = function(e, t) {
l.Logger.debug("llwant, LobbyView.onCallFromShare, roomType:" + e + ", roomNumber:" + e);
var o = l.DataStore.getString(l.KeyConstants.ROOM_INFO_DATA);
"" === o ? void 0 !== e && void 0 !== t && this.lm.requetJoinRoom(t) : l.Logger.debug("llwant, jsonStr:", o);
};
t.prototype.initView = function() {
this.view.getChild("clubBtn").onClick(this.onFriendClick, this);
this.view.getChild("btnZJ").onClick(this.openRecordView, this);
this.view.getChild("emailBtn").onClick(this.openEmailView, this);
this.view.getChild("joinRoomBtn").onClick(this.onJoinRoom, this);
this.view.getChild("createRoom").onClick(this.onCreateRoom, this);
this.view.getChild("settingBtn").onClick(this.onSettingBtnClick, this);
this.view.getChild("returnGameBtn").onClick(this.onReturnGameBtnClick, this);
this.view.getChild("activeBtn").onClick(this.onActiveBtnClick, this);
this.view.getChild("hezuoBtn").onClick(this.onHZBtnClick, this);
this.view.getChild("shareBtn").onClick(this.onShareBtnClick, this);
this.view.getChild("loader").onClick(this.openUserInfoView, this);
this.initInfoView();
this.onMessageFunc = this.lm.eventTarget.on(c.proto.lobby.MessageCode.OPUpdateDiamond + " ", this.onMessage, this);
this.lm.eventTarget.on(c.proto.lobby.MessageCode.OPMail + " ", this.updateEmailRedPoint, this);
this.lm.eventTarget.on("checkRoomInfo", this.checkRoomInfo, this);
this.checkRoomInfo();
var e = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getShareRoomNumber", "()Ljava/lang/String;");
l.Logger.debug("llwant, LobbyView.onLoad, roomNumber:", e);
void 0 !== e && "" !== e && this.lm.requetJoinRoom(e);
};
t.prototype.startWebSocket = function() {
return r(this, void 0, Promise, function() {
var e, t;
return a(this, function(o) {
switch (o.label) {
case 0:
e = l.DataStore.getString(l.KeyConstants.TOKEN, "");
t = l.LEnv.lobbyWebsocket + "?&tk=" + e;
this.msgCenter = new u.LMsgCenter(t, this, this.lm);
return [ 4, this.msgCenter.start() ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
t.prototype.onFriendClick = function() {
this.addComponent(h.ClubView);
};
t.prototype.onSettingBtnClick = function() {};
t.prototype.onActiveBtnClick = function() {};
t.prototype.onHZBtnClick = function() {};
t.prototype.onShareBtnClick = function() {
d.Share.shareWebPage("湛江麻将", "点击连接，立即来搓麻将!", "http://llwant1.qianz.com/test/?roomType=&roomNumber=");
};
t.prototype.openRecordView = function() {
this.addComponent(f.GameRecordView);
};
t.prototype.openEmailView = function() {
this.view.getChild("emailBtn").asCom.getChild("redPoint").visible = !1;
this.addComponent(p.EmailView);
};
t.prototype.onJoinRoom = function() {
this.addComponent(g.JoinRoom);
};
t.prototype.onCreateRoom = function() {
this.addComponent(y.NewRoomView).showView(l.NewRoomViewPath.Normal);
};
t.prototype.onReturnGameBtnClick = function() {
var e = l.DataStore.getString(l.KeyConstants.ROOM_INFO_DATA);
l.Logger.debug("jsonStr:", e);
if ("" !== e) try {
var t = JSON.parse(e), o = {
roomID: t.roomID,
roomNumber: t.roomNumber,
config: t.config,
gameServerID: t.gameServerID
};
this.lm.enterGame(o);
} catch (e) {
l.Logger.error("parse config error:", e);
l.DataStore.setItem(l.KeyConstants.ROOM_INFO_DATA, "");
}
};
t.prototype.openUserInfoView = function() {
this.addComponent(m.UserInfoView);
};
t.prototype.initInfoView = function() {
var e = this.view.getChild("name");
if (l.DataStore.hasKey(l.KeyConstants.NICK_NAME)) {
l.DataStore.getString(l.KeyConstants.NICK_NAME).length < 1 ? e.text = "默认用户名字" : e.text = l.DataStore.getString(l.KeyConstants.USER_ID);
}
var t = +l.DataStore.getString(l.KeyConstants.SEX), o = this.view.getChild("loader").asLoader, n = l.DataStore.getString(l.KeyConstants.HEAL_IMG_URL);
l.CommonFunction.setHead(o, n, +t);
var i = this.view.getChild("diamond");
this.diamondText = i;
this.diamondText.text = l.DataStore.getString(l.KeyConstants.DIAMOND);
this.view.getChild("addDiamond").onClick(this.goShop, this);
};
t.prototype.goShop = function() {};
t.prototype.checkRoomInfo = function() {
var e = l.DataStore.getString(l.KeyConstants.ROOM_INFO_DATA);
l.Logger.debug("checkRoomInfo jsonStr:", e);
this.view.getController("inRoom").selectedIndex = "" !== e ? 1 : 0;
};
return t = i([ b ], t);
}(cc.Component);
o.LobbyView = v;
cc._RF.pop();
}, {
"../LMsgCenter": "LMsgCenter",
"../chanelSdk/wxSdk/WeiXinSDkExports": "WeiXinSDkExports",
"../lcore/LCoreExports": "LCoreExports",
"../proto/protoLobby": "protoLobby",
"../shareUtil/ShareExports": "ShareExports",
"./EmailView": "EmailView",
"./GameRecordView": "GameRecordView",
"./JoinRoom": "JoinRoom",
"./NewRoomView": "NewRoomView",
"./UserInfoView": "UserInfoView",
"./club/ClubView": "ClubView"
} ],
Logger: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b956enEyDlP8qa5ukWDePjN", "Logger");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n;
(function(e) {
e[e.TRACE = 0] = "TRACE";
e[e.DEBUG = 1] = "DEBUG";
e[e.WARN = 2] = "WARN";
e[e.ERROR = 3] = "ERROR";
e[e.FATAL = 4] = "FATAL";
e[e.ALL = 5] = "ALL";
})(n || (n = {}));
(function(e) {
e.level = n.ALL;
e.setFilterLevel = function(t) {
e.level = t;
};
e.trace = function(t) {
for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
e.level >= n.TRACE && cc.log.apply(cc, [ t ].concat(o));
};
e.debug = function(t) {
for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
e.level >= n.DEBUG && cc.log.apply(cc, [ t ].concat(o));
};
e.warn = function(t) {
for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
e.level >= n.WARN && cc.warn.apply(cc, [ t ].concat(o));
};
e.error = function(t) {
for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
e.level >= n.ERROR && cc.error.apply(cc, [ t ].concat(o));
};
e.fatal = function(t) {
for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
e.level >= n.FATAL && cc.error.apply(cc, [ t ].concat(o));
};
})(o.Logger || (o.Logger = {}));
cc._RF.pop();
}, {} ],
LoginView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8c055bj1dRGhYv7lhCWTn9p", "LoginView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../chanelSdk/wxSdk/WeiXinSDkExports"), a = e("../lcore/LCoreExports"), s = e("../proto/protoLobby"), l = e("./LobbyView"), u = cc._decorator.ccclass, c = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.button = null;
return t;
}
t.prototype.showLoginView = function() {
var e = this.getComponent("LobbyModule"), t = e.loader;
e.eventTarget.on("onRequestCode", this.onNativeWxLogin, this);
t.fguiAddPackage("launch/fui_login/lobby_login");
var o = fgui.UIPackage.createObject("lobby_login", "login").asCom, n = a.CommonFunction.setBaseViewInCenter(o);
"1" === a.DataStore.getString(a.KeyConstants.ADAPTIVE_PHONE_KEY) && (n -= a.CommonFunction.IOS_ADAPTER_WIDTH);
var i = o.getChild("n1");
i.setPosition(-n, 0);
a.CommonFunction.setBgFullScreen(i);
var r = new fgui.Window();
r.contentPane = o;
r.modal = !0;
this.viewNode = o;
this.win = r;
this.initView();
this.win.show();
cc.sys.platform === cc.sys.WECHAT_GAME ? this.createWxBtn() : a.Logger.debug("not wx platform");
};
t.prototype.updateProgressBar = function(e) {
void 0 !== this.progressBar && null !== this.progressBar && (this.progressBar.value = 100 * e);
if (void 0 !== this.progressText && null !== this.progressText) {
var t = 100 * e;
this.progressText.text = "正在加载" + t.toFixed(0) + "%";
}
};
t.prototype.initView = function() {
this.loginBtn = this.viewNode.getChild("n2");
this.weixinButton = this.viewNode.getChild("n3");
this.progressBar = this.viewNode.getChild("n4").asProgress;
for (var e = 0, t = this.viewNode._children; e < t.length; e++) {
var o = t[e];
a.Logger.debug(o.name);
}
this.progressText = this.viewNode.getChild("progressText").asTextField;
var n = this.viewNode.getChild("gameAdvice"), i = this.viewNode.getChild("text1"), r = this.viewNode.getChild("text2");
this.viewNode.getChild("versionName").text = a.LEnv.VER_STR;
n.text = "健康游戏忠告 : 抵制不良游戏,拒绝盗版游戏.注意自我保护,谨防受骗上当.适度游戏益脑,沉迷游戏伤身.合理安排时间，享受健康生活.";
i.text = "著作权登记号：201925251515";
r.text = "著作权人：深圳市xxx科技有限公司";
this.loginBtn.visible = !1;
this.weixinButton.visible = !1;
this.progressBar.value = 0;
this.loginBtn.onClick(this.onLoginClick, this);
this.weixinButton.onClick(this.onWeixinBtnClick, this);
};
t.prototype.updateCompleted = function() {
this.progressBar.visible = !1;
this.progressText.visible = !1;
this.weixinButton.visible = !0;
this.loginBtn.visible = !0;
};
t.prototype.onLoginClick = function() {
a.Logger.debug("onQuicklyBtnClick");
null !== this.button && this.button.hide();
this.quicklyLogin();
};
t.prototype.onWeixinBtnClick = function() {
cc.sys.platform !== cc.sys.WECHAT_GAME && a.Logger.debug("not wx env");
cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "wxLogin", "()V");
};
t.prototype.quicklyLogin = function() {
var e = this, t = a.DataStore.getString(a.KeyConstants.ACCOUNT, ""), o = "" + a.LEnv.rootURL + a.LEnv.quicklyLogin + "?&account=" + t;
a.Logger.trace("quicklyLogin, quicklyLoginURL:", o);
a.HTTP.hGet(this.eventTarget, o, function(t, o) {
var n = null;
if (null !== o) n = "登录错误，错误码:" + o; else if (null === (n = a.HTTP.hError(t))) {
var i = t.response, r = s.proto.lobby.MsgQuicklyLoginReply.decode(i);
if (0 === r.result) {
a.Logger.debug("quickly login ok, switch to lobbyview");
e.saveQuicklyLoginReply(r);
e.showLobbyView();
} else {
a.Logger.debug("quickly login error, errCode:", r.result);
e.showLoginErrMsg(r.result);
}
}
if (null !== n) {
a.Logger.debug("quickly login failed:", n);
a.Dialog.showDialog(n, function() {});
}
});
};
t.prototype.saveWxLoginReply = function(e) {
a.DataStore.setItem(a.KeyConstants.TOKEN, e.token);
var t = e.lastRoomInfo;
a.DataStore.setItem(a.KeyConstants.ROOM_INFO_DATA, "");
if (void 0 !== t && null !== t) {
var o = {
roomID: t.roomID,
roomNumber: t.roomNumber,
config: t.config,
gameServerID: t.gameServerID
}, n = JSON.stringify(o);
a.DataStore.setItem(a.KeyConstants.ROOM_INFO_DATA, n);
}
var i = e.userInfo;
a.DataStore.setItem(a.KeyConstants.USER_ID, i.userID);
a.DataStore.setItem(a.KeyConstants.NICK_NAME, i.nickName);
a.DataStore.setItem("gender", i.gender);
a.DataStore.setItem("province", i.province);
a.DataStore.setItem("city", i.city);
a.DataStore.setItem(a.KeyConstants.DIAMOND, i.diamond);
a.DataStore.setItem("country", i.country);
a.DataStore.setItem(a.KeyConstants.HEAL_IMG_URL, i.headImgUrl);
a.DataStore.setItem("phone", i.phone);
};
t.prototype.saveQuicklyLoginReply = function(e) {
a.DataStore.setItem(a.KeyConstants.ACCOUNT, e.account);
a.DataStore.setItem(a.KeyConstants.TOKEN, e.token);
var t = e.lastRoomInfo;
a.DataStore.setItem(a.KeyConstants.ROOM_INFO_DATA, "");
if (void 0 !== t && null !== t) {
var o = {
roomID: t.roomID,
roomNumber: t.roomNumber,
config: t.config,
gameServerID: t.gameServerID
}, n = JSON.stringify(o);
a.DataStore.setItem(a.KeyConstants.ROOM_INFO_DATA, n);
}
var i = e.userInfo;
a.DataStore.setItem(a.KeyConstants.USER_ID, i.userID);
a.DataStore.setItem(a.KeyConstants.NICK_NAME, i.nickName);
a.DataStore.setItem("gender", i.gender);
a.DataStore.setItem("province", i.province);
a.DataStore.setItem("city", i.city);
a.DataStore.setItem(a.KeyConstants.DIAMOND, i.diamond);
a.DataStore.setItem("country", i.country);
a.DataStore.setItem(a.KeyConstants.HEAL_IMG_URL, i.headImgUrl);
a.DataStore.setItem("phone", i.phone);
};
t.prototype.showLobbyView = function() {
this.destroy();
this.win.hide();
this.win.dispose();
this.addComponent(l.LobbyView);
};
t.prototype.showLoginErrMsg = function(e) {
var t, o = s.proto.lobby, n = ((t = {})[o.LoginError.ErrLoginSuccess] = "成功", t[o.LoginError.ErrParamDecode] = "解码参数失败", 
t[o.LoginError.ErrDecodeUserInfoFailed] = "解码用户信息失败", t[o.LoginError.ErrParamInvalidCode] = "不合法的微信code", 
t[o.LoginError.ErrParamInvalidEncrypteddata] = "不合法的微信encrypteddata", t[o.LoginError.ErrParamInvalidIv] = "不合法的微信iv", 
t[o.LoginError.ErrWxAuthFailed] = "微信认证失败", t[o.LoginError.ErrParamAccountIsEmpty] = "输入账号不能为空", 
t[o.LoginError.ErrParamPasswordIsEmpty] = "输入密码不能为空", t[o.LoginError.ErrAccountNotExist] = "输入账号不存在", 
t[o.LoginError.ErrAccountNotSetPassword] = "账号没有设置密码，不能登录", t[o.LoginError.ErrPasswordNotMatch] = "密码不匹配，不能登录", 
t)[e];
void 0 !== n && (n = "登录失败");
a.Dialog.showDialog(n);
};
t.prototype.start = function() {
this.showLoginView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
};
t.prototype.createWxBtn = function() {
var e = this, t = cc.size(this.weixinButton.width, this.weixinButton.height), o = cc.view.getFrameSize(), n = cc.winSize, i = o.width / n.width, a = o.height / n.height, s = i < a ? i : a, l = this.weixinButton.x * s, u = this.weixinButton.y * s, c = t.width * s, d = t.height * s;
this.button = wx.createUserInfoButton({
type: "text",
text: "",
style: {
left: l,
top: u,
width: c,
height: d,
lineHeight: 0,
textAlign: "center",
fontSize: 16,
borderRadius: 4
}
});
this.button.onTap(function(t) {
e.button.hide();
r.WeiXinSDK.login(e.wxLogin.bind(e));
});
};
t.prototype.wxLogin = function(e) {
var t = this;
if (e) {
var o = "" + a.LEnv.rootURL + a.LEnv.wxLogin;
a.Logger.debug("wxloginUrl", o);
var n = r.WeiXinSDK.getWxDataMap().wechatLCode, i = r.WeiXinSDK.getWxDataMap().wxUserInfo;
a.Logger.debug("wxUserData:", i);
var l = new s.proto.lobby.MsgWxLogin();
l.code = n;
l.iv = i.iv;
l.encrypteddata = i.encryptedData;
var u = s.proto.lobby.MsgWxLogin.encode(l).toArrayBuffer();
a.HTTP.hPost(this.eventTarget, o, function(e, o) {
var n = null;
if (null !== o) n = "登录错误，错误码:" + o; else if (null === (n = a.HTTP.hError(e))) {
var i = e.response, r = s.proto.lobby.MsgLoginReply.decode(i);
if (0 === r.result) {
a.Logger.debug("wx login ok, switch to lobbyview");
t.saveWxLoginReply(r);
t.showLobbyView();
} else {
a.Logger.debug("wx login error, errCode:", r.result);
t.showLoginErrMsg(r.result);
}
return;
}
if (null !== n) {
a.Logger.debug("wx login failed:", n);
a.Dialog.showDialog(n, function() {});
}
}, "arraybuffer", u);
} else {
a.Logger.error("wxlogin error");
this.button.show();
}
};
t.prototype.onNativeWxLogin = function(e) {
var t = this, o = "" + a.LEnv.rootURL + a.LEnv.nativeWxLogin + e;
a.Logger.debug("wxloginUrl", o);
a.HTTP.hGet(this.eventTarget, o, function(e, o) {
var n = null;
if (null !== o) n = "登录错误，错误码:" + o; else if (null === (n = a.HTTP.hError(e))) {
var i = e.response, r = s.proto.lobby.MsgLoginReply.decode(i);
if (0 === r.result) {
a.Logger.debug("wx login ok, switch to lobbyview");
t.saveWxLoginReply(r);
t.showLobbyView();
} else {
a.Logger.debug("wx login error, errCode:", r.result);
t.showLoginErrMsg(r.result);
}
return;
}
if (null !== n) {
a.Logger.debug("wx login failed:", n);
a.Dialog.showDialog(n, function() {});
}
});
};
return t = i([ u ], t);
}(cc.Component);
o.LoginView = c;
cc._RF.pop();
}, {
"../chanelSdk/wxSdk/WeiXinSDkExports": "WeiXinSDkExports",
"../lcore/LCoreExports": "LCoreExports",
"../proto/protoLobby": "protoLobby",
"./LobbyView": "LobbyView"
} ],
MemberManagerView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "68b3d3WXX5MqY13pIDQhh3z", "MemberManagerView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../../lcore/LCoreExports"), a = e("../../../proto/protoLobby"), s = e("../ClubRequestError"), l = e("./MemberOperationDialog"), u = cc._decorator.ccclass, c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.delMember = function(e) {
this.deleteMember(e, 0);
};
t.prototype.setClubInfo = function(e) {
this.clubInfo = e;
this.updateUIByClubManager();
this.loadMember(0);
this.win.show();
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "memberManager").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.updateUIByClubManager = function() {
var e = this.isManagerIncludeOwner();
this.setOperationBtnVisible(e);
};
t.prototype.setOperationBtnVisible = function(e) {
var t = this.view.getController("isManager");
t.selectedIndex = !1 === e ? 0 : 1;
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.memberListBtn = this.view.getChild("memberListBtn").asButton;
this.memberListBtn.onClick(this.onMemberListBtnClick, this);
this.applyListBtn = this.view.getChild("applyListBtn").asButton;
this.applyListBtn.onClick(this.onApplyListBtnClick, this);
this.deleteMemberBtn = this.view.getChild("deleteMemberBtn").asButton;
this.deleteMemberBtn.onClick(this.onDeleteMemberBtnClick, this);
this.memberList = this.view.getChild("memberList").asList;
this.memberApplyList = this.view.getChild("memberApplyList").asList;
this.memberDeleteList = this.view.getChild("deleteMemberList").asList;
this.memberList.itemRenderer = function(t, o) {
e.renderMemberListItem(t, o);
};
this.memberList.setVirtual();
this.memberApplyList.itemRenderer = function(t, o) {
e.renderApplyEventsListItem(t, o);
};
this.memberApplyList.setVirtual();
this.memberDeleteList.itemRenderer = function(t, o) {
e.renderDeleteMemberListItem(t, o);
};
this.memberDeleteList.setVirtual();
};
t.prototype.renderMemberListItem = function(e, t) {
var o, n = this;
void 0 !== this.members && (o = this.members[e]);
var i = t.asCom.getChild("owner"), a = t.asCom.getChild("name"), s = t.asCom.getChild("id"), l = t.asCom.getChild("loader").asLoader;
r.CommonFunction.setHead(l, o.displayInfo.headIconURL);
if (void 0 !== o) {
s.text = "ID : " + o.userID;
var u = "" === o.displayInfo.nick ? o.userID : o.displayInfo.nick;
a.text = "" + u;
i.visible = o.userID === this.clubInfo.creatorUserID;
}
var c = this.isMe(o.userID);
if (r.DataStore.getString(r.KeyConstants.USER_ID, "") === this.clubInfo.creatorUserID && !1 === c) {
t.offClick(void 0, void 0);
t.onClick(function() {
n.showMemberOperationDialog(o);
}, this);
}
};
t.prototype.isManagerIncludeOwner = function() {
for (var e = r.DataStore.getString(r.KeyConstants.USER_ID, ""), t = this.clubInfo.creatorUserID, o = !1, n = 0, i = this.clubInfo.managers; n < i.length; n++) {
i[n] === e && (o = !0);
}
(o || e === t) && (o = !0);
return o;
};
t.prototype.isMe = function(e) {
return e === r.DataStore.getString(r.KeyConstants.USER_ID, "");
};
t.prototype.renderDeleteMemberListItem = function(e, t) {
var o, n = this;
void 0 !== this.membersWithoutManager && (o = this.membersWithoutManager[e]);
var i = t.asCom.getChild("name"), a = t.asCom.getChild("id"), s = t.asCom.getChild("deleteBtn"), l = t.asCom.getChild("loader").asLoader;
r.CommonFunction.setHead(l, o.displayInfo.headIconURL);
if (void 0 !== o) {
a.text = "ID : " + o.userID;
var u = "" === o.displayInfo.nick ? o.userID : o.displayInfo.nick;
i.text = "" + u;
s.onClick(function() {
n.showDeleteMemberDialog(o);
}, this);
}
};
t.prototype.showDeleteMemberDialog = function(e) {
var t = this, o = "" === e.displayInfo.nick ? e.userID : e.displayInfo.nick;
r.Dialog.showDialog("是否删除 " + o + " ?", function() {
t.deleteMember(e, 2);
}, function() {});
};
t.prototype.renderApplyEventsListItem = function(e, t) {
var o, n = this;
void 0 !== this.events && (o = this.events[e]);
var i = t.asCom.getChild("time"), a = t.asCom.getChild("name"), s = t.asCom.getChild("rejectBtn").asButton, l = t.asCom.getChild("agreeBtn").asButton, u = t.asCom.getChild("loader").asLoader;
r.CommonFunction.setHead(u, o.displayInfo1.headIconURL);
if (void 0 !== o) {
var c = "" === o.displayInfo1.nick ? o.userID1 : o.displayInfo1.nick;
a.text = "" + c;
var d = o.generatedTime, h = new Date(1e3 * d), p = h.getMonth() < 9 ? "0" + (h.getMonth() + 1) : "" + (h.getMonth() + 1), f = h.getDay() < 10 ? "0" + h.getDay() : "" + h.getDay(), g = h.getHours() < 10 ? "0" + h.getHours() : "" + h.getHours(), y = h.getMinutes() < 10 ? "0" + h.getMinutes() : "" + h.getMinutes();
i.text = h.getFullYear() + "/" + p + "/" + f + "   " + g + ":" + y;
s.offClick(void 0, void 0);
l.offClick(void 0, void 0);
s.onClick(function() {
n.joinApproval(o, !1);
}, this);
l.onClick(function() {
n.joinApproval(o, !0);
}, this);
}
};
t.prototype.showMemberOperationDialog = function(e) {
this.addComponent(l.MemberOperationDialog).bind(this, this.clubInfo, e);
};
t.prototype.onMemberListBtnClick = function() {
this.loadMember(0);
};
t.prototype.onApplyListBtnClick = function() {
this.loadRecord();
};
t.prototype.onDeleteMemberBtnClick = function() {
this.loadMember(2);
};
t.prototype.updateDeleteMemberList = function(e) {
this.members = e;
this.membersWithoutManager = [];
for (var t = this.clubInfo.managers, o = 0, n = e; o < n.length; o++) {
var i = n[o];
if (i.userID !== this.clubInfo.creatorUserID) {
for (var r = !1, a = 0, s = t; a < s.length; a++) {
var l = s[a];
i.userID === l && (r = !0);
}
!1 === r && this.membersWithoutManager.push(i);
}
}
this.memberDeleteList.numItems = this.membersWithoutManager.length;
};
t.prototype.removeRecord = function(e) {
var t = this.events.indexOf(e);
this.events.splice(t, 1);
this.memberApplyList.numItems = this.events.length;
};
t.prototype.removeMember = function(e, t) {
var o;
if (0 === t) {
o = this.members.indexOf(e);
this.members.splice(o, 1);
this.memberList.numItems = this.members.length;
} else if (2 === t) {
o = this.membersWithoutManager.indexOf(e);
this.membersWithoutManager.splice(o, 1);
this.memberDeleteList.numItems = this.membersWithoutManager.length;
}
};
t.prototype.deleteMember = function(e, t) {
var o = this, n = r.DataStore.getString(r.KeyConstants.TOKEN, ""), i = "" + ("" + r.LEnv.rootURL + r.LEnv.kickOut + "?&") + ("tk=" + n + "&clubID=" + this.clubInfo.baseInfo.clubID + "&memberID=" + e.userID);
this.clubRequest(i, function(n, i) {
var r = n.response, l = a.proto.club.MsgClubReply.decode(r);
if (l.replyCode === a.proto.club.ClubReplyCode.RCError) {
var u = a.proto.club.MsgCubOperGenericReply.decode(l.content);
u.errorCode === a.proto.club.ClubOperError.CERR_OK ? o.removeMember(e, t) : s.ClubRequestError.showErrMsg(u.errorCode);
}
});
};
t.prototype.joinApproval = function(e, t) {
var o = this, n = !0 === t ? "yes" : "no", i = r.DataStore.getString(r.KeyConstants.TOKEN, ""), l = "" + ("" + r.LEnv.rootURL + r.LEnv.joinApproval + "?&") + ("tk=" + i + "&clubID=" + this.clubInfo.baseInfo.clubID + "&applicantID=" + e.userID1 + "&agree=" + n + "&eID=" + e.Id);
this.clubRequest(l, function(t, n) {
var i = t.response, r = a.proto.club.MsgClubReply.decode(i);
if (r.replyCode === a.proto.club.ClubReplyCode.RCError) {
var l = a.proto.club.MsgCubOperGenericReply.decode(r.content);
l.errorCode === a.proto.club.ClubOperError.CERR_OK ? o.removeRecord(e) : s.ClubRequestError.showErrMsg(l.errorCode);
}
});
};
t.prototype.loadMember = function(e) {
var t = this, o = r.DataStore.getString(r.KeyConstants.TOKEN, ""), n = "" + r.LEnv.rootURL + r.LEnv.loadClubMembers + "?&tk=" + o + "&clubID=" + this.clubInfo.baseInfo.clubID + " ";
this.clubRequest(n, function(o, n) {
var i = o.response, r = a.proto.club.MsgClubReply.decode(i);
if (r.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
var s = a.proto.club.MsgClubLoadMembersReply.decode(r.content).members;
switch (e) {
case 0:
t.updateMemberList(s);
break;

case 2:
t.updateDeleteMemberList(s);
}
}
});
};
t.prototype.loadRecord = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.loadClubEvents + "?&tk=" + t + "&clubID=" + this.clubInfo.baseInfo.clubID + "&cursor=0 ";
this.clubRequest(o, function(t, o) {
var n = t.response, i = a.proto.club.MsgClubReply.decode(n);
if (i.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
var r = a.proto.club.MsgClubLoadEventsReply.decode(i.content).events;
e.updateEventList(r);
}
});
};
t.prototype.updateMemberList = function(e) {
this.members = e;
this.memberList.numItems = this.members.length;
};
t.prototype.updateEventList = function(e) {
this.events = [];
for (var t = 0, o = e; t < o.length; t++) {
var n = o[t];
n.evtType === a.proto.club.ClubEventType.CEVT_NewApplicant && 0 === n.approvalResult && this.events.push(n);
}
this.memberApplyList.numItems = this.events.length;
};
t.prototype.clubRequest = function(e, t) {
if (null === e) return null;
r.Logger.debug("clubRequest url = ", e);
r.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t = i([ u ], t);
}(cc.Component);
o.MemberManagerView = c;
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports",
"../../../proto/protoLobby": "protoLobby",
"../ClubRequestError": "ClubRequestError",
"./MemberOperationDialog": "MemberOperationDialog"
} ],
MemberOperationDialog: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "40514xVsixHroDiji7mZa8g", "MemberOperationDialog");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../../lcore/LCoreExports"), r = e("../../../proto/protoLobby"), a = e("../ClubRequestError"), s = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.bind = function(e, t, o) {
this.memberView = e;
this.member = o;
this.clubInfo = t;
var n = fgui.UIPackage.createObject("lobby_club", "memberOperationDialog").asCom;
this.view = n;
i.CommonFunction.setViewInCenter(this.view);
this.initView();
fgui.GRoot.inst.showPopup(this.view);
};
t.prototype.initView = function() {
this.eventTarget = new cc.EventTarget();
this.view.getChild("revokeBtn").asButton.onClick(this.onRevokeBtnClick, this);
this.view.getChild("up2ManagerBtnBtn").asButton.onClick(this.onUp2ManagerBtnBtnClick, this);
this.view.getChild("authorize2CreateRoomBtn").asButton.onClick(this.onAuthorize2CreateRoomBtnClick, this);
this.view.getChild("delMemberBtn").asButton.onClick(this.onDelMemberBtnClick, this);
this.view.getChild("cancelAuthBtn").asButton.onClick(this.onCancelAuthBtnClick, this);
var e = this.view.getChild("name").asTextField, t = this.view.getChild("id").asTextField;
e.text = "" === this.member.displayInfo.nick ? "" + this.member.userID : this.member.displayInfo.nick;
t.text = "ID : " + this.member.userID;
var o = this.view.getChild("loader").asLoader;
i.CommonFunction.setHead(o, this.member.displayInfo.headIconURL);
this.updateController();
};
t.prototype.updateController = function() {
var e = this.member.role === r.proto.club.ClubRoleType.CRoleTypeMgr, t = this.view.getController("memberLevel"), o = this.view.getController("isAuth"), n = this.view.getChild("authorize2CreateRoomBtn").asButton, i = this.view.getChild("cancelAuthBtn").asButton;
if (e) {
n.grayed = !0;
n._touchDisabled = !0;
i.grayed = !0;
i._touchDisabled = !0;
} else {
n.grayed = !1;
n._touchDisabled = !1;
i.grayed = !1;
i._touchDisabled = !1;
}
t.selectedIndex = e ? 1 : 2;
o.selectedIndex = e ? 0 : this.member.allowCreateRoom ? 0 : 1;
};
t.prototype.onRevokeBtnClick = function() {
this.onUp2ManagerBtnBtnClick();
};
t.prototype.onUp2ManagerBtnBtnClick = function() {
var e = this.member.role === r.proto.club.ClubRoleType.CRoleTypeMgr ? r.proto.club.ClubRoleType.CRoleTypeMember : r.proto.club.ClubRoleType.CRoleTypeMgr;
this.changeManagerRequest(this.member, e);
};
t.prototype.onAuthorize2CreateRoomBtnClick = function() {
this.createRoomAuthority(!0);
};
t.prototype.onDelMemberBtnClick = function() {
var e = this, t = this.member, o = "" === t.displayInfo.nick ? t.userID : t.displayInfo.nick;
i.Dialog.showDialog("是否删除 " + o + " ?", function() {
e.memberView.delMember(e.member);
e.destroy();
}, function() {});
};
t.prototype.onCancelAuthBtnClick = function() {
this.createRoomAuthority(!1);
};
t.prototype.createRoomAuthority = function(e) {
var t = this, o = !0 === e ? "yes" : "no", n = i.DataStore.getString(i.KeyConstants.TOKEN, ""), s = "" + ("" + i.LEnv.rootURL + i.LEnv.allowMemberCreateRoom + "?&") + ("tk=" + n + "&clubID=" + this.clubInfo.baseInfo.clubID + "&memberID=" + this.member.userID + "&allowCreateRoom=" + o);
this.clubRequest(s, function(e, o) {
var n = e.response, i = r.proto.club.MsgClubReply.decode(n);
if (i.replyCode === r.proto.club.ClubReplyCode.RCOperation) {
var s = r.proto.club.MsgClubMemberInfo.decode(i.content);
t.changeAuthority(s);
} else if (i.replyCode === r.proto.club.ClubReplyCode.RCError) {
var l = r.proto.club.MsgCubOperGenericReply.decode(i.content);
l.errorCode !== r.proto.club.ClubOperError.CERR_OK && a.ClubRequestError.showErrMsg(l.errorCode);
}
});
};
t.prototype.changeAuthority = function(e) {
this.saveMember(e);
this.updateController();
};
t.prototype.saveMember = function(e) {
this.member.allowCreateRoom = e.allowCreateRoom;
this.member.displayInfo = e.displayInfo;
this.member.online = e.online;
this.member.role = e.role;
this.member.userID = e.userID;
};
t.prototype.changeManagerRequest = function(e, t) {
var o = this, n = i.DataStore.getString(i.KeyConstants.TOKEN, ""), s = "" + ("" + i.LEnv.rootURL + i.LEnv.changeRole + "?&") + ("tk=" + n + "&clubID=" + this.clubInfo.baseInfo.clubID + "&memberID=" + e.userID + "&role=" + t);
this.clubRequest(s, function(e, n) {
var i = e.response, s = r.proto.club.MsgClubReply.decode(i);
if (s.replyCode === r.proto.club.ClubReplyCode.RCOperation) {
var l = r.proto.club.MsgClubMemberInfo.decode(s.content);
o.changeManager(l, t);
} else if (s.replyCode === r.proto.club.ClubReplyCode.RCError) {
var u = r.proto.club.MsgCubOperGenericReply.decode(s.content);
u.errorCode !== r.proto.club.ClubOperError.CERR_OK && a.ClubRequestError.showErrMsg(u.errorCode);
}
});
};
t.prototype.changeManager = function(e, t) {
if (t === r.proto.club.ClubRoleType.CRoleTypeMgr) this.clubInfo.managers.push(e.userID); else {
var o = this.clubInfo.managers.indexOf(e.userID);
this.clubInfo.managers.splice(o, 1);
}
this.saveMember(e);
this.updateController();
};
t.prototype.clubRequest = function(e, t) {
if (null === e) return null;
i.Logger.debug("clubRequest url = ", e);
i.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t;
}(cc.Component);
o.MemberOperationDialog = s;
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports",
"../../../proto/protoLobby": "protoLobby",
"../ClubRequestError": "ClubRequestError"
} ],
ModifyClubName: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d4881c96IdIbooM92cnLR+4", "ModifyClubName");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../../lcore/LCoreExports"), r = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.view = null;
return t;
}
t.prototype.bind = function(e, t) {
this.clubName = t;
this.settingPopupView = e;
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "modifyClubNameCom").asCom;
i.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this.view.getChild("needDiamondText").asTextField;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.view.getChild("confirmBtn").asButton.onClick(this.onConfirmBtnClick, this);
e.text = '修改需要花费 <font color="#527983"> 300 </font> (钻石)';
};
t.prototype.onConfirmBtnClick = function() {
var e = this.view.getChild("inputField").text, t = this.checkLegal(e);
if (void 0 === t) {
this.settingPopupView.modifyClubName(e);
this.destroy();
} else i.Dialog.showDialog(t, function() {});
};
t.prototype.checkLegal = function(e) {
var t;
null === e ? t = "输出名称为空" : e.length < 3 || e.length > 7 ? t = "群名不合法，长于3个文字，并且小于七个文字,当前长度为" + e.length : e === this.clubName && (t = "新群名不得与旧群名相同");
return t;
};
return t;
}(cc.Component);
o.ModifyClubName = r;
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports"
} ],
MsgQueue: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "64c8ebyIftPWoG7k88TWlXX", "MsgQueue");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r, a = e("./Logger"), s = e("./PromiseDeferred"), l = function() {
return function(e, t) {
this.mt = e;
this.data = t;
};
}();
o.Message = l;
(function(e) {
e[e.wsOpen = 1] = "wsOpen";
e[e.wsClosed = 2] = "wsClosed";
e[e.wsError = 3] = "wsError";
e[e.wsData = 4] = "wsData";
e[e.quit = 5] = "quit";
e[e.replay = 6] = "replay";
})(r = o.MsgType || (o.MsgType = {}));
var u = function() {
function e(e) {
this.messages = [];
this.priority = 0;
this.blockedMessages = [];
this.waiting = null;
this.priorityMap = e;
}
e.prototype.waitMsg = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
if (null !== this.waiting) throw new Error("MsgQueue.waitMsg failed:already wait");
if (this.messages.length > 0) return [ 2, this.messages.shift() ];
this.waiting = new s.Deferred();
return [ 2, this.waiting.promise ];
});
});
};
e.prototype.pushWebsocketBinaryEvent = function(e) {
a.Logger.debug("pushWebsocketBinaryEvent:", e);
var t = new l(r.wsData, e);
this.pushMessage(t);
};
e.prototype.pushQuit = function() {
var e = new l(r.quit);
this.pushMessage(e);
};
e.prototype.blockNormal = function() {
var e = this;
this.priority = 1;
a.Logger.debug("MsgQueue.blockNormal");
if (this.messages.length > 0) {
a.Logger.debug("MsgQueue:blockNormal, current msg count:", this.messages.length);
var t = [];
this.messages.forEach(function(o) {
var n = !0;
if (o.mt === r.wsData) {
var i = o.data.Ops, a = e.priorityMap[i];
void 0 !== a && a >= e.priority && (n = !1);
}
n ? e.blockedMessages.push(o) : t.push(o);
});
this.messages = t;
a.Logger.debug("MsgQueue:blockNormal, after migrate, msg count:", this.messages.length);
}
};
e.prototype.unblockNormal = function() {
var e = this;
this.priority = 0;
if (this.blockedMessages.length > 0) {
this.blockedMessages.forEach(function(t) {
e.messages.push(t);
});
this.blockedMessages = [];
this.wakeupCoroutine();
}
};
e.prototype.pushMessage = function(e) {
var t = !1;
if (this.priority > 0) {
t = !0;
if (e.mt === r.wsData) {
var o = e.data.Ops, n = this.priorityMap[o];
void 0 !== n && n >= this.priority && (t = !1);
}
}
if (t) this.blockedMessages.push(e); else {
this.messages.push(e);
this.wakeupCoroutine();
}
};
e.prototype.wakeupCoroutine = function() {
if (null != this.waiting) {
var e = this.waiting;
this.waiting = null;
e.resolve(this.messages.shift());
}
};
return e;
}();
o.MsgQueue = u;
cc._RF.pop();
}, {
"./Logger": "Logger",
"./PromiseDeferred": "PromiseDeferred"
} ],
NewRoomView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4791elSLSdOR4yPsQRN6/Xf", "NewRoomView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../lcore/LCoreExports"), a = e("../proto/protoLobby"), s = e("../ruleviews/RuleViewsExports"), l = e("./LobbyError"), u = cc._decorator.ccclass, c = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.forReview = !1;
t.itemsJSON = {};
t.ruleViews = {};
t.path = r.NewRoomViewPath.Normal;
return t;
}
t.prototype.getView = function() {
return this.view;
};
t.prototype.showView = function(e, t, o) {
this.path = e;
this.club = t;
this.quicklyCreateView = o;
this.initView();
this.win.show();
};
t.prototype.updatePrice = function(e) {
r.Logger.debug("updatePrice = ", e);
this.view.getChild("consumeText").text = "" + e;
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
this.getComponent("LobbyModule").loader.fguiAddPackage("lobby/fui_create_room/lobby_create_room");
var e = fgui.UIPackage.createObject("lobby_create_room", "createRoom").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
};
t.prototype.onDestroy = function() {
var e = this;
Object.keys(this.ruleViews).forEach(function(t) {
e.ruleViews[t].destroy();
});
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.initView = function() {
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
var e = this.view.getChild("back");
null !== e && e.onClick(this.onCloseClick, this);
this.view.getChild("gamelist").asList.on(fgui.Event.CLICK_ITEM, this.onListItemClicked, this);
this.view.getChild("createRoomButton").onClick(this.onCreateRoomBtnClick, this);
this.view.getChild("saveConfigBtn").onClick(this.onSaveConfigBtnClick, this);
var t = this.view.getController("func");
switch (this.path) {
case r.NewRoomViewPath.Normal:
case r.NewRoomViewPath.Form_Club:
t.selectedIndex = 0;
break;

case r.NewRoomViewPath.Form_Club_Setting:
t.selectedIndex = 1;
}
this.selectItem("btnZJMJ");
this.loadRoomPrice();
};
t.prototype.onListItemClicked = function(e, t) {
var o = e.packageItem.name;
this.selectItem(o);
};
t.prototype.onSaveConfigBtnClick = function() {
var e = this.view.getChild("gamelist").asList, t = e.selectedIndex, o = e.getChildAt(t).packageItem.name, n = this.ruleViews[o];
if (void 0 !== n) {
var i = n.getRules();
this.goSave(i);
}
};
t.prototype.onCreateRoomBtnClick = function() {
var e = this.view.getChild("gamelist").asList, t = e.selectedIndex, o = e.getChildAt(t).packageItem.name, n = this.ruleViews[o];
if (void 0 !== n) {
var i = n.getRules();
this.createRoom(i);
}
};
t.prototype.goSave = function(e) {
this.quicklyCreateView.saveConfig(e);
this.destroy();
};
t.prototype.createRoom = function(e) {
var t = this;
r.Logger.debug("NewRoomView.createRoom, ruleJson:", e);
var o = r.DataStore.getString(r.KeyConstants.TOKEN, ""), n = "";
n = void 0 !== this.club && null !== this.club && "" !== this.club ? "" + r.LEnv.rootURL + r.LEnv.createClubRoom + "?&tk=" + o + "&clubID=" + this.club.baseInfo.clubID : "" + r.LEnv.rootURL + r.LEnv.createRoom + "?&tk=" + o;
r.Logger.trace("createRoom, createRoomURL:", n);
var i = new a.proto.lobby.MsgCreateRoomReq();
i.config = e;
var s = a.proto.lobby.MsgCreateRoomReq.encode(i).toArrayBuffer();
r.HTTP.hPost(this.eventTarget, n, function(e, o) {
var n = null;
if (null !== o) n = "创建房间错误，错误码:" + o; else if (null === (n = r.HTTP.hError(e))) {
var i = e.response, s = a.proto.lobby.MsgCreateRoomRsp.decode(i);
r.Logger.debug("msgCreateRoomRsp:", s);
if (s.result === a.proto.lobby.MsgError.ErrSuccess) t.enterGame(s.roomInfo); else if (s.result === a.proto.lobby.MsgError.ErrUserInOtherRoom) t.reEnterGame(s.roomInfo); else {
r.Logger.error("Create room error:, code:", s.result);
var u = l.LobbyError.getErrorString(s.result);
r.Dialog.showDialog(u);
}
}
if (null !== n) {
r.Logger.debug("NewRoomView.createRoom failed:", n);
r.Dialog.showDialog(n, function() {});
}
}, "arraybuffer", s);
};
t.prototype.selectItem = function(e) {
var t = this, o = this.ruleViews[e];
Object.keys(this.ruleViews).forEach(function(e) {
t.ruleViews[e].hide();
});
if (this.path === r.NewRoomViewPath.Form_Club_Setting) {
this.forReview = !0;
if (null !== this.club.createRoomOptions) {
var n = JSON.parse(this.club.createRoomOptions);
this.itemsJSON = n;
}
}
if (void 0 === o) {
switch (e) {
case "btnZJMJ":
var i = new s.ZJMJRuleView();
i.bindView(this);
o = i;
break;

case "btnDFMJ":
var a = new s.DFRuleView();
a.bindView(this);
o = a;
break;

case "btnGZ":
var l = new s.RunFastRuleView();
l.bindView(this);
o = l;
}
if (void 0 === o) return;
this.ruleViews[e] = o;
void 0 !== this.priceCfgs && o.updatePriceCfg(this.priceCfgs);
}
o.show();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.enterGame = function(e) {
this.win.hide();
this.destroy();
this.getComponent("LobbyModule").enterGame(e);
};
t.prototype.reEnterGame = function(e) {
this.enterGame(e);
};
t.prototype.loadRoomPrice = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.loadRoomPriceCfgs + "?&tk=" + t;
r.HTTP.hGet(this.eventTarget, o, function(t, o) {
var n = null;
if (null !== o) n = "拉取价格配置错误，错误码:" + o; else if (null === (n = r.HTTP.hError(t))) {
var i = String.fromCharCode.apply(null, new Uint8Array(t.response)), a = JSON.parse(i);
e.priceCfgs = a;
Object.keys(e.ruleViews).forEach(function(t) {
e.ruleViews[t].updatePriceCfg(a);
});
}
if (null !== n) {
r.Logger.debug("NewRoomView.createRoom failed:", n);
r.Dialog.showDialog(n, function() {});
}
});
};
return t = i([ u ], t);
}(cc.Component);
o.NewRoomView = c;
cc._RF.pop();
}, {
"../lcore/LCoreExports": "LCoreExports",
"../proto/protoLobby": "protoLobby",
"../ruleviews/RuleViewsExports": "RuleViewsExports",
"./LobbyError": "LobbyError"
} ],
PlayerA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7938dksRo5KCLhpD1ROi2p3", "PlayerA");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, i, r = e("../lobby/lcore/LCoreExports"), a = e("../lobby/views/playerInfo/PlayerInfoExports"), s = e("./AgariIndexA"), l = e("./proto/protoGameA"), u = e("./RoomInterfaceA"), c = l.proto.pokerface, d = l.proto.prunfast, h = ((n = {})[d.CardHandType.Flush] = "sunzi", 
n[d.CardHandType.Bomb] = "zhadan", n[d.CardHandType.Single] = "", n[d.CardHandType.Pair] = "", 
n[d.CardHandType.Pair2X] = "liandui", n[d.CardHandType.Triplet] = "sange", n[d.CardHandType.TripletPair] = "sandaiyi", 
n[d.CardHandType.Triplet2X] = "feiji", n[d.CardHandType.Triplet2X2Pair] = "feijidaicibang", 
n), p = ((i = {})[d.CardHandType.Flush] = "Effects_zi_shunzi", i[d.CardHandType.Bomb] = "Effects_zi_zhadan", 
i[d.CardHandType.Single] = "", i[d.CardHandType.Pair] = "", i[d.CardHandType.Pair2X] = "Effects_liandui", 
i[d.CardHandType.Triplet] = "Effects_sandaier", i[d.CardHandType.TripletPair] = "Effects_sandaier", 
i[d.CardHandType.Triplet2X] = "Effects_zi_FeiJi", i[d.CardHandType.Triplet2X2Pair] = "Effects_zi_FeiJiDaiChiBang", 
i), f = function() {
function e(e, t, o) {
this.userID = e;
this.chairID = t;
this.host = o;
this.tipCards = null;
this.tipCardsIndex = 0;
this.resetForNewHand();
}
e.prototype.resetForNewHand = function() {
this.tilesDiscarded = [];
if (this.isMe()) {
this.tilesHand = [];
this.tileCountInHand = -1;
} else {
this.tileCountInHand = 0;
this.tilesHand = null;
}
null != this.playerView && this.playerView.resetForNewHand();
};
e.prototype.isMe = function() {
return this.host.isMe(this.userID);
};
e.prototype.addHandTile = function(e) {
null != this.tilesHand ? this.tilesHand.push(e) : this.tileCountInHand = this.tileCountInHand + 1;
};
e.prototype.sortHands = function() {
null != this.tilesHand && this.tilesHand.sort(function(e, t) {
return e === c.CardID.R2H ? 1 : t === c.CardID.R2H ? -1 : e - t;
});
};
e.prototype.addDicardedTile = function(e) {
this.tilesDiscarded = [];
this.tilesDiscarded.push(e);
};
e.prototype.addDiscardedTiles = function(e) {
this.tilesDiscarded = [];
for (var t = 0, o = e; t < o.length; t++) {
var n = o[t];
this.tilesDiscarded.push(n);
}
};
e.prototype.removeTileFromHand = function(e) {
if (null != this.tilesHand) {
for (var t = 0; t < this.tilesHand.length; t++) if (this.tilesHand.hasOwnProperty(t)) {
if (this.tilesHand[t] === e) {
this.tilesHand.splice(t, 1);
break;
}
}
} else this.tileCountInHand = this.tileCountInHand - 1;
};
e.prototype.removeLatestDiscarded = function(e) {
var t = this.tilesDiscarded.pop();
t !== e && r.Logger.debug("llwant, removed.", t, ",expected.", e);
};
e.prototype.addHandTiles = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var n = o[t];
this.tilesHand.push(n);
}
};
e.prototype.hand2UI = function(e) {
var t = this.playerView;
t.hideHands();
this.isMe() ? this.playerView.showHandsForMe(e) : this.host.isReplayMode() ? t.hand2Exposed(e) : t.showHandsForOpponents(this.tileCountInHand);
};
e.prototype.hand2Exposed = function() {
var e = this.playerView;
e.hideHands();
e.hand2Exposed(!1);
};
e.prototype.discarded2UI = function() {
this.playerView.showDiscarded();
};
e.prototype.showCardHandType = function(e, t) {
var o = p[e], n = h[e];
if ("" !== o) {
this.playerView.playerOperationEffect(o);
this.playSound("gamea", n);
} else this.playReadTileSound(t, e === d.CardHandType.Pair);
};
e.prototype.playReadTileSound = function(e, t) {
void 0 === t && (t = !1);
var o = s.AgariIndexA.tileId2ArtId(e), n = Math.floor(o / 4) + 2, i = n.toString();
14 === n && (i = "1");
t && (i = "dui" + i);
this.playSound("gamea", i);
};
e.prototype.bindView = function(e) {
this.playerView = e;
e.player = this;
e.initCardLists();
e.showPlayerInfo(this.playerInfo);
};
e.prototype.unbindView = function() {
var e = this.playerView;
if (null != e) {
e.player = null;
this.playerView = null;
e.hideAll();
}
};
e.prototype.updateByPlayerInfo = function(e) {
this.state = e.state;
this.playerInfo = new u.PlayerInfo(e);
};
e.prototype.onTipBtnClick = function() {
this.playerView.restoreHandPositionAndClickCount(-1);
var e = this.playerView.handsClickCtrls, t = this.tipCards;
if (void 0 === t || null === t) {
for (var o = [], n = 0, i = e; n < i.length; n++) {
void 0 !== (d = i[n]).tileID && o.push(d.tileID);
}
var r = -1;
this.discardR2H && (r = 1);
if (null === this.allowedReActionMsg) t = s.AgariIndexA.searchLongestDiscardCardHand(o, r); else {
var a = this.allowedReActionMsg.prevActionHand;
t = s.AgariIndexA.findAllGreatThanCardHands(a, o, r);
}
this.tipCards = t;
}
if (0 !== t.length) {
this.tipCardsIndex >= t.length && (this.tipCardsIndex = 0);
var l = t[this.tipCardsIndex];
this.tipCardsIndex = this.tipCardsIndex + 1;
if (void 0 !== l && null !== l) {
var u = l.cards;
if (void 0 !== u && u.length > 0) for (var c = 0; c < e.length; c++) {
var d, h = (d = e[c]).tileID;
if (void 0 !== h) for (var p = 0, f = u; p < f.length; p++) {
f[p] === h && this.playerView.moveHandUp(c);
}
}
}
} else this.onSkipBtnClick();
};
e.prototype.onDiscardBtnClick = function() {
for (var e = [], t = 0, o = this.playerView.handsClickCtrls; t < o.length; t++) {
var n = o[t];
void 0 !== n.tileID && null !== n.tileID && 1 === n.clickCount && e.push(n.tileID);
}
this.onPlayerDiscardCards(e);
};
e.prototype.onSkipBtnClick = function() {
var e = new l.proto.pokerface.MsgPlayerAction();
e.qaIndex = this.allowedReActionMsg.qaIndex;
e.action = d.ActionType.enumActionType_SKIP;
this.sendActionMsg(e);
this.playerView.clearAllowedActionsView();
this.playerView.restoreHandsPositionAndClickCount(-1);
};
e.prototype.autoDiscard = function() {
if (null !== this.allowedActionMsg) {
var e = [ c.CardID.R2H ];
this.onPlayerDiscardCards(e);
}
};
e.prototype.hideDiscarded = function() {
this.playerView.hideDiscarded();
};
e.prototype.onPlayerDiscardCards = function(e) {
if (0 !== e.length) {
var t = new l.proto.pokerface.MsgPlayerAction(), o = !1;
r.Logger.debug("tileIDs === :", e);
var n = s.AgariIndexA.agariConvertMsgCardHand(e);
if (null !== n) {
t.cards = [];
for (var i = 0, a = e; i < a.length; i++) {
var u = a[i];
u === c.CardID.R3H && (o = !0);
t.cards.push(u);
}
t.action = d.ActionType.enumActionType_DISCARD;
if (null !== this.allowedActionMsg) {
t.qaIndex = this.allowedActionMsg.qaIndex;
if (this.haveR3H) {
if (!o) {
r.Dialog.prompt("必须出 红桃3");
return;
}
this.haveR3H = !1;
}
}
if (null !== this.allowedReActionMsg) {
t.qaIndex = this.allowedReActionMsg.qaIndex;
var h = this.allowedReActionMsg.prevActionHand;
if (this.discardR2H) {
if (1 !== e.length || e[0] !== c.CardID.R2H) {
r.Dialog.prompt("必须出2");
return;
}
this.discardR2H = !1;
}
if (!s.AgariIndexA.agariGreatThan(h, n)) {
r.Dialog.prompt("您的牌不够大");
return;
}
}
this.sendActionMsg(t);
this.playerView.clearAllowedActionsView();
} else r.Logger.debug("current === :", n);
} else r.Dialog.prompt("没有选中牌");
};
e.prototype.getPlayInfo = function() {
return this.playerInfo;
};
e.prototype.onChatMsg = function(e) {
void 0 !== e.buildinId && "" !== e.buildinId && this.playSound("commonLanguage", "speak" + e.buildinId);
this.playerView.showChatMsg(e.msg);
};
e.prototype.onPlayerInfoClick = function() {
var e = this.playerView.getUserInfoPos(), t = this.host.getRoomHost();
null === t && r.Logger.debug("roomHost === null");
var o = t.component.getComponent(a.PlayerInfoView);
null === o && (o = t.component.addComponent(a.PlayerInfoView));
o.showUserInfoView(t.getLobbyModuleLoader(), this.host, this.playerInfo, e, !1 === this.isMe());
};
e.prototype.playSkipAnimation = function() {
this.playSound("gamea", "buyao");
};
e.prototype.playSound = function(e, t) {
var o = "";
o = 1 === this.playerInfo.gender ? e + "/boy/boy_" + t : e + "/girl/girl_" + t;
r.SoundMgr.playEffectAudio(o);
};
e.prototype.sendActionMsg = function(e) {
var t = l.proto.pokerface.MsgPlayerAction.encode(e);
this.host.sendActionMsg(t);
};
return e;
}();
o.PlayerA = f;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"../lobby/views/playerInfo/PlayerInfoExports": "PlayerInfoExports",
"./AgariIndexA": "AgariIndexA",
"./RoomInterfaceA": "RoomInterfaceA",
"./proto/protoGameA": "protoGameA"
} ],
PlayerInfoExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6684a4CWVhEybTgZ/fVpuza", "PlayerInfoExports");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
})(e("./PlayerInfoView"));
cc._RF.pop();
}, {
"./PlayerInfoView": "PlayerInfoView"
} ],
PlayerInfoView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "90c05lIDYhFwLyU9kJ8Qw1P", "PlayerInfoView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../lcore/LCoreExports"), r = e("../../proto/protoLobby"), a = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.view = null;
t.onMessageFunc = null;
return t;
}
t.prototype.showUserInfoView = function(e, t, o, n, a) {
if (null === this.view) {
e.fguiAddPackage("lobby/fui_player_info/lobby_player_info");
var s = fgui.UIPackage.createObject("lobby_player_info", "player_info_view").asCom;
this.view = s;
this.initView();
if (null === this.onMessageFunc) {
this.lobbyModule = this.node.getParent().getComponent("LobbyModule");
this.onMessageFunc = this.lobbyModule.eventTarget.on("" + r.proto.lobby.MessageCode.OPChat, this.onMessage, this);
}
i.Logger.debug("showUserInfoView view is nil");
}
this.room = t;
this.playerInfo = o;
this.isOther = a;
this.updateView();
var l = (fgui.GRoot.inst.width - 1136) / 2, u = n.x + l;
fgui.GRoot.inst.showPopup(this.view);
this.view.setPosition(u, n.y);
};
t.prototype.onDestroy = function() {
if (null !== this.onMessageFunc) {
this.lobbyModule.eventTarget.off("" + r.proto.lobby.MessageCode.OPChat, this.onMessageFunc);
this.onMessageFunc = null;
}
this.view.dispose();
};
t.prototype.initView = function() {
var e = this;
this.nameText = this.view.getChild("name").asTextField;
this.idText = this.view.getChild("id").asTextField;
this.ipText = this.view.getChild("ip").asTextField;
this.addressText = this.view.getChild("address").asTextField;
this.numberText = this.view.getChild("number").asTextField;
this.xinNumText = this.view.getChild("xinNum").asTextField;
this.zuanNumText = this.view.getChild("zuanNum").asTextField;
this.sexImage = this.view.getChild(i.KeyConstants.SEX).asLoader;
var t = this.view.getChild("head").asCom;
this.headLoader = t.getChild("n0").asLoader;
this.kickoutBtn = this.view.getChild("kickoutBtn").asButton;
this.kickoutBtn.onClick(this.onKickoutBtnClick, this);
this.propList = this.view.getChild("list").asList;
this.propList.itemRenderer = function(t, o) {
e.renderPropListItem(t, o);
};
this.propList.on(fgui.Event.CLICK_ITEM, this.onPropListItemClick, this);
this.propList.setVirtual();
this.dataListForOpponents = [];
for (var o = [ "dj_bb", "dj_jd", "dj_qj", "dj_tuoxie", "dj_ganbei", "dj_hj", "dj_meigui", "dj_mmd" ], n = [ 6, 3, 5, 4, 2, 7, 1, 8 ], r = 0; r < 8; r++) {
var a = {
image: o[r],
num: r,
id: n[r]
};
this.dataListForOpponents.push(a);
}
};
t.prototype.updatePropList = function() {
this.dataList = [];
this.isOther && (this.dataList = this.dataListForOpponents);
var e = this.dataList.length;
this.propList.numItems = e;
this.propList.resizeToFit(e);
};
t.prototype.updateView = function() {
this.kickoutBtn.visible = this.isOther;
this.updatePropList();
var e = "y_nv";
1 === this.playerInfo.gender && (e = "y_nan");
i.CommonFunction.setHead(this.headLoader, this.playerInfo.headIconURI, this.playerInfo.gender);
this.sexImage.url = "ui://lobby_player_info/" + e;
this.nameText.text = this.playerInfo.nick;
this.idText.text = "ID:" + this.playerInfo.userID;
this.ipText.text = "IP:" + this.playerInfo.ip;
this.addressText.text = "地址:" + this.playerInfo.location;
this.xinNumText.text = "" + this.playerInfo.charm;
this.zuanNumText.text = "" + this.playerInfo.diamond;
this.numberText.text = "";
};
t.prototype.addMsg = function(e) {
i.Logger.debug("msg:", e);
};
t.prototype.onMessage = function(e) {
this.addMsg(e);
};
t.prototype.onKickoutBtnClick = function() {
i.Logger.debug("onKickoutBtnClick");
};
t.prototype.renderPropListItem = function(e, t) {
var o = this.dataList[e], n = t.asCom, i = n.getChild("icon").asLoader, r = n.getChild("xinNum"), a = n.getChild("zuanNum");
n.name = "" + o.id;
r.text = "" + 2 * o.num;
a.text = "" + 2 * o.num;
i.url = "ui://lobby_player_info/" + o.image;
};
t.prototype.onPropListItemClick = function(e) {
i.Logger.debug("clickItem.data.name:" + e.asCom.name + ", num:" + parseInt(e.asCom.name, 10));
this.room.sendDonate(parseInt(e.asCom.name, 10), this.playerInfo.chairID);
fgui.GRoot.inst.hidePopup(this.view);
};
return t;
}(cc.Component);
o.PlayerInfoView = a;
cc._RF.pop();
}, {
"../../lcore/LCoreExports": "LCoreExports",
"../../proto/protoLobby": "protoLobby"
} ],
PlayerInterfaceA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c619djwNudM1IyYKmqf3YJu", "PlayerInterfaceA");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
return function() {};
}();
o.ClickCtrl = n;
(function(e) {
e.Chow = "Effect_zi_ts_chi";
e.Pong = "Effect_zi_ts_peng";
e.Kong = "Effect_zi_ts_gang";
e.Ting = "Effect_zi_ts_ting";
e.Skip = "Effect_zi_ts_guo";
e.Hu = "Effect_zi_ts_hu";
e.Zhua = "Effect_zi_ts_zhua";
})(o.ButtonDef || (o.ButtonDef = {}));
cc._RF.pop();
}, {} ],
PlayerInterface: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a2f2fZQ4yBGgKyLr/6cBdf2", "PlayerInterface");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
return function() {};
}();
o.ClickCtrl = n;
(function(e) {
e.Chow = "Effect_zi_ts_chi";
e.Pong = "Effect_zi_ts_peng";
e.Kong = "Effect_zi_ts_gang";
e.Ting = "Effect_zi_ts_ting";
e.Skip = "Effect_zi_ts_guo";
e.Hu = "Effect_zi_ts_hu";
e.Zhua = "Effect_zi_ts_zhua";
})(o.ButtonDef || (o.ButtonDef = {}));
cc._RF.pop();
}, {} ],
PlayerViewA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "459d9KIrRxF95BoxfLw+fLh", "PlayerViewA");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../lobby/lcore/LCoreExports"), i = e("./PlayerInterfaceA"), r = e("./proto/protoGameA"), a = e("./TileImageMounterA"), s = r.proto.pokerface, l = function() {
return function(e, t) {
this.y = t;
this.x = e;
};
}(), u = function() {
return function() {};
}(), c = function() {
function e(e, t, o) {
this.room = o;
this.viewChairID = t;
this.roomHost = this.room.getRoomHost();
this.viewUnityNode = e;
this.myView = e.getChild("player" + t).asCom;
if (1 === t) {
this.operationPanel = e.getChild("operationPanel").asCom;
this.initOperationButtons();
}
this.initHeadView();
this.initOtherView();
this.initPlayerStatus();
this.aniPos = this.myView.getChild("aniPos");
}
e.prototype.initCardLists = function() {
this.initHands();
this.initDiscards();
this.initLights();
};
e.prototype.hideOperationButtons = function() {
this.skipBtn.visible = !1;
this.tipBtn.visible = !1;
this.discardBtn.visible = !1;
};
e.prototype.setGold = function() {};
e.prototype.setHeadEffectBox = function(e) {
e && this.roomHost.animationMgr.play("lobby/prefabs/mahjong/Effect_UI_touxiang", this.head.pos.node);
this.head.pos.visible = e;
};
e.prototype.hideAll = function() {
this.head.hideAll();
this.hideHands();
this.hideLights();
this.hideDiscarded();
};
e.prototype.resetForNewHand = function() {
this.hideHands();
this.hideLights();
this.hideDiscarded();
this.setHeadEffectBox(!1);
1 === this.viewChairID && this.hideOperationButtons();
};
e.prototype.hideDiscarded = function() {
if (null != this.discards) for (var e = 0, t = this.discards; e < t.length; e++) {
t[e].visible = !1;
}
};
e.prototype.hideLights = function() {
if (void 0 !== this.lights) for (var e = 0, t = this.lights; e < t.length; e++) {
t[e].visible = !1;
}
};
e.prototype.hideHands = function() {
if (void 0 !== this.handsMe && null !== this.handsMe) for (var e = 0, t = this.handsMe; e < t.length; e++) {
t[e].visible = !1;
}
void 0 !== this.handsOther && null !== this.handsOther && (this.handsOther.visible = !1);
};
e.prototype.showDiscarded = function() {
var e = this.discards;
this.hideDiscarded();
var t, o, n = this.player.tilesDiscarded, i = n.length, r = e.length, s = i - r;
s < 0 && (s = 0);
for (var l = s; l < i; l++) {
t = e[l % r];
o = n[l];
a.TileImageMounterA.mountTileImage(t, o);
t.visible = !0;
}
};
e.prototype.showHandsForOpponents = function(e) {
this.handsOther.visible = !0;
this.handsNumber.text = "" + e;
this.handsNumber.visible = !0;
};
e.prototype.showHandsForMe = function(e) {
for (var t = this.player.tilesHand, o = t.length, n = this.handsClickCtrls, i = 0, r = n; i < r.length; i++) {
r[i].tileID = null;
}
this.restoreHandsPositionAndClickCount(-1);
for (var s = 0, l = 0; l < o; l++) {
var u = this.handsMe[s];
a.TileImageMounterA.mountTileImage(u, t[l]);
u.visible = !0;
n[s].tileID = t[l];
s += 1;
}
};
e.prototype.hand2Exposed = function(e) {
this.hideLights();
for (var t = this.player.tilesHand, o = t.length, n = 0, i = 0; i < o; i++) {
var r = this.lights[n];
a.TileImageMounterA.mountTileImage(r, t[i]);
r.visible = !0;
n += 1;
}
};
e.prototype.clearAllowedActionsView = function() {
this.hideOperationButtons();
};
e.prototype.onHandTileBtnClick = function(e) {
var t = this.handsClickCtrls;
if (null !== this.player) {
var o = t[e];
o.clickCount = o.clickCount + 1;
1 === o.clickCount && this.moveHandUp(e);
2 === o.clickCount && this.restoreHandUp(e);
} else n.Logger.debug("player === null");
};
e.prototype.restoreHandsPositionAndClickCount = function(e) {
for (var t = 0; t < 16; t++) if (t !== e) {
var o = this.handsClickCtrls[t], n = this.handsOriginPos[t];
o.h.y = n.y;
o.clickCount = 0;
}
};
e.prototype.showPlayerInfo = function(e) {
this.head.headView.visible = !0;
this.head.headView.onClick(this.player.onPlayerInfoClick, this.player);
var t = e.nick;
void 0 !== t && "" !== t || (t = e.userID);
t.length > 8 && (t = t.substring(0, 8) + "...");
n.CommonFunction.setHead(this.head.headLoader, e.headIconURI, e.gender);
};
e.prototype.showOwner = function() {
var e = this.player;
this.head.roomOwnerFlag.visible = e.isMe();
};
e.prototype.playerOperationEffect = function(e) {
this.roomHost.animationMgr.play("lobby/prefabs/mahjong/" + e, this.aniPos.node);
};
e.prototype.playerDonateEffect = function(e) {
this.roomHost.animationMgr.play("lobby/prefabs/donate/" + e, this.head.headView.node);
};
e.prototype.setGray = function(e) {
e.grayed = !0;
};
e.prototype.clearGray = function(e) {
e.grayed = !1;
};
e.prototype.getUserInfoPos = function() {
return this.viewUnityNode.node.convertToNodeSpaceAR(this.userInfoPos.parent.node.convertToWorldSpaceAR(new cc.Vec2(this.userInfoPos.x, this.userInfoPos.y)));
};
e.prototype.showChatMsg = function(e) {
if (void 0 !== e && null !== e) {
void 0 === this.msgTimerCB && (this.msgTimerCB = this.hideChatMsg.bind(this));
this.qipaoText.text = e;
this.qipao.visible = !0;
this.roomHost.component.unschedule(this.msgTimerCB);
this.roomHost.component.scheduleOnce(this.msgTimerCB, 3);
}
};
e.prototype.restoreHandPositionAndClickCount = function(e) {
for (var t = 0; t < this.handsClickCtrls.length; t++) t !== e && this.restoreHandUp(t);
};
e.prototype.moveHandUp = function(e) {
var t = this.handsOriginPos[e];
this.handsClickCtrls[e].h.y = t.y - 30;
this.handsClickCtrls[e].clickCount = 1;
};
e.prototype.hideChatMsg = function() {
this.qipao.visible = !1;
};
e.prototype.initOtherView = function() {
this.userInfoPos = this.myView.getChild("userInfoPos");
this.qipao = this.myView.getChild("qipao").asCom;
this.qipaoText = this.qipao.getChild("text");
};
e.prototype.initHeadView = function() {
var e = new u();
e.headView = this.myView.getChild("head").asCom;
e.headView.visible = !1;
e.pos = e.headView.getChild("pos");
e.headLoader = e.headView.getChild("n1").asLoader;
e.readyIndicator = this.myView.getChild("ready");
e.readyIndicator.visible = !1;
e.roomOwnerFlag = this.myView.getChild("roomOwner");
e.roomOwnerFlag.visible = !1;
e.hideAll = function() {
e.headView.visible = !1;
e.readyIndicator.visible = !1;
e.roomOwnerFlag.visible = !1;
};
this.head = e;
};
e.prototype.initPlayerStatus = function() {
var e = this, t = [];
t[s.PlayerState.PSNone] = function() {
e.head.readyIndicator.visible = !1;
};
t[s.PlayerState.PSReady] = function() {
e.head.readyIndicator.visible = !0;
e.head.headView.grayed = !1;
e.showOwner();
};
t[s.PlayerState.PSOffline] = function() {
e.head.readyIndicator.visible = !1;
e.head.headView.grayed = !0;
};
t[s.PlayerState.PSPlaying] = function() {
e.head.readyIndicator.visible = !1;
e.head.headView.grayed = !1;
e.showOwner();
};
this.onUpdateStatus = t;
};
e.prototype.restoreHandUp = function(e) {
var t = this.handsOriginPos[e];
this.handsClickCtrls[e].h.y = t.y;
this.handsClickCtrls[e].clickCount = 0;
};
e.prototype.initLights = function() {
for (var e = [], t = this.myView.getChild("lights").asCom, o = 0; o < 16; o++) {
var n = t.getChild("n" + (o + 1)).asCom;
e[o] = n;
}
this.lights = e;
};
e.prototype.initDiscards = function() {
for (var e = [], t = this.myView.getChild("discards").asCom, o = 0; o < 16; o++) {
var n = t.getChild("n" + (o + 1)).asCom;
e[o] = n;
}
this.discards = e;
};
e.prototype.initHands = function() {
var e = this, t = this.myView.getChild("hands");
if (1 === this.viewChairID) {
for (var o = [], n = [], r = [], a = function(a) {
var u = t.asCom.getChild("n" + (a + 1)).asCom;
u.name = a.toString();
u.visible = !1;
o[a] = u;
n[a] = new l(u.x, u.y);
var c = new i.ClickCtrl();
c.clickCount = 0;
c.h = u;
r[a] = c;
u.onClick(function() {
e.onHandTileBtnClick(a);
}, s);
}, s = this, u = 0; u < 16; u++) a(u);
this.handsMe = o;
this.handsOriginPos = n;
this.handsClickCtrls = r;
} else {
this.handsNumber = this.myView.getChild("handsNum");
this.handsOther = t;
}
};
e.prototype.initOperationButtons = function() {
var e = this;
this.skipBtn = this.operationPanel.getChild("pass").asButton;
this.tipBtn = this.operationPanel.getChild("tip").asButton;
this.discardBtn = this.operationPanel.getChild("discard").asButton;
this.tipBtn.onClick(function() {
e.player.onTipBtnClick();
}, this);
this.skipBtn.onClick(function() {
e.player.onSkipBtnClick();
}, this);
this.discardBtn.onClick(function() {
e.player.onDiscardBtnClick();
}, this);
this.hideOperationButtons();
};
return e;
}();
o.PlayerViewA = c;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"./PlayerInterfaceA": "PlayerInterfaceA",
"./TileImageMounterA": "TileImageMounterA",
"./proto/protoGameA": "protoGameA"
} ],
PlayerView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2c7acNBy1ZAOKZ7FsNXdwfG", "PlayerView");
var n, i = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../lobby/lcore/LCoreExports"), s = e("./GameRules"), l = e("./PlayerInterface"), u = e("./proto/protoGame"), c = e("./RoomInterface"), d = e("./TileImageMounter"), h = u.proto.mahjong, p = function() {
return function(e, t) {
this.y = t;
this.x = e;
};
}(), f = function() {
return function() {};
}(), g = [ "mahjong_mine_meld_", "mahjong_right_meld_", "mahjong_dui_meld_", "mahjong_left_meld_" ], y = ((n = {})[h.MeldType.enumMeldTypeTriplet2Kong] = "gang1", 
n[h.MeldType.enumMeldTypeExposedKong] = "gang1", n[h.MeldType.enumMeldTypeConcealedKong] = "gang2", 
n[h.MeldType.enumMeldTypeSequence] = "chipeng", n[h.MeldType.enumMeldTypeTriplet] = "chipeng", 
n), m = function() {
function e(e, t, o) {
this.checkReadyHandBtn = null;
this.room = o;
this.viewChairID = t;
this.viewUnityNode = e;
this.roomHost = this.room.getRoomHost();
this.myView = e.getChild("player" + t).asCom;
if (1 === t) {
this.operationPanel = e.getChild("operationPanel").asCom;
this.initOperationButtons();
}
this.initHeadView();
this.initOtherView();
this.initPlayerStatus();
this.aniPos = this.myView.getChild("aniPos");
}
e.prototype.initCardLists = function() {
this.initHands();
this.initDiscards();
this.initFlowers();
this.initLights();
};
e.prototype.showButton = function(e) {
if (void 0 !== e && e.length > 0) {
this.buttonDataList = e;
this.buttonList.numItems = e.length;
this.buttonList.resizeToFit(e.length);
}
this.operationPanel.visible = !0;
};
e.prototype.hideOperationButtons = function() {
this.operationPanel.visible = !1;
};
e.prototype.setGold = function() {};
e.prototype.setHeadEffectBox = function(e) {
e && this.roomHost.animationMgr.play("lobby/prefabs/mahjong/Effect_UI_touxiang", this.head.pos.node);
this.head.pos.visible = e;
};
e.prototype.hideAll = function() {
this.head.hideAll();
this.hideHands();
this.hideFlowers();
this.hideMelds();
this.hideLights();
this.hideDiscarded();
};
e.prototype.resetForNewHand = function() {
this.hideHands();
this.hideFlowers();
this.hideMelds();
this.hideLights();
this.clearDiscardable();
this.hideDiscarded();
this.head.ting.visible = !1;
this.setHeadEffectBox(!1);
1 === this.viewChairID && this.hideOperationButtons();
};
e.prototype.hideDiscarded = function() {
if (null != this.discards) for (var e = 0, t = this.discards; e < t.length; e++) {
t[e].visible = !1;
}
};
e.prototype.hideLights = function() {
if (null != this.lights) for (var e = 0, t = this.lights; e < t.length; e++) {
t[e].visible = !1;
}
};
e.prototype.hideHands = function() {
if (null != this.hands) for (var e = 0, t = this.hands; e < t.length; e++) {
t[e].visible = !1;
}
};
e.prototype.hideMelds = function() {
for (var e = this.myView.getChild("melds").asCom, t = 0; t < 4; t++) {
var o = e.getChild("myMeld" + t);
null != o && e.removeChild(o, !0);
}
};
e.prototype.hideFlowers = function() {
if (s.GameRules.haveFlower(this.room.roomType)) {
if (null != this.flowers) for (var e = 0, t = this.flowers; e < t.length; e++) {
t[e].visible = !1;
}
this.head.huaNode.visible = !1;
this.head.huaNodeText.visible = !1;
}
};
e.prototype.showFlowers = function() {
if (s.GameRules.haveFlower(this.room.roomType)) {
var e = this.player.tilesFlower, t = this.flowers, o = e.length, n = t.length;
this.head.huaNode.visible = !0;
this.head.huaNodeText.visible = !0;
this.head.huaNodeText.text = o.toString();
var i = o - n;
i < 0 && (i = 0);
for (var r = i; r < o; r++) {
var a = t[r % n], l = e[r];
d.TileImageMounter.mountTileImage(a, l);
a.visible = !0;
}
}
};
e.prototype.showDiscarded = function(e, t) {
for (var o = this.discards, n = 0, i = o; n < i.length; n++) {
i[n].visible = !1;
}
var r, a, s = this.player.tilesDiscarded, l = s.length, u = o.length, c = l - u;
c < 0 && (c = 0);
for (var h = c; h < l; h++) {
r = o[h % u];
a = s[h];
d.TileImageMounter.mountTileImage(r, a);
r.visible = !0;
}
if (e) {
this.room.setArrowByParent(r);
this.enlargeDiscarded(a, t);
}
};
e.prototype.enlargeDiscarded = function(e, t) {
var o = this.discardTips, n = this.discardTipsTile;
d.TileImageMounter.mountTileImage(n, e);
o.visible = !0;
t ? this.player.waitDiscardReAction = !0 : this.roomHost.component.scheduleOnce(function() {
o.visible = !1;
}, 1);
};
e.prototype.showHandsForOpponents = function(e) {
var t = e;
if (3 * this.player.melds.length + t > 13) {
this.hands[13].visible = !0;
t -= 1;
}
this.showMelds();
for (var o = 0; o < t; o++) this.hands[o].visible = !0;
};
e.prototype.showMelds = function() {
for (var e = this.player.melds, t = e.length, o = g[this.viewChairID - 1], n = this.myView.getChild("melds").asCom, i = 0; i < t; i++) {
var r = n.getChild("meld" + (i + 1)), a = n.getChild("myMeld" + i);
null != a && n.removeChild(a, !0);
var s = e[i], l = o + y[s.meldType], u = fgui.UIPackage.createObject("lobby_mahjong", l).asCom;
u.setPosition(r.x, r.y);
u.name = "myMeld" + i;
n.addChild(u);
this.mountMeldImage(u, s);
}
};
e.prototype.mountMeldImage = function(e, t) {
var o = this.room.getPlayerViewChairIDByChairID(t.contributor), n = e.getChild("n1").asCom, i = e.getChild("n2").asCom, r = e.getChild("n3").asCom, a = t.meldType, s = h.MeldType;
if (a === s.enumMeldTypeSequence) {
var l = n;
t.tile1 === t.chowTile ? l = n : t.tile1 + 1 === t.chowTile ? l = i : t.tile1 + 2 === t.chowTile && (l = r);
d.TileImageMounter.mountMeldEnableImage(n, t.tile1, this.viewChairID);
d.TileImageMounter.mountMeldEnableImage(i, t.tile1 + 1, this.viewChairID);
d.TileImageMounter.mountMeldEnableImage(r, t.tile1 + 2, this.viewChairID);
this.setMeldTileDirection(!0, l, o, this.viewChairID);
} else if (a === s.enumMeldTypeTriplet) {
d.TileImageMounter.mountMeldEnableImage(n, t.tile1, this.viewChairID);
d.TileImageMounter.mountMeldEnableImage(i, t.tile1, this.viewChairID);
d.TileImageMounter.mountMeldEnableImage(r, t.tile1, this.viewChairID);
this.setMeldTileDirection(!1, i, o, this.viewChairID);
} else if (a === s.enumMeldTypeExposedKong || a === s.enumMeldTypeTriplet2Kong) {
var u = e.getChild("n4").asCom;
d.TileImageMounter.mountMeldEnableImage(n, t.tile1, this.viewChairID);
d.TileImageMounter.mountMeldEnableImage(i, t.tile1, this.viewChairID);
d.TileImageMounter.mountMeldEnableImage(r, t.tile1, this.viewChairID);
d.TileImageMounter.mountMeldEnableImage(u, t.tile1, this.viewChairID);
this.setMeldTileDirection(!1, u, o, this.viewChairID);
} else if (a === s.enumMeldTypeConcealedKong) {
u = e.getChild("n4").asCom;
var c = e.getChild("n0").asCom;
if (void 0 === t.tile1 || t.tile1 >= h.TileID.enumTid_MAX) {
u.visible = !0;
c.visible = !1;
} else {
u.visible = !1;
c.visible = !0;
d.TileImageMounter.mountMeldEnableImage(c, t.tile1, this.viewChairID);
}
}
};
e.prototype.hideFlowerOnHandTail = function() {
this.hands[13].visible = !1;
};
e.prototype.showFlowerOnHandTail = function(e) {
this.hands[13].visible = !0;
1 === this.viewChairID && d.TileImageMounter.mountTileImage(this.hands[13], e);
};
e.prototype.showHandsForMe = function(e) {
for (var t = this.player.melds, o = this.player.tilesHand, n = o.length, i = this.handsClickCtrls, r = 0, a = i; r < a.length; r++) {
a[r].tileID = null;
}
this.restoreHandsPositionAndClickCount(-1);
var s = 0, l = n;
if (3 * t.length + n > 13) {
this.hands[13].visible = !0;
if (e) {
d.TileImageMounter.mountTileImage(this.hands[13], o[0]);
i[13].tileID = o[0];
s = 1;
} else {
d.TileImageMounter.mountTileImage(this.hands[13], o[n - 1]);
i[13].tileID = o[n - 1];
l = n - 1;
}
}
this.showMelds();
for (var u = 0, c = s; c < l; c++) {
var h = this.hands[u];
d.TileImageMounter.mountTileImage(h, o[c]);
h.visible = !0;
i[u].tileID = o[c];
if (this.player.isRichi) {
this.setGray(h);
i[u].isGray = !0;
}
u += 1;
}
};
e.prototype.hand2Exposed = function(e) {
this.hideLights();
var t = this.player.melds, o = this.player.tilesHand;
this.showMelds();
var n = o.length, i = 0, r = n;
if (3 * t.length + n > 13) {
var a = this.lights[13];
if (e) {
d.TileImageMounter.mountTileImage(a, o[n - 1]);
a.visible = !0;
r = n - 1;
} else {
d.TileImageMounter.mountTileImage(a, o[0]);
a.visible = !0;
i = 1;
}
}
for (var s = 0, l = i; l < r; l++) {
a = this.lights[s];
d.TileImageMounter.mountTileImage(a, o[l]);
a.visible = !0;
s += 1;
}
};
e.prototype.clearAllowedActionsView = function(e) {
if (!e) {
this.clearDiscardable();
this.hideTing();
}
this.hideOperationButtons();
this.room.hideTingDataView();
};
e.prototype.onHandTileBtnClick2 = function(e) {
var t = this.handsClickCtrls;
if (null !== this.player) {
var o = t[e];
if (o.isDiscardable) if (void 0 !== o.readyHandList && null !== o.readyHandList && o.readyHandList.length > 0) {
for (var n = [], i = 0; i < o.readyHandList.length; i += 2) n.push(new c.TingPai(o.readyHandList[i], 1, o.readyHandList[i + 1]));
this.room.showTingDataView(n);
} else this.room.hideTingDataView(); else o.isGray && (this.alreadyShowNonDiscardAbleTips || (this.alreadyShowNonDiscardAbleTips = !0));
} else a.Logger.debug("player === null");
};
e.prototype.restoreHandsPositionAndClickCount = function(e) {
for (var t = 0; t < 14; t++) if (t !== e) {
var o = this.handsClickCtrls[t], n = this.handsOriginPos[t];
o.h.y = n.y;
o.isNormalState = !0;
}
};
e.prototype.showPlayerInfo = function(e) {
this.head.headView.visible = !0;
this.head.headView.onClick(this.player.onPlayerInfoClick, this.player);
var t = e.nick;
void 0 !== t && "" !== t || (t = e.userID);
t.length > 8 && (t = t.substring(0, 8) + "...");
this.head.nameText.text = t;
this.head.nameText.visible = !0;
a.CommonFunction.setHead(this.head.headLoader, e.headIconURI, e.gender);
};
e.prototype.showOwner = function() {
var e = this.player;
this.head.roomOwnerFlag.visible = e.isMe();
};
e.prototype.playDrawFlowerAnimation = function() {
return i(this, void 0, Promise, function() {
return r(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.playerOperationEffect("Effect_zi_buhua") ];

case 1:
e.sent();
return [ 4, this.room.coWaitSeconds(.5) ];

case 2:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.playerOperationEffect = function(e, t) {
return i(this, void 0, Promise, function() {
return r(this, function(o) {
switch (o.label) {
case 0:
return t ? [ 4, this.roomHost.animationMgr.coPlay("lobby/prefabs/mahjong/" + e, this.aniPos.node) ] : [ 3, 2 ];

case 1:
o.sent();
return [ 3, 3 ];

case 2:
this.roomHost.animationMgr.play("lobby/prefabs/mahjong/" + e, this.aniPos.node);
o.label = 3;

case 3:
return [ 2 ];
}
});
});
};
e.prototype.playerDonateEffect = function(e) {
this.roomHost.animationMgr.play("lobby/prefabs/donate/" + e, this.head.headView.node);
};
e.prototype.playReadyHandEffect = function() {};
e.prototype.setGray = function(e) {
e.grayed = !0;
};
e.prototype.clearGray = function(e) {
e.grayed = !1;
};
e.prototype.getUserInfoPos = function() {
return this.viewUnityNode.node.convertToNodeSpaceAR(this.userInfoPos.parent.node.convertToWorldSpaceAR(new cc.Vec2(this.userInfoPos.x, this.userInfoPos.y)));
};
e.prototype.showChatMsg = function(e) {
if (void 0 !== e && null !== e) {
void 0 === this.msgTimerCB && (this.msgTimerCB = this.hideChatMsg.bind(this));
this.qipaoText.text = e;
this.qipao.visible = !0;
this.roomHost.component.unschedule(this.msgTimerCB);
this.roomHost.component.scheduleOnce(this.msgTimerCB, 3);
}
};
e.prototype.hideChatMsg = function() {
this.qipao.visible = !1;
};
e.prototype.initOtherView = function() {
this.userInfoPos = this.myView.getChild("userInfoPos");
this.discardTips = this.myView.getChild("discardTip").asCom;
this.discardTipsTile = this.discardTips.getChild("card").asCom;
this.qipao = this.myView.getChild("qipao").asCom;
this.qipaoText = this.qipao.getChild("text");
};
e.prototype.initHeadView = function() {
var e = new f();
e.headView = this.myView.getChild("head").asCom;
e.headView.visible = !1;
e.pos = e.headView.getChild("pos");
e.headLoader = e.headView.getChild("n1").asLoader;
e.readyIndicator = this.myView.getChild("ready");
e.readyIndicator.visible = !1;
e.ting = this.myView.getChild("ting");
e.ting.visible = !1;
e.roomOwnerFlag = this.myView.getChild("owner");
e.roomOwnerFlag.visible = !1;
e.bankerFlag = this.myView.getChild("zhuang");
e.bankerFlag.visible = !1;
e.continuousBankerFlag = this.myView.getChild("lianzhuang");
e.continuousBankerFlag.visible = !1;
e.huaNode = this.myView.getChild("hua");
e.huaNode.visible = !1;
e.huaNodeText = this.myView.getChild("huaText");
e.huaNodeText.visible = !1;
e.nameText = this.myView.getChild("nameText");
e.nameText.visible = !1;
e.onUpdateBankerFlag = function(t, o) {
if (t) if (o) {
e.bankerFlag.visible = !1;
e.continuousBankerFlag.visible = !0;
} else {
e.bankerFlag.visible = !0;
e.continuousBankerFlag.visible = !1;
} else {
e.bankerFlag.visible = !1;
e.continuousBankerFlag.visible = !1;
}
};
e.hideAll = function() {
e.headView.visible = !1;
e.readyIndicator.visible = !1;
e.ting.visible = !1;
e.roomOwnerFlag.visible = !1;
e.bankerFlag.visible = !1;
e.continuousBankerFlag.visible = !1;
e.huaNode.visible = !1;
e.huaNodeText.visible = !1;
e.nameText.visible = !1;
};
this.head = e;
};
e.prototype.initPlayerStatus = function() {
var e = this, t = [];
t[h.PlayerState.PSNone] = function() {
e.head.readyIndicator.visible = !1;
1 === e.viewChairID && (e.checkReadyHandBtn.visible = !1);
};
t[h.PlayerState.PSReady] = function() {
e.head.readyIndicator.visible = !0;
e.head.headView.grayed = !1;
e.showOwner();
};
t[h.PlayerState.PSOffline] = function() {
e.head.readyIndicator.visible = !1;
e.head.headView.grayed = !0;
};
t[h.PlayerState.PSPlaying] = function() {
e.head.readyIndicator.visible = !1;
e.head.headView.grayed = !1;
e.showOwner();
};
this.onUpdateStatus = t;
};
e.prototype.setMeldTileDirection = function(e, t, o, n) {
if (o > 0 && n > 0) {
var i = t.getChild("ts").asLoader;
if (null != i) {
if (e) i.url = "ui://dafeng/ts_chi"; else {
var r = o - n;
1 === r || -3 === r ? i.url = "ui://dafeng/ts_xia" : 2 === r || -2 === r ? i.url = "ui://dafeng/ts_dui" : 3 !== r && -1 !== r || (i.url = "ui://dafeng/ts_shang");
}
i.visible = !0;
}
}
};
e.prototype.onHandTileBtnClick = function(e) {
var t = this.handsClickCtrls[e], o = this.player;
if (t.isDiscardable) {
if (void 0 !== t.readyHandList && null !== t.readyHandList && t.readyHandList.length > 0) {
for (var n = [], i = 0; i < t.readyHandList.length; i += 2) n.push(new c.TingPai(t.readyHandList[i], 1, t.readyHandList[i + 1]));
this.room.showTingDataView(n);
} else this.room.hideTingDataView();
var r = this.lastClickTime;
this.lastClickTime = this.roomHost.timeElapsed;
var s = !1;
this.lastClickIndex === e && this.lastClickTime - r <= .5 && (s = !0);
this.lastClickIndex = e;
if (s) if (o.waitSkip) {
this.restoreHandsPositionAndClickCount(-1);
this.room.hideTingDataView();
} else {
o.onPlayerDiscardTile(t.tileID);
this.clearAllowedActionsView(!1);
} else {
var l = t.isNormalState;
t.isNormalState = !t.isNormalState;
if (l) {
this.restoreHandsPositionAndClickCount(e);
this.moveHandUp(e);
} else this.restoreHandPositionAndClickCount(e);
}
} else if (t.isGray && !this.alreadyShowNonDiscardAbleTips) {
a.Dialog.prompt("本轮不能出与该牌组合的牌，请选择其他牌");
this.alreadyShowNonDiscardAbleTips = !0;
}
};
e.prototype.onCheckReadyHandBtnClick = function() {
var e = this.player.readyHandList;
if (!this.room.isListensObjVisible() && null != e && e.length > 0) {
for (var t = [], o = 0; o < e.length; o += 2) t.push(new c.TingPai(e[o], 1, e[o + 1]));
this.room.showTingDataView(t);
} else this.room.hideTingDataView();
};
e.prototype.onDrag = function(e, t) {
var o = this, n = {
x: e.x,
y: e.y
}, i = !1, r = new l.ClickCtrl();
e.draggable = !0;
var a = [ e.x - .5 * e.width, e.x + .5 * e.width, e.y - .5 * e.height, e.y + .5 * e.height ], s = function() {
var e = o.player;
if (null === e) return !1;
var n = o.handsClickCtrls;
return (r = n[t]).isDiscardable && !e.waitSkip;
}, u = function(e, t) {
return e > a[0] && e < a[1] && t > a[2] && t < a[3];
};
e.on(fgui.Event.DRAG_START, function() {
if (i = s()) {
o.restoreHandsPositionAndClickCount(t);
o.dragHand.visible = !0;
d.TileImageMounter.mountTileImage(o.dragHand, o.handsClickCtrls[t].tileID);
o.dragHand.getChild("ting").visible = o.handsClickCtrls[t].t.visible;
}
}, this);
e.on(fgui.Event.DRAG_MOVE, function() {
if (i) o.dragHand.setPosition(e.x, e.y); else {
e.x = n.x;
e.y = n.y;
}
}, this);
e.on(fgui.Event.DRAG_END, function() {
if (i) {
e.visible = !1;
o.dragHand.visible = !1;
if (u(e.x, e.y)) {
e.visible = !0;
e.x = n.x;
e.y = n.y;
} else {
e.visible = !1;
e.x = n.x;
e.y = n.y;
if (!o.player.waitSkip) {
o.player.onPlayerDiscardTile(r.tileID);
o.clearAllowedActionsView(!1);
}
}
}
}, this);
};
e.prototype.restoreHandPositionAndClickCount = function(e) {
var t = this.handsClickCtrls[e], o = this.handsOriginPos[e];
t.h.y = o.y;
t.isNormalState = !0;
};
e.prototype.hideTing = function() {
for (var e = 0; e < 14; e++) {
var t = this.handsClickCtrls[e];
null != t && null != t.t && (t.t.visible = !1);
}
};
e.prototype.moveHandUp = function(e) {
var t = this.handsOriginPos[e];
this.handsClickCtrls[e].h.y = t.y - 30;
};
e.prototype.clearDiscardable = function() {
if (!this.player.isRichi) for (var e = 0, t = this.handsClickCtrls; e < t.length; e++) {
var o = t[e];
o.isDiscardable = null;
if (o.isGray) {
o.isGray = !1;
this.clearGray(o.h);
}
}
};
e.prototype.initFlowers = function() {
for (var e = [], t = this.myView.getChild("flowers").asCom, o = 0; o < 12; o++) {
var n = t.getChild("n" + (o + 1)).asCom;
e[o] = n;
}
this.flowers = e;
};
e.prototype.initLights = function() {
for (var e = [], t = this.myView.getChild("lights").asCom, o = 0; o < 14; o++) {
var n = t.getChild("n" + (o + 1)).asCom;
e[o] = n;
}
this.lights = e;
};
e.prototype.initDiscards = function() {
for (var e = [], t = this.myView.getChild("discards").asCom, o = 0; o < 20; o++) {
var n = t.getChild("n" + (o + 1)).asCom;
e[o] = n;
}
this.discards = e;
};
e.prototype.initHands = function() {
for (var e = this, t = [], o = [], n = [], i = this.myView.getChild("hands").asCom, r = 1 === this.viewChairID, a = function(a) {
var u = i.getChild("n" + (a + 1)).asCom;
u.name = a.toString();
u.visible = !1;
t[a] = u;
o[a] = new p(u.x, u.y);
var c = new l.ClickCtrl();
c.isNormalState = !0;
c.h = u;
c.t = u.getChild("ting");
n[a] = c;
if (r) {
s.dragHand = i.getChild("dragHand").asCom;
u.onClick(function() {
e.onHandTileBtnClick(a);
}, s);
s.onDrag(u, a);
}
}, s = this, u = 0; u < 14; u++) a(u);
this.hands = t;
this.handsOriginPos = o;
this.handsClickCtrls = n;
};
e.prototype.onClickBtn = function(e) {
var t = this;
if (void 0 === this.btnHanders) {
this.btnHanders = {};
var o = this.btnHanders;
o[l.ButtonDef.Chow] = function() {
t.player.onChowBtnClick();
};
o[l.ButtonDef.Kong] = function() {
t.player.onKongBtnClick();
};
o[l.ButtonDef.Skip] = function() {
t.player.onSkipBtnClick();
};
o[l.ButtonDef.Pong] = function() {
t.player.onPongBtnClick();
};
o[l.ButtonDef.Ting] = function() {
t.player.onReadyHandBtnClick();
};
o[l.ButtonDef.Hu] = function() {
t.player.onWinBtnClick();
};
o[l.ButtonDef.Zhua] = function() {
t.player.onFinalDrawBtnClick();
};
}
(0, this.btnHanders[e])();
};
e.prototype.initOperationButtons = function() {
var e = this;
this.buttonList = this.operationPanel.getChild("buttonList").asList;
this.buttonList.itemRenderer = this.renderButtonListItem.bind(this);
this.buttonList.on(fgui.Event.CLICK_ITEM, function(t) {
e.onClickBtn(t.name);
}, this);
this.hideOperationButtons();
this.checkReadyHandBtn = this.viewUnityNode.getChild("checkReadyHandBtn").asButton;
this.checkReadyHandBtn.onClick(this.onCheckReadyHandBtnClick, this);
};
e.prototype.renderButtonListItem = function(e, t) {
var o = this.buttonDataList[e];
t.name = o;
t.visible = !0;
var n = t.node;
n.childrenCount > 0 && n.children.forEach(function(e) {
e.active = !1;
});
this.roomHost.animationMgr.play("lobby/prefabs/mahjong/" + o, n);
};
return e;
}();
o.PlayerView = m;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"./GameRules": "GameRules",
"./PlayerInterface": "PlayerInterface",
"./RoomInterface": "RoomInterface",
"./TileImageMounter": "TileImageMounter",
"./proto/protoGame": "protoGame"
} ],
Player: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "27394qD9FtN0488SdkpEVG0", "Player");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r, a, s = e("../lobby/lcore/LCoreExports"), l = e("../lobby/views/playerInfo/PlayerInfoExports"), u = e("./AgariIndex"), c = e("./proto/protoGame"), d = e("./RoomInterface"), h = c.proto.mahjong;
(function(e) {
e.Chow = "chi";
e.Pong = "peng";
e.Kong = "gang";
e.Ting = "ting";
e.WinChuck = "hu";
e.WinDraw = "zimo";
})(r || (r = {}));
(function(e) {
e.Chow = "Effect_zi_chi";
e.Pong = "Effect_zi_peng";
e.Kong = "Effect_zi_gang";
e.Ting = "ting";
e.WinChuck = "Effect_zi_dianpao";
e.WinDraw = "Effect_zi_zimo";
e.DrawCard = "Effect_zi_zhua";
})(a || (a = {}));
var p = function() {
function e(e, t, o) {
this.userID = e;
this.chairID = t;
this.host = o;
this.resetForNewHand();
}
e.prototype.resetForNewHand = function() {
this.tilesDiscarded = [];
this.melds = [];
this.tilesFlower = [];
this.isRichi = !1;
if (this.isMe()) {
this.tilesHand = [];
this.tileCountInHand = -1;
} else {
this.tileCountInHand = 0;
this.tilesHand = null;
}
null != this.playerView && this.playerView.resetForNewHand();
};
e.prototype.isMe = function() {
return this.host.isMe(this.userID);
};
e.prototype.addHandTile = function(e) {
null != this.tilesHand ? this.tilesHand.push(e) : this.tileCountInHand = this.tileCountInHand + 1;
};
e.prototype.sortHands = function(e) {
if (null != this.tilesHand) {
var t = void 0;
e && (t = this.tilesHand.pop());
this.tilesHand.sort(function(e, t) {
return t - e;
});
e && this.tilesHand.push(t);
}
};
e.prototype.addDicardedTile = function(e) {
this.tilesDiscarded.push(e);
};
e.prototype.addDiscardedTiles = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var n = o[t];
this.tilesDiscarded.push(n);
}
};
e.prototype.removeTileFromHand = function(e) {
if (null != this.tilesHand) {
for (var t = 0; t < this.tilesHand.length; t++) if (this.tilesHand.hasOwnProperty(t)) {
if (this.tilesHand[t] === e) {
this.tilesHand.splice(t, 1);
break;
}
}
} else this.tileCountInHand = this.tileCountInHand - 1;
};
e.prototype.removeLatestDiscarded = function(e) {
var t = this.tilesDiscarded.pop();
t !== e && s.Logger.debug("llwant, removed.", t, ",expected.", e);
};
e.prototype.addFlowerTiles = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var n = o[t];
this.tilesFlower.push(n);
}
};
e.prototype.addHandTiles = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var n = o[t];
this.tilesHand.push(n);
}
};
e.prototype.addMeld = function(e) {
null !== e && this.melds.push(e);
};
e.prototype.refreshConcealedMelds = function(e) {
for (var t = 0, o = 0, n = this.melds; o < n.length; o++) {
var i = n[o];
if (i.meldType === h.MeldType.enumMeldTypeConcealedKong) {
i.tile1 = e[t];
t += 1;
}
}
};
e.prototype.addMelds = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var n = o[t];
this.melds.push(n);
}
};
e.prototype.getMeld = function(e, t) {
for (var o = 0, n = this.melds; o < n.length; o++) {
var i = n[o];
if (i.tile1 === e && i.meldType === t) return i;
}
return null;
};
e.prototype.hand2UI = function(e) {
var t = this.playerView;
t.hideHands();
this.isMe() ? this.playerView.showHandsForMe(e) : this.host.isReplayMode() ? t.hand2Exposed(e) : t.showHandsForOpponents(this.tileCountInHand);
};
e.prototype.hand2Exposed = function() {
var e = this.playerView;
e.hideHands();
e.hand2Exposed(!1);
};
e.prototype.flower2UI = function() {
this.playerView.hideFlowers();
this.playerView.showFlowers();
};
e.prototype.discarded2UI = function(e, t) {
this.playerView.showDiscarded(e, t);
};
e.prototype.hideDiscardedTips = function() {
if (this.waitDiscardReAction) {
this.waitDiscardReAction = !1;
this.playerView.discardTips.visible = !1;
}
};
e.prototype.richiIconShow = function(e) {
this.isRichi = e;
this.playerView.head.ting.visible = e;
};
e.prototype.chowResultAnimation = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
if (this.isMe()) {
this.playerView.hideHands();
this.playerView.showHandsForMe(!0);
}
this.playSound("gameb/operate", r.Chow);
return [ 4, this.playerView.playerOperationEffect(a.Chow) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.pongResultAnimation = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
if (this.isMe()) {
this.playerView.hideHands();
this.playerView.showHandsForMe(!0);
}
this.playSound("gameb/operate", r.Pong);
return [ 4, this.playerView.playerOperationEffect(a.Pong) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.exposedKongResultAnimation = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
if (this.isMe()) {
this.playerView.hideHands();
this.playerView.showHandsForMe(!0);
}
this.playSound("gameb/operate", r.Kong);
return [ 4, this.playerView.playerOperationEffect(a.Kong) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.concealedKongResultAnimation = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
if (this.isMe()) {
this.playerView.hideHands();
this.playerView.showHandsForMe(!0);
}
this.playSound("gameb/operate", r.Kong);
return [ 4, this.playerView.playerOperationEffect(a.Kong) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.triplet2KongResultAnimation = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
if (this.isMe()) {
this.playerView.hideHands();
this.playerView.showHandsForMe(!0);
}
this.playSound("gameb/operate", r.Kong);
return [ 4, this.playerView.playerOperationEffect(a.Kong) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.playZhuaPaiAnimation = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
if (this.isMe()) {
this.playerView.hideHands();
this.playerView.showHandsForMe(!0);
}
return [ 4, this.playerView.playerOperationEffect(a.DrawCard) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.playZiMoAnimation = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
this.playSound("gameb/operate", r.WinDraw);
return [ 4, this.playerView.playerOperationEffect(a.WinDraw) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.playDianPaoAnimation = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
this.playSound("gameb/operate", r.WinChuck);
return [ 4, this.playerView.playerOperationEffect(a.WinChuck) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.playChiChongAnimation = function() {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
this.playSound("gameb/operate", r.WinChuck);
return [ 4, this.playerView.playerOperationEffect(a.WinChuck) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
e.prototype.readyHandEffect = function() {
this.playSound("gameb/operate", r.Ting);
this.playerView.playReadyHandEffect();
};
e.prototype.playReadTileSound = function(e) {
var t = +u.AgariIndex.tileId2ArtId(e);
if (t >= 51 && t <= 58) ; else {
var o = "tile" + t;
11 === t ? o = "tile" + t + "_1" : 29 === t && (o = "tile" + t + "_1");
this.playSound("gameb/tile", o);
}
};
e.prototype.bindView = function(e) {
this.playerView = e;
e.player = this;
e.initCardLists();
e.showPlayerInfo(this.playerInfo);
e.showOwner();
};
e.prototype.unbindView = function() {
var e = this.playerView;
if (null != e) {
e.player = null;
this.playerView = null;
e.hideAll();
}
};
e.prototype.updateByPlayerInfo = function(e) {
this.state = e.state;
this.playerInfo = new d.PlayerInfo(e);
};
e.prototype.discardOutTileID = function(e) {
this.removeTileFromHand(e);
this.sortHands(!1);
this.hand2UI(!1);
this.playReadTileSound(e);
};
e.prototype.onReadyHandBtnClick = function() {
this.playerView.hideOperationButtons();
if (this.host.getBankerChairID() === this.chairID) {
for (var e = this.playerView.handsClickCtrls, t = 1; t < 14; t++) {
var o = e[t];
if (null != o.tileID) {
o.isDiscardable = o.t.visible;
if (!o.t.visible) {
o.isGray = !0;
this.playerView.setGray(o.h);
}
}
}
this.flagsTing = !0;
this.waitSkip = !1;
} else {
var n = new c.proto.mahjong.MsgPlayerAction();
n.qaIndex = this.allowedActionMsg.qaIndex;
n.action = h.ActionType.enumActionType_FirstReadyHand;
n.flags = 1;
this.sendActionMsg(n);
}
};
e.prototype.onFinalDrawBtnClick = function() {
if (null != this.allowedActionMsg) {
var e = new c.proto.mahjong.MsgPlayerAction();
e.qaIndex = this.allowedActionMsg.qaIndex;
e.action = h.ActionType.enumActionType_CustomB;
this.sendActionMsg(e);
}
this.playerView.clearAllowedActionsView(!1);
};
e.prototype.onChowBtnClick = function() {
if (null != this.allowedReActionMsg) {
var e = new c.proto.mahjong.MsgPlayerAction();
e.qaIndex = this.allowedReActionMsg.qaIndex;
e.action = h.ActionType.enumActionType_CHOW;
var t = this.allowedReActionMsg.meldsForAction, o = this.selectMeldFromMeldsForAction(t, h.MeldType.enumMeldTypeSequence);
e.tile = this.allowedReActionMsg.victimTileID;
if (o.length > 1) this.host.showOrHideMeldsOpsPanel(o, e); else {
e.meldType = o[0].meldType;
e.meldTile1 = o[0].tile1;
this.sendActionMsg(e);
}
}
this.playerView.clearAllowedActionsView(!1);
};
e.prototype.onPongBtnClick = function() {
if (null != this.allowedReActionMsg) {
var e = new c.proto.mahjong.MsgPlayerAction();
e.qaIndex = this.allowedReActionMsg.qaIndex;
e.action = h.ActionType.enumActionType_PONG;
var t = this.allowedReActionMsg.meldsForAction, o = this.selectMeldFromMeldsForAction(t, h.MeldType.enumMeldTypeTriplet);
e.tile = this.allowedReActionMsg.victimTileID;
e.meldType = o[0].meldType;
e.meldTile1 = o[0].tile1;
this.sendActionMsg(e);
}
this.playerView.clearAllowedActionsView(!1);
};
e.prototype.onKongBtnClick = function() {
if (null != this.allowedActionMsg) {
(d = new c.proto.mahjong.MsgPlayerAction()).qaIndex = this.allowedActionMsg.qaIndex;
var e = this.allowedActionMsg.meldsForAction, t = this.selectMeldFromMeldsForAction(e, h.MeldType.enumMeldTypeConcealedKong), o = this.selectMeldFromMeldsForAction(e, h.MeldType.enumMeldTypeTriplet2Kong), n = [], i = h.ActionType.enumActionType_KONG_Triplet2;
if (t.length > 0) {
i = h.ActionType.enumActionType_KONG_Concealed;
for (var r = 0, a = t; r < a.length; r++) {
var s = a[r];
n.push(s);
}
}
if (o.length > 0) for (var l = 0, u = o; l < u.length; l++) {
s = u[l];
n.push(s);
}
if (n.length > 1) this.host.showOrHideMeldsOpsPanel(n, d); else {
d.action = i;
d.tile = n[0].tile1;
d.meldType = n[0].meldType;
d.meldTile1 = n[0].tile1;
this.sendActionMsg(d);
}
} else if (null != this.allowedReActionMsg) {
var d;
(d = new c.proto.mahjong.MsgPlayerAction()).qaIndex = this.allowedReActionMsg.qaIndex;
d.action = h.ActionType.enumActionType_KONG_Exposed;
e = this.allowedReActionMsg.meldsForAction;
var p = this.selectMeldFromMeldsForAction(e, h.MeldType.enumMeldTypeExposedKong);
d.tile = this.allowedReActionMsg.victimTileID;
d.meldType = p[0].meldType;
d.meldTile1 = p[0].tile1;
this.sendActionMsg(d);
}
this.playerView.clearAllowedActionsView(!1);
};
e.prototype.onWinBtnClick = function() {
if (null != this.allowedActionMsg) {
(e = new c.proto.mahjong.MsgPlayerAction()).qaIndex = this.allowedActionMsg.qaIndex;
e.action = h.ActionType.enumActionType_WIN_SelfDrawn;
this.sendActionMsg(e);
} else if (null != this.allowedReActionMsg) {
var e;
(e = new c.proto.mahjong.MsgPlayerAction()).qaIndex = this.allowedReActionMsg.qaIndex;
e.action = h.ActionType.enumActionType_WIN_Chuck;
e.tile = this.allowedReActionMsg.victimTileID;
this.sendActionMsg(e);
}
this.playerView.clearAllowedActionsView(!1);
};
e.prototype.onSkipBtnClick = function() {
if (this.isGuoHuTips) this.isGuoHuTips = !1; else {
var e = !1;
if (null != this.allowedActionMsg) {
var t = this.allowedActionMsg.allowedActions;
e = !0;
if (0 != (t & h.ActionType.enumActionType_FirstReadyHand)) {
if (this.host.getBankerChairID() !== this.chairID) {
(o = new c.proto.mahjong.MsgPlayerAction()).qaIndex = this.allowedActionMsg.qaIndex;
o.action = h.ActionType.enumActionType_FirstReadyHand;
o.flags = 0;
this.sendActionMsg(o);
e = !1;
}
} else if (0 != (t & h.ActionType.enumActionType_SKIP) && 0 == (t & h.ActionType.enumActionType_DISCARD)) {
(o = new c.proto.mahjong.MsgPlayerAction()).qaIndex = this.allowedActionMsg.qaIndex;
o.action = h.ActionType.enumActionType_SKIP;
this.sendActionMsg(o);
e = !1;
}
} else if (null != this.allowedReActionMsg) {
var o;
(o = new c.proto.mahjong.MsgPlayerAction()).qaIndex = this.allowedReActionMsg.qaIndex;
o.action = h.ActionType.enumActionType_SKIP;
this.sendActionMsg(o);
}
this.playerView.clearAllowedActionsView(e);
this.playerView.restoreHandsPositionAndClickCount(-1);
this.waitSkip = !1;
}
};
e.prototype.autoDiscard = function() {
if (null != this.allowedActionMsg) {
if (0 != (this.allowedActionMsg.allowedActions & h.ActionType.enumActionType_WIN_SelfDrawn)) return;
var e = this.allowedActionMsg.tipsForAction;
if (1 === e.length) {
var t = e[1].targetTile;
this.onPlayerDiscardTile(t);
this.playerView.clearAllowedActionsView(!1);
}
}
};
e.prototype.onPlayerDiscardTile = function(e) {
if (null != this.allowedActionMsg) {
this.discardToDeskOfMe(e);
var t = new c.proto.mahjong.MsgPlayerAction();
t.qaIndex = this.allowedActionMsg.qaIndex;
t.action = h.ActionType.enumActionType_DISCARD;
t.tile = e;
if (this.flagsTing) {
t.flags = 1;
this.flagsTing = !1;
}
this.sendActionMsg(t);
this.myDiscardAction(e);
for (var o = 0, n = this.allowedActionMsg.tipsForAction; o < n.length; o++) {
var i = n[o];
if (i.targetTile === e) {
var r = i.readyHandList;
this.updateReadyHandList(r);
break;
}
}
}
return !0;
};
e.prototype.getPlayInfo = function() {
return this.playerInfo;
};
e.prototype.updateReadyHandList = function(e) {
this.readyHandList = e;
void 0 !== this.readyHandList && null !== this.readyHandList && this.readyHandList.length > 0 ? this.playerView.checkReadyHandBtn.visible = !0 : this.playerView.checkReadyHandBtn.visible = !1;
};
e.prototype.onChatMsg = function(e) {
void 0 !== e.buildinId && "" !== e.buildinId && this.playSound("commonLanguage", "speak" + e.buildinId);
this.playerView.showChatMsg(e.msg);
};
e.prototype.onPlayerInfoClick = function() {
var e = this.playerView.getUserInfoPos(), t = this.host.getRoomHost();
null === t && s.Logger.debug("roomHost === null");
var o = t.component.getComponent(l.PlayerInfoView);
null === o && (o = t.component.addComponent(l.PlayerInfoView));
o.showUserInfoView(t.getLobbyModuleLoader(), this.host, this.playerInfo, e, !1 === this.isMe());
};
e.prototype.playSound = function(e, t) {
var o = "";
o = 1 === this.playerInfo.gender ? e + "/boy/" + t : e + "/girl/" + t;
s.SoundMgr.playEffectAudio(o);
};
e.prototype.myDiscardAction = function(e) {
this.discardOutTileID(e);
this.playerView.enlargeDiscarded(e, !0);
};
e.prototype.selectMeldFromMeldsForAction = function(e, t) {
for (var o = [], n = 0, i = e; n < i.length; n++) {
var r = i[n];
r.meldType === t && o.push(r);
}
return o;
};
e.prototype.discardToDeskOfMe = function(e) {
this.host.cleanUI();
this.addDicardedTile(e);
this.discarded2UI(!0, !1);
};
e.prototype.sendActionMsg = function(e) {
var t = c.proto.mahjong.MsgPlayerAction.encode(e);
this.host.sendActionMsg(t);
};
return e;
}();
o.Player = p;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"../lobby/views/playerInfo/PlayerInfoExports": "PlayerInfoExports",
"./AgariIndex": "AgariIndex",
"./RoomInterface": "RoomInterface",
"./proto/protoGame": "protoGame"
} ],
PromiseDeferred: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "07b6fQrKg9Hw57TyqrIf2nk", "PromiseDeferred");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {
var e = this;
this.state = "pending";
this.fate = "unresolved";
this.promise = new Promise(function(t, o) {
e.mresolve = t;
e.mreject = o;
});
this.promise.then(function() {
return e.state = "fulfilled";
}, function() {
return e.state = "rejected";
});
}
e.prototype.resolve = function(e) {
if ("resolved" === this.fate) throw Error("Deferred cannot be resolved twice");
this.fate = "resolved";
this.mresolve(e);
};
e.prototype.reject = function(e) {
if ("resolved" === this.fate) throw Error("Deferred cannot be resolved twice");
this.fate = "resolved";
this.mreject(e);
};
e.prototype.isResolved = function() {
return "resolved" === this.fate;
};
e.prototype.isPending = function() {
return "pending" === this.state;
};
e.prototype.isFulfilled = function() {
return "fulfilled" === this.state;
};
e.prototype.isRejected = function() {
return "rejected" === this.state;
};
return e;
}();
o.Deferred = n;
cc._RF.pop();
}, {} ],
QuicklyCreateRoomView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2a181ak2/BFsYsSgU8w7la9", "QuicklyCreateRoomView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../../lcore/LCoreExports"), a = e("../../../proto/protoLobby"), s = e("../../NewRoomView"), l = e("./RoomRuleString"), u = cc._decorator.ccclass, c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.show = function(e) {
this.clubInfo = e;
this.initView();
this.win.show();
};
t.prototype.saveConfig = function(e) {
r.Logger.debug("saveConfig ruleJson = ", e);
this.setConfig(e);
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "quicklyCreateRoom").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.view.getChild("editBtn").onClick(this.onEditBtnClick, this);
this.updateView();
};
t.prototype.onEditBtnClick = function() {
this.addComponent(s.NewRoomView).showView(r.NewRoomViewPath.Form_Club_Setting, this.clubInfo, this);
};
t.prototype.setConfig = function(e) {
var t = this, o = r.DataStore.getString(r.KeyConstants.TOKEN, ""), n = "" + r.LEnv.rootURL + r.LEnv.setRoomOptions + "?&tk=" + o + "&clubID=" + this.clubInfo.baseInfo.clubID + "&options=" + e;
this.clubRequest(n, function(e, o) {
var n = e.response, i = null;
if (null !== n) {
var r = a.proto.club.MsgClubReply.decode(n);
if (r.replyCode === a.proto.club.ClubReplyCode.RCOperation) {
i = a.proto.club.MsgClubInfo.decode(r.content);
t.clubInfo.createRoomOptions = i.createRoomOptions;
t.updateView();
}
}
});
};
t.prototype.getRoomConfig = function() {
return l.RoomRuleString.getRoomRuleStr(this.clubInfo.createRoomOptions);
};
t.prototype.updateView = function() {
var e = this.view.getController("hasConfig");
null === this.clubInfo.createRoomOptions || "" === this.clubInfo.createRoomOptions ? e.selectedIndex = 1 : e.selectedIndex = 0;
var t = this.getRoomConfig();
this.view.getChild("textComponent").asCom.getChild("text").text = t;
};
t.prototype.clubRequest = function(e, t) {
if (null === e) return null;
r.Logger.debug("clubRequest url = ", e);
r.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t = i([ u ], t);
}(cc.Component);
o.QuicklyCreateRoomView = c;
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports",
"../../../proto/protoLobby": "protoLobby",
"../../NewRoomView": "NewRoomView",
"./RoomRuleString": "RoomRuleString"
} ],
QuitClubView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c9e6f7t4kBF1astfodaQ8xp", "QuitClubView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../../lcore/LCoreExports"), r = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.view = null;
return t;
}
t.prototype.bind = function(e, t) {
this.settingPopupView = e;
this.view.getChild("confirmText").asRichTextField.text = '确定要退出<font color="#96693a"> ' + t + " </font>吗?";
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "quitClubCom").asCom;
i.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.view.getChild("confirmBtn").asButton.onClick(this.onConfirmBtnClick, this);
};
t.prototype.onConfirmBtnClick = function() {
this.settingPopupView.quitClub();
this.destroy();
};
return t;
}(cc.Component);
o.QuitClubView = r;
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports"
} ],
ReplayA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "344e3/IyRVHMqhhko1wgfvq", "ReplayA");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../lobby/lcore/LCoreExports"), a = e("./handlers/HandlerActionResultDiscardedA"), s = e("./handlers/HandlerActionResultSkipA"), l = e("./handlers/HandlerMsgHandOverA"), u = e("./proto/protoGameA"), c = function() {
function e(e) {
this.actionHandlers = {};
this.msgHandRecord = e;
}
e.prototype.gogogo = function(e) {
return n(this, void 0, Promise, function() {
var t, o, n, a, s, l, u, c = this;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("gogogogo");
this.room = e;
(t = this.msgHandRecord.players).forEach(function(t) {
t.userID === c.room.getRoomHost().user.userID && e.createMyPlayer(c.clonePlayer(t));
});
t.forEach(function(t) {
t.userID !== c.room.getRoomHost().user.userID && e.createPlayerByInfo(c.clonePlayer(t));
});
this.armActionHandler();
this.speed = .5;
o = new r.MsgQueue({});
this.mq = o;
this.actionStep = -1;
this.startStepTimer();
this.modalLayerColor = fgui.GRoot.inst.modalLayer.color;
n = new cc.Color(0, 0, 0, 0);
fgui.GRoot.inst.modalLayer.color = n;
this.room.getRoomHost().loader.fguiAddPackage("lobby/fui_replay/lobby_replay");
a = fgui.UIPackage.createObject("lobby_replay", "operations").asCom;
(s = new fgui.Window()).contentPane = a;
s.modal = !0;
this.win = s;
this.initControlView(a);
this.win.show();
l = !0;
i.label = 1;

case 1:
return l ? [ 4, this.mq.waitMsg() ] : [ 3, 5 ];

case 2:
if ((u = i.sent()).mt === r.MsgType.quit) {
l = !1;
return [ 3, 5 ];
}
return u.mt !== r.MsgType.replay ? [ 3, 4 ] : [ 4, this.doReplayStep() ];

case 3:
i.sent();
i.label = 4;

case 4:
return [ 3, 1 ];

case 5:
this.win.hide();
this.win.dispose();
fgui.GRoot.inst.modalLayer.color = this.modalLayerColor;
return [ 2 ];
}
});
});
};
e.prototype.cloneCards = function(e) {
for (var t = [], o = 0, n = e; o < n.length; o++) {
var i = n[o];
t.push(i);
}
return t;
};
e.prototype.clonePlayer = function(e) {
return {
state: 0,
userID: e.userID,
chairID: e.chairID,
nick: e.nick,
gender: e.gender,
headIconURI: e.headIconURI,
avatarID: e.avatarID
};
};
e.prototype.startStepTimer = function() {
var e = this, t = function() {
var t = new r.Message(r.MsgType.replay);
e.mq.pushMessage(t);
};
this.room.getRoomHost().component.schedule(t, this.speed, cc.macro.REPEAT_FOREVER);
this.timerCb = t;
};
e.prototype.initControlView = function(e) {
this.btnResume = e.getChild("resume");
this.btnPause = e.getChild("pause");
this.btnFast = e.getChild("fast");
this.btnSlow = e.getChild("slow");
this.btnBack = e.getChild("back");
this.btnResume.visible = !1;
this.btnBack.onClick(this.onBackClick, this);
this.btnPause.onClick(this.onPauseClick, this);
this.btnResume.onClick(this.onResumeClick, this);
this.btnFast.onClick(this.onFastClick, this);
this.btnSlow.onClick(this.onSlowClick, this);
};
e.prototype.onBackClick = function() {
var e = new r.Message(r.MsgType.quit);
this.mq.pushMessage(e);
};
e.prototype.onPauseClick = function() {
this.btnPause.visible = !1;
this.btnResume.visible = !0;
this.room.getRoomHost().component.unschedule(this.timerCb);
};
e.prototype.onResumeClick = function() {
this.btnPause.visible = !0;
this.btnResume.visible = !1;
this.startStepTimer();
var e = new r.Message(r.MsgType.replay);
this.mq.pushMessage(e);
};
e.prototype.onFastClick = function() {
if (this.speed < .2) {
r.Logger.debug("fastest speed already");
r.Dialog.prompt("已经是最快速度");
} else {
this.room.getRoomHost().component.unschedule(this.timerCb);
this.speed = this.speed / 2;
this.startStepTimer();
}
};
e.prototype.onSlowClick = function() {
if (this.speed > 3) {
r.Logger.debug("slowest speed already");
r.Dialog.prompt("已经是最慢速度");
} else {
this.room.getRoomHost().component.unschedule(this.timerCb);
this.speed = 2 * this.speed;
this.startStepTimer();
}
};
e.prototype.armActionHandler = function() {
var e = {}, t = u.proto.prunfast.ActionType;
e[t.enumActionType_SKIP] = this.skipActionHandler.bind(this);
e[t.enumActionType_DISCARD] = this.discardedActionHandler.bind(this);
this.actionHandlers = e;
};
e.prototype.doReplayStep = function() {
return n(this, void 0, Promise, function() {
var e, t, o;
return i(this, function(n) {
switch (n.label) {
case 0:
e = this.room;
if (-1 !== this.actionStep) return [ 3, 1 ];
r.Logger.debug("Replay:doReplayStep, deal");
e.resetForNewHand();
this.deal();
return [ 3, 5 ];

case 1:
t = this.msgHandRecord.actions;
if (!(this.actionStep >= t.length)) return [ 3, 3 ];
this.room.getRoomHost().component.unschedule(this.timerCb);
return [ 4, this.handOver() ];

case 2:
n.sent();
this.win.bringToFront();
return [ 3, 5 ];

case 3:
return 0 != ((o = t[this.actionStep]).flags & u.proto.pokerface.SRFlags.SRUserReplyOnly) ? [ 3, 5 ] : [ 4, this.doAction(o, t) ];

case 4:
n.sent();
n.label = 5;

case 5:
this.actionStep = this.actionStep + 1;
return [ 2 ];
}
});
});
};
e.prototype.doAction = function(e, t) {
return n(this, void 0, Promise, function() {
var o, n, a, s, l;
return i(this, function(i) {
switch (i.label) {
case 0:
o = this.room;
n = this.actionStep;
a = o.getPlayerByChairID(e.chairID);
o.setWaitingPlayer(a.chairID);
if (void 0 === (s = this.actionHandlers[e.action])) {
r.Logger.debug("Replay, no action handler:", e.action);
return [ 2 ];
}
if (e.action !== u.proto.prunfast.ActionType.enumActionType_DISCARD) return [ 3, 2 ];
l = n < t.length;
return [ 4, s(e, l) ];

case 1:
i.sent();
return [ 3, 4 ];

case 2:
return [ 4, s(e) ];

case 3:
i.sent();
i.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e.prototype.deal = function() {
var e = this.room;
e.state = u.proto.pokerface.RoomState.SRoomPlaying;
e.onUpdateStatus(e.state);
var t = this.msgHandRecord.deals;
e.bankerChairID = this.msgHandRecord.bankerChairID;
e.windFlowerID = this.msgHandRecord.windFlowerID;
var o = e.getPlayers();
Object.keys(o).forEach(function(t) {
var n = o[t];
n.state = u.proto.pokerface.PlayerState.PSPlaying;
(0, n.playerView.onUpdateStatus[n.state])(e.state);
});
t.forEach(function(t) {
var o = t.chairID, n = e.getPlayerByChairID(o);
t.cardsHand.length;
n.tilesHand = [];
n.addHandTiles(t.cardsHand);
});
Object.keys(o).forEach(function(e) {
var t = o[e];
t.sortHands();
t.hand2UI(!1);
});
var n = e.getPlayerByChairID(e.bankerChairID);
e.setWaitingPlayer(n.chairID);
};
e.prototype.handOver = function() {
return n(this, void 0, Promise, function() {
var e, t, o, n;
return i(this, function(i) {
switch (i.label) {
case 0:
e = this.msgHandRecord.handScore;
(t = {}).continueAble = !1;
if (void 0 === e || null === e) t.endType = u.proto.prunfast.HandOverType.enumHandOverType_None; else {
(o = u.proto.pokerface.MsgHandScore.decode(e)).playerScores.forEach(function(e) {
e.winType !== u.proto.prunfast.HandOverType.enumHandOverType_None && (n = e.winType);
});
t.endType = n;
t.scores = o;
}
return [ 4, l.HandlerMsgHandOverA.onHandOver(t, this.room) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.skipActionHandler = function(e) {
return n(this, void 0, Promise, function() {
var t;
return i(this, function(o) {
switch (o.label) {
case 0:
t = {
targetChairID: e.chairID
};
return [ 4, s.HandlerActionResultSkipA.onMsg(t, this.room) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
e.prototype.discardedActionHandler = function(e, t) {
return n(this, void 0, Promise, function() {
var t, o, n, s;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant, dfreplay, discarded");
t = this.cloneCards(e.cards);
o = t.shift();
(n = new u.proto.pokerface.MsgCardHand()).cards = t;
n.cardHandType = o;
(s = new u.proto.pokerface.MsgActionResultNotify()).targetChairID = e.chairID;
s.actionHand = n;
return [ 4, a.HandlerActionResultDiscardedA.onMsg(s, this.room) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
return e;
}();
o.ReplayA = c;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"./handlers/HandlerActionResultDiscardedA": "HandlerActionResultDiscardedA",
"./handlers/HandlerActionResultSkipA": "HandlerActionResultSkipA",
"./handlers/HandlerMsgHandOverA": "HandlerMsgHandOverA",
"./proto/protoGameA": "protoGameA"
} ],
Replay: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c44eeJg5TNOQa3gAQBw6dC4", "Replay");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../lobby/lcore/LCoreExports"), a = e("./handlers/HandlerActionResultChow"), s = e("./handlers/HandlerActionResultDiscarded"), l = e("./handlers/HandlerActionResultDraw"), u = e("./handlers/HandlerActionResultKongConcealed"), c = e("./handlers/HandlerActionResultKongExposed"), d = e("./handlers/HandlerActionResultPong"), h = e("./handlers/HandlerActionResultReadyHand"), p = e("./handlers/HandlerActionResultTriplet2Kong"), f = e("./handlers/HandlerMsgHandOver"), g = e("./proto/protoGame"), y = function() {
function e(e) {
this.actionHandlers = {};
this.msgHandRecord = e;
}
e.prototype.gogogo = function(e) {
return n(this, void 0, Promise, function() {
var t, o, n, a, s, l, u, c = this;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("gogogogo");
this.room = e;
(t = this.msgHandRecord.players).forEach(function(t) {
t.userID === c.room.getRoomHost().user.userID && e.createMyPlayer(c.clonePlayer(t));
});
t.forEach(function(t) {
t.userID !== c.room.getRoomHost().user.userID && e.createPlayerByInfo(c.clonePlayer(t));
});
this.armActionHandler();
this.speed = .5;
o = new r.MsgQueue({});
this.mq = o;
this.actionStep = -1;
this.startStepTimer();
this.modalLayerColor = fgui.GRoot.inst.modalLayer.color;
n = new cc.Color(0, 0, 0, 0);
fgui.GRoot.inst.modalLayer.color = n;
this.room.getRoomHost().loader.fguiAddPackage("lobby/fui_replay/lobby_replay");
a = fgui.UIPackage.createObject("lobby_replay", "operations").asCom;
(s = new fgui.Window()).contentPane = a;
s.modal = !0;
this.win = s;
this.initControlView(a);
this.win.show();
l = !0;
i.label = 1;

case 1:
return l ? [ 4, this.mq.waitMsg() ] : [ 3, 5 ];

case 2:
if ((u = i.sent()).mt === r.MsgType.quit) {
l = !1;
return [ 3, 5 ];
}
return u.mt !== r.MsgType.replay ? [ 3, 4 ] : [ 4, this.doReplayStep() ];

case 3:
i.sent();
i.label = 4;

case 4:
return [ 3, 1 ];

case 5:
this.win.hide();
this.win.dispose();
fgui.GRoot.inst.modalLayer.color = this.modalLayerColor;
return [ 2 ];
}
});
});
};
e.prototype.clonePlayer = function(e) {
return {
state: 0,
userID: e.userID,
chairID: e.chairID,
nick: e.nick,
gender: e.gender,
headIconURI: e.headIconURI,
avatarID: e.avatarID
};
};
e.prototype.startStepTimer = function() {
var e = this, t = function() {
var t = new r.Message(r.MsgType.replay);
e.mq.pushMessage(t);
};
this.room.getRoomHost().component.schedule(t, this.speed, cc.macro.REPEAT_FOREVER);
this.timerCb = t;
};
e.prototype.initControlView = function(e) {
this.btnResume = e.getChild("resume");
this.btnPause = e.getChild("pause");
this.btnFast = e.getChild("fast");
this.btnSlow = e.getChild("slow");
this.btnBack = e.getChild("back");
this.btnResume.visible = !1;
this.btnBack.onClick(this.onBackClick, this);
this.btnPause.onClick(this.onPauseClick, this);
this.btnResume.onClick(this.onResumeClick, this);
this.btnFast.onClick(this.onFastClick, this);
this.btnSlow.onClick(this.onSlowClick, this);
};
e.prototype.onBackClick = function() {
var e = new r.Message(r.MsgType.quit);
this.mq.pushMessage(e);
};
e.prototype.onPauseClick = function() {
this.btnPause.visible = !1;
this.btnResume.visible = !0;
this.room.getRoomHost().component.unschedule(this.timerCb);
};
e.prototype.onResumeClick = function() {
this.btnPause.visible = !0;
this.btnResume.visible = !1;
this.startStepTimer();
var e = new r.Message(r.MsgType.replay);
this.mq.pushMessage(e);
};
e.prototype.onFastClick = function() {
if (this.speed < .2) {
r.Logger.debug("fastest speed already");
r.Dialog.prompt("已经是最快速度");
} else {
this.room.getRoomHost().component.unschedule(this.timerCb);
this.speed = this.speed / 2;
this.startStepTimer();
}
};
e.prototype.onSlowClick = function() {
if (this.speed > 3) {
r.Logger.debug("slowest speed already");
r.Dialog.prompt("已经是最慢速度");
} else {
this.room.getRoomHost().component.unschedule(this.timerCb);
this.speed = 2 * this.speed;
this.startStepTimer();
}
};
e.prototype.armActionHandler = function() {
var e = {}, t = g.proto.mahjong.ActionType;
e[t.enumActionType_FirstReadyHand] = this.firstReadyHandActionHandler.bind(this);
e[t.enumActionType_DISCARD] = this.discardedActionHandler.bind(this);
e[t.enumActionType_DRAW] = this.drawActionHandler.bind(this);
e[t.enumActionType_CHOW] = this.chowActionHandler.bind(this);
e[t.enumActionType_PONG] = this.pongActionHandler.bind(this);
e[t.enumActionType_KONG_Exposed] = this.kongExposedActionHandler.bind(this);
e[t.enumActionType_KONG_Concealed] = this.kongConcealedActionHandler.bind(this);
e[t.enumActionType_KONG_Triplet2] = this.triplet2KongActionHandler.bind(this);
e[t.enumActionType_WIN_Chuck] = this.winChuckActionHandler.bind(this);
e[t.enumActionType_WIN_SelfDrawn] = this.winSelfDrawActionHandler.bind(this);
this.actionHandlers = e;
};
e.prototype.doReplayStep = function() {
return n(this, void 0, Promise, function() {
var e, t, o;
return i(this, function(n) {
switch (n.label) {
case 0:
e = this.room;
if (-1 !== this.actionStep) return [ 3, 1 ];
r.Logger.debug("Replay:doReplayStep, deal");
e.resetForNewHand();
this.deal();
return [ 3, 5 ];

case 1:
t = this.msgHandRecord.actions;
if (!(this.actionStep >= t.length)) return [ 3, 3 ];
this.room.getRoomHost().component.unschedule(this.timerCb);
return [ 4, this.handOver() ];

case 2:
n.sent();
this.win.bringToFront();
return [ 3, 5 ];

case 3:
return 0 != ((o = t[this.actionStep]).flags & g.proto.mahjong.SRFlags.SRUserReplyOnly) ? [ 3, 5 ] : [ 4, this.doAction(o, t) ];

case 4:
n.sent();
n.label = 5;

case 5:
this.actionStep = this.actionStep + 1;
return [ 2 ];
}
});
});
};
e.prototype.doAction = function(e, t) {
return n(this, void 0, Promise, function() {
var o, n, a, s, l;
return i(this, function(i) {
switch (i.label) {
case 0:
o = this.room;
n = this.actionStep;
a = o.getPlayerByChairID(e.chairID);
o.setWaitingPlayer(a.chairID);
if (void 0 === (s = this.actionHandlers[e.action])) {
r.Logger.debug("Replay, no action handler:", e.action);
return [ 2 ];
}
if (e.action !== g.proto.mahjong.ActionType.enumActionType_DISCARD) return [ 3, 2 ];
l = n < t.length;
return [ 4, s(e, l) ];

case 1:
i.sent();
return [ 3, 4 ];

case 2:
return [ 4, s(e) ];

case 3:
i.sent();
i.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e.prototype.deal = function() {
var e = this.room;
e.state = g.proto.mahjong.RoomState.SRoomPlaying;
e.onUpdateStatus(e.state);
var t = this.msgHandRecord.deals;
e.bankerChairID = this.msgHandRecord.bankerChairID;
e.isContinuousBanker = this.msgHandRecord.isContinuousBanker;
e.windFlowerID = this.msgHandRecord.windFlowerID;
var o = e.getPlayers();
Object.keys(o).forEach(function(t) {
var n = o[t];
n.state = g.proto.mahjong.PlayerState.PSPlaying;
(0, n.playerView.onUpdateStatus[n.state])(e.state);
});
e.setRoundMask();
e.setBankerFlag();
var n = 0;
t.forEach(function(t) {
var o = t.chairID, i = e.getPlayerByChairID(o);
n += t.tilesHand.length;
i.tilesHand = [];
i.addHandTiles(t.tilesHand);
i.addFlowerTiles(t.tilesFlower);
});
Object.keys(o).forEach(function(e) {
var t = o[e];
t.sortHands(!1);
t.hand2UI(!1);
t.flower2UI();
});
e.tilesInWall = 144 - n;
e.updateTilesInWallUI();
var i = e.getPlayerByChairID(e.bankerChairID);
e.setWaitingPlayer(i.chairID);
};
e.prototype.handOver = function() {
return n(this, void 0, Promise, function() {
var e, t, o, n;
return i(this, function(i) {
switch (i.label) {
case 0:
e = this.msgHandRecord.handScore;
(t = {}).continueAble = !1;
if (null === e || void 0 === e) t.endType = g.proto.mahjong.HandOverType.enumHandOverType_None; else {
(o = g.proto.mahjong.MsgHandScore.decode(e)).playerScores.forEach(function(e) {
e.winType !== g.proto.mahjong.HandOverType.enumHandOverType_None && e.winType !== g.proto.mahjong.HandOverType.enumHandOverType_Chucker && (n = e.winType);
});
t.endType = n;
t.scores = o;
}
return [ 4, f.HandlerMsgHandOver.onHandOver(t, this.room) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.firstReadyHandActionHandler = function(e) {
return n(this, void 0, Promise, function() {
var t;
return i(this, function(o) {
switch (o.label) {
case 0:
r.Logger.debug("llwant, dfreplay, firstReadyHand");
t = {
targetChairID: e.chairID
};
return [ 4, h.HandlerActionResultReadyHand.onMsg(t, this.room) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
e.prototype.discardedActionHandler = function(e, t) {
return n(this, void 0, Promise, function() {
var o, n, a;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant, dfreplay, discarded");
o = e.tiles;
n = {
targetChairID: e.chairID,
actionTile: o[0],
waitDiscardReAction: t
};
return [ 4, s.HandlerActionResultDiscarded.onMsg(n, this.room) ];

case 1:
i.sent();
a = this.room;
this.latestDiscardedPlayer = a.getPlayerByChairID(e.chairID);
return 0 == (e.flags & g.proto.mahjong.SRFlags.SRRichi) ? [ 3, 3 ] : [ 4, this.firstReadyHandActionHandler(e) ];

case 2:
i.sent();
i.label = 3;

case 3:
return [ 2 ];
}
});
});
};
e.prototype.drawActionHandler = function(e) {
return n(this, void 0, Promise, function() {
var t, o, n, a, s, u, c, d, h, p;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant, dfreplay, draw");
t = e.tiles;
o = [];
if ((n = t.length) > 1) for (a = 0; a < n - 1; a++) o.push(t[a]);
s = t[n - 1];
u = n;
s === g.proto.mahjong.TileID.enumTid_MAX + 1 && (u -= 1);
c = this.room;
d = c.tilesInWall - u;
h = {
targetChairID: e.chairID,
actionTile: s,
newFlowers: o,
tilesInWall: d
};
p = c.getPlayerByChairID(e.chairID);
c.setWaitingPlayer(p.chairID);
return [ 4, l.HandlerActionResultDraw.onMsg(h, c) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.chowActionHandler = function(e) {
return n(this, void 0, Promise, function() {
var t, o, n, s;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant, dfreplay, chow");
t = e.tiles;
o = {
tile1: t[0],
chowTile: t[1],
meldType: g.proto.mahjong.MeldType.enumMeldTypeSequence,
contributor: this.latestDiscardedPlayer.chairID
};
n = t[1];
s = {
targetChairID: e.chairID,
actionMeld: o,
actionTile: n
};
return [ 4, a.HandlerActionResultChow.onMsg(s, this.room) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.pongActionHandler = function(e) {
return n(this, void 0, Promise, function() {
var t, o, n;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant, dfreplay, pong");
t = e.tiles;
o = {
tile1: t[0],
meldType: g.proto.mahjong.MeldType.enumMeldTypeTriplet,
contributor: this.latestDiscardedPlayer.chairID
};
n = {
targetChairID: e.chairID,
actionMeld: o
};
return [ 4, d.HandlerActionResultPong.onMsg(n, this.room) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.kongExposedActionHandler = function(e) {
return n(this, void 0, Promise, function() {
var t, o, n;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant, dfreplay, kong-exposed");
t = e.tiles;
o = {
tile1: t[0],
meldType: g.proto.mahjong.MeldType.enumMeldTypeExposedKong,
contributor: this.latestDiscardedPlayer.chairID
};
n = {
targetChairID: e.chairID,
actionMeld: o
};
return [ 4, c.HandlerActionResultKongExposed.onMsg(n, this.room) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.kongConcealedActionHandler = function(e) {
return n(this, void 0, Promise, function() {
var t, o, n;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant, dfreplay, kong-concealed");
t = e.tiles;
o = t[0];
n = {
targetChairID: e.chairID,
actionTile: o
};
return [ 4, u.HandlerActionResultKongConcealed.onMsg(n, this.room) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.triplet2KongActionHandler = function(e) {
return n(this, void 0, Promise, function() {
var t, o, n;
return i(this, function(i) {
switch (i.label) {
case 0:
r.Logger.debug("llwant, dfreplay, triplet2kong");
t = e.tiles;
o = t[0];
n = {
targetChairID: e.chairID,
actionTile: o
};
return [ 4, p.HandlerActionResultTriplet2Kong.onMsg(n, this.room) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.winChuckActionHandler = function(e) {
return n(this, void 0, Promise, function() {
var t;
return i(this, function(o) {
r.Logger.debug("llwant, dfreplay, win chuck ");
t = this.room;
t.getPlayerByChairID(e.chairID).addHandTile(e.tiles[0]);
return [ 2 ];
});
});
};
e.prototype.winSelfDrawActionHandler = function(e) {
return n(this, void 0, Promise, function() {
return i(this, function(e) {
r.Logger.debug("llwant, dfreplay, win self draw ");
return [ 2 ];
});
});
};
return e;
}();
o.Replay = y;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"./handlers/HandlerActionResultChow": "HandlerActionResultChow",
"./handlers/HandlerActionResultDiscarded": "HandlerActionResultDiscarded",
"./handlers/HandlerActionResultDraw": "HandlerActionResultDraw",
"./handlers/HandlerActionResultKongConcealed": "HandlerActionResultKongConcealed",
"./handlers/HandlerActionResultKongExposed": "HandlerActionResultKongExposed",
"./handlers/HandlerActionResultPong": "HandlerActionResultPong",
"./handlers/HandlerActionResultReadyHand": "HandlerActionResultReadyHand",
"./handlers/HandlerActionResultTriplet2Kong": "HandlerActionResultTriplet2Kong",
"./handlers/HandlerMsgHandOver": "HandlerMsgHandOver",
"./proto/protoGame": "protoGame"
} ],
RoomA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5745cTGNQpCmY/LRXzyOYa/", "RoomA");
var n, i = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../lobby/lcore/LCoreExports"), s = e("../lobby/shareUtil/ShareExports"), l = e("./GameOverResultViewA"), u = e("./handlers/HandlerActionResultNotifyA"), c = e("./handlers/HandlerMsg2LobbyA"), d = e("./handlers/HandlerMsgActionAllowedA"), h = e("./handlers/HandlerMsgDealA"), p = e("./handlers/HandlerMsgDeletedA"), f = e("./handlers/HandlerMsgDisbandNotifyA"), g = e("./handlers/HandlerMsgDonateA"), y = e("./handlers/HandlerMsgGameOverA"), m = e("./handlers/HandlerMsgHandOverA"), b = e("./handlers/HandlerMsgKickoutA"), v = e("./handlers/HandlerMsgReActionAllowedA"), w = e("./handlers/HandlerMsgRestoreA"), C = e("./handlers/HandlerMsgRoomUpdateA"), R = e("./handlers/HandlerMsgShowTipsA"), I = e("./handlers/HandlerMsgUpdateLocationA"), T = e("./handlers/HandlerMsgUpdatePropCfgA"), _ = e("./HandResultViewA"), M = e("./PlayerA"), E = e("./proto/protoGameA"), D = e("./RoomViewA"), P = E.proto.pokerface.MessageCode, A = ((n = {})[P.OPActionAllowed] = d.HandlerMsgActionAllowedA.onMsg, 
n[P.OPReActionAllowed] = v.HandlerMsgReActionAllowedA.onMsg, n[P.OPActionResultNotify] = u.HandlerActionResultNotifyA.onMsg, 
n[P.OPDeal] = h.HandlerMsgDealA.onMsg, n[P.OPHandOver] = m.HandlerMsgHandOverA.onMsg, 
n[P.OPRoomUpdate] = C.HandlerMsgRoomUpdateA.onMsg, n[P.OPRestore] = w.HandlerMsgRestoreA.onMsg, 
n[P.OPRoomDeleted] = p.HandlerMsgDeletedA.onMsg, n[P.OPRoomShowTips] = R.HandlerMsgShowTipsA.onMsg, 
n[P.OPGameOver] = y.HandlerMsgGameOverA.onMsg, n[P.OPDisbandNotify] = f.HandlerMsgDisbandNotifyA.onMsg, 
n[P.OPKickout] = b.HandlerMsgKickoutA.onMsg, n[P.OPDonate] = g.HandlerMsgDonateA.onMsg, 
n[P.OPUpdateLocation] = I.HandlerMsgUpdateLocationA.onMsg, n[P.OP2Lobby] = c.HandlerMsg2LobbyA.onMsg, 
n[P.OPUpdatePropCfg] = T.HandlerMsgUpdatePropCfgA.onMsg, n), S = function() {
function e(e, t, o, n) {
this.handStartted = 0;
this.isDestroy = !1;
this.bankerChairID = 0;
this.players = {};
this.myUser = e;
this.host = o;
this.replay = n;
this.roomInfo = t;
var i = JSON.parse(t.config);
this.roomType = i.roomType;
this.handNum = i.handNum;
}
e.prototype.getRoomHost = function() {
return this.host;
};
e.prototype.dispatchWebsocketMsg = function(e) {
return i(this, void 0, Promise, function() {
var t;
return r(this, function(o) {
switch (o.label) {
case 0:
a.Logger.debug("Room.dispatchWebsocketMsg, ops:", e.Ops);
return void 0 === (t = A[e.Ops]) ? [ 3, 2 ] : [ 4, t(e.Data, this) ];

case 1:
o.sent();
return [ 3, 3 ];

case 2:
a.Logger.debug("room has no handler for msg, ops:", e.Ops);
o.label = 3;

case 3:
return [ 2 ];
}
});
});
};
e.prototype.getPlayerByChairID = function(e) {
var t = this, o = null;
Object.keys(this.players).forEach(function(n) {
var i = t.players[n];
i.chairID === e && (o = i);
});
return o;
};
e.prototype.getPlayerInfoByChairID = function(e) {
var t = this, o = null;
Object.keys(this.players).forEach(function(n) {
var i = t.players[n];
i.chairID === e && (o = i);
});
return o;
};
e.prototype.getRoomView = function() {
return this.roomView;
};
e.prototype.loadRoomView = function(e) {
var t = new D.RoomViewA(this, e);
this.roomView = t;
this.playBgSound();
};
e.prototype.createPlayerByInfo = function(e) {
var t = new M.PlayerA(e.userID, e.chairID, this);
t.updateByPlayerInfo(e);
var o = this.roomView.getPlayerViewByChairID(e.chairID, this.myPlayer.chairID);
t.bindView(o);
this.players[t.userID] = t;
};
e.prototype.createMyPlayer = function(e) {
var t = new M.PlayerA(e.userID, e.chairID, this);
t.updateByPlayerInfo(e);
var o = this.roomView.playerViews[1];
t.bindView(o);
this.players[t.userID] = t;
this.myPlayer = t;
};
e.prototype.onReadyButtonClick = function() {
var e = new E.proto.pokerface.GameMessage();
e.Ops = E.proto.pokerface.MessageCode.OPPlayerReady;
var t = E.proto.pokerface.GameMessage.encode(e);
this.host.sendBinary(t);
};
e.prototype.getPlayerViewChairIDByChairID = function(e) {
return (e - this.myPlayer.chairID + 3) % 3 + 1;
};
e.prototype.removePlayer = function(e) {
delete this.players[e];
};
e.prototype.sendMsg = function(e, t) {
var o = this.host;
if (null != o) {
var n = new E.proto.pokerface.GameMessage();
n.Ops = e;
null != t && (n.Data = t);
var i = E.proto.pokerface.GameMessage.encode(n);
o.sendBinary(i);
}
};
e.prototype.resetForNewHand = function() {
var e = this;
Object.keys(this.players).forEach(function(t) {
e.players[t].resetForNewHand();
});
};
e.prototype.resumeBackMusicVolume = function() {};
e.prototype.onExitButtonClicked = function() {};
e.prototype.onDissolveClicked = function() {
this.sendMsg(E.proto.pokerface.MessageCode.OPDisbandRequest);
};
e.prototype.updateDisbandVoteView = function(e) {
this.msgDisbandNotify = e;
this.roomView.updateDisbandVoteView(e);
};
e.prototype.sendDisbandAgree = function(e) {
var t = new E.proto.pokerface.MsgDisbandAnswer();
t.agree = e;
var o = E.proto.pokerface.MsgDisbandAnswer.encode(t);
this.sendMsg(E.proto.pokerface.MessageCode.OPDisbandAnswer, o);
};
e.prototype.getRoomConfig = function() {};
e.prototype.loadHandResultView = function(e) {
this.host.component.addComponent(_.HandResultViewA).showView(this, e);
};
e.prototype.loadGameOverResultView = function(e) {
this.host.component.addComponent(l.GameOverResultViewA).showView(this, e);
};
e.prototype.sendDonate = function(e, t) {
var o = this.myPlayer.chairID, n = new E.proto.pokerface.MsgDonate();
n.fromChairID = o;
n.toChairID = t;
n.itemID = e;
var i = E.proto.pokerface.MsgDonate.encode(n);
this.sendMsg(E.proto.pokerface.MessageCode.OPDonate, i);
};
e.prototype.showDonate = function(e) {
if (null != e) {
var t = e.itemID, o = this.roomView.donateMoveObj, n = this.getPlayerByChairID(e.fromChairID), i = this.getPlayerByChairID(e.toChairID);
if (null == n || null == i) {
a.Logger.debug("llwant, fromPlayer || toPlayer is null...");
return;
}
var r = n.playerView.head.headView.node.position, s = i.playerView.head.headView.node.position, l = "", u = "", c = "";
(0, [ function() {
l = "dj_meigui";
u = "Effect_baojv_hua";
c = "daoju_hua";
}, function() {
l = "dj_ganbei";
u = "Effect_daojv_jiubei";
c = "daoju_pijiu";
}, function() {
l = "dj_jd";
u = "Effect_daojv_jidan";
c = "daoju_jidan";
}, function() {
l = "dj_tuoxie";
u = "Effect_daojv_tuoxie";
c = "daoju_tuoxie";
}, function() {
l = "dj_qj";
u = "Effect_daojv_quanji";
c = "daoju_quanji";
}, function() {
l = "dj_bb";
u = "Effect_daojv_shiren";
c = "daoju_shiren";
}, function() {
l = "dj_hj";
u = "Effect_daojv_hongjiu";
c = "daoju_hongjiu";
}, function() {
l = "dj_mmd";
u = "Effect_daojv_zui";
c = "daoju_zui";
} ][t - 1])();
if (null == l || null == u) {
a.Logger.debug("llwant, sprite || effobjSUB is null...");
return;
}
o.node.position = r;
o.url = "ui://lobby_player_info/" + l;
o.visible = !0;
var d = cc.moveTo(1, s);
o.node.runAction(d);
this.getRoomHost().component.scheduleOnce(function() {
o.visible = !1;
i.playerView.playerDonateEffect(u);
"" !== c && a.SoundMgr.playEffectAudio("daoju/" + c);
}, 1);
}
};
e.prototype.isMe = function(e) {
return this.myUser.userID === e;
};
e.prototype.isReplayMode = function() {
return void 0 !== this.replay;
};
e.prototype.getBankerChairID = function() {
return this.bankerChairID;
};
e.prototype.sendActionMsg = function(e) {
this.sendMsg(E.proto.pokerface.MessageCode.OPAction, e);
};
e.prototype.quit = function() {
this.stopBgSound();
this.host.quit();
};
e.prototype.getPlayerByUserID = function(e) {
return this.players[e];
};
e.prototype.getPlayerByCharID = function(e) {
return this.players[e];
};
e.prototype.getMyPlayer = function() {
return this.myPlayer;
};
e.prototype.getMyPlayerInfo = function() {
return this.myPlayer.playerInfo;
};
e.prototype.setWaitingPlayer = function(e) {
var t = this.getPlayerByChairID(e);
this.roomView.setWaitingPlayer(t.playerView);
};
e.prototype.getPlayers = function() {
return this.players;
};
e.prototype.showRoomNumber = function() {
this.roomView.showRoomNumber();
};
e.prototype.onUpdateStatus = function(e) {
this.roomView.onUpdateStatus(e);
};
e.prototype.switchBg = function(e) {
this.roomView.switchBg(e);
};
e.prototype.showMsg = function(e) {
this.players[e.fromUserID].onChatMsg(e);
};
e.prototype.showOrHideReadyButton = function(e) {
this.roomView.showOrHideReadyButton(e);
};
e.prototype.onInviteButtonClick = function() {
s.Share.shareGame(this.host.eventTarget, s.Share.ShareSrcType.GameShare, s.Share.ShareMediaType.Image, s.Share.ShareDestType.Friend, "roomNumber=" + this.roomInfo.roomNumber);
};
e.prototype.coWaitSeconds = function(e) {
return i(this, void 0, Promise, function() {
var t = this;
return r(this, function(o) {
return [ 2, new Promise(function(o) {
t.host.component.scheduleOnce(function() {
o();
}, e);
}) ];
});
});
};
e.prototype.playBgSound = function() {
a.SoundMgr.playMusicAudio("gamea/game_matchBg", !0);
};
e.prototype.stopBgSound = function() {
a.SoundMgr.stopMusic();
};
return e;
}();
o.RoomA = S;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"../lobby/shareUtil/ShareExports": "ShareExports",
"./GameOverResultViewA": "GameOverResultViewA",
"./HandResultViewA": "HandResultViewA",
"./PlayerA": "PlayerA",
"./RoomViewA": "RoomViewA",
"./handlers/HandlerActionResultNotifyA": "HandlerActionResultNotifyA",
"./handlers/HandlerMsg2LobbyA": "HandlerMsg2LobbyA",
"./handlers/HandlerMsgActionAllowedA": "HandlerMsgActionAllowedA",
"./handlers/HandlerMsgDealA": "HandlerMsgDealA",
"./handlers/HandlerMsgDeletedA": "HandlerMsgDeletedA",
"./handlers/HandlerMsgDisbandNotifyA": "HandlerMsgDisbandNotifyA",
"./handlers/HandlerMsgDonateA": "HandlerMsgDonateA",
"./handlers/HandlerMsgGameOverA": "HandlerMsgGameOverA",
"./handlers/HandlerMsgHandOverA": "HandlerMsgHandOverA",
"./handlers/HandlerMsgKickoutA": "HandlerMsgKickoutA",
"./handlers/HandlerMsgReActionAllowedA": "HandlerMsgReActionAllowedA",
"./handlers/HandlerMsgRestoreA": "HandlerMsgRestoreA",
"./handlers/HandlerMsgRoomUpdateA": "HandlerMsgRoomUpdateA",
"./handlers/HandlerMsgShowTipsA": "HandlerMsgShowTipsA",
"./handlers/HandlerMsgUpdateLocationA": "HandlerMsgUpdateLocationA",
"./handlers/HandlerMsgUpdatePropCfgA": "HandlerMsgUpdatePropCfgA",
"./proto/protoGameA": "protoGameA"
} ],
RoomHost: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "43535pYv7FMToz2JjOszQ1/", "RoomHost");
Object.defineProperty(o, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
RoomInterfaceA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dbbaazu+MlLtKmtq+uf1w3z", "RoomInterfaceA");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
return function(e) {
this.gender = e.gender;
this.headIconURI = e.headIconURI;
this.ip = e.ip;
this.location = e.location;
this.dfHands = e.dfHands;
this.diamond = e.diamond;
this.charm = e.charm;
this.avatarID = e.avatarID;
this.state = e.state;
this.userID = e.userID;
this.chairID = e.chairID;
this.nick = e.nick;
};
}();
o.PlayerInfo = n;
cc._RF.pop();
}, {} ],
RoomInterface: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0db45RyUGlGKLILL6jiyGKf", "RoomInterface");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
return function(e, t, o) {
this.card = e;
this.fan = t;
this.num = o;
};
}();
o.TingPai = n;
var i = function() {
return function(e) {
this.gender = e.gender;
this.headIconURI = e.headIconURI;
this.ip = e.ip;
this.location = e.location;
this.dfHands = e.dfHands;
this.diamond = e.diamond;
this.charm = e.charm;
this.avatarID = e.avatarID;
this.state = e.state;
this.userID = e.userID;
this.chairID = e.chairID;
this.nick = e.nick;
};
}();
o.PlayerInfo = i;
cc._RF.pop();
}, {} ],
RoomManageView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d3bc71xyHND1KGK2RhyeCcl", "RoomManageView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../../lcore/LCoreExports"), a = e("../../../proto/protoLobby"), s = e("../../LobbyError"), l = cc._decorator.ccclass, u = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.show = function(e, t, o) {
this.clubView = e;
this.roomInfo = t;
this.clubId = o;
this.updatePlayerList();
this.win.show();
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("lobby_club", "roomManageView").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this;
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.view.getChild("disbandRoomBtn").onClick(this.onDisbandRoomBtnClick, this);
this.playerList = this.view.getChild("playerList").asList;
this.playerList.itemRenderer = function(t, o) {
e.renderPlayerListItem(t, o);
};
this.playerList.setVirtual();
};
t.prototype.updatePlayerList = function() {
void 0 !== this.roomInfo && null !== this.roomInfo && null !== this.roomInfo.users && (this.playerList.numItems = this.roomInfo.users.length);
};
t.prototype.renderPlayerListItem = function(e, t) {
var o = this.roomInfo.users[e], n = t.asCom.getChild("name").asTextField, i = t.asCom.getChild("id").asTextField, a = t.asCom.getChild("score").asTextField;
n.text = "" === o.nickName ? "" + o.userID : o.nickName;
i.text = "ID : " + o.userID;
a.text = "当前分数 : -5000";
var s = t.asCom.getChild("loader").asLoader;
r.CommonFunction.setHead(s, o.avatarURL);
};
t.prototype.onDisbandRoomBtnClick = function() {
var e = this;
r.Dialog.showDialog("确定解散房间吗", function() {
e.disbandRoom();
}, function() {});
};
t.prototype.disbandRoom = function() {
var e = this, t = r.DataStore.getString(r.KeyConstants.TOKEN, ""), o = "" + r.LEnv.rootURL + r.LEnv.deleteClubRoom + "?&tk=" + t + "&clubID=" + this.clubId + "&roomID=" + this.roomInfo.roomID;
this.clubRequest(o, function(t, o) {
var n = t.response;
if (null !== n) {
var i = a.proto.lobby.MsgLoadRoomListRsp.decode(n);
if (i.result === a.proto.lobby.MsgError.ErrSuccess) {
e.clubView.loadClubRooms();
e.clubView.disBandRoomNotify(e.roomInfo.roomID);
e.destroy();
} else {
var l = s.LobbyError.getErrorString(i.result);
r.Dialog.showDialog(l, function() {}, function() {});
}
}
});
};
t.prototype.clubRequest = function(e, t) {
if (null === e) return null;
r.Logger.debug("clubRequest url = ", e);
r.HTTP.hGet(this.eventTarget, e, function(e, o) {
t(e, o);
});
};
return t = i([ l ], t);
}(cc.Component);
o.RoomManageView = u;
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports",
"../../../proto/protoLobby": "protoLobby",
"../../LobbyError": "LobbyError"
} ],
RoomRuleString: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9ce97/h//5Lgob8j82+g6Lr", "RoomRuleString");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../../lcore/LCoreExports");
(function(e) {
var t, o, i, r, a, s, l, u, c, d, h, p, f, g, y, m, b, v, w, C, R, I, T, _ = [ "doubleScoreWhenContinuousBanker", "doubleScoreWhenZuoYuanZi", "doubleScoreWhenSelfDrawn", "noWind", "afterKongChuckerPayForAll", "afterKongX2", "finalDrawX2", "sevenPairX2", "greatSevenPairX4", "allWindX2", "pureSameX2", "pongpongX2", "heavenX5", "thirteenOrphanX10" ], M = [ "roomType", "handNum", "payType", "playerNumAcquired", "fengDingType", "dunziPointType", "trimType", "HorseNumberType", "baseScoreType" ], E = ((t = {}).doubleScoreWhenContinuousBanker = "连庄加分", 
t.doubleScoreWhenZuoYuanZi = "坐园子", t.doubleScoreWhenSelfDrawn = "自摸加分", t.noWind = "去风牌", 
t.afterKongChuckerPayForAll = "放杠杠爆包三家", t.afterKongX2 = "杠爆2倍", t.finalDrawX2 = "海底捞月2倍", 
t.sevenPairX2 = "七对子2倍", t.greatSevenPairX4 = "豪华七对子4倍", t.allWindX2 = "全风子2倍", 
t.pureSameX2 = "清一色2倍", t.pongpongX2 = "碰碰胡2倍", t.heavenX5 = "天胡5倍", t.thirteenOrphanX10 = "13幺10倍", 
t), D = ((o = {}).roomType = "游戏  : ", o.handNum = "局数  : ", o.payType = "支付方式  : ", 
o.playerNumAcquired = "人数  : ", o.fengDingType = "封顶  : ", o.dunziPointType = "墩子  : ", 
o.trimType = "封顶  : ", o.HorseNumberType = "选马  : ", o.baseScoreType = "底分  : ", 
o), P = ((i = {})[1] = ((r = {}).roomType = ((a = {})[1] = "大丰麻将", a[8] = "关张", 
a[21] = "湛江麻将", a), r.handNum = ((s = {})[4] = "4局", s[8] = "8局", s[16] = "16局", 
s[32] = "36局", s), r.payType = ((l = {})[0] = "房主支付", l[1] = "AA支付", l), r.playerNumAcquired = ((u = {})[2] = "2人", 
u[3] = "3人", u[4] = "4人", u), r.fengDingType = ((c = {})[0] = "20/40", c[1] = "30/60", 
c[2] = "50/100/150", c[3] = "200/200/300", c), r.dunziPointType = ((d = {})[0] = "1分2分", 
d[1] = "10分/20分/30分", d), r), i[8] = ((h = {}).roomType = ((p = {})[1] = "大丰麻将", 
p[8] = "关张", p[21] = "湛江麻将", p), h.playerNumAcquired = ((f = {})[2] = "2人", f[3] = "3人", 
f[4] = "4人", f), h.payType = ((g = {})[0] = "房主支付", g[1] = "AA支付", g), h.handNum = ((y = {})[4] = "4局", 
y[8] = "8局", y[16] = "16局", y[32] = "36局", y), h), i[21] = ((m = {}).roomType = ((b = {})[1] = "大丰麻将", 
b[8] = "关张", b[21] = "湛江麻将", b), m.handNum = ((v = {})[4] = "4局", v[8] = "8局", v[16] = "16局", 
v[32] = "36局", v), m.payType = ((w = {})[0] = "房主支付", w[1] = "AA支付", w), m.playerNumAcquired = ((C = {})[2] = "2人", 
C[3] = "3人", C[4] = "4人", C), m.trimType = ((R = {})[0] = "不封顶", R[1] = "8倍", R[2] = "16倍", 
R), m.HorseNumberType = ((I = {})[0] = "4马", I[1] = "6马", I[2] = "8马", I[3] = "12马", 
I), m.baseScoreType = ((T = {})[0] = "1分", T[1] = "2分", T[2] = "5分", T[3] = "10分", 
T), m), i), A = function(e, t, o) {
return P[e][t][o];
}, S = function(e, t) {
var o = "";
!0 === t && (o = E[e]);
return o;
};
e.getRoomRuleStr = function(e) {
var t = "", o = JSON.parse(e);
try {
for (var i = o.roomType, r = 0, a = M; r < a.length; r++) {
var s = o[d = a[r]], l = D[d];
void 0 !== s && null !== s && void 0 !== l && (t = "" + t + l + A(i, d, s) + "\r\n");
}
t += "玩法:";
for (var u = 0, c = _; u < c.length; u++) {
var d;
void 0 !== (s = o[d = c[u]]) && null !== s && (t = t + "  " + S(d, s));
}
} catch (e) {
n.Logger.error(e);
}
return t;
};
})(o.RoomRuleString || (o.RoomRuleString = {}));
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports"
} ],
RoomRuleViewA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "66b0594UUVFU73aVjH58vNo", "RoomRuleViewA");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lobby/lcore/LCoreExports"), r = e("../lobby/ruleviews/RuleViewsExports"), a = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.forReview = !0;
return t;
}
t.prototype.updateView = function(e) {
var t, o = JSON.parse(e);
this.itemsJSON = o;
switch (o.roomType) {
case 21:
t = new r.ZJMJRuleView();
break;

case 1:
t = new r.DFRuleView();
}
t.bindView(this);
var n = fgui.UIPackage.createObject("runfast", "spaceBtn").asCom, a = this.view.getChild("mount");
n.setPosition(a.x, a.y);
this.view.addChild(n);
if (null !== this.view) {
fgui.GRoot.inst.showPopup(this.view);
i.CommonFunction.setViewInCenter(this.view);
}
};
t.prototype.updatePrice = function(e) {};
t.prototype.getView = function() {
return this.view;
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("runfast", "room_rule_view").asCom;
this.view = e;
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.view.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this.view.getChild("closeBtn");
e.onClick(this.onCloseClick, this);
e.onClick(this.onCloseClick, this);
var t = this.view.getChild("back");
null !== t && t.onClick(this.onCloseClick, this);
};
return t;
}(cc.Component);
o.RoomRuleViewA = a;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"../lobby/ruleviews/RuleViewsExports": "RuleViewsExports"
} ],
RoomRuleView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "31ba6cb1lZA16k6+m8r//Tl", "RoomRuleView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lobby/lcore/LCoreExports"), r = e("../lobby/ruleviews/RuleViewsExports"), a = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.forReview = !0;
return t;
}
t.prototype.updateView = function(e) {
var t, o = JSON.parse(e);
this.itemsJSON = o;
switch (o.roomType) {
case 21:
t = new r.ZJMJRuleView();
break;

case 1:
t = new r.DFRuleView();
}
t.bindView(this);
var n = fgui.UIPackage.createObject("dafeng", "spaceBtn").asCom, a = this.view.getChild("mount");
n.setPosition(a.x, a.y);
this.view.addChild(n);
if (null !== this.view) {
fgui.GRoot.inst.showPopup(this.view);
i.CommonFunction.setViewInCenter(this.view);
}
};
t.prototype.updatePrice = function(e) {};
t.prototype.getView = function() {
return this.view;
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
var e = fgui.UIPackage.createObject("dafeng", "room_rule_view").asCom;
this.view = e;
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.view.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
var e = this.view.getChild("closeBtn");
e.onClick(this.onCloseClick, this);
e.onClick(this.onCloseClick, this);
var t = this.view.getChild("back");
null !== t && t.onClick(this.onCloseClick, this);
};
return t;
}(cc.Component);
o.RoomRuleView = a;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"../lobby/ruleviews/RuleViewsExports": "RuleViewsExports"
} ],
RoomSettingViewExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "956339c7u5OCLqLcMIuwV9s", "RoomSettingViewExports");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
})(e("./RoomSettingView"));
cc._RF.pop();
}, {
"./RoomSettingView": "RoomSettingView"
} ],
RoomSettingView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "236e7HqLHxH5LfDzGja9Sta", "RoomSettingView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../lcore/LCoreExports"), r = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.showView = function(e, t, o, n) {
this.room = e;
if (void 0 === this.view || null === this.view) {
t.fguiAddPackage("lobby/fui_room_other_view/room_other_view");
this.view = fgui.UIPackage.createObject("room_other_view", "setting").asCom;
this.initView(o);
}
fgui.GRoot.inst.showPopup(this.view);
var i = n - 480;
this.view.setPosition(i, 0);
};
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
};
t.prototype.onDestroy = function() {
this.saveData();
this.eventTarget.emit("destroy");
this.view.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function(e) {
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
this.view.getChild("shutdownBtn").onClick(this.onCloseClick, this);
this.view.getChild("exitBtn").onClick(this.onExitBtnClick, this);
this.view.getController("isOwner").selectedIndex = e ? 0 : 1;
this.view.getChild("disbandBtn").onClick(this.onDisbandBtnClick, this);
this.view.getChild("blueColorBtn").onClick(this.onBlueColorBtnClick, this);
this.view.getChild("classColorBtn").onClick(this.onClassColorBtnClick, this);
this.view.getChild("arrowBtn").onClick(this.onArrowBtnClick, this);
var t = i.DataStore.getString(i.KeyConstants.SOUND_VOLUME), o = i.DataStore.getString(i.KeyConstants.MUSIC_VOLUME);
this.soundSlider = this.view.getChild("soundSlider").asSlider;
"" === t && (t = "50");
this.soundSlider.value = +t;
this.soundSlider.on(fgui.Event.STATUS_CHANGED, this.onSoundSliderChanged, this);
this.musicSlider = this.view.getChild("musicSlider").asSlider;
"" === o && (o = "50");
this.musicSlider.value = +o;
this.musicSlider.on(fgui.Event.STATUS_CHANGED, this.onMusicSliderChanged, this);
this.view.on(fgui.Event.UNDISPLAY, this.saveData, this);
};
t.prototype.saveData = function() {
i.DataStore.setItem(i.KeyConstants.SOUND_VOLUME, this.soundSlider.value.toString());
i.DataStore.setItem(i.KeyConstants.MUSIC_VOLUME, this.musicSlider.value.toString());
};
t.prototype.onMusicSliderChanged = function(e) {
cc.audioEngine.setMusicVolume(e.value / 100);
};
t.prototype.onSoundSliderChanged = function(e) {
cc.audioEngine.setEffectsVolume(e.value / 100);
};
t.prototype.onExitBtnClick = function() {
this.room.onExitButtonClicked();
};
t.prototype.onClassColorBtnClick = function() {
this.room.switchBg(0);
};
t.prototype.onBlueColorBtnClick = function() {
this.room.switchBg(1);
};
t.prototype.onDisbandBtnClick = function() {
var e = this;
i.Dialog.showDialog("是否解散房间？", function() {
e.sendDisbandMsg();
}, function() {});
};
t.prototype.onArrowBtnClick = function() {};
t.prototype.sendDisbandMsg = function() {
this.room.onDissolveClicked();
};
return t;
}(cc.Component);
o.RoomSettingView = r;
cc._RF.pop();
}, {
"../../lcore/LCoreExports": "LCoreExports"
} ],
RoomViewA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e5630ghKC9Pc66QrHxO0rxW", "RoomViewA");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../lobby/lcore/LCoreExports"), i = e("../lobby/views/chat/ChatExports"), r = e("../lobby/views/disbandRoom/DisbandViewExports"), a = e("../lobby/views/roomSetting/RoomSettingViewExports"), s = e("./GameRulesA"), l = e("./PlayerViewA"), u = e("./proto/protoGameA"), c = e("./RoomRuleViewA"), d = function() {
function e(e, t) {
this.room = e;
this.unityViewNode = t;
this.component = e.getRoomHost().component;
for (var o = [], n = 1; n <= 3; n++) {
var i = new l.PlayerViewA(t, n, e);
i.hideAll();
o[n] = i;
}
this.playerViews = o;
this.initButton();
this.initRoomStatus();
this.initOtherView();
}
e.prototype.showOrHideReadyButton = function(e) {
this.readyButton.visible = e;
cc.sys.platform === cc.sys.WECHAT_GAME && (this.inviteButton.visible = e);
};
e.prototype.onExitButtonClicked = function() {
var e = this;
null !== this.room && this.room.handStartted > 0 ? n.Dialog.prompt("牌局已经开始，请申请解散房间") : n.Dialog.showDialog("确实要退出房间吗？", function() {
e.room.onExitButtonClicked();
}, function() {});
};
e.prototype.gameStartAnimation = function() {
n.Logger.debug("xxxx ", 568, 320);
};
e.prototype.startDiscardCountdown = function() {};
e.prototype.countDownCallBack = function() {};
e.prototype.stopDiscardCountdown = function() {};
e.prototype.setWaitingPlayer = function(e) {
this.startDiscardCountdown();
this.clearWaitingPlayer();
e.setHeadEffectBox(!0);
};
e.prototype.clearWaitingPlayer = function() {
for (var e = 1; e <= 3; e++) this.playerViews[e].setHeadEffectBox(!1);
};
e.prototype.showRoomNumber = function() {
var e = this.room, t = this.room.handStartted + "/" + this.room.handNum, o = "     ", n = "" + s.GameRulesA.gameName(this.room.roomType) + o + "房号:" + e.roomInfo.roomNumber + o + "局数:" + t;
this.roomInfoText.text = n;
};
e.prototype.getPlayerViewByChairID = function(e, t) {
return this.playerViews[(e - t + 3) % 3 + 1];
};
e.prototype.onUpdateStatus = function(e) {
var t = this.statusHandlers[e];
null !== t && t(this);
};
e.prototype.switchBg = function(e) {};
e.prototype.updateDisbandVoteView = function(e) {
var t = this.component.getComponent(r.DisbandView), o = this.room.getMyPlayerInfo(), n = new r.DisBandPlayerInfo(o.userID, o.chairID, o.nick), i = this.room.getPlayers(), a = [];
Object.keys(i).forEach(function(e) {
var t = i[e], o = new r.DisBandPlayerInfo(t.userID, t.chairID, t.playerInfo.nick);
a.push(o);
});
var s = this.room.getRoomHost().getLobbyModuleLoader();
void 0 !== t && null != t || (t = this.component.addComponent(r.DisbandView));
t.saveRoomView(this.room, e, s, n, a);
};
e.prototype.onRoomRuleBtnClick = function() {
var e = this.component.getComponent(c.RoomRuleViewA);
void 0 !== e && null != e || (e = this.component.addComponent(c.RoomRuleViewA));
e.updateView(this.room.roomInfo.config);
};
e.prototype.onSettingBtnClick = function() {
var e = this.component.addComponent(a.RoomSettingView), t = this.room.ownerID === this.room.getMyPlayerInfo().userID, o = this.unityViewNode.getChild("blueBg").width;
"1" === n.DataStore.getString(n.KeyConstants.ADAPTIVE_PHONE_KEY) && (o += n.CommonFunction.IOS_ADAPTER_WIDTH);
e.showView(this.room, this.room.getRoomHost().getLobbyModuleLoader(), t, o);
};
e.prototype.onChatBtnClick = function() {
var e = this.room.getRoomHost().getLobbyModuleLoader();
null === e && n.Logger.debug("load === null");
var t = this.component.getComponent(i.ChatView);
null === t && (t = this.component.addComponent(i.ChatView));
var o = this.unityViewNode.getChild("blueBg").width;
"1" === n.DataStore.getString(n.KeyConstants.ADAPTIVE_PHONE_KEY) && (o += n.CommonFunction.IOS_ADAPTER_WIDTH);
var r = this.room.showMsg.bind(this.room);
t.show(e, r, o);
};
e.prototype.initButton = function() {
this.unityViewNode.getChild("chat").asButton.onClick(this.onChatBtnClick, this);
this.unityViewNode.getChild("setting").asButton.onClick(this.onSettingBtnClick, this);
this.unityViewNode.getChild("info").asButton.onClick(this.onRoomRuleBtnClick, this);
this.readyButton = this.unityViewNode.getChild("ready").asButton;
this.readyButton.visible = !1;
this.readyButton.onClick(this.room.onReadyButtonClick, this.room);
this.inviteButton = this.unityViewNode.getChild("invite").asButton;
this.inviteButton.visible = !1;
this.inviteButton.onClick(this.room.onInviteButtonClick, this.room);
};
e.prototype.initOtherView = function() {
this.roomInfoText = this.unityViewNode.getChild("top_room_info");
this.donateMoveObj = this.unityViewNode.getChild("donate").asLoader;
};
e.prototype.initRoomStatus = function() {
var e = this, t = [];
t[u.proto.pokerface.RoomState.SRoomIdle] = function() {
n.Logger.debug("房间空闲，客户端永远看不到这个状态");
};
t[u.proto.pokerface.RoomState.SRoomWaiting] = function() {
e.stopDiscardCountdown();
e.room.resetForNewHand();
};
t[u.proto.pokerface.RoomState.SRoomPlaying] = function() {
e.showRoomNumber();
};
t[u.proto.pokerface.RoomState.SRoomDeleted] = function() {
n.Logger.debug("房间已经被删除，客户端永远看不到这个状态");
};
this.statusHandlers = t;
};
return e;
}();
o.RoomViewA = d;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"../lobby/views/chat/ChatExports": "ChatExports",
"../lobby/views/disbandRoom/DisbandViewExports": "DisbandViewExports",
"../lobby/views/roomSetting/RoomSettingViewExports": "RoomSettingViewExports",
"./GameRulesA": "GameRulesA",
"./PlayerViewA": "PlayerViewA",
"./RoomRuleViewA": "RoomRuleViewA",
"./proto/protoGameA": "protoGameA"
} ],
RoomView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5db75ZZWI1MOrBbTV1+p3T+", "RoomView");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../lobby/lcore/LCoreExports"), i = e("../lobby/views/chat/ChatExports"), r = e("../lobby/views/disbandRoom/DisbandViewExports"), a = e("../lobby/views/roomSetting/RoomSettingViewExports"), s = e("./GameRules"), l = e("./PlayerView"), u = e("./proto/protoGame"), c = e("./RoomRuleView"), d = e("./TileImageMounter"), h = u.proto.mahjong, p = function() {
function e(e, t) {
this.room = e;
this.unityViewNode = t;
this.component = e.getRoomHost().component;
for (var o = [], n = 1; n <= 4; n++) {
var i = new l.PlayerView(t, n, e);
i.hideAll();
o[n] = i;
}
this.playerViews = o;
this.initButton();
this.initRoomStatus();
this.initOtherView();
this.initTingData();
this.initMeldsPanel();
}
e.prototype.showOrHideReadyButton = function(e) {
this.readyButton.visible = e;
this.returnLobbyBtn.visible = e;
(cc.sys.platform === cc.sys.WECHAT_GAME || cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID) && (this.inviteButton.visible = e);
};
e.prototype.onExitButtonClicked = function() {
var e = this;
null !== this.room && this.room.handStartted > 0 ? n.Dialog.prompt("牌局已经开始，请申请解散房间") : n.Dialog.showDialog("确实要退出房间吗？", function() {
e.room.onExitButtonClicked();
}, function() {});
};
e.prototype.gameStartAnimation = function() {
n.Logger.debug("xxxx ", 568, 320);
};
e.prototype.startDiscardCountdown = function() {
void 0 === this.leftTimerCB && (this.leftTimerCB = this.countDownCallBack.bind(this));
this.component.unschedule(this.leftTimerCB);
this.leftTime = 1;
this.component.schedule(this.leftTimerCB, 1, cc.macro.REPEAT_FOREVER, 1);
};
e.prototype.countDownCallBack = function() {
this.leftTime += 1;
this.countDownText.text = "" + this.leftTime;
this.leftTime >= 999 && this.component.unschedule(this.leftTimerCB);
};
e.prototype.stopDiscardCountdown = function() {
this.component.unschedule(this.leftTimerCB);
this.countDownText.text = "";
};
e.prototype.setWaitingPlayer = function(e) {
this.startDiscardCountdown();
this.clearWaitingPlayer();
var t = e.viewChairID;
this.roundMarks[t].visible = !0;
e.setHeadEffectBox(!0);
};
e.prototype.clearWaitingPlayer = function() {
for (var e = 1; e <= 4; e++) this.roundMarks[e].visible = !1;
for (e = 1; e <= 4; e++) this.playerViews[e].setHeadEffectBox(!1);
};
e.prototype.showRoomNumber = function() {
var e = this.room, t = this.room.handStartted + "/" + this.room.handNum, o = "     ", n = "" + s.GameRules.gameName(this.room.roomType) + o + "房号:" + e.roomInfo.roomNumber + o + "局数:" + t;
this.roomInfoText.text = n;
};
e.prototype.showOrHideMeldsOpsPanel = function(e, t) {
this.actionMsg = t;
var o = e.length;
this.multiOpsDataList = e;
this.multiOpsObj.numItems = o;
this.multiOpsObj.resizeToFit(o);
this.meldOpsPanel.visible = o > 0;
};
e.prototype.setArrowByParent = function(e) {
var t = this;
if (null !== e) {
var o = e.getChild("pos"), n = {
onCreate: function(e) {
t.arrowObj = e;
}
};
this.room.getRoomHost().animationMgr.play("lobby/prefabs/mahjong/Effect_jiantou", o.node, n);
} else void 0 !== this.arrowObj && null !== this.arrowObj && (this.arrowObj.active = !1);
};
e.prototype.setJiaJiaZhuang = function() {
n.Logger.debug("家家庄");
};
e.prototype.showTingDataView = function(e) {
if (e.length <= 0) this.listensObj.visible = !1; else {
var t = e.length;
this.listensDataList = e;
var o = 290, n = 110;
t <= 2 ? o = 150 : t > 4 && (n = 230);
this.listensObjList.setSize(o, n);
for (var i = 0, r = 0, a = e; r < a.length; r++) {
i += a[r].num;
}
this.listensObjNum.text = i + "张";
this.listensObjList.numItems = t;
this.listensObj.visible = !0;
}
};
e.prototype.hideTingDataView = function() {
this.listensObj.visible = !1;
};
e.prototype.setRoundMask = function() {
if (s.GameRules.haveRoundMask(this.room.roomType)) {
this.wind.visible = !0;
this.windTile.visible = !0;
d.TileImageMounter.mountTileImage(this.windTile, this.room.windFlowerID);
}
};
e.prototype.getPlayerViewByChairID = function(e, t) {
return this.playerViews[(e - t + 4) % 4 + 1];
};
e.prototype.onUpdateStatus = function(e) {
var t = this.statusHandlers[e];
null !== t && t(this);
};
e.prototype.switchBg = function(e) {
this.unityViewNode.getController("bgController").selectedIndex = e;
};
e.prototype.updateDisbandVoteView = function(e) {
var t = this.component.getComponent(r.DisbandView), o = this.room.getMyPlayerInfo(), n = new r.DisBandPlayerInfo(o.userID, o.chairID, o.nick), i = this.room.getPlayers(), a = [];
Object.keys(i).forEach(function(e) {
var t = i[e], o = new r.DisBandPlayerInfo(t.userID, t.chairID, t.playerInfo.nick);
a.push(o);
});
var s = this.room.getRoomHost().getLobbyModuleLoader();
void 0 !== t && null != t || (t = this.component.addComponent(r.DisbandView));
t.saveRoomView(this.room, e, s, n, a);
};
e.prototype.onRoomRuleBtnClick = function() {
var e = this.component.getComponent(c.RoomRuleView);
void 0 !== e && null != e || (e = this.component.addComponent(c.RoomRuleView));
e.updateView(this.room.roomInfo.config);
};
e.prototype.onSettingBtnClick = function() {
var e = this.component.addComponent(a.RoomSettingView), t = this.room.ownerID === this.room.getMyPlayerInfo().userID, o = this.unityViewNode.getChild("blueBg").width;
"1" === n.DataStore.getString(n.KeyConstants.ADAPTIVE_PHONE_KEY) && (o += n.CommonFunction.IOS_ADAPTER_WIDTH);
e.showView(this.room, this.room.getRoomHost().getLobbyModuleLoader(), t, o);
};
e.prototype.onChatBtnClick = function() {
var e = this.room.getRoomHost().getLobbyModuleLoader();
null === e && n.Logger.debug("load === null");
var t = this.component.getComponent(i.ChatView);
null === t && (t = this.component.addComponent(i.ChatView));
var o = this.unityViewNode.getChild("blueBg").width;
"1" === n.DataStore.getString(n.KeyConstants.ADAPTIVE_PHONE_KEY) && (o += n.CommonFunction.IOS_ADAPTER_WIDTH);
var r = this.room.showMsg.bind(this.room);
t.show(e, r, o);
};
e.prototype.initButton = function() {
this.unityViewNode.getChild("chatBtn").onClick(this.onChatBtnClick, this);
this.unityViewNode.getChild("settingBtn").onClick(this.onSettingBtnClick, this);
this.unityViewNode.getChild("guizeBtn").onClick(this.onRoomRuleBtnClick, this);
this.readyButton = this.unityViewNode.getChild("ready").asButton;
this.readyButton.visible = !1;
this.readyButton.onClick(this.room.onReadyButtonClick, this.room);
this.inviteButton = this.unityViewNode.getChild("invite").asButton;
this.inviteButton.visible = !1;
this.inviteButton.onClick(this.room.onInviteButtonClick, this.room);
this.returnLobbyBtn = this.unityViewNode.getChild("return2LobbyBtn").asButton;
this.returnLobbyBtn.visible = !1;
this.returnLobbyBtn.onClick(this.room.onReturnLobbyBtnClick, this.room);
};
e.prototype.initOtherView = function() {
this.roomInfoText = this.unityViewNode.getChild("roomInfo");
var e = [];
this.roundMarkView = this.unityViewNode.getChild("roundMask").asCom;
for (var t = 1; t <= 4; t++) {
var o = this.roundMarkView.getChild("n" + t);
e[t] = o;
}
this.roundMarks = e;
this.wind = this.unityViewNode.getChild("n3");
this.windTile = this.unityViewNode.getChild("fengquan").asCom;
this.wind.visible = !1;
this.windTile.visible = !1;
this.countDownText = this.roundMarkView.getChild("num");
this.donateMoveObj = this.unityViewNode.getChild("donate").asLoader;
this.tilesInWall = this.unityViewNode.getChild("tilesInWall");
};
e.prototype.initRoomStatus = function() {
var e = this, t = [];
t[u.proto.mahjong.RoomState.SRoomIdle] = function() {
n.Logger.debug("房间空闲，客户端永远看不到这个状态");
};
t[u.proto.mahjong.RoomState.SRoomWaiting] = function() {
e.wind.visible = !1;
e.windTile.visible = !1;
e.tilesInWall.visible = !1;
e.roundMarkView.visible = !1;
e.stopDiscardCountdown();
e.room.resetForNewHand();
};
t[u.proto.mahjong.RoomState.SRoomPlaying] = function() {
e.tilesInWall.visible = !0;
e.wind.visible = !1;
e.windTile.visible = !1;
e.roundMarkView.visible = !0;
e.showRoomNumber();
};
t[u.proto.mahjong.RoomState.SRoomDeleted] = function() {
n.Logger.debug("房间已经被删除，客户端永远看不到这个状态");
};
this.statusHandlers = t;
};
e.prototype.initTingData = function() {
var e = this;
this.listensObj = this.unityViewNode.getChild("listensPanel").asCom;
this.listensObjList = this.listensObj.getChild("list").asList;
this.listensObjNum = this.listensObj.getChild("num");
this.listensObjList.itemRenderer = this.renderListensListItem.bind(this);
this.listensObj.onClick(function() {
e.listensObj.visible = !1;
}, this);
this.listensObjList.setVirtual();
};
e.prototype.renderListensListItem = function(e, t) {
var o = this.listensDataList[e], n = t.getChild("n1").asCom;
t.getChild("num").text = o.num + "张";
d.TileImageMounter.mountTileImage(n, o.card);
};
e.prototype.initMeldsPanel = function() {
var e = this;
this.meldOpsPanel = this.unityViewNode.getChild("meldOpsPanel").asCom;
this.multiOpsObj = this.meldOpsPanel.getChild("list").asList;
this.multiOpsObj.itemRenderer = this.renderMultiOpsListItem.bind(this);
this.multiOpsObj.on(fgui.Event.CLICK_ITEM, function(t) {
e.onMeldOpsClick(t.name);
}, this);
this.meldOpsPanel.getChild("cancelBtn").onClick(function() {
e.meldOpsPanel.visible = !1;
e.playerViews[1].showButton([]);
}, this);
};
e.prototype.renderMultiOpsListItem = function(e, t) {
var o = this.multiOpsDataList[e];
t.name = e.toString();
var n = 0, i = 4;
if (o.meldType === h.MeldType.enumMeldTypeSequence) {
t.getChild("n4").visible = !1;
n = 1;
i = 3;
}
for (var r = 0, a = 1; a <= i; a++) {
var s = t.getChild("n" + a).asCom;
d.TileImageMounter.mountTileImage(s, o.tile1 + r);
s.visible = !0;
r += n;
}
t.visible = !0;
};
e.prototype.onMeldOpsClick = function(e) {
var t = this.multiOpsDataList[+e], o = new u.proto.mahjong.MsgPlayerAction();
o.qaIndex = this.actionMsg.qaIndex;
o.action = this.actionMsg.action;
o.tile = this.actionMsg.tile;
o.meldType = t.meldType;
o.meldTile1 = t.tile1;
if (t.meldType === h.MeldType.enumMeldTypeConcealedKong) {
o.tile = t.tile1;
o.action = h.ActionType.enumActionType_KONG_Concealed;
} else if (t.meldType === h.MeldType.enumMeldTypeTriplet2Kong) {
o.tile = t.tile1;
o.action = h.ActionType.enumActionType_KONG_Triplet2;
}
var n = u.proto.mahjong.MsgPlayerAction.encode(o);
this.room.sendActionMsg(n);
this.playerViews[1].hideOperationButtons();
this.meldOpsPanel.visible = !1;
};
return e;
}();
o.RoomView = p;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"../lobby/views/chat/ChatExports": "ChatExports",
"../lobby/views/disbandRoom/DisbandViewExports": "DisbandViewExports",
"../lobby/views/roomSetting/RoomSettingViewExports": "RoomSettingViewExports",
"./GameRules": "GameRules",
"./PlayerView": "PlayerView",
"./RoomRuleView": "RoomRuleView",
"./TileImageMounter": "TileImageMounter",
"./proto/protoGame": "protoGame"
} ],
Room: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a8a98uJW1RE+aUH9nKRhdQd", "Room");
var n, i = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
l(n.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? i(e.value) : new o(function(t) {
t(e.value);
}).then(a, s);
}
l((n = n.apply(e, t || [])).next());
});
}, r = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../lobby/lcore/LCoreExports"), s = e("../lobby/shareUtil/ShareExports"), l = e("./GameOverResultView"), u = e("./handlers/HandlerActionResultNotify"), c = e("./handlers/HandlerMsg2Lobby"), d = e("./handlers/HandlerMsgActionAllowed"), h = e("./handlers/HandlerMsgDeal"), p = e("./handlers/HandlerMsgDeleted"), f = e("./handlers/HandlerMsgDisbandNotify"), g = e("./handlers/HandlerMsgDonate"), y = e("./handlers/HandlerMsgGameOver"), m = e("./handlers/HandlerMsgHandOver"), b = e("./handlers/HandlerMsgKickout"), v = e("./handlers/HandlerMsgReActionAllowed"), w = e("./handlers/HandlerMsgRestore"), C = e("./handlers/HandlerMsgRoomUpdate"), R = e("./handlers/HandlerMsgShowTips"), I = e("./handlers/HandlerMsgUpdateLocation"), T = e("./handlers/HandlerMsgUpdatePropCfg"), _ = e("./HandResultView"), M = e("./Player"), E = e("./proto/protoGame"), D = e("./RoomView"), P = E.proto.mahjong.MessageCode, A = ((n = {})[P.OPActionAllowed] = d.HandlerMsgActionAllowed.onMsg, 
n[P.OPReActionAllowed] = v.HandlerMsgReActionAllowed.onMsg, n[P.OPActionResultNotify] = u.HandlerActionResultNotify.onMsg, 
n[P.OPDeal] = h.HandlerMsgDeal.onMsg, n[P.OPHandOver] = m.HandlerMsgHandOver.onMsg, 
n[P.OPRoomUpdate] = C.HandlerMsgRoomUpdate.onMsg, n[P.OPRestore] = w.HandlerMsgRestore.onMsg, 
n[P.OPRoomDeleted] = p.HandlerMsgDeleted.onMsg, n[P.OPRoomShowTips] = R.HandlerMsgShowTips.onMsg, 
n[P.OPGameOver] = y.HandlerMsgGameOver.onMsg, n[P.OPDisbandNotify] = f.HandlerMsgDisbandNotify.onMsg, 
n[P.OPKickout] = b.HandlerMsgKickout.onMsg, n[P.OPDonate] = g.HandlerMsgDonate.onMsg, 
n[P.OPUpdateLocation] = I.HandlerMsgUpdateLocation.onMsg, n[P.OP2Lobby] = c.HandlerMsg2Lobby.onMsg, 
n[P.OPUpdatePropCfg] = T.HandlerMsgUpdatePropCfg.onMsg, n), S = function() {
function e(e, t, o, n) {
this.handStartted = 0;
this.isDestroy = !1;
this.bankerChairID = 0;
this.players = {};
this.myUser = e;
this.host = o;
this.replay = n;
this.roomInfo = t;
var i = JSON.parse(t.config);
this.roomType = i.roomType;
this.handNum = i.handNum;
}
e.prototype.getRoomHost = function() {
return this.host;
};
e.prototype.dispatchWebsocketMsg = function(e) {
return i(this, void 0, Promise, function() {
var t;
return r(this, function(o) {
switch (o.label) {
case 0:
a.Logger.debug("Room.dispatchWebsocketMsg, ops:", e.Ops);
return void 0 === (t = A[e.Ops]) ? [ 3, 2 ] : [ 4, t(e.Data, this) ];

case 1:
o.sent();
return [ 3, 3 ];

case 2:
a.Logger.debug("room has no handler for msg, ops:", e.Ops);
o.label = 3;

case 3:
return [ 2 ];
}
});
});
};
e.prototype.getPlayerByChairID = function(e) {
var t = this, o = null;
Object.keys(this.players).forEach(function(n) {
var i = t.players[n];
i.chairID === e && (o = i);
});
return o;
};
e.prototype.getPlayerInfoByChairID = function(e) {
var t = this, o = null;
Object.keys(this.players).forEach(function(n) {
var i = t.players[n];
i.chairID === e && (o = i);
});
return o;
};
e.prototype.getRoomView = function() {
return this.roomView;
};
e.prototype.updateTilesInWallUI = function() {
this.roomView.tilesInWall.text = "剩牌 :" + this.tilesInWall;
};
e.prototype.loadRoomView = function(e) {
var t = new D.RoomView(this, e);
this.roomView = t;
this.playBgSound();
};
e.prototype.createPlayerByInfo = function(e) {
var t = new M.Player(e.userID, e.chairID, this);
t.updateByPlayerInfo(e);
var o = this.roomView.getPlayerViewByChairID(e.chairID, this.myPlayer.chairID);
t.bindView(o);
this.players[t.userID] = t;
};
e.prototype.createMyPlayer = function(e) {
var t = new M.Player(e.userID, e.chairID, this);
t.updateByPlayerInfo(e);
var o = this.roomView.playerViews[1];
t.bindView(o);
this.players[t.userID] = t;
this.myPlayer = t;
};
e.prototype.onReadyButtonClick = function() {
var e = new E.proto.mahjong.GameMessage();
e.Ops = E.proto.mahjong.MessageCode.OPPlayerReady;
var t = E.proto.mahjong.GameMessage.encode(e);
this.host.sendBinary(t);
};
e.prototype.onInviteButtonClick = function() {
var e = "点击连接，立即来搓麻将, 房号:" + this.roomInfo.roomNumber, t = "http://llwant1.qianz.com/test/?roomType=" + this.roomType + "&roomNumber=" + this.roomInfo.roomNumber;
s.Share.shareWebPage("湛江麻将", e, t);
};
e.prototype.onReturnLobbyBtnClick = function() {
this.sendMsg(E.proto.mahjong.MessageCode.OP2Lobby);
};
e.prototype.getPlayerViewChairIDByChairID = function(e) {
return (e - this.myPlayer.chairID + 4) % 4 + 1;
};
e.prototype.removePlayer = function(e) {
delete this.players[e];
};
e.prototype.sendMsg = function(e, t) {
var o = this.host;
if (null != o) {
var n = new E.proto.mahjong.GameMessage();
n.Ops = e;
null != t && (n.Data = t);
var i = E.proto.mahjong.GameMessage.encode(n);
o.sendBinary(i);
}
};
e.prototype.resetForNewHand = function() {
var e = this;
Object.keys(this.players).forEach(function(t) {
e.players[t].resetForNewHand();
});
};
e.prototype.resumeBackMusicVolume = function() {};
e.prototype.onExitButtonClicked = function() {
this.sendMsg(E.proto.mahjong.MessageCode.OPPlayerLeaveRoom);
};
e.prototype.onDissolveClicked = function() {
this.sendMsg(E.proto.mahjong.MessageCode.OPDisbandRequest);
};
e.prototype.updateDisbandVoteView = function(e) {
this.msgDisbandNotify = e;
this.roomView.updateDisbandVoteView(e);
};
e.prototype.sendDisbandAgree = function(e) {
var t = new E.proto.mahjong.MsgDisbandAnswer();
t.agree = e;
var o = E.proto.mahjong.MsgDisbandAnswer.encode(t);
this.sendMsg(E.proto.mahjong.MessageCode.OPDisbandAnswer, o);
};
e.prototype.getRoomConfig = function() {};
e.prototype.cleanUI = function() {
this.roomView.listensObj.visible = !1;
this.roomView.meldOpsPanel.visible = !1;
};
e.prototype.setBankerFlag = function() {
var e = this;
Object.keys(this.players).forEach(function(t) {
var o = e.players[t];
o.playerView.head.onUpdateBankerFlag(o.chairID === e.bankerChairID, e.isContinuousBanker);
});
};
e.prototype.loadHandResultView = function(e) {
this.host.component.addComponent(_.HandResultView).showView(this, e);
};
e.prototype.loadGameOverResultView = function(e) {
this.host.component.addComponent(l.GameOverResultView).showView(this, e);
};
e.prototype.hideDiscardedTips = function() {
var e = this;
Object.keys(this.players).forEach(function(t) {
e.players[t].hideDiscardedTips();
});
};
e.prototype.sendDonate = function(e, t) {
var o = this.myPlayer.chairID, n = new E.proto.mahjong.MsgDonate();
n.fromChairID = o;
n.toChairID = t;
n.itemID = e;
var i = E.proto.mahjong.MsgDonate.encode(n);
this.sendMsg(E.proto.mahjong.MessageCode.OPDonate, i);
};
e.prototype.showDonate = function(e) {
if (null != e) {
var t = e.itemID, o = this.roomView.donateMoveObj, n = this.getPlayerByChairID(e.fromChairID), i = this.getPlayerByChairID(e.toChairID);
if (null == n || null == i) {
a.Logger.debug("llwant, fromPlayer || toPlayer is null...");
return;
}
var r = n.playerView.head.headView.node.position, s = i.playerView.head.headView.node.position, l = "", u = "", c = "";
(0, [ function() {
l = "dj_meigui";
u = "Effect_baojv_hua";
c = "daoju_hua";
}, function() {
l = "dj_ganbei";
u = "Effect_daojv_jiubei";
c = "daoju_pijiu";
}, function() {
l = "dj_jd";
u = "Effect_daojv_jidan";
c = "daoju_jidan";
}, function() {
l = "dj_tuoxie";
u = "Effect_daojv_tuoxie";
c = "daoju_tuoxie";
}, function() {
l = "dj_qj";
u = "Effect_daojv_quanji";
c = "daoju_quanji";
}, function() {
l = "dj_bb";
u = "Effect_daojv_shiren";
c = "daoju_shiren";
}, function() {
l = "dj_hj";
u = "Effect_daojv_hongjiu";
c = "daoju_hongjiu";
}, function() {
l = "dj_mmd";
u = "Effect_daojv_zui";
c = "daoju_zui";
} ][t - 1])();
if (null == l || null == u) {
a.Logger.debug("llwant, sprite || effobjSUB is null...");
return;
}
o.node.position = r;
o.url = "ui://lobby_player_info/" + l;
o.visible = !0;
var d = cc.moveTo(1, s);
o.node.runAction(d);
this.getRoomHost().component.scheduleOnce(function() {
o.visible = !1;
i.playerView.playerDonateEffect(u);
"" !== c && a.SoundMgr.playEffectAudio("daoju/" + c);
}, 1);
}
};
e.prototype.setArrowByParent = function(e) {
this.roomView.setArrowByParent(e);
};
e.prototype.showOrHideMeldsOpsPanel = function(e, t) {
this.roomView.showOrHideMeldsOpsPanel(e, t);
};
e.prototype.isMe = function(e) {
return this.myUser.userID === e;
};
e.prototype.isReplayMode = function() {
return void 0 !== this.replay;
};
e.prototype.getBankerChairID = function() {
return this.bankerChairID;
};
e.prototype.sendActionMsg = function(e) {
this.sendMsg(E.proto.mahjong.MessageCode.OPAction, e);
};
e.prototype.quit = function() {
this.stopBgSound();
this.host.quit();
};
e.prototype.hideTingDataView = function() {
this.roomView.hideTingDataView();
};
e.prototype.showTingDataView = function(e) {
this.roomView.showTingDataView(e);
};
e.prototype.isListensObjVisible = function() {
return this.roomView.listensObj.visible;
};
e.prototype.getPlayerByUserID = function(e) {
return this.players[e];
};
e.prototype.getPlayerByCharID = function(e) {
return this.players[e];
};
e.prototype.getMyPlayer = function() {
return this.myPlayer;
};
e.prototype.getMyPlayerInfo = function() {
return this.myPlayer.playerInfo;
};
e.prototype.setWaitingPlayer = function(e) {
var t = this.getPlayerByChairID(e);
this.roomView.setWaitingPlayer(t.playerView);
};
e.prototype.getPlayers = function() {
return this.players;
};
e.prototype.setJiaJiaZhuang = function() {
this.roomView.setJiaJiaZhuang();
};
e.prototype.setRoundMask = function() {
this.roomView.setRoundMask();
};
e.prototype.showRoomNumber = function() {
this.roomView.showRoomNumber();
};
e.prototype.showOrHideReadyButton = function(e) {
this.roomView.showOrHideReadyButton(e);
};
e.prototype.onUpdateStatus = function(e) {
this.roomView.onUpdateStatus(e);
};
e.prototype.switchBg = function(e) {
this.roomView.switchBg(e);
};
e.prototype.showMsg = function(e) {
this.players[e.fromUserID].onChatMsg(e);
};
e.prototype.coWaitSeconds = function(e) {
return i(this, void 0, Promise, function() {
var t = this;
return r(this, function(o) {
return [ 2, new Promise(function(o) {
t.host.component.scheduleOnce(function() {
o();
}, e);
}) ];
});
});
};
e.prototype.playBgSound = function() {
a.SoundMgr.playMusicAudio("gameb/game_matchBg", !0);
};
e.prototype.stopBgSound = function() {
a.SoundMgr.stopMusic();
};
return e;
}();
o.Room = S;
cc._RF.pop();
}, {
"../lobby/lcore/LCoreExports": "LCoreExports",
"../lobby/shareUtil/ShareExports": "ShareExports",
"./GameOverResultView": "GameOverResultView",
"./HandResultView": "HandResultView",
"./Player": "Player",
"./RoomView": "RoomView",
"./handlers/HandlerActionResultNotify": "HandlerActionResultNotify",
"./handlers/HandlerMsg2Lobby": "HandlerMsg2Lobby",
"./handlers/HandlerMsgActionAllowed": "HandlerMsgActionAllowed",
"./handlers/HandlerMsgDeal": "HandlerMsgDeal",
"./handlers/HandlerMsgDeleted": "HandlerMsgDeleted",
"./handlers/HandlerMsgDisbandNotify": "HandlerMsgDisbandNotify",
"./handlers/HandlerMsgDonate": "HandlerMsgDonate",
"./handlers/HandlerMsgGameOver": "HandlerMsgGameOver",
"./handlers/HandlerMsgHandOver": "HandlerMsgHandOver",
"./handlers/HandlerMsgKickout": "HandlerMsgKickout",
"./handlers/HandlerMsgReActionAllowed": "HandlerMsgReActionAllowed",
"./handlers/HandlerMsgRestore": "HandlerMsgRestore",
"./handlers/HandlerMsgRoomUpdate": "HandlerMsgRoomUpdate",
"./handlers/HandlerMsgShowTips": "HandlerMsgShowTips",
"./handlers/HandlerMsgUpdateLocation": "HandlerMsgUpdateLocation",
"./handlers/HandlerMsgUpdatePropCfg": "HandlerMsgUpdatePropCfg",
"./proto/protoGame": "protoGame"
} ],
RuleViewsExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9bfebkWmX9NIZeZeWCooJrU", "RuleViewsExports");
function n(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
}
Object.defineProperty(o, "__esModule", {
value: !0
});
n(e("./DFRuleView"));
n(e("./RunFastRuleView"));
n(e("./ZJMJRuleView"));
cc._RF.pop();
}, {
"./DFRuleView": "DFRuleView",
"./RunFastRuleView": "RunFastRuleView",
"./ZJMJRuleView": "ZJMJRuleView"
} ],
RunFastRuleView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "05f4eOeBghMHYCW/D4ga+gg", "RunFastRuleView");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lcore/LCoreExports"), r = cc._decorator.ccclass, a = function() {
function e() {
var e;
this.toggleRoundCounts = [];
this.togglePays = [];
this.recordKey = "GZRule";
this.priceCfg = null;
this.rules = ((e = {}).roomType = 8, e.playerNumAcquired = 3, e.payNum = 4, e.payType = 0, 
e.handNum = 4, e.modName = "gamea", e);
}
e.prototype.show = function() {
this.view.visible = !0;
};
e.prototype.hide = function() {
this.view.visible = !1;
};
e.prototype.destroy = function() {
this.newRoomView.forReview || this.saveRule();
};
e.prototype.updatePriceCfg = function(e) {
if (null !== e) {
var t = this.rules.roomType;
this.priceCfg = e["" + t];
i.Logger.debug("dfmj RuleVIew.updateComsumer roomType:" + t + ", priceCfg:" + JSON.stringify(this.priceCfg));
}
this.updateComsumer();
};
e.prototype.updateComsumer = function() {
var e = this.getConfigTable(), t = this.getToggleIndex(this.togglePays), o = e.payType[t], n = this.getToggleIndex(this.toggleRoundCounts), i = e.handNum[n], r = this.getCost(o, 3, i);
this.newRoomView.updatePrice(r);
};
e.prototype.bindView = function(e) {
this.newRoomView = e;
var t = fgui.UIPackage.createObject("lobby_create_room", "gzRoom").asCom;
this.view = t;
var o = e.getView(), n = o.getChild("mount");
t.setPosition(n.x, n.y);
o.addChild(t);
this.initAllView();
if (this.newRoomView.forReview) this.initItems(this.newRoomView.itemsJSON); else if (i.DataStore.hasKey(this.recordKey)) {
var r = i.DataStore.getString(this.recordKey, "");
i.Logger.debug("jsnoStr:", r);
if ("" !== r) try {
var a = JSON.parse(r);
this.initItems(a);
} catch (e) {
i.Logger.error("parse config error:", e);
i.DataStore.setItem(this.recordKey, "");
}
}
};
e.prototype.getRules = function() {
var e = this.getConfigTable(), t = this.rules, o = this.getToggleIndex(this.toggleRoundCounts);
t.handNum = e.handNum[o];
var n = this.getToggleIndex(this.togglePays);
t.payType = e.payType[n];
return JSON.stringify(t);
};
e.prototype.setToggleIndex = function(e, t, o) {
Object.keys(t).forEach(function(n) {
t[Number(n)] === o && (e[Number(n)].selected = !0);
});
};
e.prototype.initItems = function(e) {
try {
var t = this.getConfigTable();
this.setToggleIndex(this.toggleRoundCounts, t.handNum, e.handNum);
this.setToggleIndex(this.togglePays, t.payType, e.payType);
} catch (e) {
i.Logger.error(e);
}
};
e.prototype.initAllView = function() {
var e = this.view.getChild("round4Button").asButton;
e.getChild("title").text = "4局";
e.onClick(this.updateComsumer, this);
this.toggleRoundCounts.push(e);
var t = this.view.getChild("round8Button").asButton;
t.getChild("title").text = "8局";
t.onClick(this.updateComsumer, this);
this.toggleRoundCounts.push(t);
var o = this.view.getChild("round16Button").asButton;
o.getChild("title").text = "16局";
o.onClick(this.updateComsumer, this);
this.toggleRoundCounts.push(o);
var n = this.view.getChild("ownerPayButton").asButton;
n.getChild("title").text = "房主支付";
n.onClick(this.updateComsumer, this);
this.togglePays.push(n);
var r = this.view.getChild("aapPayButton").asButton;
r.getChild("title").text = "AA支付";
r.onClick(this.updateComsumer, this);
this.togglePays.push(r);
if (i.DataStore.hasKey(this.recordKey)) {
var a = i.DataStore.getString(this.recordKey);
i.Logger.debug("jsnoStr:", a);
}
};
e.prototype.getConfigTable = function() {
var e, t, o, n, i;
return (e = {}).playerNumAcquired = ((t = {})[0] = 2, t[1] = 3, t[2] = 4, t), e.payNum = ((o = {})[0] = 24, 
o[1] = 36, o[2] = 66, o), e.payType = ((n = {})[0] = 0, n[1] = 1, n), e.handNum = ((i = {})[0] = 4, 
i[1] = 8, i[2] = 16, i), e;
};
e.prototype.getCost = function(e, t, o) {
var n = "ownerPay:" + t + ":" + o;
1 === e && (n = "aaPay:" + t + ":" + o);
if (void 0 === this.priceCfg) {
i.Logger.debug("this.priceCfg === undefine");
return 0;
}
i.Logger.debug("key: " + n);
var r = this.priceCfg, a = r.activityPriceCfg;
if (null !== a) {
return a.discountCfg[n];
}
var s = r.originalPriceCfg;
return null !== s ? s[n] : 0;
};
e.prototype.getToggleIndex = function(e) {
for (var t = e.length, o = 0; o < t; o++) {
if (e[o].selected) return o;
}
return 0;
};
e.prototype.saveRule = function() {
i.Logger.debug("guanzhang RuleVIew.saveRule()");
var e = this.getRules();
i.DataStore.setItem(this.recordKey, e);
};
return e = n([ r ], e);
}();
o.RunFastRuleView = a;
cc._RF.pop();
}, {
"../lcore/LCoreExports": "LCoreExports"
} ],
SettingPopupView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7874cX3un5Ii62MfIXsecmy", "SettingPopupView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../../lcore/LCoreExports"), r = e("./DisbandClubView"), a = e("./ModifyClubName"), s = e("./QuitClubView"), l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.view = null;
return t;
}
t.prototype.disbandClub = function() {
this.clubView.disbandClub();
};
t.prototype.modifyClubName = function(e) {
this.clubView.modifyClubName(e);
};
t.prototype.quitClub = function() {
this.clubView.quitClub();
};
t.prototype.showQuicklyCreateView = function() {
this.clubView.showQuicklyCreateView();
};
t.prototype.show = function(e, t, o) {
this.clubView = e;
this.clubInfo = t;
var n = fgui.UIPackage.createObject("lobby_club", "settingPopup").asCom;
this.view = n;
this.initView();
fgui.GRoot.inst.showPopup(this.view);
this.view.setPosition(o + 949, 106);
};
t.prototype.initView = function() {
var e = this.view.getChild("managerCom").asCom, t = e.getChild("modify").asButton, o = e.getChild("disband").asButton, n = e.getChild("quickSetting").asButton, i = this.view.getChild("quitClubBtn").asButton;
t.onClick(this.onModifyClubNameClick, this);
o.onClick(this.onDisbandClick, this);
n.onClick(this.onQuickSettingClick, this);
i.onClick(this.onQuitClubClick, this);
var r = this.isOwner(), a = this.view.getController("isManager");
if (!1 === r) {
a.selectedIndex = 0;
this.view.setSize(172, 94);
} else a.selectedIndex = 1;
};
t.prototype.isOwner = function() {
return i.DataStore.getString(i.KeyConstants.USER_ID, "") === this.clubInfo.creatorUserID;
};
t.prototype.onModifyClubNameClick = function() {
this.addComponent(a.ModifyClubName).bind(this, this.clubInfo.baseInfo.clubName);
};
t.prototype.onDisbandClick = function() {
this.addComponent(r.DisbandClubView).bind(this, this.clubInfo.baseInfo.clubName);
};
t.prototype.onQuickSettingClick = function() {
this.showQuicklyCreateView();
fgui.GRoot.inst.hidePopup();
};
t.prototype.onQuitClubClick = function() {
this.addComponent(s.QuitClubView).bind(this, this.clubInfo.baseInfo.clubName);
};
return t;
}(cc.Component);
o.SettingPopupView = l;
cc._RF.pop();
}, {
"../../../lcore/LCoreExports": "LCoreExports",
"./DisbandClubView": "DisbandClubView",
"./ModifyClubName": "ModifyClubName",
"./QuitClubView": "QuitClubView"
} ],
ShareExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "25a4aMywx1B/Yj4tuHjLMQt", "ShareExports");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
})(e("./Share"));
cc._RF.pop();
}, {
"./Share": "Share"
} ],
Share: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "666aao0+VxFBL2svA29Mxxt", "Share");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../chanelSdk/wxSdk/WeiXinSDkExports"), i = e("../lcore/LCoreExports"), r = e("../proto/protoLobby");
(function(e) {
(function(e) {
e[e.GameShare = 1] = "GameShare";
})(e.ShareSrcType || (e.ShareSrcType = {}));
(function(e) {
e[e.Image = 1] = "Image";
e[e.Video = 2] = "Video";
e[e.Gif = 3] = "Gif";
})(e.ShareMediaType || (e.ShareMediaType = {}));
(function(e) {
e[e.Moments = 1] = "Moments";
e[e.Friend = 2] = "Friend";
})(e.ShareDestType || (e.ShareDestType = {}));
e.shareGame = function(e, t, o, a, s) {
var l = i.DataStore.getString(i.KeyConstants.TOKEN, ""), u = "" + i.LEnv.rootURL + i.LEnv.wxShareInfo + "?tk=" + l + "&sence=" + t + "&mediaType=" + o + "&shareType=" + a;
i.Logger.trace("wxShareInfoURL:", u);
i.HTTP.hGet(e, u, function(e, t) {
var o = null;
if (null !== t) o = "获得分享信息错误，错误码:" + t; else if (null === (o = i.HTTP.hError(e))) {
var a = e.response, l = r.proto.lobby.MsgShareInfo.decode(a);
if (0 === l.result) {
i.Logger.debug("get wxShareInfo ok");
n.WeiXinSDK.shareWeChat(function() {
i.Logger.debug("share success");
}, function() {
i.Logger.debug("share fail");
}, l.text, l.multimedia, s);
} else i.Logger.debug("get wxShareInfo error, errCode:", l.result);
}
if (null !== o) {
i.Logger.debug("get wxShareInfo failed:", o);
i.Dialog.showDialog(o, function() {});
}
});
};
e.shareWebPage = function(e, t, o) {
cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shareWebPage", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, t, o);
};
})(o.Share || (o.Share = {}));
cc._RF.pop();
}, {
"../chanelSdk/wxSdk/WeiXinSDkExports": "WeiXinSDkExports",
"../lcore/LCoreExports": "LCoreExports",
"../proto/protoLobby": "protoLobby"
} ],
SoundMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8d37dNGaINIuYT0irNntv40", "SoundMgr");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
e.playEffectAudio = function(e, t, o) {
void 0 === t && (t = !1);
cc.loader.loadRes("sound/" + e, cc.AudioClip, null, function(e, n) {
if (void 0 === e || null === e) {
var i = cc.audioEngine.playEffect(n, t);
void 0 !== o && o(i);
} else console.error("loadRes Audio -------------: " + e);
});
};
e.stopEffect = function(e) {
cc.audioEngine.stopEffect(e);
};
e.playMusicAudio = function(e, t, o) {
void 0 === t && (t = !1);
cc.loader.loadRes("sound/" + e, cc.AudioClip, null, function(e, n) {
if (void 0 === e || null === e) {
var i = cc.audioEngine.playMusic(n, t);
void 0 !== o && o(i);
} else console.error("loadRes Music -------------: " + e);
});
};
e.stopMusic = function() {
cc.audioEngine.stopMusic();
};
})(o.SoundMgr || (o.SoundMgr = {}));
cc._RF.pop();
}, {} ],
TileImageMounterA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e3400q6ElRIMZhuCyFuRd40", "TileImageMounterA");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./AgariIndexA");
(function(e) {
e.mountTileImage = function(e, t) {
var o = n.AgariIndexA.tileId2ArtId(t), i = Math.floor(o / 4) + 2, r = o % 4, a = e.getChild("n1").asLoader;
a.visible = !1;
var s = e.getChild("n2").asLoader;
s.visible = !1;
var l, u, c = e.getChild("n3").asLoader;
c.visible = !1;
l = 1 === r || 0 === r ? "hong_" : "hei_";
var d = "big_" + r;
if (i > 10 && i < 14) {
d = "big_" + l + i;
u = e.getChild("p2");
} else if (15 === i) {
r = -1;
d = "big_" + l + i;
u = e.getChild("p2");
} else u = e.getChild("p1");
a.url = "ui://lobby_poker/" + l + i;
a.visible = !0;
if (-1 !== r) {
s.url = "ui://lobby_poker/small_" + r;
s.visible = !0;
}
c.url = "ui://lobby_poker/" + d;
c.setPosition(u.x, u.y);
c.visible = !0;
};
e.mountMeldEnableImage = function(t, o, n) {
e.mountTileImage(t, o);
};
})(o.TileImageMounterA || (o.TileImageMounterA = {}));
cc._RF.pop();
}, {
"./AgariIndexA": "AgariIndexA"
} ],
TileImageMounter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "03568vxynxBAaFloukItgfv", "TileImageMounter");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./AgariIndex");
(function(e) {
e.mountTileImage = function(e, t) {
var o = "ui://lobby_mahjong/suit" + n.AgariIndex.tileId2ArtId(t);
e.getChild("title").asLoader.url = o;
};
e.mountMeldEnableImage = function(t, o, n) {
e.mountTileImage(t, o);
};
})(o.TileImageMounter || (o.TileImageMounter = {}));
cc._RF.pop();
}, {
"./AgariIndex": "AgariIndex"
} ],
UserInfoView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "37455NvqNBB8b9c8jajdbgk", "UserInfoView");
var n = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function n() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../lcore/LCoreExports"), a = cc._decorator.ccclass, s = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this.eventTarget = new cc.EventTarget();
this.getComponent("LobbyModule").loader.fguiAddPackage("lobby/fui_user_info/lobby_user_info");
var e = fgui.UIPackage.createObject("lobby_user_info", "userInfoView").asCom;
r.CommonFunction.setViewInCenter(e);
this.view = e;
var t = new fgui.Window();
t.contentPane = e;
t.modal = !0;
this.win = t;
this.win.show();
this.initView();
};
t.prototype.onDestroy = function() {
this.eventTarget.emit("destroy");
this.win.hide();
this.win.dispose();
};
t.prototype.onCloseClick = function() {
this.destroy();
};
t.prototype.initView = function() {
this.view.getChild("closeBtn").onClick(this.onCloseClick, this);
var e = this.view.getChild("nick"), t = e.asCom.getChild("item");
t.text = "昵称:";
var o = e.asCom.getChild("text"), n = r.DataStore.getString(r.KeyConstants.NICK_NAME);
null === n || n.length < 1 ? o.text = "默认用户名字" : o.text = n;
(t = (e = this.view.getChild("id")).asCom.getChild("item")).text = "ID:";
(o = e.asCom.getChild("text")).text = r.DataStore.getString(r.KeyConstants.USER_ID);
var i = this.view.getController("gender"), a = r.DataStore.getString(r.KeyConstants.SEX);
i.selectedIndex = +a;
var s = this.view.getChild("loader").asLoader, l = r.DataStore.getString(r.KeyConstants.HEAL_IMG_URL);
r.CommonFunction.setHead(s, l, +a);
};
return t = i([ a ], t);
}(cc.Component);
o.UserInfoView = s;
cc._RF.pop();
}, {
"../lcore/LCoreExports": "LCoreExports"
} ],
WS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c1c36TdZBpE7avme0YR26do", "WS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./Logger"), i = e("./MsgQueue"), r = e("./WebsocketWrapper"), a = function() {
function e(e, t, o, n) {
var a = this;
this.events = [];
this.rolling = !1;
this.mq = t;
this.comp = o.comp;
this.pp = n;
this.ww = new r.WebsocketWrapper(o, e);
this.ww.onEnd = function() {
a.events.push(new i.Message(i.MsgType.wsClosed));
a.roll();
};
this.ww.onMessage = function(e) {
var t = e.data;
a.events.push(new i.Message(i.MsgType.wsData, t));
a.roll();
};
this.ww.onOpen = function() {
a.events.push(new i.Message(i.MsgType.wsOpen));
a.roll();
};
}
e.prototype.roll = function() {
var e = this;
if (!(this.rolling || this.events.length < 1)) {
var t = function() {
e.rolling = !1;
e.roll();
};
this.rolling = !0;
var o = this.events.shift();
if (o.mt === i.MsgType.wsData) {
var r = o.data, a = function(t) {
var o = e.pp.decode(new Uint8Array(t));
if (o.Ops === e.pp.pingCmd) {
var n = {
Ops: e.pp.pongCmd,
Data: o.Data
}, i = e.pp.encode(n).toArrayBuffer();
e.ww.onPing(i);
} else o.Ops === e.pp.pongCmd ? e.ww.onPong(o.Data.toArrayBuffer()) : e.mq.pushWebsocketBinaryEvent(o);
};
void 0 === this.isBlobDataType && (r instanceof ArrayBuffer ? this.isBlobDataType = !1 : r instanceof Blob ? this.isBlobDataType = !0 : n.Logger.error("WS unknown received data type:", typeof r));
if (this.isBlobDataType) {
var s = new FileReader();
s.onloadend = function() {
try {
var o = s.result;
a(o);
} catch (e) {
n.Logger.error(e);
}
e.comp.scheduleOnce(t);
};
s.readAsArrayBuffer(r);
} else {
try {
a(r);
} catch (e) {
n.Logger.error(e);
}
this.comp.scheduleOnce(t);
}
} else {
this.mq.pushMessage(o);
this.comp.scheduleOnce(t);
}
}
};
return e;
}();
o.WS = a;
cc._RF.pop();
}, {
"./Logger": "Logger",
"./MsgQueue": "MsgQueue",
"./WebsocketWrapper": "WebsocketWrapper"
} ],
WebsocketWrapper: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4bd93I+1Z9FboofJhmTi1qe", "WebsocketWrapper");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./Logger"), i = function() {
function e(e, t) {
var o = this;
if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID && cc.sys.platform !== cc.sys.OPPO_GAME) {
var i = cc.url.raw("resources/certificate/cacert.pem");
this.ws = new WebSocket(t, [], i);
} else this.ws = new WebSocket(t);
var r = this.ws;
this.rtts = 0;
this.rttsCount = 0;
var a = function() {
r.close();
}, s = e.startPing && void 0 !== e.pingPacketProvider, l = e.destroyListener, u = function() {
o.ping();
}, c = function() {
l.off("destroy", a);
if (s) {
e.comp.unschedule(u);
o.pingPacketProvider = null;
}
};
l.once("destroy", a);
r.onclose = function(e) {
c();
n.Logger.debug("ws close:", JSON.stringify(e));
o.onEnd(o);
};
r.onerror = function(e) {
c();
n.Logger.debug("ws error:", JSON.stringify(e));
};
r.onmessage = function(e) {
o.onMessage(e, o);
};
r.onopen = function(t) {
n.Logger.debug("ws onopen:", JSON.stringify(t));
if (s) {
e.comp.schedule(u, e.pingFrequency, cc.macro.REPEAT_FOREVER, e.pingFrequency);
o.pingPacketProvider = e.pingPacketProvider;
n.Logger.debug("WebsocketWrapper has ping:", e.pingFrequency);
}
o.onOpen(o);
};
}
e.prototype.close = function() {
null != this.ws && this.ws.close();
};
e.prototype.send = function(e) {
null != this.ws && this.ws.readyState === WebSocket.OPEN ? this.ws.send(e) : n.Logger.debug("websocket send error: ws is null or not ready to send");
};
Object.defineProperty(e.prototype, "latency", {
get: function() {
return this.rttsCount < 1 ? 0 : Math.ceil(this.rtts / this.rttsCount);
},
enumerable: !0,
configurable: !0
});
e.prototype.onPong = function(e) {
this.rttsCount > 9 ? this.rtts = this.rtts - this.latency : this.rttsCount++;
var t = new DataView(e).getFloat64(0, !0), o = Date.now() - t;
this.rtts += o;
};
e.prototype.onPing = function(e) {
this.send(e);
};
e.prototype.ping = function() {
var e = Date.now(), t = new ArrayBuffer(8);
new DataView(t, 0, 8).setFloat64(0, e, !0);
var o = this.pingPacketProvider(new Uint8Array(t, 0, 8));
this.send(o);
};
return e;
}();
o.WebsocketWrapper = i;
cc._RF.pop();
}, {
"./Logger": "Logger"
} ],
WeiXinSDK: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "44c8cVkshFONIY3rX8aePQa", "WeiXinSDK");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../lcore/LCoreExports");
(function(e) {
var t = {};
e.login = function(e) {
wx.login({
success: function(o) {
var i = o.code;
if ("" !== i && null !== i && void 0 !== i) {
t.wechatLCode = o.code;
var r = {
withCredentials: !0,
success: function(o) {
t.wxUserInfo = o;
e(!0);
},
fail: function(t) {
n.Logger.error("wx getUserInfo err:", t);
e(!1);
}
};
wx.getUserInfo(r);
} else e(!1);
},
fail: function(t) {
n.Logger.error("wx login error", t);
e(!1);
}
});
};
var o = function(e, t, o) {
n.Logger.debug("come back from share");
if (0 !== o) {
(Date.now() - o) / 1e3 > 2 ? null !== e && e() : null !== t && t();
}
};
e.getLaunchOption = function() {
var e = wx.getLaunchOptionsSync();
Object.keys(e.query).forEach(function(t) {
n.Logger.debug("launchOption.query", t, e.query[t]);
});
return e.query;
};
var i = function(e, t, n) {
void 0 === n && (n = 0);
wx.onShow(function(i) {
o(e, t, n);
});
};
e.shareWeChat = function(e, t, o, r, a) {
void 0 === e && (e = null);
void 0 === t && (t = null);
void 0 === o && (o = null);
void 0 === r && (r = null);
n.Logger.debug("shareInfo", o, r);
if (null !== o && null != r) {
i(e, t, Date.now());
wx.shareAppMessage({
title: "" + o,
imageUrl: "" + r,
query: a
});
} else null !== t && t();
};
e.getWxDataMap = function() {
return t;
};
})(o.WeiXinSDK || (o.WeiXinSDK = {}));
cc._RF.pop();
}, {
"../../lcore/LCoreExports": "LCoreExports"
} ],
WeiXinSDkExports: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d21edzl14ZCtKkRT5LymigW", "WeiXinSDkExports");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
for (var t in e) o.hasOwnProperty(t) || (o[t] = e[t]);
})(e("./WeiXinSDK"));
cc._RF.pop();
}, {
"./WeiXinSDK": "WeiXinSDK"
} ],
ZJMJRuleView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "94710ARiJ1OL4KQzP5Ae5pP", "ZJMJRuleView");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../lcore/LCoreExports"), r = cc._decorator.ccclass, a = function() {
function e() {
var e;
this.toggleRoundCounts = [];
this.togglePays = [];
this.togglePlayerNums = [];
this.toggleDifenTypes = [];
this.toggleXuanMaTypes = [];
this.toggleFengDingTypes = [];
this.priceCfg = null;
this.recordKey = "ZJMJRule";
this.rules = ((e = {}).roomType = 21, e.handNum = 8, e.payType = 0, e.playerNumAcquired = 4, 
e.payNum = 24, e.baseScoreType = 0, e.HorseNumberType = 0, e.trimType = 0, e.noWind = !0, 
e.afterKongChuckerPayForAll = !0, e.afterKongX2 = !0, e.finalDrawX2 = !0, e.sevenPairX2 = !0, 
e.greatSevenPairX4 = !0, e.allWindX2 = !0, e.pureSameX2 = !0, e.pongpongX2 = !0, 
e.heavenX5 = !0, e.thirteenOrphanX10 = !0, e.modName = "gameb", e);
}
e.prototype.destroy = function() {
this.newRoomView.forReview || this.saveRule();
};
e.prototype.show = function() {
this.view.visible = !0;
};
e.prototype.hide = function() {
this.view.visible = !1;
};
e.prototype.bindView = function(e) {
this.newRoomView = e;
var t = fgui.UIPackage.createObject("lobby_create_room", "zjmjRoom").asCom;
this.view = t;
var o = e.getView(), n = o.getChild("mount");
t.setPosition(n.x, n.y);
o.addChild(t);
this.initAllView();
if (this.newRoomView.forReview) this.initItems(this.newRoomView.itemsJSON); else if (i.DataStore.hasKey(this.recordKey)) {
var r = i.DataStore.getString(this.recordKey, "");
i.Logger.debug("jsnoStr:", r);
if ("" !== r) try {
var a = JSON.parse(r);
this.initItems(a);
} catch (e) {
i.Logger.error("parse config error:", e);
i.DataStore.setItem(this.recordKey, "");
}
}
};
e.prototype.updatePriceCfg = function(e) {
if (null !== e) {
var t = this.rules.roomType;
this.priceCfg = e["" + t];
i.Logger.debug("zjmjRuleVIew.updateComsumer roomType:" + t + ", priceCfg:" + JSON.stringify(this.priceCfg));
}
this.updateComsumer();
};
e.prototype.updateComsumer = function() {
var e = this.getConfigTable(), t = this.getToggleIndex(this.togglePays), o = e.payType[t], n = this.getToggleIndex(this.toggleRoundCounts), i = e.handNum[n], r = this.getToggleIndex(this.togglePlayerNums), a = e.playerNumAcquired[r], s = this.getCost(o, a, i);
this.newRoomView.updatePrice(s);
};
e.prototype.getRules = function() {
var e = this.getConfigTable(), t = this.rules, o = this.getToggleIndex(this.toggleRoundCounts);
t.handNum = e.handNum[o];
var n = this.getToggleIndex(this.togglePays);
t.payType = e.payType[n];
var i = this.getToggleIndex(this.togglePlayerNums);
t.playerNumAcquired = e.playerNumAcquired[i];
var r = this.getToggleIndex(this.toggleDifenTypes);
t.baseScoreType = e.baseScoreType[r];
var a = this.getToggleIndex(this.toggleXuanMaTypes);
t.HorseNumberType = e.HorseNumberType[a];
var s = this.getToggleIndex(this.toggleFengDingTypes);
t.trimType = e.trimType[s];
t.noWind = this.toggleQFP.selected;
t.afterKongChuckerPayForAll = this.toggleBSJ.selected;
t.afterKongX2 = this.toggleG2B.selected;
t.finalDrawX2 = this.toggleLY2B.selected;
t.sevenPairX2 = this.toggleDZ2B.selected;
t.greatSevenPairX4 = this.toggleDZ4B.selected;
t.allWindX2 = this.toggleFZ2B.selected;
t.pureSameX2 = this.toggleQYS2B.selected;
t.pongpongX2 = this.togglePPH2B.selected;
t.heavenX5 = this.toggleTH5B.selected;
t.thirteenOrphanX10 = this.toggle13Y10B.selected;
return JSON.stringify(t);
};
e.prototype.initRount = function() {
this.toggleRoundCounts[0] = this.view.getChild("round8Button").asButton;
this.toggleRoundCounts[1] = this.view.getChild("round16Button").asButton;
this.toggleRoundCounts[0].getChild("title").text = "8局";
this.toggleRoundCounts[1].getChild("title").text = "16局";
this.toggleRoundCounts[0].onClick(this.updateComsumer, this);
this.toggleRoundCounts[1].onClick(this.updateComsumer, this);
};
e.prototype.initPay = function() {
this.togglePays[0] = this.view.getChild("ownerPayButton").asButton;
this.togglePays[1] = this.view.getChild("aapPayButton").asButton;
this.togglePays[0].getChild("title").text = "房主支付";
this.togglePays[1].getChild("title").text = "AA支付";
this.togglePays[0].onClick(this.updateComsumer, this);
this.togglePays[1].onClick(this.updateComsumer, this);
};
e.prototype.initPlayerNums = function() {
this.togglePlayerNums[0] = this.view.getChild("2Player").asButton;
this.togglePlayerNums[1] = this.view.getChild("3Player").asButton;
this.togglePlayerNums[2] = this.view.getChild("4Player").asButton;
this.togglePlayerNums[0].getChild("title").text = "2人";
this.togglePlayerNums[1].getChild("title").text = "3人";
this.togglePlayerNums[2].getChild("title").text = "4人";
this.togglePlayerNums[0].onClick(this.updateComsumer, this);
this.togglePlayerNums[1].onClick(this.updateComsumer, this);
this.togglePlayerNums[2].onClick(this.updateComsumer, this);
};
e.prototype.initDifen = function() {
this.toggleDifenTypes[0] = this.view.getChild("difen1").asButton;
this.toggleDifenTypes[1] = this.view.getChild("difen2").asButton;
this.toggleDifenTypes[2] = this.view.getChild("difen3").asButton;
this.toggleDifenTypes[3] = this.view.getChild("difen4").asButton;
this.toggleDifenTypes[0].getChild("title").text = "1分";
this.toggleDifenTypes[1].getChild("title").text = "2分";
this.toggleDifenTypes[2].getChild("title").text = "5分";
this.toggleDifenTypes[3].getChild("title").text = "10分";
};
e.prototype.initXuanMa = function() {
this.toggleXuanMaTypes[0] = this.view.getChild("xuanma1").asButton;
this.toggleXuanMaTypes[1] = this.view.getChild("xuanma2").asButton;
this.toggleXuanMaTypes[2] = this.view.getChild("xuanma3").asButton;
this.toggleXuanMaTypes[3] = this.view.getChild("xuanma4").asButton;
this.toggleXuanMaTypes[0].getChild("title").text = "4马";
this.toggleXuanMaTypes[1].getChild("title").text = "6马";
this.toggleXuanMaTypes[2].getChild("title").text = "8马";
this.toggleXuanMaTypes[3].getChild("title").text = "12马";
};
e.prototype.initOtherRule = function() {
this.toggleQFP = this.view.getChild("qufengpai").asButton;
this.toggleBSJ = this.view.getChild("gangbao3jia").asButton;
this.toggleG2B = this.view.getChild("gangl2bei").asButton;
this.toggleLY2B = this.view.getChild("laoyueliangbei").asButton;
this.toggleDZ2B = this.view.getChild("qiduizi2bei").asButton;
this.toggleDZ4B = this.view.getChild("qiduizi4bei").asButton;
this.toggleFZ2B = this.view.getChild("fengiz2bei").asButton;
this.toggleQYS2B = this.view.getChild("qingyise2bei").asButton;
this.togglePPH2B = this.view.getChild("pengpenghu2bei").asButton;
this.toggleTH5B = this.view.getChild("tianhu5bei").asButton;
this.toggle13Y10B = this.view.getChild("13yao10bei").asButton;
this.toggleQFP.getChild("title").text = "去风牌";
this.toggleBSJ.getChild("title").text = "放杠杠爆包三家";
this.toggleG2B.getChild("title").text = "杠爆2倍";
this.toggleLY2B.getChild("title").text = "海底捞月2倍";
this.toggleDZ2B.getChild("title").text = "七对子2倍";
this.toggleDZ4B.getChild("title").text = "豪华七对子4倍";
this.toggleFZ2B.getChild("title").text = "全风子2倍";
this.toggleQYS2B.getChild("title").text = "清一色2倍";
this.togglePPH2B.getChild("title").text = "碰碰胡2倍";
this.toggleTH5B.getChild("title").text = "天胡5倍";
this.toggle13Y10B.getChild("title").text = "13幺10倍";
};
e.prototype.initFengding = function() {
this.toggleFengDingTypes[0] = this.view.getChild("fengding0").asButton;
this.toggleFengDingTypes[1] = this.view.getChild("fengding1").asButton;
this.toggleFengDingTypes[2] = this.view.getChild("fengding2").asButton;
this.toggleFengDingTypes[0].getChild("title").text = "不封顶";
this.toggleFengDingTypes[1].getChild("title").text = "8倍";
this.toggleFengDingTypes[2].getChild("title").text = "16倍";
};
e.prototype.initAllView = function() {
this.initRount();
this.initPay();
this.initPlayerNums();
this.initDifen();
this.initXuanMa();
this.initOtherRule();
this.initFengding();
};
e.prototype.setToggleIndex = function(e, t, o) {
Object.keys(t).forEach(function(n) {
t[Number(n)] === o && (e[Number(n)].selected = !0);
});
};
e.prototype.initItems = function(e) {
try {
var t = this.getConfigTable();
this.setToggleIndex(this.toggleRoundCounts, t.handNum, e.handNum);
this.setToggleIndex(this.togglePays, t.payType, e.payType);
this.setToggleIndex(this.togglePlayerNums, t.playerNumAcquired, e.playerNumAcquired);
this.setToggleIndex(this.toggleDifenTypes, t.baseScoreType, e.baseScoreType);
this.setToggleIndex(this.toggleXuanMaTypes, t.HorseNumberType, e.HorseNumberType);
this.setToggleIndex(this.toggleFengDingTypes, t.trimType, e.trimType);
this.toggleQFP.selected = e.noWind;
this.toggleBSJ.selected = e.afterKongChuckerPayForAll;
this.toggleG2B.selected = e.afterKongX2;
this.toggleLY2B.selected = e.finalDrawX2;
this.toggleDZ2B.selected = e.sevenPairX2;
this.toggleDZ4B.selected = e.greatSevenPairX4;
this.toggleFZ2B.selected = e.allWindX2;
this.toggleQYS2B.selected = e.pureSameX2;
this.togglePPH2B.selected = e.pongpongX2;
this.toggleTH5B.selected = e.heavenX5;
this.toggle13Y10B.selected = e.thirteenOrphanX10;
} catch (e) {
i.Logger.error(e);
}
};
e.prototype.getConfigTable = function() {
var e, t, o, n, i, r, a, s, l, u, c;
return (e = {}).playerNumAcquired = ((t = {})[0] = 2, t[1] = 3, t[2] = 4, t), e.payNum = ((o = {})[0] = 24, 
o[1] = 36, o[2] = 66, o), e.trimType = ((n = {})[0] = 0, n[1] = 1, n[2] = 2, n), 
e.HorseNumberType = ((i = {})[0] = 0, i[1] = 1, i[2] = 2, i[3] = 3, i), e.payType = ((r = {})[0] = 0, 
r[1] = 1, r), e.handNum = ((a = {})[0] = 8, a[1] = 16, a), e.baseScoreType = ((s = {})[0] = 0, 
s[1] = 1, s[2] = 2, s[3] = 3, s), e.neededDiamond = ((l = {})[0] = 32, l[1] = 48, 
l[2] = 88, l), e.neededDiamond4ThreePlayers = ((u = {})[0] = 24, u[1] = 36, u[2] = 66, 
u), e.neededDiamond4TwoPlayers = ((c = {})[0] = 16, c[1] = 24, c[2] = 44, c), e;
};
e.prototype.getCost = function(e, t, o) {
var n = "ownerPay:" + t + ":" + o;
1 === e && (n = "aaPay:" + t + ":" + o);
if (void 0 === this.priceCfg) {
i.Logger.debug("this.priceCfg === undefine");
return 0;
}
i.Logger.debug("key: " + n);
var r = this.priceCfg, a = r.activityPriceCfg;
if (null !== a) {
return a.discountCfg[n];
}
var s = r.originalPriceCfg;
return null !== s ? s[n] : 0;
};
e.prototype.getToggleIndex = function(e) {
for (var t = e.length, o = 0; o < t; o++) {
if (e[o].selected) return o;
}
return 0;
};
e.prototype.saveRule = function() {
i.Logger.debug("zjmjRuleVIew.saveRule()");
var e = this.getRules();
i.DataStore.setItem(this.recordKey, e);
};
return e = n([ r ], e);
}();
o.ZJMJRuleView = a;
cc._RF.pop();
}, {
"../lcore/LCoreExports": "LCoreExports"
} ],
bytebuffer: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "64e24Pl7y5OW6b4Iy0O0j/z", "bytebuffer");
var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
(function(o, i) {
if ("function" == typeof define && define.amd) define([ "long" ], i); else if ("function" == typeof e && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && t && t.exports) {
var r, a = t;
try {
r = e("long");
} catch (e) {}
r = i(r);
a.exports = r;
} else (o.dcodeIO = o.dcodeIO || {}).ByteBuffer = i(o.dcodeIO.Long);
})(void 0, function(e) {
function t(e) {
var t = 0;
return function() {
return t < e.length ? e.charCodeAt(t++) : null;
};
}
function o() {
var e = [], t = [];
return function() {
if (0 === arguments.length) return t.join("") + u.apply(String, e);
1024 < e.length + arguments.length && (t.push(u.apply(String, e)), e.length = 0);
Array.prototype.push.apply(e, arguments);
};
}
function i(e, t, o, n, i) {
var r, a = (1 << (r = 8 * i - n - 1)) - 1, s = a >> 1, l = -7;
i = o ? i - 1 : 0;
var u = o ? -1 : 1, c = e[t + i];
i += u;
o = c & (1 << -l) - 1;
c >>= -l;
for (l += r; 0 < l; o = 256 * o + e[t + i], i += u, l -= 8) ;
r = o & (1 << -l) - 1;
o >>= -l;
for (l += n; 0 < l; r = 256 * r + e[t + i], i += u, l -= 8) ;
if (0 === o) o = 1 - s; else {
if (o === a) return r ? NaN : Infinity * (c ? -1 : 1);
r += Math.pow(2, n);
o -= s;
}
return (c ? -1 : 1) * r * Math.pow(2, o - n);
}
function r(e, t, o, n, i, r) {
var a, s = 8 * r - i - 1, l = (1 << s) - 1, u = l >> 1, c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
r = n ? 0 : r - 1;
var d = n ? 1 : -1, h = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
t = Math.abs(t);
isNaN(t) || Infinity === t ? (t = isNaN(t) ? 1 : 0, n = l) : (n = Math.floor(Math.log(t) / Math.LN2), 
1 > t * (a = Math.pow(2, -n)) && (n--, a *= 2), 2 <= (t = 1 <= n + u ? t + c / a : t + c * Math.pow(2, 1 - u)) * a && (n++, 
a /= 2), n + u >= l ? (t = 0, n = l) : 1 <= n + u ? (t = (t * a - 1) * Math.pow(2, i), 
n += u) : (t = t * Math.pow(2, u - 1) * Math.pow(2, i), n = 0));
for (;8 <= i; e[o + r] = 255 & t, r += d, t /= 256, i -= 8) ;
n = n << i | t;
for (s += i; 0 < s; e[o + r] = 255 & n, r += d, n /= 256, s -= 8) ;
e[o + r - d] |= 128 * h;
}
var a = function e(t, o, n) {
"undefined" == typeof t && (t = e.DEFAULT_CAPACITY);
"undefined" == typeof o && (o = e.DEFAULT_ENDIAN);
"undefined" == typeof n && (n = e.DEFAULT_NOASSERT);
if (!n) {
if (0 > (t |= 0)) throw RangeError("Illegal capacity");
o = !!o;
n = !!n;
}
this.buffer = 0 === t ? l : new ArrayBuffer(t);
this.view = 0 === t ? null : new Uint8Array(this.buffer);
this.offset = 0;
this.markedOffset = -1;
this.limit = t;
this.littleEndian = o;
this.noAssert = n;
};
a.VERSION = "5.0.1";
a.LITTLE_ENDIAN = !0;
a.BIG_ENDIAN = !1;
a.DEFAULT_CAPACITY = 16;
a.DEFAULT_ENDIAN = a.BIG_ENDIAN;
a.DEFAULT_NOASSERT = !1;
a.Long = e || null;
var s = a.prototype;
Object.defineProperty(s, "__isByteBuffer__", {
value: !0,
enumerable: !1,
configurable: !1
});
var l = new ArrayBuffer(0), u = String.fromCharCode;
a.accessor = function() {
return Uint8Array;
};
a.allocate = function(e, t, o) {
return new a(e, t, o);
};
a.concat = function(e, t, o, n) {
"boolean" != typeof t && "string" == typeof t || (n = o, o = t, t = void 0);
for (var i, r = 0, s = 0, l = e.length; s < l; ++s) a.isByteBuffer(e[s]) || (e[s] = a.wrap(e[s], t)), 
0 < (i = e[s].limit - e[s].offset) && (r += i);
if (0 === r) return new a(0, o, n);
t = new a(r, o, n);
for (s = 0; s < l; ) 0 >= (i = (o = e[s++]).limit - o.offset) || (t.view.set(o.view.subarray(o.offset, o.limit), t.offset), 
t.offset += i);
t.limit = t.offset;
t.offset = 0;
return t;
};
a.isByteBuffer = function(e) {
return !0 === (e && e.__isByteBuffer__);
};
a.type = function() {
return ArrayBuffer;
};
a.wrap = function(e, t, o, i) {
"string" != typeof t && (i = o, o = t, t = void 0);
if ("string" == typeof e) switch ("undefined" == typeof t && (t = "utf8"), t) {
case "base64":
return a.fromBase64(e, o);

case "hex":
return a.fromHex(e, o);

case "binary":
return a.fromBinary(e, o);

case "utf8":
return a.fromUTF8(e, o);

case "debug":
return a.fromDebug(e, o);

default:
throw Error("Unsupported encoding: " + t);
}
if (null === e || "object" !== ("undefined" == typeof e ? "undefined" : n(e))) throw TypeError("Illegal buffer");
if (a.isByteBuffer(e)) return (t = s.clone.call(e)).markedOffset = -1, t;
if (e instanceof Uint8Array) t = new a(0, o, i), 0 < e.length && (t.buffer = e.buffer, 
t.offset = e.byteOffset, t.limit = e.byteOffset + e.byteLength, t.view = new Uint8Array(e.buffer)); else if (e instanceof ArrayBuffer) t = new a(0, o, i), 
0 < e.byteLength && (t.buffer = e, t.offset = 0, t.limit = e.byteLength, t.view = 0 < e.byteLength ? new Uint8Array(e) : null); else {
if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
for ((t = new a(e.length, o, i)).limit = e.length, o = 0; o < e.length; ++o) t.view[o] = e[o];
}
return t;
};
s.writeBitSet = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
var n, i = t, r = e.length, a = r >> 3, s = 0;
for (t += this.writeVarint32(r, t); a--; ) n = 1 & !!e[s++] | (1 & !!e[s++]) << 1 | (1 & !!e[s++]) << 2 | (1 & !!e[s++]) << 3 | (1 & !!e[s++]) << 4 | (1 & !!e[s++]) << 5 | (1 & !!e[s++]) << 6 | (1 & !!e[s++]) << 7, 
this.writeByte(n, t++);
if (s < r) {
for (n = a = 0; s < r; ) n |= (1 & !!e[s++]) << a++;
this.writeByte(n, t++);
}
return o ? (this.offset = t, this) : t - i;
};
s.readBitSet = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
var o = this.readVarint32(e), n = o.value, i = n >> 3, r = 0, a = [];
for (e += o.length; i--; ) o = this.readByte(e++), a[r++] = !!(1 & o), a[r++] = !!(2 & o), 
a[r++] = !!(4 & o), a[r++] = !!(8 & o), a[r++] = !!(16 & o), a[r++] = !!(32 & o), 
a[r++] = !!(64 & o), a[r++] = !!(128 & o);
if (r < n) for (i = 0, o = this.readByte(e++); r < n; ) a[r++] = !!(o >> i++ & 1);
t && (this.offset = e);
return a;
};
s.readBytes = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength);
}
var n = this.slice(t, t + e);
o && (this.offset += e);
return n;
};
s.writeBytes = s.append;
s.writeInt8 = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal value: " + e + " (not an integer)");
e |= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
t += 1;
var n = this.buffer.byteLength;
t > n && this.resize((n *= 2) > t ? n : t);
this.view[t - 1] = e;
o && (this.offset += 1);
return this;
};
s.writeByte = s.writeInt8;
s.readInt8 = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
}
128 == (128 & (e = this.view[e])) && (e = -(255 - e + 1));
t && (this.offset += 1);
return e;
};
s.readByte = s.readInt8;
s.writeUint8 = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal value: " + e + " (not an integer)");
e >>>= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
t += 1;
var n = this.buffer.byteLength;
t > n && this.resize((n *= 2) > t ? n : t);
this.view[t - 1] = e;
o && (this.offset += 1);
return this;
};
s.writeUInt8 = s.writeUint8;
s.readUint8 = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
}
e = this.view[e];
t && (this.offset += 1);
return e;
};
s.readUInt8 = s.readUint8;
s.writeInt16 = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal value: " + e + " (not an integer)");
e |= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
t += 2;
var n = this.buffer.byteLength;
t > n && this.resize((n *= 2) > t ? n : t);
t -= 2;
this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, 
this.view[t + 1] = 255 & e);
o && (this.offset += 2);
return this;
};
s.writeShort = s.writeInt16;
s.readInt16 = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
}
var o = 0;
this.littleEndian ? (o = this.view[e], o |= this.view[e + 1] << 8) : (o = this.view[e] << 8, 
o |= this.view[e + 1]);
32768 == (32768 & o) && (o = -(65535 - o + 1));
t && (this.offset += 2);
return o;
};
s.readShort = s.readInt16;
s.writeUint16 = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal value: " + e + " (not an integer)");
e >>>= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
t += 2;
var n = this.buffer.byteLength;
t > n && this.resize((n *= 2) > t ? n : t);
t -= 2;
this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, 
this.view[t + 1] = 255 & e);
o && (this.offset += 2);
return this;
};
s.writeUInt16 = s.writeUint16;
s.readUint16 = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
}
var o = 0;
this.littleEndian ? (o = this.view[e], o |= this.view[e + 1] << 8) : (o = this.view[e] << 8, 
o |= this.view[e + 1]);
t && (this.offset += 2);
return o;
};
s.readUInt16 = s.readUint16;
s.writeInt32 = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal value: " + e + " (not an integer)");
e |= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
t += 4;
var n = this.buffer.byteLength;
t > n && this.resize((n *= 2) > t ? n : t);
t -= 4;
this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, 
this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, 
this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e);
o && (this.offset += 4);
return this;
};
s.writeInt = s.writeInt32;
s.readInt32 = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
}
var o = 0;
this.littleEndian ? (o = this.view[e + 2] << 16, o |= this.view[e + 1] << 8, o |= this.view[e], 
o += this.view[e + 3] << 24 >>> 0) : (o = this.view[e + 1] << 16, o |= this.view[e + 2] << 8, 
o |= this.view[e + 3], o += this.view[e] << 24 >>> 0);
t && (this.offset += 4);
return 0 | o;
};
s.readInt = s.readInt32;
s.writeUint32 = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal value: " + e + " (not an integer)");
e >>>= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
t += 4;
var n = this.buffer.byteLength;
t > n && this.resize((n *= 2) > t ? n : t);
t -= 4;
this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, 
this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, 
this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e);
o && (this.offset += 4);
return this;
};
s.writeUInt32 = s.writeUint32;
s.readUint32 = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
}
var o = 0;
this.littleEndian ? (o = this.view[e + 2] << 16, o |= this.view[e + 1] << 8, o |= this.view[e], 
o += this.view[e + 3] << 24 >>> 0) : (o = this.view[e + 1] << 16, o |= this.view[e + 2] << 8, 
o |= this.view[e + 3], o += this.view[e] << 24 >>> 0);
t && (this.offset += 4);
return o;
};
s.readUInt32 = s.readUint32;
e && (s.writeInt64 = function(t, o) {
var n = "undefined" == typeof o;
n && (o = this.offset);
if (!this.noAssert) {
if ("number" == typeof t) t = e.fromNumber(t); else if ("string" == typeof t) t = e.fromString(t); else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal offset: " + o + " (not an integer)");
if (0 > (o >>>= 0) || o + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + o + " (+0) <= " + this.buffer.byteLength);
}
"number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
(o += 8) > (i = this.buffer.byteLength) && this.resize((i *= 2) > o ? i : o);
o -= 8;
var i = t.low, r = t.high;
this.littleEndian ? (this.view[o + 3] = i >>> 24 & 255, this.view[o + 2] = i >>> 16 & 255, 
this.view[o + 1] = i >>> 8 & 255, this.view[o] = 255 & i, o += 4, this.view[o + 3] = r >>> 24 & 255, 
this.view[o + 2] = r >>> 16 & 255, this.view[o + 1] = r >>> 8 & 255, this.view[o] = 255 & r) : (this.view[o] = r >>> 24 & 255, 
this.view[o + 1] = r >>> 16 & 255, this.view[o + 2] = r >>> 8 & 255, this.view[o + 3] = 255 & r, 
o += 4, this.view[o] = i >>> 24 & 255, this.view[o + 1] = i >>> 16 & 255, this.view[o + 2] = i >>> 8 & 255, 
this.view[o + 3] = 255 & i);
n && (this.offset += 8);
return this;
}, s.writeLong = s.writeInt64, s.readInt64 = function(t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
}
var n = 0, i = 0;
this.littleEndian ? (n = this.view[t + 2] << 16, n |= this.view[t + 1] << 8, n |= this.view[t], 
n += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, 
i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, 
i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, 
t += 4, n = this.view[t + 1] << 16, n |= this.view[t + 2] << 8, n |= this.view[t + 3], 
n += this.view[t] << 24 >>> 0);
t = new e(n, i, !1);
o && (this.offset += 8);
return t;
}, s.readLong = s.readInt64, s.writeUint64 = function(t, o) {
var n = "undefined" == typeof o;
n && (o = this.offset);
if (!this.noAssert) {
if ("number" == typeof t) t = e.fromNumber(t); else if ("string" == typeof t) t = e.fromString(t); else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal offset: " + o + " (not an integer)");
if (0 > (o >>>= 0) || o + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + o + " (+0) <= " + this.buffer.byteLength);
}
"number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
(o += 8) > (i = this.buffer.byteLength) && this.resize((i *= 2) > o ? i : o);
o -= 8;
var i = t.low, r = t.high;
this.littleEndian ? (this.view[o + 3] = i >>> 24 & 255, this.view[o + 2] = i >>> 16 & 255, 
this.view[o + 1] = i >>> 8 & 255, this.view[o] = 255 & i, o += 4, this.view[o + 3] = r >>> 24 & 255, 
this.view[o + 2] = r >>> 16 & 255, this.view[o + 1] = r >>> 8 & 255, this.view[o] = 255 & r) : (this.view[o] = r >>> 24 & 255, 
this.view[o + 1] = r >>> 16 & 255, this.view[o + 2] = r >>> 8 & 255, this.view[o + 3] = 255 & r, 
o += 4, this.view[o] = i >>> 24 & 255, this.view[o + 1] = i >>> 16 & 255, this.view[o + 2] = i >>> 8 & 255, 
this.view[o + 3] = 255 & i);
n && (this.offset += 8);
return this;
}, s.writeUInt64 = s.writeUint64, s.readUint64 = function(t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
}
var n = 0, i = 0;
this.littleEndian ? (n = this.view[t + 2] << 16, n |= this.view[t + 1] << 8, n |= this.view[t], 
n += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, 
i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, 
i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, 
t += 4, n = this.view[t + 1] << 16, n |= this.view[t + 2] << 8, n |= this.view[t + 3], 
n += this.view[t] << 24 >>> 0);
t = new e(n, i, !0);
o && (this.offset += 8);
return t;
}, s.readUInt64 = s.readUint64);
s.writeFloat32 = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
t += 4;
var n = this.buffer.byteLength;
t > n && this.resize((n *= 2) > t ? n : t);
r(this.view, e, t - 4, this.littleEndian, 23, 4);
o && (this.offset += 4);
return this;
};
s.writeFloat = s.writeFloat32;
s.readFloat32 = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
}
e = i(this.view, e, this.littleEndian, 23, 4);
t && (this.offset += 4);
return e;
};
s.readFloat = s.readFloat32;
s.writeFloat64 = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
t += 8;
var n = this.buffer.byteLength;
t > n && this.resize((n *= 2) > t ? n : t);
r(this.view, e, t - 8, this.littleEndian, 52, 8);
o && (this.offset += 8);
return this;
};
s.writeDouble = s.writeFloat64;
s.readFloat64 = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
}
e = i(this.view, e, this.littleEndian, 52, 8);
t && (this.offset += 8);
return e;
};
s.readDouble = s.readFloat64;
a.MAX_VARINT32_BYTES = 5;
a.calculateVarint32 = function(e) {
return 128 > (e >>>= 0) ? 1 : 16384 > e ? 2 : 2097152 > e ? 3 : 268435456 > e ? 4 : 5;
};
a.zigZagEncode32 = function(e) {
return ((e |= 0) << 1 ^ e >> 31) >>> 0;
};
a.zigZagDecode32 = function(e) {
return e >>> 1 ^ -(1 & e) | 0;
};
s.writeVarint32 = function(e, t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal value: " + e + " (not an integer)");
e |= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
}
var n, i = a.calculateVarint32(e);
(t += i) > (n = this.buffer.byteLength) && this.resize((n *= 2) > t ? n : t);
t -= i;
for (e >>>= 0; 128 <= e; ) n = 127 & e | 128, this.view[t++] = n, e >>>= 7;
this.view[t++] = e;
return o ? (this.offset = t, this) : i;
};
s.writeVarint32ZigZag = function(e, t) {
return this.writeVarint32(a.zigZagEncode32(e), t);
};
s.readVarint32 = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
}
var o, n = 0, i = 0;
do {
if (!this.noAssert && e > this.limit) throw (e = Error("Truncated")).truncated = !0, 
e;
o = this.view[e++];
5 > n && (i |= (127 & o) << 7 * n);
++n;
} while (0 != (128 & o));
i |= 0;
return t ? (this.offset = e, i) : {
value: i,
length: n
};
};
s.readVarint32ZigZag = function(e) {
"object" === ("undefined" == typeof (e = this.readVarint32(e)) ? "undefined" : n(e)) ? e.value = a.zigZagDecode32(e.value) : e = a.zigZagDecode32(e);
return e;
};
e && (a.MAX_VARINT64_BYTES = 10, a.calculateVarint64 = function(t) {
"number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
var o = t.toInt() >>> 0, n = t.shiftRightUnsigned(28).toInt() >>> 0;
return 0 == (t = t.shiftRightUnsigned(56).toInt() >>> 0) ? 0 == n ? 16384 > o ? 128 > o ? 1 : 2 : 2097152 > o ? 3 : 4 : 16384 > n ? 128 > n ? 5 : 6 : 2097152 > n ? 7 : 8 : 128 > t ? 9 : 10;
}, a.zigZagEncode64 = function(t) {
"number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned());
return t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned();
}, a.zigZagDecode64 = function(t) {
"number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned());
return t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned();
}, s.writeVarint64 = function(t, o) {
var n = "undefined" == typeof o;
n && (o = this.offset);
if (!this.noAssert) {
if ("number" == typeof t) t = e.fromNumber(t); else if ("string" == typeof t) t = e.fromString(t); else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal offset: " + o + " (not an integer)");
if (0 > (o >>>= 0) || o + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + o + " (+0) <= " + this.buffer.byteLength);
}
"number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned());
var i = a.calculateVarint64(t), r = t.toInt() >>> 0, s = t.shiftRightUnsigned(28).toInt() >>> 0, l = t.shiftRightUnsigned(56).toInt() >>> 0;
o += i;
var u = this.buffer.byteLength;
o > u && this.resize((u *= 2) > o ? u : o);
o -= i;
switch (i) {
case 10:
this.view[o + 9] = l >>> 7 & 1;

case 9:
this.view[o + 8] = 9 !== i ? 128 | l : 127 & l;

case 8:
this.view[o + 7] = 8 !== i ? s >>> 21 | 128 : s >>> 21 & 127;

case 7:
this.view[o + 6] = 7 !== i ? s >>> 14 | 128 : s >>> 14 & 127;

case 6:
this.view[o + 5] = 6 !== i ? s >>> 7 | 128 : s >>> 7 & 127;

case 5:
this.view[o + 4] = 5 !== i ? 128 | s : 127 & s;

case 4:
this.view[o + 3] = 4 !== i ? r >>> 21 | 128 : r >>> 21 & 127;

case 3:
this.view[o + 2] = 3 !== i ? r >>> 14 | 128 : r >>> 14 & 127;

case 2:
this.view[o + 1] = 2 !== i ? r >>> 7 | 128 : r >>> 7 & 127;

case 1:
this.view[o] = 1 !== i ? 128 | r : 127 & r;
}
return n ? (this.offset += i, this) : i;
}, s.writeVarint64ZigZag = function(e, t) {
return this.writeVarint64(a.zigZagEncode64(e), t);
}, s.readVarint64 = function(t) {
var o = "undefined" == typeof t;
o && (t = this.offset);
if (!this.noAssert) {
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: " + t + " (not an integer)");
if (0 > (t >>>= 0) || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
}
var n = t, i = 0, r = 0, a = 0, s = 0;
i = 127 & (s = this.view[t++]);
if (128 & s && (i |= (127 & (s = this.view[t++])) << 7, 128 & s || this.noAssert && "undefined" == typeof s) && (i |= (127 & (s = this.view[t++])) << 14, 
128 & s || this.noAssert && "undefined" == typeof s) && (i |= (127 & (s = this.view[t++])) << 21, 
128 & s || this.noAssert && "undefined" == typeof s) && (r = 127 & (s = this.view[t++]), 
128 & s || this.noAssert && "undefined" == typeof s) && (r |= (127 & (s = this.view[t++])) << 7, 
128 & s || this.noAssert && "undefined" == typeof s) && (r |= (127 & (s = this.view[t++])) << 14, 
128 & s || this.noAssert && "undefined" == typeof s) && (r |= (127 & (s = this.view[t++])) << 21, 
128 & s || this.noAssert && "undefined" == typeof s) && (a = 127 & (s = this.view[t++]), 
128 & s || this.noAssert && "undefined" == typeof s) && (a |= (127 & (s = this.view[t++])) << 7, 
128 & s || this.noAssert && "undefined" == typeof s)) throw Error("Buffer overrun");
i = e.fromBits(i | r << 28, r >>> 4 | a << 24, !1);
return o ? (this.offset = t, i) : {
value: i,
length: t - n
};
}, s.readVarint64ZigZag = function(t) {
(t = this.readVarint64(t)) && t.value instanceof e ? t.value = a.zigZagDecode64(t.value) : t = a.zigZagDecode64(t);
return t;
});
s.writeCString = function(e, o) {
var n = "undefined" == typeof o;
n && (o = this.offset);
var i, r = e.length;
if (!this.noAssert) {
if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
for (i = 0; i < r; ++i) if (0 === e.charCodeAt(i)) throw RangeError("Illegal str: Contains NULL-characters");
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal offset: " + o + " (not an integer)");
if (0 > (o >>>= 0) || o + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + o + " (+0) <= " + this.buffer.byteLength);
}
r = d.calculateUTF16asUTF8(t(e))[1];
o += r + 1;
i = this.buffer.byteLength;
o > i && this.resize((i *= 2) > o ? i : o);
o -= r + 1;
d.encodeUTF16toUTF8(t(e), function(e) {
this.view[o++] = e;
}.bind(this));
this.view[o++] = 0;
return n ? (this.offset = o, this) : r;
};
s.readCString = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
}
var n, i = e, r = -1;
d.decodeUTF8toUTF16(function() {
if (0 === r) return null;
if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
return 0 === (r = this.view[e++]) ? null : r;
}.bind(this), n = o(), !0);
return t ? (this.offset = e, n()) : {
string: n(),
length: e - i
};
};
s.writeIString = function(e, o) {
var n = "undefined" == typeof o;
n && (o = this.offset);
if (!this.noAssert) {
if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal offset: " + o + " (not an integer)");
if (0 > (o >>>= 0) || o + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + o + " (+0) <= " + this.buffer.byteLength);
}
var i, r = o;
i = d.calculateUTF16asUTF8(t(e), this.noAssert)[1];
o += 4 + i;
var a = this.buffer.byteLength;
o > a && this.resize((a *= 2) > o ? a : o);
o -= 4 + i;
this.littleEndian ? (this.view[o + 3] = i >>> 24 & 255, this.view[o + 2] = i >>> 16 & 255, 
this.view[o + 1] = i >>> 8 & 255, this.view[o] = 255 & i) : (this.view[o] = i >>> 24 & 255, 
this.view[o + 1] = i >>> 16 & 255, this.view[o + 2] = i >>> 8 & 255, this.view[o + 3] = 255 & i);
o += 4;
d.encodeUTF16toUTF8(t(e), function(e) {
this.view[o++] = e;
}.bind(this));
if (o !== r + 4 + i) throw RangeError("Illegal range: Truncated data, " + o + " == " + (o + 4 + i));
return n ? (this.offset = o, this) : o - r;
};
s.readIString = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
}
var o = e, n = this.readUint32(e);
n = this.readUTF8String(n, a.METRICS_BYTES, e += 4);
e += n.length;
return t ? (this.offset = e, n.string) : {
string: n.string,
length: e - o
};
};
a.METRICS_CHARS = "c";
a.METRICS_BYTES = "b";
s.writeUTF8String = function(e, o) {
var n = "undefined" == typeof o;
n && (o = this.offset);
if (!this.noAssert) {
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal offset: " + o + " (not an integer)");
if (0 > (o >>>= 0) || o + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + o + " (+0) <= " + this.buffer.byteLength);
}
var i, r = o;
i = d.calculateUTF16asUTF8(t(e))[1];
o += i;
var a = this.buffer.byteLength;
o > a && this.resize((a *= 2) > o ? a : o);
o -= i;
d.encodeUTF16toUTF8(t(e), function(e) {
this.view[o++] = e;
}.bind(this));
return n ? (this.offset = o, this) : o - r;
};
s.writeString = s.writeUTF8String;
a.calculateUTF8Chars = function(e) {
return d.calculateUTF16asUTF8(t(e))[0];
};
a.calculateString = a.calculateUTF8Bytes = function(e) {
return d.calculateUTF16asUTF8(t(e))[1];
};
s.readUTF8String = function(e, t, n) {
"number" == typeof t && (n = t, t = void 0);
var i = "undefined" == typeof n;
i && (n = this.offset);
"undefined" == typeof t && (t = a.METRICS_CHARS);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal length: " + e + " (not an integer)");
e |= 0;
if ("number" != typeof n || 0 != n % 1) throw TypeError("Illegal offset: " + n + " (not an integer)");
if (0 > (n >>>= 0) || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
}
var r, s = 0, l = n;
if (t === a.METRICS_CHARS) {
r = o();
d.decodeUTF8(function() {
return s < e && n < this.limit ? this.view[n++] : null;
}.bind(this), function(e) {
++s;
d.UTF8toUTF16(e, r);
});
if (s !== e) throw RangeError("Illegal range: Truncated data, " + s + " == " + e);
return i ? (this.offset = n, r()) : {
string: r(),
length: n - l
};
}
if (t === a.METRICS_BYTES) {
if (!this.noAssert) {
if ("number" != typeof n || 0 != n % 1) throw TypeError("Illegal offset: " + n + " (not an integer)");
if (0 > (n >>>= 0) || n + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+" + e + ") <= " + this.buffer.byteLength);
}
var u = n + e;
d.decodeUTF8toUTF16(function() {
return n < u ? this.view[n++] : null;
}.bind(this), r = o(), this.noAssert);
if (n !== u) throw RangeError("Illegal range: Truncated data, " + n + " == " + u);
return i ? (this.offset = n, r()) : {
string: r(),
length: n - l
};
}
throw TypeError("Unsupported metrics: " + t);
};
s.readString = s.readUTF8String;
s.writeVString = function(e, o) {
var n = "undefined" == typeof o;
n && (o = this.offset);
if (!this.noAssert) {
if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal offset: " + o + " (not an integer)");
if (0 > (o >>>= 0) || o + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + o + " (+0) <= " + this.buffer.byteLength);
}
var i, r, s = o;
i = d.calculateUTF16asUTF8(t(e), this.noAssert)[1];
r = a.calculateVarint32(i);
o += r + i;
var l = this.buffer.byteLength;
o > l && this.resize((l *= 2) > o ? l : o);
o -= r + i;
o += this.writeVarint32(i, o);
d.encodeUTF16toUTF8(t(e), function(e) {
this.view[o++] = e;
}.bind(this));
if (o !== s + i + r) throw RangeError("Illegal range: Truncated data, " + o + " == " + (o + i + r));
return n ? (this.offset = o, this) : o - s;
};
s.readVString = function(e) {
var t = "undefined" == typeof e;
t && (e = this.offset);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
}
var o = e, n = this.readVarint32(e);
n = this.readUTF8String(n.value, a.METRICS_BYTES, e += n.length);
e += n.length;
return t ? (this.offset = e, n.string) : {
string: n.string,
length: e - o
};
};
s.append = function(e, t, o) {
"number" != typeof t && "string" == typeof t || (o = t, t = void 0);
var n = "undefined" == typeof o;
n && (o = this.offset);
if (!this.noAssert) {
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal offset: " + o + " (not an integer)");
if (0 > (o >>>= 0) || o + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + o + " (+0) <= " + this.buffer.byteLength);
}
e instanceof a || (e = a.wrap(e, t));
if (0 >= (t = e.limit - e.offset)) return this;
o += t;
var i = this.buffer.byteLength;
o > i && this.resize((i *= 2) > o ? i : o);
o -= t;
this.view.set(e.view.subarray(e.offset, e.limit), o);
e.offset += t;
n && (this.offset += t);
return this;
};
s.appendTo = function(e, t) {
e.append(this, t);
return this;
};
s.assert = function(e) {
this.noAssert = !e;
return this;
};
s.capacity = function() {
return this.buffer.byteLength;
};
s.clear = function() {
this.offset = 0;
this.limit = this.buffer.byteLength;
this.markedOffset = -1;
return this;
};
s.clone = function(e) {
var t = new a(0, this.littleEndian, this.noAssert);
e ? (t.buffer = new ArrayBuffer(this.buffer.byteLength), t.view = new Uint8Array(t.buffer)) : (t.buffer = this.buffer, 
t.view = this.view);
t.offset = this.offset;
t.markedOffset = this.markedOffset;
t.limit = this.limit;
return t;
};
s.compact = function(e, t) {
"undefined" == typeof e && (e = this.offset);
"undefined" == typeof t && (t = this.limit);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal begin: Not an integer");
e >>>= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal end: Not an integer");
t >>>= 0;
if (0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
}
if (0 === e && t === this.buffer.byteLength) return this;
var o = t - e;
if (0 === o) return this.buffer = l, this.view = null, 0 <= this.markedOffset && (this.markedOffset -= e), 
this.limit = this.offset = 0, this;
var n = new ArrayBuffer(o), i = new Uint8Array(n);
i.set(this.view.subarray(e, t));
this.buffer = n;
this.view = i;
0 <= this.markedOffset && (this.markedOffset -= e);
this.offset = 0;
this.limit = o;
return this;
};
s.copy = function(e, t) {
"undefined" == typeof e && (e = this.offset);
"undefined" == typeof t && (t = this.limit);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal begin: Not an integer");
e >>>= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal end: Not an integer");
t >>>= 0;
if (0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
}
if (e === t) return new a(0, this.littleEndian, this.noAssert);
var o = t - e, n = new a(o, this.littleEndian, this.noAssert);
n.offset = 0;
n.limit = o;
0 <= n.markedOffset && (n.markedOffset -= e);
this.copyTo(n, 0, e, t);
return n;
};
s.copyTo = function(e, t, o, n) {
var i, r;
if (!this.noAssert && !a.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
t = (r = "undefined" == typeof t) ? e.offset : 0 | t;
o = (i = "undefined" == typeof o) ? this.offset : 0 | o;
n = "undefined" == typeof n ? this.limit : 0 | n;
if (0 > t || t > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + t + " <= " + e.buffer.byteLength);
if (0 > o || n > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + o + " <= " + this.buffer.byteLength);
var s = n - o;
if (0 === s) return e;
e.ensureCapacity(t + s);
e.view.set(this.view.subarray(o, n), t);
i && (this.offset += s);
r && (e.offset += s);
return this;
};
s.ensureCapacity = function(e) {
var t = this.buffer.byteLength;
return t < e ? this.resize((t *= 2) > e ? t : e) : this;
};
s.fill = function(e, t, o) {
var n = "undefined" == typeof t;
n && (t = this.offset);
"string" == typeof e && 0 < e.length && (e = e.charCodeAt(0));
"undefined" == typeof t && (t = this.offset);
"undefined" == typeof o && (o = this.limit);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal value: " + e + " (not an integer)");
e |= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal begin: Not an integer");
t >>>= 0;
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal end: Not an integer");
o >>>= 0;
if (0 > t || t > o || o > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + o + " <= " + this.buffer.byteLength);
}
if (t >= o) return this;
for (;t < o; ) this.view[t++] = e;
n && (this.offset = t);
return this;
};
s.flip = function() {
this.limit = this.offset;
this.offset = 0;
return this;
};
s.mark = function(e) {
e = "undefined" == typeof e ? this.offset : e;
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal offset: " + e + " (not an integer)");
if (0 > (e >>>= 0) || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
}
this.markedOffset = e;
return this;
};
s.order = function(e) {
if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
this.littleEndian = !!e;
return this;
};
s.LE = function(e) {
this.littleEndian = "undefined" == typeof e || !!e;
return this;
};
s.BE = function(e) {
this.littleEndian = "undefined" != typeof e && !e;
return this;
};
s.prepend = function(e, t, o) {
"number" != typeof t && "string" == typeof t || (o = t, t = void 0);
var n = "undefined" == typeof o;
n && (o = this.offset);
if (!this.noAssert) {
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal offset: " + o + " (not an integer)");
if (0 > (o >>>= 0) || o + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + o + " (+0) <= " + this.buffer.byteLength);
}
e instanceof a || (e = a.wrap(e, t));
if (0 >= (t = e.limit - e.offset)) return this;
var i = t - o;
if (0 < i) {
var r = new ArrayBuffer(this.buffer.byteLength + i), s = new Uint8Array(r);
s.set(this.view.subarray(o, this.buffer.byteLength), t);
this.buffer = r;
this.view = s;
this.offset += i;
0 <= this.markedOffset && (this.markedOffset += i);
this.limit += i;
o += i;
} else new Uint8Array(this.buffer);
this.view.set(e.view.subarray(e.offset, e.limit), o - t);
e.offset = e.limit;
n && (this.offset -= t);
return this;
};
s.prependTo = function(e, t) {
e.prepend(this, t);
return this;
};
s.printDebug = function(e) {
"function" != typeof e && (e = console.log.bind(console));
e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0));
};
s.remaining = function() {
return this.limit - this.offset;
};
s.reset = function() {
0 <= this.markedOffset ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0;
return this;
};
s.resize = function(e) {
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal capacity: " + e + " (not an integer)");
if (0 > (e |= 0)) throw RangeError("Illegal capacity: 0 <= " + e);
}
if (this.buffer.byteLength < e) {
e = new ArrayBuffer(e);
var t = new Uint8Array(e);
t.set(this.view);
this.buffer = e;
this.view = t;
}
return this;
};
s.reverse = function(e, t) {
"undefined" == typeof e && (e = this.offset);
"undefined" == typeof t && (t = this.limit);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal begin: Not an integer");
e >>>= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal end: Not an integer");
t >>>= 0;
if (0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
}
if (e === t) return this;
Array.prototype.reverse.call(this.view.subarray(e, t));
return this;
};
s.skip = function(e) {
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal length: " + e + " (not an integer)");
e |= 0;
}
var t = this.offset + e;
if (!this.noAssert && (0 > t || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
this.offset = t;
return this;
};
s.slice = function(e, t) {
"undefined" == typeof e && (e = this.offset);
"undefined" == typeof t && (t = this.limit);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal begin: Not an integer");
e >>>= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal end: Not an integer");
t >>>= 0;
if (0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
}
var o = this.clone();
o.offset = e;
o.limit = t;
return o;
};
s.toBuffer = function(e) {
var t = this.offset, o = this.limit;
if (!this.noAssert) {
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal offset: Not an integer");
t >>>= 0;
if ("number" != typeof o || 0 != o % 1) throw TypeError("Illegal limit: Not an integer");
o >>>= 0;
if (0 > t || t > o || o > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + o + " <= " + this.buffer.byteLength);
}
if (!e && 0 === t && o === this.buffer.byteLength) return this.buffer;
if (t === o) return l;
e = new ArrayBuffer(o - t);
new Uint8Array(e).set(new Uint8Array(this.buffer).subarray(t, o), 0);
return e;
};
s.toArrayBuffer = s.toBuffer;
s.toString = function(e, t, o) {
if ("undefined" == typeof e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
"number" == typeof e && (o = t = e = "utf8");
switch (e) {
case "utf8":
return this.toUTF8(t, o);

case "base64":
return this.toBase64(t, o);

case "hex":
return this.toHex(t, o);

case "binary":
return this.toBinary(t, o);

case "debug":
return this.toDebug();

case "columns":
return this.toColumns();

default:
throw Error("Unsupported encoding: " + e);
}
};
var c = function() {
for (var e = {}, t = [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47 ], o = [], n = 0, i = t.length; n < i; ++n) o[t[n]] = n;
e.encode = function(e, o) {
for (var n, i; null !== (n = e()); ) o(t[n >> 2 & 63]), i = (3 & n) << 4, null !== (n = e()) ? (o(t[63 & ((i |= n >> 4 & 15) | n >> 4 & 15)]), 
i = (15 & n) << 2, null !== (n = e()) ? (o(t[63 & (i | n >> 6 & 3)]), o(t[63 & n])) : (o(t[63 & i]), 
o(61))) : (o(t[63 & i]), o(61), o(61));
};
e.decode = function(e, t) {
function n(e) {
throw Error("Illegal character code: " + e);
}
for (var i, r, a; null !== (i = e()); ) if ("undefined" == typeof (r = o[i]) && n(i), 
null !== (i = e()) && ("undefined" == typeof (a = o[i]) && n(i), t(r << 2 >>> 0 | (48 & a) >> 4), 
null !== (i = e()))) {
if ("undefined" == typeof (r = o[i])) {
if (61 === i) break;
n(i);
}
t((15 & a) << 4 >>> 0 | (60 & r) >> 2);
if (null !== (i = e())) {
if ("undefined" == typeof (a = o[i])) {
if (61 === i) break;
n(i);
}
t((3 & r) << 6 >>> 0 | a);
}
}
};
e.test = function(e) {
return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
};
return e;
}();
s.toBase64 = function(e, t) {
"undefined" == typeof e && (e = this.offset);
"undefined" == typeof t && (t = this.limit);
t |= 0;
if (0 > (e |= 0) || t > this.capacity || e > t) throw RangeError("begin, end");
var n;
c.encode(function() {
return e < t ? this.view[e++] : null;
}.bind(this), n = o());
return n();
};
a.fromBase64 = function(e, o) {
if ("string" != typeof e) throw TypeError("str");
var n = new a(e.length / 4 * 3, o), i = 0;
c.decode(t(e), function(e) {
n.view[i++] = e;
});
n.limit = i;
return n;
};
a.btoa = function(e) {
return a.fromBinary(e).toBase64();
};
a.atob = function(e) {
return a.fromBase64(e).toBinary();
};
s.toBinary = function(e, t) {
"undefined" == typeof e && (e = this.offset);
"undefined" == typeof t && (t = this.limit);
t |= 0;
if (0 > (e |= 0) || t > this.capacity() || e > t) throw RangeError("begin, end");
if (e === t) return "";
for (var o = [], n = []; e < t; ) o.push(this.view[e++]), 1024 <= o.length && (n.push(String.fromCharCode.apply(String, o)), 
o = []);
return n.join("") + String.fromCharCode.apply(String, o);
};
a.fromBinary = function(e, t) {
if ("string" != typeof e) throw TypeError("str");
for (var o, n = 0, i = e.length, r = new a(i, t); n < i; ) {
if (255 < (o = e.charCodeAt(n))) throw RangeError("illegal char code: " + o);
r.view[n++] = o;
}
r.limit = i;
return r;
};
s.toDebug = function(e) {
for (var t, o = -1, n = this.buffer.byteLength, i = "", r = "", a = ""; o < n; ) {
-1 !== o && (i = 16 > (t = this.view[o]) ? i + "0" + t.toString(16).toUpperCase() : i + t.toString(16).toUpperCase(), 
e && (r += 32 < t && 127 > t ? String.fromCharCode(t) : "."));
++o;
if (e && 0 < o && 0 == o % 16 && o !== n) {
for (;51 > i.length; ) i += " ";
a += i + r + "\n";
i = r = "";
}
i = o === this.offset && o === this.limit ? i + (o === this.markedOffset ? "!" : "|") : o === this.offset ? i + (o === this.markedOffset ? "[" : "<") : o === this.limit ? i + (o === this.markedOffset ? "]" : ">") : i + (o === this.markedOffset ? "'" : e || 0 !== o && o !== n ? " " : "");
}
if (e && " " !== i) {
for (;51 > i.length; ) i += " ";
a += i + r + "\n";
}
return e ? a : i;
};
a.fromDebug = function(e, t, o) {
var n = e.length;
t = new a((n + 1) / 3 | 0, t, o);
for (var i, r = 0, s = 0, l = !1, u = !1, c = !1, d = !1, h = !1; r < n; ) {
switch (i = e.charAt(r++)) {
case "!":
if (!o) {
if (u || c || d) {
h = !0;
break;
}
u = c = d = !0;
}
t.offset = t.markedOffset = t.limit = s;
l = !1;
break;

case "|":
if (!o) {
if (u || d) {
h = !0;
break;
}
u = d = !0;
}
t.offset = t.limit = s;
l = !1;
break;

case "[":
if (!o) {
if (u || c) {
h = !0;
break;
}
u = c = !0;
}
t.offset = t.markedOffset = s;
l = !1;
break;

case "<":
if (!o) {
if (u) {
h = !0;
break;
}
u = !0;
}
t.offset = s;
l = !1;
break;

case "]":
if (!o) {
if (d || c) {
h = !0;
break;
}
d = c = !0;
}
t.limit = t.markedOffset = s;
l = !1;
break;

case ">":
if (!o) {
if (d) {
h = !0;
break;
}
d = !0;
}
t.limit = s;
l = !1;
break;

case "'":
if (!o) {
if (c) {
h = !0;
break;
}
c = !0;
}
t.markedOffset = s;
l = !1;
break;

case " ":
l = !1;
break;

default:
if (!o && l) {
h = !0;
break;
}
i = parseInt(i + e.charAt(r++), 16);
if (!o && (isNaN(i) || 0 > i || 255 < i)) throw TypeError("Illegal str: Not a debug encoded string");
t.view[s++] = i;
l = !0;
}
if (h) throw TypeError("Illegal str: Invalid symbol at " + r);
}
if (!o) {
if (!u || !d) throw TypeError("Illegal str: Missing offset or limit");
if (s < t.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + s + " < " + n);
}
return t;
};
s.toHex = function(e, t) {
e = "undefined" == typeof e ? this.offset : e;
t = "undefined" == typeof t ? this.limit : t;
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal begin: Not an integer");
e >>>= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal end: Not an integer");
t >>>= 0;
if (0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
}
for (var o, n = Array(t - e); e < t; ) 16 > (o = this.view[e++]) ? n.push("0", o.toString(16)) : n.push(o.toString(16));
return n.join("");
};
a.fromHex = function(e, t, o) {
if (!o) {
if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
if (0 != e.length % 2) throw TypeError("Illegal str: Length not a multiple of 2");
}
var n = e.length;
t = new a(n / 2 | 0, t);
for (var i, r = 0, s = 0; r < n; r += 2) {
i = parseInt(e.substring(r, r + 2), 16);
if (!o && (!isFinite(i) || 0 > i || 255 < i)) throw TypeError("Illegal str: Contains non-hex characters");
t.view[s++] = i;
}
t.limit = s;
return t;
};
var d = function() {
var e = {
MAX_CODEPOINT: 1114111,
encodeUTF8: function(e, t) {
var o = null;
"number" == typeof e && (o = e, e = function() {
return null;
});
for (;null !== o || null !== (o = e()); ) 128 > o ? t(127 & o) : (2048 > o ? t(o >> 6 & 31 | 192) : (65536 > o ? t(o >> 12 & 15 | 224) : (t(o >> 18 & 7 | 240), 
t(o >> 12 & 63 | 128)), t(o >> 6 & 63 | 128)), t(63 & o | 128)), o = null;
},
decodeUTF8: function(e, t) {
for (var o, n, i, r, a = function(e) {
e = e.slice(0, e.indexOf(null));
var t = Error(e.toString());
t.name = "TruncatedError";
t.bytes = e;
throw t;
}; null !== (o = e()); ) if (0 == (128 & o)) t(o); else if (192 == (224 & o)) null === (n = e()) && a([ o, n ]), 
t((31 & o) << 6 | 63 & n); else if (224 == (240 & o)) null !== (n = e()) && null !== (i = e()) || a([ o, n, i ]), 
t((15 & o) << 12 | (63 & n) << 6 | 63 & i); else {
if (240 != (248 & o)) throw RangeError("Illegal starting byte: " + o);
null !== (n = e()) && null !== (i = e()) && null !== (r = e()) || a([ o, n, i, r ]), 
t((7 & o) << 18 | (63 & n) << 12 | (63 & i) << 6 | 63 & r);
}
},
UTF16toUTF8: function(e, t) {
for (var o, n = null; null !== (o = null !== n ? n : e()); ) 55296 <= o && 57343 >= o && null !== (n = e()) && 56320 <= n && 57343 >= n ? (t(1024 * (o - 55296) + n - 56320 + 65536), 
n = null) : t(o);
null !== n && t(n);
},
UTF8toUTF16: function(e, t) {
var o = null;
"number" == typeof e && (o = e, e = function() {
return null;
});
for (;null !== o || null !== (o = e()); ) 65535 >= o ? t(o) : (t(55296 + ((o -= 65536) >> 10)), 
t(o % 1024 + 56320)), o = null;
},
encodeUTF16toUTF8: function(t, o) {
e.UTF16toUTF8(t, function(t) {
e.encodeUTF8(t, o);
});
},
decodeUTF8toUTF16: function(t, o) {
e.decodeUTF8(t, function(t) {
e.UTF8toUTF16(t, o);
});
},
calculateCodePoint: function(e) {
return 128 > e ? 1 : 2048 > e ? 2 : 65536 > e ? 3 : 4;
},
calculateUTF8: function(e) {
for (var t, o = 0; null !== (t = e()); ) o += 128 > t ? 1 : 2048 > t ? 2 : 65536 > t ? 3 : 4;
return o;
},
calculateUTF16asUTF8: function(t) {
var o = 0, n = 0;
e.UTF16toUTF8(t, function(e) {
++o;
n += 128 > e ? 1 : 2048 > e ? 2 : 65536 > e ? 3 : 4;
});
return [ o, n ];
}
};
return e;
}();
s.toUTF8 = function(e, t) {
"undefined" == typeof e && (e = this.offset);
"undefined" == typeof t && (t = this.limit);
if (!this.noAssert) {
if ("number" != typeof e || 0 != e % 1) throw TypeError("Illegal begin: Not an integer");
e >>>= 0;
if ("number" != typeof t || 0 != t % 1) throw TypeError("Illegal end: Not an integer");
t >>>= 0;
if (0 > e || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
}
var n;
try {
d.decodeUTF8toUTF16(function() {
return e < t ? this.view[e++] : null;
}.bind(this), n = o());
} catch (o) {
if (e !== t) throw RangeError("Illegal range: Truncated data, " + e + " != " + t);
}
return n();
};
a.fromUTF8 = function(e, o, n) {
if (!n && "string" != typeof e) throw TypeError("Illegal str: Not a string");
var i = new a(d.calculateUTF16asUTF8(t(e), !0)[1], o, n), r = 0;
d.encodeUTF16toUTF8(t(e), function(e) {
i.view[r++] = e;
});
i.limit = r;
return i;
};
return a;
});
cc._RF.pop();
}, {
long: "long"
} ],
long: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9df6151H2REh6iu9CRgMk0D", "long");
var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
(function(o, i) {
"function" == typeof define && define.amd ? define([], i) : "function" == typeof e && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && t && t.exports ? t.exports = i() : (o.dcodeIO = o.dcodeIO || {}).Long = i();
})(void 0, function() {
function e(e, t, o) {
this.low = 0 | e;
this.high = 0 | t;
this.unsigned = !!o;
}
function t(e) {
return !0 === (e && e.__isLong__);
}
function o(e, t) {
var o, n;
if (t) {
if ((n = 0 <= (e >>>= 0) && 256 > e) && (o = l[e])) return o;
o = i(e, 0 > (0 | e) ? -1 : 0, !0);
n && (l[e] = o);
} else {
if ((n = -128 <= (e |= 0) && 128 > e) && (o = s[e])) return o;
o = i(e, 0 > e ? -1 : 0, !1);
n && (s[e] = o);
}
return o;
}
function n(e, t) {
if (isNaN(e) || !isFinite(e)) return t ? f : p;
if (t) {
if (0 > e) return f;
if (e >= c) return v;
} else {
if (e <= -d) return w;
if (e + 1 >= d) return b;
}
return 0 > e ? n(-e, t).neg() : i(e % 4294967296 | 0, e / 4294967296 | 0, t);
}
function i(t, o, n) {
return new e(t, o, n);
}
function r(e, t, o) {
if (0 === e.length) throw Error("empty string");
if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return p;
"number" == typeof t ? (o = t, t = !1) : t = !!t;
if (2 > (o = o || 10) || 36 < o) throw RangeError("radix");
var i;
if (0 < (i = e.indexOf("-"))) throw Error("interior hyphen");
if (0 === i) return r(e.substring(1), t, o).neg();
i = n(u(o, 8));
for (var a = p, s = 0; s < e.length; s += 8) {
var l = Math.min(8, e.length - s), c = parseInt(e.substring(s, s + l), o);
8 > l ? (l = n(u(o, l)), a = a.mul(l).add(n(c))) : a = (a = a.mul(i)).add(n(c));
}
a.unsigned = t;
return a;
}
function a(t) {
return t instanceof e ? t : "number" == typeof t ? n(t) : "string" == typeof t ? r(t) : i(t.low, t.high, t.unsigned);
}
Object.defineProperty(e.prototype, "__isLong__", {
value: !0,
enumerable: !1,
configurable: !1
});
e.isLong = t;
var s = {}, l = {};
e.fromInt = o;
e.fromNumber = n;
e.fromBits = i;
var u = Math.pow;
e.fromString = r;
e.fromValue = a;
var c = 0x10000000000000000, d = c / 2, h = o(16777216), p = o(0);
e.ZERO = p;
var f = o(0, !0);
e.UZERO = f;
var g = o(1);
e.ONE = g;
var y = o(1, !0);
e.UONE = y;
var m = o(-1);
e.NEG_ONE = m;
var b = i(-1, 2147483647, !1);
e.MAX_VALUE = b;
var v = i(-1, -1, !0);
e.MAX_UNSIGNED_VALUE = v;
var w = i(0, -2147483648, !1);
e.MIN_VALUE = w;
var C = e.prototype;
C.toInt = function() {
return this.unsigned ? this.low >>> 0 : this.low;
};
C.toNumber = function() {
return this.unsigned ? 4294967296 * (this.high >>> 0) + (this.low >>> 0) : 4294967296 * this.high + (this.low >>> 0);
};
C.toString = function(e) {
if (2 > (e = e || 10) || 36 < e) throw RangeError("radix");
if (this.isZero()) return "0";
if (this.isNegative()) {
if (this.eq(w)) {
var t = n(e);
t = (o = this.div(t)).mul(t).sub(this);
return o.toString(e) + t.toInt().toString(e);
}
return "-" + this.neg().toString(e);
}
for (var o = n(u(e, 6), this.unsigned), i = (t = this, ""); ;) {
var r = t.div(o), a = (t.sub(r.mul(o)).toInt() >>> 0).toString(e);
if ((t = r).isZero()) return a + i;
for (;6 > a.length; ) a = "0" + a;
i = "" + a + i;
}
};
C.getHighBits = function() {
return this.high;
};
C.getHighBitsUnsigned = function() {
return this.high >>> 0;
};
C.getLowBits = function() {
return this.low;
};
C.getLowBitsUnsigned = function() {
return this.low >>> 0;
};
C.getNumBitsAbs = function() {
if (this.isNegative()) return this.eq(w) ? 64 : this.neg().getNumBitsAbs();
for (var e = 0 != this.high ? this.high : this.low, t = 31; 0 < t && 0 == (e & 1 << t); t--) ;
return 0 != this.high ? t + 33 : t + 1;
};
C.isZero = function() {
return 0 === this.high && 0 === this.low;
};
C.isNegative = function() {
return !this.unsigned && 0 > this.high;
};
C.isPositive = function() {
return this.unsigned || 0 <= this.high;
};
C.isOdd = function() {
return 1 == (1 & this.low);
};
C.isEven = function() {
return 0 == (1 & this.low);
};
C.equals = function(e) {
t(e) || (e = a(e));
return (this.unsigned === e.unsigned || 1 != this.high >>> 31 || 1 != e.high >>> 31) && (this.high === e.high && this.low === e.low);
};
C.eq = C.equals;
C.notEquals = function(e) {
return !this.eq(e);
};
C.neq = C.notEquals;
C.lessThan = function(e) {
return 0 > this.comp(e);
};
C.lt = C.lessThan;
C.lessThanOrEqual = function(e) {
return 0 >= this.comp(e);
};
C.lte = C.lessThanOrEqual;
C.greaterThan = function(e) {
return 0 < this.comp(e);
};
C.gt = C.greaterThan;
C.greaterThanOrEqual = function(e) {
return 0 <= this.comp(e);
};
C.gte = C.greaterThanOrEqual;
C.compare = function(e) {
t(e) || (e = a(e));
if (this.eq(e)) return 0;
var o = this.isNegative(), n = e.isNegative();
return o && !n ? -1 : !o && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
};
C.comp = C.compare;
C.negate = function() {
return !this.unsigned && this.eq(w) ? w : this.not().add(g);
};
C.neg = C.negate;
C.add = function(e) {
t(e) || (e = a(e));
var o, n = this.high >>> 16, r = 65535 & this.high, s = this.low >>> 16, l = e.high >>> 16, u = 65535 & e.high, c = e.low >>> 16;
e = 0 + ((o = (65535 & this.low) + (65535 & e.low) + 0) >>> 16);
s = 0 + ((e += s + c) >>> 16);
return i((65535 & e) << 16 | 65535 & o, (r = (r = 0 + ((s += r + u) >>> 16)) + (n + l) & 65535) << 16 | 65535 & s, this.unsigned);
};
C.subtract = function(e) {
t(e) || (e = a(e));
return this.add(e.neg());
};
C.sub = C.subtract;
C.multiply = function(e) {
if (this.isZero()) return p;
t(e) || (e = a(e));
if (e.isZero()) return p;
if (this.eq(w)) return e.isOdd() ? w : p;
if (e.eq(w)) return this.isOdd() ? w : p;
if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
if (e.isNegative()) return this.mul(e.neg()).neg();
if (this.lt(h) && e.lt(h)) return n(this.toNumber() * e.toNumber(), this.unsigned);
var o, r, s, l, u = this.high >>> 16, c = 65535 & this.high, d = this.low >>> 16, f = 65535 & this.low, g = e.high >>> 16, y = 65535 & e.high, m = e.low >>> 16;
s = 0 + ((l = 0 + f * (e = 65535 & e.low)) >>> 16);
r = 0 + ((s += d * e) >>> 16);
r += (s = (65535 & s) + f * m) >>> 16;
o = 0 + ((r += c * e) >>> 16);
o += (r = (65535 & r) + d * m) >>> 16;
r &= 65535;
return i((s &= 65535) << 16 | 65535 & l, (o = (o += (r += f * y) >>> 16) + (u * e + c * m + d * y + f * g) & 65535) << 16 | (r &= 65535), this.unsigned);
};
C.mul = C.multiply;
C.divide = function(e) {
t(e) || (e = a(e));
if (e.isZero()) throw Error("division by zero");
if (this.isZero()) return this.unsigned ? f : p;
var o, i, r;
if (this.unsigned) {
e.unsigned || (e = e.toUnsigned());
if (e.gt(this)) return f;
if (e.gt(this.shru(1))) return y;
r = f;
} else {
if (this.eq(w)) {
if (e.eq(g) || e.eq(m)) return w;
if (e.eq(w)) return g;
if ((o = this.shr(1).div(e).shl(1)).eq(p)) return e.isNegative() ? g : m;
i = this.sub(e.mul(o));
return o.add(i.div(e));
}
if (e.eq(w)) return this.unsigned ? f : p;
if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
if (e.isNegative()) return this.div(e.neg()).neg();
r = p;
}
for (i = this; i.gte(e); ) {
o = Math.max(1, Math.floor(i.toNumber() / e.toNumber()));
for (var s = 48 >= (s = Math.ceil(Math.log(o) / Math.LN2)) ? 1 : u(2, s - 48), l = n(o), c = l.mul(e); c.isNegative() || c.gt(i); ) c = (l = n(o -= s, this.unsigned)).mul(e);
l.isZero() && (l = g);
r = r.add(l);
i = i.sub(c);
}
return r;
};
C.div = C.divide;
C.modulo = function(e) {
t(e) || (e = a(e));
return this.sub(this.div(e).mul(e));
};
C.mod = C.modulo;
C.not = function() {
return i(~this.low, ~this.high, this.unsigned);
};
C.and = function(e) {
t(e) || (e = a(e));
return i(this.low & e.low, this.high & e.high, this.unsigned);
};
C.or = function(e) {
t(e) || (e = a(e));
return i(this.low | e.low, this.high | e.high, this.unsigned);
};
C.xor = function(e) {
t(e) || (e = a(e));
return i(this.low ^ e.low, this.high ^ e.high, this.unsigned);
};
C.shiftLeft = function(e) {
t(e) && (e = e.toInt());
return 0 == (e &= 63) ? this : 32 > e ? i(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : i(0, this.low << e - 32, this.unsigned);
};
C.shl = C.shiftLeft;
C.shiftRight = function(e) {
t(e) && (e = e.toInt());
return 0 == (e &= 63) ? this : 32 > e ? i(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : i(this.high >> e - 32, 0 <= this.high ? 0 : -1, this.unsigned);
};
C.shr = C.shiftRight;
C.shiftRightUnsigned = function(e) {
t(e) && (e = e.toInt());
if (0 === (e &= 63)) return this;
var o = this.high;
return 32 > e ? i(this.low >>> e | o << 32 - e, o >>> e, this.unsigned) : i(32 === e ? o : o >>> e - 32, 0, this.unsigned);
};
C.shru = C.shiftRightUnsigned;
C.toSigned = function() {
return this.unsigned ? i(this.low, this.high, !1) : this;
};
C.toUnsigned = function() {
return this.unsigned ? this : i(this.low, this.high, !0);
};
C.toBytes = function(e) {
return e ? this.toBytesLE() : this.toBytesBE();
};
C.toBytesLE = function() {
var e = this.high, t = this.low;
return [ 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255 ];
};
C.toBytesBE = function() {
var e = this.high, t = this.low;
return [ e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t ];
};
return e;
});
cc._RF.pop();
}, {} ],
protoGameA: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6e9290gk69Eb58uShd3Porr", "protoGameA");
o.proto = e("protobuf").newBuilder({}).import({
package: null,
syntax: "proto2",
messages: [ {
name: "pokerface",
fields: [],
syntax: "proto2",
messages: [ {
name: "MsgReplayPlayerInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "optional",
type: "string",
name: "nick",
id: 2
}, {
rule: "required",
type: "int32",
name: "chairID",
id: 3
}, {
rule: "optional",
type: "int32",
name: "totalScore",
id: 4
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 5
}, {
rule: "optional",
type: "string",
name: "headIconURI",
id: 6
}, {
rule: "optional",
type: "int32",
name: "avatarID",
id: 7
} ]
}, {
name: "MsgReplayPlayerScoreSummary",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "chairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "score",
id: 2
}, {
rule: "required",
type: "int32",
name: "winType",
id: 3
} ]
}, {
name: "MsgReplayRecordSummary",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "recordUUID",
id: 1
}, {
rule: "repeated",
type: "MsgReplayPlayerScoreSummary",
name: "playerScores",
id: 2
}, {
rule: "required",
type: "uint32",
name: "endTime",
id: 3
}, {
rule: "optional",
type: "string",
name: "shareAbleID",
id: 4
}, {
rule: "optional",
type: "uint32",
name: "startTime",
id: 5
} ]
}, {
name: "MsgReplayRoom",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "recordRoomType",
id: 1
}, {
rule: "required",
type: "uint32",
name: "startTime",
id: 2
}, {
rule: "required",
type: "uint32",
name: "endTime",
id: 3
}, {
rule: "required",
type: "string",
name: "roomNumber",
id: 4
}, {
rule: "repeated",
type: "MsgReplayPlayerInfo",
name: "players",
id: 5
}, {
rule: "repeated",
type: "MsgReplayRecordSummary",
name: "records",
id: 6
}, {
rule: "optional",
type: "string",
name: "ownerUserID",
id: 7
} ]
}, {
name: "SRMsgPlayerInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "required",
type: "int32",
name: "chairID",
id: 2
}, {
rule: "optional",
type: "string",
name: "nick",
id: 3
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 4
}, {
rule: "optional",
type: "string",
name: "headIconURI",
id: 5
}, {
rule: "optional",
type: "int32",
name: "avatarID",
id: 6
} ]
}, {
name: "SRDealDetail",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "chairID",
id: 1
}, {
rule: "repeated",
type: "int32",
name: "cardsHand",
id: 2
}, {
rule: "repeated",
type: "int32",
name: "cardsFlower",
id: 3
} ]
}, {
name: "SRAction",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "action",
id: 1
}, {
rule: "required",
type: "int32",
name: "chairID",
id: 2
}, {
rule: "required",
type: "int32",
name: "qaIndex",
id: 3
}, {
rule: "repeated",
type: "int32",
name: "cards",
id: 4
}, {
rule: "required",
type: "int32",
name: "flags",
id: 5
}, {
rule: "optional",
type: "int32",
name: "cardHandType",
id: 6
}, {
rule: "optional",
type: "int32",
name: "allowActions",
id: 7
} ]
}, {
name: "SRMsgHandRecorderExtra",
syntax: "proto2",
fields: [ {
rule: "optional",
type: "int32",
name: "markup",
id: 1
}, {
rule: "optional",
type: "string",
name: "ownerUserID",
id: 2
} ]
}, {
name: "SRMsgHandRecorder",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "bankerChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "windFlowerID",
id: 2
}, {
rule: "repeated",
type: "SRMsgPlayerInfo",
name: "players",
id: 3
}, {
rule: "required",
type: "bool",
name: "isHandOver",
id: 4
}, {
rule: "repeated",
type: "SRDealDetail",
name: "deals",
id: 5
}, {
rule: "repeated",
type: "SRAction",
name: "actions",
id: 6
}, {
rule: "optional",
type: "bytes",
name: "handScore",
id: 7
}, {
rule: "optional",
type: "string",
name: "roomConfigID",
id: 8
}, {
rule: "optional",
type: "uint32",
name: "startTime",
id: 9
}, {
rule: "optional",
type: "uint32",
name: "endTime",
id: 10
}, {
rule: "optional",
type: "int32",
name: "handNum",
id: 11
}, {
rule: "optional",
type: "bool",
name: "isContinuousBanker",
id: 12
}, {
rule: "optional",
type: "string",
name: "roomNumber",
id: 13
}, {
rule: "optional",
type: "int32",
name: "roomType",
id: 14
}, {
rule: "optional",
type: "SRMsgHandRecorderExtra",
name: "extra",
id: 15
} ]
}, {
name: "MsgPlayerInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "required",
type: "int32",
name: "chairID",
id: 2
}, {
rule: "required",
type: "int32",
name: "state",
id: 3
}, {
rule: "optional",
type: "string",
name: "name",
id: 4
}, {
rule: "optional",
type: "string",
name: "nick",
id: 5
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 6
}, {
rule: "optional",
type: "string",
name: "headIconURI",
id: 7
}, {
rule: "optional",
type: "string",
name: "ip",
id: 8
}, {
rule: "optional",
type: "string",
name: "location",
id: 9
}, {
rule: "optional",
type: "int32",
name: "dfHands",
id: 10
}, {
rule: "optional",
type: "int32",
name: "diamond",
id: 11
}, {
rule: "optional",
type: "int32",
name: "charm",
id: 12
}, {
rule: "optional",
type: "int32",
name: "avatarID",
id: 13
}, {
rule: "repeated",
type: "string",
name: "clubIDs",
id: 14
}, {
rule: "optional",
type: "int32",
name: "dan",
id: 15
}, {
rule: "optional",
type: "bool",
name: "isLooker",
id: 16
} ]
}, {
name: "PlayerHandScoreRecord",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "required",
type: "int32",
name: "winType",
id: 2
}, {
rule: "required",
type: "int32",
name: "score",
id: 3
} ]
}, {
name: "MsgRoomHandScoreRecord",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "endType",
id: 1
}, {
rule: "required",
type: "int32",
name: "handIndex",
id: 2
}, {
rule: "repeated",
type: "PlayerHandScoreRecord",
name: "playerRecords",
id: 3
} ]
}, {
name: "MsgRoomInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "state",
id: 1
}, {
rule: "repeated",
type: "MsgPlayerInfo",
name: "players",
id: 2
}, {
rule: "optional",
type: "string",
name: "ownerID",
id: 3
}, {
rule: "optional",
type: "string",
name: "roomNumber",
id: 4
}, {
rule: "optional",
type: "int32",
name: "handStartted",
id: 5
}, {
rule: "repeated",
type: "MsgRoomHandScoreRecord",
name: "scoreRecords",
id: 6
}, {
rule: "optional",
type: "int32",
name: "handFinished",
id: 7
} ]
}, {
name: "RoomScoreRecords",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgRoomHandScoreRecord",
name: "scoreRecords",
id: 1
} ]
}, {
name: "MsgDisbandAnswer",
syntax: "proto2",
fields: [ {
rule: "required",
type: "bool",
name: "agree",
id: 1
} ]
}, {
name: "MsgDisbandNotify",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "disbandState",
id: 1
}, {
rule: "required",
type: "int32",
name: "applicant",
id: 2
}, {
rule: "repeated",
type: "int32",
name: "waits",
id: 3
}, {
rule: "repeated",
type: "int32",
name: "agrees",
id: 4
}, {
rule: "repeated",
type: "int32",
name: "rejects",
id: 5
}, {
rule: "optional",
type: "int32",
name: "countdown",
id: 6
} ]
}, {
name: "MsgGameOverPlayerStat",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "chairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "score",
id: 2
}, {
rule: "required",
type: "int32",
name: "winChuckCounter",
id: 3
}, {
rule: "required",
type: "int32",
name: "winSelfDrawnCounter",
id: 4
}, {
rule: "required",
type: "int32",
name: "chuckerCounter",
id: 5
}, {
rule: "optional",
type: "int32",
name: "robKongCounter",
id: 6
}, {
rule: "optional",
type: "int32",
name: "kongerCounter",
id: 7
} ]
}, {
name: "MsgGameOver",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgGameOverPlayerStat",
name: "playerStats",
id: 1
} ]
}, {
name: "MsgRoomShowTips",
syntax: "proto2",
fields: [ {
rule: "optional",
type: "string",
name: "tips",
id: 1
}, {
rule: "required",
type: "int32",
name: "tipCode",
id: 2
} ]
}, {
name: "MsgRoomDelete",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "reason",
id: 1
} ]
}, {
name: "MsgKickout",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "victimUserID",
id: 1
} ]
}, {
name: "MsgKickoutResult",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "optional",
type: "string",
name: "victimUserID",
id: 2
}, {
rule: "optional",
type: "string",
name: "victimNick",
id: 3
}, {
rule: "optional",
type: "string",
name: "byWhoNick",
id: 4
}, {
rule: "optional",
type: "string",
name: "byWhoUserID",
id: 5
} ]
}, {
name: "MsgEnterRoomResult",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "status",
id: 1
} ]
}, {
name: "MsgDonate",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "toChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "itemID",
id: 2
}, {
rule: "optional",
type: "int32",
name: "fromChairID",
id: 3
} ]
}, {
name: "GameMessage",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "Ops",
id: 1
}, {
rule: "optional",
type: "bytes",
name: "Data",
id: 2
} ]
}, {
name: "MsgCardHand",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "cardHandType",
id: 1
}, {
rule: "repeated",
type: "int32",
name: "cards",
id: 2
} ]
}, {
name: "MsgPlayerCardList",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "chairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "cardCountOnHand",
id: 2
}, {
rule: "repeated",
type: "int32",
name: "cardsOnHand",
id: 3
}, {
rule: "repeated",
type: "MsgCardHand",
name: "discardedHands",
id: 4
}, {
rule: "repeated",
type: "int32",
name: "flowers",
id: 5
} ]
}, {
name: "MsgDeal",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "bankerChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "windFlowerID",
id: 2
}, {
rule: "repeated",
type: "MsgPlayerCardList",
name: "playerCardLists",
id: 3
}, {
rule: "required",
type: "int32",
name: "cardsInWall",
id: 4
}, {
rule: "optional",
type: "int32",
name: "dice1",
id: 5
}, {
rule: "optional",
type: "int32",
name: "dice2",
id: 6
}, {
rule: "optional",
type: "bool",
name: "isContinuousBanker",
id: 7
}, {
rule: "optional",
type: "int32",
name: "markup",
id: 8
} ]
}, {
name: "MsgAllowPlayerAction",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "qaIndex",
id: 1
}, {
rule: "required",
type: "int32",
name: "actionChairID",
id: 2
}, {
rule: "required",
type: "int32",
name: "allowedActions",
id: 3
}, {
rule: "optional",
type: "int32",
name: "timeoutInSeconds",
id: 4
} ]
}, {
name: "MsgAllowPlayerReAction",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "qaIndex",
id: 1
}, {
rule: "required",
type: "int32",
name: "actionChairID",
id: 2
}, {
rule: "required",
type: "int32",
name: "allowedActions",
id: 3
}, {
rule: "optional",
type: "int32",
name: "timeoutInSeconds",
id: 4
}, {
rule: "optional",
type: "int32",
name: "prevActionChairID",
id: 5
}, {
rule: "optional",
type: "MsgCardHand",
name: "prevActionHand",
id: 6
} ]
}, {
name: "MsgPlayerAction",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "qaIndex",
id: 1
}, {
rule: "required",
type: "int32",
name: "action",
id: 2
}, {
rule: "optional",
type: "int32",
name: "flags",
id: 3
}, {
rule: "repeated",
type: "int32",
name: "cards",
id: 4
} ]
}, {
name: "MsgActionResultNotify",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "targetChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "action",
id: 2
}, {
rule: "optional",
type: "MsgCardHand",
name: "actionHand",
id: 3
}, {
rule: "optional",
type: "int32",
name: "cardsInWall",
id: 4
} ]
}, {
name: "MsgRestore",
syntax: "proto2",
fields: [ {
rule: "required",
type: "MsgDeal",
name: "msgDeal",
id: 1
}, {
rule: "optional",
type: "int32",
name: "prevActionChairID",
id: 2
}, {
rule: "optional",
type: "MsgCardHand",
name: "prevActionHand",
id: 3
}, {
rule: "optional",
type: "int32",
name: "landlordChairID",
id: 4
}, {
rule: "optional",
type: "int32",
name: "multiple",
id: 5
}, {
rule: "repeated",
type: "int32",
name: "lastAwardCards",
id: 6
}, {
rule: "repeated",
type: "int32",
name: "playersListA",
id: 7
} ]
}, {
name: "MsgPlayerScoreGreatWin",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "baseWinScore",
id: 1
}, {
rule: "required",
type: "int32",
name: "greatWinType",
id: 2
}, {
rule: "required",
type: "int32",
name: "greatWinPoints",
id: 3
}, {
rule: "required",
type: "int32",
name: "trimGreatWinPoints",
id: 4
}, {
rule: "optional",
type: "int32",
name: "continuousBankerExtra",
id: 5
} ]
}, {
name: "MsgPlayerScoreMiniWin",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "miniWinType",
id: 1
}, {
rule: "required",
type: "int32",
name: "miniWinBasicScore",
id: 2
}, {
rule: "required",
type: "int32",
name: "miniWinFlowerScore",
id: 3
}, {
rule: "required",
type: "int32",
name: "miniMultiple",
id: 4
}, {
rule: "required",
type: "int32",
name: "miniWinTrimScore",
id: 5
}, {
rule: "optional",
type: "int32",
name: "continuousBankerExtra",
id: 6
} ]
}, {
name: "MsgPlayerScore",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "targetChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "winType",
id: 2
}, {
rule: "required",
type: "int32",
name: "score",
id: 3
}, {
rule: "required",
type: "int32",
name: "specialScore",
id: 4
}, {
rule: "optional",
type: "MsgPlayerScoreGreatWin",
name: "greatWin",
id: 5
}, {
rule: "optional",
type: "MsgPlayerScoreMiniWin",
name: "miniWin",
id: 6
}, {
rule: "optional",
type: "int32",
name: "fakeWinScore",
id: 7
}, {
rule: "repeated",
type: "int32",
name: "fakeList",
id: 8
}, {
rule: "optional",
type: "bool",
name: "isContinuousBanker",
id: 9
}, {
rule: "optional",
type: "int32",
name: "continuousBankerMultiple",
id: 10
} ]
}, {
name: "MsgHandScore",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgPlayerScore",
name: "playerScores",
id: 1
} ]
}, {
name: "MsgHandOver",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "endType",
id: 1
}, {
rule: "repeated",
type: "MsgPlayerCardList",
name: "playerCardLists",
id: 2
}, {
rule: "optional",
type: "MsgHandScore",
name: "scores",
id: 3
}, {
rule: "optional",
type: "bool",
name: "continueAble",
id: 4
} ]
}, {
name: "MsgUpdateLocation",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "required",
type: "string",
name: "location",
id: 2
} ]
}, {
name: "MsgUpdatePropCfg",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "propCfg",
id: 1
} ]
} ],
enums: [ {
name: "SRFlags",
syntax: "proto2",
values: [ {
name: "SRNone",
id: 0
}, {
name: "SRUserReplyOnly",
id: 1
}, {
name: "SRRichi",
id: 2
}, {
name: "SRFlyRichi",
id: 4
} ]
}, {
name: "RoomState",
syntax: "proto2",
values: [ {
name: "SRoomIdle",
id: 0
}, {
name: "SRoomWaiting",
id: 1
}, {
name: "SRoomPlaying",
id: 2
}, {
name: "SRoomDeleted",
id: 3
} ]
}, {
name: "PlayerState",
syntax: "proto2",
values: [ {
name: "PSNone",
id: 0
}, {
name: "PSReady",
id: 1
}, {
name: "PSOffline",
id: 2
}, {
name: "PSPlaying",
id: 3
} ]
}, {
name: "DisbandState",
syntax: "proto2",
values: [ {
name: "Waiting",
id: 1
}, {
name: "Done",
id: 2
}, {
name: "DoneWithOtherReject",
id: 3
}, {
name: "DoneWithRoomServerNotResponse",
id: 4
}, {
name: "DoneWithWaitReplyTimeout",
id: 5
}, {
name: "ErrorDuplicateAcquire",
id: 6
}, {
name: "ErrorNeedOwnerWhenGameNotStart",
id: 7
}, {
name: "ErrorWatcherNotDisband",
id: 8
} ]
}, {
name: "TipCode",
syntax: "proto2",
values: [ {
name: "TCNone",
id: 0
}, {
name: "TCWaitOpponentsAction",
id: 1
}, {
name: "TCDonateFailedNoEnoughDiamond",
id: 2
} ]
}, {
name: "RoomDeleteReason",
syntax: "proto2",
values: [ {
name: "IdleTimeout",
id: 1
}, {
name: "DisbandByOwnerFromRMS",
id: 2
}, {
name: "DisbandByApplication",
id: 3
}, {
name: "DisbandBySystem",
id: 4
}, {
name: "DisbandMaxHand",
id: 5
}, {
name: "DisbandInLoseProtected",
id: 6
} ]
}, {
name: "KickoutResult",
syntax: "proto2",
values: [ {
name: "KickoutResult_Success",
id: 1
}, {
name: "KickoutResult_FailedGameHasStartted",
id: 2
}, {
name: "KickoutResult_FailedNeedOwner",
id: 3
}, {
name: "KickoutResult_FailedPlayerNotExist",
id: 4
} ]
}, {
name: "EnterRoomStatus",
syntax: "proto2",
values: [ {
name: "Success",
id: 0
}, {
name: "RoomNotExist",
id: 1
}, {
name: "RoomIsFulled",
id: 2
}, {
name: "RoomPlaying",
id: 3
}, {
name: "InAnotherRoom",
id: 4
}, {
name: "MonkeyRoomUserIDNotMatch",
id: 5
}, {
name: "MonkeyRoomUserLoginSeqNotMatch",
id: 6
}, {
name: "AppModuleNeedUpgrade",
id: 7
}, {
name: "InRoomBlackList",
id: 8
}, {
name: "TakeoffDiamondFailedNotEnough",
id: 9
}, {
name: "TakeoffDiamondFailedIO",
id: 10
}, {
name: "ParseTokenError",
id: 11
}, {
name: "RoomInApplicateDisband",
id: 12
}, {
name: "NotClubMember",
id: 13
} ]
}, {
name: "CardID",
syntax: "proto2",
values: [ {
name: "R2H",
id: 0
}, {
name: "R2D",
id: 1
}, {
name: "R2C",
id: 2
}, {
name: "R2S",
id: 3
}, {
name: "R3H",
id: 4
}, {
name: "R3D",
id: 5
}, {
name: "R3C",
id: 6
}, {
name: "R3S",
id: 7
}, {
name: "R4H",
id: 8
}, {
name: "R4D",
id: 9
}, {
name: "R4C",
id: 10
}, {
name: "R4S",
id: 11
}, {
name: "R5H",
id: 12
}, {
name: "R5D",
id: 13
}, {
name: "R5C",
id: 14
}, {
name: "R5S",
id: 15
}, {
name: "R6H",
id: 16
}, {
name: "R6D",
id: 17
}, {
name: "R6C",
id: 18
}, {
name: "R6S",
id: 19
}, {
name: "R7H",
id: 20
}, {
name: "R7D",
id: 21
}, {
name: "R7C",
id: 22
}, {
name: "R7S",
id: 23
}, {
name: "R8H",
id: 24
}, {
name: "R8D",
id: 25
}, {
name: "R8C",
id: 26
}, {
name: "R8S",
id: 27
}, {
name: "R9H",
id: 28
}, {
name: "R9D",
id: 29
}, {
name: "R9C",
id: 30
}, {
name: "R9S",
id: 31
}, {
name: "R10H",
id: 32
}, {
name: "R10D",
id: 33
}, {
name: "R10C",
id: 34
}, {
name: "R10S",
id: 35
}, {
name: "JH",
id: 36
}, {
name: "JD",
id: 37
}, {
name: "JC",
id: 38
}, {
name: "JS",
id: 39
}, {
name: "QH",
id: 40
}, {
name: "QD",
id: 41
}, {
name: "QC",
id: 42
}, {
name: "QS",
id: 43
}, {
name: "KH",
id: 44
}, {
name: "KD",
id: 45
}, {
name: "KC",
id: 46
}, {
name: "KS",
id: 47
}, {
name: "AH",
id: 48
}, {
name: "AD",
id: 49
}, {
name: "AC",
id: 50
}, {
name: "AS",
id: 51
}, {
name: "JOB",
id: 52
}, {
name: "JOR",
id: 53
}, {
name: "CARDMAX",
id: 54
} ]
}, {
name: "MessageCode",
syntax: "proto2",
values: [ {
name: "OPInvalid",
id: 0
}, {
name: "OPAction",
id: 1
}, {
name: "OPActionResultNotify",
id: 2
}, {
name: "OPActionAllowed",
id: 3
}, {
name: "OPReActionAllowed",
id: 5
}, {
name: "OPDeal",
id: 6
}, {
name: "OPHandOver",
id: 7
}, {
name: "OPRestore",
id: 8
}, {
name: "OPPlayerLeaveRoom",
id: 9
}, {
name: "OPPlayerEnterRoom",
id: 10
}, {
name: "OPDisbandRequest",
id: 11
}, {
name: "OPDisbandNotify",
id: 12
}, {
name: "OPDisbandAnswer",
id: 13
}, {
name: "OPPlayerReady",
id: 14
}, {
name: "OPRoomDeleted",
id: 15
}, {
name: "OPRoomUpdate",
id: 16
}, {
name: "OPRoomShowTips",
id: 17
}, {
name: "OPGameOver",
id: 18
}, {
name: "OPKickout",
id: 19
}, {
name: "OPDonate",
id: 20
}, {
name: "OPUpdateLocation",
id: 21
}, {
name: "OP2Lobby",
id: 22
}, {
name: "OPUpdatePropCfg",
id: 23
}, {
name: "OPPing",
id: 100
}, {
name: "OPPong",
id: 101
} ]
} ],
isNamespace: !0
}, {
name: "prunfast",
fields: [],
syntax: "proto2",
enums: [ {
name: "CardHandType",
syntax: "proto2",
values: [ {
name: "None",
id: 0
}, {
name: "Flush",
id: 1
}, {
name: "Bomb",
id: 2
}, {
name: "Single",
id: 3
}, {
name: "Pair",
id: 4
}, {
name: "Pair2X",
id: 5
}, {
name: "Triplet",
id: 6
}, {
name: "TripletPair",
id: 7
}, {
name: "Triplet2X",
id: 8
}, {
name: "Triplet2X2Pair",
id: 9
} ]
}, {
name: "HandOverType",
syntax: "proto2",
values: [ {
name: "enumHandOverType_None",
id: 0
}, {
name: "enumHandOverType_Win_SelfDrawn",
id: 1
}, {
name: "enumHandOverType_Win_Chuck",
id: 2
}, {
name: "enumHandOverType_Chucker",
id: 3
}, {
name: "enumHandOverType_Konger",
id: 4
}, {
name: "enumHandOverType_Win_RobKong",
id: 5
} ]
}, {
name: "ActionType",
syntax: "proto2",
values: [ {
name: "enumActionType_None",
id: 0
}, {
name: "enumActionType_SKIP",
id: 1
}, {
name: "enumActionType_DISCARD",
id: 2
}, {
name: "enumActionType_DRAW",
id: 4
}, {
name: "enumActionType_Win_SelfDrawn",
id: 8
} ]
} ],
isNamespace: !0
} ],
isNamespace: !0
}).build();
cc._RF.pop();
}, {
protobuf: "protobuf"
} ],
protoGame: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ae3612RQRZEP4+Sytc5jgVX", "protoGame");
o.proto = e("protobuf").newBuilder({}).import({
package: null,
syntax: "proto2",
messages: [ {
name: "dfmahjong",
fields: [],
syntax: "proto2",
enums: [ {
name: "GreatWinType",
syntax: "proto2",
values: [ {
name: "enumGreatWinType_None",
id: 0
}, {
name: "enumGreatWinType_ChowPongKong",
id: 1
}, {
name: "enumGreatWinType_FinalDraw",
id: 2
}, {
name: "enumGreatWinType_PongKong",
id: 4
}, {
name: "enumGreatWinType_PureSame",
id: 8
}, {
name: "enumGreatWinType_MixedSame",
id: 16
}, {
name: "enumGreatWinType_ClearFront",
id: 32
}, {
name: "enumGreatWinType_SevenPair",
id: 64
}, {
name: "enumGreatWinType_GreatSevenPair",
id: 128
}, {
name: "enumGreatWinType_Heaven",
id: 256
}, {
name: "enumGreatWinType_AfterConcealedKong",
id: 512
}, {
name: "enumGreatWinType_AfterExposedKong",
id: 1024
}, {
name: "enumGreatWinType_Richi",
id: 2048
}, {
name: "enumGreatWinType_PongKongWithFlowerNoMeld",
id: 4096
}, {
name: "enumGreatWinType_PureSameWithFlowerNoMeld",
id: 8192
}, {
name: "enumGreatWinType_MixSameWithFlowerNoMeld",
id: 16384
}, {
name: "enumGreatWinType_PureSameWithMeld",
id: 32768
}, {
name: "enumGreatWinType_MixSameWithMeld",
id: 65536
}, {
name: "enumGreatWinType_RobKong",
id: 131072
}, {
name: "enumGreatWinType_OpponentsRichi",
id: 262144
} ]
}, {
name: "MiniWinType",
syntax: "proto2",
values: [ {
name: "enumMiniWinType_None",
id: 0
}, {
name: "enumMiniWinType_Continuous_Banker",
id: 1
}, {
name: "enumMiniWinType_SelfDraw",
id: 2
}, {
name: "enumMiniWinType_NoFlowers",
id: 4
}, {
name: "enumMiniWinType_Kong2Discard",
id: 8
}, {
name: "enumMiniWinType_Kong2SelfDraw",
id: 16
}, {
name: "enumMiniWinType_SecondFrontClear",
id: 32
}, {
name: "enumMiniWinType_PongSelfDrawn",
id: 64
}, {
name: "enumMiniWinType_ChowPongkong",
id: 128
}, {
name: "enumMiniWinType_Richi",
id: 256
}, {
name: "enumMiniWinType_SevenPair",
id: 512
}, {
name: "enumMiniWinType_PureSameWithMeld",
id: 1024
}, {
name: "enumMiniWinType_MixSameWithMeld",
id: 2048
} ]
} ],
isNamespace: !0
}, {
name: "mahjong",
fields: [],
syntax: "proto2",
messages: [ {
name: "MsgReplayPlayerInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "optional",
type: "string",
name: "nick",
id: 2
}, {
rule: "required",
type: "int32",
name: "chairID",
id: 3
}, {
rule: "optional",
type: "int32",
name: "totalScore",
id: 4
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 5
}, {
rule: "optional",
type: "string",
name: "headIconURI",
id: 6
}, {
rule: "optional",
type: "int32",
name: "avatarID",
id: 7
} ]
}, {
name: "MsgReplayPlayerScoreSummary",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "chairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "score",
id: 2
}, {
rule: "required",
type: "int32",
name: "winType",
id: 3
} ]
}, {
name: "MsgReplayRecordSummary",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "recordUUID",
id: 1
}, {
rule: "repeated",
type: "MsgReplayPlayerScoreSummary",
name: "playerScores",
id: 2
}, {
rule: "required",
type: "uint32",
name: "endTime",
id: 3
}, {
rule: "optional",
type: "string",
name: "shareAbleID",
id: 4
}, {
rule: "optional",
type: "uint32",
name: "startTime",
id: 5
} ]
}, {
name: "MsgReplayRoom",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "recordRoomType",
id: 1
}, {
rule: "required",
type: "uint32",
name: "startTime",
id: 2
}, {
rule: "required",
type: "uint32",
name: "endTime",
id: 3
}, {
rule: "required",
type: "string",
name: "roomNumber",
id: 4
}, {
rule: "repeated",
type: "MsgReplayPlayerInfo",
name: "players",
id: 5
}, {
rule: "repeated",
type: "MsgReplayRecordSummary",
name: "records",
id: 6
}, {
rule: "optional",
type: "string",
name: "ownerUserID",
id: 7
} ]
}, {
name: "SRMsgPlayerInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "required",
type: "int32",
name: "chairID",
id: 2
}, {
rule: "optional",
type: "string",
name: "nick",
id: 3
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 4
}, {
rule: "optional",
type: "string",
name: "headIconURI",
id: 5
}, {
rule: "optional",
type: "int32",
name: "avatarID",
id: 6
} ]
}, {
name: "SRDealDetail",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "chairID",
id: 1
}, {
rule: "repeated",
type: "int32",
name: "tilesHand",
id: 2
}, {
rule: "repeated",
type: "int32",
name: "tilesFlower",
id: 3
} ]
}, {
name: "SRAction",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "action",
id: 1
}, {
rule: "required",
type: "int32",
name: "chairID",
id: 2
}, {
rule: "required",
type: "int32",
name: "qaIndex",
id: 3
}, {
rule: "repeated",
type: "int32",
name: "tiles",
id: 4
}, {
rule: "required",
type: "int32",
name: "flags",
id: 5
}, {
rule: "optional",
type: "int32",
name: "allowActions",
id: 6
} ]
}, {
name: "SRMsgHandRecorderExtra",
syntax: "proto2",
fields: [ {
rule: "optional",
type: "int32",
name: "markup",
id: 1
}, {
rule: "optional",
type: "string",
name: "ownerUserID",
id: 2
} ]
}, {
name: "SRMsgHandRecorder",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "bankerChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "windFlowerID",
id: 2
}, {
rule: "repeated",
type: "SRMsgPlayerInfo",
name: "players",
id: 3
}, {
rule: "required",
type: "bool",
name: "isHandOver",
id: 4
}, {
rule: "repeated",
type: "SRDealDetail",
name: "deals",
id: 5
}, {
rule: "repeated",
type: "SRAction",
name: "actions",
id: 6
}, {
rule: "optional",
type: "bytes",
name: "handScore",
id: 7
}, {
rule: "optional",
type: "string",
name: "roomConfigID",
id: 8
}, {
rule: "optional",
type: "uint32",
name: "startTime",
id: 9
}, {
rule: "optional",
type: "uint32",
name: "endTime",
id: 10
}, {
rule: "optional",
type: "int32",
name: "handNum",
id: 11
}, {
rule: "optional",
type: "bool",
name: "isContinuousBanker",
id: 12
}, {
rule: "optional",
type: "string",
name: "roomNumber",
id: 13
}, {
rule: "optional",
type: "int32",
name: "roomType",
id: 14
}, {
rule: "optional",
type: "SRMsgHandRecorderExtra",
name: "extra",
id: 15
} ]
}, {
name: "MsgPlayerInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "required",
type: "int32",
name: "chairID",
id: 2
}, {
rule: "required",
type: "int32",
name: "state",
id: 3
}, {
rule: "optional",
type: "string",
name: "name",
id: 4
}, {
rule: "optional",
type: "string",
name: "nick",
id: 5
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 6
}, {
rule: "optional",
type: "string",
name: "headIconURI",
id: 7
}, {
rule: "optional",
type: "string",
name: "ip",
id: 8
}, {
rule: "optional",
type: "string",
name: "location",
id: 9
}, {
rule: "optional",
type: "int32",
name: "dfHands",
id: 10
}, {
rule: "optional",
type: "int32",
name: "diamond",
id: 11
}, {
rule: "optional",
type: "int32",
name: "charm",
id: 12
}, {
rule: "optional",
type: "int32",
name: "avatarID",
id: 13
}, {
rule: "repeated",
type: "string",
name: "clubIDs",
id: 14
}, {
rule: "optional",
type: "int32",
name: "dan",
id: 15
} ]
}, {
name: "PlayerHandScoreRecord",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "required",
type: "int32",
name: "winType",
id: 2
}, {
rule: "required",
type: "int32",
name: "score",
id: 3
} ]
}, {
name: "MsgRoomHandScoreRecord",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "endType",
id: 1
}, {
rule: "required",
type: "int32",
name: "handIndex",
id: 2
}, {
rule: "repeated",
type: "PlayerHandScoreRecord",
name: "playerRecords",
id: 3
} ]
}, {
name: "MsgRoomInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "state",
id: 1
}, {
rule: "repeated",
type: "MsgPlayerInfo",
name: "players",
id: 2
}, {
rule: "optional",
type: "string",
name: "ownerID",
id: 3
}, {
rule: "optional",
type: "string",
name: "roomNumber",
id: 4
}, {
rule: "optional",
type: "int32",
name: "handStartted",
id: 5
}, {
rule: "repeated",
type: "MsgRoomHandScoreRecord",
name: "scoreRecords",
id: 6
}, {
rule: "optional",
type: "int32",
name: "handFinished",
id: 7
} ]
}, {
name: "RoomScoreRecords",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgRoomHandScoreRecord",
name: "scoreRecords",
id: 1
} ]
}, {
name: "MsgDisbandAnswer",
syntax: "proto2",
fields: [ {
rule: "required",
type: "bool",
name: "agree",
id: 1
} ]
}, {
name: "MsgDisbandNotify",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "disbandState",
id: 1
}, {
rule: "required",
type: "int32",
name: "applicant",
id: 2
}, {
rule: "repeated",
type: "int32",
name: "waits",
id: 3
}, {
rule: "repeated",
type: "int32",
name: "agrees",
id: 4
}, {
rule: "repeated",
type: "int32",
name: "rejects",
id: 5
}, {
rule: "optional",
type: "int32",
name: "countdown",
id: 6
} ]
}, {
name: "MsgGameOverPlayerStat",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "chairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "score",
id: 2
}, {
rule: "required",
type: "int32",
name: "winChuckCounter",
id: 3
}, {
rule: "required",
type: "int32",
name: "winSelfDrawnCounter",
id: 4
}, {
rule: "required",
type: "int32",
name: "chuckerCounter",
id: 5
}, {
rule: "optional",
type: "int32",
name: "robKongCounter",
id: 6
}, {
rule: "optional",
type: "int32",
name: "kongerCounter",
id: 7
} ]
}, {
name: "MsgGameOver",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgGameOverPlayerStat",
name: "playerStats",
id: 1
} ]
}, {
name: "MsgRoomShowTips",
syntax: "proto2",
fields: [ {
rule: "optional",
type: "string",
name: "tips",
id: 1
}, {
rule: "required",
type: "int32",
name: "tipCode",
id: 2
} ]
}, {
name: "MsgRoomDelete",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "reason",
id: 1
} ]
}, {
name: "MsgKickout",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "victimUserID",
id: 1
} ]
}, {
name: "MsgKickoutResult",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "optional",
type: "string",
name: "victimUserID",
id: 2
}, {
rule: "optional",
type: "string",
name: "victimNick",
id: 3
}, {
rule: "optional",
type: "string",
name: "byWhoNick",
id: 4
}, {
rule: "optional",
type: "string",
name: "byWhoUserID",
id: 5
} ]
}, {
name: "MsgEnterRoomResult",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "status",
id: 1
} ]
}, {
name: "MsgDonate",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "toChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "itemID",
id: 2
}, {
rule: "optional",
type: "int32",
name: "fromChairID",
id: 3
} ]
}, {
name: "GameMessage",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "Ops",
id: 1
}, {
rule: "optional",
type: "bytes",
name: "Data",
id: 2
} ]
}, {
name: "MsgMeldTile",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "meldType",
id: 1
}, {
rule: "required",
type: "int32",
name: "tile1",
id: 2
}, {
rule: "optional",
type: "int32",
name: "contributor",
id: 3
}, {
rule: "optional",
type: "int32",
name: "chowTile",
id: 4
} ]
}, {
name: "MsgPlayerTileList",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "chairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "tileCountInHand",
id: 2
}, {
rule: "repeated",
type: "int32",
name: "tilesHand",
id: 3
}, {
rule: "repeated",
type: "int32",
name: "tilesFlower",
id: 4
}, {
rule: "repeated",
type: "int32",
name: "tilesDiscard",
id: 5
}, {
rule: "repeated",
type: "MsgMeldTile",
name: "melds",
id: 6
} ]
}, {
name: "MsgDeal",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "bankerChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "windFlowerID",
id: 2
}, {
rule: "repeated",
type: "MsgPlayerTileList",
name: "playerTileLists",
id: 3
}, {
rule: "required",
type: "int32",
name: "tilesInWall",
id: 4
}, {
rule: "optional",
type: "int32",
name: "dice1",
id: 5
}, {
rule: "optional",
type: "int32",
name: "dice2",
id: 6
}, {
rule: "optional",
type: "bool",
name: "isContinuousBanker",
id: 7
}, {
rule: "optional",
type: "int32",
name: "markup",
id: 8
} ]
}, {
name: "MsgReadyHandTips",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "targetTile",
id: 1
}, {
rule: "repeated",
type: "int32",
name: "readyHandList",
id: 2
} ]
}, {
name: "MsgAllowPlayerAction",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "qaIndex",
id: 1
}, {
rule: "required",
type: "int32",
name: "actionChairID",
id: 2
}, {
rule: "required",
type: "int32",
name: "allowedActions",
id: 3
}, {
rule: "optional",
type: "int32",
name: "timeoutInSeconds",
id: 4
}, {
rule: "repeated",
type: "MsgReadyHandTips",
name: "tipsForAction",
id: 5
}, {
rule: "repeated",
type: "MsgMeldTile",
name: "meldsForAction",
id: 6
} ]
}, {
name: "MsgAllowPlayerReAction",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "qaIndex",
id: 1
}, {
rule: "required",
type: "int32",
name: "actionChairID",
id: 2
}, {
rule: "required",
type: "int32",
name: "allowedActions",
id: 3
}, {
rule: "optional",
type: "int32",
name: "timeoutInSeconds",
id: 4
}, {
rule: "repeated",
type: "MsgMeldTile",
name: "meldsForAction",
id: 5
}, {
rule: "required",
type: "int32",
name: "victimTileID",
id: 6
}, {
rule: "required",
type: "int32",
name: "victimChairID",
id: 7
} ]
}, {
name: "MsgPlayerAction",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "qaIndex",
id: 1
}, {
rule: "required",
type: "int32",
name: "action",
id: 2
}, {
rule: "optional",
type: "int32",
name: "flags",
id: 3
}, {
rule: "optional",
type: "int32",
name: "tile",
id: 4
}, {
rule: "optional",
type: "int32",
name: "meldType",
id: 5
}, {
rule: "optional",
type: "int32",
name: "meldTile1",
id: 6
} ]
}, {
name: "MsgActionResultNotify",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "targetChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "action",
id: 2
}, {
rule: "optional",
type: "int32",
name: "actionTile",
id: 3
}, {
rule: "optional",
type: "MsgMeldTile",
name: "actionMeld",
id: 4
}, {
rule: "repeated",
type: "int32",
name: "newFlowers",
id: 5
}, {
rule: "optional",
type: "int32",
name: "tilesInWall",
id: 6
}, {
rule: "optional",
type: "bool",
name: "waitDiscardReAction",
id: 7
} ]
}, {
name: "MsgRestore",
syntax: "proto2",
fields: [ {
rule: "required",
type: "MsgDeal",
name: "msgDeal",
id: 1
}, {
rule: "repeated",
type: "int32",
name: "readyHandChairs",
id: 2
}, {
rule: "optional",
type: "int32",
name: "lastDiscaredChairID",
id: 3
}, {
rule: "optional",
type: "bool",
name: "isMeNewDraw",
id: 4
}, {
rule: "optional",
type: "bool",
name: "waitDiscardReAction",
id: 5
}, {
rule: "repeated",
type: "int32",
name: "flyReadyHandChairs",
id: 6
}, {
rule: "optional",
type: "bytes",
name: "extra",
id: 7
} ]
}, {
name: "MsgPlayerScoreGreatWin",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "baseWinScore",
id: 1
}, {
rule: "required",
type: "int32",
name: "greatWinType",
id: 2
}, {
rule: "required",
type: "int32",
name: "greatWinPoints",
id: 3
}, {
rule: "required",
type: "int32",
name: "trimGreatWinPoints",
id: 4
}, {
rule: "optional",
type: "int32",
name: "continuousBankerExtra",
id: 5
} ]
}, {
name: "MsgPlayerScoreMiniWin",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "miniWinType",
id: 1
}, {
rule: "required",
type: "int32",
name: "miniWinBasicScore",
id: 2
}, {
rule: "required",
type: "int32",
name: "miniWinFlowerScore",
id: 3
}, {
rule: "required",
type: "int32",
name: "miniMultiple",
id: 4
}, {
rule: "required",
type: "int32",
name: "miniWinTrimScore",
id: 5
}, {
rule: "optional",
type: "int32",
name: "continuousBankerExtra",
id: 6
} ]
}, {
name: "MsgPlayerScore",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "targetChairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "winType",
id: 2
}, {
rule: "required",
type: "int32",
name: "score",
id: 3
}, {
rule: "required",
type: "int32",
name: "specialScore",
id: 4
}, {
rule: "optional",
type: "MsgPlayerScoreGreatWin",
name: "greatWin",
id: 5
}, {
rule: "optional",
type: "MsgPlayerScoreMiniWin",
name: "miniWin",
id: 6
}, {
rule: "optional",
type: "int32",
name: "fakeWinScore",
id: 7
}, {
rule: "repeated",
type: "int32",
name: "fakeList",
id: 8
}, {
rule: "optional",
type: "bool",
name: "isContinuousBanker",
id: 9
}, {
rule: "optional",
type: "int32",
name: "continuousBankerMultiple",
id: 10
} ]
}, {
name: "MsgHandScore",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgPlayerScore",
name: "playerScores",
id: 1
} ]
}, {
name: "MsgHandOver",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "endType",
id: 1
}, {
rule: "repeated",
type: "MsgPlayerTileList",
name: "playerTileLists",
id: 2
}, {
rule: "optional",
type: "MsgHandScore",
name: "scores",
id: 3
}, {
rule: "optional",
type: "bool",
name: "continueAble",
id: 4
} ]
}, {
name: "MsgUpdateLocation",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "required",
type: "string",
name: "location",
id: 2
} ]
}, {
name: "MsgUpdatePropCfg",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "propCfg",
id: 1
} ]
} ],
enums: [ {
name: "SRFlags",
syntax: "proto2",
values: [ {
name: "SRNone",
id: 0
}, {
name: "SRUserReplyOnly",
id: 1
}, {
name: "SRRichi",
id: 2
}, {
name: "SRFlyRichi",
id: 4
} ]
}, {
name: "RoomState",
syntax: "proto2",
values: [ {
name: "SRoomIdle",
id: 0
}, {
name: "SRoomWaiting",
id: 1
}, {
name: "SRoomPlaying",
id: 2
}, {
name: "SRoomDeleted",
id: 3
} ]
}, {
name: "PlayerState",
syntax: "proto2",
values: [ {
name: "PSNone",
id: 0
}, {
name: "PSReady",
id: 1
}, {
name: "PSOffline",
id: 2
}, {
name: "PSPlaying",
id: 3
} ]
}, {
name: "DisbandState",
syntax: "proto2",
values: [ {
name: "Waiting",
id: 1
}, {
name: "Done",
id: 2
}, {
name: "DoneWithOtherReject",
id: 3
}, {
name: "DoneWithRoomServerNotResponse",
id: 4
}, {
name: "DoneWithWaitReplyTimeout",
id: 5
}, {
name: "ErrorDuplicateAcquire",
id: 6
}, {
name: "ErrorNeedOwnerWhenGameNotStart",
id: 7
} ]
}, {
name: "TipCode",
syntax: "proto2",
values: [ {
name: "TCNone",
id: 0
}, {
name: "TCWaitOpponentsAction",
id: 1
}, {
name: "TCDonateFailedNoEnoughDiamond",
id: 2
} ]
}, {
name: "RoomDeleteReason",
syntax: "proto2",
values: [ {
name: "IdleTimeout",
id: 1
}, {
name: "DisbandByOwnerFromRMS",
id: 2
}, {
name: "DisbandByApplication",
id: 3
}, {
name: "DisbandBySystem",
id: 4
}, {
name: "DisbandMaxHand",
id: 5
}, {
name: "DisbandInLoseProtected",
id: 6
} ]
}, {
name: "KickoutResult",
syntax: "proto2",
values: [ {
name: "KickoutResult_Success",
id: 1
}, {
name: "KickoutResult_FailedGameHasStartted",
id: 2
}, {
name: "KickoutResult_FailedNeedOwner",
id: 3
}, {
name: "KickoutResult_FailedPlayerNotExist",
id: 4
} ]
}, {
name: "EnterRoomStatus",
syntax: "proto2",
values: [ {
name: "Success",
id: 0
}, {
name: "RoomNotExist",
id: 1
}, {
name: "RoomIsFulled",
id: 2
}, {
name: "RoomPlaying",
id: 3
}, {
name: "InAnotherRoom",
id: 4
}, {
name: "MonkeyRoomUserIDNotMatch",
id: 5
}, {
name: "MonkeyRoomUserLoginSeqNotMatch",
id: 6
}, {
name: "AppModuleNeedUpgrade",
id: 7
}, {
name: "InRoomBlackList",
id: 8
}, {
name: "TakeoffDiamondFailedNotEnough",
id: 9
}, {
name: "TakeoffDiamondFailedIO",
id: 10
}, {
name: "ParseTokenError",
id: 11
}, {
name: "RoomInApplicateDisband",
id: 12
}, {
name: "NotClubMember",
id: 13
} ]
}, {
name: "TileID",
syntax: "proto2",
values: [ {
name: "enumTid_MAN1",
id: 0
}, {
name: "enumTid_MAN2",
id: 1
}, {
name: "enumTid_MAN3",
id: 2
}, {
name: "enumTid_MAN4",
id: 3
}, {
name: "enumTid_MAN5",
id: 4
}, {
name: "enumTid_MAN6",
id: 5
}, {
name: "enumTid_MAN7",
id: 6
}, {
name: "enumTid_MAN8",
id: 7
}, {
name: "enumTid_MAN9",
id: 8
}, {
name: "enumTid_PIN1",
id: 9
}, {
name: "enumTid_PIN2",
id: 10
}, {
name: "enumTid_PIN3",
id: 11
}, {
name: "enumTid_PIN4",
id: 12
}, {
name: "enumTid_PIN5",
id: 13
}, {
name: "enumTid_PIN6",
id: 14
}, {
name: "enumTid_PIN7",
id: 15
}, {
name: "enumTid_PIN8",
id: 16
}, {
name: "enumTid_PIN9",
id: 17
}, {
name: "enumTid_SOU1",
id: 18
}, {
name: "enumTid_SOU2",
id: 19
}, {
name: "enumTid_SOU3",
id: 20
}, {
name: "enumTid_SOU4",
id: 21
}, {
name: "enumTid_SOU5",
id: 22
}, {
name: "enumTid_SOU6",
id: 23
}, {
name: "enumTid_SOU7",
id: 24
}, {
name: "enumTid_SOU8",
id: 25
}, {
name: "enumTid_SOU9",
id: 26
}, {
name: "enumTid_TON",
id: 27
}, {
name: "enumTid_NAN",
id: 28
}, {
name: "enumTid_SHA",
id: 29
}, {
name: "enumTid_PEI",
id: 30
}, {
name: "enumTid_HAK",
id: 31
}, {
name: "enumTid_HAT",
id: 32
}, {
name: "enumTid_CHU",
id: 33
}, {
name: "enumTid_PLUM",
id: 34
}, {
name: "enumTid_ORCHID",
id: 35
}, {
name: "enumTid_BAMBOO",
id: 36
}, {
name: "enumTid_CHRYSANTHEMUM",
id: 37
}, {
name: "enumTid_SPRING",
id: 38
}, {
name: "enumTid_SUMMER",
id: 39
}, {
name: "enumTid_AUTUMN",
id: 40
}, {
name: "enumTid_WINTER",
id: 41
}, {
name: "enumTid_MAX",
id: 42
} ]
}, {
name: "MessageCode",
syntax: "proto2",
values: [ {
name: "OPInvalid",
id: 0
}, {
name: "OPAction",
id: 1
}, {
name: "OPActionResultNotify",
id: 2
}, {
name: "OPActionAllowed",
id: 3
}, {
name: "OPReActionAllowed",
id: 5
}, {
name: "OPDeal",
id: 6
}, {
name: "OPHandOver",
id: 7
}, {
name: "OPRestore",
id: 8
}, {
name: "OPPlayerLeaveRoom",
id: 9
}, {
name: "OPPlayerEnterRoom",
id: 10
}, {
name: "OPDisbandRequest",
id: 11
}, {
name: "OPDisbandNotify",
id: 12
}, {
name: "OPDisbandAnswer",
id: 13
}, {
name: "OPPlayerReady",
id: 14
}, {
name: "OPRoomDeleted",
id: 15
}, {
name: "OPRoomUpdate",
id: 16
}, {
name: "OPRoomShowTips",
id: 17
}, {
name: "OPGameOver",
id: 18
}, {
name: "OPKickout",
id: 19
}, {
name: "OPDonate",
id: 20
}, {
name: "OPUpdateLocation",
id: 21
}, {
name: "OP2Lobby",
id: 22
}, {
name: "OPUpdatePropCfg",
id: 23
}, {
name: "OPPing",
id: 100
}, {
name: "OPPong",
id: 101
} ]
}, {
name: "MeldType",
syntax: "proto2",
values: [ {
name: "enumMeldTypeSequence",
id: 0
}, {
name: "enumMeldTypeTriplet",
id: 1
}, {
name: "enumMeldTypeExposedKong",
id: 2
}, {
name: "enumMeldTypeTriplet2Kong",
id: 3
}, {
name: "enumMeldTypeConcealedKong",
id: 4
}, {
name: "enumMeldTypeSelfMeld",
id: 5
}, {
name: "enumMeldTypeChuHH",
id: 6
}, {
name: "enumMeldTypeChuHH1",
id: 7
}, {
name: "enumMeldTypeWind",
id: 8
}, {
name: "enumMeldTypePairKong",
id: 9
} ]
}, {
name: "ActionType",
syntax: "proto2",
values: [ {
name: "enumActionType_SKIP",
id: 1
}, {
name: "enumActionType_DISCARD",
id: 2
}, {
name: "enumActionType_DRAW",
id: 4
}, {
name: "enumActionType_CHOW",
id: 8
}, {
name: "enumActionType_PONG",
id: 16
}, {
name: "enumActionType_KONG_Exposed",
id: 32
}, {
name: "enumActionType_KONG_Concealed",
id: 64
}, {
name: "enumActionType_WIN_Chuck",
id: 128
}, {
name: "enumActionType_WIN_SelfDrawn",
id: 256
}, {
name: "enumActionType_KONG_Triplet2",
id: 512
}, {
name: "enumActionType_FirstReadyHand",
id: 1024
}, {
name: "enumActionType_ReadyHand",
id: 2048
}, {
name: "enumActionType_CustomA",
id: 4096
}, {
name: "enumActionType_CustomB",
id: 8192
}, {
name: "enumActionType_CustomC",
id: 16384
}, {
name: "enumActionType_CustomD",
id: 32768
} ]
}, {
name: "HandOverType",
syntax: "proto2",
values: [ {
name: "enumHandOverType_None",
id: 0
}, {
name: "enumHandOverType_Win_SelfDrawn",
id: 1
}, {
name: "enumHandOverType_Win_Chuck",
id: 2
}, {
name: "enumHandOverType_Chucker",
id: 3
}, {
name: "enumHandOverType_Konger",
id: 4
}, {
name: "enumHandOverType_Win_RobKong",
id: 5
} ]
} ],
isNamespace: !0
}, {
name: "zjmahjong",
fields: [],
syntax: "proto2",
enums: [ {
name: "GreatWinType",
syntax: "proto2",
values: [ {
name: "None",
id: 0
}, {
name: "PureSame",
id: 1
}, {
name: "SevenPair",
id: 2
}, {
name: "GreatSevenPair",
id: 4
}, {
name: "Thirteen",
id: 8
}, {
name: "RobKong",
id: 16
}, {
name: "Heaven",
id: 32
}, {
name: "AfterConcealedKong",
id: 64
}, {
name: "AfterExposedKong",
id: 128
}, {
name: "FinalDraw",
id: 256
}, {
name: "PongPong",
id: 512
}, {
name: "AllWind",
id: 1024
}, {
name: "AfterKong",
id: 2048
} ]
} ],
isNamespace: !0
} ],
isNamespace: !0
}).build();
cc._RF.pop();
}, {
protobuf: "protobuf"
} ],
protoLobby: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8f34dEpwLZFYapM4YAH25iR", "protoLobby");
o.proto = e("protobuf").newBuilder({}).import({
package: null,
syntax: "proto2",
messages: [ {
name: "club",
fields: [],
syntax: "proto2",
messages: [ {
name: "MsgClubReply",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "replyCode",
id: 1
}, {
rule: "optional",
type: "bytes",
name: "content",
id: 2
} ]
}, {
name: "MsgClubDisplayInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "nick",
id: 1
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 2
}, {
rule: "optional",
type: "string",
name: "headIconURL",
id: 3
}, {
rule: "optional",
type: "int32",
name: "avatarID",
id: 4
} ]
}, {
name: "MsgClubMemberInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "optional",
type: "MsgClubDisplayInfo",
name: "displayInfo",
id: 2
}, {
rule: "optional",
type: "bool",
name: "online",
id: 3
}, {
rule: "optional",
type: "int32",
name: "role",
id: 4
}, {
rule: "optional",
type: "bool",
name: "allowCreateRoom",
id: 5
} ]
}, {
name: "MsgClubBaseInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "clubNumber",
id: 1
}, {
rule: "optional",
type: "string",
name: "clubName",
id: 2
}, {
rule: "optional",
type: "string",
name: "clubID",
id: 3
} ]
}, {
name: "MsgCubOperGenericReply",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "errorCode",
id: 1
}, {
rule: "optional",
type: "string",
name: "extra",
id: 2
} ]
}, {
name: "MsgClubInfo",
syntax: "proto2",
fields: [ {
rule: "optional",
type: "MsgClubBaseInfo",
name: "baseInfo",
id: 1
}, {
rule: "optional",
type: "string",
name: "creatorUserID",
id: 2
}, {
rule: "optional",
type: "int32",
name: "clubLevel",
id: 3
}, {
rule: "optional",
type: "int32",
name: "points",
id: 4
}, {
rule: "optional",
type: "int32",
name: "wanka",
id: 5
}, {
rule: "optional",
type: "int32",
name: "candy",
id: 6
}, {
rule: "optional",
type: "int32",
name: "maxMember",
id: 7
}, {
rule: "optional",
type: "bool",
name: "joinForbit",
id: 8
}, {
rule: "optional",
type: "bool",
name: "hasUnReadEvents",
id: 9
}, {
rule: "optional",
type: "string",
name: "createRoomOptions",
id: 10
}, {
rule: "optional",
type: "int32",
name: "memberCount",
id: 11
}, {
rule: "repeated",
type: "string",
name: "managers",
id: 12
}, {
rule: "optional",
type: "int32",
name: "createTime",
id: 13
} ]
}, {
name: "MsgClubLoadMyClubsReply",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgClubInfo",
name: "clubs",
id: 1
} ]
}, {
name: "MsgClubLoadUpdateReply",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgClubInfo",
name: "clubsUpdated",
id: 1
}, {
rule: "repeated",
type: "string",
name: "clubIDsRemoved",
id: 2
} ]
}, {
name: "MsgClubLoadMembersReply",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgClubMemberInfo",
name: "members",
id: 1
}, {
rule: "optional",
type: "int32",
name: "cursor",
id: 2
} ]
}, {
name: "MsgCreateClubReply",
syntax: "proto2",
fields: [ {
rule: "optional",
type: "MsgClubInfo",
name: "clubInfo",
id: 1
} ]
}, {
name: "MsgClubEvent",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "evtType",
id: 1
}, {
rule: "required",
type: "uint32",
name: "Id",
id: 2
}, {
rule: "required",
type: "uint32",
name: "generatedTime",
id: 3
}, {
rule: "optional",
type: "string",
name: "to",
id: 4
}, {
rule: "optional",
type: "bytes",
name: "content",
id: 5
}, {
rule: "optional",
type: "bool",
name: "unread",
id: 6
}, {
rule: "optional",
type: "bool",
name: "needHandle",
id: 7
}, {
rule: "optional",
type: "string",
name: "userID1",
id: 8
}, {
rule: "optional",
type: "MsgClubDisplayInfo",
name: "displayInfo1",
id: 9
}, {
rule: "optional",
type: "int32",
name: "approvalResult",
id: 10
} ]
}, {
name: "MsgClubLoadEventsReply",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgClubEvent",
name: "events",
id: 1
}, {
rule: "optional",
type: "int32",
name: "cursor",
id: 2
} ]
}, {
name: "MsgClubRoomInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "roomType",
id: 1
}, {
rule: "optional",
type: "string",
name: "roomRuleJSON",
id: 2
}, {
rule: "optional",
type: "int32",
name: "playerNumber",
id: 3
}, {
rule: "optional",
type: "int32",
name: "roomState",
id: 4
}, {
rule: "optional",
type: "string",
name: "roomNumber",
id: 5
}, {
rule: "optional",
type: "string",
name: "roomUUID",
id: 6
} ]
}, {
name: "MsgClubLoadRoomsReply",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgClubRoomInfo",
name: "rooms",
id: 1
}, {
rule: "optional",
type: "int32",
name: "cursor",
id: 2
}, {
rule: "optional",
type: "int32",
name: "totalRoomCount",
id: 3
} ]
}, {
name: "MsgClubFundEvent",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "evtType",
id: 1
}, {
rule: "required",
type: "uint32",
name: "generatedTime",
id: 2
}, {
rule: "required",
type: "string",
name: "userID",
id: 3
}, {
rule: "required",
type: "int32",
name: "amount",
id: 4
}, {
rule: "required",
type: "int32",
name: "total",
id: 5
} ]
}, {
name: "MsgClubLoadFundEventsReply",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgClubFundEvent",
name: "events",
id: 1
}, {
rule: "optional",
type: "int32",
name: "cursor",
id: 2
} ]
}, {
name: "MsgClubLoadReplayRoomsReply",
syntax: "proto2",
fields: [ {
rule: "optional",
type: "bytes",
name: "gZipBytes",
id: 1
}, {
rule: "optional",
type: "int32",
name: "cursor",
id: 2
} ]
}, {
name: "MsgClubApplyRecord",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "clubID",
id: 1
}, {
rule: "optional",
type: "string",
name: "clubNumber",
id: 2
}, {
rule: "optional",
type: "string",
name: "clubName",
id: 3
}, {
rule: "optional",
type: "int32",
name: "approvalResult",
id: 4
}, {
rule: "optional",
type: "int32",
name: "eventID",
id: 5
}, {
rule: "optional",
type: "int64",
name: "timeStamp",
id: 6
} ]
}, {
name: "MsgClubLoadApplyRecordReply",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgClubApplyRecord",
name: "records",
id: 1
}, {
rule: "optional",
type: "int32",
name: "cursor",
id: 2
} ]
}, {
name: "MsgClubNotify",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "notifyType",
id: 1
}, {
rule: "optional",
type: "string",
name: "clubID",
id: 2
}, {
rule: "optional",
type: "bytes",
name: "content",
id: 3
} ]
}, {
name: "MsgClubSetRoomOptions",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "options",
id: 1
} ]
} ],
enums: [ {
name: "ClubReplyCode",
syntax: "proto2",
values: [ {
name: "RCNone",
id: 0
}, {
name: "RCError",
id: 1
}, {
name: "RCOperation",
id: 2
} ]
}, {
name: "ClubRoleType",
syntax: "proto2",
values: [ {
name: "CRoleTypeNone",
id: 0
}, {
name: "CRoleTypeMember",
id: 1
}, {
name: "CRoleTypeCreator",
id: 2
}, {
name: "CRoleTypeMgr",
id: 3
} ]
}, {
name: "ClubOperError",
syntax: "proto2",
values: [ {
name: "CERR_OK",
id: 0
}, {
name: "CERR_Exceed_Max_Club_Count_Limit",
id: 1
}, {
name: "CERR_No_Valid_Club_Number",
id: 2
}, {
name: "CERR_Database_IO",
id: 3
}, {
name: "CERR_Encode_Decode",
id: 4
}, {
name: "CERR_Invalid_Input_Parameter",
id: 5
}, {
name: "CERR_Only_Creator_And_Mgr_Can_KickOut",
id: 6
}, {
name: "CERR_You_Already_In_Club",
id: 7
}, {
name: "CERR_You_Are_In_Club_Block_List",
id: 8
}, {
name: "CERR_You_Already_Applicate",
id: 9
}, {
name: "CERR_Invitee_Already_In_Club",
id: 10
}, {
name: "CERR_Invitee_Are_In_Club_Block_List",
id: 11
}, {
name: "CERR_Invitee_Already_Applicate",
id: 12
}, {
name: "CERR_Club_Not_Exist",
id: 13
}, {
name: "CERR_Only_Creator_Can_Invite",
id: 14
}, {
name: "CERR_Only_Creator_And_Mgr_Can_Approve",
id: 15
}, {
name: "CERR_No_Applicant",
id: 16
}, {
name: "CERR_Applicant_Already_In_Club",
id: 17
}, {
name: "CERR_Applicant_In_Club_Block_List",
id: 18
}, {
name: "CERR_Token_Invalid",
id: 19
}, {
name: "CERR_Club_Name_Too_Long",
id: 20
}, {
name: "CERR_Club_Name_Exist",
id: 21
}, {
name: "CERR_Club_Only_Owner_Can_Disband",
id: 22
}, {
name: "CERR_Owner_Can_not_quit",
id: 23
}, {
name: "CERR_User_Not_In_Club",
id: 24
}, {
name: "CERR_Club_Only_Owner_And_Mgr_Can_Set",
id: 25
}, {
name: "CERR_Club_Forbit_Join",
id: 26
}, {
name: "CERR_Input_Text_Too_Long",
id: 27
}, {
name: "CERR_Club_Has_Room_In_PlayingState",
id: 28
}, {
name: "CERR_Can_Not_Kick_Out_Creator_Or_Mgr",
id: 29
} ]
}, {
name: "ClubEventType",
syntax: "proto2",
values: [ {
name: "CEVT_None",
id: 0
}, {
name: "CEVT_ClubDisband",
id: 1
}, {
name: "CEVT_NewApplicant",
id: 2
}, {
name: "CEVT_Approval",
id: 3
}, {
name: "CEVT_Deny",
id: 4
}, {
name: "CEVT_Join",
id: 5
}, {
name: "CEVT_Quit",
id: 6
}, {
name: "CEVT_Kickout",
id: 7
} ]
}, {
name: "ClubFundEventType",
syntax: "proto2",
values: [ {
name: "CFET_None",
id: 0
}, {
name: "CFET_Add_By_Shop",
id: 1
}, {
name: "CFET_Award_By_System",
id: 3
}, {
name: "CFET_Gift_By_System",
id: 4
}, {
name: "CFET_Reduce_By_Room",
id: 5
}, {
name: "CFET_Add_By_Room",
id: 6
} ]
}, {
name: "ClubNotifyType",
syntax: "proto2",
values: [ {
name: "CNotify_None",
id: 0
}, {
name: "CNotify_Change_Member_Role",
id: 1
}, {
name: "CNotify_Allow_Member_Create_Room",
id: 2
}, {
name: "CNotify_New_Member_Apply",
id: 3
}, {
name: "CNotify_Member_Join_Approval",
id: 4
} ]
} ],
isNamespace: !0
}, {
name: "lobby",
fields: [],
syntax: "proto2",
messages: [ {
name: "LobbyMessage",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "Ops",
id: 1
}, {
rule: "optional",
type: "bytes",
name: "Data",
id: 2
} ]
}, {
name: "MsgCreateRoomReq",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "config",
id: 1
} ]
}, {
name: "UserProfile",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "optional",
type: "string",
name: "nickName",
id: 2
}, {
rule: "optional",
type: "string",
name: "avatarURL",
id: 3
} ]
}, {
name: "RoomInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "roomID",
id: 1
}, {
rule: "required",
type: "string",
name: "roomNumber",
id: 2
}, {
rule: "required",
type: "string",
name: "gameServerID",
id: 3
}, {
rule: "optional",
type: "int32",
name: "state",
id: 4
}, {
rule: "optional",
type: "string",
name: "config",
id: 5
}, {
rule: "optional",
type: "string",
name: "timeStamp",
id: 6
}, {
rule: "repeated",
type: "UserProfile",
name: "users",
id: 7
}, {
rule: "optional",
type: "int32",
name: "handStartted",
id: 8
}, {
rule: "optional",
type: "uint32",
name: "lastActiveTime",
id: 9
}, {
rule: "optional",
type: "string",
name: "propCfg",
id: 10
}, {
rule: "optional",
type: "string",
name: "moduleCfg",
id: 11
} ]
}, {
name: "MsgCreateRoomRsp",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "optional",
type: "RoomInfo",
name: "roomInfo",
id: 2
}, {
rule: "optional",
type: "string",
name: "retMsg",
id: 3
}, {
rule: "optional",
type: "int32",
name: "diamond",
id: 4
} ]
}, {
name: "MsgDeleteRoomReply",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
} ]
}, {
name: "MsgChat",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "scope",
id: 1
}, {
rule: "optional",
type: "string",
name: "from",
id: 2
}, {
rule: "optional",
type: "string",
name: "to",
id: 3
}, {
rule: "required",
type: "int32",
name: "dataType",
id: 4
}, {
rule: "required",
type: "bytes",
name: "data",
id: 5
}, {
rule: "optional",
type: "string",
name: "id",
id: 6
} ]
}, {
name: "MsgLoadUnreadChatReply",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgChat",
name: "msgs",
id: 1
}, {
rule: "optional",
type: "int32",
name: "cursor",
id: 2
} ]
}, {
name: "MsgSetReadChat",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "int32",
name: "ids",
id: 1
} ]
}, {
name: "RoomIDList",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "string",
name: "roomIDs",
id: 1
} ]
}, {
name: "MsgLoadRoomListRsp",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "repeated",
type: "RoomInfo",
name: "roomInfos",
id: 2
}, {
rule: "optional",
type: "string",
name: "retMsg",
id: 3
} ]
}, {
name: "MsgUpdateUserInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "location",
id: 1
} ]
}, {
name: "RoomCost",
syntax: "proto2",
fields: [ {
rule: "required",
type: "uint32",
name: "handNum",
id: 1
}, {
rule: "required",
type: "uint32",
name: "pay",
id: 2
} ]
}, {
name: "MsgRequestRoomInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "roomNumber",
id: 1
} ]
}, {
name: "MsgRequestRoomInfoRsp",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "optional",
type: "RoomInfo",
name: "roomInfo",
id: 2
}, {
rule: "optional",
type: "string",
name: "retMsg",
id: 7
} ]
}, {
name: "MsgUpdateRoomState",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "state",
id: 1
}, {
rule: "required",
type: "string",
name: "roomID",
id: 2
}, {
rule: "repeated",
type: "UserProfile",
name: "users",
id: 3
}, {
rule: "required",
type: "int32",
name: "handStartted",
id: 4
}, {
rule: "required",
type: "uint32",
name: "lastActiveTime",
id: 5
} ]
}, {
name: "MsgUpdateRoomList",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "RoomInfo",
name: "roomInfos",
id: 1
} ]
}, {
name: "MsgRequestUserScoreInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "optional",
type: "string",
name: "gameID",
id: 2
} ]
}, {
name: "MsgRequestUserScoreInfoRsp",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "maxWinScore",
id: 1
}, {
rule: "required",
type: "int32",
name: "customCount",
id: 2
}, {
rule: "optional",
type: "int32",
name: "maxWinMoney",
id: 3
}, {
rule: "optional",
type: "int32",
name: "coinCount",
id: 4
}, {
rule: "optional",
type: "string",
name: "retMsg",
id: 7
} ]
}, {
name: "MsgLoadUserHeadIconURI",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "string",
name: "userIDs",
id: 1
} ]
}, {
name: "MsgHeadIconInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 2
}, {
rule: "optional",
type: "string",
name: "headIconURI",
id: 3
} ]
}, {
name: "MsgLoadUserHeadIconURIReply",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "repeated",
type: "MsgHeadIconInfo",
name: "headIconInfos",
id: 2
}, {
rule: "optional",
type: "string",
name: "retMsg",
id: 3
} ]
}, {
name: "MsgUpdateUserDiamond",
syntax: "proto2",
fields: [ {
rule: "required",
type: "uint64",
name: "diamond",
id: 1
} ]
}, {
name: "MsgAccReplayRoom",
syntax: "proto2",
fields: [ {
rule: "required",
type: "bytes",
name: "replayRoomBytes",
id: 1
}, {
rule: "required",
type: "int32",
name: "recordRoomType",
id: 2
} ]
}, {
name: "MsgAccLoadReplayRoomsReply",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgAccReplayRoom",
name: "replayRooms",
id: 1
}, {
rule: "optional",
type: "int32",
name: "cursor",
id: 2
}, {
rule: "optional",
type: "int32",
name: "totalCursor",
id: 3
} ]
}, {
name: "MsgAccLoadReplayRecord",
syntax: "proto2",
fields: [ {
rule: "required",
type: "bytes",
name: "replayRecordBytes",
id: 1
}, {
rule: "required",
type: "string",
name: "roomJSONConfig",
id: 2
} ]
}, {
name: "UserInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "optional",
type: "string",
name: "openID",
id: 2
}, {
rule: "optional",
type: "string",
name: "nickName",
id: 3
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 4
}, {
rule: "optional",
type: "string",
name: "province",
id: 5
}, {
rule: "optional",
type: "string",
name: "city",
id: 6
}, {
rule: "optional",
type: "string",
name: "country",
id: 7
}, {
rule: "optional",
type: "string",
name: "headImgUrl",
id: 8
}, {
rule: "optional",
type: "string",
name: "phone",
id: 9
}, {
rule: "optional",
type: "int64",
name: "diamond",
id: 10
} ]
}, {
name: "MsgWxLogin",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "code",
id: 1
}, {
rule: "required",
type: "string",
name: "encrypteddata",
id: 2
}, {
rule: "required",
type: "string",
name: "iv",
id: 3
} ]
}, {
name: "MsgLoginReply",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "optional",
type: "string",
name: "token",
id: 2
}, {
rule: "optional",
type: "UserInfo",
name: "userInfo",
id: 3
}, {
rule: "optional",
type: "RoomInfo",
name: "lastRoomInfo",
id: 4
} ]
}, {
name: "ClientInfo",
syntax: "proto2",
fields: [ {
rule: "optional",
type: "string",
name: "qMod",
id: 1
}, {
rule: "optional",
type: "string",
name: "modV",
id: 2
}, {
rule: "optional",
type: "string",
name: "csVer",
id: 3
}, {
rule: "optional",
type: "string",
name: "lobbyVer",
id: 4
}, {
rule: "optional",
type: "string",
name: "operatingSystem",
id: 5
}, {
rule: "optional",
type: "string",
name: "operatingSystemFamily",
id: 6
}, {
rule: "optional",
type: "string",
name: "deviceUniqueIdentifier",
id: 7
}, {
rule: "optional",
type: "string",
name: "deviceName",
id: 8
}, {
rule: "optional",
type: "string",
name: "deviceModel",
id: 9
}, {
rule: "optional",
type: "string",
name: "network",
id: 10
} ]
}, {
name: "MsgRegisterReply",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "optional",
type: "string",
name: "token",
id: 2
} ]
}, {
name: "MsgQuicklyLoginReply",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "optional",
type: "string",
name: "token",
id: 2
}, {
rule: "optional",
type: "string",
name: "account",
id: 3
}, {
rule: "optional",
type: "UserInfo",
name: "userInfo",
id: 4
}, {
rule: "optional",
type: "RoomInfo",
name: "lastRoomInfo",
id: 5
} ]
}, {
name: "MsgWebsocketConnectReply",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
} ]
}, {
name: "MsgReplayPlayerInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "userID",
id: 1
}, {
rule: "optional",
type: "string",
name: "nick",
id: 2
}, {
rule: "required",
type: "int32",
name: "chairID",
id: 3
}, {
rule: "optional",
type: "int32",
name: "totalScore",
id: 4
}, {
rule: "optional",
type: "uint32",
name: "gender",
id: 5
}, {
rule: "optional",
type: "string",
name: "headIconURI",
id: 6
}, {
rule: "optional",
type: "int32",
name: "avatarID",
id: 7
} ]
}, {
name: "MsgReplayPlayerScoreSummary",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "chairID",
id: 1
}, {
rule: "required",
type: "int32",
name: "score",
id: 2
}, {
rule: "required",
type: "int32",
name: "winType",
id: 3
} ]
}, {
name: "MsgReplayRecordSummary",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "recordUUID",
id: 1
}, {
rule: "repeated",
type: "MsgReplayPlayerScoreSummary",
name: "playerScores",
id: 2
}, {
rule: "required",
type: "uint32",
name: "endTime",
id: 3
}, {
rule: "optional",
type: "string",
name: "shareAbleID",
id: 4
}, {
rule: "optional",
type: "uint32",
name: "startTime",
id: 5
} ]
}, {
name: "MsgReplayRoom",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "recordRoomType",
id: 1
}, {
rule: "required",
type: "uint32",
name: "startTime",
id: 2
}, {
rule: "required",
type: "uint32",
name: "endTime",
id: 3
}, {
rule: "required",
type: "string",
name: "roomNumber",
id: 4
}, {
rule: "repeated",
type: "MsgReplayPlayerInfo",
name: "players",
id: 5
}, {
rule: "repeated",
type: "MsgReplayRecordSummary",
name: "records",
id: 6
}, {
rule: "optional",
type: "string",
name: "ownerUserID",
id: 7
} ]
}, {
name: "MailAttachments",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "type",
id: 1
}, {
rule: "required",
type: "int32",
name: "num",
id: 2
}, {
rule: "optional",
type: "bool",
name: "isReceive",
id: 3
} ]
}, {
name: "MsgMail",
syntax: "proto2",
fields: [ {
rule: "required",
type: "string",
name: "id",
id: 1
}, {
rule: "optional",
type: "string",
name: "title",
id: 2
}, {
rule: "optional",
type: "string",
name: "content",
id: 3
}, {
rule: "optional",
type: "MailAttachments",
name: "attachments",
id: 4
}, {
rule: "optional",
type: "bool",
name: "isRead",
id: 5
}, {
rule: "optional",
type: "int64",
name: "timeStamp",
id: 6
} ]
}, {
name: "MsgLoadMail",
syntax: "proto2",
fields: [ {
rule: "repeated",
type: "MsgMail",
name: "mails",
id: 1
}, {
rule: "optional",
type: "int32",
name: "cursor",
id: 2
} ]
}, {
name: "MsgShareInfo",
syntax: "proto2",
fields: [ {
rule: "required",
type: "int32",
name: "result",
id: 1
}, {
rule: "optional",
type: "string",
name: "text",
id: 2
}, {
rule: "optional",
type: "string",
name: "multimedia",
id: 3
} ]
} ],
enums: [ {
name: "MsgError",
syntax: "proto2",
values: [ {
name: "ErrSuccess",
id: 0
}, {
name: "ErrDecode",
id: 1
}, {
name: "ErrEncode",
id: 2
}, {
name: "ErrRoomExist",
id: 3
}, {
name: "ErrNoRoomConfig",
id: 4
}, {
name: "ErrServerIsFull",
id: 5
}, {
name: "ErrDecodeRoomConfig",
id: 6
}, {
name: "ErrRoomNotExist",
id: 7
}, {
name: "ErrDatabase",
id: 8
}, {
name: "ErrRequestGameServerTimeOut",
id: 9
}, {
name: "ErrWaitGameServerSN",
id: 10
}, {
name: "ErrRoomIDIsEmpty",
id: 11
}, {
name: "ErrNotRoomCreater",
id: 12
}, {
name: "ErrGameIsPlaying",
id: 13
}, {
name: "ErrTokenIsEmpty",
id: 14
}, {
name: "ErrUserIdIsEmpty",
id: 15
}, {
name: "ErrRoomNumberIsEmpty",
id: 16
}, {
name: "ErrRoomNumberNotExist",
id: 17
}, {
name: "ErrGameServerIDNotExist",
id: 18
}, {
name: "ErrRoomCountIsOutOfLimit",
id: 19
}, {
name: "ErrRequestInvalidParam",
id: 20
}, {
name: "ErrTakeoffDiamondFailedNotEnough",
id: 21
}, {
name: "ErrTakeoffDiamondFailedIO",
id: 22
}, {
name: "ErrTakeoffDiamondFailedRepeat",
id: 23
}, {
name: "ErrGameServerUnsupportRoomType",
id: 24
}, {
name: "ErrGameServerRoomExist",
id: 25
}, {
name: "ErrGameServerNoRoomConfig",
id: 26
}, {
name: "ErrGameServerDecodeRoomConfig",
id: 27
}, {
name: "ErrGameServerRoomNotExist",
id: 28
}, {
name: "ErrUserInOtherRoom",
id: 29
}, {
name: "ErrRoomIsFull",
id: 30
}, {
name: "ErrUserInBlacklist",
id: 31
}, {
name: "ErrClubIDIsEmtpy",
id: 32
}, {
name: "ErrRoomPriceCfgNotExist",
id: 33
}, {
name: "ErrUserCreateRoomLock",
id: 34
}, {
name: "ErrGenerateRoomNumber",
id: 35
}, {
name: "ErrIsNeedUpdate",
id: 36
}, {
name: "ErrOnlyClubCreatorOrManagerAllowCreateRoom",
id: 37
}, {
name: "ErrOnlyClubCreatorOrManagerAllowDeleteRoom",
id: 38
}, {
name: "ErrNotClubMember",
id: 39
} ]
}, {
name: "MessageCode",
syntax: "proto2",
values: [ {
name: "OPInvalid",
id: 0
}, {
name: "OPConnectReply",
id: 1
}, {
name: "OPChat",
id: 2
}, {
name: "OPUpdateDiamond",
id: 3
}, {
name: "OPMail",
id: 4
}, {
name: "OPClubNotify",
id: 5
}, {
name: "OPPing",
id: 100
}, {
name: "OPPong",
id: 101
} ]
}, {
name: "RoomType",
syntax: "proto2",
values: [ {
name: "DafengMJ",
id: 1
}, {
name: "GuanDang",
id: 2
}, {
name: "DongTaiMJ",
id: 3
}, {
name: "YanChengMJ",
id: 4
}, {
name: "ShaoGuanMJ",
id: 5
}, {
name: "NingAnMJ",
id: 6
}, {
name: "XinJiangGH",
id: 7
}, {
name: "DafengGZ",
id: 8
}, {
name: "Dafeng7w523",
id: 9
}, {
name: "NiuNiu",
id: 10
}, {
name: "DDZ",
id: 11
}, {
name: "XueLiuMJ",
id: 12
}, {
name: "LanZhouMJ",
id: 13
}, {
name: "LLanZouMJ",
id: 14
}, {
name: "ZhangYeMJ",
id: 15
} ]
}, {
name: "OpenRoomType",
syntax: "proto2",
values: [ {
name: "CreateAndEnter",
id: 1
}, {
name: "CreateForOther",
id: 2
} ]
}, {
name: "ChatDataType",
syntax: "proto2",
values: [ {
name: "Text",
id: 0
}, {
name: "Emoji",
id: 1
}, {
name: "Voice",
id: 2
}, {
name: "Buildin",
id: 3
} ]
}, {
name: "ChatScopeType",
syntax: "proto2",
values: [ {
name: "UniCast",
id: 0
}, {
name: "InRoom",
id: 1
}, {
name: "InServer",
id: 2
}, {
name: "InAllServers",
id: 3
} ]
}, {
name: "LoginState",
syntax: "proto2",
values: [ {
name: "Faild",
id: 0
}, {
name: "Success",
id: 1
}, {
name: "UserInBlacklist",
id: 2
}, {
name: "ParseTokenError",
id: 3
} ]
}, {
name: "ActivityType",
syntax: "proto2",
values: [ {
name: "Email",
id: 1
} ]
}, {
name: "LoginError",
syntax: "proto2",
values: [ {
name: "ErrLoginSuccess",
id: 0
}, {
name: "ErrParamDecode",
id: 1
}, {
name: "ErrParamInvalidCode",
id: 2
}, {
name: "ErrParamInvalidEncrypteddata",
id: 3
}, {
name: "ErrParamInvalidIv",
id: 4
}, {
name: "ErrWxAuthFailed",
id: 5
}, {
name: "ErrDecodeUserInfoFailed",
id: 6
}, {
name: "ErrParamAccountIsEmpty",
id: 7
}, {
name: "ErrParamPasswordIsEmpty",
id: 8
}, {
name: "ErrAccountNotExist",
id: 9
}, {
name: "ErrAccountNotSetPassword",
id: 10
}, {
name: "ErrPasswordNotMatch",
id: 11
} ]
}, {
name: "RegisterError",
syntax: "proto2",
values: [ {
name: "ErrRegisterSuccess",
id: 0
}, {
name: "ErrAccountIsEmpty",
id: 1
}, {
name: "ErrPasswordIsEmpty",
id: 2
}, {
name: "ErrAccountExist",
id: 3
}, {
name: "ErrWriteDatabaseFailed",
id: 4
} ]
}, {
name: "WebsocketConnectError",
syntax: "proto2",
values: [ {
name: "ConnectSuccess",
id: 0
}, {
name: "ParseTokenFailed",
id: 1
} ]
}, {
name: "MailAttachmentType",
syntax: "proto2",
values: [ {
name: "Diamond",
id: 1
} ]
} ],
isNamespace: !0
} ],
isNamespace: !0
}).build();
cc._RF.pop();
}, {
protobuf: "protobuf"
} ],
protobuf: [ function(e, t, o) {
(function(o) {
"use strict";
cc._RF.push(t, "45375Ex2UFN64n8mLxU2G3g", "protobuf");
var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
(function(o, i) {
"function" == typeof define && define.amd ? define([ "bytebuffer" ], i) : "function" == typeof e && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && t && t.exports ? t.exports = i(e("bytebuffer"), !0) : (o.dcodeIO = o.dcodeIO || {}).ProtoBuf = i(o.dcodeIO.ByteBuffer);
})(void 0, function(t, i) {
var r = {};
r.ByteBuffer = t;
r.Long = t.Long || null;
r.VERSION = "5.0.3";
r.WIRE_TYPES = {};
r.WIRE_TYPES.VARINT = 0;
r.WIRE_TYPES.BITS64 = 1;
r.WIRE_TYPES.LDELIM = 2;
r.WIRE_TYPES.STARTGROUP = 3;
r.WIRE_TYPES.ENDGROUP = 4;
r.WIRE_TYPES.BITS32 = 5;
r.PACKABLE_WIRE_TYPES = [ r.WIRE_TYPES.VARINT, r.WIRE_TYPES.BITS64, r.WIRE_TYPES.BITS32 ];
r.TYPES = {
int32: {
name: "int32",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: 0
},
uint32: {
name: "uint32",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: 0
},
sint32: {
name: "sint32",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: 0
},
int64: {
name: "int64",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: r.Long ? r.Long.ZERO : void 0
},
uint64: {
name: "uint64",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: r.Long ? r.Long.UZERO : void 0
},
sint64: {
name: "sint64",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: r.Long ? r.Long.ZERO : void 0
},
bool: {
name: "bool",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: !1
},
double: {
name: "double",
wireType: r.WIRE_TYPES.BITS64,
defaultValue: 0
},
string: {
name: "string",
wireType: r.WIRE_TYPES.LDELIM,
defaultValue: ""
},
bytes: {
name: "bytes",
wireType: r.WIRE_TYPES.LDELIM,
defaultValue: null
},
fixed32: {
name: "fixed32",
wireType: r.WIRE_TYPES.BITS32,
defaultValue: 0
},
sfixed32: {
name: "sfixed32",
wireType: r.WIRE_TYPES.BITS32,
defaultValue: 0
},
fixed64: {
name: "fixed64",
wireType: r.WIRE_TYPES.BITS64,
defaultValue: r.Long ? r.Long.UZERO : void 0
},
sfixed64: {
name: "sfixed64",
wireType: r.WIRE_TYPES.BITS64,
defaultValue: r.Long ? r.Long.ZERO : void 0
},
float: {
name: "float",
wireType: r.WIRE_TYPES.BITS32,
defaultValue: 0
},
enum: {
name: "enum",
wireType: r.WIRE_TYPES.VARINT,
defaultValue: 0
},
message: {
name: "message",
wireType: r.WIRE_TYPES.LDELIM,
defaultValue: null
},
group: {
name: "group",
wireType: r.WIRE_TYPES.STARTGROUP,
defaultValue: null
}
};
r.MAP_KEY_TYPES = [ r.TYPES.int32, r.TYPES.sint32, r.TYPES.sfixed32, r.TYPES.uint32, r.TYPES.fixed32, r.TYPES.int64, r.TYPES.sint64, r.TYPES.sfixed64, r.TYPES.uint64, r.TYPES.fixed64, r.TYPES.bool, r.TYPES.string, r.TYPES.bytes ];
r.ID_MIN = 1;
r.ID_MAX = 536870911;
r.convertFieldsToCamelCase = !1;
r.populateAccessors = !0;
r.populateDefaults = !0;
r.Util = function() {
var t = {};
t.IS_NODE = !("object" !== ("undefined" == typeof o ? "undefined" : n(o)) || o + "" != "[object process]" || o.browser);
t.XHR = function() {
for (var e = [ function() {
return new XMLHttpRequest();
}, function() {
return new ActiveXObject("Msxml2.XMLHTTP");
}, function() {
return new ActiveXObject("Msxml3.XMLHTTP");
}, function() {
return new ActiveXObject("Microsoft.XMLHTTP");
} ], t = null, o = 0; o < e.length; o++) {
try {
t = e[o]();
} catch (e) {
continue;
}
break;
}
if (!t) throw Error("XMLHttpRequest is not supported");
return t;
};
t.fetch = function(o, n) {
n && "function" != typeof n && (n = null);
if (t.IS_NODE) {
var i = e("fs");
if (n) i.readFile(o, function(e, t) {
n(e ? null : "" + t);
}); else try {
return i.readFileSync(o);
} catch (e) {
return null;
}
} else {
var r = t.XHR();
r.open("GET", o, !!n);
r.setRequestHeader("Accept", "text/plain");
"function" == typeof r.overrideMimeType && r.overrideMimeType("text/plain");
if (!n) {
r.send(null);
return 200 == r.status || 0 == r.status && "string" == typeof r.responseText ? r.responseText : null;
}
r.onreadystatechange = function() {
4 == r.readyState && (200 == r.status || 0 == r.status && "string" == typeof r.responseText ? n(r.responseText) : n(null));
};
if (4 == r.readyState) return;
r.send(null);
}
};
t.toCamelCase = function(e) {
return e.replace(/_([a-zA-Z])/g, function(e, t) {
return t.toUpperCase();
});
};
return t;
}();
r.Lang = {
DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
RULE: /^(?:required|optional|repeated|map)$/,
TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
NUMBER_OCT: /^0[0-7]+$/,
NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
BOOL: /^(?:true|false)$/i,
ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
WHITESPACE: /\s/,
STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
};
r.Reflect = function(e) {
var o = {}, i = function(e, t, o) {
this.builder = e;
this.parent = t;
this.name = o;
this.className;
}, r = i.prototype;
r.fqn = function() {
for (var e = this.name, t = this; ;) {
if (null == (t = t.parent)) break;
e = t.name + "." + e;
}
return e;
};
r.toString = function(e) {
return (e ? this.className + " " : "") + this.fqn();
};
r.build = function() {
throw Error(this.toString(!0) + " cannot be built directly");
};
o.T = i;
var a = function(e, t, o, n, r) {
i.call(this, e, t, o);
this.className = "Namespace";
this.children = [];
this.options = n || {};
this.syntax = r || "proto2";
}, s = a.prototype = Object.create(i.prototype);
s.getChildren = function(e) {
if (null == (e = e || null)) return this.children.slice();
for (var t = [], o = 0, n = this.children.length; o < n; ++o) this.children[o] instanceof e && t.push(this.children[o]);
return t;
};
s.addChild = function(e) {
var t;
if (t = this.getChild(e.name)) if (t instanceof d.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName; else {
if (!(e instanceof d.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
e.name = e.originalName;
}
this.children.push(e);
};
s.getChild = function(e) {
for (var t = "number" == typeof e ? "id" : "name", o = 0, n = this.children.length; o < n; ++o) if (this.children[o][t] === e) return this.children[o];
return null;
};
s.resolve = function(e, t) {
var n, i = "string" == typeof e ? e.split(".") : e, r = this, a = 0;
if ("" === i[a]) {
for (;null !== r.parent; ) r = r.parent;
a++;
}
do {
do {
if (!(r instanceof o.Namespace)) {
r = null;
break;
}
if (!(n = r.getChild(i[a])) || !(n instanceof o.T) || t && !(n instanceof o.Namespace)) {
r = null;
break;
}
r = n;
a++;
} while (a < i.length);
if (null != r) break;
if (null !== this.parent) return this.parent.resolve(e, t);
} while (null != r);
return r;
};
s.qn = function(e) {
var t = [], n = e;
do {
t.unshift(n.name);
n = n.parent;
} while (null !== n);
for (var i = 1; i <= t.length; i++) {
var r = t.slice(t.length - i);
if (e === this.resolve(r, e instanceof o.Namespace)) return r.join(".");
}
return e.fqn();
};
s.build = function() {
for (var e, t = {}, o = this.children, n = 0, i = o.length; n < i; ++n) (e = o[n]) instanceof a && (t[e.name] = e.build());
Object.defineProperty && Object.defineProperty(t, "$options", {
value: this.buildOpt()
});
return t;
};
s.buildOpt = function() {
for (var e = {}, t = Object.keys(this.options), o = 0, n = t.length; o < n; ++o) {
var i = t[o], r = this.options[t[o]];
e[i] = r;
}
return e;
};
s.getOption = function(e) {
return "undefined" == typeof e ? this.options : "undefined" != typeof this.options[e] ? this.options[e] : null;
};
o.Namespace = a;
var l = function(t, o, n, i, r) {
this.type = t;
this.resolvedType = o;
this.isMapKey = n;
this.syntax = i;
this.name = r;
if (n && e.MAP_KEY_TYPES.indexOf(t) < 0) throw Error("Invalid map key type: " + t.name);
}, u = l.prototype;
l.defaultFieldValue = function(o) {
"string" == typeof o && (o = e.TYPES[o]);
if ("undefined" == typeof o.defaultValue) throw Error("default value for type " + o.name + " is not supported");
return o == e.TYPES.bytes ? new t(0) : o.defaultValue;
};
function c(t, o) {
if (t && "number" == typeof t.low && "number" == typeof t.high && "boolean" == typeof t.unsigned && t.low == t.low && t.high == t.high) return new e.Long(t.low, t.high, "undefined" == typeof o ? t.unsigned : o);
if ("string" == typeof t) return e.Long.fromString(t, o || !1, 10);
if ("number" == typeof t) return e.Long.fromNumber(t, o || !1);
throw Error("not convertible to Long");
}
u.toString = function() {
return (this.name || "") + (this.isMapKey ? "map" : "value") + " element";
};
u.verifyValue = function(o) {
var i = this;
function r(e, t) {
throw Error("Illegal value for " + i.toString(!0) + " of type " + i.type.name + ": " + e + " (" + t + ")");
}
switch (this.type) {
case e.TYPES.int32:
case e.TYPES.sint32:
case e.TYPES.sfixed32:
("number" != typeof o || o == o && o % 1 != 0) && r("undefined" == typeof o ? "undefined" : n(o), "not an integer");
return o > 4294967295 ? 0 | o : o;

case e.TYPES.uint32:
case e.TYPES.fixed32:
("number" != typeof o || o == o && o % 1 != 0) && r("undefined" == typeof o ? "undefined" : n(o), "not an integer");
return o < 0 ? o >>> 0 : o;

case e.TYPES.int64:
case e.TYPES.sint64:
case e.TYPES.sfixed64:
if (e.Long) try {
return c(o, !1);
} catch (e) {
r("undefined" == typeof o ? "undefined" : n(o), e.message);
} else r("undefined" == typeof o ? "undefined" : n(o), "requires Long.js");

case e.TYPES.uint64:
case e.TYPES.fixed64:
if (e.Long) try {
return c(o, !0);
} catch (e) {
r("undefined" == typeof o ? "undefined" : n(o), e.message);
} else r("undefined" == typeof o ? "undefined" : n(o), "requires Long.js");

case e.TYPES.bool:
"boolean" != typeof o && r("undefined" == typeof o ? "undefined" : n(o), "not a boolean");
return o;

case e.TYPES.float:
case e.TYPES.double:
"number" != typeof o && r("undefined" == typeof o ? "undefined" : n(o), "not a number");
return o;

case e.TYPES.string:
"string" == typeof o || o && o instanceof String || r("undefined" == typeof o ? "undefined" : n(o), "not a string");
return "" + o;

case e.TYPES.bytes:
return t.isByteBuffer(o) ? o : t.wrap(o, "base64");

case e.TYPES.enum:
var a = this.resolvedType.getChildren(e.Reflect.Enum.Value);
for (l = 0; l < a.length; l++) {
if (a[l].name == o) return a[l].id;
if (a[l].id == o) return a[l].id;
}
if ("proto3" === this.syntax) {
("number" != typeof o || o == o && o % 1 != 0) && r("undefined" == typeof o ? "undefined" : n(o), "not an integer");
(o > 4294967295 || o < 0) && r("undefined" == typeof o ? "undefined" : n(o), "not in range for uint32");
return o;
}
r(o, "not a valid enum value");

case e.TYPES.group:
case e.TYPES.message:
o && "object" === ("undefined" == typeof o ? "undefined" : n(o)) || r("undefined" == typeof o ? "undefined" : n(o), "object expected");
if (o instanceof this.resolvedType.clazz) return o;
if (o instanceof e.Builder.Message) {
var s = {};
for (var l in o) o.hasOwnProperty(l) && (s[l] = o[l]);
o = s;
}
return new this.resolvedType.clazz(o);
}
throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + o + " (undefined type " + this.type + ")");
};
u.calculateLength = function(o, n) {
if (null === n) return 0;
var i;
switch (this.type) {
case e.TYPES.int32:
return n < 0 ? t.calculateVarint64(n) : t.calculateVarint32(n);

case e.TYPES.uint32:
return t.calculateVarint32(n);

case e.TYPES.sint32:
return t.calculateVarint32(t.zigZagEncode32(n));

case e.TYPES.fixed32:
case e.TYPES.sfixed32:
case e.TYPES.float:
return 4;

case e.TYPES.int64:
case e.TYPES.uint64:
return t.calculateVarint64(n);

case e.TYPES.sint64:
return t.calculateVarint64(t.zigZagEncode64(n));

case e.TYPES.fixed64:
case e.TYPES.sfixed64:
return 8;

case e.TYPES.bool:
return 1;

case e.TYPES.enum:
return t.calculateVarint32(n);

case e.TYPES.double:
return 8;

case e.TYPES.string:
i = t.calculateUTF8Bytes(n);
return t.calculateVarint32(i) + i;

case e.TYPES.bytes:
if (n.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + n.remaining() + " bytes remaining");
return t.calculateVarint32(n.remaining()) + n.remaining();

case e.TYPES.message:
i = this.resolvedType.calculate(n);
return t.calculateVarint32(i) + i;

case e.TYPES.group:
return (i = this.resolvedType.calculate(n)) + t.calculateVarint32(o << 3 | e.WIRE_TYPES.ENDGROUP);
}
throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + n + " (unknown type)");
};
u.encodeValue = function(o, n, i) {
if (null === n) return i;
switch (this.type) {
case e.TYPES.int32:
n < 0 ? i.writeVarint64(n) : i.writeVarint32(n);
break;

case e.TYPES.uint32:
i.writeVarint32(n);
break;

case e.TYPES.sint32:
i.writeVarint32ZigZag(n);
break;

case e.TYPES.fixed32:
i.writeUint32(n);
break;

case e.TYPES.sfixed32:
i.writeInt32(n);
break;

case e.TYPES.int64:
case e.TYPES.uint64:
i.writeVarint64(n);
break;

case e.TYPES.sint64:
i.writeVarint64ZigZag(n);
break;

case e.TYPES.fixed64:
i.writeUint64(n);
break;

case e.TYPES.sfixed64:
i.writeInt64(n);
break;

case e.TYPES.bool:
"string" == typeof n ? i.writeVarint32("false" === n.toLowerCase() ? 0 : !!n) : i.writeVarint32(n ? 1 : 0);
break;

case e.TYPES.enum:
i.writeVarint32(n);
break;

case e.TYPES.float:
i.writeFloat32(n);
break;

case e.TYPES.double:
i.writeFloat64(n);
break;

case e.TYPES.string:
i.writeVString(n);
break;

case e.TYPES.bytes:
if (n.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + n.remaining() + " bytes remaining");
var r = n.offset;
i.writeVarint32(n.remaining());
i.append(n);
n.offset = r;
break;

case e.TYPES.message:
var a = new t().LE();
this.resolvedType.encode(n, a);
i.writeVarint32(a.offset);
i.append(a.flip());
break;

case e.TYPES.group:
this.resolvedType.encode(n, i);
i.writeVarint32(o << 3 | e.WIRE_TYPES.ENDGROUP);
break;

default:
throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + n + " (unknown type)");
}
return i;
};
u.decode = function(t, o, n) {
if (o != this.type.wireType) throw Error("Unexpected wire type for element");
var i, r;
switch (this.type) {
case e.TYPES.int32:
return 0 | t.readVarint32();

case e.TYPES.uint32:
return t.readVarint32() >>> 0;

case e.TYPES.sint32:
return 0 | t.readVarint32ZigZag();

case e.TYPES.fixed32:
return t.readUint32() >>> 0;

case e.TYPES.sfixed32:
return 0 | t.readInt32();

case e.TYPES.int64:
return t.readVarint64();

case e.TYPES.uint64:
return t.readVarint64().toUnsigned();

case e.TYPES.sint64:
return t.readVarint64ZigZag();

case e.TYPES.fixed64:
return t.readUint64();

case e.TYPES.sfixed64:
return t.readInt64();

case e.TYPES.bool:
return !!t.readVarint32();

case e.TYPES.enum:
return t.readVarint32();

case e.TYPES.float:
return t.readFloat();

case e.TYPES.double:
return t.readDouble();

case e.TYPES.string:
return t.readVString();

case e.TYPES.bytes:
r = t.readVarint32();
if (t.remaining() < r) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + r + " required but got only " + t.remaining());
(i = t.clone()).limit = i.offset + r;
t.offset += r;
return i;

case e.TYPES.message:
r = t.readVarint32();
return this.resolvedType.decode(t, r);

case e.TYPES.group:
return this.resolvedType.decode(t, -1, n);
}
throw Error("[INTERNAL] Illegal decode type");
};
u.valueFromString = function(o) {
if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");
switch (this.type) {
case e.TYPES.int32:
case e.TYPES.sint32:
case e.TYPES.sfixed32:
case e.TYPES.uint32:
case e.TYPES.fixed32:
return this.verifyValue(parseInt(o));

case e.TYPES.int64:
case e.TYPES.sint64:
case e.TYPES.sfixed64:
case e.TYPES.uint64:
case e.TYPES.fixed64:
return this.verifyValue(o);

case e.TYPES.bool:
return "true" === o;

case e.TYPES.string:
return this.verifyValue(o);

case e.TYPES.bytes:
return t.fromBinary(o);
}
};
u.valueToString = function(t) {
if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
return this.type === e.TYPES.bytes ? t.toString("binary") : t.toString();
};
o.Element = l;
var d = function(e, t, o, n, i, r) {
a.call(this, e, t, o, n, r);
this.className = "Message";
this.extensions = void 0;
this.clazz = null;
this.isGroup = !!i;
this._fields = null;
this._fieldsById = null;
this._fieldsByName = null;
}, h = d.prototype = Object.create(a.prototype);
h.build = function(o) {
if (this.clazz && !o) return this.clazz;
var i = function(e, o) {
var i = o.getChildren(e.Reflect.Message.Field), r = o.getChildren(e.Reflect.Message.OneOf), a = function a(s, l) {
e.Builder.Message.call(this);
for (var u = 0, c = r.length; u < c; ++u) this[r[u].name] = null;
for (u = 0, c = i.length; u < c; ++u) {
var d = i[u];
this[d.name] = d.repeated ? [] : d.map ? new e.Map(d) : null;
!d.required && "proto3" !== o.syntax || null === d.defaultValue || (this[d.name] = d.defaultValue);
}
if (arguments.length > 0) {
var h;
if (1 !== arguments.length || null === s || "object" !== ("undefined" == typeof s ? "undefined" : n(s)) || !("function" != typeof s.encode || s instanceof a) || Array.isArray(s) || s instanceof e.Map || t.isByteBuffer(s) || s instanceof ArrayBuffer || e.Long && s instanceof e.Long) for (u = 0, 
c = arguments.length; u < c; ++u) "undefined" != typeof (h = arguments[u]) && this.$set(i[u].name, h); else this.$set(s);
}
}, s = a.prototype = Object.create(e.Builder.Message.prototype);
s.add = function(t, n, i) {
var r = o._fieldsByName[t];
if (!i) {
if (!r) throw Error(this + "#" + t + " is undefined");
if (!(r instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: " + r.toString(!0));
if (!r.repeated) throw Error(this + "#" + t + " is not a repeated field");
n = r.verifyValue(n, !0);
}
null === this[t] && (this[t] = []);
this[t].push(n);
return this;
};
s.$add = s.add;
s.set = function(t, i, r) {
if (t && "object" === ("undefined" == typeof t ? "undefined" : n(t))) {
r = i;
for (var a in t) t.hasOwnProperty(a) && "undefined" != typeof (i = t[a]) && void 0 === o._oneofsByName[a] && this.$set(a, i, r);
return this;
}
var s = o._fieldsByName[t];
if (r) this[t] = i; else {
if (!s) throw Error(this + "#" + t + " is not a field: undefined");
if (!(s instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: " + s.toString(!0));
this[s.name] = i = s.verifyValue(i);
}
if (s && s.oneof) {
var l = this[s.oneof.name];
if (null !== i) {
null !== l && l !== s.name && (this[l] = null);
this[s.oneof.name] = s.name;
} else l === t && (this[s.oneof.name] = null);
}
return this;
};
s.$set = s.set;
s.get = function(t, n) {
if (n) return this[t];
var i = o._fieldsByName[t];
if (!(i && i instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: undefined");
if (!(i instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: " + i.toString(!0));
return this[i.name];
};
s.$get = s.get;
for (var l = 0; l < i.length; l++) {
var u = i[l];
u instanceof e.Reflect.Message.ExtensionField || o.builder.options.populateAccessors && function(e) {
var t = e.originalName.replace(/(_[a-zA-Z])/g, function(e) {
return e.toUpperCase().replace("_", "");
});
t = t.substring(0, 1).toUpperCase() + t.substring(1);
var n = e.originalName.replace(/([A-Z])/g, function(e) {
return "_" + e;
}), i = function(t, o) {
this[e.name] = o ? t : e.verifyValue(t);
return this;
}, r = function() {
return this[e.name];
};
null === o.getChild("set" + t) && (s["set" + t] = i);
null === o.getChild("set_" + n) && (s["set_" + n] = i);
null === o.getChild("get" + t) && (s["get" + t] = r);
null === o.getChild("get_" + n) && (s["get_" + n] = r);
}(u);
}
s.encode = function(e, n) {
"boolean" == typeof e && (n = e, e = void 0);
var i = !1;
e || (e = new t(), i = !0);
var r = e.littleEndian;
try {
o.encode(this, e.LE(), n);
return (i ? e.flip() : e).LE(r);
} catch (t) {
e.LE(r);
throw t;
}
};
a.encode = function(e, t, o) {
return new a(e).encode(t, o);
};
s.calculate = function() {
return o.calculate(this);
};
s.encodeDelimited = function(e, n) {
var i = !1;
e || (e = new t(), i = !0);
var r = new t().LE();
o.encode(this, r, n).flip();
e.writeVarint32(r.remaining());
e.append(r);
return i ? e.flip() : e;
};
s.encodeAB = function() {
try {
return this.encode().toArrayBuffer();
} catch (e) {
e.encoded && (e.encoded = e.encoded.toArrayBuffer());
throw e;
}
};
s.toArrayBuffer = s.encodeAB;
s.encodeNB = function() {
try {
return this.encode().toBuffer();
} catch (e) {
e.encoded && (e.encoded = e.encoded.toBuffer());
throw e;
}
};
s.toBuffer = s.encodeNB;
s.encode64 = function() {
try {
return this.encode().toBase64();
} catch (e) {
e.encoded && (e.encoded = e.encoded.toBase64());
throw e;
}
};
s.toBase64 = s.encode64;
s.encodeHex = function() {
try {
return this.encode().toHex();
} catch (e) {
e.encoded && (e.encoded = e.encoded.toHex());
throw e;
}
};
s.toHex = s.encodeHex;
function c(o, i, r, a) {
if (null === o || "object" !== ("undefined" == typeof o ? "undefined" : n(o))) {
if (a && a instanceof e.Reflect.Enum) {
var s = e.Reflect.Enum.getName(a.object, o);
if (null !== s) return s;
}
return o;
}
if (t.isByteBuffer(o)) return i ? o.toBase64() : o.toBuffer();
if (e.Long.isLong(o)) return r ? o.toString() : e.Long.fromValue(o);
var l;
if (Array.isArray(o)) {
l = [];
o.forEach(function(e, t) {
l[t] = c(e, i, r, a);
});
return l;
}
l = {};
if (o instanceof e.Map) {
for (var u = o.entries(), d = u.next(); !d.done; d = u.next()) l[o.keyElem.valueToString(d.value[0])] = c(d.value[1], i, r, o.valueElem.resolvedType);
return l;
}
var h = o.$type, p = void 0;
for (var f in o) o.hasOwnProperty(f) && (h && (p = h.getChild(f)) ? l[f] = c(o[f], i, r, p.resolvedType) : l[f] = c(o[f], i, r));
return l;
}
s.toRaw = function(e, t) {
return c(this, !!e, !!t, this.$type);
};
s.encodeJSON = function() {
return JSON.stringify(c(this, !0, !0, this.$type));
};
a.decode = function(e, n, i) {
"string" == typeof n && (i = n, n = -1);
"string" == typeof e ? e = t.wrap(e, i || "base64") : t.isByteBuffer(e) || (e = t.wrap(e));
var r = e.littleEndian;
try {
var a = o.decode(e.LE(), n);
e.LE(r);
return a;
} catch (t) {
e.LE(r);
throw t;
}
};
a.decodeDelimited = function(e, n) {
"string" == typeof e ? e = t.wrap(e, n || "base64") : t.isByteBuffer(e) || (e = t.wrap(e));
if (e.remaining() < 1) return null;
var i = e.offset, r = e.readVarint32();
if (e.remaining() < r) {
e.offset = i;
return null;
}
try {
var a = o.decode(e.slice(e.offset, e.offset + r).LE());
e.offset += r;
return a;
} catch (t) {
e.offset += r;
throw t;
}
};
a.decode64 = function(e) {
return a.decode(e, "base64");
};
a.decodeHex = function(e) {
return a.decode(e, "hex");
};
a.decodeJSON = function(e) {
return new a(JSON.parse(e));
};
s.toString = function() {
return o.toString();
};
Object.defineProperty && (Object.defineProperty(a, "$options", {
value: o.buildOpt()
}), Object.defineProperty(s, "$options", {
value: a.$options
}), Object.defineProperty(a, "$type", {
value: o
}), Object.defineProperty(s, "$type", {
value: o
}));
return a;
}(e, this);
this._fields = [];
this._fieldsById = {};
this._fieldsByName = {};
this._oneofsByName = {};
for (var r, a = 0, s = this.children.length; a < s; a++) if ((r = this.children[a]) instanceof m || r instanceof d || r instanceof w) {
if (i.hasOwnProperty(r.name)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + r.toString(!0) + " cannot override static property '" + r.name + "'");
i[r.name] = r.build();
} else if (r instanceof d.Field) r.build(), this._fields.push(r), this._fieldsById[r.id] = r, 
this._fieldsByName[r.name] = r; else if (r instanceof d.OneOf) this._oneofsByName[r.name] = r; else if (!(r instanceof d.OneOf || r instanceof v)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[a].toString(!0));
return this.clazz = i;
};
h.encode = function(e, t, o) {
for (var n, i, r = null, a = 0, s = this._fields.length; a < s; ++a) {
i = e[(n = this._fields[a]).name];
n.required && null === i ? null === r && (r = n) : n.encode(o ? i : n.verifyValue(i), t, e);
}
if (null !== r) {
var l = Error("Missing at least one required field for " + this.toString(!0) + ": " + r);
l.encoded = t;
throw l;
}
return t;
};
h.calculate = function(e) {
for (var t, o, n = 0, i = 0, r = this._fields.length; i < r; ++i) {
o = e[(t = this._fields[i]).name];
if (t.required && null === o) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
n += t.calculate(o, e);
}
return n;
};
function p(t, o) {
var n = o.readVarint32(), i = 7 & n, r = n >>> 3;
switch (i) {
case e.WIRE_TYPES.VARINT:
do {
n = o.readUint8();
} while (128 == (128 & n));
break;

case e.WIRE_TYPES.BITS64:
o.offset += 8;
break;

case e.WIRE_TYPES.LDELIM:
n = o.readVarint32();
o.offset += n;
break;

case e.WIRE_TYPES.STARTGROUP:
p(r, o);
break;

case e.WIRE_TYPES.ENDGROUP:
if (r === t) return !1;
throw Error("Illegal GROUPEND after unknown group: " + r + " (" + t + " expected)");

case e.WIRE_TYPES.BITS32:
o.offset += 4;
break;

default:
throw Error("Illegal wire type in unknown group " + t + ": " + i);
}
return !0;
}
h.decode = function(t, o, n) {
"number" != typeof o && (o = -1);
for (var i, r, a, s, l = t.offset, u = new this.clazz(); t.offset < l + o || -1 === o && t.remaining() > 0; ) {
a = (i = t.readVarint32()) >>> 3;
if ((r = 7 & i) === e.WIRE_TYPES.ENDGROUP) {
if (a !== n) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + a + " (" + (n ? n + " expected" : "not a group") + ")");
break;
}
if (s = this._fieldsById[a]) if (s.repeated && !s.options.packed) u[s.name].push(s.decode(r, t)); else if (s.map) {
var c = s.decode(r, t);
u[s.name].set(c[0], c[1]);
} else {
u[s.name] = s.decode(r, t);
if (s.oneof) {
var d = u[s.oneof.name];
null !== d && d !== s.name && (u[d] = null);
u[s.oneof.name] = s.name;
}
} else switch (r) {
case e.WIRE_TYPES.VARINT:
t.readVarint32();
break;

case e.WIRE_TYPES.BITS32:
t.offset += 4;
break;

case e.WIRE_TYPES.BITS64:
t.offset += 8;
break;

case e.WIRE_TYPES.LDELIM:
var h = t.readVarint32();
t.offset += h;
break;

case e.WIRE_TYPES.STARTGROUP:
for (;p(a, t); ) ;
break;

default:
throw Error("Illegal wire type for unknown field " + a + " in " + this.toString(!0) + "#decode: " + r);
}
}
for (var f = 0, g = this._fields.length; f < g; ++f) if (null === u[(s = this._fields[f]).name]) if ("proto3" === this.syntax) u[s.name] = s.defaultValue; else {
if (s.required) {
var y = Error("Missing at least one required field for " + this.toString(!0) + ": " + s.name);
y.decoded = u;
throw y;
}
e.populateDefaults && null !== s.defaultValue && (u[s.name] = s.defaultValue);
}
return u;
};
o.Message = d;
var f = function(t, o, n, r, a, s, l, u, c, h) {
i.call(this, t, o, s);
this.className = "Message.Field";
this.required = "required" === n;
this.repeated = "repeated" === n;
this.map = "map" === n;
this.keyType = r || null;
this.type = a;
this.resolvedType = null;
this.id = l;
this.options = u || {};
this.defaultValue = null;
this.oneof = c || null;
this.syntax = h || "proto2";
this.originalName = this.name;
this.element = null;
this.keyElement = null;
!this.builder.options.convertFieldsToCamelCase || this instanceof d.ExtensionField || (this.name = e.Util.toCamelCase(this.name));
}, g = f.prototype = Object.create(i.prototype);
g.build = function() {
this.element = new l(this.type, this.resolvedType, !1, this.syntax, this.name);
this.map && (this.keyElement = new l(this.keyType, void 0, !0, this.syntax, this.name));
"proto3" !== this.syntax || this.repeated || this.map ? "undefined" != typeof this.options.default && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = l.defaultFieldValue(this.type);
};
g.verifyValue = function(t, o) {
o = o || !1;
var i, r = this;
function a(e, t) {
throw Error("Illegal value for " + r.toString(!0) + " of type " + r.type.name + ": " + e + " (" + t + ")");
}
if (null === t) {
this.required && a("undefined" == typeof t ? "undefined" : n(t), "required");
"proto3" === this.syntax && this.type !== e.TYPES.message && a("undefined" == typeof t ? "undefined" : n(t), "proto3 field without field presence cannot be null");
return null;
}
if (this.repeated && !o) {
Array.isArray(t) || (t = [ t ]);
var s = [];
for (i = 0; i < t.length; i++) s.push(this.element.verifyValue(t[i]));
return s;
}
if (this.map && !o) {
if (t instanceof e.Map) return t;
t instanceof Object || a("undefined" == typeof t ? "undefined" : n(t), "expected ProtoBuf.Map or raw object for map field");
return new e.Map(this, t);
}
!this.repeated && Array.isArray(t) && a("undefined" == typeof t ? "undefined" : n(t), "no array expected");
return this.element.verifyValue(t);
};
g.hasWirePresence = function(t, o) {
if ("proto3" !== this.syntax) return null !== t;
if (this.oneof && o[this.oneof.name] === this.name) return !0;
switch (this.type) {
case e.TYPES.int32:
case e.TYPES.sint32:
case e.TYPES.sfixed32:
case e.TYPES.uint32:
case e.TYPES.fixed32:
return 0 !== t;

case e.TYPES.int64:
case e.TYPES.sint64:
case e.TYPES.sfixed64:
case e.TYPES.uint64:
case e.TYPES.fixed64:
return 0 !== t.low || 0 !== t.high;

case e.TYPES.bool:
return t;

case e.TYPES.float:
case e.TYPES.double:
return 0 !== t;

case e.TYPES.string:
return t.length > 0;

case e.TYPES.bytes:
return t.remaining() > 0;

case e.TYPES.enum:
return 0 !== t;

case e.TYPES.message:
return null !== t;

default:
return !0;
}
};
g.encode = function(o, i, r) {
if (null === this.type || "object" !== n(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
if (null === o || this.repeated && 0 == o.length) return i;
try {
if (this.repeated) {
var a;
if (this.options.packed && e.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
i.writeVarint32(this.id << 3 | e.WIRE_TYPES.LDELIM);
i.ensureCapacity(i.offset += 1);
var s = i.offset;
for (a = 0; a < o.length; a++) this.element.encodeValue(this.id, o[a], i);
var l = i.offset - s, u = t.calculateVarint32(l);
if (u > 1) {
var c = i.slice(s, i.offset);
s += u - 1;
i.offset = s;
i.append(c);
}
i.writeVarint32(l, s - u);
} else for (a = 0; a < o.length; a++) i.writeVarint32(this.id << 3 | this.type.wireType), 
this.element.encodeValue(this.id, o[a], i);
} else if (this.map) o.forEach(function(o, n, r) {
var a = t.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, n) + t.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, o);
i.writeVarint32(this.id << 3 | e.WIRE_TYPES.LDELIM);
i.writeVarint32(a);
i.writeVarint32(8 | this.keyType.wireType);
this.keyElement.encodeValue(1, n, i);
i.writeVarint32(16 | this.type.wireType);
this.element.encodeValue(2, o, i);
}, this); else if (this.hasWirePresence(o, r)) {
i.writeVarint32(this.id << 3 | this.type.wireType);
this.element.encodeValue(this.id, o, i);
}
} catch (e) {
throw Error("Illegal value for " + this.toString(!0) + ": " + o + " (" + e + ")");
}
return i;
};
g.calculate = function(o, i) {
o = this.verifyValue(o);
if (null === this.type || "object" !== n(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
if (null === o || this.repeated && 0 == o.length) return 0;
var r = 0;
try {
if (this.repeated) {
var a, s;
if (this.options.packed && e.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
r += t.calculateVarint32(this.id << 3 | e.WIRE_TYPES.LDELIM);
s = 0;
for (a = 0; a < o.length; a++) s += this.element.calculateLength(this.id, o[a]);
r += t.calculateVarint32(s);
r += s;
} else for (a = 0; a < o.length; a++) r += t.calculateVarint32(this.id << 3 | this.type.wireType), 
r += this.element.calculateLength(this.id, o[a]);
} else if (this.map) o.forEach(function(o, n, i) {
var a = t.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, n) + t.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, o);
r += t.calculateVarint32(this.id << 3 | e.WIRE_TYPES.LDELIM);
r += t.calculateVarint32(a);
r += a;
}, this); else if (this.hasWirePresence(o, i)) {
r += t.calculateVarint32(this.id << 3 | this.type.wireType);
r += this.element.calculateLength(this.id, o);
}
} catch (e) {
throw Error("Illegal value for " + this.toString(!0) + ": " + o + " (" + e + ")");
}
return r;
};
g.decode = function(t, o, n) {
var i, r;
if (!(!this.map && t == this.type.wireType || !n && this.repeated && this.options.packed && t == e.WIRE_TYPES.LDELIM || this.map && t == e.WIRE_TYPES.LDELIM)) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + t + " (" + this.type.wireType + " expected)");
if (t == e.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && e.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !n) {
r = o.readVarint32();
r = o.offset + r;
for (var a = []; o.offset < r; ) a.push(this.decode(this.type.wireType, o, !0));
return a;
}
if (this.map) {
var s = l.defaultFieldValue(this.keyType);
i = l.defaultFieldValue(this.type);
r = o.readVarint32();
if (o.remaining() < r) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + r + " required but got only " + o.remaining());
var u = o.clone();
u.limit = u.offset + r;
o.offset += r;
for (;u.remaining() > 0; ) {
var c = u.readVarint32();
t = 7 & c;
var d = c >>> 3;
if (1 === d) s = this.keyElement.decode(u, t, d); else {
if (2 !== d) throw Error("Unexpected tag in map field key/value submessage");
i = this.element.decode(u, t, d);
}
}
return [ s, i ];
}
return this.element.decode(o, t, this.id);
};
o.Message.Field = f;
var y = function(e, t, o, n, i, r, a) {
f.call(this, e, t, o, null, n, i, r, a);
this.extension;
};
y.prototype = Object.create(f.prototype);
o.Message.ExtensionField = y;
o.Message.OneOf = function(e, t, o) {
i.call(this, e, t, o);
this.fields = [];
};
var m = function(e, t, o, n, i) {
a.call(this, e, t, o, n, i);
this.className = "Enum";
this.object = null;
};
m.getName = function(e, t) {
for (var o, n = Object.keys(e), i = 0; i < n.length; ++i) if (e[o = n[i]] === t) return o;
return null;
};
(m.prototype = Object.create(a.prototype)).build = function(t) {
if (this.object && !t) return this.object;
for (var o = new e.Builder.Enum(), n = this.getChildren(m.Value), i = 0, r = n.length; i < r; ++i) o[n[i].name] = n[i].id;
Object.defineProperty && Object.defineProperty(o, "$options", {
value: this.buildOpt(),
enumerable: !1
});
return this.object = o;
};
o.Enum = m;
var b = function(e, t, o, n) {
i.call(this, e, t, o);
this.className = "Enum.Value";
this.id = n;
};
b.prototype = Object.create(i.prototype);
o.Enum.Value = b;
var v = function(e, t, o, n) {
i.call(this, e, t, o);
this.field = n;
};
v.prototype = Object.create(i.prototype);
o.Extension = v;
var w = function(e, t, o, n) {
a.call(this, e, t, o, n);
this.className = "Service";
this.clazz = null;
};
(w.prototype = Object.create(a.prototype)).build = function(o) {
return this.clazz && !o ? this.clazz : this.clazz = function(e, o) {
for (var i = function(t) {
e.Builder.Service.call(this);
this.rpcImpl = t || function(e, t, o) {
setTimeout(o.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0);
};
}, r = i.prototype = Object.create(e.Builder.Service.prototype), a = o.getChildren(e.Reflect.Service.RPCMethod), s = 0; s < a.length; s++) (function(e) {
r[e.name] = function(i, r) {
try {
try {
i = e.resolvedRequestType.clazz.decode(t.wrap(i));
} catch (e) {
if (!(e instanceof TypeError)) throw e;
}
if (null === i || "object" !== ("undefined" == typeof i ? "undefined" : n(i))) throw Error("Illegal arguments");
i instanceof e.resolvedRequestType.clazz || (i = new e.resolvedRequestType.clazz(i));
this.rpcImpl(e.fqn(), i, function(t, n) {
if (t) r(t); else {
null === n && (n = "");
try {
n = e.resolvedResponseType.clazz.decode(n);
} catch (e) {}
n && n instanceof e.resolvedResponseType.clazz ? r(null, n) : r(Error("Illegal response type received in service method " + o.name + "#" + e.name));
}
});
} catch (e) {
setTimeout(r.bind(this, e), 0);
}
};
i[e.name] = function(t, o, n) {
new i(t)[e.name](o, n);
};
Object.defineProperty && (Object.defineProperty(i[e.name], "$options", {
value: e.buildOpt()
}), Object.defineProperty(r[e.name], "$options", {
value: i[e.name].$options
}));
})(a[s]);
Object.defineProperty && (Object.defineProperty(i, "$options", {
value: o.buildOpt()
}), Object.defineProperty(r, "$options", {
value: i.$options
}), Object.defineProperty(i, "$type", {
value: o
}), Object.defineProperty(r, "$type", {
value: o
}));
return i;
}(e, this);
};
o.Service = w;
var C = function(e, t, o, n) {
i.call(this, e, t, o);
this.className = "Service.Method";
this.options = n || {};
};
(C.prototype = Object.create(i.prototype)).buildOpt = s.buildOpt;
o.Service.Method = C;
var R = function(e, t, o, n, i, r, a, s) {
C.call(this, e, t, o, s);
this.className = "Service.RPCMethod";
this.requestName = n;
this.responseName = i;
this.requestStream = r;
this.responseStream = a;
this.resolvedRequestType = null;
this.resolvedResponseType = null;
};
R.prototype = Object.create(C.prototype);
o.Service.RPCMethod = R;
return o;
}(r);
r.Builder = function(t, o, i) {
var r = function(e) {
this.ns = new i.Namespace(this, null, "");
this.ptr = this.ns;
this.resolved = !1;
this.result = null;
this.files = {};
this.importRoot = null;
this.options = e || {};
}, a = r.prototype;
r.isMessage = function(e) {
return "string" == typeof e.name && ("undefined" == typeof e.values && "undefined" == typeof e.rpc);
};
r.isMessageField = function(e) {
return "string" == typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && "undefined" != typeof e.id;
};
r.isEnum = function(e) {
return "string" == typeof e.name && !("undefined" == typeof e.values || !Array.isArray(e.values) || 0 === e.values.length);
};
r.isService = function(e) {
return !("string" != typeof e.name || "object" !== n(e.rpc) || !e.rpc);
};
r.isExtend = function(e) {
return "string" == typeof e.ref;
};
a.reset = function() {
this.ptr = this.ns;
return this;
};
a.define = function(e) {
if ("string" != typeof e || !o.TYPEREF.test(e)) throw Error("illegal namespace: " + e);
e.split(".").forEach(function(e) {
var t = this.ptr.getChild(e);
null === t && this.ptr.addChild(t = new i.Namespace(this, this.ptr, e));
this.ptr = t;
}, this);
return this;
};
a.create = function(e) {
if (!e) return this;
if (Array.isArray(e)) {
if (0 === e.length) return this;
e = e.slice();
} else e = [ e ];
for (var o = [ e ]; o.length > 0; ) {
e = o.pop();
if (!Array.isArray(e)) throw Error("not a valid namespace: " + JSON.stringify(e));
for (;e.length > 0; ) {
var a = e.shift();
if (r.isMessage(a)) {
var s = new i.Message(this, this.ptr, a.name, a.options, a.isGroup, a.syntax), l = {};
a.oneofs && Object.keys(a.oneofs).forEach(function(e) {
s.addChild(l[e] = new i.Message.OneOf(this, s, e));
}, this);
a.fields && a.fields.forEach(function(e) {
if (null !== s.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + s.name + ": " + e.id);
if (e.options && "object" !== n(e.options)) throw Error("illegal field options in " + s.name + "#" + e.name);
var t = null;
if ("string" == typeof e.oneof && !(t = l[e.oneof])) throw Error("illegal oneof in " + s.name + "#" + e.name + ": " + e.oneof);
e = new i.Message.Field(this, s, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, a.syntax);
t && t.fields.push(e);
s.addChild(e);
}, this);
var u = [];
a.enums && a.enums.forEach(function(e) {
u.push(e);
});
a.messages && a.messages.forEach(function(e) {
u.push(e);
});
a.services && a.services.forEach(function(e) {
u.push(e);
});
a.extensions && ("number" == typeof a.extensions[0] ? s.extensions = [ a.extensions ] : s.extensions = a.extensions);
this.ptr.addChild(s);
if (u.length > 0) {
o.push(e);
e = u;
u = null;
this.ptr = s;
s = null;
continue;
}
u = null;
} else if (r.isEnum(a)) {
s = new i.Enum(this, this.ptr, a.name, a.options, a.syntax);
a.values.forEach(function(e) {
s.addChild(new i.Enum.Value(this, s, e.name, e.id));
}, this);
this.ptr.addChild(s);
} else if (r.isService(a)) {
s = new i.Service(this, this.ptr, a.name, a.options);
Object.keys(a.rpc).forEach(function(e) {
var t = a.rpc[e];
s.addChild(new i.Service.RPCMethod(this, s, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options));
}, this);
this.ptr.addChild(s);
} else {
if (!r.isExtend(a)) throw Error("not a valid definition: " + JSON.stringify(a));
if (s = this.ptr.resolve(a.ref, !0)) a.fields.forEach(function(e) {
if (null !== s.getChild(0 | e.id)) throw Error("duplicate extended field id in " + s.name + ": " + e.id);
if (s.extensions) {
var o = !1;
s.extensions.forEach(function(t) {
e.id >= t[0] && e.id <= t[1] && (o = !0);
});
if (!o) throw Error("illegal extended field id in " + s.name + ": " + e.id + " (not within valid ranges)");
}
var n = e.name;
this.options.convertFieldsToCamelCase && (n = t.Util.toCamelCase(n));
var r = new i.Message.ExtensionField(this, s, e.rule, e.type, this.ptr.fqn() + "." + n, e.id, e.options), a = new i.Extension(this, this.ptr, e.name, r);
r.extension = a;
this.ptr.addChild(a);
s.addChild(r);
}, this); else if (!/\.?google\.protobuf\./.test(a.ref)) throw Error("extended message " + a.ref + " is not defined");
}
a = null;
s = null;
}
e = null;
this.ptr = this.ptr.parent;
}
this.resolved = !1;
this.result = null;
return this;
};
function s(e) {
e.messages && e.messages.forEach(function(t) {
t.syntax = e.syntax;
s(t);
});
e.enums && e.enums.forEach(function(t) {
t.syntax = e.syntax;
});
}
a.import = function(o, i) {
var r = "/";
if ("string" == typeof i) {
t.Util.IS_NODE && (i = e("path").resolve(i));
if (!0 === this.files[i]) return this.reset();
this.files[i] = !0;
} else if ("object" === ("undefined" == typeof i ? "undefined" : n(i))) {
var a, l = i.root;
t.Util.IS_NODE && (l = e("path").resolve(l));
(l.indexOf("\\") >= 0 || i.file.indexOf("\\") >= 0) && (r = "\\");
a = t.Util.IS_NODE ? e("path").join(l, i.file) : l + r + i.file;
if (!0 === this.files[a]) return this.reset();
this.files[a] = !0;
}
if (o.imports && o.imports.length > 0) {
var u, c = !1;
if ("object" === ("undefined" == typeof i ? "undefined" : n(i))) {
this.importRoot = i.root;
c = !0;
u = this.importRoot;
i = i.file;
(u.indexOf("\\") >= 0 || i.indexOf("\\") >= 0) && (r = "\\");
} else if ("string" == typeof i) if (this.importRoot) u = this.importRoot; else if (i.indexOf("/") >= 0) "" === (u = i.replace(/\/[^\/]*$/, "")) && (u = "/"); else if (i.indexOf("\\") >= 0) {
u = i.replace(/\\[^\\]*$/, "");
r = "\\";
} else u = "."; else u = null;
for (var d = 0; d < o.imports.length; d++) if ("string" == typeof o.imports[d]) {
if (!u) throw Error("cannot determine import root");
var h = o.imports[d];
if ("google/protobuf/descriptor.proto" === h) continue;
h = t.Util.IS_NODE ? e("path").join(u, h) : u + r + h;
if (!0 === this.files[h]) continue;
/\.proto$/i.test(h) && !t.DotProto && (h = h.replace(/\.proto$/, ".json"));
var p = t.Util.fetch(h);
if (null === p) throw Error("failed to import '" + h + "' in '" + i + "': file not found");
/\.json$/i.test(h) ? this.import(JSON.parse(p + ""), h) : this.import(t.DotProto.Parser.parse(p), h);
} else i ? /\.(\w+)$/.test(i) ? this.import(o.imports[d], i.replace(/^(.+)\.(\w+)$/, function(e, t, o) {
return t + "_import" + d + "." + o;
})) : this.import(o.imports[d], i + "_import" + d) : this.import(o.imports[d]);
c && (this.importRoot = null);
}
o.package && this.define(o.package);
o.syntax && s(o);
var f = this.ptr;
o.options && Object.keys(o.options).forEach(function(e) {
f.options[e] = o.options[e];
});
o.messages && (this.create(o.messages), this.ptr = f);
o.enums && (this.create(o.enums), this.ptr = f);
o.services && (this.create(o.services), this.ptr = f);
o.extends && this.create(o.extends);
return this.reset();
};
a.resolveAll = function() {
var e;
if (null == this.ptr || "object" === n(this.ptr.type)) return this;
if (this.ptr instanceof i.Namespace) this.ptr.children.forEach(function(e) {
this.ptr = e;
this.resolveAll();
}, this); else if (this.ptr instanceof i.Message.Field) {
if (o.TYPE.test(this.ptr.type)) this.ptr.type = t.TYPES[this.ptr.type]; else {
if (!o.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
if (!(e = (this.ptr instanceof i.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
this.ptr.resolvedType = e;
if (e instanceof i.Enum) {
this.ptr.type = t.TYPES.enum;
if ("proto3" === this.ptr.syntax && "proto3" !== e.syntax) throw Error("proto3 message cannot reference proto2 enum");
} else {
if (!(e instanceof i.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
this.ptr.type = e.isGroup ? t.TYPES.group : t.TYPES.message;
}
}
if (this.ptr.map) {
if (!o.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
this.ptr.keyType = t.TYPES[this.ptr.keyType];
}
"proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== t.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0);
} else if (this.ptr instanceof t.Reflect.Service.Method) {
if (!(this.ptr instanceof t.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
if (!((e = this.ptr.parent.resolve(this.ptr.requestName, !0)) && e instanceof t.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
this.ptr.resolvedRequestType = e;
if (!((e = this.ptr.parent.resolve(this.ptr.responseName, !0)) && e instanceof t.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
this.ptr.resolvedResponseType = e;
} else if (!(this.ptr instanceof t.Reflect.Message.OneOf || this.ptr instanceof t.Reflect.Extension || this.ptr instanceof t.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + n(this.ptr) + ": " + this.ptr);
return this.reset();
};
a.build = function(e) {
this.reset();
this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null);
null === this.result && (this.result = this.ns.build());
if (!e) return this.result;
for (var t = "string" == typeof e ? e.split(".") : e, o = this.result, n = 0; n < t.length; n++) {
if (!o[t[n]]) {
o = null;
break;
}
o = o[t[n]];
}
return o;
};
a.lookup = function(e, t) {
return e ? this.ns.resolve(e, t) : this.ns;
};
a.toString = function() {
return "Builder";
};
r.Message = function() {};
r.Enum = function() {};
r.Service = function() {};
return r;
}(r, r.Lang, r.Reflect);
r.Map = function(e, t) {
var o = function(e, o) {
if (!e.map) throw Error("field is not a map");
this.field = e;
this.keyElem = new t.Element(e.keyType, null, !0, e.syntax);
this.valueElem = new t.Element(e.type, e.resolvedType, !1, e.syntax);
this.map = {};
Object.defineProperty(this, "size", {
get: function() {
return Object.keys(this.map).length;
}
});
if (o) for (var n = Object.keys(o), i = 0; i < n.length; i++) {
var r = this.keyElem.valueFromString(n[i]), a = this.valueElem.verifyValue(o[n[i]]);
this.map[this.keyElem.valueToString(r)] = {
key: r,
value: a
};
}
}, n = o.prototype;
function i(e) {
var t = 0;
return {
next: function() {
return t < e.length ? {
done: !1,
value: e[t++]
} : {
done: !0
};
}
};
}
n.clear = function() {
this.map = {};
};
n.delete = function(e) {
var t = this.keyElem.valueToString(this.keyElem.verifyValue(e)), o = t in this.map;
delete this.map[t];
return o;
};
n.entries = function() {
for (var e, t = [], o = Object.keys(this.map), n = 0; n < o.length; n++) t.push([ (e = this.map[o[n]]).key, e.value ]);
return i(t);
};
n.keys = function() {
for (var e = [], t = Object.keys(this.map), o = 0; o < t.length; o++) e.push(this.map[t[o]].key);
return i(e);
};
n.values = function() {
for (var e = [], t = Object.keys(this.map), o = 0; o < t.length; o++) e.push(this.map[t[o]].value);
return i(e);
};
n.forEach = function(e, t) {
for (var o, n = Object.keys(this.map), i = 0; i < n.length; i++) e.call(t, (o = this.map[n[i]]).value, o.key, this);
};
n.set = function(e, t) {
var o = this.keyElem.verifyValue(e), n = this.valueElem.verifyValue(t);
this.map[this.keyElem.valueToString(o)] = {
key: o,
value: n
};
return this;
};
n.get = function(e) {
var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
if (t in this.map) return this.map[t].value;
};
n.has = function(e) {
return this.keyElem.valueToString(this.keyElem.verifyValue(e)) in this.map;
};
return o;
}(0, r.Reflect);
r.newBuilder = function(e) {
"undefined" == typeof (e = e || {}).convertFieldsToCamelCase && (e.convertFieldsToCamelCase = r.convertFieldsToCamelCase);
"undefined" == typeof e.populateAccessors && (e.populateAccessors = r.populateAccessors);
return new r.Builder(e);
};
r.loadJson = function(e, t, o) {
("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (o = t, 
t = null);
t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) || (t = r.newBuilder());
"string" == typeof e && (e = JSON.parse(e));
t.import(e, o);
t.resolveAll();
return t;
};
r.loadJsonFile = function(e, t, o) {
t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) ? (o = t, t = null) : t && "function" == typeof t || (t = null);
if (t) return r.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(n) {
if (null !== n) try {
t(null, r.loadJson(JSON.parse(n), o, e));
} catch (e) {
t(e);
} else t(Error("Failed to fetch file"));
});
var i = r.Util.fetch("object" === ("undefined" == typeof e ? "undefined" : n(e)) ? e.root + "/" + e.file : e);
return null === i ? null : r.loadJson(JSON.parse(i), o, e);
};
return r;
});
cc._RF.pop();
}).call(this, e("_process"));
}, {
_process: 2,
bytebuffer: "bytebuffer",
fs: void 0,
path: 1
} ]
}, {}, [ "Boot", "Constant", "AgariIndexA", "GameModuleA", "GameOverResultViewA", "GameRulesA", "GamebExportsA", "HandResultViewA", "PlayerA", "PlayerInterfaceA", "PlayerViewA", "ReplayA", "RoomA", "RoomInterfaceA", "RoomRuleViewA", "RoomViewA", "TileImageMounterA", "HandlerActionResultDiscardedA", "HandlerActionResultDrawA", "HandlerActionResultNotifyA", "HandlerActionResultSkipA", "HandlerMsg2LobbyA", "HandlerMsgActionAllowedA", "HandlerMsgActionResultA", "HandlerMsgDealA", "HandlerMsgDeletedA", "HandlerMsgDisbandNotifyA", "HandlerMsgDonateA", "HandlerMsgGameOverA", "HandlerMsgHandOverA", "HandlerMsgKickoutA", "HandlerMsgReActionAllowedA", "HandlerMsgRestoreA", "HandlerMsgRoomUpdateA", "HandlerMsgShowTipsA", "HandlerMsgUpdateLocationA", "HandlerMsgUpdatePropCfgA", "protoGameA", "AgariIndex", "GameModule", "GameOverResultView", "GameRules", "GamebExports", "HandResultView", "Player", "PlayerInterface", "PlayerView", "Replay", "Room", "RoomInterface", "RoomRuleView", "RoomView", "TileImageMounter", "HandlerActionResultChow", "HandlerActionResultDiscarded", "HandlerActionResultDraw", "HandlerActionResultKongConcealed", "HandlerActionResultKongExposed", "HandlerActionResultNotify", "HandlerActionResultPong", "HandlerActionResultReadyHand", "HandlerActionResultTriplet2Kong", "HandlerMsg2Lobby", "HandlerMsgActionAllowed", "HandlerMsgDeal", "HandlerMsgDeleted", "HandlerMsgDisbandNotify", "HandlerMsgDonate", "HandlerMsgGameOver", "HandlerMsgHandOver", "HandlerMsgKickout", "HandlerMsgReActionAllowed", "HandlerMsgRestore", "HandlerMsgRoomUpdate", "HandlerMsgShowTips", "HandlerMsgUpdateLocation", "HandlerMsgUpdatePropCfg", "protoGame", "GResLoaderImpl", "LMsgCenter", "LobbyModule", "WeiXinSDK", "WeiXinSDkExports", "LInterfaceExports", "RoomHost", "AnimationMgr", "CommonFunction", "DataStore", "Dialog", "Enum", "HTTP", "KeyConstants", "LCoreExports", "LDataType", "LEnv", "Logger", "MsgQueue", "PromiseDeferred", "SoundMgr", "WS", "WebsocketWrapper", "protoLobby", "bytebuffer", "long", "protobuf", "DFRuleView", "RuleViewsExports", "RunFastRuleView", "ZJMJRuleView", "Share", "ShareExports", "EmailView", "GameRecordView", "GameSubRecordView", "JoinRoom", "LobbyError", "LobbyView", "LoginView", "NewRoomView", "UserInfoView", "ChatExports", "ChatView", "ApplyRecordView", "AppointManagerView", "ClubModuleInterface", "ClubRequestError", "ClubView", "CreateClubView", "FilterGameView", "JoinClubView", "MemberManagerView", "MemberOperationDialog", "QuicklyCreateRoomView", "RoomRuleString", "RoomManageView", "DisbandClubView", "ModifyClubName", "QuitClubView", "SettingPopupView", "DisbandView", "DisbandViewExports", "PlayerInfoExports", "PlayerInfoView", "RoomSettingView", "RoomSettingViewExports" ]);