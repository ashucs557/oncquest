(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Const_Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7993);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_5__);






function getWindowDimensions() {
    if (false) {} else {
        return {
            width: 0,
            height: 0
        };
    }
}
function Footer(props) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__.useTranslations)();
    const { cityData =[] , setCity  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [opne, setOpne] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [windowDimensions, setWindowDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getWindowDimensions());
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    const RedirectCenter = async (e, Id)=>{
        e.preventDefault();
        await setCity(Id);
        await localStorage.setItem("oq:city", Id || "");
        router.push(_Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.CENTER */ .l.CENTER);
    };
    let year = new Date().getFullYear();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: "footer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "footer-top",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-2 col-md-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: locale === "ta" ? "tamil-class-fo footer-widget footer-menu" : "footer-widget footer-menu",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: opne == "opne1" ? "footer-title btnm on1" : "footer-title btnm ",
                                                    onClick: ()=>{
                                                        if (opne == "opne1") {
                                                            setOpne("");
                                                        } else {
                                                            setOpne("opne1");
                                                        }
                                                    },
                                                    children: t("comp")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "footer-content",
                                                    style: windowDimensions.width > 767 ? {
                                                        display: "block"
                                                    } : opne == "opne1" ? {
                                                        display: "block"
                                                    } : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.OVERVIEW */ .l.OVERVIEW,
                                                                children: t("about_us")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.DIRECTORMESSAGE */ .l.DIRECTORMESSAGE,
                                                                children: t("director_message")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.ENDEVOUR */ .l.ENDEVOUR,
                                                                children: t("vision")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.ACCREDATITION */ .l.ACCREDATITION,
                                                                children: t("arrd")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.AWARD */ .l.AWARD,
                                                                children: t("award")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.CENTER */ .l.CENTER,
                                                                children: t("our_network")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.NEWSANDUPDATES */ .l.NEWSANDUPDATES,
                                                                children: t("cme")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://oncquestlabs.com/blog/",
                                                                target: "_blank",
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    window.open("https://oncquestlabs.com/blog/", "_blank");
                                                                },
                                                                children: t("blog")
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-2 col-md-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: locale === "ta" ? "tamil-class-fo footer-widget footer-menu" : "footer-widget footer-menu",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: opne == "opne2" ? "footer-title btnm on1" : "footer-title btnm ",
                                                    onClick: ()=>{
                                                        if (opne == "opne2") {
                                                            setOpne("");
                                                        } else {
                                                            setOpne("opne2");
                                                        }
                                                    },
                                                    children: t("patients")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "footer-content",
                                                    style: windowDimensions.width > 767 ? {
                                                        display: "block"
                                                    } : opne == "opne2" ? {
                                                        display: "block"
                                                    } : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: {
                                                                    pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.BOOKATEST */ .l.BOOKATEST,
                                                                    query: {
                                                                        tabs: "tests",
                                                                        categoryId: "",
                                                                        subCategoryId: ""
                                                                    }
                                                                },
                                                                children: t("test_book")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.OFFER */ .l.OFFER,
                                                                children: t("disc")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: {
                                                                    pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.CENTER */ .l.CENTER,
                                                                    query: {
                                                                        nearBy: true
                                                                    }
                                                                },
                                                                children: t("center")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: {
                                                                    pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.BOOKATEST */ .l.BOOKATEST,
                                                                    query: {
                                                                        tabs: "packages",
                                                                        categoryId: "",
                                                                        subCategoryId: ""
                                                                    }
                                                                },
                                                                children: t("package")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.HOMECOLLECTION */ .l.HOMECOLLECTION,
                                                                children: t("query_form")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: {
                                                                    pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.TESTIMONIAL */ .l.TESTIMONIAL,
                                                                    query: {
                                                                        type: 1
                                                                    }
                                                                },
                                                                children: t("testi")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.FAQ */ .l.FAQ,
                                                                children: t("faq")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.QUICKLINKS */ .l.QUICKLINKS,
                                                                children: t("quick_link")
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg col-md-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: locale === "ta" ? "tamil-class-fo footer-widget footer-menu" : "footer-widget footer-menu",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: opne == "opne3" ? "footer-title btnm on1" : "footer-title btnm ",
                                                    onClick: ()=>{
                                                        if (opne == "opne3") {
                                                            setOpne("");
                                                        } else {
                                                            setOpne("opne3");
                                                        }
                                                    },
                                                    children: t("doctors")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "footer-content",
                                                    style: windowDimensions.width > 767 ? {
                                                        display: "block"
                                                    } : opne == "opne3" ? {
                                                        display: "block"
                                                    } : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.DEPARTMENT */ .l.DEPARTMENT,
                                                                title: "",
                                                                children: t("department")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.BROCHURES */ .l.BROCHURES,
                                                                title: "",
                                                                children: t("brochures")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.PATHSHALA */ .l.PATHSHALA,
                                                                children: t("paathshala")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: {
                                                                    pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.TESTIMONIAL */ .l.TESTIMONIAL,
                                                                    query: {
                                                                        type: 2
                                                                    }
                                                                },
                                                                children: t("testi")
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg col-md-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: locale === "ta" ? "tamil-class-fo footer-widget footer-menu" : "footer-widget footer-menu",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: opne == "opne4" ? "footer-title btnm on1" : "footer-title btnm ",
                                                    onClick: ()=>{
                                                        if (opne == "opne4") {
                                                            setOpne("");
                                                        } else {
                                                            setOpne("opne4");
                                                        }
                                                    },
                                                    children: t("contact")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "footer-content",
                                                    style: windowDimensions.width > 767 ? {
                                                        display: "block"
                                                    } : opne == "opne4" ? {
                                                        display: "block"
                                                    } : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.CORPORATEOFFICE */ .l.CORPORATEOFFICE,
                                                                title: "",
                                                                children: t("office")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.GENERALENQUIRY */ .l.GENERALENQUIRY,
                                                                title: "",
                                                                children: t("enquiry")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.HEALTHENQUIRY */ .l.HEALTHENQUIRY,
                                                                title: "",
                                                                children: t("corporate")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.CAREER */ .l.CAREER,
                                                                title: "",
                                                                children: t("career")
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg col-md-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: locale === "ta" ? "tamil-class-fo footer-widget footer-menu" : "footer-widget footer-menu",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: opne == "opne5" ? "footer-title btnm on1" : "footer-title btnm ",
                                                    onClick: ()=>{
                                                        if (opne == "opne5") {
                                                            setOpne("");
                                                        } else {
                                                            setOpne("opne5");
                                                        }
                                                    },
                                                    children: t("partner")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "footer-content",
                                                    style: windowDimensions.width > 767 ? {
                                                        display: "block"
                                                    } : opne == "opne5" ? {
                                                        display: "block"
                                                    } : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.BECOMWEPARTNER */ .l.BECOMWEPARTNER,
                                                                title: "",
                                                                children: t("partner_page")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.CLINICALTRIAL */ .l.CLINICALTRIAL,
                                                                title: "",
                                                                children: t("clinical_trial")
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg col-md-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: locale === "ta" ? "tamil-class-fo footer-widget footer-menu" : "footer-widget footer-menu",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: opne == "opne6" ? "footer-title btnm on1" : "footer-title btnm ",
                                                    onClick: ()=>{
                                                        if (opne == "opne6") {
                                                            setOpne("");
                                                        } else {
                                                            setOpne("opne6");
                                                        }
                                                    },
                                                    children: t("logins")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "footer-content",
                                                    style: windowDimensions.width > 767 ? {
                                                        display: "block"
                                                    } : opne == "opne6" ? {
                                                        display: "block"
                                                    } : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://lis.oncquest.net/labmatefranchises_7001/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                title: "",
                                                                children: t("f_partner")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://lis.oncquest.net/labmateonline_7001/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                title: "",
                                                                children: t("lis_login")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://itd.oncquest.net/Oncquest/Design/onlinelab/",
                                                                rel: "noopener noreferrer",
                                                                target: "_blank",
                                                                title: "",
                                                                children: t("report")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://admin.oncquestlabs.com/search-tests",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                title: "",
                                                                children: t("range")
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg col-md-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: locale === "ta" ? "tamil-class-fo footer-widget footer-menu widgetlast" : "footer-widget footer-menu widgetlast",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "footer-title",
                                                    children: t("arrd")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "footer-about-content nabl-logo",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/assets/img/nabl_logo.png",
                                                        alt: "",
                                                        className: "scale"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "footer-title pt-3",
                                                    children: t("contact")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "footer-about-content",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "social",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "https://www.facebook.com/OncquestLaboratories/?ref=aymt_homepage_panel",
                                                                    "data-toggle": "tooltip",
                                                                    "data-placement": "bottom",
                                                                    title: "facebook",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/assets/img/fb.png",
                                                                        alt: "",
                                                                        className: "scale"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "https://www.instagram.com/oncquestlab/",
                                                                    "data-toggle": "tooltip",
                                                                    "data-placement": "bottom",
                                                                    title: "instagram",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/assets/img/insta.png",
                                                                            alt: "",
                                                                            className: "scale"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "https://twitter.com/Oncquest1?t=U1pQPbKhT53oZSpBuqXDDw&s=09",
                                                                    "data-toggle": "tooltip",
                                                                    "data-placement": "bottom",
                                                                    title: "twitter",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/assets/img/twitter.png",
                                                                            alt: "",
                                                                            className: "scale"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "https://www.linkedin.com/company/oncquest-labs-ltd-?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A706323%2Cidx%3A1-1-1%2CtarId%3A1477484437069%2Ctas%3Aoncquest",
                                                                    "data-toggle": "tooltip",
                                                                    "data-placement": "bottom",
                                                                    title: "linkedin",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/assets/img/in.png",
                                                                            alt: "",
                                                                            className: "scale"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "https://www.youtube.com/c/OncquestLaboratoriesLtd",
                                                                    "data-toggle": "tooltip",
                                                                    "data-placement": "bottom",
                                                                    title: "youtube",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/assets/img/youtube.png",
                                                                            alt: "",
                                                                            className: "scale"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "countrybx",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                            children: [
                                                t("our_presence"),
                                                "\xa0",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-angle-down",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "footer-bottom",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "copyright",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-12 col-lg-12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "copyright-text text-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "mb-0",
                                                children: [
                                                    t("copyright"),
                                                    " \xa9 ",
                                                    year,
                                                    " Oncquest -",
                                                    " ",
                                                    t("all-rights-reserved"),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://abym.in/",
                                                        target: "_blank",
                                                        className: "font-weight-bolder",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: "AbyM Technology"
                                                        })
                                                    }),
                                                    t("design_dev")
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.PRIVACY */ .l.PRIVACY,
                                                                className: "px-1",
                                                                children: t("privacy_policy")
                                                            }),
                                                            " ",
                                                            "|",
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.TERMSCONDITION */ .l.TERMSCONDITION,
                                                                className: "px-1",
                                                                children: t("term_condition_footer")
                                                            }),
                                                            " ",
                                                            "|",
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.DISCLAIMER */ .l.DISCLAIMER,
                                                            className: "px-1",
                                                            children: t("declaimer")
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 8183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "jquery"
const external_jquery_namespaceObject = require("jquery");
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__(503);
;// CONCATENATED MODULE: ./src/Component/Common/Layout/Header/usersvg.tsx


const Usersvg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "27",
        height: "27",
        viewBox: "0 0 27 27",
        children: /*#__PURE__*/ jsx_runtime.jsx("g", {
            id: "Group_926",
            "data-name": "Group 926",
            transform: "translate(-1518.255 -11)",
            children: /*#__PURE__*/ jsx_runtime.jsx("g", {
                id: "Group_925",
                "data-name": "Group 925",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    id: "Group_924",
                    "data-name": "Group 924",
                    transform: "translate(1179.256 -327.999)",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("g", {
                            id: "Layer_1",
                            "data-name": "Layer 1",
                            transform: "translate(338.999 338.999)",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                id: "Path_4766",
                                "data-name": "Path 4766",
                                d: "M366,352.5A13.5,13.5,0,1,1,352.5,339,13.54,13.54,0,0,1,366,352.5Z",
                                transform: "translate(-338.999 -338.999)",
                                fill: "#ffcc5c"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("g", {
                            id: "Layer_7",
                            "data-name": "Layer 7",
                            transform: "translate(343.286 344.626)",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                id: "Group_923",
                                "data-name": "Group 923",
                                transform: "translate(0 0)",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4767",
                                        "data-name": "Path 4767",
                                        d: "M380.5,392.523l-2.093-1.908v-2.4h4.186v2.4Z",
                                        transform: "translate(-371.253 -379.553)",
                                        fill: "#eaad8c"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4768",
                                        "data-name": "Path 4768",
                                        d: "M378.407,389.285a2.392,2.392,0,0,0,4.186,0v-1.071h-4.186Z",
                                        transform: "translate(-371.253 -379.553)",
                                        fill: "#d89273"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4769",
                                        "data-name": "Path 4769",
                                        d: "M372.234,364.368c-.021-.594.435-.179.435-.179s-.8-4.918,3.448-4.918c4.311,0,3.45,4.918,3.45,4.918s.456-.415.437.179a3.928,3.928,0,0,1-.159,1.01,1.333,1.333,0,0,1-.694,1.011,3.42,3.42,0,0,1-.614,1.684c-.5.5-1.288,1.626-2.419,1.587-1.129.039-1.923-1.09-2.418-1.587a3.418,3.418,0,0,1-.614-1.684,1.336,1.336,0,0,1-.694-1.011A3.924,3.924,0,0,1,372.234,364.368Z",
                                        transform: "translate(-366.872 -359.012)",
                                        fill: "#f4bd9a"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4770",
                                        "data-name": "Path 4770",
                                        d: "M365.115,407.374c3.8,0,5.875-.331,8.364-2.829,0,0-.005-2.5-.045-2.616-.059-.179-.238-.634-.516-.714s-4.261-1.685-4.876-1.943l-2.856.73-2.892-.73c-.615.258-4.6,1.863-4.876,1.943s-.456.535-.516.714c-.041.121-.1,2.084-.1,2.616C359.286,406.993,361.352,407.374,365.115,407.374Z",
                                        transform: "translate(-355.921 -387.401)",
                                        fill: "#fff"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4771",
                                        "data-name": "Path 4771",
                                        d: "M377.841,398.094l-1.279,1.8-1.567-2.705.891-.971Zm.473,0,1.28,1.8,1.567-2.706-.9-.971Z",
                                        transform: "translate(-368.831 -385.232)",
                                        fill: "#d3cdcd"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4772",
                                        "data-name": "Path 4772",
                                        d: "M384.121,402.1l-.357-.515a.216.216,0,0,0-.136-.057h-.792a.221.221,0,0,0-.136.057l-.356.515a.209.209,0,0,0-.064.262c.106.334.467.48.53.759,0,0-.217,3.147-.431,5.959-.064.846,1.767.82,1.7-.033-.216-2.791-.435-5.89-.435-5.89.063-.279.435-.46.542-.795A.211.211,0,0,0,384.121,402.1Z",
                                        transform: "translate(-373.986 -388.999)",
                                        fill: "#c93939"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4773",
                                        "data-name": "Path 4773",
                                        d: "M377.616,396.937l-1.279,1.8-1.659-2.51.983-1.167Zm.473,0,1.28,1.8,1.66-2.51-1-1.167Z",
                                        transform: "translate(-368.606 -384.411)",
                                        fill: "#fff"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4774",
                                        "data-name": "Path 4774",
                                        d: "M377.055,359.446c-3.382,0-3.619,3.186-3.532,4.156.059.661.431,1,.426.845a3.187,3.187,0,0,1,.553-2.17c.5-.507,1.323.069,2.437.069,1.188,0,2.1-.688,2.642-.074a3.272,3.272,0,0,1,.531,2.082c.006.152.289-.112.348-.773C380.549,362.611,380.363,359.446,377.055,359.446Z",
                                        transform: "translate(-367.777 -359.137)",
                                        fill: "#d39572"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4775",
                                        "data-name": "Path 4775",
                                        d: "M376.524,358.38c-3.684,0-3.682,3.326-3.6,4.271a3.751,3.751,0,0,0,.226,1.214c.138.347.247.477.28.573.133.393.159-.433.188-.577.369-1.781,3.695-1.079,4.951-2.468a7.182,7.182,0,0,0,1.007,2.3c.073.128.1,1.014.2.746a6.2,6.2,0,0,0,.279-.573,4.517,4.517,0,0,0,.208-1.3C380.354,361.615,380.207,358.38,376.524,358.38Z",
                                        transform: "translate(-367.349 -358.38)",
                                        fill: "#634335"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        id: "Path_4776",
                                        "data-name": "Path 4776",
                                        d: "M362.977,407.871a13.444,13.444,0,0,0,9.25-3.7c-.4-1.569-.921-3.619-.95-3.707-.059-.179-.238-.634-.516-.714-.237-.068-3.078-1.252-4.395-1.754l-3.38,5.948-3.374-5.931c-1.344.512-4.117,1.671-4.352,1.737-.278.08-.456.535-.516.714-.03.089-.572,2.134-.98,3.743A13.445,13.445,0,0,0,362.977,407.871Z",
                                        transform: "translate(-353.764 -386.498)",
                                        fill: "#3b93e9"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const usersvg = (Usersvg);

// EXTERNAL MODULE: ./src/redux/action.ts
var action = __webpack_require__(4759);
// EXTERNAL MODULE: ./src/redux/dashboard/reducer.ts
var reducer = __webpack_require__(3639);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/Const/Route.ts
var Route = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/Utils/index.ts
var Utils = __webpack_require__(701);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/languageSelectMobile.tsx




const languageMap = {
    en: {
        label: "English",
        dir: "ltr",
        active: true,
        locale: "en"
    },
    hn: {
        label: "हिन्दी",
        dir: "ltr",
        active: false,
        locale: "hn"
    },
    bn: {
        label: "বাংলা",
        dir: "ltr",
        active: false,
        locale: "bn"
    },
    kn: {
        label: "ಕನ್ನಡ",
        dir: "ltr",
        active: false,
        locale: "kn"
    },
    ta: {
        label: "தமிழ்",
        dir: "ltr",
        active: false,
        locale: "ta"
    }
};
const LanguageSelectMobile = (props)=>{
    const selected = typeof localStorage !== "undefined" && localStorage.getItem("i18nextLng") || "en";
    const t = (0,external_next_intl_.useTranslations)();
    //     const handleLangChange = (e: any, val: any) => {
    //         i18next.changeLanguage(val);
    //         props.onClick();
    //     }
    //     useEffect(()=> {
    //     if(selected){
    //       i18next.changeLanguage(selected);
    //     }
    //   },[selected])
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "h_dropdown",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("i", {
                className: "fa fa-language",
                style: {
                    marginRight: "10px"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    t("select_language"),
                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                        className: "fa fa-angle-down fa-xs ml-2"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "h_dropdown-menu",
                children: Object.keys(languageMap)?.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    locale: languageMap[item].locale,
                                    children: languageMap[item].label
                                })
                            }),
                            Object.keys(languageMap)?.length - 1 > i && /*#__PURE__*/ jsx_runtime.jsx("hr", {})
                        ]
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const languageSelectMobile = (LanguageSelectMobile);

;// CONCATENATED MODULE: ./src/languageSelect.tsx




const languageSelect_languageMap = {
    en: {
        label: "English",
        dir: "ltr",
        active: true,
        locale: "en"
    },
    hn: {
        label: "हिन्दी",
        dir: "ltr",
        active: false,
        locale: "hn"
    },
    bn: {
        label: "বাংলা",
        dir: "ltr",
        active: false,
        locale: "bn"
    },
    kn: {
        label: "ಕನ್ನಡ",
        dir: "ltr",
        active: false,
        locale: "kn"
    },
    ta: {
        label: "தமிழ்",
        dir: "ltr",
        active: false,
        locale: "ta"
    }
};
const LanguageSelect = ()=>{
    // const selected = typeof localStorage !== 'undefined' && localStorage.getItem("i18nextLng") || "en";
    const { locale  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "select-lang",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: "/assets/img/language1.svg",
                alt: "lang"
            }),
            Object.keys(languageSelect_languageMap)?.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "",
                            locale: item,
                            className: locale == item ? item : "en",
                            children: languageSelect_languageMap[item].label
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: Object.keys(languageSelect_languageMap)?.length - 1 > i && `  |  `
                        })
                    ]
                }, i))
        ]
    });
};
/* harmony default export */ const languageSelect = (LanguageSelect);

;// CONCATENATED MODULE: ./src/Component/Common/Layout/Header/index.tsx














