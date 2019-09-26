{"filter":false,"title":"stripe.js","tooltip":"/static/js/stripe.js","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":17,"column":59},"end":{"row":17,"column":59},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":23,"state":"start","mode":"ace/mode/javascript"}},"hash":"e1fd4f90f9336c4da1fcfd74f58ea3388fc3b6c4","undoManager":{"mark":7,"position":7,"stack":[[{"start":{"row":0,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["$(function() {","    $(\"#payment-form\").submit(function() {","        var form = this;","        var card = {","            number: $(\"#id_credit_card_number\").val(),","            expMonth: $(\"#id_expiry_month\").val(),","            expYear: $(\"#id_expiry_year\").val(),","            cvc: $(\"#id_cvv\").val()","        };","    ","    Stripe.createToken(card, function(status, response) {","        if (status === 200) {","            $(\"#credit-card-errors\").hide();","            $(\"#id_stripe_id\").val(response.id);","","            // Prevent the credit card details from being submitted","            // to our server","            $(\"#id_credit_card_number\").removeAttr('name');","            $(\"#id_cvv\").removeAttr('name');","            $(\"#id_expiry_month\").removeAttr('name');","            $(\"#id_expiry_year\").removeAttr('name');","","            form.submit();","        } else {","            $(\"#stripe-error-message\").text(response.error.message);","            $(\"#credit-card-errors\").show();","            $(\"#validate_card_btn\").attr(\"disabled\", false);","        }","    });","    return false;","    });","});"],"id":1}],[{"start":{"row":18,"column":12},"end":{"row":18,"column":44},"action":"remove","lines":["$(\"#id_cvv\").removeAttr('name');"],"id":2}],[{"start":{"row":18,"column":12},"end":{"row":19,"column":0},"action":"remove","lines":["",""],"id":3},{"start":{"row":18,"column":12},"end":{"row":18,"column":16},"action":"remove","lines":["    "]},{"start":{"row":18,"column":12},"end":{"row":18,"column":16},"action":"remove","lines":["    "]},{"start":{"row":18,"column":12},"end":{"row":18,"column":16},"action":"remove","lines":["    "]}],[{"start":{"row":19,"column":52},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":20,"column":0},"end":{"row":20,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":20,"column":12},"end":{"row":20,"column":44},"action":"insert","lines":["$(\"#id_cvv\").removeAttr('name');"],"id":5}],[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"remove","lines":["_"],"id":6},{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"remove","lines":["d"]},{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"remove","lines":["i"]}],[{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["i"],"id":7},{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["d"]}],[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["_"],"id":8}]]},"timestamp":1569425348755}