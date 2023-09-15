"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Home_BookTest)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__(503);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/Assets/hooks/windowSize.tsx

function useWindowDimensions() {
    const hasWindow = "undefined" !== "undefined";
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height
        };
    }
    const [windowDimensions, setWindowDimensions] = (0,external_react_.useState)(getWindowDimensions());
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }
    (0,external_react_.useEffect)(()=>{
        if (hasWindow) {
            window.addEventListener("resize", handleResize);
            return ()=>window.removeEventListener("resize", handleResize);
        }
    }, [
        hasWindow
    ]);
    return windowDimensions;
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/Utils/index.ts
var Utils = __webpack_require__(701);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/Const/Route.ts
var Route = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/Component/Common/Loader/SectionLoader.tsx
var SectionLoader = __webpack_require__(3664);
;// CONCATENATED MODULE: ./src/Component/Feature/Home/BookTest.tsx











function BookTest(props) {
    const t = (0,external_next_intl_.useTranslations)();
    const { height , width  } = useWindowDimensions();
    const { category  } = props;
    const history = (0,router_.useRouter)();
    const [tab, settab] = (0,external_react_.useState)("");
    const dashboard = (0,external_react_redux_.useSelector)((state)=>state.dashboard.dashboardData || null);
    const hendleTab = (e, value)=>{
        e.preventDefault();
        settab(value);
    };
    (0,external_react_.useEffect)(()=>{
        if (category && category.length > 0) {
            settab(category && category[0]?.Id);
        }
        return ()=>{};
    }, [
        category
    ]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "sub-section bg-grey home-services",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-2"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-8",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "headingmains text-center pb-3",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-center pl-2 pr-2",
                                        children: t("book_a_test_content")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-2"
                            })
                        ]
                    }),
                    dashboard && Object.keys(dashboard)?.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "nav nav-tabs",
                                children: category && category?.length > 0 && category?.map((item, index)=>{
                                    return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        onClick: (e)=>hendleTab(e, item?.Id),
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: tab == item?.Id ? "active" : "",
                                            children: `${t("by_term")} ${t(item?.CategoryName)}`
                                        })
                                    }, index);
                                })
                            }),
                            category && category.length > 0 && category?.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tab-content",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        id: item?.CategoryName,
                                        className: tab == item?.Id ? "tab-pane fade in active show" : "tab-pane fade in",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                width > 767 ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                    children: item?.SubCategories && item?.SubCategories?.length > 0 && item?.SubCategories?.map((sub, i)=>i < 7 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-sm-12 col-md-6 col-lg-3",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "h-services rem-marBokT",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "infobox_wrapper homeSubcategoryWrap",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "infobox_icon_container",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                className: "scale",
                                                                                src: sub?.CategoryIcon && sub?.CategoryIcon,
                                                                                onError: (e)=>(0,Utils/* ImgPlaceHolder */.IC)(e, "/assets/img/s1.png"),
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                            className: "infobox_title",
                                                                            children: t(sub?.CategoryName)
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "infobox_content",
                                                                            style: {
                                                                                height: "90px",
                                                                                overflowY: "hidden"
                                                                            },
                                                                            children: sub?.ShortDescription
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            className: "infobox_button button-read-more",
                                                                            passHref: true,
                                                                            href: {
                                                                                pathname: Route/* ROUTE.BOOKATEST */.l.BOOKATEST,
                                                                                query: {
                                                                                    tabs: "tests",
                                                                                    categoryId: sub.ParentId,
                                                                                    subCategoryId: sub.Id
                                                                                }
                                                                            },
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                src: "../assets/img/arrow-read.svg",
                                                                                className: "scale"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }, i))
                                                }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-sm-12 col-md-6 col-lg-3 bg_lab_slide",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
                                                            ...settings,
                                                            children: item?.SubCategories && item?.SubCategories?.length > 0 && item?.SubCategories?.map((sub, i)=>i < 7 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "h-services rem-marBokT",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "infobox_wrapper homeSubcategoryWrap",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "infobox_icon_container",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        className: "scale",
                                                                                        src: sub?.CategoryIcon && sub?.CategoryIcon,
                                                                                        onError: (e)=>(0,Utils/* ImgPlaceHolder */.IC)(e, "/assets/img/s1.png"),
                                                                                        alt: ""
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                                                    className: "infobox_title",
                                                                                    children: [
                                                                                        t(sub?.CategoryName),
                                                                                        " "
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "infobox_content",
                                                                                    style: {
                                                                                        height: "90px",
                                                                                        overflowY: "hidden"
                                                                                    },
                                                                                    children: sub?.ShortDescription
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                    className: "infobox_button button-read-more",
                                                                                    passHref: true,
                                                                                    href: {
                                                                                        pathname: Route/* ROUTE.BOOKATEST */.l.BOOKATEST,
                                                                                        query: {
                                                                                            tabs: "tests",
                                                                                            categoryId: sub.ParentId,
                                                                                            subCategoryId: sub.Id
                                                                                        }
                                                                                    },
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "assets/img/arrow-read.svg",
                                                                                        className: "scale"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                }, i))
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-sm-12 col-md-6 col-lg-3",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "h-servicesbtn",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                            className: "btn explorebtn",
                                                            passHref: true,
                                                            href: {
                                                                pathname: Route/* ROUTE.BOOKATEST */.l.BOOKATEST,
                                                                query: {
                                                                    tabs: "tests",
                                                                    categoryId: tab
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: t("explore_all")
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "41.403",
                                                                    height: "26.331",
                                                                    viewBox: "0 0 41.403 26.331",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        id: "Icon_material-arrow-forward",
                                                                        "data-name": "Icon material-arrow-forward",
                                                                        d: "M16.768,6l-2.32,2.32,9.183,9.2h-35.1v3.291h35.1l-9.183,9.2,2.32,2.32L29.933,19.166Z",
                                                                        transform: "translate(11.47 -6)",
                                                                        fill: "#424242"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, index))
                        ]
                    }) : /*#__PURE__*/ jsx_runtime.jsx(SectionLoader/* default */.Z, {})
                ]
            })
        })
    });
}
/* harmony default export */ const Home_BookTest = (/*#__PURE__*/external_react_default().memo(BookTest));


