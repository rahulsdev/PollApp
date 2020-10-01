// var applicationId = "sq0idp-1yzgmSyuQGK99N_eb9k-ww"; // production
// var applicationId = "sandbox-sq0idb-1rnj0h8_HFy9LLZVQpkFsQ"; // sandbox
//var applicationId = "sandbox-sq0idb-ExO_vcXnH9dTBpmSlg5bZA"; // Oron sandbox
var applicationId = "sandbox-sq0idb-m0qUj9KaOKSHOjuUCEh8jw";

// Set the location ID
// var locationId = "FDQZXG1B1WND0"; //production
// var locationId = "F4QKCWX4F8T9S"; // sandbox
//var locationId = "BEEBXA7VZVKCC"; // Oron sandbox
var locationId = "LKTJRKQKK0M96";

function buildForm(form) {
    if (SqPaymentForm.isSupportedBrowser()) {
        form.build();
        form.recalculateSize();
    }
}

function buildForm1() {
    if (SqPaymentForm.isSupportedBrowser()) {
        var paymentDiv = document.getElementById("form-container");
        if (paymentDiv.style.display === "none") {
            paymentDiv.style.display = "block";
        }
        try {
            paymentForm.destroy();
        } catch (e) {

        }
        paymentform.build();
        paymentform.recalculateSize();
    } else {
        // Show a "Browser is not supported" message to your buyer
        alert("Browser not supported")
    }
}

/*
 * function: requestCardNonce
 *
 * requestCardNonce is triggered when the "Pay with credit card" button is
 * clicked
 *
 * Modifying this function is not required, but can be customized if you
 * wish to take additional action when the form button is clicked.
 */
