$(function () {
    //
    // Backorder status popover component
    //

    var statusPopover = require('./market-status-popover');
    statusPopover.init();

    var $updateCart = $('#update-cart');
    var $checkoutButton = $('#checkout-button');
    var $quantityField = $('.cart-quantity input');

    // Hide update cart button by default
    $updateCart.css('display', 'none');

    var initialVals = {};

    $quantityField.each(function () {
        var $this = $(this);
        initialVals[$this.attr('id')] = $this.val();
    });

    $quantityField.on('keyup', function () {
        var $this = $(this);

        if (initialVals[$this.attr('id')] === $this.val()) {
            checkAll();
        } else {
            hideCheckout();
        }
    });

    var hideCheckout = function() {
        $checkoutButton.css('display', 'none');
        $updateCart.css('display', 'block');
    };

    var showCheckout = function() {
        $updateCart.css('display', 'none');
        $checkoutButton.css('display', 'block');
    };

    var checkAll = function() {
        var allEqual = true;

        $quantityField.each(function () {
            var $this = $(this);
            if ($this.val() !== initialVals[$this.attr('id')]) {
                allEqual = false;
            }
        });

        if (allEqual) showCheckout();
    };
});