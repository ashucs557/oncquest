"use strict";
(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 1382:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_common_common_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3933);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4759);
/* harmony import */ var _Const_Route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7993);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(701);
/* harmony import */ var _Component_Common_Loader_SectionLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3664);
/* harmony import */ var _Component_Common_BreadCrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(475);
/* harmony import */ var _redux_common_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7811);
/* harmony import */ var _redux_common_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6367);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_common_api__WEBPACK_IMPORTED_MODULE_12__]);
_redux_common_api__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const Offer = ({ seoData  })=>{
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_5__.useTranslations)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [offerId, setOfferId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [imgUri, setImgUri] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [offer, setOffer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [selectedOffer, setSelectedOffer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const offerData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.package.offer);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window?.scrollTo(0, 0);
        dispatch(_redux_action__WEBPACK_IMPORTED_MODULE_7__/* .packageAction.getAllOfferAction */ .VV.getAllOfferAction({}));
        return ()=>{};
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (offerData) {
            setImgUri(offerData?.CouponBannerBaseUrl);
            setOffer(offerData?.Coupons);
        }
        return ()=>{};
    }, [
        offerData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (offerId) {
            dispatch(_redux_action__WEBPACK_IMPORTED_MODULE_7__/* .packageAction.getAllOfferByIdAction */ .VV.getAllOfferByIdAction({}));
        }
        return ()=>{};
    }, [
        offerId
    ]);
    const [modalIsOpen, setModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
    const onCopy = ()=>{
        dispatch((0,_redux_common_common_reducer__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .Am)({
            message: "Coupon Code Copied Successfully",
            type: "success"
        }));
    };
    const handleCheckout = (e)=>{
        e.preventDefault();
        router.push(_Const_Route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTE.CHECKOUT */ .l.CHECKOUT);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_14__.NextSeo, {
                title: seoData?.SeoTitle,
                description: seoData?.SeoDescription,
                canonical: `${_redux_common_url__WEBPACK_IMPORTED_MODULE_13__/* .SITE_URL */ ._O}${router.asPath}`,
                openGraph: {
                    title: seoData?.SeoTitle,
                    description: seoData?.SeoDescription,
                    type: "website",
                    locale: "en_IE",
                    url: `${_redux_common_url__WEBPACK_IMPORTED_MODULE_13__/* .SITE_URL */ ._O}${router.asPath}`,
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
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
                                                __html: selectedOffer?.Description && selectedOffer?.Description.slice(0, 500)
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            className: "button--hexagon1",
                                            onClick: (e)=>handleCheckout(e),
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Common_BreadCrumb__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                page: t("bread_all_offer"),
                data: {
                    slug: "",
                    path: ""
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "sub-section h-offers bg-color",
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
                                            children: t("all_offer")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-2 col-sm-1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-8 col-sm-10",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-center pl-2 pr-2",
                                                        children: t("offer_content")
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-2 col-sm-1"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row offer-slider",
                            children: offerData && Object.keys(offerData).length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-sm-12 col-md-6 col-lg-4",
                                        children: offer && offer?.length > 0 && offer?.map((item, i)=>i < 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-off sbg1",
                                                onClick: ()=>setModalIsOpenToTrue(item),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: item?.CouponIcon ? (0,_Utils__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceImgUriByLang */ .Ps)(item?.CouponIcon) : "/assets/img/offer0" + (i + 1) + ".png",
                                                    onError: (e)=>(0,_Utils__WEBPACK_IMPORTED_MODULE_9__/* .ImgPlaceHolder */ .IC)(e, item?.CouponIcon || "/assets/img/offer0" + (i + 1) + ".png"),
                                                    className: "scale",
                                                    alt: ""
                                                })
                                            }, i))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-sm-12 col-md-6 col-lg-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "btnoffer-d offer_below"
                                            }),
                                            offer && offer?.length > 0 && offer?.map((item, i)=>i >= 2 && i < 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "h-off sbg1",
                                                    onClick: ()=>setModalIsOpenToTrue(item),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item?.CouponIcon ? (0,_Utils__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceImgUriByLang */ .Ps)(item?.CouponIcon) : "/assets/img/offer0" + (i + 1) + ".png",
                                                        onError: (e)=>(0,_Utils__WEBPACK_IMPORTED_MODULE_9__/* .ImgPlaceHolder */ .IC)(e, item?.CouponIcon || "/assets/img/offer0" + (i + 1) + ".png"),
                                                        className: "scale",
                                                        alt: ""
                                                    })
                                                }, i))
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-sm-12 col-md-6 col-lg-4",
                                        children: offer && offer?.length > 0 && offer?.map((item, i)=>i >= 4 && i < 6 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-off sbg1",
                                                onClick: ()=>setModalIsOpenToTrue(item),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: item?.CouponIcon ? (0,_Utils__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceImgUriByLang */ .Ps)(item?.CouponIcon) : "/assets/img/offer0" + (i + 1) + ".png",
                                                    onError: (e)=>(0,_Utils__WEBPACK_IMPORTED_MODULE_9__/* .ImgPlaceHolder */ .IC)(e, item?.CouponIcon || "/assets/img/offer0" + (i + 1) + ".png"),
                                                    className: "scale",
                                                    alt: ""
                                                })
                                            }, i))
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Common_Loader_SectionLoader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    let Slug = _Const_Route__WEBPACK_IMPORTED_MODULE_8__/* .ROUTE.OFFER */ .l.OFFER?.replace("/", "");
    const data = await _redux_common_api__WEBPACK_IMPORTED_MODULE_12__/* ["default"].post */ .Z.post(_redux_common_url__WEBPACK_IMPORTED_MODULE_13__/* .Url.seoDetail */ .R9.seoDetail, {
        Slug: Slug
    });
    return {
        props: {
            seoData: data?.Result?.Details || {},
            messages: (await __webpack_require__(2977)(`./${locale}/translation.json`)).default
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,993,811,997,475], () => (__webpack_exec__(1382)));
module.exports = __webpack_exports__;

})();