function Header(props) {
    const t = (0,external_next_intl_.useTranslations)();
    const { cityData , city , setCity  } = props;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const anchorRef1 = (0,external_react_.useRef)(null);
    const router = (0,router_.useRouter)();
    const { locale  } = (0,router_.useRouter)();
    const { pathname  } = router;
    const [toggelOpne, settoggelOpne] = (0,external_react_.useState)("");
    const [anchor1, setAnchor1] = (0,external_react_.useState)(false);
    const logout = (e)=>{
        dispatch(action/* userAction.logoutAction */.ul.logoutAction(history));
    };
    const addClass = ()=>{
        external_jquery_default()("#openTab").addClass("open");
        external_jquery_default()("#zeynepOpen").addClass("zeynep-opened");
        document.body.classList.add("bg-notscroll");
    };
    const removeClass = ()=>{
        external_jquery_default()("#openTab").removeClass("open");
        external_jquery_default()("#zeynepOpen").removeClass("zeynep-opened");
        document.body.classList.remove("bg-notscroll");
    };
    const togglehendle = (e)=>{
        if (toggelOpne == true) {
            settoggelOpne(false);
        } else {
            settoggelOpne(e);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (anchor1) {
            window?.scroll(0, 0);
        }
        return ()=>{};
    }, [
        anchor1
    ]);
    const handleCityChange = async (e)=>{
        dispatch((0,reducer/* setselectedCityResponse */.bj)(e.target.value));
        setCity(e.target.value);
        if (e.target.value === "") {
            await window?.localStorage.removeItem("oq:city");
        } else {
            await window?.localStorage.setItem("oq:city", e.target.value);
        }
        if (pathname === Route/* ROUTE.CENTER */.l.CENTER) {
            router.push(Route/* ROUTE.CENTER */.l.CENTER);
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "topbar-section",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "topbar-inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "top-bar-left",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: Route/* ROUTE.HOME */.l.HOME,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/assets/img/logo.png",
                                    alt: "",
                                    className: "scale"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "top-bar-right",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "righttop mob-d-block",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "getstart drp mob-drp",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(languageSelect, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "getstart drp mob-drp",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "tel: 0124-6650000",
                                                passHref: true,
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "35.045",
                                                            height: "28.875",
                                                            viewBox: "0 0 35.045 28.875",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                id: "Group_922",
                                                                "data-name": "Group 922",
                                                                transform: "translate(-2173.523 -718.297)",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                    id: "Group_921",
                                                                    "data-name": "Group 921",
                                                                    transform: "translate(2173.523 718.297)",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_4732",
                                                                            "data-name": "Path 4732",
                                                                            d: "M2772.343,1121.855c.428.11,1.114.275,1.2,1.079a3.343,3.343,0,0,1-.378,1.514,16.1,16.1,0,0,1-1.588,2.422l.087.061a.565.565,0,0,0-.3.436.9.9,0,0,0,.245.679.283.283,0,0,0,.254.1.357.357,0,0,0,.167-.126,12.435,12.435,0,0,0,1.883-2.845,4.913,4.913,0,0,0,.494-1.5,2.241,2.241,0,0,0-.312-1.522,2.993,2.993,0,0,0-1.925-1.051Z",
                                                                            transform: "translate(-2752.766 -1108.57)",
                                                                            fill: "#03277d"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                            id: "Group_900",
                                                                            "data-name": "Group 900",
                                                                            transform: "translate(0 3.98)",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                    id: "Rectangle_641",
                                                                                    "data-name": "Rectangle 641",
                                                                                    width: "11.757",
                                                                                    height: "10.473",
                                                                                    rx: "5.236",
                                                                                    fill: "#1765cf"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                    id: "Rectangle_642",
                                                                                    "data-name": "Rectangle 642",
                                                                                    width: "11.757",
                                                                                    height: "10.473",
                                                                                    rx: "5.236",
                                                                                    transform: "translate(0.633)",
                                                                                    fill: "#4f94f9"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                            id: "Group_901",
                                                                            "data-name": "Group 901",
                                                                            transform: "translate(4.284 14.406)",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("line", {
                                                                                    id: "Line_64",
                                                                                    "data-name": "Line 64",
                                                                                    x2: "3.494",
                                                                                    y2: "2.63",
                                                                                    transform: "translate(1.189)",
                                                                                    fill: "none",
                                                                                    stroke: "#03277d",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: "5.335"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("line", {
                                                                                    id: "Line_65",
                                                                                    "data-name": "Line 65",
                                                                                    x1: "8.106",
                                                                                    fill: "none",
                                                                                    stroke: "#03277d",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: "5.335"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                            id: "Group_902",
                                                                            "data-name": "Group 902",
                                                                            transform: "translate(18.174 2.414)",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                    id: "Rectangle_643",
                                                                                    "data-name": "Rectangle 643",
                                                                                    width: "1.424",
                                                                                    height: "2.373",
                                                                                    transform: "translate(0.438 0) rotate(10.634)",
                                                                                    fill: "#fe9592"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4733",
                                                                                    "data-name": "Path 4733",
                                                                                    d: "M2766.877,795.937l-.169.9a5,5,0,0,1,1.141,1.639l.428-2.278Z",
                                                                                    transform: "translate(-2766.439 -795.937)",
                                                                                    fill: "#fb7874"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                            id: "Group_903",
                                                                            "data-name": "Group 903",
                                                                            transform: "translate(14.707 4.01)",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4734",
                                                                                    "data-name": "Path 4734",
                                                                                    d: "M2650.925,853.991c.278-1.637.54-2.808.753-4.46a2.223,2.223,0,0,0-1.107-2.15,1.966,1.966,0,0,0-1.6.128,3.653,3.653,0,0,0-1.451,2.055,18.622,18.622,0,0,0-.8,3.239,4.376,4.376,0,0,0-.03,2.139A8.443,8.443,0,0,0,2650.925,853.991Z",
                                                                                    transform: "translate(-2646.559 -847.267)",
                                                                                    fill: "#70bb92"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4735",
                                                                                    "data-name": "Path 4735",
                                                                                    d: "M2735.891,898.986a8.618,8.618,0,0,1-2.376,5.767,8.417,8.417,0,0,0,1.662-.651c.278-1.637.54-2.808.753-4.46A1.98,1.98,0,0,0,2735.891,898.986Z",
                                                                                    transform: "translate(-2730.811 -897.378)",
                                                                                    fill: "#48956b"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4736",
                                                                                    "data-name": "Path 4736",
                                                                                    d: "M2658.6,1064.86a3.865,3.865,0,0,0-2.5-1.5c-.141-.022-1.3-.2-1.328-.022,0-.024.008-.046.012-.07a8.444,8.444,0,0,1-4.242.951,1.826,1.826,0,0,0,.157.347c.722,1.214,2.306,1.034,3.508,1.057.805.015,2.288.015,2.543,1.01a1.921,1.921,0,0,1-.009.819,7.766,7.766,0,0,1-.87,2.258c-.089.165-1.159,2-1.184,1.982l.613.4c.23.149,1.349-1.178,1.485-1.369.471-.659.953-1.325,1.377-2.016a5.122,5.122,0,0,0,.858-2.5A2.263,2.263,0,0,0,2658.6,1064.86Z",
                                                                                    transform: "translate(-2650.412 -1056.547)",
                                                                                    fill: "#436dd6"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4737",
                                                                                    "data-name": "Path 4737",
                                                                                    d: "M2656.95,1095.911c-1.1-1.726-4.571.4-5.925-1.747-.163,0-.326,0-.489,0a1.827,1.827,0,0,0,.157.347c.722,1.214,2.306,1.034,3.508,1.057.805.015,2.288.015,2.543,1.01a1.921,1.921,0,0,1-.009.819,7.766,7.766,0,0,1-.87,2.258c-.089.165-1.159,2-1.184,1.982l.114.074C2656.435,1099.929,2658.272,1098.025,2656.95,1095.911Z",
                                                                                    transform: "translate(-2650.412 -1086.483)",
                                                                                    fill: "#315fd2"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                            id: "Group_911",
                                                                            "data-name": "Group 911",
                                                                            transform: "translate(7.025 6.957)",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                id: "Group_910",
                                                                                "data-name": "Group 910",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                        id: "Group_904",
                                                                                        "data-name": "Group 904",
                                                                                        transform: "translate(0 10.441)",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                id: "Ellipse_2038",
                                                                                                "data-name": "Ellipse 2038",
                                                                                                cx: "4.058",
                                                                                                cy: "4.058",
                                                                                                r: "4.058",
                                                                                                transform: "translate(0 5.739) rotate(-45)",
                                                                                                fill: "#03277d"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                id: "Ellipse_2039",
                                                                                                "data-name": "Ellipse 2039",
                                                                                                cx: "2.719",
                                                                                                cy: "2.719",
                                                                                                r: "2.719",
                                                                                                transform: "translate(1.893 5.739) rotate(-45)",
                                                                                                fill: "#1765cf"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                id: "Ellipse_2040",
                                                                                                "data-name": "Ellipse 2040",
                                                                                                cx: "1.114",
                                                                                                cy: "1.114",
                                                                                                r: "1.114",
                                                                                                transform: "translate(4.163 5.739) rotate(-45)",
                                                                                                fill: "#b2b2b2"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                        id: "Group_905",
                                                                                        "data-name": "Group 905",
                                                                                        transform: "translate(0.009 2.265)",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4738",
                                                                                            "data-name": "Path 4738",
                                                                                            d: "M2420.74,1014.923h-2.482a11.406,11.406,0,0,1,.457,6.5c-.271,1.406-1.64,4.425-3.374,4.384-1.487-.035-3.527-.2-4.23-2.1a3.739,3.739,0,0,1,.716-3.992l-6.3,0c-1.519,0-5.282,1.01-5.752,7.151a1.1,1.1,0,0,0,1.113,1.147h18.356l1.458-3.626,2.019.692c.748-.847,2.21,1.1,2.446,0C2426.448,1019.12,2420.74,1014.923,2420.74,1014.923Z",
                                                                                            transform: "translate(-2399.776 -1014.923)",
                                                                                            fill: "#fdb702"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4739",
                                                                                        "data-name": "Path 4739",
                                                                                        d: "M2918.556,1014.923H2916.8a11.406,11.406,0,0,1,.457,6.5c-.248,1.287-1.416,3.89-2.942,4.321C2915.761,1025.646,2920.69,1022.642,2918.556,1014.923Z",
                                                                                        transform: "translate(-2898.306 -1012.658)",
                                                                                        fill: "#fd9f02"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                        id: "Group_908",
                                                                                        "data-name": "Group 908",
                                                                                        transform: "translate(16.543 10.441)",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                                id: "Group_906",
                                                                                                "data-name": "Group 906",
                                                                                                transform: "translate(0 0)",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                        id: "Ellipse_2041",
                                                                                                        "data-name": "Ellipse 2041",
                                                                                                        cx: "4.058",
                                                                                                        cy: "4.058",
                                                                                                        r: "4.058",
                                                                                                        transform: "translate(0 5.739) rotate(-45)",
                                                                                                        fill: "#03277d"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                        id: "Ellipse_2042",
                                                                                                        "data-name": "Ellipse 2042",
                                                                                                        cx: "2.719",
                                                                                                        cy: "2.719",
                                                                                                        r: "2.719",
                                                                                                        transform: "translate(1.893 5.739) rotate(-45)",
                                                                                                        fill: "#1765cf"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                        id: "Ellipse_2043",
                                                                                                        "data-name": "Ellipse 2043",
                                                                                                        cx: "1.114",
                                                                                                        cy: "1.114",
                                                                                                        r: "1.114",
                                                                                                        transform: "matrix(0.23, -0.973, 0.973, 0.23, 4.398, 6.567)",
                                                                                                        fill: "#b2b2b2"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                                id: "Group_907",
                                                                                                "data-name": "Group 907",
                                                                                                transform: "translate(1.496 0.933)",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4740",
                                                                                                    "data-name": "Path 4740",
                                                                                                    d: "M2987.842,1311.726a.264.264,0,0,0,.414-.278,4.347,4.347,0,0,0-8.54,0,.264.264,0,0,0,.414.278,6.519,6.519,0,0,1,7.712,0Z",
                                                                                                    transform: "translate(-2979.707 -1307.915)",
                                                                                                    fill: "#fd9f02"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4741",
                                                                                        "data-name": "Path 4741",
                                                                                        d: "M3085.936,942.263v2.253a1.133,1.133,0,0,0,1.014-1.126h0A1.133,1.133,0,0,0,3085.936,942.263Z",
                                                                                        transform: "translate(-3064.594 -942.257)",
                                                                                        fill: "#fdb702"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4742",
                                                                                        "data-name": "Path 4742",
                                                                                        d: "M2980.747,942.06h-2.65a.6.6,0,0,0-.6.6v1.06a.6.6,0,0,0,.6.6h2.65a1.132,1.132,0,0,0,.119-.006v-2.253A1.132,1.132,0,0,0,2980.747,942.06Z",
                                                                                        transform: "translate(-2959.523 -942.06)",
                                                                                        fill: "#fd9f02"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4743",
                                                                                        "data-name": "Path 4743",
                                                                                        d: "M2918.528,965.141l-2.629,1.322a.423.423,0,0,1-.38-.756l.024-.011,2.706-1.157a.332.332,0,0,1,.28.6Z",
                                                                                        transform: "translate(-2899.25 -963.814)",
                                                                                        fill: "#03277d"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                        id: "Group_909",
                                                                                        "data-name": "Group 909",
                                                                                        transform: "translate(2.819 8.266)",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4744",
                                                                                            "data-name": "Path 4744",
                                                                                            d: "M2492.374,1207.918a6.261,6.261,0,0,0-2.234.411c3.144.027,5.769,1.931,6.237,4.964a.88.88,0,0,0,.864.756h.442a.875.875,0,0,0,.855-1.047A6.28,6.28,0,0,0,2492.374,1207.918Z",
                                                                                            transform: "translate(-2490.14 -1207.918)",
                                                                                            fill: "#fd9f02"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                            id: "Rectangle_644",
                                                                            "data-name": "Rectangle 644",
                                                                            width: "8.377",
                                                                            height: "1.066",
                                                                            rx: "0.533",
                                                                            transform: "translate(11.57 13.026)",
                                                                            fill: "#03277d"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                            id: "Group_915",
                                                                            "data-name": "Group 915",
                                                                            transform: "translate(8.812 18.203)",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                    id: "Group_912",
                                                                                    "data-name": "Group 912",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4745",
                                                                                        "data-name": "Path 4745",
                                                                                        d: "M2461.857,1304.108H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z",
                                                                                        transform: "translate(-2456.948 -1303.796)",
                                                                                        fill: "#03277d"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                    id: "Group_913",
                                                                                    "data-name": "Group 913",
                                                                                    transform: "translate(0 0.93)",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4746",
                                                                                        "data-name": "Path 4746",
                                                                                        d: "M2461.857,1334.026H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z",
                                                                                        transform: "translate(-2456.948 -1333.714)",
                                                                                        fill: "#03277d"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                    id: "Group_914",
                                                                                    "data-name": "Group 914",
                                                                                    transform: "translate(0 1.86)",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4747",
                                                                                        "data-name": "Path 4747",
                                                                                        d: "M2461.857,1363.944H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z",
                                                                                        transform: "translate(-2456.948 -1363.632)",
                                                                                        fill: "#03277d"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_4748",
                                                                            "data-name": "Path 4748",
                                                                            d: "M2728.549,869.47a3.836,3.836,0,0,0,1.58.98,1.994,1.994,0,0,0,.881.135c.38-.052.76-.142,1.137-.212a1.4,1.4,0,0,1,.617-.022.422.422,0,0,1,.184.775c-.185.147-.35.3-.581.121a3.015,3.015,0,0,0-.324-.29,1.016,1.016,0,0,0-.778.031,4.206,4.206,0,0,1-3.172-.19,7.043,7.043,0,0,1-2.654-2.929.677.677,0,0,1-.056-.732,1.145,1.145,0,0,1,.7-.524c.764-.192.917.411,1.226.957A9.079,9.079,0,0,0,2728.549,869.47Z",
                                                                            transform: "translate(-2708.143 -861.965)",
                                                                            fill: "#fe9592"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_4749",
                                                                            "data-name": "Path 4749",
                                                                            d: "M2728.782,884.895a4.284,4.284,0,0,1-1.448-1.022,7.11,7.11,0,0,1-.6-.746c-.178-.251-.34-.513-.519-.764s-.35-.48-.5-.734a2.724,2.724,0,0,1-.256-.527,1.133,1.133,0,0,0-.074.109.677.677,0,0,0,.056.732,7.043,7.043,0,0,0,2.654,2.929,3.826,3.826,0,0,0,2.348.365A4.272,4.272,0,0,1,2728.782,884.895Z",
                                                                            transform: "translate(-2708.143 -876.04)",
                                                                            fill: "#fb7874"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_4750",
                                                                            "data-name": "Path 4750",
                                                                            d: "M2712.728,853.513c-.3.333-.069,1.017.022,1.263a5.172,5.172,0,0,0,.648,1.121c.551-.312,1.891-1.093,1.891-1.093s-.735-1.967-2.013-1.649A1.2,1.2,0,0,0,2712.728,853.513Z",
                                                                            transform: "translate(-2695.821 -848.928)",
                                                                            fill: "#7fc29d"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_4751",
                                                                            "data-name": "Path 4751",
                                                                            d: "M2713.873,855.987q-.1-.164-.2-.333c-.068-.12-.134-.241-.195-.365s-.116-.245-.166-.371a2.708,2.708,0,0,1-.116-.355,1.272,1.272,0,0,1-.041-.314.539.539,0,0,1,.057-.248.352.352,0,0,1,.12-.123l-.057.011a1.2,1.2,0,0,0-.548.359c-.3.333-.069,1.017.022,1.263a5.173,5.173,0,0,0,.648,1.121c.165-.093.4-.229.65-.373Q2713.958,856.124,2713.873,855.987Z",
                                                                            transform: "translate(-2695.821 -849.663)",
                                                                            fill: "#5bb182"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                            id: "Group_918",
                                                                            "data-name": "Group 918",
                                                                            transform: "translate(17.913 0)",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4752",
                                                                                    "data-name": "Path 4752",
                                                                                    d: "M2859.151,780.039a.841.841,0,0,0,.028.154C2859.173,780.142,2859.163,780.09,2859.151,780.039Z",
                                                                                    transform: "translate(-2855.747 -778.119)",
                                                                                    fill: "#fe9592"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4753",
                                                                                    "data-name": "Path 4753",
                                                                                    d: "M2755.641,721.766a.183.183,0,0,1-.086.115,1.077,1.077,0,0,1-.186.108,1.433,1.433,0,0,1-.771,1.025,2.15,2.15,0,1,1,.58-2.556,2.656,2.656,0,0,1,.188.561.818.818,0,0,0,.028.154,1.446,1.446,0,0,0,.192.461A.2.2,0,0,1,2755.641,721.766Z",
                                                                                    transform: "translate(-2751.962 -719.098)",
                                                                                    fill: "#fe9592"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4754",
                                                                                    "data-name": "Path 4754",
                                                                                    d: "M2859.151,780.039a.841.841,0,0,0,.028.154C2859.173,780.142,2859.163,780.09,2859.151,780.039Z",
                                                                                    transform: "translate(-2855.747 -778.119)",
                                                                                    fill: "#fe9592"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4755",
                                                                                    "data-name": "Path 4755",
                                                                                    d: "M2760.151,761.168a.792.792,0,0,1-.37.421,3.122,3.122,0,0,1-1.924.488.925.925,0,0,0,.053.309.556.556,0,0,0-.247-.065.168.168,0,0,0-.083.322c.077.044.2.018.214.113.009.069-.081.162-.125.209a.826.826,0,0,1-.208.163c-.051.028-.18.044-.215.08a.153.153,0,0,0,.042-.124.522.522,0,0,1-.4.192l.08-.094a.671.671,0,0,1-.379.2.631.631,0,0,0,.082-.477c-.029-.155-.145-.3-.159-.455a.654.654,0,0,1,.134-.4,1.116,1.116,0,0,1,.368-.3,4.058,4.058,0,0,1,1.219-.377q.538-.1,1.081-.182a1.169,1.169,0,0,1,.373,0A1.763,1.763,0,0,0,2760.151,761.168Z",
                                                                                    transform: "translate(-2756.302 -759.834)",
                                                                                    fill: "#03277d"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                    id: "Group_916",
                                                                                    "data-name": "Group 916",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4756",
                                                                                            "data-name": "Path 4756",
                                                                                            d: "M2757.083,744.472s4.027-.947,4.191-1.7c.038-.171-1.356.283-1.356.283Z",
                                                                                            transform: "translate(-2756.853 -741.978)",
                                                                                            fill: "#ea8e0a"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4757",
                                                                                            "data-name": "Path 4757",
                                                                                            d: "M2750.574,718.438c-1.071.476-1.026,1.369-.666,2.352l2.836-1.412C2752.22,718.522,2751.468,718.04,2750.574,718.438Z",
                                                                                            transform: "translate(-2749.678 -718.297)",
                                                                                            fill: "#fdb702"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4758",
                                                                                            "data-name": "Path 4758",
                                                                                            d: "M2749.986,736.438a1.873,1.873,0,0,0-.067,1.93l.209-.1A2.054,2.054,0,0,1,2749.986,736.438Z",
                                                                                            transform: "translate(-2749.689 -735.874)",
                                                                                            fill: "#fd9f02"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                    id: "Group_917",
                                                                                    "data-name": "Group 917",
                                                                                    transform: "translate(3.339 2.638)",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4759",
                                                                                        "data-name": "Path 4759",
                                                                                        d: "M2857.427,803.187a.106.106,0,0,0,0-.029.3.3,0,0,1-.208.124.29.29,0,0,0-.088.014.061.061,0,0,0-.038.072c.01.025.042.034.069.038h0a1.084,1.084,0,0,0,.179-.1A.185.185,0,0,0,2857.427,803.187Z",
                                                                                        transform: "translate(-2857.087 -803.158)",
                                                                                        fill: "#fb7874"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4760",
                                                                                    "data-name": "Path 4760",
                                                                                    d: "M2813.242,806.648a.15.15,0,0,0-.02.146.28.28,0,0,0,.094.119.5.5,0,0,0,.176.089.143.143,0,0,0,.149-.024.1.1,0,0,0,.019-.083.208.208,0,0,0-.035-.08C2813.568,806.73,2813.344,806.527,2813.242,806.648Z",
                                                                                    transform: "translate(-2811.237 -803.865)",
                                                                                    fill: "#fb7874"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_4761",
                                                                            "data-name": "Path 4761",
                                                                            d: "M2785.7,1314.879c.051.02.11.047.12.1a.108.108,0,0,1-.077.112.3.3,0,0,1-.146,0,5.76,5.76,0,0,1-2.027-.7.362.362,0,0,1-.2-.406c.014-.054.312-.456.358-.422.341.246.739.442,1.064.7A3.465,3.465,0,0,0,2785.7,1314.879Z",
                                                                            transform: "translate(-2764.398 -1295.059)",
                                                                            fill: "#03277d"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_4762",
                                                                            "data-name": "Path 4762",
                                                                            d: "M2224.024,867.027h-9.862a.226.226,0,0,1-.226-.226h0a.226.226,0,0,1,.226-.226h9.862a.226.226,0,0,1,.226.226h0A.226.226,0,0,1,2224.024,867.027Z",
                                                                            transform: "translate(-2212.68 -861.965)",
                                                                            fill: "#cddbfe",
                                                                            opacity: "0.65"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                            id: "Group_920",
                                                                            "data-name": "Group 920",
                                                                            transform: "translate(19.423 2.253)",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4763",
                                                                                    "data-name": "Path 4763",
                                                                                    d: "M2810.66,790.854a4.042,4.042,0,0,1-.559.251,1.2,1.2,0,0,1-.6.053c-.056-.011-.126-.024-.16.022a.137.137,0,0,0-.02.076,1.659,1.659,0,0,0,.3,1.023.481.481,0,0,0,.332.238.51.51,0,0,0,.292-.1,3.024,3.024,0,0,0,.482-.368,1.332,1.332,0,0,0,.4-.589.694.694,0,0,0-.04-.492.435.435,0,0,0-.135-.176C2810.858,790.751,2810.734,790.817,2810.66,790.854Z",
                                                                                    transform: "translate(-2808.969 -790.779)",
                                                                                    fill: "#4f94f9"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    id: "Path_4764",
                                                                                    "data-name": "Path 4764",
                                                                                    d: "M2815.594,833.594a1.665,1.665,0,0,0,.1.169.482.482,0,0,0,.332.238.51.51,0,0,0,.292-.1c.012-.007.022-.016.034-.023A1.061,1.061,0,0,1,2815.594,833.594Z",
                                                                                    transform: "translate(-2815.054 -832.263)",
                                                                                    fill: "#4a87da"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                    id: "Group_919",
                                                                                    "data-name": "Group 919",
                                                                                    transform: "translate(0 0.255)",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4765",
                                                                                        "data-name": "Path 4765",
                                                                                        d: "M2798.7,799.218a.128.128,0,0,1-.043-.011c-.029-.011-.385-.2-.411-.225a.648.648,0,0,1,.13.007.438.438,0,0,1,.117.05c.057.028.113.055.17.081a.585.585,0,0,1,.065.078C2798.717,799.21,2798.712,799.218,2798.7,799.218Z",
                                                                                        transform: "translate(-2798.242 -798.981)",
                                                                                        fill: "#4f94f9"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        t("home_collection_ph")
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "getstart drp mob-drp ml-3",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "email_only_head",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/assets/img/email-only.svg",
                                                        className: "co_icon"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        className: "__hyperlinks",
                                                        href: "mailto:life@oncquestlabs.com",
                                                        children: "life@oncquestlabs.com"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "getstart text-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "dropdown drp mob-drp",
                                                ref: anchorRef1,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                        className: "btn btn-primary dropdown-toggle",
                                                        type: "button",
                                                        "data-toggle": "dropdown",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "27",
                                                                height: "27",
                                                                viewBox: "0 0 27 27",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                    id: "Group_926",
                                                                    "data-name": "Group 926",
                                                                    transform: "translate(-1518.255 -11)",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                        id: "Group_925",
                                                                        "data-name": "Group 925",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                            id: "Group_924",
                                                                            "data-name": "Group 924",
                                                                            transform: "translate(1179.256 -327.999)",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                    id: "Layer_1",
                                                                                    "data-name": "Layer 1",
                                                                                    transform: "translate(338.999 338.999)",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4766",
                                                                                        "data-name": "Path 4766",
                                                                                        d: "M366,352.5A13.5,13.5,0,1,1,352.5,339,13.54,13.54,0,0,1,366,352.5Z",
                                                                                        transform: "translate(-338.999 -338.999)",
                                                                                        fill: "#ffcc5c"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                    id: "Layer_7",
                                                                                    "data-name": "Layer 7",
                                                                                    transform: "translate(343.286 344.626)",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                        id: "Group_923",
                                                                                        "data-name": "Group 923",
                                                                                        transform: "translate(0 0)",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4767",
                                                                                                "data-name": "Path 4767",
                                                                                                d: "M380.5,392.523l-2.093-1.908v-2.4h4.186v2.4Z",
                                                                                                transform: "translate(-371.253 -379.553)",
                                                                                                fill: "#eaad8c"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4768",
                                                                                                "data-name": "Path 4768",
                                                                                                d: "M378.407,389.285a2.392,2.392,0,0,0,4.186,0v-1.071h-4.186Z",
                                                                                                transform: "translate(-371.253 -379.553)",
                                                                                                fill: "#d89273"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4769",
                                                                                                "data-name": "Path 4769",
                                                                                                d: "M372.234,364.368c-.021-.594.435-.179.435-.179s-.8-4.918,3.448-4.918c4.311,0,3.45,4.918,3.45,4.918s.456-.415.437.179a3.928,3.928,0,0,1-.159,1.01,1.333,1.333,0,0,1-.694,1.011,3.42,3.42,0,0,1-.614,1.684c-.5.5-1.288,1.626-2.419,1.587-1.129.039-1.923-1.09-2.418-1.587a3.418,3.418,0,0,1-.614-1.684,1.336,1.336,0,0,1-.694-1.011A3.924,3.924,0,0,1,372.234,364.368Z",
                                                                                                transform: "translate(-366.872 -359.012)",
                                                                                                fill: "#f4bd9a"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4770",
                                                                                                "data-name": "Path 4770",
                                                                                                d: "M365.115,407.374c3.8,0,5.875-.331,8.364-2.829,0,0-.005-2.5-.045-2.616-.059-.179-.238-.634-.516-.714s-4.261-1.685-4.876-1.943l-2.856.73-2.892-.73c-.615.258-4.6,1.863-4.876,1.943s-.456.535-.516.714c-.041.121-.1,2.084-.1,2.616C359.286,406.993,361.352,407.374,365.115,407.374Z",
                                                                                                transform: "translate(-355.921 -387.401)",
                                                                                                fill: "#fff"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4771",
                                                                                                "data-name": "Path 4771",
                                                                                                d: "M377.841,398.094l-1.279,1.8-1.567-2.705.891-.971Zm.473,0,1.28,1.8,1.567-2.706-.9-.971Z",
                                                                                                transform: "translate(-368.831 -385.232)",
                                                                                                fill: "#d3cdcd"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4772",
                                                                                                "data-name": "Path 4772",
                                                                                                d: "M384.121,402.1l-.357-.515a.216.216,0,0,0-.136-.057h-.792a.221.221,0,0,0-.136.057l-.356.515a.209.209,0,0,0-.064.262c.106.334.467.48.53.759,0,0-.217,3.147-.431,5.959-.064.846,1.767.82,1.7-.033-.216-2.791-.435-5.89-.435-5.89.063-.279.435-.46.542-.795A.211.211,0,0,0,384.121,402.1Z",
                                                                                                transform: "translate(-373.986 -388.999)",
                                                                                                fill: "#c93939"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4773",
                                                                                                "data-name": "Path 4773",
                                                                                                d: "M377.616,396.937l-1.279,1.8-1.659-2.51.983-1.167Zm.473,0,1.28,1.8,1.66-2.51-1-1.167Z",
                                                                                                transform: "translate(-368.606 -384.411)",
                                                                                                fill: "#fff"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4774",
                                                                                                "data-name": "Path 4774",
                                                                                                d: "M377.055,359.446c-3.382,0-3.619,3.186-3.532,4.156.059.661.431,1,.426.845a3.187,3.187,0,0,1,.553-2.17c.5-.507,1.323.069,2.437.069,1.188,0,2.1-.688,2.642-.074a3.272,3.272,0,0,1,.531,2.082c.006.152.289-.112.348-.773C380.549,362.611,380.363,359.446,377.055,359.446Z",
                                                                                                transform: "translate(-367.777 -359.137)",
                                                                                                fill: "#d39572"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4775",
                                                                                                "data-name": "Path 4775",
                                                                                                d: "M376.524,358.38c-3.684,0-3.682,3.326-3.6,4.271a3.751,3.751,0,0,0,.226,1.214c.138.347.247.477.28.573.133.393.159-.433.188-.577.369-1.781,3.695-1.079,4.951-2.468a7.182,7.182,0,0,0,1.007,2.3c.073.128.1,1.014.2.746a6.2,6.2,0,0,0,.279-.573,4.517,4.517,0,0,0,.208-1.3C380.354,361.615,380.207,358.38,376.524,358.38Z",
                                                                                                transform: "translate(-367.349 -358.38)",
                                                                                                fill: "#634335"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4776",
                                                                                                "data-name": "Path 4776",
                                                                                                d: "M362.977,407.871a13.444,13.444,0,0,0,9.25-3.7c-.4-1.569-.921-3.619-.95-3.707-.059-.179-.238-.634-.516-.714-.237-.068-3.078-1.252-4.395-1.754l-3.38,5.948-3.374-5.931c-1.344.512-4.117,1.671-4.352,1.737-.278.08-.456.535-.516.714-.03.089-.572,2.134-.98,3.743A13.445,13.445,0,0,0,362.977,407.871Z",
                                                                                                transform: "translate(-353.764 -386.498)",
                                                                                                fill: "#3b93e9"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "ml-2 mr-1",
                                                                children: (0,Utils/* LoggedIn */.eZ)() ? `${(0,Utils/* getUser */.PR)().FirstName ? "Hello, " + (0,Utils/* getUser */.PR)().FirstName : ""}` : t("Login")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: anchor1 ? "fa fa-angle-up" : "fa fa-angle-down"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "dropdown-menu menu__",
                                                        children: !(0,Utils/* LoggedIn */.eZ)() ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "https://lis.oncquest.net/labmateonline_7001/",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        children: [
                                                                            " ",
                                                                            t("lis_login")
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "https://lis.oncquest.net/labmatefranchises_7001/",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: t("franchise_login")
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "https://itd.oncquest.net/Oncquest/Design/onlinelab/",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        title: "",
                                                                        children: t("report")
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "https://admin.oncquestlabs.com/search-tests",
                                                                        target: "_blank",
                                                                        title: "",
                                                                        rel: "noopener noreferrer",
                                                                        children: t("range")
                                                                    })
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "https://lis.oncquest.net/labmateonline_7001/",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        children: t("lis_login")
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "https://lis.oncquest.net/labmatefranchises_7001/",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: t("franchise_login")
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "https://itd.oncquest.net/Oncquest/Design/onlinelab/",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        title: "",
                                                                        children: t("report")
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "https://admin.oncquestlabs.com/search-tests",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        title: "",
                                                                        children: t("range")
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "divlink",
                                                                        onClick: (e)=>logout(e),
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-sign-out fa-x mr-1",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            t("log_out")
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "zeynep-overlay",
                                    id: "zeynepOpen",
                                    onClick: ()=>removeClass()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white mainnav",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mainnavsmall",
                                            onClick: ()=>addClass(),
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "assets/img/nav-mobile.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                            className: "primary-nav",
                                            id: "openTab",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "primary-navclose",
                                                    onClick: ()=>removeClass(),
                                                    children: "x"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    id: "menu-main",
                                                    className: "menu",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: "getstart mob-collect-h",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "tel: 0124-6650000",
                                                                passHref: true,
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "35.045",
                                                                            height: "28.875",
                                                                            viewBox: "0 0 35.045 28.875",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                id: "Group_922",
                                                                                "data-name": "Group 922",
                                                                                transform: "translate(-2173.523 -718.297)",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                    id: "Group_921",
                                                                                    "data-name": "Group 921",
                                                                                    transform: "translate(2173.523 718.297)",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4732",
                                                                                            "data-name": "Path 4732",
                                                                                            d: "M2772.343,1121.855c.428.11,1.114.275,1.2,1.079a3.343,3.343,0,0,1-.378,1.514,16.1,16.1,0,0,1-1.588,2.422l.087.061a.565.565,0,0,0-.3.436.9.9,0,0,0,.245.679.283.283,0,0,0,.254.1.357.357,0,0,0,.167-.126,12.435,12.435,0,0,0,1.883-2.845,4.913,4.913,0,0,0,.494-1.5,2.241,2.241,0,0,0-.312-1.522,2.993,2.993,0,0,0-1.925-1.051Z",
                                                                                            transform: "translate(-2752.766 -1108.57)",
                                                                                            fill: "#03277d"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                            id: "Group_900",
                                                                                            "data-name": "Group 900",
                                                                                            transform: "translate(0 3.98)",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                                    id: "Rectangle_641",
                                                                                                    "data-name": "Rectangle 641",
                                                                                                    width: "11.757",
                                                                                                    height: "10.473",
                                                                                                    rx: "5.236",
                                                                                                    fill: "#1765cf"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                                    id: "Rectangle_642",
                                                                                                    "data-name": "Rectangle 642",
                                                                                                    width: "11.757",
                                                                                                    height: "10.473",
                                                                                                    rx: "5.236",
                                                                                                    transform: "translate(0.633)",
                                                                                                    fill: "#4f94f9"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                            id: "Group_901",
                                                                                            "data-name": "Group 901",
                                                                                            transform: "translate(4.284 14.406)",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("line", {
                                                                                                    id: "Line_64",
                                                                                                    "data-name": "Line 64",
                                                                                                    x2: "3.494",
                                                                                                    y2: "2.63",
                                                                                                    transform: "translate(1.189)",
                                                                                                    fill: "none",
                                                                                                    stroke: "#03277d",
                                                                                                    strokeLinecap: "round",
                                                                                                    strokeLinejoin: "round",
                                                                                                    strokeWidth: "5.335"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("line", {
                                                                                                    id: "Line_65",
                                                                                                    "data-name": "Line 65",
                                                                                                    x1: "8.106",
                                                                                                    fill: "none",
                                                                                                    stroke: "#03277d",
                                                                                                    strokeLinecap: "round",
                                                                                                    strokeLinejoin: "round",
                                                                                                    strokeWidth: "5.335"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                            id: "Group_902",
                                                                                            "data-name": "Group 902",
                                                                                            transform: "translate(18.174 2.414)",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                                    id: "Rectangle_643",
                                                                                                    "data-name": "Rectangle 643",
                                                                                                    width: "1.424",
                                                                                                    height: "2.373",
                                                                                                    transform: "translate(0.438 0) rotate(10.634)",
                                                                                                    fill: "#fe9592"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4733",
                                                                                                    "data-name": "Path 4733",
                                                                                                    d: "M2766.877,795.937l-.169.9a5,5,0,0,1,1.141,1.639l.428-2.278Z",
                                                                                                    transform: "translate(-2766.439 -795.937)",
                                                                                                    fill: "#fb7874"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                            id: "Group_903",
                                                                                            "data-name": "Group 903",
                                                                                            transform: "translate(14.707 4.01)",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4734",
                                                                                                    "data-name": "Path 4734",
                                                                                                    d: "M2650.925,853.991c.278-1.637.54-2.808.753-4.46a2.223,2.223,0,0,0-1.107-2.15,1.966,1.966,0,0,0-1.6.128,3.653,3.653,0,0,0-1.451,2.055,18.622,18.622,0,0,0-.8,3.239,4.376,4.376,0,0,0-.03,2.139A8.443,8.443,0,0,0,2650.925,853.991Z",
                                                                                                    transform: "translate(-2646.559 -847.267)",
                                                                                                    fill: "#70bb92"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4735",
                                                                                                    "data-name": "Path 4735",
                                                                                                    d: "M2735.891,898.986a8.618,8.618,0,0,1-2.376,5.767,8.417,8.417,0,0,0,1.662-.651c.278-1.637.54-2.808.753-4.46A1.98,1.98,0,0,0,2735.891,898.986Z",
                                                                                                    transform: "translate(-2730.811 -897.378)",
                                                                                                    fill: "#48956b"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4736",
                                                                                                    "data-name": "Path 4736",
                                                                                                    d: "M2658.6,1064.86a3.865,3.865,0,0,0-2.5-1.5c-.141-.022-1.3-.2-1.328-.022,0-.024.008-.046.012-.07a8.444,8.444,0,0,1-4.242.951,1.826,1.826,0,0,0,.157.347c.722,1.214,2.306,1.034,3.508,1.057.805.015,2.288.015,2.543,1.01a1.921,1.921,0,0,1-.009.819,7.766,7.766,0,0,1-.87,2.258c-.089.165-1.159,2-1.184,1.982l.613.4c.23.149,1.349-1.178,1.485-1.369.471-.659.953-1.325,1.377-2.016a5.122,5.122,0,0,0,.858-2.5A2.263,2.263,0,0,0,2658.6,1064.86Z",
                                                                                                    transform: "translate(-2650.412 -1056.547)",
                                                                                                    fill: "#436dd6"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4737",
                                                                                                    "data-name": "Path 4737",
                                                                                                    d: "M2656.95,1095.911c-1.1-1.726-4.571.4-5.925-1.747-.163,0-.326,0-.489,0a1.827,1.827,0,0,0,.157.347c.722,1.214,2.306,1.034,3.508,1.057.805.015,2.288.015,2.543,1.01a1.921,1.921,0,0,1-.009.819,7.766,7.766,0,0,1-.87,2.258c-.089.165-1.159,2-1.184,1.982l.114.074C2656.435,1099.929,2658.272,1098.025,2656.95,1095.911Z",
                                                                                                    transform: "translate(-2650.412 -1086.483)",
                                                                                                    fill: "#315fd2"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                            id: "Group_911",
                                                                                            "data-name": "Group 911",
                                                                                            transform: "translate(7.025 6.957)",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                                id: "Group_910",
                                                                                                "data-name": "Group 910",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                                        id: "Group_904",
                                                                                                        "data-name": "Group 904",
                                                                                                        transform: "translate(0 10.441)",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                                id: "Ellipse_2038",
                                                                                                                "data-name": "Ellipse 2038",
                                                                                                                cx: "4.058",
                                                                                                                cy: "4.058",
                                                                                                                r: "4.058",
                                                                                                                transform: "translate(0 5.739) rotate(-45)",
                                                                                                                fill: "#03277d"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                                id: "Ellipse_2039",
                                                                                                                "data-name": "Ellipse 2039",
                                                                                                                cx: "2.719",
                                                                                                                cy: "2.719",
                                                                                                                r: "2.719",
                                                                                                                transform: "translate(1.893 5.739) rotate(-45)",
                                                                                                                fill: "#1765cf"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                                id: "Ellipse_2040",
                                                                                                                "data-name": "Ellipse 2040",
                                                                                                                cx: "1.114",
                                                                                                                cy: "1.114",
                                                                                                                r: "1.114",
                                                                                                                transform: "translate(4.163 5.739) rotate(-45)",
                                                                                                                fill: "#b2b2b2"
                                                                                                            })
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                                        id: "Group_905",
                                                                                                        "data-name": "Group 905",
                                                                                                        transform: "translate(0.009 2.265)",
                                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                            id: "Path_4738",
                                                                                                            "data-name": "Path 4738",
                                                                                                            d: "M2420.74,1014.923h-2.482a11.406,11.406,0,0,1,.457,6.5c-.271,1.406-1.64,4.425-3.374,4.384-1.487-.035-3.527-.2-4.23-2.1a3.739,3.739,0,0,1,.716-3.992l-6.3,0c-1.519,0-5.282,1.01-5.752,7.151a1.1,1.1,0,0,0,1.113,1.147h18.356l1.458-3.626,2.019.692c.748-.847,2.21,1.1,2.446,0C2426.448,1019.12,2420.74,1014.923,2420.74,1014.923Z",
                                                                                                            transform: "translate(-2399.776 -1014.923)",
                                                                                                            fill: "#fdb702"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                        id: "Path_4739",
                                                                                                        "data-name": "Path 4739",
                                                                                                        d: "M2918.556,1014.923H2916.8a11.406,11.406,0,0,1,.457,6.5c-.248,1.287-1.416,3.89-2.942,4.321C2915.761,1025.646,2920.69,1022.642,2918.556,1014.923Z",
                                                                                                        transform: "translate(-2898.306 -1012.658)",
                                                                                                        fill: "#fd9f02"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                                        id: "Group_908",
                                                                                                        "data-name": "Group 908",
                                                                                                        transform: "translate(16.543 10.441)",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                                                id: "Group_906",
                                                                                                                "data-name": "Group 906",
                                                                                                                transform: "translate(0 0)",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                                        id: "Ellipse_2041",
                                                                                                                        "data-name": "Ellipse 2041",
                                                                                                                        cx: "4.058",
                                                                                                                        cy: "4.058",
                                                                                                                        r: "4.058",
                                                                                                                        transform: "translate(0 5.739) rotate(-45)",
                                                                                                                        fill: "#03277d"
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                                        id: "Ellipse_2042",
                                                                                                                        "data-name": "Ellipse 2042",
                                                                                                                        cx: "2.719",
                                                                                                                        cy: "2.719",
                                                                                                                        r: "2.719",
                                                                                                                        transform: "translate(1.893 5.739) rotate(-45)",
                                                                                                                        fill: "#1765cf"
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                                                                        id: "Ellipse_2043",
                                                                                                                        "data-name": "Ellipse 2043",
                                                                                                                        cx: "1.114",
                                                                                                                        cy: "1.114",
                                                                                                                        r: "1.114",
                                                                                                                        transform: "matrix(0.23, -0.973, 0.973, 0.23, 4.398, 6.567)",
                                                                                                                        fill: "#b2b2b2"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                                                id: "Group_907",
                                                                                                                "data-name": "Group 907",
                                                                                                                transform: "translate(1.496 0.933)",
                                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                                    id: "Path_4740",
                                                                                                                    "data-name": "Path 4740",
                                                                                                                    d: "M2987.842,1311.726a.264.264,0,0,0,.414-.278,4.347,4.347,0,0,0-8.54,0,.264.264,0,0,0,.414.278,6.519,6.519,0,0,1,7.712,0Z",
                                                                                                                    transform: "translate(-2979.707 -1307.915)",
                                                                                                                    fill: "#fd9f02"
                                                                                                                })
                                                                                                            })
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                        id: "Path_4741",
                                                                                                        "data-name": "Path 4741",
                                                                                                        d: "M3085.936,942.263v2.253a1.133,1.133,0,0,0,1.014-1.126h0A1.133,1.133,0,0,0,3085.936,942.263Z",
                                                                                                        transform: "translate(-3064.594 -942.257)",
                                                                                                        fill: "#fdb702"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                        id: "Path_4742",
                                                                                                        "data-name": "Path 4742",
                                                                                                        d: "M2980.747,942.06h-2.65a.6.6,0,0,0-.6.6v1.06a.6.6,0,0,0,.6.6h2.65a1.132,1.132,0,0,0,.119-.006v-2.253A1.132,1.132,0,0,0,2980.747,942.06Z",
                                                                                                        transform: "translate(-2959.523 -942.06)",
                                                                                                        fill: "#fd9f02"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                        id: "Path_4743",
                                                                                                        "data-name": "Path 4743",
                                                                                                        d: "M2918.528,965.141l-2.629,1.322a.423.423,0,0,1-.38-.756l.024-.011,2.706-1.157a.332.332,0,0,1,.28.6Z",
                                                                                                        transform: "translate(-2899.25 -963.814)",
                                                                                                        fill: "#03277d"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                                        id: "Group_909",
                                                                                                        "data-name": "Group 909",
                                                                                                        transform: "translate(2.819 8.266)",
                                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                            id: "Path_4744",
                                                                                                            "data-name": "Path 4744",
                                                                                                            d: "M2492.374,1207.918a6.261,6.261,0,0,0-2.234.411c3.144.027,5.769,1.931,6.237,4.964a.88.88,0,0,0,.864.756h.442a.875.875,0,0,0,.855-1.047A6.28,6.28,0,0,0,2492.374,1207.918Z",
                                                                                                            transform: "translate(-2490.14 -1207.918)",
                                                                                                            fill: "#fd9f02"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                            id: "Rectangle_644",
                                                                                            "data-name": "Rectangle 644",
                                                                                            width: "8.377",
                                                                                            height: "1.066",
                                                                                            rx: "0.533",
                                                                                            transform: "translate(11.57 13.026)",
                                                                                            fill: "#03277d"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                            id: "Group_915",
                                                                                            "data-name": "Group 915",
                                                                                            transform: "translate(8.812 18.203)",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                                    id: "Group_912",
                                                                                                    "data-name": "Group 912",
                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                        id: "Path_4745",
                                                                                                        "data-name": "Path 4745",
                                                                                                        d: "M2461.857,1304.108H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z",
                                                                                                        transform: "translate(-2456.948 -1303.796)",
                                                                                                        fill: "#03277d"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                                    id: "Group_913",
                                                                                                    "data-name": "Group 913",
                                                                                                    transform: "translate(0 0.93)",
                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                        id: "Path_4746",
                                                                                                        "data-name": "Path 4746",
                                                                                                        d: "M2461.857,1334.026H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z",
                                                                                                        transform: "translate(-2456.948 -1333.714)",
                                                                                                        fill: "#03277d"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                                    id: "Group_914",
                                                                                                    "data-name": "Group 914",
                                                                                                    transform: "translate(0 1.86)",
                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                        id: "Path_4747",
                                                                                                        "data-name": "Path 4747",
                                                                                                        d: "M2461.857,1363.944H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z",
                                                                                                        transform: "translate(-2456.948 -1363.632)",
                                                                                                        fill: "#03277d"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4748",
                                                                                            "data-name": "Path 4748",
                                                                                            d: "M2728.549,869.47a3.836,3.836,0,0,0,1.58.98,1.994,1.994,0,0,0,.881.135c.38-.052.76-.142,1.137-.212a1.4,1.4,0,0,1,.617-.022.422.422,0,0,1,.184.775c-.185.147-.35.3-.581.121a3.015,3.015,0,0,0-.324-.29,1.016,1.016,0,0,0-.778.031,4.206,4.206,0,0,1-3.172-.19,7.043,7.043,0,0,1-2.654-2.929.677.677,0,0,1-.056-.732,1.145,1.145,0,0,1,.7-.524c.764-.192.917.411,1.226.957A9.079,9.079,0,0,0,2728.549,869.47Z",
                                                                                            transform: "translate(-2708.143 -861.965)",
                                                                                            fill: "#fe9592"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4749",
                                                                                            "data-name": "Path 4749",
                                                                                            d: "M2728.782,884.895a4.284,4.284,0,0,1-1.448-1.022,7.11,7.11,0,0,1-.6-.746c-.178-.251-.34-.513-.519-.764s-.35-.48-.5-.734a2.724,2.724,0,0,1-.256-.527,1.133,1.133,0,0,0-.074.109.677.677,0,0,0,.056.732,7.043,7.043,0,0,0,2.654,2.929,3.826,3.826,0,0,0,2.348.365A4.272,4.272,0,0,1,2728.782,884.895Z",
                                                                                            transform: "translate(-2708.143 -876.04)",
                                                                                            fill: "#fb7874"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4750",
                                                                                            "data-name": "Path 4750",
                                                                                            d: "M2712.728,853.513c-.3.333-.069,1.017.022,1.263a5.172,5.172,0,0,0,.648,1.121c.551-.312,1.891-1.093,1.891-1.093s-.735-1.967-2.013-1.649A1.2,1.2,0,0,0,2712.728,853.513Z",
                                                                                            transform: "translate(-2695.821 -848.928)",
                                                                                            fill: "#7fc29d"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4751",
                                                                                            "data-name": "Path 4751",
                                                                                            d: "M2713.873,855.987q-.1-.164-.2-.333c-.068-.12-.134-.241-.195-.365s-.116-.245-.166-.371a2.708,2.708,0,0,1-.116-.355,1.272,1.272,0,0,1-.041-.314.539.539,0,0,1,.057-.248.352.352,0,0,1,.12-.123l-.057.011a1.2,1.2,0,0,0-.548.359c-.3.333-.069,1.017.022,1.263a5.173,5.173,0,0,0,.648,1.121c.165-.093.4-.229.65-.373Q2713.958,856.124,2713.873,855.987Z",
                                                                                            transform: "translate(-2695.821 -849.663)",
                                                                                            fill: "#5bb182"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                            id: "Group_918",
                                                                                            "data-name": "Group 918",
                                                                                            transform: "translate(17.913 0)",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4752",
                                                                                                    "data-name": "Path 4752",
                                                                                                    d: "M2859.151,780.039a.841.841,0,0,0,.028.154C2859.173,780.142,2859.163,780.09,2859.151,780.039Z",
                                                                                                    transform: "translate(-2855.747 -778.119)",
                                                                                                    fill: "#fe9592"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4753",
                                                                                                    "data-name": "Path 4753",
                                                                                                    d: "M2755.641,721.766a.183.183,0,0,1-.086.115,1.077,1.077,0,0,1-.186.108,1.433,1.433,0,0,1-.771,1.025,2.15,2.15,0,1,1,.58-2.556,2.656,2.656,0,0,1,.188.561.818.818,0,0,0,.028.154,1.446,1.446,0,0,0,.192.461A.2.2,0,0,1,2755.641,721.766Z",
                                                                                                    transform: "translate(-2751.962 -719.098)",
                                                                                                    fill: "#fe9592"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4754",
                                                                                                    "data-name": "Path 4754",
                                                                                                    d: "M2859.151,780.039a.841.841,0,0,0,.028.154C2859.173,780.142,2859.163,780.09,2859.151,780.039Z",
                                                                                                    transform: "translate(-2855.747 -778.119)",
                                                                                                    fill: "#fe9592"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4755",
                                                                                                    "data-name": "Path 4755",
                                                                                                    d: "M2760.151,761.168a.792.792,0,0,1-.37.421,3.122,3.122,0,0,1-1.924.488.925.925,0,0,0,.053.309.556.556,0,0,0-.247-.065.168.168,0,0,0-.083.322c.077.044.2.018.214.113.009.069-.081.162-.125.209a.826.826,0,0,1-.208.163c-.051.028-.18.044-.215.08a.153.153,0,0,0,.042-.124.522.522,0,0,1-.4.192l.08-.094a.671.671,0,0,1-.379.2.631.631,0,0,0,.082-.477c-.029-.155-.145-.3-.159-.455a.654.654,0,0,1,.134-.4,1.116,1.116,0,0,1,.368-.3,4.058,4.058,0,0,1,1.219-.377q.538-.1,1.081-.182a1.169,1.169,0,0,1,.373,0A1.763,1.763,0,0,0,2760.151,761.168Z",
                                                                                                    transform: "translate(-2756.302 -759.834)",
                                                                                                    fill: "#03277d"
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                                    id: "Group_916",
                                                                                                    "data-name": "Group 916",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                            id: "Path_4756",
                                                                                                            "data-name": "Path 4756",
                                                                                                            d: "M2757.083,744.472s4.027-.947,4.191-1.7c.038-.171-1.356.283-1.356.283Z",
                                                                                                            transform: "translate(-2756.853 -741.978)",
                                                                                                            fill: "#ea8e0a"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                            id: "Path_4757",
                                                                                                            "data-name": "Path 4757",
                                                                                                            d: "M2750.574,718.438c-1.071.476-1.026,1.369-.666,2.352l2.836-1.412C2752.22,718.522,2751.468,718.04,2750.574,718.438Z",
                                                                                                            transform: "translate(-2749.678 -718.297)",
                                                                                                            fill: "#fdb702"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                            id: "Path_4758",
                                                                                                            "data-name": "Path 4758",
                                                                                                            d: "M2749.986,736.438a1.873,1.873,0,0,0-.067,1.93l.209-.1A2.054,2.054,0,0,1,2749.986,736.438Z",
                                                                                                            transform: "translate(-2749.689 -735.874)",
                                                                                                            fill: "#fd9f02"
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                                    id: "Group_917",
                                                                                                    "data-name": "Group 917",
                                                                                                    transform: "translate(3.339 2.638)",
                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                        id: "Path_4759",
                                                                                                        "data-name": "Path 4759",
                                                                                                        d: "M2857.427,803.187a.106.106,0,0,0,0-.029.3.3,0,0,1-.208.124.29.29,0,0,0-.088.014.061.061,0,0,0-.038.072c.01.025.042.034.069.038h0a1.084,1.084,0,0,0,.179-.1A.185.185,0,0,0,2857.427,803.187Z",
                                                                                                        transform: "translate(-2857.087 -803.158)",
                                                                                                        fill: "#fb7874"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4760",
                                                                                                    "data-name": "Path 4760",
                                                                                                    d: "M2813.242,806.648a.15.15,0,0,0-.02.146.28.28,0,0,0,.094.119.5.5,0,0,0,.176.089.143.143,0,0,0,.149-.024.1.1,0,0,0,.019-.083.208.208,0,0,0-.035-.08C2813.568,806.73,2813.344,806.527,2813.242,806.648Z",
                                                                                                    transform: "translate(-2811.237 -803.865)",
                                                                                                    fill: "#fb7874"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4761",
                                                                                            "data-name": "Path 4761",
                                                                                            d: "M2785.7,1314.879c.051.02.11.047.12.1a.108.108,0,0,1-.077.112.3.3,0,0,1-.146,0,5.76,5.76,0,0,1-2.027-.7.362.362,0,0,1-.2-.406c.014-.054.312-.456.358-.422.341.246.739.442,1.064.7A3.465,3.465,0,0,0,2785.7,1314.879Z",
                                                                                            transform: "translate(-2764.398 -1295.059)",
                                                                                            fill: "#03277d"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4762",
                                                                                            "data-name": "Path 4762",
                                                                                            d: "M2224.024,867.027h-9.862a.226.226,0,0,1-.226-.226h0a.226.226,0,0,1,.226-.226h9.862a.226.226,0,0,1,.226.226h0A.226.226,0,0,1,2224.024,867.027Z",
                                                                                            transform: "translate(-2212.68 -861.965)",
                                                                                            fill: "#cddbfe",
                                                                                            opacity: "0.65"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                            id: "Group_920",
                                                                                            "data-name": "Group 920",
                                                                                            transform: "translate(19.423 2.253)",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4763",
                                                                                                    "data-name": "Path 4763",
                                                                                                    d: "M2810.66,790.854a4.042,4.042,0,0,1-.559.251,1.2,1.2,0,0,1-.6.053c-.056-.011-.126-.024-.16.022a.137.137,0,0,0-.02.076,1.659,1.659,0,0,0,.3,1.023.481.481,0,0,0,.332.238.51.51,0,0,0,.292-.1,3.024,3.024,0,0,0,.482-.368,1.332,1.332,0,0,0,.4-.589.694.694,0,0,0-.04-.492.435.435,0,0,0-.135-.176C2810.858,790.751,2810.734,790.817,2810.66,790.854Z",
                                                                                                    transform: "translate(-2808.969 -790.779)",
                                                                                                    fill: "#4f94f9"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4764",
                                                                                                    "data-name": "Path 4764",
                                                                                                    d: "M2815.594,833.594a1.665,1.665,0,0,0,.1.169.482.482,0,0,0,.332.238.51.51,0,0,0,.292-.1c.012-.007.022-.016.034-.023A1.061,1.061,0,0,1,2815.594,833.594Z",
                                                                                                    transform: "translate(-2815.054 -832.263)",
                                                                                                    fill: "#4a87da"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                                    id: "Group_919",
                                                                                                    "data-name": "Group 919",
                                                                                                    transform: "translate(0 0.255)",
                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                        id: "Path_4765",
                                                                                                        "data-name": "Path 4765",
                                                                                                        d: "M2798.7,799.218a.128.128,0,0,1-.043-.011c-.029-.011-.385-.2-.411-.225a.648.648,0,0,1,.13.007.438.438,0,0,1,.117.05c.057.028.113.055.17.081a.585.585,0,0,1,.065.078C2798.717,799.21,2798.712,799.218,2798.7,799.218Z",
                                                                                                        transform: "translate(-2798.242 -798.981)",
                                                                                                        fill: "#4f94f9"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        }),
                                                                        t("home_collection_ph")
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: "getstart",
                                                            id: "desktopHide",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                className: "email_only_head",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        src: "/assets/img/email-only.svg",
                                                                        className: "co_icon"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        className: "__hyperlinks",
                                                                        href: "mailto:life@oncquestlabs.com",
                                                                        children: "life@oncquestlabs.com"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: "getstart drp",
                                                            id: "desktopHide",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(languageSelectMobile, {
                                                                onClick: (e)=>removeClass()
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: "current-menu-parent",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: locale === "ta" ? "tamil-class h_dropdown" : "h_dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        children: [
                                                                            t("patient"),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-angle-down fa-xs ml-2"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "h_dropdown-menu",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: {
                                                                                        pathname: Route/* ROUTE.BOOKATEST */.l.BOOKATEST,
                                                                                        query: {
                                                                                            tabs: "tests",
                                                                                            categoryId: "",
                                                                                            subCategoryId: ""
                                                                                        }
                                                                                    },
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("test_book"),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.OFFER */.l.OFFER,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("disc"),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.PRIVILEGEMEMBERSHIP */.l.PRIVILEGEMEMBERSHIP,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("privilege_membership_card"),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: {
                                                                                        pathname: Route/* ROUTE.CENTER */.l.CENTER,
                                                                                        query: {
                                                                                            nearBy: true
                                                                                        }
                                                                                    },
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("center"),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: {
                                                                                        pathname: Route/* ROUTE.BOOKATEST */.l.BOOKATEST,
                                                                                        query: {
                                                                                            tabs: "packages",
                                                                                            categoryId: "",
                                                                                            subCategoryId: ""
                                                                                        }
                                                                                    },
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("package"),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.HOMECOLLECTION */.l.HOMECOLLECTION,
                                                                                    onClick: ()=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("query_form"),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: {
                                                                                        pathname: Route/* ROUTE.TESTIMONIAL */.l.TESTIMONIAL,
                                                                                        query: {
                                                                                            type: 1
                                                                                        }
                                                                                    },
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("testi"),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.FAQ */.l.FAQ,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("faq"),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.QUICKLINKS */.l.QUICKLINKS,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("quick_link"),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: locale === "ta" ? "tamil-class h_dropdown" : "h_dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        children: [
                                                                            t("doctors"),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-angle-down fa-xs ml-2"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "h_dropdown-menu",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.DEPARTMENT */.l.DEPARTMENT,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("department"),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.BROCHURES */.l.BROCHURES,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("brochures"),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.NEWSANDUPDATES */.l.NEWSANDUPDATES,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("event"),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.PRIVILEGEMEMBERSHIPDOCTOR */.l.PRIVILEGEMEMBERSHIPDOCTOR,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("privilege_membership_card_doctor"),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.PATHSHALA */.l.PATHSHALA,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("paathshala"),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: {
                                                                                        pathname: Route/* ROUTE.TESTIMONIAL */.l.TESTIMONIAL,
                                                                                        query: {
                                                                                            type: 2
                                                                                        }
                                                                                    },
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        t("testi"),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: locale === "ta" ? "tamil-class h_dropdown" : "h_dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        children: [
                                                                            t("wellness"),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-angle-down fa-xs ml-2"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "h_dropdown-menu",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.PREVENTIVEHEALTHPKJ */.l.PREVENTIVEHEALTHPKJ,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        " ",
                                                                                        t("health"),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                                    href: Route/* ROUTE.VIDEOSECTION */.l.VIDEOSECTION,
                                                                                    onClick: (e)=>removeClass(),
                                                                                    passHref: true,
                                                                                    children: [
                                                                                        " ",
                                                                                        t("videos"),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                                    href: "https://oncquestlabs.com/blog/",
                                                                                    target: "_blank",
                                                                                    onClick: (e)=>{
                                                                                        e.preventDefault();
                                                                                        window.open("https://oncquestlabs.com/blog/", "_blank");
                                                                                    },
                                                                                    children: [
                                                                                        t("blog"),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: Route/* ROUTE.CENTER */.l.CENTER,
                                                                className: locale === "ta" ? "tamil-class h_dropdown" : "h_dropdown",
                                                                onClick: (e)=>removeClass(),
                                                                passHref: true,
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                    children: [
                                                                        " ",
                                                                        t("network")
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: Route/* ROUTE.UPLOADPRESCRIPTION */.l.UPLOADPRESCRIPTION,
                                                                className: locale === "ta" ? "tamil-class h_dropdown" : "h_dropdown",
                                                                onClick: (e)=>removeClass(),
                                                                passHref: true,
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: t("upload_prescription")
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: "getstart",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "fields-wrp",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                                    action: "#",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "36.203",
                                                                            height: "36.145",
                                                                            viewBox: "0 0 44.203 43.145",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                id: "Group_934",
                                                                                "data-name": "Group 934",
                                                                                transform: "translate(-528.182 -383.968)",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                        id: "Group_927",
                                                                                        "data-name": "Group 927",
                                                                                        transform: "translate(528.182 397.435)",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4777",
                                                                                                "data-name": "Path 4777",
                                                                                                d: "M550.014,415.9h7.421v27.389H530.682V415.9H538.1",
                                                                                                transform: "translate(-529.538 -414.76)",
                                                                                                fill: "#99bed9"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4778",
                                                                                                "data-name": "Path 4778",
                                                                                                d: "M556.079,443.081H529.326a1.144,1.144,0,0,1-1.144-1.144v-27.39a1.144,1.144,0,0,1,1.144-1.144h7.417a1.144,1.144,0,1,1,0,2.288H530.47v25.1h24.465v-25.1h-6.277a1.144,1.144,0,1,1,0-2.288h7.421a1.144,1.144,0,0,1,1.144,1.144v27.39A1.144,1.144,0,0,1,556.079,443.081Z",
                                                                                                transform: "translate(-528.182 -413.404)",
                                                                                                fill: "#464c54"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                        id: "Group_929",
                                                                                        "data-name": "Group 929",
                                                                                        transform: "translate(537.376 406.753)",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                            id: "Group_928",
                                                                                            "data-name": "Group 928",
                                                                                            transform: "translate(0 0)",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4779",
                                                                                                    "data-name": "Path 4779",
                                                                                                    d: "M549.421,437.067a1.144,1.144,0,0,1-1.144-1.144v-1.009a1.144,1.144,0,0,1,2.288,0v1.009A1.144,1.144,0,0,1,549.421,437.067Z",
                                                                                                    transform: "translate(-548.277 -433.771)",
                                                                                                    fill: "#464c54"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4780",
                                                                                                    "data-name": "Path 4780",
                                                                                                    d: "M549.421,450.605a1.144,1.144,0,0,1-1.144-1.144v-1.633a1.144,1.144,0,1,1,2.288,0v1.633A1.144,1.144,0,0,1,549.421,450.605Z",
                                                                                                    transform: "translate(-548.277 -440.777)",
                                                                                                    fill: "#464c54"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4781",
                                                                                                    "data-name": "Path 4781",
                                                                                                    d: "M549.421,464.261a1.144,1.144,0,0,1-1.144-1.144v-1.009a1.144,1.144,0,0,1,2.288,0v1.009A1.144,1.144,0,0,1,549.421,464.261Z",
                                                                                                    transform: "translate(-548.277 -448.523)",
                                                                                                    fill: "#464c54"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                        id: "Group_931",
                                                                                        "data-name": "Group 931",
                                                                                        transform: "translate(545.737 406.753)",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                            id: "Group_930",
                                                                                            "data-name": "Group 930",
                                                                                            transform: "translate(0 0)",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4782",
                                                                                                    "data-name": "Path 4782",
                                                                                                    d: "M567.7,437.067a1.144,1.144,0,0,1-1.144-1.144v-1.009a1.144,1.144,0,0,1,2.288,0v1.009A1.144,1.144,0,0,1,567.7,437.067Z",
                                                                                                    transform: "translate(-566.553 -433.771)",
                                                                                                    fill: "#464c54"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4783",
                                                                                                    "data-name": "Path 4783",
                                                                                                    d: "M567.7,450.605a1.144,1.144,0,0,1-1.144-1.144v-1.633a1.144,1.144,0,1,1,2.288,0v1.633A1.144,1.144,0,0,1,567.7,450.605Z",
                                                                                                    transform: "translate(-566.553 -440.777)",
                                                                                                    fill: "#464c54"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                    id: "Path_4784",
                                                                                                    "data-name": "Path 4784",
                                                                                                    d: "M567.7,464.261a1.144,1.144,0,0,1-1.144-1.144v-1.009a1.144,1.144,0,0,1,2.288,0v1.009A1.144,1.144,0,0,1,567.7,464.261Z",
                                                                                                    transform: "translate(-566.553 -448.523)",
                                                                                                    fill: "#464c54"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                        id: "Group_932",
                                                                                        "data-name": "Group 932",
                                                                                        transform: "translate(554.935 405.064)",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4785",
                                                                                                "data-name": "Path 4785",
                                                                                                d: "M600.287,452.337h-11.13V432.579l15.162,0v15.723A4.044,4.044,0,0,1,600.287,452.337Z",
                                                                                                transform: "translate(-588.013 -431.435)",
                                                                                                fill: "#b0ddd2"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4786",
                                                                                                "data-name": "Path 4786",
                                                                                                d: "M598.93,452.126H587.8a1.144,1.144,0,0,1-1.144-1.144V431.223a1.145,1.145,0,0,1,1.144-1.144h0l15.162,0a1.143,1.143,0,0,1,1.143,1.144v15.723A5.182,5.182,0,0,1,598.93,452.126Zm-9.986-2.288h9.986a2.892,2.892,0,0,0,2.889-2.889v-14.58l-12.875,0Z",
                                                                                                transform: "translate(-586.657 -430.079)",
                                                                                                fill: "#464c54"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4787",
                                                                                        "data-name": "Path 4787",
                                                                                        d: "M604.093,446.519h-5.326a1.144,1.144,0,1,1,0-2.288h5.326a1.144,1.144,0,1,1,0,2.288Z",
                                                                                        transform: "translate(-37.671 -32.692)",
                                                                                        fill: "#464c54"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                        id: "Path_4788",
                                                                                        "data-name": "Path 4788",
                                                                                        d: "M604.093,461.136h-5.326a1.144,1.144,0,1,1,0-2.288h5.326a1.144,1.144,0,1,1,0,2.288Z",
                                                                                        transform: "translate(-37.671 -40.622)",
                                                                                        fill: "#464c54"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                        id: "Group_933",
                                                                                        "data-name": "Group 933",
                                                                                        transform: "translate(533.962 383.968)",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4789",
                                                                                                "data-name": "Path 4789",
                                                                                                d: "M550.91,386.468a7.6,7.6,0,0,0-7.6,7.6c0,4.194,7.6,12.078,7.6,12.078s7.594-7.884,7.594-12.078A7.6,7.6,0,0,0,550.91,386.468Zm0,10.948a3.534,3.534,0,1,1,3.534-3.535A3.532,3.532,0,0,1,550.911,397.416Z",
                                                                                                transform: "translate(-542.171 -385.324)",
                                                                                                fill: "#fbe295"
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                                id: "Path_4790",
                                                                                                "data-name": "Path 4790",
                                                                                                d: "M549.554,405.929a1.144,1.144,0,0,1-.824-.35c-.81-.841-7.915-8.347-7.915-12.872a8.738,8.738,0,1,1,17.477,0c0,4.525-7.1,12.031-7.914,12.872A1.144,1.144,0,0,1,549.554,405.929Zm0-19.674a6.459,6.459,0,0,0-6.452,6.452c0,2.7,4.1,7.8,6.452,10.4,2.35-2.6,6.45-7.7,6.45-10.4A6.458,6.458,0,0,0,549.554,386.256Zm0,10.948a4.678,4.678,0,1,1,4.679-4.678A4.683,4.683,0,0,1,549.555,397.2Zm0-7.069a2.391,2.391,0,1,0,2.391,2.391A2.394,2.394,0,0,0,549.555,390.134Z",
                                                                                                transform: "translate(-540.815 -383.968)",
                                                                                                fill: "#464c54"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "field for-w-100 cityBox",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                children: t("select_city")
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: "getstart drp",
                                                            id: "desktopHide",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "h_dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(usersvg, {}),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "ml-2 mr-1",
                                                                        children: [
                                                                            (0,Utils/* LoggedIn */.eZ)() ? `${(0,Utils/* getUser */.PR)().FirstName ? "Hello, " + (0,Utils/* getUser */.PR)().FirstName : ""}` : t("Login"),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fa fa-angle-down fa-xs ml-2"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "h_dropdown-menu",
                                                                        children: !(0,Utils/* LoggedIn */.eZ)() ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                                        href: "https://lis.oncquest.net/labmateonline_7001/",
                                                                                        target: "_blank",
                                                                                        rel: "noopener noreferrer",
                                                                                        onClick: (e)=>{
                                                                                            e.preventDefault();
                                                                                            window.open("https://lis.oncquest.net/labmateonline_7001/", "_blank");
                                                                                        },
                                                                                        children: [
                                                                                            " ",
                                                                                            t("lis_login")
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    children: [
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                            href: "https://lis.oncquest.net/labmatefranchises_7001/",
                                                                                            target: "_blank",
                                                                                            rel: "noopener noreferrer",
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                window.open("https://lis.oncquest.net/labmatefranchises_7001/", "_blank");
                                                                                            },
                                                                                            children: t("franchise_login")
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "https://itd.oncquest.net/Oncquest/Design/onlinelab/",
                                                                                        target: "_blank",
                                                                                        rel: "noopener noreferrer",
                                                                                        title: "",
                                                                                        onClick: (e)=>{
                                                                                            e.preventDefault();
                                                                                            window.open("https://itd.oncquest.net/Oncquest/Design/onlinelab/");
                                                                                        },
                                                                                        children: t("report")
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "https://admin.oncquestlabs.com/search-tests",
                                                                                        target: "_blank",
                                                                                        title: "",
                                                                                        rel: "noopener noreferrer",
                                                                                        onClick: (e)=>{
                                                                                            e.preventDefault();
                                                                                            window.open("https://admin.oncquestlabs.com/search-tests", "_blank");
                                                                                        },
                                                                                        children: t("range")
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "https://lis.oncquest.net/labmateonline_7001/",
                                                                                        target: "_blank",
                                                                                        rel: "noopener noreferrer",
                                                                                        children: t("lis_login")
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    children: [
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                            href: "https://lis.oncquest.net/labmatefranchises_7001/",
                                                                                            target: "_blank",
                                                                                            rel: "noopener noreferrer",
                                                                                            children: t("franchise_login")
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "https://itd.oncquest.net/Oncquest/Design/onlinelab/",
                                                                                        target: "_blank",
                                                                                        rel: "noopener noreferrer",
                                                                                        title: "",
                                                                                        children: t("report")
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "https://admin.oncquestlabs.com/search-tests",
                                                                                        target: "_blank",
                                                                                        rel: "noopener noreferrer",
                                                                                        title: "",
                                                                                        children: t("range")
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "divlink",
                                                                                        onClick: (e)=>logout(e),
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                className: "fa fa-sign-out fa-x mr-1",
                                                                                                "aria-hidden": "true"
                                                                                            }),
                                                                                            t("log_out")
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const Layout_Header = (/*#__PURE__*/external_react_default().memo(Header));


/***/ }),

/***/ 3586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(701);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4759);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8183);
/* harmony import */ var _Scroller_Scroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7707);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2453);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function Layout({ children  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { pathname  } = router;
    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const toastData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.common.toast);
    const toastId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const cityData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.dashboard.city);
    const localCity = async ()=>{
        let dt = await !!(0,_Utils__WEBPACK_IMPORTED_MODULE_4__/* .getAllCityFromLocal */ .Z$)();
        return dt;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!!!localStorage.getItem("oq:cityData") || pathname === "/") {
            dispatch(_redux_action__WEBPACK_IMPORTED_MODULE_5__/* .dashboardAction.getCityAction */ .uo.getCityAction({
                id: ""
            }));
        }
        return ()=>{};
    }, [
        pathname
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (cityData?.length > 0) {
            localStorage.setItem("oq:cityData", JSON.stringify(cityData));
        }
        return ()=>{};
    }, [
        cityData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_6___default().init();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (toastData) {
            notify(toastData.message, toastData.type);
        }
    }, [
        toastData
    ]);
    const notify = (message, type)=>{
        if (!react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.isActive(toastId.current)) {
            toastId.current = (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(message, {
                type: type,
                position: react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            });
        }
    };
    const SetCity = async ()=>{
        await localStorage.setItem("oq:city", city || "");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (city) {
            SetCity();
        }
        let _city = (0,_Utils__WEBPACK_IMPORTED_MODULE_4__/* .getSelectedCity */ .Zi)();
        setCity(_city);
    }, [
        city
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                cityData: cityData,
                city: city,
                setCity: setCity
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Scroller_Scroller__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    children
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                cityData: cityData,
                setCity: setCity
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
                theme: "colored",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                newestOnTop: true,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Const_Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7993);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_5__);






