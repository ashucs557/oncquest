(() => {
var exports = {};
exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 8479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ book_a_test),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/redux/action.ts
var action = __webpack_require__(4759);
;// CONCATENATED MODULE: external "rc-pagination"
const external_rc_pagination_namespaceObject = require("rc-pagination");
var external_rc_pagination_default = /*#__PURE__*/__webpack_require__.n(external_rc_pagination_namespaceObject);
// EXTERNAL MODULE: ./node_modules/rc-pagination/assets/index.css
var assets = __webpack_require__(6307);
// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__(503);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/Component/Common/BreadCrumb/index.tsx
var BreadCrumb = __webpack_require__(475);
// EXTERNAL MODULE: ./src/Utils/index.ts
var Utils = __webpack_require__(701);
// EXTERNAL MODULE: ./src/Component/Common/Loader/SectionLoader.tsx
var SectionLoader = __webpack_require__(3664);
// EXTERNAL MODULE: ./src/Const/Route.ts
var Route = __webpack_require__(7993);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/Component/Feature/BookATest/BookButton.tsx





const BookButton = (props)=>{
    const t = (0,external_next_intl_.useTranslations)();
    const { type , data  } = props;
    const router = (0,router_.useRouter)();
    const [hvr, setHvr] = (0,external_react_.useState)(false);
    const handleCheckout = (e)=>{
        e.preventDefault();
        router.push({
            pathname: Route/* ROUTE.CHECKOUT */.l.CHECKOUT,
            query: {
                type: type,
                data: data
            }
        }, Route/* ROUTE.CHECKOUT */.l.CHECKOUT);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("a", {
        href: "#",
        onClick: (e)=>handleCheckout(e),
        className: "button--hexagon booknow",
        onMouseLeave: (e)=>setHvr(false),
        onMouseEnter: (e)=>setHvr(true),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            children: [
                " ",
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: !hvr ? "/assets/img/calendar.png" : "/assets/img/calendar2.png",
                    className: "scale_booknow"
                }),
                t("book_now"),
                /*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: "fa fa-long-arrow-right",
                    "aria-hidden": "true"
                })
            ]
        })
    });
};
/* harmony default export */ const BookATest_BookButton = (BookButton);

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
;// CONCATENATED MODULE: external "yup"
const external_yup_namespaceObject = require("yup");
;// CONCATENATED MODULE: ./src/Utils/Validation.ts

const email = (data)=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data);
const Validation_password = (data)=>/^(?=.*\d).{6,20}$/.test(data);
const validateSubmitForm = external_yup_namespaceObject.object().shape({
    Name: external_yup_namespaceObject.string().required("Name is required").min(2, "Min 2 character required"),
    Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit")
});
const DoctorEnquiryform = external_yup_namespaceObject.object().shape({
    Name: external_yup_namespaceObject.string().required("Name is required").min(2, "Min 2 character required"),
    Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    Email: external_yup_namespaceObject.string().required("Email is required").email("Invalid Email address"),
    Message: external_yup_namespaceObject.string().required("Message is required").min(10, "Min 10 character required")
});
const validateBookingEnquiry = external_yup_namespaceObject.object().shape({
    Name: external_yup_namespaceObject.string().required("Name is required").min(2, "Min 2 character required"),
    Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    Gender: external_yup_namespaceObject.string().required("Gender is required"),
    /* DOB: Yup.string().nullable().default(null)
        .required("DOB is required"), */ Address: external_yup_namespaceObject.string().required("Address is required").min(4, "Min 4 character required")
});
const validateUploadPrescription = external_yup_namespaceObject.object().shape({
    FirstName: external_yup_namespaceObject.string().required("First Name is required").min(2, "Min 2 character required"),
    /*  LastName: Yup.string()
        .required("Last Name is required")
        .min(2, 'Min 2 character required'), */ Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    CityId: external_yup_namespaceObject.string().required("City is required"),
    Gender: external_yup_namespaceObject.string().required("Gender is required")
});
/* export const sendOtpValidation = Yup.object().shape({
    MobileNo: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit')
}) */ function sendOtpValidation(values) {
    var errors = {};
    if (!values.MobileNo) {
        errors.MobileNo = "Mobile No is required.";
    } else if (values.hasOwnProperty("MobileNo") && values.MobileNo.length !== 10) {
        errors.MobileNo = "Enter only 10 Digit.";
    }
    errors.isFormValid = values && Object.keys(values).length >= 1 && Object.keys(errors).length == 0;
    return errors;
}
const validateJobApplyForm = external_yup_namespaceObject.object().shape({
    Name: external_yup_namespaceObject.string().required("Name is required").min(2, "Min 2 character required"),
    Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    Email: external_yup_namespaceObject.string().required("Email is required").email("Invalid Email address"),
    JobId: external_yup_namespaceObject.string().required("Postion is required"),
    CityId: external_yup_namespaceObject.string().required("City is required"),
    Experience: external_yup_namespaceObject.string().required("Experience is required")
});
const validateAddPatient = external_yup_namespaceObject.object().shape({
    PatientFirstName: external_yup_namespaceObject.string().required("First Name is required").min(2, "Min 2 character required"),
    /* PatientLastName: Yup.string()
        .required("Last Name is required")
        .min(2, 'Min 2 character required'), */ PatientMobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    PatientGender: external_yup_namespaceObject.string().required("Gender is required"),
    /* PatientDob: Yup.string().nullable().default(null)
        .required("DOB is required"), */ /* PatientRelation: Yup.string()
        .required("Relation is required"), */ CustomerAddressLine1: external_yup_namespaceObject.string().required("Address is required").min(10, "Min 10 character required")
});
const validateAddAddress = external_yup_namespaceObject.object().shape({
    CustomerName: external_yup_namespaceObject.string().required("Name is required").min(2, "Min 2 character required"),
    CustomerEmail: external_yup_namespaceObject.string().required("Email is required").email("Invalid Email address"),
    CustomerAddressLine1: external_yup_namespaceObject.string().required("Address Line 1 is required").min(4, "Min 4 character required"),
    /* CustomerAddressLine2: Yup.string()
        .required("Address Line2 is required")
        .min(4, 'Min 4 character required'), */ CustomerStateId: external_yup_namespaceObject.string().required("State is required"),
    CustomerCityId: external_yup_namespaceObject.string().required("City is required"),
    AddressTag: external_yup_namespaceObject.string().required("Address Tag is required"),
    CustomerLocality: external_yup_namespaceObject.string().required("Locality is required").min(4, "Min 4 character required"),
    CustomerPincode: external_yup_namespaceObject.string().required("Pincode is required").min(6, "Enter only 6 Digit").max(6, "Enter only 6 Digit")
});
const validatePartner = external_yup_namespaceObject.object().shape({
    FirstName: external_yup_namespaceObject.string().required("First Name is required").min(2, "Min 2 character required"),
    /* LastName: Yup.string()
        .required("Last Name is required")
        .min(2, 'Min 2 character required'), */ Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    /*  EmailId: Yup.string()
        .required("Email is required")
        .email("Invalid Email address"), */ CityId: external_yup_namespaceObject.string().required("City is required")
});
const validateQuickLink = external_yup_namespaceObject.object().shape({
    Name: external_yup_namespaceObject.string().required("Name is required").min(2, "Min 2 character required"),
    Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    Message: external_yup_namespaceObject.string().required("Message is required").min(10, "Min 10 character required")
});
const validateGeneralEnquiry = external_yup_namespaceObject.object().shape({
    Name: external_yup_namespaceObject.string().required("Name is required").min(2, "Min 2 character required"),
    Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    CityId: external_yup_namespaceObject.string().required("City is required"),
    Message: external_yup_namespaceObject.string().required("Message is required")
});
const validateHomeCollection = external_yup_namespaceObject.object().shape({
    FirstName: external_yup_namespaceObject.string().required("First Name is required").min(2, "Min 2 character required"),
    /* LastName: Yup.string()
        .required("Last Name is required")
        .min(2, 'Min 2 character required'), */ Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    /* EmailId: Yup.string()
        .required("Email is required")
        .email("Invalid Email address"), */ CityId: external_yup_namespaceObject.string().required("City is required"),
    // Address: Yup.string()
    //     .required("Address is required")
    //     .min(4, 'Min 4 character required'),
    PreferredDate: external_yup_namespaceObject.string().nullable().default(null).required("Preferred Date is required"),
    PreferredTime: external_yup_namespaceObject.string().required("Preferred Time is required")
});
const validateGurugramLab = external_yup_namespaceObject.object().shape({
    Name: external_yup_namespaceObject.string().required("Name is required").min(2, "Min 2 character required"),
    Mobile: external_yup_namespaceObject.string().required("Mobile is required").min(10, "Enter only 10 Digit").max(10, "Enter only 10 Digit"),
    CityId: external_yup_namespaceObject.string().required("City is required")
});

;// CONCATENATED MODULE: ./src/Component/Feature/BookATest/SendQueryModal.tsx










const SendQueryModal = ({ modalIsOpen , setModalIsOpen , test , code , lab  })=>{
    external_react_modal_default().setAppElement("body");
    const t = (0,external_next_intl_.useTranslations)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const cityData = (0,external_react_redux_.useSelector)((state)=>state.dashboard.city);
    const [initialValue, setInitialValue] = (0,external_react_.useState)({
        Name: "",
        Email: "",
        Mobile: "",
        CityId: "",
        Message: ""
    });
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            minWidth: "300px",
            minHeight: "300px",
            maxWidth: "calc(100vw - 1rem)",
            maxHeight: "calc(100vh - 1rem)",
            overflow: "auto"
        }
    };
    (0,external_react_.useEffect)(()=>{
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        setInitialValue({
            ...initialValue,
            Message: code
        });
    }, [
        code
    ]);
    const handleSubmit = (values)=>{
        let val = {
            ...values
        };
        val.SourceUrl = window.location.href;
        if (lab) {
            val.LabName = code;
        } else if (test) {
            val.TestCode = code;
        } else {
            val.PackageCode = code;
        }
        dispatch(action/* submitAction.submitEnquiryAction */.F2.submitEnquiryAction(val, router));
        setModalIsOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_modal_default()), {
        isOpen: modalIsOpen,
        style: customStyles,
        onRequestClose: ()=>setModalIsOpen(false),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "model-header",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "model-btn pointer",
                    onClick: ()=>setModalIsOpen(false),
                    children: "x"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx(external_formik_namespaceObject.Formik, {
                    initialValues: initialValue,
                    enableReinitialize: true,
                    validationSchema: validateGeneralEnquiry,
                    onSubmit: (val)=>{
                        handleSubmit(val);
                    },
                    render: ({ values , handleChange , errors , touched , handleBlur , handleSubmit  })=>/*#__PURE__*/ jsx_runtime.jsx("form", {
                            onSubmit: handleSubmit,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "infobox_wrapper",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "mr-10",
                                        children: "GET A CALL BACK"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "ln-1 mr-10",
                                        children: t("neurology_form_note")
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            name: "Name",
                                            className: "form-control",
                                            placeholder: t("name") || "",
                                            onChange: handleChange,
                                            onBlur: handleBlur,
                                            value: values?.Name
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            name: "Mobile",
                                            className: "form-control",
                                            placeholder: t("mobile_number") || "",
                                            onKeyPress: Utils/* onlyNumber */.X1,
                                            onChange: handleChange,
                                            onBlur: handleBlur,
                                            value: values?.Mobile
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                            className: "form-control",
                                            name: "CityId",
                                            id: "CityId",
                                            onChange: handleChange,
                                            onBlur: handleBlur,
                                            value: values?.CityId,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("option", {
                                                    value: "",
                                                    children: [
                                                        t("city"),
                                                        "*"
                                                    ]
                                                }),
                                                cityData && cityData.length > 0 && cityData?.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx("option", {
                                                        value: item?.Id,
                                                        className: "text-uppercase",
                                                        children: t(item?.Name)
                                                    }, i))
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            placeholder: t("email") || "",
                                            name: "Email",
                                            onChange: handleChange,
                                            onBlur: handleBlur,
                                            value: values?.Email
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                            className: "form-control",
                                            placeholder: t("message") || "",
                                            name: "Message",
                                            onChange: handleChange,
                                            onBlur: handleBlur,
                                            value: values?.Message
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        type: "submit",
                                        className: "book--hexagon active",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                t("submit_btn"),
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fa fa-long-arrow-right ml-20",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                })
            })
        ]
    });
};
/* harmony default export */ const BookATest_SendQueryModal = (SendQueryModal);

