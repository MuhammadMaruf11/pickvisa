(function ($) {
    'use strict';

    // jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/

var items = $(".blogger-details");
var numItems = items.length;
var perPage = 10;

items.slice(perPage).hide();

$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
    }
});



})(jQuery);
