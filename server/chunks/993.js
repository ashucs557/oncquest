"use strict";
exports.id = 993;
exports.ids = [993];
exports.modules = {

/***/ 7993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ROUTE)
/* harmony export */ });
const ROUTE = {
    HOME: "/",
    SIGNUP: "/signup",
    LOGIN: "/login",
    THANKYOU: "/thank-you",
    UPLOADPRESCRIPTION: "/upload-prescription",
    BROCHURES: "/brochures",
    TEAM: "/team",
    DOCTORDETAILS: "/doctor",
    DEPARTMENTDETAILS: "/department",
    DEPARTMENT: "/departments",
    BOOKATEST: "/book-a-test",
    TESTDETAILS: "/test",
    PACKAGEDETAILS: "/package",
    CENTERDETAILS: "/centre",
    CENTER: "/centres",
    DOWNLOADREPORT: "/download-report",
    GENERALENQUIRY: "/general-enquiry",
    OFFER: "/offers",
    TESTIMONIAL: "/testimonials",
    NEWSANDUPDATES: "/news-updates",
    NEWSANDUPDATESDETAIL: "/news-update",
    PRESSREALEASEDETAIL: "/press-realease",
    FAQ: "/faq",
    CHECKOUT: "/checkout",
    CORPORATEOFFICE: "/corporate-office",
    SERACHFORTEST: "/search-for-test",
    CUSTOMLANDING: "/custom-landing",
    NATIONREFLAB: "/national-reference-lab",
    ECME: "/ecme",
    CAREER: "/career",
    ENDEVOUR: "/endeavour",
    OVERVIEW: "/overview",
    DIRECTORMESSAGE: "/directors-message",
    ACCREDATITION: "/accreditation",
    QUALITYMANAGEMENT: "/quality-management",
    AWARD: "/award-recognition",
    PRIVACY: "/privacy-policy",
    TERMSCONDITION: "/terms-condition",
    DISCLAIMER: "/disclaimer",
    HEALTHENQUIRY: "/corporate",
    HOMECOLLECTION: "/home-collection",
    BECOMWEPARTNER: "/partner-with-us",
    BECOMEVENDOR: "/vendor-with-us",
    PATHSHALA: "/paathshala",
    NEUROLOGY: "/neurology",
    ALLERGY: "/allergy",
    MAMAPRINT: "/mamma-print",
    QUICKLINKS: "/quick-links",
    PREVENTIVEHEALTHPKJ: "/preventive-health-check-packages",
    GURUGRAMLAB: "/gurugram-lab",
    BENGALURULAB: "/bengaluru-lab",
    KOLKATALAB: "/kolkata-lab",
    CANCER: "/cancer",
    PRENATALTESTING: "/prenatal-testing",
    LUDHIANALAB: "/ludhiana-lab",
    VIDEOSECTION: "/youtube-video-section",
    CLINICALTRIAL: "/clinical-trial",
    PRIVILEGEMEMBERSHIP: "/privilege-membership-card",
    PRIVILEGEMEMBERSHIPDOCTOR: "/privilege-membership-card-doctor"
};


/***/ }),

