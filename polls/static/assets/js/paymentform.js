! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 167)
}([function(t, e, n) {
    "use strict";
    e.a = {
        events: {
            LOAD_FORM_CONTROLLER: "loadFormController",
            REQUEST_CARD_NONCE_IF_VALID_FORM: "requestCardNonceIfValidForm",
            BUILD_STYLES_FOR_SCREEN_WIDTH: "buildStylesForScreenWidth",
            SET_POSTAL_CODE: "setPostalCode",
            BLUR_ALL_INPUTS: "blurAllInputs",
            LOAD_WALLET: "loadWallet",
            SET_ANALYTICS_TOKEN: "setAnalyticsToken",
            CARD_NONCE_RESPONSE_RECEIVED: "cardNonceResponseReceived",
            FIRST_INTERACTION: "firstInteraction",
            INPUT_EVENT_RECEIVED: "inputEventReceived",
            SET_INPUT_HEIGHT: "setInputHeight",
            PAYMENT_FORM_LOADED: "paymentFormLoaded",
            REQUEST_APPLE_PAY_CARD_NONCE: "requestApplePayCardNonce",
            RECEIVE_APPLE_PAY_CARD_NONCE: "receiveApplePayCardNonce",
            REQUEST_APPLE_PAY_MERCHANT_VALIDITY: "requestApplePayMerchantValidity",
            RECEIVE_APPLE_PAY_VALID_MERCHANT: "receiveApplePayValidMerchant",
            REQUEST_GOOGLE_PAY_CARD_NONCE: "requestGooglePayCardNonce",
            RECEIVE_GOOGLE_PAY_CARD_NONCE: "receiveGooglePayCardNonce",
            REQUEST_GOOGLE_PAY_TOKEN: "requestGooglePayToken",
            RECEIVE_GOOGLE_PAY_TOKEN: "receiveGooglePayToken",
            RECEIVE_MASTERPASS_TRANSACTION: "receiveMasterpassTransaction",
            SET_MASTERPASS_CHECKOUT_ID: "setMasterpassCheckoutId",
            REQUEST_MASTERPASS_CARD_NONCE: "requestMasterpassCardNonce"
        },
        inputEvents: {
            SUBMIT: "submit",
            EMPTY_STATE_CHANGED: "emptyStateChanged",
            FOCUS_CLASS_ADDED: "focusClassAdded",
            FOCUS_CLASS_REMOVED: "focusClassRemoved",
            ERROR_CLASS_ADDED: "errorClassAdded",
            ERROR_CLASS_REMOVED: "errorClassRemoved",
            CARD_BRAND_CHANGED: "cardBrandChanged",
            POSTAL_CODE_CHANGED: "postalCodeChanged"
        },
        inputTypes: {
            GIFT_CARD: "giftCard",
            CARD_NUMBER: "cardNumber",
            CVV: "cvv",
            EXPIRATION_DATE: "expirationDate",
            POSTAL_CODE: "postalCode",
            SINGLE_CARD: "card"
        },
        paymentMethods: {
            GIFT_CARD: "giftCard",
            KEYED_CARD: "keyedCard",
            APPLE_PAY: "applePay",
            GOOGLE_PAY: "googlePay",
            MASTERPASS: "masterpass",
            SINGLE_CARD: "card"
        },
        GOOGLE_PAY_JS: "https://pay.google.com/gp/p/js/pay.js"
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? function() {
            if (void 0 !== t) return t;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }() : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && l(t, e)
    }

    function s(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (s = function(t) {
            if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
            var n;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, i)
            }

            function i() {
                return function(t, e, n) {
                    return (function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }() ? Reflect.construct : function(t, e, n) {
                        var i = [null];
                        i.push.apply(i, e);
                        var r = new(Function.bind.apply(t, i));
                        return n && l(r, n.prototype), r
                    }).apply(null, arguments)
                }(t, arguments, c(this).constructor)
            }
            return i.prototype = Object.create(t.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(i, t)
        })(t)
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t) {
        return "https://developer.squareup.com/docs/api/paymentform" + (t || "")
    }

    function p(t) {
        return "https://developer.squareup.com/docs/payment-form/add-digital-wallets/apple-pay" + (t || "")
    }
    n.d(e, "p", function() {
        return d
    }), n.d(e, "a", function() {
        return h
    }), n.d(e, "b", function() {
        return f
    }), n.d(e, "e", function() {
        return y
    }), n.d(e, "c", function() {
        return E
    }), n.d(e, "s", function() {
        return S
    }), n.d(e, "o", function() {
        return I
    }), n.d(e, "l", function() {
        return T
    }), n.d(e, "f", function() {
        return q
    }), n.d(e, "g", function() {
        return V
    }), n.d(e, "d", function() {
        return G
    }), n.d(e, "q", function() {
        return U
    }), n.d(e, "n", function() {
        return j
    }), n.d(e, "h", function() {
        return B
    }), n.d(e, "m", function() {
        return H
    }), n.d(e, "i", function() {
        return z
    }), n.d(e, "r", function() {
        return Y
    }), n.d(e, "v", function() {
        return K
    }), n.d(e, "u", function() {
        return Q
    }), n.d(e, "j", function() {
        return Z
    }), n.d(e, "k", function() {
        return $
    }), n(25), n(26), n(19), n(17), n(102), n(125), n(128), n(46), n(12), n(107), n(21), n(9);
    var d = function() {
            function t(e) {
                var n;
                return r(this, t), (n = o(this, c(t).call(this, e || "Unknown SqError"))).name = "SqError", n
            }
            return a(t, s(Error)), t
        }(),
        h = function() {
            function t(e) {
                var n;
                return r(this, t), (n = o(this, c(t).call(this, "SqPaymentForm element with id '".concat(e, "' not found. Has the DOM finished loading?\nSee: ").concat("https://developer.squareup.com/docs/payment-form/payment-form-walkthrough#12-embed-sqpaymentform-in-a-static-web-page")))).name = "ElementNotFoundError", n
            }
            return a(t, d), t
        }(),
        f = function() {
            function t(e) {
                var n;
                return r(this, t), (n = o(this, c(t).call(this, "SqPaymentForm element with id '".concat(e, "' is not visible. Does it or a parent element have 'display:none'?")))).name = "ElementNotVisibleError", n
            }
            return a(t, d), t
        }(),
        y = function() {
            function t(e) {
                var n;
                return r(this, t), (n = o(this, c(t).call(this, "SqPaymentForm field '".concat(e, "' is invalid.")))).name = "InvalidFieldError", n
            }
            return a(t, d), t
        }(),
        m = function() {
            function t() {
                var e;
                return r(this, t), (e = o(this, c(t).call(this, "SqPaymentForm can only be embedded on sites that use HTTPS.\nSee: ".concat("https://developer.squareup.com/docs/payment-form/troubleshooting#the-sqpaymentform-iframe-is-not-loading")))).name = "HttpsRequiredError", e
            }
            return a(t, d), t
        }(),
        g = function() {
            function t(e) {
                var n;
                return r(this, t), (n = o(this, c(t).call(this, "Cannot call SqPaymentForm#".concat(e, " after SqPaymentForm#destroy. Create a new SqPaymentForm instance instead.")))).name = "FormAlreadyDestroyedError", n
            }
            return a(t, d), t
        }(),
        v = function() {
            function t(e) {
                var n;
                return r(this, t), (n = o(this, c(t).call(this, "Cannot call SqPaymentForm#".concat(e, " before the paymentFormLoaded() callback. See Step 4: ").concat("https://developer.squareup.com/docs/payment-form/how-it-works#the-sqpaymentform-process-flow")))).name = "FormNotReadyError", n
            }
            return a(t, d), t
        }(),
        _ = function() {
            function t() {
                var e;
                r(this, t);
                var n = u("#build");
                return (e = o(this, c(t).call(this, "SqPaymentForm#build called more than once. Did you mean to call SqPaymentForm#destroy first?\nSee: ".concat(n)))).name = "FormAlreadyBuiltError", e
            }
            return a(t, d), t
        }(),
        E = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#destroy");
                return (n = o(this, c(t).call(this, "Iframe '".concat(e, "' no longer exists. Was SqPaymentForm#destroy called?.\nSee: ").concat(i)))).name = "IframeDoesNotExistError", n
            }
            return a(t, d), t
        }(),
        S = function() {
            function t() {
                var e;
                r(this, t);
                var n = u("#shippingcontactchanged");
                return (e = o(this, c(t).call(this, "validateShippingContact() has been deprecated. Please use shippingContactChanged().\nSee: ".concat(n)))).name = "ValidateShippingContactDeprecatedError", e
            }
            return a(t, d), t
        }(),
        b = function() {
            function t() {
                var e;
                return r(this, t), (e = o(this, c(t).call(this, "Only one of 'locationId' or 'accountId' can be specified."))).name = "TooManyIdsError", e
            }
            return a(t, d), t
        }(),
        I = function() {
            function t() {
                var e;
                return r(this, t), (e = o(this, c(t).call(this, "A request is already in progress."))).name = "RequestInProgressError", e
            }
            return a(t, d), t
        }(),
        C = function() {
            function t(e, n) {
                var i;
                r(this, t);
                var a = u("#paymentform-configurationfields");
                return (i = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' argument must be of type '").concat(n, "'.\nSee: ").concat(a)))).name = "InvalidArgumentError", i
            }
            return a(t, d), t
        }(),
        P = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#paymentform-configurationfields");
                return (n = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' argument is required.\nSee: ").concat(i)))).name = "MissingArgumentError", n
            }
            return a(t, d), t
        }(),
        A = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#_paymentform_functions");
                return (n = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' function was called with missing or invalid parameters.\nSee: ").concat(i)))).name = "InvalidFunctionArgumentError", n
            }
            return a(t, d), t
        }(),
        w = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#paymentform-configurationfields");
                return (n = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' option value is invalid.\nSee: ").concat(i)))).name = "InvalidOptionError", n
            }
            return a(t, d), t
        }(),
        O = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#paymentform-configurationfields");
                return (n = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' option type is invalid.\nSee: ").concat(i)))).name = "InvalidOptionType", n
            }
            return a(t, d), t
        }(),
        T = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#paymentform-configurationfields");
                return (n = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' option is required.\nSee: ").concat(i)))).name = "MissingOptionError", n
            }
            return a(t, d), t
        }(),
        R = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#paymentform-configurationfields");
                return (n = o(this, c(t).call(this, "The SqPaymentForm 'elementId' option is required for '".concat(e, "'.\nSee: ").concat(i)))).name = "MissingElementIdError", n
            }
            return a(t, d), t
        }(),
        k = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#paymentform-configurationfields");
                return (n = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' option is required.\nSee: ").concat(i)))).name = "MissingInputTypeError", n
            }
            return a(t, d), t
        }(),
        N = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#paymentform-configurationfields");
                return (n = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' option is not expected in this configuration.\nSee: ").concat(i)))).name = "UnexpectedInputTypeError", n
            }
            return a(t, d), t
        }(),
        L = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#_callbackfunctions_detail");
                return (n = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' callback is required.\nSee: ").concat(i)))).name = "MissingCallbackError", n
            }
            return a(t, d), t
        }(),
        M = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#_callbackfunctions_detail");
                return (n = o(this, c(t).call(this, "The SqPaymentForm '".concat(e, "' callback must be a function.\nSee: ").concat(i)))).name = "InvalidCallbackError", n
            }
            return a(t, d), t
        }(),
        D = function() {
            function t() {
                var e;
                r(this, t);
                var n = u("#paymentform-configurationfields");
                return (e = o(this, c(t).call(this, "The SqPaymentForm 'applicationId' option is not in the correct format. \nSee: ".concat(n)))).name = "InvalidApplicationIdError", e
            }
            return a(t, d), t
        }(),
        F = function() {
            function t() {
                var e;
                r(this, t);
                var n = u("#paymentform-configurationfields");
                return (e = o(this, c(t).call(this, "The SqPaymentForm requires at least one payment method.\nSee: ".concat(n)))).name = "MissingPaymentMethodError", e
            }
            return a(t, d), t
        }(),
        x = function() {
            function t() {
                var e;
                r(this, t);
                var n = u("#paymentform-configurationfields");
                return (e = o(this, c(t).call(this, "The SqPaymentForm 'inputStyles' option must be an array.\nSee: ".concat(n)))).name = "InvalidInputStylesError", e
            }
            return a(t, d), t
        }(),
        q = function() {
            function t(e) {
                var n;
                r(this, t);
                var i = u("#datatype-inputstyleobjects");
                return (n = o(this, c(t).call(this, "Invalid InputStyle property: '".concat(e, "'.\nSee: ").concat(i)))).name = "InvalidInputStylePropertyError", n
            }
            return a(t, d), t
        }(),
        V = function() {
            function t(e, n) {
                var i;
                r(this, t);
                var a = u("#datatype-inputstyleobjects");
                return (i = o(this, c(t).call(this, "Invalid InputStyle value '".concat(e, "' for property '").concat(n, "'.\nSee: ").concat(a)))).name = "InvalidInputStyleValueError", i
            }
            return a(t, d), t
        }(),
        G = function() {
            function t() {
                var e;
                return r(this, t), (e = o(this, c(t).call(this, "Input height zero detected; using fallback value."))).name = "InputHeightZeroError", e
            }
            return a(t, d), t
        }(),
        U = function() {
            function t(e, n, i) {
                var a;
                return r(this, t), (a = o(this, c(t).call(this, "Request timeout exceeded (attempts=".concat(e, "; ").concat(n, "ms; ").concat(i, ")")))).name = "TimeoutError", a
            }
            return a(t, d), t
        }(),
        j = function() {
            function t(e, n, i) {
                var a;
                return r(this, t), (a = o(this, c(t).call(this, "Network error during request (attempts=".concat(e, "; ").concat(n, "ms; ").concat(i, ")")))).name = "NetworkError", a
            }
            return a(t, d), t
        }(),
        B = function() {
            function t(e, n) {
                var i;
                return r(this, t), (i = o(this, c(t).call(this, "Invalid JSON received from ".concat(e, "; status=").concat(n)))).name = "InvalidJsonError", i
            }
            return a(t, d), t
        }(),
        W = function() {
            function t() {
                var e;
                return r(this, t), (e = o(this, c(t).call(this, "Browser not supported.\nSee: ".concat("https://developer.squareup.com/docs/payment-form/what-it-does#prerequisites")))).name = "UnsupportedBrowserError", e
            }
            return a(t, d), t
        }(),
        H = function() {
            function t() {
                var e;
                r(this, t);
                var n = p("#payment-request-object-example");
                return (e = o(this, c(t).call(this, "The label field in the 'PaymentRequest.total' object must be set " + "with the merchant name to use Apple Pay with an Account ID.\nSee: ".concat(n)))).name = "MissingTotalLabelError", e
            }
            return a(t, d), t
        }(),
        z = function() {
            function t(e) {
                var n;
                return r(this, t), (n = o(this, c(t).call(this, e))).name = "InvalidOriginError", n
            }
            return a(t, d), t
        }(),
        Y = function() {
            function t(e) {
                var n;
                return r(this, t), (n = o(this, c(t).call(this, e))).name = "UnexpectedError", n
            }
            return a(t, d), t
        }();

    function K(t) {
        return {
            fileName: t.fileName,
            name: t.name,
            message: t.message,
            stack: t.stack
        }
    }

    function Q(t) {
        var e = new(J[t.name] || d);
        return t.message && (e.message = t.message), e.fileName = t.fileName, e.stack = t.stack, e
    }
    var J = {
            SqError: d,
            ElementNotFoundError: h,
            ElementNotVisibleError: f,
            InvalidFieldError: y,
            HttpsRequiredError: m,
            FormAlreadyDestroyedError: g,
            FormNotReadyError: v,
            FormAlreadyBuiltError: _,
            IframeDoesNotExistError: E,
            RequestInProgressError: I,
            TooManyIdsError: b,
            ValidateShippingContactDeprecatedError: S,
            InvalidArgumentError: C,
            MissingArgumentError: P,
            InvalidFunctionArgumentError: A,
            InvalidOptionError: w,
            InvalidOptionType: O,
            MissingOptionError: T,
            MissingElementIdError: R,
            MissingInputTypeError: k,
            UnexpectedInputTypeError: N,
            MissingCallbackError: L,
            InvalidCallbackError: M,
            InvalidApplicationIdError: D,
            MissingPaymentMethodError: F,
            InvalidInputStylesError: x,
            InvalidInputStylePropertyError: q,
            InvalidInputStyleValueError: V,
            InputHeightZeroError: G,
            NetworkError: j,
            TimeoutError: U,
            UnsupportedBrowserError: W,
            MissingTotalLabelError: H,
            InvalidJsonError: B,
            InvalidOriginError: z,
            UnexpectedError: Y
        },
        X = {
            serializeError: K,
            deserializeError: Q
        };
    e.t = Object.assign({}, J, X);
    var Z = {
            WALLET_NOT_REQUESTED: {
                type: "WALLET_NOT_REQUESTED",
                message: "Wallet is not specified in the SqPaymentForm config.\nSee: ".concat(u("#paymentform-configurationfields"))
            },
            INVALID_CONFIG: {
                type: "INVALID_CONFIG",
                message: "Wallet configuration is invalid."
            },
            UNKNOWN: {
                type: "UNKNOWN",
                message: "An unknown error has occurred."
            },
            INTERNAL_ERROR: {
                type: "INTERNAL_ERROR",
                message: "An internal error has occurred."
            },
            RESOURCE_NOT_LOADED: {
                type: "RESOURCE_NOT_LOADED",
                message: "A necessary external resource has failed to load."
            },
            APPLE_PAY_BROWSER_NOT_SUPPORTED: {
                type: "BROWSER_NOT_SUPPORTED",
                message: "Apple Pay is only available on Safari."
            },
            APPLE_PAY_DEVICE_NOT_SUPPORTED: {
                type: "DEVICE_NOT_SUPPORTED",
                message: "Device does not support Apple Pay.\nSee: ".concat(p("#prerequisites-and-assumptions"))
            },
            APPLE_PAY_NOT_REGISTERED: {
                type: "NOT_REGISTERED",
                message: "No active card available in the Apple Wallet or domain not registered."
            },
            GOOGLE_PAY_BROWSER_NOT_SUPPORTED: {
                type: "BROWSER_NOT_SUPPORTED",
                message: "Browser does not support Google Pay.\nSee: ".concat("https://developer.squareup.com/docs/payment-form/add-digital-wallets/google-pay#prerequsites-and-assumptions")
            }
        },
        $ = {
            US_MERCHANT_ONLY: {
                type: "US_MERCHANT_ONLY",
                message: "Wallet is available for US merchants only."
            },
            US_AND_UK_MERCHANT_ONLY: {
                type: "US_AND_UK_MERCHANT_ONLY",
                message: "Wallet is available for US and UK merchants only."
            },
            COUNTRY_NOT_SUPPORTED: {
                type: "COUNTRY_NOT_SUPPORTED",
                message: "Wallet is not available in your country.\n See: https://developer.squareup.com/docs/payments-digital-wallets"
            },
            MISSING_LOCATION_ID: {
                type: "MISSING_LOCATION_ID",
                message: "Missing locationId in the SqPaymentForm configuration.\nSee: ".concat(u("#paymentform-configurationfields")),
                field: "locationId"
            },
            INACTIVE_PLATFORM_ACCOUNT: {
                type: "INACTIVE_PLATFORM_ACCOUNT",
                message: "The platform account associated with provided accountId is inactive.",
                field: "accountId"
            },
            APPLICATION_DISABLED: {
                type: "APPLICATION_DISABLED",
                message: "Wallet is disabled for your application."
            },
            UNVERIFIED_DOMAIN: {
                type: "UNVERIFIED_DOMAIN",
                message: "The domain has not been verified by Apple.\nSee: ".concat(p("#production-configuration"))
            }
        }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(25), n(26), n(87), n(21), n(19), n(17), n(23), n(9), n(90), n(61), n(46), n(12);
    var r = {},
        o = Object.prototype.hasOwnProperty;
    r.hasOwn = function(t, e) {
        return o.call(t, e)
    }, r.guid = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }, r.isValidWindow = function(t) {
        return !!t && "object" === i(t) && "function" == typeof t.postMessage
    }, r.isValidDocument = function(t) {
        return !!t && "object" === i(t) && !!t.body && "object" === i(t.body) && "function" == typeof t.body.appendChild
    }, r.typeOf = function(t) {
        if (null === t) return "null";
        if (t !== Object(t)) return i(t);
        var e = Object.prototype.toString.call(t).replace(/^\[(?:function|object) |\]$/g, "").toLowerCase();
        return -1 < e.indexOf("function") ? "function" : e
    }, r.constructorOf = function(t) {
        try {
            var e = t.constructor.toString().match(/[function|object] (\w*)/);
            if (e) return e[1]
        } catch (t) {}
        return ""
    }, r.isValidDataType = function(t, e, n, r) {
        return n instanceof r || i(n) === r.name.toLowerCase() || (window.console.error("".concat(t, " in ").concat(e, " must be of type ").concat(r.name, ".")), !1)
    }, r.logInvalidFieldsError = function(t, e) {
        var n = e.join(", ");
        window.console.error("Invalid ".concat(t, " field(s): ").concat(n))
    }, r.url = function(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : {},
            i = "";
        return Object.keys(n).forEach(function(t) {
            var e = i.length ? "&" : "?";
            i += e + encodeURIComponent(t) + "=" + encodeURIComponent(n[t])
        }), encodeURI(t) + i
    }, r.versionedUrl = function(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return e = Object.assign({}, e, {
            version: "d2252de9ba"
        }), r.url(t, e)
    };
    var a, s = {
        href: "",
        protocol: "",
        host: "",
        hostname: "",
        port: "",
        pathname: "",
        search: "",
        hash: "",
        username: "",
        password: "",
        origin: "",
        toString: function() {
            return ""
        }
    };
    r.parseUrl = function(t) {
        return t ? ((a = a || document.createElement("a")).href = "".concat(t), {
            hash: a.hash,
            host: a.host,
            hostname: a.hostname,
            href: a.href,
            origin: a.origin,
            password: a.password,
            pathname: a.pathname,
            port: a.port,
            protocol: a.protocol,
            search: a.search,
            username: a.username,
            toString: function() {
                return a.href
            }
        }) : s
    }, r.getParentLocation = function() {
        return window.location === window.parent.location ? window.location : r.parseUrl(document.referrer)
    }, r.baseUrl = function(t) {
        return t.href ? l.test(t.protocol) && t.host ? t.protocol + "//" + t.host : r.NOT_PARSABLE_TOKEN : ""
    };
    var l = /^https?:$/;

    function c(t) {
        return "sandbox" === t
    }
    r.NOT_PARSABLE_TOKEN = "[Not Parsable]", r.embeddingAllowed = function(t) {
        return /localhost$/.test(t.hostname) || "https:" === t.protocol
    }, r.debounce = function(t, e) {
        var n;
        return function() {
            clearTimeout(n), n = setTimeout(t, e)
        }
    }, r.shouldTrackEvents = function() {
        return !/localhost$/.test(window.location.hostname) || c("development")
    }, r.isProduction = function() {
        return c("production")
    }, r.isSandbox = function() {
        return c("sandbox")
    }, e.a = r
}, , function(t, e, n) {
    var i = n(51)("wks"),
        r = n(39),
        o = n(8).Symbol,
        a = "function" == typeof o;
    (t.exports = function(t) {
        return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
    }).store = i
}, function(t, e, n) {
    var i = n(13);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, n) {
    t.exports = !n(10)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    "use strict";
    e.a = {
        messages: {
            cardNumber: {
                details: "Enter your card number",
                error: "Please enter a valid card number"
            },
            expirationDate: {
                details: "Enter the expiry date",
                error: "Please enter a valid expiry date"
            },
            cvv: {
                details: "Enter the CVV number",
                error: "Please enter a valid CVV number"
            },
            postalCode: {
                details: "Enter the ZIP code linked to this card",
                error: "Please enter a valid ZIP code"
            }
        },
        classNames: {
            base: "sq-card",
            input: "sq-input",
            error: "sq-error",
            focus: "sq-focus",
            flip: "sq-flip",
            hide: "sq-hide",
            transform: "sq-transform"
        },
        inputTypes: {
            CARD_NUMBER: "cardNumber",
            EXPIRATION_DATE: "expirationDate",
            CVV: "cvv",
            POSTAL_CODE: "postalCode"
        },
        defaultStyles: {
            placeholder: {
                color: "#C7C7CC"
            },
            autoFill: {
                color: "#0076D6"
            },
            error: {
                color: "#FF3E39",
                backgroundColor: "#FFEDED"
            }
        }
    }
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    var i = n(16).f,
        r = Function.prototype,
        o = /^\s*function ([^ (]*)/;
    "name" in r || n(6) && i(r, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(o)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var i = n(8),
        r = n(35),
        o = n(28),
        a = n(18),
        s = n(40),
        l = "prototype",
        c = function(t, e, n) {
            var u, p, d, h, f = t & c.F,
                y = t & c.G,
                m = t & c.S,
                g = t & c.P,
                v = t & c.B,
                _ = y ? i : m ? i[e] || (i[e] = {}) : (i[e] || {})[l],
                E = y ? r : r[e] || (r[e] = {}),
                S = E[l] || (E[l] = {});
            for (u in y && (n = e), n) d = ((p = !f && _ && void 0 !== _[u]) ? _ : n)[u], h = v && p ? s(d, i) : g && "function" == typeof d ? s(Function.call, d) : d, _ && a(_, u, d, t & c.U), E[u] != d && o(E, u, h), g && S[u] != d && (S[u] = d)
        };
    i.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function(t, e, n) {
    "use strict";
    var i = n(68),
        r = {};
    r[n(4)("toStringTag")] = "z", r + "" != "[object z]" && n(18)(Object.prototype, "toString", function() {
        return "[object " + i(this) + "]"
    }, !0)
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return u
    }), n.d(e, "b", function() {
        return p
    }), n(25), n(26), n(9), n(23), n(19), n(17), n(12), n(72), n(22), n(31), n(21), n(132);
    var i = n(2),
        r = n(38);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function l(t, e, n) {
        return e && s(t.prototype, e), n && s(t, n), t
    }
    var c = i.a.versionedUrl("https://pci-connect.squareupsandbox.com/v2/v"),
        u = Object.freeze({
            LOAD_EVENT: 0,
            NONCE_EVENT: 1,
            CONFIG_EVENT: 2,
            METHODS_SUPPORTED_EVENT: 5,
            GENERAL_EVENT: 7
        }),
        p = function() {
            function t(e) {
                a(this, t), this._options = Object.assign({}, e)
            }
            return l(t, [{
                key: "create",
                value: function(t, e) {
                    if (e = e || {}, !Object.values(u).includes(t)) throw new TypeError("Invalid event type: '".concat(t, "'"));
                    if ("object" !== o(e)) throw new TypeError("Invalid fields: '".concat(e, "'"));
                    var n = i.a.baseUrl(window.location),
                        r = i.a.baseUrl(i.a.getParentLocation()),
                        a = Object.assign({}, e, {
                            e: t,
                            a: this._options.applicationId,
                            o: this._options.locationId,
                            n: this._options.sessionId,
                            q: this._options.accountId,
                            s: "SqPaymentForm",
                            u: n,
                            v: r,
                            w: this._options.apiWrapper
                        });
                    return new d(a)
                }
            }, {
                key: "send",
                value: function(t, e) {
                    if (!(t instanceof d)) throw TypeError("Expected 'SqEvent'");
                    r.a.post(c, {
                        json: t.toObject()
                    }, e)
                }
            }, {
                key: "track",
                value: function(t, e, n) {
                    var r = 2 < arguments.length && void 0 !== n ? n : function() {};
                    if (i.a.shouldTrackEvents()) {
                        var o = this.create(t, e);
                        this.send(o, r)
                    } else r(null, {
                        status: 200,
                        statusText: "OK"
                    }, "")
                }
            }, {
                key: "sessionId",
                set: function(t) {
                    this._options.sessionId || (this._options.sessionId = t)
                },
                get: function() {
                    return this._options.sessionId
                }
            }]), t
        }(),
        d = function() {
            function t(e) {
                var n = this;
                a(this, t), this._fields = {}, Object.keys(e).forEach(function(t) {
                    return n.set(t, e[t])
                })
            }
            return l(t, [{
                key: "set",
                value: function(t, e) {
                    if (void 0 !== this._fields[t]) throw new Error("Field '".concat(t, "' already set."));
                    this._fields[t] = e
                }
            }, {
                key: "get",
                value: function(t) {
                    return this._fields[t]
                }
            }, {
                key: "toObject",
                value: function() {
                    return Object.assign({}, this._fields)
                }
            }, {
                key: "type",
                get: function() {
                    return this._fields.e
                }
            }]), t
        }();
    e.c = p
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return u
    }), n.d(e, "a", function() {
        return p
    }), n(61), n(22), n(19), n(17), n(12), n(23);
    var i = n(2),
        r = n(1),
        o = n(34),
        a = ["backgroundColor", "boxSizing", "boxShadow", "color", "fontFamily", "fontSize", "fontWeight", "letterSpacing", "lineHeight", "padding", "_webkitFontSmoothing", "_mozOsxFontSmoothing"],
        s = ["display"],
        l = ["borderRadius"],
        c = ["mediaMaxWidth", "mediaMinWidth"],
        u = {
            DEFAULT: "default",
            FORM_DETAILS: "formDetails",
            FORM_WRAPPER: "formWrapper"
        },
        p = "ignore",
        d = {
            buildStylesForScreenWidth: function(t, e) {
                var n = this,
                    r = {};
                return t.forEach(function(t) {
                    if (n.stylesApplyToScreenWidth(t, e))
                        for (var o in t) i.a.hasOwn(t, o) && (r[o] = t[o])
                }), this.styleStringForStyleObject(r)
            },
            styleStringForStyleObject: function(t, e) {
                var n = this,
                    i = 1 < arguments.length && void 0 !== e ? e : u.DEFAULT,
                    r = [];
                return Object.keys(t).forEach(function(e) {
                    c.includes(e) || t[e] !== p && r.push(n.styleStringForKeyValuePair(e, t[e], i))
                }), r.join(" ")
            },
            stylesApplyToScreenWidth: function(t, e) {
                var n = t.mediaMinWidth,
                    i = t.mediaMaxWidth;
                if (!n && !i) return !0;
                if (n) {
                    if (void 0 === o.a.sanitizeMediaFeatureValue("min-width", n)) throw new r.g(n, "mediaMinWidth");
                    if (!this.isAboveMinWidth(n, e)) return !1
                }
                if (i) {
                    if (void 0 === o.a.sanitizeMediaFeatureValue("max-width", i)) throw new r.g(i, "mediaMaxWidth");
                    if (!this.isBelowMaxWidth(i, e)) return !1
                }
                return !0
            },
            isAboveMinWidth: function(t, e) {
                return e >= parseInt(t, 10)
            },
            isBelowMaxWidth: function(t, e) {
                return e <= parseInt(t, 10)
            },
            styleStringForKeyValuePair: function(t, e, n) {
                var i = 2 < arguments.length && void 0 !== n ? n : u.DEFAULT,
                    c = a.includes(t);
                switch (i) {
                    case u.FORM_DETAILS:
                        c = c || s.includes(t);
                        break;
                    case u.FORM_WRAPPER:
                        c = c || l.includes(t)
                }
                if (!c) throw new r.f(t);
                var p = this.cssProperty(t),
                    d = o.a.sanitizeDeclarationValue(p, e);
                if (void 0 === d) throw new r.g(e, t);
                return this.formatKeyValuePair(p, d)
            },
            cssProperty: function(t) {
                return t.replace(/^_/g, "-").replace(/(?!^)([A-Z])/g, " $1").replace(/[_\s]+(?=[a-zA-Z])/g, "-").toLowerCase()
            },
            formatKeyValuePair: function(t, e) {
                return t + ": " + e + ";"
            }
        };
    e.c = d
}, function(t, e, n) {
    var i = n(5),
        r = n(81),
        o = n(52),
        a = Object.defineProperty;
    e.f = n(6) ? Object.defineProperty : function(t, e, n) {
        if (i(t), e = o(e, !0), i(n), r) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(75),
        r = n(88),
        o = n(44),
        a = n(30);
    t.exports = n(70)(Array, "Array", function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(t, e, n) {
    var i = n(8),
        r = n(28),
        o = n(27),
        a = n(39)("src"),
        s = n(112),
        l = "toString",
        c = ("" + s).split(l);
    n(35).inspectSource = function(t) {
        return s.call(t)
    }, (t.exports = function(t, e, n, s) {
        var l = "function" == typeof n;
        l && (o(n, "name") || r(n, "name", e)), t[e] !== n && (l && (o(n, a) || r(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === i ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
    })(Function.prototype, l, function() {
        return "function" == typeof this && this[a] || s.call(this)
    })
}, function(t, e, n) {
    for (var i = n(17), r = n(29), o = n(18), a = n(8), s = n(28), l = n(44), c = n(4), u = c("iterator"), p = c("toStringTag"), d = l.Array, h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, f = r(h), y = 0; y < f.length; y++) {
        var m, g = f[y],
            v = h[g],
            _ = a[g],
            E = _ && _.prototype;
        if (E && (E[u] || s(E, u, d), E[p] || s(E, p, g), l[g] = d, v))
            for (m in i) E[m] || o(E, m, i[m], !0)
    }
}, , function(t, e, n) {
    var i = n(11);
    i(i.S + i.F, "Object", {
        assign: n(119)
    })
}, function(t, e, n) {
    "use strict";
    var i = n(11),
        r = n(84)(!0);
    i(i.P, "Array", {
        includes: function(t, e) {
            return r(this, t, 1 < arguments.length ? e : void 0)
        }
    }), n(75)("includes")
}, function(t, e, n) {
    var i = n(37),
        r = n(29);
    n(89)("keys", function() {
        return function(t) {
            return r(i(t))
        }
    })
}, , function(t, e, n) {
    n(79)("asyncIterator")
}, function(t, e, n) {
    "use strict";

    function i(t) {
        var e = Y[t] = R(V[j]);
        return e._k = t, e
    }

    function r(t, e) {
        C(t);
        for (var n, i = b(e = w(e)), r = 0, o = i.length; r < o;) et(t, n = i[r++], e[n]);
        return t
    }

    function o(t) {
        var e = H.call(this, t = O(t, !0));
        return !(this === Q && u(Y, t) && !u(K, t)) && (!(e || !u(this, t) || !u(Y, t) || u(this, B) && this[B][t]) || e)
    }

    function a(t, e) {
        if (t = w(t), e = O(e, !0), t !== Q || !u(Y, e) || u(K, e)) {
            var n = F(t, e);
            return !n || !u(Y, e) || u(t, B) && t[B][e] || (n.enumerable = !0), n
        }
    }

    function s(t) {
        for (var e, n = q(w(t)), i = [], r = 0; n.length > r;) u(Y, e = n[r++]) || e == B || e == f || i.push(e);
        return i
    }

    function l(t) {
        for (var e, n = t === Q, i = q(n ? K : w(t)), r = [], o = 0; i.length > o;) !u(Y, e = i[o++]) || n && !u(Q, e) || r.push(Y[e]);
        return r
    }
    var c = n(8),
        u = n(27),
        p = n(6),
        d = n(11),
        h = n(18),
        f = n(54).KEY,
        y = n(10),
        m = n(51),
        g = n(55),
        v = n(39),
        _ = n(4),
        E = n(80),
        S = n(79),
        b = n(113),
        I = n(99),
        C = n(5),
        P = n(13),
        A = n(37),
        w = n(30),
        O = n(52),
        T = n(45),
        R = n(43),
        k = n(117),
        N = n(65),
        L = n(64),
        M = n(16),
        D = n(29),
        F = N.f,
        x = M.f,
        q = k.f,
        V = c.Symbol,
        G = c.JSON,
        U = G && G.stringify,
        j = "prototype",
        B = _("_hidden"),
        W = _("toPrimitive"),
        H = {}.propertyIsEnumerable,
        z = m("symbol-registry"),
        Y = m("symbols"),
        K = m("op-symbols"),
        Q = Object[j],
        J = "function" == typeof V && !!L.f,
        X = c.QObject,
        Z = !X || !X[j] || !X[j].findChild,
        $ = p && y(function() {
            return 7 != R(x({}, "a", {
                get: function() {
                    return x(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var i = F(Q, e);
            i && delete Q[e], x(t, e, n), i && t !== Q && x(Q, e, i)
        } : x,
        tt = J && "symbol" == typeof V.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof V
        },
        et = function(t, e, n) {
            return t === Q && et(K, e, n), C(t), e = O(e, !0), C(n), u(Y, e) ? (n.enumerable ? (u(t, B) && t[B][e] && (t[B][e] = !1), n = R(n, {
                enumerable: T(0, !1)
            })) : (u(t, B) || x(t, B, T(1, {})), t[B][e] = !0), $(t, e, n)) : x(t, e, n)
        };
    J || (h((V = function(t) {
        if (this instanceof V) throw TypeError("Symbol is not a constructor!");
        var e = v(0 < arguments.length ? t : void 0),
            n = function(t) {
                this === Q && n.call(K, t), u(this, B) && u(this[B], e) && (this[B][e] = !1), $(this, e, T(1, t))
            };
        return p && Z && $(Q, e, {
            configurable: !0,
            set: n
        }), i(e)
    })[j], "toString", function() {
        return this._k
    }), N.f = a, M.f = et, n(57).f = k.f = s, n(42).f = o, L.f = l, p && !n(50) && h(Q, "propertyIsEnumerable", o, !0), E.f = function(t) {
        return i(_(t))
    }), d(d.G + d.W + d.F * !J, {
        Symbol: V
    });
    for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; nt.length > it;) _(nt[it++]);
    for (var rt = D(_.store), ot = 0; rt.length > ot;) S(rt[ot++]);
    d(d.S + d.F * !J, "Symbol", {
        for: function(t) {
            return u(z, t += "") ? z[t] : z[t] = V(t)
        },
        keyFor: function(t) {
            if (!tt(t)) throw TypeError(t + " is not a symbol!");
            for (var e in z)
                if (z[e] === t) return e
        },
        useSetter: function() {
            Z = !0
        },
        useSimple: function() {
            Z = !1
        }
    }), d(d.S + d.F * !J, "Object", {
        create: function(t, e) {
            return void 0 === e ? R(t) : r(R(t), e)
        },
        defineProperty: et,
        defineProperties: r,
        getOwnPropertyDescriptor: a,
        getOwnPropertyNames: s,
        getOwnPropertySymbols: l
    });
    var at = y(function() {
        L.f(1)
    });
    d(d.S + d.F * at, "Object", {
        getOwnPropertySymbols: function(t) {
            return L.f(A(t))
        }
    }), G && d(d.S + d.F * (!J || y(function() {
        var t = V();
        return "[null]" != U([t]) || "{}" != U({
            a: t
        }) || "{}" != U(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, i = [t], r = 1; r < arguments.length;) i.push(arguments[r++]);
            if (n = e = i[1], (P(e) || void 0 !== t) && !tt(t)) return I(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !tt(e)) return e
            }), i[1] = e, U.apply(G, i)
        }
    }), V[j][W] || n(28)(V[j], W, V[j].valueOf), g(V, "Symbol"), g(Math, "Math", !0), g(c.JSON, "JSON", !0)
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var i = n(16),
        r = n(45);
    t.exports = n(6) ? function(t, e, n) {
        return i.f(t, e, r(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var i = n(83),
        r = n(63);
    t.exports = Object.keys || function(t) {
        return i(t, r)
    }
}, function(t, e, n) {
    var i = n(74),
        r = n(36);
    t.exports = function(t) {
        return i(r(t))
    }
}, function(t, e, n) {
    "use strict";
    var i = n(11),
        r = n(100),
        o = "includes";
    i(i.P + i.F * n(101)(o), "String", {
        includes: function(t, e) {
            return !!~r(this, t, o).indexOf(t, 1 < arguments.length ? e : void 0)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(25), n(26), n(9), n(46), n(12);
    var i = {
        AF: "Afghanistan",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua And Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BQ: "Bonaire, Sint Eustatius, And Saba",
        BA: "Bosnia And Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei Darussalam",
        BG: "Bulgaria (rep.)",
        BF: "Burkina Faso",
        BI: "Burundi",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        CV: "Cape Verde",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        JE: "Channel Islands",
        GG: "Channel Islands",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CD: "Congo (dem. Rep.)",
        CG: "Congo (rep.)",
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Cote D'ivoire",
        HR: "Croatia",
        CW: "Curacao",
        CY: "Cyprus",
        CZ: "Czech Rep.",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Rep.",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands (malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        AX: "Finland",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern Territories",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada (west Indies)",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GN: "Guinea",
        GW: "Guinea-bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard And Mcdonald Islands",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary (rep.)",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle Of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Lao (people's Dem. Rep.)",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MK: "Macedonia",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia (federated State Of)",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru Central Pacific",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestinian Territory",
        PA: "Panama (rep.)",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        MD: "Rep. Moldova",
        SG: "Rep. Of Singapore",
        RS: "Republic Of Serbia",
        RE: "Reunion",
        RO: "Romania",
        RU: "Russian Federation",
        RW: "Rwanda",
        BL: "Saint Barthelemy",
        SH: "Saint Helena",
        KN: "Saint Kitts And Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin",
        VC: "Saint Vincent And The Grenadines (antilles)",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome And Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SX: "Sint Maarten",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia",
        KR: "South Korea",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        PM: "St. Pierre And Miquelon",
        SR: "Suriname",
        SJ: "Svalbard And Jan Mayen Islands",
        SZ: "Swaziland",
        SE: "Sweden",
        CH: "Switzerland",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania (united Rep.)",
        TH: "Thailand",
        TL: "Timor-leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad And Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks And Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UM: "United States Minor Outlying Islands",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VA: "Vatican",
        VE: "Venezuela",
        VN: "Viet Nam",
        VG: "Virgin Islands (british)",
        VI: "Virgin Islands (u.s.)",
        WF: "Wallis And Futuna Islands",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe"
    };

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var a = function() {
        function t(e) {
            ! function(e) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), e && "object" === r(e) || (e = {}), this.data = {}, this.familyName = e.familyName, this.givenName = e.givenName, this.email = e.email, this.country = e.country, this.region = e.region, this.city = e.city, this.addressLines = e.addressLines, this.postalCode = e.postalCode, this.phone = e.phone
        }
        return n = [{
            key: "fromApplePay",
            value: function(e) {
                if (!e) return e;
                var n = e.countryCode;
                return n = n && n.toUpperCase(), new t({
                    addressLines: e.addressLines,
                    city: e.locality,
                    region: e.administrativeArea,
                    postalCode: e.postalCode,
                    country: n,
                    givenName: e.givenName,
                    familyName: e.familyName,
                    email: e.emailAddress,
                    phone: e.phoneNumber
                })
            }
        }, {
            key: "legacyFromApplePay",
            value: function(e) {
                return e ? new t({
                    addressLines: e.addressLines,
                    city: e.locality,
                    region: e.administrativeArea,
                    postalCode: e.postalCode,
                    country: e.countryCode,
                    givenName: e.givenName,
                    familyName: e.familyName,
                    email: e.emailAddress,
                    phone: e.phoneNumber
                }) : e
            }
        }, {
            key: "fromGooglePay",
            value: function(e) {
                return e ? new t({
                    addressLines: [e.address1, e.address2, e.address3, e.address4, e.address5].filter(Boolean),
                    city: e.locality,
                    region: e.administrativeArea,
                    postalCode: e.postalCode,
                    country: e.countryCode,
                    givenName: e.name,
                    email: e.email,
                    phone: e.phoneNumber
                }) : e
            }
        }], o((e = t).prototype, [{
            key: "toApplePay",
            value: function() {
                return {
                    addressLines: this.data.addressLines,
                    locality: this.data.city,
                    administrativeArea: this.data.region,
                    postalCode: this.data.postalCode,
                    countryCode: this.data.country,
                    country: this.data.countryName,
                    givenName: this.data.givenName,
                    familyName: this.data.familyName,
                    emailAddress: this.data.email,
                    phoneNumber: this.data.phone
                }
            }
        }, {
            key: "familyName",
            get: function() {
                return this.data.familyName
            },
            set: function(t) {
                this.data.familyName = t
            }
        }, {
            key: "givenName",
            get: function() {
                return this.data.givenName
            },
            set: function(t) {
                this.data.givenName = t
            }
        }, {
            key: "email",
            get: function() {
                return this.data.email
            },
            set: function(t) {
                this.data.email = t
            }
        }, {
            key: "phone",
            get: function() {
                return this.data.phone
            },
            set: function(t) {
                this.data.phone = t
            }
        }, {
            key: "country",
            get: function() {
                return this.data.country
            },
            set: function(t) {
                this.data.country !== t && (this.data.country = t, this.data.countryName = i[t])
            }
        }, {
            key: "countryName",
            get: function() {
                return this.data.countryName
            }
        }, {
            key: "region",
            get: function() {
                return this.data.region
            },
            set: function(t) {
                this.data.region = t
            }
        }, {
            key: "city",
            get: function() {
                return this.data.city
            },
            set: function(t) {
                this.data.city = t
            }
        }, {
            key: "addressLines",
            get: function() {
                return this.data.addressLines
            },
            set: function(t) {
                !t || t instanceof Array || (t = [t.toString()]), this.data.addressLines = t
            }
        }, {
            key: "postalCode",
            get: function() {
                return this.data.postalCode
            },
            set: function(t) {
                this.data.postalCode = t
            }
        }]), o(e, n), t;
        var e, n
    }();
    e.a = a
}, function(t, e, n) {
    var i = n(56),
        r = Math.min;
    t.exports = function(t) {
        return 0 < t ? r(i(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    "use strict";
    n(46), n(12), n(61), n(78), n(77), n(22), n(31);
    var i = {
        ABSOLUTE_SIZES: ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"],
        BROWSER_COLORS: ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
        FONT_WEIGHT_NUMBERS: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        FONT_WEIGHT_STRINGS: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "normal", "bold", "bolder", "lighter"],
        LINE_HEIGHT_STRINGS: ["normal"],
        RELATIVE_SIZES: ["smaller", "larger"],
        WEB_SAFE_FONTS: ["andale mono", "arial", "arial black", "arial narrow", "arial rounded mt bold", "avant garde", "baskerville", "big caslon", "bodoni mt", "book antiqua", "brush script mt", "calibri", "calisto mt", "cambria", "candara", "century gothic", "charcoal", "comic sans ms", "consolas", "copperplate", "copperplate gothic light", "courier", "courier new", "cursive", "didot", "fantasy", "franklin gothic medium", "futura", "garamond", "geneva", "georgia", "gill sans", "goudy old style", "helvetica", "helvetica neue", "hoefler text", "impact", "lucida bright", "lucida console", "lucida grande", "lucida sans unicode", "lucida sans typewriter", "monaco", "monospace", "optima", "palatino", "palatino linotype", "papyrus", "perpetua", "rockwell", "rockwell extra bold", "sans-serif", "segoe ui", "serif", "square market", "tahoma", "times", "times new roman", "trebuchet ms", "verdana"],
        WEBKIT_FONT_SMOOTHNG: ["none", "antialiased", "subpixel-antialiased"],
        MOZ_OSX_FONT_SMOOTHNG: ["grayscale", "auto"],
        DISPLAY: ["none"],
        sanitizeDeclarationValue: function(t, e) {
            var n = this,
                i = function() {
                    switch (t) {
                        case "background-color":
                        case "color":
                            return n.isValidColor.bind(n);
                        case "box-shadow":
                            return n.isValidBoxShadowChain.bind(n);
                        case "box-sizing":
                            return n.isValidBoxSizing.bind(n);
                        case "font-family":
                            return n.isValidFontFamilyChain.bind(n);
                        case "font-size":
                            return n.isValidFontSize.bind(n);
                        case "font-weight":
                            return n.isValidFontWeight.bind(n);
                        case "letter-spacing":
                            return n.isValidLetterSpacing.bind(n);
                        case "line-height":
                            return n.isValidLineHeight.bind(n);
                        case "padding":
                            return n.isValidPaddingChain.bind(n);
                        case "-webkit-font-smoothing":
                            return n.isValidWebkitFontSmoothing.bind(n);
                        case "-moz-osx-font-smoothing":
                            return n.isValidMozOsxFontSmoothing.bind(n);
                        case "display":
                            return n.isValidDisplay.bind(n);
                        case "border-radius":
                            return n.isValidBorderRadiusChain.bind(n);
                        default:
                            return
                    }
                }();
            return i && i(e) || this.isUniversalProperty(e) ? e : void 0
        },
        sanitizeMediaFeatureValue: function(t, e) {
            switch (t) {
                case "min-width":
                case "max-width":
                    return this.isValidMediaWidth(e) ? e : void 0
            }
        },
        isUniversalProperty: function(t) {
            return ["unset", "inherit", "revert", "initial"].includes(t)
        },
        isValidBoxShadowChain: function(t) {
            var e = this;
            return null != t && t.split(/, ?(?![^(]*\))/).every(function(t) {
                return e.isValidBoxShadow(t)
            })
        },
        isValidBoxSizing: function(t) {
            return ["border-box", "content-box"].includes(t)
        },
        isValidBorderRadiusChain: function(t) {
            var e = this;
            return t.split(" ").every(function(t) {
                return e.isValidBorderRadius(t)
            })
        },
        isValidBoxShadow: function(t) {
            if (null == t) return !1;
            if ("none" === t) return !0;
            var e = t.split(/ (?![^(]*\))/),
                n = 0;
            if ("inset" === e[0] && (e.shift(), n++), "inset" === e[e.length - 1]) {
                if (0 < n) return !1;
                e.pop()
            }
            for (var i = 0; i < 2; i++) {
                var r = e.shift();
                if (!this.isValidBoxShadowOffset(r)) return !1
            }
            switch (e.length) {
                case 0:
                    return !0;
                case 1:
                    return this.isValidColor(e[0]) || this.isValidBoxShadowBlur(e[0]);
                case 2:
                    return this.isValidBoxShadowBlur(e[0]) && (this.isValidColor(e[1]) || this.isValidBoxShadowSpread(e[1]));
                case 3:
                    return this.isValidBoxShadowBlur(e[0]) && this.isValidBoxShadowSpread(e[1]) && this.isValidColor(e[2]);
                default:
                    return !1
            }
        },
        isValidBoxShadowOffset: function(t) {
            return 0 === Number(t) || this.isPositiveOrNegativePX(t) || this.isPositiveOrNegativeEM(t)
        },
        isValidBoxShadowSpread: function(t) {
            return 0 === Number(t) || this.isPositiveOrNegativePX(t) || this.isPositiveOrNegativeEM(t)
        },
        isValidBoxShadowBlur: function(t) {
            return 0 === Number(t) || this.isPositivePX(t) || this.isPositiveEM(t)
        },
        isValidBorderRadius: function(t) {
            return 0 === Number(t) || this.isPositivePX(t) || this.isPositiveEM(t)
        },
        isValidColor: function(t) {
            return null != t && (this.isBrowserColor(t) || this.isHex(t) || this.isRGB(t) || this.isRGBA(t))
        },
        isValidFontSize: function(t) {
            return null != t && (this.isAbsoluteSize(t) || this.isRelativeSize(t) || this.isPositivePX(t) || this.isPositivePT(t) || this.isPositiveEM(t) || this.isPositivePercent(t))
        },
        isValidFontFamilyChain: function(t) {
            var e = this;
            return null != t && t.split(", ").every(function(t) {
                return e.isValidFontFamily(t)
            })
        },
        isValidFontFamily: function(t) {
            var e = t.toLowerCase().trim().replace(/['"]+/g, "");
            return this.WEB_SAFE_FONTS.includes(e)
        },
        isValidFontWeight: function(t) {
            return "number" == typeof t ? this.FONT_WEIGHT_NUMBERS.includes(t) : "string" == typeof t && this.FONT_WEIGHT_STRINGS.includes(t.toLowerCase())
        },
        isValidLetterSpacing: function(t) {
            return "normal" === t || this.isPositiveOrNegativeEM(t) || this.isPositiveOrNegativePT(t) || this.isPositiveOrNegativePX(t)
        },
        isValidLineHeight: function(t) {
            return "number" == typeof t && 0 <= t || this.LINE_HEIGHT_STRINGS.includes(t) || this.isPositiveEM(t) || this.isPositivePX(t) || this.isPositivePT(t) || this.isPositivePercent(t)
        },
        isValidWebkitFontSmoothing: function(t) {
            return this.WEBKIT_FONT_SMOOTHNG.includes(t)
        },
        isValidMozOsxFontSmoothing: function(t) {
            return this.MOZ_OSX_FONT_SMOOTHNG.includes(t)
        },
        isValidDisplay: function(t) {
            return this.DISPLAY.includes(t)
        },
        isValidPaddingChain: function(t) {
            var e = this;
            if (null == t) return !1;
            var n = t.toString().split(" ");
            return 4 < n.length ? void 0 : n.every(function(t) {
                return e.isValidPaddingValue(t)
            })
        },
        isValidPaddingValue: function(t) {
            return this.isPositivePX(t) || this.isPositiveEM(t) || this.isPositivePercent(t) || 0 === Number(t)
        },
        isValidMediaWidth: function(t) {
            return this.isPositivePX(t) || this.isPositiveEM(t)
        },
        isBrowserColor: function(t) {
            return this.BROWSER_COLORS.includes(t.toLowerCase())
        },
        isHex: function(t) {
            return /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(t)
        },
        isRGB: function(t) {
            return /^rgb\((\s*\d{1,3},){2}\s*\d{1,3}\)$/.test(t)
        },
        isRGBA: function(t) {
            return /^rgba\((\s*\d{1,3},){3}\s*(1|0*.\d*)\)$/.test(t)
        },
        isAbsoluteSize: function(t) {
            return this.ABSOLUTE_SIZES.includes(t.toLowerCase())
        },
        isRelativeSize: function(t) {
            return this.RELATIVE_SIZES.includes(t.toLowerCase())
        },
        isPositiveOrNegativePX: function(t) {
            return this.isPositivePX(t) || this.isNegativePX(t)
        },
        isPositivePX: function(t) {
            return /^\d*\.?\d+px$/.test(t)
        },
        isNegativePX: function(t) {
            return /^-\d*\.?\d+px$/.test(t)
        },
        isPositiveOrNegativeEM: function(t) {
            return this.isPositiveEM(t) || this.isNegativeEM(t)
        },
        isPositiveEM: function(t) {
            return /^\d*\.?\d+em$/.test(t)
        },
        isNegativeEM: function(t) {
            return /^-\d*\.?\d+em$/.test(t)
        },
        isPositiveOrNegativePT: function(t) {
            return this.isPositivePT(t) || this.isNegativePT(t)
        },
        isPositivePT: function(t) {
            return /^\d*\.?\d+pt$/.test(t)
        },
        isNegativePT: function(t) {
            return /^-\d*\.?\d+pt$/.test(t)
        },
        isPositiveOrNegativePercent: function(t) {
            return this.isPositivePercent(t) || this.isNegativePercent(t)
        },
        isPositivePercent: function(t) {
            return /^\d*\.?\d+%$/.test(t)
        },
        isNegativePercent: function(t) {
            return /^-\d*\.?\d+%$/.test(t)
        }
    };
    e.a = i
}, function(t, e) {
    var n = t.exports = {
        version: "2.6.9"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var i = n(36);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, e, n) {
    "use strict";
    n(77), n(9);
    var i = n(2),
        r = n(1),
        o = {
            REQUEST_DURATION_MAX_MS: 6e4,
            REQUEST_TIMEOUT_MS: [1e4, 2e4, 3e4],
            RETRY_DELAY_MS: 200,
            BACKOFF_FACTOR: 1.66
        };
    o.TimeoutError = r.q, o.NetworkError = r.n, o.InvalidJsonError = r.h, o.post = function(t, e, n) {
        n || "function" != typeof e || (n = e, e = {}), "function" != typeof n && (n = function() {}), (e = e || {})._attempts ? e._attempts += 1 : e._attempts = 1, e._startTime || (e._startTime = Date.now()), e.timeout || (e.timeout = o.REQUEST_TIMEOUT_MS[0]);
        var a = new XMLHttpRequest;
        if (a.open("POST", t, !0), a.timeout = e.timeout, a.withCredentials = !0, e.headers)
            for (var s in e.headers) i.a.hasOwn(e.headers, s) && a.setRequestHeader(s, e.headers[s]);
        e.json && (e.body && (e.body = null), a.setRequestHeader("Accept", "application/json"), a.setRequestHeader("Content-Type", "application/json; charset=utf-8"));
        var l = e.body || JSON.stringify(e.json);
        a.onreadystatechange = function() {
            if (4 === a.readyState && 0 !== a.status) {
                var o = a.responseText,
                    s = a.status,
                    l = a.statusText;
                if (s < 500 && o && e.json) try {
                    o = JSON.parse(o)
                } catch (o) {
                    var c = i.a.parseUrl(t),
                        u = c.origin + c.pathname;
                    return n(new r.h(u, s))
                }
                n(null, {
                    status: s,
                    statusText: l
                }, o)
            }
        }, a.onerror = function() {
            a.abort();
            var i = e._attempts - 1,
                s = o.backoff(o.RETRY_DELAY_MS, i),
                l = Date.now() - e._startTime,
                c = o.REQUEST_DURATION_MAX_MS - l;
            if (c <= s) {
                if (c > e.timeout) {
                    var u = c - e.timeout;
                    return void setTimeout(function() {
                        o.post(t, e, n)
                    }, u)
                }
                n(new r.n(e._attempts, l, t))
            } else setTimeout(function() {
                o.post(t, e, n)
            }, s)
        }, a.ontimeout = function() {
            a.abort();
            var i = Date.now() - e._startTime,
                s = o.REQUEST_DURATION_MAX_MS - i;
            if (s <= 0) n(new r.q(e._attempts, i, t));
            else {
                var l = o.REQUEST_TIMEOUT_MS[Math.min(e._attempts, 2)];
                s < l && (l = s), e.timeout = l, setTimeout(function() {
                    o.post(t, e, n)
                }, 0)
            }
        }, a.send(l)
    }, o.parseHeaders = function(t) {
        var e = {};
        return t && t.split("\r\n").forEach(function(t) {
            var n = t.indexOf(": ");
            if (0 < n) {
                var i = t.substring(0, n),
                    r = t.substring(n + 2);
                e[i] = r
            }
        }), e
    }, o.backoff = function(t, e) {
        var n = o.BACKOFF_FACTOR;
        return Math.floor(t * Math.pow(n, e))
    }, e.a = o
}, function(t, e) {
    var n = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function(t, e, n) {
    var i = n(53);
    t.exports = function(t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    function i() {}
    var r = n(5),
        o = n(115),
        a = n(63),
        s = n(62)("IE_PROTO"),
        l = "prototype",
        c = function() {
            var t, e = n(82)("iframe"),
                i = a.length;
            for (e.style.display = "none", n(116).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; i--;) delete c[l][a[i]];
            return c()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (i[l] = r(t), n = new i, i[l] = null, n[s] = t) : n = c(), void 0 === e ? n : o(n, e)
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        n(18)(RegExp.prototype, s, t, !0)
    }
    n(118);
    var r = n(5),
        o = n(58),
        a = n(6),
        s = "toString",
        l = /./ [s];
    n(10)(function() {
        return "/a/b" != l.call({
            source: "a",
            flags: "b"
        })
    }) ? i(function() {
        var t = r(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !a && t instanceof RegExp ? o.call(t) : void 0)
    }) : l.name != s && i(function() {
        return l.call(this)
    })
}, function(t, e, n) {
    "use strict";
    e.a = {
        ie10: function() {
            return document.documentElement && "function" == typeof document.documentElement.doScroll
        },
        iosChrome: function() {
            var t = window.navigator.userAgent;
            return /iphone|ipod|ipad/i.test(t) && /CriOS/i.test(t)
        },
        supported: function() {
            return void 0 !== window.postMessage && void 0 !== window.XMLHttpRequest && void 0 !== document.createElement("a").classList
        },
        language: function() {
            return "undefined" == typeof navigator ? "en" : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "en"
        }
    }
}, , , function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var i = n(35),
        r = n(8),
        o = "__core-js_shared__",
        a = r[o] || (r[o] = {});
    (t.exports = function(t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: i.version,
        mode: n(50) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, n) {
    var i = n(13);
    t.exports = function(t, e) {
        if (!i(t)) return t;
        var n, r;
        if (e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
        if ("function" == typeof(n = t.valueOf) && !i(r = n.call(t))) return r;
        if (!e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    function i(t) {
        s(t, r, {
            value: {
                i: "O" + ++l,
                w: {}
            }
        })
    }
    var r = n(39)("meta"),
        o = n(13),
        a = n(27),
        s = n(16).f,
        l = 0,
        c = Object.isExtensible || function() {
            return !0
        },
        u = !n(10)(function() {
            return c(Object.preventExtensions({}))
        }),
        p = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!a(t, r)) {
                    if (!c(t)) return "F";
                    if (!e) return "E";
                    i(t)
                }
                return t[r].i
            },
            getWeak: function(t, e) {
                if (!a(t, r)) {
                    if (!c(t)) return !0;
                    if (!e) return !1;
                    i(t)
                }
                return t[r].w
            },
            onFreeze: function(t) {
                return u && p.NEED && c(t) && !a(t, r) && i(t), t
            }
        }
}, function(t, e, n) {
    var i = n(16).f,
        r = n(27),
        o = n(4)("toStringTag");
    t.exports = function(t, e, n) {
        t && !r(t = n ? t : t.prototype, o) && i(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e) {
    var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (0 < t ? i : n)(t)
    }
}, function(t, e, n) {
    var i = n(83),
        r = n(63).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return i(t, r)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(5);
    t.exports = function() {
        var t = i(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(68),
        r = RegExp.prototype.exec;
    t.exports = function(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var o = n.call(t, e);
            if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== i(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return r.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    n(121);
    var i = n(18),
        r = n(28),
        o = n(10),
        a = n(36),
        s = n(4),
        l = n(69),
        c = s("species"),
        u = !o(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        }),
        p = function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
    t.exports = function(t, e, n) {
        var d = s(t),
            h = !o(function() {
                var e = {};
                return e[d] = function() {
                    return 7
                }, 7 != "" [t](e)
            }),
            f = h ? !o(function() {
                var e = !1,
                    n = /a/;
                return n.exec = function() {
                    return e = !0, null
                }, "split" === t && (n.constructor = {}, n.constructor[c] = function() {
                    return n
                }), n[d](""), !e
            }) : void 0;
        if (!h || !f || "replace" === t && !u || "split" === t && !p) {
            var y = /./ [d],
                m = n(a, d, "" [t], function(t, e, n, i, r) {
                    return e.exec === l ? h && !r ? {
                        done: !0,
                        value: y.call(e, n, i)
                    } : {
                        done: !0,
                        value: t.call(n, e, i)
                    } : {
                        done: !1
                    }
                }),
                g = m[0],
                v = m[1];
            i(String.prototype, t, g), r(RegExp.prototype, d, 2 == e ? function(t, e) {
                return v.call(t, this, e)
            } : function(t) {
                return v.call(t, this)
            })
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(5),
        r = n(37),
        o = n(33),
        a = n(56),
        s = n(71),
        l = n(59),
        c = Math.max,
        u = Math.min,
        p = Math.floor,
        d = /\$([$&`']|\d\d?|<[^>]*>)/g,
        h = /\$([$&`']|\d\d?)/g;
    n(60)("replace", 2, function(t, e, n, f) {
        return [function(i, r) {
            var o = t(this),
                a = null == i ? void 0 : i[e];
            return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
        }, function(t, e) {
            var r = f(n, t, this, e);
            if (r.done) return r.value;
            var p = i(t),
                d = String(this),
                h = "function" == typeof e;
            h || (e = String(e));
            var m = p.global;
            if (m) {
                var g = p.unicode;
                p.lastIndex = 0
            }
            for (var v = [];;) {
                var _ = l(p, d);
                if (null === _) break;
                if (v.push(_), !m) break;
                "" === String(_[0]) && (p.lastIndex = s(d, o(p.lastIndex), g))
            }
            for (var E, S = "", b = 0, I = 0; I < v.length; I++) {
                _ = v[I];
                for (var C = String(_[0]), P = c(u(a(_.index), d.length), 0), A = [], w = 1; w < _.length; w++) A.push(void 0 === (E = _[w]) ? E : String(E));
                var O = _.groups;
                if (h) {
                    var T = [C].concat(A, P, d);
                    void 0 !== O && T.push(O);
                    var R = String(e.apply(void 0, T))
                } else R = y(C, d, P, A, O, e);
                b <= P && (S += d.slice(b, P) + R, b = P + C.length)
            }
            return S + d.slice(b)
        }];

        function y(t, e, i, o, a, s) {
            var l = i + t.length,
                c = o.length,
                u = h;
            return void 0 !== a && (a = r(a), u = d), n.call(s, u, function(n, r) {
                var s;
                switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, i);
                    case "'":
                        return e.slice(l);
                    case "<":
                        s = a[r.slice(1, -1)];
                        break;
                    default:
                        var u = +r;
                        if (0 == u) return n;
                        if (c < u) {
                            var d = p(u / 10);
                            return 0 === d ? n : d <= c ? void 0 === o[d - 1] ? r.charAt(1) : o[d - 1] + r.charAt(1) : n
                        }
                        s = o[u - 1]
                }
                return void 0 === s ? "" : s
            })
        }
    })
}, function(t, e, n) {
    var i = n(51)("keys"),
        r = n(39);
    t.exports = function(t) {
        return i[t] || (i[t] = r(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var i = n(42),
        r = n(45),
        o = n(30),
        a = n(52),
        s = n(27),
        l = n(81),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(6) ? c : function(t, e) {
        if (t = o(t), e = a(e, !0), l) try {
            return c(t, e)
        } catch (t) {}
        if (s(t, e)) return r(!i.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var i = n(13),
        r = n(41),
        o = n(4)("match");
    t.exports = function(t) {
        var e;
        return i(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == r(t))
    }
}, function(t, e, n) {
    var i = n(13),
        r = n(85).set;
    t.exports = function(t, e, n) {
        var o, a = e.constructor;
        return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && i(o) && r && r(t, o), t
    }
}, function(t, e, n) {
    var i = n(41),
        r = n(4)("toStringTag"),
        o = "Arguments" == i(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    "use strict";
    var i, r, o = n(58),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        l = a,
        c = "lastIndex",
        u = (i = /a/, r = /b*/g, a.call(i, "a"), a.call(r, "a"), 0 !== i[c] || 0 !== r[c]),
        p = void 0 !== /()??/.exec("")[1];
    (u || p) && (l = function(t) {
        var e, n, i, r, l = this;
        return p && (n = new RegExp("^" + l.source + "$(?!\\s)", o.call(l))), u && (e = l[c]), i = a.call(l, t), u && i && (l[c] = l.global ? i.index + i[0].length : e), p && i && 1 < i.length && s.call(i[0], n, function() {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
        }), i
    }), t.exports = l
}, function(t, e, n) {
    "use strict";

    function i() {
        return this
    }
    var r = n(50),
        o = n(11),
        a = n(18),
        s = n(28),
        l = n(44),
        c = n(122),
        u = n(55),
        p = n(123),
        d = n(4)("iterator"),
        h = !([].keys && "next" in [].keys()),
        f = "values";
    t.exports = function(t, e, n, y, m, g, v) {
        function _(t) {
            if (!h && t in A) return A[t];
            switch (t) {
                case "keys":
                case f:
                    return function() {
                        return new n(this, t)
                    }
            }
            return function() {
                return new n(this, t)
            }
        }
        c(n, e, y);
        var E, S, b, I = e + " Iterator",
            C = m == f,
            P = !1,
            A = t.prototype,
            w = A[d] || A["@@iterator"] || m && A[m],
            O = w || _(m),
            T = m ? C ? _("entries") : O : void 0,
            R = "Array" == e && A.entries || w;
        if (R && (b = p(R.call(new t))) !== Object.prototype && b.next && (u(b, I, !0), r || "function" == typeof b[d] || s(b, d, i)), C && w && w.name !== f && (P = !0, O = function() {
                return w.call(this)
            }), r && !v || !h && !P && A[d] || s(A, d, O), l[e] = O, l[I] = i, m)
            if (E = {
                    values: C ? O : _(f),
                    keys: g ? O : _("keys"),
                    entries: T
                }, v)
                for (S in E) S in A || a(A, S, E[S]);
            else o(o.P + o.F * (h || P), e, E);
        return E
    }
}, function(t, e, n) {
    "use strict";
    var i = n(91)(!0);
    t.exports = function(t, e, n) {
        return e + (n ? i(t, e).length : 1)
    }
}, function(t, e, n) {
    var i = n(11),
        r = n(131)(!1);
    i(i.S, "Object", {
        values: function(t) {
            return r(t)
        }
    })
}, , function(t, e, n) {
    var i = n(41);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    var i = n(4)("unscopables"),
        r = Array.prototype;
    null == r[i] && n(28)(r, i, {}), t.exports = function(t) {
        r[i][t] = !0
    }
}, function(t, e, n) {
    var i = n(8),
        r = n(67),
        o = n(16).f,
        a = n(57).f,
        s = n(66),
        l = n(58),
        c = i.RegExp,
        u = c,
        p = c.prototype,
        d = /a/g,
        h = /a/g,
        f = new c(d) !== d;
    if (n(6) && (!f || n(10)(function() {
            return h[n(4)("match")] = !1, c(d) != d || c(h) == h || "/a/i" != c(d, "i")
        }))) {
        function y(t) {
            t in c || o(c, t, {
                configurable: !0,
                get: function() {
                    return u[t]
                },
                set: function(e) {
                    u[t] = e
                }
            })
        }
        c = function(t, e) {
            var n = this instanceof c,
                i = s(t),
                o = void 0 === e;
            return !n && i && t.constructor === c && o ? t : r(f ? new u(i && !o ? t.source : t, e) : u((i = t instanceof c) ? t.source : t, i && o ? l.call(t) : e), n ? this : p, c)
        };
        for (var m = a(u), g = 0; m.length > g;) y(m[g++]);
        (p.constructor = c).prototype = p, n(18)(i, "RegExp", c)
    }
    n(86)("RegExp")
}, function(t, e, n) {
    "use strict";
    var i = n(66),
        r = n(5),
        o = n(124),
        a = n(71),
        s = n(33),
        l = n(59),
        c = n(69),
        u = n(10),
        p = Math.min,
        d = [].push,
        h = "split",
        f = "length",
        y = "lastIndex",
        m = 4294967295,
        g = !u(function() {
            RegExp(m, "y")
        });
    n(60)("split", 2, function(t, e, n, u) {
        var v;
        return v = "c" == "abbc" [h](/(b)*/)[1] || 4 != "test" [h](/(?:)/, -1)[f] || 2 != "ab" [h](/(?:ab)*/)[f] || 4 != "." [h](/(.?)(.?)/)[f] || 1 < "." [h](/()()/)[f] || "" [h](/.?/)[f] ? function(t, e) {
            var r = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!i(t)) return n.call(r, t, e);
            for (var o, a, s, l = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), p = 0, h = void 0 === e ? m : e >>> 0, g = new RegExp(t.source, u + "g");
                (o = c.call(g, r)) && !(p < (a = g[y]) && (l.push(r.slice(p, o.index)), 1 < o[f] && o.index < r[f] && d.apply(l, o.slice(1)), s = o[0][f], p = a, l[f] >= h));) g[y] === o.index && g[y]++;
            return p === r[f] ? !s && g.test("") || l.push("") : l.push(r.slice(p)), l[f] > h ? l.slice(0, h) : l
        } : "0" [h](void 0, 0)[f] ? function(t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function(n, i) {
            var r = t(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r, i) : v.call(String(r), n, i)
        }, function(t, e) {
            var i = u(v, t, this, e, v !== n);
            if (i.done) return i.value;
            var c = r(t),
                d = String(this),
                h = o(c, RegExp),
                f = c.unicode,
                y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (g ? "y" : "g"),
                _ = new h(g ? c : "^(?:" + c.source + ")", y),
                E = void 0 === e ? m : e >>> 0;
            if (0 == E) return [];
            if (0 === d.length) return null === l(_, d) ? [d] : [];
            for (var S = 0, b = 0, I = []; b < d.length;) {
                _.lastIndex = g ? b : 0;
                var C, P = l(_, g ? d : d.slice(b));
                if (null === P || (C = p(s(_.lastIndex + (g ? 0 : b)), d.length)) === S) b = a(d, b, f);
                else {
                    if (I.push(d.slice(S, b)), I.length === E) return I;
                    for (var A = 1; A <= P.length - 1; A++)
                        if (I.push(P[A]), I.length === E) return I;
                    b = S = C
                }
            }
            return I.push(d.slice(S)), I
        }]
    })
}, function(t, e, n) {
    "use strict";

    function i(t) {
        var e = l(t, !1);
        if ("string" == typeof e && 2 < e.length) {
            var n, i, r, o = (e = _ ? e.trim() : h(e, 3)).charCodeAt(0);
            if (43 === o || 45 === o) {
                if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
            } else if (48 === o) {
                switch (e.charCodeAt(1)) {
                    case 66:
                    case 98:
                        i = 2, r = 49;
                        break;
                    case 79:
                    case 111:
                        i = 8, r = 55;
                        break;
                    default:
                        return +e
                }
                for (var a, s = e.slice(2), c = 0, u = s.length; c < u; c++)
                    if ((a = s.charCodeAt(c)) < 48 || r < a) return NaN;
                return parseInt(s, i)
            }
        }
        return +e
    }
    var r = n(8),
        o = n(27),
        a = n(41),
        s = n(67),
        l = n(52),
        c = n(10),
        u = n(57).f,
        p = n(65).f,
        d = n(16).f,
        h = n(108).trim,
        f = "Number",
        y = r[f],
        m = y,
        g = y.prototype,
        v = a(n(43)(g)) == f,
        _ = "trim" in String.prototype;
    if (!y(" 0o1") || !y("0b1") || y("+0x1")) {
        y = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof y && (v ? c(function() {
                g.valueOf.call(n)
            }) : a(n) != f) ? s(new m(i(e)), n, y) : i(e)
        };
        for (var E, S = n(6) ? u(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; S.length > b; b++) o(m, E = S[b]) && !o(y, E) && d(y, E, p(m, E));
        (y.prototype = g).constructor = y, n(18)(r, f, y)
    }
}, function(t, e, n) {
    var i = n(8),
        r = n(35),
        o = n(50),
        a = n(80),
        s = n(16).f;
    t.exports = function(t) {
        var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
}, function(t, e, n) {
    e.f = n(4)
}, function(t, e, n) {
    t.exports = !n(6) && !n(10)(function() {
        return 7 != Object.defineProperty(n(82)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var i = n(13),
        r = n(8).document,
        o = i(r) && i(r.createElement);
    t.exports = function(t) {
        return o ? r.createElement(t) : {}
    }
}, function(t, e, n) {
    var i = n(27),
        r = n(30),
        o = n(84)(!1),
        a = n(62)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = r(t),
            l = 0,
            c = [];
        for (n in s) n != a && i(s, n) && c.push(n);
        for (; e.length > l;) i(s, n = e[l++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function(t, e, n) {
    var i = n(30),
        r = n(33),
        o = n(114);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, l = i(e),
                c = r(l.length),
                u = o(a, c);
            if (t && n != n) {
                for (; u < c;)
                    if ((s = l[u++]) != s) return !0
            } else
                for (; u < c; u++)
                    if ((t || u in l) && l[u] === n) return t || u || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    function i(t, e) {
        if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    }
    var r = n(13),
        o = n(5);
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                (r = n(40)(Function.call, n(65).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return i(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: i
    }
}, function(t, e, n) {
    "use strict";
    var i = n(8),
        r = n(16),
        o = n(6),
        a = n(4)("species");
    t.exports = function(t) {
        var e = i[t];
        o && e && !e[a] && r.f(e, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(5),
        r = n(120),
        o = n(59);
    n(60)("search", 1, function(t, e, n, a) {
        return [function(n) {
            var i = t(this),
                r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
        }, function(t) {
            var e = a(n, t, this);
            if (e.done) return e.value;
            var s = i(t),
                l = String(this),
                c = s.lastIndex;
            r(c, 0) || (s.lastIndex = 0);
            var u = o(s, l);
            return r(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index
        }]
    })
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    var i = n(11),
        r = n(35),
        o = n(10);
    t.exports = function(t, e) {
        var n = (r.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), i(i.S + i.F * o(function() {
            n(1)
        }), "Object", a)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(5),
        r = n(33),
        o = n(71),
        a = n(59);
    n(60)("match", 1, function(t, e, n, s) {
        return [function(n) {
            var i = t(this),
                r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
        }, function(t) {
            var e = s(n, t, this);
            if (e.done) return e.value;
            var l = i(t),
                c = String(this);
            if (!l.global) return a(l, c);
            for (var u, p = l.unicode, d = [], h = l.lastIndex = 0; null !== (u = a(l, c));) {
                var f = String(u[0]);
                "" === (d[h] = f) && (l.lastIndex = o(c, r(l.lastIndex), p)), h++
            }
            return 0 === h ? null : d
        }]
    })
}, function(t, e, n) {
    var i = n(56),
        r = n(36);
    t.exports = function(t) {
        return function(e, n) {
            var o, a, s = String(r(e)),
                l = i(n),
                c = s.length;
            return l < 0 || c <= l ? t ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || 56319 < o || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || 57343 < a ? t ? s.charAt(l) : o : t ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    var i = n(18);
    t.exports = function(t, e, n) {
        for (var r in e) i(t, r, e[r], n);
        return t
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var i = n(40),
        r = n(103),
        o = n(104),
        a = n(5),
        s = n(33),
        l = n(105),
        c = {},
        u = {};
    (e = t.exports = function(t, e, n, p, d) {
        var h, f, y, m, g = d ? function() {
                return t
            } : l(t),
            v = i(n, p, e ? 2 : 1),
            _ = 0;
        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
        if (o(g)) {
            for (h = s(t.length); _ < h; _++)
                if ((m = e ? v(a(f = t[_])[0], f[1]) : v(t[_])) === c || m === u) return m
        } else
            for (y = g.call(t); !(f = y.next()).done;)
                if ((m = r(y, v, f.value, e)) === c || m === u) return m
    }).BREAK = c, e.RETURN = u
}, function(t, e, n) {
    var i = n(13);
    t.exports = function(t, e) {
        if (!i(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function(t, e, n) {
    "use strict";
    n(9), n(22);
    var i = ["constructor", "hasOwnProperty", "isPrototypeOf", "toLocaleString", "toString", "valueOf", "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__", "__proto__"];

    function r() {
        this.handlers = {}
    }
    r.prototype.add = function(t, e) {
        if ("string" != typeof t || i.includes(t)) throw Error("Invalid event: " + t);
        this.handlers[t] ? this.handlers[t].push(e) : this.handlers[t] = [e]
    }, r.prototype.handle = function(t, e) {
        var n = this.handlers[t],
            i = 0;
        if (n)
            for (var r = 0; r < n.length; r++) n[r](e), i += 1;
        return i
    }, e.a = r
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        return !!t.querySelector(e)
    }

    function r(t, e) {
        return void 0 !== t[e]
    }
    n(76), n(87), n(90), n(19), n(17), n(12), n(23), n(9);
    var o = n(2),
        a = n(14);

    function s(t) {
        if (!(t instanceof a.b)) throw new TypeError("Expected 'SqEventstream'");
        this.eventstream = t;
        var e = window.performance;
        e && "function" == typeof e.getEntriesByType ? this.performance = e : this.performance = void 0
    }
    s.prototype.collectLoadTiming = function(t) {
        var e = this._resources().filter(c),
            n = {
                t: t.tti
            };
        e.forEach(function(t) {
            var e = u(t),
                i = function(t) {
                    var e = o.a.parseUrl(t);
                    switch (e.pathname) {
                        case "/v2/paymentform.js":
                        case "/v2/paymentform":
                            return "m";
                        case "/v2/iframe":
                            var n = e.search.match(/type=([^&]+)/),
                                i = n && n[1];
                            if (o.a.hasOwn(l, i)) return l[i]
                    }
                    return "?"
                }(t.name),
                r = Math.round(e);
            n[i] = r
        }), this.eventstream.track(a.a.LOAD_EVENT, {
            l: n
        })
    }, s.prototype.collectNonceTiming = function(t, e) {
        var n = "https://pci-connect.squareupsandbox.com/v2/card-nonce\\?_=" + t,
            i = this._resources().filter(function(t, e) {
                switch (e.initiatorType) {
                    case "xmlhttprequest":
                        return new RegExp(t).test(e.name);
                    default:
                        return !1
                }
            }.bind(null, n)).pop(),
            r = u(i = i || {
                duration: Date.now() - e.startTime
            }),
            o = {
                d: Math.round(r),
                e: "".concat(e.error || !1)
            };
        this.eventstream.track(a.a.NONCE_EVENT, {
            l: o
        })
    }, s.prototype.collectConfiguration = function(t) {
        var e = Object.keys(t).filter(function(e) {
                return !1 !== t[e]
            }),
            n = Object.keys(t).filter(function(e) {
                return !1 === t[e]
            }),
            o = Object.keys(t.callbacks).filter(function(e) {
                return "function" == typeof t.callbacks[e]
            });
        t.inputStyles && t.inputStyles.some(function(t) {
            if (t.mediaMinWidth || t.mediaMaxWidth) return e.push("mediaBreakpoints")
        });
        var s = function(t) {
                for (var e = r(t, "angular"), n = r(t, "getAllAngularRootElements"), o = e || n, a = r(t, "bootstrap"), s = r(t, "Ember"), l = r(t, "jQuery"), c = i(t.document, 'form[action*="paypal.com"]'), u = i(t.document, "[data-reactroot]"), p = r(t, "__NUXT__") || r(t, "$nuxt"), d = {
                        angular: o,
                        bootstrap: a,
                        ember: s,
                        jquery: l,
                        paypalBuyNow: c,
                        react: u,
                        vue: r(t, "Vue") || p
                    }, h = 0, f = Object.keys(d); h < f.length; h++) {
                    var y = f[h];
                    !0 !== d[y] && delete d[y]
                }
                return d
            }(window),
            l = Object.keys(s),
            c = {
                c: {
                    e: e.join(" "),
                    d: n.join(" "),
                    c: o.join(" "),
                    l: l.join(" ")
                }
            };
        this.eventstream.track(a.a.CONFIG_EVENT, c)
    }, s.prototype._resources = function() {
        return this.performance ? this.performance.getEntriesByType("resource") : []
    };
    var l = {
        main: "f",
        cardNumber: "n",
        giftCard: "g",
        cvv: "v",
        expirationDate: "x",
        postalCode: "p",
        card: "s"
    };

    function c(t) {
        switch (t.initiatorType) {
            case "script":
                return /v2\/paymentform/.test(t.name);
            case "iframe":
                return /v2\/iframe/.test(t.name);
            default:
                return !1
        }
    }

    function u(t) {
        return 0 < t.duration ? t.duration : Math.max(t.responseEnd - t.startTime, 0)
    }
    e.a = s
}, , function(t, e, n) {
    var i = n(41);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}, function(t, e, n) {
    var i = n(66),
        r = n(36);
    t.exports = function(t, e, n) {
        if (i(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(r(t))
    }
}, function(t, e, n) {
    var i = n(4)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[i] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    "use strict";
    var i = n(91)(!0);
    n(70)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    var i = n(5);
    t.exports = function(t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)), e
        }
    }
}, function(t, e, n) {
    var i = n(44),
        r = n(4)("iterator"),
        o = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || o[r] === t)
    }
}, function(t, e, n) {
    var i = n(68),
        r = n(4)("iterator"),
        o = n(44);
    t.exports = n(35).getIteratorMethod = function(t) {
        if (null != t) return t[r] || t["@@iterator"] || o[i(t)]
    }
}, function(t, e, n) {
    var i = n(4)("iterator"),
        r = !1;
    try {
        var o = [7][i]();
        o.return = function() {
            r = !0
        }, Array.from(o, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !r) return !1;
        var n = !1;
        try {
            var o = [7],
                a = o[i]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, o[i] = function() {
                return a
            }, t(o)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    var i = n(11);
    i(i.S, "Object", {
        setPrototypeOf: n(85).set
    })
}, function(t, e, n) {
    function i(t, e, n) {
        var i = {},
            o = a(function() {
                return !!s[t]() || "​" != "​" [t]()
            }),
            l = i[t] = o ? e(p) : s[t];
        n && (i[n] = l), r(r.P + r.F * o, "String", i)
    }
    var r = n(11),
        o = n(36),
        a = n(10),
        s = n(109),
        l = "[" + s + "]",
        c = RegExp("^" + l + l + "*"),
        u = RegExp(l + l + "*$"),
        p = i.trim = function(t, e) {
            return t = String(o(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t
        };
    t.exports = i
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, , , function(t, e, n) {
    t.exports = n(51)("native-function-to-string", Function.toString)
}, function(t, e, n) {
    var i = n(29),
        r = n(64),
        o = n(42);
    t.exports = function(t) {
        var e = i(t),
            n = r.f;
        if (n)
            for (var a, s = n(t), l = o.f, c = 0; s.length > c;) l.call(t, a = s[c++]) && e.push(a);
        return e
    }
}, function(t, e, n) {
    var i = n(56),
        r = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
    }
}, function(t, e, n) {
    var i = n(16),
        r = n(5),
        o = n(29);
    t.exports = n(6) ? Object.defineProperties : function(t, e) {
        r(t);
        for (var n, a = o(e), s = a.length, l = 0; l < s;) i.f(t, n = a[l++], e[n]);
        return t
    }
}, function(t, e, n) {
    var i = n(8).document;
    t.exports = i && i.documentElement
}, function(t, e, n) {
    var i = n(30),
        r = n(57).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == o.call(t) ? function(t) {
            try {
                return r(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : r(i(t))
    }
}, function(t, e, n) {
    n(6) && "g" != /./g.flags && n(16).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(58)
    })
}, function(t, e, n) {
    "use strict";
    var i = n(6),
        r = n(29),
        o = n(64),
        a = n(42),
        s = n(37),
        l = n(74),
        c = Object.assign;
    t.exports = !c || n(10)(function() {
        var t = {},
            e = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
        return t[n] = 7, i.split("").forEach(function(t) {
            e[t] = t
        }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i
    }) ? function(t, e) {
        for (var n = s(t), c = arguments.length, u = 1, p = o.f, d = a.f; u < c;)
            for (var h, f = l(arguments[u++]), y = p ? r(f).concat(p(f)) : r(f), m = y.length, g = 0; g < m;) h = y[g++], i && !d.call(f, h) || (n[h] = f[h]);
        return n
    } : c
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(69);
    n(11)({
        target: "RegExp",
        proto: !0,
        forced: i !== /./.exec
    }, {
        exec: i
    })
}, function(t, e, n) {
    "use strict";
    var i = n(43),
        r = n(45),
        o = n(55),
        a = {};
    n(28)(a, n(4)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = i(a, {
            next: r(1, n)
        }), o(t, e + " Iterator")
    }
}, function(t, e, n) {
    var i = n(27),
        r = n(37),
        o = n(62)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, n) {
    var i = n(5),
        r = n(53),
        o = n(4)("species");
    t.exports = function(t, e) {
        var n, a = i(t).constructor;
        return void 0 === a || null == (n = i(a)[o]) ? e : r(n)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(126),
        r = n(95);
    t.exports = n(127)("Map", function(t) {
        return function(e) {
            return t(this, 0 < arguments.length ? e : void 0)
        }
    }, {
        get: function(t) {
            var e = i.getEntry(r(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return i.def(r(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, i, !0)
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        var n, i = f(e);
        if ("F" !== i) return t._i[i];
        for (n = t._f; n; n = n.n)
            if (n.k == e) return n
    }
    var r = n(16).f,
        o = n(43),
        a = n(92),
        s = n(40),
        l = n(93),
        c = n(94),
        u = n(70),
        p = n(88),
        d = n(86),
        h = n(6),
        f = n(54).fastKey,
        y = n(95),
        m = h ? "_s" : "size";
    t.exports = {
        getConstructor: function(t, e, n, u) {
            var p = t(function(t, i) {
                l(t, p, e, "_i"), t._t = e, t._i = o(null), t._f = void 0, t._l = void 0, t[m] = 0, null != i && c(i, n, t[u], t)
            });
            return a(p.prototype, {
                clear: function() {
                    for (var t = y(this, e), n = t._i, i = t._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                    t._f = t._l = void 0, t[m] = 0
                },
                delete: function(t) {
                    var n = y(this, e),
                        r = i(n, t);
                    if (r) {
                        var o = r.n,
                            a = r.p;
                        delete n._i[r.i], r.r = !0, a && (a.n = o), o && (o.p = a), n._f == r && (n._f = o), n._l == r && (n._l = a), n[m]--
                    }
                    return !!r
                },
                forEach: function(t, n) {
                    y(this, e);
                    for (var i, r = s(t, 1 < arguments.length ? n : void 0, 3); i = i ? i.n : this._f;)
                        for (r(i.v, i.k, this); i && i.r;) i = i.p
                },
                has: function(t) {
                    return !!i(y(this, e), t)
                }
            }), h && r(p.prototype, "size", {
                get: function() {
                    return y(this, e)[m]
                }
            }), p
        },
        def: function(t, e, n) {
            var r, o, a = i(t, e);
            return a ? a.v = n : (t._l = a = {
                i: o = f(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = a), r && (r.n = a), t[m]++, "F" !== o && (t._i[o] = a)), t
        },
        getEntry: i,
        setStrong: function(t, e, n) {
            u(t, e, function(t, n) {
                this._t = y(t, e), this._k = n, this._l = void 0
            }, function() {
                for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? p(0, "keys" == e ? n.k : "values" == e ? n.v : [n.k, n.v]) : (t._t = void 0, p(1))
            }, n ? "entries" : "values", !n, !0), d(e)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(8),
        r = n(11),
        o = n(18),
        a = n(92),
        s = n(54),
        l = n(94),
        c = n(93),
        u = n(13),
        p = n(10),
        d = n(106),
        h = n(55),
        f = n(67);
    t.exports = function(t, e, n, y, m, g) {
        function v(t) {
            var e = b[t];
            o(b, t, "delete" == t ? function(t) {
                return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t)
            } : "has" == t ? function(t) {
                return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t)
            } : "get" == t ? function(t) {
                return g && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
            } : "add" == t ? function(t) {
                return e.call(this, 0 === t ? 0 : t), this
            } : function(t, n) {
                return e.call(this, 0 === t ? 0 : t, n), this
            })
        }
        var _ = i[t],
            E = _,
            S = m ? "set" : "add",
            b = E && E.prototype,
            I = {};
        if ("function" == typeof E && (g || b.forEach && !p(function() {
                (new E).entries().next()
            }))) {
            var C = new E,
                P = C[S](g ? {} : -0, 1) != C,
                A = p(function() {
                    C.has(1)
                }),
                w = d(function(t) {
                    new E(t)
                }),
                O = !g && p(function() {
                    for (var t = new E, e = 5; e--;) t[S](e, e);
                    return !t.has(-0)
                });
            w || (((E = e(function(e, n) {
                c(e, E, t);
                var i = f(new _, e, E);
                return null != n && l(n, m, i[S], i), i
            })).prototype = b).constructor = E), (A || O) && (v("delete"), v("has"), m && v("get")), (O || P) && v(S), g && b.clear && delete b.clear
        } else E = y.getConstructor(e, t, m, S), a(E.prototype, n), s.NEED = !0;
        return h(E, t), I[t] = E, r(r.G + r.W + r.F * (E != _), I), g || y.setStrong(E, t, m), E
    }
}, function(t, e, n) {
    var i = n(11),
        r = n(43),
        o = n(53),
        a = n(5),
        s = n(13),
        l = n(10),
        c = n(129),
        u = (n(8).Reflect || {}).construct,
        p = l(function() {
            function t() {}
            return !(u(function() {}, [], t) instanceof t)
        }),
        d = !l(function() {
            u(function() {})
        });
    i(i.S + i.F * (p || d), "Reflect", {
        construct: function(t, e, n) {
            o(t), a(e);
            var i = arguments.length < 3 ? t : o(n);
            if (d && !p) return u(t, e, i);
            if (t == i) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var l = [null];
                return l.push.apply(l, e), new(c.apply(t, l))
            }
            var h = i.prototype,
                f = r(s(h) ? h : Object.prototype),
                y = Function.apply.call(t, f, e);
            return s(y) ? y : f
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(53),
        r = n(13),
        o = n(130),
        a = [].slice,
        s = {};
    t.exports = Function.bind || function(t) {
        var e = i(this),
            n = a.call(arguments, 1),
            l = function() {
                var i = n.concat(a.call(arguments));
                return this instanceof l ? function(t, e, n) {
                    if (!(e in s)) {
                        for (var i = [], r = 0; r < e; r++) i[r] = "a[" + r + "]";
                        s[e] = Function("F,a", "return new F(" + i.join(",") + ")")
                    }
                    return s[e](t, n)
                }(e, i.length, i) : o(e, i, t)
            };
        return r(e.prototype) && (l.prototype = e.prototype), l
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var i = void 0 === n;
        switch (e.length) {
            case 0:
                return i ? t() : t.call(n);
            case 1:
                return i ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var i = n(6),
        r = n(29),
        o = n(30),
        a = n(42).f;
    t.exports = function(t) {
        return function(e) {
            for (var n, s = o(e), l = r(s), c = l.length, u = 0, p = []; u < c;) n = l[u++], i && !a.call(s, n) || p.push(t ? [n, s[n]] : s[n]);
            return p
        }
    }
}, function(t, e, n) {
    var i = n(13),
        r = n(54).onFreeze;
    n(89)("freeze", function(t) {
        return function(e) {
            return t && i(e) ? t(r(e)) : e
        }
    })
}, , , function(t, e, n) {
    "use strict";
    var i = n(11),
        r = n(159)(5),
        o = "find",
        a = !0;
    o in [] && Array(1)[o](function() {
        a = !1
    }), i(i.P + i.F * a, "Array", {
        find: function(t, e) {
            return r(this, t, 1 < arguments.length ? e : void 0)
        }
    }), n(75)(o)
}, , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var i = n(11),
        r = n(33),
        o = n(100),
        a = "startsWith",
        s = "" [a];
    i(i.P + i.F * n(101)(a), "String", {
        startsWith: function(t, e) {
            var n = o(this, t, a),
                i = r(Math.min(1 < arguments.length ? e : void 0, n.length)),
                l = String(t);
            return s ? s.call(n, l, i) : n.slice(i, i + l.length) === l
        }
    })
}, function(t, e, n) {
    var i = n(11),
        r = n(158);
    i(i.S + i.F * (Number.parseFloat != r), "Number", {
        parseFloat: r
    })
}, function(t, e, n) {
    var i = n(8).parseFloat,
        r = n(108).trim;
    t.exports = 1 / i(n(109) + "-0") != -1 / 0 ? function(t) {
        var e = r(String(t), 3),
            n = i(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : i
}, function(t, e, n) {
    var i = n(40),
        r = n(74),
        o = n(37),
        a = n(33),
        s = n(160);
    t.exports = function(t, e) {
        var n = 1 == t,
            l = 2 == t,
            c = 3 == t,
            u = 4 == t,
            p = 6 == t,
            d = 5 == t || p,
            h = e || s;
        return function(e, s, f) {
            for (var y, m, g = o(e), v = r(g), _ = i(s, f, 3), E = a(v.length), S = 0, b = n ? h(e, E) : l ? h(e, 0) : void 0; S < E; S++)
                if ((d || S in v) && (m = _(y = v[S], S, g), t))
                    if (n) b[S] = m;
                    else if (m) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return y;
                case 6:
                    return S;
                case 2:
                    b.push(y)
            } else if (u) return !1;
            return p ? -1 : c || u ? u : b
        }
    }
}, function(t, e, n) {
    var i = n(161);
    t.exports = function(t, e) {
        return new(i(t))(e)
    }
}, function(t, e, n) {
    var i = n(13),
        r = n(99),
        o = n(4)("species");
    t.exports = function(t) {
        var e;
        return r(t) && ("function" != typeof(e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), i(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
    }
}, , , , , , function(t, e, n) {
    "use strict";
    n.r(e), n(25), n(26), n(9), n(22), n(31), n(76), n(156), n(46), n(12), n(21);
    var i = n(2),
        r = n(38),
        o = n(1),
        a = i.a.versionedUrl("https://pci-connect.squareupsandbox.com/v2/js-error");

    function s(t) {
        this.options = t || {}, this.source = this.options.source, this.applicationId = this.options.applicationId, this.apiWrapper = this.options.apiWrapper, this.ignoreError = 0, this.urlMatcher = /.+/, this.options.captureUncaughtExceptions && (this.options.captureUncaughtExceptions instanceof RegExp && (this.urlMatcher = this.options.captureUncaughtExceptions), this.install(window))
    }
    var l = s;
    s.prototype.destroy = function() {
        this.originalOnerror && (window.onerror = this.originalOnerror, this.originalOnerror = null)
    }, s.prototype.ignoreNextError = function() {
        var t = this;
        this.ignoreError += 1, window.setTimeout(function() {
            return t.ignoreError -= 1
        }, 0)
    }, s.prototype.wrap = function(t) {
        var e = this;
        if (t.__inner__) return t;

        function n() {
            var n = [].slice.call(arguments);
            try {
                return t.apply(this, n)
            } catch (n) {
                throw e.capture(n), n
            }
        }
        return n.__inner__ = t, n
    }, s.prototype.capture = function(t) {
        if ((t.name || t.message) && i.a.shouldTrackEvents()) {
            t.message, this.ignoreNextError();
            var e = this._createPayload(t.name, t.message || "[unknown]", t.fileName || "[unknown]", t.stack);
            this._send(e)
        }
    }, s.prototype.install = function(t) {
        t.__error_logger__ || (t.__error_logger__ = !0, this.originalOnerror = t.onerror, t.onerror = function(e, n, i, r, a) {
            return this.ignoreError || /Script error/.test(e) || !this.urlMatcher.test(n) || (a = a || ("Syntax error" === e ? new SyntaxError("Unexpected syntax error") : new o.r(e)), this.capture(a)), "function" == typeof this.originalOnerror && this.originalOnerror.apply(t, [].slice.call(arguments))
        }.bind(this))
    }, s.prototype._createPayload = function(t, e, n, r) {
        return {
            app_id: this.applicationId,
            type: t,
            message: e,
            stack: r,
            ua: window.navigator.userAgent,
            url: i.a.baseUrl(window.location),
            app_url: i.a.baseUrl(i.a.getParentLocation()),
            script_url: n,
            source: this.source,
            wrapper: this.apiWrapper
        }
    }, s.prototype._send = function(t) {
        r.a.post(a, {
            json: t
        }, this._handleResponse.bind(this))
    }, s.prototype._handleResponse = function() {};
    var c = n(47),
        u = n(0),
        p = "https://js.squareupsandbox.com/payments/data.js",
        d = [],
        h = {
            library: null,
            calculate: function(t) {
                var e = this,
                    n = t.done,
                    i = t.websiteUrl;
                if (this._libraryAvailable()) return this._initializeLibrary(t), void this.library.getToken(n, {
                    websiteUrl: i
                });
                d.push(function() {
                    return e.library.getToken(n, {
                        websiteUrl: i
                    })
                });
                var r = Object.assign({}, t);
                this._install(r)
            },
            verifyBuyer: function(t, e, n, i) {
                var r = this;
                if (this._libraryAvailable()) return this._initializeLibrary(t), void this.library.verifyBuyer(e, n, i);
                d.push(function() {
                    return r.library.verifyBuyer(e, n, i)
                });
                var o = Object.assign({}, t);
                this._install(o)
            },
            _handleLoad: function(t) {
                this._installing = !1, this._libraryAvailable() ? (this._initializeLibrary(t), this._processQueue()) : "function" == typeof t.done && t.done()
            },
            _install: function(t) {
                var e = this,
                    n = 0 < arguments.length && void 0 !== t ? t : {};
                this._libraryInitialized() ? this._processQueue() : this._installing || this._libraryAvailable() || (this._installing = !0, "complete" !== document.readyState ? window.addEventListener("load", function t() {
                    window.removeEventListener("load", t), e._injectScript(n)
                }) : this._injectScript(n))
            },
            _injectScript: function(t) {
                var e = this;
                if (0 !== p.length) {
                    var n = document.createElement("script");
                    n.src = p;
                    var i = function() {
                        return e._handleLoad(t)
                    };
                    n.addEventListener("load", i, !1), n.addEventListener("error", i, !1), document.body.appendChild(n)
                }
            },
            _processQueue: function() {
                for (; d.length;) d.shift()()
            },
            _libraryAvailable: function() {
                return "undefined" != typeof Square && void 0 !== Square.Analytics
            },
            _libraryInitialized: function() {
                return this._libraryAvailable() && !!this.library
            },
            _initializeLibrary: function(t) {
                if (!this._libraryInitialized()) {
                    var e = t.applicationId,
                        n = {};
                    t.locationId ? n.locationId = t.locationId : t.accountId && (n.accountId = t.accountId), n.locationId || n.accountId ? this.library = new Square.Analytics(e, n) : this.library = new Square.Analytics(e)
                }
            }
        },
        f = (n(19), n(17), n(23), n(96));

    function y(t, e, n) {
        this.type = t, this.options = e, this.callbacks = n, this.element = document.createElement("iframe"), this.element.onerror = this.onerror.bind(this), this.element.onload = this.onload.bind(this), this.setDefaultAttributes()
    }
    y.MIN_HEIGHT = 17, y.prototype.onerror = function(t) {
        "function" == typeof this.callbacks.onerror && this.callbacks.onerror(t)
    }, y.prototype.onload = function() {
        "function" == typeof this.callbacks.onload && this.callbacks.onload(this.type)
    }, y.prototype.destroy = function() {
        this.element.focus(), this.element.blur(), this.element.parentNode && (this.originalElement ? this.element.parentNode.replaceChild(this.originalElement, this.element) : this.element.parentNode.removeChild(this.element)), this.originalElement = null, this.element = null
    }, y.prototype.setDefaultAttributes = function() {
        var t = this.element;
        t.setAttribute("id", this.options.elementId), t.setAttribute("name", this.name()), t.setAttribute("class", this.combinedClassName()), t.setAttribute("frameBorder", "0"), t.setAttribute("width", "100%"), t.setAttribute("scrolling", "no"), t.setAttribute("height", 17), t.setAttribute("src", this.iframeSRC())
    }, y.prototype.combinedClassName = function() {
        var t = [];
        return this.options.inputClass && t.push(this.options.inputClass), this.options.inheritedClassName && t.push(this.options.inheritedClassName), t.join(" ")
    }, y.prototype.iframeSRC = function() {
        return i.a.versionedUrl("https://pci-connect.squareupsandbox.com/v2/iframe", this.queryParameters())
    }, y.prototype.queryParameters = function() {
        var t = {
            type: this.type
        };
        return this.options.appendQueryParams && (t.app_id = this.options.applicationId, t.host_name = window.location.hostname, this.options.locationId && (t.location_id = this.options.locationId), this.options.accountId && (t.account_id = this.options.accountId)), t
    }, y.prototype.addClass = function(t) {
        this.element.classList.add(t)
    }, y.prototype.removeClass = function(t) {
        this.element.classList.remove(t)
    }, y.prototype.focus = function() {
        this.element.focus()
    }, y.prototype.name = function() {
        return this.options.elementId
    };
    var m = y;
    var g = {
            allowPaymentRequest: "true",
            height: "0",
            width: "0",
            style: "border: none !important; display: block !important; visibility: hidden !important"
        },
        v = function() {
            function t(e) {
                ! function(e) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), this._options = e, this._errorLogger = this._options.errorLogger, this._id = this._options.formId, this._onload = this._options.onload, this._origin = this._options.targetOriginURL, this._ready = !1, this._window = null, this._iframe = this.createIframe()
            }
            return function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }(t.prototype, [{
                key: "destroy",
                value: function() {
                    this._ready = !1, this._window = null, this._iframe.destroy(), this._iframe = null
                }
            }, {
                key: "send",
                value: function(t) {
                    this._ready && this._window && this._window.postMessage(t, this._origin)
                }
            }, {
                key: "createIframe",
                value: function() {
                    var t = {
                            onerror: this.handleError.bind(this),
                            onload: this.handleLoad.bind(this)
                        },
                        e = Object.assign({}, this._options, {
                            appendQueryParams: !0,
                            elementId: this._options.formId
                        }),
                        n = new m("main", e, t);
                    return Object.keys(g).forEach(function(t) {
                        n.element.setAttribute(t, g[t])
                    }), document.body.appendChild(n.element), n
                }
            }, {
                key: "handleError",
                value: function(t) {
                    this._ready = !1, this._errorLogger.capture(t)
                }
            }, {
                key: "handleLoad",
                value: function() {
                    this._ready = !0, this._window = this._iframe.element.contentWindow, this._onload()
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "ready",
                get: function() {
                    return this._ready
                }
            }, {
                key: "window",
                get: function() {
                    return this._window
                }
            }]), t
        }(),
        _ = n(97);
    var E = function() {
            function t(e) {
                ! function(e) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), this._controller = e, this._applicationId = e.options.applicationId, this._locationId = e.options.locationId, this._accountId = e.options.accountId, this._inputs = e.options.inputs, this._inputClass = e.options.inputClass, this._errorLogger = e.errorLogger, this._messageHandlers = e.messageHandlers, this._inputEventCallback = function() {}, e.callbacks && "function" == typeof e.callbacks.inputEventReceived && (this._inputEventCallback = e.callbacks.inputEventReceived), this._expectedLoadedFrames = Object.keys(this._inputs).length, this._iframeControllers = {}, this._iframeNames = {}, this._loadedIframes = [], this._RESIZE_TIMEOUT_MS = 250
            }
            return function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }(t.prototype, [{
                key: "build",
                value: function() {
                    var t = this;
                    this._buildIframeControllers(), this._addResizeEventListener(), this._messageHandlers.add(u.a.events.SET_INPUT_HEIGHT, function(e) {
                        t._setInputHeight(e.inputType, e.inputHeight)
                    }), this._messageHandlers.add(u.a.events.INPUT_EVENT_RECEIVED, function(e) {
                        t._inputEventReceived(e.inputEvent)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    for (var t in this._removeResizeEventListener(), this._removeTouchStartEventListener(), this._iframeControllers) i.a.hasOwn(this._iframeControllers, t) && (this._iframeControllers[t].destroy(), delete this._iframeControllers[t])
                }
            }, {
                key: "focus",
                value: function(t) {
                    var e = !1;
                    for (var n in this._inputs)
                        if (i.a.hasOwn(this._inputs, n) && t === n) {
                            e = !0;
                            break
                        } if (!e) {
                        var r = new o.e(t);
                        throw this._errorLogger.capture(r), r
                    }
                    this._iframeControllers[t].focus()
                }
            }, {
                key: "_inputEventReceived",
                value: function(t) {
                    var e = this._iframeControllers[t.field];
                    switch (t.eventType) {
                        case u.a.inputEvents.ERROR_CLASS_ADDED:
                            var n = this._classNameForClassType("error");
                            e.addClass(n);
                            break;
                        case u.a.inputEvents.ERROR_CLASS_REMOVED:
                            var i = this._classNameForClassType("error");
                            e.removeClass(i);
                            break;
                        case u.a.inputEvents.FOCUS_CLASS_ADDED:
                            var r = this._classNameForClassType("focus");
                            e.addClass(r);
                            break;
                        case u.a.inputEvents.FOCUS_CLASS_REMOVED:
                            var o = this._classNameForClassType("focus");
                            e.removeClass(o)
                    }
                    this._inputEventCallback(t)
                }
            }, {
                key: "_classNameForClassType",
                value: function(t) {
                    return this._inputClass + "--" + t
                }
            }, {
                key: "_setInputHeight",
                value: function(t, e) {
                    var n = this._iframeControllers[t].element,
                        i = Math.max(e, m.MIN_HEIGHT);
                    n.setAttribute("height", i), 0 !== e || this._inputHeightError || (this._inputHeightError = !0, this._errorLogger.capture(new o.d))
                }
            }, {
                key: "_buildIframeControllers",
                value: function() {
                    for (var t in this._inputs) i.a.hasOwn(this._inputs, t) && this._buildIframeController(t)
                }
            }, {
                key: "_buildIframeController",
                value: function(t) {
                    var e = this._inputs[t].elementId,
                        n = this._getContainerElement(e),
                        i = Object.assign({}, this._inputs[t], {
                            applicationId: this._applicationId,
                            locationId: this._locationId,
                            accountId: this._accountId,
                            inputClass: this._inputClass,
                            inheritedClassName: n.className
                        });
                    this._iframeControllers[t] = new m(t, i, this._iframeCallbacks()), this._iframeNames[t] = this._iframeControllers[t].name(), (this._iframeControllers[t].originalElement = n).parentElement.replaceChild(this._iframeControllers[t].element, n)
                }
            }, {
                key: "_getContainerElement",
                value: function(t) {
                    var e = document.getElementById(t);
                    if (!e) throw new o.a(t);
                    var n = e.innerHTML;
                    e.innerHTML = "!";
                    var i = e.offsetHeight;
                    return e.innerHTML = n, i <= 0 && window.console.warn(new o.b(t)), e
                }
            }, {
                key: "_iframeCallbacks",
                value: function() {
                    var t = this;
                    return {
                        onload: function(e) {
                            return t._addLoadedFrame(e)
                        }
                    }
                }
            }, {
                key: "_addLoadedFrame",
                value: function(t) {
                    this._loadedIframes.includes(t) || this._loadedIframes.push(t), this._loadedIframes.length === this._expectedLoadedFrames && (this._addTouchStartEventListener(), this._controller.onload())
                }
            }, {
                key: "_addResizeEventListener",
                value: function() {
                    this._resizeCallback = this._updateStylesOnResize.bind(this), window.addEventListener("resize", this._resizeCallback)
                }
            }, {
                key: "_removeResizeEventListener",
                value: function() {
                    window.removeEventListener("resize", this._resizeCallback), clearTimeout(this.fireOnResizeEnd)
                }
            }, {
                key: "_updateStylesOnResize",
                value: function() {
                    var t = this;
                    clearTimeout(this.fireOnResizeEnd), this.fireOnResizeEnd = setTimeout(function() {
                        return t._buildStylesForScreenWidth()
                    }, this._RESIZE_TIMEOUT_MS)
                }
            }, {
                key: "_buildStylesForScreenWidth",
                value: function() {
                    this._controller.sendEvent(u.a.events.BUILD_STYLES_FOR_SCREEN_WIDTH, {
                        screenWidth: window.innerWidth
                    })
                }
            }, {
                key: "_blurAllInputs",
                value: function() {
                    this._controller.sendEvent(u.a.events.BLUR_ALL_INPUTS)
                }
            }, {
                key: "_addTouchStartEventListener",
                value: function() {
                    var t = this;
                    this._touchcancelCallback = function() {
                        return t._touchStarted = !1
                    }, this._touchmoveCallback = function() {
                        return t._touchStarted = !1
                    }, this._touchstartCallback = function() {
                        return t._touchStarted = !0
                    }, this._touchendCallback = function() {
                        t._touchStarted && t._blurAllInputs(), t._touchStarted = !1
                    }, window.addEventListener("touchstart", this._touchstartCallback), window.addEventListener("touchend", this._touchendCallback), window.addEventListener("touchmove", this._touchmoveCallback), window.addEventListener("touchcancel", this._touchcancelCallback)
                }
            }, {
                key: "_removeTouchStartEventListener",
                value: function() {
                    window.removeEventListener("touchstart", this._touchstartCallback), window.removeEventListener("touchend", this._touchendCallback), window.removeEventListener("touchmove", this._touchmoveCallback), window.removeEventListener("touchcancel", this._touchcancelCallback)
                }
            }, {
                key: "iframeNames",
                get: function() {
                    return this._iframeNames
                }
            }]), t
        }(),
        S = (n(72), n(7)),
        b = n(15);
    var I = S.a.messages.cardNumber.details,
        C = S.a.classNames,
        P = function() {
            function t(e) {
                ! function(e) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), this._unpackOptions(e), this._build()
            }
            return function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }(t.prototype, [{
                key: "_unpackOptions",
                value: function(t) {
                    if (void 0 === t.containerElement) throw new TypeError("[SqFormDetails]: The containerElement option is required.");
                    this._initialDetails = t.initialDetails, this._containerEl = t.containerElement;
                    var e = t.styles || {},
                        n = e.error || {},
                        i = e.focus || {},
                        r = e.hidden ? "none" : b.a;
                    this._styles = {
                        default: {
                            color: e.color || b.a,
                            fontFamily: e.fontFamily || b.a,
                            fontSize: e.fontSize || b.a,
                            fontWeight: e.fontWeight || b.a,
                            display: r,
                            letterSpacing: e.letterSpacing || b.a
                        }
                    }, this._styles.error = {
                        color: n.color || b.a,
                        fontFamily: n.fontFamily || this._styles.default.fontFamily,
                        fontSize: n.fontSize || this._styles.default.fontSize,
                        fontWeight: n.fontWeight || this._styles.default.fontWeight,
                        display: r
                    }, this._styles.focus = {
                        color: i.color || this._styles.default.color,
                        fontFamily: i.fontFamily || this._styles.default.fontFamily,
                        fontSize: i.fontSize || this._styles.default.fontSize,
                        fontWeight: i.fontWeight || this._styles.default.fontWeight,
                        display: r
                    }
                }
            }, {
                key: "_getInitialDetails",
                value: function() {
                    var t = I;
                    return "string" == typeof this._initialDetails && this._initialDetails.length && (t = this._initialDetails), t
                }
            }, {
                key: "_build",
                value: function() {
                    this.element = document.createElement("span"), this.element.setAttribute("class", "".concat(C.base, "-details")), this.element.textContent = this._getInitialDetails(), this._containerEl.appendChild(this.element), this.applyDefaultStyles()
                }
            }, {
                key: "getText",
                value: function() {
                    return this.element.textContent
                }
            }, {
                key: "updateText",
                value: function(t) {
                    var e = this;
                    void 0 !== t && t !== this.element.textContent && (this.element.classList.add(C.hide), setTimeout(function() {
                        e.element.textContent = t, e.element.classList.remove(C.hide)
                    }, 100))
                }
            }, {
                key: "applyErrorStyles",
                value: function() {
                    this._applyStyles(this._styles.error), this.element.classList.add(C.error)
                }
            }, {
                key: "removeErrorStyles",
                value: function() {
                    this.applyDefaultStyles()
                }
            }, {
                key: "applyFocusStyles",
                value: function() {
                    this._applyStyles(this._styles.focus)
                }
            }, {
                key: "removeFocusStyles",
                value: function() {
                    this.applyDefaultStyles()
                }
            }, {
                key: "applyDefaultStyles",
                value: function() {
                    this._applyStyles(this._styles.default), this.element.classList.remove(C.error)
                }
            }, {
                key: "_applyStyles",
                value: function(t) {
                    var e = b.c.styleStringForStyleObject(t, b.b.FORM_DETAILS);
                    this.element.setAttribute("style", e)
                }
            }]), t
        }();
    var A = Object.assign({}, S.a.classNames),
        w = function() {
            function t(e) {
                ! function(e) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), this._unpackOptions(e), this._build()
            }
            return function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }(t.prototype, [{
                key: "_unpackOptions",
                value: function(t) {
                    if (void 0 === t.containerElement) throw new TypeError("[SqFormWrapper]: The containerElement option is required.");
                    if (void 0 === t.iframeElement) throw new TypeError("[SqFormWrapper]: The iframeElement option is required.");
                    this._container = t.containerElement, this._iframe = t.iframeElement;
                    var e = Object.assign({
                        error: {},
                        focus: {}
                    }, t.styles || {});

                    function n(t, n) {
                        var i = t ? e[t] : e;
                        return i.boxShadow || i.outlineColor && function(t) {
                            return "0 0 0 1px ".concat(t)
                        }(i.outlineColor) || n
                    }
                    var i = e.borderRadius || b.a,
                        r = n(null, b.a),
                        o = e.backgroundColor || b.a;

                    function a(t) {
                        return {
                            borderRadius: e[t].borderRadius || i,
                            boxShadow: n(t, r),
                            backgroundColor: e[t].backgroundColor || o
                        }
                    }
                    this._styles = {
                        default: {
                            borderRadius: i,
                            boxShadow: r,
                            backgroundColor: o
                        },
                        error: a("error"),
                        focus: a("focus")
                    }
                }
            }, {
                key: "_build",
                value: function() {
                    this.element = document.createElement("div"), this.element.setAttribute("class", "".concat(A.base, "-form-wrapper")), this.element.appendChild(this._iframe), this._container.appendChild(this.element), this.applyDefaultStyles()
                }
            }, {
                key: "applyFocusStyles",
                value: function() {
                    this.element.classList.add(A.focus), this._applyStyles(this._styles.focus)
                }
            }, {
                key: "removeFocusStyles",
                value: function() {
                    this.applyDefaultStyles()
                }
            }, {
                key: "applyErrorStyles",
                value: function() {
                    this.element.classList.add(A.error), this._applyStyles(this._styles.error)
                }
            }, {
                key: "removeErrorStyles",
                value: function() {
                    this.applyDefaultStyles()
                }
            }, {
                key: "applyDefaultStyles",
                value: function() {
                    this.element.classList.remove(A.error), this._applyStyles(this._styles.default)
                }
            }, {
                key: "_applyStyles",
                value: function(t) {
                    var e = b.c.styleStringForStyleObject(t, b.b.FORM_WRAPPER);
                    this.element.setAttribute("style", e)
                }
            }]), t
        }();
    var O = Object.assign({}, S.a.defaultStyles),
        T = Object.values(u.a.inputEvents),
        R = u.a.inputTypes.SINGLE_CARD,
        k = function() {
            function t(e) {
                ! function(e) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), this._controller = e, this._options = e.options, this._errorLogger = e.errorLogger, this._inputClass = e.inputClass, this._onload = e.onload, this._messageHandlers = e.messageHandlers, this._inputOptions = this._options.inputs[R], this._unpackInputStyle(this._inputOptions.inputStyle || {}), this._inputEventCallback = function() {}, this._controller.callbacks && "function" == typeof this._controller.callbacks.inputEventReceived && (this._inputEventCallback = this._controller.callbacks.inputEventReceived), this._errors = [], this._details, this._wrapper
            }
            return function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }(t.prototype, [{
                key: "_unpackInputStyle",
                value: function(t) {
                    this._detailsStyles = Object.assign({
                        color: t.placeholderColor || O.placeholder.color,
                        error: t.error,
                        focus: t.focus
                    }, t.details), this._wrapperStyles = {
                        borderRadius: t.borderRadius,
                        boxShadow: t.boxShadow,
                        outlineColor: t.outlineColor,
                        backgroundColor: t.backgroundColor,
                        error: {
                            boxShadow: t.error && t.error.boxShadow,
                            backgroundColor: t.error && t.error.backgroundColor,
                            outlineColor: t.error && t.error.outlineColor
                        },
                        focus: {
                            boxShadow: t.focus && t.focus.boxShadow,
                            backgroundColor: t.focus && t.focus.backgroundColor,
                            outlineColor: t.focus && t.focus.outlineColor
                        }
                    }
                }
            }, {
                key: "build",
                value: function() {
                    var t = this;
                    this._injectClientStyles(), this._buildIframeController(), this._addResizeEventListener(), this._messageHandlers.add(u.a.events.SET_INPUT_HEIGHT, function(e) {
                        t._setInputHeight(e.inputHeight)
                    }), this._messageHandlers.add(u.a.events.INPUT_EVENT_RECEIVED, function(e) {
                        t._eventReceived(e.event)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this._removeClientStyles(), this._removeResizeEventListener(), this._removeTouchStartEventListener(), this._iframeController && (this._removeIframeController(), delete this._iframeController)
                }
            }, {
                key: "_injectClientStyles",
                value: function() {
                    if (!this._styleElement) {
                        var t = document.createElement("style");
                        t.type = "text/css", t.textContent = ".sq-card-form-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 56px;\n  max-width: 700px;\n  padding: 0px 16px;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04);\n  border-radius: 6px;\n}\n\n.sq-card-form-wrapper,\n.sq-card-details {\n  min-width: 200px;\n  width: 100%;\n  align-items: center;\n}\n\n.sq-card-base {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sq-card-frame {\n  position: relative;\n  flex-wrap: nowrap;\n  height: 100%;\n  width: 100%;\n  outline: none;\n  -webkit-transition: transform .5s ease-in-out;\n  transition: transform .5s ease-in-out;\n}\n\n.sq-card-details {\n  margin-top: 16px;\n  font-family: Arial;\n  font-size: 12px;\n  text-align: center;\n  color: #C7C7CC;\n  opacity: 1;\n  -webkit-transition: color .1s ease-in, opacity .1s ease-in;\n  transition: color .1s ease-in, opacity .1s ease-in;\n}\n\n.sq-card-details.sq-error {\n  color: #FF3E39;\n}\n\n.sq-card-details.sq-hide {\n  opacity: .2;\n}", document.querySelector("head").appendChild(t), this._styleElement = t
                    }
                }
            }, {
                key: "_removeClientStyles",
                value: function() {
                    this._styleElement && (this._styleElement.parentNode.removeChild(this._styleElement), delete this._styleElement)
                }
            }, {
                key: "_eventReceived",
                value: function(t) {
                    t.field === u.a.inputTypes.SINGLE_CARD ? this._handleSceEvent(t) : this._handleInputEvent(t)
                }
            }, {
                key: "_handleSceEvent",
                value: function(t) {
                    switch (t.eventType) {
                        case u.a.inputEvents.FOCUS_CLASS_ADDED:
                            this._applyFocusStyles();
                            break;
                        case u.a.inputEvents.FOCUS_CLASS_REMOVED:
                            this._removeFocusStyles()
                    }
                }
            }, {
                key: "_handleInputEvent",
                value: function(t) {
                    var e = t.field;
                    switch (t.eventType) {
                        case u.a.inputEvents.FOCUS_CLASS_ADDED:
                            var n;
                            0 === this._errors.length ? n = this._getFieldDetails(e) : this._errors.includes(e) && (n = this._getFieldError(e)), this._details.updateText(n);
                            break;
                        case u.a.inputEvents.ERROR_CLASS_ADDED:
                            this._details.applyErrorStyles(), this._details.updateText(this._getFieldError(e)), this._errors.push(e), 1 === this._errors.length && this._wrapper.applyErrorStyles();
                            break;
                        case u.a.inputEvents.ERROR_CLASS_REMOVED:
                            if (this._errors.splice(this._errors.indexOf(e), 1), 0 === this._errors.length) this._details.removeErrorStyles(), this._wrapper.removeErrorStyles(), this._details.updateText(this._getFieldDetails(e));
                            else {
                                var i = this._errors[this._errors.length - 1];
                                this._details.updateText(this._getFieldError(i))
                            }
                    }
                    T.includes(t.eventType) && this._inputEventCallback(t)
                }
            }, {
                key: "_setInputHeight",
                value: function(t) {
                    var e = Math.max(t, m.MIN_HEIGHT);
                    this._wrapper.element.setAttribute("height", e), 0 !== t || this._inputHeightError || (this._inputHeightError = !0, this._errorLogger.capture(new o.d))
                }
            }, {
                key: "_buildIframeController",
                value: function() {
                    this._originalContainer = this._getContainerElement();
                    var t = Object.assign({}, this._inputOptions, {
                        applicationId: this._options.applicationId,
                        locationId: this._options.locationId,
                        accountId: this._options.accountId,
                        elementId: "".concat(this._inputOptions.elementId, "-frame")
                    });
                    this._iframeController = new m(R, t, this._iframeCallbacks()), this._iframeController.element.classList.add("".concat(S.a.classNames.base, "-frame")), this._iframeName = this._iframeController.name(), this._iframeController.originalElement = this._originalContainer;
                    var e = document.createElement("div");
                    e.setAttribute("id", this._inputOptions.elementId), e.setAttribute("class", this._originalContainer.className), e.classList.add("".concat(S.a.classNames.base, "-base")), this._originalContainer.parentElement.replaceChild(e, this._originalContainer), this._outerContainer = e, this._buildFormWrapper(e), this._buildFormDetails(e)
                }
            }, {
                key: "_removeIframeController",
                value: function() {
                    this._iframeController.destroy(), this._outerContainer.parentElement.replaceChild(this._originalContainer, this._outerContainer), delete this._originalContainer, delete this._outerContainer
                }
            }, {
                key: "_applyFocusStyles",
                value: function() {
                    0 === this._errors.length && (this._details.applyFocusStyles(), this._wrapper.applyFocusStyles())
                }
            }, {
                key: "_removeFocusStyles",
                value: function() {
                    0 === this._errors.length && (this._details.removeFocusStyles(), this._wrapper.removeFocusStyles())
                }
            }, {
                key: "_buildFormWrapper",
                value: function(t) {
                    var e = {
                        containerElement: t,
                        iframeElement: this._iframeController.element,
                        styles: this._wrapperStyles
                    };
                    this._wrapper = new w(e)
                }
            }, {
                key: "_buildFormDetails",
                value: function(t) {
                    var e = {
                        containerElement: t,
                        initialDetails: this._getFieldDetails(S.a.inputTypes.CARD_NUMBER),
                        styles: this._detailsStyles
                    };
                    this._details = new P(e)
                }
            }, {
                key: "_getFieldDetails",
                value: function(t) {
                    var e = S.a.messages[t].details,
                        n = this._inputOptions && this._inputOptions[t];
                    return n && "string" == typeof n.details && n.details.length && (e = n.details), e
                }
            }, {
                key: "_getFieldError",
                value: function(t) {
                    var e = S.a.messages[t].error,
                        n = this._inputOptions && this._inputOptions[t];
                    return n && "string" == typeof n.error && n.error.length && (e = n.error), e
                }
            }, {
                key: "_getContainerElement",
                value: function() {
                    var t = this._inputOptions.elementId,
                        e = document.getElementById(t);
                    if (!e) throw new o.a(t);
                    var n = e.innerHTML;
                    e.innerHTML = "!";
                    var i = e.offsetHeight;
                    return e.innerHTML = n, i <= 0 && window.console.warn(new o.b(t)), e
                }
            }, {
                key: "_iframeCallbacks",
                value: function() {
                    var t = this;
                    return {
                        onload: function() {
                            return t._addLoadedFrame()
                        }
                    }
                }
            }, {
                key: "_addLoadedFrame",
                value: function() {
                    this._addTouchStartEventListener(), this._onload()
                }
            }, {
                key: "_addResizeEventListener",
                value: function() {
                    this._resizeCallback = this._updateStylesOnResize.bind(this), window.addEventListener("resize", this._resizeCallback)
                }
            }, {
                key: "_removeResizeEventListener",
                value: function() {
                    window.removeEventListener("resize", this._resizeCallback), clearTimeout(this.fireOnResizeEnd)
                }
            }, {
                key: "_updateStylesOnResize",
                value: function() {
                    clearTimeout(this.fireOnResizeEnd), this.fireOnResizeEnd = setTimeout(this._buildStylesForScreenWidth.bind(this), 250)
                }
            }, {
                key: "_buildStylesForScreenWidth",
                value: function() {
                    this._controller.sendEvent(u.a.events.BUILD_STYLES_FOR_SCREEN_WIDTH, {
                        screenWidth: window.innerWidth
                    })
                }
            }, {
                key: "_blurAllInputs",
                value: function() {
                    this._controller.sendEvent(u.a.events.BLUR_ALL_INPUTS)
                }
            }, {
                key: "_addTouchStartEventListener",
                value: function() {
                    var t = this;
                    this._touchcancelCallback = function() {
                        t._touchStarted = !1
                    }, this._touchmoveCallback = function() {
                        t._touchStarted = !1
                    }, this._touchstartCallback = function() {
                        t._touchStarted = !0
                    }, this._touchendCallback = function() {
                        t._touchStarted && t._blurAllInputs(), t._touchStarted = !1
                    }, window.addEventListener("touchstart", this._touchstartCallback), window.addEventListener("touchend", this._touchendCallback), window.addEventListener("touchmove", this._touchmoveCallback), window.addEventListener("touchcancel", this._touchcancelCallback)
                }
            }, {
                key: "_removeTouchStartEventListener",
                value: function() {
                    window.removeEventListener("touchstart", this._touchstartCallback), window.removeEventListener("touchend", this._touchendCallback), window.removeEventListener("touchmove", this._touchmoveCallback), window.removeEventListener("touchcancel", this._touchcancelCallback)
                }
            }, {
                key: "iframeName",
                get: function() {
                    return this._iframeName
                }
            }]), t
        }();

    function N(t) {
        return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(78), n(157);
    var L = "SqLineItem",
        M = function() {
            function t(e) {
                ! function(e) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), e && "object" === N(e) || (e = {}), this.data = {}, this.label = e.label, this.pending = e.pending, this.amount = e.amount
            }
            return function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }(t.prototype, [{
                key: "toApplePayLineItem",
                value: function() {
                    return {
                        label: this.data.label,
                        type: this.data.pending ? "pending" : "final",
                        amount: this.data.amount
                    }
                }
            }, {
                key: "toGooglePayLineItem",
                value: function() {
                    return {
                        label: this.data.label,
                        type: "LINE_ITEM",
                        price: this.data.amount,
                        status: this.data.pending ? "PENDING" : "FINAL"
                    }
                }
            }, {
                key: "isValid",
                value: function() {
                    if ("object" !== N(this.data) || "string" != typeof this.data.label || "string" != typeof this.data.amount) return !1;
                    var t = Number.parseFloat(this.data.amount);
                    return !isNaN(t) && (void 0 === this.data.pending || "boolean" == typeof this.data.pending)
                }
            }, {
                key: "toBeacon",
                value: function() {
                    return {
                        l: this.data.label,
                        a: this.data.amount,
                        p: this.data.pending
                    }
                }
            }, {
                key: "label",
                get: function() {
                    return this.data.label
                },
                set: function(t) {
                    i.a.isValidDataType("label", L, t, String), this.data.label = t
                }
            }, {
                key: "pending",
                get: function() {
                    return this.data.pending
                },
                set: function(t) {
                    null != t && i.a.isValidDataType("pending", L, t, Boolean) && (this.data.pending = t)
                }
            }, {
                key: "amount",
                get: function() {
                    return this.data.amount
                },
                set: function(t) {
                    i.a.isValidDataType("amount", L, t, String), this.data.amount = t
                }
            }]), t
        }();

    function D(t) {
        return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function F(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var x = function() {
        function t(e) {
            ! function(e) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this), e && "object" === D(e) || (e = {}), this.data = {}, this.id = e.id, this.label = e.label, this.amount = e.amount
        }
        return n = [{
            key: "fromApplePay",
            value: function(e) {
                return e ? new t({
                    id: e.identifier,
                    label: e.label,
                    amount: e.amount
                }) : e
            }
        }], F((e = t).prototype, [{
            key: "toApplePay",
            value: function() {
                return {
                    label: this.data.label,
                    detail: "",
                    amount: this.data.amount,
                    identifier: this.data.id
                }
            }
        }, {
            key: "toGooglePay",
            value: function(t) {
                return {
                    id: this.data.id,
                    label: this.data.label,
                    description: Intl.NumberFormat(c.a.language(), {
                        style: "currency",
                        currency: t
                    }).format(this.amount)
                }
            }
        }, {
            key: "id",
            get: function() {
                return this.data.id
            },
            set: function(t) {
                this.data.id = t
            }
        }, {
            key: "label",
            get: function() {
                return this.data.label
            },
            set: function(t) {
                this.data.label = t
            }
        }, {
            key: "amount",
            get: function() {
                return this.data.amount
            },
            set: function(t) {
                this.data.amount = t
            }
        }]), F(e, n), t;
        var e, n
    }();

    function q(t) {
        return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var V = "PaymentDetailsUpdate",
        G = {
            addressLines: "addressLines",
            city: "locality",
            region: "administrativeArea",
            country: "countryCode",
            postalCode: "postalCode"
        },
        U = function() {
            function t(e) {
                ! function(e) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), e && "object" === q(e) || (e = {}), this.data = {}, this.error = e.error, this.shippingContactErrors = e.shippingContactErrors, this.total = e.total, this.lineItems = e.lineItems, this.shippingOptions = e.shippingOptions
            }
            return function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }(t.prototype, [{
                key: "toApplePayShippingContactUpdate",
                value: function(t) {
                    return {
                        errors: this._toApplePayErrors(),
                        newShippingMethods: this._toApplePayShippingMethods(t.shippingMethods),
                        newTotal: this._toApplePayTotal(t.total),
                        newLineItems: this._toApplePayLineItems(t.lineItems)
                    }
                }
            }, {
                key: "toCompleteShippingContactSelectionInputs",
                value: function(t) {
                    return {
                        status: this._toApplePayStatusCode(),
                        newShippingMethods: this._toApplePayShippingMethods(t.shippingMethods),
                        newTotal: this._toApplePayTotal(t.total),
                        newLineItems: this._toApplePayLineItems(t.lineItems)
                    }
                }
            }, {
                key: "toApplePayShippingMethodUpdate",
                value: function(t) {
                    return {
                        newTotal: this._toApplePayTotal(t.total),
                        newLineItems: this._toApplePayLineItems(t.lineItems)
                    }
                }
            }, {
                key: "toCompleteShippingMethodSelectionInputs",
                value: function(t) {
                    return {
                        status: ApplePaySession.STATUS_SUCCESS,
                        newTotal: this._toApplePayTotal(t.total),
                        newLineItems: this._toApplePayLineItems(t.lineItems)
                    }
                }
            }, {
                key: "_toApplePayErrors",
                value: function() {
                    var t = [];
                    for (var e in this.data.error && t.push(new ApplePayError("addressUnserviceable", "postalAddress", this.data.error)), this.data.shippingContactErrors)
                        if (i.a.hasOwn(this.data.shippingContactErrors, e)) {
                            var n = G[e] || "postalAddress";
                            t.push(new ApplePayError("shippingContactInvalid", n, this.data.shippingContactErrors[e]))
                        } return t
                }
            }, {
                key: "_toApplePayStatusCode",
                value: function() {
                    return this.data.error || this.data.shippingContactErrors ? ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS : ApplePaySession.STATUS_SUCCESS
                }
            }, {
                key: "_toApplePayShippingMethods",
                value: function(t) {
                    return this.data.shippingOptions ? this.data.shippingOptions.map(function(t) {
                        return t.toApplePay()
                    }) : t
                }
            }, {
                key: "_toApplePayTotal",
                value: function(t) {
                    return this.data.total ? this.data.total.toApplePayLineItem() : t || (window.console.error("Field `total` in PaymentDetailsUpdate is required."), null)
                }
            }, {
                key: "_toApplePayLineItems",
                value: function(t) {
                    return this.data.lineItems ? this.data.lineItems.map(function(t) {
                        return t.toApplePayLineItem()
                    }) : t
                }
            }, {
                key: "toGooglePayErrors",
                value: function(t) {
                    var e = [];
                    for (var n in this.data.error && e.push({
                            reason: "SHIPPING_ADDRESS_UNSERVICEABLE",
                            message: this.data.error,
                            intent: t
                        }), this.data.shippingContactErrors) i.a.hasOwn(this.data.shippingContactErrors, n) && e.push({
                        reason: "SHIPPING_ADDRESS_INVALID",
                        message: n + ": " + this.data.shippingContactErrors[n],
                        intent: t
                    });
                    return e
                }
            }, {
                key: "validate",
                value: function() {
                    var t = [];
                    return this.data.total && !this.data.total.isValid() && t.push("total"), this.data.lineItems && this.data.lineItems.some(function(e) {
                        if (!e.isValid()) return t.push("lineItems")
                    }), t
                }
            }, {
                key: "error",
                get: function() {
                    return this.data.error
                },
                set: function(t) {
                    t && i.a.isValidDataType("error", V, t, String) && (this.data.error = t)
                }
            }, {
                key: "shippingContactErrors",
                get: function() {
                    return this.data.shippingContactErrors
                },
                set: function(t) {
                    t && i.a.isValidDataType("shippingContactErrors", V, t, Object) && (this.data.shippingContactErrors = t)
                }
            }, {
                key: "total",
                get: function() {
                    return this.data.total
                },
                set: function(t) {
                    t && i.a.isValidDataType("total", V, t, Object) && (this.data.total = new M(t))
                }
            }, {
                key: "lineItems",
                get: function() {
                    return this.data.lineItems
                },
                set: function(t) {
                    t && i.a.isValidDataType("lineItems", V, t, Array) && (this.data.lineItems = t.map(function(t) {
                        return new M(t)
                    }))
                }
            }, {
                key: "shippingOptions",
                get: function() {
                    return this.data.shippingOptions
                },
                set: function(t) {
                    t && i.a.isValidDataType("shippingOptions", V, t, Array) && (this.data.shippingOptions = t.map(function(t) {
                        return new x(t)
                    }))
                }
            }]), t
        }(),
        j = n(32),
        B = (n(135), n(107), n(14));

    function W(t) {
        return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function H(t) {
        return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function z(t, e) {
        return (z = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Y = "TEST",
        K = function() {
            function t(e) {
                var n;
                return function(e) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), (n = function(t, e) {
                    return !e || "object" !== W(e) && "function" != typeof e ? function() {
                        if (void 0 !== t) return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }() : e
                }(this, H(t).call(this, e))).name = "GooglePayError", n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && z(t, e)
            }(t, o.p), t
        }();

    function Q(t) {
        this.controller = t, this.options = t.options, this.callbacks = t.callbacks, this.features = this.options.features || {}, this.token = null, this.jsLoaded = null, this.enableMethodCalled = !1, this.paymentRequest = null, this.selectedShippingOptionId = null, this.isConfigValid() ? (this.element = document.getElementById(this.options.googlePay.elementId), this.fetchGooglePayJs(), this.controller.messageHandlers.add(u.a.events.RECEIVE_GOOGLE_PAY_CARD_NONCE, this.receiveGooglePayCardNonce.bind(this)), this.controller.messageHandlers.add(u.a.events.RECEIVE_GOOGLE_PAY_TOKEN, this.receiveGooglePayToken.bind(this)), this.controller.sendEvent(u.a.events.LOAD_WALLET, u.a.paymentMethods.GOOGLE_PAY)) : this.controller.enableMethod(u.a.paymentMethods.GOOGLE_PAY, !1, o.j.INVALID_CONFIG)
    }
    Q.prototype.isConfigValid = function() {
        if (!this.options.googlePay || "function" != typeof this.callbacks.createPaymentRequest || "function" != typeof this.callbacks.cardNonceResponseReceived) return !1;
        if (!document.getElementById(this.options.googlePay.elementId)) throw new o.a(this.options.googlePay.elementId);
        if (!this.getGatewayMerchantId()) throw new o.l("locationId");
        return !0
    }, Q.prototype.getGatewayMerchantId = function() {
        return this.options.locationId || this.options.accountId
    }, Q.prototype.fetchGooglePayJs = function() {
        if (document.querySelector('script[src="'.concat(u.a.GOOGLE_PAY_JS, '"]'))) this.googlePayJsFetched();
        else {
            var t = document.createElement("script");
            t.onload = this.googlePayJsFetched.bind(this), t.src = u.a.GOOGLE_PAY_JS, document.body.appendChild(t)
        }
    }, Q.prototype.googlePayJsFetched = function() {
        var t = this;
        if ("undefined" == typeof google) return this.jsLoaded = !1, void this.tryEnablingGooglePay();
        this.paymentsClient = new google.payments.api.PaymentsClient(this.buildClientConfig());
        var e = this.tryEnablingGooglePay.bind(this);
        this.paymentsClient.isReadyToPay(this.buildBaseConfiguration()).then(function(n) {
            if (n.result) return t.jsLoaded = !0, void e();
            t.enableGooglePay(!1, o.j.GOOGLE_PAY_BROWSER_NOT_SUPPORTED)
        }).catch(function(e) {
            t.controller.errorLogger.capture(e), t.enableGooglePay(!1, o.j.UNKNOWN)
        })
    }, Q.prototype.buildClientConfig = function() {
        if (this.features.googlePayForceAuthorizedPayments) return this._buildForceAuthorizedPaymentsConfig();
        var t = {
            environment: Y
        };
        return this.hasShippingChangedCallback() && (t.paymentDataCallbacks = {
            onPaymentDataChanged: this.onPaymentDataChanged.bind(this),
            onPaymentAuthorized: function() {
                return {
                    transactionState: "SUCCESS"
                }
            }
        }), t
    }, Q.prototype._buildForceAuthorizedPaymentsConfig = function() {
        var t = {
            environment: Y,
            paymentDataCallbacks: {
                onPaymentAuthorized: function() {
                    return {
                        transactionState: "SUCCESS"
                    }
                }
            }
        };
        return this.hasShippingChangedCallback() && (t.paymentDataCallbacks.onPaymentDataChanged = this.onPaymentDataChanged.bind(this)), t
    }, Q.prototype.hasShippingChangedCallback = function() {
        return "function" == typeof this.callbacks.shippingContactChanged || "function" == typeof this.callbacks.shippingOptionChanged
    }, Q.prototype.tryEnablingGooglePay = function() {
        !0 !== this.enableMethodCalled && (!1 === this.jsLoaded ? this.enableGooglePay(!1, o.j.RESOURCE_NOT_LOADED) : !0 === this.jsLoaded && null !== this.token && this.element && (this._handleRequestPayment = this.requestPayment.bind(this), this.element.addEventListener("click", this._handleRequestPayment), this.enableGooglePay(!0)))
    }, Q.prototype.enableGooglePay = function(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        this.controller.enableMethod(u.a.paymentMethods.GOOGLE_PAY, t, e), this.enableMethodCalled = !0
    }, Q.prototype.destroy = function() {
        this.element && this.element.removeEventListener("click", this._handleRequestPayment)
    }, Q.prototype.requestPayment = function() {
        var t = this;
        "function" == typeof this.controller.interaction && this.controller.interaction({
            method: u.a.paymentMethods.GOOGLE_PAY,
            type: "click"
        }), this.paymentRequest = new $(this.callbacks.createPaymentRequest()), this.trackSqPaymentRequestMisconfiguration();
        var e = this.paymentRequest.validate();
        this.trackSqPaymentRequestValidationErrors(e);
        var n = this.paymentRequest.toGooglePay(this.buildBaseConfiguration(), this.buildCallbackIntents()),
            i = this.requestGooglePayCardNonce.bind(this);
        this.paymentsClient.loadPaymentData(n).then(function(e) {
            e.apiVersion === n.apiVersion && e.apiVersionMinor === n.apiVersionMinor && (e.shippingOptionData && (t.selectedShippingOptionId = e.shippingOptionData.id), i(e))
        }).catch(function(e) {
            "CANCELED" !== e.statusCode && (window.console.error(e), t.controller.errorLogger.capture(e))
        })
    }, Q.prototype.receiveGooglePayToken = function(t) {
        var e = t.payload;
        e.errors || (this.token = e.token, this.tryEnablingGooglePay())
    }, Q.prototype.requestGooglePayCardNonce = function(t) {
        this.controller.sendEvent(u.a.events.REQUEST_GOOGLE_PAY_CARD_NONCE, {
            googlepay_data: t
        })
    }, Q.prototype.receiveGooglePayCardNonce = function(t) {
        var e = t.payload;
        if (e.errors) this.callbacks.cardNonceResponseReceived(e.errors);
        else {
            var n, i = j.a.fromGooglePay(e.billing_contact),
                r = j.a.fromGooglePay(e.shipping_contact);
            this.selectedShippingOptionId && (n = this.getShippingOption(this.selectedShippingOptionId)), this.callbacks.cardNonceResponseReceived(null, e.card_nonce, e.card, i, r, n)
        }
    }, Q.prototype.onPaymentDataChanged = function(t) {
        switch (t.callbackTrigger) {
            case "INITIALIZE":
                return this._onPaymentDataChanged_Initialize(t);
            case "SHIPPING_ADDRESS":
                return this._onPaymentDataChanged_ShippingAddress(t);
            case "SHIPPING_OPTION":
                return this._onPaymentDataChanged_ShippingOption(t)
        }
        return this._onPaymentDataChanged__invalid_trigger(t.callbackTrigger)
    }, Q.prototype._onPaymentDataChanged_Initialize = function(t) {
        var e = this;
        return this.paymentRequest.shippingOptions && (this.selectedShippingOptionId = this.paymentRequest.shippingOptions[0].id), this.callShippingContactChanged(t).then(function(n) {
            return e.callShippingOptionChanged(t).then(function(t) {
                var i = n.concat(t);
                return e._onPaymentDataChanged__complete(i)
            })
        })
    }, Q.prototype._onPaymentDataChanged_ShippingAddress = function(t) {
        var e = this,
            n = this.selectedShippingOptionId;
        return this.paymentRequest.shippingOptions && (this.selectedShippingOptionId = this.paymentRequest.shippingOptions[0].id), this.callShippingContactChanged(t).then(function(i) {
            return n === e.selectedShippingOptionId ? e._onPaymentDataChanged__complete(i) : e.callShippingOptionChanged(t).then(function(t) {
                var n = i.concat(t);
                return e._onPaymentDataChanged__complete(n)
            })
        })
    }, Q.prototype._onPaymentDataChanged_ShippingOption = function(t) {
        var e = this;
        return this.selectedShippingOptionId = t.shippingOptionData.id, this.callShippingOptionChanged(t).then(function(t) {
            return e._onPaymentDataChanged__complete(t)
        })
    }, Q.prototype._onPaymentDataChanged__complete = function(t) {
        var e = this.paymentRequest.toGooglePayUpdate(this.selectedShippingOptionId);
        return t && 0 < t.length && (e.error = t[0]), e
    }, Q.prototype._onPaymentDataChanged__invalid_trigger = function(t) {
        var e = new o.r("Unknown callbackTrigger: '".concat(t, "'"));
        return this.controller.errorLogger.capture(e), Promise.resolve({})
    }, Q.prototype.callShippingContactChanged = function(t) {
        var e = this;
        return t.shippingAddress ? "function" != typeof this.callbacks.shippingContactChanged ? Promise.resolve([]) : new Promise(function(n) {
            try {
                e.callbacks.shippingContactChanged(j.a.fromGooglePay(t.shippingAddress), function(t) {
                    var i = new U(t),
                        r = i.validate();
                    e.trackPaymentDetailsUpdateValidationErrors(r), e.updatePaymentRequest(i), n(i.toGooglePayErrors("SHIPPING_ADDRESS"))
                })
            } catch (t) {
                throw window.console.error("callbacks.shippingContactChanged error", t), t
            }
        }) : Promise.resolve([])
    }, Q.prototype.callShippingOptionChanged = function() {
        var t = this;
        if ("function" != typeof this.callbacks.shippingOptionChanged) return Promise.resolve([]);
        if (!this.selectedShippingOptionId) return Promise.resolve([]);
        var e = this.getShippingOption(this.selectedShippingOptionId);
        return e ? new Promise(function(n) {
            try {
                t.callbacks.shippingOptionChanged(e, function(e) {
                    var i = new U(e),
                        r = i.validate();
                    t.trackPaymentDetailsUpdateValidationErrors(r), t.updatePaymentRequest(i), n(i.toGooglePayErrors("SHIPPING_OPTION"))
                })
            } catch (t) {
                throw window.console.error("callbacks.shippingOptionChanged error", t), t
            }
        }) : Promise.resolve([])
    }, Q.prototype.updatePaymentRequest = function(t) {
        t.lineItems && (this.paymentRequest.lineItems = t.lineItems.map(function(t) {
            return new M(t)
        })), t.total && (this.paymentRequest.total = new M(t.total)), t.shippingOptions && (this.paymentRequest.shippingOptions = t.shippingOptions.map(function(t) {
            return new x(t)
        }))
    }, Q.prototype.getShippingOption = function(t) {
        if (this.paymentRequest) return Array.isArray(this.paymentRequest.shippingOptions) && 0 !== this.paymentRequest.shippingOptions.length ? this.paymentRequest.shippingOptions.find(function(e) {
            return e.id === t
        }) : null;
        var e = new o.r("paymentRequest not persisted, possibly due to createPaymentRequest not being called");
        throw this.controller.errorLogger.capture(e), e
    }, Q.prototype.trackSqPaymentRequestValidationErrors = function(t) {
        var e = this;
        0 !== t.length && (t.forEach(function(t) {
            var n = {
                g: {
                    a: "SQ_PAYMENT_REQUEST_VALIDATION:ERROR",
                    e: t
                }
            };
            e.controller.eventstream.track(B.a.GENERAL_EVENT, n)
        }), i.a.logInvalidFieldsError("PaymentRequest", t))
    }, Q.prototype.trackSqPaymentRequestMisconfiguration = function() {
        this.paymentRequest.lineItems && this.paymentRequest.lineItems.length || !this.hasShippingChangedCallback() || (window.console.error("lineItems should not be null nor empty in PaymentRequest returned by createPaymentRequest when callbacks shippingContactChanged or shippingOptionChanged are configured for SqPaymentForm\nSee: https://developer.squareup.com/docs/api/paymentform#paymentform-paymentrequestobjects"), this.controller.errorLogger.capture(new Error("SqLineItems missing when shipping*Changed callbacks defined for Google Pay")))
    }, Q.prototype.trackPaymentDetailsUpdateValidationErrors = function(t) {
        var e = this;
        0 !== t.length && (t.forEach(function(t) {
            var n = {
                g: {
                    a: "PAYMENT_DETAILS_UPDATE_VALIDATION:ERROR",
                    e: t
                }
            };
            e.controller.eventstream.track(B.a.GENERAL_EVENT, n)
        }), i.a.logInvalidFieldsError("PaymentDetailsUpdate", t))
    }, Q.prototype.buildBaseConfiguration = function() {
        return {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [{
                type: "CARD",
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["AMEX", "DISCOVER", "MASTERCARD", "VISA"],
                    billingAddressRequired: !0
                },
                tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                        gateway: "square",
                        gatewayMerchantId: this.getGatewayMerchantId()
                    }
                }
            }],
            merchantInfo: {
                merchantId: "05498866192997955200",
                authJwt: this.token
            }
        }
    }, Q.prototype.buildCallbackIntents = function() {
        var t = [];
        return "function" == typeof this.callbacks.shippingOptionChanged ? (t.push("SHIPPING_ADDRESS"), t.push("SHIPPING_OPTION")) : "function" == typeof this.callbacks.shippingContactChanged && t.push("SHIPPING_ADDRESS"), this.features.googlePayForceAuthorizedPayments ? t.push("PAYMENT_AUTHORIZATION") : 0 < t.length && t.push("PAYMENT_AUTHORIZATION"), t
    };
    var J = Q;

    function X(t) {
        return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var Z = "SqPaymentRequest",
        $ = function() {
            function t(e) {
                ! function(e) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this), e && "object" === X(e) || (e = {}), this.data = {}, "boolean" == typeof e.requestEmailAddress && (this.data.requestEmailAddress = e.requestEmailAddress), this.currencyCode = e.currencyCode, this.countryCode = e.countryCode, this.total = e.total, this.shippingContact = e.shippingContact, this.shippingOptions = e.shippingOptions, this.lineItems = e.lineItems, this.requestShippingAddress = e.requestShippingAddress, this.requestBillingInfo = e.requestBillingInfo
            }
            return function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }(t.prototype, [{
                key: "toApplePay",
                value: function() {
                    var t = {
                        currencyCode: this.data.currencyCode,
                        countryCode: this.data.countryCode,
                        supportedNetworks: ["visa", "masterCard", "discover", "amex"],
                        merchantCapabilities: ["supports3DS"],
                        requiredBillingContactFields: ["postalAddress"]
                    };
                    return this.data.total && (t.total = this.data.total.toApplePayLineItem()), this.data.shippingContact instanceof j.a && (t.shippingContact = this.data.shippingContact.toApplePay()), this.data.shippingOptions ? t.shippingMethods = this.data.shippingOptions.map(function(t) {
                        return t.toApplePay()
                    }) : t.shippingMethods = [], this.data.lineItems ? t.lineItems = this.data.lineItems.map(function(t) {
                        return t.toApplePayLineItem()
                    }) : t.lineItems = [], this.data.requestBillingInfo && (t.requiredShippingContactFields = ["email", "name", "phone"]), this.data.requestShippingAddress && (t.requiredShippingContactFields = ["postalAddress", "name", "email", "phone"]), t
                }
            }, {
                key: "toGooglePay",
                value: function(t, e) {
                    var n = this;
                    if (!Array.isArray(e)) {
                        var r = i.a.typeOf(e);
                        throw new TypeError("Expected 'callbackIntents' to be Array but got ".concat(r))
                    }
                    var o = Object.assign({}, t, {
                        transactionInfo: {
                            totalPriceLabel: this.data.total.label,
                            totalPriceStatus: this.data.total.pending ? "ESTIMATED" : "FINAL",
                            totalPrice: this.data.total.amount,
                            currencyCode: this.data.currencyCode || "USD"
                        }
                    });
                    if (Array.isArray(this.data.lineItems) && 0 < this.data.lineItems.length && (o.transactionInfo.displayItems = this.data.lineItems.map(function(t) {
                            return t.toGooglePayLineItem()
                        })), o.shippingOptionRequired = !!this.data.shippingOptions || e.includes("SHIPPING_OPTION"), o.shippingOptionRequired) {
                        if (!this.data.shippingOptions || 0 === this.data.shippingOptions.length) {
                            var a = ["paymentRequest.shippingOptions is required when the SqPaymentForm shippingOptionsChanged() callback is defined.", "Provide paymentRequest.shippingOptions or remove the SqPaymentForm shippingOptionsChanged() callback to continue."].join("\n");
                            throw new K(a)
                        }
                        o.shippingOptionParameters = {
                            shippingOptions: this.data.shippingOptions.map(function(t) {
                                return t.toGooglePay(n.data.currencyCode)
                            })
                        }
                    }
                    return o.emailRequired = !!this.data.requestShippingAddress || !!this.data.requestEmailAddress, o.shippingAddressRequired = !!this.data.requestShippingAddress || !!this.data.shippingOptions || !!o.shippingOptionRequired || e.includes("SHIPPING_ADDRESS"), o.shippingAddressParameters = {
                        phoneNumberRequired: !!this.data.requestShippingAddress
                    }, o.allowedPaymentMethods[0].parameters.billingAddressParameters = {
                        format: this.data.requestBillingInfo ? "FULL" : "MIN",
                        phoneNumberRequired: !!this.data.requestBillingInfo
                    }, 0 < e.length && (o.callbackIntents = e), o
                }
            }, {
                key: "toGooglePayUpdate",
                value: function(t) {
                    var e = this,
                        n = {
                            currencyCode: this.data.currencyCode
                        },
                        i = {
                            newTransactionInfo: n
                        };
                    if (Array.isArray(this.data.lineItems) && 0 < this.data.lineItems.length && (n.displayItems = this.data.lineItems.map(function(t) {
                            return t.toGooglePayLineItem()
                        })), this.data.total) {
                        var r = this.data.total.toGooglePayLineItem();
                        n.totalPriceLabel = r.label, n.totalPrice = r.price, n.totalPriceStatus = r.status
                    }
                    if (this.data.shippingOptions) {
                        var o = {
                            shippingOptions: this.data.shippingOptions.map(function(t) {
                                return t.toGooglePay(e.data.currencyCode)
                            })
                        };
                        t && this.data.shippingOptions && this.data.shippingOptions.find(function(e) {
                            return e.id === t
                        }) && (o.defaultSelectedOptionId = t), i.newShippingOptionParameters = o
                    }
                    return i
                }
            }, {
                key: "validate",
                value: function() {
                    var t = [];
                    return "object" === X(this.data.total) && this.data.total.isValid() || t.push("total"), this.data.lineItems && this.data.lineItems.some(function(e) {
                        if (!e.isValid()) return t.push("lineItems")
                    }), t
                }
            }, {
                key: "toBeacon",
                value: function() {
                    var t = {
                        o: this.data.countryCode,
                        u: this.data.currencyCode,
                        t: this.data.total.toBeacon()
                    };
                    return this.data.lineItems && (t.l = this.data.lineItems.map(function(t) {
                        return t.toBeacon()
                    })), t
                }
            }, {
                key: "currencyCode",
                get: function() {
                    return this.data.currencyCode
                },
                set: function(t) {
                    t && i.a.isValidDataType("currencyCode", Z, t, String) && (this.data.currencyCode = t)
                }
            }, {
                key: "countryCode",
                get: function() {
                    return this.data.countryCode
                },
                set: function(t) {
                    t && i.a.isValidDataType("countryCode", Z, t, String) && (this.data.countryCode = t)
                }
            }, {
                key: "total",
                get: function() {
                    return this.data.total
                },
                set: function(t) {
                    t && i.a.isValidDataType("total", Z, t, Object) && (this.data.total = new M(t))
                }
            }, {
                key: "shippingContact",
                get: function() {
                    return this.data.shippingContact
                },
                set: function(t) {
                    t && i.a.isValidDataType("shippingContact", Z, t, Object) && (this.data.shippingContact = new j.a(t))
                }
            }, {
                key: "shippingOptions",
                get: function() {
                    return this.data.shippingOptions
                },
                set: function(t) {
                    t && i.a.isValidDataType("shippingOptions", Z, t, Array) && (this.data.shippingOptions = t.map(function(t) {
                        return new x(t)
                    }))
                }
            }, {
                key: "lineItems",
                get: function() {
                    return this.data.lineItems
                },
                set: function(t) {
                    t && i.a.isValidDataType("lineItems", Z, t, Array) && (this.data.lineItems = t.map(function(t) {
                        return new M(t)
                    }))
                }
            }, {
                key: "requestShippingAddress",
                get: function() {
                    return this.data.requestShippingAddress
                },
                set: function(t) {
                    null != t && i.a.isValidDataType("requestShippingAddress", Z, t, Boolean) && (this.data.requestShippingAddress = t)
                }
            }, {
                key: "requestBillingInfo",
                get: function() {
                    return this.data.requestBillingInfo
                },
                set: function(t) {
                    null != t && i.a.isValidDataType("requestBillingInfo", Z, t, Boolean) && (this.data.requestBillingInfo = t)
                }
            }]), t
        }();

    function tt(t) {
        var e = this;
        if (this.controller = t, this.options = t.options, this.callbacks = t.callbacks, "undefined" != typeof ApplePaySession)
            if (this.isConfigValid())
                if (ApplePaySession.canMakePayments()) {
                    var n = this.options.applePay.elementId;
                    this.element = document.getElementById(n), this._handleRequestPayment = this.requestPayment.bind(this), this.applePayVersion = this.getSupportedApplePayVersion(), this.selectedShippingOption = null, this.validityPromise = ApplePaySession.canMakePaymentsWithActiveCard(this.getApplePayMerchantId()).then(function(t) {
                        t ? (e.element.addEventListener("click", e._handleRequestPayment), e.controller.messageHandlers.add(u.a.events.RECEIVE_APPLE_PAY_VALID_MERCHANT, e.receiveApplePayValidMerchant.bind(e)), e.controller.messageHandlers.add(u.a.events.RECEIVE_APPLE_PAY_CARD_NONCE, e.receiveApplePayCardNonce.bind(e)), e.controller.sendEvent(u.a.events.LOAD_WALLET, u.a.paymentMethods.APPLE_PAY), e.controller.enableMethod(u.a.paymentMethods.APPLE_PAY, !0)) : e.controller.enableMethod(u.a.paymentMethods.APPLE_PAY, !1, o.j.APPLE_PAY_NOT_REGISTERED)
                    }).catch(function() {
                        e.controller.enableMethod(u.a.paymentMethods.APPLE_PAY, !1, o.j.UNKNOWN)
                    })
                } else this.controller.enableMethod(u.a.paymentMethods.APPLE_PAY, !1, o.j.APPLE_PAY_DEVICE_NOT_SUPPORTED);
        else this.controller.enableMethod(u.a.paymentMethods.APPLE_PAY, !1, o.j.INVALID_CONFIG);
        else this.controller.enableMethod(u.a.paymentMethods.APPLE_PAY, !1, o.j.APPLE_PAY_BROWSER_NOT_SUPPORTED)
    }
    tt.prototype.isConfigValid = function() {
        if (!this.options.applePay || "function" != typeof this.callbacks.createPaymentRequest || "function" != typeof this.callbacks.cardNonceResponseReceived) return !1;
        var t = this.options.applePay.elementId;
        if (!document.getElementById(t)) throw new o.a(t);
        if (!this.options.locationId && !this.options.accountId) throw new o.l("locationId");
        var e = new o.s;
        if ("function" == typeof this.callbacks.validateShippingContact) {
            if ("function" == typeof this.callbacks.shippingContactChanged) throw e;
            window.console.error(e.message)
        }
        return !0
    }, tt.prototype.destroy = function() {
        this.element && this.element.removeEventListener("click", this._handleRequestPayment)
    }, tt.prototype.requestPayment = function() {
        if (!this.session) {
            "function" == typeof this.controller.interaction && this.controller.interaction({
                method: u.a.paymentMethods.APPLE_PAY,
                type: "click"
            });
            var t = new $(this.callbacks.createPaymentRequest());
            this.applePayPaymentRequest = t.toApplePay(), t.shippingOptions && (this.selectedShippingOption = t.shippingOptions[0]), this.session = new ApplePaySession(this.applePayVersion, this.applePayPaymentRequest);
            var e = this;
            this.session.onvalidatemerchant = function(t) {
                e.requestApplePayMerchantValidity(t.validationURL, e.applePayPaymentRequest)
            }, "function" == typeof this.callbacks.shippingContactChanged ? this.session.onshippingcontactselected = function(t) {
                e._shippingContactChanged(t.shippingContact, e.applePayPaymentRequest)
            } : "function" == typeof this.callbacks.validateShippingContact && (this.session.onshippingcontactselected = function(t) {
                e._validateShippingContact(t.shippingContact, e.applePayPaymentRequest)
            }), this.session.onshippingmethodselected = function(t) {
                e.selectedShippingOption = x.fromApplePay(t.shippingMethod), e._shippingOptionChanged(e.selectedShippingOption, e.applePayPaymentRequest)
            }, this.session.onpaymentauthorized = function(t) {
                e.requestApplePayCardNonce(t.payment)
            }, this.session.oncancel = function() {
                delete e.session
            }, this.session.begin()
        }
    }, tt.prototype._shippingContactChanged = function(t, e) {
        var n = this,
            i = n.applePayVersion < 3 ? function(t) {
                var i = new U(t);
                n.selectedShippingOption = n.getDefaultShippingOption(i);
                var r = i.toCompleteShippingContactSelectionInputs(e);
                n.updateApplePayPaymentRequest(r), n.session.completeShippingContactSelection(r.status, r.newShippingMethods, r.newTotal, r.newLineItems)
            } : function(t) {
                var i = new U(t);
                n.selectedShippingOption = n.getDefaultShippingOption(i);
                var r = i.toApplePayShippingContactUpdate(e);
                n.updateApplePayPaymentRequest(r), n.session.completeShippingContactSelection(r)
            };
        this.callbacks.shippingContactChanged(j.a.fromApplePay(t), i)
    }, tt.prototype._validateShippingContact = function(t, e) {
        var n = "function" == typeof this.callbacks.validateShippingContact && this.callbacks.validateShippingContact(j.a.legacyFromApplePay(t));
        if (this.applePayVersion < 3) {
            var i = n ? ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS : ApplePaySession.STATUS_SUCCESS;
            this.session.completeShippingContactSelection(i, [], e.total, [])
        } else {
            var r = n ? [new ApplePayError("shippingContactInvalid", "postalAddress", "Incorrect address")] : [];
            this.session.completeShippingContactSelection({
                errors: r,
                newTotal: e.total
            })
        }
    }, tt.prototype._shippingOptionChanged = function(t, e) {
        var n = this,
            i = n.applePayVersion < 3 ? function(t) {
                var i = new U(t).toCompleteShippingMethodSelectionInputs(e);
                n.updateApplePayPaymentRequest(i), n.session.completeShippingMethodSelection(i.status, i.newTotal, i.newLineItems)
            } : function(t) {
                var i = new U(t).toApplePayShippingMethodUpdate(e);
                n.updateApplePayPaymentRequest(i), n.session.completeShippingMethodSelection(i)
            };
        "function" == typeof this.callbacks.shippingOptionChanged ? this.callbacks.shippingOptionChanged(t, i) : i()
    }, tt.prototype.requestApplePayMerchantValidity = function(t, e) {
        var n = e && e.total ? e.total.label : null;
        if (this.options.accountId && !n) throw new o.m;
        this.controller.sendEvent(u.a.events.REQUEST_APPLE_PAY_MERCHANT_VALIDITY, {
            client_id: this.options.applicationId,
            location_id: this.options.locationId,
            account_id: this.options.accountId,
            merchant_name: n,
            validation_url: t,
            source_url: window.location.href
        })
    }, tt.prototype.receiveApplePayValidMerchant = function(t) {
        var e = {
            detail: "Unable to start Apple Pay session."
        };
        if (void 0 !== this.session) {
            if (t.payload.sessionError) return t.payload.error && this.controller.errorLogger.capture(Object(o.u)(t.payload.error)), this.callbacks.cardNonceResponseReceived([t.payload.sessionError || e]), void this.session.abort();
            var n;
            if (t.payload.session) try {
                n = JSON.parse(t.payload.session)
            } catch (t) {
                this.controller.errorLogger.capture(t)
            }
            n ? this.session.completeMerchantValidation(n) : (this.callbacks.cardNonceResponseReceived([e]), this.session.abort())
        }
    }, tt.prototype.requestApplePayCardNonce = function(t) {
        this.controller.sendEvent(u.a.events.REQUEST_APPLE_PAY_CARD_NONCE, {
            client_id: this.options.applicationId,
            applepay_data: t
        })
    }, tt.prototype.receiveApplePayCardNonce = function(t) {
        var e = t.payload.nonceResponse;
        if (e.errors) return this.session.completePayment(this.session.STATUS_FAILURE), this.callbacks.cardNonceResponseReceived(e.errors), delete this.session, !1;
        this.session.completePayment(this.session.STATUS_SUCCESS);
        var n = j.a.legacyFromApplePay(e.card.contact),
            i = j.a.legacyFromApplePay(e.shipping_contact);
        delete e.card.contact, this.callbacks.cardNonceResponseReceived(null, e.card_nonce, e.card, n, i, this.selectedShippingOption), delete this.session
    }, tt.prototype.getApplePayMerchantId = function() {
        return this.options.appleMerchantIdentifier
    }, tt.prototype.getSupportedApplePayVersion = function() {
        for (var t = 3; 0 < t && !ApplePaySession.supportsVersion(t);) t--;
        return t
    }, tt.prototype.getDefaultShippingOption = function(t) {
        return t.error || t.shippingContactErrors || !t.shippingOptions ? null : t.shippingOptions[0]
    }, tt.prototype.updateApplePayPaymentRequest = function(t) {
        t.newTotal && (this.applePayPaymentRequest.total = t.newTotal), t.newLineItems && (this.applePayPaymentRequest.lineItems = t.newLineItems), t.newShippingMethods && (this.applePayPaymentRequest.shippingMethods = t.newShippingMethods)
    };
    var et = tt,
        nt = ["master,amex,diners,discover,visa"];

    function it(t) {
        if (this.controller = t, this.options = t.options, this.callbacks = t.callbacks, this.options.masterpass && "function" == typeof this.callbacks.createPaymentRequest && "function" == typeof this.callbacks.cardNonceResponseReceived) {
            var e = this.options.masterpass.elementId;
            if (this.element = document.getElementById(e), !this.element) throw new o.a(e);
            this.checkoutId = "", this.cartId = "", this.masterpassWindow = null, this.controller.messageHandlers.add(u.a.events.RECEIVE_MASTERPASS_TRANSACTION, this.receiveTransaction.bind(this)), this.controller.messageHandlers.add(u.a.events.SET_MASTERPASS_CHECKOUT_ID, this.setCheckoutId.bind(this)), this.controller.sendEvent(u.a.events.LOAD_WALLET, u.a.paymentMethods.MASTERPASS)
        } else this.controller.enableMethod(u.a.paymentMethods.MASTERPASS, !1, o.j.INVALID_CONFIG)
    }
    it.prototype.setCheckoutId = function(t) {
        this.checkoutId = t.checkoutId, this._handleRequestPayment = this._requestPayment.bind(this), this.element.addEventListener("click", this._handleRequestPayment), this.controller.enableMethod(u.a.paymentMethods.MASTERPASS, !0)
    }, it.prototype.getImageUrl = function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "https://src.mastercard.com/assets/img/btn/src_chk_btn_126x030px.svg";
        return this._buildSRCUrl(t, {
            paymentmethod: nt.join(",")
        })
    }, it.prototype._requestPayment = function() {
        if (!this.masterpassWindow || this.masterpassWindow.closed) {
            "function" == typeof this.controller.interaction && this.controller.interaction({
                method: u.a.paymentMethods.MASTERPASS,
                type: "click"
            });
            var t = this.callbacks.createPaymentRequest();
            this.cartId = i.a.guid();
            var e = i.a.versionedUrl("https://pci-connect.squareupsandbox.com/v2/masterpass/frame", {
                    cartId: this.cartId,
                    "formId": this.options.formId,
                    amount: t.total.amount,
                    currencyCode: t.currencyCode,
                    checkoutId: this.checkoutId,
                    suppressShippingAddress: !t.requestShippingAddress
                }),
                n = window.screen.width / 2 - 510,
                r = window.screen.height / 2 - 450;
            this.masterpassWindow = window.open(e, "Masterpass", "width=1000,height=800,left=" + n + ",top=" + r + ",screenX=" + n + ",screenY=" + r + ",toolbar=no,menubar=no,scrollbars=no,location=yes,directories=no")
        } else this.masterpassWindow.focus()
    }, it.prototype._buildSRCUrl = function(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
                locale: "en_us",
                checkoutid: this.checkoutId
            };
        return i.a.url(t, Object.assign({}, e, n))
    }, it.prototype.receiveTransaction = function(t) {
        this.masterpassWindow && (this.masterpassWindow.close(), this.masterpassWindow = null);
        var e = t.payload;
        if ("success" !== e.status) return !1;
        this.controller.sendEvent(u.a.events.REQUEST_MASTERPASS_CARD_NONCE, {
            client_id: this.options.applicationId,
            masterpass_data: {
                transaction_id: e.transactionId,
                cart_id: this.cartId
            }
        })
    }, it.prototype.destroy = function() {
        this.element && this.element.removeEventListener("click", this._handleRequestPayment)
    };
    var rt, ot, at = it;

    function st(t) {
        return (st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function lt(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var ct = "https://pci-connect.squareupsandbox.com",
        ut = u.a.paymentMethods.KEYED_CARD,
        pt = u.a.paymentMethods.GIFT_CARD,
        dt = u.a.paymentMethods.SINGLE_CARD,
        ht = u.a.paymentMethods.APPLE_PAY,
        ft = u.a.paymentMethods.GOOGLE_PAY,
        yt = u.a.paymentMethods.MASTERPASS;

    function mt(t) {
        this.options = t, this.applicationId = t.applicationId, this.locationId = t.locationId, this.accountId = t.accountId, this.callbacks = t.callbacks, this.apiWrapper = t.apiWrapper, this.websiteUrl = t.websiteUrl, this.errorLogger = t.errorLogger, this.eventstream = this.options.eventstream, this.telemetry = new _.a(this.eventstream), this._initialize(t), this._requestAnalyticsToken()
    }
    mt.DIGITAL_WALLETS = (lt(rt = {}, ht, et), lt(rt, ft, J), lt(rt, yt, at), rt), mt.prototype._initialize = function(t) {
        this.formId = "sq-" + i.a.guid(), this.messageBuffer = [], this.messageHandlers = new f.a, this._paymentMethods = {}, this.expectedPaymentMethods = t.expectedPaymentMethods, this.inputs = t.inputs, this.autoFill = "boolean" != typeof t.autoFill || t.autoFill, this.loadedWallets = {}
    }, mt.prototype.paymentMethod = function(t) {
        if (this._paymentMethods[t]) return this._paymentMethods[t]
    }, mt.prototype.build = function() {
        var t = this;
        void 0 === this._buildAt && (this._buildAt = Date.now(), this.mainIframe = this.createMainIframe(function() {
            return t.mainIframeLoaded()
        }))
    }, mt.prototype.masterpassImageUrl = function(t) {
        if (this.loadedWallets.masterpass) return this.loadedWallets.masterpass.getImageUrl(t)
    }, mt.prototype.createMainIframe = function(t) {
        var e = {
            accountId: this.accountId,
            applicationId: this.applicationId,
            locationId: this.locationId,
            formId: this.formId,
            targetOriginURL: ct,
            onload: t
        };
        return new v(e)
    }, mt.prototype._requestAnalyticsToken = function() {
        var t = this;
        if (!this._analyticsTokenInterval) {
            var e = function() {
                h.calculate({
                    applicationId: t.applicationId,
                    locationId: t.locationId,
                    accountId: t.accountId,
                    websiteUrl: t.websiteUrl,
                    done: t._analyticsTokenReceived.bind(t)
                })
            };
            e(), this._analyticsTokenInterval = window.setInterval(e, 72e5)
        }
    }, mt.prototype._analyticsTokenReceived = function(t) {
        this.sendIframeMessage({
            eventName: u.a.events.SET_ANALYTICS_TOKEN,
            token: t,
            options: {
                hostOrigin: vt()
            }
        })
    };
    var gt = (lt(ot = {}, dt, k), lt(ot, pt, E), lt(ot, ut, E), ot);

    function vt() {
        var t = window.location;
        if (t.origin) return t.origin;
        if (t.protocol && t.host) return t.protocol + "//" + t.host;
        throw new o.i("Error accessing the current origin.")
    }
    mt.prototype.initializePaymentMethod = function(t) {
        var e = this.controllerShim(t),
            n = new gt[t](e);
        n.build(), this._paymentMethods[t] = n
    }, mt.prototype.mainIframeLoaded = function() {
        this.expectedPaymentMethods.includes(dt) ? this.initializePaymentMethod(dt) : this.expectedPaymentMethods.includes(ut) ? this.initializePaymentMethod(ut) : this.expectedPaymentMethods.includes(pt) ? this.initializePaymentMethod(pt) : this.loadFormController()
    }, mt.prototype.controllerShim = function(t) {
        switch (t) {
            case pt:
            case ut:
            case dt:
                return this.cardControllerShim();
            case ht:
            case ft:
            case yt:
                return this.walletControllerShim(t)
        }
    }, mt.prototype.cardControllerShim = function(t) {
        var e = this,
            n = {
                applicationId: this.applicationId,
                locationId: this.locationId,
                accountId: this.accountId,
                inputs: this.inputs,
                inputClass: this.options.inputClass
            };
        return t === dt ? n.inputStyle = this.options.inputStyle : n.inputStyles = this.options.inputStyles, {
            options: n,
            callbacks: {
                inputEventReceived: this.callbacks.inputEventReceived
            },
            errorLogger: this.errorLogger,
            messageHandlers: this.messageHandlers,
            onload: this.loadFormController.bind(this),
            sendEvent: function(t, n) {
                return e.sendIframeMessage({
                    eventName: t,
                    payload: n
                })
            }
        }
    }, mt.prototype.walletControllerShim = function(t) {
        var e = this,
            n = lt({
                applicationId: this.applicationId,
                locationId: this.locationId,
                accountId: this.accountId
            }, t, this.options[t]);
        t === yt && (n.formId = this.formId), t === ht && (n.appleMerchantIdentifier = this.options.appleMerchantIdentifier), t === ft && (n.features = {
            googlePayForceAuthorizedPayments: !!this.features.googlePayForceAuthorizedPayments
        });
        var i = {
            cardNonceResponseReceived: this.callbacks.cardNonceResponseReceived,
            createPaymentRequest: this.callbacks.createPaymentRequest
        };
        return t !== ht && t !== ft || (i.shippingContactChanged = this.callbacks.shippingContactChanged, i.shippingOptionChanged = this.callbacks.shippingOptionChanged, i.validateShippingContact = this.callbacks.validateShippingContact), {
            options: n,
            callbacks: i,
            errorLogger: this.errorLogger,
            eventstream: this.eventstream,
            enableMethod: this.enableMethod.bind(this),
            messageHandlers: this.messageHandlers,
            sendEvent: function(t, n) {
                return e.sendIframeMessage({
                    eventName: t,
                    payload: n
                })
            },
            interaction: this._trackFirstInteraction.bind(this)
        }
    }, mt.prototype._trackFirstInteraction = function(t) {
        if (!this._firstInteraction) {
            this._firstInteraction = !0;
            var e = t.method,
                n = t.target,
                i = t.type;
            this.eventstream.track(B.a.GENERAL_EVENT, {
                g: {
                    a: "FIRST_INTERACTION",
                    e: e,
                    d: n ? "".concat(i, "=").concat(n) : i
                }
            })
        }
    }, mt.prototype.enableMethod = function(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
            i = {};
        (i[t] = e) || delete this.loadedWallets[t], this.callbacks && "function" == typeof this.callbacks.methodsSupported && this.callbacks.methodsSupported(i, n);
        var r = n ? n.type : "";
        this._collectMethodsSupportedData({
            type: t,
            isSupported: e,
            reason: r
        })
    }, mt.prototype._collectMethodsSupportedData = function(t) {
        var e = {
            p: {
                t: t.type,
                s: t.isSupported,
                r: t.reason
            }
        };
        this.eventstream.track(B.a.METHODS_SUPPORTED_EVENT, e)
    }, mt.prototype.buildStylesForScreenWidth = function() {
        var t = this.paymentMethod(ut);
        t && t._buildStylesForScreenWidth()
    }, mt.prototype.destroy = function() {
        for (var t in window.clearInterval(this._analyticsTokenInterval), this.removePostMessageEventListeners(), this.mainIframe && (this.mainIframe.destroy(), delete this.mainIframe), this._paymentMethods) i.a.hasOwn(this._paymentMethods, t) && (this._paymentMethods[t].destroy(), delete this._paymentMethods[t]);
        for (var e in this.loadedWallets) i.a.hasOwn(this.loadedWallets, e) && (this.loadedWallets[e].destroy(), delete this.loadedWallets[e])
    }, mt.prototype.receiveMessageCallback = function(t) {
        var e = this;
        if (t.origin === ct && t.data.formId === this.formId) {
            switch (t.data.eventName) {
                case u.a.events.FIRST_INTERACTION:
                    return void this._trackFirstInteraction({
                        method: t.data.method,
                        target: t.data.field,
                        type: t.data.interactionType
                    });
                case u.a.events.CARD_NONCE_RESPONSE_RECEIVED:
                    if (!t.data.value.errors && !t.data.value.card_nonce) return this.errorLogger.capture(Error("errors and card_nonce are both null")), void this._cardNonceResponseReceived({
                        type: "UNKNOWN",
                        message: "An unknown error has occurred"
                    }, null, null);
                    this._cardNonceResponseReceived(t.data.value.errors, t.data.value.card_nonce, t.data.value.card, t.data.value.billing_contact, t.data.value.shipping_contact);
                    break;
                case u.a.events.PAYMENT_FORM_LOADED:
                    this._loadedAt = Date.now(), this.sessionId = t.data.sessionId, this.eventstream.sessionId = this.sessionId, this.options.appleMerchantIdentifier = t.data.appleMerchantIdentifier, this.features = t.data.features || {}, this.expectedPaymentMethods.includes(pt) || setTimeout(function() {
                        e._initializeDigitalWallets(t.data.walletsSupportDetail)
                    }, 0);
                    var n = this._loadedAt - this._buildAt;
                    this.telemetry.collectLoadTiming({
                        tti: n
                    });
                    var i = Object.assign({}, this.options);
                    for (delete i.errorLogger, delete i.eventstream, delete i.expectedPaymentMethods, delete i.inputs, this.telemetry.collectConfiguration(i), this.options.callbacks && "function" == typeof this.options.callbacks.paymentFormLoaded && this.options.callbacks.paymentFormLoaded(); 0 < this.messageBuffer.length;) this.sendIframeMessage(this.messageBuffer.pop())
            }
            this.messageHandlers.handle(t.data.eventName, t.data)
        }
    }, mt.prototype._initializeDigitalWallets = function(t) {
        for (var e = 0, n = Object.keys(mt.DIGITAL_WALLETS); e < n.length; e++) {
            var i = n[e];
            if (this.options[i]) {
                var r = t[i];
                if (r && r.isSupported) this._initializeDigitalWallet(i);
                else {
                    var a = r ? r.unsupportedReasonType : "",
                        s = o.k[a] || o.j.INTERNAL_ERROR;
                    this.enableMethod(i, !1, s)
                }
            } else this.enableMethod(i, !1, o.j.WALLET_NOT_REQUESTED)
        }
    }, mt.prototype._initializeDigitalWallet = function(t) {
        var e = mt.DIGITAL_WALLETS[t],
            n = this.controllerShim(t);
        this.loadedWallets[t] = new e(n)
    }, mt.prototype.addPostMessageEventListeners = function() {
        this._messageCallback = this.receiveMessageCallback.bind(this), window.addEventListener("message", this._messageCallback)
    }, mt.prototype.removePostMessageEventListeners = function() {
        window.removeEventListener("message", this._messageCallback)
    }, mt.prototype.sendIframeMessage = function(t) {
        if (t.formId = this.formId, this.mainIframe && this.mainIframe.ready) return this.mainIframe.window ? void this.mainIframe.send(t) : void window.console.warn(new o.c("main"));
        this.messageBuffer.push(t)
    }, mt.prototype.loadFormController = function() {
        var t = {
                version: "d2252de9ba",
                hostOrigin: vt(),
                applicationId: this.applicationId,
                locationId: this.locationId,
                accountId: this.accountId,
                apiWrapper: this.apiWrapper,
                websiteUrl: this.websiteUrl,
                expectedPaymentMethods: this.expectedPaymentMethods,
                googlePayTokenUrl: document.location.href
            },
            e = this.paymentMethod(pt),
            n = this.paymentMethod(ut),
            i = this.paymentMethod(dt);
        i ? t[dt] = {
            autoFill: this.options[dt].autoFill,
            iframeName: i.iframeName,
            inputStyle: this.options[dt].inputStyle,
            initialScreenWidth: window.innerWidth,
            cardNumber: this.options[dt].cardNumber,
            cvv: this.options[dt].cvv,
            expirationDate: this.options[dt].expirationDate,
            postalCode: this.options[dt].postalCode
        } : (e || n) && (t.keyedCard = {
            autoFill: this.autoFill,
            iframeNames: (e || n).iframeNames,
            inputStyles: this.options.inputStyles,
            initialScreenWidth: window.innerWidth,
            inputs: this.inputs
        });
        var r = {
            eventName: u.a.events.LOAD_FORM_CONTROLLER,
            options: t
        };
        this.addPostMessageEventListeners(), this.sendIframeMessage(r)
    }, mt.prototype.requestCardNonceIfValidForm = function() {
        if (this._pending) {
            var t = new o.o;
            return this.errorLogger.capture(t), void window.console.error(t)
        }
        this._pending = !0, this.sendIframeMessage({
            eventName: u.a.events.REQUEST_CARD_NONCE_IF_VALID_FORM
        })
    }, mt.prototype._cardNonceResponseReceived = function() {
        if (this._pending = !1, this.callbacks && "function" == typeof this.callbacks.cardNonceResponseReceived) {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            this.callbacks.cardNonceResponseReceived.apply(null, e)
        }
    }, mt.prototype.setPostalCode = function(t) {
        var e = st(t);
        if ("string" === e || "number" === e) {
            var n = this.paymentMethod(u.a.paymentMethods.KEYED_CARD),
                i = this.paymentMethod(u.a.paymentMethods.SINGLE_CARD);
            (n || i || {})._trackPostalCodeInteraction = !1, this.sendIframeMessage({
                eventName: u.a.events.SET_POSTAL_CODE,
                postalCode: "" + t
            })
        }
    }, mt.prototype.hasLoaded = function() {
        return !!this._loadedAt
    };
    var _t = mt;

    function Et(t) {
        return (Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function St(t) {
        this.options = t;
        try {
            this._initialize()
        } catch (t) {
            throw this.eventstream && this.eventstream.track(B.a.GENERAL_EVENT, At(t)), this.errorLogger && this.errorLogger.capture(t), t
        }
    }

    function bt(t, e) {
        var n = new o.t.FormNotReadyError(e);
        return t.errorLogger && "function" == typeof t.errorLogger.capture && t.errorLogger.capture(n), n
    }

    function It(t) {
        return t.clientController && t.clientController.hasLoaded()
    }
    St.prototype._initialize = function() {
        if (this.eventstream = new B.b({
                applicationId: this.options && this.options.applicationId,
                locationId: this.options && this.options.locationId,
                accountId: this.options && this.options.accountId,
                apiWrapper: this.options && this.options.apiWrapper
            }), this.eventstream.track(B.a.GENERAL_EVENT, Ot()), this.errorLogger = new l({
                applicationId: this.options && this.options.applicationId,
                apiWrapper: this.options && this.options.apiWrapper,
                captureUncaughtExceptions: !1,
                source: "SqPaymentForm"
            }), !i.a.embeddingAllowed(window.location)) throw new o.t.HttpsRequiredError;
        var t = this.validateOptions(this.options);
        if (t) throw t;
        var e = Object.assign({}, this.options, {
            errorLogger: this.errorLogger,
            eventstream: this.eventstream,
            expectedPaymentMethods: this._detectPaymentMethods(this.options)
        });
        this.clientController = new _t(e), !1 !== this.options.autoBuild && this._attachLoadListener(), this.eventstream.track(B.a.GENERAL_EVENT, wt())
    }, St.isSupportedBrowser = c.a.supported.bind(null), St.prototype._attachLoadListener = function() {
        this._handleDomContentLoaded = this.build.bind(this), c.a.ie10() ? window.addEventListener("load", this._handleDomContentLoaded) : "loading" === document.readyState && document.addEventListener("DOMContentLoaded", this._handleDomContentLoaded)
    }, St.prototype.build = function() {
        if (this.detachLoadEvent(), this.build = function() {
                var t = new o.t.FormAlreadyBuiltError;
                throw this.errorLogger.capture(t), t
            }, !St.isSupportedBrowser()) return this.errorLogger.capture(new o.t.UnsupportedBrowserError), void(this.options.callbacks && "function" == typeof this.options.callbacks.unsupportedBrowserDetected && this.options.callbacks.unsupportedBrowserDetected());
        try {
            this.clientController.build()
        } catch (t) {
            throw this.errorLogger.capture(t), t
        }
        this.eventstream.track(B.a.GENERAL_EVENT, Tt(this.options.autoBuild))
    }, St.prototype.destroy = function() {
        var t = this;
        this.detachLoadEvent(), this.clientController && (this.clientController.destroy(), this.clientController = null), this.errorLogger.destroy(), this.errorLogger = null, ["build", "destroy", "focus", "recalculateSize", "requestCardNonce", "setPostalCode"].forEach(function(e) {
            t[e] = function() {
                throw new o.t.FormAlreadyDestroyedError(e)
            }
        })
    }, St.prototype.requestCardNonce = function() {
        if (Pt(this, "requestCardNonce"), 0 === this.clientController.expectedPaymentMethods.length) {
            var t = new o.t.MissingPaymentMethodError;
            throw this.errorLogger.capture(t), t
        }
        this.clientController.requestCardNonceIfValidForm()
    }, St.prototype.recalculateSize = function() {
        Ct(this, "recalculateSize") && this.clientController.buildStylesForScreenWidth()
    }, St.prototype.setPostalCode = function(t) {
        Ct(this, "setPostalCode") && this.clientController.setPostalCode(t)
    }, St.prototype.masterpassImageUrl = function(t) {
        return Pt(this, "masterpassImageUrl"), this.clientController.masterpassImageUrl(t)
    }, St.prototype.focus = function(t) {
        Pt(this, "focus");
        var e = this.clientController.paymentMethod(u.a.paymentMethods.KEYED_CARD);
        e && e.focus(t)
    }, St.prototype.verifyBuyer = function(t, e, n) {
        var i = this;
        if (this._trackVerificationRequested(), !this.options.locationId && !this.options.accountId) throw this._trackVerificationError("No location id given"), new TypeError("`locationId` is required");
        if (!t || "string" != typeof t) throw this._trackVerificationError("No valid source given"), new TypeError("`source` is required and must be a string");
        if (!e.billingContact || "object" !== Et(e.billingContact)) throw this._trackVerificationError("billingContact not given"), new TypeError("`verificationDetails.billingContact` is required and must be an object");
        var r = {
            applicationId: this.options.applicationId,
            locationId: this.options.locationId,
            accountId: this.options.accountId
        };
        h.verifyBuyer(r, t, e, function(t, e) {
            t && i._trackVerificationError(t.message), e ? i._trackVerificationSuccess() : i._trackVerificationError("No token generated"), n(t, e)
        })
    }, St.prototype._trackVerificationEvent = function(t, e) {
        var n = {
            g: {
                a: t,
                d: e
            }
        };
        this.eventstream.track(B.a.GENERAL_EVENT, n)
    }, St.prototype._trackVerificationError = function(t) {
        this._trackVerificationEvent("VERIFICATION:ERROR", t)
    }, St.prototype._trackVerificationSuccess = function() {
        this._trackVerificationEvent("VERIFICATION:SUCCESS")
    }, St.prototype._trackVerificationRequested = function() {
        this._trackVerificationEvent("VERIFICATION:REQUESTED")
    }, St.prototype.detachLoadEvent = function() {
        this._handleDomContentLoaded && (window.removeEventListener("load", this._handleDomContentLoaded), document.removeEventListener("DOMContentLoaded", this._handleDomContentLoaded), this._handleDomContentLoaded = null)
    }, St.prototype.validateOptions = function(t) {
        return this._validateCoreOptions(t) || this._validatePaymentMethodOptions(t)
    }, St.prototype._validateCoreOptions = function(t) {
        if (!t) return new o.t.MissingArgumentError("options");
        if ("[object Object]" !== Object.prototype.toString.call(t)) return new o.t.InvalidArgumentError("options", "object");
        if (!t.applicationId) return new o.t.MissingOptionError("applicationId");
        if (!this._isValidApplicationIDFormat(t.applicationId)) return new o.t.InvalidApplicationIdError;
        if (void 0 !== t.autoBuild && "boolean" != typeof t.autoBuild) return new o.t.InvalidOptionType("autoBuild");
        if (t.locationId && t.accountId) throw new o.t.TooManyIdsError;
        this._validateApplicationIDEnv(t.applicationId)
    }, St.prototype._validateApplicationIDEnv = function(t) {
        var e = i.a.isProduction(),
            n = t.startsWith("sq0idp-"),
            r = t.startsWith("sandbox-sq0idp-"),
            o = t.startsWith("sandbox-sq0idb-");

        function a(t, e, n, i) {
            window.console.warn("Warning: SqPaymentForm was initialized using a ".concat(t, " in ").concat(e, ". ").concat(n, "\nSee: ").concat(i))
        }
        r && e ? a("legacy Sandbox Application ID", "the production environment", "The v2 Sandbox improves the app testing experience.", "https://developer.squareup.com/docs/testing/sandbox/") : o && !i.a.isSandbox() ? a("Sandbox Application ID", "a non-sandbox environment", "Use https://js.squareupsandbox.com/v2/paymentform for this application ID.", "https://developer.squareup.com/docs/payment-form/payment-form-walkthrough#111-add-script-references") : n && !e && a("production Application ID", "a non-production environment", "Use https://js.squareup.com/v2/paymentform for this application ID.", "https://developer.squareup.com/docs/payment-form/payment-form-walkthrough#deploy-the-application-to-production")
    }, St.prototype._isValidApplicationIDFormat = function(t) {
        if (t.length < 22 || 37 < t.length) return !1;
        var e = new RegExp(/^[a-z0-9\-._]+$/i).test(t),
            n = new RegExp(/sq0at/i).test(t);
        return e && !n
    }, St.prototype._validatePaymentMethodOptions = function(t) {
        var e = this,
            n = this._detectPaymentMethods(t),
            r = [u.a.paymentMethods.GIFT_CARD, u.a.paymentMethods.SINGLE_CARD],
            a = n.includes(u.a.paymentMethods.KEYED_CARD),
            s = n.includes(u.a.paymentMethods.SINGLE_CARD),
            l = n.includes(u.a.paymentMethods.GIFT_CARD),
            c = null;
        if (r.forEach(function(i) {
                if (n.includes(i) && 1 < n.length) {
                    var r = a ? e._detectKeyedCardInputs(t)[0] : n.splice(n.indexOf(r), 1)[0];
                    c = new o.t.UnexpectedInputTypeError(r)
                }
            }), c) return c;
        if (t.inputs = {}, s) t.inputs.card = t.card;
        else if (l) t.inputs.giftCard = t.giftCard;
        else if (a) {
            var p = Object.assign({}, u.a.inputTypes);
            for (var d in delete p.GIFT_CARD, delete p.SINGLE_CARD, p)
                if (i.a.hasOwn(p, d)) {
                    var h = p[d],
                        f = this.validateInputType(h, t);
                    if (f) return f;
                    t.inputs[h] = t[h]
                }! 1 === t[u.a.inputTypes.POSTAL_CODE] && delete t.inputs[u.a.inputTypes.POSTAL_CODE]
        }
        if (l || a) {
            if (!t.inputClass) return new o.t.MissingOptionError("inputClass");
            if (-1 !== t.inputClass.indexOf(" ")) return new o.t.InvalidOptionError("inputClass")
        }
        if (t.inputStyles && !Array.isArray(t.inputStyles)) return new o.t.InvalidInputStylesError;
        if (void 0 !== t.autoFill && "boolean" != typeof t.autoFill) return new o.t.InvalidOptionType("autoFill");
        if (0 < n.length) {
            if (!t.callbacks) return new o.t.MissingOptionError("callbacks");
            if (!t.callbacks.cardNonceResponseReceived) return new o.t.MissingCallbackError("cardNonceResponseReceived");
            if ("function" != typeof t.callbacks.cardNonceResponseReceived) return new o.t.InvalidCallbackError("cardNonceResponseReceived")
        }
        if (0 === n.length && window.console.info("SqPaymentForm initialized without a payment method. See: ".concat("https://developer.squareup.com/docs/api/paymentform#paymentform-configurationfields")), n.includes(u.a.paymentMethods.APPLE_PAY) || n.includes(u.a.paymentMethods.GOOGLE_PAY) || n.includes(u.a.paymentMethods.MASTERPASS)) {
            if (!t.callbacks.createPaymentRequest) return new o.t.MissingCallbackError("createPaymentRequest");
            if ("function" != typeof t.callbacks.createPaymentRequest) return new o.t.InvalidCallbackError("createPaymentRequest");
            if (!t.callbacks.methodsSupported) return new o.t.MissingCallbackError("methodsSupported");
            if ("function" != typeof t.callbacks.methodsSupported) return new o.t.InvalidCallbackError("methodsSupported")
        }
    }, St.prototype.validateInputType = function(t, e) {
        if (t !== u.a.inputTypes.POSTAL_CODE || !1 !== e[t]) return e[t] ? e[t].elementId ? void 0 : new o.t.MissingElementIdError(t) : new o.t.MissingInputTypeError(t)
    }, St.prototype._detectKeyedCardInputs = function(t) {
        var e = u.a.inputTypes,
            n = [];
        return t[e.CARD_NUMBER] && n.push(e.CARD_NUMBER), t[e.CVV] && n.push(e.CVV), t[e.EXPIRATION_DATE] && n.push(e.EXPIRATION_DATE), t[e.POSTAL_CODE] && n.push(e.POSTAL_CODE), n
    }, St.prototype._detectPaymentMethods = function(t) {
        var e = u.a.paymentMethods,
            n = u.a.inputTypes,
            i = this._detectKeyedCardInputs(t),
            r = [];
        return t[n.SINGLE_CARD] && r.push(e.SINGLE_CARD), i.length && r.push(e.KEYED_CARD), t[n.GIFT_CARD] && r.push(e.GIFT_CARD), t[e.APPLE_PAY] && r.push(e.APPLE_PAY), t[e.GOOGLE_PAY] && r.push(e.GOOGLE_PAY), t[e.MASTERPASS] && r.push(e.MASTERPASS), r
    };
    var Ct = function(t, e) {
            if (It(t)) return !0;
            var n = bt(t, e);
            return window.console.error(n), !1
        },
        Pt = function(t, e) {
            if (!It(t)) throw bt(t, e)
        },
        At = function(t) {
            return {
                g: {
                    a: "PAYMENTFORM_INIT:ERROR",
                    d: "[".concat(t.name, "] ").concat(t.message)
                }
            }
        },
        wt = function() {
            return {
                g: {
                    a: "PAYMENTFORM_INIT:OK"
                }
            }
        },
        Ot = function() {
            return {
                g: {
                    a: "PAYMENTFORM_INIT:START"
                }
            }
        },
        Tt = function(t) {
            return !1 !== t && (t = !0), {
                g: {
                    a: "PAYMENTFORM_BUILD:OK",
                    e: "autoBuild=".concat(t)
                }
            }
        },
        Rt = St;
    window.SqPaymentForm = Rt
}]);