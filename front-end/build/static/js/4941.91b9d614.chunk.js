"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4941],
  {
    78083: function (e, a, r) {
      r.d(a, {
        k: function () {
          return n;
        },
      });
      var n = function (e) {
        if (void 0 !== e && null !== e && "" !== e)
          return (function (e, a) {
            function r(e) {
              return e.split("").reverse().join("");
            }
            var n = /(\d{3}(?!.*\.|$))/g;
            a || (a = " ");
            return r(r(e.toString()).replace(n, "$1" + a));
          })((e = parseInt(e)));
      };
    },
    84941: function (e, a, r) {
      r.r(a),
        r.d(a, {
          default: function () {
            return G;
          },
        });
      var n = r(74165),
        t = r(15861),
        s = r(29439),
        c = r(72791),
        i = r(30606),
        l = r(12902),
        o = r(91933),
        u = r(16149),
        d = r(51763),
        h = (r(92854), r(59909)),
        p = r(23821),
        m = r(56890),
        g = r(35855),
        v = r(53994),
        f = r(53382),
        Z = (r(93650), r(78083)),
        x = r(37762),
        j = r(15671),
        b = r(43144),
        y = r(60136),
        N = r(54062),
        k = r(28353),
        C = r(80184),
        A = [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        z = [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        P = (function (e) {
          (0, y.Z)(r, e);
          var a = (0, N.Z)(r);
          function r() {
            var e;
            (0, j.Z)(this, r);
            for (var n = arguments.length, t = new Array(n), s = 0; s < n; s++)
              t[s] = arguments[s];
            return (
              ((e = a.call.apply(a, [this].concat(t))).generateData = function (
                a
              ) {
                var r,
                  n = {
                    labels: [],
                    datasets: [
                      {
                        label: "Population",
                        data: [],
                        backgroundColor: [],
                        borderColor: [],
                        borderWidth: 1,
                        fill: !1,
                      },
                    ],
                  },
                  t = (0, x.Z)(a);
                try {
                  for (t.s(); !(r = t.n()).done; ) {
                    var s = r.value,
                      c = Math.floor(6 * Math.random());
                    n.labels.push(s.name),
                      n.datasets[0].data.push(
                        e.props.isGeneral ? s.generalpopulation : s.underage
                      ),
                      n.datasets[0].backgroundColor.push(A[c]),
                      n.datasets[0].borderColor.push(z[c]);
                  }
                } catch (i) {
                  t.e(i);
                } finally {
                  t.f();
                }
                return n;
              }),
              (e.options = {
                scales: {
                  xAxes: [
                    {
                      ticks: {
                        beginAtZero: !0,
                        userCallback: function (e, a, r) {
                          if (Math.floor(e) === e) return e;
                        },
                      },
                    },
                  ],
                },
                legend: { display: !1 },
                elements: { point: { radius: 0 } },
              }),
              e
            );
          }
          return (
            (0, b.Z)(r, [
              {
                key: "render",
                value: function () {
                  return (0, C.jsx)("div", {
                    children: (0, C.jsx)("div", {
                      className: "row",
                      children: (0, C.jsx)("div", {
                        className: "col-md-12 grid-margin stretch-card",
                        children: (0, C.jsx)("div", {
                          className: "card",
                          children: (0, C.jsxs)("div", {
                            className: "card-body",
                            children: [
                              (0, C.jsx)("h4", {
                                className: "card-title",
                                children: (0, C.jsx)(i.c, {
                                  children: "Sub-facility populations data",
                                }),
                              }),
                              (0, C.jsx)("h6", {
                                className: "mt-1",
                                children: this.props.isGeneral
                                  ? (0, C.jsx)(i.c, {
                                      children: "General populations",
                                    })
                                  : (0, C.jsx)(i.c, {
                                      children: "Under-1 populations",
                                    }),
                              }),
                              this.props.rows &&
                                (0, C.jsx)(k.n4, {
                                  data: this.generateData(this.props.rows),
                                  options: this.options,
                                }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(c.Component);
      var G = function () {
        var e = (0, c.useState)(-1),
          a = (0, s.Z)(e, 2),
          r = a[0],
          x = a[1],
          j = (0, o.useQuery)(
            ["sub-fac-pop-data-helper"],
            (0, t.Z)(
              (0, n.Z)().mark(function e() {
                var a;
                return (0, n.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getSubFacPop({ help: !0 });
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          b = j.data,
          y = j.isLoading,
          N = (0, o.useQuery)(
            ["sub-fac-pop-report"],
            (0, t.Z)(
              (0, n.Z)().mark(function e() {
                var a, t;
                return (0, n.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = { help: !1 }),
                          -1 !== r && (a.level = r),
                          (e.next = 4),
                          d.Z.getSubFacPop(a)
                        );
                      case 4:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          k = N.data,
          A = N.isLoading,
          z = N.refetch;
        (0, c.useEffect)(
          function () {
            r && z();
          },
          [r]
        );
        var G = JSON.parse(localStorage.getItem("country"));
        return y || A
          ? (0, C.jsx)(h.Z, {})
          : (0, C.jsxs)("div", {
              children: [
                (0, C.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, C.jsx)(i.c, {
                    children: "Sub-facility populations data",
                  }),
                }),
                (0, C.jsx)(P, {
                  isGeneral:
                    "General population" ===
                    (null === G || void 0 === G ? void 0 : G.poptarget),
                  rows: k,
                }),
                (0, C.jsx)("div", {
                  className: "mt-3",
                  children: (0, C.jsx)("div", {
                    className: "card",
                    children: (0, C.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, C.jsxs)(u.Z.Group, {
                        className: "row",
                        children: [
                          (0, C.jsxs)("label", {
                            className: "col-sm-4",
                            children: [
                              (0, C.jsx)(i.c, { children: "Levels" }),
                              ":",
                            ],
                          }),
                          (0, C.jsxs)(u.Z.Control, {
                            className: "form-select col-sm-4",
                            onChange: function (e) {
                              var a = e.target.value;
                              x(a);
                            },
                            as: "select",
                            children: [
                              (0, C.jsx)(l.W, {
                                children: function (e, a) {
                                  a.i18n;
                                  return (0, C.jsx)("option", {
                                    i18n: !0,
                                    value: "-1",
                                    selected: !0,
                                    children: e("Please select"),
                                  });
                                },
                              }),
                              null === b || void 0 === b
                                ? void 0
                                : b.map(function (e) {
                                    return (0,
                                    C.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                  }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, C.jsx)("div", {
                  className: "mt-3",
                  children: (0, C.jsx)("div", {
                    className: "card",
                    children: (0, C.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, C.jsx)("h4", {
                          children: (0, C.jsx)(i.c, { children: "Reports" }),
                        }),
                        (0, C.jsx)("div", {
                          className: "mt-3 table-container",
                          children: (0, C.jsxs)(p.Z, {
                            children: [
                              (0, C.jsx)(m.Z, {
                                children: (0, C.jsxs)(g.Z, {
                                  children: [
                                    (0, C.jsx)(v.Z, {
                                      className: "col-sm-2",
                                      children: (0, C.jsx)(i.c, {
                                        children: "Facility Name",
                                      }),
                                    }),
                                    (0, C.jsx)(v.Z, {
                                      className: "col-sm-2",
                                      children: (0, C.jsx)(i.c, {
                                        children: "Facility parent",
                                      }),
                                    }),
                                    (0, C.jsx)(v.Z, {
                                      className: "col-sm-2",
                                      children: (0, C.jsx)(i.c, {
                                        children: "Level",
                                      }),
                                    }),
                                    (0, C.jsx)(v.Z, {
                                      className: "col-sm-2",
                                      children: (0, C.jsx)(i.c, {
                                        children: "Code",
                                      }),
                                    }),
                                    (0, C.jsx)(v.Z, {
                                      className: "col-sm-1",
                                      children: (0, C.jsx)(i.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, C.jsx)(v.Z, {
                                      className: "col-sm-1",
                                      children: (0, C.jsx)(i.c, {
                                        children: "Under 1",
                                      }),
                                    }),
                                    (0, C.jsx)(v.Z, {
                                      className: "col-sm-2",
                                      children: (0, C.jsx)(i.c, {
                                        children: "General populations",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, C.jsx)(f.Z, {
                                children:
                                  null === k || void 0 === k
                                    ? void 0
                                    : k.map(function (e, a) {
                                        var r, n, t, s, c, i, l;
                                        return (0,
                                        C.jsxs)(g.Z, { children: [(0, C.jsx)(v.Z, { className: "col-sm-2", children: null !== (r = e.name) && void 0 !== r ? r : "-" }), (0, C.jsx)(v.Z, { className: "col-sm-2", children: null !== (n = e.parent) && void 0 !== n ? n : "-" }), (0, C.jsx)(v.Z, { className: "col-sm-2", children: null !== (t = e.level) && void 0 !== t ? t : "-" }), (0, C.jsx)(v.Z, { className: "col-sm-2", children: null !== (s = e.code) && void 0 !== s ? s : "-" }), (0, C.jsx)(v.Z, { className: "col-sm-1", children: null !== (c = e.type) && void 0 !== c ? c : "-" }), (0, C.jsx)(v.Z, { className: "col-sm-1", children: null !== (i = (0, Z.k)(e.underage)) && void 0 !== i ? i : "-" }), (0, C.jsx)(v.Z, { className: "col-sm-2", children: null !== (l = (0, Z.k)(e.generalpopulation)) && void 0 !== l ? l : "-" })] }, a);
                                      }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            });
      };
    },
    51763: function (e, a, r) {
      var n = r(15671),
        t = r(43144),
        s = r(54318),
        c = r(39877),
        i = "https://example.com/reports/",
        l = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, t.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return c.Z.get(i + "excel", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return c.Z.get(i + "facseg", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return c.Z.get(i + "subfacpop", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return c.Z.get(i + "facmap", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return c.Z.get(i + "gapmap", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return c.Z.get(i + "item-gp", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return c.Z.get(i + "itemfac", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return c.Z.get(i + "gapitem", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return c.Z.get(i + "facprof", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return c.Z.get(i + "coldprof", {
                    headers: { Authorization: (0, s.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return c.Z.get(i + "planingreport", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return c.Z.get(i + "gapcce", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return c.Z.get(i + "gapccePlan", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return c.Z.post(i + "gapccePlan", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return c.Z.delete(i + "gapccePlan", {
                    headers: { Authorization: (0, s.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return c.Z.put(i + "gapccePlan", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, a) {
                  return c.Z.post(i + "gapsave?condition=" + e, a, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      a.Z = new l();
    },
    23821: function (e, a, r) {
      var n = r(39281),
        t = r(79836),
        s = r(80184);
      a.Z = function (e) {
        var a = e.children;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(n.Z, {
            children: (0, s.jsx)(t.Z, { children: a }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=4941.91b9d614.chunk.js.map