const Scroller = ()=>{
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__.useTranslations)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [scrolling, setScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [scrollTop, setScrollTop] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const onScroll = (e)=>{
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, [
        scrollTop
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: scrollTop > 100 ? "buttonfix fixicon" : "buttonfix",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "mob-show",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "tel: 0124-6650000",
                    target: "_blank",
                    className: "hexagonbtn",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "21.909",
                                height: "23.305",
                                viewBox: "0 0 53.46 53.46",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                            id: "a",
                                            x1: "1.115",
                                            y1: "0.791",
                                            x2: "2.597",
                                            y2: "2.081",
                                            gradientUnits: "objectBoundingBox",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "0",
                                                    stopColor: "#24A0B8"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "1",
                                                    stopColor: "#CCCECE"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                        transform: "translate(-768 -947)",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M54.99,41.625a34.858,34.858,0,0,1-10.543-1.633,2.778,2.778,0,0,0-2.97.742l-6.535,6.533a44.662,44.662,0,0,1-19.6-19.6l6.535-6.533a3.1,3.1,0,0,0,.742-2.97A32.3,32.3,0,0,1,20.835,7.47a2.979,2.979,0,0,0-2.97-2.97H7.47A2.979,2.979,0,0,0,4.5,7.47,50.448,50.448,0,0,0,54.99,57.96a2.979,2.979,0,0,0,2.97-2.97v-10.4A2.979,2.979,0,0,0,54.99,41.625Z",
                                                transform: "translate(763.5 942.5)",
                                                fill: "url(#a)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M50.7,28.164H55.96A23.666,23.666,0,0,0,32.3,4.5V9.759A18.392,18.392,0,0,1,50.7,28.164Zm-10.517,0h5.259A13.151,13.151,0,0,0,32.3,15.017v5.259A7.877,7.877,0,0,1,40.184,28.164Z",
                                                transform: "translate(764.434 944.5)",
                                                fill: "#707070",
                                                opacity: "0.67"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t("home")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "active",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.HOMECOLLECTION */ .l.HOMECOLLECTION,
                    className: "hexagonbtn",
                    passHref: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "28.316",
                                height: "29.093",
                                viewBox: "0 0 28.316 32.093",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    id: "Group_824",
                                    "data-name": "Group 824",
                                    transform: "translate(-255.902 -226.112)",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "Path_4506",
                                            "data-name": "Path 4506",
                                            d: "M391.5,366.579c0-.008,0-.017,0-.025s0-.041,0-.061a3.867,3.867,0,0,0-7.062-2.181,3.867,3.867,0,0,0-7.065,2.173q0,.029,0,.059c0,.009,0,.018,0,.027,0,1.48.909,3.115,2.7,4.86a24.5,24.5,0,0,0,3.773,2.939,1.085,1.085,0,0,0,1.163,0,24.5,24.5,0,0,0,3.777-2.935C390.588,369.693,391.5,368.059,391.5,366.579Z",
                                            transform: "translate(-114.368 -128.523)",
                                            fill: "#ffe900"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "Path_4507",
                                            "data-name": "Path 4507",
                                            d: "M308.991,236.822a.67.67,0,0,0,.458-.181l9.8-9.133a.2.2,0,0,1,.27,0l9.871,9.133a.673.673,0,0,0,.913-.987l-9.874-9.136a1.555,1.555,0,0,0-2.1.011l-9.8,9.133a.673.673,0,0,0,.458,1.165Z",
                                            transform: "translate(-49.351)",
                                            fill: "#888"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "Path_4508",
                                            "data-name": "Path 4508",
                                            d: "M266.113,420.3a5.354,5.354,0,0,0-.5-.472c-.167-.168-.4-.406-.669-.681l-.008-.008c-.673-.688-1.6-1.63-2.247-2.247a1.417,1.417,0,0,0-1.932-.018l-.061.056a1.777,1.777,0,0,0-.241,2.35l1.342,1.86-1.234-1.081c-.4-.422-.966-2.306-1.279-6.251a2.486,2.486,0,0,0-1.757-2.173l-.086-.025a1.194,1.194,0,0,0-1.535,1.145v5.774c0,3.314,2.039,5.746,3.838,7.892,1.225,1.461,2.282,2.722,2.282,3.828V431.8a1.01,1.01,0,0,0,1.009,1.009h4.731a1.01,1.01,0,0,0,1.009-1.009v-5.783a7.825,7.825,0,0,0-1.585-4.439A11.092,11.092,0,0,0,266.113,420.3Zm-5.342,5.257c-1.652-1.97-3.524-4.2-3.524-7.028v-5.566a1.134,1.134,0,0,1,.692.951c.31,3.914.876,6.305,1.681,7.108.016.016.016.016,2.434,2.134l.831.728a1.046,1.046,0,0,0,1.537-1.4l-2.881-3.994a.432.432,0,0,1,.059-.572l.061-.056a.073.073,0,0,1,.1,0c.632.6,1.545,1.532,2.212,2.213l.008.008c.29.3.54.552.714.726a.678.678,0,0,0,.082.07c.212.185,2.651,2.366,2.651,5.133v5.448h-4.059v-1.216C263.367,428.656,262.164,427.221,260.771,425.559Z",
                                            transform: "translate(0 -174.606)",
                                            fill: "#888"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "Path_4509",
                                            "data-name": "Path 4509",
                                            d: "M532.446,411.8a1.2,1.2,0,0,0-1.055-.187l-.085.025a2.486,2.486,0,0,0-1.757,2.173c-.313,3.945-.882,5.829-1.279,6.251l-1.234,1.081,1.342-1.86a1.777,1.777,0,0,0-.241-2.35l-.061-.056a1.417,1.417,0,0,0-1.933.018c-.649.616-1.57,1.557-2.245,2.245-.273.278-.509.52-.68.691a5.382,5.382,0,0,0-.5.472,11.089,11.089,0,0,0-1.073,1.278,7.824,7.824,0,0,0-1.585,4.439V431.8a1.01,1.01,0,0,0,1.009,1.009H525.8a1.01,1.01,0,0,0,1.009-1.009V430.25c0-1.106,1.058-2.367,2.282-3.828,1.8-2.146,3.838-4.578,3.838-7.892v-5.774A1.2,1.2,0,0,0,532.446,411.8Zm-6.985,18.451v1.216H521.4v-5.448c0-2.765,2.437-4.947,2.651-5.133l.038-.029.139-.069v-.066c.172-.173.4-.4.63-.641l.006-.006c.664-.678,1.574-1.607,2.2-2.2a.073.073,0,0,1,.1,0l.061.056a.432.432,0,0,1,.059.572l-2.881,3.993a1.046,1.046,0,0,0,1.537,1.4l3.233-2.832.031-.029c.806-.8,1.372-3.2,1.682-7.109a1.134,1.134,0,0,1,.692-.951v5.566c0,2.825-1.872,5.058-3.524,7.028C526.664,427.22,525.461,428.655,525.461,430.25Z",
                                            transform: "translate(-248.708 -174.605)",
                                            fill: "#888"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t("home")
                        }),
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "#",
                    onClick: (e)=>{
                        e.preventDefault();
                        router.push({
                            pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.BOOKATEST */ .l.BOOKATEST,
                            query: {
                                tabs: "tests",
                                categoryId: "",
                                subCategoryId: ""
                            }
                        }, _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.BOOKATEST */ .l.BOOKATEST);
                    },
                    className: "hexagonbtn",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                id: "Group_823",
                                "data-name": "Group 823",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "25.98",
                                height: "26.445",
                                viewBox: "0 0 29.98 34.445",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Path_4500",
                                        "data-name": "Path 4500",
                                        d: "M1534.719,433.4s6.241,4.8-.48,11.161h6.481s5.641-9.361-3.24-13.562Z",
                                        transform: "translate(-1515.607 -416.482)",
                                        fill: "#cccece"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Path_4501",
                                        "data-name": "Path 4501",
                                        d: "M1364.918,167.4l2.04-2.4-.84-1.08,12.122-13.8,1.2.96,2.16-2.28,2.4,1.8-2.04,2.52.72.96-12,13.922-1.2-.96-2.16,2.64Z",
                                        transform: "translate(-1354.567 -148.082)",
                                        fill: "#cccece"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                                        id: "Ellipse_1533",
                                        "data-name": "Ellipse 1533",
                                        cx: "2.64",
                                        cy: "2.64",
                                        rx: "2.64",
                                        ry: "2.64",
                                        transform: "translate(16.924 17.305) rotate(-80.783)",
                                        fill: "#24a0b8"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Path_4502",
                                        "data-name": "Path 4502",
                                        d: "M1193.357,759.831h-25.61a1.6,1.6,0,0,0-1.6,1.6v1.643h28.8v-1.643A1.6,1.6,0,0,0,1193.357,759.831Z",
                                        transform: "translate(-1165.52 -729.227)",
                                        fill: "#24a0b8"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Path_4503",
                                        "data-name": "Path 4503",
                                        d: "M1219.308,691.121H1197.57c-1.089,0-1.973.562-1.973,1.255v2.105h25.684v-2.105C1221.281,691.683,1220.4,691.121,1219.308,691.121Z",
                                        transform: "translate(-1193.527 -663.877)",
                                        fill: "#cccece"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                        id: "Group_822",
                                        "data-name": "Group 822",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                id: "Path_4504",
                                                "data-name": "Path 4504",
                                                d: "M1183.085,136.391l-2.48-2.192a.48.48,0,0,0-.678.042l-1.874,2.12-.719-.636a.48.48,0,0,0-.678.042l-12.294,13.91a.48.48,0,0,0,.042.678l.718.635-1.874,2.12a.48.48,0,0,0,.042.678l2.48,2.192a.48.48,0,0,0,.318.12h.03a.48.48,0,0,0,.33-.161l1.874-2.12.718.635a.48.48,0,0,0,.318.121h.03a.48.48,0,0,0,.33-.161l2.069-2.341a3.192,3.192,0,0,0,1.278.331c2.25,2.637,2.117,5.509-.4,8.542h-15.786a1.963,1.963,0,0,0-1.96,1.96v1.361a1.862,1.862,0,0,0-1.655,1.848v1.93a.48.48,0,0,0,.48.48h28.782a.48.48,0,0,0,.48-.48v-1.93a1.862,1.862,0,0,0-1.655-1.848V162.9a1.962,1.962,0,0,0-1.926-1.959c1.438-2.834,1.7-5.454.774-7.8a10.1,10.1,0,0,0-3.819-4.478,3.2,3.2,0,0,0-.489-1.247l6.118-6.922a.48.48,0,0,0-.042-.678l-.718-.635,1.874-2.12A.48.48,0,0,0,1183.085,136.391Zm-17.039,18.551-1.761-1.556,1.556-1.76,1.76,1.557Zm9.42-5.752a2.254,2.254,0,1,1-2.254-2.254A2.257,2.257,0,0,1,1175.465,149.191Zm6.584,16.922v1.45h-27.822v-1.45a.9.9,0,0,1,.9-.9h26.023A.9.9,0,0,1,1182.049,166.113Zm-1.655-3.209v1.35h-24.512V162.9a1,1,0,0,1,1-1h22.512A1,1,0,0,1,1180.394,162.9Zm-2.05-1.96h-4.458a7.622,7.622,0,0,0,1.7-5.138,6.828,6.828,0,0,0-1.412-3.548,3.226,3.226,0,0,0,2.185-2.425C1179.124,151.9,1181.377,155.409,1178.344,160.943Zm-3.1-14.238a3.212,3.212,0,0,0-4.252,4.81l-1.679,1.9-.715-.632,0,0-2.48-2.192h0l-.717-.634,11.658-13.191.717.634,0,0,2.48,2.192,0,0,.716.633Zm5.286-8.153L1178.773,137l1.556-1.76,1.76,1.556Z",
                                                transform: "translate(-1153.267 -134.078)",
                                                fill: "#575757"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                id: "Path_4505",
                                                "data-name": "Path 4505",
                                                d: "M1272.182,640.192h6.044a.48.48,0,0,0,0-.96h-6.044a.48.48,0,1,0,0,.96Z",
                                                transform: "translate(-1265.91 -614.526)",
                                                fill: "#222935"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                t("find"),
                                " "
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "https://itd.oncquest.net/Oncquest/Design/onlinelab/",
                    target: "_blank",
                    className: "hexagonbtn",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                width: "24.5",
                                height: "30",
                                viewBox: "0 0 24.5 33",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pattern", {
                                            id: "pattern",
                                            preserveAspectRatio: "xMidYMid slice",
                                            width: "100%",
                                            height: "100%",
                                            viewBox: "0 0 179 242",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("image", {
                                                width: "179",
                                                height: "242",
                                                xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAADyCAYAAAAGEPQ6AAAABHNCSVQICAgIfAhkiAAAIABJREFUeF7tnXuQFNd1xs/MLHqAgEXyI3rxkBAg9ACpEkfIQiwSluPEMQjFdoRcgLGcSspWJOwkrkpKAlSV/JFYLOBSUrEtA1JckrAkkBwnchKzi4weFVcihOTYcSyLx7LsAkb7gGVfM5Pz3dt3pqene6Znume3p+c0xe7OTHfPvef++vR3zz33diLLGzXIZqqaSCRyNXZ7r0HMEblqoi3sbVNpARONBLMxTlCjVWpk2b/QAnb7ZzIZSiaTBc7FAG3289teDQWz0yh9fX20evVq6unpEd7GyAKAN5VKEX5PmzaNbrrpJpo+fTotXbqUZs6c6Qq136I1JMyAGiDffvvtdPDgQb+2kv1qZAF4YrTJggULaM2aNbRy5UqaMWOGeq8S2dFQMJu26O3tFZBrBKbf07pJCfuxa9eupQ0bNihv7RfqhoHZGASSoqWlhd566y2/dpf9QrSA8cL2U9rBtr8/ZcoU2rRpEz300EO+ShAbmL2uXvv7dpDdjOo0cAMFenzBMl47LVmyhPbs2UPNzc2qCF5tHRuY3QztBXK5RjGglwO+3Hnk8/AscOONN9LOnTtp4cKFBUDb2zh2MLtdtUGkhQAdHpDOM5WyrdtnU6dOpQMHDhREPQrupnGNM4tGrh2EYZ3ZC+ZSd0Z45ra2tpzkiD3MdpARv8TV7DScX4/rd7+wGrgRzuPV4SvVZ7G3w4oVK+iFF17Ihe1Me8dKZrhpZMSRS3XkynmHRoBrrOrobWt06iorRWtra1GUIzYwO0GGR0b4zQ/IGE7FiJRzg0YzHY7KTC17F1sgw22RUEPXg8NDTG+S3nnnHTp7pq9kG3lZEm3z3nvvqVFEs8UGZlOhSjt7dpCdngMhofb2diEzBAsYZ5NhD9zVdTJ3RgD9xLe/Sbt2PVPxt2BQZePGjfUHcxhx5GLdnGJDwGO43+ME5or58nVA5/GTlOHExSR7anbR6pif/vSn9OCDD9DP/uedonN4dQgxqHL48OFcZ7CuPXMlceQkJRhbWJB/ZiZQNoFX3iDDogKzLzYr3skNZrRlf38/rbx7Of385/+TczDlYv7bt28nDH1jqzuYq40jJxLwwtg0wOp1Nq39Qt5BFDSMwFwxp74OcIMZLZHihujr66Fld95JnZ0dRUDbT24gX758uRodrEuYTYWqjSMnFbg6OR+/slmYcNS62RW2hcDsi82Kd3KDWd01E1mWHkSvvbafPv0Hf6Acj58wnpGJdeeZFYRWaiA6e5XFkXUSeCIFqYE/mjiKMcp/4P3iaIbAXDGnvg5w9cwMccqaAASAV65cQW+8/mrufKXi/RhEQfJYXcEcVhz5vGmX0PD7vewL+F8y7RqWgxUFZl9sVryTG8zOO+6//usP6P4vfMHVyTi/0MSc6wbmwHFkpSnSNPGq62nyby+i7qe/pbRygpWaV0RDYK6YU18HuMPMjoXbA9oZUgPtfcXll1pSQw+qeI3imhBd3cBsrFRtHBmGmDhrLs3duou6n3+Cju3YqgL4COQLzL4YDG0nL8+MNrK65Cpst3RZC/3fz/KRDa8CYHbKjh07oiMzgseRje7lIBx3JKCDs4m0usozPNp0wew5NH/z0zThoql09MnN1Lnj761bmLteFpkRGrtFJyolM+w733PP3QW62atE5g4aac9cSRzZvaK6wzfx6jl07RYeYZo0mc7j10ef+gZ1bN+CnqCVFFDc+ROYBebAFqg2jpyLSDC/Cb5FmXDNpKvn0vzHGOQpUymV5RgzNVHHjr+jY999nPdL8X7svfXwSVHZRTMHbk7XEzScZ640jmwfKWKU+V+CLrxqLl3buouSkycqVJPo7HFC0fEnt9DRnY9DiPCwKnob7o0mMAvMgS1QTRwZI3oJ9rzwsAD7gtlzad5jz1Jq0kWUTWVpQppjyty9YPdMx77zOB17cqvS1sqDywhg4Dar5AQN4ZkDxZFVP66Jf4yyRp5Pc1ufpqbJk6iJpQQghgfGgCmzTF07ttGRp7aqEUDuNDDQMmhSCYxB9409zIHjyCwf4J0vvGo2S4vvUfKiixS4iGioLTtBZ2ox2seebGXd/A0tO/hzRDtkBDAoov6Pjz3MxhRVx5EZzYksLa577GnKTmFpAVQhO5QmPp9fDanAe5aTM45v30YdT25TKtqM/7ulgYpm9g9oJXvWPcyB48gMoQofo9vGEQj9Vz4K0Tz3Bpq/ZRelzz9fAYrgO7Rz0uZ1dQ5tkr3yFvbOgLn0JjCXs1B1n9c9zG7VriSOXJjXqkftTJz4kmtuoKXf2UcnaICGR84yyCnlc0f5R5K9M6boQF4IzNXBF/ZRsYG52jgy9DA8sgo85Lw0UfPs6+iuJ17h8Ns06jzbqeaXYQgE8Ko5Z5wehzAdNoE5bCyrO19sYDbVry6OjGQUHU6Dp26evYDu3NFG502aqk57pK+bRkeGOJ6hZUgK+2IQJaO1scBcHXxhHxUrmKuJIxuDGp38gTkLacl32un8i6YoSDlFmTr7OmkgfY6x5ZgzUrA4VzlrzTARmRE2ktWfLxYwB4kj6xkH2sPCI9+xXYOMoWu8neZ/HWeP08jgiBo8GWV5keKh6yyTnkmxikbCkXQAqycwxCPrHuaw4sjNs69lafFjJS0MyGo1dtYTR/s7aHBkmOFFp487gZpehpgfNSAwh4hjsFPVPcym+tXGkXH8tKtvoLt2vkIpTuNU0gKhOTwTQ6V7ZulQ72FKpzW8CXhkRTD8MwfqoDrEMwejMKSjIw9zrePIF8/h8Nu3X6ELL2pmPnneHoapHWsvvHv6EKUhL9hLm4gG7J9OmAGU8Yszy2Iy+krAM0zODvDd09F2btdJpPKZw40jt9GEqdMoMcpRCZ752JTmOdUTGE4OXCC/YmDkHHWe6bYkhYYZs1ahOADzeHcAzSzjkJxb3Z4Gk0/nzL0uB3OW+zd6xk9x6uK4w1yrOHITx5GRR4FhajVCrULHHEfmn6P89+mzp6lniNctY0mBUb40wncsMxK8HhQiGgJzNPgHzNfMma/GCjA1Cv16N5BR2nGH2Zgs9DiyWoEIAyfQxKpfVzDB8XDPMRrKDCodDdjhjQ3MpkzjqZnFM+tWAMxz511vTVzFJIr82hjOyy0SMNcmjmwWbtG3I8Sbs7zUFkJvZ4bOsMQ4qeAF5PhsVE291lEMgTkaXhmlQN8Bnhn32CY1qus+ZW3cPXMt48iQD5kk5yNz3y8BiNOcTMQPR8R3dvR00HB2RENueexR64rPh+TGN5ohnjnvme2a2XOaz3jKjFrHkRMsGzBIPYG9LRbTSmJZLQb31MAp6h0aYFkxYmXIAVrrarcSjMQzR8szz77mWo6rYqSL25G1c2Q1c63iyOj8jaoxPUaaQU6zLfoGztDJc7zWrwVvkmeaKJDNa5X+qeEe70ET8czentkrrFszzRw4jmxbz80MTeu8ZJWnSVOvXkDLnvgRXTD5YhW1QGdvlH+neNAjiyW0kGzP+ljlNPPsqF+f61URDAOqHur23nQERCcbdW7/BnU+pZPzdb2suYCOw00+s1fdK/F3jQ6zSeHdu3dvrgOoE3U9ZhOPtcyoJI6cZxnz9NCDNZXI0rRrAHIbz9lr1pEIzTf/ztAEhlk/oYGP4VsTcjB6zvVT70Cfzo5DiicTmlK5G6U3HIvzdj31OM/O5jmAttim28J8gBm97zBADOMc5epXD58748zjGpqrNo4ML6hzi3WnDYt+Y2Tj4rnX0x3f3k/nTeakITW3GisSFeoonb+cpmGOGf+6/zSdHTmDsWx1HoCsZpSUaUmjoxF3hlfu2MHrZrh4ZPskADwoPqyRO4G5WGYoRVjCB9VMZjhZqS6OrFev0FBzroWaIfJjlf2GTYHEUQr1Wy1qyBELBNVHs3SaB0TODJ5Rw9WIbABK/TwSyAd/MGsPnmWvvI3XznhceXuvzgfKsHjxYtq3b189OLy6KSPsfbzrVHSGs4PEkTW1Kbpk9o3Usp018qRpKklIva0y29I8W2RU+ejB9IAaph5M66cTKUlhJeablSIBnRkMKdWiRmJgxsoxlhgd/F9fQN6rgGLNX9wWZQvHAqbtTKIRPPO4RTOCxJHt5rhg9jya3/oMJSdNVLP10LlToKpOHv5mmNEJ5MXA+U+OJ/Mn7ImNBFCyw8gVR+TCy+yAGdim+aJ472+/Rqf/7Xk1rUrf/os9NN43MiOMDmA4OMTjLIDZDJpkMmhnd61RM5kRPI6sG2LyrDk0d8uzlJg8WcWFM0lOpmeAoV8RswDckBYJ/kyve2GmO+UbEp5YeWrlWnVMWc/C9t6MZ0aexrvrP0un3/qJ8spmprfbkWF2AOOBYfBa2GXGuGvmIHFk5ZE3f5cnn2LOXpKa0AdkYvniVNEI9WQGtZAhx5GRf4zog+W7cwBb8CJf2VzR2uuaB/C4GzxrDXXDI/zX799E2bNntGRBeM7lERA4y913360eaytbuBYwnrlmobngcWTdM0W0Qq22Yj1cxXSwJl49j+bxsrITJk1h9EZ52azz2OvyEDSvNET4XQbGcubUkQnoZ720AE+YohE9G1BdOPDAaZYt/ftfpl888ie2B79omaGcvCOK8sgjj9CmTZvKfbV87sMCdr6cMmNMUkAriSPnIhBW+DgfJWhS6yPDIxNHLZqUbGAtrHIrWPmyxAB20MFBN0QrmjDYkuSxQqSBWon6Blaso/GLP72X+g/+xPoqa1kufDceHerY8EiuT33qU6HEmYPWLU7H22ea1DTOXH0c2W0xzSRN4iWz5rT+EzVx1AJdPWhhvRonywSAzB4zwzBBHwfb8kPX8Mw4n3kgmlnZ6PTBV+mXf3YfZr+q20i5QZNf/epXNGvWrGDFkqOLLGD3zCYF1C1EGloHsNI4skq85GkdGKHWV1uSplx1rQI5MWUyOz7EheGROTlT6WP2oZzZhlE+1RE0yUFVNr46Bx+Loe+mrH4kWjYxQV9ALEF6f/lzepe98vC5Pi4qPDE0tvXYNP2siAKpgQfAv/nmm1WWRg4rZQHArO7EnGhkPLNbRCMUmKuPI5uIQobXR55H1/NqnKkLJ6rQWoqTgBCvQA4yEoX0hFNoZQTZAHe5MbzSgGDqFAQLQB3ldNBU9gKdz8z/+37xc/q/DffTcNcJleuMO4M2HgDWmtoZntu8eTOtX79eqKyBBewyo2bTpoLEkQEHVqyHg5vES2bNa32KpcVkFddVKwthRU4escP0/ybuqMEjQ8MioqHjvcF0BqIfuGDSrJcT7JlxgSDK0fX8N/lhPI9T+mx/TieruIkV23Te3lCPi3g53CNHjtDUqbycgY+cjxq0dyxPqWbSMwNOzYz3Q/XM4cSRMzRp1vUcR/4uTeCFvgFYEy8nO0qDTGyTHn7ODhsdol4nVBZR6bCan5ZVcWScjye8Drz3M3r/wGt0atdTNHjyWC5KkUyczxcOjyZaelnHmc1gjPbWeG2eK+fne2WfyizgNpztluSFswaWGdXHkbVMMMk7KY5YpLPQpHrT2igf/kL82DyyodTARWWmcobXbIuIG1Vh5Iylk1EODMwYDw1vfOjQIWpubq70q0vuLx5em8eZNVezFNBKQQ61tSNyst27d9Py5ctDlxcC8xjCDJAxfHvw4MGIYFWbYnjd0vBt5kmftfhmgXkMYYZOfPTRRy1JkI/Blmr8WjR6rc5Zrh4LFiygAwcOFHx9mAlGAvMYwrxx40YFc7mBhFrBNhbndQJtXgNkaLlp03ihmRptAvMYw4w8hHIerEZtXfPTetUL0urFF19UYTg3T2zCSUELKDCPA8xBG62ejn/wwQdpy5YtRRDnw3X5HOqgMAY9vp7sWqqsYxLNgMywZ4jZPVncvDWGqltbWwkzSeybkVimvgbAMLSzwCyeOVSHNGPGDMJFu3bt2qLzOr0xdggDYvNFAnOEYY6qt3aWCwCvWLFChd2wNnCYgFZypQnMxTCbmSZebVL1CKBTZpRqKOxrbsnjBYdb+QzISNsExIhSYCSvFEhjVX7YrJE3tAE60+vWraMJ53HymbVwYk3mAPqB2cDilnsa9YayQ2vXxlEvdxzL50wBDT03oxzM9k4RrrB63ZyeeKw8c73aqxblrvkcwHIwo1J60RWdlFPvEDg9tWjaWmDrfs5jnSfUKqB6PkYN1przA7Mpml1mRAVqL4/rVr6olHns8InWNwFm8xgIwDzmHUC7rnF65ijA4cfT1jr8Fi1koluamj86rVrPHDWT+b2w/MAftbrFoTywu32tuZpMm4oLzHFo8LjXQTxz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geonMDdQY8e9qgJz3Fu4geoXeZjr5cE39VLOOLMdeZhhfLfHLESpUaJevijZqpZlqSuYa2mIoOeWxz8EtWDw4+sC5uDVrP0ZnA+0lAdc1t7mzm+oK5jF+409IPX0jXUBs3Su6gmp8StrXcBs7wQaU0XpAei42PCU2TVr1tDMmTPr/imz44djsG+uG5idUQ3AE7Wtra2NWlpaVLH8PjcwanWo5/LUFcx2Q0fxmdR2mOsZinotu8AcYssJzCEas4pTCcxVGM3rEIE5RGNWcSqBuQqjCcwhGi3EUwnMIRpTPHOIxqziVAJzFUYTzxyi0UI8lcAcojHFM4dozCpOJTBXYTTxzCEaLcRTxR7mVOI8SmeHCXHpgtyOBFEiy4Mb+JGBRTEIkynYT43s8X7Z7ATKJkf54wR/nlXnwWbOadqj0TxzlAaGUJau7l/TaDZDKdWWuo3ctnvuuZveeP3VspfRkiVLqL29nTmxWhzDzps2bSp7IHYwkPjZ2e+gSduqdbR4+ixKJZrwBQwlA5lW9FI2laTeY700OgRQATYAVbuxORL8VpZePdFFK9ufVqCXK1+cYY4SuF58HOs8QcRtmkBbMtRejNQtzP9x3zq6c/o1zGKGMgxyMpNmYlPsZLmy7Gl7u87SyOCwsg8ATjPMyQxo1p78xyc66NNtzyqw7d49yR46zfsT9rW2uMIcdZBN+WIvM15Z9UVafOVM7XLxP8NemGE2Bug53scwjzDISeWZtfdlcPkFiwx6/eRhWt7+rBYhFrc4DZ+kyFPHFWZz1/R7N/RzZ63FPnaYVVOzA3Mrc9165r0sM5bOYM8MSLPwyoDaMmU2SXaY2XdbH+R2oP2nOmjlj55V7xvD2KdJ2RslzjC7wRc1j3286xTfLdkFwRGxzEAymps0rFuY2+77IrVcYXlm1SIZJQ9SiaSSDn2dPeyZGfI84ba/ifazzFjZ/ozVn9CdRK8trjA75zju27evbP+hFp7X65wo380330xnB4bRR1cwx9Izt9/3BVpyxVVKLydYJyAakWGQk3zl4ndfJ2QGSw9rA6omuRSe+JXuo3RPG8OsNlbViH4o3Lkz6ZAacYXZ2MZAHTW5gfLs3buX5s67XsGMDmAsoxl7V91PS6dfpWWGFrvqVpSyPLGRGUojG3VhSQo03v5Th1lmfC8fhsM+Oe0M7Q2vrre4w2zqGTWYje3nzL1OwYzQHGSG11a/MuPe+6llBsOcawnEbdj3qvhNXjPnYQapeaqVzMh5Zk/7CMylTVPzT+FIDMyQGbH0zG0Cc+ggRd0zC8w5mSGeuRz9AnM5C+HGYA0T+9jVc3THeax4Zj/WrGwfgdmHvQRmH0aKwC4Cs49GEJh9GCkCuwjMPhpBYPZhpAjsIjD7aASB2YeRIrCLwOyjEQRmH0aKwC5uMBfkrXAaZpbTbD+4ZhldsnaZKjFGVdPcwc/tx6Hgnq5jNDysMxa9tvdX/6OvGkucWQZNfIHi3MkOs3OCgsoDx5A/j7ZO/6tVdOmjn8tlImb5PXyODY6ru+MQDQycKVmGk/P+wlcZBWaB2RcopWA2nymowamVJ4vXv7HxPrrikXv5Tc6LUekE7LExmwfDzfyv6+i7NDwwULIM3fO+5quMArPA7AuUUjCbGTnYxy418PryDffR5Qy0gtkkZgFmNS6VpG6GeXDgrMDstxMigyZV8VryIKftkTeMRHiAnZvgwF768kfyMBMSfxhglTOB6WvsubuPvEvnzp0TmSEwhw+p3zM6be/0yMZLX7phFXvnVUpWFMCskVYyY7CMzDgpMiPfLOKZ/SLqf79SMOfmSfLpLmWJYWA2MgMYI2kWPlo0s2Vz8cz+4Qt7z1LRDPt3Xb7pc3SZ6QAqhHmGvJrSwBOH+a/uo78Uz2zvbJRrqKh65qjNn3PasVT5/DoStw6ghln/7OpgzXy2dAdQZIatZaIAs3MOXdRBNubzKqfAXM6F4mqNaQpovcDro4nULgKzD0vFEeZ68sp+LzqBuUFh9qq2X3B8mC20XYwzKQdruc9NgUQz+2wavwaNgmZGlezw7tixg7Zv3+77du3TJFXvhrItXLiQtm7d6uscfm0vMPsyp3/dNt4w2yE2f1eymKRPcwTaDXAuXryYsLiLn01g9mGlOGpmu1c29cOqqH5XRvVhtlB2Mcu3+jmZwOzDSnGF2Vn1Qs/stuSXWVPJeyETE1Xwa7PcyJy1TjWOT/JyKVisDJvAXAxo9NZnjuC6GU6Z4cwJNmb1et+HXyi7i/PcArPAXGABv8tzeWnmWsJbjm6BWWAOAebCx0+Ug87+eSXwu+1rf09gFpgDw+yELP+69PK5lWnm8hpcYBaYA8Nslsl1duQS1ur+pdaD9uvF9QWi5955PWBIYBaYQ4G5EFisAQ348kvlOqUFXvuOYuR7kxbQ7hESgVlgDgHm4kew6bzfUbrsimn0R8uvLnhUmwEZMOP/4MBQSQf93R920vHuHseDxIoljMAsMIcCs5f+XfKRS6l95+97wjoyNEy9p0pP1V/+lXZ67eCpsopEYBaYBeYSl4nkZpT1IXoHv0Oq452b4VYdtzizW+hMPDORzDSxESQwi8xwOhR5pomPO0aQEUDxzO4GFs8snjlnAekAFl8k4pnFM+cs4Le/Ih1AH9BIB1AbSUJzeVhk4cRxWjhRohmybkaBz/Z7q5NohkQzJJphWaAWT2gVzyyeWTyzw8WIZhbNPO7PzhbPLJ5ZPLN4Zs9Yl0QzJJqRg0Oy5oqvE5md3dJSNlIuMkNkhsgMkRkiM1pmXJU3QoKnDbG8IOt3z/E+Ghkc4ScgWY/+UnMy9Hw5bBKaK+bHb4xfhrPL3qT1Dn4NKoMmMmgigybimT3dil9HIp5ZPHM+wiBzAGWmif16EJkhMkNkhsgMkRlLllB7ezue+62ftlPJwtp+FzaRDqDmTHIz8tdb44wAzrxaPa8ZG54PmkjwIitqxaAk9Xb10/C5YcRHih5kjr33nzhGK9ue8aXkQ58D+FuXUfuTn9TP5s1HC3NliRLMbmvm4XHDV2z4nHoIfEY9+U8/dhjPzUZ1Oo++R0MDpdf9kDmANvTaV32RlkyflX8HULMxzfZ+Zy+NDo260oIG+nH30XGD+fbfvJT2PeWxCEwmSyMjI5FdBAa2A8xXbriPb9NphtksO8ZQY/kxdirdRw/TwIA81NJ3nHnvqvup5UoNswopuQyaGJjdZM54Dpq4wZzhKiThqSMIs907J5NJuvThe+kyfn42FgODX+YFxaA/uQ0YbIa588hhGjwnntk3zG2r1lFuBNA28qcXK0ySGQHM38fhOZK59d3GE+YllswoeswaLkqGYmhoiPpPlfZsYzk72/6oCTgPwHzFxs8plLW00PIiy1ID+3YefVeenV1NBzDDxku6PAHWC2alr3n/cYcZMkMtksgAsLfT2l/LpKjBnNdyemFGgHwZywzoZHhjtSnNrBbyZc/8nnjmSmBuv+8LSjMr74YH0rDMSMJDowPIayC/39nPmnkk1w7aa5jFucc3N0PJjJ3cAcSWtPUAoTUYlihpZjMqaH8w5uUPf5Yu27RaXXq4D2rPjI53in31KHUdPUrnBvrz14DLX9IBtBnlB3fdS4sum6HeSbBTg1dQvwE3e+uRETZuWkc6LNdRAPN4dgA/etOH6J+33aEdGrS+VQf4NfUe1yE97L6Os6nNWMoMJ4vNX/k9mvzQ7ygvnGHDJyD2M1Y0A7Y/d45G+XWpTWC2WWdPyx/SRz90udZsFrPWIvJqrwy/mbS/EaGsuVtuvIS+/9gdlGEIcp0rLiuYUNozT7cnD+MJ84VfWkYXPfAxdenx/U6VOMX2TgNsdAKzoyrKITDbwmuljAGYb/3g5awoksqIKeg3vmVncau2vF2p4189eZTu3vtsDibd93J/3kjQODMuNt3ounN6240X0/OtLSUbu9yH96xvp/0HT+fOyV1bdXdyRm6CzDQpkBhsW9QDsYuJX7qLJn35znJFLPl597yv+Tq+IQZNnr/jM7T4g1dqA1sPdEQAP8WeIa3Smu0So9hur5/opOVtT+c1q9qfD4S3tOSKOSoIzPlvzl8ot974AXrxsaW+GtNrp+VfbbMtNu790J8gMJvvhpyAUdA7gW0ufOBOBXSQ7eS8v/B1eEPA/MLSz9BtH5quDKJlBt/muE2b2LuO8t+lb3LoAB7hQZPntEFVeAmXgmquIu8WCsyWZ4PnXHTDJfRSazCYP7W+jV5/+9f6QlZO3/3iDQqz3TsbpzH5y8to4pc/5gtGr53EM9ss8+KSz9CtH55O6RRrTW5IBO0z/Lfq9HGoSwXxS2w/OdFBn2x/Vntja9O3aC0F7A/XCQNme67wohs+TLtbbwsEw93r9zPM3Y6yF58yKMw4IwZKMrYO3aQHGOYvBYP0wZFmAAAIvklEQVRZOoC2ttp9x2fptg9cqXUiYs0wNhvdb1LTa93smfftUg7NPiig8g0c2rkamN2f+6cvko+yZ94T0DOvYM/8Knvmwguv+EGa1cJsyo/IYc4eVhhx0h8vpYl/+vFAF6PAbDPfc6yZWz48k8PK/MhzFazXAXuIBT8bBk3uYc+s4c0fkX+2Xj60FAxm+7k5Dstx8EULGeav69BctduKP9tLrx+AzNDntG/24ecgMOOcufgy/ra+ZNIDd7FnDtYBFJhtLfbXNy2la5s/yGF6hOuhGzOUyvDtEH0VdFYKwnLFyLzd+z5t+O9/z8kJnSQDzVwc1agKZqvx815fQ4eoydxZF9PffOn6ajlWx/3l4+/Q/753Wg0cGqBz32UDr1qYiwqX0/wJunD5TXTBPR8JVP73V/+Dr+MbogNYcHsFwC4dt1LWQsMnsk0Yb7N28350b1UwWyFGXFT5i0vnLuhQnb87iFcdcBfKh+KQuaYvYPy2e9RqYc559wLbln+8sS9CK9ipQWCuwCIBd60G5oBfGdrh1cIcWgECnmhv2z6aO/daPktuOMnzjHX7GIiANqrocIG5InOFuvOP9rbTvHnzBeawrCowh2XJys/z7/+xl+bPR/9CPHPl1nM5QmAOxYxVneQH//IyLVx4s8BclfUE5rDMFsp5du95iT7ykVusqE3pU4pm9mFy8cw+jFSjXb733At06623FcBcNEPH+m6B2UcjCMw+jFSjXQzMds0sMAcwtsAcwHgBD33u+d20aNFHCzTzuMKMJBV7oo0pjLNQeI2klqhtgBnx2nILC27YsIEeffTRSBTfDHrcfvvttG/fPl9lUgM6VjqtrwOC7OQRnCjMaSHSMC/K5X95gYyi1FRmmIKhAPZCeP2NAmHZpKhtCxcupKlTp5aF+dChQ4T/Udqam5tpwYIFrmV3gjGWtnd3aMiHaaIzZ86oSb0Yy7zuuhuU7cdVZtivcK9MNi8PHRUY3O4cTu/sVodS3iNKdUNZ3O6YYZTRrw30nHSddotjenrP0jmeQ2ju0k52xs0zG6PYC1TKK9v3L3dLD8Pg1ZyjlDHt9Yxa+b3K7bwY/UJYje3sxyA3Rc1gsTZOfqTe3l4aHBzWqy6k+G4+mqZUaoLKpfZjz5rKDDeY3YwwVgaspgG8GjvKZfaqp587TTU2qvYYU57BoTT19PQoaPV7mNeJKXB5YQ2YDdReto8EzE5jRAGUcp4MZTae2I/XqLbBgx4HAMp1qp37jJX9B84NsaQYYm88yGVEiqy1KA7AVfOSdQagffKEl/zAfmMCM24d6sqy1rTwgtd+9QVtxDCON4YzjW330vbz28s9ZtEAHxV0k3Ru3hmwa5B0NMnvbb1cEZwXO86LBW5GR0dVBw862dg2g6lvNk+cW3vP+pKCYALnVqt1+RzbGMCcpM5jXVburb3DESyft5whg37u5gG8PPFYebJK6+Qsb7m7zdg6k7yEGOVlIpI8YwbLJeitUF7k6oFZ85jmiVn4Nr1t7FI1zFu2bKH169eXjEuaq+n1N/6TZvBjzvIdpPziJ368R6WNKPvXvwWcXBi5gd/5z0wHUl8E8+bNof6+noLKu90pMR6AxfJzK+cjJrl0afF0eae+wetvfusJ+t3f/aTqperbGKYP5XuyhQWs/4aQGoRnAQNu8V1D86PvoAk6fPgwLboFU7nclwWzc/nwww/Tpk2b8jAfOHCAbr755oJOUN7zFlbm4x//BH1n+85cT1V/WigzxvYWF56x5Uy1s4Bd6jklElaIslbmUwX4+tf/llo3b7amjxWzZe/v7N69m1asWJGHGSeYMmUK9feXXu1RVzVJr7/xBs2ceRWlOaBohL79C8xQalidj9qZWM48FhZwk592h2dgxuqu/f299LFly6ij44guWpk8/jfffJNzpBcWwgy6X3rpJde1Kpxa5RZOFnnuuefUTGLn0GSYPeixMLR8R+0t4IysOD0z1vrBmj/YNm54mL71rX/0BNnO4vTp05UkUczzSXM+fPv27bRu3TrfNfv0Z/6QtmzZVrS/vaAiN3ybM/Y72vWyU8Ka17t2PUNf4UAEIiFmxrvTkdpfr1mzhnbs2FEIM07W19dHV155pUoM8dLLTovbgY5qSCv2lNRZBZ3OTr1ml/rMrqcVyHqZhcIBFuV5XTIAITFM4lWBZ8YJPv/5z9POnTtz5ik/aJCkWzil76tf/XOeQXBrQTadOUn5c9RZa0hxK7ZAKUd35MgRJS1++MMf8nnNCtH5r/DyzEjjRTqviaQVwIzDkfI4a9Ysz8J6g8lQ33ILfeITn6Drrr+RU/2uUx1KAbnido/1AQbq1157jTr4kWwvv/xyHmLL8/plxkyyyMkXo5ntQ7yI2eG/1+aMPdv3y3+mx+bzW+nHCMS6BaVybAHnJI3S8eNSd3UwhkkKznztIpmBHZHxBBf+zjvvFGQ2Gd2C33ZQSwl05/Kp0q5iAS/9W4oju9Vwx3/rrbc4NDyzwJhFMsN8ikGUlpYWlZNqv0qcIOc/LFwfzu+tQpq2cSzgCasjjmzfz40jRC8QxXDq8CKY7b1IHIQOodvm/EIDuZsEEbAbB9hy0tTLKzvv+l7MPPjggxwO3pL7moLIiD3O7FYQRDbWrl1b6M5tIZJS+lmaUCzg565ezhMb0FevXk0YCzHRC6d1izSz/QoxO+/Zs0cB7ZQczli0F9jimQVqO9Re/a1SnLS2ttJDDz2kTuNMmyiKZpQb8ICGhk55++23fQ+olLqlSPOKBfxYADO54UzRfyu3eXYAvQ5E7ujWrVsLvHS5L5HPxQKVOjZ4acgK6GM/y0Ko85fTzPZmMN4bcmMzp+dt27ZNhfHsm9/wijSvWMDLAlAASLZH6K2cYihgzy/MXidFLun3v/99NayI7CW/Y+rSlGIB4/hmzJihUjiRtbl8+XKaNm1aRRDn9LhfmEuZ3g560aiMbUq5NF9jW8BwYnLcATMgxipNbgrA2dErZ73/BwJQbOzGUIyEAAAAAElFTkSuQmCC"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "shutterstock_1655323939",
                                        d: "M8.684,0H21.5a3,3,0,0,1,3,3V30a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V8.942C.017,8.875,8.617.075,8.684,0Z",
                                        fill: "url(#pattern)"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t("download")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: _Const_Route__WEBPACK_IMPORTED_MODULE_1__/* .ROUTE.CENTER */ .l.CENTER,
                    className: "hexagonbtn",
                    passHref: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "21.909",
                                height: "23.305",
                                viewBox: "0 0 19.909 25.305",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Path_4510",
                                        "data-name": "Path 4510",
                                        d: "M9.077,0a9.077,9.077,0,0,1,9.077,9.077c0,5.013-6.149,14.672-8.6,14.672S0,14.09,0,9.077A9.077,9.077,0,0,1,9.077,0Z",
                                        transform: "translate(0.789 0.837)",
                                        fill: "#cccece"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                        id: "Group_828",
                                        "data-name": "Group 828",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                                                id: "Ellipse_1534",
                                                "data-name": "Ellipse 1534",
                                                cx: "3.946",
                                                cy: "3.552",
                                                rx: "3.946",
                                                ry: "3.552",
                                                transform: "translate(5.983 6.362)",
                                                fill: "#24a0b8"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                id: "Group_827",
                                                "data-name": "Group 827",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                                        id: "Group_750",
                                                        "data-name": "Group 750",
                                                        transform: "translate(4.99 4.99)",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            id: "Path_4466",
                                                            "data-name": "Path 4466",
                                                            d: "M1974.855,1449.019a4.965,4.965,0,1,1,4.965-4.964A4.97,4.97,0,0,1,1974.855,1449.019Zm0-8.4a3.436,3.436,0,1,0,3.436,3.436A3.44,3.44,0,0,0,1974.855,1440.619Z",
                                                            transform: "translate(-1969.89 -1439.09)",
                                                            fill: "#575757"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        id: "Path_4511",
                                                        "data-name": "Path 4511",
                                                        d: "M1923.914,1408.469a3.012,3.012,0,0,1-2.5-1.321l-5.966-8.784a.624.624,0,0,1-.04-.065,9.955,9.955,0,1,1,17,0,.683.683,0,0,1-.04.067l-5.966,8.784A3.012,3.012,0,0,1,1923.914,1408.469Zm-7.174-10.93,5.943,8.75a1.488,1.488,0,0,0,2.461,0l5.941-8.748.005-.008a8.426,8.426,0,1,0-14.354,0Z",
                                                        transform: "translate(-1913.959 -1383.163)",
                                                        fill: "#575757"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t("find_center")
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().memo(Scroller));


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "reportWebVitals": () => (/* binding */ reportWebVitals)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component_Common_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3586);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8985);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Component_Common_Layout__WEBPACK_IMPORTED_MODULE_4__, _redux_store__WEBPACK_IMPORTED_MODULE_5__]);
([_Component_Common_Layout__WEBPACK_IMPORTED_MODULE_4__, _redux_store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const store = (0,_redux_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
const App = ({ Component , pageProps  })=>{
    const [initialRenderComplete, setInitialRenderComplete] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        setInitialRenderComplete(true);
    }, []);
    if (!initialRenderComplete) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__.DefaultSeo, {
                title: "Best Pathology Labs India | Diagnostic Centre | Blood Testing Home Collection - Oncquest Labs",
                description: "India's Super Specialized Laboratories Network | Oncquest Laboratories is the best/leading pathology labs and diagnostics centre in India. We provide Blood test, Cancer testing, top Diagnostic Centre for Health check-up services at home in Delhi NCR, India. Blood testing sample collection is also available at home. Oncquest Labs is easy to use and convenient for patients to check their blood test report online.",
                openGraph: {
                    title: "Best Pathology Labs India | Diagnostic Centre | Blood Testing Home Collection - Oncquest Labs",
                    description: "India's Super Specialized Laboratories Network | Oncquest Laboratories is the best/leading pathology labs and diagnostics centre in India. We provide Blood test, Cancer testing, top Diagnostic Centre for Health check-up services at home in Delhi NCR, India. Blood testing sample collection is also available at home. Oncquest Labs is easy to use and convenient for patients to check their blood test report online.",
                    type: "website",
                    locale: "en_IE",
                    url: "https://www.url.ie/",
                    siteName: "SiteName"
                },
                twitter: {
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image"
                },
                additionalMetaTags: [
                    {
                        property: "keywords",
                        content: "Pathology labs,best pathology labs,top diagnostic centre,pathology labs in delhi ncr,diagnostic labs in delhi ncr,blood test collection at home,cancer testing in delhi ncr,oncquest"
                    }
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_intl__WEBPACK_IMPORTED_MODULE_8__.NextIntlClientProvider, {
                messages: pageProps.messages,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
                    store: store,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "main-wrapper",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Common_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            ...pageProps,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            })
        ]
    });
};
function reportWebVitals(metric) {
/* console.log(metric); */ }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.appWithTranslation)(App));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_e": () => (/* binding */ getFacilityResponse),
/* harmony export */   "bT": () => (/* binding */ getBySlugResponse),
/* harmony export */   "c$": () => (/* binding */ getPgOptionResponse),
/* harmony export */   "gA": () => (/* binding */ getRelatedCentreResponse),
/* harmony export */   "uC": () => (/* binding */ nearByCenterResponse),
/* harmony export */   "yO": () => (/* binding */ listResponse)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    list: {},
    selected: {},
    nearByCenter: {},
    pgOption: {},
    facility: {},
    relatedCentre: {}
};
const centerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "center",
    initialState,
    reducers: {
        listResponse (state, action) {
            state.list = action.payload;
        },
        getBySlugResponse (state, action) {
            state.selected = action.payload;
        },
        nearByCenterResponse (state, action) {
            state.nearByCenter = action.payload;
        },
        getFacilityResponse (state, action) {
            state.facility = action.payload;
        },
        getPgOptionResponse (state, action) {
            state.pgOption = action.payload;
        },
        getRelatedCentreResponse (state, action) {
            state.relatedCentre = action.payload;
        }
    }
});
const { listResponse , getBySlugResponse , nearByCenterResponse , getFacilityResponse , getPgOptionResponse , getRelatedCentreResponse  } = centerSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (centerSlice.reducer);


