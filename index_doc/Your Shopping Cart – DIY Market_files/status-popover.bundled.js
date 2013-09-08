require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"yt5k6M":[function(require,module,exports){
var popoverHTML = '' +
'<div class="diy-status-popover">' +
'    <style type="text/css">' +
'        .diy-status-popover {' +
'          width: 176px;' +
'          padding: 20px 50px;' +
'          background: #ffffff;' +
'          border: 2px solid #fd4d44;' +
'          text-align: center;' +
'          border-radius: 5px;' +
'          position: relative;' +
'          font-family: ApexRounded, sans-serif;' +
'          z-index: 1031;' +
'        }' +
'        .diy-status-popover h1 {' +
'          margin: 0 0 18px 0;' +
'          padding: 0;' +
'          font-family: inherit;' +
'          font-size: 18px;' +
'          line-height: normal;' +
'          color: #fd4d44;' +
'        }' +
'        .diy-status-popover p {' +
'          margin: 0;' +
'          padding: 0;' +
'          font-family: Helvetica, sans-serif;' +
'          font-size: 14px;' +
'          line-height: normal;' +
'          color: #292929;' +
'        }' +
'        .diy-status-popover button.dismiss {' +
'          position: absolute;' +
'          top: 0;' +
'          right: 0;' +
'          margin: 0;' +
'          padding: 10px;' +
'          color: #dbdbdb;' +
'          font-size: 12px;' +
'          line-height: 12px;' +
'          font-family: Icons;' +
'          border: 0;' +
'          background: transparent;' +
'        }' +
'        .diy-status-popover button.dismiss:hover {' +
'          color: #292929;' +
'        }' +
'        .diy-status-popover.from-bottom:before {' +
'          content: "";' +
'          border-bottom: 6px solid #fd4d44;' +
'          border-left: 6px solid transparent;' +
'          border-right: 6px solid transparent;' +
'          position: absolute;' +
'          top: -8px;' +
'          left: 50%;' +
'          margin-left: -6px;' +
'        }' +
'        .diy-status-popover.from-top:before {' +
'          content: "";' +
'          border-top: 6px solid #fd4d44;' +
'          border-left: 6px solid transparent;' +
'          border-right: 6px solid transparent;' +
'          position: absolute;' +
'          bottom: -8px;' +
'          left: 50%;' +
'          margin-left: -6px;' +
'        }' +
'    </style>' +
'    <h1></h1>' +
'    <p></p>' +
'    <button class="dismiss">U</button>' +
'</div>' +
'';

var statusOptions = {
    'backorder': {
        'title': 'This is on backorder.',
        'message': 'We\'ll send it to you as soon as new stock arrives.'
    },
    'preorder': {
        'title': 'This is a preorder.',
        'message': 'We\'ll send it to you as soon as it\'s available.'
    },
    'comingsoon': {
        'title': 'Coming soon!',
        'message': 'We\'ll send it to you as soon as it\'s available.'
    }
};

module.exports = {
    init: function () {
        var me = this;

        me.dismissAll();

        // bind click event
        $('.js-status-popover').on('click', function ()  {
            me.display(this);
        });
    },

    dismissAll: function () {
        $('.diy-status-popover').find('.dismiss').click();
    },

    display: function (element) {
        var $element = $(element);
        if ($element.hasClass('btn-disabled')) return;
        if ($element.data('statusPopoverDisplayed')) return;

        $element.data('statusPopoverDisplayed', true);

        $('body').append(popoverHTML);
        var $newPopover = $('.diy-status-popover').last();

        var popoverData = statusOptions[$element.attr('data-status')];
        $newPopover.find('h1').text(popoverData.title);
        $newPopover.find('p').text(popoverData.message);

        if ($element.attr('data-popover-direction') === 'bottom') {
            $newPopover.addClass('from-bottom');
        } else {
            $newPopover.addClass('from-top');
        }

        var offset = this.offsetForElement($element, $newPopover);
        $newPopover.css('position', 'absolute');
        $newPopover.css('left', offset.left);
        $newPopover.css('top', offset.top);

        var $dismissButton = $newPopover.find('.dismiss');
        $dismissButton.on('click', function () {
            $newPopover.remove();
            $element.data('statusPopoverDisplayed', false);
        });
    },

    offsetForElement: function ($element, $popover) {
        var PADDING = 13;

        var elementOffset = $element.offset();
        var elementWidth = $element.outerWidth();
        var elementHeight = $element.outerHeight();

        var popoverWidth = $popover.outerWidth();
        var popoverHeight = $popover.outerHeight();

        var top;
        if ($popover.hasClass('from-bottom')) {
            top = elementOffset.top + elementHeight + PADDING;
        } else {
            top = elementOffset.top - (popoverHeight + PADDING);
        }
        var left = (elementOffset.left + (elementWidth / 2)) - (popoverWidth / 2);

        return {
            top: top,
            left: left
        };
    }
};

},{}],"./market-status-popover":[function(require,module,exports){
module.exports=require('yt5k6M');
},{}]},{},[])
;