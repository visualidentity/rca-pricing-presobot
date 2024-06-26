/**
 * @license
 * Copyright (c) 2018 amCharts (Antanas Marcelionis, Martynas Majeris)
 *
 * This sofware is provided under multiple licenses. Please see below for
 * links to appropriate usage.
 *
 * Free amCharts linkware license. Details and conditions:
 * https://github.com/amcharts/amcharts4/blob/master/LICENSE
 *
 * One of the amCharts commercial licenses. Details and pricing:
 * https://www.amcharts.com/online-store/
 * https://www.amcharts.com/online-store/licenses-explained/
 *
 * If in doubt, contact amCharts at contact@amcharts.com
 *
 * PLEASE DO NOT REMOVE THIS COPYRIGHT NOTICE.
 * @hidden
 */
am4internal_webpackJsonp(['0471'], {
  '15tG': function(t, e) {
    t.exports = function(t, e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
        var r = [],
          n = !0,
          i = !1,
          a = void 0;
        try {
          for (
            var o, u = t[Symbol.iterator]();
            !(n = (o = u.next()).done) &&
            (r.push(o.value), !e || r.length !== e);
            n = !0
          );
        } catch (t) {
          (i = !0), (a = t);
        } finally {
          try {
            n || null == u.return || u.return();
          } finally {
            if (i) throw a;
          }
        }
        return r;
      }
    };
  },
  '2gqV': function(t, e, r) {
    'use strict';
    function n(t) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    r.d(e, 'a', function() {
      return u;
    });
    var i = [
        512,
        512,
        456,
        512,
        328,
        456,
        335,
        512,
        405,
        328,
        271,
        456,
        388,
        335,
        292,
        512,
        454,
        405,
        364,
        328,
        298,
        271,
        496,
        456,
        420,
        388,
        360,
        335,
        312,
        292,
        273,
        512,
        482,
        454,
        428,
        405,
        383,
        364,
        345,
        328,
        312,
        298,
        284,
        271,
        259,
        496,
        475,
        456,
        437,
        420,
        404,
        388,
        374,
        360,
        347,
        335,
        323,
        312,
        302,
        292,
        282,
        273,
        265,
        512,
        497,
        482,
        468,
        454,
        441,
        428,
        417,
        405,
        394,
        383,
        373,
        364,
        354,
        345,
        337,
        328,
        320,
        312,
        305,
        298,
        291,
        284,
        278,
        271,
        265,
        259,
        507,
        496,
        485,
        475,
        465,
        456,
        446,
        437,
        428,
        420,
        412,
        404,
        396,
        388,
        381,
        374,
        367,
        360,
        354,
        347,
        341,
        335,
        329,
        323,
        318,
        312,
        307,
        302,
        297,
        292,
        287,
        282,
        278,
        273,
        269,
        265,
        261,
        512,
        505,
        497,
        489,
        482,
        475,
        468,
        461,
        454,
        447,
        441,
        435,
        428,
        422,
        417,
        411,
        405,
        399,
        394,
        389,
        383,
        378,
        373,
        368,
        364,
        359,
        354,
        350,
        345,
        341,
        337,
        332,
        328,
        324,
        320,
        316,
        312,
        309,
        305,
        301,
        298,
        294,
        291,
        287,
        284,
        281,
        278,
        274,
        271,
        268,
        265,
        262,
        259,
        257,
        507,
        501,
        496,
        491,
        485,
        480,
        475,
        470,
        465,
        460,
        456,
        451,
        446,
        442,
        437,
        433,
        428,
        424,
        420,
        416,
        412,
        408,
        404,
        400,
        396,
        392,
        388,
        385,
        381,
        377,
        374,
        370,
        367,
        363,
        360,
        357,
        354,
        350,
        347,
        344,
        341,
        338,
        335,
        332,
        329,
        326,
        323,
        320,
        318,
        315,
        312,
        310,
        307,
        304,
        302,
        299,
        297,
        294,
        292,
        289,
        287,
        285,
        282,
        280,
        278,
        275,
        273,
        271,
        269,
        267,
        265,
        263,
        261,
        259
      ],
      a = [
        9,
        11,
        12,
        13,
        13,
        14,
        14,
        15,
        15,
        15,
        15,
        16,
        16,
        16,
        16,
        17,
        17,
        17,
        17,
        17,
        17,
        17,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        19,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        20,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        22,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        23,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24
      ];
    function o(t, e, r, i, a) {
      if (
        ('string' == typeof t && (t = document.getElementById(t)),
        !(t && 'object' === n(t) && 'getContext' in t))
      )
        throw new TypeError(
          'Expecting canvas with `getContext` method in processCanvasRGB(A) calls!'
        );
      var o = t.getContext('2d');
      try {
        return o.getImageData(e, r, i, a);
      } catch (t) {
        throw new Error('unable to access image data: ' + t);
      }
    }
    function u(t, e, r, n, u, c) {
      if (!(isNaN(c) || c < 1)) {
        c |= 0;
        var l = o(t, e, r, n, u);
        (l = (function(t, e, r, n, o, u) {
          var c,
            l,
            f,
            h,
            y,
            g,
            p,
            d,
            v,
            m,
            x,
            b,
            w,
            k,
            S,
            P,
            R,
            A,
            C,
            E,
            M,
            T,
            V,
            D,
            L,
            O = t.data,
            N = 2 * u + 1,
            z = n - 1,
            B = o - 1,
            F = u + 1,
            I = (F * (F + 1)) / 2,
            j = new s(),
            q = j;
          for (f = 1; f < N; f++) (q = q.next = new s()), f === F && (L = q);
          q.next = j;
          var G = null,
            $ = null;
          p = g = 0;
          var _ = i[u],
            W = a[u];
          for (l = 0; l < o; l++) {
            for (
              P = R = A = C = d = v = m = x = 0,
                b = F * (E = O[g]),
                w = F * (M = O[g + 1]),
                k = F * (T = O[g + 2]),
                S = F * (V = O[g + 3]),
                d += I * E,
                v += I * M,
                m += I * T,
                x += I * V,
                q = j,
                f = 0;
              f < F;
              f++
            )
              (q.r = E), (q.g = M), (q.b = T), (q.a = V), (q = q.next);
            for (f = 1; f < F; f++)
              (h = g + ((z < f ? z : f) << 2)),
                (d += (q.r = E = O[h]) * (D = F - f)),
                (v += (q.g = M = O[h + 1]) * D),
                (m += (q.b = T = O[h + 2]) * D),
                (x += (q.a = V = O[h + 3]) * D),
                (P += E),
                (R += M),
                (A += T),
                (C += V),
                (q = q.next);
            for (G = j, $ = L, c = 0; c < n; c++)
              (O[g + 3] = V = (x * _) >> W),
                0 !== V
                  ? ((V = 255 / V),
                    (O[g] = ((d * _) >> W) * V),
                    (O[g + 1] = ((v * _) >> W) * V),
                    (O[g + 2] = ((m * _) >> W) * V))
                  : (O[g] = O[g + 1] = O[g + 2] = 0),
                (d -= b),
                (v -= w),
                (m -= k),
                (x -= S),
                (b -= G.r),
                (w -= G.g),
                (k -= G.b),
                (S -= G.a),
                (h = (p + ((h = c + u + 1) < z ? h : z)) << 2),
                (P += G.r = O[h]),
                (R += G.g = O[h + 1]),
                (A += G.b = O[h + 2]),
                (C += G.a = O[h + 3]),
                (d += P),
                (v += R),
                (m += A),
                (x += C),
                (G = G.next),
                (b += E = $.r),
                (w += M = $.g),
                (k += T = $.b),
                (S += V = $.a),
                (P -= E),
                (R -= M),
                (A -= T),
                (C -= V),
                ($ = $.next),
                (g += 4);
            p += n;
          }
          for (c = 0; c < n; c++) {
            for (
              R = A = C = P = v = m = x = d = 0,
                b = F * (E = O[(g = c << 2)]),
                w = F * (M = O[g + 1]),
                k = F * (T = O[g + 2]),
                S = F * (V = O[g + 3]),
                d += I * E,
                v += I * M,
                m += I * T,
                x += I * V,
                q = j,
                f = 0;
              f < F;
              f++
            )
              (q.r = E), (q.g = M), (q.b = T), (q.a = V), (q = q.next);
            for (y = n, f = 1; f <= u; f++)
              (g = (y + c) << 2),
                (d += (q.r = E = O[g]) * (D = F - f)),
                (v += (q.g = M = O[g + 1]) * D),
                (m += (q.b = T = O[g + 2]) * D),
                (x += (q.a = V = O[g + 3]) * D),
                (P += E),
                (R += M),
                (A += T),
                (C += V),
                (q = q.next),
                f < B && (y += n);
            for (g = c, G = j, $ = L, l = 0; l < o; l++)
              (O[(h = g << 2) + 3] = V = (x * _) >> W),
                V > 0
                  ? ((V = 255 / V),
                    (O[h] = ((d * _) >> W) * V),
                    (O[h + 1] = ((v * _) >> W) * V),
                    (O[h + 2] = ((m * _) >> W) * V))
                  : (O[h] = O[h + 1] = O[h + 2] = 0),
                (d -= b),
                (v -= w),
                (m -= k),
                (x -= S),
                (b -= G.r),
                (w -= G.g),
                (k -= G.b),
                (S -= G.a),
                (h = (c + ((h = l + F) < B ? h : B) * n) << 2),
                (d += P += G.r = O[h]),
                (v += R += G.g = O[h + 1]),
                (m += A += G.b = O[h + 2]),
                (x += C += G.a = O[h + 3]),
                (G = G.next),
                (b += E = $.r),
                (w += M = $.g),
                (k += T = $.b),
                (S += V = $.a),
                (P -= E),
                (R -= M),
                (A -= T),
                (C -= V),
                ($ = $.next),
                (g += n);
          }
          return t;
        })(l, 0, 0, n, u, c)),
          t.getContext('2d').putImageData(l, e, r);
      }
    }
    var s = function t() {
      !(function(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, t),
        (this.r = 0),
        (this.g = 0),
        (this.b = 0),
        (this.a = 0),
        (this.next = null);
    };
  },
  '4E4r': function(t, e) {
    t.exports = function(t) {
      (this.ok = !1),
        (this.alpha = 1),
        '#' == t.charAt(0) && (t = t.substr(1, 6)),
        (t = (t = t.replace(/ /g, '')).toLowerCase());
      var e = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
      };
      t = e[t] || t;
      for (
        var r = [
            {
              re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
              example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
              process: function(t) {
                return [
                  parseInt(t[1]),
                  parseInt(t[2]),
                  parseInt(t[3]),
                  parseFloat(t[4])
                ];
              }
            },
            {
              re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
              example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
              process: function(t) {
                return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
              }
            },
            {
              re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
              example: ['#00ff00', '336699'],
              process: function(t) {
                return [
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                  parseInt(t[3], 16)
                ];
              }
            },
            {
              re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              example: ['#fb0', 'f0f'],
              process: function(t) {
                return [
                  parseInt(t[1] + t[1], 16),
                  parseInt(t[2] + t[2], 16),
                  parseInt(t[3] + t[3], 16)
                ];
              }
            }
          ],
          n = 0;
        n < r.length;
        n++
      ) {
        var i = r[n].re,
          a = r[n].process,
          o = i.exec(t);
        if (o) {
          var u = a(o);
          (this.r = u[0]),
            (this.g = u[1]),
            (this.b = u[2]),
            u.length > 3 && (this.alpha = u[3]),
            (this.ok = !0);
        }
      }
      (this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
        (this.g =
          this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
        (this.b =
          this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
        (this.alpha =
          this.alpha < 0
            ? 0
            : this.alpha > 1 || isNaN(this.alpha)
            ? 1
            : this.alpha),
        (this.toRGB = function() {
          return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
        }),
        (this.toRGBA = function() {
          return (
            'rgba(' +
            this.r +
            ', ' +
            this.g +
            ', ' +
            this.b +
            ', ' +
            this.alpha +
            ')'
          );
        }),
        (this.toHex = function() {
          var t = this.r.toString(16),
            e = this.g.toString(16),
            r = this.b.toString(16);
          return (
            1 == t.length && (t = '0' + t),
            1 == e.length && (e = '0' + e),
            1 == r.length && (r = '0' + r),
            '#' + t + e + r
          );
        }),
        (this.getHelpXML = function() {
          for (var t = new Array(), n = 0; n < r.length; n++)
            for (var i = r[n].example, a = 0; a < i.length; a++)
              t[t.length] = i[a];
          for (var o in e) t[t.length] = o;
          var u = document.createElement('ul');
          u.setAttribute('id', 'rgbcolor-examples');
          for (n = 0; n < t.length; n++)
            try {
              var s = document.createElement('li'),
                c = new RGBColor(t[n]),
                l = document.createElement('div');
              (l.style.cssText =
                'margin: 3px; border: 1px solid black; background:' +
                c.toHex() +
                '; color:' +
                c.toHex()),
                l.appendChild(document.createTextNode('test'));
              var f = document.createTextNode(
                ' ' + t[n] + ' -> ' + c.toRGB() + ' -> ' + c.toHex()
              );
              s.appendChild(l), s.appendChild(f), u.appendChild(s);
            } catch (t) {}
          return u;
        });
    };
  },
  '4WZ4': function(t, e) {
    t.exports = function(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    };
  },
  '6p/1': function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      function(t) {
        r.d(e, 'AElement', function() {
          return Ar;
        }),
          r.d(e, 'AnimateColorElement', function() {
            return lr;
          }),
          r.d(e, 'AnimateElement', function() {
            return sr;
          }),
          r.d(e, 'AnimateTransformElement', function() {
            return hr;
          }),
          r.d(e, 'BoundingBox', function() {
            return xe;
          }),
          r.d(e, 'CB1', function() {
            return jt;
          }),
          r.d(e, 'CB2', function() {
            return qt;
          }),
          r.d(e, 'CB3', function() {
            return Gt;
          }),
          r.d(e, 'CB4', function() {
            return $t;
          }),
          r.d(e, 'Canvg', function() {
            return mn;
          }),
          r.d(e, 'CircleElement', function() {
            return ze;
          }),
          r.d(e, 'ClipPathElement', function() {
            return Qr;
          }),
          r.d(e, 'DefsElement', function() {
            return Qe;
          }),
          r.d(e, 'DescElement', function() {
            return fn;
          }),
          r.d(e, 'Document', function() {
            return pn;
          }),
          r.d(e, 'Element', function() {
            return ge;
          }),
          r.d(e, 'EllipseElement', function() {
            return Fe;
          }),
          r.d(e, 'FeColorMatrixElement', function() {
            return Wr;
          }),
          r.d(e, 'FeCompositeElement', function() {
            return an;
          }),
          r.d(e, 'FeDropShadowElement', function() {
            return tn;
          }),
          r.d(e, 'FeGaussianBlurElement', function() {
            return un;
          }),
          r.d(e, 'FeMorphologyElement', function() {
            return rn;
          }),
          r.d(e, 'FilterElement', function() {
            return Kr;
          }),
          r.d(e, 'Font', function() {
            return me;
          }),
          r.d(e, 'FontElement', function() {
            return dr;
          }),
          r.d(e, 'FontFaceElement', function() {
            return mr;
          }),
          r.d(e, 'GElement', function() {
            return Ke;
          }),
          r.d(e, 'GlyphElement', function() {
            return kr;
          }),
          r.d(e, 'GradientElement', function() {
            return tr;
          }),
          r.d(e, 'ImageElement', function() {
            return Dr;
          }),
          r.d(e, 'LineElement', function() {
            return je;
          }),
          r.d(e, 'LinearGradientElement', function() {
            return rr;
          }),
          r.d(e, 'MarkerElement', function() {
            return Ue;
          }),
          r.d(e, 'MaskElement', function() {
            return Hr;
          }),
          r.d(e, 'Matrix', function() {
            return oe;
          }),
          r.d(e, 'MissingGlyphElement', function() {
            return br;
          }),
          r.d(e, 'Mouse', function() {
            return Qt;
          }),
          r.d(e, 'PSEUDO_ZERO', function() {
            return zt;
          }),
          r.d(e, 'Parser', function() {
            return re;
          }),
          r.d(e, 'PathElement', function() {
            return Te;
          }),
          r.d(e, 'PathParser', function() {
            return Ee;
          }),
          r.d(e, 'PatternElement', function() {
            return Xe;
          }),
          r.d(e, 'Point', function() {
            return Yt;
          }),
          r.d(e, 'PolygonElement', function() {
            return _e;
          }),
          r.d(e, 'PolylineElement', function() {
            return Ge;
          }),
          r.d(e, 'Property', function() {
            return Ht;
          }),
          r.d(e, 'QB1', function() {
            return _t;
          }),
          r.d(e, 'QB2', function() {
            return Wt;
          }),
          r.d(e, 'QB3', function() {
            return Xt;
          }),
          r.d(e, 'RadialGradientElement', function() {
            return ir;
          }),
          r.d(e, 'RectElement', function() {
            return Oe;
          }),
          r.d(e, 'RenderedElement', function() {
            return we;
          }),
          r.d(e, 'Rotate', function() {
            return ie;
          }),
          r.d(e, 'SVGElement', function() {
            return De;
          }),
          r.d(e, 'SVGFontLoader', function() {
            return Nr;
          }),
          r.d(e, 'Scale', function() {
            return ae;
          }),
          r.d(e, 'Screen', function() {
            return Jt;
          }),
          r.d(e, 'Skew', function() {
            return se;
          }),
          r.d(e, 'SkewX', function() {
            return le;
          }),
          r.d(e, 'SkewY', function() {
            return he;
          }),
          r.d(e, 'StopElement', function() {
            return or;
          }),
          r.d(e, 'StyleElement', function() {
            return Br;
          }),
          r.d(e, 'SymbolElement', function() {
            return Or;
          }),
          r.d(e, 'TRefElement', function() {
            return Pr;
          }),
          r.d(e, 'TSpanElement', function() {
            return Re;
          }),
          r.d(e, 'TextElement', function() {
            return Se;
          }),
          r.d(e, 'TextPathElement', function() {
            return Tr;
          }),
          r.d(e, 'TitleElement', function() {
            return cn;
          }),
          r.d(e, 'Transform', function() {
            return ye;
          }),
          r.d(e, 'Translate', function() {
            return ne;
          }),
          r.d(e, 'UnknownElement', function() {
            return de;
          }),
          r.d(e, 'UseElement', function() {
            return Ir;
          }),
          r.d(e, 'ViewPort', function() {
            return Ut;
          }),
          r.d(e, 'compressSpaces', function() {
            return xt;
          }),
          r.d(e, 'getSelectorSpecificity', function() {
            return Nt;
          }),
          r.d(e, 'normalizeAttributeName', function() {
            return Pt;
          }),
          r.d(e, 'normalizeColor', function() {
            return At;
          }),
          r.d(e, 'parseExternalUrl', function() {
            return Rt;
          }),
          r.d(e, 'presets', function() {
            return xn;
          }),
          r.d(e, 'toNumbers', function() {
            return kt;
          }),
          r.d(e, 'trimLeft', function() {
            return bt;
          }),
          r.d(e, 'trimRight', function() {
            return wt;
          }),
          r.d(e, 'vectorMagnitude', function() {
            return Bt;
          }),
          r.d(e, 'vectorsAngle', function() {
            return It;
          }),
          r.d(e, 'vectorsRatio', function() {
            return Ft;
          });
        var n = r('Q0ab'),
          i = (r.n(n), r('1M4z')),
          a = (r.n(i), r('FE89')),
          o = (r.n(a), r('3Z2E')),
          u = (r.n(o), r('flUP')),
          s = (r.n(u), r('+Pwd')),
          c = (r.n(s), r('MGDH')),
          l = r.n(c),
          f = r('Vwc7'),
          h = (r.n(f), r('6Ah2')),
          y = (r.n(h), r('8xQt')),
          g = (r.n(y), r('LoW2')),
          p = (r.n(g), r('g3YV')),
          d = (r.n(p), r('jmmR')),
          v = (r.n(d), r('gaw2')),
          m = (r.n(v), r('FOhS')),
          x = r.n(m),
          b = r('Gd1W'),
          w = r.n(b),
          k = r('l3u9'),
          S = r.n(k),
          P = r('v2Fs'),
          R = r.n(P),
          A = r('gqWF'),
          C = r.n(A),
          E = r('xv7a'),
          M = (r.n(E), r('LPN9')),
          T = (r.n(M), r('FL8s')),
          V = (r.n(T), r('ywzu')),
          D = (r.n(V), r('MC1b')),
          L = (r.n(D), r('OhoW')),
          O = (r.n(L), r('kdhv')),
          N = r.n(O),
          z = r('DDWt'),
          B = (r.n(z), r('4E4r')),
          F = r.n(B),
          I = r('f3Fu'),
          j = (r.n(I), r('8Cf/')),
          q = (r.n(j), r('eYbk')),
          G = r.n(q),
          $ = r('RXKi'),
          _ = r.n($),
          W = r('QUJ4'),
          X = r.n(W),
          H = r('5tyj'),
          U = (r.n(H), r('nK49')),
          Y = (r.n(U), r('lL3t')),
          Q = (r.n(Y), r('1t1Z')),
          Z = (r.n(Q), r('sSOU')),
          K = (r.n(Z), r('kZk/')),
          J = (r.n(K), r('S9/t')),
          tt = r.n(J),
          et = r('lPoY'),
          rt = (r.n(et), r('lm74')),
          nt = (r.n(rt), r('GUmJ')),
          it = r.n(nt),
          at = r('3mR7'),
          ot = (r.n(at), r('tCdX')),
          ut = (r.n(ot), r('/SU0')),
          st = (r.n(ut), r('AKLy')),
          ct = r.n(st),
          lt = r('yBTm'),
          ft = (r.n(lt), r('Hp8y')),
          ht = (r.n(ft), r('VlLm')),
          yt = (r.n(ht), r('uAB6')),
          gt = (r.n(yt), r('Jdjl')),
          pt = (r.n(gt), r('RlUG')),
          dt = (r.n(pt), r('jViO')),
          vt = (r.n(dt), r('olmY')),
          mt = (r.n(vt), r('2gqV'));
        function xt(t) {
          return t.replace(/(?!\u3000)\s+/gm, ' ');
        }
        function bt(t) {
          return t.replace(/^[\n \t]+/, '');
        }
        function wt(t) {
          return t.replace(/[\n \t]+$/, '');
        }
        function kt(t) {
          return (
            (t || '').match(
              /-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm
            ) || []
          ).map(parseFloat);
        }
        var St = /^[A-Z-]+$/;
        function Pt(t) {
          return St.test(t) ? t.toLowerCase() : t;
        }
        function Rt(t) {
          var e = t.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || [];
          return e[2] || e[3] || e[4];
        }
        function At(t) {
          if (!t.startsWith('rgb')) return t;
          var e = 3;
          return t.replace(/\d+(\.\d+)?/g, function(t, r) {
            return e-- && r ? String(Math.round(parseFloat(t))) : t;
          });
        }
        var Ct = /(\[[^\]]+\])/g,
          Et = /(#[^\s\+>~\.\[:]+)/g,
          Mt = /(\.[^\s\+>~\.\[:]+)/g,
          Tt = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
          Vt = /(:[\w-]+\([^\)]*\))/gi,
          Dt = /(:[^\s\+>~\.\[:]+)/g,
          Lt = /([^\s\+>~\.\[:]+)/g;
        function Ot(t, e) {
          var r = t.match(e);
          return r ? [t.replace(e, ' '), r.length] : [t, 0];
        }
        function Nt(t) {
          var e = [0, 0, 0],
            r = t
              .replace(/:not\(([^\)]*)\)/g, '     $1 ')
              .replace(/{[\s\S]*/gm, ' '),
            n = 0,
            i = Ot(r, Ct),
            a = l()(i, 2);
          (r = a[0]), (n = a[1]), (e[1] += n);
          var o = Ot(r, Et),
            u = l()(o, 2);
          (r = u[0]), (n = u[1]), (e[0] += n);
          var s = Ot(r, Mt),
            c = l()(s, 2);
          (r = c[0]), (n = c[1]), (e[1] += n);
          var f = Ot(r, Tt),
            h = l()(f, 2);
          (r = h[0]), (n = h[1]), (e[2] += n);
          var y = Ot(r, Vt),
            g = l()(y, 2);
          (r = g[0]), (n = g[1]), (e[1] += n);
          var p = Ot(r, Dt),
            d = l()(p, 2);
          (r = d[0]), (n = d[1]), (e[1] += n);
          var v = Ot(
              (r = r.replace(/[\*\s\+>~]/g, ' ').replace(/[#\.]/g, ' ')),
              Lt
            ),
            m = l()(v, 2);
          return (r = m[0]), (n = m[1]), (e[2] += n), e.join('');
        }
        var zt = 1e-8;
        function Bt(t) {
          return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
        }
        function Ft(t, e) {
          return (t[0] * e[0] + t[1] * e[1]) / (Bt(t) * Bt(e));
        }
        function It(t, e) {
          return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Ft(t, e));
        }
        function jt(t) {
          return t * t * t;
        }
        function qt(t) {
          return 3 * t * t * (1 - t);
        }
        function Gt(t) {
          return 3 * t * (1 - t) * (1 - t);
        }
        function $t(t) {
          return (1 - t) * (1 - t) * (1 - t);
        }
        function _t(t) {
          return t * t;
        }
        function Wt(t) {
          return 2 * t * (1 - t);
        }
        function Xt(t) {
          return (1 - t) * (1 - t);
        }
        !(function(t, e) {
          t((e = { exports: {} }), e.exports);
        })(function(t) {
          var e = (function(t) {
            var e,
              r = Object.prototype,
              n = r.hasOwnProperty,
              i = 'function' == typeof Symbol ? Symbol : {},
              a = i.iterator || '@@iterator',
              o = i.asyncIterator || '@@asyncIterator',
              u = i.toStringTag || '@@toStringTag';
            function s(t, e, r, n) {
              var i = e && e.prototype instanceof p ? e : p,
                a = Object.create(i.prototype),
                o = new C(n || []);
              return (
                (a._invoke = (function(t, e, r) {
                  var n = l;
                  return function(i, a) {
                    if (n === h)
                      throw new Error('Generator is already running');
                    if (n === y) {
                      if ('throw' === i) throw a;
                      return M();
                    }
                    for (r.method = i, r.arg = a; ; ) {
                      var o = r.delegate;
                      if (o) {
                        var u = P(o, r);
                        if (u) {
                          if (u === g) continue;
                          return u;
                        }
                      }
                      if ('next' === r.method) r.sent = r._sent = r.arg;
                      else if ('throw' === r.method) {
                        if (n === l) throw ((n = y), r.arg);
                        r.dispatchException(r.arg);
                      } else 'return' === r.method && r.abrupt('return', r.arg);
                      n = h;
                      var s = c(t, e, r);
                      if ('normal' === s.type) {
                        if (((n = r.done ? y : f), s.arg === g)) continue;
                        return { value: s.arg, done: r.done };
                      }
                      'throw' === s.type &&
                        ((n = y), (r.method = 'throw'), (r.arg = s.arg));
                    }
                  };
                })(t, r, o)),
                a
              );
            }
            function c(t, e, r) {
              try {
                return { type: 'normal', arg: t.call(e, r) };
              } catch (t) {
                return { type: 'throw', arg: t };
              }
            }
            t.wrap = s;
            var l = 'suspendedStart',
              f = 'suspendedYield',
              h = 'executing',
              y = 'completed',
              g = {};
            function p() {}
            function d() {}
            function v() {}
            var m = {};
            m[a] = function() {
              return this;
            };
            var x = Object.getPrototypeOf,
              b = x && x(x(E([])));
            b && b !== r && n.call(b, a) && (m = b);
            var w = (v.prototype = p.prototype = Object.create(m));
            function k(t) {
              ['next', 'throw', 'return'].forEach(function(e) {
                t[e] = function(t) {
                  return this._invoke(e, t);
                };
              });
            }
            function S(t, e) {
              var r;
              this._invoke = function(i, a) {
                function o() {
                  return new e(function(r, o) {
                    !(function r(i, a, o, u) {
                      var s = c(t[i], t, a);
                      if ('throw' !== s.type) {
                        var l = s.arg,
                          f = l.value;
                        return f && 'object' == typeof f && n.call(f, '__await')
                          ? e.resolve(f.__await).then(
                              function(t) {
                                r('next', t, o, u);
                              },
                              function(t) {
                                r('throw', t, o, u);
                              }
                            )
                          : e.resolve(f).then(
                              function(t) {
                                (l.value = t), o(l);
                              },
                              function(t) {
                                return r('throw', t, o, u);
                              }
                            );
                      }
                      u(s.arg);
                    })(i, a, r, o);
                  });
                }
                return (r = r ? r.then(o, o) : o());
              };
            }
            function P(t, r) {
              var n = t.iterator[r.method];
              if (n === e) {
                if (((r.delegate = null), 'throw' === r.method)) {
                  if (
                    t.iterator.return &&
                    ((r.method = 'return'),
                    (r.arg = e),
                    P(t, r),
                    'throw' === r.method)
                  )
                    return g;
                  (r.method = 'throw'),
                    (r.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return g;
              }
              var i = c(n, t.iterator, r.arg);
              if ('throw' === i.type)
                return (
                  (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), g
                );
              var a = i.arg;
              return a
                ? a.done
                  ? ((r[t.resultName] = a.value),
                    (r.next = t.nextLoc),
                    'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                    (r.delegate = null),
                    g)
                  : a
                : ((r.method = 'throw'),
                  (r.arg = new TypeError('iterator result is not an object')),
                  (r.delegate = null),
                  g);
            }
            function R(t) {
              var e = { tryLoc: t[0] };
              1 in t && (e.catchLoc = t[1]),
                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                this.tryEntries.push(e);
            }
            function A(t) {
              var e = t.completion || {};
              (e.type = 'normal'), delete e.arg, (t.completion = e);
            }
            function C(t) {
              (this.tryEntries = [{ tryLoc: 'root' }]),
                t.forEach(R, this),
                this.reset(!0);
            }
            function E(t) {
              if (t) {
                var r = t[a];
                if (r) return r.call(t);
                if ('function' == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var i = -1,
                    o = function r() {
                      for (; ++i < t.length; )
                        if (n.call(t, i))
                          return (r.value = t[i]), (r.done = !1), r;
                      return (r.value = e), (r.done = !0), r;
                    };
                  return (o.next = o);
                }
              }
              return { next: M };
            }
            function M() {
              return { value: e, done: !0 };
            }
            return (
              (d.prototype = w.constructor = v),
              (v.constructor = d),
              (v[u] = d.displayName = 'GeneratorFunction'),
              (t.isGeneratorFunction = function(t) {
                var e = 'function' == typeof t && t.constructor;
                return (
                  !!e &&
                  (e === d || 'GeneratorFunction' === (e.displayName || e.name))
                );
              }),
              (t.mark = function(t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, v)
                    : ((t.__proto__ = v),
                      u in t || (t[u] = 'GeneratorFunction')),
                  (t.prototype = Object.create(w)),
                  t
                );
              }),
              (t.awrap = function(t) {
                return { __await: t };
              }),
              k(S.prototype),
              (S.prototype[o] = function() {
                return this;
              }),
              (t.AsyncIterator = S),
              (t.async = function(e, r, n, i, a) {
                void 0 === a && (a = Promise);
                var o = new S(s(e, r, n, i), a);
                return t.isGeneratorFunction(r)
                  ? o
                  : o.next().then(function(t) {
                      return t.done ? t.value : o.next();
                    });
              }),
              k(w),
              (w[u] = 'Generator'),
              (w[a] = function() {
                return this;
              }),
              (w.toString = function() {
                return '[object Generator]';
              }),
              (t.keys = function(t) {
                var e = [];
                for (var r in t) e.push(r);
                return (
                  e.reverse(),
                  function r() {
                    for (; e.length; ) {
                      var n = e.pop();
                      if (n in t) return (r.value = n), (r.done = !1), r;
                    }
                    return (r.done = !0), r;
                  }
                );
              }),
              (t.values = E),
              (C.prototype = {
                constructor: C,
                reset: function(t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = e),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = e),
                    this.tryEntries.forEach(A),
                    !t)
                  )
                    for (var r in this)
                      't' === r.charAt(0) &&
                        n.call(this, r) &&
                        !isNaN(+r.slice(1)) &&
                        (this[r] = e);
                },
                stop: function() {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ('throw' === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function(t) {
                  if (this.done) throw t;
                  var r = this;
                  function i(n, i) {
                    return (
                      (u.type = 'throw'),
                      (u.arg = t),
                      (r.next = n),
                      i && ((r.method = 'next'), (r.arg = e)),
                      !!i
                    );
                  }
                  for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a],
                      u = o.completion;
                    if ('root' === o.tryLoc) return i('end');
                    if (o.tryLoc <= this.prev) {
                      var s = n.call(o, 'catchLoc'),
                        c = n.call(o, 'finallyLoc');
                      if (s && c) {
                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                      } else if (s) {
                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                      } else {
                        if (!c)
                          throw new Error(
                            'try statement without catch or finally'
                          );
                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function(t, e) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r];
                    if (
                      i.tryLoc <= this.prev &&
                      n.call(i, 'finallyLoc') &&
                      this.prev < i.finallyLoc
                    ) {
                      var a = i;
                      break;
                    }
                  }
                  a &&
                    ('break' === t || 'continue' === t) &&
                    a.tryLoc <= e &&
                    e <= a.finallyLoc &&
                    (a = null);
                  var o = a ? a.completion : {};
                  return (
                    (o.type = t),
                    (o.arg = e),
                    a
                      ? ((this.method = 'next'), (this.next = a.finallyLoc), g)
                      : this.complete(o)
                  );
                },
                complete: function(t, e) {
                  if ('throw' === t.type) throw t.arg;
                  return (
                    'break' === t.type || 'continue' === t.type
                      ? (this.next = t.arg)
                      : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                    g
                  );
                },
                finish: function(t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t)
                      return this.complete(r.completion, r.afterLoc), A(r), g;
                  }
                },
                catch: function(t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                      var n = r.completion;
                      if ('throw' === n.type) {
                        var i = n.arg;
                        A(r);
                      }
                      return i;
                    }
                  }
                  throw new Error('illegal catch attempt');
                },
                delegateYield: function(t, r, n) {
                  return (
                    (this.delegate = {
                      iterator: E(t),
                      resultName: r,
                      nextLoc: n
                    }),
                    'next' === this.method && (this.arg = e),
                    g
                  );
                }
              }),
              t
            );
          })(t.exports);
          try {
            regeneratorRuntime = e;
          } catch (t) {
            Function('r', 'regeneratorRuntime = r')(e);
          }
        });
        var Ht = (function() {
          function t(e, r, n) {
            R()(this, t),
              (this.document = e),
              (this.name = r),
              (this.value = n),
              (this.isNormalizedColor = !1);
          }
          return (
            C()(
              t,
              [
                {
                  key: 'hasValue',
                  value: function() {
                    var t = this.value;
                    return null !== t && '' !== t && 0 !== t && void 0 !== t;
                  }
                },
                {
                  key: 'isString',
                  value: function(t) {
                    var e = this.value,
                      r = 'string' == typeof e;
                    return r && t ? t.test(e) : r;
                  }
                },
                {
                  key: 'isUrlDefinition',
                  value: function() {
                    return this.isString(/^url\(/);
                  }
                },
                {
                  key: 'isPixels',
                  value: function() {
                    if (!this.hasValue()) return !1;
                    var t = this.getString();
                    switch (!0) {
                      case /px$/.test(t):
                      case /^[0-9]+$/.test(t):
                        return !0;
                      default:
                        return !1;
                    }
                  }
                },
                {
                  key: 'setValue',
                  value: function(t) {
                    return (this.value = t), this;
                  }
                },
                {
                  key: 'getValue',
                  value: function(t) {
                    return void 0 === t || this.hasValue() ? this.value : t;
                  }
                },
                {
                  key: 'getNumber',
                  value: function(t) {
                    if (!this.hasValue())
                      return void 0 === t ? 0 : parseFloat(t);
                    var e = this.value,
                      r = parseFloat(e);
                    return this.isString(/%$/) && (r /= 100), r;
                  }
                },
                {
                  key: 'getString',
                  value: function(t) {
                    return void 0 === t || this.hasValue()
                      ? void 0 === this.value
                        ? ''
                        : String(this.value)
                      : String(t);
                  }
                },
                {
                  key: 'getColor',
                  value: function(t) {
                    var e = this.getString(t);
                    return this.isNormalizedColor
                      ? e
                      : ((this.isNormalizedColor = !0),
                        (e = At(e)),
                        (this.value = e),
                        e);
                  }
                },
                {
                  key: 'getDpi',
                  value: function() {
                    return 96;
                  }
                },
                {
                  key: 'getRem',
                  value: function() {
                    return this.document.rootEmSize;
                  }
                },
                {
                  key: 'getEm',
                  value: function() {
                    return this.document.emSize;
                  }
                },
                {
                  key: 'getUnits',
                  value: function() {
                    return this.getString().replace(/[0-9\.\-]/g, '');
                  }
                },
                {
                  key: 'getPixels',
                  value: function(t) {
                    var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (!this.hasValue()) return 0;
                    var r = 'boolean' == typeof t ? [void 0, t] : [t],
                      n = l()(r, 2),
                      i = n[0],
                      a = n[1],
                      o = this.document.screen.viewPort;
                    switch (!0) {
                      case this.isString(/vmin$/):
                        return (
                          (this.getNumber() / 100) *
                          Math.min(o.computeSize('x'), o.computeSize('y'))
                        );
                      case this.isString(/vmax$/):
                        return (
                          (this.getNumber() / 100) *
                          Math.max(o.computeSize('x'), o.computeSize('y'))
                        );
                      case this.isString(/vw$/):
                        return (this.getNumber() / 100) * o.computeSize('x');
                      case this.isString(/vh$/):
                        return (this.getNumber() / 100) * o.computeSize('y');
                      case this.isString(/rem$/):
                        return this.getNumber() * this.getRem();
                      case this.isString(/em$/):
                        return this.getNumber() * this.getEm();
                      case this.isString(/ex$/):
                        return (this.getNumber() * this.getEm()) / 2;
                      case this.isString(/px$/):
                        return this.getNumber();
                      case this.isString(/pt$/):
                        return this.getNumber() * this.getDpi() * (1 / 72);
                      case this.isString(/pc$/):
                        return 15 * this.getNumber();
                      case this.isString(/cm$/):
                        return (this.getNumber() * this.getDpi()) / 2.54;
                      case this.isString(/mm$/):
                        return (this.getNumber() * this.getDpi()) / 25.4;
                      case this.isString(/in$/):
                        return this.getNumber() * this.getDpi();
                      case this.isString(/%$/) && a:
                        return this.getNumber() * this.getEm();
                      case this.isString(/%$/):
                        return this.getNumber() * o.computeSize(i);
                      default:
                        var u = this.getNumber();
                        return e && u < 1 ? u * o.computeSize(i) : u;
                    }
                  }
                },
                {
                  key: 'getMilliseconds',
                  value: function() {
                    return this.hasValue()
                      ? this.isString(/ms$/)
                        ? this.getNumber()
                        : 1e3 * this.getNumber()
                      : 0;
                  }
                },
                {
                  key: 'getRadians',
                  value: function() {
                    if (!this.hasValue()) return 0;
                    switch (!0) {
                      case this.isString(/deg$/):
                        return this.getNumber() * (Math.PI / 180);
                      case this.isString(/grad$/):
                        return this.getNumber() * (Math.PI / 200);
                      case this.isString(/rad$/):
                        return this.getNumber();
                      default:
                        return this.getNumber() * (Math.PI / 180);
                    }
                  }
                },
                {
                  key: 'getDefinition',
                  value: function() {
                    var t = this.getString(),
                      e = t.match(/#([^\)'"]+)/);
                    return (
                      e && (e = e[1]),
                      e || (e = t),
                      this.document.definitions[e]
                    );
                  }
                },
                {
                  key: 'getFillStyleDefinition',
                  value: function(t, e) {
                    var r = this.getDefinition();
                    if (!r) return null;
                    if ('function' == typeof r.createGradient)
                      return r.createGradient(this.document.ctx, t, e);
                    if ('function' == typeof r.createPattern) {
                      if (r.getHrefAttribute().hasValue()) {
                        var n = r.getAttribute('patternTransform');
                        (r = r.getHrefAttribute().getDefinition()),
                          n.hasValue() &&
                            r
                              .getAttribute('patternTransform', !0)
                              .setValue(n.value);
                      }
                      return r.createPattern(this.document.ctx, t, e);
                    }
                    return null;
                  }
                },
                {
                  key: 'getTextBaseline',
                  value: function() {
                    return this.hasValue()
                      ? t.textBaselineMapping[this.getString()]
                      : null;
                  }
                },
                {
                  key: 'addOpacity',
                  value: function(e) {
                    for (
                      var r = this.getColor(), n = r.length, i = 0, a = 0;
                      a < n && (',' === r[a] && i++, 3 !== i);
                      a++
                    );
                    if (e.hasValue() && this.isString() && 3 !== i) {
                      var o = new F.a(r);
                      o.ok && ((o.alpha = e.getNumber()), (r = o.toRGBA()));
                    }
                    return new t(this.document, this.name, r);
                  }
                }
              ],
              [
                {
                  key: 'empty',
                  value: function(e) {
                    return new t(e, 'EMPTY', '');
                  }
                }
              ]
            ),
            t
          );
        })();
        Ht.textBaselineMapping = {
          baseline: 'alphabetic',
          'before-edge': 'top',
          'text-before-edge': 'top',
          middle: 'middle',
          central: 'middle',
          'after-edge': 'bottom',
          'text-after-edge': 'bottom',
          ideographic: 'ideographic',
          alphabetic: 'alphabetic',
          hanging: 'hanging',
          mathematical: 'alphabetic'
        };
        var Ut = (function() {
            function t() {
              R()(this, t), (this.viewPorts = []);
            }
            return (
              C()(t, [
                {
                  key: 'clear',
                  value: function() {
                    this.viewPorts = [];
                  }
                },
                {
                  key: 'setCurrent',
                  value: function(t, e) {
                    this.viewPorts.push({ width: t, height: e });
                  }
                },
                {
                  key: 'removeCurrent',
                  value: function() {
                    this.viewPorts.pop();
                  }
                },
                {
                  key: 'getCurrent',
                  value: function() {
                    var t = this.viewPorts;
                    return t[t.length - 1];
                  }
                },
                {
                  key: 'computeSize',
                  value: function(t) {
                    return 'number' == typeof t
                      ? t
                      : 'x' === t
                      ? this.width
                      : 'y' === t
                      ? this.height
                      : Math.sqrt(
                          Math.pow(this.width, 2) + Math.pow(this.height, 2)
                        ) / Math.sqrt(2);
                  }
                },
                {
                  key: 'width',
                  get: function() {
                    return this.getCurrent().width;
                  }
                },
                {
                  key: 'height',
                  get: function() {
                    return this.getCurrent().height;
                  }
                }
              ]),
              t
            );
          })(),
          Yt = (function() {
            function t(e, r) {
              R()(this, t), (this.x = e), (this.y = r);
            }
            return (
              C()(
                t,
                [
                  {
                    key: 'angleTo',
                    value: function(t) {
                      return Math.atan2(t.y - this.y, t.x - this.x);
                    }
                  },
                  {
                    key: 'applyTransform',
                    value: function(t) {
                      var e = this.x,
                        r = this.y,
                        n = e * t[0] + r * t[2] + t[4],
                        i = e * t[1] + r * t[3] + t[5];
                      (this.x = n), (this.y = i);
                    }
                  }
                ],
                [
                  {
                    key: 'parse',
                    value: function(e) {
                      var r =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n = kt(e),
                        i = l()(n, 2),
                        a = i[0],
                        o = void 0 === a ? r : a,
                        u = i[1];
                      return new t(o, void 0 === u ? r : u);
                    }
                  },
                  {
                    key: 'parseScale',
                    value: function(e) {
                      var r =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 1,
                        n = kt(e),
                        i = l()(n, 2),
                        a = i[0],
                        o = void 0 === a ? r : a,
                        u = i[1];
                      return new t(o, void 0 === u ? o : u);
                    }
                  },
                  {
                    key: 'parsePath',
                    value: function(e) {
                      for (
                        var r = kt(e), n = r.length, i = [], a = 0;
                        a < n;
                        a += 2
                      )
                        i.push(new t(r[a], r[a + 1]));
                      return i;
                    }
                  }
                ]
              ),
              t
            );
          })(),
          Qt = (function() {
            function t(e) {
              R()(this, t),
                (this.screen = e),
                (this.working = !1),
                (this.events = []),
                (this.eventElements = []),
                (this.onClick = this.onClick.bind(this)),
                (this.onMouseMove = this.onMouseMove.bind(this));
            }
            return (
              C()(t, [
                {
                  key: 'isWorking',
                  value: function() {
                    return this.working;
                  }
                },
                {
                  key: 'start',
                  value: function() {
                    if (!this.working) {
                      var t = this.screen,
                        e = this.onClick,
                        r = this.onMouseMove,
                        n = t.ctx.canvas;
                      (n.onclick = e), (n.onmousemove = r), (this.working = !0);
                    }
                  }
                },
                {
                  key: 'stop',
                  value: function() {
                    if (this.working) {
                      var t = this.screen.ctx.canvas;
                      (this.working = !1),
                        (t.onclick = null),
                        (t.onmousemove = null);
                    }
                  }
                },
                {
                  key: 'hasEvents',
                  value: function() {
                    return this.working && this.events.length > 0;
                  }
                },
                {
                  key: 'runEvents',
                  value: function() {
                    if (this.working) {
                      var t = this.screen,
                        e = this.events,
                        r = this.eventElements,
                        n = t.ctx.canvas.style;
                      n && (n.cursor = ''),
                        e.forEach(function(t, e) {
                          for (var n = t.run, i = r[e]; i; )
                            n(i), (i = i.parent);
                        }),
                        (this.events = []),
                        (this.eventElements = []);
                    }
                  }
                },
                {
                  key: 'checkPath',
                  value: function(t, e) {
                    if (this.working && e) {
                      var r = this.events,
                        n = this.eventElements;
                      r.forEach(function(r, i) {
                        var a = r.x,
                          o = r.y;
                        !n[i] &&
                          e.isPointInPath &&
                          e.isPointInPath(a, o) &&
                          (n[i] = t);
                      });
                    }
                  }
                },
                {
                  key: 'checkBoundingBox',
                  value: function(t, e) {
                    if (this.working && e) {
                      var r = this.events,
                        n = this.eventElements;
                      r.forEach(function(r, i) {
                        var a = r.x,
                          o = r.y;
                        !n[i] && e.isPointInBox(a, o) && (n[i] = t);
                      });
                    }
                  }
                },
                {
                  key: 'mapXY',
                  value: function(t, e) {
                    for (
                      var r = this.screen,
                        n = r.window,
                        i = r.ctx,
                        a = new Yt(t, e),
                        o = i.canvas;
                      o;

                    )
                      (a.x -= o.offsetLeft),
                        (a.y -= o.offsetTop),
                        (o = o.offsetParent);
                    return (
                      n.scrollX && (a.x += n.scrollX),
                      n.scrollY && (a.y += n.scrollY),
                      a
                    );
                  }
                },
                {
                  key: 'onClick',
                  value: function(t) {
                    var e = this.mapXY(
                        (t || event).clientX,
                        (t || event).clientY
                      ),
                      r = e.x,
                      n = e.y;
                    this.events.push({
                      type: 'onclick',
                      x: r,
                      y: n,
                      run: function(t) {
                        t.onClick && t.onClick();
                      }
                    });
                  }
                },
                {
                  key: 'onMouseMove',
                  value: function(t) {
                    var e = this.mapXY(
                        (t || event).clientX,
                        (t || event).clientY
                      ),
                      r = e.x,
                      n = e.y;
                    this.events.push({
                      type: 'onmousemove',
                      x: r,
                      y: n,
                      run: function(t) {
                        t.onMouseMove && t.onMouseMove();
                      }
                    });
                  }
                }
              ]),
              t
            );
          })(),
          Zt = 'undefined' != typeof window ? window : null,
          Kt = 'undefined' != typeof fetch ? fetch.bind(void 0) : null,
          Jt = (function() {
            function t(e) {
              var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = r.fetch,
                i = void 0 === n ? Kt : n,
                a = r.window,
                o = void 0 === a ? Zt : a;
              R()(this, t),
                (this.ctx = e),
                (this.FRAMERATE = 30),
                (this.MAX_VIRTUAL_PIXELS = 3e4),
                (this.CLIENT_WIDTH = 800),
                (this.CLIENT_HEIGHT = 600),
                (this.viewPort = new Ut()),
                (this.mouse = new Qt(this)),
                (this.animations = []),
                (this.waits = []),
                (this.frameDuration = 0),
                (this.isReadyLock = !1),
                (this.isFirstRender = !0),
                (this.intervalId = null),
                (this.window = o),
                (this.fetch = i);
            }
            return (
              C()(t, [
                {
                  key: 'wait',
                  value: function(t) {
                    this.waits.push(t);
                  }
                },
                {
                  key: 'ready',
                  value: function() {
                    return this.readyPromise
                      ? this.readyPromise
                      : Promise.resolve();
                  }
                },
                {
                  key: 'isReady',
                  value: function() {
                    if (this.isReadyLock) return !0;
                    var t = this.waits.every(function(t) {
                      return t();
                    });
                    return (
                      t &&
                        ((this.waits = []),
                        this.resolveReady && this.resolveReady()),
                      (this.isReadyLock = t),
                      t
                    );
                  }
                },
                {
                  key: 'setDefaults',
                  value: function(t) {
                    (t.strokeStyle = 'rgba(0,0,0,0)'),
                      (t.lineCap = 'butt'),
                      (t.lineJoin = 'miter'),
                      (t.miterLimit = 4);
                  }
                },
                {
                  key: 'setViewBox',
                  value: function(t) {
                    var e = t.document,
                      r = t.ctx,
                      n = t.aspectRatio,
                      i = t.width,
                      a = t.desiredWidth,
                      o = t.height,
                      u = t.desiredHeight,
                      s = t.minX,
                      c = void 0 === s ? 0 : s,
                      f = t.minY,
                      h = void 0 === f ? 0 : f,
                      y = t.refX,
                      g = t.refY,
                      p = t.clip,
                      d = void 0 !== p && p,
                      v = t.clipX,
                      m = void 0 === v ? 0 : v,
                      x = t.clipY,
                      b = void 0 === x ? 0 : x,
                      w = xt(n)
                        .replace(/^defer\s/, '')
                        .split(' '),
                      k = l()(w, 2),
                      S = k[0],
                      P = k[1],
                      R = S || 'xMidYMid',
                      A = P || 'meet',
                      C = i / a,
                      E = o / u,
                      M = Math.min(C, E),
                      T = Math.max(C, E),
                      V = a,
                      D = u;
                    'meet' === A && ((V *= M), (D *= M)),
                      'slice' === A && ((V *= T), (D *= T));
                    var L = new Ht(e, 'refX', y),
                      O = new Ht(e, 'refY', g),
                      N = L.hasValue() && O.hasValue();
                    if (
                      (N &&
                        r.translate(
                          -M * L.getPixels('x'),
                          -M * O.getPixels('y')
                        ),
                      d)
                    ) {
                      var z = M * m,
                        B = M * b;
                      r.beginPath(),
                        r.moveTo(z, B),
                        r.lineTo(i, B),
                        r.lineTo(i, o),
                        r.lineTo(z, o),
                        r.closePath(),
                        r.clip();
                    }
                    if (!N) {
                      var F = 'meet' === A && M === E,
                        I = 'slice' === A && T === E,
                        j = 'meet' === A && M === C,
                        q = 'slice' === A && T === C;
                      /^xMid/.test(R) &&
                        (F || I) &&
                        r.translate(i / 2 - V / 2, 0),
                        /YMid$/.test(R) &&
                          (j || q) &&
                          r.translate(0, o / 2 - D / 2),
                        /^xMax/.test(R) && (F || I) && r.translate(i - V, 0),
                        /YMax$/.test(R) && (j || q) && r.translate(0, o - D);
                    }
                    switch (!0) {
                      case 'none' === R:
                        r.scale(C, E);
                        break;
                      case 'meet' === A:
                        r.scale(M, M);
                        break;
                      case 'slice' === A:
                        r.scale(T, T);
                    }
                    r.translate(-c, -h);
                  }
                },
                {
                  key: 'start',
                  value: function(t) {
                    var e = this,
                      r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = r.enableRedraw,
                      i = void 0 !== n && n,
                      a = r.ignoreMouse,
                      o = void 0 !== a && a,
                      u = r.ignoreAnimation,
                      s = void 0 !== u && u,
                      c = r.ignoreDimensions,
                      l = void 0 !== c && c,
                      f = r.ignoreClear,
                      h = void 0 !== f && f,
                      y = r.forceRedraw,
                      g = r.scaleWidth,
                      p = r.scaleHeight,
                      d = r.offsetX,
                      v = r.offsetY,
                      m = this.FRAMERATE,
                      x = this.mouse,
                      b = 1e3 / m;
                    if (
                      ((this.frameDuration = b),
                      (this.readyPromise = new Promise(function(t) {
                        e.resolveReady = t;
                      })),
                      this.isReady() && this.render(t, l, h, g, p, d, v),
                      i)
                    ) {
                      var w = Date.now(),
                        k = w,
                        S = 0;
                      o || x.start(),
                        (this.intervalId = N()(function r() {
                          (w = Date.now()),
                            (S = w - k) >= b &&
                              ((k = w - (S % b)),
                              e.shouldUpdate(s, y) &&
                                (e.render(t, l, h, g, p, d, v), x.runEvents())),
                            (e.intervalId = N()(r));
                        }));
                    }
                  }
                },
                {
                  key: 'stop',
                  value: function() {
                    this.intervalId &&
                      (N.a.cancel(this.intervalId), (this.intervalId = null)),
                      this.mouse.stop();
                  }
                },
                {
                  key: 'shouldUpdate',
                  value: function(t, e) {
                    if (!t) {
                      var r = this.frameDuration,
                        n = this.animations.reduce(function(t, e) {
                          return e.update(r) || t;
                        }, !1);
                      if (n) return !0;
                    }
                    return (
                      !('function' != typeof e || !e()) ||
                      !(this.isReadyLock || !this.isReady()) ||
                      !!this.mouse.hasEvents()
                    );
                  }
                },
                {
                  key: 'render',
                  value: function(t, e, r, n, i, a, o) {
                    var u = this.CLIENT_WIDTH,
                      s = this.CLIENT_HEIGHT,
                      c = this.viewPort,
                      l = this.ctx,
                      f = this.isFirstRender,
                      h = l.canvas;
                    c.clear(),
                      h.width && h.height
                        ? c.setCurrent(h.width, h.height)
                        : c.setCurrent(u, s);
                    var y = t.getStyle('width'),
                      g = t.getStyle('height');
                    !e &&
                      (f || ('number' != typeof n && 'number' != typeof i)) &&
                      (y.hasValue() &&
                        ((h.width = y.getPixels('x')),
                        h.style && (h.style.width = ''.concat(h.width, 'px'))),
                      g.hasValue() &&
                        ((h.height = g.getPixels('y')),
                        h.style &&
                          (h.style.height = ''.concat(h.height, 'px'))));
                    var p = h.clientWidth || h.width,
                      d = h.clientHeight || h.height;
                    if (
                      (e &&
                        y.hasValue() &&
                        g.hasValue() &&
                        ((p = y.getPixels('x')), (d = g.getPixels('y'))),
                      c.setCurrent(p, d),
                      'number' == typeof a &&
                        t.getAttribute('x', !0).setValue(a),
                      'number' == typeof o &&
                        t.getAttribute('y', !0).setValue(o),
                      'number' == typeof n || 'number' == typeof i)
                    ) {
                      var v = kt(t.getAttribute('viewBox').getString()),
                        m = 0,
                        x = 0;
                      if ('number' == typeof n) {
                        var b = t.getStyle('width');
                        b.hasValue()
                          ? (m = b.getPixels('x') / n)
                          : isNaN(v[2]) || (m = v[2] / n);
                      }
                      if ('number' == typeof i) {
                        var w = t.getStyle('height');
                        w.hasValue()
                          ? (x = w.getPixels('y') / i)
                          : isNaN(v[3]) || (x = v[3] / i);
                      }
                      m || (m = x),
                        x || (x = m),
                        t.getAttribute('width', !0).setValue(n),
                        t.getAttribute('height', !0).setValue(i);
                      var k = t.getStyle('transform', !0, !0);
                      k.setValue(
                        ''
                          .concat(k.getString(), ' scale(')
                          .concat(1 / m, ', ')
                          .concat(1 / x, ')')
                      );
                    }
                    r || l.clearRect(0, 0, p, d),
                      t.render(l),
                      f && (this.isFirstRender = !1);
                  }
                }
              ]),
              t
            );
          })();
        (Jt.defaultWindow = Zt), (Jt.defaultFetch = Kt);
        var te = Jt.defaultFetch,
          ee = 'undefined' != typeof DOMParser ? DOMParser : null,
          re = (function() {
            function t() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = e.fetch,
                n = void 0 === r ? te : r,
                i = e.DOMParser,
                a = void 0 === i ? ee : i;
              R()(this, t), (this.fetch = n), (this.DOMParser = a);
            }
            return (
              C()(t, [
                {
                  key: 'parse',
                  value: (function() {
                    var t = w()(
                      x.a.mark(function t(e) {
                        return x.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!/^</.test(e)) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt(
                                    'return',
                                    this.parseFromString(e)
                                  );
                                case 2:
                                  return t.abrupt('return', this.load(e));
                                case 3:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function(e) {
                      return t.apply(this, arguments);
                    };
                  })()
                },
                {
                  key: 'parseFromString',
                  value: function(t) {
                    var e = new this.DOMParser();
                    try {
                      return this.checkDocument(
                        e.parseFromString(t, 'image/svg+xml')
                      );
                    } catch (r) {
                      return this.checkDocument(
                        e.parseFromString(t, 'text/xml')
                      );
                    }
                  }
                },
                {
                  key: 'checkDocument',
                  value: function(t) {
                    var e = t.getElementsByTagName('parsererror')[0];
                    if (e) throw new Error(e.textContent);
                    return t;
                  }
                },
                {
                  key: 'load',
                  value: (function() {
                    var t = w()(
                      x.a.mark(function t(e) {
                        var r, n;
                        return x.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.fetch(e);
                                case 2:
                                  return (r = t.sent), (t.next = 5), r.text();
                                case 5:
                                  return (
                                    (n = t.sent),
                                    t.abrupt('return', this.parseFromString(n))
                                  );
                                case 7:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function(e) {
                      return t.apply(this, arguments);
                    };
                  })()
                }
              ]),
              t
            );
          })(),
          ne = (function() {
            function t(e, r) {
              R()(this, t),
                (this.type = 'translate'),
                (this.point = null),
                (this.point = Yt.parse(r));
            }
            return (
              C()(t, [
                {
                  key: 'apply',
                  value: function(t) {
                    var e = this.point,
                      r = e.x,
                      n = e.y;
                    t.translate(r || 0, n || 0);
                  }
                },
                {
                  key: 'unapply',
                  value: function(t) {
                    var e = this.point,
                      r = e.x,
                      n = e.y;
                    t.translate(-1 * r || 0, -1 * n || 0);
                  }
                },
                {
                  key: 'applyToPoint',
                  value: function(t) {
                    var e = this.point,
                      r = e.x,
                      n = e.y;
                    t.applyTransform([1, 0, 0, 1, r || 0, n || 0]);
                  }
                }
              ]),
              t
            );
          })(),
          ie = (function() {
            function t(e, r) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [];
              R()(this, t),
                (this.type = 'rotate'),
                (this.angle = null),
                (this.cx = 0),
                (this.cy = 0);
              var i = kt(r);
              (this.angle = new Ht(e, 'angle', i[0])),
                (this.cx = (i[1] || 0) + (n[0] || 0)),
                (this.cy = (i[2] || 0) + (n[1] || 0));
            }
            return (
              C()(t, [
                {
                  key: 'apply',
                  value: function(t) {
                    var e = this.cx,
                      r = this.cy,
                      n = this.angle;
                    t.translate(e, r),
                      t.rotate(n.getRadians()),
                      t.translate(-e, -r);
                  }
                },
                {
                  key: 'unapply',
                  value: function(t) {
                    var e = this.cx,
                      r = this.cy,
                      n = this.angle;
                    t.translate(e, r),
                      t.rotate(-1 * n.getRadians()),
                      t.translate(-e, -r);
                  }
                },
                {
                  key: 'applyToPoint',
                  value: function(t) {
                    var e = this.cx,
                      r = this.cy,
                      n = this.angle.getRadians();
                    t.applyTransform([1, 0, 0, 1, e || 0, r || 0]),
                      t.applyTransform([
                        Math.cos(n),
                        Math.sin(n),
                        -Math.sin(n),
                        Math.cos(n),
                        0,
                        0
                      ]),
                      t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0]);
                  }
                }
              ]),
              t
            );
          })(),
          ae = (function() {
            function t(e, r) {
              R()(this, t), (this.type = 'scale'), (this.scale = null);
              var n = Yt.parseScale(r);
              (0 !== n.x && 0 !== n.y) || ((n.x = zt), (n.y = zt)),
                (this.scale = n);
            }
            return (
              C()(t, [
                {
                  key: 'apply',
                  value: function(t) {
                    var e = this.scale,
                      r = e.x,
                      n = e.y;
                    t.scale(r, n || r);
                  }
                },
                {
                  key: 'unapply',
                  value: function(t) {
                    var e = this.scale,
                      r = e.x,
                      n = e.y;
                    t.scale(1 / r, 1 / n || r);
                  }
                },
                {
                  key: 'applyToPoint',
                  value: function(t) {
                    var e = this.scale,
                      r = e.x,
                      n = e.y;
                    t.applyTransform([r || 0, 0, 0, n || 0, 0, 0]);
                  }
                }
              ]),
              t
            );
          })(),
          oe = (function() {
            function t(e, r) {
              R()(this, t),
                (this.type = 'matrix'),
                (this.matrix = []),
                (this.matrix = kt(r));
            }
            return (
              C()(t, [
                {
                  key: 'apply',
                  value: function(t) {
                    var e = this.matrix;
                    t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
                  }
                },
                {
                  key: 'unapply',
                  value: function(t) {
                    var e = this.matrix,
                      r = e[0],
                      n = e[2],
                      i = e[4],
                      a = e[1],
                      o = e[3],
                      u = e[5],
                      s =
                        1 /
                        (r * (1 * o - 0 * u) -
                          n * (1 * a - 0 * u) +
                          i * (0 * a - 0 * o));
                    t.transform(
                      s * (1 * o - 0 * u),
                      s * (0 * u - 1 * a),
                      s * (0 * i - 1 * n),
                      s * (1 * r - 0 * i),
                      s * (n * u - i * o),
                      s * (i * a - r * u)
                    );
                  }
                },
                {
                  key: 'applyToPoint',
                  value: function(t) {
                    t.applyTransform(this.matrix);
                  }
                }
              ]),
              t
            );
          })();
        function ue(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var se = (function(t) {
          X()(r, t);
          var e = ue(r);
          function r(t, n) {
            var i;
            return (
              R()(this, r),
              ((i = e.call(this, t, n)).type = 'skew'),
              (i.angle = null),
              (i.angle = new Ht(t, 'angle', n)),
              i
            );
          }
          return r;
        })(oe);
        function ce(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var le = (function(t) {
          X()(r, t);
          var e = ce(r);
          function r(t, n) {
            var i;
            return (
              R()(this, r),
              ((i = e.call(this, t, n)).type = 'skewX'),
              (i.matrix = [1, 0, Math.tan(i.angle.getRadians()), 1, 0, 0]),
              i
            );
          }
          return r;
        })(se);
        function fe(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var he = (function(t) {
          X()(r, t);
          var e = fe(r);
          function r(t, n) {
            var i;
            return (
              R()(this, r),
              ((i = e.call(this, t, n)).type = 'skewY'),
              (i.matrix = [1, Math.tan(i.angle.getRadians()), 0, 1, 0, 0]),
              i
            );
          }
          return r;
        })(se);
        var ye = (function() {
          function t(e, r, n) {
            var i = this;
            R()(this, t), (this.document = e), (this.transforms = []);
            var a = (function(t) {
                return xt(t)
                  .trim()
                  .replace(/\)([a-zA-Z])/g, ') $1')
                  .replace(/\)(\s?,\s?)/g, ') ')
                  .split(/\s(?=[a-z])/);
              })(r),
              o = n ? kt(n) : [];
            a.forEach(function(e) {
              if ('none' !== e) {
                var r = (function(t) {
                    var e = t.split('('),
                      r = l()(e, 2),
                      n = r[0],
                      i = r[1];
                    return [n.trim(), i.trim().replace(')', '')];
                  })(e),
                  n = l()(r, 2),
                  a = n[0],
                  u = n[1],
                  s = t.transformTypes[a];
                void 0 !== s && i.transforms.push(new s(i.document, u, o));
              }
            });
          }
          return (
            C()(
              t,
              [
                {
                  key: 'apply',
                  value: function(t) {
                    for (
                      var e = this.transforms, r = e.length, n = 0;
                      n < r;
                      n++
                    )
                      e[n].apply(t);
                  }
                },
                {
                  key: 'unapply',
                  value: function(t) {
                    for (var e = this.transforms, r = e.length - 1; r >= 0; r--)
                      e[r].unapply(t);
                  }
                },
                {
                  key: 'applyToPoint',
                  value: function(t) {
                    for (
                      var e = this.transforms, r = e.length, n = 0;
                      n < r;
                      n++
                    )
                      e[n].applyToPoint(t);
                  }
                }
              ],
              [
                {
                  key: 'fromElement',
                  value: function(e, r) {
                    var n = r.getStyle('transform', !1, !0),
                      i = r.getStyle('transform-origin', !1, !0);
                    return n.hasValue()
                      ? new t(e, n.getString(), i.getString())
                      : null;
                  }
                }
              ]
            ),
            t
          );
        })();
        ye.transformTypes = {
          translate: ne,
          rotate: ie,
          scale: ae,
          matrix: oe,
          skewX: le,
          skewY: he
        };
        var ge = (function() {
          function t(e, r) {
            var n = this,
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (
              (R()(this, t),
              (this.document = e),
              (this.node = r),
              (this.captureTextNodes = i),
              (this.attributes = {}),
              (this.styles = {}),
              (this.stylesSpecificity = {}),
              (this.animationFrozen = !1),
              (this.animationFrozenValue = ''),
              (this.parent = null),
              (this.children = []),
              r && 1 === r.nodeType)
            ) {
              if (
                (Array.from(r.attributes).forEach(function(t) {
                  var r = Pt(t.nodeName);
                  n.attributes[r] = new Ht(e, r, t.value);
                }),
                this.addStylesFromStyleDefinition(),
                this.getAttribute('style').hasValue())
              )
                this.getAttribute('style')
                  .getString()
                  .split(';')
                  .map(function(t) {
                    return t.trim();
                  })
                  .forEach(function(t) {
                    if (t) {
                      var r = t.split(':').map(function(t) {
                          return t.trim();
                        }),
                        i = l()(r, 2),
                        a = i[0],
                        o = i[1];
                      n.styles[a] = new Ht(e, a, o);
                    }
                  });
              var a = e.definitions,
                o = this.getAttribute('id');
              o.hasValue() && (a[o.getValue()] || (a[o.getValue()] = this)),
                Array.from(r.childNodes).forEach(function(t) {
                  if (1 === t.nodeType) n.addChild(t);
                  else if (i && (3 === t.nodeType || 4 === t.nodeType)) {
                    var r = e.createTextNode(t);
                    r.getText().length > 0 && n.addChild(r);
                  }
                });
            }
          }
          return (
            C()(t, [
              {
                key: 'getAttribute',
                value: function(t) {
                  var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.attributes[t];
                  if (!r && e) {
                    var n = new Ht(this.document, t, '');
                    return (this.attributes[t] = n), n;
                  }
                  return r || Ht.empty(this.document);
                }
              },
              {
                key: 'getHrefAttribute',
                value: function() {
                  for (var t in this.attributes)
                    if ('href' === t || /:href$/.test(t))
                      return this.attributes[t];
                  return Ht.empty(this.document);
                }
              },
              {
                key: 'getStyle',
                value: function(t) {
                  var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    n = this.styles[t];
                  if (n) return n;
                  var i = this.getAttribute(t);
                  if (i && i.hasValue()) return (this.styles[t] = i), i;
                  if (!r) {
                    var a = this.parent;
                    if (a) {
                      var o = a.getStyle(t);
                      if (o && o.hasValue()) return o;
                    }
                  }
                  if (e) {
                    var u = new Ht(this.document, t, '');
                    return (this.styles[t] = u), u;
                  }
                  return n || Ht.empty(this.document);
                }
              },
              {
                key: 'render',
                value: function(t) {
                  if (
                    'none' !== this.getStyle('display').getString() &&
                    'hidden' !== this.getStyle('visibility').getString()
                  ) {
                    if ((t.save(), this.getStyle('mask').hasValue())) {
                      var e = this.getStyle('mask').getDefinition();
                      e && (this.applyEffects(t), e.apply(t, this));
                    } else if (
                      'none' !== this.getStyle('filter').getValue('none')
                    ) {
                      var r = this.getStyle('filter').getDefinition();
                      r && (this.applyEffects(t), r.apply(t, this));
                    } else
                      this.setContext(t),
                        this.renderChildren(t),
                        this.clearContext(t);
                    t.restore();
                  }
                }
              },
              { key: 'setContext', value: function(t) {} },
              {
                key: 'applyEffects',
                value: function(t) {
                  var e = ye.fromElement(this.document, this);
                  e && e.apply(t);
                  var r = this.getStyle('clip-path', !1, !0);
                  if (r.hasValue()) {
                    var n = r.getDefinition();
                    n && n.apply(t);
                  }
                }
              },
              { key: 'clearContext', value: function(t) {} },
              {
                key: 'renderChildren',
                value: function(t) {
                  this.children.forEach(function(e) {
                    e.render(t);
                  });
                }
              },
              {
                key: 'addChild',
                value: function(e) {
                  var r = e instanceof t ? e : this.document.createElement(e);
                  (r.parent = this),
                    t.ignoreChildTypes.includes(r.type) ||
                      this.children.push(r);
                }
              },
              {
                key: 'matchesSelector',
                value: function(t) {
                  var e = this.node;
                  if ('function' == typeof e.matches) return e.matches(t);
                  var r = e.getAttribute('class');
                  return (
                    !(!r || '' === r) &&
                    r.split(' ').some(function(e) {
                      if ('.'.concat(e) === t) return !0;
                    })
                  );
                }
              },
              {
                key: 'addStylesFromStyleDefinition',
                value: function() {
                  var t = this.document,
                    e = t.styles,
                    r = t.stylesSpecificity;
                  for (var n in e)
                    if ('@' !== n[0] && this.matchesSelector(n)) {
                      var i = e[n],
                        a = r[n];
                      if (i)
                        for (var o in i) {
                          var u = this.stylesSpecificity[o];
                          void 0 === u && (u = '000'),
                            a >= u &&
                              ((this.styles[o] = i[o]),
                              (this.stylesSpecificity[o] = a));
                        }
                    }
                }
              },
              {
                key: 'removeStyles',
                value: function(t, e) {
                  return e.reduce(function(e, r) {
                    var n = t.getStyle(r);
                    if (!n.hasValue()) return e;
                    var i = n.getString();
                    return n.setValue(''), [].concat(tt()(e), [[r, i]]);
                  }, []);
                }
              },
              {
                key: 'restoreStyles',
                value: function(t, e) {
                  e.forEach(function(e) {
                    var r = l()(e, 2),
                      n = r[0],
                      i = r[1];
                    t.getStyle(n, !0).setValue(i);
                  });
                }
              }
            ]),
            t
          );
        })();
        function pe(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        ge.ignoreChildTypes = ['title'];
        var de = (function(t) {
          X()(r, t);
          var e = pe(r);
          function r(t, n, i) {
            return R()(this, r), e.call(this, t, n, i);
          }
          return r;
        })(ge);
        function ve(t) {
          var e = t.trim();
          return /^('|")/.test(e) ? e : '"'.concat(e, '"');
        }
        var me = (function() {
          function e(t, r, n, i, a, o) {
            R()(this, e);
            var u = o ? ('string' == typeof o ? e.parse(o) : o) : {};
            (this.fontFamily = a || u.fontFamily),
              (this.fontSize = i || u.fontSize),
              (this.fontStyle = t || u.fontStyle),
              (this.fontWeight = n || u.fontWeight),
              (this.fontVariant = r || u.fontVariant);
          }
          return (
            C()(
              e,
              [
                {
                  key: 'toString',
                  value: function() {
                    return [
                      (function(t) {
                        if (!t) return '';
                        var e = t.trim().toLowerCase();
                        switch (e) {
                          case 'normal':
                          case 'italic':
                          case 'oblique':
                          case 'inherit':
                          case 'initial':
                          case 'unset':
                            return e;
                          default:
                            return /^oblique\s+(-|)\d+deg$/.test(e) ? e : '';
                        }
                      })(this.fontStyle),
                      this.fontVariant,
                      (function(t) {
                        if (!t) return '';
                        var e = t.trim().toLowerCase();
                        switch (e) {
                          case 'normal':
                          case 'bold':
                          case 'lighter':
                          case 'bolder':
                          case 'inherit':
                          case 'initial':
                          case 'unset':
                            return e;
                          default:
                            return /^[\d.]+$/.test(e) ? e : '';
                        }
                      })(this.fontWeight),
                      this.fontSize,
                      (function(e) {
                        return void 0 === t
                          ? e
                          : e
                              .trim()
                              .split(',')
                              .map(ve)
                              .join(',');
                      })(this.fontFamily)
                    ]
                      .join(' ')
                      .trim();
                  }
                }
              ],
              [
                {
                  key: 'parse',
                  value: function() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : '',
                      r = arguments.length > 1 ? arguments[1] : void 0,
                      n = '',
                      i = '',
                      a = '',
                      o = '',
                      u = '',
                      s = {
                        fontSize: !1,
                        fontStyle: !1,
                        fontWeight: !1,
                        fontVariant: !1
                      };
                    return (
                      xt(t)
                        .trim()
                        .split(' ')
                        .forEach(function(t) {
                          switch (!0) {
                            case !s.fontStyle && e.styles.includes(t):
                              'inherit' !== t && (n = t), (s.fontStyle = !0);
                              break;
                            case !s.fontVariant && e.variants.includes(t):
                              'inherit' !== t && (i = t),
                                (s.fontStyle = !0),
                                (s.fontVariant = !0);
                              break;
                            case !s.fontWeight && e.weights.includes(t):
                              'inherit' !== t && (a = t),
                                (s.fontStyle = !0),
                                (s.fontVariant = !0),
                                (s.fontWeight = !0);
                              break;
                            case !s.fontSize:
                              if ('inherit' !== t) {
                                var r = t.split('/'),
                                  c = l()(r, 1);
                                o = c[0];
                              }
                              (s.fontStyle = !0),
                                (s.fontVariant = !0),
                                (s.fontWeight = !0),
                                (s.fontSize = !0);
                              break;
                            default:
                              'inherit' !== t && (u += t);
                          }
                        }),
                      new e(n, i, a, o, u, r)
                    );
                  }
                }
              ]
            ),
            e
          );
        })();
        (me.styles = 'normal|italic|oblique|inherit'),
          (me.variants = 'normal|small-caps|inherit'),
          (me.weights =
            'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit');
        var xe = (function() {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Number.NaN,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Number.NaN,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Number.NaN,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : Number.NaN;
            R()(this, t),
              (this.x1 = e),
              (this.y1 = r),
              (this.x2 = n),
              (this.y2 = i),
              this.addPoint(e, r),
              this.addPoint(n, i);
          }
          return (
            C()(t, [
              {
                key: 'addPoint',
                value: function(t, e) {
                  void 0 !== t &&
                    ((isNaN(this.x1) || isNaN(this.x2)) &&
                      ((this.x1 = t), (this.x2 = t)),
                    t < this.x1 && (this.x1 = t),
                    t > this.x2 && (this.x2 = t)),
                    void 0 !== e &&
                      ((isNaN(this.y1) || isNaN(this.y2)) &&
                        ((this.y1 = e), (this.y2 = e)),
                      e < this.y1 && (this.y1 = e),
                      e > this.y2 && (this.y2 = e));
                }
              },
              {
                key: 'addX',
                value: function(t) {
                  this.addPoint(t, null);
                }
              },
              {
                key: 'addY',
                value: function(t) {
                  this.addPoint(null, t);
                }
              },
              {
                key: 'addBoundingBox',
                value: function(t) {
                  if (t) {
                    var e = t.x1,
                      r = t.y1,
                      n = t.x2,
                      i = t.y2;
                    this.addPoint(e, r), this.addPoint(n, i);
                  }
                }
              },
              {
                key: 'sumCubic',
                value: function(t, e, r, n, i) {
                  return (
                    Math.pow(1 - t, 3) * e +
                    3 * Math.pow(1 - t, 2) * t * r +
                    3 * (1 - t) * Math.pow(t, 2) * n +
                    Math.pow(t, 3) * i
                  );
                }
              },
              {
                key: 'bezierCurveAdd',
                value: function(t, e, r, n, i) {
                  var a = 6 * e - 12 * r + 6 * n,
                    o = -3 * e + 9 * r - 9 * n + 3 * i,
                    u = 3 * r - 3 * e;
                  if (0 !== o) {
                    var s = Math.pow(a, 2) - 4 * u * o;
                    if (!(s < 0)) {
                      var c = (-a + Math.sqrt(s)) / (2 * o);
                      0 < c &&
                        c < 1 &&
                        (t
                          ? this.addX(this.sumCubic(c, e, r, n, i))
                          : this.addY(this.sumCubic(c, e, r, n, i)));
                      var l = (-a - Math.sqrt(s)) / (2 * o);
                      0 < l &&
                        l < 1 &&
                        (t
                          ? this.addX(this.sumCubic(l, e, r, n, i))
                          : this.addY(this.sumCubic(l, e, r, n, i)));
                    }
                  } else {
                    if (0 === a) return;
                    var f = -u / a;
                    0 < f &&
                      f < 1 &&
                      (t
                        ? this.addX(this.sumCubic(f, e, r, n, i))
                        : this.addY(this.sumCubic(f, e, r, n, i)));
                  }
                }
              },
              {
                key: 'addBezierCurve',
                value: function(t, e, r, n, i, a, o, u) {
                  this.addPoint(t, e),
                    this.addPoint(o, u),
                    this.bezierCurveAdd(!0, t, r, i, o),
                    this.bezierCurveAdd(!1, e, n, a, u);
                }
              },
              {
                key: 'addQuadraticCurve',
                value: function(t, e, r, n, i, a) {
                  var o = t + (2 / 3) * (r - t),
                    u = e + (2 / 3) * (n - e),
                    s = o + (1 / 3) * (i - t),
                    c = u + (1 / 3) * (a - e);
                  this.addBezierCurve(t, e, o, s, u, c, i, a);
                }
              },
              {
                key: 'isPointInBox',
                value: function(t, e) {
                  var r = this.x1,
                    n = this.y1,
                    i = this.x2,
                    a = this.y2;
                  return r <= t && t <= i && n <= e && e <= a;
                }
              },
              {
                key: 'x',
                get: function() {
                  return this.x1;
                }
              },
              {
                key: 'y',
                get: function() {
                  return this.y1;
                }
              },
              {
                key: 'width',
                get: function() {
                  return this.x2 - this.x1;
                }
              },
              {
                key: 'height',
                get: function() {
                  return this.y2 - this.y1;
                }
              }
            ]),
            t
          );
        })();
        function be(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var we = (function(t) {
          X()(r, t);
          var e = be(r);
          function r() {
            var t;
            return (
              R()(this, r),
              ((t = e.apply(this, arguments)).modifiedEmSizeStack = !1),
              t
            );
          }
          return (
            C()(r, [
              {
                key: 'calculateOpacity',
                value: function() {
                  for (var t = 1, e = this; e; ) {
                    var r = e.getStyle('opacity', !1, !0);
                    r.hasValue() && (t *= r.getNumber()), (e = e.parent);
                  }
                  return t;
                }
              },
              {
                key: 'setContext',
                value: function(t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (!e) {
                    var r = this.getStyle('fill'),
                      n = this.getStyle('fill-opacity'),
                      i = this.getStyle('stroke'),
                      a = this.getStyle('stroke-opacity');
                    if (r.isUrlDefinition()) {
                      var o = r.getFillStyleDefinition(this, n);
                      o && (t.fillStyle = o);
                    } else if (r.hasValue()) {
                      'currentColor' === r.getString() &&
                        r.setValue(this.getStyle('color').getColor());
                      var u = r.getColor();
                      'inherit' !== u &&
                        (t.fillStyle = 'none' === u ? 'rgba(0,0,0,0)' : u);
                    }
                    if (n.hasValue()) {
                      var s = new Ht(this.document, 'fill', t.fillStyle)
                        .addOpacity(n)
                        .getColor();
                      t.fillStyle = s;
                    }
                    if (i.isUrlDefinition()) {
                      var c = i.getFillStyleDefinition(this, a);
                      c && (t.strokeStyle = c);
                    } else if (i.hasValue()) {
                      'currentColor' === i.getString() &&
                        i.setValue(this.getStyle('color').getColor());
                      var l = i.getString();
                      'inherit' !== l &&
                        (t.strokeStyle = 'none' === l ? 'rgba(0,0,0,0)' : l);
                    }
                    if (a.hasValue()) {
                      var f = new Ht(this.document, 'stroke', t.strokeStyle)
                        .addOpacity(a)
                        .getString();
                      t.strokeStyle = f;
                    }
                    var h = this.getStyle('stroke-width');
                    if (h.hasValue()) {
                      var y = h.getPixels();
                      t.lineWidth = y || zt;
                    }
                    var g = this.getStyle('stroke-linecap'),
                      p = this.getStyle('stroke-linejoin'),
                      d = this.getStyle('stroke-miterlimit'),
                      v = this.getStyle('paint-order'),
                      m = this.getStyle('stroke-dasharray'),
                      x = this.getStyle('stroke-dashoffset');
                    if (
                      (g.hasValue() && (t.lineCap = g.getString()),
                      p.hasValue() && (t.lineJoin = p.getString()),
                      d.hasValue() && (t.miterLimit = d.getNumber()),
                      v.hasValue() && (t.paintOrder = v.getValue()),
                      m.hasValue() && 'none' !== m.getString())
                    ) {
                      var b = kt(m.getString());
                      void 0 !== t.setLineDash
                        ? t.setLineDash(b)
                        : void 0 !== t.webkitLineDash
                        ? (t.webkitLineDash = b)
                        : void 0 === t.mozDash ||
                          (1 === b.length && 0 === b[0]) ||
                          (t.mozDash = b);
                      var w = x.getPixels();
                      void 0 !== t.lineDashOffset
                        ? (t.lineDashOffset = w)
                        : void 0 !== t.webkitLineDashOffset
                        ? (t.webkitLineDashOffset = w)
                        : void 0 !== t.mozDashOffset && (t.mozDashOffset = w);
                    }
                  }
                  if (((this.modifiedEmSizeStack = !1), void 0 !== t.font)) {
                    var k = this.getStyle('font'),
                      S = this.getStyle('font-style'),
                      P = this.getStyle('font-variant'),
                      R = this.getStyle('font-weight'),
                      A = this.getStyle('font-size'),
                      C = this.getStyle('font-family'),
                      E = new me(
                        S.getString(),
                        P.getString(),
                        R.getString(),
                        A.hasValue() ? ''.concat(A.getPixels(!0), 'px') : '',
                        C.getString(),
                        me.parse(k.getString(), t.font)
                      );
                    S.setValue(E.fontStyle),
                      P.setValue(E.fontVariant),
                      R.setValue(E.fontWeight),
                      A.setValue(E.fontSize),
                      C.setValue(E.fontFamily),
                      (t.font = E.toString()),
                      A.isPixels() &&
                        ((this.document.emSize = A.getPixels()),
                        (this.modifiedEmSizeStack = !0));
                  }
                  e ||
                    (this.applyEffects(t),
                    (t.globalAlpha = this.calculateOpacity()));
                }
              },
              {
                key: 'clearContext',
                value: function(t) {
                  it()(_()(r.prototype), 'clearContext', this).call(this, t),
                    this.modifiedEmSizeStack && this.document.popEmSize();
                }
              }
            ]),
            r
          );
        })(ge);
        function ke(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Se = (function(t) {
          X()(r, t);
          var e = ke(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(
                this,
                t,
                n,
                (this instanceof r ? this.constructor : void 0) === r || i
              )).type = 'text'),
              (a.x = 0),
              (a.y = 0),
              (a.measureCache = -1),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'setContext',
                value: function(t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  it()(_()(r.prototype), 'setContext', this).call(this, t, e);
                  var n =
                    this.getStyle('dominant-baseline').getTextBaseline() ||
                    this.getStyle('alignment-baseline').getTextBaseline();
                  n && (t.textBaseline = n);
                }
              },
              {
                key: 'initializeCoordinates',
                value: function(t) {
                  (this.x = this.getAttribute('x').getPixels('x')),
                    (this.y = this.getAttribute('y').getPixels('y'));
                  var e = this.getAttribute('dx'),
                    r = this.getAttribute('dy');
                  e.hasValue() && (this.x += e.getPixels('x')),
                    r.hasValue() && (this.y += r.getPixels('y')),
                    (this.x += this.getAnchorDelta(t, this, 0));
                }
              },
              {
                key: 'getBoundingBox',
                value: function(t) {
                  var e = this;
                  if ('text' !== this.type)
                    return this.getTElementBoundingBox(t);
                  this.initializeCoordinates(t);
                  var r = null;
                  return (
                    this.children.forEach(function(n, i) {
                      var a = e.getChildBoundingBox(t, e, e, i);
                      r ? r.addBoundingBox(a) : (r = a);
                    }),
                    r
                  );
                }
              },
              {
                key: 'getFontSize',
                value: function() {
                  var t = this.document,
                    e = this.parent,
                    r = me.parse(t.ctx.font).fontSize;
                  return e.getStyle('font-size').getNumber(r);
                }
              },
              {
                key: 'getTElementBoundingBox',
                value: function(t) {
                  var e = this.getFontSize();
                  return new xe(
                    this.x,
                    this.y - e,
                    this.x + this.measureText(t),
                    this.y
                  );
                }
              },
              {
                key: 'getGlyph',
                value: function(t, e, r) {
                  var n = e[r],
                    i = null;
                  if (t.isArabic) {
                    var a = e.length,
                      o = e[r - 1],
                      u = e[r + 1],
                      s = 'isolated';
                    (0 === r || ' ' === o) &&
                      r < a - 2 &&
                      ' ' !== u &&
                      (s = 'terminal'),
                      r > 0 &&
                        ' ' !== o &&
                        r < a - 2 &&
                        ' ' !== u &&
                        (s = 'medial'),
                      r > 0 &&
                        ' ' !== o &&
                        (r === a - 1 || ' ' === u) &&
                        (s = 'initial'),
                      void 0 !== t.glyphs[n] &&
                        ((i = t.glyphs[n][s]) ||
                          'glyph' !== t.glyphs[n].type ||
                          (i = t.glyphs[n]));
                  } else i = t.glyphs[n];
                  return i || (i = t.missingGlyph), i;
                }
              },
              {
                key: 'getText',
                value: function() {
                  return '';
                }
              },
              {
                key: 'getTextFromNode',
                value: function(t) {
                  var e = t || this.node,
                    r = Array.from(e.parentNode.childNodes),
                    n = r.indexOf(e),
                    i = r.length - 1,
                    a = xt(e.value || e.text || e.textContent || '');
                  return 0 === n && (a = bt(a)), n === i && (a = wt(a)), a;
                }
              },
              {
                key: 'renderChildren',
                value: function(t) {
                  var e = this;
                  if ('text' === this.type) {
                    this.initializeCoordinates(t),
                      this.children.forEach(function(r, n) {
                        e.renderChild(t, e, e, n);
                      });
                    var r = this.document.screen.mouse;
                    r.isWorking() &&
                      r.checkBoundingBox(this, this.getBoundingBox(t));
                  } else this.renderTElementChildren(t);
                }
              },
              {
                key: 'renderTElementChildren',
                value: function(t) {
                  var e = this.document,
                    r = this.parent,
                    n = this.getText(),
                    i = r.getStyle('font-family').getDefinition();
                  if (i)
                    for (
                      var a = i.fontFace.unitsPerEm,
                        o = me.parse(e.ctx.font),
                        u = r.getStyle('font-size').getNumber(o.fontSize),
                        s = r.getStyle('font-style').getString(o.fontStyle),
                        c = u / a,
                        l = i.isRTL
                          ? n
                              .split('')
                              .reverse()
                              .join('')
                          : n,
                        f = kt(r.getAttribute('dx').getString()),
                        h = l.length,
                        y = 0;
                      y < h;
                      y++
                    ) {
                      var g = this.getGlyph(i, l, y);
                      t.translate(this.x, this.y), t.scale(c, -c);
                      var p = t.lineWidth;
                      (t.lineWidth = (t.lineWidth * a) / u),
                        'italic' === s && t.transform(1, 0, 0.4, 1, 0, 0),
                        g.render(t),
                        'italic' === s && t.transform(1, 0, -0.4, 1, 0, 0),
                        (t.lineWidth = p),
                        t.scale(1 / c, -1 / c),
                        t.translate(-this.x, -this.y),
                        (this.x += (u * (g.horizAdvX || i.horizAdvX)) / a),
                        void 0 === f[y] || isNaN(f[y]) || (this.x += f[y]);
                    }
                  else {
                    var d = this.x,
                      v = this.y;
                    'stroke' === t.paintOrder
                      ? (t.strokeStyle && t.strokeText(n, d, v),
                        t.fillStyle && t.fillText(n, d, v))
                      : (t.fillStyle && t.fillText(n, d, v),
                        t.strokeStyle && t.strokeText(n, d, v));
                  }
                }
              },
              {
                key: 'getAnchorDelta',
                value: function(t, e, r) {
                  var n = this.getStyle('text-anchor').getString('start');
                  if ('start' !== n) {
                    for (
                      var i = e.children, a = i.length, o = null, u = 0, s = r;
                      s < a &&
                      ((o = i[s]),
                      !(
                        (s > r && o.getAttribute('x').hasValue()) ||
                        o.getAttribute('text-anchor').hasValue()
                      ));
                      s++
                    )
                      u += o.measureTextRecursive(t);
                    return -1 * ('end' === n ? u : u / 2);
                  }
                  return 0;
                }
              },
              {
                key: 'adjustChildCoordinates',
                value: function(t, e, r, n) {
                  var i = r.children[n];
                  if ('function' != typeof i.measureText) return i;
                  t.save(), i.setContext(t, !0);
                  var a = i.getAttribute('x'),
                    o = i.getAttribute('y'),
                    u = i.getAttribute('dx'),
                    s = i.getAttribute('dy'),
                    c = i.getAttribute('text-anchor').getString('start');
                  if (
                    (0 === n &&
                      'textNode' !== i.type &&
                      (a.hasValue() ||
                        a.setValue(e.getAttribute('x').getValue('0')),
                      o.hasValue() ||
                        o.setValue(e.getAttribute('y').getValue('0')),
                      u.hasValue() ||
                        u.setValue(e.getAttribute('dx').getValue('0')),
                      s.hasValue() ||
                        s.setValue(e.getAttribute('dy').getValue('0'))),
                    a.hasValue())
                  ) {
                    if (
                      ((i.x = a.getPixels('x') + e.getAnchorDelta(t, r, n)),
                      'start' !== c)
                    ) {
                      var l = i.measureTextRecursive(t);
                      i.x += -1 * ('end' === c ? l : l / 2);
                    }
                    u.hasValue() && (i.x += u.getPixels('x'));
                  } else {
                    if ('start' !== c) {
                      var f = i.measureTextRecursive(t);
                      e.x += -1 * ('end' === c ? f : f / 2);
                    }
                    u.hasValue() && (e.x += u.getPixels('x')), (i.x = e.x);
                  }
                  return (
                    (e.x = i.x + i.measureText(t)),
                    o.hasValue()
                      ? ((i.y = o.getPixels('y')),
                        s.hasValue() && (i.y += s.getPixels('y')))
                      : (s.hasValue() && (e.y += s.getPixels('y')),
                        (i.y = e.y)),
                    (e.y = i.y),
                    i.clearContext(t),
                    t.restore(),
                    i
                  );
                }
              },
              {
                key: 'getChildBoundingBox',
                value: function(t, e, r, n) {
                  var i = this.adjustChildCoordinates(t, e, r, n),
                    a = i.getBoundingBox(t);
                  return a
                    ? (i.children.forEach(function(r, n) {
                        var o = e.getChildBoundingBox(t, e, i, n);
                        a.addBoundingBox(o);
                      }),
                      a)
                    : null;
                }
              },
              {
                key: 'renderChild',
                value: function(t, e, r, n) {
                  var i = this.adjustChildCoordinates(t, e, r, n);
                  i.render(t),
                    i.children.forEach(function(r, n) {
                      e.renderChild(t, e, i, n);
                    });
                }
              },
              {
                key: 'measureTextRecursive',
                value: function(t) {
                  return this.children.reduce(function(e, r) {
                    return e + r.measureTextRecursive(t);
                  }, this.measureText(t));
                }
              },
              {
                key: 'measureText',
                value: function(t) {
                  var e = this.measureCache;
                  if (~e) return e;
                  var r = this.getText(),
                    n = this.measureTargetText(t, r);
                  return (this.measureCache = n), n;
                }
              },
              {
                key: 'measureTargetText',
                value: function(t, e) {
                  if (!e.length) return 0;
                  var r = this.parent,
                    n = r.getStyle('font-family').getDefinition();
                  if (n) {
                    for (
                      var i = this.getFontSize(),
                        a = n.isRTL
                          ? e
                              .split('')
                              .reverse()
                              .join('')
                          : e,
                        o = kt(r.getAttribute('dx').getString()),
                        u = a.length,
                        s = 0,
                        c = 0;
                      c < u;
                      c++
                    ) {
                      (s +=
                        ((this.getGlyph(n, a, c).horizAdvX || n.horizAdvX) *
                          i) /
                        n.fontFace.unitsPerEm),
                        void 0 === o[c] || isNaN(o[c]) || (s += o[c]);
                    }
                    return s;
                  }
                  if (!t.measureText) return 10 * e.length;
                  t.save(), this.setContext(t, !0);
                  var l = t.measureText(e).width;
                  return this.clearContext(t), t.restore(), l;
                }
              }
            ]),
            r
          );
        })(we);
        function Pe(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Re = (function(t) {
          X()(r, t);
          var e = Pe(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(
                this,
                t,
                n,
                (this instanceof r ? this.constructor : void 0) === r || i
              )).type = 'tspan'),
              (a.text = a.children.length > 0 ? '' : a.getTextFromNode()),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'getText',
                value: function() {
                  return this.text;
                }
              }
            ]),
            r
          );
        })(Se);
        function Ae(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Ce = (function(t) {
          X()(r, t);
          var e = Ae(r);
          function r() {
            var t;
            return (
              R()(this, r),
              ((t = e.apply(this, arguments)).type = 'textNode'),
              t
            );
          }
          return r;
        })(Re);
        var Ee = (function() {
          function t(e) {
            R()(this, t),
              (this.control = null),
              (this.start = null),
              (this.current = null),
              (this.command = ''),
              (this.tokens = []),
              (this.i = -1),
              (this.previousCommand = ''),
              (this.points = []),
              (this.angles = []),
              (this.tokens = (function(t) {
                return xt(
                  t
                    .replace(/,/gm, ' ')
                    .replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, '$1 $2')
                    .replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, '$1 $2')
                    .replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, '$1 $2')
                    .replace(/([0-9])([+\-])/gm, '$1 $2')
                    .replace(/(\.[0-9]*)(\.)/gm, '$1 $2')
                    .replace(/(\.[0-9]*)(\.)/gm, '$1 $2')
                    .replace(
                      /([Aa](?:\s+(?:[0-9]*\.)?[0-9]+){3})\s+([01])\s*([01])/gm,
                      '$1 $2 $3 '
                    )
                ).trim();
              })(e).split(' '));
          }
          return (
            C()(t, [
              {
                key: 'reset',
                value: function() {
                  (this.i = -1),
                    (this.command = ''),
                    (this.previousCommand = ''),
                    (this.start = new Yt(0, 0)),
                    (this.control = new Yt(0, 0)),
                    (this.current = new Yt(0, 0)),
                    (this.points = []),
                    (this.angles = []);
                }
              },
              {
                key: 'isEnd',
                value: function() {
                  return this.i >= this.tokens.length - 1;
                }
              },
              {
                key: 'isCommandOrEnd',
                value: function() {
                  if (this.isEnd()) return !0;
                  var t = this.i,
                    e = this.tokens;
                  return /^[A-Za-z]$/.test(e[t + 1]);
                }
              },
              {
                key: 'isRelativeCommand',
                value: function() {
                  switch (this.command) {
                    case 'm':
                    case 'l':
                    case 'h':
                    case 'v':
                    case 'c':
                    case 's':
                    case 'q':
                    case 't':
                    case 'a':
                    case 'z':
                      return !0;
                    default:
                      return !1;
                  }
                }
              },
              {
                key: 'getToken',
                value: function() {
                  return this.i++, this.tokens[this.i];
                }
              },
              {
                key: 'getScalar',
                value: function() {
                  return parseFloat(this.getToken());
                }
              },
              {
                key: 'nextCommand',
                value: function() {
                  (this.previousCommand = this.command),
                    (this.command = this.getToken());
                }
              },
              {
                key: 'getPoint',
                value: function() {
                  var t = new Yt(this.getScalar(), this.getScalar());
                  return this.makeAbsolute(t);
                }
              },
              {
                key: 'getAsControlPoint',
                value: function() {
                  var t = this.getPoint();
                  return (this.control = t), t;
                }
              },
              {
                key: 'getAsCurrentPoint',
                value: function() {
                  var t = this.getPoint();
                  return (this.current = t), t;
                }
              },
              {
                key: 'getReflectedControlPoint',
                value: function() {
                  var t = this.previousCommand.toLowerCase();
                  if ('c' !== t && 's' !== t && 'q' !== t && 't' !== t)
                    return this.current;
                  var e = this.current,
                    r = e.x,
                    n = e.y,
                    i = this.control,
                    a = i.x,
                    o = i.y;
                  return new Yt(2 * r - a, 2 * n - o);
                }
              },
              {
                key: 'makeAbsolute',
                value: function(t) {
                  if (this.isRelativeCommand()) {
                    var e = this.current,
                      r = e.x,
                      n = e.y;
                    (t.x += r), (t.y += n);
                  }
                  return t;
                }
              },
              {
                key: 'addMarker',
                value: function(t, e, r) {
                  var n = this.points,
                    i = this.angles;
                  r &&
                    i.length > 0 &&
                    !i[i.length - 1] &&
                    (i[i.length - 1] = n[n.length - 1].angleTo(r)),
                    this.addMarkerAngle(t, e ? e.angleTo(t) : null);
                }
              },
              {
                key: 'addMarkerAngle',
                value: function(t, e) {
                  this.points.push(t), this.angles.push(e);
                }
              },
              {
                key: 'getMarkerPoints',
                value: function() {
                  return this.points;
                }
              },
              {
                key: 'getMarkerAngles',
                value: function() {
                  for (var t = this.angles, e = t.length, r = 0; r < e; r++)
                    if (!t[r])
                      for (var n = r + 1; n < e; n++)
                        if (t[n]) {
                          t[r] = t[n];
                          break;
                        }
                  return t;
                }
              }
            ]),
            t
          );
        })();
        function Me(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Te = (function(t) {
          X()(r, t);
          var e = Me(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'path'),
              (a.pathParser = null),
              (a.pathParser = new Ee(a.getAttribute('d').getString())),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'path',
                value: function(t) {
                  var e = this.pathParser,
                    r = new xe();
                  for (e.reset(), t && t.beginPath(); !e.isEnd(); )
                    switch ((e.nextCommand(), e.command)) {
                      case 'M':
                      case 'm':
                        this.pathM(t, r);
                        break;
                      case 'L':
                      case 'l':
                        this.pathL(t, r);
                        break;
                      case 'H':
                      case 'h':
                        this.pathH(t, r);
                        break;
                      case 'V':
                      case 'v':
                        this.pathV(t, r);
                        break;
                      case 'C':
                      case 'c':
                        this.pathC(t, r);
                        break;
                      case 'S':
                      case 's':
                        this.pathS(t, r);
                        break;
                      case 'Q':
                      case 'q':
                        this.pathQ(t, r);
                        break;
                      case 'T':
                      case 't':
                        this.pathT(t, r);
                        break;
                      case 'A':
                      case 'a':
                        this.pathA(t, r);
                        break;
                      case 'Z':
                      case 'z':
                        this.pathZ(t, r);
                    }
                  return r;
                }
              },
              {
                key: 'getBoundingBox',
                value: function(t) {
                  return this.path();
                }
              },
              {
                key: 'getMarkers',
                value: function() {
                  var t = this.pathParser,
                    e = t.getMarkerPoints(),
                    r = t.getMarkerAngles();
                  return e.map(function(t, e) {
                    return [t, r[e]];
                  });
                }
              },
              {
                key: 'renderChildren',
                value: function(t) {
                  this.path(t), this.document.screen.mouse.checkPath(this, t);
                  var e = this.getStyle('fill-rule');
                  '' !== t.fillStyle &&
                    ('inherit' !== e.getString('inherit')
                      ? t.fill(e.getString())
                      : t.fill()),
                    '' !== t.strokeStyle && t.stroke();
                  var r = this.getMarkers();
                  if (r) {
                    var n = r.length - 1,
                      i = this.getStyle('marker-start'),
                      a = this.getStyle('marker-mid'),
                      o = this.getStyle('marker-end');
                    if (i.isUrlDefinition()) {
                      var u = i.getDefinition(),
                        s = l()(r[0], 2),
                        c = s[0],
                        f = s[1];
                      u.render(t, c, f);
                    }
                    if (a.isUrlDefinition())
                      for (var h = a.getDefinition(), y = 1; y < n; y++) {
                        var g = l()(r[y], 2),
                          p = g[0],
                          d = g[1];
                        h.render(t, p, d);
                      }
                    if (o.isUrlDefinition()) {
                      var v = o.getDefinition(),
                        m = l()(r[n], 2),
                        x = m[0],
                        b = m[1];
                      v.render(t, x, b);
                    }
                  }
                }
              },
              {
                key: 'pathM',
                value: function(t, e) {
                  var r = this.pathParser,
                    n = r.getAsCurrentPoint(),
                    i = n.x,
                    a = n.y;
                  for (
                    r.addMarker(n),
                      e.addPoint(i, a),
                      t && t.moveTo(i, a),
                      r.start = r.current;
                    !r.isCommandOrEnd();

                  ) {
                    var o = r.getAsCurrentPoint(),
                      u = o.x,
                      s = o.y;
                    r.addMarker(o, r.start),
                      e.addPoint(u, s),
                      t && t.lineTo(u, s);
                  }
                }
              },
              {
                key: 'pathL',
                value: function(t, e) {
                  for (var r = this.pathParser; !r.isCommandOrEnd(); ) {
                    var n = r.current,
                      i = r.getAsCurrentPoint(),
                      a = i.x,
                      o = i.y;
                    r.addMarker(i, n), e.addPoint(a, o), t && t.lineTo(a, o);
                  }
                }
              },
              {
                key: 'pathH',
                value: function(t, e) {
                  for (var r = this.pathParser; !r.isCommandOrEnd(); ) {
                    var n = r.current,
                      i = new Yt(
                        (r.isRelativeCommand() ? n.x : 0) + r.getScalar(),
                        n.y
                      );
                    r.addMarker(i, n),
                      (r.current = i),
                      e.addPoint(i.x, i.y),
                      t && t.lineTo(i.x, i.y);
                  }
                }
              },
              {
                key: 'pathV',
                value: function(t, e) {
                  for (var r = this.pathParser; !r.isCommandOrEnd(); ) {
                    var n = r.current,
                      i = new Yt(
                        n.x,
                        (r.isRelativeCommand() ? n.y : 0) + r.getScalar()
                      );
                    r.addMarker(i, n),
                      (r.current = i),
                      e.addPoint(i.x, i.y),
                      t && t.lineTo(i.x, i.y);
                  }
                }
              },
              {
                key: 'pathC',
                value: function(t, e) {
                  for (var r = this.pathParser; !r.isCommandOrEnd(); ) {
                    var n = r.current,
                      i = r.getPoint(),
                      a = r.getAsControlPoint(),
                      o = r.getAsCurrentPoint();
                    r.addMarker(o, a, i),
                      e.addBezierCurve(n.x, n.y, i.x, i.y, a.x, a.y, o.x, o.y),
                      t && t.bezierCurveTo(i.x, i.y, a.x, a.y, o.x, o.y);
                  }
                }
              },
              {
                key: 'pathS',
                value: function(t, e) {
                  for (var r = this.pathParser; !r.isCommandOrEnd(); ) {
                    var n = r.current,
                      i = r.getReflectedControlPoint(),
                      a = r.getAsControlPoint(),
                      o = r.getAsCurrentPoint();
                    r.addMarker(o, a, i),
                      e.addBezierCurve(n.x, n.y, i.x, i.y, a.x, a.y, o.x, o.y),
                      t && t.bezierCurveTo(i.x, i.y, a.x, a.y, o.x, o.y);
                  }
                }
              },
              {
                key: 'pathQ',
                value: function(t, e) {
                  for (var r = this.pathParser; !r.isCommandOrEnd(); ) {
                    var n = r.current,
                      i = r.getAsControlPoint(),
                      a = r.getAsCurrentPoint();
                    r.addMarker(a, i, i),
                      e.addQuadraticCurve(n.x, n.y, i.x, i.y, a.x, a.y),
                      t && t.quadraticCurveTo(i.x, i.y, a.x, a.y);
                  }
                }
              },
              {
                key: 'pathT',
                value: function(t, e) {
                  for (var r = this.pathParser; !r.isCommandOrEnd(); ) {
                    var n = r.current,
                      i = r.getReflectedControlPoint();
                    r.control = i;
                    var a = r.getAsCurrentPoint();
                    r.addMarker(a, i, i),
                      e.addQuadraticCurve(n.x, n.y, i.x, i.y, a.x, a.y),
                      t && t.quadraticCurveTo(i.x, i.y, a.x, a.y);
                  }
                }
              },
              {
                key: 'pathA',
                value: function(t, e) {
                  for (var r = this.pathParser; !r.isCommandOrEnd(); ) {
                    var n = r.current,
                      i = r.getScalar(),
                      a = r.getScalar(),
                      o = r.getScalar() * (Math.PI / 180),
                      u = r.getScalar(),
                      s = r.getScalar(),
                      c = r.getAsCurrentPoint(),
                      l = new Yt(
                        (Math.cos(o) * (n.x - c.x)) / 2 +
                          (Math.sin(o) * (n.y - c.y)) / 2,
                        (-Math.sin(o) * (n.x - c.x)) / 2 +
                          (Math.cos(o) * (n.y - c.y)) / 2
                      ),
                      f =
                        Math.pow(l.x, 2) / Math.pow(i, 2) +
                        Math.pow(l.y, 2) / Math.pow(a, 2);
                    f > 1 && ((i *= Math.sqrt(f)), (a *= Math.sqrt(f)));
                    var h =
                      (u === s ? -1 : 1) *
                      Math.sqrt(
                        (Math.pow(i, 2) * Math.pow(a, 2) -
                          Math.pow(i, 2) * Math.pow(l.y, 2) -
                          Math.pow(a, 2) * Math.pow(l.x, 2)) /
                          (Math.pow(i, 2) * Math.pow(l.y, 2) +
                            Math.pow(a, 2) * Math.pow(l.x, 2))
                      );
                    isNaN(h) && (h = 0);
                    var y = new Yt((h * i * l.y) / a, (h * -a * l.x) / i),
                      g = new Yt(
                        (n.x + c.x) / 2 + Math.cos(o) * y.x - Math.sin(o) * y.y,
                        (n.y + c.y) / 2 + Math.sin(o) * y.x + Math.cos(o) * y.y
                      ),
                      p = It([1, 0], [(l.x - y.x) / i, (l.y - y.y) / a]),
                      d = [(l.x - y.x) / i, (l.y - y.y) / a],
                      v = [(-l.x - y.x) / i, (-l.y - y.y) / a],
                      m = It(d, v);
                    Ft(d, v) <= -1 && (m = Math.PI), Ft(d, v) >= 1 && (m = 0);
                    var x = 1 - s ? 1 : -1,
                      b = p + x * (m / 2),
                      w = new Yt(g.x + i * Math.cos(b), g.y + a * Math.sin(b));
                    if (
                      (r.addMarkerAngle(w, b - (x * Math.PI) / 2),
                      r.addMarkerAngle(c, b - x * Math.PI),
                      e.addPoint(c.x, c.y),
                      t && !isNaN(p) && !isNaN(m))
                    ) {
                      var k = i > a ? i : a,
                        S = i > a ? 1 : i / a,
                        P = i > a ? a / i : 1;
                      t.translate(g.x, g.y),
                        t.rotate(o),
                        t.scale(S, P),
                        t.arc(0, 0, k, p, p + m, Boolean(1 - s)),
                        t.scale(1 / S, 1 / P),
                        t.rotate(-o),
                        t.translate(-g.x, -g.y);
                    }
                  }
                }
              },
              {
                key: 'pathZ',
                value: function(t, e) {
                  var r = this.pathParser;
                  t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath(),
                    (r.current = r.start);
                }
              }
            ]),
            r
          );
        })(we);
        function Ve(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var De = (function(t) {
          X()(r, t);
          var e = Ve(r);
          function r() {
            var t;
            return (
              R()(this, r),
              ((t = e.apply(this, arguments)).type = 'svg'),
              (t.root = !1),
              t
            );
          }
          return (
            C()(r, [
              {
                key: 'clearContext',
                value: function(t) {
                  it()(_()(r.prototype), 'clearContext', this).call(this, t),
                    this.document.screen.viewPort.removeCurrent();
                }
              },
              {
                key: 'setContext',
                value: function(t) {
                  var e = this.document,
                    n = e.screen,
                    i = e.window,
                    a = t.canvas;
                  if (
                    (n.setDefaults(t),
                    a.style &&
                      void 0 !== t.font &&
                      i &&
                      void 0 !== i.getComputedStyle)
                  ) {
                    t.font = i.getComputedStyle(a).getPropertyValue('font');
                    var o = new Ht(e, 'fontSize', me.parse(t.font).fontSize);
                    o.hasValue() &&
                      ((e.rootEmSize = o.getPixels('y')),
                      (e.emSize = e.rootEmSize));
                  }
                  it()(_()(r.prototype), 'setContext', this).call(this, t),
                    this.getAttribute('x').hasValue() ||
                      this.getAttribute('x', !0).setValue(0),
                    this.getAttribute('y').hasValue() ||
                      this.getAttribute('y', !0).setValue(0),
                    t.translate(
                      this.getAttribute('x').getPixels('x'),
                      this.getAttribute('y').getPixels('y')
                    );
                  var u = n.viewPort,
                    s = u.width,
                    c = u.height;
                  this.getStyle('width').hasValue() ||
                    this.getStyle('width', !0).setValue('100%'),
                    this.getStyle('height').hasValue() ||
                      this.getStyle('height', !0).setValue('100%'),
                    this.getStyle('color').hasValue() ||
                      this.getStyle('color', !0).setValue('black');
                  var l = this.getAttribute('refX'),
                    f = this.getAttribute('refY'),
                    h = this.getAttribute('viewBox'),
                    y = h.hasValue() ? kt(h.getString()) : null,
                    g =
                      !this.root &&
                      'visible' !==
                        this.getAttribute('overflow').getValue('hidden'),
                    p = 0,
                    d = 0,
                    v = 0,
                    m = 0;
                  y && ((p = y[0]), (d = y[1])),
                    this.root ||
                      ((s = this.getStyle('width').getPixels('x')),
                      (c = this.getStyle('height').getPixels('y')),
                      'marker' === this.type &&
                        ((v = p), (m = d), (p = 0), (d = 0))),
                    n.viewPort.setCurrent(s, c),
                    y && ((s = y[2]), (c = y[3])),
                    e.setViewBox({
                      ctx: t,
                      aspectRatio: this.getAttribute(
                        'preserveAspectRatio'
                      ).getString(),
                      width: n.viewPort.width,
                      desiredWidth: s,
                      height: n.viewPort.height,
                      desiredHeight: c,
                      minX: p,
                      minY: d,
                      refX: l.getValue(),
                      refY: f.getValue(),
                      clip: g,
                      clipX: v,
                      clipY: m
                    }),
                    y &&
                      (n.viewPort.removeCurrent(), n.viewPort.setCurrent(s, c));
                }
              },
              {
                key: 'resize',
                value: function(t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : t,
                    r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    n = this.getAttribute('width', !0),
                    i = this.getAttribute('height', !0),
                    a = this.getAttribute('viewBox'),
                    o = this.getAttribute('style'),
                    u = n.getNumber(0),
                    s = i.getNumber(0);
                  if (r)
                    if ('string' == typeof r)
                      this.getAttribute('preserveAspectRatio', !0).setValue(r);
                    else {
                      var c = this.getAttribute('preserveAspectRatio');
                      c.hasValue() &&
                        c.setValue(
                          c.getString().replace(/^\s*(\S.*\S)\s*$/, '$1')
                        );
                    }
                  if (
                    (n.setValue(t),
                    i.setValue(e),
                    a.hasValue() ||
                      a.setValue('0 0 '.concat(u || t, ' ').concat(s || e)),
                    o.hasValue())
                  ) {
                    var l = this.getStyle('width'),
                      f = this.getStyle('height');
                    l.hasValue() && l.setValue(''.concat(t, 'px')),
                      f.hasValue() && f.setValue(''.concat(e, 'px'));
                  }
                }
              }
            ]),
            r
          );
        })(we);
        function Le(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Oe = (function(t) {
          X()(r, t);
          var e = Le(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'rect'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'path',
                value: function(t) {
                  var e = this.getAttribute('x').getPixels('x'),
                    r = this.getAttribute('y').getPixels('y'),
                    n = this.getStyle('width').getPixels('x'),
                    i = this.getStyle('height').getPixels('y'),
                    a = this.getAttribute('rx'),
                    o = this.getAttribute('ry'),
                    u = a.getPixels('x'),
                    s = o.getPixels('y');
                  if (
                    (a.hasValue() && !o.hasValue() && (s = u),
                    o.hasValue() && !a.hasValue() && (u = s),
                    (u = Math.min(u, n / 2)),
                    (s = Math.min(s, i / 2)),
                    t)
                  ) {
                    var c = ((Math.sqrt(2) - 1) / 3) * 4;
                    t.beginPath(),
                      i > 0 &&
                        n > 0 &&
                        (t.moveTo(e + u, r),
                        t.lineTo(e + n - u, r),
                        t.bezierCurveTo(
                          e + n - u + c * u,
                          r,
                          e + n,
                          r + s - c * s,
                          e + n,
                          r + s
                        ),
                        t.lineTo(e + n, r + i - s),
                        t.bezierCurveTo(
                          e + n,
                          r + i - s + c * s,
                          e + n - u + c * u,
                          r + i,
                          e + n - u,
                          r + i
                        ),
                        t.lineTo(e + u, r + i),
                        t.bezierCurveTo(
                          e + u - c * u,
                          r + i,
                          e,
                          r + i - s + c * s,
                          e,
                          r + i - s
                        ),
                        t.lineTo(e, r + s),
                        t.bezierCurveTo(
                          e,
                          r + s - c * s,
                          e + u - c * u,
                          r,
                          e + u,
                          r
                        ),
                        t.closePath());
                  }
                  return new xe(e, r, e + n, r + i);
                }
              },
              {
                key: 'getMarkers',
                value: function() {
                  return null;
                }
              }
            ]),
            r
          );
        })(Te);
        function Ne(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var ze = (function(t) {
          X()(r, t);
          var e = Ne(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'circle'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'path',
                value: function(t) {
                  var e = this.getAttribute('cx').getPixels('x'),
                    r = this.getAttribute('cy').getPixels('y'),
                    n = this.getAttribute('r').getPixels();
                  return (
                    t &&
                      n > 0 &&
                      (t.beginPath(),
                      t.arc(e, r, n, 0, 2 * Math.PI, !1),
                      t.closePath()),
                    new xe(e - n, r - n, e + n, r + n)
                  );
                }
              },
              {
                key: 'getMarkers',
                value: function() {
                  return null;
                }
              }
            ]),
            r
          );
        })(Te);
        function Be(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Fe = (function(t) {
          X()(r, t);
          var e = Be(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'ellipse'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'path',
                value: function(t) {
                  var e = ((Math.sqrt(2) - 1) / 3) * 4,
                    r = this.getAttribute('rx').getPixels('x'),
                    n = this.getAttribute('ry').getPixels('y'),
                    i = this.getAttribute('cx').getPixels('x'),
                    a = this.getAttribute('cy').getPixels('y');
                  return (
                    t &&
                      r > 0 &&
                      n > 0 &&
                      (t.beginPath(),
                      t.moveTo(i + r, a),
                      t.bezierCurveTo(
                        i + r,
                        a + e * n,
                        i + e * r,
                        a + n,
                        i,
                        a + n
                      ),
                      t.bezierCurveTo(
                        i - e * r,
                        a + n,
                        i - r,
                        a + e * n,
                        i - r,
                        a
                      ),
                      t.bezierCurveTo(
                        i - r,
                        a - e * n,
                        i - e * r,
                        a - n,
                        i,
                        a - n
                      ),
                      t.bezierCurveTo(
                        i + e * r,
                        a - n,
                        i + r,
                        a - e * n,
                        i + r,
                        a
                      ),
                      t.closePath()),
                    new xe(i - r, a - n, i + r, a + n)
                  );
                }
              },
              {
                key: 'getMarkers',
                value: function() {
                  return null;
                }
              }
            ]),
            r
          );
        })(Te);
        function Ie(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var je = (function(t) {
          X()(r, t);
          var e = Ie(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'line'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'getPoints',
                value: function() {
                  return [
                    new Yt(
                      this.getAttribute('x1').getPixels('x'),
                      this.getAttribute('y1').getPixels('y')
                    ),
                    new Yt(
                      this.getAttribute('x2').getPixels('x'),
                      this.getAttribute('y2').getPixels('y')
                    )
                  ];
                }
              },
              {
                key: 'path',
                value: function(t) {
                  var e = this.getPoints(),
                    r = l()(e, 2),
                    n = r[0],
                    i = n.x,
                    a = n.y,
                    o = r[1],
                    u = o.x,
                    s = o.y;
                  return (
                    t && (t.beginPath(), t.moveTo(i, a), t.lineTo(u, s)),
                    new xe(i, a, u, s)
                  );
                }
              },
              {
                key: 'getMarkers',
                value: function() {
                  var t = this.getPoints(),
                    e = l()(t, 2),
                    r = e[0],
                    n = e[1],
                    i = r.angleTo(n);
                  return [
                    [r, i],
                    [n, i]
                  ];
                }
              }
            ]),
            r
          );
        })(Te);
        function qe(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Ge = (function(t) {
          X()(r, t);
          var e = qe(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'polyline'),
              (a.points = []),
              (a.points = Yt.parsePath(a.getAttribute('points').getString())),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'path',
                value: function(t) {
                  var e = this.points,
                    r = l()(e, 1)[0],
                    n = r.x,
                    i = r.y,
                    a = new xe(n, i);
                  return (
                    t && (t.beginPath(), t.moveTo(n, i)),
                    e.forEach(function(e) {
                      var r = e.x,
                        n = e.y;
                      a.addPoint(r, n), t && t.lineTo(r, n);
                    }),
                    a
                  );
                }
              },
              {
                key: 'getMarkers',
                value: function() {
                  var t = this.points,
                    e = t.length - 1,
                    r = [];
                  return (
                    t.forEach(function(n, i) {
                      i !== e && r.push([n, n.angleTo(t[i + 1])]);
                    }),
                    r.length > 0 &&
                      r.push([t[t.length - 1], r[r.length - 1][1]]),
                    r
                  );
                }
              }
            ]),
            r
          );
        })(Te);
        function $e(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var _e = (function(t) {
          X()(r, t);
          var e = $e(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'polygon'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'path',
                value: function(t) {
                  var e = it()(_()(r.prototype), 'path', this).call(this, t),
                    n = l()(this.points, 1)[0],
                    i = n.x,
                    a = n.y;
                  return t && (t.lineTo(i, a), t.closePath()), e;
                }
              }
            ]),
            r
          );
        })(Ge);
        function We(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Xe = (function(t) {
          X()(r, t);
          var e = We(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'pattern'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'createPattern',
                value: function(t, e, r) {
                  var n = this.getStyle('width').getPixels('x', !0),
                    i = this.getStyle('height').getPixels('y', !0),
                    a = new De(this.document, null);
                  (a.attributes.viewBox = new Ht(
                    this.document,
                    'viewBox',
                    this.getAttribute('viewBox').getValue()
                  )),
                    (a.attributes.width = new Ht(
                      this.document,
                      'width',
                      ''.concat(n, 'px')
                    )),
                    (a.attributes.height = new Ht(
                      this.document,
                      'height',
                      ''.concat(i, 'px')
                    )),
                    (a.attributes.transform = new Ht(
                      this.document,
                      'transform',
                      this.getAttribute('patternTransform').getValue()
                    )),
                    (a.children = this.children);
                  var o = this.document.createCanvas(n, i),
                    u = o.getContext('2d'),
                    s = this.getAttribute('x'),
                    c = this.getAttribute('y');
                  s.hasValue() &&
                    c.hasValue() &&
                    u.translate(s.getPixels('x', !0), c.getPixels('y', !0)),
                    r.hasValue()
                      ? (this.styles['fill-opacity'] = r)
                      : Reflect.deleteProperty(this.styles, 'fill-opacity');
                  for (var l = -1; l <= 1; l++)
                    for (var f = -1; f <= 1; f++)
                      u.save(),
                        (a.attributes.x = new Ht(
                          this.document,
                          'x',
                          l * o.width
                        )),
                        (a.attributes.y = new Ht(
                          this.document,
                          'y',
                          f * o.height
                        )),
                        a.render(u),
                        u.restore();
                  return t.createPattern(o, 'repeat');
                }
              }
            ]),
            r
          );
        })(ge);
        function He(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Ue = (function(t) {
          X()(r, t);
          var e = He(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'marker'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'render',
                value: function(t, e, r) {
                  if (e) {
                    var n = e.x,
                      i = e.y,
                      a = this.getAttribute('orient').getValue('auto'),
                      o = this.getAttribute('markerUnits').getValue(
                        'strokeWidth'
                      );
                    t.translate(n, i),
                      'auto' === a && t.rotate(r),
                      'strokeWidth' === o && t.scale(t.lineWidth, t.lineWidth),
                      t.save();
                    var u = new De(this.document, null);
                    (u.type = this.type),
                      (u.attributes.viewBox = new Ht(
                        this.document,
                        'viewBox',
                        this.getAttribute('viewBox').getValue()
                      )),
                      (u.attributes.refX = new Ht(
                        this.document,
                        'refX',
                        this.getAttribute('refX').getValue()
                      )),
                      (u.attributes.refY = new Ht(
                        this.document,
                        'refY',
                        this.getAttribute('refY').getValue()
                      )),
                      (u.attributes.width = new Ht(
                        this.document,
                        'width',
                        this.getAttribute('markerWidth').getValue()
                      )),
                      (u.attributes.height = new Ht(
                        this.document,
                        'height',
                        this.getAttribute('markerHeight').getValue()
                      )),
                      (u.attributes.overflow = new Ht(
                        this.document,
                        'overflow',
                        this.getAttribute('overflow').getValue()
                      )),
                      (u.attributes.fill = new Ht(
                        this.document,
                        'fill',
                        this.getAttribute('fill').getColor('black')
                      )),
                      (u.attributes.stroke = new Ht(
                        this.document,
                        'stroke',
                        this.getAttribute('stroke').getValue('none')
                      )),
                      (u.children = this.children),
                      u.render(t),
                      t.restore(),
                      'strokeWidth' === o &&
                        t.scale(1 / t.lineWidth, 1 / t.lineWidth),
                      'auto' === a && t.rotate(-r),
                      t.translate(-n, -i);
                  }
                }
              }
            ]),
            r
          );
        })(ge);
        function Ye(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Qe = (function(t) {
          X()(r, t);
          var e = Ye(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'defs'), t
            );
          }
          return C()(r, [{ key: 'render', value: function() {} }]), r;
        })(ge);
        function Ze(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Ke = (function(t) {
          X()(r, t);
          var e = Ze(r);
          function r() {
            var t;
            return R()(this, r), ((t = e.apply(this, arguments)).type = 'g'), t;
          }
          return (
            C()(r, [
              {
                key: 'getBoundingBox',
                value: function(t) {
                  var e = new xe();
                  return (
                    this.children.forEach(function(r) {
                      e.addBoundingBox(r.getBoundingBox(t));
                    }),
                    e
                  );
                }
              }
            ]),
            r
          );
        })(we);
        function Je(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var tr = (function(t) {
          X()(r, t);
          var e = Je(r);
          function r(t, n, i) {
            var a;
            R()(this, r),
              ((a = e.call(this, t, n, i)).attributesToInherit = [
                'gradientUnits'
              ]),
              (a.stops = []);
            var o = ct()(a),
              u = o.stops;
            return (
              o.children.forEach(function(t) {
                'stop' === t.type && u.push(t);
              }),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'getGradientUnits',
                value: function() {
                  return this.getAttribute('gradientUnits').getString(
                    'objectBoundingBox'
                  );
                }
              },
              {
                key: 'createGradient',
                value: function(t, e, r) {
                  var n = this,
                    i = this;
                  this.getHrefAttribute().hasValue() &&
                    ((i = this.getHrefAttribute().getDefinition()),
                    this.inheritStopContainer(i));
                  var a = i.stops,
                    o = this.getGradient(t, e);
                  if (!o)
                    return this.addParentOpacity(r, a[a.length - 1].color);
                  if (
                    (a.forEach(function(t) {
                      o.addColorStop(t.offset, n.addParentOpacity(r, t.color));
                    }),
                    this.getAttribute('gradientTransform').hasValue())
                  ) {
                    var u = this.document,
                      s = u.screen,
                      c = s.MAX_VIRTUAL_PIXELS,
                      f = s.viewPort,
                      h = l()(f.viewPorts, 1)[0],
                      y = new Oe(u, null);
                    (y.attributes.x = new Ht(u, 'x', -c / 3)),
                      (y.attributes.y = new Ht(u, 'y', -c / 3)),
                      (y.attributes.width = new Ht(u, 'width', c)),
                      (y.attributes.height = new Ht(u, 'height', c));
                    var g = new Ke(u, null);
                    (g.attributes.transform = new Ht(
                      u,
                      'transform',
                      this.getAttribute('gradientTransform').getValue()
                    )),
                      (g.children = [y]);
                    var p = new De(u, null);
                    (p.attributes.x = new Ht(u, 'x', 0)),
                      (p.attributes.y = new Ht(u, 'y', 0)),
                      (p.attributes.width = new Ht(u, 'width', h.width)),
                      (p.attributes.height = new Ht(u, 'height', h.height)),
                      (p.children = [g]);
                    var d = u.createCanvas(h.width, h.height),
                      v = d.getContext('2d');
                    return (
                      (v.fillStyle = o),
                      p.render(v),
                      v.createPattern(d, 'no-repeat')
                    );
                  }
                  return o;
                }
              },
              {
                key: 'inheritStopContainer',
                value: function(t) {
                  var e = this;
                  this.attributesToInherit.forEach(function(r) {
                    !e.getAttribute(r).hasValue() &&
                      t.getAttribute(r).hasValue() &&
                      e
                        .getAttribute(r, !0)
                        .setValue(t.getAttribute(r).getValue());
                  });
                }
              },
              {
                key: 'addParentOpacity',
                value: function(t, e) {
                  return t.hasValue()
                    ? new Ht(this.document, 'color', e).addOpacity(t).getColor()
                    : e;
                }
              }
            ]),
            r
          );
        })(ge);
        function er(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var rr = (function(t) {
          X()(r, t);
          var e = er(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'linearGradient'),
              a.attributesToInherit.push('x1', 'y1', 'x2', 'y2'),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'getGradient',
                value: function(t, e) {
                  var r = 'objectBoundingBox' === this.getGradientUnits(),
                    n = r ? e.getBoundingBox(t) : null;
                  if (r && !n) return null;
                  this.getAttribute('x1').hasValue() ||
                    this.getAttribute('y1').hasValue() ||
                    this.getAttribute('x2').hasValue() ||
                    this.getAttribute('y2').hasValue() ||
                    (this.getAttribute('x1', !0).setValue(0),
                    this.getAttribute('y1', !0).setValue(0),
                    this.getAttribute('x2', !0).setValue(1),
                    this.getAttribute('y2', !0).setValue(0));
                  var i = r
                      ? n.x + n.width * this.getAttribute('x1').getNumber()
                      : this.getAttribute('x1').getPixels('x'),
                    a = r
                      ? n.y + n.height * this.getAttribute('y1').getNumber()
                      : this.getAttribute('y1').getPixels('y'),
                    o = r
                      ? n.x + n.width * this.getAttribute('x2').getNumber()
                      : this.getAttribute('x2').getPixels('x'),
                    u = r
                      ? n.y + n.height * this.getAttribute('y2').getNumber()
                      : this.getAttribute('y2').getPixels('y');
                  return i === o && a === u
                    ? null
                    : t.createLinearGradient(i, a, o, u);
                }
              }
            ]),
            r
          );
        })(tr);
        function nr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var ir = (function(t) {
          X()(r, t);
          var e = nr(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'radialGradient'),
              a.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr'),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'getGradient',
                value: function(t, e) {
                  var r = 'objectBoundingBox' === this.getGradientUnits(),
                    n = e.getBoundingBox(t);
                  if (r && !n) return null;
                  this.getAttribute('cx').hasValue() ||
                    this.getAttribute('cx', !0).setValue('50%'),
                    this.getAttribute('cy').hasValue() ||
                      this.getAttribute('cy', !0).setValue('50%'),
                    this.getAttribute('r').hasValue() ||
                      this.getAttribute('r', !0).setValue('50%');
                  var i = r
                      ? n.x + n.width * this.getAttribute('cx').getNumber()
                      : this.getAttribute('cx').getPixels('x'),
                    a = r
                      ? n.y + n.height * this.getAttribute('cy').getNumber()
                      : this.getAttribute('cy').getPixels('y'),
                    o = i,
                    u = a;
                  this.getAttribute('fx').hasValue() &&
                    (o = r
                      ? n.x + n.width * this.getAttribute('fx').getNumber()
                      : this.getAttribute('fx').getPixels('x')),
                    this.getAttribute('fy').hasValue() &&
                      (u = r
                        ? n.y + n.height * this.getAttribute('fy').getNumber()
                        : this.getAttribute('fy').getPixels('y'));
                  var s = r
                      ? ((n.width + n.height) / 2) *
                        this.getAttribute('r').getNumber()
                      : this.getAttribute('r').getPixels(),
                    c = this.getAttribute('fr').getPixels();
                  return t.createRadialGradient(o, u, c, i, a, s);
                }
              }
            ]),
            r
          );
        })(tr);
        function ar(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var or = (function(t) {
          X()(r, t);
          var e = ar(r);
          function r(t, n, i) {
            var a;
            R()(this, r), ((a = e.call(this, t, n, i)).type = 'stop');
            var o = Math.max(
                0,
                Math.min(1, a.getAttribute('offset').getNumber())
              ),
              u = a.getStyle('stop-opacity'),
              s = a.getStyle('stop-color', !0);
            return (
              '' === s.getString() && s.setValue('#000'),
              u.hasValue() && (s = s.addOpacity(u)),
              (a.offset = o),
              (a.color = s.getColor()),
              a
            );
          }
          return r;
        })(ge);
        function ur(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var sr = (function(t) {
          X()(r, t);
          var e = ur(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'animate'),
              (a.duration = 0),
              (a.initialValue = null),
              (a.initialUnits = ''),
              (a.removed = !1),
              (a.frozen = !1),
              t.screen.animations.push(ct()(a)),
              (a.begin = a.getAttribute('begin').getMilliseconds()),
              (a.maxDuration =
                a.begin + a.getAttribute('dur').getMilliseconds()),
              (a.from = a.getAttribute('from')),
              (a.to = a.getAttribute('to')),
              (a.values = a.getAttribute('values')),
              a.values.hasValue() &&
                a.values.setValue(a.values.getString().split(';')),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'getProperty',
                value: function() {
                  var t = this.getAttribute('attributeType').getString(),
                    e = this.getAttribute('attributeName').getString();
                  return 'CSS' === t
                    ? this.parent.getStyle(e, !0)
                    : this.parent.getAttribute(e, !0);
                }
              },
              {
                key: 'calcValue',
                value: function() {
                  var t = this.initialUnits,
                    e = this.getProgress(),
                    r = e.progress,
                    n = e.from,
                    i = e.to,
                    a = n.getNumber() + (i.getNumber() - n.getNumber()) * r;
                  return '%' === t && (a *= 100), ''.concat(a).concat(t);
                }
              },
              {
                key: 'update',
                value: function(t) {
                  var e = this.parent,
                    r = this.getProperty();
                  if (
                    (this.initialValue ||
                      ((this.initialValue = r.getString()),
                      (this.initialUnits = r.getUnits())),
                    this.duration > this.maxDuration)
                  ) {
                    var n = this.getAttribute('fill').getString('remove');
                    if (
                      'indefinite' ===
                        this.getAttribute('repeatCount').getString() ||
                      'indefinite' ===
                        this.getAttribute('repeatDur').getString()
                    )
                      this.duration = 0;
                    else if ('freeze' !== n || this.frozen) {
                      if ('remove' === n && !this.removed)
                        return (
                          (this.removed = !0),
                          r.setValue(
                            e.animationFrozen
                              ? e.animationFrozenValue
                              : this.initialValue
                          ),
                          !0
                        );
                    } else
                      (this.frozen = !0),
                        (e.animationFrozen = !0),
                        (e.animationFrozenValue = r.getString());
                    return !1;
                  }
                  this.duration += t;
                  var i = !1;
                  if (this.begin < this.duration) {
                    var a = this.calcValue(),
                      o = this.getAttribute('type');
                    if (o.hasValue()) {
                      var u = o.getString();
                      a = ''.concat(u, '(').concat(a, ')');
                    }
                    r.setValue(a), (i = !0);
                  }
                  return i;
                }
              },
              {
                key: 'getProgress',
                value: function() {
                  var t = this.document,
                    e = this.values,
                    r = {
                      progress:
                        (this.duration - this.begin) /
                        (this.maxDuration - this.begin)
                    };
                  if (e.hasValue()) {
                    var n = r.progress * (e.getValue().length - 1),
                      i = Math.floor(n),
                      a = Math.ceil(n);
                    (r.from = new Ht(t, 'from', parseFloat(e.getValue()[i]))),
                      (r.to = new Ht(t, 'to', parseFloat(e.getValue()[a]))),
                      (r.progress = (n - i) / (a - i));
                  } else (r.from = this.from), (r.to = this.to);
                  return r;
                }
              }
            ]),
            r
          );
        })(ge);
        function cr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var lr = (function(t) {
          X()(r, t);
          var e = cr(r);
          function r() {
            var t;
            return (
              R()(this, r),
              ((t = e.apply(this, arguments)).type = 'animateColor'),
              t
            );
          }
          return (
            C()(r, [
              {
                key: 'calcValue',
                value: function() {
                  var t = this.getProgress(),
                    e = t.progress,
                    r = t.from,
                    n = t.to,
                    i = new F.a(r.getColor()),
                    a = new F.a(n.getColor());
                  if (i.ok && a.ok) {
                    var o = i.r + (a.r - i.r) * e,
                      u = i.g + (a.g - i.g) * e,
                      s = i.b + (a.b - i.b) * e;
                    return 'rgb('
                      .concat(parseInt(o, 10), ', ')
                      .concat(parseInt(u, 10), ', ')
                      .concat(parseInt(s, 10), ')');
                  }
                  return this.getAttribute('from').getColor();
                }
              }
            ]),
            r
          );
        })(sr);
        function fr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var hr = (function(t) {
          X()(r, t);
          var e = fr(r);
          function r() {
            var t;
            return (
              R()(this, r),
              ((t = e.apply(this, arguments)).type = 'animateTransform'),
              t
            );
          }
          return (
            C()(r, [
              {
                key: 'calcValue',
                value: function() {
                  var t = this.getProgress(),
                    e = t.progress,
                    r = t.from,
                    n = t.to,
                    i = kt(r.getString()),
                    a = kt(n.getString());
                  return i
                    .map(function(t, r) {
                      return t + (a[r] - t) * e;
                    })
                    .join(' ');
                }
              }
            ]),
            r
          );
        })(sr);
        function yr(t) {
          if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
            if (
              Array.isArray(t) ||
              (t = (function(t, e) {
                if (!t) return;
                if ('string' == typeof t) return gr(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                'Object' === r && t.constructor && (r = t.constructor.name);
                if ('Map' === r || 'Set' === r) return Array.from(r);
                if (
                  'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return gr(t, e);
              })(t))
            ) {
              var e = 0,
                r = function() {};
              return {
                s: r,
                n: function() {
                  return e >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[e++] };
                },
                e: function(t) {
                  throw t;
                },
                f: r
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var n,
            i,
            a = !0,
            o = !1;
          return {
            s: function() {
              n = t[Symbol.iterator]();
            },
            n: function() {
              var t = n.next();
              return (a = t.done), t;
            },
            e: function(t) {
              (o = !0), (i = t);
            },
            f: function() {
              try {
                a || null == n.return || n.return();
              } finally {
                if (o) throw i;
              }
            }
          };
        }
        function gr(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function pr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var dr = (function(t) {
          X()(r, t);
          var e = pr(r);
          function r(t, n, i) {
            var a;
            R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'font'),
              (a.glyphs = {}),
              (a.horizAdvX = a.getAttribute('horiz-adv-x').getNumber());
            var o,
              u = t.definitions,
              s = yr(ct()(a).children);
            try {
              for (s.s(); !(o = s.n()).done; ) {
                var c = o.value;
                switch (c.type) {
                  case 'font-face':
                    a.fontFace = c;
                    var l = c.getStyle('font-family');
                    l.hasValue() && (u[l.getString()] = ct()(a));
                    break;
                  case 'missing-glyph':
                    a.missingGlyph = c;
                    break;
                  case 'glyph':
                    var f = c;
                    f.arabicForm
                      ? ((a.isRTL = !0),
                        (a.isArabic = !0),
                        void 0 === a.glyphs[f.unicode] &&
                          (a.glyphs[f.unicode] = {}),
                        (a.glyphs[f.unicode][f.arabicForm] = f))
                      : (a.glyphs[f.unicode] = f);
                }
              }
            } catch (t) {
              s.e(t);
            } finally {
              s.f();
            }
            return a;
          }
          return C()(r, [{ key: 'render', value: function() {} }]), r;
        })(ge);
        function vr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var mr = (function(t) {
          X()(r, t);
          var e = vr(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'font-face'),
              (a.ascent = a.getAttribute('ascent').getNumber()),
              (a.descent = a.getAttribute('descent').getNumber()),
              (a.unitsPerEm = a.getAttribute('units-per-em').getNumber()),
              a
            );
          }
          return r;
        })(ge);
        function xr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var br = (function(t) {
          X()(r, t);
          var e = xr(r);
          function r() {
            var t;
            return (
              R()(this, r),
              ((t = e.apply(this, arguments)).type = 'missing-glyph'),
              (t.horizAdvX = 0),
              t
            );
          }
          return r;
        })(Te);
        function wr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var kr = (function(t) {
          X()(r, t);
          var e = wr(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'glyph'),
              (a.horizAdvX = a.getAttribute('horiz-adv-x').getNumber()),
              (a.unicode = a.getAttribute('unicode').getString()),
              (a.arabicForm = a.getAttribute('arabic-form').getString()),
              a
            );
          }
          return r;
        })(Te);
        function Sr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Pr = (function(t) {
          X()(r, t);
          var e = Sr(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'tref'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'getText',
                value: function() {
                  var t = this.getHrefAttribute().getDefinition();
                  if (t) {
                    var e = t.children[0];
                    if (e) return e.getText();
                  }
                  return '';
                }
              }
            ]),
            r
          );
        })(Se);
        function Rr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Ar = (function(t) {
          X()(r, t);
          var e = Rr(r);
          function r(t, n, i) {
            var a;
            R()(this, r), ((a = e.call(this, t, n, i)).type = 'a');
            var o = n.childNodes,
              u = o[0],
              s =
                o.length > 0 &&
                Array.from(o).every(function(t) {
                  return 3 === t.nodeType;
                });
            return (a.hasText = s), (a.text = s ? a.getTextFromNode(u) : ''), a;
          }
          return (
            C()(r, [
              {
                key: 'getText',
                value: function() {
                  return this.text;
                }
              },
              {
                key: 'renderChildren',
                value: function(t) {
                  if (this.hasText) {
                    it()(_()(r.prototype), 'renderChildren', this).call(
                      this,
                      t
                    );
                    var e = this.document,
                      n = this.x,
                      i = this.y,
                      a = e.screen.mouse,
                      o = new Ht(e, 'fontSize', me.parse(e.ctx.font).fontSize);
                    a.isWorking() &&
                      a.checkBoundingBox(
                        this,
                        new xe(
                          n,
                          i - o.getPixels('y'),
                          n + this.measureText(t),
                          i
                        )
                      );
                  } else if (this.children.length > 0) {
                    var u = new Ke(this.document, null);
                    (u.children = this.children),
                      (u.parent = this),
                      u.render(t);
                  }
                }
              },
              {
                key: 'onClick',
                value: function() {
                  var t = this.document.window;
                  t && t.open(this.getHrefAttribute().getString());
                }
              },
              {
                key: 'onMouseMove',
                value: function() {
                  this.document.ctx.canvas.style.cursor = 'pointer';
                }
              }
            ]),
            r
          );
        })(Se);
        function Cr(t) {
          if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
            if (
              Array.isArray(t) ||
              (t = (function(t, e) {
                if (!t) return;
                if ('string' == typeof t) return Er(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                'Object' === r && t.constructor && (r = t.constructor.name);
                if ('Map' === r || 'Set' === r) return Array.from(r);
                if (
                  'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return Er(t, e);
              })(t))
            ) {
              var e = 0,
                r = function() {};
              return {
                s: r,
                n: function() {
                  return e >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[e++] };
                },
                e: function(t) {
                  throw t;
                },
                f: r
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var n,
            i,
            a = !0,
            o = !1;
          return {
            s: function() {
              n = t[Symbol.iterator]();
            },
            n: function() {
              var t = n.next();
              return (a = t.done), t;
            },
            e: function(t) {
              (o = !0), (i = t);
            },
            f: function() {
              try {
                a || null == n.return || n.return();
              } finally {
                if (o) throw i;
              }
            }
          };
        }
        function Er(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Mr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Tr = (function(t) {
          X()(r, t);
          var e = Mr(r);
          function r(t, n, i) {
            var a;
            R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'textPath'),
              (a.textWidth = 0),
              (a.textHeight = 0),
              (a.pathLength = -1),
              (a.glyphInfo = null),
              (a.letterSpacingCache = []),
              (a.measuresCache = new Map([['', 0]]));
            var o = a.getHrefAttribute().getDefinition();
            return (
              (a.text = a.getTextFromNode()),
              (a.dataArray = a.parsePathData(o)),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'getText',
                value: function() {
                  return this.text;
                }
              },
              {
                key: 'path',
                value: function(t) {
                  var e = this.dataArray;
                  t && t.beginPath(),
                    e.forEach(function(e) {
                      var r = e.command,
                        n = e.points;
                      switch (r) {
                        case 'L':
                          t && t.lineTo(n[0], n[1]);
                          break;
                        case 'M':
                          t && t.moveTo(n[0], n[1]);
                          break;
                        case 'C':
                          t &&
                            t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                          break;
                        case 'Q':
                          t && t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                          break;
                        case 'A':
                          var i = n[0],
                            a = n[1],
                            o = n[2],
                            u = n[3],
                            s = n[4],
                            c = n[5],
                            l = n[6],
                            f = n[7],
                            h = o > u ? o : u,
                            y = o > u ? 1 : o / u,
                            g = o > u ? u / o : 1;
                          t &&
                            (t.translate(i, a),
                            t.rotate(l),
                            t.scale(y, g),
                            t.arc(0, 0, h, s, s + c, Boolean(1 - f)),
                            t.scale(1 / y, 1 / g),
                            t.rotate(-l),
                            t.translate(-i, -a));
                          break;
                        case 'z':
                          t && t.closePath();
                      }
                    });
                }
              },
              {
                key: 'renderChildren',
                value: function(t) {
                  this.setTextData(t), t.save();
                  var e = this.parent.getStyle('text-decoration').getString(),
                    r = this.getFontSize(),
                    n = this.glyphInfo,
                    i = t.fillStyle;
                  'underline' === e && t.beginPath(),
                    n.forEach(function(i, a) {
                      var o = i.p0,
                        u = i.p1,
                        s = i.text;
                      t.save(),
                        t.translate(o.x, o.y),
                        t.rotate(n[a].rotation),
                        t.fillStyle && t.fillText(s, 0, 0),
                        t.strokeStyle && t.strokeText(s, 0, 0),
                        t.restore(),
                        'underline' === e &&
                          (0 === a && t.moveTo(o.x, o.y + r / 8),
                          t.lineTo(u.x, u.y + r / 5));
                    }),
                    'underline' === e &&
                      ((t.lineWidth = r / 20),
                      (t.strokeStyle = i),
                      t.stroke(),
                      t.closePath()),
                    t.restore();
                }
              },
              {
                key: 'getLetterSpacingAt',
                value: function() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return this.letterSpacingCache[t] || 0;
                }
              },
              {
                key: 'findSegmentToFitChar',
                value: function(t, e, r, n, i, a, o, u) {
                  var s = a,
                    c = this.measureText(t, o);
                  ' ' === o && 'justify' === e && r < n && (c += (n - r) / i),
                    u > -1 && (s += this.getLetterSpacingAt(u));
                  var l = this.textHeight / 20,
                    f = {
                      p0: this.getEquidistantPointOnPath(s, l),
                      p1: this.getEquidistantPointOnPath(s + c, l)
                    };
                  return { offset: (s += c), segment: f };
                }
              },
              {
                key: 'measureText',
                value: function(t, e) {
                  var r = this.measuresCache,
                    n = e || this.getText();
                  if (r.has(n)) return r.get(n);
                  var i = this.measureTargetText(t, n);
                  return r.set(n, i), i;
                }
              },
              {
                key: 'setTextData',
                value: function(t) {
                  var e = this;
                  if (!this.glyphInfo) {
                    var r = this.getText(),
                      n = r.split(''),
                      i = r.split(' ').length - 1,
                      a = kt(this.parent.getAttribute('dx').getString('0')),
                      o = this.parent
                        .getStyle('text-anchor')
                        .getString('start'),
                      u = this.getStyle('letter-spacing'),
                      s = this.parent.getStyle('letter-spacing'),
                      c = 0;
                    u.hasValue() && 'inherit' !== u.getValue()
                      ? u.hasValue() &&
                        'initial' !== u.getValue() &&
                        'unset' !== u.getValue() &&
                        (c = u.getPixels())
                      : (c = s.getPixels());
                    var l = [],
                      f = r.length;
                    this.letterSpacingCache = l;
                    for (var h = 0; h < f; h++)
                      l.push(void 0 !== a[h] ? a[h] : c);
                    var y = l.reduce(function(t, e) {
                      return t + e || 0;
                    }, 0);
                    (this.textWidth = this.measureText(t)),
                      (this.textHeight = this.getFontSize());
                    var g = Math.max(this.textWidth + y, 0);
                    this.glyphInfo = [];
                    var p = this.getPathLength(),
                      d = this.getStyle('startOffset').getNumber(0) * p,
                      v = 0;
                    ('middle' !== o && 'center' !== o) || (v = -g / 2),
                      ('end' !== o && 'right' !== o) || (v = -g),
                      (v += d),
                      n.forEach(function(r, a) {
                        var u = e.findSegmentToFitChar(t, o, g, p, i, v, r, a),
                          s = u.offset,
                          c = u.segment;
                        if (((v = s), c.p0 && c.p1)) {
                          var l = e.getLineLength(
                              c.p0.x,
                              c.p0.y,
                              c.p1.x,
                              c.p1.y
                            ),
                            f = e.getPointOnLine(
                              0 + l / 2,
                              c.p0.x,
                              c.p0.y,
                              c.p1.x,
                              c.p1.y
                            ),
                            h = Math.atan2(c.p1.y - c.p0.y, c.p1.x - c.p0.x);
                          e.glyphInfo.push({
                            transposeX: f.x,
                            transposeY: f.y,
                            text: n[a],
                            p0: c.p0,
                            p1: c.p1,
                            rotation: h
                          });
                        }
                      });
                  }
                }
              },
              {
                key: 'parsePathData',
                value: function(t) {
                  if (((this.pathLength = -1), !t)) return [];
                  var e = [],
                    r = t.pathParser;
                  for (r.reset(); !r.isEnd(); ) {
                    var n = r.current,
                      i = n ? n.x : 0,
                      a = n ? n.y : 0,
                      o = '',
                      u = [];
                    r.nextCommand();
                    var s = r.command.toUpperCase();
                    switch (r.command) {
                      case 'M':
                      case 'm':
                        o = this.pathM(r, u);
                        break;
                      case 'L':
                      case 'l':
                        o = this.pathL(r, u);
                        break;
                      case 'H':
                      case 'h':
                        o = this.pathH(r, u);
                        break;
                      case 'V':
                      case 'v':
                        o = this.pathV(r, u);
                        break;
                      case 'C':
                      case 'c':
                        this.pathC(r, u);
                        break;
                      case 'S':
                      case 's':
                        o = this.pathS(r, u);
                        break;
                      case 'Q':
                      case 'q':
                        this.pathQ(r, u);
                        break;
                      case 'T':
                      case 't':
                        o = this.pathT(r, u);
                        break;
                      case 'A':
                      case 'a':
                        u = this.pathA(r);
                        break;
                      case 'Z':
                      case 'z':
                        r.current = r.start;
                    }
                    'Z' !== s
                      ? e.push({
                          command: o || s,
                          points: u,
                          start: { x: i, y: a },
                          pathLength: this.calcLength(i, a, o || s, u)
                        })
                      : e.push({ command: 'z', points: [], pathLength: 0 });
                  }
                  return e;
                }
              },
              {
                key: 'pathM',
                value: function(t, e) {
                  var r = t.getAsCurrentPoint();
                  for (
                    e.push(r.x, r.y), t.start = t.current;
                    !t.isCommandOrEnd();

                  ) {
                    var n = t.getAsCurrentPoint();
                    return e.push(n.x, n.y), 'L';
                  }
                }
              },
              {
                key: 'pathL',
                value: function(t, e) {
                  for (; !t.isCommandOrEnd(); ) {
                    var r = t.getAsCurrentPoint();
                    e.push(r.x, r.y);
                  }
                  return 'L';
                }
              },
              {
                key: 'pathH',
                value: function(t, e) {
                  for (; !t.isCommandOrEnd(); ) {
                    var r = t.current,
                      n = new Yt(
                        (t.isRelativeCommand() ? r.x : 0) + t.getScalar(),
                        r.y
                      );
                    e.push(n.x, n.y), (t.current = n);
                  }
                  return 'L';
                }
              },
              {
                key: 'pathV',
                value: function(t, e) {
                  for (; !t.isCommandOrEnd(); ) {
                    var r = t.current,
                      n = new Yt(
                        r.x,
                        (t.isRelativeCommand() ? r.y : 0) + t.getScalar()
                      );
                    e.push(n.x, n.y), (t.current = n);
                  }
                  return 'L';
                }
              },
              {
                key: 'pathC',
                value: function(t, e) {
                  for (; !t.isCommandOrEnd(); ) {
                    var r = t.getPoint(),
                      n = t.getAsControlPoint(),
                      i = t.getAsCurrentPoint();
                    e.push(r.x, r.y, n.x, n.y, i.x, i.y);
                  }
                }
              },
              {
                key: 'pathS',
                value: function(t, e) {
                  for (; !t.isCommandOrEnd(); ) {
                    var r = t.getReflectedControlPoint(),
                      n = t.getAsControlPoint(),
                      i = t.getAsCurrentPoint();
                    e.push(r.x, r.y, n.x, n.y, i.x, i.y);
                  }
                  return 'C';
                }
              },
              {
                key: 'pathQ',
                value: function(t, e) {
                  for (; !t.isCommandOrEnd(); ) {
                    var r = t.getAsControlPoint(),
                      n = t.getAsCurrentPoint();
                    e.push(r.x, r.y, n.x, n.y);
                  }
                }
              },
              {
                key: 'pathT',
                value: function(t, e) {
                  for (; !t.isCommandOrEnd(); ) {
                    var r = t.getReflectedControlPoint();
                    t.control = r;
                    var n = t.getAsCurrentPoint();
                    e.push(r.x, r.y, n.x, n.y);
                  }
                  return 'Q';
                }
              },
              {
                key: 'pathA',
                value: function(t) {
                  for (; !t.isCommandOrEnd(); ) {
                    var e = t.current,
                      r = t.getScalar(),
                      n = t.getScalar(),
                      i = t.getScalar() * (Math.PI / 180),
                      a = t.getScalar(),
                      o = t.getScalar(),
                      u = t.getAsCurrentPoint(),
                      s = new Yt(
                        (Math.cos(i) * (e.x - u.x)) / 2 +
                          (Math.sin(i) * (e.y - u.y)) / 2,
                        (-Math.sin(i) * (e.x - u.x)) / 2 +
                          (Math.cos(i) * (e.y - u.y)) / 2
                      ),
                      c =
                        Math.pow(s.x, 2) / Math.pow(r, 2) +
                        Math.pow(s.y, 2) / Math.pow(n, 2);
                    c > 1 && ((r *= Math.sqrt(c)), (n *= Math.sqrt(c)));
                    var l =
                      (a === o ? -1 : 1) *
                      Math.sqrt(
                        (Math.pow(r, 2) * Math.pow(n, 2) -
                          Math.pow(r, 2) * Math.pow(s.y, 2) -
                          Math.pow(n, 2) * Math.pow(s.x, 2)) /
                          (Math.pow(r, 2) * Math.pow(s.y, 2) +
                            Math.pow(n, 2) * Math.pow(s.x, 2))
                      );
                    isNaN(l) && (l = 0);
                    var f = new Yt((l * r * s.y) / n, (l * -n * s.x) / r),
                      h = new Yt(
                        (e.x + u.x) / 2 + Math.cos(i) * f.x - Math.sin(i) * f.y,
                        (e.y + u.y) / 2 + Math.sin(i) * f.x + Math.cos(i) * f.y
                      ),
                      y = It([1, 0], [(s.x - f.x) / r, (s.y - f.y) / n]),
                      g = [(s.x - f.x) / r, (s.y - f.y) / n],
                      p = [(-s.x - f.x) / r, (-s.y - f.y) / n],
                      d = It(g, p);
                    return (
                      Ft(g, p) <= -1 && (d = Math.PI),
                      Ft(g, p) >= 1 && (d = 0),
                      0 === o && d > 0 && (d -= 2 * Math.PI),
                      1 === o && d < 0 && (d += 2 * Math.PI),
                      [h.x, h.y, r, n, y, d, i, o]
                    );
                  }
                }
              },
              {
                key: 'calcLength',
                value: function(t, e, r, n) {
                  var i = 0,
                    a = null,
                    o = null,
                    u = 0;
                  switch (r) {
                    case 'L':
                      return this.getLineLength(t, e, n[0], n[1]);
                    case 'C':
                      for (
                        i = 0,
                          a = this.getPointOnCubicBezier(
                            0,
                            t,
                            e,
                            n[0],
                            n[1],
                            n[2],
                            n[3],
                            n[4],
                            n[5]
                          ),
                          u = 0.01;
                        u <= 1;
                        u += 0.01
                      )
                        (o = this.getPointOnCubicBezier(
                          u,
                          t,
                          e,
                          n[0],
                          n[1],
                          n[2],
                          n[3],
                          n[4],
                          n[5]
                        )),
                          (i += this.getLineLength(a.x, a.y, o.x, o.y)),
                          (a = o);
                      return i;
                    case 'Q':
                      for (
                        i = 0,
                          a = this.getPointOnQuadraticBezier(
                            0,
                            t,
                            e,
                            n[0],
                            n[1],
                            n[2],
                            n[3]
                          ),
                          u = 0.01;
                        u <= 1;
                        u += 0.01
                      )
                        (o = this.getPointOnQuadraticBezier(
                          u,
                          t,
                          e,
                          n[0],
                          n[1],
                          n[2],
                          n[3]
                        )),
                          (i += this.getLineLength(a.x, a.y, o.x, o.y)),
                          (a = o);
                      return i;
                    case 'A':
                      i = 0;
                      var s = n[4],
                        c = n[5],
                        l = n[4] + c,
                        f = Math.PI / 180;
                      if (
                        (Math.abs(s - l) < f && (f = Math.abs(s - l)),
                        (a = this.getPointOnEllipticalArc(
                          n[0],
                          n[1],
                          n[2],
                          n[3],
                          s,
                          0
                        )),
                        c < 0)
                      )
                        for (u = s - f; u > l; u -= f)
                          (o = this.getPointOnEllipticalArc(
                            n[0],
                            n[1],
                            n[2],
                            n[3],
                            u,
                            0
                          )),
                            (i += this.getLineLength(a.x, a.y, o.x, o.y)),
                            (a = o);
                      else
                        for (u = s + f; u < l; u += f)
                          (o = this.getPointOnEllipticalArc(
                            n[0],
                            n[1],
                            n[2],
                            n[3],
                            u,
                            0
                          )),
                            (i += this.getLineLength(a.x, a.y, o.x, o.y)),
                            (a = o);
                      return (
                        (o = this.getPointOnEllipticalArc(
                          n[0],
                          n[1],
                          n[2],
                          n[3],
                          l,
                          0
                        )),
                        (i += this.getLineLength(a.x, a.y, o.x, o.y))
                      );
                  }
                  return 0;
                }
              },
              {
                key: 'getPointOnLine',
                value: function(t, e, r, n, i) {
                  var a =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : e,
                    o =
                      arguments.length > 6 && void 0 !== arguments[6]
                        ? arguments[6]
                        : r,
                    u = (i - r) / (n - e + zt),
                    s = Math.sqrt((t * t) / (1 + u * u));
                  n < e && (s *= -1);
                  var c = u * s,
                    l = null;
                  if (n === e) l = { x: a, y: o + c };
                  else if ((o - r) / (a - e + zt) === u)
                    l = { x: a + s, y: o + c };
                  else {
                    var f,
                      h,
                      y = this.getLineLength(e, r, n, i);
                    if (y < zt) return null;
                    var g = (a - e) * (n - e) + (o - r) * (i - r);
                    (f = e + (g /= y * y) * (n - e)), (h = r + g * (i - r));
                    var p = this.getLineLength(a, o, f, h),
                      d = Math.sqrt(t * t - p * p);
                    (s = Math.sqrt((d * d) / (1 + u * u))),
                      n < e && (s *= -1),
                      (l = { x: f + s, y: h + (c = u * s) });
                  }
                  return l;
                }
              },
              {
                key: 'getPointOnPath',
                value: function(t) {
                  var e = this.getPathLength(),
                    r = 0,
                    n = null;
                  if (t < -5e-5 || t - 5e-5 > e) return null;
                  var i,
                    a = Cr(this.dataArray);
                  try {
                    for (a.s(); !(i = a.n()).done; ) {
                      var o = i.value;
                      if (
                        !o ||
                        !(o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < t)
                      ) {
                        var u = t - r,
                          s = 0;
                        switch (o.command) {
                          case 'L':
                            n = this.getPointOnLine(
                              u,
                              o.start.x,
                              o.start.y,
                              o.points[0],
                              o.points[1],
                              o.start.x,
                              o.start.y
                            );
                            break;
                          case 'A':
                            var c = o.points[4],
                              l = o.points[5],
                              f = o.points[4] + l;
                            if (
                              ((s = c + (u / o.pathLength) * l),
                              (l < 0 && s < f) || (l >= 0 && s > f))
                            )
                              break;
                            n = this.getPointOnEllipticalArc(
                              o.points[0],
                              o.points[1],
                              o.points[2],
                              o.points[3],
                              s,
                              o.points[6]
                            );
                            break;
                          case 'C':
                            (s = u / o.pathLength) > 1 && (s = 1),
                              (n = this.getPointOnCubicBezier(
                                s,
                                o.start.x,
                                o.start.y,
                                o.points[0],
                                o.points[1],
                                o.points[2],
                                o.points[3],
                                o.points[4],
                                o.points[5]
                              ));
                            break;
                          case 'Q':
                            (s = u / o.pathLength) > 1 && (s = 1),
                              (n = this.getPointOnQuadraticBezier(
                                s,
                                o.start.x,
                                o.start.y,
                                o.points[0],
                                o.points[1],
                                o.points[2],
                                o.points[3]
                              ));
                        }
                        if (n) return n;
                        break;
                      }
                      r += o.pathLength;
                    }
                  } catch (t) {
                    a.e(t);
                  } finally {
                    a.f();
                  }
                  return null;
                }
              },
              {
                key: 'getLineLength',
                value: function(t, e, r, n) {
                  return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e));
                }
              },
              {
                key: 'getPathLength',
                value: function() {
                  return (
                    -1 === this.pathLength &&
                      (this.pathLength = this.dataArray.reduce(function(t, e) {
                        return e.pathLength > 0 ? t + e.pathLength : t;
                      }, 0)),
                    this.pathLength
                  );
                }
              },
              {
                key: 'getPointOnCubicBezier',
                value: function(t, e, r, n, i, a, o, u, s) {
                  return {
                    x: u * jt(t) + a * qt(t) + n * Gt(t) + e * $t(t),
                    y: s * jt(t) + o * qt(t) + i * Gt(t) + r * $t(t)
                  };
                }
              },
              {
                key: 'getPointOnQuadraticBezier',
                value: function(t, e, r, n, i, a, o) {
                  return {
                    x: a * _t(t) + n * Wt(t) + e * Xt(t),
                    y: o * _t(t) + i * Wt(t) + r * Xt(t)
                  };
                }
              },
              {
                key: 'getPointOnEllipticalArc',
                value: function(t, e, r, n, i, a) {
                  var o = Math.cos(a),
                    u = Math.sin(a),
                    s = r * Math.cos(i),
                    c = n * Math.sin(i);
                  return { x: t + (s * o - c * u), y: e + (s * u + c * o) };
                }
              },
              {
                key: 'buildEquidistantCache',
                value: function(t, e) {
                  var r = this.getPathLength(),
                    n = e || 0.25,
                    i = t || r / 100;
                  if (
                    !this.equidistantCache ||
                    this.equidistantCache.step !== i ||
                    this.equidistantCache.precision !== n
                  ) {
                    this.equidistantCache = {
                      step: i,
                      precision: n,
                      points: []
                    };
                    for (var a = 0, o = 0; o <= r; o += n) {
                      var u = this.getPointOnPath(o),
                        s = this.getPointOnPath(o + n);
                      u &&
                        s &&
                        (a += this.getLineLength(u.x, u.y, s.x, s.y)) >= i &&
                        (this.equidistantCache.points.push({
                          x: u.x,
                          y: u.y,
                          distance: o
                        }),
                        (a -= i));
                    }
                  }
                }
              },
              {
                key: 'getEquidistantPointOnPath',
                value: function(t, e, r) {
                  if (
                    (this.buildEquidistantCache(e, r),
                    t < 0 || t - this.getPathLength() > 5e-5)
                  )
                    return null;
                  var n = Math.round(
                    (t / this.getPathLength()) *
                      (this.equidistantCache.points.length - 1)
                  );
                  return this.equidistantCache.points[n] || null;
                }
              }
            ]),
            r
          );
        })(Se);
        function Vr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Dr = (function(t) {
          X()(r, t);
          var e = Vr(r);
          function r(t, n, i) {
            var a;
            R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'image'),
              (a.loaded = !1);
            var o = a.getHrefAttribute().getString();
            if (!o) return G()(a);
            var u = /\.svg$/.test(o);
            return (
              t.images.push(ct()(a)),
              u ? a.loadSvg(o) : a.loadImage(o),
              (a.isSvg = u),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'loadImage',
                value: (function() {
                  var t = w()(
                    x.a.mark(function t(e) {
                      var r;
                      return x.a.wrap(
                        function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  this.document.createImage(e)
                                );
                              case 3:
                                (r = t.sent), (this.image = r), (t.next = 10);
                                break;
                              case 7:
                                (t.prev = 7),
                                  (t.t0 = t.catch(0)),
                                  console.error(
                                    'Error while loading image "'.concat(
                                      e,
                                      '":'
                                    ),
                                    t.t0
                                  );
                              case 10:
                                this.loaded = !0;
                              case 11:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 7]]
                      );
                    })
                  );
                  return function(e) {
                    return t.apply(this, arguments);
                  };
                })()
              },
              {
                key: 'loadSvg',
                value: (function() {
                  var t = w()(
                    x.a.mark(function t(e) {
                      var r, n;
                      return x.a.wrap(
                        function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  this.document.fetch(e)
                                );
                              case 3:
                                return (r = t.sent), (t.next = 6), r.text();
                              case 6:
                                (n = t.sent), (this.image = n), (t.next = 13);
                                break;
                              case 10:
                                (t.prev = 10),
                                  (t.t0 = t.catch(0)),
                                  console.error(
                                    'Error while loading image "'.concat(
                                      e,
                                      '":'
                                    ),
                                    t.t0
                                  );
                              case 13:
                                this.loaded = !0;
                              case 14:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 10]]
                      );
                    })
                  );
                  return function(e) {
                    return t.apply(this, arguments);
                  };
                })()
              },
              {
                key: 'renderChildren',
                value: function(t) {
                  var e = this.document,
                    r = this.image,
                    n = this.loaded,
                    i = this.getAttribute('x').getPixels('x'),
                    a = this.getAttribute('y').getPixels('y'),
                    o = this.getStyle('width').getPixels('x'),
                    u = this.getStyle('height').getPixels('y');
                  if (n && r && o && u) {
                    if ((t.save(), this.isSvg))
                      e.canvg
                        .forkString(t, this.image, {
                          ignoreMouse: !0,
                          ignoreAnimation: !0,
                          ignoreDimensions: !0,
                          ignoreClear: !0,
                          offsetX: i,
                          offsetY: a,
                          scaleWidth: o,
                          scaleHeight: u
                        })
                        .render();
                    else {
                      var s = this.image;
                      t.translate(i, a),
                        e.setViewBox({
                          ctx: t,
                          aspectRatio: this.getAttribute(
                            'preserveAspectRatio'
                          ).getString(),
                          width: o,
                          desiredWidth: s.width,
                          height: u,
                          desiredHeight: s.height
                        }),
                        this.loaded &&
                          (void 0 === s.complete || s.complete) &&
                          t.drawImage(s, 0, 0);
                    }
                    t.restore();
                  }
                }
              },
              {
                key: 'getBoundingBox',
                value: function() {
                  var t = this.getAttribute('x').getPixels('x'),
                    e = this.getAttribute('y').getPixels('y'),
                    r = this.getStyle('width').getPixels('x'),
                    n = this.getStyle('height').getPixels('y');
                  return new xe(t, e, t + r, e + n);
                }
              }
            ]),
            r
          );
        })(we);
        function Lr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Or = (function(t) {
            X()(r, t);
            var e = Lr(r);
            function r() {
              var t;
              return (
                R()(this, r),
                ((t = e.apply(this, arguments)).type = 'symbol'),
                t
              );
            }
            return C()(r, [{ key: 'render', value: function(t) {} }]), r;
          })(we),
          Nr = (function() {
            function t(e) {
              R()(this, t),
                (this.document = e),
                (this.loaded = !1),
                e.fonts.push(this);
            }
            return (
              C()(t, [
                {
                  key: 'load',
                  value: (function() {
                    var t = w()(
                      x.a.mark(function t(e, r) {
                        var n, i, a;
                        return x.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (n = this.document),
                                    (t.next = 4),
                                    n.canvg.parser.load(r)
                                  );
                                case 4:
                                  (i = t.sent),
                                    (a = i.getElementsByTagName('font')),
                                    Array.from(a).forEach(function(t) {
                                      var r = n.createElement(t);
                                      n.definitions[e] = r;
                                    }),
                                    (t.next = 12);
                                  break;
                                case 9:
                                  (t.prev = 9),
                                    (t.t0 = t.catch(0)),
                                    console.error(
                                      'Error while loading font "'.concat(
                                        r,
                                        '":'
                                      ),
                                      t.t0
                                    );
                                case 12:
                                  this.loaded = !0;
                                case 13:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[0, 9]]
                        );
                      })
                    );
                    return function(e, r) {
                      return t.apply(this, arguments);
                    };
                  })()
                }
              ]),
              t
            );
          })();
        function zr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Br = (function(t) {
          X()(r, t);
          var e = zr(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'style'),
              xt(
                Array.from(n.childNodes)
                  .map(function(t) {
                    return t.data;
                  })
                  .join('')
                  .replace(
                    /(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
                    ''
                  )
                  .replace(/@import.*;/g, '')
              )
                .split('}')
                .forEach(function(e) {
                  var r = e.trim();
                  if (r) {
                    var n = r.split('{'),
                      i = n[0].split(','),
                      a = n[1].split(';');
                    i.forEach(function(e) {
                      var r = e.trim();
                      if (r) {
                        var n = t.styles[r] || {};
                        if (
                          (a.forEach(function(e) {
                            var r = e.indexOf(':'),
                              i = e.substr(0, r).trim(),
                              a = e.substr(r + 1, e.length - r).trim();
                            i && a && (n[i] = new Ht(t, i, a));
                          }),
                          (t.styles[r] = n),
                          (t.stylesSpecificity[r] = Nt(r)),
                          '@font-face' === r)
                        ) {
                          var i = n['font-family']
                            .getString()
                            .replace(/"|'/g, '');
                          n.src
                            .getString()
                            .split(',')
                            .forEach(function(e) {
                              if (e.indexOf('format("svg")') > 0) {
                                var r = Rt(e);
                                r && new Nr(t).load(i, r);
                              }
                            });
                        }
                      }
                    });
                  }
                }),
              a
            );
          }
          return r;
        })(ge);
        function Fr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        Br.parseExternalUrl = Rt;
        var Ir = (function(t) {
          X()(r, t);
          var e = Fr(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'use'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'setContext',
                value: function(t) {
                  it()(_()(r.prototype), 'setContext', this).call(this, t);
                  var e = this.getAttribute('x'),
                    n = this.getAttribute('y');
                  e.hasValue() && t.translate(e.getPixels('x'), 0),
                    n.hasValue() && t.translate(0, n.getPixels('y'));
                }
              },
              {
                key: 'path',
                value: function(t) {
                  var e = this.element;
                  e && e.path(t);
                }
              },
              {
                key: 'renderChildren',
                value: function(t) {
                  var e = this.document,
                    r = this.element;
                  if (r) {
                    var n = r;
                    if (
                      ('symbol' === r.type &&
                        (((n = new De(e, null)).attributes.viewBox = new Ht(
                          e,
                          'viewBox',
                          r.getAttribute('viewBox').getString()
                        )),
                        (n.attributes.preserveAspectRatio = new Ht(
                          e,
                          'preserveAspectRatio',
                          r.getAttribute('preserveAspectRatio').getString()
                        )),
                        (n.attributes.overflow = new Ht(
                          e,
                          'overflow',
                          r.getAttribute('overflow').getString()
                        )),
                        (n.children = r.children)),
                      'svg' === n.type)
                    ) {
                      var i = this.getStyle('width', !1, !0),
                        a = this.getStyle('height', !1, !0);
                      i.hasValue() &&
                        (n.attributes.width = new Ht(
                          e,
                          'width',
                          i.getString()
                        )),
                        a.hasValue() &&
                          (n.attributes.height = new Ht(
                            e,
                            'height',
                            a.getString()
                          ));
                    }
                    var o = n.parent;
                    (n.parent = this), n.render(t), (n.parent = o);
                  }
                }
              },
              {
                key: 'getBoundingBox',
                value: function(t) {
                  var e = this.element;
                  return e ? e.getBoundingBox(t) : null;
                }
              },
              {
                key: 'elementTransform',
                value: function() {
                  var t = this.document,
                    e = this.element;
                  return ye.fromElement(t, e);
                }
              },
              {
                key: 'element',
                get: function() {
                  return (
                    this._element ||
                      (this._element = this.getHrefAttribute().getDefinition()),
                    this._element
                  );
                }
              }
            ]),
            r
          );
        })(we);
        function jr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        function qr(t, e, r, n, i, a) {
          return t[r * n * 4 + 4 * e + a];
        }
        function Gr(t, e, r, n, i, a, o) {
          t[r * n * 4 + 4 * e + a] = o;
        }
        function $r(t, e, r) {
          var n = t[e];
          return n * (n < 0 ? r - 255 : r);
        }
        function _r(t, e, r, n) {
          return e + Math.cos(t) * r + Math.sin(t) * n;
        }
        var Wr = (function(t) {
          X()(r, t);
          var e = jr(r);
          function r(t, n, i) {
            var a;
            R()(this, r), ((a = e.call(this, t, n, i)).type = 'feColorMatrix');
            var o = kt(a.getAttribute('values').getString());
            switch (a.getAttribute('type').getString('matrix')) {
              case 'saturate':
                var u = o[0];
                o = [
                  0.213 + 0.787 * u,
                  0.715 - 0.715 * u,
                  0.072 - 0.072 * u,
                  0,
                  0,
                  0.213 - 0.213 * u,
                  0.715 + 0.285 * u,
                  0.072 - 0.072 * u,
                  0,
                  0,
                  0.213 - 0.213 * u,
                  0.715 - 0.715 * u,
                  0.072 + 0.928 * u,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                ];
                break;
              case 'hueRotate':
                var s = (o[0] * Math.PI) / 180;
                o = [
                  _r(s, 0.213, 0.787, -0.213),
                  _r(s, 0.715, -0.715, -0.715),
                  _r(s, 0.072, -0.072, 0.928),
                  0,
                  0,
                  _r(s, 0.213, -0.213, 0.143),
                  _r(s, 0.715, 0.285, 0.14),
                  _r(s, 0.072, -0.072, -0.283),
                  0,
                  0,
                  _r(s, 0.213, -0.213, -0.787),
                  _r(s, 0.715, -0.715, 0.715),
                  _r(s, 0.072, 0.928, 0.072),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                ];
                break;
              case 'luminanceToAlpha':
                o = [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0.2125,
                  0.7154,
                  0.0721,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1
                ];
            }
            return (
              (a.matrix = o),
              (a.includeOpacity = a.getAttribute('includeOpacity').hasValue()),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'apply',
                value: function(t, e, r, n, i) {
                  for (
                    var a = this.includeOpacity,
                      o = this.matrix,
                      u = t.getImageData(0, 0, n, i),
                      s = 0;
                    s < i;
                    s++
                  )
                    for (var c = 0; c < n; c++) {
                      var l = qr(u.data, c, s, n, 0, 0),
                        f = qr(u.data, c, s, n, 0, 1),
                        h = qr(u.data, c, s, n, 0, 2),
                        y = qr(u.data, c, s, n, 0, 3),
                        g =
                          $r(o, 0, l) +
                          $r(o, 1, f) +
                          $r(o, 2, h) +
                          $r(o, 3, y) +
                          $r(o, 4, 1),
                        p =
                          $r(o, 5, l) +
                          $r(o, 6, f) +
                          $r(o, 7, h) +
                          $r(o, 8, y) +
                          $r(o, 9, 1),
                        d =
                          $r(o, 10, l) +
                          $r(o, 11, f) +
                          $r(o, 12, h) +
                          $r(o, 13, y) +
                          $r(o, 14, 1),
                        v =
                          $r(o, 15, l) +
                          $r(o, 16, f) +
                          $r(o, 17, h) +
                          $r(o, 18, y) +
                          $r(o, 19, 1);
                      a && ((g = p = d = 0), (v *= y / 255)),
                        Gr(u.data, c, s, n, 0, 0, g),
                        Gr(u.data, c, s, n, 0, 1, p),
                        Gr(u.data, c, s, n, 0, 2, d),
                        Gr(u.data, c, s, n, 0, 3, v);
                    }
                  t.clearRect(0, 0, n, i), t.putImageData(u, 0, 0);
                }
              }
            ]),
            r
          );
        })(ge);
        function Xr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Hr = (function(t) {
          X()(r, t);
          var e = Xr(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'mask'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'apply',
                value: function(t, e) {
                  var n = this.document,
                    i = this.getAttribute('x').getPixels('x'),
                    a = this.getAttribute('y').getPixels('y'),
                    o = this.getStyle('width').getPixels('x'),
                    u = this.getStyle('height').getPixels('y');
                  if (!o && !u) {
                    var s = new xe();
                    this.children.forEach(function(e) {
                      s.addBoundingBox(e.getBoundingBox(t));
                    }),
                      (i = Math.floor(s.x1)),
                      (a = Math.floor(s.y1)),
                      (o = Math.floor(s.width)),
                      (u = Math.floor(s.height));
                  }
                  var c = this.removeStyles(e, r.ignoreStyles),
                    l = n.createCanvas(i + o, a + u),
                    f = l.getContext('2d');
                  n.screen.setDefaults(f),
                    this.renderChildren(f),
                    new Wr(n, {
                      nodeType: 1,
                      childNodes: [],
                      attributes: [
                        { nodeName: 'type', value: 'luminanceToAlpha' },
                        { nodeName: 'includeOpacity', value: 'true' }
                      ]
                    }).apply(f, 0, 0, i + o, a + u);
                  var h = n.createCanvas(i + o, a + u),
                    y = h.getContext('2d');
                  n.screen.setDefaults(y),
                    e.render(y),
                    (y.globalCompositeOperation = 'destination-in'),
                    (y.fillStyle = f.createPattern(l, 'no-repeat')),
                    y.fillRect(0, 0, i + o, a + u),
                    (t.fillStyle = y.createPattern(h, 'no-repeat')),
                    t.fillRect(0, 0, i + o, a + u),
                    this.restoreStyles(e, c);
                }
              },
              { key: 'render', value: function(t) {} }
            ]),
            r
          );
        })(ge);
        function Ur(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        Hr.ignoreStyles = ['mask', 'transform', 'clip-path'];
        var Yr = function() {},
          Qr = (function(t) {
            X()(r, t);
            var e = Ur(r);
            function r() {
              var t;
              return (
                R()(this, r),
                ((t = e.apply(this, arguments)).type = 'clipPath'),
                t
              );
            }
            return (
              C()(r, [
                {
                  key: 'apply',
                  value: function(t) {
                    var e = this.document,
                      r = Reflect.getPrototypeOf(t),
                      n = t.beginPath,
                      i = t.closePath;
                    r && ((r.beginPath = Yr), (r.closePath = Yr)),
                      Reflect.apply(n, t, []),
                      this.children.forEach(function(n) {
                        if (void 0 !== n.path) {
                          var a =
                            void 0 !== n.elementTransform
                              ? n.elementTransform()
                              : null;
                          a || (a = ye.fromElement(e, n)),
                            a && a.apply(t),
                            n.path(t),
                            r && (r.closePath = i),
                            a && a.unapply(t);
                        }
                      }),
                      Reflect.apply(i, t, []),
                      t.clip(),
                      r && ((r.beginPath = n), (r.closePath = i));
                  }
                },
                { key: 'render', value: function(t) {} }
              ]),
              r
            );
          })(ge);
        function Zr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var Kr = (function(t) {
          X()(r, t);
          var e = Zr(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'filter'), t
            );
          }
          return (
            C()(r, [
              {
                key: 'apply',
                value: function(t, e) {
                  var n = this.document,
                    i = this.children,
                    a = e.getBoundingBox(t);
                  if (a) {
                    var o = 0,
                      u = 0;
                    i.forEach(function(t) {
                      var e = t.extraFilterDistance || 0;
                      (o = Math.max(o, e)), (u = Math.max(u, e));
                    });
                    var s = Math.floor(a.width),
                      c = Math.floor(a.height),
                      l = s + 2 * o,
                      f = c + 2 * u;
                    if (!(l < 1 || f < 1)) {
                      var h = Math.floor(a.x),
                        y = Math.floor(a.y),
                        g = this.removeStyles(e, r.ignoreStyles),
                        p = n.createCanvas(l, f),
                        d = p.getContext('2d');
                      n.screen.setDefaults(d),
                        d.translate(-h + o, -y + u),
                        e.render(d),
                        i.forEach(function(t) {
                          'function' == typeof t.apply &&
                            t.apply(d, 0, 0, l, f);
                        }),
                        t.drawImage(p, 0, 0, l, f, h - o, y - u, l, f),
                        this.restoreStyles(e, g);
                    }
                  }
                }
              },
              { key: 'render', value: function(t) {} }
            ]),
            r
          );
        })(ge);
        function Jr(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        Kr.ignoreStyles = ['filter', 'transform', 'clip-path'];
        var tn = (function(t) {
          X()(r, t);
          var e = Jr(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'feDropShadow'),
              a.addStylesFromStyleDefinition(),
              a
            );
          }
          return (
            C()(r, [{ key: 'apply', value: function(t, e, r, n, i) {} }]), r
          );
        })(ge);
        function en(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var rn = (function(t) {
          X()(r, t);
          var e = en(r);
          function r() {
            var t;
            return (
              R()(this, r),
              ((t = e.apply(this, arguments)).type = 'feMorphology'),
              t
            );
          }
          return (
            C()(r, [{ key: 'apply', value: function(t, e, r, n, i) {} }]), r
          );
        })(ge);
        function nn(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var an = (function(t) {
          X()(r, t);
          var e = nn(r);
          function r() {
            var t;
            return (
              R()(this, r),
              ((t = e.apply(this, arguments)).type = 'feComposite'),
              t
            );
          }
          return (
            C()(r, [{ key: 'apply', value: function(t, e, r, n, i) {} }]), r
          );
        })(ge);
        function on(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var un = (function(t) {
          X()(r, t);
          var e = on(r);
          function r(t, n, i) {
            var a;
            return (
              R()(this, r),
              ((a = e.call(this, t, n, i)).type = 'feGaussianBlur'),
              (a.blurRadius = Math.floor(
                a.getAttribute('stdDeviation').getNumber()
              )),
              (a.extraFilterDistance = a.blurRadius),
              a
            );
          }
          return (
            C()(r, [
              {
                key: 'apply',
                value: function(t, e, r, n, i) {
                  var a = this.document,
                    o = this.blurRadius,
                    u = a.window ? a.window.document.body : null,
                    s = t.canvas;
                  (s.id = a.getUniqueId()),
                    u && ((s.style.display = 'none'), u.appendChild(s)),
                    Object(mt.a)(s, e, r, n, i, o),
                    u && u.removeChild(s);
                }
              }
            ]),
            r
          );
        })(ge);
        function sn(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var cn = (function(t) {
          X()(r, t);
          var e = sn(r);
          function r() {
            var t;
            return (
              R()(this, r), ((t = e.apply(this, arguments)).type = 'title'), t
            );
          }
          return r;
        })(ge);
        function ln(t) {
          return function() {
            var e,
              r = _()(t);
            if (
              (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              var n = _()(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return G()(this, e);
          };
        }
        var fn = (function(t) {
            X()(r, t);
            var e = ln(r);
            function r() {
              var t;
              return (
                R()(this, r), ((t = e.apply(this, arguments)).type = 'desc'), t
              );
            }
            return r;
          })(ge),
          hn = {
            svg: De,
            rect: Oe,
            circle: ze,
            ellipse: Fe,
            line: je,
            polyline: Ge,
            polygon: _e,
            path: Te,
            pattern: Xe,
            marker: Ue,
            defs: Qe,
            linearGradient: rr,
            radialGradient: ir,
            stop: or,
            animate: sr,
            animateColor: lr,
            animateTransform: hr,
            font: dr,
            'font-face': mr,
            'missing-glyph': br,
            glyph: kr,
            text: Se,
            tspan: Re,
            tref: Pr,
            a: Ar,
            textPath: Tr,
            image: Dr,
            g: Ke,
            symbol: Or,
            style: Br,
            use: Ir,
            mask: Hr,
            clipPath: Qr,
            filter: Kr,
            feDropShadow: tn,
            feMorphology: rn,
            feComposite: an,
            feColorMatrix: Wr,
            feGaussianBlur: un,
            title: cn,
            desc: fn
          };
        function yn(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function gn() {
          return (gn = w()(
            x.a.mark(function t(e) {
              var r,
                n,
                i = arguments;
              return x.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = i.length > 1 && void 0 !== i[1] && i[1]),
                        (n = document.createElement('img')),
                        r && (n.crossOrigin = 'Anonymous'),
                        t.abrupt(
                          'return',
                          new Promise(function(t, r) {
                            (n.onload = function() {
                              t(n);
                            }),
                              (n.onerror = function() {
                                r();
                              }),
                              (n.src = e);
                          })
                        )
                      );
                    case 4:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        var pn = (function() {
          function t(e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = r.rootEmSize,
              i = void 0 === n ? 12 : n,
              a = r.emSize,
              o = void 0 === a ? 12 : a,
              u = r.createCanvas,
              s = void 0 === u ? t.createCanvas : u,
              c = r.createImage,
              l = void 0 === c ? t.createImage : c,
              f = r.anonymousCrossOrigin;
            R()(this, t),
              (this.canvg = e),
              (this.definitions = {}),
              (this.styles = {}),
              (this.stylesSpecificity = {}),
              (this.images = []),
              (this.fonts = []),
              (this.emSizeStack = []),
              (this.uniqueId = 0),
              (this.screen = e.screen),
              (this.rootEmSize = i),
              (this.emSize = o),
              (this.createCanvas = s),
              (this.createImage = this.bindCreateImage(l, f)),
              this.screen.wait(this.isImagesLoaded.bind(this)),
              this.screen.wait(this.isFontsLoaded.bind(this));
          }
          return (
            C()(t, [
              {
                key: 'bindCreateImage',
                value: function(t, e) {
                  return 'boolean' == typeof e
                    ? function(r, n) {
                        return t(r, 'boolean' == typeof n ? n : e);
                      }
                    : t;
                }
              },
              {
                key: 'popEmSize',
                value: function() {
                  this.emSizeStack.pop();
                }
              },
              {
                key: 'getUniqueId',
                value: function() {
                  return 'canvg'.concat(++this.uniqueId);
                }
              },
              {
                key: 'isImagesLoaded',
                value: function() {
                  return this.images.every(function(t) {
                    return t.loaded;
                  });
                }
              },
              {
                key: 'isFontsLoaded',
                value: function() {
                  return this.fonts.every(function(t) {
                    return t.loaded;
                  });
                }
              },
              {
                key: 'createDocumentElement',
                value: function(t) {
                  var e = this.createElement(t.documentElement);
                  return (
                    (e.root = !0),
                    e.addStylesFromStyleDefinition(),
                    (this.documentElement = e),
                    e
                  );
                }
              },
              {
                key: 'createElement',
                value: function(e) {
                  var r = e.nodeName.replace(/^[^:]+:/, ''),
                    n = t.elementTypes[r];
                  return void 0 !== n ? new n(this, e) : new de(this, e);
                }
              },
              {
                key: 'createTextNode',
                value: function(t) {
                  return new Ce(this, t);
                }
              },
              {
                key: 'setViewBox',
                value: function(t) {
                  this.screen.setViewBox(
                    (function(t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? yn(Object(r), !0).forEach(function(e) {
                              S()(t, e, r[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(r)
                            )
                          : yn(Object(r)).forEach(function(e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(r, e)
                              );
                            });
                      }
                      return t;
                    })({ document: this }, t)
                  );
                }
              },
              {
                key: 'window',
                get: function() {
                  return this.screen.window;
                }
              },
              {
                key: 'fetch',
                get: function() {
                  return this.screen.fetch;
                }
              },
              {
                key: 'ctx',
                get: function() {
                  return this.screen.ctx;
                }
              },
              {
                key: 'emSize',
                get: function() {
                  var t = this.emSizeStack;
                  return t[t.length - 1];
                },
                set: function(t) {
                  this.emSizeStack.push(t);
                }
              }
            ]),
            t
          );
        })();
        function dn(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function vn(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? dn(Object(r), !0).forEach(function(e) {
                  S()(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : dn(Object(r)).forEach(function(e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        (pn.createCanvas = function(t, e) {
          var r = document.createElement('canvas');
          return (r.width = t), (r.height = e), r;
        }),
          (pn.createImage = function(t) {
            return gn.apply(this, arguments);
          }),
          (pn.elementTypes = hn);
        var mn = (function() {
          function t(e, r) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            R()(this, t),
              (this.parser = new re(n)),
              (this.screen = new Jt(e, n)),
              (this.options = n);
            var i = new pn(this, n),
              a = i.createDocumentElement(r);
            (this.document = i), (this.documentElement = a);
          }
          return (
            C()(
              t,
              [
                {
                  key: 'fork',
                  value: function(e, r) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    return t.from(e, r, vn({}, this.options, {}, n));
                  }
                },
                {
                  key: 'forkString',
                  value: function(e, r) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    return t.fromString(e, r, vn({}, this.options, {}, n));
                  }
                },
                {
                  key: 'ready',
                  value: function() {
                    return this.screen.ready();
                  }
                },
                {
                  key: 'isReady',
                  value: function() {
                    return this.screen.isReady();
                  }
                },
                {
                  key: 'render',
                  value: (function() {
                    var t = w()(
                      x.a.mark(function t() {
                        var e,
                          r = arguments;
                        return x.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (e =
                                      r.length > 0 && void 0 !== r[0]
                                        ? r[0]
                                        : {}),
                                    this.start(
                                      vn(
                                        {
                                          enableRedraw: !0,
                                          ignoreAnimation: !0,
                                          ignoreMouse: !0
                                        },
                                        e
                                      )
                                    ),
                                    (t.next = 4),
                                    this.ready()
                                  );
                                case 4:
                                  this.stop();
                                case 5:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function() {
                      return t.apply(this, arguments);
                    };
                  })()
                },
                {
                  key: 'start',
                  value: function() {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      e = this.documentElement,
                      r = this.screen,
                      n = this.options;
                    r.start(e, vn({ enableRedraw: !0 }, n, {}, t));
                  }
                },
                {
                  key: 'stop',
                  value: function() {
                    this.screen.stop();
                  }
                },
                {
                  key: 'resize',
                  value: function(t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : t,
                      r =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                    this.documentElement.resize(t, e, r);
                  }
                }
              ],
              [
                {
                  key: 'from',
                  value: (function() {
                    var e = w()(
                      x.a.mark(function e(r, n) {
                        var i,
                          a,
                          o,
                          u = arguments;
                        return x.a.wrap(function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i =
                                    u.length > 2 && void 0 !== u[2]
                                      ? u[2]
                                      : {}),
                                  (a = new re(i)),
                                  (e.next = 4),
                                  a.parse(n)
                                );
                              case 4:
                                return (
                                  (o = e.sent),
                                  e.abrupt('return', new t(r, o, i))
                                );
                              case 6:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function(t, r) {
                      return e.apply(this, arguments);
                    };
                  })()
                },
                {
                  key: 'fromString',
                  value: function(e, r) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    return new t(e, new re(n).parseFromString(r), n);
                  }
                }
              ]
            ),
            t
          );
        })();
        var xn = Object.freeze({
          __proto__: null,
          offscreen: function() {
            var t = (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).DOMParser,
              e = {
                window: null,
                ignoreAnimation: !0,
                ignoreMouse: !0,
                DOMParser: t,
                createCanvas: function(t, e) {
                  return new OffscreenCanvas(t, e);
                },
                createImage: function(t) {
                  return w()(
                    x.a.mark(function e() {
                      var r, n, i;
                      return x.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), fetch(t);
                            case 2:
                              return (r = e.sent), (e.next = 5), r.blob();
                            case 5:
                              return (
                                (n = e.sent), (e.next = 8), createImageBitmap(n)
                              );
                            case 8:
                              return (i = e.sent), e.abrupt('return', i);
                            case 10:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                }
              };
            return (
              ('undefined' == typeof DOMParser && void 0 !== t) ||
                Reflect.deleteProperty(e, 'DOMParser'),
              e
            );
          },
          node: function(t) {
            var e = t.DOMParser,
              r = t.canvas;
            return {
              window: null,
              ignoreAnimation: !0,
              ignoreMouse: !0,
              DOMParser: e,
              fetch: t.fetch,
              createCanvas: r.createCanvas,
              createImage: r.loadImage
            };
          }
        });
        e.default = mn;
      }.call(e, r('Xm2t'));
  },
  AKLy: function(t, e) {
    t.exports = function(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    };
  },
  FOhS: function(t, e, r) {
    t.exports = r('TFFM');
  },
  GUmJ: function(t, e, r) {
    var n = r('Lilp');
    function i(e, r, a) {
      return (
        'undefined' != typeof Reflect && Reflect.get
          ? (t.exports = i = Reflect.get)
          : (t.exports = i = function(t, e, r) {
              var i = n(t, e);
              if (i) {
                var a = Object.getOwnPropertyDescriptor(i, e);
                return a.get ? a.get.call(r) : a.value;
              }
            }),
        i(e, r, a || e)
      );
    }
    t.exports = i;
  },
  Gd1W: function(t, e) {
    function r(t, e, r, n, i, a, o) {
      try {
        var u = t[a](o),
          s = u.value;
      } catch (t) {
        return void r(t);
      }
      u.done ? e(s) : Promise.resolve(s).then(n, i);
    }
    t.exports = function(t) {
      return function() {
        var e = this,
          n = arguments;
        return new Promise(function(i, a) {
          var o = t.apply(e, n);
          function u(t) {
            r(o, i, a, u, s, 'next', t);
          }
          function s(t) {
            r(o, i, a, u, s, 'throw', t);
          }
          u(void 0);
        });
      };
    };
  },
  KED7: function(t, e) {
    t.exports = function(t) {
      if (Array.isArray(t)) return t;
    };
  },
  Lilp: function(t, e, r) {
    var n = r('RXKi');
    t.exports = function(t, e) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = n(t));

      );
      return t;
    };
  },
  MGDH: function(t, e, r) {
    var n = r('KED7'),
      i = r('15tG'),
      a = r('Wd1Q'),
      o = r('UqQ9');
    t.exports = function(t, e) {
      return n(t) || i(t, e) || a(t, e) || o();
    };
  },
  QUJ4: function(t, e, r) {
    var n = r('r1fo');
    t.exports = function(t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 }
      })),
        e && n(t, e);
    };
  },
  RAmp: function(t, e) {
    t.exports = function() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    };
  },
  RXKi: function(t, e) {
    function r(e) {
      return (
        (t.exports = r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        r(e)
      );
    }
    t.exports = r;
  },
  'S9/t': function(t, e, r) {
    var n = r('qj8e'),
      i = r('bOmF'),
      a = r('Wd1Q'),
      o = r('RAmp');
    t.exports = function(t) {
      return n(t) || i(t) || a(t) || o();
    };
  },
  TFFM: function(t, e, r) {
    var n = (function(t) {
      'use strict';
      var e,
        r = Object.prototype,
        n = r.hasOwnProperty,
        i = 'function' == typeof Symbol ? Symbol : {},
        a = i.iterator || '@@iterator',
        o = i.asyncIterator || '@@asyncIterator',
        u = i.toStringTag || '@@toStringTag';
      function s(t, e, r, n) {
        var i = e && e.prototype instanceof p ? e : p,
          a = Object.create(i.prototype),
          o = new C(n || []);
        return (
          (a._invoke = (function(t, e, r) {
            var n = l;
            return function(i, a) {
              if (n === h) throw new Error('Generator is already running');
              if (n === y) {
                if ('throw' === i) throw a;
                return M();
              }
              for (r.method = i, r.arg = a; ; ) {
                var o = r.delegate;
                if (o) {
                  var u = P(o, r);
                  if (u) {
                    if (u === g) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (n === l) throw ((n = y), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                n = h;
                var s = c(t, e, r);
                if ('normal' === s.type) {
                  if (((n = r.done ? y : f), s.arg === g)) continue;
                  return { value: s.arg, done: r.done };
                }
                'throw' === s.type &&
                  ((n = y), (r.method = 'throw'), (r.arg = s.arg));
              }
            };
          })(t, r, o)),
          a
        );
      }
      function c(t, e, r) {
        try {
          return { type: 'normal', arg: t.call(e, r) };
        } catch (t) {
          return { type: 'throw', arg: t };
        }
      }
      t.wrap = s;
      var l = 'suspendedStart',
        f = 'suspendedYield',
        h = 'executing',
        y = 'completed',
        g = {};
      function p() {}
      function d() {}
      function v() {}
      var m = {};
      m[a] = function() {
        return this;
      };
      var x = Object.getPrototypeOf,
        b = x && x(x(E([])));
      b && b !== r && n.call(b, a) && (m = b);
      var w = (v.prototype = p.prototype = Object.create(m));
      function k(t) {
        ['next', 'throw', 'return'].forEach(function(e) {
          t[e] = function(t) {
            return this._invoke(e, t);
          };
        });
      }
      function S(t, e) {
        var r;
        this._invoke = function(i, a) {
          function o() {
            return new e(function(r, o) {
              !(function r(i, a, o, u) {
                var s = c(t[i], t, a);
                if ('throw' !== s.type) {
                  var l = s.arg,
                    f = l.value;
                  return f && 'object' == typeof f && n.call(f, '__await')
                    ? e.resolve(f.__await).then(
                        function(t) {
                          r('next', t, o, u);
                        },
                        function(t) {
                          r('throw', t, o, u);
                        }
                      )
                    : e.resolve(f).then(
                        function(t) {
                          (l.value = t), o(l);
                        },
                        function(t) {
                          return r('throw', t, o, u);
                        }
                      );
                }
                u(s.arg);
              })(i, a, r, o);
            });
          }
          return (r = r ? r.then(o, o) : o());
        };
      }
      function P(t, r) {
        var n = t.iterator[r.method];
        if (n === e) {
          if (((r.delegate = null), 'throw' === r.method)) {
            if (
              t.iterator.return &&
              ((r.method = 'return'),
              (r.arg = e),
              P(t, r),
              'throw' === r.method)
            )
              return g;
            (r.method = 'throw'),
              (r.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return g;
        }
        var i = c(n, t.iterator, r.arg);
        if ('throw' === i.type)
          return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), g;
        var a = i.arg;
        return a
          ? a.done
            ? ((r[t.resultName] = a.value),
              (r.next = t.nextLoc),
              'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
              (r.delegate = null),
              g)
            : a
          : ((r.method = 'throw'),
            (r.arg = new TypeError('iterator result is not an object')),
            (r.delegate = null),
            g);
      }
      function R(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function A(t) {
        var e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
      }
      function C(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(R, this),
          this.reset(!0);
      }
      function E(t) {
        if (t) {
          var r = t[a];
          if (r) return r.call(t);
          if ('function' == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var i = -1,
              o = function r() {
                for (; ++i < t.length; )
                  if (n.call(t, i)) return (r.value = t[i]), (r.done = !1), r;
                return (r.value = e), (r.done = !0), r;
              };
            return (o.next = o);
          }
        }
        return { next: M };
      }
      function M() {
        return { value: e, done: !0 };
      }
      return (
        (d.prototype = w.constructor = v),
        (v.constructor = d),
        (v[u] = d.displayName = 'GeneratorFunction'),
        (t.isGeneratorFunction = function(t) {
          var e = 'function' == typeof t && t.constructor;
          return (
            !!e &&
            (e === d || 'GeneratorFunction' === (e.displayName || e.name))
          );
        }),
        (t.mark = function(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, v)
              : ((t.__proto__ = v), u in t || (t[u] = 'GeneratorFunction')),
            (t.prototype = Object.create(w)),
            t
          );
        }),
        (t.awrap = function(t) {
          return { __await: t };
        }),
        k(S.prototype),
        (S.prototype[o] = function() {
          return this;
        }),
        (t.AsyncIterator = S),
        (t.async = function(e, r, n, i, a) {
          void 0 === a && (a = Promise);
          var o = new S(s(e, r, n, i), a);
          return t.isGeneratorFunction(r)
            ? o
            : o.next().then(function(t) {
                return t.done ? t.value : o.next();
              });
        }),
        k(w),
        (w[u] = 'Generator'),
        (w[a] = function() {
          return this;
        }),
        (w.toString = function() {
          return '[object Generator]';
        }),
        (t.keys = function(t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = E),
        (C.prototype = {
          constructor: C,
          reset: function(t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = e),
              this.tryEntries.forEach(A),
              !t)
            )
              for (var r in this)
                't' === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = e);
          },
          stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ('throw' === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function(t) {
            if (this.done) throw t;
            var r = this;
            function i(n, i) {
              return (
                (u.type = 'throw'),
                (u.arg = t),
                (r.next = n),
                i && ((r.method = 'next'), (r.arg = e)),
                !!i
              );
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var o = this.tryEntries[a],
                u = o.completion;
              if ('root' === o.tryLoc) return i('end');
              if (o.tryLoc <= this.prev) {
                var s = n.call(o, 'catchLoc'),
                  c = n.call(o, 'finallyLoc');
                if (s && c) {
                  if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                } else if (s) {
                  if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error('try statement without catch or finally');
                  if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function(t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, 'finallyLoc') &&
                this.prev < i.finallyLoc
              ) {
                var a = i;
                break;
              }
            }
            a &&
              ('break' === t || 'continue' === t) &&
              a.tryLoc <= e &&
              e <= a.finallyLoc &&
              (a = null);
            var o = a ? a.completion : {};
            return (
              (o.type = t),
              (o.arg = e),
              a
                ? ((this.method = 'next'), (this.next = a.finallyLoc), g)
                : this.complete(o)
            );
          },
          complete: function(t, e) {
            if ('throw' === t.type) throw t.arg;
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
              g
            );
          },
          finish: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), A(r), g;
            }
          },
          catch: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ('throw' === n.type) {
                  var i = n.arg;
                  A(r);
                }
                return i;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function(t, r, n) {
            return (
              (this.delegate = { iterator: E(t), resultName: r, nextLoc: n }),
              'next' === this.method && (this.arg = e),
              g
            );
          }
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = n;
    } catch (t) {
      Function('r', 'regeneratorRuntime = r')(n);
    }
  },
  UqQ9: function(t, e) {
    t.exports = function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    };
  },
  Wd1Q: function(t, e, r) {
    var n = r('4WZ4');
    t.exports = function(t, e) {
      if (t) {
        if ('string' == typeof t) return n(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return (
          'Object' === r && t.constructor && (r = t.constructor.name),
          'Map' === r || 'Set' === r
            ? Array.from(r)
            : 'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? n(t, e)
            : void 0
        );
      }
    };
  },
  Xm2t: function(t, e) {
    var r,
      n,
      i = (t.exports = {});
    function a() {
      throw new Error('setTimeout has not been defined');
    }
    function o() {
      throw new Error('clearTimeout has not been defined');
    }
    function u(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === a || !r) && setTimeout)
        return (r = setTimeout), setTimeout(t, 0);
      try {
        return r(t, 0);
      } catch (e) {
        try {
          return r.call(null, t, 0);
        } catch (e) {
          return r.call(this, t, 0);
        }
      }
    }
    !(function() {
      try {
        r = 'function' == typeof setTimeout ? setTimeout : a;
      } catch (t) {
        r = a;
      }
      try {
        n = 'function' == typeof clearTimeout ? clearTimeout : o;
      } catch (t) {
        n = o;
      }
    })();
    var s,
      c = [],
      l = !1,
      f = -1;
    function h() {
      l &&
        s &&
        ((l = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && y());
    }
    function y() {
      if (!l) {
        var t = u(h);
        l = !0;
        for (var e = c.length; e; ) {
          for (s = c, c = []; ++f < e; ) s && s[f].run();
          (f = -1), (e = c.length);
        }
        (s = null),
          (l = !1),
          (function(t) {
            if (n === clearTimeout) return clearTimeout(t);
            if ((n === o || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(t);
            try {
              n(t);
            } catch (e) {
              try {
                return n.call(null, t);
              } catch (e) {
                return n.call(this, t);
              }
            }
          })(t);
      }
    }
    function g(t, e) {
      (this.fun = t), (this.array = e);
    }
    function p() {}
    (i.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      c.push(new g(t, e)), 1 !== c.length || l || u(y);
    }),
      (g.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (i.title = 'browser'),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ''),
      (i.versions = {}),
      (i.on = p),
      (i.addListener = p),
      (i.once = p),
      (i.off = p),
      (i.removeListener = p),
      (i.removeAllListeners = p),
      (i.emit = p),
      (i.prependListener = p),
      (i.prependOnceListener = p),
      (i.listeners = function(t) {
        return [];
      }),
      (i.binding = function(t) {
        throw new Error('process.binding is not supported');
      }),
      (i.cwd = function() {
        return '/';
      }),
      (i.chdir = function(t) {
        throw new Error('process.chdir is not supported');
      }),
      (i.umask = function() {
        return 0;
      });
  },
  bOmF: function(t, e) {
    t.exports = function(t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
        return Array.from(t);
    };
  },
  dR2v: function(t, e, r) {
    (function(e) {
      (function() {
        var r, n, i, a, o, u;
        'undefined' != typeof performance &&
        null !== performance &&
        performance.now
          ? (t.exports = function() {
              return performance.now();
            })
          : void 0 !== e && null !== e && e.hrtime
          ? ((t.exports = function() {
              return (r() - o) / 1e6;
            }),
            (n = e.hrtime),
            (a = (r = function() {
              var t;
              return 1e9 * (t = n())[0] + t[1];
            })()),
            (u = 1e9 * e.uptime()),
            (o = a - u))
          : Date.now
          ? ((t.exports = function() {
              return Date.now() - i;
            }),
            (i = Date.now()))
          : ((t.exports = function() {
              return new Date().getTime() - i;
            }),
            (i = new Date().getTime()));
      }.call(this));
    }.call(e, r('Xm2t')));
  },
  eYbk: function(t, e, r) {
    var n = r('wSZt'),
      i = r('AKLy');
    t.exports = function(t, e) {
      return !e || ('object' !== n(e) && 'function' != typeof e) ? i(t) : e;
    };
  },
  gqWF: function(t, e) {
    function r(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    t.exports = function(t, e, n) {
      return e && r(t.prototype, e), n && r(t, n), t;
    };
  },
  kdhv: function(t, e, r) {
    (function(e) {
      for (
        var n = r('dR2v'),
          i = 'undefined' == typeof window ? e : window,
          a = ['moz', 'webkit'],
          o = 'AnimationFrame',
          u = i['request' + o],
          s = i['cancel' + o] || i['cancelRequest' + o],
          c = 0;
        !u && c < a.length;
        c++
      )
        (u = i[a[c] + 'Request' + o]),
          (s = i[a[c] + 'Cancel' + o] || i[a[c] + 'CancelRequest' + o]);
      if (!u || !s) {
        var l = 0,
          f = 0,
          h = [];
        (u = function(t) {
          if (0 === h.length) {
            var e = n(),
              r = Math.max(0, 1e3 / 60 - (e - l));
            (l = r + e),
              setTimeout(function() {
                var t = h.slice(0);
                h.length = 0;
                for (var e = 0; e < t.length; e++)
                  if (!t[e].cancelled)
                    try {
                      t[e].callback(l);
                    } catch (t) {
                      setTimeout(function() {
                        throw t;
                      }, 0);
                    }
              }, Math.round(r));
          }
          return h.push({ handle: ++f, callback: t, cancelled: !1 }), f;
        }),
          (s = function(t) {
            for (var e = 0; e < h.length; e++)
              h[e].handle === t && (h[e].cancelled = !0);
          });
      }
      (t.exports = function(t) {
        return u.call(i, t);
      }),
        (t.exports.cancel = function() {
          s.apply(i, arguments);
        }),
        (t.exports.polyfill = function(t) {
          t || (t = i),
            (t.requestAnimationFrame = u),
            (t.cancelAnimationFrame = s);
        });
    }.call(e, r('VTyh')));
  },
  l3u9: function(t, e) {
    t.exports = function(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    };
  },
  qj8e: function(t, e, r) {
    var n = r('4WZ4');
    t.exports = function(t) {
      if (Array.isArray(t)) return n(t);
    };
  },
  r1fo: function(t, e) {
    function r(e, n) {
      return (
        (t.exports = r =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          }),
        r(e, n)
      );
    }
    t.exports = r;
  },
  v2Fs: function(t, e) {
    t.exports = function(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    };
  },
  wSZt: function(t, e) {
    function r(e) {
      '@babel/helpers - typeof';
      return (
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? (t.exports = r = function(t) {
              return typeof t;
            })
          : (t.exports = r = function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
        r(e)
      );
    }
    t.exports = r;
  }
});
//# sourceMappingURL=canvg.js.map