/***/ }),

/***/ 7883:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports list, getBySlug, nearByCenter, facility, pgOption, relatedCenter, userEffects */
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5049);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4286);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service__WEBPACK_IMPORTED_MODULE_4__]);
_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function* list(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CenterService.getInstance */ .F.getInstance().list, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getBySlug(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { slug  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CenterService.getInstance */ .F.getInstance().getBySlug, slug);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response?.Result));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* nearByCenter(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CenterService.getInstance */ .F.getInstance().nearByCenter, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .nearByCenterResponse */ .uC)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .nearByCenterResponse */ .uC)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* facility(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CenterService.getInstance */ .F.getInstance().facility, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getFacilityResponse */ ._e)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getFacilityResponse */ ._e)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* pgOption(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CenterService.getInstance */ .F.getInstance().pgOption, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getPgOptionResponse */ .c$)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getPgOptionResponse */ .c$)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* relatedCenter(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CenterService.getInstance */ .F.getInstance().getRelatedCentre, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getRelatedCentreResponse */ .gA)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* userEffects() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .listCenterAction.type */ .e.type, list);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .getCenterBySlugAction.type */ .zZ.type, getBySlug);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .getNearByCenterAction.type */ .DS.type, nearByCenter);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .getFacilityAction.type */ .ES.type, facility);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .getPgOptionAction.type */ .LH.type, pgOption);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .getRelatedCentreAction.type */ .z.type, relatedCenter);
}
const centerSagas = [
    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(userEffects)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (centerSagas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ CenterService)
/* harmony export */ });
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api__WEBPACK_IMPORTED_MODULE_0__]);
_common_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class CenterService {
    constructor(){
        this.list = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.centerList */ .R9.centerList, data);
        };
        this.getBySlug = async (slug)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.centerBySlug */ .R9.centerBySlug}/${slug}`, {});
        };
        this.nearByCenter = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.nearByCenter */ .R9.nearByCenter, data);
        };
        this.facility = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.facilities */ .R9.facilities, data);
        };
        this.pgOption = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.pgoptions */ .R9.pgoptions, data);
        };
        this.getRelatedCentre = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.centerList */ .R9.centerList, data);
        };
    }
    static getInstance() {
        if (!CenterService.instance) {
            CenterService.instance = new CenterService();
        }
        return CenterService.instance;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I6": () => (/* binding */ verifyOtpResponse),
/* harmony export */   "S3": () => (/* binding */ otpFailResponse),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dC": () => (/* binding */ sendOtpResponse),
/* harmony export */   "ux": () => (/* binding */ bookingResponse),
/* harmony export */   "vh": () => (/* binding */ slotResponse)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    sendOtp: {},
    verifyOtp: {},
    failOtp: false,
    slot: {},
    booking: {}
};
const checkoutSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "checkout",
    initialState,
    reducers: {
        sendOtpResponse (state, action) {
            state.sendOtp = action.payload;
        },
        verifyOtpResponse (state, action) {
            state.verifyOtp = action.payload;
        },
        slotResponse (state, action) {
            state.slot = action.payload;
        },
        bookingResponse (state, action) {
            state.booking = action.payload;
        },
        otpFailResponse (state, action) {
            state.failOtp = action.payload;
        }
    }
});
const { sendOtpResponse , verifyOtpResponse , slotResponse , bookingResponse , otpFailResponse  } = checkoutSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkoutSlice.reducer);


/***/ }),

/***/ 5375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports sendOtp, verifyOtp, slot, createBooking, userEffects */
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7598);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9470);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7998);
/* harmony import */ var _Const_Route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service__WEBPACK_IMPORTED_MODULE_4__]);
_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function* sendOtp(data) {
    try {
        /* yield put(loader(true)); */ let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CheckoutService.getInstance */ .Z.getInstance().sendOtp, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .sendOtpResponse */ .dC)(response?.Result));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .otpFailResponse */ .S3)(false));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
    /* yield put(loader(false)); */ } catch (err) {
        /* yield put(loader(false)); */ yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* verifyOtp(data) {
    try {
        /* yield put(loader(true)); */ let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CheckoutService.getInstance */ .Z.getInstance().verifyOtp, Request);
        let response = res;
        if (response?.Success === "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .verifyOtpResponse */ .I6)(response?.Result));
            yield localStorage.setItem("oqu", JSON.stringify(response?.Result?.UserDetails || {}));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .otpFailResponse */ .S3)(false));
        } else if (response?.Success === "False") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .otpFailResponse */ .S3)(true));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: "Otp not match",
                type: "error"
            }));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .otpFailResponse */ .S3)(true));
        }
    /* yield put(loader(false)); */ } catch (err) {
        /* yield put(loader(false)); */ yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* slot(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CheckoutService.getInstance */ .Z.getInstance().slot, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .slotResponse */ .vh)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* createBooking(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .CheckoutService.getInstance */ .Z.getInstance().createBooking, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .bookingResponse */ .ux)(response?.Result));
            localStorage.removeItem("CartData");
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.THANKYOU */ .l.THANKYOU);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
        } else {
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.CHECKOUT */ .l.CHECKOUT);
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* userEffects() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .sendOtpAction.type */ .rk.type, sendOtp);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .verifyOtpAction.type */ .ul.type, verifyOtp);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .availableSlotAction.type */ .fb.type, slot);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .createBookingAction.type */ .Qo.type, createBooking);
}
const checkoutSagas = [
    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(userEffects)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkoutSagas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CheckoutService)
/* harmony export */ });
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api__WEBPACK_IMPORTED_MODULE_0__]);
_common_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class CheckoutService {
    constructor(){
        this.sendOtp = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.sendOtp */ .R9.sendOtp, data);
        };
        this.verifyOtp = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.verifyOtp */ .R9.verifyOtp, data);
        };
        this.slot = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.slot */ .R9.slot, data);
        };
        this.createBooking = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.createBooking */ .R9.createBooking, data);
        };
    }
    static getInstance() {
        if (!CheckoutService.instance) {
            CheckoutService.instance = new CheckoutService();
        }
        return CheckoutService.instance;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Am": () => (/* binding */ toast),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_m": () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    loader: false,
    toast: null
};
const commonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "common",
    initialState,
    reducers: {
        loader (state, action) {
            state.loader = action.payload;
        },
        toast (state, action) {
            state.toast = action.payload;
        }
    }
});
const { loader , toast  } = commonSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commonSlice.reducer);


/***/ }),

/***/ 3639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ih": () => (/* binding */ testimonialResponse),
/* harmony export */   "LO": () => (/* binding */ pressReleaseBySlugResponse),
/* harmony export */   "Mi": () => (/* binding */ cmeBySlugResponse),
/* harmony export */   "OE": () => (/* binding */ jobListResponse),
/* harmony export */   "Oe": () => (/* binding */ cmeResponse),
/* harmony export */   "PT": () => (/* binding */ seoDetailResponse),
/* harmony export */   "TU": () => (/* binding */ cityResponse),
/* harmony export */   "U9": () => (/* binding */ jobApplyResponse),
/* harmony export */   "VE": () => (/* binding */ generalDetailResponse),
/* harmony export */   "ZK": () => (/* binding */ pressReleaseResponse),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b6": () => (/* binding */ stateResponse),
/* harmony export */   "bj": () => (/* binding */ setselectedCityResponse),
/* harmony export */   "fA": () => (/* binding */ dashboardResponse),
/* harmony export */   "iN": () => (/* binding */ newsAndUpdateResponse),
/* harmony export */   "mP": () => (/* binding */ StateCityResponse),
/* harmony export */   "wA": () => (/* binding */ faqResponse),
/* harmony export */   "z1": () => (/* binding */ newsAndEventBySlugResponse)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    selectedCity: typeof localStorage !== "undefined" && localStorage.getItem("oq:city") || "",
    dashboardData: {},
    testimonial: {},
    city: typeof localStorage !== "undefined" && JSON.parse(localStorage.getItem("oq:cityData") || "[]"),
    stateWiseCity: [],
    state: [],
    generalDetails: {},
    newsAndUpdate: {},
    pressRelease: {},
    cme: {},
    cmeDetails: {},
    selectnewsAndEvent: {},
    selectPress: {},
    faq: {},
    seoDetail: {},
    jobList: {},
    jobApply: {}
};
const dashboardSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "dashboard",
    initialState,
    reducers: {
        setselectedCityResponse (state, action) {
            state.selectedCity = action.payload;
        },
        dashboardResponse (state, action) {
            state.dashboardData = action.payload;
        },
        testimonialResponse (state, action) {
            state.testimonial = action.payload;
        },
        stateResponse (state, action) {
            state.state = action.payload;
        },
        StateCityResponse (state, action) {
            state.stateWiseCity = action.payload;
        },
        cityResponse (state, action) {
            state.city = action.payload;
        },
        generalDetailResponse (state, action) {
            state.generalDetails = action.payload;
        },
        cmeResponse (state, action) {
            state.cme = action.payload;
        },
        cmeBySlugResponse (state, action) {
            state.cmeDetails = action.payload;
        },
        newsAndUpdateResponse (state, action) {
            state.newsAndUpdate = action.payload;
        },
        pressReleaseResponse (state, action) {
            state.pressRelease = action.payload;
        },
        newsAndEventBySlugResponse (state, action) {
            state.selectnewsAndEvent = action.payload;
        },
        pressReleaseBySlugResponse (state, action) {
            state.selectPress = action.payload;
        },
        faqResponse (state, action) {
            state.faq = action.payload;
        },
        seoDetailResponse (state, action) {
            state.seoDetail = action.payload;
        },
        jobListResponse (state, action) {
            state.jobList = action.payload;
        },
        jobApplyResponse (state, action) {
            state.jobApply = action.payload;
        }
    }
});
const { setselectedCityResponse , dashboardResponse , testimonialResponse , stateResponse , cityResponse , StateCityResponse , generalDetailResponse , cmeResponse , cmeBySlugResponse , newsAndUpdateResponse , pressReleaseResponse , newsAndEventBySlugResponse , pressReleaseBySlugResponse , faqResponse , seoDetailResponse , jobListResponse , jobApplyResponse  } = dashboardSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboardSlice.reducer);


/***/ }),

/***/ 5044:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports getDashboard, getTestimonial, getState, getCity, generalDetail, cmeList, cmeBySlug, newsAndUpdate, pressRealease, newsAndEventBySlug, pressRealeaseBySlug, getFaq, seoDetail, jobList, jobApply, newsletter, userEffects */
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5456);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3639);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2677);
/* harmony import */ var _Const_Route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service__WEBPACK_IMPORTED_MODULE_4__]);
_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function* getDashboard(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().getDashboard, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .dashboardResponse */ .fA)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .dashboardResponse */ .fA)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getTestimonial(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().getTestimonial, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .testimonialResponse */ .Ih)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .testimonialResponse */ .Ih)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getState(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().getState, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .stateResponse */ .b6)(response?.Result?.States));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .stateResponse */ .b6)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getCity(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().getCity, listRequest);
        let response = res;
        if (listRequest?.id) {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .StateCityResponse */ .mP)(response?.Result?.Cities));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .cityResponse */ .TU)(response?.Result?.Cities));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .cityResponse */ .TU)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* generalDetail(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().generalDetail, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .generalDetailResponse */ .VE)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .generalDetailResponse */ .VE)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* cmeList(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().cmeList, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .cmeResponse */ .Oe)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .cmeResponse */ .Oe)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* cmeBySlug(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { slug  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().cmeBySlug, slug);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .cmeBySlugResponse */ .Mi)(response?.Result));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .cmeBySlugResponse */ .Mi)(response));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .cmeBySlugResponse */ .Mi)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* newsAndUpdate(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().newsAndUpdate, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .newsAndUpdateResponse */ .iN)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .newsAndUpdateResponse */ .iN)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* pressRealease(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().pressRealease, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .pressReleaseResponse */ .ZK)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .pressReleaseResponse */ .ZK)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* newsAndEventBySlug(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { slug , type  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().newsAndEventBySlug, slug);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .newsAndEventBySlugResponse */ .z1)(response?.Result));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .newsAndEventBySlugResponse */ .z1)(response));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .newsAndEventBySlugResponse */ .z1)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* pressRealeaseBySlug(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { slug , type  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().pressRealeaseBySlug, slug);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .pressReleaseBySlugResponse */ .LO)(response?.Result));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .pressReleaseBySlugResponse */ .LO)(response));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .pressReleaseBySlugResponse */ .LO)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getFaq(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().faq, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .faqResponse */ .wA)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .faqResponse */ .wA)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* seoDetail(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().seoDetail, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .seoDetailResponse */ .PT)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* jobList(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().jobList, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .jobListResponse */ .OE)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* jobApply(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().jobApply, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .jobApplyResponse */ .U9)(response?.Result));
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.THANKYOU */ .l.THANKYOU);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: "You Applied Successfully",
                type: "success"
            }));
        } else {
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.CAREER */ .l.CAREER);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* newsletter(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DashboardService.getInstance */ .s.getInstance().newsletter, Request);
        let response = res;
        /* yield put(jobApplyResponse(response?.Result)); */ yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: response?.Message,
            type: "success"
        }));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* userEffects() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getDashboardAction.type, getDashboard);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getTestimonialAction.type, getTestimonial);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getStateAction.type, getState);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getCityAction.type, getCity);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.generalDetailAction.type, generalDetail);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.cmeListAction.type, cmeList);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.newsAndUpdateAction.type, newsAndUpdate);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.pressReleaseAction.type, pressRealease);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.newsandEventBySlugAction.type, newsAndEventBySlug);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.pressReleaseBySlugAction.type, pressRealeaseBySlug);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getFaqAction.type, getFaq);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.cmeBySlugAction.type, cmeBySlug);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.seoDetailAction.type, seoDetail);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.jobListAction.type, jobList);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.jobApplyAction.type, jobApply);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.newsletterAction.type, newsletter);
}
const dashboardSagas = [
    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(userEffects)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboardSagas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api__WEBPACK_IMPORTED_MODULE_0__]);
_common_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class DashboardService {
    constructor(){
        this.getDashboard = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.dashboard */ .R9.dashboard);
        };
        this.getTestimonial = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.testimonials */ .R9.testimonials, data);
        };
        this.getState = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.state */ .R9.state);
        };
        this.getCity = async (data)=>{
            if (data?.id) {
                return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.city */ .R9.city}/${data?.id}`);
            } else {
                return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.city */ .R9.city}`);
            }
        };
        this.generalDetail = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.generalDetails */ .R9.generalDetails);
        };
        this.cmeList = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.cme */ .R9.cme);
        };
        this.cmeBySlug = async (slug)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.cme */ .R9.cme}/${slug}`, {});
        };
        this.newsAndUpdate = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.newsAndUpdate */ .R9.newsAndUpdate);
        };
        this.pressRealease = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.pressRealease */ .R9.pressRealease);
        };
        this.newsAndEventBySlug = async (slug)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.newsAndUpdate */ .R9.newsAndUpdate}/${slug}`, {});
        };
        this.pressRealeaseBySlug = async (slug)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.pressreleaseBySlug */ .R9.pressreleaseBySlug}/${slug}`, {});
        };
        this.faq = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.faq */ .R9.faq, {});
        };
        this.seoDetail = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.seoDetail */ .R9.seoDetail, data);
        };
        this.jobList = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.jobList */ .R9.jobList, data);
        };
        this.jobApply = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.jobApply */ .R9.jobApply, data);
        };
        this.newsletter = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.newsletter */ .R9.newsletter, data);
        };
    }
    static getInstance() {
        if (!DashboardService.instance) {
            DashboardService.instance = new DashboardService();
        }
        return DashboardService.instance;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vk": () => (/* binding */ brochuresListResponse),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bT": () => (/* binding */ getBySlugResponse),
/* harmony export */   "oB": () => (/* binding */ getByIdResponse),
/* harmony export */   "yO": () => (/* binding */ listResponse)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    list: {},
    selected: {},
    brochures: {}
};
const departmentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "department",
    initialState,
    reducers: {
        listResponse (state, action) {
            state.list = action.payload;
        },
        getByIdResponse (state, action) {
            state.selected = action.payload;
        },
        getBySlugResponse (state, action) {
            state.selected = action.payload;
        },
        brochuresListResponse (state, action) {
            state.brochures = action.payload;
        }
    }
});
const { listResponse , getByIdResponse , getBySlugResponse , brochuresListResponse  } = departmentSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (departmentSlice.reducer);