/***/ 701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IC": () => (/* binding */ ImgPlaceHolder),
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "Ps": () => (/* binding */ ReplaceImgUriByLang),
/* harmony export */   "X1": () => (/* binding */ onlyNumber),
/* harmony export */   "Z$": () => (/* binding */ getAllCityFromLocal),
/* harmony export */   "Zi": () => (/* binding */ getSelectedCity),
/* harmony export */   "eZ": () => (/* binding */ LoggedIn),
/* harmony export */   "p6": () => (/* binding */ FDiscount)
/* harmony export */ });
/* unused harmony exports Timeconvert, GetUserLatLng, groupBy */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const ImgPlaceHolder = (e, img)=>{
    e.target.onerror = null;
    return e.target.src = img;
};
function FDiscount(mrp, selling) {
    let _dt = (mrp - selling) / mrp * 100;
    let dis = Math.round(_dt).toFixed(0);
    if (dis !== "0") {
        return `${dis}%`;
    }
}
function onlyNumber(event) {
    if (!/[0-9]/.test(event.key) || event.target.value?.length >= 10) {
        event.preventDefault();
    }
}
function Timeconvert(time) {
    if (time && time !== null) {
        return moment(time, [
            "HH.mm"
        ]).format("hh:mm A");
    }
}
function getUser() {
    return typeof localStorage !== "undefined" && JSON.parse(localStorage.getItem("oqu") || "{}");
}
function getSelectedCity() {
    return typeof localStorage !== "undefined" && localStorage.getItem("oq:city") || "";
}
function getAllCityFromLocal() {
    let dt = typeof localStorage !== "undefined" && JSON.parse(localStorage.getItem("oq:cityData") || "{}");
    return dt;
}
function LoggedIn() {
    return typeof localStorage !== "undefined" && !!localStorage.getItem("oqu");
}
async function GetUserLatLng() {
    if (navigator?.geolocation) {
        await navigator?.geolocation.getCurrentPosition((position)=>{
            let data = `${position.coords.latitude},${position.coords.longitude}`;
            return data;
        });
    }
}
function ReplaceImgUriByLang(url) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    // let lang = typeof localStorage !== 'undefined' && localStorage.getItem("i18nextLng") || "en";
    return url.replace("public/uploads", `public/${locale}/uploads`);
}
const groupBy = (items, key)=>items.reduce((result, item)=>({
            ...result,
            [item[key]]: [
                ...result[item[key]] || [],
                item
            ]
        }), {});


/***/ }),

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F2": () => (/* reexport module object */ _submit_action__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "KM": () => (/* reexport module object */ _test_action__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "T6": () => (/* reexport module object */ _department_action__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "VV": () => (/* reexport module object */ _package_action__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "ul": () => (/* reexport module object */ _user_action__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "uo": () => (/* reexport module object */ _dashboard_action__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6502);
/* harmony import */ var _department_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1840);
/* harmony import */ var _dashboard_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5456);
/* harmony import */ var _doctor_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5415);
/* harmony import */ var _center_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5049);
/* harmony import */ var _test_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4416);
/* harmony import */ var _package_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4245);
/* harmony import */ var _submit_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4666);
/* harmony import */ var _checkout_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7598);












/***/ }),

/***/ 5049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DS": () => (/* binding */ getNearByCenterAction),
/* harmony export */   "ES": () => (/* binding */ getFacilityAction),
/* harmony export */   "LH": () => (/* binding */ getPgOptionAction),
/* harmony export */   "e": () => (/* binding */ listCenterAction),
/* harmony export */   "z": () => (/* binding */ getRelatedCentreAction),
/* harmony export */   "zZ": () => (/* binding */ getCenterBySlugAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const listCenterAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("listCenter", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getCenterBySlugAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getCenterBySlug", (slug)=>({
        payload: {
            slug
        }
    }));
const getNearByCenterAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getNearByCenter", (Request)=>({
        payload: {
            Request
        }
    }));
const getFacilityAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getFacility", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getPgOptionAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getPgOption", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getRelatedCentreAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getRelatedCentre", (listRequest)=>({
        payload: {
            listRequest
        }
    }));


/***/ }),

/***/ 7598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qo": () => (/* binding */ createBookingAction),
/* harmony export */   "fb": () => (/* binding */ availableSlotAction),
/* harmony export */   "rk": () => (/* binding */ sendOtpAction),
/* harmony export */   "ul": () => (/* binding */ verifyOtpAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const sendOtpAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("sendOtp", (Request)=>({
        payload: {
            Request
        }
    }));
const verifyOtpAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("verifyOtp", (Request)=>({
        payload: {
            Request
        }
    }));
const createBookingAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("createBooking", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));
const availableSlotAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("availableSlot", (Request)=>({
        payload: {
            Request
        }
    }));


/***/ }),