function requestCardNonce(event) {
    console.log("--  ", event, paymentForm)

    // Don't submit the form until SqPaymentForm returns with a nonce
    event.preventDefault();
    // Request a nonce from the SqPaymentForm object
    paymentForm.requestCardNonce();

}
paymentForm = definePaymentForm();
// Create and initialize a payment form object
function definePaymentForm(){
    var paymentForm = new SqPaymentForm({

    // Initialize the payment form elements
    applicationId: applicationId,
    // locationId: locationId,
    inputClass: 'sq-input',
    autoBuild: false,
    // Customize the CSS for SqPaymentForm iframe elements


    // Initialize Apple Pay placeholder ID
    applePay: false,

    // Initialize Masterpass placeholder ID
    masterpass: false,

    // Initialize the credit card placeholders
    cardNumber: {
        elementId: 'sq-card-number',
        placeholder: 'XXXX XXXX XXXX XXXX'
    },
    cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
    },
    expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
    },
    postalCode: {
        elementId: 'sq-postal-code',
        placeholder: '12345'
    },

    inputStyles: [{
        fontSize: '13.5px',
        padding: '10px',
        color: '#333',
        backgroundColor: 'transparent',
        placeholderColor: '#CCC',
        _webkitFontSmoothing: 'antialiased',
        _mozOsxFontSmoothing: 'grayscale'
    }],
    // SqPaymentForm callback functions
    callbacks: {
        /*
         * callback function: createPaymentRequest
         * Triggered when: a digital wallet payment button is clicked.
         * Replace the JSON object declaration with a function that creates
         * a JSON object with Digital Wallet payment details
         */
        createPaymentRequest: function () {

            return {
                requestShippingAddress: false,
                requestBillingInfo: true,
                currencyCode: "USD",
                countryCode: "US",
                total: {
                    label: "MERCHANT NAME",
                    amount: "100",
                    pending: false
                },
                lineItems: [
                    {
                        label: "Subtotal",
                        amount: "100",
                        pending: false
                    }
                ]
            }
        },

        /*
         * callback function: cardNonceResponseReceived
         * Triggered when: SqPaymentForm completes a card nonce request
         */
        cardNonceResponseReceived: function (errors, nonce, cardData) {
            err_flag = 0
            err_type = "";
            err_field = "";
            if (errors) {
                // Log errors from nonce generation to the Javascript console
                console.log("Encountered errors:");
                errors.forEach(function (error) {
                    err_flag = 1;
                    var myJSON = JSON.stringify(error);
                    console.log(' NNNNNNNNNN ' + myJSON);
                    err_type = error.type;
                    err_field = error.field;
                    console.log(' er= ' + error.message);
                });
                field_name = ""
                if (err_field == "expirationDate"){
                    field_name = " - Card Expiry"
                }else if(err_field == "cardNumber"){
                    field_name = " - Card Number"
                }else if(err_field == "Cvv" || err_field == "cvv" || err_field == "CVV"){
                    field_name = " - Card Security Code"
                }
                if (err_type == "VALIDATION_ERROR") {
                    $(".square-card-error-message").show()
                    $(".square-card-error-message").find(".sq-err-msg").html(err_type+field_name)
                }else{
                    $(".square-card-error-message").hide()
                }
                return;
            }else{
                $(".square-card-error-message").hide()
            }
            // Assign the nonce value to the hidden form field
            document.getElementById('card-nonce').value = nonce;
            customer_id = $(".go-to-payment").attr("data-attr");
            console.log("><><><><    ", $('#card-nonce').val())
            if ($('.go-to-payment').attr("data-card") != "add-card") {

                $.ajax({
                    url: '/ajax-process/',
                    type: "GET",
                    data: {
                        "type": "get_card_details",
                        "customer_id": customer_id,
                        'nonce': $('#card-nonce').val()
                    },
                    success: function (result) {
                        var card_number = "XXXX XXXX XXXX " + result.card_number
                        $(".card_number").attr("placeholder", card_number)
                        $(".card_holder").attr("placeholder", result.customer_name)
                        $(".payment-confirm-modal").find(".customer_id").val(customer_id)
                        $(".payment-confirm-modal").modal("show")
                    }
                })
            } else {
                $.ajax({
                    url: '/ajax-process/',
                    type: "GET",
                    data: {
                        "type": "save_card_nonce",
                        "customer_id": customer_id,
                        'nonce': $('#card-nonce').val()
                    },
                    success: function (result) {
                        if (result.status) {
                            $(".square-card-error-message").hide()
                            $(".square-card-success-message").show()
                        }
                    }
                })
            }


            // POST the nonce form to the payment processing page
//      document.getElementById('nonce-form').submit();

        },

        /*
         * callback function: unsupportedBrowserDetected
         * Triggered when: the page loads and an unsupported browser is detected
         */
        unsupportedBrowserDetected: function () {
            /* PROVIDE FEEDBACK TO SITE VISITORS */
        },

        /*
         * callback function: inputEventReceived
         * Triggered when: visitors interact with SqPaymentForm iframe elements.
         */
        inputEventReceived: function (inputEvent) {
            switch (inputEvent.eventType) {
                case 'focusClassAdded':
                    /* HANDLE AS DESIRED */
                    break;
                case 'focusClassRemoved':
                    /* HANDLE AS DESIRED */
                    break;
                case 'errorClassAdded':
                    document.getElementById("error").innerHTML = "Please fix card information errors before continuing.";
                    break;
                case 'errorClassRemoved':
                    /* HANDLE AS DESIRED */
                    document.getElementById("error").style.display = "none";
                    break;
                case 'cardBrandChanged':
                    /* HANDLE AS DESIRED */
                    break;
                case 'postalCodeChanged':
                    /* HANDLE AS DESIRED */
                    break;
            }
        },

        /*
         * callback function: paymentFormLoaded
         * Triggered when: SqPaymentForm is fully loaded
         */
        paymentFormLoaded: function () {
            /* HANDLE AS DESIRED */
            console.log("The form loaded!");
            $(".add_credit_card").show()
            $("#square_payment_form").modal("show")
            $(".getPaymentForm").html("PAYMENT")
            $(".add_credit_card").css('opacity', '1')

        }
    }
});
    return paymentForm
}