/***/ }),

/***/ 6903:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports list, getById, getBySlug, brochuresList, userEffects */
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1840);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(114);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service__WEBPACK_IMPORTED_MODULE_4__]);
_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function* list(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DepartmentService.getInstance */ .n.getInstance().list, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getById(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { id  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DepartmentService.getInstance */ .n.getInstance().getById, id);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getByIdResponse */ .oB)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getByIdResponse */ .oB)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getBySlug(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { slug  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DepartmentService.getInstance */ .n.getInstance().getBySlug, slug);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response?.Result));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* brochuresList(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DepartmentService.getInstance */ .n.getInstance().brochuresList, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .brochuresListResponse */ .Vk)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .brochuresListResponse */ .Vk)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* userEffects() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.listDepartmentAction.type, list);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getDepartmentByIdAction.type, getById);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getDepartmentBySlugAction.type, getBySlug);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.brochuresListAction.type, brochuresList);
}
const DepartmentSagas = [
    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(userEffects)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DepartmentSagas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ DepartmentService)
/* harmony export */ });
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api__WEBPACK_IMPORTED_MODULE_0__]);
_common_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class DepartmentService {
    constructor(){
        this.list = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.departmentList */ .R9.departmentList, data);
        };
        this.getById = async (id)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.departmentDetails */ .R9.departmentDetails}/${id}`);
        };
        this.getBySlug = async (slug)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.departmentBySlug */ .R9.departmentBySlug}/${slug}`, {});
        };
        this.brochuresList = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.brochures */ .R9.brochures);
        };
    }
    static getInstance() {
        if (!DepartmentService.instance) {
            DepartmentService.instance = new DepartmentService();
        }
        return DepartmentService.instance;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ad": () => (/* binding */ getDetailResponse),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bT": () => (/* binding */ getBySlugResponse),
/* harmony export */   "yO": () => (/* binding */ listResponse)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    list: [],
    selected: {}
};
const doctorSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "doctor",
    initialState,
    reducers: {
        listResponse (state, action) {
            state.list = action.payload;
        },
        getDetailResponse (state, action) {
            state.selected = action.payload;
        },
        getBySlugResponse (state, action) {
            state.selected = action.payload;
        }
    }
});
const { listResponse , getDetailResponse , getBySlugResponse  } = doctorSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doctorSlice.reducer);