/***/ 5456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cmeBySlugAction": () => (/* binding */ cmeBySlugAction),
/* harmony export */   "cmeListAction": () => (/* binding */ cmeListAction),
/* harmony export */   "generalDetailAction": () => (/* binding */ generalDetailAction),
/* harmony export */   "getCityAction": () => (/* binding */ getCityAction),
/* harmony export */   "getDashboardAction": () => (/* binding */ getDashboardAction),
/* harmony export */   "getFaqAction": () => (/* binding */ getFaqAction),
/* harmony export */   "getStateAction": () => (/* binding */ getStateAction),
/* harmony export */   "getTestimonialAction": () => (/* binding */ getTestimonialAction),
/* harmony export */   "jobApplyAction": () => (/* binding */ jobApplyAction),
/* harmony export */   "jobListAction": () => (/* binding */ jobListAction),
/* harmony export */   "newsAndUpdateAction": () => (/* binding */ newsAndUpdateAction),
/* harmony export */   "newsandEventBySlugAction": () => (/* binding */ newsandEventBySlugAction),
/* harmony export */   "newsletterAction": () => (/* binding */ newsletterAction),
/* harmony export */   "pressReleaseAction": () => (/* binding */ pressReleaseAction),
/* harmony export */   "pressReleaseBySlugAction": () => (/* binding */ pressReleaseBySlugAction),
/* harmony export */   "seoDetailAction": () => (/* binding */ seoDetailAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const getDashboardAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getDashboard", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getStateAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getState", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getCityAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getCity", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getTestimonialAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getTestimonial", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const generalDetailAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("generalDetail", (Request)=>({
        payload: {
            Request
        }
    }));
const cmeListAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("cmeLIst", (Request)=>({
        payload: {
            Request
        }
    }));
const cmeBySlugAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("cmeBySlug", (slug)=>({
        payload: {
            slug
        }
    }));
const newsAndUpdateAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("newsAndUpdate", (Request)=>({
        payload: {
            Request
        }
    }));
const pressReleaseAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("pressRelease", (Request)=>({
        payload: {
            Request
        }
    }));
const newsandEventBySlugAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("newsandEventBySlug", (slug)=>({
        payload: {
            slug
        }
    }));
const pressReleaseBySlugAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("pressReleaseBySlug", (slug)=>({
        payload: {
            slug
        }
    }));
const getFaqAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getFaq", (Request)=>({
        payload: {
            Request
        }
    }));
const seoDetailAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("seoDetail", (Request)=>({
        payload: {
            Request
        }
    }));
const jobListAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("jobList", (Request)=>({
        payload: {
            Request
        }
    }));
const jobApplyAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("jobApply", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));
const newsletterAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("newsletter", (Request)=>({
        payload: {
            Request
        }
    }));


/***/ }),

/***/ 1840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "brochuresListAction": () => (/* binding */ brochuresListAction),
/* harmony export */   "getDepartmentByIdAction": () => (/* binding */ getDepartmentByIdAction),
/* harmony export */   "getDepartmentBySlugAction": () => (/* binding */ getDepartmentBySlugAction),
/* harmony export */   "listDepartmentAction": () => (/* binding */ listDepartmentAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const listDepartmentAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("listDepartment", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getDepartmentByIdAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getDepartmentById", (id)=>({
        payload: {
            id
        }
    }));
const getDepartmentBySlugAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getDepartmentBySlug", (slug)=>({
        payload: {
            slug
        }
    }));
const brochuresListAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("brochuresList", (Request)=>({
        payload: {
            Request
        }
    }));


/***/ }),

/***/ 5415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IX": () => (/* binding */ getDoctorDetailAction),
/* harmony export */   "VV": () => (/* binding */ getDoctorBySlugAction),
/* harmony export */   "_N": () => (/* binding */ listDoctorAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const listDoctorAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("listDoctor", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getDoctorDetailAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getDoctorDetail", (data)=>({
        payload: {
            data
        }
    }));
const getDoctorBySlugAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getDoctorBySlug", (slug)=>({
        payload: {
            slug
        }
    }));


/***/ }),

