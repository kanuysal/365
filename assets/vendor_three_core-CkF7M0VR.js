/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const vu = 0,
  xu = 1,
  Mu = 2;
const Su = 2;
const Eu = 4;
const yu = 1006;
const Tu = 1008,
  Au = 1009;
const bu = 1015,
  Ru = 1016;
const wu = 1023;
const Cu = 1028;
const Pu = 1030;
const Du = 33777;
const Lu = 33779,
  Uu = 35840;
const Iu = 35842;
const Fu = 36196,
  Nu = 37492,
  Ou = 37496,
  Bu = 37808;
const Gu = 37812;
const zu = 36492;
const Vu = 36495;
const Hu = "",
  Ct = "srgb",
  Un = "srgb-linear",
  Ei = "linear",
  Ke = "srgb";
const Ar = "300 es";
class Fn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const mt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  Li = Math.PI / 180,
  yi = 180 / Math.PI;
function qn() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    mt[i & 255] +
    mt[(i >> 8) & 255] +
    mt[(i >> 16) & 255] +
    mt[(i >> 24) & 255] +
    "-" +
    mt[e & 255] +
    mt[(e >> 8) & 255] +
    "-" +
    mt[((e >> 16) & 15) | 64] +
    mt[(e >> 24) & 255] +
    "-" +
    mt[(t & 63) | 128] +
    mt[(t >> 8) & 255] +
    "-" +
    mt[(t >> 16) & 255] +
    mt[(t >> 24) & 255] +
    mt[n & 255] +
    mt[(n >> 8) & 255] +
    mt[(n >> 16) & 255] +
    mt[(n >> 24) & 255]
  ).toLowerCase();
}
function Fe(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Zs(i, e) {
  return ((i % e) + e) % e;
}
function Ui(i, e, t) {
  return (1 - t) * i + t * e;
}
function Bn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Mt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ge {
  constructor(e = 0, t = 0) {
    ((Ge.prototype.isVector2 = !0), (this.x = e), (this.y = t));
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return ((this.x = e), (this.y = t), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), this);
  }
  addVectors(e, t) {
    return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
  }
  addScaledVector(e, t) {
    return ((this.x += e.x * t), (this.y += e.y * t), this);
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), this);
  }
  subVectors(e, t) {
    return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), this);
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Fe(this.x, e.x, t.x)),
      (this.y = Fe(this.y, e.y, t.y)),
      this
    );
  }
  clampScalar(e, t) {
    return ((this.x = Fe(this.x, e, t)), (this.y = Fe(this.y, e, t)), this);
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t));
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Fe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), e);
  }
  fromBufferAttribute(e, t) {
    return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (
      (this.x = s * n - a * r + e.x),
      (this.y = s * r + a * n + e.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
}
class Ce {
  constructor(e, t, n, r, s, a, o, c, l) {
    ((Ce.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, a, o, c, l));
  }
  set(e, t, n, r, s, a, o, c, l) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = r),
      (h[2] = o),
      (h[3] = t),
      (h[4] = s),
      (h[5] = c),
      (h[6] = n),
      (h[7] = a),
      (h[8] = l),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      c = n[6],
      l = n[1],
      h = n[4],
      d = n[7],
      f = n[2],
      p = n[5],
      g = n[8],
      M = r[0],
      m = r[3],
      u = r[6],
      A = r[1],
      T = r[4],
      E = r[7],
      L = r[2],
      b = r[5],
      w = r[8];
    return (
      (s[0] = a * M + o * A + c * L),
      (s[3] = a * m + o * T + c * b),
      (s[6] = a * u + o * E + c * w),
      (s[1] = l * M + h * A + d * L),
      (s[4] = l * m + h * T + d * b),
      (s[7] = l * u + h * E + d * w),
      (s[2] = f * M + p * A + g * L),
      (s[5] = f * m + p * T + g * b),
      (s[8] = f * u + p * E + g * w),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      h = e[8];
    return (
      t * a * h - t * o * l - n * s * h + n * o * c + r * s * l - r * a * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      h = e[8],
      d = h * a - o * l,
      f = o * c - h * s,
      p = l * s - a * c,
      g = t * d + n * f + r * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / g;
    return (
      (e[0] = d * M),
      (e[1] = (r * l - h * n) * M),
      (e[2] = (o * n - r * a) * M),
      (e[3] = f * M),
      (e[4] = (h * t - r * c) * M),
      (e[5] = (r * s - o * t) * M),
      (e[6] = p * M),
      (e[7] = (n * c - l * t) * M),
      (e[8] = (a * t - n * s) * M),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const c = Math.cos(s),
      l = Math.sin(s);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * a + l * o) + a + e,
        -r * l,
        r * c,
        -r * (-l * a + c * o) + o + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return (this.premultiply(Ii.makeScale(e, t)), this);
  }
  rotate(e) {
    return (this.premultiply(Ii.makeRotation(-e)), this);
  }
  translate(e, t) {
    return (this.premultiply(Ii.makeTranslation(e, t)), this);
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
  }
  makeScale(e, t) {
    return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ii = new Ce();
function Ss(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function Xn(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function $s() {
  const i = Xn("canvas");
  return ((i.style.display = "block"), i);
}
const br = {};
function Pn(i) {
  i in br || ((br[i] = !0), console.warn(i));
}
function js(i, e, t) {
  return new Promise(function (n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function Js(i) {
  const e = i.elements;
  ((e[2] = 0.5 * e[2] + 0.5 * e[3]),
    (e[6] = 0.5 * e[6] + 0.5 * e[7]),
    (e[10] = 0.5 * e[10] + 0.5 * e[11]),
    (e[14] = 0.5 * e[14] + 0.5 * e[15]));
}
function Qs(i) {
  const e = i.elements;
  e[11] === -1
    ? ((e[10] = -e[10] - 1), (e[14] = -e[14]))
    : ((e[10] = -e[10]), (e[14] = -e[14] + 1));
}
const Rr = new Ce().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  wr = new Ce().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function ea() {
  const i = {
      enabled: !0,
      workingColorSpace: Un,
      spaces: {},
      convert: function (r, s, a) {
        return (
          this.enabled === !1 ||
            s === a ||
            !s ||
            !a ||
            (this.spaces[s].transfer === Ke &&
              ((r.r = Kt(r.r)), (r.g = Kt(r.g)), (r.b = Kt(r.b))),
            this.spaces[s].primaries !== this.spaces[a].primaries &&
              (r.applyMatrix3(this.spaces[s].toXYZ),
              r.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === Ke &&
              ((r.r = Ln(r.r)), (r.g = Ln(r.g)), (r.b = Ln(r.b)))),
          r
        );
      },
      fromWorkingColorSpace: function (r, s) {
        return this.convert(r, this.workingColorSpace, s);
      },
      toWorkingColorSpace: function (r, s) {
        return this.convert(r, s, this.workingColorSpace);
      },
      getPrimaries: function (r) {
        return this.spaces[r].primaries;
      },
      getTransfer: function (r) {
        return r === "" ? Ei : this.spaces[r].transfer;
      },
      getLuminanceCoefficients: function (r, s = this.workingColorSpace) {
        return r.fromArray(this.spaces[s].luminanceCoefficients);
      },
      define: function (r) {
        Object.assign(this.spaces, r);
      },
      _getMatrix: function (r, s, a) {
        return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (r) {
        return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (r = this.workingColorSpace) {
        return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    i.define({
      [Un]: {
        primaries: e,
        whitePoint: n,
        transfer: Ei,
        toXYZ: Rr,
        fromXYZ: wr,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: Ct },
        outputColorSpaceConfig: { drawingBufferColorSpace: Ct },
      },
      [Ct]: {
        primaries: e,
        whitePoint: n,
        transfer: Ke,
        toXYZ: Rr,
        fromXYZ: wr,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: Ct },
      },
    }),
    i
  );
}
const We = ea();
function Kt(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ln(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let gn;
class ta {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      (gn === void 0 && (gn = Xn("canvas")),
        (gn.width = e.width),
        (gn.height = e.height));
      const n = gn.getContext("2d");
      (e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = gn));
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e,
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Xn("canvas");
      ((t.width = e.width), (t.height = e.height));
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = Kt(s[a] / 255) * 255;
      return (n.putImageData(r, 0, 0), t);
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Kt(t[n] / 255) * 255))
          : (t[n] = Kt(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let na = 0;
class Es {
  constructor(e = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: na++ }),
      (this.uuid = qn()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0));
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Fi(r[a].image)) : s.push(Fi(r[a]));
      } else s = Fi(r);
      n.url = s;
    }
    return (t || (e.images[this.uuid] = n), n);
  }
}
function Fi(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? ta.getDataURL(i)
    : i.data
      ? {
          data: Array.from(i.data),
          width: i.width,
          height: i.height,
          type: i.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ia = 0;
class dt extends Fn {
  constructor(
    e = dt.DEFAULT_IMAGE,
    t = dt.DEFAULT_MAPPING,
    n = 1001,
    r = 1001,
    s = 1006,
    a = 1008,
    o = 1023,
    c = 1009,
    l = dt.DEFAULT_ANISOTROPY,
    h = "",
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: ia++ }),
      (this.uuid = qn()),
      (this.name = ""),
      (this.source = new Es(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new Ge(0, 0)),
      (this.repeat = new Ge(1, 1)),
      (this.center = new Ge(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ce()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = h),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0));
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return (this.flipY && (e.y = 1 - e.y), e);
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
dt.DEFAULT_IMAGE = null;
dt.DEFAULT_MAPPING = 300;
dt.DEFAULT_ANISOTROPY = 1;
class Ze {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ((Ze.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r));
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return ((this.x = e), (this.y = t), (this.z = n), (this.w = r), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setW(e) {
    return ((this.w = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x),
      (this.y += e.y),
      (this.z += e.z),
      (this.w += e.w),
      this
    );
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x),
      (this.y -= e.y),
      (this.z -= e.z),
      (this.w -= e.w),
      this
    );
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x),
      (this.y *= e.y),
      (this.z *= e.z),
      (this.w *= e.w),
      this
    );
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x),
      (this.y /= e.y),
      (this.z /= e.z),
      (this.w /= e.w),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const c = e.elements,
      l = c[0],
      h = c[4],
      d = c[8],
      f = c[1],
      p = c[5],
      g = c[9],
      M = c[2],
      m = c[6],
      u = c[10];
    if (
      Math.abs(h - f) < 0.01 &&
      Math.abs(d - M) < 0.01 &&
      Math.abs(g - m) < 0.01
    ) {
      if (
        Math.abs(h + f) < 0.1 &&
        Math.abs(d + M) < 0.1 &&
        Math.abs(g + m) < 0.1 &&
        Math.abs(l + p + u - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      t = Math.PI;
      const T = (l + 1) / 2,
        E = (p + 1) / 2,
        L = (u + 1) / 2,
        b = (h + f) / 4,
        w = (d + M) / 4,
        I = (g + m) / 4;
      return (
        T > E && T > L
          ? T < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(T)), (r = b / n), (s = w / n))
          : E > L
            ? E < 0.01
              ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
              : ((r = Math.sqrt(E)), (n = b / r), (s = I / r))
            : L < 0.01
              ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
              : ((s = Math.sqrt(L)), (n = w / s), (r = I / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let A = Math.sqrt(
      (m - g) * (m - g) + (d - M) * (d - M) + (f - h) * (f - h),
    );
    return (
      Math.abs(A) < 0.001 && (A = 1),
      (this.x = (m - g) / A),
      (this.y = (d - M) / A),
      (this.z = (f - h) / A),
      (this.w = Math.acos((l + p + u - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Fe(this.x, e.x, t.x)),
      (this.y = Fe(this.y, e.y, t.y)),
      (this.z = Fe(this.z, e.z, t.z)),
      (this.w = Fe(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Fe(this.x, e, t)),
      (this.y = Fe(this.y, e, t)),
      (this.z = Fe(this.z, e, t)),
      (this.w = Fe(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
}
class ra extends Fn {
  constructor(e = 1, t = 1, n = {}) {
    (super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Ze(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Ze(0, 0, e, t)));
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: 1006,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n,
    );
    const s = new dt(
      r,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace,
    );
    ((s.flipY = !1),
      (s.generateMipmaps = n.generateMipmaps),
      (s.internalFormat = n.internalFormat),
      (this.textures = []));
    const a = n.count;
    for (let o = 0; o < a; o++)
      ((this.textures[o] = s.clone()),
        (this.textures[o].isRenderTargetTexture = !0));
    ((this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples));
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      ((this.width = e), (this.height = t), (this.depth = n));
      for (let r = 0, s = this.textures.length; r < s; r++)
        ((this.textures[r].image.width = e),
          (this.textures[r].image.height = t),
          (this.textures[r].image.depth = n));
      this.dispose();
    }
    (this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0));
    for (let n = 0, r = e.textures.length; n < r; n++)
      ((this.textures[n] = e.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0));
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Es(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class pn extends ra {
  constructor(e = 1, t = 1, n = {}) {
    (super(e, t, n), (this.isWebGLRenderTarget = !0));
  }
}
class ys extends dt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    (super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set()));
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class sa extends dt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    (super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class Yn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ((this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r));
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let c = n[r + 0],
      l = n[r + 1],
      h = n[r + 2],
      d = n[r + 3];
    const f = s[a + 0],
      p = s[a + 1],
      g = s[a + 2],
      M = s[a + 3];
    if (o === 0) {
      ((e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = d));
      return;
    }
    if (o === 1) {
      ((e[t + 0] = f), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = M));
      return;
    }
    if (d !== M || c !== f || l !== p || h !== g) {
      let m = 1 - o;
      const u = c * f + l * p + h * g + d * M,
        A = u >= 0 ? 1 : -1,
        T = 1 - u * u;
      if (T > Number.EPSILON) {
        const L = Math.sqrt(T),
          b = Math.atan2(L, u * A);
        ((m = Math.sin(m * b) / L), (o = Math.sin(o * b) / L));
      }
      const E = o * A;
      if (
        ((c = c * m + f * E),
        (l = l * m + p * E),
        (h = h * m + g * E),
        (d = d * m + M * E),
        m === 1 - o)
      ) {
        const L = 1 / Math.sqrt(c * c + l * l + h * h + d * d);
        ((c *= L), (l *= L), (h *= L), (d *= L));
      }
    }
    ((e[t] = c), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = d));
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r],
      c = n[r + 1],
      l = n[r + 2],
      h = n[r + 3],
      d = s[a],
      f = s[a + 1],
      p = s[a + 2],
      g = s[a + 3];
    return (
      (e[t] = o * g + h * d + c * p - l * f),
      (e[t + 1] = c * g + h * f + l * d - o * p),
      (e[t + 2] = l * g + h * p + o * f - c * d),
      (e[t + 3] = h * g - o * d - c * f - l * p),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(e) {
    ((this._w = e), this._onChangeCallback());
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      c = Math.sin,
      l = o(n / 2),
      h = o(r / 2),
      d = o(s / 2),
      f = c(n / 2),
      p = c(r / 2),
      g = c(s / 2);
    switch (a) {
      case "XYZ":
        ((this._x = f * h * d + l * p * g),
          (this._y = l * p * d - f * h * g),
          (this._z = l * h * g + f * p * d),
          (this._w = l * h * d - f * p * g));
        break;
      case "YXZ":
        ((this._x = f * h * d + l * p * g),
          (this._y = l * p * d - f * h * g),
          (this._z = l * h * g - f * p * d),
          (this._w = l * h * d + f * p * g));
        break;
      case "ZXY":
        ((this._x = f * h * d - l * p * g),
          (this._y = l * p * d + f * h * g),
          (this._z = l * h * g + f * p * d),
          (this._w = l * h * d - f * p * g));
        break;
      case "ZYX":
        ((this._x = f * h * d - l * p * g),
          (this._y = l * p * d + f * h * g),
          (this._z = l * h * g - f * p * d),
          (this._w = l * h * d + f * p * g));
        break;
      case "YZX":
        ((this._x = f * h * d + l * p * g),
          (this._y = l * p * d + f * h * g),
          (this._z = l * h * g - f * p * d),
          (this._w = l * h * d - f * p * g));
        break;
      case "XZY":
        ((this._x = f * h * d - l * p * g),
          (this._y = l * p * d - f * h * g),
          (this._z = l * h * g + f * p * d),
          (this._w = l * h * d + f * p * g));
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            a,
        );
    }
    return (t === !0 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      c = t[9],
      l = t[2],
      h = t[6],
      d = t[10],
      f = n + o + d;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      ((this._w = 0.25 / p),
        (this._x = (h - c) * p),
        (this._y = (s - l) * p),
        (this._z = (a - r) * p));
    } else if (n > o && n > d) {
      const p = 2 * Math.sqrt(1 + n - o - d);
      ((this._w = (h - c) / p),
        (this._x = 0.25 * p),
        (this._y = (r + a) / p),
        (this._z = (s + l) / p));
    } else if (o > d) {
      const p = 2 * Math.sqrt(1 + o - n - d);
      ((this._w = (s - l) / p),
        (this._x = (r + a) / p),
        (this._y = 0.25 * p),
        (this._z = (c + h) / p));
    } else {
      const p = 2 * Math.sqrt(1 + d - n - o);
      ((this._w = (a - r) / p),
        (this._x = (s + l) / p),
        (this._y = (c + h) / p),
        (this._z = 0.25 * p));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Fe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return (this.slerp(e, r), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      c = t._y,
      l = t._z,
      h = t._w;
    return (
      (this._x = n * h + a * o + r * l - s * c),
      (this._y = r * h + a * c + s * o - n * l),
      (this._z = s * h + a * l + n * c - r * o),
      (this._w = a * h - n * o - r * c - s * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      r = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return ((this._w = a), (this._x = n), (this._y = r), (this._z = s), this);
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return (
        (this._w = p * a + t * this._w),
        (this._x = p * n + t * this._x),
        (this._y = p * r + t * this._y),
        (this._z = p * s + t * this._z),
        this.normalize(),
        this
      );
    }
    const l = Math.sqrt(c),
      h = Math.atan2(l, o),
      d = Math.sin((1 - t) * h) / l,
      f = Math.sin(t * h) / l;
    return (
      (this._w = a * d + this._w * f),
      (this._x = n * d + this._x * f),
      (this._y = r * d + this._y * f),
      (this._z = s * d + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      r = Math.sqrt(1 - n),
      s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._w);
  }
}
class F {
  constructor(e = 0, t = 0, n = 0) {
    ((F.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n));
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      this
    );
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      this
    );
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), this);
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x),
      (this.y = e.y * t.y),
      (this.z = e.z * t.z),
      this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Cr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Cr.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * r),
      (this.y = s[1] * t + s[4] * n + s[7] * r),
      (this.z = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      c = e.w,
      l = 2 * (a * r - o * n),
      h = 2 * (o * t - s * r),
      d = 2 * (s * n - a * t);
    return (
      (this.x = t + c * l + a * d - o * h),
      (this.y = n + c * h + o * l - s * d),
      (this.z = r + c * d + s * h - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r),
      (this.y = s[1] * t + s[5] * n + s[9] * r),
      (this.z = s[2] * t + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Fe(this.x, e.x, t.x)),
      (this.y = Fe(this.y, e.y, t.y)),
      (this.z = Fe(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Fe(this.x, e, t)),
      (this.y = Fe(this.y, e, t)),
      (this.z = Fe(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = r * c - s * o),
      (this.y = s * a - n * c),
      (this.z = n * o - r * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return (Ni.copy(this).projectOnVector(e), this.sub(Ni));
  }
  reflect(e) {
    return this.sub(Ni.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Fe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)),
      (this.y = n),
      (this.z = e * Math.cos(t)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return ((this.x = t), (this.y = n), (this.z = r), this);
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
  }
  setFromColor(e) {
    return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)),
      (this.y = t),
      (this.z = n * Math.sin(e)),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
}
const Ni = new F(),
  Cr = new Yn();
class Kn {
  constructor(
    e = new F(1 / 0, 1 / 0, 1 / 0),
    t = new F(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = e), (this.max = t));
  }
  set(e, t) {
    return (this.min.copy(e), this.max.copy(t), this);
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Ut.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Ut.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ut.copy(t).multiplyScalar(0.5);
    return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
  }
  setFromObject(e, t = !1) {
    return (this.makeEmpty(), this.expandByObject(e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.min.copy(e.min), this.max.copy(e.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return (this.min.min(e), this.max.max(e), this);
  }
  expandByVector(e) {
    return (this.min.sub(e), this.max.add(e), this);
  }
  expandByScalar(e) {
    return (this.min.addScalar(-e), this.max.addScalar(e), this);
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          (e.isMesh === !0
            ? e.getVertexPosition(a, Ut)
            : Ut.fromBufferAttribute(s, a),
            Ut.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Ut));
      else
        (e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Jn.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Jn.copy(n.boundingBox)),
          Jn.applyMatrix4(e.matrixWorld),
          this.union(Jn));
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Ut),
      Ut.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    (this.getCenter(Gn),
      Qn.subVectors(this.max, Gn),
      vn.subVectors(e.a, Gn),
      xn.subVectors(e.b, Gn),
      Mn.subVectors(e.c, Gn),
      Zt.subVectors(xn, vn),
      $t.subVectors(Mn, xn),
      sn.subVectors(vn, Mn));
    let t = [
      0,
      -Zt.z,
      Zt.y,
      0,
      -$t.z,
      $t.y,
      0,
      -sn.z,
      sn.y,
      Zt.z,
      0,
      -Zt.x,
      $t.z,
      0,
      -$t.x,
      sn.z,
      0,
      -sn.x,
      -Zt.y,
      Zt.x,
      0,
      -$t.y,
      $t.x,
      0,
      -sn.y,
      sn.x,
      0,
    ];
    return !Oi(t, vn, xn, Mn, Qn) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Oi(t, vn, xn, Mn, Qn))
      ? !1
      : (ei.crossVectors(Zt, $t),
        (t = [ei.x, ei.y, ei.z]),
        Oi(t, vn, xn, Mn, Qn));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ut).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Ut).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return (this.min.min(e.min), this.max.max(e.max), this);
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Vt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Vt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Vt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Vt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Vt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Vt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Vt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Vt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Vt),
        this);
  }
  translate(e) {
    return (this.min.add(e), this.max.add(e), this);
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Vt = [
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
  ],
  Ut = new F(),
  Jn = new Kn(),
  vn = new F(),
  xn = new F(),
  Mn = new F(),
  Zt = new F(),
  $t = new F(),
  sn = new F(),
  Gn = new F(),
  Qn = new F(),
  ei = new F(),
  an = new F();
function Oi(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    an.fromArray(i, s);
    const o =
        r.x * Math.abs(an.x) + r.y * Math.abs(an.y) + r.z * Math.abs(an.z),
      c = e.dot(an),
      l = t.dot(an),
      h = n.dot(an);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o) return !1;
  }
  return !0;
}
const aa = new Kn(),
  zn = new F(),
  Bi = new F();
class Ai {
  constructor(e = new F(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : aa.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return ((this.radius = Math.sqrt(r)), this);
  }
  copy(e) {
    return (this.center.copy(e.center), (this.radius = e.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return (this.center.add(e), this);
  }
  expandByPoint(e) {
    if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
    zn.subVectors(e, this.center);
    const t = zn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      (this.center.addScaledVector(zn, r / n), (this.radius += r));
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (Bi.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(zn.copy(e.center).add(Bi)),
              this.expandByPoint(zn.copy(e.center).sub(Bi))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ht = new F(),
  Gi = new F(),
  ti = new F(),
  jt = new F(),
  zi = new F(),
  ni = new F(),
  Vi = new F();
class dr {
  constructor(e = new F(), t = new F(0, 0, -1)) {
    ((this.origin = e), (this.direction = t));
  }
  set(e, t) {
    return (this.origin.copy(e), this.direction.copy(t), this);
  }
  copy(e) {
    return (this.origin.copy(e.origin), this.direction.copy(e.direction), this);
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return (this.direction.copy(e).sub(this.origin).normalize(), this);
  }
  recast(e) {
    return (this.origin.copy(this.at(e, Ht)), this);
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Ht.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Ht.copy(this.origin).addScaledVector(this.direction, t),
        Ht.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    (Gi.copy(e).add(t).multiplyScalar(0.5),
      ti.copy(t).sub(e).normalize(),
      jt.copy(this.origin).sub(Gi));
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(ti),
      o = jt.dot(this.direction),
      c = -jt.dot(ti),
      l = jt.lengthSq(),
      h = Math.abs(1 - a * a);
    let d, f, p, g;
    if (h > 0)
      if (((d = a * c - o), (f = a * o - c), (g = s * h), d >= 0))
        if (f >= -g)
          if (f <= g) {
            const M = 1 / h;
            ((d *= M),
              (f *= M),
              (p = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l));
          } else
            ((f = s),
              (d = Math.max(0, -(a * f + o))),
              (p = -d * d + f * (f + 2 * c) + l));
        else
          ((f = -s),
            (d = Math.max(0, -(a * f + o))),
            (p = -d * d + f * (f + 2 * c) + l));
      else
        f <= -g
          ? ((d = Math.max(0, -(-a * s + o))),
            (f = d > 0 ? -s : Math.min(Math.max(-s, -c), s)),
            (p = -d * d + f * (f + 2 * c) + l))
          : f <= g
            ? ((d = 0),
              (f = Math.min(Math.max(-s, -c), s)),
              (p = f * (f + 2 * c) + l))
            : ((d = Math.max(0, -(a * s + o))),
              (f = d > 0 ? s : Math.min(Math.max(-s, -c), s)),
              (p = -d * d + f * (f + 2 * c) + l));
    else
      ((f = a > 0 ? -s : s),
        (d = Math.max(0, -(a * f + o))),
        (p = -d * d + f * (f + 2 * c) + l));
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, d),
      r && r.copy(Gi).addScaledVector(ti, f),
      p
    );
  }
  intersectSphere(e, t) {
    Ht.subVectors(e.center, this.origin);
    const n = Ht.dot(this.direction),
      r = Ht.dot(Ht) - n * n,
      s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r),
      o = n - a,
      c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, c;
    const l = 1 / this.direction.x,
      h = 1 / this.direction.y,
      d = 1 / this.direction.z,
      f = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - f.x) * l), (r = (e.max.x - f.x) * l))
        : ((n = (e.max.x - f.x) * l), (r = (e.min.x - f.x) * l)),
      h >= 0
        ? ((s = (e.min.y - f.y) * h), (a = (e.max.y - f.y) * h))
        : ((s = (e.max.y - f.y) * h), (a = (e.min.y - f.y) * h)),
      n > a ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (a < r || isNaN(r)) && (r = a),
      d >= 0
        ? ((o = (e.min.z - f.z) * d), (c = (e.max.z - f.z) * d))
        : ((o = (e.max.z - f.z) * d), (c = (e.min.z - f.z) * d)),
      n > c || o > r) ||
      ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Ht) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    (zi.subVectors(t, e), ni.subVectors(n, e), Vi.crossVectors(zi, ni));
    let a = this.direction.dot(Vi),
      o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) ((o = -1), (a = -a));
    else return null;
    jt.subVectors(this.origin, e);
    const c = o * this.direction.dot(ni.crossVectors(jt, ni));
    if (c < 0) return null;
    const l = o * this.direction.dot(zi.cross(jt));
    if (l < 0 || c + l > a) return null;
    const h = -o * jt.dot(Vi);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e),
      this.direction.transformDirection(e),
      this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qe {
  constructor(e, t, n, r, s, a, o, c, l, h, d, f, p, g, M, m) {
    ((Qe.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, h, d, f, p, g, M, m));
  }
  set(e, t, n, r, s, a, o, c, l, h, d, f, p, g, M, m) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[4] = t),
      (u[8] = n),
      (u[12] = r),
      (u[1] = s),
      (u[5] = a),
      (u[9] = o),
      (u[13] = c),
      (u[2] = l),
      (u[6] = h),
      (u[10] = d),
      (u[14] = f),
      (u[3] = p),
      (u[7] = g),
      (u[11] = M),
      (u[15] = m),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new Qe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      r = 1 / Sn.setFromMatrixColumn(e, 0).length(),
      s = 1 / Sn.setFromMatrixColumn(e, 1).length(),
      a = 1 / Sn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(r),
      l = Math.sin(r),
      h = Math.cos(s),
      d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = a * h,
        p = a * d,
        g = o * h,
        M = o * d;
      ((t[0] = c * h),
        (t[4] = -c * d),
        (t[8] = l),
        (t[1] = p + g * l),
        (t[5] = f - M * l),
        (t[9] = -o * c),
        (t[2] = M - f * l),
        (t[6] = g + p * l),
        (t[10] = a * c));
    } else if (e.order === "YXZ") {
      const f = c * h,
        p = c * d,
        g = l * h,
        M = l * d;
      ((t[0] = f + M * o),
        (t[4] = g * o - p),
        (t[8] = a * l),
        (t[1] = a * d),
        (t[5] = a * h),
        (t[9] = -o),
        (t[2] = p * o - g),
        (t[6] = M + f * o),
        (t[10] = a * c));
    } else if (e.order === "ZXY") {
      const f = c * h,
        p = c * d,
        g = l * h,
        M = l * d;
      ((t[0] = f - M * o),
        (t[4] = -a * d),
        (t[8] = g + p * o),
        (t[1] = p + g * o),
        (t[5] = a * h),
        (t[9] = M - f * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * c));
    } else if (e.order === "ZYX") {
      const f = a * h,
        p = a * d,
        g = o * h,
        M = o * d;
      ((t[0] = c * h),
        (t[4] = g * l - p),
        (t[8] = f * l + M),
        (t[1] = c * d),
        (t[5] = M * l + f),
        (t[9] = p * l - g),
        (t[2] = -l),
        (t[6] = o * c),
        (t[10] = a * c));
    } else if (e.order === "YZX") {
      const f = a * c,
        p = a * l,
        g = o * c,
        M = o * l;
      ((t[0] = c * h),
        (t[4] = M - f * d),
        (t[8] = g * d + p),
        (t[1] = d),
        (t[5] = a * h),
        (t[9] = -o * h),
        (t[2] = -l * h),
        (t[6] = p * d + g),
        (t[10] = f - M * d));
    } else if (e.order === "XZY") {
      const f = a * c,
        p = a * l,
        g = o * c,
        M = o * l;
      ((t[0] = c * h),
        (t[4] = -d),
        (t[8] = l * h),
        (t[1] = f * d + M),
        (t[5] = a * h),
        (t[9] = p * d - g),
        (t[2] = g * d - p),
        (t[6] = o * h),
        (t[10] = M * d + f));
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(oa, e, la);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      Et.subVectors(e, t),
      Et.lengthSq() === 0 && (Et.z = 1),
      Et.normalize(),
      Jt.crossVectors(n, Et),
      Jt.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Et.x += 1e-4) : (Et.z += 1e-4),
        Et.normalize(),
        Jt.crossVectors(n, Et)),
      Jt.normalize(),
      ii.crossVectors(Et, Jt),
      (r[0] = Jt.x),
      (r[4] = ii.x),
      (r[8] = Et.x),
      (r[1] = Jt.y),
      (r[5] = ii.y),
      (r[9] = Et.y),
      (r[2] = Jt.z),
      (r[6] = ii.z),
      (r[10] = Et.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      h = n[1],
      d = n[5],
      f = n[9],
      p = n[13],
      g = n[2],
      M = n[6],
      m = n[10],
      u = n[14],
      A = n[3],
      T = n[7],
      E = n[11],
      L = n[15],
      b = r[0],
      w = r[4],
      I = r[8],
      S = r[12],
      x = r[1],
      C = r[5],
      z = r[9],
      G = r[13],
      k = r[2],
      Z = r[6],
      W = r[10],
      Q = r[14],
      H = r[3],
      re = r[7],
      he = r[11],
      ge = r[15];
    return (
      (s[0] = a * b + o * x + c * k + l * H),
      (s[4] = a * w + o * C + c * Z + l * re),
      (s[8] = a * I + o * z + c * W + l * he),
      (s[12] = a * S + o * G + c * Q + l * ge),
      (s[1] = h * b + d * x + f * k + p * H),
      (s[5] = h * w + d * C + f * Z + p * re),
      (s[9] = h * I + d * z + f * W + p * he),
      (s[13] = h * S + d * G + f * Q + p * ge),
      (s[2] = g * b + M * x + m * k + u * H),
      (s[6] = g * w + M * C + m * Z + u * re),
      (s[10] = g * I + M * z + m * W + u * he),
      (s[14] = g * S + M * G + m * Q + u * ge),
      (s[3] = A * b + T * x + E * k + L * H),
      (s[7] = A * w + T * C + E * Z + L * re),
      (s[11] = A * I + T * z + E * W + L * he),
      (s[15] = A * S + T * G + E * Q + L * ge),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      c = e[9],
      l = e[13],
      h = e[2],
      d = e[6],
      f = e[10],
      p = e[14],
      g = e[3],
      M = e[7],
      m = e[11],
      u = e[15];
    return (
      g *
        (+s * c * d -
          r * l * d -
          s * o * f +
          n * l * f +
          r * o * p -
          n * c * p) +
      M *
        (+t * c * p -
          t * l * f +
          s * a * f -
          r * a * p +
          r * l * h -
          s * c * h) +
      m *
        (+t * l * d -
          t * o * p -
          s * a * d +
          n * a * p +
          s * o * h -
          n * l * h) +
      u *
        (-r * o * h - t * c * d + t * o * f + r * a * d - n * a * f + n * c * h)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      h = e[8],
      d = e[9],
      f = e[10],
      p = e[11],
      g = e[12],
      M = e[13],
      m = e[14],
      u = e[15],
      A = d * m * l - M * f * l + M * c * p - o * m * p - d * c * u + o * f * u,
      T = g * f * l - h * m * l - g * c * p + a * m * p + h * c * u - a * f * u,
      E = h * M * l - g * d * l + g * o * p - a * M * p - h * o * u + a * d * u,
      L = g * d * c - h * M * c - g * o * f + a * M * f + h * o * m - a * d * m,
      b = t * A + n * T + r * E + s * L;
    if (b === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / b;
    return (
      (e[0] = A * w),
      (e[1] =
        (M * f * s -
          d * m * s -
          M * r * p +
          n * m * p +
          d * r * u -
          n * f * u) *
        w),
      (e[2] =
        (o * m * s -
          M * c * s +
          M * r * l -
          n * m * l -
          o * r * u +
          n * c * u) *
        w),
      (e[3] =
        (d * c * s -
          o * f * s -
          d * r * l +
          n * f * l +
          o * r * p -
          n * c * p) *
        w),
      (e[4] = T * w),
      (e[5] =
        (h * m * s -
          g * f * s +
          g * r * p -
          t * m * p -
          h * r * u +
          t * f * u) *
        w),
      (e[6] =
        (g * c * s -
          a * m * s -
          g * r * l +
          t * m * l +
          a * r * u -
          t * c * u) *
        w),
      (e[7] =
        (a * f * s -
          h * c * s +
          h * r * l -
          t * f * l -
          a * r * p +
          t * c * p) *
        w),
      (e[8] = E * w),
      (e[9] =
        (g * d * s -
          h * M * s -
          g * n * p +
          t * M * p +
          h * n * u -
          t * d * u) *
        w),
      (e[10] =
        (a * M * s -
          g * o * s +
          g * n * l -
          t * M * l -
          a * n * u +
          t * o * u) *
        w),
      (e[11] =
        (h * o * s -
          a * d * s -
          h * n * l +
          t * d * l +
          a * n * p -
          t * o * p) *
        w),
      (e[12] = L * w),
      (e[13] =
        (h * M * r -
          g * d * r +
          g * n * f -
          t * M * f -
          h * n * m +
          t * d * m) *
        w),
      (e[14] =
        (g * o * r -
          a * M * r -
          g * n * c +
          t * M * c +
          a * n * m -
          t * o * m) *
        w),
      (e[15] =
        (a * d * r -
          h * o * r +
          h * n * c -
          t * d * c -
          a * n * f +
          t * o * f) *
        w),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      c = e.z,
      l = s * a,
      h = s * o;
    return (
      this.set(
        l * a + n,
        l * o - r * c,
        l * c + r * o,
        0,
        l * o + r * c,
        h * o + n,
        h * c - r * a,
        0,
        l * c - r * o,
        h * c + r * a,
        s * c * c + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
  }
  makeShear(e, t, n, r, s, a) {
    return (this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this);
  }
  compose(e, t, n) {
    const r = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      c = t._w,
      l = s + s,
      h = a + a,
      d = o + o,
      f = s * l,
      p = s * h,
      g = s * d,
      M = a * h,
      m = a * d,
      u = o * d,
      A = c * l,
      T = c * h,
      E = c * d,
      L = n.x,
      b = n.y,
      w = n.z;
    return (
      (r[0] = (1 - (M + u)) * L),
      (r[1] = (p + E) * L),
      (r[2] = (g - T) * L),
      (r[3] = 0),
      (r[4] = (p - E) * b),
      (r[5] = (1 - (f + u)) * b),
      (r[6] = (m + A) * b),
      (r[7] = 0),
      (r[8] = (g + T) * w),
      (r[9] = (m - A) * w),
      (r[10] = (1 - (f + M)) * w),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Sn.set(r[0], r[1], r[2]).length();
    const a = Sn.set(r[4], r[5], r[6]).length(),
      o = Sn.set(r[8], r[9], r[10]).length();
    (this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      It.copy(this));
    const l = 1 / s,
      h = 1 / a,
      d = 1 / o;
    return (
      (It.elements[0] *= l),
      (It.elements[1] *= l),
      (It.elements[2] *= l),
      (It.elements[4] *= h),
      (It.elements[5] *= h),
      (It.elements[6] *= h),
      (It.elements[8] *= d),
      (It.elements[9] *= d),
      (It.elements[10] *= d),
      t.setFromRotationMatrix(It),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, r, s, a, o = 2e3) {
    const c = this.elements,
      l = (2 * s) / (t - e),
      h = (2 * s) / (n - r),
      d = (t + e) / (t - e),
      f = (n + r) / (n - r);
    let p, g;
    if (o === 2e3) ((p = -(a + s) / (a - s)), (g = (-2 * a * s) / (a - s)));
    else if (o === 2001) ((p = -a / (a - s)), (g = (-a * s) / (a - s)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o,
      );
    return (
      (c[0] = l),
      (c[4] = 0),
      (c[8] = d),
      (c[12] = 0),
      (c[1] = 0),
      (c[5] = h),
      (c[9] = f),
      (c[13] = 0),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = p),
      (c[14] = g),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = -1),
      (c[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, s, a, o = 2e3) {
    const c = this.elements,
      l = 1 / (t - e),
      h = 1 / (n - r),
      d = 1 / (a - s),
      f = (t + e) * l,
      p = (n + r) * h;
    let g, M;
    if (o === 2e3) ((g = (a + s) * d), (M = -2 * d));
    else if (o === 2001) ((g = s * d), (M = -1 * d));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o,
      );
    return (
      (c[0] = 2 * l),
      (c[4] = 0),
      (c[8] = 0),
      (c[12] = -f),
      (c[1] = 0),
      (c[5] = 2 * h),
      (c[9] = 0),
      (c[13] = -p),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = M),
      (c[14] = -g),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = 0),
      (c[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Sn = new F(),
  It = new Qe(),
  oa = new F(0, 0, 0),
  la = new F(1, 1, 1),
  Jt = new F(),
  ii = new F(),
  Et = new F(),
  Pr = new Qe(),
  Dr = new Yn();
class Ot {
  constructor(e = 0, t = 0, n = 0, r = Ot.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(e) {
    ((this._order = e), this._onChangeCallback());
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      s = r[0],
      a = r[4],
      o = r[8],
      c = r[1],
      l = r[5],
      h = r[9],
      d = r[2],
      f = r[6],
      p = r[10];
    switch (t) {
      case "XYZ":
        ((this._y = Math.asin(Fe(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-h, p)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(f, l)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-Fe(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(o, p)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-d, s)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(Fe(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-d, p)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, s))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-Fe(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(f, p)), (this._z = Math.atan2(c, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l))));
        break;
      case "YZX":
        ((this._z = Math.asin(Fe(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-h, l)), (this._y = Math.atan2(-d, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, p))));
        break;
      case "XZY":
        ((this._z = Math.asin(-Fe(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(f, l)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-h, p)), (this._y = 0)));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t,
        );
    }
    return ((this._order = t), n === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(e, t, n) {
    return (
      Pr.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(Pr, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return (Dr.setFromEuler(this), this.setFromQuaternion(Dr, e));
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
}
Ot.DEFAULT_ORDER = "XYZ";
class fr {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let ca = 0;
const Lr = new F(),
  En = new Yn(),
  kt = new Qe(),
  ri = new F(),
  Vn = new F(),
  ha = new F(),
  ua = new Yn(),
  Ur = new F(1, 0, 0),
  Ir = new F(0, 1, 0),
  Fr = new F(0, 0, 1),
  Nr = { type: "added" },
  da = { type: "removed" },
  yn = { type: "childadded", child: null },
  Hi = { type: "childremoved", child: null };
class ot extends Fn {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: ca++ }),
      (this.uuid = qn()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = ot.DEFAULT_UP.clone()));
    const e = new F(),
      t = new Ot(),
      n = new Yn(),
      r = new F(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    (t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new Qe() },
        normalMatrix: { value: new Ce() },
      }),
      (this.matrix = new Qe()),
      (this.matrixWorld = new Qe()),
      (this.matrixAutoUpdate = ot.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new fr()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(e) {
    return (this.quaternion.premultiply(e), this);
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return (En.setFromAxisAngle(e, t), this.quaternion.multiply(En), this);
  }
  rotateOnWorldAxis(e, t) {
    return (En.setFromAxisAngle(e, t), this.quaternion.premultiply(En), this);
  }
  rotateX(e) {
    return this.rotateOnAxis(Ur, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ir, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Fr, e);
  }
  translateOnAxis(e, t) {
    return (
      Lr.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Lr.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Ur, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ir, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Fr, e);
  }
  localToWorld(e) {
    return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(kt.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? ri.copy(e) : ri.set(e, t, n);
    const r = this.parent;
    (this.updateWorldMatrix(!0, !1),
      Vn.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? kt.lookAt(Vn, ri, this.up)
        : kt.lookAt(ri, Vn, this.up),
      this.quaternion.setFromRotationMatrix(kt),
      r &&
        (kt.extractRotation(r.matrixWorld),
        En.setFromRotationMatrix(kt),
        this.quaternion.premultiply(En.invert())));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Nr),
            (yn.child = e),
            this.dispatchEvent(yn),
            (yn.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e,
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(da),
        (Hi.child = e),
        this.dispatchEvent(Hi),
        (Hi.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return (e !== null && e.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      kt.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), kt.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(kt),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Nr),
      (yn.child = e),
      this.dispatchEvent(yn),
      (yn.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Vn, e, ha),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Vn, ua, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0)));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    ((r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.visibility = this._visibility),
        (r.active = this._active),
        (r.bounds = this._bounds.map((o) => ({
          boxInitialized: o.boxInitialized,
          boxMin: o.box.min.toArray(),
          boxMax: o.box.max.toArray(),
          sphereInitialized: o.sphereInitialized,
          sphereRadius: o.sphere.radius,
          sphereCenter: o.sphere.center.toArray(),
        }))),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.geometryCount = this._geometryCount),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray(),
          })));
    function s(o, c) {
      return (o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const d = c[l];
            s(e.shapes, d);
          }
        else s(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        r.material = o;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        h = a(e.images),
        d = a(e.shapes),
        f = a(e.skeletons),
        p = a(e.animations),
        g = a(e.nodes);
      (o.length > 0 && (n.geometries = o),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        h.length > 0 && (n.images = h),
        d.length > 0 && (n.shapes = d),
        f.length > 0 && (n.skeletons = f),
        p.length > 0 && (n.animations = p),
        g.length > 0 && (n.nodes = g));
    }
    return ((n.object = r), n);
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        (delete h.metadata, c.push(h));
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
ot.DEFAULT_UP = new F(0, 1, 0);
ot.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ft = new F(),
  Wt = new F(),
  ki = new F(),
  Xt = new F(),
  Tn = new F(),
  An = new F(),
  Or = new F(),
  Wi = new F(),
  Xi = new F(),
  qi = new F(),
  Yi = new Ze(),
  Ki = new Ze(),
  Zi = new Ze();
class Nt {
  constructor(e = new F(), t = new F(), n = new F()) {
    ((this.a = e), (this.b = t), (this.c = n));
  }
  static getNormal(e, t, n, r) {
    (r.subVectors(n, t), Ft.subVectors(e, t), r.cross(Ft));
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    (Ft.subVectors(r, t), Wt.subVectors(n, t), ki.subVectors(e, t));
    const a = Ft.dot(Ft),
      o = Ft.dot(Wt),
      c = Ft.dot(ki),
      l = Wt.dot(Wt),
      h = Wt.dot(ki),
      d = a * l - o * o;
    if (d === 0) return (s.set(0, 0, 0), null);
    const f = 1 / d,
      p = (l * c - o * h) * f,
      g = (a * h - o * c) * f;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Xt) === null
      ? !1
      : Xt.x >= 0 && Xt.y >= 0 && Xt.x + Xt.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, c) {
    return this.getBarycoord(e, t, n, r, Xt) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(s, Xt.x),
        c.addScaledVector(a, Xt.y),
        c.addScaledVector(o, Xt.z),
        c);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return (
      Yi.setScalar(0),
      Ki.setScalar(0),
      Zi.setScalar(0),
      Yi.fromBufferAttribute(e, t),
      Ki.fromBufferAttribute(e, n),
      Zi.fromBufferAttribute(e, r),
      a.setScalar(0),
      a.addScaledVector(Yi, s.x),
      a.addScaledVector(Ki, s.y),
      a.addScaledVector(Zi, s.z),
      a
    );
  }
  static isFrontFacing(e, t, n, r) {
    return (Ft.subVectors(n, t), Wt.subVectors(e, t), Ft.cross(Wt).dot(r) < 0);
  }
  set(e, t, n) {
    return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
  }
  setFromPointsAndIndices(e, t, n, r) {
    return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this);
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
  }
  getArea() {
    return (
      Ft.subVectors(this.c, this.b),
      Wt.subVectors(this.a, this.b),
      Ft.cross(Wt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Nt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Nt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return Nt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Nt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Nt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let a, o;
    (Tn.subVectors(r, n), An.subVectors(s, n), Wi.subVectors(e, n));
    const c = Tn.dot(Wi),
      l = An.dot(Wi);
    if (c <= 0 && l <= 0) return t.copy(n);
    Xi.subVectors(e, r);
    const h = Tn.dot(Xi),
      d = An.dot(Xi);
    if (h >= 0 && d <= h) return t.copy(r);
    const f = c * d - h * l;
    if (f <= 0 && c >= 0 && h <= 0)
      return ((a = c / (c - h)), t.copy(n).addScaledVector(Tn, a));
    qi.subVectors(e, s);
    const p = Tn.dot(qi),
      g = An.dot(qi);
    if (g >= 0 && p <= g) return t.copy(s);
    const M = p * l - c * g;
    if (M <= 0 && l >= 0 && g <= 0)
      return ((o = l / (l - g)), t.copy(n).addScaledVector(An, o));
    const m = h * g - p * d;
    if (m <= 0 && d - h >= 0 && p - g >= 0)
      return (
        Or.subVectors(s, r),
        (o = (d - h) / (d - h + (p - g))),
        t.copy(r).addScaledVector(Or, o)
      );
    const u = 1 / (m + M + f);
    return (
      (a = M * u),
      (o = f * u),
      t.copy(n).addScaledVector(Tn, a).addScaledVector(An, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Ts = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Qt = { h: 0, s: 0, l: 0 },
  si = { h: 0, s: 0, l: 0 };
function $i(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? i + (e - i) * 6 * (2 / 3 - t)
          : i
  );
}
class Ie {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
          ? this.setHex(r)
          : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return ((this.r = e), (this.g = e), (this.b = e), this);
  }
  setHex(e, t = Ct) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      We.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = We.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      We.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = We.workingColorSpace) {
    if (((e = Zs(e, 1)), (t = Fe(t, 0, 1)), (n = Fe(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - s;
      ((this.r = $i(a, s, e + 1 / 3)),
        (this.g = $i(a, s, e)),
        (this.b = $i(a, s, e - 1 / 3)));
    }
    return (We.toWorkingColorSpace(this, r), this);
  }
  setStyle(e, t = Ct) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored.",
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = r[1],
        o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t,
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t,
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t,
        );
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ct) {
    const n = Ts[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
  }
  copySRGBToLinear(e) {
    return ((this.r = Kt(e.r)), (this.g = Kt(e.g)), (this.b = Kt(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = Ln(e.r)), (this.g = Ln(e.g)), (this.b = Ln(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(e = Ct) {
    return (
      We.fromWorkingColorSpace(_t.copy(this), e),
      Math.round(Fe(_t.r * 255, 0, 255)) * 65536 +
        Math.round(Fe(_t.g * 255, 0, 255)) * 256 +
        Math.round(Fe(_t.b * 255, 0, 255))
    );
  }
  getHexString(e = Ct) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.fromWorkingColorSpace(_t.copy(this), t);
    const n = _t.r,
      r = _t.g,
      s = _t.b,
      a = Math.max(n, r, s),
      o = Math.min(n, r, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a) ((c = 0), (l = 0));
    else {
      const d = a - o;
      switch (((l = h <= 0.5 ? d / (a + o) : d / (2 - a - o)), a)) {
        case n:
          c = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / d + 2;
          break;
        case s:
          c = (n - r) / d + 4;
          break;
      }
      c /= 6;
    }
    return ((e.h = c), (e.s = l), (e.l = h), e);
  }
  getRGB(e, t = We.workingColorSpace) {
    return (
      We.fromWorkingColorSpace(_t.copy(this), t),
      (e.r = _t.r),
      (e.g = _t.g),
      (e.b = _t.b),
      e
    );
  }
  getStyle(e = Ct) {
    We.fromWorkingColorSpace(_t.copy(this), e);
    const t = _t.r,
      n = _t.g,
      r = _t.b;
    return e !== Ct
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return (this.getHSL(Qt), this.setHSL(Qt.h + e, Qt.s + t, Qt.l + n));
  }
  add(e) {
    return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r),
      (this.g = e.g + t.g),
      (this.b = e.b + t.b),
      this
    );
  }
  addScalar(e) {
    return ((this.r += e), (this.g += e), (this.b += e), this);
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
  }
  multiplyScalar(e) {
    return ((this.r *= e), (this.g *= e), (this.b *= e), this);
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    (this.getHSL(Qt), e.getHSL(si));
    const n = Ui(Qt.h, si.h, t),
      r = Ui(Qt.s, si.s, t),
      s = Ui(Qt.l, si.l, t);
    return (this.setHSL(n, r, s), this);
  }
  setFromVector3(e) {
    return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * r),
      (this.g = s[1] * t + s[4] * n + s[7] * r),
      (this.b = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    (yield this.r, yield this.g, yield this.b);
  }
}
const _t = new Ie();
Ie.NAMES = Ts;
let fa = 0;
class mn extends Fn {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: fa++ }),
      (this.uuid = qn()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = 100),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Ie(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = 7680),
      (this.stencilZFail = 7680),
      (this.stencilZPass = 7680),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0));
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`,
          );
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
            ? r.copy(n)
            : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    ((n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== 1 && (n.blending = this.blending),
      this.side !== 0 && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== 204 && (n.blendSrc = this.blendSrc),
      this.blendDst !== 205 && (n.blendDst = this.blendDst),
      this.blendEquation !== 100 && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== 3 && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData));
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        (delete c.metadata, a.push(c));
      }
      return a;
    }
    if (t) {
      const s = r(e.textures),
        a = r(e.images);
      (s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a));
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite));
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class As extends mn {
  constructor(e) {
    (super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ie(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Ot()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const at = new F(),
  ai = new Ge();
class Gt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.gpuType = 1015),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return ((this.usage = e), this);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    ((e *= this.itemSize), (n *= t.itemSize));
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return (this.array.set(e), this);
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        (ai.fromBufferAttribute(this, t),
          ai.applyMatrix3(e),
          this.setXY(t, ai.x, ai.y));
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        (at.fromBufferAttribute(this, t),
          at.applyMatrix3(e),
          this.setXYZ(t, at.x, at.y, at.z));
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (at.fromBufferAttribute(this, t),
        at.applyMatrix4(e),
        this.setXYZ(t, at.x, at.y, at.z));
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (at.fromBufferAttribute(this, t),
        at.applyNormalMatrix(e),
        this.setXYZ(t, at.x, at.y, at.z));
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (at.fromBufferAttribute(this, t),
        at.transformDirection(e),
        this.setXYZ(t, at.x, at.y, at.z));
    return this;
  }
  set(e, t = 0) {
    return (this.array.set(e, t), this);
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return (this.normalized && (n = Bn(n, this.array)), n);
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Mt(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return (this.normalized && (t = Bn(t, this.array)), t);
  }
  setX(e, t) {
    return (
      this.normalized && (t = Mt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return (this.normalized && (t = Bn(t, this.array)), t);
  }
  setY(e, t) {
    return (
      this.normalized && (t = Mt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return (this.normalized && (t = Bn(t, this.array)), t);
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Mt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return (this.normalized && (t = Bn(t, this.array)), t);
  }
  setW(e, t) {
    return (
      this.normalized && (t = Mt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Mt(t, this.array)), (n = Mt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Mt(t, this.array)),
        (n = Mt(n, this.array)),
        (r = Mt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Mt(t, this.array)),
        (n = Mt(n, this.array)),
        (r = Mt(r, this.array)),
        (s = Mt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return ((this.onUploadCallback = e), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== 35044 && (e.usage = this.usage),
      e
    );
  }
}
class bs extends Gt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Rs extends Gt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class lt extends Gt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let pa = 0;
const wt = new Qe(),
  ji = new ot(),
  bn = new F(),
  yt = new Kn(),
  Hn = new Kn(),
  ut = new F();
class Pt extends Fn {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: pa++ }),
      (this.uuid = qn()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Ss(e) ? Rs : bs)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return ((this.indirect = e), this);
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return ((this.attributes[e] = t), this);
  }
  deleteAttribute(e) {
    return (delete this.attributes[e], this);
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    ((this.drawRange.start = e), (this.drawRange.count = t));
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ce().getNormalMatrix(e);
      (n.applyNormalMatrix(s), (n.needsUpdate = !0));
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return (wt.makeRotationFromQuaternion(e), this.applyMatrix4(wt), this);
  }
  rotateX(e) {
    return (wt.makeRotationX(e), this.applyMatrix4(wt), this);
  }
  rotateY(e) {
    return (wt.makeRotationY(e), this.applyMatrix4(wt), this);
  }
  rotateZ(e) {
    return (wt.makeRotationZ(e), this.applyMatrix4(wt), this);
  }
  translate(e, t, n) {
    return (wt.makeTranslation(e, t, n), this.applyMatrix4(wt), this);
  }
  scale(e, t, n) {
    return (wt.makeScale(e, t, n), this.applyMatrix4(wt), this);
  }
  lookAt(e) {
    return (
      ji.lookAt(e),
      ji.updateMatrix(),
      this.applyMatrix4(ji.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(bn).negate(),
      this.translate(bn.x, bn.y, bn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new lt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      (e.length > t.count &&
        console.warn(
          "THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.",
        ),
        (t.needsUpdate = !0));
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Kn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new F(-1 / 0, -1 / 0, -1 / 0),
          new F(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          (yt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (ut.addVectors(this.boundingBox.min, yt.min),
                this.boundingBox.expandByPoint(ut),
                ut.addVectors(this.boundingBox.max, yt.max),
                this.boundingBox.expandByPoint(ut))
              : (this.boundingBox.expandByPoint(yt.min),
                this.boundingBox.expandByPoint(yt.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ai());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new F(), 1 / 0));
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((yt.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          (Hn.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (ut.addVectors(yt.min, Hn.min),
                yt.expandByPoint(ut),
                ut.addVectors(yt.max, Hn.max),
                yt.expandByPoint(ut))
              : (yt.expandByPoint(Hn.min), yt.expandByPoint(Hn.max)));
        }
      yt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        (ut.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(ut))));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            (ut.fromBufferAttribute(o, l),
              c && (bn.fromBufferAttribute(e, l), ut.add(bn)),
              (r = Math.max(r, n.distanceToSquared(ut))));
        }
      ((this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const n = t.position,
      r = t.normal,
      s = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Gt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      c = [];
    for (let I = 0; I < n.count; I++) ((o[I] = new F()), (c[I] = new F()));
    const l = new F(),
      h = new F(),
      d = new F(),
      f = new Ge(),
      p = new Ge(),
      g = new Ge(),
      M = new F(),
      m = new F();
    function u(I, S, x) {
      (l.fromBufferAttribute(n, I),
        h.fromBufferAttribute(n, S),
        d.fromBufferAttribute(n, x),
        f.fromBufferAttribute(s, I),
        p.fromBufferAttribute(s, S),
        g.fromBufferAttribute(s, x),
        h.sub(l),
        d.sub(l),
        p.sub(f),
        g.sub(f));
      const C = 1 / (p.x * g.y - g.x * p.y);
      isFinite(C) &&
        (M.copy(h)
          .multiplyScalar(g.y)
          .addScaledVector(d, -p.y)
          .multiplyScalar(C),
        m
          .copy(d)
          .multiplyScalar(p.x)
          .addScaledVector(h, -g.x)
          .multiplyScalar(C),
        o[I].add(M),
        o[S].add(M),
        o[x].add(M),
        c[I].add(m),
        c[S].add(m),
        c[x].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: e.count }]);
    for (let I = 0, S = A.length; I < S; ++I) {
      const x = A[I],
        C = x.start,
        z = x.count;
      for (let G = C, k = C + z; G < k; G += 3)
        u(e.getX(G + 0), e.getX(G + 1), e.getX(G + 2));
    }
    const T = new F(),
      E = new F(),
      L = new F(),
      b = new F();
    function w(I) {
      (L.fromBufferAttribute(r, I), b.copy(L));
      const S = o[I];
      (T.copy(S),
        T.sub(L.multiplyScalar(L.dot(S))).normalize(),
        E.crossVectors(b, S));
      const C = E.dot(c[I]) < 0 ? -1 : 1;
      a.setXYZW(I, T.x, T.y, T.z, C);
    }
    for (let I = 0, S = A.length; I < S; ++I) {
      const x = A[I],
        C = x.start,
        z = x.count;
      for (let G = C, k = C + z; G < k; G += 3)
        (w(e.getX(G + 0)), w(e.getX(G + 1)), w(e.getX(G + 2)));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        ((n = new Gt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n));
      else for (let f = 0, p = n.count; f < p; f++) n.setXYZ(f, 0, 0, 0);
      const r = new F(),
        s = new F(),
        a = new F(),
        o = new F(),
        c = new F(),
        l = new F(),
        h = new F(),
        d = new F();
      if (e)
        for (let f = 0, p = e.count; f < p; f += 3) {
          const g = e.getX(f + 0),
            M = e.getX(f + 1),
            m = e.getX(f + 2);
          (r.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, M),
            a.fromBufferAttribute(t, m),
            h.subVectors(a, s),
            d.subVectors(r, s),
            h.cross(d),
            o.fromBufferAttribute(n, g),
            c.fromBufferAttribute(n, M),
            l.fromBufferAttribute(n, m),
            o.add(h),
            c.add(h),
            l.add(h),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(M, c.x, c.y, c.z),
            n.setXYZ(m, l.x, l.y, l.z));
        }
      else
        for (let f = 0, p = t.count; f < p; f += 3)
          (r.fromBufferAttribute(t, f + 0),
            s.fromBufferAttribute(t, f + 1),
            a.fromBufferAttribute(t, f + 2),
            h.subVectors(a, s),
            d.subVectors(r, s),
            h.cross(d),
            n.setXYZ(f + 0, h.x, h.y, h.z),
            n.setXYZ(f + 1, h.x, h.y, h.z),
            n.setXYZ(f + 2, h.x, h.y, h.z));
      (this.normalizeNormals(), (n.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      (ut.fromBufferAttribute(e, t),
        ut.normalize(),
        e.setXYZ(t, ut.x, ut.y, ut.z));
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array,
        h = o.itemSize,
        d = o.normalized,
        f = new l.constructor(c.length * h);
      let p = 0,
        g = 0;
      for (let M = 0, m = c.length; M < m; M++) {
        o.isInterleavedBufferAttribute
          ? (p = c[M] * o.data.stride + o.offset)
          : (p = c[M] * h);
        for (let u = 0; u < h; u++) f[g++] = l[p++];
      }
      return new Gt(f, h, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new Pt(),
      n = this.index.array,
      r = this.attributes;
    for (const o in r) {
      const c = r[o],
        l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [],
        l = s[o];
      for (let h = 0, d = l.length; h < d; h++) {
        const f = l[h],
          p = e(f, n);
        c.push(p);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const p = l[d];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && ((r[c] = h), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const l in r) {
      const h = r[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [],
        d = s[l];
      for (let f = 0, p = d.length; f < p; f++) h.push(d[f].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Br = new Qe(),
  on = new dr(),
  oi = new Ai(),
  Gr = new F(),
  li = new F(),
  ci = new F(),
  hi = new F(),
  Ji = new F(),
  ui = new F(),
  zr = new F(),
  di = new F();
class Yt extends ot {
  constructor(e = new Pt(), t = new As()) {
    (super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s));
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      ui.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c],
          d = s[c];
        h !== 0 &&
          (Ji.fromBufferAttribute(d, e),
          a ? ui.addScaledVector(Ji, h) : ui.addScaledVector(Ji.sub(t), h));
      }
      t.add(ui);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      oi.copy(n.boundingSphere),
      oi.applyMatrix4(s),
      on.copy(e.ray).recast(e.near),
      !(
        oi.containsPoint(on.origin) === !1 &&
        (on.intersectSphere(oi, Gr) === null ||
          on.origin.distanceToSquared(Gr) > (e.far - e.near) ** 2)
      ) &&
        (Br.copy(s).invert(),
        on.copy(e.ray).applyMatrix4(Br),
        !(n.boundingBox !== null && on.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, on)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry,
      a = this.material,
      o = s.index,
      c = s.attributes.position,
      l = s.attributes.uv,
      h = s.attributes.uv1,
      d = s.attributes.normal,
      f = s.groups,
      p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, M = f.length; g < M; g++) {
          const m = f[g],
            u = a[m.materialIndex],
            A = Math.max(m.start, p.start),
            T = Math.min(
              o.count,
              Math.min(m.start + m.count, p.start + p.count),
            );
          for (let E = A, L = T; E < L; E += 3) {
            const b = o.getX(E),
              w = o.getX(E + 1),
              I = o.getX(E + 2);
            ((r = fi(this, u, e, n, l, h, d, b, w, I)),
              r &&
                ((r.faceIndex = Math.floor(E / 3)),
                (r.face.materialIndex = m.materialIndex),
                t.push(r)));
          }
        }
      else {
        const g = Math.max(0, p.start),
          M = Math.min(o.count, p.start + p.count);
        for (let m = g, u = M; m < u; m += 3) {
          const A = o.getX(m),
            T = o.getX(m + 1),
            E = o.getX(m + 2);
          ((r = fi(this, a, e, n, l, h, d, A, T, E)),
            r && ((r.faceIndex = Math.floor(m / 3)), t.push(r)));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, M = f.length; g < M; g++) {
          const m = f[g],
            u = a[m.materialIndex],
            A = Math.max(m.start, p.start),
            T = Math.min(
              c.count,
              Math.min(m.start + m.count, p.start + p.count),
            );
          for (let E = A, L = T; E < L; E += 3) {
            const b = E,
              w = E + 1,
              I = E + 2;
            ((r = fi(this, u, e, n, l, h, d, b, w, I)),
              r &&
                ((r.faceIndex = Math.floor(E / 3)),
                (r.face.materialIndex = m.materialIndex),
                t.push(r)));
          }
        }
      else {
        const g = Math.max(0, p.start),
          M = Math.min(c.count, p.start + p.count);
        for (let m = g, u = M; m < u; m += 3) {
          const A = m,
            T = m + 1,
            E = m + 2;
          ((r = fi(this, a, e, n, l, h, d, A, T, E)),
            r && ((r.faceIndex = Math.floor(m / 3)), t.push(r)));
        }
      }
  }
}
function ma(i, e, t, n, r, s, a, o) {
  let c;
  if (
    (e.side === 1
      ? (c = n.intersectTriangle(a, s, r, !0, o))
      : (c = n.intersectTriangle(r, s, a, e.side === 0, o)),
    c === null)
  )
    return null;
  (di.copy(o), di.applyMatrix4(i.matrixWorld));
  const l = t.ray.origin.distanceTo(di);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: di.clone(), object: i };
}
function fi(i, e, t, n, r, s, a, o, c, l) {
  (i.getVertexPosition(o, li),
    i.getVertexPosition(c, ci),
    i.getVertexPosition(l, hi));
  const h = ma(i, e, t, n, li, ci, hi, zr);
  if (h) {
    const d = new F();
    (Nt.getBarycoord(zr, li, ci, hi, d),
      r && (h.uv = Nt.getInterpolatedAttribute(r, o, c, l, d, new Ge())),
      s && (h.uv1 = Nt.getInterpolatedAttribute(s, o, c, l, d, new Ge())),
      a &&
        ((h.normal = Nt.getInterpolatedAttribute(a, o, c, l, d, new F())),
        h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1)));
    const f = { a: o, b: c, c: l, normal: new F(), materialIndex: 0 };
    (Nt.getNormal(li, ci, hi, f.normal), (h.face = f), (h.barycoord = d));
  }
  return h;
}
class Zn extends Pt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    (super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: a,
      }));
    const o = this;
    ((r = Math.floor(r)), (s = Math.floor(s)), (a = Math.floor(a)));
    const c = [],
      l = [],
      h = [],
      d = [];
    let f = 0,
      p = 0;
    (g("z", "y", "x", -1, -1, n, t, e, a, s, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
      g("x", "z", "y", 1, 1, e, n, t, r, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, r, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, r, s, 4),
      g("x", "y", "z", -1, -1, e, t, -n, r, s, 5),
      this.setIndex(c),
      this.setAttribute("position", new lt(l, 3)),
      this.setAttribute("normal", new lt(h, 3)),
      this.setAttribute("uv", new lt(d, 2)));
    function g(M, m, u, A, T, E, L, b, w, I, S) {
      const x = E / w,
        C = L / I,
        z = E / 2,
        G = L / 2,
        k = b / 2,
        Z = w + 1,
        W = I + 1;
      let Q = 0,
        H = 0;
      const re = new F();
      for (let he = 0; he < W; he++) {
        const ge = he * C - G;
        for (let Le = 0; Le < Z; Le++) {
          const $e = Le * x - z;
          ((re[M] = $e * A),
            (re[m] = ge * T),
            (re[u] = k),
            l.push(re.x, re.y, re.z),
            (re[M] = 0),
            (re[m] = 0),
            (re[u] = b > 0 ? 1 : -1),
            h.push(re.x, re.y, re.z),
            d.push(Le / w),
            d.push(1 - he / I),
            (Q += 1));
        }
      }
      for (let he = 0; he < I; he++)
        for (let ge = 0; ge < w; ge++) {
          const Le = f + ge + Z * he,
            $e = f + ge + Z * (he + 1),
            q = f + (ge + 1) + Z * (he + 1),
            ee = f + (ge + 1) + Z * he;
          (c.push(Le, $e, ee), c.push($e, q, ee), (H += 6));
        }
      (o.addGroup(p, H, S), (p += H), (f += Q));
    }
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Zn(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function In(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone())
        : Array.isArray(r)
          ? (e[t][n] = r.slice())
          : (e[t][n] = r);
    }
  }
  return e;
}
function vt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = In(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function _a(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function ws(i) {
  const e = i.getRenderTarget();
  return e === null
    ? i.outputColorSpace
    : e.isXRRenderTarget === !0
      ? e.texture.colorSpace
      : We.workingColorSpace;
}
const ga = { clone: In, merge: vt };
var va = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  xa = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class tn extends mn {
  constructor(e) {
    (super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = va),
      (this.fragmentShader = xa),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = In(e.uniforms)),
      (this.uniformsGroups = _a(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture
        ? (t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
          ? (t.uniforms[r] = { type: "c", value: a.getHex() })
          : a && a.isVector2
            ? (t.uniforms[r] = { type: "v2", value: a.toArray() })
            : a && a.isVector3
              ? (t.uniforms[r] = { type: "v3", value: a.toArray() })
              : a && a.isVector4
                ? (t.uniforms[r] = { type: "v4", value: a.toArray() })
                : a && a.isMatrix3
                  ? (t.uniforms[r] = { type: "m3", value: a.toArray() })
                  : a && a.isMatrix4
                    ? (t.uniforms[r] = { type: "m4", value: a.toArray() })
                    : (t.uniforms[r] = { value: a });
    }
    (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping));
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return (Object.keys(n).length > 0 && (t.extensions = n), t);
  }
}
class Cs extends ot {
  constructor() {
    (super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Qe()),
      (this.projectionMatrix = new Qe()),
      (this.projectionMatrixInverse = new Qe()),
      (this.coordinateSystem = 2e3));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    (super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(e, t) {
    (super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const en = new F(),
  Vr = new Ge(),
  Hr = new Ge();
class Tt extends Cs {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    (super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    ((this.fov = yi * 2 * Math.atan(t)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    const e = Math.tan(Li * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return yi * 2 * Math.atan(Math.tan(Li * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    (en.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(en.x, en.y).multiplyScalar(-e / en.z),
      en.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(en.x, en.y).multiplyScalar(-e / en.z));
  }
  getViewSize(e, t) {
    return (this.getViewBounds(e, Vr, Hr), t.subVectors(Hr, Vr));
  }
  setViewOffset(e, t, n, r, s, a) {
    ((this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Li * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      ((s += (a.offsetX * r) / c),
        (t -= (a.offsetY * n) / l),
        (r *= a.width / c),
        (n *= a.height / l));
    }
    const o = this.filmOffset;
    (o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Rn = -90,
  wn = 1;
class Ma extends ot {
  constructor(e, t, n) {
    (super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0));
    const r = new Tt(Rn, wn, e, t);
    ((r.layers = this.layers), this.add(r));
    const s = new Tt(Rn, wn, e, t);
    ((s.layers = this.layers), this.add(s));
    const a = new Tt(Rn, wn, e, t);
    ((a.layers = this.layers), this.add(a));
    const o = new Tt(Rn, wn, e, t);
    ((o.layers = this.layers), this.add(o));
    const c = new Tt(Rn, wn, e, t);
    ((c.layers = this.layers), this.add(c));
    const l = new Tt(Rn, wn, e, t);
    ((l.layers = this.layers), this.add(l));
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      (n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1));
    else if (e === 2001)
      (n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1));
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const l of t) (this.add(l), l.updateMatrixWorld());
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children,
      d = e.getRenderTarget(),
      f = e.getActiveCubeFace(),
      p = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    ((n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, r),
      e.render(t, s),
      e.setRenderTarget(n, 1, r),
      e.render(t, a),
      e.setRenderTarget(n, 2, r),
      e.render(t, o),
      e.setRenderTarget(n, 3, r),
      e.render(t, c),
      e.setRenderTarget(n, 4, r),
      e.render(t, l),
      (n.texture.generateMipmaps = M),
      e.setRenderTarget(n, 5, r),
      e.render(t, h),
      e.setRenderTarget(d, f, p),
      (e.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0));
  }
}
class Ps extends dt {
  constructor(e, t, n, r, s, a, o, c, l, h) {
    ((e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : 301),
      super(e, t, n, r, s, a, o, c, l, h),
      (this.isCubeTexture = !0),
      (this.flipY = !1));
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Sa extends pn {
  constructor(e = 1, t = {}) {
    (super(e, e, t), (this.isWebGLCubeRenderTarget = !0));
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    ((this.texture = new Ps(
      r,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006));
  }
  fromEquirectangularTexture(e, t) {
    ((this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter));
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new Zn(5, 5, 5),
      s = new tn({
        name: "CubemapFromEquirect",
        uniforms: In(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: 1,
        blending: 0,
      });
    s.uniforms.tEquirect.value = t;
    const a = new Yt(r, s),
      o = t.minFilter;
    return (
      t.minFilter === 1008 && (t.minFilter = 1006),
      new Ma(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) (e.setRenderTarget(this, a), e.clear(t, n, r));
    e.setRenderTarget(s);
  }
}
class Ds {
  constructor(e, t = 1, n = 1e3) {
    ((this.isFog = !0),
      (this.name = ""),
      (this.color = new Ie(e)),
      (this.near = t),
      (this.far = n));
  }
  clone() {
    return new Ds(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
}
class ku extends ot {
  constructor() {
    (super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Ot()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new Ot()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class Wu extends dt {
  constructor(e = null, t = 1, n = 1, r, s, a, o, c, l = 1003, h = 1003, d, f) {
    (super(null, a, o, c, l, h, r, s, d, f),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
const Qi = new F(),
  Ea = new F(),
  ya = new Ce();
class un {
  constructor(e = new F(1, 0, 0), t = 0) {
    ((this.isPlane = !0), (this.normal = e), (this.constant = t));
  }
  set(e, t) {
    return (this.normal.copy(e), (this.constant = t), this);
  }
  setComponents(e, t, n, r) {
    return (this.normal.set(e, t, n), (this.constant = r), this);
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Qi.subVectors(n, t).cross(Ea.subVectors(e, t)).normalize();
    return (this.setFromNormalAndCoplanarPoint(r, e), this);
  }
  copy(e) {
    return (this.normal.copy(e.normal), (this.constant = e.constant), this);
  }
  normalize() {
    const e = 1 / this.normal.length();
    return (this.normal.multiplyScalar(e), (this.constant *= e), this);
  }
  negate() {
    return ((this.constant *= -1), this.normal.negate(), this);
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Qi),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || ya.getNormalMatrix(e),
      r = this.coplanarPoint(Qi).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return ((this.constant = -r.dot(s)), this);
  }
  translate(e) {
    return ((this.constant -= e.dot(this.normal)), this);
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ln = new Ai(),
  pi = new F();
class pr {
  constructor(
    e = new un(),
    t = new un(),
    n = new un(),
    r = new un(),
    s = new un(),
    a = new un(),
  ) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(r),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3) {
    const n = this.planes,
      r = e.elements,
      s = r[0],
      a = r[1],
      o = r[2],
      c = r[3],
      l = r[4],
      h = r[5],
      d = r[6],
      f = r[7],
      p = r[8],
      g = r[9],
      M = r[10],
      m = r[11],
      u = r[12],
      A = r[13],
      T = r[14],
      E = r[15];
    if (
      (n[0].setComponents(c - s, f - l, m - p, E - u).normalize(),
      n[1].setComponents(c + s, f + l, m + p, E + u).normalize(),
      n[2].setComponents(c + a, f + h, m + g, E + A).normalize(),
      n[3].setComponents(c - a, f - h, m - g, E - A).normalize(),
      n[4].setComponents(c - o, f - d, m - M, E - T).normalize(),
      t === 2e3)
    )
      n[5].setComponents(c + o, f + d, m + M, E + T).normalize();
    else if (t === 2001) n[5].setComponents(o, d, M, T).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      (e.boundingSphere === null && e.computeBoundingSphere(),
        ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld));
    else {
      const t = e.geometry;
      (t.boundingSphere === null && t.computeBoundingSphere(),
        ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld));
    }
    return this.intersectsSphere(ln);
  }
  intersectsSprite(e) {
    return (
      ln.center.set(0, 0, 0),
      (ln.radius = 0.7071067811865476),
      ln.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(ln)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((pi.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (pi.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (pi.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(pi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ta extends mn {
  constructor(e) {
    (super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new Ie(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const kr = new Qe(),
  cr = new dr(),
  mi = new Ai(),
  _i = new F();
class Xu extends ot {
  constructor(e = new Pt(), t = new Ta()) {
    (super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.matrixWorld,
      s = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      mi.copy(n.boundingSphere),
      mi.applyMatrix4(r),
      (mi.radius += s),
      e.ray.intersectsSphere(mi) === !1)
    )
      return;
    (kr.copy(r).invert(), cr.copy(e.ray).applyMatrix4(kr));
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = n.index,
      d = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, a.start),
        p = Math.min(l.count, a.start + a.count);
      for (let g = f, M = p; g < M; g++) {
        const m = l.getX(g);
        (_i.fromBufferAttribute(d, m), Wr(_i, m, c, r, e, t, this));
      }
    } else {
      const f = Math.max(0, a.start),
        p = Math.min(d.count, a.start + a.count);
      for (let g = f, M = p; g < M; g++)
        (_i.fromBufferAttribute(d, g), Wr(_i, g, c, r, e, t, this));
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s));
        }
      }
    }
  }
}
function Wr(i, e, t, n, r, s, a) {
  const o = cr.distanceSqToPoint(i);
  if (o < t) {
    const c = new F();
    (cr.closestPointToPoint(i, c), c.applyMatrix4(n));
    const l = r.ray.origin.distanceTo(c);
    if (l < r.near || l > r.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a,
    });
  }
}
class gi extends ot {
  constructor() {
    (super(), (this.isGroup = !0), (this.type = "Group"));
  }
}
class Ls extends dt {
  constructor(e, t, n, r, s, a, o, c, l, h, d, f) {
    (super(null, a, o, c, l, h, r, s, d, f),
      (this.isCompressedTexture = !0),
      (this.image = { width: t, height: n }),
      (this.mipmaps = e),
      (this.flipY = !1),
      (this.generateMipmaps = !1));
  }
}
class qu extends Ls {
  constructor(e, t, n, r, s, a) {
    (super(e, t, n, s, a),
      (this.isCompressedArrayTexture = !0),
      (this.image.depth = r),
      (this.wrapR = 1001),
      (this.layerUpdates = new Set()));
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Yu extends Ls {
  constructor(e, t, n) {
    (super(void 0, e[0].width, e[0].height, t, n, 301),
      (this.isCompressedCubeTexture = !0),
      (this.isCubeTexture = !0),
      (this.image = e));
  }
}
class Ku extends dt {
  constructor(e, t, n, r, s, a, o, c, l) {
    (super(e, t, n, r, s, a, o, c, l),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0));
  }
}
class Us extends dt {
  constructor(e, t, n, r, s, a, o, c, l, h = 1026) {
    if (h !== 1026 && h !== 1027)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    (n === void 0 && h === 1026 && (n = 1014),
      n === void 0 && h === 1027 && (n = 1020),
      super(null, r, s, a, o, c, h, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : 1003),
      (this.minFilter = c !== void 0 ? c : 1003),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null));
  }
  copy(e) {
    return (super.copy(e), (this.compareFunction = e.compareFunction), this);
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class Is extends Pt {
  constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
    (super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: e,
        segments: t,
        thetaStart: n,
        thetaLength: r,
      }),
      (t = Math.max(3, t)));
    const s = [],
      a = [],
      o = [],
      c = [],
      l = new F(),
      h = new Ge();
    (a.push(0, 0, 0), o.push(0, 0, 1), c.push(0.5, 0.5));
    for (let d = 0, f = 3; d <= t; d++, f += 3) {
      const p = n + (d / t) * r;
      ((l.x = e * Math.cos(p)),
        (l.y = e * Math.sin(p)),
        a.push(l.x, l.y, l.z),
        o.push(0, 0, 1),
        (h.x = (a[f] / e + 1) / 2),
        (h.y = (a[f + 1] / e + 1) / 2),
        c.push(h.x, h.y));
    }
    for (let d = 1; d <= t; d++) s.push(d, d + 1, 0);
    (this.setIndex(s),
      this.setAttribute("position", new lt(a, 3)),
      this.setAttribute("normal", new lt(o, 3)),
      this.setAttribute("uv", new lt(c, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Is(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class mr extends Pt {
  constructor(
    e = 1,
    t = 1,
    n = 1,
    r = 32,
    s = 1,
    a = !1,
    o = 0,
    c = Math.PI * 2,
  ) {
    (super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: r,
        heightSegments: s,
        openEnded: a,
        thetaStart: o,
        thetaLength: c,
      }));
    const l = this;
    ((r = Math.floor(r)), (s = Math.floor(s)));
    const h = [],
      d = [],
      f = [],
      p = [];
    let g = 0;
    const M = [],
      m = n / 2;
    let u = 0;
    (A(),
      a === !1 && (e > 0 && T(!0), t > 0 && T(!1)),
      this.setIndex(h),
      this.setAttribute("position", new lt(d, 3)),
      this.setAttribute("normal", new lt(f, 3)),
      this.setAttribute("uv", new lt(p, 2)));
    function A() {
      const E = new F(),
        L = new F();
      let b = 0;
      const w = (t - e) / n;
      for (let I = 0; I <= s; I++) {
        const S = [],
          x = I / s,
          C = x * (t - e) + e;
        for (let z = 0; z <= r; z++) {
          const G = z / r,
            k = G * c + o,
            Z = Math.sin(k),
            W = Math.cos(k);
          ((L.x = C * Z),
            (L.y = -x * n + m),
            (L.z = C * W),
            d.push(L.x, L.y, L.z),
            E.set(Z, w, W).normalize(),
            f.push(E.x, E.y, E.z),
            p.push(G, 1 - x),
            S.push(g++));
        }
        M.push(S);
      }
      for (let I = 0; I < r; I++)
        for (let S = 0; S < s; S++) {
          const x = M[S][I],
            C = M[S + 1][I],
            z = M[S + 1][I + 1],
            G = M[S][I + 1];
          ((e > 0 || S !== 0) && (h.push(x, C, G), (b += 3)),
            (t > 0 || S !== s - 1) && (h.push(C, z, G), (b += 3)));
        }
      (l.addGroup(u, b, 0), (u += b));
    }
    function T(E) {
      const L = g,
        b = new Ge(),
        w = new F();
      let I = 0;
      const S = E === !0 ? e : t,
        x = E === !0 ? 1 : -1;
      for (let z = 1; z <= r; z++)
        (d.push(0, m * x, 0), f.push(0, x, 0), p.push(0.5, 0.5), g++);
      const C = g;
      for (let z = 0; z <= r; z++) {
        const k = (z / r) * c + o,
          Z = Math.cos(k),
          W = Math.sin(k);
        ((w.x = S * W),
          (w.y = m * x),
          (w.z = S * Z),
          d.push(w.x, w.y, w.z),
          f.push(0, x, 0),
          (b.x = Z * 0.5 + 0.5),
          (b.y = W * 0.5 * x + 0.5),
          p.push(b.x, b.y),
          g++);
      }
      for (let z = 0; z < r; z++) {
        const G = L + z,
          k = C + z;
        (E === !0 ? h.push(k, k + 1, G) : h.push(k + 1, k, G), (I += 3));
      }
      (l.addGroup(u, I, E === !0 ? 1 : 2), (u += I));
    }
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new mr(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class Fs extends mr {
  constructor(e = 1, t = 1, n = 32, r = 1, s = !1, a = 0, o = Math.PI * 2) {
    (super(0, e, t, n, r, s, a, o),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        radialSegments: n,
        heightSegments: r,
        openEnded: s,
        thetaStart: a,
        thetaLength: o,
      }));
  }
  static fromJSON(e) {
    return new Fs(
      e.radius,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class bi extends Pt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    (super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      }));
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      c = Math.floor(r),
      l = o + 1,
      h = c + 1,
      d = e / o,
      f = t / c,
      p = [],
      g = [],
      M = [],
      m = [];
    for (let u = 0; u < h; u++) {
      const A = u * f - a;
      for (let T = 0; T < l; T++) {
        const E = T * d - s;
        (g.push(E, -A, 0), M.push(0, 0, 1), m.push(T / o), m.push(1 - u / c));
      }
    }
    for (let u = 0; u < c; u++)
      for (let A = 0; A < o; A++) {
        const T = A + l * u,
          E = A + l * (u + 1),
          L = A + 1 + l * (u + 1),
          b = A + 1 + l * u;
        (p.push(T, E, b), p.push(E, L, b));
      }
    (this.setIndex(p),
      this.setAttribute("position", new lt(g, 3)),
      this.setAttribute("normal", new lt(M, 3)),
      this.setAttribute("uv", new lt(m, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new bi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Ns extends Pt {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    r = 0,
    s = Math.PI * 2,
    a = 0,
    o = Math.PI,
  ) {
    (super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: r,
        phiLength: s,
        thetaStart: a,
        thetaLength: o,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n))));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const h = [],
      d = new F(),
      f = new F(),
      p = [],
      g = [],
      M = [],
      m = [];
    for (let u = 0; u <= n; u++) {
      const A = [],
        T = u / n;
      let E = 0;
      u === 0 && a === 0
        ? (E = 0.5 / t)
        : u === n && c === Math.PI && (E = -0.5 / t);
      for (let L = 0; L <= t; L++) {
        const b = L / t;
        ((d.x = -e * Math.cos(r + b * s) * Math.sin(a + T * o)),
          (d.y = e * Math.cos(a + T * o)),
          (d.z = e * Math.sin(r + b * s) * Math.sin(a + T * o)),
          g.push(d.x, d.y, d.z),
          f.copy(d).normalize(),
          M.push(f.x, f.y, f.z),
          m.push(b + E, 1 - T),
          A.push(l++));
      }
      h.push(A);
    }
    for (let u = 0; u < n; u++)
      for (let A = 0; A < t; A++) {
        const T = h[u][A + 1],
          E = h[u][A],
          L = h[u + 1][A],
          b = h[u + 1][A + 1];
        ((u !== 0 || a > 0) && p.push(T, E, b),
          (u !== n - 1 || c < Math.PI) && p.push(E, L, b));
      }
    (this.setIndex(p),
      this.setAttribute("position", new lt(g, 3)),
      this.setAttribute("normal", new lt(M, 3)),
      this.setAttribute("uv", new lt(m, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Ns(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class Os extends Pt {
  constructor(e = 1, t = 0.4, n = 12, r = 48, s = Math.PI * 2) {
    (super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: r,
        arc: s,
      }),
      (n = Math.floor(n)),
      (r = Math.floor(r)));
    const a = [],
      o = [],
      c = [],
      l = [],
      h = new F(),
      d = new F(),
      f = new F();
    for (let p = 0; p <= n; p++)
      for (let g = 0; g <= r; g++) {
        const M = (g / r) * s,
          m = (p / n) * Math.PI * 2;
        ((d.x = (e + t * Math.cos(m)) * Math.cos(M)),
          (d.y = (e + t * Math.cos(m)) * Math.sin(M)),
          (d.z = t * Math.sin(m)),
          o.push(d.x, d.y, d.z),
          (h.x = e * Math.cos(M)),
          (h.y = e * Math.sin(M)),
          f.subVectors(d, h).normalize(),
          c.push(f.x, f.y, f.z),
          l.push(g / r),
          l.push(p / n));
      }
    for (let p = 1; p <= n; p++)
      for (let g = 1; g <= r; g++) {
        const M = (r + 1) * p + g - 1,
          m = (r + 1) * (p - 1) + g - 1,
          u = (r + 1) * (p - 1) + g,
          A = (r + 1) * p + g;
        (a.push(M, m, A), a.push(m, u, A));
      }
    (this.setIndex(a),
      this.setAttribute("position", new lt(o, 3)),
      this.setAttribute("normal", new lt(c, 3)),
      this.setAttribute("uv", new lt(l, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Os(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Zu extends mn {
  constructor(e) {
    (super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = { STANDARD: "" }),
      (this.color = new Ie(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ie(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new Ge(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Ot()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class $u extends mn {
  constructor(e) {
    (super(),
      (this.isMeshLambertMaterial = !0),
      (this.type = "MeshLambertMaterial"),
      (this.color = new Ie(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ie(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new Ge(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Ot()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Aa extends mn {
  constructor(e) {
    (super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class ba extends mn {
  constructor(e) {
    (super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Ti = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
class Ra {
  constructor(e, t, n) {
    const r = this;
    let s = !1,
      a = 0,
      o = 0,
      c;
    const l = [];
    ((this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (h) {
        (o++, s === !1 && r.onStart !== void 0 && r.onStart(h, a, o), (s = !0));
      }),
      (this.itemEnd = function (h) {
        (a++,
          r.onProgress !== void 0 && r.onProgress(h, a, o),
          a === o && ((s = !1), r.onLoad !== void 0 && r.onLoad()));
      }),
      (this.itemError = function (h) {
        r.onError !== void 0 && r.onError(h);
      }),
      (this.resolveURL = function (h) {
        return c ? c(h) : h;
      }),
      (this.setURLModifier = function (h) {
        return ((c = h), this);
      }),
      (this.addHandler = function (h, d) {
        return (l.push(h, d), this);
      }),
      (this.removeHandler = function (h) {
        const d = l.indexOf(h);
        return (d !== -1 && l.splice(d, 2), this);
      }),
      (this.getHandler = function (h) {
        for (let d = 0, f = l.length; d < f; d += 2) {
          const p = l[d],
            g = l[d + 1];
          if ((p.global && (p.lastIndex = 0), p.test(h))) return g;
        }
        return null;
      }));
  }
}
const wa = new Ra();
class Ri {
  constructor(e) {
    ((this.manager = e !== void 0 ? e : wa),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {}));
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return ((this.crossOrigin = e), this);
  }
  setWithCredentials(e) {
    return ((this.withCredentials = e), this);
  }
  setPath(e) {
    return ((this.path = e), this);
  }
  setResourcePath(e) {
    return ((this.resourcePath = e), this);
  }
  setRequestHeader(e) {
    return ((this.requestHeader = e), this);
  }
}
Ri.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const qt = {};
class Ca extends Error {
  constructor(e, t) {
    (super(e), (this.response = t));
  }
}
class ju extends Ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    (e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e)));
    const s = Ti.get(e);
    if (s !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          (t && t(s), this.manager.itemEnd(e));
        }, 0),
        s
      );
    if (qt[e] !== void 0) {
      qt[e].push({ onLoad: t, onProgress: n, onError: r });
      return;
    }
    ((qt[e] = []), qt[e].push({ onLoad: t, onProgress: n, onError: r }));
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      o = this.mimeType,
      c = this.responseType;
    (fetch(a)
      .then((l) => {
        if (l.status === 200 || l.status === 0) {
          if (
            (l.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              l.body === void 0 ||
              l.body.getReader === void 0)
          )
            return l;
          const h = qt[e],
            d = l.body.getReader(),
            f = l.headers.get("X-File-Size") || l.headers.get("Content-Length"),
            p = f ? parseInt(f) : 0,
            g = p !== 0;
          let M = 0;
          const m = new ReadableStream({
            start(u) {
              A();
              function A() {
                d.read().then(
                  ({ done: T, value: E }) => {
                    if (T) u.close();
                    else {
                      M += E.byteLength;
                      const L = new ProgressEvent("progress", {
                        lengthComputable: g,
                        loaded: M,
                        total: p,
                      });
                      for (let b = 0, w = h.length; b < w; b++) {
                        const I = h[b];
                        I.onProgress && I.onProgress(L);
                      }
                      (u.enqueue(E), A());
                    }
                  },
                  (T) => {
                    u.error(T);
                  },
                );
              }
            },
          });
          return new Response(m);
        } else
          throw new Ca(
            `fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,
            l,
          );
      })
      .then((l) => {
        switch (c) {
          case "arraybuffer":
            return l.arrayBuffer();
          case "blob":
            return l.blob();
          case "document":
            return l.text().then((h) => new DOMParser().parseFromString(h, o));
          case "json":
            return l.json();
          default:
            if (o === void 0) return l.text();
            {
              const d = /charset="?([^;"\s]*)"?/i.exec(o),
                f = d && d[1] ? d[1].toLowerCase() : void 0,
                p = new TextDecoder(f);
              return l.arrayBuffer().then((g) => p.decode(g));
            }
        }
      })
      .then((l) => {
        Ti.add(e, l);
        const h = qt[e];
        delete qt[e];
        for (let d = 0, f = h.length; d < f; d++) {
          const p = h[d];
          p.onLoad && p.onLoad(l);
        }
      })
      .catch((l) => {
        const h = qt[e];
        if (h === void 0) throw (this.manager.itemError(e), l);
        delete qt[e];
        for (let d = 0, f = h.length; d < f; d++) {
          const p = h[d];
          p.onError && p.onError(l);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e));
  }
  setResponseType(e) {
    return ((this.responseType = e), this);
  }
  setMimeType(e) {
    return ((this.mimeType = e), this);
  }
}
class Pa extends Ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    (this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e)));
    const s = this,
      a = Ti.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          (t && t(a), s.manager.itemEnd(e));
        }, 0),
        a
      );
    const o = Xn("img");
    function c() {
      (h(), Ti.add(e, this), t && t(this), s.manager.itemEnd(e));
    }
    function l(d) {
      (h(), r && r(d), s.manager.itemError(e), s.manager.itemEnd(e));
    }
    function h() {
      (o.removeEventListener("load", c, !1),
        o.removeEventListener("error", l, !1));
    }
    return (
      o.addEventListener("load", c, !1),
      o.addEventListener("error", l, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class Ju extends Ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new dt(),
      a = new Pa(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          ((s.image = o), (s.needsUpdate = !0), t !== void 0 && t(s));
        },
        n,
        r,
      ),
      s
    );
  }
}
class wi extends ot {
  constructor(e, t = 1) {
    (super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Ie(e)),
      (this.intensity = t));
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (t.object.target = this.target.uuid),
      t
    );
  }
}
class Qu extends wi {
  constructor(e, t, n) {
    (super(e, n),
      (this.isHemisphereLight = !0),
      (this.type = "HemisphereLight"),
      this.position.copy(ot.DEFAULT_UP),
      this.updateMatrix(),
      (this.groundColor = new Ie(t)));
  }
  copy(e, t) {
    return (super.copy(e, t), this.groundColor.copy(e.groundColor), this);
  }
}
const er = new Qe(),
  Xr = new F(),
  qr = new F();
class _r {
  constructor(e) {
    ((this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Ge(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Qe()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new pr()),
      (this._frameExtents = new Ge(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Ze(0, 0, 1, 1)]));
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    (Xr.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Xr),
      qr.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(qr),
      t.updateMatrixWorld(),
      er.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(er),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(er));
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class Da extends _r {
  constructor() {
    (super(new Tt(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1));
  }
  updateMatrices(e) {
    const t = this.camera,
      n = yi * 2 * e.angle * this.focus,
      r = this.mapSize.width / this.mapSize.height,
      s = e.distance || t.far;
    ((n !== t.fov || r !== t.aspect || s !== t.far) &&
      ((t.fov = n), (t.aspect = r), (t.far = s), t.updateProjectionMatrix()),
      super.updateMatrices(e));
  }
  copy(e) {
    return (super.copy(e), (this.focus = e.focus), this);
  }
}
class ed extends wi {
  constructor(e, t, n = 0, r = Math.PI / 3, s = 0, a = 2) {
    (super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(ot.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new ot()),
      (this.distance = n),
      (this.angle = r),
      (this.penumbra = s),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new Da()));
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const Yr = new Qe(),
  kn = new F(),
  tr = new F();
class La extends _r {
  constructor() {
    (super(new Tt(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new Ge(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Ze(2, 1, 1, 1),
        new Ze(0, 1, 1, 1),
        new Ze(3, 1, 1, 1),
        new Ze(1, 1, 1, 1),
        new Ze(3, 0, 1, 1),
        new Ze(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new F(1, 0, 0),
        new F(-1, 0, 0),
        new F(0, 0, 1),
        new F(0, 0, -1),
        new F(0, 1, 0),
        new F(0, -1, 0),
      ]),
      (this._cubeUps = [
        new F(0, 1, 0),
        new F(0, 1, 0),
        new F(0, 1, 0),
        new F(0, 1, 0),
        new F(0, 0, 1),
        new F(0, 0, -1),
      ]));
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      r = this.matrix,
      s = e.distance || n.far;
    (s !== n.far && ((n.far = s), n.updateProjectionMatrix()),
      kn.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(kn),
      tr.copy(n.position),
      tr.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(tr),
      n.updateMatrixWorld(),
      r.makeTranslation(-kn.x, -kn.y, -kn.z),
      Yr.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Yr));
  }
}
class td extends wi {
  constructor(e, t, n = 0, r = 2) {
    (super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = r),
      (this.shadow = new La()));
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Bs extends Cs {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    (super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, s, a) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = r + t,
      c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((s += l * this.view.offsetX),
        (a = s + l * this.view.width),
        (o -= h * this.view.offsetY),
        (c = o - h * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(
      s,
      a,
      o,
      c,
      this.near,
      this.far,
      this.coordinateSystem,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class Ua extends _r {
  constructor() {
    (super(new Bs(-5, 5, 5, -5, 0.5, 500)),
      (this.isDirectionalLightShadow = !0));
  }
}
class nd extends wi {
  constructor(e, t) {
    (super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(ot.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new ot()),
      (this.shadow = new Ua()));
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Ia extends Tt {
  constructor(e = []) {
    (super(), (this.isArrayCamera = !0), (this.cameras = e));
  }
}
const Kr = new Qe();
class id {
  constructor(e, t, n = 0, r = 1 / 0) {
    ((this.ray = new dr(e, t)),
      (this.near = n),
      (this.far = r),
      (this.camera = null),
      (this.layers = new fr()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      }));
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
        ? (this.ray.origin
            .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
            .unproject(t),
          this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
          (this.camera = t))
        : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return (
      Kr.identity().extractRotation(e.matrixWorld),
      this.ray.origin.setFromMatrixPosition(e.matrixWorld),
      this.ray.direction.set(0, 0, -1).applyMatrix4(Kr),
      this
    );
  }
  intersectObject(e, t = !0, n = []) {
    return (hr(e, this, n, t), n.sort(Zr), n);
  }
  intersectObjects(e, t = !0, n = []) {
    for (let r = 0, s = e.length; r < s; r++) hr(e[r], this, n, t);
    return (n.sort(Zr), n);
  }
}
function Zr(i, e) {
  return i.distance - e.distance;
}
function hr(i, e, t, n) {
  let r = !0;
  if (
    (i.layers.test(e.layers) && i.raycast(e, t) === !1 && (r = !1),
    r === !0 && n === !0)
  ) {
    const s = i.children;
    for (let a = 0, o = s.length; a < o; a++) hr(s[a], e, t, !0);
  }
}
function $r(i, e, t, n) {
  const r = Fa(n);
  switch (t) {
    case 1021:
      return i * e;
    case 1024:
      return i * e;
    case 1025:
      return i * e * 2;
    case 1028:
      return ((i * e) / r.components) * r.byteLength;
    case 1029:
      return ((i * e) / r.components) * r.byteLength;
    case 1030:
      return ((i * e * 2) / r.components) * r.byteLength;
    case 1031:
      return ((i * e * 2) / r.components) * r.byteLength;
    case 1022:
      return ((i * e * 3) / r.components) * r.byteLength;
    case 1023:
      return ((i * e * 4) / r.components) * r.byteLength;
    case 1033:
      return ((i * e * 4) / r.components) * r.byteLength;
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return (Math.max(i, 16) * Math.max(e, 8)) / 4;
    case 35840:
    case 35842:
      return (Math.max(i, 8) * Math.max(e, 8)) / 2;
    case 36196:
    case 37492:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Fa(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "171" } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = "171"));
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function Gs() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(s, a) {
    (t(s, a), (n = i.requestAnimationFrame(r)));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      (i.cancelAnimationFrame(n), (e = !1));
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function Na(i) {
  const e = new WeakMap();
  function t(o, c) {
    const l = o.array,
      h = o.usage,
      d = l.byteLength,
      f = i.createBuffer();
    (i.bindBuffer(c, f), i.bufferData(c, l, h), o.onUploadCallback());
    let p;
    if (l instanceof Float32Array) p = i.FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (p = i.HALF_FLOAT) : (p = i.UNSIGNED_SHORT);
    else if (l instanceof Int16Array) p = i.SHORT;
    else if (l instanceof Uint32Array) p = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) p = i.INT;
    else if (l instanceof Int8Array) p = i.BYTE;
    else if (l instanceof Uint8Array) p = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) p = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + l,
      );
    return {
      buffer: f,
      type: p,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: d,
    };
  }
  function n(o, c, l) {
    const h = c.array,
      d = c.updateRanges;
    if ((i.bindBuffer(l, o), d.length === 0)) i.bufferSubData(l, 0, h);
    else {
      d.sort((p, g) => p.start - g.start);
      let f = 0;
      for (let p = 1; p < d.length; p++) {
        const g = d[f],
          M = d[p];
        M.start <= g.start + g.count + 1
          ? (g.count = Math.max(g.count, M.start + M.count - g.start))
          : (++f, (d[f] = M));
      }
      d.length = f + 1;
      for (let p = 0, g = d.length; p < g; p++) {
        const M = d[p];
        i.bufferSubData(l, M.start * h.BYTES_PER_ELEMENT, h, M.start, M.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return (o.isInterleavedBufferAttribute && (o = o.data), e.get(o));
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const h = e.get(o);
      (!h || h.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const l = e.get(o);
    if (l === void 0) e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (n(l.buffer, o, c), (l.version = o.version));
    }
  }
  return { get: r, remove: s, update: a };
}
var Oa = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Ba = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Ga = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  za = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Va = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  Ha = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  ka = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Wa = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Xa = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  qa = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  Ya = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Ka = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Za = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  $a = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  ja = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Ja = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Qa = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  eo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  to = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  no = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  io = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  ro = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  so = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  ao = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  oo = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  lo = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  co = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  ho = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  uo = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  fo = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  po = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  mo = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  _o = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  go = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  vo = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  xo = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Mo = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  So = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Eo = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  yo = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  To = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Ao = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  bo = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Ro = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  wo = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Co = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Po = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Do = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Lo = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Uo = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Io = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Fo = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  No = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Oo = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Bo = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Go = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  zo = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Vo = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Ho = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  ko = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Wo = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Xo = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  qo = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Yo = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ko = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Zo = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  $o = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  jo = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Jo = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Qo = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  el = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  tl = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  nl = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  il = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  rl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  sl = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  al = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  ol = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  ll = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  cl = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  hl = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  ul = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  dl = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  fl = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  pl = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  ml = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  _l = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  gl = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  vl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  xl = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  Ml = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Sl = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  El = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  yl = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Tl = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  Al = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  bl = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Rl = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  wl = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Cl = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Pl = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Dl = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Ll = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Ul = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Il = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Fl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Nl = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Ol = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Bl = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Gl = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  zl = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Vl = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Hl = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  kl = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Wl = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  Xl = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  ql = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Yl = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Kl = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Zl = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  $l = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  jl = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Jl = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ql = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ec = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  tc = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  nc = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ic = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  rc = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  sc = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ac = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  oc = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  lc = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  cc = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  hc = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  uc = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  dc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  fc = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  pc = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  mc = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  _c = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  De = {
    alphahash_fragment: Oa,
    alphahash_pars_fragment: Ba,
    alphamap_fragment: Ga,
    alphamap_pars_fragment: za,
    alphatest_fragment: Va,
    alphatest_pars_fragment: Ha,
    aomap_fragment: ka,
    aomap_pars_fragment: Wa,
    batching_pars_vertex: Xa,
    batching_vertex: qa,
    begin_vertex: Ya,
    beginnormal_vertex: Ka,
    bsdfs: Za,
    iridescence_fragment: $a,
    bumpmap_pars_fragment: ja,
    clipping_planes_fragment: Ja,
    clipping_planes_pars_fragment: Qa,
    clipping_planes_pars_vertex: eo,
    clipping_planes_vertex: to,
    color_fragment: no,
    color_pars_fragment: io,
    color_pars_vertex: ro,
    color_vertex: so,
    common: ao,
    cube_uv_reflection_fragment: oo,
    defaultnormal_vertex: lo,
    displacementmap_pars_vertex: co,
    displacementmap_vertex: ho,
    emissivemap_fragment: uo,
    emissivemap_pars_fragment: fo,
    colorspace_fragment: po,
    colorspace_pars_fragment: mo,
    envmap_fragment: _o,
    envmap_common_pars_fragment: go,
    envmap_pars_fragment: vo,
    envmap_pars_vertex: xo,
    envmap_physical_pars_fragment: Po,
    envmap_vertex: Mo,
    fog_vertex: So,
    fog_pars_vertex: Eo,
    fog_fragment: yo,
    fog_pars_fragment: To,
    gradientmap_pars_fragment: Ao,
    lightmap_pars_fragment: bo,
    lights_lambert_fragment: Ro,
    lights_lambert_pars_fragment: wo,
    lights_pars_begin: Co,
    lights_toon_fragment: Do,
    lights_toon_pars_fragment: Lo,
    lights_phong_fragment: Uo,
    lights_phong_pars_fragment: Io,
    lights_physical_fragment: Fo,
    lights_physical_pars_fragment: No,
    lights_fragment_begin: Oo,
    lights_fragment_maps: Bo,
    lights_fragment_end: Go,
    logdepthbuf_fragment: zo,
    logdepthbuf_pars_fragment: Vo,
    logdepthbuf_pars_vertex: Ho,
    logdepthbuf_vertex: ko,
    map_fragment: Wo,
    map_pars_fragment: Xo,
    map_particle_fragment: qo,
    map_particle_pars_fragment: Yo,
    metalnessmap_fragment: Ko,
    metalnessmap_pars_fragment: Zo,
    morphinstance_vertex: $o,
    morphcolor_vertex: jo,
    morphnormal_vertex: Jo,
    morphtarget_pars_vertex: Qo,
    morphtarget_vertex: el,
    normal_fragment_begin: tl,
    normal_fragment_maps: nl,
    normal_pars_fragment: il,
    normal_pars_vertex: rl,
    normal_vertex: sl,
    normalmap_pars_fragment: al,
    clearcoat_normal_fragment_begin: ol,
    clearcoat_normal_fragment_maps: ll,
    clearcoat_pars_fragment: cl,
    iridescence_pars_fragment: hl,
    opaque_fragment: ul,
    packing: dl,
    premultiplied_alpha_fragment: fl,
    project_vertex: pl,
    dithering_fragment: ml,
    dithering_pars_fragment: _l,
    roughnessmap_fragment: gl,
    roughnessmap_pars_fragment: vl,
    shadowmap_pars_fragment: xl,
    shadowmap_pars_vertex: Ml,
    shadowmap_vertex: Sl,
    shadowmask_pars_fragment: El,
    skinbase_vertex: yl,
    skinning_pars_vertex: Tl,
    skinning_vertex: Al,
    skinnormal_vertex: bl,
    specularmap_fragment: Rl,
    specularmap_pars_fragment: wl,
    tonemapping_fragment: Cl,
    tonemapping_pars_fragment: Pl,
    transmission_fragment: Dl,
    transmission_pars_fragment: Ll,
    uv_pars_fragment: Ul,
    uv_pars_vertex: Il,
    uv_vertex: Fl,
    worldpos_vertex: Nl,
    background_vert: Ol,
    background_frag: Bl,
    backgroundCube_vert: Gl,
    backgroundCube_frag: zl,
    cube_vert: Vl,
    cube_frag: Hl,
    depth_vert: kl,
    depth_frag: Wl,
    distanceRGBA_vert: Xl,
    distanceRGBA_frag: ql,
    equirect_vert: Yl,
    equirect_frag: Kl,
    linedashed_vert: Zl,
    linedashed_frag: $l,
    meshbasic_vert: jl,
    meshbasic_frag: Jl,
    meshlambert_vert: Ql,
    meshlambert_frag: ec,
    meshmatcap_vert: tc,
    meshmatcap_frag: nc,
    meshnormal_vert: ic,
    meshnormal_frag: rc,
    meshphong_vert: sc,
    meshphong_frag: ac,
    meshphysical_vert: oc,
    meshphysical_frag: lc,
    meshtoon_vert: cc,
    meshtoon_frag: hc,
    points_vert: uc,
    points_frag: dc,
    shadow_vert: fc,
    shadow_frag: pc,
    sprite_vert: mc,
    sprite_frag: _c,
  },
  te = {
    common: {
      diffuse: { value: new Ie(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ce() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ce() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ce() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ce() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ce() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ce() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ce() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ce() },
      normalScale: { value: new Ge(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ce() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ce() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ce() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ce() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ie(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ie(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ce() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ce() },
    },
    sprite: {
      diffuse: { value: new Ie(16777215) },
      opacity: { value: 1 },
      center: { value: new Ge(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ce() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ce() },
      alphaTest: { value: 0 },
    },
  },
  Bt = {
    basic: {
      uniforms: vt([
        te.common,
        te.specularmap,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.fog,
      ]),
      vertexShader: De.meshbasic_vert,
      fragmentShader: De.meshbasic_frag,
    },
    lambert: {
      uniforms: vt([
        te.common,
        te.specularmap,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.fog,
        te.lights,
        { emissive: { value: new Ie(0) } },
      ]),
      vertexShader: De.meshlambert_vert,
      fragmentShader: De.meshlambert_frag,
    },
    phong: {
      uniforms: vt([
        te.common,
        te.specularmap,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.fog,
        te.lights,
        {
          emissive: { value: new Ie(0) },
          specular: { value: new Ie(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: De.meshphong_vert,
      fragmentShader: De.meshphong_frag,
    },
    standard: {
      uniforms: vt([
        te.common,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.roughnessmap,
        te.metalnessmap,
        te.fog,
        te.lights,
        {
          emissive: { value: new Ie(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: De.meshphysical_vert,
      fragmentShader: De.meshphysical_frag,
    },
    toon: {
      uniforms: vt([
        te.common,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.gradientmap,
        te.fog,
        te.lights,
        { emissive: { value: new Ie(0) } },
      ]),
      vertexShader: De.meshtoon_vert,
      fragmentShader: De.meshtoon_frag,
    },
    matcap: {
      uniforms: vt([
        te.common,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: De.meshmatcap_vert,
      fragmentShader: De.meshmatcap_frag,
    },
    points: {
      uniforms: vt([te.points, te.fog]),
      vertexShader: De.points_vert,
      fragmentShader: De.points_frag,
    },
    dashed: {
      uniforms: vt([
        te.common,
        te.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: De.linedashed_vert,
      fragmentShader: De.linedashed_frag,
    },
    depth: {
      uniforms: vt([te.common, te.displacementmap]),
      vertexShader: De.depth_vert,
      fragmentShader: De.depth_frag,
    },
    normal: {
      uniforms: vt([
        te.common,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: De.meshnormal_vert,
      fragmentShader: De.meshnormal_frag,
    },
    sprite: {
      uniforms: vt([te.sprite, te.fog]),
      vertexShader: De.sprite_vert,
      fragmentShader: De.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ce() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: De.background_vert,
      fragmentShader: De.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ce() },
      },
      vertexShader: De.backgroundCube_vert,
      fragmentShader: De.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: De.cube_vert,
      fragmentShader: De.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: De.equirect_vert,
      fragmentShader: De.equirect_frag,
    },
    distanceRGBA: {
      uniforms: vt([
        te.common,
        te.displacementmap,
        {
          referencePosition: { value: new F() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: De.distanceRGBA_vert,
      fragmentShader: De.distanceRGBA_frag,
    },
    shadow: {
      uniforms: vt([
        te.lights,
        te.fog,
        { color: { value: new Ie(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: De.shadow_vert,
      fragmentShader: De.shadow_frag,
    },
  };
Bt.physical = {
  uniforms: vt([
    Bt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ce() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ce() },
      clearcoatNormalScale: { value: new Ge(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ce() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ce() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ce() },
      sheen: { value: 0 },
      sheenColor: { value: new Ie(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ce() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ce() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ce() },
      transmissionSamplerSize: { value: new Ge() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ce() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ie(0) },
      specularColor: { value: new Ie(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ce() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ce() },
      anisotropyVector: { value: new Ge() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ce() },
    },
  ]),
  vertexShader: De.meshphysical_vert,
  fragmentShader: De.meshphysical_frag,
};
const vi = { r: 0, b: 0, g: 0 },
  cn = new Ot(),
  gc = new Qe();
function vc(i, e, t, n, r, s, a) {
  const o = new Ie(0);
  let c = s === !0 ? 0 : 1,
    l,
    h,
    d = null,
    f = 0,
    p = null;
  function g(T) {
    let E = T.isScene === !0 ? T.background : null;
    return (
      E && E.isTexture && (E = (T.backgroundBlurriness > 0 ? t : e).get(E)),
      E
    );
  }
  function M(T) {
    let E = !1;
    const L = g(T);
    L === null ? u(o, c) : L && L.isColor && (u(L, 1), (E = !0));
    const b = i.xr.getEnvironmentBlendMode();
    (b === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (i.autoClear || E) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)));
  }
  function m(T, E) {
    const L = g(E);
    L && (L.isCubeTexture || L.mapping === 306)
      ? (h === void 0 &&
          ((h = new Yt(
            new Zn(1, 1, 1),
            new tn({
              name: "BackgroundCubeMaterial",
              uniforms: In(Bt.backgroundCube.uniforms),
              vertexShader: Bt.backgroundCube.vertexShader,
              fragmentShader: Bt.backgroundCube.fragmentShader,
              side: 1,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          h.geometry.deleteAttribute("normal"),
          h.geometry.deleteAttribute("uv"),
          (h.onBeforeRender = function (b, w, I) {
            this.matrixWorld.copyPosition(I.matrixWorld);
          }),
          Object.defineProperty(h.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          r.update(h)),
        cn.copy(E.backgroundRotation),
        (cn.x *= -1),
        (cn.y *= -1),
        (cn.z *= -1),
        L.isCubeTexture &&
          L.isRenderTargetTexture === !1 &&
          ((cn.y *= -1), (cn.z *= -1)),
        (h.material.uniforms.envMap.value = L),
        (h.material.uniforms.flipEnvMap.value =
          L.isCubeTexture && L.isRenderTargetTexture === !1 ? -1 : 1),
        (h.material.uniforms.backgroundBlurriness.value =
          E.backgroundBlurriness),
        (h.material.uniforms.backgroundIntensity.value = E.backgroundIntensity),
        h.material.uniforms.backgroundRotation.value.setFromMatrix4(
          gc.makeRotationFromEuler(cn),
        ),
        (h.material.toneMapped = We.getTransfer(L.colorSpace) !== Ke),
        (d !== L || f !== L.version || p !== i.toneMapping) &&
          ((h.material.needsUpdate = !0),
          (d = L),
          (f = L.version),
          (p = i.toneMapping)),
        h.layers.enableAll(),
        T.unshift(h, h.geometry, h.material, 0, 0, null))
      : L &&
        L.isTexture &&
        (l === void 0 &&
          ((l = new Yt(
            new bi(2, 2),
            new tn({
              name: "BackgroundMaterial",
              uniforms: In(Bt.background.uniforms),
              vertexShader: Bt.background.vertexShader,
              fragmentShader: Bt.background.fragmentShader,
              side: 0,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          l.geometry.deleteAttribute("normal"),
          Object.defineProperty(l.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          r.update(l)),
        (l.material.uniforms.t2D.value = L),
        (l.material.uniforms.backgroundIntensity.value = E.backgroundIntensity),
        (l.material.toneMapped = We.getTransfer(L.colorSpace) !== Ke),
        L.matrixAutoUpdate === !0 && L.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(L.matrix),
        (d !== L || f !== L.version || p !== i.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (d = L),
          (f = L.version),
          (p = i.toneMapping)),
        l.layers.enableAll(),
        T.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function u(T, E) {
    (T.getRGB(vi, ws(i)), n.buffers.color.setClear(vi.r, vi.g, vi.b, E, a));
  }
  function A() {
    (h !== void 0 && (h.geometry.dispose(), h.material.dispose()),
      l !== void 0 && (l.geometry.dispose(), l.material.dispose()));
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (T, E = 1) {
      (o.set(T), (c = E), u(o, c));
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (T) {
      ((c = T), u(o, c));
    },
    render: M,
    addToRenderList: m,
    dispose: A,
  };
}
function xc(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    r = f(null);
  let s = r,
    a = !1;
  function o(x, C, z, G, k) {
    let Z = !1;
    const W = d(G, z, C);
    (s !== W && ((s = W), l(s.object)),
      (Z = p(x, G, z, k)),
      Z && g(x, G, z, k),
      k !== null && e.update(k, i.ELEMENT_ARRAY_BUFFER),
      (Z || a) &&
        ((a = !1),
        E(x, C, z, G),
        k !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(k).buffer)));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(x) {
    return i.bindVertexArray(x);
  }
  function h(x) {
    return i.deleteVertexArray(x);
  }
  function d(x, C, z) {
    const G = z.wireframe === !0;
    let k = n[x.id];
    k === void 0 && ((k = {}), (n[x.id] = k));
    let Z = k[C.id];
    Z === void 0 && ((Z = {}), (k[C.id] = Z));
    let W = Z[G];
    return (W === void 0 && ((W = f(c())), (Z[G] = W)), W);
  }
  function f(x) {
    const C = [],
      z = [],
      G = [];
    for (let k = 0; k < t; k++) ((C[k] = 0), (z[k] = 0), (G[k] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: C,
      enabledAttributes: z,
      attributeDivisors: G,
      object: x,
      attributes: {},
      index: null,
    };
  }
  function p(x, C, z, G) {
    const k = s.attributes,
      Z = C.attributes;
    let W = 0;
    const Q = z.getAttributes();
    for (const H in Q)
      if (Q[H].location >= 0) {
        const he = k[H];
        let ge = Z[H];
        if (
          (ge === void 0 &&
            (H === "instanceMatrix" &&
              x.instanceMatrix &&
              (ge = x.instanceMatrix),
            H === "instanceColor" && x.instanceColor && (ge = x.instanceColor)),
          he === void 0 || he.attribute !== ge || (ge && he.data !== ge.data))
        )
          return !0;
        W++;
      }
    return s.attributesNum !== W || s.index !== G;
  }
  function g(x, C, z, G) {
    const k = {},
      Z = C.attributes;
    let W = 0;
    const Q = z.getAttributes();
    for (const H in Q)
      if (Q[H].location >= 0) {
        let he = Z[H];
        he === void 0 &&
          (H === "instanceMatrix" &&
            x.instanceMatrix &&
            (he = x.instanceMatrix),
          H === "instanceColor" && x.instanceColor && (he = x.instanceColor));
        const ge = {};
        ((ge.attribute = he),
          he && he.data && (ge.data = he.data),
          (k[H] = ge),
          W++);
      }
    ((s.attributes = k), (s.attributesNum = W), (s.index = G));
  }
  function M() {
    const x = s.newAttributes;
    for (let C = 0, z = x.length; C < z; C++) x[C] = 0;
  }
  function m(x) {
    u(x, 0);
  }
  function u(x, C) {
    const z = s.newAttributes,
      G = s.enabledAttributes,
      k = s.attributeDivisors;
    ((z[x] = 1),
      G[x] === 0 && (i.enableVertexAttribArray(x), (G[x] = 1)),
      k[x] !== C && (i.vertexAttribDivisor(x, C), (k[x] = C)));
  }
  function A() {
    const x = s.newAttributes,
      C = s.enabledAttributes;
    for (let z = 0, G = C.length; z < G; z++)
      C[z] !== x[z] && (i.disableVertexAttribArray(z), (C[z] = 0));
  }
  function T(x, C, z, G, k, Z, W) {
    W === !0
      ? i.vertexAttribIPointer(x, C, z, k, Z)
      : i.vertexAttribPointer(x, C, z, G, k, Z);
  }
  function E(x, C, z, G) {
    M();
    const k = G.attributes,
      Z = z.getAttributes(),
      W = C.defaultAttributeValues;
    for (const Q in Z) {
      const H = Z[Q];
      if (H.location >= 0) {
        let re = k[Q];
        if (
          (re === void 0 &&
            (Q === "instanceMatrix" &&
              x.instanceMatrix &&
              (re = x.instanceMatrix),
            Q === "instanceColor" && x.instanceColor && (re = x.instanceColor)),
          re !== void 0)
        ) {
          const he = re.normalized,
            ge = re.itemSize,
            Le = e.get(re);
          if (Le === void 0) continue;
          const $e = Le.buffer,
            q = Le.type,
            ee = Le.bytesPerElement,
            me = q === i.INT || q === i.UNSIGNED_INT || re.gpuType === 1013;
          if (re.isInterleavedBufferAttribute) {
            const se = re.data,
              ye = se.stride,
              Re = re.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let Ue = 0; Ue < H.locationSize; Ue++)
                u(H.location + Ue, se.meshPerAttribute);
              x.isInstancedMesh !== !0 &&
                G._maxInstanceCount === void 0 &&
                (G._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let Ue = 0; Ue < H.locationSize; Ue++) m(H.location + Ue);
            i.bindBuffer(i.ARRAY_BUFFER, $e);
            for (let Ue = 0; Ue < H.locationSize; Ue++)
              T(
                H.location + Ue,
                ge / H.locationSize,
                q,
                he,
                ye * ee,
                (Re + (ge / H.locationSize) * Ue) * ee,
                me,
              );
          } else {
            if (re.isInstancedBufferAttribute) {
              for (let se = 0; se < H.locationSize; se++)
                u(H.location + se, re.meshPerAttribute);
              x.isInstancedMesh !== !0 &&
                G._maxInstanceCount === void 0 &&
                (G._maxInstanceCount = re.meshPerAttribute * re.count);
            } else
              for (let se = 0; se < H.locationSize; se++) m(H.location + se);
            i.bindBuffer(i.ARRAY_BUFFER, $e);
            for (let se = 0; se < H.locationSize; se++)
              T(
                H.location + se,
                ge / H.locationSize,
                q,
                he,
                ge * ee,
                (ge / H.locationSize) * se * ee,
                me,
              );
          }
        } else if (W !== void 0) {
          const he = W[Q];
          if (he !== void 0)
            switch (he.length) {
              case 2:
                i.vertexAttrib2fv(H.location, he);
                break;
              case 3:
                i.vertexAttrib3fv(H.location, he);
                break;
              case 4:
                i.vertexAttrib4fv(H.location, he);
                break;
              default:
                i.vertexAttrib1fv(H.location, he);
            }
        }
      }
    }
    A();
  }
  function L() {
    I();
    for (const x in n) {
      const C = n[x];
      for (const z in C) {
        const G = C[z];
        for (const k in G) (h(G[k].object), delete G[k]);
        delete C[z];
      }
      delete n[x];
    }
  }
  function b(x) {
    if (n[x.id] === void 0) return;
    const C = n[x.id];
    for (const z in C) {
      const G = C[z];
      for (const k in G) (h(G[k].object), delete G[k]);
      delete C[z];
    }
    delete n[x.id];
  }
  function w(x) {
    for (const C in n) {
      const z = n[C];
      if (z[x.id] === void 0) continue;
      const G = z[x.id];
      for (const k in G) (h(G[k].object), delete G[k]);
      delete z[x.id];
    }
  }
  function I() {
    (S(), (a = !0), s !== r && ((s = r), l(s.object)));
  }
  function S() {
    ((r.geometry = null), (r.program = null), (r.wireframe = !1));
  }
  return {
    setup: o,
    reset: I,
    resetDefaultState: S,
    dispose: L,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: w,
    initAttributes: M,
    enableAttribute: m,
    disableUnusedAttributes: A,
  };
}
function Mc(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, h) {
    (i.drawArrays(n, l, h), t.update(h, n, 1));
  }
  function a(l, h, d) {
    d !== 0 && (i.drawArraysInstanced(n, l, h, d), t.update(h, n, d));
  }
  function o(l, h, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, d);
    let p = 0;
    for (let g = 0; g < d; g++) p += h[g];
    t.update(p, n, 1);
  }
  function c(l, h, d, f) {
    if (d === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let g = 0; g < l.length; g++) a(l[g], h[g], f[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, f, 0, d);
      let g = 0;
      for (let M = 0; M < d; M++) g += h[M] * f[M];
      t.update(g, n, 1);
    }
  }
  ((this.setMode = r),
    (this.render = s),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = c));
}
function Sc(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(w) {
    return !(
      w !== 1023 &&
      n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(w) {
    const I =
      w === 1016 &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      w !== 1009 &&
      n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) &&
      w !== 1015 &&
      !I
    );
  }
  function c(w) {
    if (w === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      w = "mediump";
    }
    return w === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const h = c(l);
  h !== l &&
    (console.warn(
      "THREE.WebGLRenderer:",
      l,
      "not supported, using",
      h,
      "instead.",
    ),
    (l = h));
  const d = t.logarithmicDepthBuffer === !0,
    f = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"),
    p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    M = i.getParameter(i.MAX_TEXTURE_SIZE),
    m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    u = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    T = i.getParameter(i.MAX_VARYING_VECTORS),
    E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    L = g > 0,
    b = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reverseDepthBuffer: f,
    maxTextures: p,
    maxVertexTextures: g,
    maxTextureSize: M,
    maxCubemapSize: m,
    maxAttributes: u,
    maxVertexUniforms: A,
    maxVaryings: T,
    maxFragmentUniforms: E,
    vertexTextures: L,
    maxSamples: b,
  };
}
function Ec(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const a = new un(),
    o = new Ce(),
    c = { value: null, needsUpdate: !1 };
  ((this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, f) {
      const p = d.length !== 0 || f || n !== 0 || r;
      return ((r = f), (n = d.length), p);
    }),
    (this.beginShadows = function () {
      ((s = !0), h(null));
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (d, f) {
      t = h(d, f, 0);
    }),
    (this.setState = function (d, f, p) {
      const g = d.clippingPlanes,
        M = d.clipIntersection,
        m = d.clipShadows,
        u = i.get(d);
      if (!r || g === null || g.length === 0 || (s && !m)) s ? h(null) : l();
      else {
        const A = s ? 0 : n,
          T = A * 4;
        let E = u.clippingState || null;
        ((c.value = E), (E = h(g, f, T, p)));
        for (let L = 0; L !== T; ++L) E[L] = t[L];
        ((u.clippingState = E),
          (this.numIntersection = M ? this.numPlanes : 0),
          (this.numPlanes += A));
      }
    }));
  function l() {
    (c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0));
  }
  function h(d, f, p, g) {
    const M = d !== null ? d.length : 0;
    let m = null;
    if (M !== 0) {
      if (((m = c.value), g !== !0 || m === null)) {
        const u = p + M * 4,
          A = f.matrixWorldInverse;
        (o.getNormalMatrix(A),
          (m === null || m.length < u) && (m = new Float32Array(u)));
        for (let T = 0, E = p; T !== M; ++T, E += 4)
          (a.copy(d[T]).applyMatrix4(A, o),
            a.normal.toArray(m, E),
            (m[E + 3] = a.constant));
      }
      ((c.value = m), (c.needsUpdate = !0));
    }
    return ((e.numPlanes = M), (e.numIntersection = 0), m);
  }
}
function yc(i) {
  let e = new WeakMap();
  function t(a, o) {
    return (o === 303 ? (a.mapping = 301) : o === 304 && (a.mapping = 302), a);
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Sa(c.height);
            return (
              l.fromEquirectangularTexture(i, a),
              e.set(a, l),
              a.addEventListener("dispose", r),
              t(l.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
const Dn = 4,
  jr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  fn = 20,
  nr = new Bs(),
  Jr = new Ie();
let ir = null,
  rr = 0,
  sr = 0,
  ar = !1;
const dn = (1 + Math.sqrt(5)) / 2,
  Cn = 1 / dn,
  Qr = [
    new F(-dn, Cn, 0),
    new F(dn, Cn, 0),
    new F(-Cn, 0, dn),
    new F(Cn, 0, dn),
    new F(0, dn, -Cn),
    new F(0, dn, Cn),
    new F(-1, 1, -1),
    new F(1, 1, -1),
    new F(-1, 1, 1),
    new F(1, 1, 1),
  ];
class es {
  constructor(e) {
    ((this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial));
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    ((ir = this._renderer.getRenderTarget()),
      (rr = this._renderer.getActiveCubeFace()),
      (sr = this._renderer.getActiveMipmapLevel()),
      (ar = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256));
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = is()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = ns()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    (this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose());
  }
  _setSize(e) {
    ((this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax)));
  }
  _dispose() {
    (this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose());
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    (this._renderer.setRenderTarget(ir, rr, sr),
      (this._renderer.xr.enabled = ar),
      (e.scissorTest = !1),
      xi(e, 0, 0, e.width, e.height));
  }
  _fromTexture(e, t) {
    (e.mapping === 301 || e.mapping === 302
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (ir = this._renderer.getRenderTarget()),
      (rr = this._renderer.getActiveCubeFace()),
      (sr = this._renderer.getActiveMipmapLevel()),
      (ar = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1));
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n),
      this._applyPMREM(n),
      this._cleanup(n),
      n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: 1006,
        minFilter: 1006,
        generateMipmaps: !1,
        type: 1016,
        format: 1023,
        colorSpace: Un,
        depthBuffer: !1,
      },
      r = ts(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      (this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = ts(e, t, n)));
      const { _lodMax: s } = this;
      (({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Tc(s)),
        (this._blurMaterial = Ac(s, e, t)));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Yt(this._lodPlanes[0], e);
    this._renderer.compile(t, nr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new Tt(90, 1, t, n),
      c = [1, -1, 1, 1, 1, 1],
      l = [1, 1, 1, -1, -1, -1],
      h = this._renderer,
      d = h.autoClear,
      f = h.toneMapping;
    (h.getClearColor(Jr), (h.toneMapping = 0), (h.autoClear = !1));
    const p = new As({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new Yt(new Zn(), p);
    let M = !1;
    const m = e.background;
    m
      ? m.isColor && (p.color.copy(m), (e.background = null), (M = !0))
      : (p.color.copy(Jr), (M = !0));
    for (let u = 0; u < 6; u++) {
      const A = u % 3;
      A === 0
        ? (o.up.set(0, c[u], 0), o.lookAt(l[u], 0, 0))
        : A === 1
          ? (o.up.set(0, 0, c[u]), o.lookAt(0, l[u], 0))
          : (o.up.set(0, c[u], 0), o.lookAt(0, 0, l[u]));
      const T = this._cubeSize;
      (xi(r, A * T, u > 2 ? T : 0, T, T),
        h.setRenderTarget(r),
        M && h.render(g, o),
        h.render(e, o));
    }
    (g.geometry.dispose(),
      g.material.dispose(),
      (h.toneMapping = f),
      (h.autoClear = d),
      (e.background = m));
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === 301 || e.mapping === 302;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = is()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = ns());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      a = new Yt(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    (xi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, nr));
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(
          this._sigmas[s] * this._sigmas[s] -
            this._sigmas[s - 1] * this._sigmas[s - 1],
        ),
        o = Qr[(r - s - 1) % Qr.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    (this._halfBlur(e, a, t, n, r, "latitudinal", s),
      this._halfBlur(a, e, n, n, r, "longitudinal", s));
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const c = this._renderer,
      l = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!",
      );
    const h = 3,
      d = new Yt(this._lodPlanes[r], l),
      f = l.uniforms,
      p = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * fn - 1),
      M = s / g,
      m = isFinite(s) ? 1 + Math.floor(h * M) : fn;
    m > fn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fn}`,
      );
    const u = [];
    let A = 0;
    for (let w = 0; w < fn; ++w) {
      const I = w / M,
        S = Math.exp((-I * I) / 2);
      (u.push(S), w === 0 ? (A += S) : w < m && (A += 2 * S));
    }
    for (let w = 0; w < u.length; w++) u[w] = u[w] / A;
    ((f.envMap.value = e.texture),
      (f.samples.value = m),
      (f.weights.value = u),
      (f.latitudinal.value = a === "latitudinal"),
      o && (f.poleAxis.value = o));
    const { _lodMax: T } = this;
    ((f.dTheta.value = g), (f.mipInt.value = T - n));
    const E = this._sizeLods[r],
      L = 3 * E * (r > T - Dn ? r - T + Dn : 0),
      b = 4 * (this._cubeSize - E);
    (xi(t, L, b, 3 * E, 2 * E), c.setRenderTarget(t), c.render(d, nr));
  }
}
function Tc(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const s = i - Dn + 1 + jr.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let c = 1 / o;
    (a > i - Dn ? (c = jr[a - i + Dn - 1]) : a === 0 && (c = 0), n.push(c));
    const l = 1 / (o - 2),
      h = -l,
      d = 1 + l,
      f = [h, h, d, h, d, d, h, h, d, d, h, d],
      p = 6,
      g = 6,
      M = 3,
      m = 2,
      u = 1,
      A = new Float32Array(M * g * p),
      T = new Float32Array(m * g * p),
      E = new Float32Array(u * g * p);
    for (let b = 0; b < p; b++) {
      const w = ((b % 3) * 2) / 3 - 1,
        I = b > 2 ? 0 : -1,
        S = [
          w,
          I,
          0,
          w + 2 / 3,
          I,
          0,
          w + 2 / 3,
          I + 1,
          0,
          w,
          I,
          0,
          w + 2 / 3,
          I + 1,
          0,
          w,
          I + 1,
          0,
        ];
      (A.set(S, M * g * b), T.set(f, m * g * b));
      const x = [b, b, b, b, b, b];
      E.set(x, u * g * b);
    }
    const L = new Pt();
    (L.setAttribute("position", new Gt(A, M)),
      L.setAttribute("uv", new Gt(T, m)),
      L.setAttribute("faceIndex", new Gt(E, u)),
      e.push(L),
      r > Dn && r--);
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ts(i, e, t) {
  const n = new pn(i, e, t);
  return (
    (n.texture.mapping = 306),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function xi(i, e, t, n, r) {
  (i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r));
}
function Ac(i, e, t) {
  const n = new Float32Array(fn),
    r = new F(0, 1, 0);
  return new tn({
    name: "SphericalGaussianBlur",
    defines: {
      n: fn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: gr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ns() {
  return new tn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: gr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function is() {
  return new tn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: gr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function gr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function bc(i) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping,
        l = c === 303 || c === 304,
        h = c === 301 || c === 302;
      if (l || h) {
        let d = e.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return (
            t === null && (t = new es(i)),
            (d = l ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d)),
            (d.texture.pmremVersion = o.pmremVersion),
            e.set(o, d),
            d.texture
          );
        if (d !== void 0) return d.texture;
        {
          const p = o.image;
          return (l && p && p.height > 0) || (h && p && r(p))
            ? (t === null && (t = new es(i)),
              (d = l ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (d.texture.pmremVersion = o.pmremVersion),
              e.set(o, d),
              o.addEventListener("dispose", s),
              d.texture)
            : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++) o[h] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    ((e = new WeakMap()), t !== null && (t.dispose(), (t = null)));
  }
  return { get: n, dispose: a };
}
function Rc(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r =
          i.getExtension("WEBGL_depth_texture") ||
          i.getExtension("MOZ_WEBGL_depth_texture") ||
          i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          i.getExtension("EXT_texture_filter_anisotropic") ||
          i.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          i.getExtension("WEBGL_compressed_texture_s3tc") ||
          i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          i.getExtension("WEBGL_compressed_texture_pvrtc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return ((e[n] = r), r);
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      (t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent"));
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null &&
          Pn("THREE.WebGLRenderer: " + n + " extension not supported."),
        r
      );
    },
  };
}
function wc(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    (f.removeEventListener("dispose", a), delete r[f.id]);
    const p = s.get(f);
    (p && (e.remove(p), s.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--);
  }
  function o(d, f) {
    return (
      r[f.id] === !0 ||
        (f.addEventListener("dispose", a),
        (r[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function c(d) {
    const f = d.attributes;
    for (const p in f) e.update(f[p], i.ARRAY_BUFFER);
  }
  function l(d) {
    const f = [],
      p = d.index,
      g = d.attributes.position;
    let M = 0;
    if (p !== null) {
      const A = p.array;
      M = p.version;
      for (let T = 0, E = A.length; T < E; T += 3) {
        const L = A[T + 0],
          b = A[T + 1],
          w = A[T + 2];
        f.push(L, b, b, w, w, L);
      }
    } else if (g !== void 0) {
      const A = g.array;
      M = g.version;
      for (let T = 0, E = A.length / 3 - 1; T < E; T += 3) {
        const L = T + 0,
          b = T + 1,
          w = T + 2;
        f.push(L, b, b, w, w, L);
      }
    } else return;
    const m = new (Ss(f) ? Rs : bs)(f, 1);
    m.version = M;
    const u = s.get(d);
    (u && e.remove(u), s.set(d, m));
  }
  function h(d) {
    const f = s.get(d);
    if (f) {
      const p = d.index;
      p !== null && f.version < p.version && l(d);
    } else l(d);
    return s.get(d);
  }
  return { get: o, update: c, getWireframeAttribute: h };
}
function Cc(i, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    ((s = f.type), (a = f.bytesPerElement));
  }
  function c(f, p) {
    (i.drawElements(n, p, s, f * a), t.update(p, n, 1));
  }
  function l(f, p, g) {
    g !== 0 && (i.drawElementsInstanced(n, p, s, f * a, g), t.update(p, n, g));
  }
  function h(f, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, f, 0, g);
    let m = 0;
    for (let u = 0; u < g; u++) m += p[u];
    t.update(m, n, 1);
  }
  function d(f, p, g, M) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let u = 0; u < f.length; u++) l(f[u] / a, p[u], M[u]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, s, f, 0, M, 0, g);
      let u = 0;
      for (let A = 0; A < g; A++) u += p[A] * M[A];
      t.update(u, n, 1);
    }
  }
  ((this.setMode = r),
    (this.setIndex = o),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = h),
    (this.renderMultiDrawInstances = d));
}
function Pc(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    ((t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0));
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function Dc(i, e, t) {
  const n = new WeakMap(),
    r = new Ze();
  function s(a, o, c) {
    const l = a.morphTargetInfluences,
      h =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      d = h !== void 0 ? h.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let S = function () {
        (w.dispose(), n.delete(o), o.removeEventListener("dispose", S));
      };
      f !== void 0 && f.texture.dispose();
      const p = o.morphAttributes.position !== void 0,
        g = o.morphAttributes.normal !== void 0,
        M = o.morphAttributes.color !== void 0,
        m = o.morphAttributes.position || [],
        u = o.morphAttributes.normal || [],
        A = o.morphAttributes.color || [];
      let T = 0;
      (p === !0 && (T = 1), g === !0 && (T = 2), M === !0 && (T = 3));
      let E = o.attributes.position.count * T,
        L = 1;
      E > e.maxTextureSize &&
        ((L = Math.ceil(E / e.maxTextureSize)), (E = e.maxTextureSize));
      const b = new Float32Array(E * L * 4 * d),
        w = new ys(b, E, L, d);
      ((w.type = 1015), (w.needsUpdate = !0));
      const I = T * 4;
      for (let x = 0; x < d; x++) {
        const C = m[x],
          z = u[x],
          G = A[x],
          k = E * L * 4 * x;
        for (let Z = 0; Z < C.count; Z++) {
          const W = Z * I;
          (p === !0 &&
            (r.fromBufferAttribute(C, Z),
            (b[k + W + 0] = r.x),
            (b[k + W + 1] = r.y),
            (b[k + W + 2] = r.z),
            (b[k + W + 3] = 0)),
            g === !0 &&
              (r.fromBufferAttribute(z, Z),
              (b[k + W + 4] = r.x),
              (b[k + W + 5] = r.y),
              (b[k + W + 6] = r.z),
              (b[k + W + 7] = 0)),
            M === !0 &&
              (r.fromBufferAttribute(G, Z),
              (b[k + W + 8] = r.x),
              (b[k + W + 9] = r.y),
              (b[k + W + 10] = r.z),
              (b[k + W + 11] = G.itemSize === 4 ? r.w : 1)));
        }
      }
      ((f = { count: d, texture: w, size: new Ge(E, L) }),
        n.set(o, f),
        o.addEventListener("dispose", S));
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let M = 0; M < l.length; M++) p += l[M];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      (c.getUniforms().setValue(i, "morphTargetBaseInfluence", g),
        c.getUniforms().setValue(i, "morphTargetInfluences", l));
    }
    (c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t),
      c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size));
  }
  return { update: s };
}
function Lc(i, e, t, n) {
  let r = new WeakMap();
  function s(c) {
    const l = n.render.frame,
      h = c.geometry,
      d = e.get(c, h);
    if (
      (r.get(d) !== l && (e.update(d), r.set(d, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", o) === !1 &&
          c.addEventListener("dispose", o),
        r.get(c) !== l &&
          (t.update(c.instanceMatrix, i.ARRAY_BUFFER),
          c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER),
          r.set(c, l))),
      c.isSkinnedMesh)
    ) {
      const f = c.skeleton;
      r.get(f) !== l && (f.update(), r.set(f, l));
    }
    return d;
  }
  function a() {
    r = new WeakMap();
  }
  function o(c) {
    const l = c.target;
    (l.removeEventListener("dispose", o),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor));
  }
  return { update: s, dispose: a };
}
const zs = new dt(),
  rs = new Us(1, 1),
  Vs = new ys(),
  Hs = new sa(),
  ks = new Ps(),
  ss = [],
  as = [],
  os = new Float32Array(16),
  ls = new Float32Array(9),
  cs = new Float32Array(4);
function Nn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = ss[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (ss[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) ((o += t), i[a].toArray(s, o));
  }
  return s;
}
function ct(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function ht(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Ci(i, e) {
  let t = as[e];
  t === void 0 && ((t = new Int32Array(e)), (as[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function Uc(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function Ic(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    (i.uniform2fv(this.addr, e), ht(t, e));
  }
}
function Fc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (ct(t, e)) return;
    (i.uniform3fv(this.addr, e), ht(t, e));
  }
}
function Nc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    (i.uniform4fv(this.addr, e), ht(t, e));
  }
}
function Oc(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    (i.uniformMatrix2fv(this.addr, !1, e), ht(t, e));
  } else {
    if (ct(t, n)) return;
    (cs.set(n), i.uniformMatrix2fv(this.addr, !1, cs), ht(t, n));
  }
}
function Bc(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    (i.uniformMatrix3fv(this.addr, !1, e), ht(t, e));
  } else {
    if (ct(t, n)) return;
    (ls.set(n), i.uniformMatrix3fv(this.addr, !1, ls), ht(t, n));
  }
}
function Gc(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    (i.uniformMatrix4fv(this.addr, !1, e), ht(t, e));
  } else {
    if (ct(t, n)) return;
    (os.set(n), i.uniformMatrix4fv(this.addr, !1, os), ht(t, n));
  }
}
function zc(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function Vc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    (i.uniform2iv(this.addr, e), ht(t, e));
  }
}
function Hc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ct(t, e)) return;
    (i.uniform3iv(this.addr, e), ht(t, e));
  }
}
function kc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    (i.uniform4iv(this.addr, e), ht(t, e));
  }
}
function Wc(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function Xc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    (i.uniform2uiv(this.addr, e), ht(t, e));
  }
}
function qc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ct(t, e)) return;
    (i.uniform3uiv(this.addr, e), ht(t, e));
  }
}
function Yc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    (i.uniform4uiv(this.addr, e), ht(t, e));
  }
}
function Kc(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r));
  let s;
  (this.type === i.SAMPLER_2D_SHADOW
    ? ((rs.compareFunction = 515), (s = rs))
    : (s = zs),
    t.setTexture2D(e || s, r));
}
function Zc(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || Hs, r));
}
function $c(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || ks, r));
}
function jc(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || Vs, r));
}
function Jc(i) {
  switch (i) {
    case 5126:
      return Uc;
    case 35664:
      return Ic;
    case 35665:
      return Fc;
    case 35666:
      return Nc;
    case 35674:
      return Oc;
    case 35675:
      return Bc;
    case 35676:
      return Gc;
    case 5124:
    case 35670:
      return zc;
    case 35667:
    case 35671:
      return Vc;
    case 35668:
    case 35672:
      return Hc;
    case 35669:
    case 35673:
      return kc;
    case 5125:
      return Wc;
    case 36294:
      return Xc;
    case 36295:
      return qc;
    case 36296:
      return Yc;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kc;
    case 35679:
    case 36299:
    case 36307:
      return Zc;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $c;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return jc;
  }
}
function Qc(i, e) {
  i.uniform1fv(this.addr, e);
}
function eh(i, e) {
  const t = Nn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function th(i, e) {
  const t = Nn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function nh(i, e) {
  const t = Nn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function ih(i, e) {
  const t = Nn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function rh(i, e) {
  const t = Nn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function sh(i, e) {
  const t = Nn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function ah(i, e) {
  i.uniform1iv(this.addr, e);
}
function oh(i, e) {
  i.uniform2iv(this.addr, e);
}
function lh(i, e) {
  i.uniform3iv(this.addr, e);
}
function ch(i, e) {
  i.uniform4iv(this.addr, e);
}
function hh(i, e) {
  i.uniform1uiv(this.addr, e);
}
function uh(i, e) {
  i.uniform2uiv(this.addr, e);
}
function dh(i, e) {
  i.uniform3uiv(this.addr, e);
}
function fh(i, e) {
  i.uniform4uiv(this.addr, e);
}
function ph(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Ci(t, r);
  ct(n, s) || (i.uniform1iv(this.addr, s), ht(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || zs, s[a]);
}
function mh(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Ci(t, r);
  ct(n, s) || (i.uniform1iv(this.addr, s), ht(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || Hs, s[a]);
}
function _h(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Ci(t, r);
  ct(n, s) || (i.uniform1iv(this.addr, s), ht(n, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || ks, s[a]);
}
function gh(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Ci(t, r);
  ct(n, s) || (i.uniform1iv(this.addr, s), ht(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || Vs, s[a]);
}
function vh(i) {
  switch (i) {
    case 5126:
      return Qc;
    case 35664:
      return eh;
    case 35665:
      return th;
    case 35666:
      return nh;
    case 35674:
      return ih;
    case 35675:
      return rh;
    case 35676:
      return sh;
    case 5124:
    case 35670:
      return ah;
    case 35667:
    case 35671:
      return oh;
    case 35668:
    case 35672:
      return lh;
    case 35669:
    case 35673:
      return ch;
    case 5125:
      return hh;
    case 36294:
      return uh;
    case 36295:
      return dh;
    case 36296:
      return fh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ph;
    case 35679:
    case 36299:
    case 36307:
      return mh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return _h;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return gh;
  }
}
class xh {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Jc(t.type)));
  }
}
class Mh {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = vh(t.type)));
  }
}
class Sh {
  constructor(e) {
    ((this.id = e), (this.seq = []), (this.map = {}));
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const or = /(\w+)(\])?(\[|\.)?/g;
function hs(i, e) {
  (i.seq.push(e), (i.map[e.id] = e));
}
function Eh(i, e, t) {
  const n = i.name,
    r = n.length;
  for (or.lastIndex = 0; ; ) {
    const s = or.exec(n),
      a = or.lastIndex;
    let o = s[1];
    const c = s[2] === "]",
      l = s[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && a + 2 === r))) {
      hs(t, l === void 0 ? new xh(o, i, e) : new Mh(o, i, e));
      break;
    } else {
      let d = t.map[o];
      (d === void 0 && ((d = new Sh(o)), hs(t, d)), (t = d));
    }
  }
}
class Si {
  constructor(e, t) {
    ((this.seq = []), (this.map = {}));
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r),
        a = e.getUniformLocation(t, s.name);
      Eh(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function us(i, e, t) {
  const n = i.createShader(e);
  return (i.shaderSource(n, t), i.compileShader(n), n);
}
const yh = 37297;
let Th = 0;
function Ah(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const ds = new Ce();
function bh(i) {
  We._getMatrix(ds, We.workingColorSpace, i);
  const e = `mat3( ${ds.elements.map((t) => t.toFixed(4))} )`;
  switch (We.getTransfer(i)) {
    case Ei:
      return [e, "LinearTransferOETF"];
    case Ke:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space: ", i),
        [e, "LinearTransferOETF"]
      );
  }
}
function fs(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      Ah(i.getShaderSource(e), a)
    );
  } else return r;
}
function Rh(i, e) {
  const t = bh(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
function wh(i, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "Cineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 6:
      t = "AgX";
      break;
    case 7:
      t = "Neutral";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      (console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear"));
  }
  return (
    "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
const Mi = new F();
function Ch() {
  We.getLuminanceCoefficients(Mi);
  const i = Mi.x.toFixed(4),
    e = Mi.y.toFixed(4),
    t = Mi.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function Ph(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(Wn).join(`
`);
}
function Dh(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Lh(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r),
      a = s.name;
    let o = 1;
    (s.type === i.FLOAT_MAT2 && (o = 2),
      s.type === i.FLOAT_MAT3 && (o = 3),
      s.type === i.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: s.type,
        location: i.getAttribLocation(e, a),
        locationSize: o,
      }));
  }
  return t;
}
function Wn(i) {
  return i !== "";
}
function ps(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ms(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const Uh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ur(i) {
  return i.replace(Uh, Fh);
}
const Ih = new Map();
function Fh(i, e) {
  let t = De[e];
  if (t === void 0) {
    const n = Ih.get(e);
    if (n !== void 0)
      ((t = De[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n,
        ));
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return ur(t);
}
const Nh =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function _s(i) {
  return i.replace(Nh, Oh);
}
function Oh(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function gs(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
        ? (e += `
#define MEDIUM_PRECISION`)
        : i.precision === "lowp" &&
          (e += `
#define LOW_PRECISION`),
    e
  );
}
function Bh(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    i.shadowMapType === 1
      ? (e = "SHADOWMAP_TYPE_PCF")
      : i.shadowMapType === 2
        ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
        : i.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Gh(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function zh(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Vh(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Hh(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
    texelHeight: n,
    maxMip: t,
  };
}
function kh(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const c = Bh(t),
    l = Gh(t),
    h = zh(t),
    d = Vh(t),
    f = Hh(t),
    p = Ph(t),
    g = Dh(s),
    M = r.createProgram();
  let m,
    u,
    A = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  (t.isRawShaderMaterial
    ? ((m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(Wn).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (u = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(Wn).join(`
`)),
      u.length > 0 &&
        (u += `
`))
    : ((m = [
        gs(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Wn).join(`
`)),
      (u = [
        gs(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + d : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
        t.toneMapping !== 0 ? De.tonemapping_pars_fragment : "",
        t.toneMapping !== 0 ? wh("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        De.colorspace_pars_fragment,
        Rh("linearToOutputTexel", t.outputColorSpace),
        Ch(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Wn).join(`
`))),
    (a = ur(a)),
    (a = ps(a, t)),
    (a = ms(a, t)),
    (o = ur(o)),
    (o = ps(o, t)),
    (o = ms(o, t)),
    (a = _s(a)),
    (o = _s(o)),
    t.isRawShaderMaterial !== !0 &&
      ((A = `#version 300 es
`),
      (m =
        [
          p,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (u =
        [
          "#define varying in",
          t.glslVersion === Ar
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Ar ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        u)));
  const T = A + m + a,
    E = A + u + o,
    L = us(r, r.VERTEX_SHADER, T),
    b = us(r, r.FRAGMENT_SHADER, E);
  (r.attachShader(M, L),
    r.attachShader(M, b),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(M, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(M, 0, "position"),
    r.linkProgram(M));
  function w(C) {
    if (i.debug.checkShaderErrors) {
      const z = r.getProgramInfoLog(M).trim(),
        G = r.getShaderInfoLog(L).trim(),
        k = r.getShaderInfoLog(b).trim();
      let Z = !0,
        W = !0;
      if (r.getProgramParameter(M, r.LINK_STATUS) === !1)
        if (((Z = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(r, M, L, b);
        else {
          const Q = fs(r, L, "vertex"),
            H = fs(r, b, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(M, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              C.name +
              `
Material Type: ` +
              C.type +
              `

Program Info Log: ` +
              z +
              `
` +
              Q +
              `
` +
              H,
          );
        }
      else
        z !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", z)
          : (G === "" || k === "") && (W = !1);
      W &&
        (C.diagnostics = {
          runnable: Z,
          programLog: z,
          vertexShader: { log: G, prefix: m },
          fragmentShader: { log: k, prefix: u },
        });
    }
    (r.deleteShader(L), r.deleteShader(b), (I = new Si(r, M)), (S = Lh(r, M)));
  }
  let I;
  this.getUniforms = function () {
    return (I === void 0 && w(this), I);
  };
  let S;
  this.getAttributes = function () {
    return (S === void 0 && w(this), S);
  };
  let x = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (x === !1 && (x = r.getProgramParameter(M, yh)), x);
    }),
    (this.destroy = function () {
      (n.releaseStatesOfProgram(this),
        r.deleteProgram(M),
        (this.program = void 0));
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = Th++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = M),
    (this.vertexShader = L),
    (this.fragmentShader = b),
    this
  );
}
let Wh = 0;
class Xh {
  constructor() {
    ((this.shaderCache = new Map()), (this.materialCache = new Map()));
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      (n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code));
    return (this.materialCache.delete(e), this);
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    (this.shaderCache.clear(), this.materialCache.clear());
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new Set()), t.set(e, n)), n);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new qh(e)), t.set(e, n)), n);
  }
}
class qh {
  constructor(e) {
    ((this.id = Wh++), (this.code = e), (this.usedTimes = 0));
  }
}
function Yh(i, e, t, n, r, s, a) {
  const o = new fr(),
    c = new Xh(),
    l = new Set(),
    h = [],
    d = r.logarithmicDepthBuffer,
    f = r.vertexTextures;
  let p = r.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function M(S) {
    return (l.add(S), S === 0 ? "uv" : `uv${S}`);
  }
  function m(S, x, C, z, G) {
    const k = z.fog,
      Z = G.geometry,
      W = S.isMeshStandardMaterial ? z.environment : null,
      Q = (S.isMeshStandardMaterial ? t : e).get(S.envMap || W),
      H = Q && Q.mapping === 306 ? Q.image.height : null,
      re = g[S.type];
    S.precision !== null &&
      ((p = r.getMaxPrecision(S.precision)),
      p !== S.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          S.precision,
          "not supported, using",
          p,
          "instead.",
        ));
    const he =
        Z.morphAttributes.position ||
        Z.morphAttributes.normal ||
        Z.morphAttributes.color,
      ge = he !== void 0 ? he.length : 0;
    let Le = 0;
    (Z.morphAttributes.position !== void 0 && (Le = 1),
      Z.morphAttributes.normal !== void 0 && (Le = 2),
      Z.morphAttributes.color !== void 0 && (Le = 3));
    let $e, q, ee, me;
    if (re) {
      const Ye = Bt[re];
      (($e = Ye.vertexShader), (q = Ye.fragmentShader));
    } else
      (($e = S.vertexShader),
        (q = S.fragmentShader),
        c.update(S),
        (ee = c.getVertexShaderID(S)),
        (me = c.getFragmentShaderID(S)));
    const se = i.getRenderTarget(),
      ye = i.state.buffers.depth.getReversed(),
      Re = G.isInstancedMesh === !0,
      Ue = G.isBatchedMesh === !0,
      tt = !!S.map,
      ze = !!S.matcap,
      rt = !!Q,
      R = !!S.aoMap,
      At = !!S.lightMap,
      Ne = !!S.bumpMap,
      Oe = !!S.normalMap,
      ve = !!S.displacementMap,
      Je = !!S.emissiveMap,
      xe = !!S.metalnessMap,
      y = !!S.roughnessMap,
      _ = S.anisotropy > 0,
      N = S.clearcoat > 0,
      Y = S.dispersion > 0,
      $ = S.iridescence > 0,
      X = S.sheen > 0,
      _e = S.transmission > 0,
      ae = _ && !!S.anisotropyMap,
      ue = N && !!S.clearcoatMap,
      Ve = N && !!S.clearcoatNormalMap,
      J = N && !!S.clearcoatRoughnessMap,
      de = $ && !!S.iridescenceMap,
      Ee = $ && !!S.iridescenceThicknessMap,
      Te = X && !!S.sheenColorMap,
      fe = X && !!S.sheenRoughnessMap,
      Be = !!S.specularMap,
      Pe = !!S.specularColorMap,
      je = !!S.specularIntensityMap,
      P = _e && !!S.transmissionMap,
      ne = _e && !!S.thicknessMap,
      V = !!S.gradientMap,
      K = !!S.alphaMap,
      le = S.alphaTest > 0,
      oe = !!S.alphaHash,
      we = !!S.extensions;
    let nt = 0;
    S.toneMapped &&
      (se === null || se.isXRRenderTarget === !0) &&
      (nt = i.toneMapping);
    const pt = {
      shaderID: re,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: $e,
      fragmentShader: q,
      defines: S.defines,
      customVertexShaderID: ee,
      customFragmentShaderID: me,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: p,
      batching: Ue,
      batchingColor: Ue && G._colorsTexture !== null,
      instancing: Re,
      instancingColor: Re && G.instanceColor !== null,
      instancingMorph: Re && G.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace:
        se === null
          ? i.outputColorSpace
          : se.isXRRenderTarget === !0
            ? se.texture.colorSpace
            : Un,
      alphaToCoverage: !!S.alphaToCoverage,
      map: tt,
      matcap: ze,
      envMap: rt,
      envMapMode: rt && Q.mapping,
      envMapCubeUVHeight: H,
      aoMap: R,
      lightMap: At,
      bumpMap: Ne,
      normalMap: Oe,
      displacementMap: f && ve,
      emissiveMap: Je,
      normalMapObjectSpace: Oe && S.normalMapType === 1,
      normalMapTangentSpace: Oe && S.normalMapType === 0,
      metalnessMap: xe,
      roughnessMap: y,
      anisotropy: _,
      anisotropyMap: ae,
      clearcoat: N,
      clearcoatMap: ue,
      clearcoatNormalMap: Ve,
      clearcoatRoughnessMap: J,
      dispersion: Y,
      iridescence: $,
      iridescenceMap: de,
      iridescenceThicknessMap: Ee,
      sheen: X,
      sheenColorMap: Te,
      sheenRoughnessMap: fe,
      specularMap: Be,
      specularColorMap: Pe,
      specularIntensityMap: je,
      transmission: _e,
      transmissionMap: P,
      thicknessMap: ne,
      gradientMap: V,
      opaque:
        S.transparent === !1 && S.blending === 1 && S.alphaToCoverage === !1,
      alphaMap: K,
      alphaTest: le,
      alphaHash: oe,
      combine: S.combine,
      mapUv: tt && M(S.map.channel),
      aoMapUv: R && M(S.aoMap.channel),
      lightMapUv: At && M(S.lightMap.channel),
      bumpMapUv: Ne && M(S.bumpMap.channel),
      normalMapUv: Oe && M(S.normalMap.channel),
      displacementMapUv: ve && M(S.displacementMap.channel),
      emissiveMapUv: Je && M(S.emissiveMap.channel),
      metalnessMapUv: xe && M(S.metalnessMap.channel),
      roughnessMapUv: y && M(S.roughnessMap.channel),
      anisotropyMapUv: ae && M(S.anisotropyMap.channel),
      clearcoatMapUv: ue && M(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Ve && M(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: J && M(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: de && M(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ee && M(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: Te && M(S.sheenColorMap.channel),
      sheenRoughnessMapUv: fe && M(S.sheenRoughnessMap.channel),
      specularMapUv: Be && M(S.specularMap.channel),
      specularColorMapUv: Pe && M(S.specularColorMap.channel),
      specularIntensityMapUv: je && M(S.specularIntensityMap.channel),
      transmissionMapUv: P && M(S.transmissionMap.channel),
      thicknessMapUv: ne && M(S.thicknessMap.channel),
      alphaMapUv: K && M(S.alphaMap.channel),
      vertexTangents: !!Z.attributes.tangent && (Oe || _),
      vertexColors: S.vertexColors,
      vertexAlphas:
        S.vertexColors === !0 &&
        !!Z.attributes.color &&
        Z.attributes.color.itemSize === 4,
      pointsUvs: G.isPoints === !0 && !!Z.attributes.uv && (tt || K),
      fog: !!k,
      useFog: S.fog === !0,
      fogExp2: !!k && k.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reverseDepthBuffer: ye,
      skinning: G.isSkinnedMesh === !0,
      morphTargets: Z.morphAttributes.position !== void 0,
      morphNormals: Z.morphAttributes.normal !== void 0,
      morphColors: Z.morphAttributes.color !== void 0,
      morphTargetsCount: ge,
      morphTextureStride: Le,
      numDirLights: x.directional.length,
      numPointLights: x.point.length,
      numSpotLights: x.spot.length,
      numSpotLightMaps: x.spotLightMap.length,
      numRectAreaLights: x.rectArea.length,
      numHemiLights: x.hemi.length,
      numDirLightShadows: x.directionalShadowMap.length,
      numPointLightShadows: x.pointShadowMap.length,
      numSpotLightShadows: x.spotShadowMap.length,
      numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
      numLightProbes: x.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && C.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: nt,
      decodeVideoTexture:
        tt &&
        S.map.isVideoTexture === !0 &&
        We.getTransfer(S.map.colorSpace) === Ke,
      decodeVideoTextureEmissive:
        Je &&
        S.emissiveMap.isVideoTexture === !0 &&
        We.getTransfer(S.emissiveMap.colorSpace) === Ke,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === 2,
      flipSided: S.side === 1,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance:
        we &&
        S.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((we && S.extensions.multiDraw === !0) || Ue) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: S.customProgramCacheKey(),
    };
    return (
      (pt.vertexUv1s = l.has(1)),
      (pt.vertexUv2s = l.has(2)),
      (pt.vertexUv3s = l.has(3)),
      l.clear(),
      pt
    );
  }
  function u(S) {
    const x = [];
    if (
      (S.shaderID
        ? x.push(S.shaderID)
        : (x.push(S.customVertexShaderID), x.push(S.customFragmentShaderID)),
      S.defines !== void 0)
    )
      for (const C in S.defines) (x.push(C), x.push(S.defines[C]));
    return (
      S.isRawShaderMaterial === !1 &&
        (A(x, S), T(x, S), x.push(i.outputColorSpace)),
      x.push(S.customProgramCacheKey),
      x.join()
    );
  }
  function A(S, x) {
    (S.push(x.precision),
      S.push(x.outputColorSpace),
      S.push(x.envMapMode),
      S.push(x.envMapCubeUVHeight),
      S.push(x.mapUv),
      S.push(x.alphaMapUv),
      S.push(x.lightMapUv),
      S.push(x.aoMapUv),
      S.push(x.bumpMapUv),
      S.push(x.normalMapUv),
      S.push(x.displacementMapUv),
      S.push(x.emissiveMapUv),
      S.push(x.metalnessMapUv),
      S.push(x.roughnessMapUv),
      S.push(x.anisotropyMapUv),
      S.push(x.clearcoatMapUv),
      S.push(x.clearcoatNormalMapUv),
      S.push(x.clearcoatRoughnessMapUv),
      S.push(x.iridescenceMapUv),
      S.push(x.iridescenceThicknessMapUv),
      S.push(x.sheenColorMapUv),
      S.push(x.sheenRoughnessMapUv),
      S.push(x.specularMapUv),
      S.push(x.specularColorMapUv),
      S.push(x.specularIntensityMapUv),
      S.push(x.transmissionMapUv),
      S.push(x.thicknessMapUv),
      S.push(x.combine),
      S.push(x.fogExp2),
      S.push(x.sizeAttenuation),
      S.push(x.morphTargetsCount),
      S.push(x.morphAttributeCount),
      S.push(x.numDirLights),
      S.push(x.numPointLights),
      S.push(x.numSpotLights),
      S.push(x.numSpotLightMaps),
      S.push(x.numHemiLights),
      S.push(x.numRectAreaLights),
      S.push(x.numDirLightShadows),
      S.push(x.numPointLightShadows),
      S.push(x.numSpotLightShadows),
      S.push(x.numSpotLightShadowsWithMaps),
      S.push(x.numLightProbes),
      S.push(x.shadowMapType),
      S.push(x.toneMapping),
      S.push(x.numClippingPlanes),
      S.push(x.numClipIntersection),
      S.push(x.depthPacking));
  }
  function T(S, x) {
    (o.disableAll(),
      x.supportsVertexTextures && o.enable(0),
      x.instancing && o.enable(1),
      x.instancingColor && o.enable(2),
      x.instancingMorph && o.enable(3),
      x.matcap && o.enable(4),
      x.envMap && o.enable(5),
      x.normalMapObjectSpace && o.enable(6),
      x.normalMapTangentSpace && o.enable(7),
      x.clearcoat && o.enable(8),
      x.iridescence && o.enable(9),
      x.alphaTest && o.enable(10),
      x.vertexColors && o.enable(11),
      x.vertexAlphas && o.enable(12),
      x.vertexUv1s && o.enable(13),
      x.vertexUv2s && o.enable(14),
      x.vertexUv3s && o.enable(15),
      x.vertexTangents && o.enable(16),
      x.anisotropy && o.enable(17),
      x.alphaHash && o.enable(18),
      x.batching && o.enable(19),
      x.dispersion && o.enable(20),
      x.batchingColor && o.enable(21),
      S.push(o.mask),
      o.disableAll(),
      x.fog && o.enable(0),
      x.useFog && o.enable(1),
      x.flatShading && o.enable(2),
      x.logarithmicDepthBuffer && o.enable(3),
      x.reverseDepthBuffer && o.enable(4),
      x.skinning && o.enable(5),
      x.morphTargets && o.enable(6),
      x.morphNormals && o.enable(7),
      x.morphColors && o.enable(8),
      x.premultipliedAlpha && o.enable(9),
      x.shadowMapEnabled && o.enable(10),
      x.doubleSided && o.enable(11),
      x.flipSided && o.enable(12),
      x.useDepthPacking && o.enable(13),
      x.dithering && o.enable(14),
      x.transmission && o.enable(15),
      x.sheen && o.enable(16),
      x.opaque && o.enable(17),
      x.pointsUvs && o.enable(18),
      x.decodeVideoTexture && o.enable(19),
      x.decodeVideoTextureEmissive && o.enable(20),
      x.alphaToCoverage && o.enable(21),
      S.push(o.mask));
  }
  function E(S) {
    const x = g[S.type];
    let C;
    if (x) {
      const z = Bt[x];
      C = ga.clone(z.uniforms);
    } else C = S.uniforms;
    return C;
  }
  function L(S, x) {
    let C;
    for (let z = 0, G = h.length; z < G; z++) {
      const k = h[z];
      if (k.cacheKey === x) {
        ((C = k), ++C.usedTimes);
        break;
      }
    }
    return (C === void 0 && ((C = new kh(i, x, S, s)), h.push(C)), C);
  }
  function b(S) {
    if (--S.usedTimes === 0) {
      const x = h.indexOf(S);
      ((h[x] = h[h.length - 1]), h.pop(), S.destroy());
    }
  }
  function w(S) {
    c.remove(S);
  }
  function I() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: u,
    getUniforms: E,
    acquireProgram: L,
    releaseProgram: b,
    releaseShaderCache: w,
    programs: h,
    dispose: I,
  };
}
function Kh() {
  let i = new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return (o === void 0 && ((o = {}), i.set(a, o)), o);
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, c) {
    i.get(a)[o] = c;
  }
  function s() {
    i = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: s };
}
function Zh(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
      ? i.renderOrder - e.renderOrder
      : i.material.id !== e.material.id
        ? i.material.id - e.material.id
        : i.z !== e.z
          ? i.z - e.z
          : i.id - e.id;
}
function vs(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
      ? i.renderOrder - e.renderOrder
      : i.z !== e.z
        ? e.z - i.z
        : i.id - e.id;
}
function xs() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    ((e = 0), (t.length = 0), (n.length = 0), (r.length = 0));
  }
  function a(d, f, p, g, M, m) {
    let u = i[e];
    return (
      u === void 0
        ? ((u = {
            id: d.id,
            object: d,
            geometry: f,
            material: p,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: M,
            group: m,
          }),
          (i[e] = u))
        : ((u.id = d.id),
          (u.object = d),
          (u.geometry = f),
          (u.material = p),
          (u.groupOrder = g),
          (u.renderOrder = d.renderOrder),
          (u.z = M),
          (u.group = m)),
      e++,
      u
    );
  }
  function o(d, f, p, g, M, m) {
    const u = a(d, f, p, g, M, m);
    p.transmission > 0
      ? n.push(u)
      : p.transparent === !0
        ? r.push(u)
        : t.push(u);
  }
  function c(d, f, p, g, M, m) {
    const u = a(d, f, p, g, M, m);
    p.transmission > 0
      ? n.unshift(u)
      : p.transparent === !0
        ? r.unshift(u)
        : t.unshift(u);
  }
  function l(d, f) {
    (t.length > 1 && t.sort(d || Zh),
      n.length > 1 && n.sort(f || vs),
      r.length > 1 && r.sort(f || vs));
  }
  function h() {
    for (let d = e, f = i.length; d < f; d++) {
      const p = i[d];
      if (p.id === null) break;
      ((p.id = null),
        (p.object = null),
        (p.geometry = null),
        (p.material = null),
        (p.group = null));
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: c,
    finish: h,
    sort: l,
  };
}
function $h() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new xs()), i.set(n, [a]))
        : r >= s.length
          ? ((a = new xs()), s.push(a))
          : (a = s[r]),
      a
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function jh() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new F(), color: new Ie() };
          break;
        case "SpotLight":
          t = {
            position: new F(),
            direction: new F(),
            color: new Ie(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new F(), color: new Ie(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new F(), skyColor: new Ie(), groundColor: new Ie() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ie(),
            position: new F(),
            halfWidth: new F(),
            halfHeight: new F(),
          };
          break;
      }
      return ((i[e.id] = t), t);
    },
  };
}
function Jh() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ge(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ge(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ge(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((i[e.id] = t), t);
    },
  };
}
let Qh = 0;
function eu(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function tu(i) {
  const e = new jh(),
    t = Jh(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let l = 0; l < 9; l++) n.probe.push(new F());
  const r = new F(),
    s = new Qe(),
    a = new Qe();
  function o(l) {
    let h = 0,
      d = 0,
      f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let p = 0,
      g = 0,
      M = 0,
      m = 0,
      u = 0,
      A = 0,
      T = 0,
      E = 0,
      L = 0,
      b = 0,
      w = 0;
    l.sort(eu);
    for (let S = 0, x = l.length; S < x; S++) {
      const C = l[S],
        z = C.color,
        G = C.intensity,
        k = C.distance,
        Z = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight) ((h += z.r * G), (d += z.g * G), (f += z.b * G));
      else if (C.isLightProbe) {
        for (let W = 0; W < 9; W++)
          n.probe[W].addScaledVector(C.sh.coefficients[W], G);
        w++;
      } else if (C.isDirectionalLight) {
        const W = e.get(C);
        if ((W.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow)) {
          const Q = C.shadow,
            H = t.get(C);
          ((H.shadowIntensity = Q.intensity),
            (H.shadowBias = Q.bias),
            (H.shadowNormalBias = Q.normalBias),
            (H.shadowRadius = Q.radius),
            (H.shadowMapSize = Q.mapSize),
            (n.directionalShadow[p] = H),
            (n.directionalShadowMap[p] = Z),
            (n.directionalShadowMatrix[p] = C.shadow.matrix),
            A++);
        }
        ((n.directional[p] = W), p++);
      } else if (C.isSpotLight) {
        const W = e.get(C);
        (W.position.setFromMatrixPosition(C.matrixWorld),
          W.color.copy(z).multiplyScalar(G),
          (W.distance = k),
          (W.coneCos = Math.cos(C.angle)),
          (W.penumbraCos = Math.cos(C.angle * (1 - C.penumbra))),
          (W.decay = C.decay),
          (n.spot[M] = W));
        const Q = C.shadow;
        if (
          (C.map &&
            ((n.spotLightMap[L] = C.map),
            L++,
            Q.updateMatrices(C),
            C.castShadow && b++),
          (n.spotLightMatrix[M] = Q.matrix),
          C.castShadow)
        ) {
          const H = t.get(C);
          ((H.shadowIntensity = Q.intensity),
            (H.shadowBias = Q.bias),
            (H.shadowNormalBias = Q.normalBias),
            (H.shadowRadius = Q.radius),
            (H.shadowMapSize = Q.mapSize),
            (n.spotShadow[M] = H),
            (n.spotShadowMap[M] = Z),
            E++);
        }
        M++;
      } else if (C.isRectAreaLight) {
        const W = e.get(C);
        (W.color.copy(z).multiplyScalar(G),
          W.halfWidth.set(C.width * 0.5, 0, 0),
          W.halfHeight.set(0, C.height * 0.5, 0),
          (n.rectArea[m] = W),
          m++);
      } else if (C.isPointLight) {
        const W = e.get(C);
        if (
          (W.color.copy(C.color).multiplyScalar(C.intensity),
          (W.distance = C.distance),
          (W.decay = C.decay),
          C.castShadow)
        ) {
          const Q = C.shadow,
            H = t.get(C);
          ((H.shadowIntensity = Q.intensity),
            (H.shadowBias = Q.bias),
            (H.shadowNormalBias = Q.normalBias),
            (H.shadowRadius = Q.radius),
            (H.shadowMapSize = Q.mapSize),
            (H.shadowCameraNear = Q.camera.near),
            (H.shadowCameraFar = Q.camera.far),
            (n.pointShadow[g] = H),
            (n.pointShadowMap[g] = Z),
            (n.pointShadowMatrix[g] = C.shadow.matrix),
            T++);
        }
        ((n.point[g] = W), g++);
      } else if (C.isHemisphereLight) {
        const W = e.get(C);
        (W.skyColor.copy(C.color).multiplyScalar(G),
          W.groundColor.copy(C.groundColor).multiplyScalar(G),
          (n.hemi[u] = W),
          u++);
      }
    }
    (m > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = te.LTC_FLOAT_1), (n.rectAreaLTC2 = te.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = te.LTC_HALF_1), (n.rectAreaLTC2 = te.LTC_HALF_2))),
      (n.ambient[0] = h),
      (n.ambient[1] = d),
      (n.ambient[2] = f));
    const I = n.hash;
    (I.directionalLength !== p ||
      I.pointLength !== g ||
      I.spotLength !== M ||
      I.rectAreaLength !== m ||
      I.hemiLength !== u ||
      I.numDirectionalShadows !== A ||
      I.numPointShadows !== T ||
      I.numSpotShadows !== E ||
      I.numSpotMaps !== L ||
      I.numLightProbes !== w) &&
      ((n.directional.length = p),
      (n.spot.length = M),
      (n.rectArea.length = m),
      (n.point.length = g),
      (n.hemi.length = u),
      (n.directionalShadow.length = A),
      (n.directionalShadowMap.length = A),
      (n.pointShadow.length = T),
      (n.pointShadowMap.length = T),
      (n.spotShadow.length = E),
      (n.spotShadowMap.length = E),
      (n.directionalShadowMatrix.length = A),
      (n.pointShadowMatrix.length = T),
      (n.spotLightMatrix.length = E + L - b),
      (n.spotLightMap.length = L),
      (n.numSpotLightShadowsWithMaps = b),
      (n.numLightProbes = w),
      (I.directionalLength = p),
      (I.pointLength = g),
      (I.spotLength = M),
      (I.rectAreaLength = m),
      (I.hemiLength = u),
      (I.numDirectionalShadows = A),
      (I.numPointShadows = T),
      (I.numSpotShadows = E),
      (I.numSpotMaps = L),
      (I.numLightProbes = w),
      (n.version = Qh++));
  }
  function c(l, h) {
    let d = 0,
      f = 0,
      p = 0,
      g = 0,
      M = 0;
    const m = h.matrixWorldInverse;
    for (let u = 0, A = l.length; u < A; u++) {
      const T = l[u];
      if (T.isDirectionalLight) {
        const E = n.directional[d];
        (E.direction.setFromMatrixPosition(T.matrixWorld),
          r.setFromMatrixPosition(T.target.matrixWorld),
          E.direction.sub(r),
          E.direction.transformDirection(m),
          d++);
      } else if (T.isSpotLight) {
        const E = n.spot[p];
        (E.position.setFromMatrixPosition(T.matrixWorld),
          E.position.applyMatrix4(m),
          E.direction.setFromMatrixPosition(T.matrixWorld),
          r.setFromMatrixPosition(T.target.matrixWorld),
          E.direction.sub(r),
          E.direction.transformDirection(m),
          p++);
      } else if (T.isRectAreaLight) {
        const E = n.rectArea[g];
        (E.position.setFromMatrixPosition(T.matrixWorld),
          E.position.applyMatrix4(m),
          a.identity(),
          s.copy(T.matrixWorld),
          s.premultiply(m),
          a.extractRotation(s),
          E.halfWidth.set(T.width * 0.5, 0, 0),
          E.halfHeight.set(0, T.height * 0.5, 0),
          E.halfWidth.applyMatrix4(a),
          E.halfHeight.applyMatrix4(a),
          g++);
      } else if (T.isPointLight) {
        const E = n.point[f];
        (E.position.setFromMatrixPosition(T.matrixWorld),
          E.position.applyMatrix4(m),
          f++);
      } else if (T.isHemisphereLight) {
        const E = n.hemi[M];
        (E.direction.setFromMatrixPosition(T.matrixWorld),
          E.direction.transformDirection(m),
          M++);
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function Ms(i) {
  const e = new tu(i),
    t = [],
    n = [];
  function r(h) {
    ((l.camera = h), (t.length = 0), (n.length = 0));
  }
  function s(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function c(h) {
    e.setupView(t, h);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: r,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: s,
    pushShadow: a,
  };
}
function nu(i) {
  let e = new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return (
      a === void 0
        ? ((o = new Ms(i)), e.set(r, [o]))
        : s >= a.length
          ? ((o = new Ms(i)), a.push(o))
          : (o = a[s]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const iu = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  ru = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function su(i, e, t) {
  let n = new pr();
  const r = new Ge(),
    s = new Ge(),
    a = new Ze(),
    o = new Aa({ depthPacking: 3201 }),
    c = new ba(),
    l = {},
    h = t.maxTextureSize,
    d = { 0: 1, 1: 0, 2: 2 },
    f = new tn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ge() },
        radius: { value: 4 },
      },
      vertexShader: iu,
      fragmentShader: ru,
    }),
    p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Pt();
  g.setAttribute(
    "position",
    new Gt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const M = new Yt(g, f),
    m = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1));
  let u = this.type;
  this.render = function (b, w, I) {
    if (
      m.enabled === !1 ||
      (m.autoUpdate === !1 && m.needsUpdate === !1) ||
      b.length === 0
    )
      return;
    const S = i.getRenderTarget(),
      x = i.getActiveCubeFace(),
      C = i.getActiveMipmapLevel(),
      z = i.state;
    (z.setBlending(0),
      z.buffers.color.setClear(1, 1, 1, 1),
      z.buffers.depth.setTest(!0),
      z.setScissorTest(!1));
    const G = u !== 3 && this.type === 3,
      k = u === 3 && this.type !== 3;
    for (let Z = 0, W = b.length; Z < W; Z++) {
      const Q = b[Z],
        H = Q.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      r.copy(H.mapSize);
      const re = H.getFrameExtents();
      if (
        (r.multiply(re),
        s.copy(H.mapSize),
        (r.x > h || r.y > h) &&
          (r.x > h &&
            ((s.x = Math.floor(h / re.x)),
            (r.x = s.x * re.x),
            (H.mapSize.x = s.x)),
          r.y > h &&
            ((s.y = Math.floor(h / re.y)),
            (r.y = s.y * re.y),
            (H.mapSize.y = s.y))),
        H.map === null || G === !0 || k === !0)
      ) {
        const ge = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        (H.map !== null && H.map.dispose(),
          (H.map = new pn(r.x, r.y, ge)),
          (H.map.texture.name = Q.name + ".shadowMap"),
          H.camera.updateProjectionMatrix());
      }
      (i.setRenderTarget(H.map), i.clear());
      const he = H.getViewportCount();
      for (let ge = 0; ge < he; ge++) {
        const Le = H.getViewport(ge);
        (a.set(s.x * Le.x, s.y * Le.y, s.x * Le.z, s.y * Le.w),
          z.viewport(a),
          H.updateMatrices(Q, ge),
          (n = H.getFrustum()),
          E(w, I, H.camera, Q, this.type));
      }
      (H.isPointLightShadow !== !0 && this.type === 3 && A(H, I),
        (H.needsUpdate = !1));
    }
    ((u = this.type), (m.needsUpdate = !1), i.setRenderTarget(S, x, C));
  };
  function A(b, w) {
    const I = e.update(M);
    (f.defines.VSM_SAMPLES !== b.blurSamples &&
      ((f.defines.VSM_SAMPLES = b.blurSamples),
      (p.defines.VSM_SAMPLES = b.blurSamples),
      (f.needsUpdate = !0),
      (p.needsUpdate = !0)),
      b.mapPass === null && (b.mapPass = new pn(r.x, r.y)),
      (f.uniforms.shadow_pass.value = b.map.texture),
      (f.uniforms.resolution.value = b.mapSize),
      (f.uniforms.radius.value = b.radius),
      i.setRenderTarget(b.mapPass),
      i.clear(),
      i.renderBufferDirect(w, null, I, f, M, null),
      (p.uniforms.shadow_pass.value = b.mapPass.texture),
      (p.uniforms.resolution.value = b.mapSize),
      (p.uniforms.radius.value = b.radius),
      i.setRenderTarget(b.map),
      i.clear(),
      i.renderBufferDirect(w, null, I, p, M, null));
  }
  function T(b, w, I, S) {
    let x = null;
    const C =
      I.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (C !== void 0) x = C;
    else if (
      ((x = I.isPointLight === !0 ? c : o),
      (i.localClippingEnabled &&
        w.clipShadows === !0 &&
        Array.isArray(w.clippingPlanes) &&
        w.clippingPlanes.length !== 0) ||
        (w.displacementMap && w.displacementScale !== 0) ||
        (w.alphaMap && w.alphaTest > 0) ||
        (w.map && w.alphaTest > 0))
    ) {
      const z = x.uuid,
        G = w.uuid;
      let k = l[z];
      k === void 0 && ((k = {}), (l[z] = k));
      let Z = k[G];
      (Z === void 0 &&
        ((Z = x.clone()), (k[G] = Z), w.addEventListener("dispose", L)),
        (x = Z));
    }
    if (
      ((x.visible = w.visible),
      (x.wireframe = w.wireframe),
      S === 3
        ? (x.side = w.shadowSide !== null ? w.shadowSide : w.side)
        : (x.side = w.shadowSide !== null ? w.shadowSide : d[w.side]),
      (x.alphaMap = w.alphaMap),
      (x.alphaTest = w.alphaTest),
      (x.map = w.map),
      (x.clipShadows = w.clipShadows),
      (x.clippingPlanes = w.clippingPlanes),
      (x.clipIntersection = w.clipIntersection),
      (x.displacementMap = w.displacementMap),
      (x.displacementScale = w.displacementScale),
      (x.displacementBias = w.displacementBias),
      (x.wireframeLinewidth = w.wireframeLinewidth),
      (x.linewidth = w.linewidth),
      I.isPointLight === !0 && x.isMeshDistanceMaterial === !0)
    ) {
      const z = i.properties.get(x);
      z.light = I;
    }
    return x;
  }
  function E(b, w, I, S, x) {
    if (b.visible === !1) return;
    if (
      b.layers.test(w.layers) &&
      (b.isMesh || b.isLine || b.isPoints) &&
      (b.castShadow || (b.receiveShadow && x === 3)) &&
      (!b.frustumCulled || n.intersectsObject(b))
    ) {
      b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, b.matrixWorld);
      const G = e.update(b),
        k = b.material;
      if (Array.isArray(k)) {
        const Z = G.groups;
        for (let W = 0, Q = Z.length; W < Q; W++) {
          const H = Z[W],
            re = k[H.materialIndex];
          if (re && re.visible) {
            const he = T(b, re, S, x);
            (b.onBeforeShadow(i, b, w, I, G, he, H),
              i.renderBufferDirect(I, null, G, he, b, H),
              b.onAfterShadow(i, b, w, I, G, he, H));
          }
        }
      } else if (k.visible) {
        const Z = T(b, k, S, x);
        (b.onBeforeShadow(i, b, w, I, G, Z, null),
          i.renderBufferDirect(I, null, G, Z, b, null),
          b.onAfterShadow(i, b, w, I, G, Z, null));
      }
    }
    const z = b.children;
    for (let G = 0, k = z.length; G < k; G++) E(z[G], w, I, S, x);
  }
  function L(b) {
    b.target.removeEventListener("dispose", L);
    for (const I in l) {
      const S = l[I],
        x = b.target.uuid;
      x in S && (S[x].dispose(), delete S[x]);
    }
  }
}
const au = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 };
function ou(i, e) {
  function t() {
    let P = !1;
    const ne = new Ze();
    let V = null;
    const K = new Ze(0, 0, 0, 0);
    return {
      setMask: function (le) {
        V !== le && !P && (i.colorMask(le, le, le, le), (V = le));
      },
      setLocked: function (le) {
        P = le;
      },
      setClear: function (le, oe, we, nt, pt) {
        (pt === !0 && ((le *= nt), (oe *= nt), (we *= nt)),
          ne.set(le, oe, we, nt),
          K.equals(ne) === !1 && (i.clearColor(le, oe, we, nt), K.copy(ne)));
      },
      reset: function () {
        ((P = !1), (V = null), K.set(-1, 0, 0, 0));
      },
    };
  }
  function n() {
    let P = !1,
      ne = !1,
      V = null,
      K = null,
      le = null;
    return {
      setReversed: function (oe) {
        if (ne !== oe) {
          const we = e.get("EXT_clip_control");
          ne
            ? we.clipControlEXT(we.LOWER_LEFT_EXT, we.ZERO_TO_ONE_EXT)
            : we.clipControlEXT(we.LOWER_LEFT_EXT, we.NEGATIVE_ONE_TO_ONE_EXT);
          const nt = le;
          ((le = null), this.setClear(nt));
        }
        ne = oe;
      },
      getReversed: function () {
        return ne;
      },
      setTest: function (oe) {
        oe ? se(i.DEPTH_TEST) : ye(i.DEPTH_TEST);
      },
      setMask: function (oe) {
        V !== oe && !P && (i.depthMask(oe), (V = oe));
      },
      setFunc: function (oe) {
        if ((ne && (oe = au[oe]), K !== oe)) {
          switch (oe) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          K = oe;
        }
      },
      setLocked: function (oe) {
        P = oe;
      },
      setClear: function (oe) {
        le !== oe && (ne && (oe = 1 - oe), i.clearDepth(oe), (le = oe));
      },
      reset: function () {
        ((P = !1), (V = null), (K = null), (le = null), (ne = !1));
      },
    };
  }
  function r() {
    let P = !1,
      ne = null,
      V = null,
      K = null,
      le = null,
      oe = null,
      we = null,
      nt = null,
      pt = null;
    return {
      setTest: function (Ye) {
        P || (Ye ? se(i.STENCIL_TEST) : ye(i.STENCIL_TEST));
      },
      setMask: function (Ye) {
        ne !== Ye && !P && (i.stencilMask(Ye), (ne = Ye));
      },
      setFunc: function (Ye, Dt, zt) {
        (V !== Ye || K !== Dt || le !== zt) &&
          (i.stencilFunc(Ye, Dt, zt), (V = Ye), (K = Dt), (le = zt));
      },
      setOp: function (Ye, Dt, zt) {
        (oe !== Ye || we !== Dt || nt !== zt) &&
          (i.stencilOp(Ye, Dt, zt), (oe = Ye), (we = Dt), (nt = zt));
      },
      setLocked: function (Ye) {
        P = Ye;
      },
      setClear: function (Ye) {
        pt !== Ye && (i.clearStencil(Ye), (pt = Ye));
      },
      reset: function () {
        ((P = !1),
          (ne = null),
          (V = null),
          (K = null),
          (le = null),
          (oe = null),
          (we = null),
          (nt = null),
          (pt = null));
      },
    };
  }
  const s = new t(),
    a = new n(),
    o = new r(),
    c = new WeakMap(),
    l = new WeakMap();
  let h = {},
    d = {},
    f = new WeakMap(),
    p = [],
    g = null,
    M = !1,
    m = null,
    u = null,
    A = null,
    T = null,
    E = null,
    L = null,
    b = null,
    w = new Ie(0, 0, 0),
    I = 0,
    S = !1,
    x = null,
    C = null,
    z = null,
    G = null,
    k = null;
  const Z = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = !1,
    Q = 0;
  const H = i.getParameter(i.VERSION);
  H.indexOf("WebGL") !== -1
    ? ((Q = parseFloat(/^WebGL (\d)/.exec(H)[1])), (W = Q >= 1))
    : H.indexOf("OpenGL ES") !== -1 &&
      ((Q = parseFloat(/^OpenGL ES (\d)/.exec(H)[1])), (W = Q >= 2));
  let re = null,
    he = {};
  const ge = i.getParameter(i.SCISSOR_BOX),
    Le = i.getParameter(i.VIEWPORT),
    $e = new Ze().fromArray(ge),
    q = new Ze().fromArray(Le);
  function ee(P, ne, V, K) {
    const le = new Uint8Array(4),
      oe = i.createTexture();
    (i.bindTexture(P, oe),
      i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST));
    for (let we = 0; we < V; we++)
      P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(ne, 0, i.RGBA, 1, 1, K, 0, i.RGBA, i.UNSIGNED_BYTE, le)
        : i.texImage2D(
            ne + we,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            le,
          );
    return oe;
  }
  const me = {};
  ((me[i.TEXTURE_2D] = ee(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (me[i.TEXTURE_CUBE_MAP] = ee(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (me[i.TEXTURE_2D_ARRAY] = ee(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (me[i.TEXTURE_3D] = ee(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    s.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    se(i.DEPTH_TEST),
    a.setFunc(3),
    Ne(!1),
    Oe(1),
    se(i.CULL_FACE),
    R(0));
  function se(P) {
    h[P] !== !0 && (i.enable(P), (h[P] = !0));
  }
  function ye(P) {
    h[P] !== !1 && (i.disable(P), (h[P] = !1));
  }
  function Re(P, ne) {
    return d[P] !== ne
      ? (i.bindFramebuffer(P, ne),
        (d[P] = ne),
        P === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = ne),
        P === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = ne),
        !0)
      : !1;
  }
  function Ue(P, ne) {
    let V = p,
      K = !1;
    if (P) {
      ((V = f.get(ne)), V === void 0 && ((V = []), f.set(ne, V)));
      const le = P.textures;
      if (V.length !== le.length || V[0] !== i.COLOR_ATTACHMENT0) {
        for (let oe = 0, we = le.length; oe < we; oe++)
          V[oe] = i.COLOR_ATTACHMENT0 + oe;
        ((V.length = le.length), (K = !0));
      }
    } else V[0] !== i.BACK && ((V[0] = i.BACK), (K = !0));
    K && i.drawBuffers(V);
  }
  function tt(P) {
    return g !== P ? (i.useProgram(P), (g = P), !0) : !1;
  }
  const ze = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT,
  };
  ((ze[103] = i.MIN), (ze[104] = i.MAX));
  const rt = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function R(P, ne, V, K, le, oe, we, nt, pt, Ye) {
    if (P === 0) {
      M === !0 && (ye(i.BLEND), (M = !1));
      return;
    }
    if ((M === !1 && (se(i.BLEND), (M = !0)), P !== 5)) {
      if (P !== m || Ye !== S) {
        if (
          ((u !== 100 || E !== 100) &&
            (i.blendEquation(i.FUNC_ADD), (u = 100), (E = 100)),
          Ye)
        )
          switch (P) {
            case 1:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case 1:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case 2:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        ((A = null),
          (T = null),
          (L = null),
          (b = null),
          w.set(0, 0, 0),
          (I = 0),
          (m = P),
          (S = Ye));
      }
      return;
    }
    ((le = le || ne),
      (oe = oe || V),
      (we = we || K),
      (ne !== u || le !== E) &&
        (i.blendEquationSeparate(ze[ne], ze[le]), (u = ne), (E = le)),
      (V !== A || K !== T || oe !== L || we !== b) &&
        (i.blendFuncSeparate(rt[V], rt[K], rt[oe], rt[we]),
        (A = V),
        (T = K),
        (L = oe),
        (b = we)),
      (nt.equals(w) === !1 || pt !== I) &&
        (i.blendColor(nt.r, nt.g, nt.b, pt), w.copy(nt), (I = pt)),
      (m = P),
      (S = !1));
  }
  function At(P, ne) {
    P.side === 2 ? ye(i.CULL_FACE) : se(i.CULL_FACE);
    let V = P.side === 1;
    (ne && (V = !V),
      Ne(V),
      P.blending === 1 && P.transparent === !1
        ? R(0)
        : R(
            P.blending,
            P.blendEquation,
            P.blendSrc,
            P.blendDst,
            P.blendEquationAlpha,
            P.blendSrcAlpha,
            P.blendDstAlpha,
            P.blendColor,
            P.blendAlpha,
            P.premultipliedAlpha,
          ),
      a.setFunc(P.depthFunc),
      a.setTest(P.depthTest),
      a.setMask(P.depthWrite),
      s.setMask(P.colorWrite));
    const K = P.stencilWrite;
    (o.setTest(K),
      K &&
        (o.setMask(P.stencilWriteMask),
        o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask),
        o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)),
      Je(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits),
      P.alphaToCoverage === !0
        ? se(i.SAMPLE_ALPHA_TO_COVERAGE)
        : ye(i.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function Ne(P) {
    x !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), (x = P));
  }
  function Oe(P) {
    (P !== 0
      ? (se(i.CULL_FACE),
        P !== C &&
          (P === 1
            ? i.cullFace(i.BACK)
            : P === 2
              ? i.cullFace(i.FRONT)
              : i.cullFace(i.FRONT_AND_BACK)))
      : ye(i.CULL_FACE),
      (C = P));
  }
  function ve(P) {
    P !== z && (W && i.lineWidth(P), (z = P));
  }
  function Je(P, ne, V) {
    P
      ? (se(i.POLYGON_OFFSET_FILL),
        (G !== ne || k !== V) && (i.polygonOffset(ne, V), (G = ne), (k = V)))
      : ye(i.POLYGON_OFFSET_FILL);
  }
  function xe(P) {
    P ? se(i.SCISSOR_TEST) : ye(i.SCISSOR_TEST);
  }
  function y(P) {
    (P === void 0 && (P = i.TEXTURE0 + Z - 1),
      re !== P && (i.activeTexture(P), (re = P)));
  }
  function _(P, ne, V) {
    V === void 0 && (re === null ? (V = i.TEXTURE0 + Z - 1) : (V = re));
    let K = he[V];
    (K === void 0 && ((K = { type: void 0, texture: void 0 }), (he[V] = K)),
      (K.type !== P || K.texture !== ne) &&
        (re !== V && (i.activeTexture(V), (re = V)),
        i.bindTexture(P, ne || me[P]),
        (K.type = P),
        (K.texture = ne)));
  }
  function N() {
    const P = he[re];
    P !== void 0 &&
      P.type !== void 0 &&
      (i.bindTexture(P.type, null), (P.type = void 0), (P.texture = void 0));
  }
  function Y() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function $() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function X() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function _e() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ae() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ue() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Ve() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function J() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function de() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Ee() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Te(P) {
    $e.equals(P) === !1 && (i.scissor(P.x, P.y, P.z, P.w), $e.copy(P));
  }
  function fe(P) {
    q.equals(P) === !1 && (i.viewport(P.x, P.y, P.z, P.w), q.copy(P));
  }
  function Be(P, ne) {
    let V = l.get(ne);
    V === void 0 && ((V = new WeakMap()), l.set(ne, V));
    let K = V.get(P);
    K === void 0 && ((K = i.getUniformBlockIndex(ne, P.name)), V.set(P, K));
  }
  function Pe(P, ne) {
    const K = l.get(ne).get(P);
    c.get(ne) !== K &&
      (i.uniformBlockBinding(ne, K, P.__bindingPointIndex), c.set(ne, K));
  }
  function je() {
    (i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      a.setReversed(!1),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (h = {}),
      (re = null),
      (he = {}),
      (d = {}),
      (f = new WeakMap()),
      (p = []),
      (g = null),
      (M = !1),
      (m = null),
      (u = null),
      (A = null),
      (T = null),
      (E = null),
      (L = null),
      (b = null),
      (w = new Ie(0, 0, 0)),
      (I = 0),
      (S = !1),
      (x = null),
      (C = null),
      (z = null),
      (G = null),
      (k = null),
      $e.set(0, 0, i.canvas.width, i.canvas.height),
      q.set(0, 0, i.canvas.width, i.canvas.height),
      s.reset(),
      a.reset(),
      o.reset());
  }
  return {
    buffers: { color: s, depth: a, stencil: o },
    enable: se,
    disable: ye,
    bindFramebuffer: Re,
    drawBuffers: Ue,
    useProgram: tt,
    setBlending: R,
    setMaterial: At,
    setFlipSided: Ne,
    setCullFace: Oe,
    setLineWidth: ve,
    setPolygonOffset: Je,
    setScissorTest: xe,
    activeTexture: y,
    bindTexture: _,
    unbindTexture: N,
    compressedTexImage2D: Y,
    compressedTexImage3D: $,
    texImage2D: de,
    texImage3D: Ee,
    updateUBOMapping: Be,
    uniformBlockBinding: Pe,
    texStorage2D: Ve,
    texStorage3D: J,
    texSubImage2D: X,
    texSubImage3D: _e,
    compressedTexSubImage2D: ae,
    compressedTexSubImage3D: ue,
    scissor: Te,
    viewport: fe,
    reset: je,
  };
}
function lu(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    l = new Ge(),
    h = new WeakMap();
  let d;
  const f = new WeakMap();
  let p = !1;
  try {
    p =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function g(y, _) {
    return p ? new OffscreenCanvas(y, _) : Xn("canvas");
  }
  function M(y, _, N) {
    let Y = 1;
    const $ = xe(y);
    if (
      (($.width > N || $.height > N) && (Y = N / Math.max($.width, $.height)),
      Y < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && y instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && y instanceof VideoFrame)
      ) {
        const X = Math.floor(Y * $.width),
          _e = Math.floor(Y * $.height);
        d === void 0 && (d = g(X, _e));
        const ae = _ ? g(X, _e) : d;
        return (
          (ae.width = X),
          (ae.height = _e),
          ae.getContext("2d").drawImage(y, 0, 0, X, _e),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              $.width +
              "x" +
              $.height +
              ") to (" +
              X +
              "x" +
              _e +
              ").",
          ),
          ae
        );
      } else
        return (
          "data" in y &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                $.width +
                "x" +
                $.height +
                ").",
            ),
          y
        );
    return y;
  }
  function m(y) {
    return y.generateMipmaps;
  }
  function u(y) {
    i.generateMipmap(y);
  }
  function A(y) {
    return y.isWebGLCubeRenderTarget
      ? i.TEXTURE_CUBE_MAP
      : y.isWebGL3DRenderTarget
        ? i.TEXTURE_3D
        : y.isWebGLArrayRenderTarget || y.isCompressedArrayTexture
          ? i.TEXTURE_2D_ARRAY
          : i.TEXTURE_2D;
  }
  function T(y, _, N, Y, $ = !1) {
    if (y !== null) {
      if (i[y] !== void 0) return i[y];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          y +
          "'",
      );
    }
    let X = _;
    if (
      (_ === i.RED &&
        (N === i.FLOAT && (X = i.R32F),
        N === i.HALF_FLOAT && (X = i.R16F),
        N === i.UNSIGNED_BYTE && (X = i.R8)),
      _ === i.RED_INTEGER &&
        (N === i.UNSIGNED_BYTE && (X = i.R8UI),
        N === i.UNSIGNED_SHORT && (X = i.R16UI),
        N === i.UNSIGNED_INT && (X = i.R32UI),
        N === i.BYTE && (X = i.R8I),
        N === i.SHORT && (X = i.R16I),
        N === i.INT && (X = i.R32I)),
      _ === i.RG &&
        (N === i.FLOAT && (X = i.RG32F),
        N === i.HALF_FLOAT && (X = i.RG16F),
        N === i.UNSIGNED_BYTE && (X = i.RG8)),
      _ === i.RG_INTEGER &&
        (N === i.UNSIGNED_BYTE && (X = i.RG8UI),
        N === i.UNSIGNED_SHORT && (X = i.RG16UI),
        N === i.UNSIGNED_INT && (X = i.RG32UI),
        N === i.BYTE && (X = i.RG8I),
        N === i.SHORT && (X = i.RG16I),
        N === i.INT && (X = i.RG32I)),
      _ === i.RGB_INTEGER &&
        (N === i.UNSIGNED_BYTE && (X = i.RGB8UI),
        N === i.UNSIGNED_SHORT && (X = i.RGB16UI),
        N === i.UNSIGNED_INT && (X = i.RGB32UI),
        N === i.BYTE && (X = i.RGB8I),
        N === i.SHORT && (X = i.RGB16I),
        N === i.INT && (X = i.RGB32I)),
      _ === i.RGBA_INTEGER &&
        (N === i.UNSIGNED_BYTE && (X = i.RGBA8UI),
        N === i.UNSIGNED_SHORT && (X = i.RGBA16UI),
        N === i.UNSIGNED_INT && (X = i.RGBA32UI),
        N === i.BYTE && (X = i.RGBA8I),
        N === i.SHORT && (X = i.RGBA16I),
        N === i.INT && (X = i.RGBA32I)),
      _ === i.RGB && N === i.UNSIGNED_INT_5_9_9_9_REV && (X = i.RGB9_E5),
      _ === i.RGBA)
    ) {
      const _e = $ ? Ei : We.getTransfer(Y);
      (N === i.FLOAT && (X = i.RGBA32F),
        N === i.HALF_FLOAT && (X = i.RGBA16F),
        N === i.UNSIGNED_BYTE && (X = _e === Ke ? i.SRGB8_ALPHA8 : i.RGBA8),
        N === i.UNSIGNED_SHORT_4_4_4_4 && (X = i.RGBA4),
        N === i.UNSIGNED_SHORT_5_5_5_1 && (X = i.RGB5_A1));
    }
    return (
      (X === i.R16F ||
        X === i.R32F ||
        X === i.RG16F ||
        X === i.RG32F ||
        X === i.RGBA16F ||
        X === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      X
    );
  }
  function E(y, _) {
    let N;
    return (
      y
        ? _ === null || _ === 1014 || _ === 1020
          ? (N = i.DEPTH24_STENCIL8)
          : _ === 1015
            ? (N = i.DEPTH32F_STENCIL8)
            : _ === 1012 &&
              ((N = i.DEPTH24_STENCIL8),
              console.warn(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : _ === null || _ === 1014 || _ === 1020
          ? (N = i.DEPTH_COMPONENT24)
          : _ === 1015
            ? (N = i.DEPTH_COMPONENT32F)
            : _ === 1012 && (N = i.DEPTH_COMPONENT16),
      N
    );
  }
  function L(y, _) {
    return m(y) === !0 ||
      (y.isFramebufferTexture && y.minFilter !== 1003 && y.minFilter !== 1006)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : y.mipmaps !== void 0 && y.mipmaps.length > 0
        ? y.mipmaps.length
        : y.isCompressedTexture && Array.isArray(y.image)
          ? _.mipmaps.length
          : 1;
  }
  function b(y) {
    const _ = y.target;
    (_.removeEventListener("dispose", b),
      I(_),
      _.isVideoTexture && h.delete(_));
  }
  function w(y) {
    const _ = y.target;
    (_.removeEventListener("dispose", w), x(_));
  }
  function I(y) {
    const _ = n.get(y);
    if (_.__webglInit === void 0) return;
    const N = y.source,
      Y = f.get(N);
    if (Y) {
      const $ = Y[_.__cacheKey];
      ($.usedTimes--,
        $.usedTimes === 0 && S(y),
        Object.keys(Y).length === 0 && f.delete(N));
    }
    n.remove(y);
  }
  function S(y) {
    const _ = n.get(y);
    i.deleteTexture(_.__webglTexture);
    const N = y.source,
      Y = f.get(N);
    (delete Y[_.__cacheKey], a.memory.textures--);
  }
  function x(y) {
    const _ = n.get(y);
    if (
      (y.depthTexture && (y.depthTexture.dispose(), n.remove(y.depthTexture)),
      y.isWebGLCubeRenderTarget)
    )
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(_.__webglFramebuffer[Y]))
          for (let $ = 0; $ < _.__webglFramebuffer[Y].length; $++)
            i.deleteFramebuffer(_.__webglFramebuffer[Y][$]);
        else i.deleteFramebuffer(_.__webglFramebuffer[Y]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let Y = 0; Y < _.__webglFramebuffer.length; Y++)
          i.deleteFramebuffer(_.__webglFramebuffer[Y]);
      else i.deleteFramebuffer(_.__webglFramebuffer);
      if (
        (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer),
        _.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(_.__webglMultisampledFramebuffer),
        _.__webglColorRenderbuffer)
      )
        for (let Y = 0; Y < _.__webglColorRenderbuffer.length; Y++)
          _.__webglColorRenderbuffer[Y] &&
            i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);
      _.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const N = y.textures;
    for (let Y = 0, $ = N.length; Y < $; Y++) {
      const X = n.get(N[Y]);
      (X.__webglTexture &&
        (i.deleteTexture(X.__webglTexture), a.memory.textures--),
        n.remove(N[Y]));
    }
    n.remove(y);
  }
  let C = 0;
  function z() {
    C = 0;
  }
  function G() {
    const y = C;
    return (
      y >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            y +
            " texture units while this GPU supports only " +
            r.maxTextures,
        ),
      (C += 1),
      y
    );
  }
  function k(y) {
    const _ = [];
    return (
      _.push(y.wrapS),
      _.push(y.wrapT),
      _.push(y.wrapR || 0),
      _.push(y.magFilter),
      _.push(y.minFilter),
      _.push(y.anisotropy),
      _.push(y.internalFormat),
      _.push(y.format),
      _.push(y.type),
      _.push(y.generateMipmaps),
      _.push(y.premultiplyAlpha),
      _.push(y.flipY),
      _.push(y.unpackAlignment),
      _.push(y.colorSpace),
      _.join()
    );
  }
  function Z(y, _) {
    const N = n.get(y);
    if (
      (y.isVideoTexture && ve(y),
      y.isRenderTargetTexture === !1 &&
        y.version > 0 &&
        N.__version !== y.version)
    ) {
      const Y = y.image;
      if (Y === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if (Y.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        q(N, y, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function W(y, _) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      q(N, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + _);
  }
  function Q(y, _) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      q(N, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function H(y, _) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      ee(N, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + _);
  }
  const re = { 1e3: i.REPEAT, 1001: i.CLAMP_TO_EDGE, 1002: i.MIRRORED_REPEAT },
    he = {
      1003: i.NEAREST,
      1004: i.NEAREST_MIPMAP_NEAREST,
      1005: i.NEAREST_MIPMAP_LINEAR,
      1006: i.LINEAR,
      1007: i.LINEAR_MIPMAP_NEAREST,
      1008: i.LINEAR_MIPMAP_LINEAR,
    },
    ge = {
      512: i.NEVER,
      519: i.ALWAYS,
      513: i.LESS,
      515: i.LEQUAL,
      514: i.EQUAL,
      518: i.GEQUAL,
      516: i.GREATER,
      517: i.NOTEQUAL,
    };
  function Le(y, _) {
    if (
      (_.type === 1015 &&
        e.has("OES_texture_float_linear") === !1 &&
        (_.magFilter === 1006 ||
          _.magFilter === 1007 ||
          _.magFilter === 1005 ||
          _.magFilter === 1008 ||
          _.minFilter === 1006 ||
          _.minFilter === 1007 ||
          _.minFilter === 1005 ||
          _.minFilter === 1008) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      i.texParameteri(y, i.TEXTURE_WRAP_S, re[_.wrapS]),
      i.texParameteri(y, i.TEXTURE_WRAP_T, re[_.wrapT]),
      (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(y, i.TEXTURE_WRAP_R, re[_.wrapR]),
      i.texParameteri(y, i.TEXTURE_MAG_FILTER, he[_.magFilter]),
      i.texParameteri(y, i.TEXTURE_MIN_FILTER, he[_.minFilter]),
      _.compareFunction &&
        (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, ge[_.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        _.magFilter === 1003 ||
        (_.minFilter !== 1005 && _.minFilter !== 1008) ||
        (_.type === 1015 && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const N = e.get("EXT_texture_filter_anisotropic");
        (i.texParameterf(
          y,
          N.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, r.getMaxAnisotropy()),
        ),
          (n.get(_).__currentAnisotropy = _.anisotropy));
      }
    }
  }
  function $e(y, _) {
    let N = !1;
    y.__webglInit === void 0 &&
      ((y.__webglInit = !0), _.addEventListener("dispose", b));
    const Y = _.source;
    let $ = f.get(Y);
    $ === void 0 && (($ = {}), f.set(Y, $));
    const X = k(_);
    if (X !== y.__cacheKey) {
      ($[X] === void 0 &&
        (($[X] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (N = !0)),
        $[X].usedTimes++);
      const _e = $[y.__cacheKey];
      (_e !== void 0 &&
        ($[y.__cacheKey].usedTimes--, _e.usedTimes === 0 && S(_)),
        (y.__cacheKey = X),
        (y.__webglTexture = $[X].texture));
    }
    return N;
  }
  function q(y, _, N) {
    let Y = i.TEXTURE_2D;
    ((_.isDataArrayTexture || _.isCompressedArrayTexture) &&
      (Y = i.TEXTURE_2D_ARRAY),
      _.isData3DTexture && (Y = i.TEXTURE_3D));
    const $ = $e(y, _),
      X = _.source;
    t.bindTexture(Y, y.__webglTexture, i.TEXTURE0 + N);
    const _e = n.get(X);
    if (X.version !== _e.__version || $ === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const ae = We.getPrimaries(We.workingColorSpace),
        ue = _.colorSpace === "" ? null : We.getPrimaries(_.colorSpace),
        Ve =
          _.colorSpace === "" || ae === ue ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ve));
      let J = M(_.image, !1, r.maxTextureSize);
      J = Je(_, J);
      const de = s.convert(_.format, _.colorSpace),
        Ee = s.convert(_.type);
      let Te = T(_.internalFormat, de, Ee, _.colorSpace, _.isVideoTexture);
      Le(Y, _);
      let fe;
      const Be = _.mipmaps,
        Pe = _.isVideoTexture !== !0,
        je = _e.__version === void 0 || $ === !0,
        P = X.dataReady,
        ne = L(_, J);
      if (_.isDepthTexture)
        ((Te = E(_.format === 1027, _.type)),
          je &&
            (Pe
              ? t.texStorage2D(i.TEXTURE_2D, 1, Te, J.width, J.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  Te,
                  J.width,
                  J.height,
                  0,
                  de,
                  Ee,
                  null,
                )));
      else if (_.isDataTexture)
        if (Be.length > 0) {
          Pe &&
            je &&
            t.texStorage2D(i.TEXTURE_2D, ne, Te, Be[0].width, Be[0].height);
          for (let V = 0, K = Be.length; V < K; V++)
            ((fe = Be[V]),
              Pe
                ? P &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    V,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    de,
                    Ee,
                    fe.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    V,
                    Te,
                    fe.width,
                    fe.height,
                    0,
                    de,
                    Ee,
                    fe.data,
                  ));
          _.generateMipmaps = !1;
        } else
          Pe
            ? (je && t.texStorage2D(i.TEXTURE_2D, ne, Te, J.width, J.height),
              P &&
                t.texSubImage2D(
                  i.TEXTURE_2D,
                  0,
                  0,
                  0,
                  J.width,
                  J.height,
                  de,
                  Ee,
                  J.data,
                ))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                Te,
                J.width,
                J.height,
                0,
                de,
                Ee,
                J.data,
              );
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Pe &&
            je &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              ne,
              Te,
              Be[0].width,
              Be[0].height,
              J.depth,
            );
          for (let V = 0, K = Be.length; V < K; V++)
            if (((fe = Be[V]), _.format !== 1023))
              if (de !== null)
                if (Pe) {
                  if (P)
                    if (_.layerUpdates.size > 0) {
                      const le = $r(fe.width, fe.height, _.format, _.type);
                      for (const oe of _.layerUpdates) {
                        const we = fe.data.subarray(
                          (oe * le) / fe.data.BYTES_PER_ELEMENT,
                          ((oe + 1) * le) / fe.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          V,
                          0,
                          0,
                          oe,
                          fe.width,
                          fe.height,
                          1,
                          de,
                          we,
                        );
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        V,
                        0,
                        0,
                        0,
                        fe.width,
                        fe.height,
                        J.depth,
                        de,
                        fe.data,
                      );
                } else
                  t.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    V,
                    Te,
                    fe.width,
                    fe.height,
                    J.depth,
                    0,
                    fe.data,
                    0,
                    0,
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              Pe
                ? P &&
                  t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    V,
                    0,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    J.depth,
                    de,
                    Ee,
                    fe.data,
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    V,
                    Te,
                    fe.width,
                    fe.height,
                    J.depth,
                    0,
                    de,
                    Ee,
                    fe.data,
                  );
        } else {
          Pe &&
            je &&
            t.texStorage2D(i.TEXTURE_2D, ne, Te, Be[0].width, Be[0].height);
          for (let V = 0, K = Be.length; V < K; V++)
            ((fe = Be[V]),
              _.format !== 1023
                ? de !== null
                  ? Pe
                    ? P &&
                      t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        V,
                        0,
                        0,
                        fe.width,
                        fe.height,
                        de,
                        fe.data,
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        V,
                        Te,
                        fe.width,
                        fe.height,
                        0,
                        fe.data,
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : Pe
                  ? P &&
                    t.texSubImage2D(
                      i.TEXTURE_2D,
                      V,
                      0,
                      0,
                      fe.width,
                      fe.height,
                      de,
                      Ee,
                      fe.data,
                    )
                  : t.texImage2D(
                      i.TEXTURE_2D,
                      V,
                      Te,
                      fe.width,
                      fe.height,
                      0,
                      de,
                      Ee,
                      fe.data,
                    ));
        }
      else if (_.isDataArrayTexture)
        if (Pe) {
          if (
            (je &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                ne,
                Te,
                J.width,
                J.height,
                J.depth,
              ),
            P)
          )
            if (_.layerUpdates.size > 0) {
              const V = $r(J.width, J.height, _.format, _.type);
              for (const K of _.layerUpdates) {
                const le = J.data.subarray(
                  (K * V) / J.data.BYTES_PER_ELEMENT,
                  ((K + 1) * V) / J.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  K,
                  J.width,
                  J.height,
                  1,
                  de,
                  Ee,
                  le,
                );
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                J.width,
                J.height,
                J.depth,
                de,
                Ee,
                J.data,
              );
        } else
          t.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            Te,
            J.width,
            J.height,
            J.depth,
            0,
            de,
            Ee,
            J.data,
          );
      else if (_.isData3DTexture)
        Pe
          ? (je &&
              t.texStorage3D(i.TEXTURE_3D, ne, Te, J.width, J.height, J.depth),
            P &&
              t.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                J.width,
                J.height,
                J.depth,
                de,
                Ee,
                J.data,
              ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              Te,
              J.width,
              J.height,
              J.depth,
              0,
              de,
              Ee,
              J.data,
            );
      else if (_.isFramebufferTexture) {
        if (je)
          if (Pe) t.texStorage2D(i.TEXTURE_2D, ne, Te, J.width, J.height);
          else {
            let V = J.width,
              K = J.height;
            for (let le = 0; le < ne; le++)
              (t.texImage2D(i.TEXTURE_2D, le, Te, V, K, 0, de, Ee, null),
                (V >>= 1),
                (K >>= 1));
          }
      } else if (Be.length > 0) {
        if (Pe && je) {
          const V = xe(Be[0]);
          t.texStorage2D(i.TEXTURE_2D, ne, Te, V.width, V.height);
        }
        for (let V = 0, K = Be.length; V < K; V++)
          ((fe = Be[V]),
            Pe
              ? P && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, de, Ee, fe)
              : t.texImage2D(i.TEXTURE_2D, V, Te, de, Ee, fe));
        _.generateMipmaps = !1;
      } else if (Pe) {
        if (je) {
          const V = xe(J);
          t.texStorage2D(i.TEXTURE_2D, ne, Te, V.width, V.height);
        }
        P && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, de, Ee, J);
      } else t.texImage2D(i.TEXTURE_2D, 0, Te, de, Ee, J);
      (m(_) && u(Y), (_e.__version = X.version), _.onUpdate && _.onUpdate(_));
    }
    y.__version = _.version;
  }
  function ee(y, _, N) {
    if (_.image.length !== 6) return;
    const Y = $e(y, _),
      $ = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + N);
    const X = n.get($);
    if ($.version !== X.__version || Y === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const _e = We.getPrimaries(We.workingColorSpace),
        ae = _.colorSpace === "" ? null : We.getPrimaries(_.colorSpace),
        ue =
          _.colorSpace === "" || _e === ae ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue));
      const Ve = _.isCompressedTexture || _.image[0].isCompressedTexture,
        J = _.image[0] && _.image[0].isDataTexture,
        de = [];
      for (let K = 0; K < 6; K++)
        (!Ve && !J
          ? (de[K] = M(_.image[K], !0, r.maxCubemapSize))
          : (de[K] = J ? _.image[K].image : _.image[K]),
          (de[K] = Je(_, de[K])));
      const Ee = de[0],
        Te = s.convert(_.format, _.colorSpace),
        fe = s.convert(_.type),
        Be = T(_.internalFormat, Te, fe, _.colorSpace),
        Pe = _.isVideoTexture !== !0,
        je = X.__version === void 0 || Y === !0,
        P = $.dataReady;
      let ne = L(_, Ee);
      Le(i.TEXTURE_CUBE_MAP, _);
      let V;
      if (Ve) {
        Pe &&
          je &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ne, Be, Ee.width, Ee.height);
        for (let K = 0; K < 6; K++) {
          V = de[K].mipmaps;
          for (let le = 0; le < V.length; le++) {
            const oe = V[le];
            _.format !== 1023
              ? Te !== null
                ? Pe
                  ? P &&
                    t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                      le,
                      0,
                      0,
                      oe.width,
                      oe.height,
                      Te,
                      oe.data,
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                      le,
                      Be,
                      oe.width,
                      oe.height,
                      0,
                      oe.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : Pe
                ? P &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    le,
                    0,
                    0,
                    oe.width,
                    oe.height,
                    Te,
                    fe,
                    oe.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    le,
                    Be,
                    oe.width,
                    oe.height,
                    0,
                    Te,
                    fe,
                    oe.data,
                  );
          }
        }
      } else {
        if (((V = _.mipmaps), Pe && je)) {
          V.length > 0 && ne++;
          const K = xe(de[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ne, Be, K.width, K.height);
        }
        for (let K = 0; K < 6; K++)
          if (J) {
            Pe
              ? P &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  0,
                  0,
                  0,
                  de[K].width,
                  de[K].height,
                  Te,
                  fe,
                  de[K].data,
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  0,
                  Be,
                  de[K].width,
                  de[K].height,
                  0,
                  Te,
                  fe,
                  de[K].data,
                );
            for (let le = 0; le < V.length; le++) {
              const we = V[le].image[K].image;
              Pe
                ? P &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    le + 1,
                    0,
                    0,
                    we.width,
                    we.height,
                    Te,
                    fe,
                    we.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    le + 1,
                    Be,
                    we.width,
                    we.height,
                    0,
                    Te,
                    fe,
                    we.data,
                  );
            }
          } else {
            Pe
              ? P &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  0,
                  0,
                  0,
                  Te,
                  fe,
                  de[K],
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  0,
                  Be,
                  Te,
                  fe,
                  de[K],
                );
            for (let le = 0; le < V.length; le++) {
              const oe = V[le];
              Pe
                ? P &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    le + 1,
                    0,
                    0,
                    Te,
                    fe,
                    oe.image[K],
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    le + 1,
                    Be,
                    Te,
                    fe,
                    oe.image[K],
                  );
            }
          }
      }
      (m(_) && u(i.TEXTURE_CUBE_MAP),
        (X.__version = $.version),
        _.onUpdate && _.onUpdate(_));
    }
    y.__version = _.version;
  }
  function me(y, _, N, Y, $, X) {
    const _e = s.convert(N.format, N.colorSpace),
      ae = s.convert(N.type),
      ue = T(N.internalFormat, _e, ae, N.colorSpace),
      Ve = n.get(_),
      J = n.get(N);
    if (((J.__renderTarget = _), !Ve.__hasExternalTextures)) {
      const de = Math.max(1, _.width >> X),
        Ee = Math.max(1, _.height >> X);
      $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY
        ? t.texImage3D($, X, ue, de, Ee, _.depth, 0, _e, ae, null)
        : t.texImage2D($, X, ue, de, Ee, 0, _e, ae, null);
    }
    (t.bindFramebuffer(i.FRAMEBUFFER, y),
      Oe(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            Y,
            $,
            J.__webglTexture,
            0,
            Ne(_),
          )
        : ($ === i.TEXTURE_2D ||
            ($ >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, Y, $, J.__webglTexture, X),
      t.bindFramebuffer(i.FRAMEBUFFER, null));
  }
  function se(y, _, N) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, y), _.depthBuffer)) {
      const Y = _.depthTexture,
        $ = Y && Y.isDepthTexture ? Y.type : null,
        X = E(_.stencilBuffer, $),
        _e = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        ae = Ne(_);
      (Oe(_)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            ae,
            X,
            _.width,
            _.height,
          )
        : N
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              ae,
              X,
              _.width,
              _.height,
            )
          : i.renderbufferStorage(i.RENDERBUFFER, X, _.width, _.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, _e, i.RENDERBUFFER, y));
    } else {
      const Y = _.textures;
      for (let $ = 0; $ < Y.length; $++) {
        const X = Y[$],
          _e = s.convert(X.format, X.colorSpace),
          ae = s.convert(X.type),
          ue = T(X.internalFormat, _e, ae, X.colorSpace),
          Ve = Ne(_);
        N && Oe(_) === !1
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              Ve,
              ue,
              _.width,
              _.height,
            )
          : Oe(_)
            ? o.renderbufferStorageMultisampleEXT(
                i.RENDERBUFFER,
                Ve,
                ue,
                _.width,
                _.height,
              )
            : i.renderbufferStorage(i.RENDERBUFFER, ue, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ye(y, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, y),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    const Y = n.get(_.depthTexture);
    ((Y.__renderTarget = _),
      (!Y.__webglTexture ||
        _.depthTexture.image.width !== _.width ||
        _.depthTexture.image.height !== _.height) &&
        ((_.depthTexture.image.width = _.width),
        (_.depthTexture.image.height = _.height),
        (_.depthTexture.needsUpdate = !0)),
      Z(_.depthTexture, 0));
    const $ = Y.__webglTexture,
      X = Ne(_);
    if (_.depthTexture.format === 1026)
      Oe(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            $,
            0,
            X,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            $,
            0,
          );
    else if (_.depthTexture.format === 1027)
      Oe(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            $,
            0,
            X,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            $,
            0,
          );
    else throw new Error("Unknown depthTexture format");
  }
  function Re(y) {
    const _ = n.get(y),
      N = y.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== y.depthTexture) {
      const Y = y.depthTexture;
      if ((_.__depthDisposeCallback && _.__depthDisposeCallback(), Y)) {
        const $ = () => {
          (delete _.__boundDepthTexture,
            delete _.__depthDisposeCallback,
            Y.removeEventListener("dispose", $));
        };
        (Y.addEventListener("dispose", $), (_.__depthDisposeCallback = $));
      }
      _.__boundDepthTexture = Y;
    }
    if (y.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (N)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      ye(_.__webglFramebuffer, y);
    } else if (N) {
      _.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (
          (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Y]),
          _.__webglDepthbuffer[Y] === void 0)
        )
          ((_.__webglDepthbuffer[Y] = i.createRenderbuffer()),
            se(_.__webglDepthbuffer[Y], y, !1));
        else {
          const $ = y.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            X = _.__webglDepthbuffer[Y];
          (i.bindRenderbuffer(i.RENDERBUFFER, X),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, X));
        }
    } else if (
      (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer),
      _.__webglDepthbuffer === void 0)
    )
      ((_.__webglDepthbuffer = i.createRenderbuffer()),
        se(_.__webglDepthbuffer, y, !1));
    else {
      const Y = y.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT,
        $ = _.__webglDepthbuffer;
      (i.bindRenderbuffer(i.RENDERBUFFER, $),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, $));
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ue(y, _, N) {
    const Y = n.get(y);
    (_ !== void 0 &&
      me(
        Y.__webglFramebuffer,
        y,
        y.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0,
      ),
      N !== void 0 && Re(y));
  }
  function tt(y) {
    const _ = y.texture,
      N = n.get(y),
      Y = n.get(_);
    y.addEventListener("dispose", w);
    const $ = y.textures,
      X = y.isWebGLCubeRenderTarget === !0,
      _e = $.length > 1;
    if (
      (_e ||
        (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()),
        (Y.__version = _.version),
        a.memory.textures++),
      X)
    ) {
      N.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          N.__webglFramebuffer[ae] = [];
          for (let ue = 0; ue < _.mipmaps.length; ue++)
            N.__webglFramebuffer[ae][ue] = i.createFramebuffer();
        } else N.__webglFramebuffer[ae] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let ae = 0; ae < _.mipmaps.length; ae++)
          N.__webglFramebuffer[ae] = i.createFramebuffer();
      } else N.__webglFramebuffer = i.createFramebuffer();
      if (_e)
        for (let ae = 0, ue = $.length; ae < ue; ae++) {
          const Ve = n.get($[ae]);
          Ve.__webglTexture === void 0 &&
            ((Ve.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (y.samples > 0 && Oe(y) === !1) {
        ((N.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (N.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer));
        for (let ae = 0; ae < $.length; ae++) {
          const ue = $[ae];
          ((N.__webglColorRenderbuffer[ae] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[ae]));
          const Ve = s.convert(ue.format, ue.colorSpace),
            J = s.convert(ue.type),
            de = T(
              ue.internalFormat,
              Ve,
              J,
              ue.colorSpace,
              y.isXRRenderTarget === !0,
            ),
            Ee = Ne(y);
          (i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            Ee,
            de,
            y.width,
            y.height,
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ae,
              i.RENDERBUFFER,
              N.__webglColorRenderbuffer[ae],
            ));
        }
        (i.bindRenderbuffer(i.RENDERBUFFER, null),
          y.depthBuffer &&
            ((N.__webglDepthRenderbuffer = i.createRenderbuffer()),
            se(N.__webglDepthRenderbuffer, y, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null));
      }
    }
    if (X) {
      (t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture),
        Le(i.TEXTURE_CUBE_MAP, _));
      for (let ae = 0; ae < 6; ae++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let ue = 0; ue < _.mipmaps.length; ue++)
            me(
              N.__webglFramebuffer[ae][ue],
              y,
              _,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + ae,
              ue,
            );
        else
          me(
            N.__webglFramebuffer[ae],
            y,
            _,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + ae,
            0,
          );
      (m(_) && u(i.TEXTURE_CUBE_MAP), t.unbindTexture());
    } else if (_e) {
      for (let ae = 0, ue = $.length; ae < ue; ae++) {
        const Ve = $[ae],
          J = n.get(Ve);
        (t.bindTexture(i.TEXTURE_2D, J.__webglTexture),
          Le(i.TEXTURE_2D, Ve),
          me(
            N.__webglFramebuffer,
            y,
            Ve,
            i.COLOR_ATTACHMENT0 + ae,
            i.TEXTURE_2D,
            0,
          ),
          m(Ve) && u(i.TEXTURE_2D));
      }
      t.unbindTexture();
    } else {
      let ae = i.TEXTURE_2D;
      if (
        ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) &&
          (ae = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        t.bindTexture(ae, Y.__webglTexture),
        Le(ae, _),
        _.mipmaps && _.mipmaps.length > 0)
      )
        for (let ue = 0; ue < _.mipmaps.length; ue++)
          me(N.__webglFramebuffer[ue], y, _, i.COLOR_ATTACHMENT0, ae, ue);
      else me(N.__webglFramebuffer, y, _, i.COLOR_ATTACHMENT0, ae, 0);
      (m(_) && u(ae), t.unbindTexture());
    }
    y.depthBuffer && Re(y);
  }
  function ze(y) {
    const _ = y.textures;
    for (let N = 0, Y = _.length; N < Y; N++) {
      const $ = _[N];
      if (m($)) {
        const X = A(y),
          _e = n.get($).__webglTexture;
        (t.bindTexture(X, _e), u(X), t.unbindTexture());
      }
    }
  }
  const rt = [],
    R = [];
  function At(y) {
    if (y.samples > 0) {
      if (Oe(y) === !1) {
        const _ = y.textures,
          N = y.width,
          Y = y.height;
        let $ = i.COLOR_BUFFER_BIT;
        const X = y.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          _e = n.get(y),
          ae = _.length > 1;
        if (ae)
          for (let ue = 0; ue < _.length; ue++)
            (t.bindFramebuffer(
              i.FRAMEBUFFER,
              _e.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ue,
                i.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ue,
                i.TEXTURE_2D,
                null,
                0,
              ));
        (t.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          _e.__webglMultisampledFramebuffer,
        ),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglFramebuffer));
        for (let ue = 0; ue < _.length; ue++) {
          if (
            (y.resolveDepthBuffer &&
              (y.depthBuffer && ($ |= i.DEPTH_BUFFER_BIT),
              y.stencilBuffer &&
                y.resolveStencilBuffer &&
                ($ |= i.STENCIL_BUFFER_BIT)),
            ae)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              _e.__webglColorRenderbuffer[ue],
            );
            const Ve = n.get(_[ue]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              Ve,
              0,
            );
          }
          (i.blitFramebuffer(0, 0, N, Y, 0, 0, N, Y, $, i.NEAREST),
            c === !0 &&
              ((rt.length = 0),
              (R.length = 0),
              rt.push(i.COLOR_ATTACHMENT0 + ue),
              y.depthBuffer &&
                y.resolveDepthBuffer === !1 &&
                (rt.push(X),
                R.push(X),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, R)),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, rt)));
        }
        if (
          (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          ae)
        )
          for (let ue = 0; ue < _.length; ue++) {
            (t.bindFramebuffer(
              i.FRAMEBUFFER,
              _e.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ue,
                i.RENDERBUFFER,
                _e.__webglColorRenderbuffer[ue],
              ));
            const Ve = n.get(_[ue]).__webglTexture;
            (t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ue,
                i.TEXTURE_2D,
                Ve,
                0,
              ));
          }
        t.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          _e.__webglMultisampledFramebuffer,
        );
      } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && c) {
        const _ = y.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function Ne(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function Oe(y) {
    const _ = n.get(y);
    return (
      y.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function ve(y) {
    const _ = a.render.frame;
    h.get(y) !== _ && (h.set(y, _), y.update());
  }
  function Je(y, _) {
    const N = y.colorSpace,
      Y = y.format,
      $ = y.type;
    return (
      y.isCompressedTexture === !0 ||
        y.isVideoTexture === !0 ||
        (N !== Un &&
          N !== "" &&
          (We.getTransfer(N) === Ke
            ? (Y !== 1023 || $ !== 1009) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                N,
              ))),
      _
    );
  }
  function xe(y) {
    return (
      typeof HTMLImageElement < "u" && y instanceof HTMLImageElement
        ? ((l.width = y.naturalWidth || y.width),
          (l.height = y.naturalHeight || y.height))
        : typeof VideoFrame < "u" && y instanceof VideoFrame
          ? ((l.width = y.displayWidth), (l.height = y.displayHeight))
          : ((l.width = y.width), (l.height = y.height)),
      l
    );
  }
  ((this.allocateTextureUnit = G),
    (this.resetTextureUnits = z),
    (this.setTexture2D = Z),
    (this.setTexture2DArray = W),
    (this.setTexture3D = Q),
    (this.setTextureCube = H),
    (this.rebindTextures = Ue),
    (this.setupRenderTarget = tt),
    (this.updateRenderTargetMipmap = ze),
    (this.updateMultisampleRenderTarget = At),
    (this.setupDepthRenderbuffer = Re),
    (this.setupFrameBufferTexture = me),
    (this.useMultisampledRTT = Oe));
}
function cu(i, e) {
  function t(n, r = "") {
    let s;
    const a = We.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1024) return i.LUMINANCE;
    if (n === 1025) return i.LUMINANCE_ALPHA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === Ke)
        if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (((s = e.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === 36196 || n === 37492 || n === 37496)
      if (((s = e.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (n === 36196 || n === 37492)
          return a === Ke ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === 37808 ||
      n === 37809 ||
      n === 37810 ||
      n === 37811 ||
      n === 37812 ||
      n === 37813 ||
      n === 37814 ||
      n === 37815 ||
      n === 37816 ||
      n === 37817 ||
      n === 37818 ||
      n === 37819 ||
      n === 37820 ||
      n === 37821
    )
      if (((s = e.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (n === 37808)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821)
          return a === Ke
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (((s = e.get("EXT_texture_compression_bptc")), s !== null)) {
        if (n === 36492)
          return a === Ke
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (((s = e.get("EXT_texture_compression_rgtc")), s !== null)) {
        if (n === 36492) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const hu = { type: "move" };
class lr {
  constructor() {
    ((this._targetRay = null), (this._grip = null), (this._hand = null));
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new gi()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new gi()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new F()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new F())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new gi()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new F()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new F())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return (this.dispatchEvent({ type: "connected", data: e }), this);
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      s = null,
      a = null;
    const o = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const M of e.hand.values()) {
          const m = t.getJointPose(M, n),
            u = this._getHandJoint(l, M);
          (m !== null &&
            (u.matrix.fromArray(m.transform.matrix),
            u.matrix.decompose(u.position, u.rotation, u.scale),
            (u.matrixWorldNeedsUpdate = !0),
            (u.jointRadius = m.radius)),
            (u.visible = m !== null));
        }
        const h = l.joints["index-finger-tip"],
          d = l.joints["thumb-tip"],
          f = h.position.distanceTo(d.position),
          p = 0.02,
          g = 0.005;
        l.inputState.pinching && f > p + g
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            f <= p - g &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (c.matrix.fromArray(s.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(s.linearVelocity))
              : (c.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(s.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      o !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(hu)));
    }
    return (
      o !== null && (o.visible = r !== null),
      c !== null && (c.visible = s !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new gi();
      ((n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n));
    }
    return e.joints[t.jointName];
  }
}
const uu = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  du = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class fu {
  constructor() {
    ((this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0));
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new dt(),
        s = e.properties.get(r);
      ((s.__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = r));
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new tn({
          vertexShader: uu,
          fragmentShader: du,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Yt(new bi(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    ((this.texture = null), (this.mesh = null));
  }
  getDepthTexture() {
    return this.texture;
  }
}
class pu extends Fn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      s = 1,
      a = null,
      o = "local-floor",
      c = 1,
      l = null,
      h = null,
      d = null,
      f = null,
      p = null,
      g = null;
    const M = new fu(),
      m = t.getContextAttributes();
    let u = null,
      A = null;
    const T = [],
      E = [],
      L = new Ge();
    let b = null;
    const w = new Tt();
    w.viewport = new Ze();
    const I = new Tt();
    I.viewport = new Ze();
    const S = [w, I],
      x = new Ia();
    let C = null,
      z = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (q) {
        let ee = T[q];
        return (
          ee === void 0 && ((ee = new lr()), (T[q] = ee)),
          ee.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (q) {
        let ee = T[q];
        return (
          ee === void 0 && ((ee = new lr()), (T[q] = ee)),
          ee.getGripSpace()
        );
      }),
      (this.getHand = function (q) {
        let ee = T[q];
        return (
          ee === void 0 && ((ee = new lr()), (T[q] = ee)),
          ee.getHandSpace()
        );
      }));
    function G(q) {
      const ee = E.indexOf(q.inputSource);
      if (ee === -1) return;
      const me = T[ee];
      me !== void 0 &&
        (me.update(q.inputSource, q.frame, l || a),
        me.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function k() {
      (r.removeEventListener("select", G),
        r.removeEventListener("selectstart", G),
        r.removeEventListener("selectend", G),
        r.removeEventListener("squeeze", G),
        r.removeEventListener("squeezestart", G),
        r.removeEventListener("squeezeend", G),
        r.removeEventListener("end", k),
        r.removeEventListener("inputsourceschange", Z));
      for (let q = 0; q < T.length; q++) {
        const ee = E[q];
        ee !== null && ((E[q] = null), T[q].disconnect(ee));
      }
      ((C = null),
        (z = null),
        M.reset(),
        e.setRenderTarget(u),
        (p = null),
        (f = null),
        (d = null),
        (r = null),
        (A = null),
        $e.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(b),
        e.setSize(L.width, L.height, !1),
        n.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (q) {
      ((s = q),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (q) {
        ((o = q),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (q) {
        l = q;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : p;
      }),
      (this.getBinding = function () {
        return d;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (q) {
        if (((r = q), r !== null)) {
          if (
            ((u = e.getRenderTarget()),
            r.addEventListener("select", G),
            r.addEventListener("selectstart", G),
            r.addEventListener("selectend", G),
            r.addEventListener("squeeze", G),
            r.addEventListener("squeezestart", G),
            r.addEventListener("squeezeend", G),
            r.addEventListener("end", k),
            r.addEventListener("inputsourceschange", Z),
            m.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (b = e.getPixelRatio()),
            e.getSize(L),
            r.renderState.layers === void 0)
          ) {
            const ee = {
              antialias: m.antialias,
              alpha: !0,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: s,
            };
            ((p = new XRWebGLLayer(r, t, ee)),
              r.updateRenderState({ baseLayer: p }),
              e.setPixelRatio(1),
              e.setSize(p.framebufferWidth, p.framebufferHeight, !1),
              (A = new pn(p.framebufferWidth, p.framebufferHeight, {
                format: 1023,
                type: 1009,
                colorSpace: e.outputColorSpace,
                stencilBuffer: m.stencil,
              })));
          } else {
            let ee = null,
              me = null,
              se = null;
            m.depth &&
              ((se = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (ee = m.stencil ? 1027 : 1026),
              (me = m.stencil ? 1020 : 1014));
            const ye = {
              colorFormat: t.RGBA8,
              depthFormat: se,
              scaleFactor: s,
            };
            ((d = new XRWebGLBinding(r, t)),
              (f = d.createProjectionLayer(ye)),
              r.updateRenderState({ layers: [f] }),
              e.setPixelRatio(1),
              e.setSize(f.textureWidth, f.textureHeight, !1),
              (A = new pn(f.textureWidth, f.textureHeight, {
                format: 1023,
                type: 1009,
                depthTexture: new Us(
                  f.textureWidth,
                  f.textureHeight,
                  me,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  ee,
                ),
                stencilBuffer: m.stencil,
                colorSpace: e.outputColorSpace,
                samples: m.antialias ? 4 : 0,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
              })));
          }
          ((A.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (a = await r.requestReferenceSpace(o)),
            $e.setContext(r),
            $e.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" }));
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return M.getDepthTexture();
      }));
    function Z(q) {
      for (let ee = 0; ee < q.removed.length; ee++) {
        const me = q.removed[ee],
          se = E.indexOf(me);
        se >= 0 && ((E[se] = null), T[se].disconnect(me));
      }
      for (let ee = 0; ee < q.added.length; ee++) {
        const me = q.added[ee];
        let se = E.indexOf(me);
        if (se === -1) {
          for (let Re = 0; Re < T.length; Re++)
            if (Re >= E.length) {
              (E.push(me), (se = Re));
              break;
            } else if (E[Re] === null) {
              ((E[Re] = me), (se = Re));
              break;
            }
          if (se === -1) break;
        }
        const ye = T[se];
        ye && ye.connect(me);
      }
    }
    const W = new F(),
      Q = new F();
    function H(q, ee, me) {
      (W.setFromMatrixPosition(ee.matrixWorld),
        Q.setFromMatrixPosition(me.matrixWorld));
      const se = W.distanceTo(Q),
        ye = ee.projectionMatrix.elements,
        Re = me.projectionMatrix.elements,
        Ue = ye[14] / (ye[10] - 1),
        tt = ye[14] / (ye[10] + 1),
        ze = (ye[9] + 1) / ye[5],
        rt = (ye[9] - 1) / ye[5],
        R = (ye[8] - 1) / ye[0],
        At = (Re[8] + 1) / Re[0],
        Ne = Ue * R,
        Oe = Ue * At,
        ve = se / (-R + At),
        Je = ve * -R;
      if (
        (ee.matrixWorld.decompose(q.position, q.quaternion, q.scale),
        q.translateX(Je),
        q.translateZ(ve),
        q.matrixWorld.compose(q.position, q.quaternion, q.scale),
        q.matrixWorldInverse.copy(q.matrixWorld).invert(),
        ye[10] === -1)
      )
        (q.projectionMatrix.copy(ee.projectionMatrix),
          q.projectionMatrixInverse.copy(ee.projectionMatrixInverse));
      else {
        const xe = Ue + ve,
          y = tt + ve,
          _ = Ne - Je,
          N = Oe + (se - Je),
          Y = ((ze * tt) / y) * xe,
          $ = ((rt * tt) / y) * xe;
        (q.projectionMatrix.makePerspective(_, N, Y, $, xe, y),
          q.projectionMatrixInverse.copy(q.projectionMatrix).invert());
      }
    }
    function re(q, ee) {
      (ee === null
        ? q.matrixWorld.copy(q.matrix)
        : q.matrixWorld.multiplyMatrices(ee.matrixWorld, q.matrix),
        q.matrixWorldInverse.copy(q.matrixWorld).invert());
    }
    this.updateCamera = function (q) {
      if (r === null) return;
      let ee = q.near,
        me = q.far;
      (M.texture !== null &&
        (M.depthNear > 0 && (ee = M.depthNear),
        M.depthFar > 0 && (me = M.depthFar)),
        (x.near = I.near = w.near = ee),
        (x.far = I.far = w.far = me),
        (C !== x.near || z !== x.far) &&
          (r.updateRenderState({ depthNear: x.near, depthFar: x.far }),
          (C = x.near),
          (z = x.far)),
        (w.layers.mask = q.layers.mask | 2),
        (I.layers.mask = q.layers.mask | 4),
        (x.layers.mask = w.layers.mask | I.layers.mask));
      const se = q.parent,
        ye = x.cameras;
      re(x, se);
      for (let Re = 0; Re < ye.length; Re++) re(ye[Re], se);
      (ye.length === 2
        ? H(x, w, I)
        : x.projectionMatrix.copy(w.projectionMatrix),
        he(q, x, se));
    };
    function he(q, ee, me) {
      (me === null
        ? q.matrix.copy(ee.matrixWorld)
        : (q.matrix.copy(me.matrixWorld),
          q.matrix.invert(),
          q.matrix.multiply(ee.matrixWorld)),
        q.matrix.decompose(q.position, q.quaternion, q.scale),
        q.updateMatrixWorld(!0),
        q.projectionMatrix.copy(ee.projectionMatrix),
        q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),
        q.isPerspectiveCamera &&
          ((q.fov = yi * 2 * Math.atan(1 / q.projectionMatrix.elements[5])),
          (q.zoom = 1)));
    }
    ((this.getCamera = function () {
      return x;
    }),
      (this.getFoveation = function () {
        if (!(f === null && p === null)) return c;
      }),
      (this.setFoveation = function (q) {
        ((c = q),
          f !== null && (f.fixedFoveation = q),
          p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = q));
      }),
      (this.hasDepthSensing = function () {
        return M.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return M.getMesh(x);
      }));
    let ge = null;
    function Le(q, ee) {
      if (((h = ee.getViewerPose(l || a)), (g = ee), h !== null)) {
        const me = h.views;
        p !== null &&
          (e.setRenderTargetFramebuffer(A, p.framebuffer),
          e.setRenderTarget(A));
        let se = !1;
        me.length !== x.cameras.length && ((x.cameras.length = 0), (se = !0));
        for (let Re = 0; Re < me.length; Re++) {
          const Ue = me[Re];
          let tt = null;
          if (p !== null) tt = p.getViewport(Ue);
          else {
            const rt = d.getViewSubImage(f, Ue);
            ((tt = rt.viewport),
              Re === 0 &&
                (e.setRenderTargetTextures(
                  A,
                  rt.colorTexture,
                  f.ignoreDepthValues ? void 0 : rt.depthStencilTexture,
                ),
                e.setRenderTarget(A)));
          }
          let ze = S[Re];
          (ze === void 0 &&
            ((ze = new Tt()),
            ze.layers.enable(Re),
            (ze.viewport = new Ze()),
            (S[Re] = ze)),
            ze.matrix.fromArray(Ue.transform.matrix),
            ze.matrix.decompose(ze.position, ze.quaternion, ze.scale),
            ze.projectionMatrix.fromArray(Ue.projectionMatrix),
            ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),
            ze.viewport.set(tt.x, tt.y, tt.width, tt.height),
            Re === 0 &&
              (x.matrix.copy(ze.matrix),
              x.matrix.decompose(x.position, x.quaternion, x.scale)),
            se === !0 && x.cameras.push(ze));
        }
        const ye = r.enabledFeatures;
        if (ye && ye.includes("depth-sensing")) {
          const Re = d.getDepthInformation(me[0]);
          Re && Re.isValid && Re.texture && M.init(e, Re, r.renderState);
        }
      }
      for (let me = 0; me < T.length; me++) {
        const se = E[me],
          ye = T[me];
        se !== null && ye !== void 0 && ye.update(se, ee, l || a);
      }
      (ge && ge(q, ee),
        ee.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: ee }),
        (g = null));
    }
    const $e = new Gs();
    ($e.setAnimationLoop(Le),
      (this.setAnimationLoop = function (q) {
        ge = q;
      }),
      (this.dispose = function () {}));
  }
}
const hn = new Ot(),
  mu = new Qe();
function _u(i, e) {
  function t(m, u) {
    (m.matrixAutoUpdate === !0 && m.updateMatrix(), u.value.copy(m.matrix));
  }
  function n(m, u) {
    (u.color.getRGB(m.fogColor.value, ws(i)),
      u.isFog
        ? ((m.fogNear.value = u.near), (m.fogFar.value = u.far))
        : u.isFogExp2 && (m.fogDensity.value = u.density));
  }
  function r(m, u, A, T, E) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial
      ? s(m, u)
      : u.isMeshToonMaterial
        ? (s(m, u), d(m, u))
        : u.isMeshPhongMaterial
          ? (s(m, u), h(m, u))
          : u.isMeshStandardMaterial
            ? (s(m, u), f(m, u), u.isMeshPhysicalMaterial && p(m, u, E))
            : u.isMeshMatcapMaterial
              ? (s(m, u), g(m, u))
              : u.isMeshDepthMaterial
                ? s(m, u)
                : u.isMeshDistanceMaterial
                  ? (s(m, u), M(m, u))
                  : u.isMeshNormalMaterial
                    ? s(m, u)
                    : u.isLineBasicMaterial
                      ? (a(m, u), u.isLineDashedMaterial && o(m, u))
                      : u.isPointsMaterial
                        ? c(m, u, A, T)
                        : u.isSpriteMaterial
                          ? l(m, u)
                          : u.isShadowMaterial
                            ? (m.color.value.copy(u.color),
                              (m.opacity.value = u.opacity))
                            : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(m, u) {
    ((m.opacity.value = u.opacity),
      u.color && m.diffuse.value.copy(u.color),
      u.emissive &&
        m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),
      u.map && ((m.map.value = u.map), t(u.map, m.mapTransform)),
      u.alphaMap &&
        ((m.alphaMap.value = u.alphaMap), t(u.alphaMap, m.alphaMapTransform)),
      u.bumpMap &&
        ((m.bumpMap.value = u.bumpMap),
        t(u.bumpMap, m.bumpMapTransform),
        (m.bumpScale.value = u.bumpScale),
        u.side === 1 && (m.bumpScale.value *= -1)),
      u.normalMap &&
        ((m.normalMap.value = u.normalMap),
        t(u.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(u.normalScale),
        u.side === 1 && m.normalScale.value.negate()),
      u.displacementMap &&
        ((m.displacementMap.value = u.displacementMap),
        t(u.displacementMap, m.displacementMapTransform),
        (m.displacementScale.value = u.displacementScale),
        (m.displacementBias.value = u.displacementBias)),
      u.emissiveMap &&
        ((m.emissiveMap.value = u.emissiveMap),
        t(u.emissiveMap, m.emissiveMapTransform)),
      u.specularMap &&
        ((m.specularMap.value = u.specularMap),
        t(u.specularMap, m.specularMapTransform)),
      u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest));
    const A = e.get(u),
      T = A.envMap,
      E = A.envMapRotation;
    (T &&
      ((m.envMap.value = T),
      hn.copy(E),
      (hn.x *= -1),
      (hn.y *= -1),
      (hn.z *= -1),
      T.isCubeTexture &&
        T.isRenderTargetTexture === !1 &&
        ((hn.y *= -1), (hn.z *= -1)),
      m.envMapRotation.value.setFromMatrix4(mu.makeRotationFromEuler(hn)),
      (m.flipEnvMap.value =
        T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1),
      (m.reflectivity.value = u.reflectivity),
      (m.ior.value = u.ior),
      (m.refractionRatio.value = u.refractionRatio)),
      u.lightMap &&
        ((m.lightMap.value = u.lightMap),
        (m.lightMapIntensity.value = u.lightMapIntensity),
        t(u.lightMap, m.lightMapTransform)),
      u.aoMap &&
        ((m.aoMap.value = u.aoMap),
        (m.aoMapIntensity.value = u.aoMapIntensity),
        t(u.aoMap, m.aoMapTransform)));
  }
  function a(m, u) {
    (m.diffuse.value.copy(u.color),
      (m.opacity.value = u.opacity),
      u.map && ((m.map.value = u.map), t(u.map, m.mapTransform)));
  }
  function o(m, u) {
    ((m.dashSize.value = u.dashSize),
      (m.totalSize.value = u.dashSize + u.gapSize),
      (m.scale.value = u.scale));
  }
  function c(m, u, A, T) {
    (m.diffuse.value.copy(u.color),
      (m.opacity.value = u.opacity),
      (m.size.value = u.size * A),
      (m.scale.value = T * 0.5),
      u.map && ((m.map.value = u.map), t(u.map, m.uvTransform)),
      u.alphaMap &&
        ((m.alphaMap.value = u.alphaMap), t(u.alphaMap, m.alphaMapTransform)),
      u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest));
  }
  function l(m, u) {
    (m.diffuse.value.copy(u.color),
      (m.opacity.value = u.opacity),
      (m.rotation.value = u.rotation),
      u.map && ((m.map.value = u.map), t(u.map, m.mapTransform)),
      u.alphaMap &&
        ((m.alphaMap.value = u.alphaMap), t(u.alphaMap, m.alphaMapTransform)),
      u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest));
  }
  function h(m, u) {
    (m.specular.value.copy(u.specular),
      (m.shininess.value = Math.max(u.shininess, 1e-4)));
  }
  function d(m, u) {
    u.gradientMap && (m.gradientMap.value = u.gradientMap);
  }
  function f(m, u) {
    ((m.metalness.value = u.metalness),
      u.metalnessMap &&
        ((m.metalnessMap.value = u.metalnessMap),
        t(u.metalnessMap, m.metalnessMapTransform)),
      (m.roughness.value = u.roughness),
      u.roughnessMap &&
        ((m.roughnessMap.value = u.roughnessMap),
        t(u.roughnessMap, m.roughnessMapTransform)),
      u.envMap && (m.envMapIntensity.value = u.envMapIntensity));
  }
  function p(m, u, A) {
    ((m.ior.value = u.ior),
      u.sheen > 0 &&
        (m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),
        (m.sheenRoughness.value = u.sheenRoughness),
        u.sheenColorMap &&
          ((m.sheenColorMap.value = u.sheenColorMap),
          t(u.sheenColorMap, m.sheenColorMapTransform)),
        u.sheenRoughnessMap &&
          ((m.sheenRoughnessMap.value = u.sheenRoughnessMap),
          t(u.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
      u.clearcoat > 0 &&
        ((m.clearcoat.value = u.clearcoat),
        (m.clearcoatRoughness.value = u.clearcoatRoughness),
        u.clearcoatMap &&
          ((m.clearcoatMap.value = u.clearcoatMap),
          t(u.clearcoatMap, m.clearcoatMapTransform)),
        u.clearcoatRoughnessMap &&
          ((m.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap),
          t(u.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        u.clearcoatNormalMap &&
          ((m.clearcoatNormalMap.value = u.clearcoatNormalMap),
          t(u.clearcoatNormalMap, m.clearcoatNormalMapTransform),
          m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),
          u.side === 1 && m.clearcoatNormalScale.value.negate())),
      u.dispersion > 0 && (m.dispersion.value = u.dispersion),
      u.iridescence > 0 &&
        ((m.iridescence.value = u.iridescence),
        (m.iridescenceIOR.value = u.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1]),
        u.iridescenceMap &&
          ((m.iridescenceMap.value = u.iridescenceMap),
          t(u.iridescenceMap, m.iridescenceMapTransform)),
        u.iridescenceThicknessMap &&
          ((m.iridescenceThicknessMap.value = u.iridescenceThicknessMap),
          t(u.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
      u.transmission > 0 &&
        ((m.transmission.value = u.transmission),
        (m.transmissionSamplerMap.value = A.texture),
        m.transmissionSamplerSize.value.set(A.width, A.height),
        u.transmissionMap &&
          ((m.transmissionMap.value = u.transmissionMap),
          t(u.transmissionMap, m.transmissionMapTransform)),
        (m.thickness.value = u.thickness),
        u.thicknessMap &&
          ((m.thicknessMap.value = u.thicknessMap),
          t(u.thicknessMap, m.thicknessMapTransform)),
        (m.attenuationDistance.value = u.attenuationDistance),
        m.attenuationColor.value.copy(u.attenuationColor)),
      u.anisotropy > 0 &&
        (m.anisotropyVector.value.set(
          u.anisotropy * Math.cos(u.anisotropyRotation),
          u.anisotropy * Math.sin(u.anisotropyRotation),
        ),
        u.anisotropyMap &&
          ((m.anisotropyMap.value = u.anisotropyMap),
          t(u.anisotropyMap, m.anisotropyMapTransform))),
      (m.specularIntensity.value = u.specularIntensity),
      m.specularColor.value.copy(u.specularColor),
      u.specularColorMap &&
        ((m.specularColorMap.value = u.specularColorMap),
        t(u.specularColorMap, m.specularColorMapTransform)),
      u.specularIntensityMap &&
        ((m.specularIntensityMap.value = u.specularIntensityMap),
        t(u.specularIntensityMap, m.specularIntensityMapTransform)));
  }
  function g(m, u) {
    u.matcap && (m.matcap.value = u.matcap);
  }
  function M(m, u) {
    const A = e.get(u).light;
    (m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),
      (m.nearDistance.value = A.shadow.camera.near),
      (m.farDistance.value = A.shadow.camera.far));
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function gu(i, e, t, n) {
  let r = {},
    s = {},
    a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(A, T) {
    const E = T.program;
    n.uniformBlockBinding(A, E);
  }
  function l(A, T) {
    let E = r[A.id];
    E === void 0 &&
      (g(A), (E = h(A)), (r[A.id] = E), A.addEventListener("dispose", m));
    const L = T.program;
    n.updateUBOMapping(A, L);
    const b = e.render.frame;
    s[A.id] !== b && (f(A), (s[A.id] = b));
  }
  function h(A) {
    const T = d();
    A.__bindingPointIndex = T;
    const E = i.createBuffer(),
      L = A.__size,
      b = A.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, E),
      i.bufferData(i.UNIFORM_BUFFER, L, b),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, T, E),
      E
    );
  }
  function d() {
    for (let A = 0; A < o; A++) if (a.indexOf(A) === -1) return (a.push(A), A);
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function f(A) {
    const T = r[A.id],
      E = A.uniforms,
      L = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, T);
    for (let b = 0, w = E.length; b < w; b++) {
      const I = Array.isArray(E[b]) ? E[b] : [E[b]];
      for (let S = 0, x = I.length; S < x; S++) {
        const C = I[S];
        if (p(C, b, S, L) === !0) {
          const z = C.__offset,
            G = Array.isArray(C.value) ? C.value : [C.value];
          let k = 0;
          for (let Z = 0; Z < G.length; Z++) {
            const W = G[Z],
              Q = M(W);
            typeof W == "number" || typeof W == "boolean"
              ? ((C.__data[0] = W),
                i.bufferSubData(i.UNIFORM_BUFFER, z + k, C.__data))
              : W.isMatrix3
                ? ((C.__data[0] = W.elements[0]),
                  (C.__data[1] = W.elements[1]),
                  (C.__data[2] = W.elements[2]),
                  (C.__data[3] = 0),
                  (C.__data[4] = W.elements[3]),
                  (C.__data[5] = W.elements[4]),
                  (C.__data[6] = W.elements[5]),
                  (C.__data[7] = 0),
                  (C.__data[8] = W.elements[6]),
                  (C.__data[9] = W.elements[7]),
                  (C.__data[10] = W.elements[8]),
                  (C.__data[11] = 0))
                : (W.toArray(C.__data, k),
                  (k += Q.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          i.bufferSubData(i.UNIFORM_BUFFER, z, C.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(A, T, E, L) {
    const b = A.value,
      w = T + "_" + E;
    if (L[w] === void 0)
      return (
        typeof b == "number" || typeof b == "boolean"
          ? (L[w] = b)
          : (L[w] = b.clone()),
        !0
      );
    {
      const I = L[w];
      if (typeof b == "number" || typeof b == "boolean") {
        if (I !== b) return ((L[w] = b), !0);
      } else if (I.equals(b) === !1) return (I.copy(b), !0);
    }
    return !1;
  }
  function g(A) {
    const T = A.uniforms;
    let E = 0;
    const L = 16;
    for (let w = 0, I = T.length; w < I; w++) {
      const S = Array.isArray(T[w]) ? T[w] : [T[w]];
      for (let x = 0, C = S.length; x < C; x++) {
        const z = S[x],
          G = Array.isArray(z.value) ? z.value : [z.value];
        for (let k = 0, Z = G.length; k < Z; k++) {
          const W = G[k],
            Q = M(W),
            H = E % L,
            re = H % Q.boundary,
            he = H + re;
          ((E += re),
            he !== 0 && L - he < Q.storage && (E += L - he),
            (z.__data = new Float32Array(
              Q.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (z.__offset = E),
            (E += Q.storage));
        }
      }
    }
    const b = E % L;
    return (b > 0 && (E += L - b), (A.__size = E), (A.__cache = {}), this);
  }
  function M(A) {
    const T = { boundary: 0, storage: 0 };
    return (
      typeof A == "number" || typeof A == "boolean"
        ? ((T.boundary = 4), (T.storage = 4))
        : A.isVector2
          ? ((T.boundary = 8), (T.storage = 8))
          : A.isVector3 || A.isColor
            ? ((T.boundary = 16), (T.storage = 12))
            : A.isVector4
              ? ((T.boundary = 16), (T.storage = 16))
              : A.isMatrix3
                ? ((T.boundary = 48), (T.storage = 48))
                : A.isMatrix4
                  ? ((T.boundary = 64), (T.storage = 64))
                  : A.isTexture
                    ? console.warn(
                        "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Unsupported uniform value type.",
                        A,
                      ),
      T
    );
  }
  function m(A) {
    const T = A.target;
    T.removeEventListener("dispose", m);
    const E = a.indexOf(T.__bindingPointIndex);
    (a.splice(E, 1), i.deleteBuffer(r[T.id]), delete r[T.id], delete s[T.id]);
  }
  function u() {
    for (const A in r) i.deleteBuffer(r[A]);
    ((a = []), (r = {}), (s = {}));
  }
  return { bind: c, update: l, dispose: u };
}
class rd {
  constructor(e = {}) {
    const {
      canvas: t = $s(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reverseDepthBuffer: f = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      p = n.getContextAttributes().alpha;
    } else p = a;
    const g = new Uint32Array(4),
      M = new Int32Array(4);
    let m = null,
      u = null;
    const A = [],
      T = [];
    ((this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Ct),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1));
    const E = this;
    let L = !1,
      b = 0,
      w = 0,
      I = null,
      S = -1,
      x = null;
    const C = new Ze(),
      z = new Ze();
    let G = null;
    const k = new Ie(0);
    let Z = 0,
      W = t.width,
      Q = t.height,
      H = 1,
      re = null,
      he = null;
    const ge = new Ze(0, 0, W, Q),
      Le = new Ze(0, 0, W, Q);
    let $e = !1;
    const q = new pr();
    let ee = !1,
      me = !1;
    const se = new Qe(),
      ye = new Qe(),
      Re = new F(),
      Ue = new Ze(),
      tt = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let ze = !1;
    function rt() {
      return I === null ? H : 1;
    }
    let R = n;
    function At(v, D) {
      return t.getContext(v, D);
    }
    try {
      const v = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ("setAttribute" in t && t.setAttribute("data-engine", "three.js r171"),
        t.addEventListener("webglcontextlost", K, !1),
        t.addEventListener("webglcontextrestored", le, !1),
        t.addEventListener("webglcontextcreationerror", oe, !1),
        R === null)
      ) {
        const D = "webgl2";
        if (((R = At(D, v)), R === null))
          throw At(D)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw (console.error("THREE.WebGLRenderer: " + v.message), v);
    }
    let Ne,
      Oe,
      ve,
      Je,
      xe,
      y,
      _,
      N,
      Y,
      $,
      X,
      _e,
      ae,
      ue,
      Ve,
      J,
      de,
      Ee,
      Te,
      fe,
      Be,
      Pe,
      je,
      P;
    function ne() {
      ((Ne = new Rc(R)),
        Ne.init(),
        (Pe = new cu(R, Ne)),
        (Oe = new Sc(R, Ne, e, Pe)),
        (ve = new ou(R, Ne)),
        Oe.reverseDepthBuffer && f && ve.buffers.depth.setReversed(!0),
        (Je = new Pc(R)),
        (xe = new Kh()),
        (y = new lu(R, Ne, ve, xe, Oe, Pe, Je)),
        (_ = new yc(E)),
        (N = new bc(E)),
        (Y = new Na(R)),
        (je = new xc(R, Y)),
        ($ = new wc(R, Y, Je, je)),
        (X = new Lc(R, $, Y, Je)),
        (Te = new Dc(R, Oe, y)),
        (J = new Ec(xe)),
        (_e = new Yh(E, _, N, Ne, Oe, je, J)),
        (ae = new _u(E, xe)),
        (ue = new $h()),
        (Ve = new nu(Ne)),
        (Ee = new vc(E, _, N, ve, X, p, c)),
        (de = new su(E, X, Oe)),
        (P = new gu(R, Je, Oe, ve)),
        (fe = new Mc(R, Ne, Je)),
        (Be = new Cc(R, Ne, Je)),
        (Je.programs = _e.programs),
        (E.capabilities = Oe),
        (E.extensions = Ne),
        (E.properties = xe),
        (E.renderLists = ue),
        (E.shadowMap = de),
        (E.state = ve),
        (E.info = Je));
    }
    ne();
    const V = new pu(E, R);
    ((this.xr = V),
      (this.getContext = function () {
        return R;
      }),
      (this.getContextAttributes = function () {
        return R.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const v = Ne.get("WEBGL_lose_context");
        v && v.loseContext();
      }),
      (this.forceContextRestore = function () {
        const v = Ne.get("WEBGL_lose_context");
        v && v.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return H;
      }),
      (this.setPixelRatio = function (v) {
        v !== void 0 && ((H = v), this.setSize(W, Q, !1));
      }),
      (this.getSize = function (v) {
        return v.set(W, Q);
      }),
      (this.setSize = function (v, D, O = !0) {
        if (V.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        ((W = v),
          (Q = D),
          (t.width = Math.floor(v * H)),
          (t.height = Math.floor(D * H)),
          O === !0 && ((t.style.width = v + "px"), (t.style.height = D + "px")),
          this.setViewport(0, 0, v, D));
      }),
      (this.getDrawingBufferSize = function (v) {
        return v.set(W * H, Q * H).floor();
      }),
      (this.setDrawingBufferSize = function (v, D, O) {
        ((W = v),
          (Q = D),
          (H = O),
          (t.width = Math.floor(v * O)),
          (t.height = Math.floor(D * O)),
          this.setViewport(0, 0, v, D));
      }),
      (this.getCurrentViewport = function (v) {
        return v.copy(C);
      }),
      (this.getViewport = function (v) {
        return v.copy(ge);
      }),
      (this.setViewport = function (v, D, O, B) {
        (v.isVector4 ? ge.set(v.x, v.y, v.z, v.w) : ge.set(v, D, O, B),
          ve.viewport(C.copy(ge).multiplyScalar(H).round()));
      }),
      (this.getScissor = function (v) {
        return v.copy(Le);
      }),
      (this.setScissor = function (v, D, O, B) {
        (v.isVector4 ? Le.set(v.x, v.y, v.z, v.w) : Le.set(v, D, O, B),
          ve.scissor(z.copy(Le).multiplyScalar(H).round()));
      }),
      (this.getScissorTest = function () {
        return $e;
      }),
      (this.setScissorTest = function (v) {
        ve.setScissorTest(($e = v));
      }),
      (this.setOpaqueSort = function (v) {
        re = v;
      }),
      (this.setTransparentSort = function (v) {
        he = v;
      }),
      (this.getClearColor = function (v) {
        return v.copy(Ee.getClearColor());
      }),
      (this.setClearColor = function () {
        Ee.setClearColor.apply(Ee, arguments);
      }),
      (this.getClearAlpha = function () {
        return Ee.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        Ee.setClearAlpha.apply(Ee, arguments);
      }),
      (this.clear = function (v = !0, D = !0, O = !0) {
        let B = 0;
        if (v) {
          let U = !1;
          if (I !== null) {
            const j = I.texture.format;
            U = j === 1033 || j === 1031 || j === 1029;
          }
          if (U) {
            const j = I.texture.type,
              ie =
                j === 1009 ||
                j === 1014 ||
                j === 1012 ||
                j === 1020 ||
                j === 1017 ||
                j === 1018,
              ce = Ee.getClearColor(),
              pe = Ee.getClearAlpha(),
              Ae = ce.r,
              be = ce.g,
              Me = ce.b;
            ie
              ? ((g[0] = Ae),
                (g[1] = be),
                (g[2] = Me),
                (g[3] = pe),
                R.clearBufferuiv(R.COLOR, 0, g))
              : ((M[0] = Ae),
                (M[1] = be),
                (M[2] = Me),
                (M[3] = pe),
                R.clearBufferiv(R.COLOR, 0, M));
          } else B |= R.COLOR_BUFFER_BIT;
        }
        (D && (B |= R.DEPTH_BUFFER_BIT),
          O &&
            ((B |= R.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          R.clear(B));
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        (t.removeEventListener("webglcontextlost", K, !1),
          t.removeEventListener("webglcontextrestored", le, !1),
          t.removeEventListener("webglcontextcreationerror", oe, !1),
          Ee.dispose(),
          ue.dispose(),
          Ve.dispose(),
          xe.dispose(),
          _.dispose(),
          N.dispose(),
          X.dispose(),
          je.dispose(),
          P.dispose(),
          _e.dispose(),
          V.dispose(),
          V.removeEventListener("sessionstart", vr),
          V.removeEventListener("sessionend", xr),
          nn.stop());
      }));
    function K(v) {
      (v.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (L = !0));
    }
    function le() {
      (console.log("THREE.WebGLRenderer: Context Restored."), (L = !1));
      const v = Je.autoReset,
        D = de.enabled,
        O = de.autoUpdate,
        B = de.needsUpdate,
        U = de.type;
      (ne(),
        (Je.autoReset = v),
        (de.enabled = D),
        (de.autoUpdate = O),
        (de.needsUpdate = B),
        (de.type = U));
    }
    function oe(v) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        v.statusMessage,
      );
    }
    function we(v) {
      const D = v.target;
      (D.removeEventListener("dispose", we), nt(D));
    }
    function nt(v) {
      (pt(v), xe.remove(v));
    }
    function pt(v) {
      const D = xe.get(v).programs;
      D !== void 0 &&
        (D.forEach(function (O) {
          _e.releaseProgram(O);
        }),
        v.isShaderMaterial && _e.releaseShaderCache(v));
    }
    this.renderBufferDirect = function (v, D, O, B, U, j) {
      D === null && (D = tt);
      const ie = U.isMesh && U.matrixWorld.determinant() < 0,
        ce = Ws(v, D, O, B, U);
      ve.setMaterial(B, ie);
      let pe = O.index,
        Ae = 1;
      if (B.wireframe === !0) {
        if (((pe = $.getWireframeAttribute(O)), pe === void 0)) return;
        Ae = 2;
      }
      const be = O.drawRange,
        Me = O.attributes.position;
      let He = be.start * Ae,
        Xe = (be.start + be.count) * Ae;
      (j !== null &&
        ((He = Math.max(He, j.start * Ae)),
        (Xe = Math.min(Xe, (j.start + j.count) * Ae))),
        pe !== null
          ? ((He = Math.max(He, 0)), (Xe = Math.min(Xe, pe.count)))
          : Me != null &&
            ((He = Math.max(He, 0)), (Xe = Math.min(Xe, Me.count))));
      const st = Xe - He;
      if (st < 0 || st === 1 / 0) return;
      je.setup(U, B, ce, O, pe);
      let it,
        ke = fe;
      if (
        (pe !== null && ((it = Y.get(pe)), (ke = Be), ke.setIndex(it)),
        U.isMesh)
      )
        B.wireframe === !0
          ? (ve.setLineWidth(B.wireframeLinewidth * rt()), ke.setMode(R.LINES))
          : ke.setMode(R.TRIANGLES);
      else if (U.isLine) {
        let Se = B.linewidth;
        (Se === void 0 && (Se = 1),
          ve.setLineWidth(Se * rt()),
          U.isLineSegments
            ? ke.setMode(R.LINES)
            : U.isLineLoop
              ? ke.setMode(R.LINE_LOOP)
              : ke.setMode(R.LINE_STRIP));
      } else
        U.isPoints
          ? ke.setMode(R.POINTS)
          : U.isSprite && ke.setMode(R.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          ke.renderMultiDrawInstances(
            U._multiDrawStarts,
            U._multiDrawCounts,
            U._multiDrawCount,
            U._multiDrawInstances,
          );
        else if (Ne.get("WEBGL_multi_draw"))
          ke.renderMultiDraw(
            U._multiDrawStarts,
            U._multiDrawCounts,
            U._multiDrawCount,
          );
        else {
          const Se = U._multiDrawStarts,
            ft = U._multiDrawCounts,
            qe = U._multiDrawCount,
            Lt = pe ? Y.get(pe).bytesPerElement : 1,
            _n = xe.get(B).currentProgram.getUniforms();
          for (let St = 0; St < qe; St++)
            (_n.setValue(R, "_gl_DrawID", St), ke.render(Se[St] / Lt, ft[St]));
        }
      else if (U.isInstancedMesh) ke.renderInstances(He, st, U.count);
      else if (O.isInstancedBufferGeometry) {
        const Se = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0,
          ft = Math.min(O.instanceCount, Se);
        ke.renderInstances(He, st, ft);
      } else ke.render(He, st);
    };
    function Ye(v, D, O) {
      v.transparent === !0 && v.side === 2 && v.forceSinglePass === !1
        ? ((v.side = 1),
          (v.needsUpdate = !0),
          jn(v, D, O),
          (v.side = 0),
          (v.needsUpdate = !0),
          jn(v, D, O),
          (v.side = 2))
        : jn(v, D, O);
    }
    ((this.compile = function (v, D, O = null) {
      (O === null && (O = v),
        (u = Ve.get(O)),
        u.init(D),
        T.push(u),
        O.traverseVisible(function (U) {
          U.isLight &&
            U.layers.test(D.layers) &&
            (u.pushLight(U), U.castShadow && u.pushShadow(U));
        }),
        v !== O &&
          v.traverseVisible(function (U) {
            U.isLight &&
              U.layers.test(D.layers) &&
              (u.pushLight(U), U.castShadow && u.pushShadow(U));
          }),
        u.setupLights());
      const B = new Set();
      return (
        v.traverse(function (U) {
          if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
          const j = U.material;
          if (j)
            if (Array.isArray(j))
              for (let ie = 0; ie < j.length; ie++) {
                const ce = j[ie];
                (Ye(ce, O, U), B.add(ce));
              }
            else (Ye(j, O, U), B.add(j));
        }),
        T.pop(),
        (u = null),
        B
      );
    }),
      (this.compileAsync = function (v, D, O = null) {
        const B = this.compile(v, D, O);
        return new Promise((U) => {
          function j() {
            if (
              (B.forEach(function (ie) {
                xe.get(ie).currentProgram.isReady() && B.delete(ie);
              }),
              B.size === 0)
            ) {
              U(v);
              return;
            }
            setTimeout(j, 10);
          }
          Ne.get("KHR_parallel_shader_compile") !== null
            ? j()
            : setTimeout(j, 10);
        });
      }));
    let Dt = null;
    function zt(v) {
      Dt && Dt(v);
    }
    function vr() {
      nn.stop();
    }
    function xr() {
      nn.start();
    }
    const nn = new Gs();
    (nn.setAnimationLoop(zt),
      typeof self < "u" && nn.setContext(self),
      (this.setAnimationLoop = function (v) {
        ((Dt = v), V.setAnimationLoop(v), v === null ? nn.stop() : nn.start());
      }),
      V.addEventListener("sessionstart", vr),
      V.addEventListener("sessionend", xr),
      (this.render = function (v, D) {
        if (D !== void 0 && D.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (L === !0) return;
        if (
          (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(),
          D.parent === null &&
            D.matrixWorldAutoUpdate === !0 &&
            D.updateMatrixWorld(),
          V.enabled === !0 &&
            V.isPresenting === !0 &&
            (V.cameraAutoUpdate === !0 && V.updateCamera(D),
            (D = V.getCamera())),
          v.isScene === !0 && v.onBeforeRender(E, v, D, I),
          (u = Ve.get(v, T.length)),
          u.init(D),
          T.push(u),
          ye.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse),
          q.setFromProjectionMatrix(ye),
          (me = this.localClippingEnabled),
          (ee = J.init(this.clippingPlanes, me)),
          (m = ue.get(v, A.length)),
          m.init(),
          A.push(m),
          V.enabled === !0 && V.isPresenting === !0)
        ) {
          const j = E.xr.getDepthSensingMesh();
          j !== null && Pi(j, D, -1 / 0, E.sortObjects);
        }
        (Pi(v, D, 0, E.sortObjects),
          m.finish(),
          E.sortObjects === !0 && m.sort(re, he),
          (ze =
            V.enabled === !1 ||
            V.isPresenting === !1 ||
            V.hasDepthSensing() === !1),
          ze && Ee.addToRenderList(m, v),
          this.info.render.frame++,
          ee === !0 && J.beginShadows());
        const O = u.state.shadowsArray;
        (de.render(O, v, D),
          ee === !0 && J.endShadows(),
          this.info.autoReset === !0 && this.info.reset());
        const B = m.opaque,
          U = m.transmissive;
        if ((u.setupLights(), D.isArrayCamera)) {
          const j = D.cameras;
          if (U.length > 0)
            for (let ie = 0, ce = j.length; ie < ce; ie++) {
              const pe = j[ie];
              Sr(B, U, v, pe);
            }
          ze && Ee.render(v);
          for (let ie = 0, ce = j.length; ie < ce; ie++) {
            const pe = j[ie];
            Mr(m, v, pe, pe.viewport);
          }
        } else
          (U.length > 0 && Sr(B, U, v, D), ze && Ee.render(v), Mr(m, v, D));
        (I !== null &&
          (y.updateMultisampleRenderTarget(I), y.updateRenderTargetMipmap(I)),
          v.isScene === !0 && v.onAfterRender(E, v, D),
          je.resetDefaultState(),
          (S = -1),
          (x = null),
          T.pop(),
          T.length > 0
            ? ((u = T[T.length - 1]),
              ee === !0 && J.setGlobalState(E.clippingPlanes, u.state.camera))
            : (u = null),
          A.pop(),
          A.length > 0 ? (m = A[A.length - 1]) : (m = null));
      }));
    function Pi(v, D, O, B) {
      if (v.visible === !1) return;
      if (v.layers.test(D.layers)) {
        if (v.isGroup) O = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === !0 && v.update(D);
        else if (v.isLight) (u.pushLight(v), v.castShadow && u.pushShadow(v));
        else if (v.isSprite) {
          if (!v.frustumCulled || q.intersectsSprite(v)) {
            B && Ue.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ye);
            const ie = X.update(v),
              ce = v.material;
            ce.visible && m.push(v, ie, ce, O, Ue.z, null);
          }
        } else if (
          (v.isMesh || v.isLine || v.isPoints) &&
          (!v.frustumCulled || q.intersectsObject(v))
        ) {
          const ie = X.update(v),
            ce = v.material;
          if (
            (B &&
              (v.boundingSphere !== void 0
                ? (v.boundingSphere === null && v.computeBoundingSphere(),
                  Ue.copy(v.boundingSphere.center))
                : (ie.boundingSphere === null && ie.computeBoundingSphere(),
                  Ue.copy(ie.boundingSphere.center)),
              Ue.applyMatrix4(v.matrixWorld).applyMatrix4(ye)),
            Array.isArray(ce))
          ) {
            const pe = ie.groups;
            for (let Ae = 0, be = pe.length; Ae < be; Ae++) {
              const Me = pe[Ae],
                He = ce[Me.materialIndex];
              He && He.visible && m.push(v, ie, He, O, Ue.z, Me);
            }
          } else ce.visible && m.push(v, ie, ce, O, Ue.z, null);
        }
      }
      const j = v.children;
      for (let ie = 0, ce = j.length; ie < ce; ie++) Pi(j[ie], D, O, B);
    }
    function Mr(v, D, O, B) {
      const U = v.opaque,
        j = v.transmissive,
        ie = v.transparent;
      (u.setupLightsView(O),
        ee === !0 && J.setGlobalState(E.clippingPlanes, O),
        B && ve.viewport(C.copy(B)),
        U.length > 0 && $n(U, D, O),
        j.length > 0 && $n(j, D, O),
        ie.length > 0 && $n(ie, D, O),
        ve.buffers.depth.setTest(!0),
        ve.buffers.depth.setMask(!0),
        ve.buffers.color.setMask(!0),
        ve.setPolygonOffset(!1));
    }
    function Sr(v, D, O, B) {
      if ((O.isScene === !0 ? O.overrideMaterial : null) !== null) return;
      u.state.transmissionRenderTarget[B.id] === void 0 &&
        (u.state.transmissionRenderTarget[B.id] = new pn(1, 1, {
          generateMipmaps: !0,
          type:
            Ne.has("EXT_color_buffer_half_float") ||
            Ne.has("EXT_color_buffer_float")
              ? 1016
              : 1009,
          minFilter: 1008,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: We.workingColorSpace,
        }));
      const j = u.state.transmissionRenderTarget[B.id],
        ie = B.viewport || C;
      j.setSize(ie.z, ie.w);
      const ce = E.getRenderTarget();
      (E.setRenderTarget(j),
        E.getClearColor(k),
        (Z = E.getClearAlpha()),
        Z < 1 && E.setClearColor(16777215, 0.5),
        E.clear(),
        ze && Ee.render(O));
      const pe = E.toneMapping;
      E.toneMapping = 0;
      const Ae = B.viewport;
      if (
        (B.viewport !== void 0 && (B.viewport = void 0),
        u.setupLightsView(B),
        ee === !0 && J.setGlobalState(E.clippingPlanes, B),
        $n(v, O, B),
        y.updateMultisampleRenderTarget(j),
        y.updateRenderTargetMipmap(j),
        Ne.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let be = !1;
        for (let Me = 0, He = D.length; Me < He; Me++) {
          const Xe = D[Me],
            st = Xe.object,
            it = Xe.geometry,
            ke = Xe.material,
            Se = Xe.group;
          if (ke.side === 2 && st.layers.test(B.layers)) {
            const ft = ke.side;
            ((ke.side = 1),
              (ke.needsUpdate = !0),
              Er(st, O, B, it, ke, Se),
              (ke.side = ft),
              (ke.needsUpdate = !0),
              (be = !0));
          }
        }
        be === !0 &&
          (y.updateMultisampleRenderTarget(j), y.updateRenderTargetMipmap(j));
      }
      (E.setRenderTarget(ce),
        E.setClearColor(k, Z),
        Ae !== void 0 && (B.viewport = Ae),
        (E.toneMapping = pe));
    }
    function $n(v, D, O) {
      const B = D.isScene === !0 ? D.overrideMaterial : null;
      for (let U = 0, j = v.length; U < j; U++) {
        const ie = v[U],
          ce = ie.object,
          pe = ie.geometry,
          Ae = B === null ? ie.material : B,
          be = ie.group;
        ce.layers.test(O.layers) && Er(ce, D, O, pe, Ae, be);
      }
    }
    function Er(v, D, O, B, U, j) {
      (v.onBeforeRender(E, D, O, B, U, j),
        v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, v.matrixWorld),
        v.normalMatrix.getNormalMatrix(v.modelViewMatrix),
        U.onBeforeRender(E, D, O, B, v, j),
        U.transparent === !0 && U.side === 2 && U.forceSinglePass === !1
          ? ((U.side = 1),
            (U.needsUpdate = !0),
            E.renderBufferDirect(O, D, B, U, v, j),
            (U.side = 0),
            (U.needsUpdate = !0),
            E.renderBufferDirect(O, D, B, U, v, j),
            (U.side = 2))
          : E.renderBufferDirect(O, D, B, U, v, j),
        v.onAfterRender(E, D, O, B, U, j));
    }
    function jn(v, D, O) {
      D.isScene !== !0 && (D = tt);
      const B = xe.get(v),
        U = u.state.lights,
        j = u.state.shadowsArray,
        ie = U.state.version,
        ce = _e.getParameters(v, U.state, j, D, O),
        pe = _e.getProgramCacheKey(ce);
      let Ae = B.programs;
      ((B.environment = v.isMeshStandardMaterial ? D.environment : null),
        (B.fog = D.fog),
        (B.envMap = (v.isMeshStandardMaterial ? N : _).get(
          v.envMap || B.environment,
        )),
        (B.envMapRotation =
          B.environment !== null && v.envMap === null
            ? D.environmentRotation
            : v.envMapRotation),
        Ae === void 0 &&
          (v.addEventListener("dispose", we),
          (Ae = new Map()),
          (B.programs = Ae)));
      let be = Ae.get(pe);
      if (be !== void 0) {
        if (B.currentProgram === be && B.lightsStateVersion === ie)
          return (Tr(v, ce), be);
      } else
        ((ce.uniforms = _e.getUniforms(v)),
          v.onBeforeCompile(ce, E),
          (be = _e.acquireProgram(ce, pe)),
          Ae.set(pe, be),
          (B.uniforms = ce.uniforms));
      const Me = B.uniforms;
      return (
        ((!v.isShaderMaterial && !v.isRawShaderMaterial) ||
          v.clipping === !0) &&
          (Me.clippingPlanes = J.uniform),
        Tr(v, ce),
        (B.needsLights = qs(v)),
        (B.lightsStateVersion = ie),
        B.needsLights &&
          ((Me.ambientLightColor.value = U.state.ambient),
          (Me.lightProbe.value = U.state.probe),
          (Me.directionalLights.value = U.state.directional),
          (Me.directionalLightShadows.value = U.state.directionalShadow),
          (Me.spotLights.value = U.state.spot),
          (Me.spotLightShadows.value = U.state.spotShadow),
          (Me.rectAreaLights.value = U.state.rectArea),
          (Me.ltc_1.value = U.state.rectAreaLTC1),
          (Me.ltc_2.value = U.state.rectAreaLTC2),
          (Me.pointLights.value = U.state.point),
          (Me.pointLightShadows.value = U.state.pointShadow),
          (Me.hemisphereLights.value = U.state.hemi),
          (Me.directionalShadowMap.value = U.state.directionalShadowMap),
          (Me.directionalShadowMatrix.value = U.state.directionalShadowMatrix),
          (Me.spotShadowMap.value = U.state.spotShadowMap),
          (Me.spotLightMatrix.value = U.state.spotLightMatrix),
          (Me.spotLightMap.value = U.state.spotLightMap),
          (Me.pointShadowMap.value = U.state.pointShadowMap),
          (Me.pointShadowMatrix.value = U.state.pointShadowMatrix)),
        (B.currentProgram = be),
        (B.uniformsList = null),
        be
      );
    }
    function yr(v) {
      if (v.uniformsList === null) {
        const D = v.currentProgram.getUniforms();
        v.uniformsList = Si.seqWithValue(D.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function Tr(v, D) {
      const O = xe.get(v);
      ((O.outputColorSpace = D.outputColorSpace),
        (O.batching = D.batching),
        (O.batchingColor = D.batchingColor),
        (O.instancing = D.instancing),
        (O.instancingColor = D.instancingColor),
        (O.instancingMorph = D.instancingMorph),
        (O.skinning = D.skinning),
        (O.morphTargets = D.morphTargets),
        (O.morphNormals = D.morphNormals),
        (O.morphColors = D.morphColors),
        (O.morphTargetsCount = D.morphTargetsCount),
        (O.numClippingPlanes = D.numClippingPlanes),
        (O.numIntersection = D.numClipIntersection),
        (O.vertexAlphas = D.vertexAlphas),
        (O.vertexTangents = D.vertexTangents),
        (O.toneMapping = D.toneMapping));
    }
    function Ws(v, D, O, B, U) {
      (D.isScene !== !0 && (D = tt), y.resetTextureUnits());
      const j = D.fog,
        ie = B.isMeshStandardMaterial ? D.environment : null,
        ce =
          I === null
            ? E.outputColorSpace
            : I.isXRRenderTarget === !0
              ? I.texture.colorSpace
              : Un,
        pe = (B.isMeshStandardMaterial ? N : _).get(B.envMap || ie),
        Ae =
          B.vertexColors === !0 &&
          !!O.attributes.color &&
          O.attributes.color.itemSize === 4,
        be = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0),
        Me = !!O.morphAttributes.position,
        He = !!O.morphAttributes.normal,
        Xe = !!O.morphAttributes.color;
      let st = 0;
      B.toneMapped &&
        (I === null || I.isXRRenderTarget === !0) &&
        (st = E.toneMapping);
      const it =
          O.morphAttributes.position ||
          O.morphAttributes.normal ||
          O.morphAttributes.color,
        ke = it !== void 0 ? it.length : 0,
        Se = xe.get(B),
        ft = u.state.lights;
      if (ee === !0 && (me === !0 || v !== x)) {
        const gt = v === x && B.id === S;
        J.setState(B, v, gt);
      }
      let qe = !1;
      B.version === Se.__version
        ? ((Se.needsLights && Se.lightsStateVersion !== ft.state.version) ||
            Se.outputColorSpace !== ce ||
            (U.isBatchedMesh && Se.batching === !1) ||
            (!U.isBatchedMesh && Se.batching === !0) ||
            (U.isBatchedMesh &&
              Se.batchingColor === !0 &&
              U.colorTexture === null) ||
            (U.isBatchedMesh &&
              Se.batchingColor === !1 &&
              U.colorTexture !== null) ||
            (U.isInstancedMesh && Se.instancing === !1) ||
            (!U.isInstancedMesh && Se.instancing === !0) ||
            (U.isSkinnedMesh && Se.skinning === !1) ||
            (!U.isSkinnedMesh && Se.skinning === !0) ||
            (U.isInstancedMesh &&
              Se.instancingColor === !0 &&
              U.instanceColor === null) ||
            (U.isInstancedMesh &&
              Se.instancingColor === !1 &&
              U.instanceColor !== null) ||
            (U.isInstancedMesh &&
              Se.instancingMorph === !0 &&
              U.morphTexture === null) ||
            (U.isInstancedMesh &&
              Se.instancingMorph === !1 &&
              U.morphTexture !== null) ||
            Se.envMap !== pe ||
            (B.fog === !0 && Se.fog !== j) ||
            (Se.numClippingPlanes !== void 0 &&
              (Se.numClippingPlanes !== J.numPlanes ||
                Se.numIntersection !== J.numIntersection)) ||
            Se.vertexAlphas !== Ae ||
            Se.vertexTangents !== be ||
            Se.morphTargets !== Me ||
            Se.morphNormals !== He ||
            Se.morphColors !== Xe ||
            Se.toneMapping !== st ||
            Se.morphTargetsCount !== ke) &&
          (qe = !0)
        : ((qe = !0), (Se.__version = B.version));
      let Lt = Se.currentProgram;
      qe === !0 && (Lt = jn(B, D, U));
      let _n = !1,
        St = !1,
        On = !1;
      const et = Lt.getUniforms(),
        bt = Se.uniforms;
      if (
        (ve.useProgram(Lt.program) && ((_n = !0), (St = !0), (On = !0)),
        B.id !== S && ((S = B.id), (St = !0)),
        _n || x !== v)
      ) {
        (ve.buffers.depth.getReversed()
          ? (se.copy(v.projectionMatrix),
            Js(se),
            Qs(se),
            et.setValue(R, "projectionMatrix", se))
          : et.setValue(R, "projectionMatrix", v.projectionMatrix),
          et.setValue(R, "viewMatrix", v.matrixWorldInverse));
        const xt = et.map.cameraPosition;
        (xt !== void 0 &&
          xt.setValue(R, Re.setFromMatrixPosition(v.matrixWorld)),
          Oe.logarithmicDepthBuffer &&
            et.setValue(
              R,
              "logDepthBufFC",
              2 / (Math.log(v.far + 1) / Math.LN2),
            ),
          (B.isMeshPhongMaterial ||
            B.isMeshToonMaterial ||
            B.isMeshLambertMaterial ||
            B.isMeshBasicMaterial ||
            B.isMeshStandardMaterial ||
            B.isShaderMaterial) &&
            et.setValue(R, "isOrthographic", v.isOrthographicCamera === !0),
          x !== v && ((x = v), (St = !0), (On = !0)));
      }
      if (U.isSkinnedMesh) {
        (et.setOptional(R, U, "bindMatrix"),
          et.setOptional(R, U, "bindMatrixInverse"));
        const gt = U.skeleton;
        gt &&
          (gt.boneTexture === null && gt.computeBoneTexture(),
          et.setValue(R, "boneTexture", gt.boneTexture, y));
      }
      U.isBatchedMesh &&
        (et.setOptional(R, U, "batchingTexture"),
        et.setValue(R, "batchingTexture", U._matricesTexture, y),
        et.setOptional(R, U, "batchingIdTexture"),
        et.setValue(R, "batchingIdTexture", U._indirectTexture, y),
        et.setOptional(R, U, "batchingColorTexture"),
        U._colorsTexture !== null &&
          et.setValue(R, "batchingColorTexture", U._colorsTexture, y));
      const Rt = O.morphAttributes;
      if (
        ((Rt.position !== void 0 ||
          Rt.normal !== void 0 ||
          Rt.color !== void 0) &&
          Te.update(U, O, Lt),
        (St || Se.receiveShadow !== U.receiveShadow) &&
          ((Se.receiveShadow = U.receiveShadow),
          et.setValue(R, "receiveShadow", U.receiveShadow)),
        B.isMeshGouraudMaterial &&
          B.envMap !== null &&
          ((bt.envMap.value = pe),
          (bt.flipEnvMap.value =
            pe.isCubeTexture && pe.isRenderTargetTexture === !1 ? -1 : 1)),
        B.isMeshStandardMaterial &&
          B.envMap === null &&
          D.environment !== null &&
          (bt.envMapIntensity.value = D.environmentIntensity),
        St &&
          (et.setValue(R, "toneMappingExposure", E.toneMappingExposure),
          Se.needsLights && Xs(bt, On),
          j && B.fog === !0 && ae.refreshFogUniforms(bt, j),
          ae.refreshMaterialUniforms(
            bt,
            B,
            H,
            Q,
            u.state.transmissionRenderTarget[v.id],
          ),
          Si.upload(R, yr(Se), bt, y)),
        B.isShaderMaterial &&
          B.uniformsNeedUpdate === !0 &&
          (Si.upload(R, yr(Se), bt, y), (B.uniformsNeedUpdate = !1)),
        B.isSpriteMaterial && et.setValue(R, "center", U.center),
        et.setValue(R, "modelViewMatrix", U.modelViewMatrix),
        et.setValue(R, "normalMatrix", U.normalMatrix),
        et.setValue(R, "modelMatrix", U.matrixWorld),
        B.isShaderMaterial || B.isRawShaderMaterial)
      ) {
        const gt = B.uniformsGroups;
        for (let xt = 0, Di = gt.length; xt < Di; xt++) {
          const rn = gt[xt];
          (P.update(rn, Lt), P.bind(rn, Lt));
        }
      }
      return Lt;
    }
    function Xs(v, D) {
      ((v.ambientLightColor.needsUpdate = D),
        (v.lightProbe.needsUpdate = D),
        (v.directionalLights.needsUpdate = D),
        (v.directionalLightShadows.needsUpdate = D),
        (v.pointLights.needsUpdate = D),
        (v.pointLightShadows.needsUpdate = D),
        (v.spotLights.needsUpdate = D),
        (v.spotLightShadows.needsUpdate = D),
        (v.rectAreaLights.needsUpdate = D),
        (v.hemisphereLights.needsUpdate = D));
    }
    function qs(v) {
      return (
        v.isMeshLambertMaterial ||
        v.isMeshToonMaterial ||
        v.isMeshPhongMaterial ||
        v.isMeshStandardMaterial ||
        v.isShadowMaterial ||
        (v.isShaderMaterial && v.lights === !0)
      );
    }
    ((this.getActiveCubeFace = function () {
      return b;
    }),
      (this.getActiveMipmapLevel = function () {
        return w;
      }),
      (this.getRenderTarget = function () {
        return I;
      }),
      (this.setRenderTargetTextures = function (v, D, O) {
        ((xe.get(v.texture).__webglTexture = D),
          (xe.get(v.depthTexture).__webglTexture = O));
        const B = xe.get(v);
        ((B.__hasExternalTextures = !0),
          (B.__autoAllocateDepthBuffer = O === void 0),
          B.__autoAllocateDepthBuffer ||
            (Ne.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided",
              ),
              (B.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (v, D) {
        const O = xe.get(v);
        ((O.__webglFramebuffer = D),
          (O.__useDefaultFramebuffer = D === void 0));
      }),
      (this.setRenderTarget = function (v, D = 0, O = 0) {
        ((I = v), (b = D), (w = O));
        let B = !0,
          U = null,
          j = !1,
          ie = !1;
        if (v) {
          const pe = xe.get(v);
          if (pe.__useDefaultFramebuffer !== void 0)
            (ve.bindFramebuffer(R.FRAMEBUFFER, null), (B = !1));
          else if (pe.__webglFramebuffer === void 0) y.setupRenderTarget(v);
          else if (pe.__hasExternalTextures)
            y.rebindTextures(
              v,
              xe.get(v.texture).__webglTexture,
              xe.get(v.depthTexture).__webglTexture,
            );
          else if (v.depthBuffer) {
            const Me = v.depthTexture;
            if (pe.__boundDepthTexture !== Me) {
              if (
                Me !== null &&
                xe.has(Me) &&
                (v.width !== Me.image.width || v.height !== Me.image.height)
              )
                throw new Error(
                  "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.",
                );
              y.setupDepthRenderbuffer(v);
            }
          }
          const Ae = v.texture;
          (Ae.isData3DTexture ||
            Ae.isDataArrayTexture ||
            Ae.isCompressedArrayTexture) &&
            (ie = !0);
          const be = xe.get(v).__webglFramebuffer;
          (v.isWebGLCubeRenderTarget
            ? (Array.isArray(be[D]) ? (U = be[D][O]) : (U = be[D]), (j = !0))
            : v.samples > 0 && y.useMultisampledRTT(v) === !1
              ? (U = xe.get(v).__webglMultisampledFramebuffer)
              : Array.isArray(be)
                ? (U = be[O])
                : (U = be),
            C.copy(v.viewport),
            z.copy(v.scissor),
            (G = v.scissorTest));
        } else
          (C.copy(ge).multiplyScalar(H).floor(),
            z.copy(Le).multiplyScalar(H).floor(),
            (G = $e));
        if (
          (ve.bindFramebuffer(R.FRAMEBUFFER, U) && B && ve.drawBuffers(v, U),
          ve.viewport(C),
          ve.scissor(z),
          ve.setScissorTest(G),
          j)
        ) {
          const pe = xe.get(v.texture);
          R.framebufferTexture2D(
            R.FRAMEBUFFER,
            R.COLOR_ATTACHMENT0,
            R.TEXTURE_CUBE_MAP_POSITIVE_X + D,
            pe.__webglTexture,
            O,
          );
        } else if (ie) {
          const pe = xe.get(v.texture),
            Ae = D || 0;
          R.framebufferTextureLayer(
            R.FRAMEBUFFER,
            R.COLOR_ATTACHMENT0,
            pe.__webglTexture,
            O || 0,
            Ae,
          );
        }
        S = -1;
      }),
      (this.readRenderTargetPixels = function (v, D, O, B, U, j, ie) {
        if (!(v && v.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let ce = xe.get(v).__webglFramebuffer;
        if ((v.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce)) {
          ve.bindFramebuffer(R.FRAMEBUFFER, ce);
          try {
            const pe = v.texture,
              Ae = pe.format,
              be = pe.type;
            if (!Oe.textureFormatReadable(Ae)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!Oe.textureTypeReadable(be)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            D >= 0 &&
              D <= v.width - B &&
              O >= 0 &&
              O <= v.height - U &&
              R.readPixels(D, O, B, U, Pe.convert(Ae), Pe.convert(be), j);
          } finally {
            const pe = I !== null ? xe.get(I).__webglFramebuffer : null;
            ve.bindFramebuffer(R.FRAMEBUFFER, pe);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        v,
        D,
        O,
        B,
        U,
        j,
        ie,
      ) {
        if (!(v && v.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let ce = xe.get(v).__webglFramebuffer;
        if ((v.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce)) {
          const pe = v.texture,
            Ae = pe.format,
            be = pe.type;
          if (!Oe.textureFormatReadable(Ae))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
            );
          if (!Oe.textureTypeReadable(be))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
            );
          if (D >= 0 && D <= v.width - B && O >= 0 && O <= v.height - U) {
            ve.bindFramebuffer(R.FRAMEBUFFER, ce);
            const Me = R.createBuffer();
            (R.bindBuffer(R.PIXEL_PACK_BUFFER, Me),
              R.bufferData(R.PIXEL_PACK_BUFFER, j.byteLength, R.STREAM_READ),
              R.readPixels(D, O, B, U, Pe.convert(Ae), Pe.convert(be), 0));
            const He = I !== null ? xe.get(I).__webglFramebuffer : null;
            ve.bindFramebuffer(R.FRAMEBUFFER, He);
            const Xe = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              R.flush(),
              await js(R, Xe, 4),
              R.bindBuffer(R.PIXEL_PACK_BUFFER, Me),
              R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, j),
              R.deleteBuffer(Me),
              R.deleteSync(Xe),
              j
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
        }
      }),
      (this.copyFramebufferToTexture = function (v, D = null, O = 0) {
        v.isTexture !== !0 &&
          (Pn(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed.",
          ),
          (D = arguments[0] || null),
          (v = arguments[1]));
        const B = Math.pow(2, -O),
          U = Math.floor(v.image.width * B),
          j = Math.floor(v.image.height * B),
          ie = D !== null ? D.x : 0,
          ce = D !== null ? D.y : 0;
        (y.setTexture2D(v, 0),
          R.copyTexSubImage2D(R.TEXTURE_2D, O, 0, 0, ie, ce, U, j),
          ve.unbindTexture());
      }));
    const Ys = R.createFramebuffer(),
      Ks = R.createFramebuffer();
    ((this.copyTextureToTexture = function (
      v,
      D,
      O = null,
      B = null,
      U = 0,
      j = null,
    ) {
      (v.isTexture !== !0 &&
        (Pn(
          "WebGLRenderer: copyTextureToTexture function signature has changed.",
        ),
        (B = arguments[0] || null),
        (v = arguments[1]),
        (D = arguments[2]),
        (j = arguments[3] || 0),
        (O = null)),
        j === null &&
          (U !== 0
            ? (Pn(
                "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.",
              ),
              (j = U),
              (U = 0))
            : (j = 0)));
      let ie, ce, pe, Ae, be, Me, He, Xe, st;
      const it = v.isCompressedTexture ? v.mipmaps[j] : v.image;
      if (O !== null)
        ((ie = O.max.x - O.min.x),
          (ce = O.max.y - O.min.y),
          (pe = O.isBox3 ? O.max.z - O.min.z : 1),
          (Ae = O.min.x),
          (be = O.min.y),
          (Me = O.isBox3 ? O.min.z : 0));
      else {
        const Rt = Math.pow(2, -U);
        ((ie = Math.floor(it.width * Rt)),
          (ce = Math.floor(it.height * Rt)),
          v.isDataArrayTexture
            ? (pe = it.depth)
            : v.isData3DTexture
              ? (pe = Math.floor(it.depth * Rt))
              : (pe = 1),
          (Ae = 0),
          (be = 0),
          (Me = 0));
      }
      B !== null
        ? ((He = B.x), (Xe = B.y), (st = B.z))
        : ((He = 0), (Xe = 0), (st = 0));
      const ke = Pe.convert(D.format),
        Se = Pe.convert(D.type);
      let ft;
      (D.isData3DTexture
        ? (y.setTexture3D(D, 0), (ft = R.TEXTURE_3D))
        : D.isDataArrayTexture || D.isCompressedArrayTexture
          ? (y.setTexture2DArray(D, 0), (ft = R.TEXTURE_2D_ARRAY))
          : (y.setTexture2D(D, 0), (ft = R.TEXTURE_2D)),
        R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, D.flipY),
        R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha),
        R.pixelStorei(R.UNPACK_ALIGNMENT, D.unpackAlignment));
      const qe = R.getParameter(R.UNPACK_ROW_LENGTH),
        Lt = R.getParameter(R.UNPACK_IMAGE_HEIGHT),
        _n = R.getParameter(R.UNPACK_SKIP_PIXELS),
        St = R.getParameter(R.UNPACK_SKIP_ROWS),
        On = R.getParameter(R.UNPACK_SKIP_IMAGES);
      (R.pixelStorei(R.UNPACK_ROW_LENGTH, it.width),
        R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, it.height),
        R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ae),
        R.pixelStorei(R.UNPACK_SKIP_ROWS, be),
        R.pixelStorei(R.UNPACK_SKIP_IMAGES, Me));
      const et = v.isDataArrayTexture || v.isData3DTexture,
        bt = D.isDataArrayTexture || D.isData3DTexture;
      if (v.isDepthTexture) {
        const Rt = xe.get(v),
          gt = xe.get(D),
          xt = xe.get(Rt.__renderTarget),
          Di = xe.get(gt.__renderTarget);
        (ve.bindFramebuffer(R.READ_FRAMEBUFFER, xt.__webglFramebuffer),
          ve.bindFramebuffer(R.DRAW_FRAMEBUFFER, Di.__webglFramebuffer));
        for (let rn = 0; rn < pe; rn++)
          (et &&
            (R.framebufferTextureLayer(
              R.READ_FRAMEBUFFER,
              R.COLOR_ATTACHMENT0,
              xe.get(v).__webglTexture,
              U,
              Me + rn,
            ),
            R.framebufferTextureLayer(
              R.DRAW_FRAMEBUFFER,
              R.COLOR_ATTACHMENT0,
              xe.get(D).__webglTexture,
              j,
              st + rn,
            )),
            R.blitFramebuffer(
              Ae,
              be,
              ie,
              ce,
              He,
              Xe,
              ie,
              ce,
              R.DEPTH_BUFFER_BIT,
              R.NEAREST,
            ));
        (ve.bindFramebuffer(R.READ_FRAMEBUFFER, null),
          ve.bindFramebuffer(R.DRAW_FRAMEBUFFER, null));
      } else if (U !== 0 || v.isRenderTargetTexture || xe.has(v)) {
        const Rt = xe.get(v),
          gt = xe.get(D);
        (ve.bindFramebuffer(R.READ_FRAMEBUFFER, Ys),
          ve.bindFramebuffer(R.DRAW_FRAMEBUFFER, Ks));
        for (let xt = 0; xt < pe; xt++)
          (et
            ? R.framebufferTextureLayer(
                R.READ_FRAMEBUFFER,
                R.COLOR_ATTACHMENT0,
                Rt.__webglTexture,
                U,
                Me + xt,
              )
            : R.framebufferTexture2D(
                R.READ_FRAMEBUFFER,
                R.COLOR_ATTACHMENT0,
                R.TEXTURE_2D,
                Rt.__webglTexture,
                U,
              ),
            bt
              ? R.framebufferTextureLayer(
                  R.DRAW_FRAMEBUFFER,
                  R.COLOR_ATTACHMENT0,
                  gt.__webglTexture,
                  j,
                  st + xt,
                )
              : R.framebufferTexture2D(
                  R.DRAW_FRAMEBUFFER,
                  R.COLOR_ATTACHMENT0,
                  R.TEXTURE_2D,
                  gt.__webglTexture,
                  j,
                ),
            U !== 0
              ? R.blitFramebuffer(
                  Ae,
                  be,
                  ie,
                  ce,
                  He,
                  Xe,
                  ie,
                  ce,
                  R.COLOR_BUFFER_BIT,
                  R.NEAREST,
                )
              : bt
                ? R.copyTexSubImage3D(ft, j, He, Xe, st + xt, Ae, be, ie, ce)
                : R.copyTexSubImage2D(ft, j, He, Xe, Ae, be, ie, ce));
        (ve.bindFramebuffer(R.READ_FRAMEBUFFER, null),
          ve.bindFramebuffer(R.DRAW_FRAMEBUFFER, null));
      } else
        bt
          ? v.isDataTexture || v.isData3DTexture
            ? R.texSubImage3D(ft, j, He, Xe, st, ie, ce, pe, ke, Se, it.data)
            : D.isCompressedArrayTexture
              ? R.compressedTexSubImage3D(
                  ft,
                  j,
                  He,
                  Xe,
                  st,
                  ie,
                  ce,
                  pe,
                  ke,
                  it.data,
                )
              : R.texSubImage3D(ft, j, He, Xe, st, ie, ce, pe, ke, Se, it)
          : v.isDataTexture
            ? R.texSubImage2D(R.TEXTURE_2D, j, He, Xe, ie, ce, ke, Se, it.data)
            : v.isCompressedTexture
              ? R.compressedTexSubImage2D(
                  R.TEXTURE_2D,
                  j,
                  He,
                  Xe,
                  it.width,
                  it.height,
                  ke,
                  it.data,
                )
              : R.texSubImage2D(R.TEXTURE_2D, j, He, Xe, ie, ce, ke, Se, it);
      (R.pixelStorei(R.UNPACK_ROW_LENGTH, qe),
        R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Lt),
        R.pixelStorei(R.UNPACK_SKIP_PIXELS, _n),
        R.pixelStorei(R.UNPACK_SKIP_ROWS, St),
        R.pixelStorei(R.UNPACK_SKIP_IMAGES, On),
        j === 0 && D.generateMipmaps && R.generateMipmap(ft),
        ve.unbindTexture());
    }),
      (this.copyTextureToTexture3D = function (
        v,
        D,
        O = null,
        B = null,
        U = 0,
      ) {
        return (
          v.isTexture !== !0 &&
            (Pn(
              "WebGLRenderer: copyTextureToTexture3D function signature has changed.",
            ),
            (O = arguments[0] || null),
            (B = arguments[1] || null),
            (v = arguments[2]),
            (D = arguments[3]),
            (U = arguments[4] || 0)),
          Pn(
            'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.',
          ),
          this.copyTextureToTexture(v, D, O, B, U)
        );
      }),
      (this.initRenderTarget = function (v) {
        xe.get(v).__webglFramebuffer === void 0 && y.setupRenderTarget(v);
      }),
      (this.initTexture = function (v) {
        (v.isCubeTexture
          ? y.setTextureCube(v, 0)
          : v.isData3DTexture
            ? y.setTexture3D(v, 0)
            : v.isDataArrayTexture || v.isCompressedArrayTexture
              ? y.setTexture2DArray(v, 0)
              : y.setTexture2D(v, 0),
          ve.unbindTexture());
      }),
      (this.resetState = function () {
        ((b = 0), (w = 0), (I = null), ve.reset(), je.reset());
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    ((t.drawingBufferColorspace = We._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = We._getUnpackColorSpace()));
  }
}
export {
  Os as $,
  Eu as A,
  xu as B,
  Yu as C,
  Wu as D,
  mr as E,
  ju as F,
  Ot as G,
  Ru as H,
  As as I,
  gi as J,
  bi as K,
  Ri as L,
  $u as M,
  Hu as N,
  Zn as O,
  Tt as P,
  Qu as Q,
  Gu as R,
  Ct as S,
  Ju as T,
  Au as U,
  F as V,
  rd as W,
  nd as X,
  ed as Y,
  Ku as Z,
  Su as _,
  qu as a,
  Ns as a0,
  Fs as a1,
  tn as a2,
  Mu as a3,
  td as a4,
  Pt as a5,
  Gt as a6,
  Xu as a7,
  Ta as a8,
  id as a9,
  Ge as aa,
  Yn as ab,
  pn as ac,
  Ra as ad,
  vu as ae,
  Ls as b,
  yu as c,
  Tu as d,
  Un as e,
  Bu as f,
  Cu as g,
  Pu as h,
  wu as i,
  bu as j,
  sa as k,
  Du as l,
  Uu as m,
  Nu as n,
  Fu as o,
  Lu as p,
  Iu as q,
  Ou as r,
  zu as s,
  Vu as t,
  ku as u,
  Ie as v,
  Ds as w,
  Zu as x,
  Yt as y,
  Is as z,
};