/***/ }),

/***/ 668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports list, getDetail, getBySlug, userEffects */
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5415);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4789);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service__WEBPACK_IMPORTED_MODULE_4__]);
_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function* list(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DoctorService.getInstance */ .O.getInstance().list, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getDetail(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload.data;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DoctorService.getInstance */ .O.getInstance().getDetail, payload);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getDetailResponse */ .Ad)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getDetailResponse */ .Ad)({}));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getBySlug(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { slug  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .DoctorService.getInstance */ .O.getInstance().getBySlug, slug);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response?.Result));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* userEffects() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .listDoctorAction.type */ ._N.type, list);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .getDoctorDetailAction.type */ .IX.type, getDetail);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__/* .getDoctorBySlugAction.type */ .VV.type, getBySlug);
}
const doctorSagas = [
    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(userEffects)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doctorSagas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ DoctorService)
/* harmony export */ });
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api__WEBPACK_IMPORTED_MODULE_0__]);
_common_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class DoctorService {
    constructor(){
        this.list = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.doctorList */ .R9.doctorList, data);
        };
        this.getDetail = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.doctorDetails */ .R9.doctorDetails}/${data?.DoctorCode}`);
        };
        this.getBySlug = async (slug)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.doctorBySlug */ .R9.doctorBySlug}/${slug}`);
        };
    }
    static getInstance() {
        if (!DoctorService.instance) {
            DoctorService.instance = new DoctorService();
        }
        return DoctorService.instance;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PD": () => (/* binding */ getAllOfferResponse),
/* harmony export */   "U4": () => (/* binding */ getPackageComponentResponse),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bT": () => (/* binding */ getBySlugResponse),
/* harmony export */   "lj": () => (/* binding */ getAllOfferByIdResponse),
/* harmony export */   "qo": () => (/* binding */ getSubCategoryByIdResponse),
/* harmony export */   "yO": () => (/* binding */ listResponse)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    list: {},
    selected: {},
    subCategory: {},
    offer: {},
    selectedOffer: {},
    packageComponent: {}
};
const packageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "package",
    initialState,
    reducers: {
        listResponse (state, action) {
            state.list = action.payload;
        },
        getBySlugResponse (state, action) {
            state.selected = action.payload;
        },
        getSubCategoryByIdResponse (state, action) {
            state.subCategory = action.payload;
        },
        getAllOfferResponse (state, action) {
            state.offer = action.payload;
        },
        getAllOfferByIdResponse (state, action) {
            state.selectedOffer = action.payload;
        },
        getPackageComponentResponse (state, action) {
            state.packageComponent = action.payload;
        }
    }
});
const { listResponse , getBySlugResponse , getSubCategoryByIdResponse , getAllOfferResponse , getAllOfferByIdResponse , getPackageComponentResponse  } = packageSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (packageSlice.reducer);


