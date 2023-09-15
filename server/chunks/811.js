"use strict";
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 7811:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Api {
    static async headers() {
        const token = /* await localStorage.getItem("oqut") */ "6f905f5fc8577f0b4baee213e2f43f46";
        return {
            Token: "" + token,
            "Content-Type": "application/json"
        };
    }
    static get(route, params = null) {
        return this.xhr(route, params, "GET");
    }
    static post(route, params) {
        return this.xhr(route, params, "POST");
    }
    static put(route, params) {
        return this.xhr(route, params, "PUT");
    }
    static patch(route, params) {
        return this.xhr(route, params, "PATCH");
    }
    static delete(route, params) {
        return this.xhr(route, params, "DELETE");
    }
    static encodeUrlParams(obj) {
        return Object.keys(obj).map((key)=>key + "=" + obj[key]).join("&");
    }
    static async xhr(route, params, method) {
        if (method === "GET" && params) {
            route = route + `?${this.encodeUrlParams(params)}`;
            params = null;
        }
        const headers = await Api.headers();
        let options = Object.assign({
            method: method,
            headers: headers,
            url: route,
            baseURL: _url__WEBPACK_IMPORTED_MODULE_1__/* .API_BASE_URL */ .CT
        }, params ? {
            data: params
        } : null);
        return (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(options).then((res)=>{
            // if (resp.status === 200 || resp.status === 201 || resp.status === 204) {
            return res.data;
        // } else if (resp.status === 401) {
        //     throw resp.data.message;
        // } else {
        //     throw resp;
        // }
        }).catch((error)=>{
            if (error.response) {
                throw error.response.data;
            } else {
                throw error;
            }
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CT": () => (/* binding */ API_BASE_URL),
/* harmony export */   "R9": () => (/* binding */ Url),
/* harmony export */   "_O": () => (/* binding */ SITE_URL)
/* harmony export */ });
const API_BASE_URL = "https://admin.oncquestlabs.com/api" /*"http://18.219.144.119/oncquest/api"  "https://admin.oncquestlabs.com/api" */ ;
const SITE_URL = "https://oncquestlabs.com";
const Url = {
    login: "/auth/login",
    register: "/auth/register",
    apiGetToken: "/api-get-token",
    dashboard: "/dashboard",
    testimonials: "/testimonials/list",
    state: "/states",
    city: "/cities",
    departmentList: "/departments",
    departmentDetails: "/department/details",
    departmentBySlug: "/department",
    doctorList: "/doctors",
    doctorDetails: "/doctor",
    doctorBySlug: "/doctor",
    centerList: "/centres",
    centerDetails: "/centre/details",
    centerBySlug: "/centre",
    nearByCenter: "/centre/nearby",
    tests: "/tests",
    testBySlug: "/test",
    testById: "/test/details",
    packages: "/packages",
    packageById: "/package/details",
    packageBySlug: "/package",
    packageComponent: "/package/components",
    facilities: "/facilities",
    pgoptions: "/pgoptions",
    subcategories: "/subcategories",
    querySubmit: "/query/submit",
    enquirySubmit: "/enquiry/submit",
    enquiryPartner: "/enquiry/partner",
    uploadAttachment: "/upload-attachment",
    uploadPrecription: "/booking/uploadPrescriptions",
    bookingEnquiry: "/booking/enquiry",
    generalDetails: "/general/details",
    cme: "/cme",
    newsAndUpdate: "/news-events",
    pressRealease: "/pressrelease/list",
    pressreleaseBySlug: "/pressrelease",
    allOffer: "/coupons",
    offerById: "/coupon/details",
    faq: "/faqs",
    seoDetail: "/seo-details",
    sendOtp: "/send-otp",
    verifyOtp: "/verify-otp",
    slot: "/available/slots",
    createBooking: "/create-booking",
    jobList: "/jobs",
    jobApply: "/apply-job",
    brochures: "/brochure/list",
    newsletter: "/newsletter/subscribe",
    collectionForm: "/create-collection",
    membershipForm: "/membership/submit"
};


/***/ })

};
;