;// CONCATENATED MODULE: ./src/pages/book-a-test/index.tsx

















const BookATest = ()=>{
    const t = (0,external_next_intl_.useTranslations)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const { query  } = router;
    const [tab, setTab] = (0,external_react_.useState)("");
    const [subCategory, setSubCategory] = (0,external_react_.useState)("");
    const [department, setDepartment] = (0,external_react_.useState)("");
    const [DepName, setDepName] = (0,external_react_.useState)("");
    const [category, setCategory] = (0,external_react_.useState)("");
    const [pricePSort, setPricePSort] = (0,external_react_.useState)("low");
    const [priceTSort, setPriceTSort] = (0,external_react_.useState)("low");
    const [tests, setTests] = (0,external_react_.useState)([]);
    const [packages, setPackages] = (0,external_react_.useState)([]);
    const [limit, setLimit] = (0,external_react_.useState)(20);
    const [offsetT, setOffsetT] = (0,external_react_.useState)(0);
    const [offsetP, setOffsetP] = (0,external_react_.useState)(0);
    const [page, setPage] = (0,external_react_.useState)(1);
    const [searchTermShow, setSearchTermShow] = (0,external_react_.useState)("");
    const [searchTerm, setSearchTerm] = (0,external_react_.useState)("");
    const [modalIsOpen, setModalIsOpen] = (0,external_react_.useState)(false);
    const [code, setCode] = (0,external_react_.useState)("");
    const testData = (0,external_react_redux_.useSelector)((state)=>state.test.list ? state.test.list : {});
    const packageData = (0,external_react_redux_.useSelector)((state)=>state.package.list ? state.package.list : {});
    const subCategoryLoader = (0,external_react_redux_.useSelector)((state)=>state.package.subCategory);
    const subCategoryData = (0,external_react_redux_.useSelector)((state)=>state.package.subCategory?.Categories);
    const CityId = (0,external_react_redux_.useSelector)((state)=>state.dashboard.selectedCity ? state.dashboard.selectedCity : "");
    const handleModalOpen = (e, code)=>{
        e.preventDefault();
        setCode(code);
        setModalIsOpen(true);
    };
    (0,external_react_.useEffect)(()=>{
        if (query?.tabs) {
            setTab(query?.tabs);
        } else {
            setTab("packages");
        }
        if (query?.subCategoryId) {
            setSubCategory(query?.subCategoryId);
        }
        if (query?.categoryId) {
            setCategory(query?.categoryId);
        }
        if (query?.depId) {
            setDepartment(query?.depId);
        }
        if (query?.depName) {
            setDepName(query?.depName);
        }
        return ()=>{};
    }, [
        query?.tabs,
        query?.subCategoryId
    ]);
    const hendleTab = (e, value)=>{
        e.preventDefault();
        setDepName("");
        setDepartment("");
        setSearchTerm("");
        setPage(1);
        setOffsetP(0);
        setOffsetT(0);
        setPricePSort("low");
        setPriceTSort("low");
        setSubCategory("");
        setTab(value);
        setSearchTermShow("");
    };
    (0,external_react_.useEffect)(()=>{
        if (tab === "tests") {
            window?.scrollTo(0, 0);
            dispatch(action/* testAction.listTestAction */.KM.listTestAction({
                SearchTerm: searchTerm,
                Offset: offsetT,
                Limit: limit,
                SubcategoryId: subCategory,
                DepartmentId: department,
                CityId: CityId
            }));
        }
        return ()=>{};
    }, [
        offsetT,
        searchTerm,
        tab,
        subCategory,
        CityId
    ]);
    (0,external_react_.useEffect)(()=>{
        if (tab === "packages") {
            setDepName("");
            setDepartment("");
            window?.scrollTo(0, 0);
            dispatch(action/* packageAction.listPackageAction */.VV.listPackageAction({
                SearchTerm: searchTerm,
                SubCategories: subCategory,
                Offset: offsetP,
                Limit: limit,
                CityId: CityId
            }));
        }
        return ()=>{};
    }, [
        subCategory,
        offsetP,
        searchTerm,
        tab,
        CityId
    ]);
    (0,external_react_.useEffect)(()=>{
        Tsort();
        return ()=>{};
    }, [
        testData?.Tests,
        priceTSort
    ]);
    (0,external_react_.useEffect)(()=>{
        Psort();
    }, [
        packageData?.Packages,
        pricePSort
    ]);
    (0,external_react_.useEffect)(()=>{
        dispatch(action/* packageAction.getSubCategoryByIdAction */.VV.getSubCategoryByIdAction(category));
        return ()=>{};
    }, [
        category
    ]);
    const handlePricePackageSort = (e)=>{
        setPricePSort(e.target.value);
    };
    const handlePriceTestSort = (e)=>{
        setPriceTSort(e.target.value);
    };
    function Psort() {
        if (packageData?.Packages && packageData?.Packages?.length > 0) {
            let arr = packageData?.Packages;
            let newArr = [];
            if (pricePSort === "low") {
                newArr = [
                    ...arr
                ]?.sort((a, b)=>a?.SellingPrice - b?.SellingPrice);
            } else if (pricePSort === "high") {
                newArr = [
                    ...arr
                ]?.sort((a, b)=>b?.SellingPrice - a?.SellingPrice);
            } else if (pricePSort === "asc") {
                newArr = [
                    ...arr
                ]?.sort((a, b)=>a?.PackageName?.localeCompare(b?.PackageName));
            }
            setPackages(newArr);
        } else {
            setPackages(packageData?.Packages);
        }
    }
    function Tsort() {
        if (testData?.Tests && testData?.Tests.length > 0) {
            let arr = testData?.Tests;
            let newArr = [];
            if (priceTSort === "low") {
                newArr = [
                    ...arr
                ]?.sort((a, b)=>a?.SellingPrice - b?.SellingPrice);
            } else if (priceTSort === "high") {
                newArr = [
                    ...arr
                ]?.sort((a, b)=>b?.SellingPrice - a?.SellingPrice);
            } else if (priceTSort === "asc") {
                newArr = [
                    ...arr
                ]?.sort((a, b)=>a?.TestName?.localeCompare(b?.TestName));
            }
            setTests(newArr);
        } else {
            setTests(testData?.Tests);
        }
    }
    const handlePaginationP = (page)=>{
        setOffsetP((page - 1) * limit);
        setPage(page);
    };
    const handlePaginationT = (page)=>{
        setOffsetT((page - 1) * limit);
        setPage(page);
    };
    const handleSearch = (e)=>{
        let val = e.target.value;
        setSearchTermShow(val);
        if (val && val?.trim()?.length >= 3 || val?.length === 0) {
            setSearchTerm(val);
        }
    };
    const SubCatChange = (e, id)=>{
        e.preventDefault();
        setPage(1);
        setOffsetT(0);
        setOffsetP(0);
        setSubCategory(id);
    };
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(BreadCrumb/* default */.Z, {
                page: t("bread_tests_and_packages"),
                data: {
                    slug: DepName,
                    path: "#"
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "input-group",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                className: "form-control rounded-pill py-2 pr-5 mr-1 bg-transparent",
                                                type: "search",
                                                value: searchTermShow,
                                                placeholder: t("search_teast_packages") || "",
                                                id: "example-search-input",
                                                onChange: handleSearch
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "input-group-append",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "input-group-text border-0 bg-transparent ml-n5",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa fa-search",
                                                        style: {
                                                            color: "#114A82"
                                                        }
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-6 packages tbs d-flex justify-content-end mt-4 mt-sm-0 mr-0",
                                    style: {
                                        maxWidth: "380px"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "nav nav-tabs m-0 p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                onClick: (e)=>hendleTab(e, "packages"),
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    className: tab == "packages" ? "active" : "",
                                                    children: t("packages")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                onClick: (e)=>hendleTab(e, "tests"),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    className: tab == "tests" ? "active" : "",
                                                    children: [
                                                        t("test"),
                                                        " "
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        Object.keys(subCategoryLoader)?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                            children: subCategoryData && subCategoryData?.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row justify-content-center align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col pkj_slider packages",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
                                            ...settings,
                                            children: subCategoryData && subCategoryData?.length > 0 && subCategoryData?.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                    className: "nav nav-tabs",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        onClick: (e)=>SubCatChange(e, item?.Id),
                                                        className: subCategory === item?.Id ? "subCat active" : "subCat",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "d-flex flex-row justify-content-start align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            src: item?.CategoryIcon && item?.CategoryIcon,
                                                                            onError: (e)=>(0,Utils/* ImgPlaceHolder */.IC)(e, "/assets/img/s1.png"),
                                                                            className: "scale_subIcon",
                                                                            alt: "",
                                                                            style: {
                                                                                borderRadius: "50%"
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "ml-0 ml-lg-2 text-capitalize",
                                                                        children: t(item?.CategoryName)
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }, i))
                                        })
                                    })
                                })
                            })
                        }) : /*#__PURE__*/ jsx_runtime.jsx(SectionLoader/* default */.Z, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "sub-section bg-white packageService",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "tab-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            id: "packages",
                            className: tab == "packages" ? "tab-pane fade in active show" : "tab-pane fade in",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "container",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "d-flex flex-row flex-wrap justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "d-flex flex-row justify-content-start align-items-baseline",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "headingmains text-left mr-3 mb-3",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                            className: "right aos-init pb-2 text-capitalize",
                                                            children: t("packages")
                                                        })
                                                    }),
                                                    packages?.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "ml-3 f-14",
                                                        children: `Showing  ${packages?.length === 0 ? 0 : offsetP + 1} - ${offsetP + packages?.length} of ${packageData?.TotalPackages} Result`
                                                    })
                                                ]
                                            }),
                                            packages?.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "form-group d-flex flex-row justify-content-between align-items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-center f-14 mr-3",
                                                        children: t("sort_by")
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                        id: "inputState",
                                                        className: "form-control rounded-pill sort_select",
                                                        value: pricePSort,
                                                        onChange: handlePricePackageSort,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "low",
                                                                children: t("price_lth")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "high",
                                                                children: t("price_htl")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "asc",
                                                                children: t("atz")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    tab === "packages" && Object.keys(packageData)?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                        children: packageData && Array.isArray(packageData?.Packages) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "equal_clm h-services",
                                                    children: packages && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                        children: packages && packages?.length > 0 ? (packages?.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "infobox_wrapper pkj_wrap_box",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        children: [
                                                                            (0,Utils/* FDiscount */.p6)(item?.MRP, item?.SellingPrice) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "dis_icon text-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/discount.jpeg",
                                                                                        className: "scale"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                        className: "img_text_center",
                                                                                        children: [
                                                                                            (0,Utils/* FDiscount */.p6)(item?.MRP, item?.SellingPrice),
                                                                                            " ",
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                                            t("off")
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }) : "",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                className: "infobox_icon_container ",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                    src: "/assets/img/test_blood.png",
                                                                                    className: "scale circle_img"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                                className: "infobox_title text-uppercase",
                                                                                children: item?.PackageName
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "infobox_lines",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/info.png",
                                                                                        className: "scale_booknow"
                                                                                    }),
                                                                                    item?.Recommendation
                                                                                ]
                                                                            }),
                                                                            item?.ComponentCount ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "infobox_lines",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/parameter.png",
                                                                                        className: "scale_booknow"
                                                                                    }),
                                                                                    item?.ComponentCount ? item?.ComponentCount : 0,
                                                                                    " Parameter(s) covered"
                                                                                ]
                                                                            }) : "",
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "infobox_lines",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/daily.png",
                                                                                        className: "scale_booknow"
                                                                                    }),
                                                                                    item?.ReportTAT
                                                                                ]
                                                                            }),
                                                                            item?.SampleReport && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                                href: item?.SampleReport,
                                                                                target: "_blank",
                                                                                className: "infobox_lines",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/report.png",
                                                                                        className: "scale_booknow"
                                                                                    }),
                                                                                    t("sample_report")
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: `${Route/* ROUTE.PACKAGEDETAILS */.l.PACKAGEDETAILS}/${item?.Slug}`,
                                                                                className: "moreButton",
                                                                                children: t("more_btn")
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "d-flex mb-3 justify-content-between align-items-baseline",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            item?.MRP !== item?.SellingPrice && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                                className: "price-redtext",
                                                                                                children: [
                                                                                                    "₹",
                                                                                                    `${item?.MRP}`
                                                                                                ]
                                                                                            }),
                                                                                            " ",
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                                className: "price-bluetext",
                                                                                                children: [
                                                                                                    "₹",
                                                                                                    `${item?.SellingPrice}`
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    item?.MRP - item?.SellingPrice > 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                            className: "price-greentext",
                                                                                            children: [
                                                                                                t("save"),
                                                                                                " ₹",
                                                                                                item?.MRP - item?.SellingPrice
                                                                                            ]
                                                                                        })
                                                                                    }) : ""
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(BookATest_BookButton, {
                                                                                type: "package",
                                                                                data: item
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                href: "#",
                                                                                className: "button--hexagon booknow mt-0",
                                                                                onClick: (e)=>handleModalOpen(e, item?.PackageName),
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                    children: [
                                                                                        "GET A CALL BACK",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right ml-20",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }, i))) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "singl_clm text-center text-dark fs-20",
                                                            children: "No Package Data Available"
                                                        })
                                                    })
                                                }),
                                                packages?.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "row justify-content-between my-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-md-3"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "col-md-9 d-flex justify-content-end align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "mr-3 f-14",
                                                                    children: `Showing  ${offsetP + 1} - ${offsetP + packages?.length} of ${packageData?.TotalPackages} Result`
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "ml-3",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((external_rc_pagination_default()), {
                                                                        onChange: handlePaginationP,
                                                                        current: page,
                                                                        total: Math.ceil(packageData?.TotalPackages / 2)
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(SectionLoader/* default */.Z, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            id: "tests",
                            className: tab == "tests" ? "tab-pane fade active show" : "tab-pane fade",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "container",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "d-flex flex-row flex-wrap justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "d-flex flex-row justify-content-start align-items-baseline",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "headingmains text-left mr-3 mb-3",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                            className: "right aos-init pb-2 text-capitalize",
                                                            children: t("tests")
                                                        })
                                                    }),
                                                    tests?.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "ml-3 f-14",
                                                        children: `${t("Showing")}  ${tests?.length === 0 ? 0 : offsetT + 1} - ${offsetT + tests?.length} ${t("of")} ${testData?.TotalTests} ${t("result")}`
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: tests?.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "form-group d-flex flex-row justify-content-between align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "text-center f-14 mr-3",
                                                            children: t("sort_by")
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                            id: "inputState",
                                                            className: "form-control col-8 rounded-pill sort_select",
                                                            value: priceTSort,
                                                            onChange: handlePriceTestSort,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                    value: "low",
                                                                    children: t("price_lth")
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                    value: "high",
                                                                    children: t("price_htl")
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                    value: "asc",
                                                                    children: t("atz")
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    tab === "tests" && Object.keys(testData)?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                        children: testData && Array.isArray(testData?.Tests) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "equal_clm h-services organslider",
                                                    children: tests && tests.length > 0 ? (tests?.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx((external_react_default()).Fragment, {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "infobox_wrapper pkj_wrap_box",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        children: [
                                                                            (0,Utils/* FDiscount */.p6)(item?.MRP, item?.SellingPrice) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "dis_icon text-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/discount.jpeg",
                                                                                        className: "scale"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                        className: "img_text_center",
                                                                                        children: [
                                                                                            (0,Utils/* FDiscount */.p6)(item?.MRP, item?.SellingPrice),
                                                                                            " ",
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                                            t("off")
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }) : "",
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                className: "infobox_icon_container ",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                    src: "/assets/img/test_blood.png",
                                                                                    className: "scale circle_img"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                                className: "infobox_title text-uppercase",
                                                                                children: item?.TestName
                                                                            }),
                                                                            item?.Recommendation ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "infobox_lines",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/info.png",
                                                                                        className: "scale_booknow"
                                                                                    }),
                                                                                    item?.Recommendation
                                                                                ]
                                                                            }) : "",
                                                                            item?.Components?.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "infobox_lines",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/parameter.png",
                                                                                        className: "scale_bookno`w"
                                                                                    }),
                                                                                    item?.Components?.length,
                                                                                    " Parameter(s) covered"
                                                                                ]
                                                                            }) : "",
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "infobox_lines",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/daily.png",
                                                                                        className: "scale_booknow"
                                                                                    }),
                                                                                    item?.ReportTAT
                                                                                ]
                                                                            }),
                                                                            item?.SampleReport && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                                href: item?.SampleReport,
                                                                                target: "_blank",
                                                                                className: "infobox_lines",
                                                                                children: [
                                                                                    " ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                        src: "/assets/img/report.png",
                                                                                        className: "scale_booknow"
                                                                                    }),
                                                                                    t("sample_report")
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                href: `${Route/* ROUTE.TESTDETAILS */.l.TESTDETAILS}/${item?.Slug}`,
                                                                                className: "moreButton",
                                                                                children: t("plus_more")
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "d-flex mb-3 justify-content-between align-items-baseline",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            item?.MRP !== item?.SellingPrice && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                                className: "price-redtext",
                                                                                                children: [
                                                                                                    "₹",
                                                                                                    `${item?.MRP}`
                                                                                                ]
                                                                                            }),
                                                                                            " ",
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                                className: "price-bluetext",
                                                                                                children: [
                                                                                                    "₹",
                                                                                                    `${item?.SellingPrice}`
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    item?.MRP - item?.SellingPrice > 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                            className: "price-greentext",
                                                                                            children: [
                                                                                                t("save"),
                                                                                                " ₹",
                                                                                                item?.MRP - item?.SellingPrice
                                                                                            ]
                                                                                        })
                                                                                    }) : ""
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx(BookATest_BookButton, {
                                                                                type: "test",
                                                                                data: item
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                href: "#",
                                                                                className: "button--hexagon booknow mt-0",
                                                                                onClick: (e)=>handleModalOpen(e, item?.TestName),
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                    children: [
                                                                                        "GET A CALL BACK",
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                            className: "fa fa-long-arrow-right ml-20",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        }, i))) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "singl_clm text-center text-dark fs-20",
                                                        children: "No Test Data Available"
                                                    })
                                                }),
                                                tests?.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "row justify-content-between my-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-md-3"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "col-md-9 d-flex justify-content-end align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "mr-3 f-14",
                                                                    children: `${t("Showing")}  ${offsetT + 1} - ${offsetT + tests?.length} ${t("of")} ${testData?.TotalTests} ${t("result")}`
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "ml-3",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((external_rc_pagination_default()), {
                                                                        onChange: handlePaginationT,
                                                                        current: page,
                                                                        total: Math.ceil(testData?.TotalTests / 2)
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(SectionLoader/* default */.Z, {})
                                ]
                            })
                        })
                    ]
                })
            }),
            modalIsOpen && /*#__PURE__*/ jsx_runtime.jsx(BookATest_SendQueryModal, {
                modalIsOpen: modalIsOpen,
                setModalIsOpen: setModalIsOpen,
                test: tab == "packages" ? false : true,
                code: code
            })
        ]
    });
};
async function getStaticProps({ locale  }) {
    return {
        props: {
            messages: (await __webpack_require__(2977)(`./${locale}/translation.json`)).default
        }
    };
}
/* harmony default export */ const book_a_test = (BookATest);


/***/ }),

/***/ 6307:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

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

/***/ 1223:
/***/ ((module) => {

"use strict";
module.exports = require("react-loader-spinner");

/***/ }),

/***/ 9931:
/***/ ((module) => {

"use strict";
module.exports = require("react-modal");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,993,997,475], () => (__webpack_exec__(8479)));
module.exports = __webpack_exports__;

})();