/***/ }),

/***/ 1266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports list, getBySlug, getSubCategoryById, getAllOffer, getAllOfferById, getPackageComponent, userEffects */
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4245);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9197);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6816);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service__WEBPACK_IMPORTED_MODULE_4__]);
_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function* list(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .PackageService.getInstance */ .M.getInstance().list, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getBySlug(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { slug  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .PackageService.getInstance */ .M.getInstance().getBySlug, slug);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response?.Result));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getSubCategoryById(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { id  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .PackageService.getInstance */ .M.getInstance().getSubCategoryById, id);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getSubCategoryByIdResponse */ .qo)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getSubCategoryByIdResponse */ .qo)({}));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getAllOffer(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .PackageService.getInstance */ .M.getInstance().getAllOffer, Request);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getAllOfferResponse */ .PD)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getAllOfferResponse */ .PD)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getAllOfferById(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { id  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .PackageService.getInstance */ .M.getInstance().getAllOfferById, id);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getAllOfferByIdResponse */ .lj)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getAllOfferByIdResponse */ .lj)({}));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getPackageComponent(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { id  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .PackageService.getInstance */ .M.getInstance().getPackageComponent, id);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getPackageComponentResponse */ .U4)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* userEffects() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.listPackageAction.type, list);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getPackageBySlugAction.type, getBySlug);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getSubCategoryByIdAction.type, getSubCategoryById);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getAllOfferAction.type, getAllOffer);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getAllOfferByIdAction.type, getAllOfferById);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getPackageComponetAction.type, getPackageComponent);
}
const packageSagas = [
    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(userEffects)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (packageSagas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ PackageService)
/* harmony export */ });
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api__WEBPACK_IMPORTED_MODULE_0__]);
_common_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class PackageService {
    constructor(){
        this.list = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.packages */ .R9.packages, data);
        };
        this.getBySlug = async (slug)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.packageBySlug */ .R9.packageBySlug}/${slug}`, {});
        };
        this.getSubCategoryById = async (id)=>{
            if (id) {
                return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.subcategories */ .R9.subcategories}/${id}`);
            }
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.subcategories */ .R9.subcategories}`, {});
        };
        this.getAllOffer = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.allOffer */ .R9.allOffer, {});
        };
        this.getAllOfferById = async (id)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.offerById */ .R9.offerById}/${id}`, {});
        };
        this.getPackageComponent = async (id)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.packageComponent */ .R9.packageComponent}`, {
                TestIds: id
            });
        };
    }
    static getInstance() {
        if (!PackageService.instance) {
            PackageService.instance = new PackageService();
        }
        return PackageService.instance;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createReducer)
/* harmony export */ });
/* unused harmony export rootReducer */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8049);
/* harmony import */ var _department_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(114);
/* harmony import */ var _dashboard_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3639);
/* harmony import */ var _doctor_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4789);
/* harmony import */ var _center_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4286);
/* harmony import */ var _test_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3130);
/* harmony import */ var _package_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9197);
/* harmony import */ var _submit_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1771);
/* harmony import */ var _checkout_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9470);











const reducers = {
    common: _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
    department: _department_reducer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
    dashboard: _dashboard_reducer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    doctor: _doctor_reducer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
    center: _center_reducer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
    test: _test_reducer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,
    package: _package_reducer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,
    submit: _submit_reducer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,
    checkout: _checkout_reducer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP
};
let rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    ...reducers
});
function createReducer(injectedReducers = {}) {
    rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
        ...reducers,
        ...injectedReducers
    });
    return rootReducer;
}


/***/ }),

/***/ 5344:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3316);
/* harmony import */ var _department_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6903);
/* harmony import */ var _dashboard_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5044);
/* harmony import */ var _doctor_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(668);
/* harmony import */ var _center_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7883);
/* harmony import */ var _test_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9865);
/* harmony import */ var _package_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1266);
/* harmony import */ var _submit_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7865);
/* harmony import */ var _checkout_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_saga__WEBPACK_IMPORTED_MODULE_1__, _department_saga__WEBPACK_IMPORTED_MODULE_2__, _dashboard_saga__WEBPACK_IMPORTED_MODULE_3__, _doctor_saga__WEBPACK_IMPORTED_MODULE_4__, _center_saga__WEBPACK_IMPORTED_MODULE_5__, _test_saga__WEBPACK_IMPORTED_MODULE_6__, _package_saga__WEBPACK_IMPORTED_MODULE_7__, _submit_saga__WEBPACK_IMPORTED_MODULE_8__, _checkout_saga__WEBPACK_IMPORTED_MODULE_9__]);
([_user_saga__WEBPACK_IMPORTED_MODULE_1__, _department_saga__WEBPACK_IMPORTED_MODULE_2__, _dashboard_saga__WEBPACK_IMPORTED_MODULE_3__, _doctor_saga__WEBPACK_IMPORTED_MODULE_4__, _center_saga__WEBPACK_IMPORTED_MODULE_5__, _test_saga__WEBPACK_IMPORTED_MODULE_6__, _package_saga__WEBPACK_IMPORTED_MODULE_7__, _submit_saga__WEBPACK_IMPORTED_MODULE_8__, _checkout_saga__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function* rootSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        ..._user_saga__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        ..._department_saga__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        ..._dashboard_saga__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        ..._doctor_saga__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
        ..._center_saga__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
        ..._test_saga__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
        ..._package_saga__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,
        ..._submit_saga__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,
        ..._checkout_saga__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5998);
/* harmony import */ var redux_injectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7299);
/* harmony import */ var redux_injectors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_injectors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8870);
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5344);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_saga__WEBPACK_IMPORTED_MODULE_1__, _saga__WEBPACK_IMPORTED_MODULE_4__]);
([redux_saga__WEBPACK_IMPORTED_MODULE_1__, _saga__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
const middleware = [
    sagaMiddleware
];
const { run: runSaga  } = sagaMiddleware;
const enhancers = [
    (0,redux_injectors__WEBPACK_IMPORTED_MODULE_2__.createInjectorsEnhancer)({
        createReducer: _reducer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        runSaga
    })
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((preloadedState = {})=>{
    const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
        reducer: (0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(),
        middleware,
        preloadedState: preloadedState,
        enhancers
    });
    sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    return store;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NE": () => (/* binding */ submitPartnerResponse),
/* harmony export */   "TL": () => (/* binding */ uploadAttachmentResponse),
/* harmony export */   "TR": () => (/* binding */ bookingEnquiryResponse),
/* harmony export */   "Z4": () => (/* binding */ submitQueryResponse),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "d4": () => (/* binding */ uploadPrecriptionResponse),
/* harmony export */   "wu": () => (/* binding */ homeCollectionFormResponse)
/* harmony export */ });
/* unused harmony exports submitEnquiryResponse, prevMembershipFormResponse */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    uploadAttachment: {},
    submitQuery: {},
    submitEnquiry: {},
    submitPartner: {},
    bookingEnquiry: {},
    uploadPrecription: {},
    homeCollectionForm: {},
    prevMembershipForm: {}
};
const submitSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "submit",
    initialState,
    reducers: {
        uploadAttachmentResponse (state, action) {
            state.uploadAttachment = action.payload;
        },
        submitQueryResponse (state, action) {
            state.submitQuery = action.payload;
        },
        submitEnquiryResponse (state, action) {
            state.submitEnquiry = action.payload;
        },
        submitPartnerResponse (state, action) {
            state.submitPartner = action.payload;
        },
        bookingEnquiryResponse (state, action) {
            state.bookingEnquiry = action.payload;
        },
        uploadPrecriptionResponse (state, action) {
            state.uploadPrecription = action.payload;
        },
        homeCollectionFormResponse (state, action) {
            state.homeCollectionForm = action.payload;
        },
        prevMembershipFormResponse (state, action) {
            state.prevMembershipForm = action.payload;
        }
    }
});
const { uploadAttachmentResponse , submitQueryResponse , submitPartnerResponse , submitEnquiryResponse , bookingEnquiryResponse , uploadPrecriptionResponse , homeCollectionFormResponse , prevMembershipFormResponse  } = submitSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitSlice.reducer);


/***/ }),

/***/ 7865:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports uploadAttachment, blankAttachment, submitQuery, submitEnquiry, submitPartner, bookingEnquiry, uploadPrecritiption, homeCollectionForm, prevMembershipForm, userEffects */
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4666);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1771);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7274);
/* harmony import */ var _Const_Route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service__WEBPACK_IMPORTED_MODULE_4__]);
_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function* uploadAttachment(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .SubmitService.getInstance */ .h.getInstance().uploadAttachment, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .uploadAttachmentResponse */ .TL)(response?.Result));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: "Uploaded Successfully",
                type: "success"
            }));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* blankAttachment(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .uploadAttachmentResponse */ .TL)({}));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .uploadAttachmentResponse */ .TL)({}));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* submitQuery(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .SubmitService.getInstance */ .h.getInstance().submitQuery, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .submitQueryResponse */ .Z4)(response?.Result));
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.THANKYOU */ .l.THANKYOU);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* submitEnquiry(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .SubmitService.getInstance */ .h.getInstance().submitEnquiry, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .submitQueryResponse */ .Z4)(response?.Result));
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.THANKYOU */ .l.THANKYOU);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* submitPartner(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .SubmitService.getInstance */ .h.getInstance().submitPartner, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .submitPartnerResponse */ .NE)(response?.Result));
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.THANKYOU */ .l.THANKYOU);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* bookingEnquiry(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history , slug  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .SubmitService.getInstance */ .h.getInstance().bookingEnquiry, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .bookingEnquiryResponse */ .TR)(response?.Result));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .uploadPrecriptionResponse */ .d4)({}));
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.THANKYOU */ .l.THANKYOU);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
        } else {
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.CENTERDETAILS */ .l.CENTERDETAILS + "/" + slug);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* uploadPrecritiption(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .SubmitService.getInstance */ .h.getInstance().uploadPrecritiption, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .uploadPrecriptionResponse */ .d4)(response?.Result));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .uploadPrecriptionResponse */ .d4)({}));
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.THANKYOU */ .l.THANKYOU);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
        } else {
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.UPLOADPRESCRIPTION */ .l.UPLOADPRESCRIPTION);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* homeCollectionForm(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .SubmitService.getInstance */ .h.getInstance().homeCollectionForm, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .homeCollectionFormResponse */ .wu)(response?.Result));
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.THANKYOU */ .l.THANKYOU);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
        } else {
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.HOMECOLLECTION */ .l.HOMECOLLECTION);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* prevMembershipForm(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .SubmitService.getInstance */ .h.getInstance().prevMembershipForm, Request);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .submitQueryResponse */ .Z4)(response?.Result));
            history.push(_Const_Route__WEBPACK_IMPORTED_MODULE_5__/* .ROUTE.THANKYOU */ .l.THANKYOU);
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "success"
            }));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* userEffects() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.uploadAttachmentAction.type, uploadAttachment);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.blankAttachmentAction.type, blankAttachment);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.submitQueryAction.type, submitQuery);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.submitEnquiryAction.type, submitEnquiry);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.submitPartnerAction.type, submitPartner);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.bookingEnquiryAction.type, bookingEnquiry);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.uploadPrecriptionAction.type, uploadPrecritiption);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.homeCollectionFormAction.type, homeCollectionForm);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.prevMembershipFormAction.type, prevMembershipForm);
}
const submitSagas = [
    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(userEffects)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitSagas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ SubmitService)
/* harmony export */ });
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api__WEBPACK_IMPORTED_MODULE_0__]);
_common_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class SubmitService {
    constructor(){
        this.uploadAttachment = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.uploadAttachment */ .R9.uploadAttachment, data);
        };
        this.submitQuery = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.querySubmit */ .R9.querySubmit, data);
        };
        this.submitEnquiry = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.enquirySubmit */ .R9.enquirySubmit, data);
        };
        this.submitPartner = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.enquiryPartner */ .R9.enquiryPartner, data);
        };
        this.bookingEnquiry = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.bookingEnquiry */ .R9.bookingEnquiry, data);
        };
        this.uploadPrecritiption = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.uploadPrecription */ .R9.uploadPrecription, data);
        };
        this.homeCollectionForm = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.collectionForm */ .R9.collectionForm, data);
        };
        this.prevMembershipForm = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.membershipForm */ .R9.membershipForm, data);
        };
    }
    static getInstance() {
        if (!SubmitService.instance) {
            SubmitService.instance = new SubmitService();
        }
        return SubmitService.instance;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bT": () => (/* binding */ getBySlugResponse),
/* harmony export */   "oB": () => (/* binding */ getByIdResponse),
/* harmony export */   "yO": () => (/* binding */ listResponse)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    list: {},
    selected: {}
};
const testSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "test",
    initialState,
    reducers: {
        listResponse (state, action) {
            state.list = action.payload;
        },
        getByIdResponse (state, action) {
            state.selected = action.payload;
        },
        getBySlugResponse (state, action) {
            state.selected = action.payload;
        }
    }
});
const { listResponse , getByIdResponse , getBySlugResponse  } = testSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testSlice.reducer);


/***/ }),

/***/ 9865:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports list, getById, getBySlug, userEffects */
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4416);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3130);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service__WEBPACK_IMPORTED_MODULE_4__]);
_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function* list(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { listRequest  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .TestService.getInstance */ .q.getInstance().list, listRequest);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .listResponse */ .yO)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getById(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { id  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .TestService.getInstance */ .q.getInstance().getById, id);
        let response = res;
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getByIdResponse */ .oB)(response?.Result));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getByIdResponse */ .oB)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* getBySlug(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { slug  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .TestService.getInstance */ .q.getInstance().getBySlug, slug);
        let response = res;
        if (response?.Success == "True") {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response?.Result));
        } else {
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(response));
            yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
                message: response?.Message,
                type: "error"
            }));
        }
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .getBySlugResponse */ .bT)(err));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* userEffects() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.listTestAction.type, list);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getTestByIdAction.type, getById);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getTestBySlugAction.type, getBySlug);
}
const testSagas = [
    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(userEffects)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testSagas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ TestService)
/* harmony export */ });
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api__WEBPACK_IMPORTED_MODULE_0__]);
_common_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class TestService {
    constructor(){
        this.list = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.tests */ .R9.tests, data);
        };
        this.getById = async (id)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.testById */ .R9.testById}/${id}`);
        };
        this.getBySlug = async (slug)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.testBySlug */ .R9.testBySlug}/${slug}`, {});
        };
    }
    static getInstance() {
        if (!TestService.instance) {
            TestService.instance = new TestService();
        }
        return TestService.instance;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OT": () => (/* binding */ logoutResponse),
/* harmony export */   "RZ": () => (/* binding */ vendorRegisterResponse),
/* harmony export */   "SC": () => (/* binding */ loginResponse),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nC": () => (/* binding */ partnerRegisterResponse)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
    loginUser: typeof localStorage !== "undefined" && JSON.parse(localStorage.getItem("oqu") || "{}"),
    isLoggedIn: typeof localStorage !== "undefined" && !!localStorage.getItem("oqu"),
    token: typeof localStorage !== "undefined" && localStorage.getItem("oqut")
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        loginResponse (state, action) {
            state.loginUser = action.payload;
            state.isLoggedIn = true;
        },
        vendorRegisterResponse (state, action) {},
        partnerRegisterResponse (state, action) {},
        logoutResponse (state, action) {
            state.loginUser = action.payload;
            state.isLoggedIn = false;
        }
    }
});
const { loginResponse , logoutResponse , vendorRegisterResponse , partnerRegisterResponse  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 3316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports getApiToken, login, vendorRegister, partnerRegister, logout, userEffects */
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3933);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6502);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8049);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7311);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service__WEBPACK_IMPORTED_MODULE_4__]);
_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function* getApiToken(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { loginRequest , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .UserService.getInstance */ .K.getInstance().getApitoken, loginRequest);
        let response = res;
        localStorage.setItem("oqut", response?.Result?.Token);
        //   yield put(loginResponse(response.user));
        history.push("/");
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* login(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { loginRequest , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .UserService.getInstance */ .K.getInstance().login, loginRequest);
        let response = res;
        localStorage.setItem("oqu", JSON.stringify(response.user));
        localStorage.setItem("oqut", response.token);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .loginResponse */ .SC)(response.user));
        history.push("/");
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* vendorRegister(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .UserService.getInstance */ .K.getInstance().vendorRegister, Request);
        let response = res;
        localStorage.setItem("oqu", JSON.stringify(response.user));
        localStorage.setItem("oqut", response.token);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .vendorRegisterResponse */ .RZ)(response.user));
        history.push("/");
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* partnerRegister(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { Request , history  } = payload;
        let res = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_service__WEBPACK_IMPORTED_MODULE_4__/* .UserService.getInstance */ .K.getInstance().partnerRegister, Request);
        let response = res;
        localStorage.setItem("oqu", JSON.stringify(response.user));
        localStorage.setItem("oqut", response.token);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .partnerRegisterResponse */ .nC)(response.user));
        history.push("/");
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* logout(data) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(true));
        let payload = data.payload;
        let { history  } = payload;
        yield localStorage.removeItem("oqu");
        yield localStorage.removeItem("onut");
        yield localStorage.removeItem("oq:city");
        yield localStorage.removeItem("UserLatLng");
        yield localStorage.removeItem("oq:cityData");
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_reducer__WEBPACK_IMPORTED_MODULE_3__/* .logoutResponse */ .OT)({}));
        /* history.push("/"); */ window.location.href = "/";
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: "Logout Successfully",
            type: "success"
        }));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .loader */ ._m)(false));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_common_common_reducer__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am)({
            message: err.message,
            type: "error"
        }));
    }
}
function* userEffects() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.getApiTokenAction.type, getApiToken);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.loginAction.type, login);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.registorVendorAction.type, vendorRegister);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.registorPartnerAction.type, partnerRegister);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_action__WEBPACK_IMPORTED_MODULE_2__.logoutAction.type, logout);
}
const userSagas = [
    (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(userEffects)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSagas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7311:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_api__WEBPACK_IMPORTED_MODULE_0__]);
_common_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class UserService {
    constructor(){
        this.getApitoken = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.apiGetToken */ .R9.apiGetToken);
        };
        this.login = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.login */ .R9.login, data);
        };
        this.vendorRegister = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.login */ .R9.login, data);
        };
        this.partnerRegister = async (data)=>{
            return await _common_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(_common_url__WEBPACK_IMPORTED_MODULE_1__/* .Url.login */ .R9.login, data);
        };
    }
    static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 7299:
/***/ ((module) => {

"use strict";
module.exports = require("redux-injectors");

/***/ }),

/***/ 6477:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ 5998:
/***/ ((module) => {

"use strict";
module.exports = import("redux-saga");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,993,811], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();