/***/ }),

/***/ 7191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Const_Route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7993);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(701);
/* harmony import */ var _Component_Common_Loader_SectionLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);









function InnerFitness(props) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__.useTranslations)();
    const { packages , baseUri  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [isShown, setIsShown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const dashboard = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.dashboard.dashboardData || null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "categories section home-fitness",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "headingmains text-center pb-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "right aos-init pb-2",
                            children: t("inner_fitness_package")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center pl-2 pr-2",
                            children: t("inner_fitness_content")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                passHref: true,
                                href: {
                                    pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTE.BOOKATEST */ .l.BOOKATEST,
                                    query: {
                                        tabs: "packages"
                                    }
                                },
                                className: "btn explorebtnfitness",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        t("explore_all"),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "41.403",
                                            height: "26.331",
                                            viewBox: "0 0 41.403 26.331",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                id: "Icon_material-arrow-forward",
                                                "data-name": "Icon material-arrow-forward",
                                                d: "M16.768,6l-2.32,2.32,9.183,9.2h-35.1v3.291h35.1l-9.183,9.2,2.32,2.32L29.933,19.166Z",
                                                transform: "translate(11.47 -6)",
                                                fill: "#424242"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "all-center sub-section pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-12 all-center pb-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "fitness-wraph",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-container flex-container-mob",
                                children: dashboard && Object.keys(dashboard)?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: packages && packages?.length > 0 && packages?.map((item, index)=>{
                                        let img = item?.Banner ? (0,_Utils__WEBPACK_IMPORTED_MODULE_5__/* .ReplaceImgUriByLang */ .Ps)(baseUri) + item?.Banner : `/assets/img/f${index + 1}.png`;
                                        return index < 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                backgroundImage: `url(${img}), url(${baseUri + item?.Banner})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundColor: "#EDF3F8"
                                            },
                                            className: isShown == index + 1 ? `flex-slide fit1 flex-slidehover` : `flex-slide fit1`,
                                            onMouseEnter: ()=>setIsShown(index + 1),
                                            onClick: ()=>router.push(`${_Const_Route__WEBPACK_IMPORTED_MODULE_4__/* .ROUTE.PACKAGEDETAILS */ .l.PACKAGEDETAILS}/${item?.Slug}`),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "flex-title flex-title-home",
                                                children: t(item?.PackageName)
                                            })
                                        }, index);
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Common_Loader_SectionLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnerFitness);


/***/ }),

/***/ 9217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Const_Route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7993);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(701);
/* harmony import */ var _Component_Common_Loader_SectionLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3664);










function OncquestOffer(props) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_4__.useTranslations)();
    const { Offers  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [modalIsOpen, setModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedOffer, setSelectedOffer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const dashboard = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.dashboard.dashboardData || null);
    const setModalIsOpenToTrue = (data)=>{
        setSelectedOffer(data);
        setModalIsOpen(true);
    };
    const setModalIsOpenToFalse = ()=>{
        setModalIsOpen(false);
    };
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            maxWidth: "800px"
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                isOpen: modalIsOpen,
                style: customStyles,
                onRequestClose: ()=>setModalIsOpen(false),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "model-header",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "model-btn pointer",
                            onClick: setModalIsOpenToFalse,
                            children: "x"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "infobox_title text-uppercase",
                                    children: selectedOffer?.CouponTitle
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pl-1",
                                    children: selectedOffer?.ShortDescription && selectedOffer?.ShortDescription.slice(0, 100)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: selectedOffer?.Description ? selectedOffer?.Description.slice(0, 500) : ""
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            passHref: true,
                                            href: {
                                                pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.BOOKATEST */ .l.BOOKATEST,
                                                query: {
                                                    tabs: "tests"
                                                }
                                            },
                                            className: "button--hexagon1",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-file-image-o mr-20",
                                                        "aria-hidden": "true"
                                                    }),
                                                    t("book_now")
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "sub-section h-offers",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "headingmains text-center pb-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "right aos-init pb-2",
                                            children: t("offer")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-center pl-2 pr-2",
                                                        children: t("offer_content")
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-1"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row offer-slider",
                            children: dashboard && Object.keys(dashboard)?.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-sm-12 col-md-6 col-lg-4",
                                        children: Offers && Offers?.length > 0 && Offers?.map((item, i)=>i < 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-off sbg1",
                                                onClick: ()=>setModalIsOpenToTrue(item),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item?.CouponBanner ? (0,_Utils__WEBPACK_IMPORTED_MODULE_8__/* .ReplaceImgUriByLang */ .Ps)(item?.CouponBanner) : "/assets/img/offer0" + (i + 1) + ".png",
                                                        onError: (e)=>(0,_Utils__WEBPACK_IMPORTED_MODULE_8__/* .ImgPlaceHolder */ .IC)(e, item?.CouponBanner || "/assets/img/offer0" + (i + 1) + ".png"),
                                                        className: "scale"
                                                    })
                                                })
                                            }, i))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-sm-12 col-md-6 col-lg-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "btnoffer-d",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.OFFER */ .l.OFFER,
                                                    className: "btn explorebtn",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: t("explore_all")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "41.403",
                                                            height: "26.331",
                                                            viewBox: "0 0 41.403 26.331",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                id: "Icon_material-arrow-forward",
                                                                "data-name": "Icon material-arrow-forward",
                                                                d: "M16.768,6l-2.32,2.32,9.183,9.2h-35.1v3.291h35.1l-9.183,9.2,2.32,2.32L29.933,19.166Z",
                                                                transform: "translate(11.47 -6)",
                                                                fill: "#424242"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            Offers && Offers?.length > 0 && Offers?.map((item, i)=>i >= 2 && i < 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "h-off sbg1",
                                                    onClick: ()=>setModalIsOpenToTrue(item),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item?.CouponBanner ? (0,_Utils__WEBPACK_IMPORTED_MODULE_8__/* .ReplaceImgUriByLang */ .Ps)(item?.CouponBanner) : "/assets/img/offer0" + (i + 1) + ".png",
                                                            onError: (e)=>(0,_Utils__WEBPACK_IMPORTED_MODULE_8__/* .ImgPlaceHolder */ .IC)(e, item?.CouponBanner || "/assets/img/offer0" + (i + 1) + ".png"),
                                                            className: "scale"
                                                        })
                                                    })
                                                }, i))
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-sm-12 col-md-6 col-lg-4",
                                        children: Offers && Offers?.length > 0 && Offers?.map((item, i)=>i >= 4 && i < 6 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-off sbg1",
                                                onClick: ()=>setModalIsOpenToTrue(item),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item?.CouponBanner ? (0,_Utils__WEBPACK_IMPORTED_MODULE_8__/* .ReplaceImgUriByLang */ .Ps)(item?.CouponBanner) : "/assets/img/offer0" + (i + 1) + ".png",
                                                        onError: (e)=>(0,_Utils__WEBPACK_IMPORTED_MODULE_8__/* .ImgPlaceHolder */ .IC)(e, item?.CouponBanner || "/assets/img/offer0" + (i + 1) + ".png"),
                                                        className: "scale"
                                                    })
                                                })
                                            }, i))
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Common_Loader_SectionLoader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OncquestOffer);


/***/ }),

/***/ 5082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Home_Testimonial)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__(503);
;// CONCATENATED MODULE: external "react-player"
const external_react_player_namespaceObject = require("react-player");
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/Const/Route.ts
var Route = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/Component/Common/Loader/SectionLoader.tsx
var SectionLoader = __webpack_require__(3664);
// EXTERNAL MODULE: ./src/Utils/index.ts
var Utils = __webpack_require__(701);
;// CONCATENATED MODULE: ./src/Component/Feature/Home/Testimonial.tsx









function Testimonial(props) {
    const t = (0,external_next_intl_.useTranslations)();
    const { testimonial  } = props;
    const loadingData_New = props?.loadingData || null;
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: testimonial && testimonial?.length == 1 ? 1 : 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "section tesi-wrap tesi-wrap-pb",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row testi-mo",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-5",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "inner-heading",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "headingmains testi-mo-pad",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: t("testimonials")
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-7",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "exploretesti",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: {
                                                pathname: Route/* ROUTE.TESTIMONIAL */.l.TESTIMONIAL,
                                                query: {
                                                    type: 1
                                                }
                                            },
                                            children: t("explore_all")
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-5 col-sm-6",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "inner-heading",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "headingmains",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: t("testimonial_content")
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-7 col-sm-6",
                                    children: loadingData_New && Object.keys(loadingData_New)?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                        children: testimonial && testimonial.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "testi_slider",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
                                                ...settings,
                                                children: testimonial && testimonial?.length > 0 && testimonial?.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-md-12 col-sm-12 col-xs-12 item",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "team_member",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                                                        className: "effect-julia",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            src: item?.ProfileImage ? item?.ProfileImage : item?.Gender && item?.Gender?.toLowerCase() == "female" ? "/assets/img/testi_female.png" : "/assets/img/testi_male.png",
                                                                            onError: (e)=>(0,Utils/* ImgPlaceHolder */.IC)(e, item?.Gender && item?.Gender?.toLowerCase() == "female" ? "/assets/img/testi_female.png" : "/assets/img/testi_male.png"),
                                                                            alt: ""
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "member_name",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                className: "truncate",
                                                                                dangerouslySetInnerHTML: {
                                                                                    __html: item?.Content && item?.Content?.slice(0, 300)
                                                                                }
                                                                            }),
                                                                            item?.VideoUrl && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx((external_react_player_default()), {
                                                                                    className: "testimonialVdo",
                                                                                    controls: true,
                                                                                    url: item?.VideoUrl
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {}),
                                                                                    item?.Name
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }, index))
                                            })
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(SectionLoader/* default */.Z, {})
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const Home_Testimonial = (/*#__PURE__*/external_react_default().memo(Testimonial));


/***/ }),

/***/ 9789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);



function Wellness() {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__.useTranslations)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "sub-section h-wellness",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "xs-feature-text-content text-left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "xs-heading",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "xs-title",
                                        children: t("wellness")
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "explorewellness",
                                href: "https://oncquestlabs.com/blog/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: t("explore_all")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-sm-12 col-md-6 col-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-well sbg1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "infobox_wrapper",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "infobox_icon_container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://oncquestlabs.com/blog/wp-content/uploads/2023/01/technology-in-clinical-laboratory.png",
                                                className: "scale"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "infobox_title height-51",
                                            children: "The role of technology in the clinical laboratory of the future"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "time",
                                            children: "January 5, 2023"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Dr. Sushrut Pownikar Head, Quality Assurance Department & Deputy Director, Oncquest Laboratories Ltd As a child, I used to be amazed at Star Trek’s Dr.…"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://oncquestlabs.com/blog/the-role-of-technology-in-the-clinical-laboratory-of-the-future/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "mt-5 button--hexagon1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: t("know_more")
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-sm-12 col-md-6 col-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-well sbg1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "infobox_wrapper",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "infobox_icon_container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://oncquestlabs.com/blog/wp-content/uploads/2022/12/covid-answers.png",
                                                className: "scale"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "infobox_title height-51",
                                            children: "Covid answers by Dr Shivali Oncquest"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "time",
                                            children: "December 1, 2022"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Dr Shivali Ahlawat Head of National Reference Laboratory at Oncquest Laboratories Ltd. Q.1 In Delhi NCR, How many requests are getting for RTPCR AND Antigen…"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://oncquestlabs.com/blog/covid-answers-by-dr-shivali-oncquest/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "mt-5 button--hexagon1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: t("know_more")
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-sm-12 col-md-6 col-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-well sbg1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "infobox_wrapper",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "infobox_icon_container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://oncquestlabs.com/blog/wp-content/uploads/2022/10/tobacco-intake-is-harmful.png",
                                                className: "scale"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "infobox_title height-51",
                                            children: "How much does tobacco intake harm your lungs?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "time",
                                            children: "October 4, 2022"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Tobacco intake harms your body in countless ways. It is imperative to consider the harmful effect it has on your body, family, society and financial…"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://oncquestlabs.com/blog/how-much-does-tobacco-intake-harm-your-lungs/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "mt-5 button--hexagon1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: t("know_more")
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wellness);


/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4759);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Const_Route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7993);
/* harmony import */ var _Component_Feature_Home_InnerFitness__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7191);
/* harmony import */ var _Component_Feature_Home_BookTest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42);
/* harmony import */ var _Component_Feature_Home_Wellness__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9789);
/* harmony import */ var _Component_Feature_Home_OncquestOffer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9217);
/* harmony import */ var _Component_Feature_Home_Testimonial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5082);
/* harmony import */ var _redux_common_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7811);
/* harmony import */ var _redux_common_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6367);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_common_api__WEBPACK_IMPORTED_MODULE_13__]);
_redux_common_api__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// import { useTranslation } from "react-i18next";












const Home = ({ seoData  })=>{
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__.useTranslations)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const [hvr, setHvr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dashboard = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.dashboard.dashboardData || null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window?.scroll(0, 0);
        dispatch(_redux_action__WEBPACK_IMPORTED_MODULE_4__/* .dashboardAction.getDashboardAction */ .uo.getDashboardAction({}));
        return ()=>{};
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_15__.NextSeo, {
                title: seoData?.SeoTitle,
                description: seoData?.SeoDescription,
                canonical: `${_redux_common_url__WEBPACK_IMPORTED_MODULE_14__/* .SITE_URL */ ._O}${router.asPath}`,
                openGraph: {
                    title: seoData?.SeoTitle,
                    description: seoData?.SeoDescription,
                    type: "website",
                    locale: "en_IE",
                    url: `${_redux_common_url__WEBPACK_IMPORTED_MODULE_14__/* .SITE_URL */ ._O}${router.asPath}`,
                    siteName: "oncquest-lab"
                },
                twitter: {
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image"
                },
                additionalMetaTags: [
                    {
                        property: "keywords",
                        content: seoData?.SeoKeywords
                    }
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "headslider desk-view",
                "data-aos": "fade-right",
                "data-aos-duration": "1100",
                style: {
                    position: "relative",
                    zIndex: 13
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sliderbox",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "slidercont111 owl-carousel",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                ...settings,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.CENTER */ .l.CENTER,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider1") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.DEPARTMENT */ .l.DEPARTMENT,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider2") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.PREVENTIVEHEALTHPKJ */ .l.PREVENTIVEHEALTHPKJ,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider3") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.NEUROLOGY */ .l.NEUROLOGY,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider4") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://oncquestlabs.com/blog",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider5") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.PRIVILEGEMEMBERSHIP */ .l.PRIVILEGEMEMBERSHIP,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider6") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.PRIVILEGEMEMBERSHIPDOCTOR */ .l.PRIVILEGEMEMBERSHIPDOCTOR,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider7") || "",
                                                alt: ""
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "search-slider",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container img-responsive leftmargin aos-init aos-animate",
                            "data-aos": "flip-up",
                            "data-aos-duration": "1500",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "prnt_dvhome intelliSearch",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: locale === "ta" ? "tamil-class-wc frm_dvhome new-intelli" : "frm_dvhome new-intelli",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: t("welcome_note")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: t("welcome")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.HOMECOLLECTION */ .l.HOMECOLLECTION,
                                                            className: "button--hexagon active",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "assets/img/collection.png",
                                                                            className: "search-scale"
                                                                        }),
                                                                        t("home"),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa fa-long-arrow-right",
                                                                            "aria-hidden": "true"
                                                                        })
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            href: {
                                                                pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.BOOKATEST */ .l.BOOKATEST,
                                                                query: {
                                                                    tabs: "tests",
                                                                    categoryId: "",
                                                                    subCategoryId: ""
                                                                }
                                                            },
                                                            className: "button--hexagon",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/img/test.png",
                                                                        className: "search-scale"
                                                                    }),
                                                                    t("find"),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-long-arrow-right",
                                                                        "aria-hidden": "true"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://itd.oncquest.net/Oncquest/Design/onlinelab/",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "button--hexagon",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    "  ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/img/report.png",
                                                                        className: "search-scale"
                                                                    }),
                                                                    t("download"),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-long-arrow-right",
                                                                        "aria-hidden": "true"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.CENTER */ .l.CENTER,
                                                            className: "button--hexagon",
                                                            onMouseEnter: (e)=>setHvr(true),
                                                            onMouseLeave: (e)=>setHvr(false),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
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
                                                                        }),
                                                                        t("find_center"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa fa-long-arrow-right",
                                                                            "aria-hidden": "true"
                                                                        })
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "clearfix"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "clearfix"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "headslider mob-view",
                "data-aos": "fade-right",
                "data-aos-duration": "1100",
                style: {
                    position: "relative",
                    zIndex: 13
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "search-slider",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container img-responsive leftmargin aos-init aos-animate",
                            "data-aos": "flip-up",
                            "data-aos-duration": "1500",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "prnt_dvhome intelliSearch",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: locale === "ta" ? "tamil-class-wc frm_dvhome new-intelli" : "frm_dvhome new-intelli",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: t("welcome_note")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: t("welcome")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.HOMECOLLECTION */ .l.HOMECOLLECTION,
                                                            className: "button--hexagon active",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "assets/img/collection.png",
                                                                            className: "search-scale"
                                                                        }),
                                                                        t("home"),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa fa-long-arrow-right",
                                                                            "aria-hidden": "true"
                                                                        })
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            href: {
                                                                pathname: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.BOOKATEST */ .l.BOOKATEST,
                                                                query: {
                                                                    tabs: "tests",
                                                                    categoryId: "",
                                                                    subCategoryId: ""
                                                                }
                                                            },
                                                            className: "button--hexagon",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/img/test.png",
                                                                        className: "search-scale"
                                                                    }),
                                                                    t("find"),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-long-arrow-right",
                                                                        "aria-hidden": "true"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://itd.oncquest.net/Oncquest/Design/onlinelab/",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "button--hexagon",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    "  ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "assets/img/report.png",
                                                                        className: "search-scale"
                                                                    }),
                                                                    t("download"),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-long-arrow-right",
                                                                        "aria-hidden": "true"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.CENTER */ .l.CENTER,
                                                            className: "button--hexagon",
                                                            onMouseEnter: (e)=>setHvr(true),
                                                            onMouseLeave: (e)=>setHvr(false),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
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
                                                                        }),
                                                                        t("find_center"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa fa-long-arrow-right",
                                                                            "aria-hidden": "true"
                                                                        })
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "clearfix"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "clearfix"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sliderbox",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "slidercont111 owl-carousel ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                ...settings,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.CENTER */ .l.CENTER,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider_m1") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.DEPARTMENT */ .l.DEPARTMENT,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider_m2") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.PREVENTIVEHEALTHPKJ */ .l.PREVENTIVEHEALTHPKJ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider_m3") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.NEUROLOGY */ .l.NEUROLOGY,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider_m4") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://oncquestlabs.com/blog",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider_m5") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.PRIVILEGEMEMBERSHIP */ .l.PRIVILEGEMEMBERSHIP,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider_m6") || "",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.PRIVILEGEMEMBERSHIPDOCTOR */ .l.PRIVILEGEMEMBERSHIPDOCTOR,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "scale",
                                                src: t("images.home.slider_m7") || "",
                                                alt: ""
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Feature_Home_InnerFitness__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                packages: dashboard?.Packages,
                baseUri: dashboard?.PackageBaseUrl
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Feature_Home_BookTest__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                category: dashboard?.Categories
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Feature_Home_Wellness__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Feature_Home_OncquestOffer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                Offers: dashboard?.Offers
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Feature_Home_Testimonial__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                testimonial: dashboard?.Testimonials,
                loadingData: dashboard
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    let Slug = _Const_Route__WEBPACK_IMPORTED_MODULE_7__/* .ROUTE.HOME */ .l.HOME?.replace("/en", "");
    const data = await _redux_common_api__WEBPACK_IMPORTED_MODULE_13__/* ["default"].post */ .Z.post(_redux_common_url__WEBPACK_IMPORTED_MODULE_14__/* .Url.seoDetail */ .R9.seoDetail, {
        Slug: Slug
    });
    return {
        props: {
            seoData: data?.Result?.Details || {},
            messages: (await __webpack_require__(2977)(`./${locale}/translation.json`)).default
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 503:
/***/ ((module) => {

module.exports = require("next-intl");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,993,811,997], () => (__webpack_exec__(85)));
module.exports = __webpack_exports__;

})();