/***/ 4245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllOfferAction": () => (/* binding */ getAllOfferAction),
/* harmony export */   "getAllOfferByIdAction": () => (/* binding */ getAllOfferByIdAction),
/* harmony export */   "getPackageBySlugAction": () => (/* binding */ getPackageBySlugAction),
/* harmony export */   "getPackageComponetAction": () => (/* binding */ getPackageComponetAction),
/* harmony export */   "getSubCategoryByIdAction": () => (/* binding */ getSubCategoryByIdAction),
/* harmony export */   "listPackageAction": () => (/* binding */ listPackageAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const listPackageAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("listPackage", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getPackageBySlugAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getPackageBySlug", (slug)=>({
        payload: {
            slug
        }
    }));
const getSubCategoryByIdAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getSubCategoryById", (id)=>({
        payload: {
            id
        }
    }));
const getAllOfferAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getAllOffer", (Request)=>({
        payload: {
            Request
        }
    }));
const getAllOfferByIdAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getAllOfferById", (id)=>({
        payload: {
            id
        }
    }));
const getPackageComponetAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getPackageComponet", (id)=>({
        payload: {
            id
        }
    }));


/***/ }),

/***/ 4666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blankAttachmentAction": () => (/* binding */ blankAttachmentAction),
/* harmony export */   "bookingEnquiryAction": () => (/* binding */ bookingEnquiryAction),
/* harmony export */   "homeCollectionFormAction": () => (/* binding */ homeCollectionFormAction),
/* harmony export */   "prevMembershipFormAction": () => (/* binding */ prevMembershipFormAction),
/* harmony export */   "submitEnquiryAction": () => (/* binding */ submitEnquiryAction),
/* harmony export */   "submitPartnerAction": () => (/* binding */ submitPartnerAction),
/* harmony export */   "submitQueryAction": () => (/* binding */ submitQueryAction),
/* harmony export */   "uploadAttachmentAction": () => (/* binding */ uploadAttachmentAction),
/* harmony export */   "uploadPrecriptionAction": () => (/* binding */ uploadPrecriptionAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const uploadAttachmentAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("uploadAttachmentAction", (Request)=>({
        payload: {
            Request
        }
    }));
const blankAttachmentAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("blankAttachmentAction", (Request)=>({
        payload: {
            Request
        }
    }));
const uploadPrecriptionAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("uploadPrecription", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));
const submitQueryAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("submitQuery", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));
const submitEnquiryAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("submitEnquiry", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));
const submitPartnerAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("submitPartner", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));
const bookingEnquiryAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("bookingEnquiry", (Request, history, slug)=>({
        payload: {
            Request,
            history,
            slug
        }
    }));
const homeCollectionFormAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("homeCollectionForm", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));
const prevMembershipFormAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("prevMembershipForm", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));


/***/ }),

/***/ 4416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTestByIdAction": () => (/* binding */ getTestByIdAction),
/* harmony export */   "getTestBySlugAction": () => (/* binding */ getTestBySlugAction),
/* harmony export */   "listTestAction": () => (/* binding */ listTestAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const listTestAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("listTest", (listRequest)=>({
        payload: {
            listRequest
        }
    }));
const getTestByIdAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getTestById", (id)=>({
        payload: {
            id
        }
    }));
const getTestBySlugAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getTestBySlug", (slug)=>({
        payload: {
            slug
        }
    }));


/***/ }),

/***/ 6502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApiTokenAction": () => (/* binding */ getApiTokenAction),
/* harmony export */   "loginAction": () => (/* binding */ loginAction),
/* harmony export */   "logoutAction": () => (/* binding */ logoutAction),
/* harmony export */   "registorPartnerAction": () => (/* binding */ registorPartnerAction),
/* harmony export */   "registorVendorAction": () => (/* binding */ registorVendorAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const getApiTokenAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("getApiToken", (loginRequest, history)=>({
        payload: {
            loginRequest,
            history
        }
    }));
const loginAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("user/login", (loginRequest, history)=>({
        payload: {
            loginRequest,
            history
        }
    }));
const registorVendorAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("vendor/register", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));
const registorPartnerAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("partner/register", (Request, history)=>({
        payload: {
            Request,
            history
        }
    }));
const logoutAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("user/logout", (history)=>({
        payload: {
            history
        }
    }));


/***/ })

};
;