(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2a5e4bc4"], {
    "022a": function (t, e, s) {
        "use strict";
        var i = s("e6c5"), a = s.n(i);
        a.a
    }, b33e: function (t, e, s) {
        "use strict";
        s.r(e);
        var i = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return t.disabledFlag ? i("v-card", {
                staticClass: "pt-5",
                attrs: {flat: "", tile: ""}
            }, [i("v-card-title", {staticClass: "mb-3"}, [i("v-layout", {attrs: {"justify-center": ""}}, ["readonly" === t.status ? i("div", {staticStyle: {"text-align": "justify"}}, [i("span", {
                staticStyle: {
                    "font-weight": "bold",
                    "font-size": "24px",
                    width: "100%",
                    display: "inline-block"
                }
            }, [t._v("\n          " + t._s(t.passStatus) + "\n        ")])]) : t.self.resultMsg.length > 0 ? i("v-layout", {
                attrs: {
                    column: "",
                    "justify-center": ""
                }
            }, t._l(t.self.resultMsg, function (e) {
                return i("v-flex", {attrs: {xs12: ""}}, ["1" === t.self.result ? i("div", {staticStyle: {"text-align": "justify"}}, [-1 !== t.self.authType.indexOf("离退教工") || -1 !== t.self.authType.indexOf("访客") ? i("span", {
                    staticClass: "warning--text",
                    staticStyle: {"font-weight": "bold", "font-size": "24px", width: "100%", display: "inline-block"}
                }, [t._v(t._s(e))]) : i("span", {
                    staticStyle: {
                        "font-weight": "bold",
                        color: "green",
                        "font-size": "24px",
                        width: "100%",
                        display: "inline-block"
                    }
                }, [t._v(t._s(e))])]) : "2" === t.self.result ? i("div", {staticStyle: {"text-align": "justify"}}, [i("span", {
                    staticStyle: {
                        "font-weight": "bold",
                        color: "blue",
                        "font-size": "24px",
                        width: "100%",
                        display: "inline-block"
                    }
                }, [t._v(t._s(e))])]) : "0" === t.self.result ? i("div", {staticStyle: {"text-align": "justify"}}, [i("span", {
                    staticStyle: {
                        "font-weight": "bold",
                        color: "red",
                        "font-size": "24px",
                        width: "100%",
                        display: "inline-block"
                    }
                }, [t._v(t._s(e))])]) : t._e()])
            }), 1) : i("div", {staticStyle: {"text-align": "justify"}}, [i("span", {
                staticStyle: {
                    "font-weight": "bold",
                    color: "red",
                    "font-size": "24px",
                    width: "100%",
                    display: "inline-block"
                }
            }, [t._v("请重新扫码登记")])])], 1)], 1), i("v-list", [t._l(t.opts, function (e, s) {
                return [e.divider ? i("v-divider", {key: s + "divider"}) : t._e(), e.icon || e.title || e.subTitle ? i("v-list-tile", {key: s}, [i("v-list-tile-action", [i("v-layout", [i("v-icon", {domProps: {textContent: t._s(e.icon)}}), i("span", {staticClass: "ml-2 mr-2"}, [t._v(t._s(e.subTitle))])], 1)], 1), i("v-list-tile-content", ["" === e.type ? i("v-list-tile-title", {class: (-1 !== e.title.indexOf("学生") || -1 !== e.title.indexOf("研究生") || e.title.indexOf("继教生"), "")}, [i("v-layout", {attrs: {"justify-end": ""}}, [i("h2", [t._v(t._s(e.title.trim() || "N/A"))])])], 1) : i("v-list-tile-title", {class: [e.title ? "primary--text" : "grey--text"]}, [i("v-layout", {attrs: {"justify-end": ""}}, [i("h3", {staticStyle: {width: "180px"}}, [i("Marquee", {attrs: {lists: e.arr}})], 1)])], 1)], 1)], 1) : t._e(), e.subheader ? i("v-subheader", {key: s + "subheader"}, [t._v(t._s(e.subheader))]) : t._e()]
            })], 2), "readonly" === t.status ? i("v-layout", {attrs: {"justify-center": ""}}, [i("v-btn", {
                attrs: {color: "primary"},
                on: {click: t.returnRecord}
            }, [t._v("返回")])], 1) : t._e(), "1" === t.self.result ? i("v-layout", {attrs: {"justify-center": ""}}, [i("v-btn", {
                attrs: {color: "primary"},
                on: {click: t.goToSignCode}
            }, [t._v("前往个人二维码")])], 1) : t._e(), i("div", {
                staticStyle: {
                    "text-align": "center",
                    padding: "5px",
                    "margin-top": "20px"
                }
            }, [i("img", {
                class: "logo-" + t.encodeData,
                staticStyle: {width: "50px", height: "auto"},
                attrs: {src: s("c5a2")}
            })]), i("v-dialog", {
                attrs: {width: "700"},
                model: {
                    value: t.confirmDialog.activated, callback: function (e) {
                        t.$set(t.confirmDialog, "activated", e)
                    }, expression: "confirmDialog.activated"
                }
            }, [i("v-layout", {attrs: {column: ""}}, [i("v-card", {staticClass: "pa-3"}, [i("v-layout", {attrs: {column: ""}}, [i("div", {
                staticStyle: {
                    "max-height": "400px",
                    overflow: "auto",
                    "text-align": "justify",
                    padding: "10px"
                }, domProps: {innerHTML: t._s(t.confirmDialog.msg)}
            }), i("v-layout", {attrs: {"justify-center": ""}}, [i("v-btn", {
                staticClass: "primary",
                attrs: {loading: t.loading, disabled: !0 === t.disabledFlag},
                on: {click: t.sign}
            }, [t._v("进校登记")]), i("v-btn", {
                staticClass: "error",
                on: {click: t.goToTempSelfSignRecord}
            }, [t._v("取消")])], 1)], 1)], 1)], 1)], 1)], 1) : i("v-layout", {
                staticClass: "mt-4",
                staticStyle: {height: "200px"},
                attrs: {"align-center": "", column: ""}
            }, [i("v-progress-circular", {
                attrs: {
                    color: "accent",
                    value: 100,
                    size: "50",
                    indeterminate: ""
                }
            }), i("span", {staticClass: "mt-2"}, [t._v("正在进行扫码登记")])], 1)
        }, a = [], n = s("a34a"), r = s.n(n), l = s("7530"), o = function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "wrap"}, [s("div", {attrs: {id: "box"}}, [s("div", {attrs: {id: "marquee"}}, [t._v(t._s(t.text))]), s("div", {attrs: {id: "copy"}})]), s("div", {attrs: {id: "node"}}, [t._v(t._s(t.text))])])
        }, c = [], u = {
            name: "Marquee", props: ["lists"], data: function () {
                return {text: ""}
            }, methods: {
                move: function () {
                    var t = document.getElementById("node").getBoundingClientRect().width;
                    console.log(t);
                    var e = document.getElementById("box"), s = document.getElementById("copy");
                    s.innerText = this.text;
                    var i = 0;
                    setInterval(function () {
                        i -= 1, -i >= t && (i = 10), e.style.transform = "translateX(" + i + "px)"
                    }, 30)
                }
            }, mounted: function () {
                for (var t = 0; t < this.lists.length; t++) this.text += "" + this.lists[t]
            }, updated: function () {
                this.move()
            }
        }, d = u, f = (s("022a"), s("2877")), h = Object(f["a"])(d, o, c, !1, null, "43a209c8", null), p = h.exports;

        function g(t, e, s, i, a, n, r) {
            try {
                var l = t[n](r), o = l.value
            } catch (c) {
                return void s(c)
            }
            l.done ? e(o) : Promise.resolve(o).then(i, a)
        }

        function v(t) {
            return function () {
                var e = this, s = arguments;
                return new Promise(function (i, a) {
                    var n = t.apply(e, s);

                    function r(t) {
                        g(n, i, a, r, l, "next", t)
                    }

                    function l(t) {
                        g(n, i, a, r, l, "throw", t)
                    }

                    r(void 0)
                })
            }
        }

        var m = {
                name: "tempSelfSign", computed: {
                    opts: function () {
                        return [{divider: !0}, {
                            icon: "$vuetify.icons.person",
                            title: this.self.name,
                            subTitle: "用户姓名",
                            style: "font-weight:bold",
                            type: ""
                        }, {
                            icon: "$vuetify.icons.group",
                            title: this.self.authType,
                            subTitle: "登记类型",
                            style: "font-weight:bold",
                            type: ""
                        }, {
                            icon: "$vuetify.icons.timer",
                            title: this.self.passTime,
                            subTitle: "登记时间",
                            style: "font-weight:bold",
                            type: "Marquee",
                            arr: [this.self.passTime]
                        }]
                    }
                }, components: {Marquee: p}, data: function () {
                    return {
                        encodeData: "",
                        loading: !1,
                        disabledFlag: !1,
                        status: "",
                        confirmDialog: {
                            activated: !1,
                            msg: "【电子科技大学】全体师生员工：<br/>\t根据学校应对新型冠状病毒感染肺炎疫情防控工作领导小组工作部署，为了广大师生健康安全，自2020年1月28日下午6时起，实施校门临时管控措施。<br/>1、暂停校园交通管理系统的车行和人行预约功能；<br/>2、所有未经注册认证车辆一律不准许进入校园；<br/>3、校园不接待参观者和无关人员，本校师生员工除因保障、值守或应急等工作事由之外原则上不得进校，不得携带家属及校外亲友进校；<br/>4、清水河校区仅开放西门人行和车行通道，沙河校区仅开放东门人行和车行通道，其他门的人行和车行通道全部关闭；<br/>5、所有入校车辆和人员必须凭有效身份证件 本校师生证明证件（如工作证、工牌或一卡通等）进校；<br/>6、请广大教职工理解并配合校门岗位人员做好体温检测、盘问和信息登记工作。<br/>特殊时期，特殊管理，由此带来的不便，敬请大家理解、支持和配合。"
                        },
                        self: {
                            name: "",
                            loginId: "",
                            phone: "",
                            orgName: "",
                            authType: "",
                            controller: "",
                            parkLot: "",
                            result: "",
                            passTime: "",
                            resultMsg: []
                        },
                        passStatus: ""
                    }
                }, created: function () {
                    this.confirmDialog.activated = !0, void 0 !== this.$route.query.status && "readonly" === this.$route.query.status && (this.status = "readonly", this.self.passTime = l["a"].stringify(this.$route.query.passTime), this.disabledFlag = !0, this.confirmDialog.activated = !1, this.passStatus = this.$route.query.passStatus, this.passStatus.indexOf("授权有效") ? this.self.result = "1" : this.self.result = "0"), this.getSelfInfo(), this.sign()
                }, methods: {
                    getSelfInfo: function () {
                        var t = v(r.a.mark(function t() {
                            var e;
                            return r.a.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.$store.dispatch("wx/getSelfInfo");
                                    case 2:
                                        e = t.sent, 1 === e.data.status ? (this.dealSelfInfo(e.data.data), this.encodeUserInfo(e.data.data)) : this.$L.alert("error", {message: "未查询到该用户信息"});
                                    case 4:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(), encodeUserInfo: function (t) {
                        var e = t.userInfo.loginId, s = window.btoa("loginId=".concat(e));
                        this.encodeData = s.substring(0, s.length - 1)
                    }, dealSelfInfo: function (t) {
                        if (t.userInfo.userGroups && 0 !== t.userInfo.userGroups.length) for (var e = 0; e < t.userInfo.userGroups.length; e++) "reg" === t.userInfo.userGroups[e].groupTypes[0].name && (this.self.authType = t.userInfo.userGroups[e].name);
                        this.self.name = t.userInfo.name, this.self.loginId = t.userInfo.loginId, this.self.phone = t.userInfo.mobilePhone, t.selfConfig && t.selfConfig.currentOrg && (this.self.orgName = t.selfConfig.currentOrg.name), "" !== this.self.authType && this.self.authType && (this.self.authType = this.self.authType.substring(4))
                    }, getController: function () {
                        var t = v(r.a.mark(function t() {
                            var e, s, i, a;
                            return r.a.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.$route.query.controllerId, t.next = 3, this.$store.dispatch("park/getUnDirControllerList", {
                                            pagination: {
                                                page: 1,
                                                rowsPerPage: 10
                                            }, search: {key: "id", value: e}
                                        });
                                    case 3:
                                        s = t.sent, i = s.items, 0 === i.length ? this.$L.alert("error", {message: "未查询到卡口信息"}) : (a = i[0], this.self.parkLot = a.park[0].name, this.self.controller = a.name);
                                    case 6:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(), signConfirm: function () {
                        var t = v(r.a.mark(function t() {
                            var e, s, i;
                            return r.a.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.$L.confirm({title: "确认进行打卡登记？"});
                                    case 2:
                                        if (e = t.sent, s = e.res, i = e.close, !s) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.prev = 6, t.next = 9, this.sign();
                                    case 9:
                                        t.next = 14;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t["catch"](6), this.$L.alert("error", t.t0.message);
                                    case 14:
                                        i();
                                    case 15:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[6, 11]])
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(), isVisitor: function (t) {
                        for (var e = t.userInfo.userGroups, s = 0; s < e.length; s++) if ("reg" === e[s].groupTypes[0].name) {
                            var i = e[s].name;
                            return -1 !== i.indexOf("【登记】注册访客")
                        }
                        return !1
                    }, sign: function () {
                        var t = v(r.a.mark(function t() {
                            var e;
                            return r.a.wrap(function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.loading = !0, t.prev = 1, t.next = 4, this.$store.dispatch("wx/tempSelfSign", this.$route.query.controllerId);
                                    case 4:
                                        e = t.sent, 1 === e.data.status ? (this.disabledFlag = !0, this.confirmDialog.activated = !1, this.self.result = "1", this.self.resultMsg = e.data.msg.split("|"), this.self.passTime = l["a"].stringify((new Date).getTime()), this.$L.alert("success", {
                                            title: "进校登记成功",
                                            message: e.data.msg
                                        })) : 0 === e.data.status ? (this.disabledFlag = !0, this.confirmDialog.activated = !1, this.self.result = "0", this.self.resultMsg = e.data.msg.split("|"), this.self.passTime = l["a"].stringify((new Date).getTime())) : 2 === e.data.status ? (this.disabledFlag = !0, this.confirmDialog.activated = !1, this.self.result = "2", this.self.resultMsg = e.data.msg.split("|"), this.self.passTime = l["a"].stringify((new Date).getTime())) : (this.self.result = "0", this.self.resultMsg = e.data.msg.split("|")), t.next = 10;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1);
                                    case 10:
                                        return t.prev = 10, this.loading = !1, t.finish(10);
                                    case 13:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[1, 8, 10, 13]])
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(), goToTempSelfSignRecord: function () {
                        this.$router.replace({name: "tempSelfSignRecord"})
                    }, returnRecord: function () {
                        this.$router.replace({name: "tempSelfSignRecord"})
                    }, goToSignCode: function () {
                        this.$router.replace({name: "qrcode_gen"})
                    }
                }
            }, y = m, b = s("6544"), x = s.n(b), w = s("8336"), _ = s("b0af"), S = s("12b2"), T = s("169a"), k = s("ce7e"),
            I = s("0e8f"), C = s("132d"), $ = s("a722"), D = s("8860"), V = s("ba95"), j = s("40fe"), L = s("5d23"),
            q = s("490a"), M = s("e0c7"), O = Object(f["a"])(y, i, a, !1, null, "e187dc34", null);
        e["default"] = O.exports;
        x()(O, {
            VBtn: w["a"],
            VCard: _["a"],
            VCardTitle: S["a"],
            VDialog: T["a"],
            VDivider: k["a"],
            VFlex: I["a"],
            VIcon: C["a"],
            VLayout: $["a"],
            VList: D["a"],
            VListTile: V["a"],
            VListTileAction: j["a"],
            VListTileContent: L["b"],
            VListTileTitle: L["d"],
            VProgressCircular: q["a"],
            VSubheader: M["a"]
        })
    }, c5a2: function (t, e, s) {
        t.exports = s.p + "img/bwc_wechat.d6141ed0.png"
    }, e6c5: function (t, e, s) {
    }
}]);
//# sourceMappingURL=chunk-2a5e4bc4.fce45a6b.js.map