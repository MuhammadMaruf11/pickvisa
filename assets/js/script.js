(function ($) {

    /*------------------------------------
  country names
--------------------------------------*/

    var countries = [
        { "text": "Afghanistan", "value": "AF" },
        { "text": "Åland Islands", "value": "AX" },
        { "text": "Albania", "value": "AL" },
        { "text": "Algeria", "value": "DZ" },
        { "text": "American Samoa", "value": "AS" },
        { "text": "Andorra", "value": "AD" },
        { "text": "Angola", "value": "AO" },
        { "text": "Anguilla", "value": "AI" },
        { "text": "Antarctica", "value": "AQ" },
        { "text": "Antigua and Barbuda", "value": "AG" },
        { "text": "Argentina", "value": "AR" },
        { "text": "Armenia", "value": "AM" },
        { "text": "Aruba", "value": "AW" },
        { "text": "Australia", "value": "AU" },
        { "text": "Austria", "value": "AT" },
        { "text": "Azerbaijan", "value": "AZ" },
        { "text": "Bahamas", "value": "BS" },
        { "text": "Bahrain", "value": "BH" },
        { "text": "Bangladesh", "value": "BD" },
        { "text": "Barbados", "value": "BB" },
        { "text": "Belarus", "value": "BY" },
        { "text": "Belgium", "value": "BE" },
        { "text": "Belize", "value": "BZ" },
        { "text": "Benin", "value": "BJ" },
        { "text": "Bermuda", "value": "BM" },
        { "text": "Bhutan", "value": "BT" },
        { "text": "Bolivia", "value": "BO" },
        { "text": "Bosnia and Herzegovina", "value": "BA" },
        { "text": "Botswana", "value": "BW" },
        { "text": "Bouvet Island", "value": "BV" },
        { "text": "Brazil", "value": "BR" },
        { "text": "British Indian Ocean Territory", "value": "IO" },
        { "text": "Brunei Darussalam", "value": "BN" },
        { "text": "Bulgaria", "value": "BG" },
        { "text": "Burkina Faso", "value": "BF" },
        { "text": "Burundi", "value": "BI" },
        { "text": "Cambodia", "value": "KH" },
        { "text": "Cameroon", "value": "CM" },
        { "text": "Canada", "value": "CA" },
        { "text": "Cape Verde", "value": "CV" },
        { "text": "Cayman Islands", "value": "KY" },
        { "text": "Central African Republic", "value": "CF" },
        { "text": "Chad", "value": "TD" },
        { "text": "Chile", "value": "CL" },
        { "text": "China", "value": "CN" },
        { "text": "Christmas Island", "value": "CX" },
        { "text": "Cocos (Keeling) Islands", "value": "CC" },
        { "text": "Colombia", "value": "CO" },
        { "text": "Comoros", "value": "KM" },
        { "text": "Congo", "value": "CG" },
        { "text": "Congo, The Democratic Republic of the", "value": "CD" },
        { "text": "Cook Islands", "value": "CK" },
        { "text": "Costa Rica", "value": "CR" },
        { "text": "Cote D'Ivoire", "value": "CI" },
        { "text": "Croatia", "value": "HR" },
        { "text": "Cuba", "value": "CU" },
        { "text": "Cyprus", "value": "CY" },
        { "text": "Czech Republic", "value": "CZ" },
        { "text": "Denmark", "value": "DK" },
        { "text": "Djibouti", "value": "DJ" },
        { "text": "Dominica", "value": "DM" },
        { "text": "Dominican Republic", "value": "DO" },
        { "text": "Ecuador", "value": "EC" },
        { "text": "Egypt", "value": "EG" },
        { "text": "El Salvador", "value": "SV" },
        { "text": "Equatorial Guinea", "value": "GQ" },
        { "text": "Eritrea", "value": "ER" },
        { "text": "Estonia", "value": "EE" },
        { "text": "Ethiopia", "value": "ET" },
        { "text": "Falkland Islands (Malvinas)", "value": "FK" },
        { "text": "Faroe Islands", "value": "FO" },
        { "text": "Fiji", "value": "FJ" },
        { "text": "Finland", "value": "FI" },
        { "text": "France", "value": "FR" },
        { "text": "French Guiana", "value": "GF" },
        { "text": "French Polynesia", "value": "PF" },
        { "text": "French Southern Territories", "value": "TF" },
        { "text": "Gabon", "value": "GA" },
        { "text": "Gambia", "value": "GM" },
        { "text": "Georgia", "value": "GE" },
        { "text": "Germany", "value": "DE" },
        { "text": "Ghana", "value": "GH" },
        { "text": "Gibraltar", "value": "GI" },
        { "text": "Greece", "value": "GR" },
        { "text": "Greenland", "value": "GL" },
        { "text": "Grenada", "value": "GD" },
        { "text": "Guadeloupe", "value": "GP" },
        { "text": "Guam", "value": "GU" },
        { "text": "Guatemala", "value": "GT" },
        { "text": "Guernsey", "value": "GG" },
        { "text": "Guinea", "value": "GN" },
        { "text": "Guinea-Bissau", "value": "GW" },
        { "text": "Guyana", "value": "GY" },
        { "text": "Haiti", "value": "HT" },
        { "text": "Heard Island and Mcdonald Islands", "value": "HM" },
        { "text": "Holy See (Vatican City State)", "value": "VA" },
        { "text": "Honduras", "value": "HN" },
        { "text": "Hong Kong", "value": "HK" },
        { "text": "Hungary", "value": "HU" },
        { "text": "Iceland", "value": "IS" },
        { "text": "India", "value": "IN" },
        { "text": "Indonesia", "value": "ID" },
        { "text": "Iran, Islamic Republic Of", "value": "IR" },
        { "text": "Iraq", "value": "IQ" },
        { "text": "Ireland", "value": "IE" },
        { "text": "Isle of Man", "value": "IM" },
        { "text": "Israel", "value": "IL" },
        { "text": "Italy", "value": "IT" },
        { "text": "Jamaica", "value": "JM" },
        { "text": "Japan", "value": "JP" },
        { "text": "Jersey", "value": "JE" },
        { "text": "Jordan", "value": "JO" },
        { "text": "Kazakhstan", "value": "KZ" },
        { "text": "Kenya", "value": "KE" },
        { "text": "Kiribati", "value": "KI" },
        { "text": "Korea, Democratic People'S Republic of", "value": "KP" },
        { "text": "Korea, Republic of", "value": "KR" },
        { "text": "Kuwait", "value": "KW" },
        { "text": "Kyrgyzstan", "value": "KG" },
        { "text": "Lao People'S Democratic Republic", "value": "LA" },
        { "text": "Latvia", "value": "LV" },
        { "text": "Lebanon", "value": "LB" },
        { "text": "Lesotho", "value": "LS" },
        { "text": "Liberia", "value": "LR" },
        { "text": "Libyan Arab Jamahiriya", "value": "LY" },
        { "text": "Liechtenstein", "value": "LI" },
        { "text": "Lithuania", "value": "LT" },
        { "text": "Luxembourg", "value": "LU" },
        { "text": "Macao", "value": "MO" },
        { "text": "Macedonia, The Former Yugoslav Republic of", "value": "MK" },
        { "text": "Madagascar", "value": "MG" },
        { "text": "Malawi", "value": "MW" },
        { "text": "Malaysia", "value": "MY" },
        { "text": "Maldives", "value": "MV" },
        { "text": "Mali", "value": "ML" },
        { "text": "Malta", "value": "MT" },
        { "text": "Marshall Islands", "value": "MH" },
        { "text": "Martinique", "value": "MQ" },
        { "text": "Mauritania", "value": "MR" },
        { "text": "Mauritius", "value": "MU" },
        { "text": "Mayotte", "value": "YT" },
        { "text": "Mexico", "value": "MX" },
        { "text": "Micronesia, Federated States of", "value": "FM" },
        { "text": "Moldova, Republic of", "value": "MD" },
        { "text": "Monaco", "value": "MC" },
        { "text": "Mongolia", "value": "MN" },
        { "text": "Montserrat", "value": "MS" },
        { "text": "Morocco", "value": "MA" },
        { "text": "Mozambique", "value": "MZ" },
        { "text": "Myanmar", "value": "MM" },
        { "text": "Namibia", "value": "NA" },
        { "text": "Nauru", "value": "NR" },
        { "text": "Nepal", "value": "NP" },
        { "text": "Netherlands", "value": "NL" },
        { "text": "Netherlands Antilles", "value": "AN" },
        { "text": "New Caledonia", "value": "NC" },
        { "text": "New Zealand", "value": "NZ" },
        { "text": "Nicaragua", "value": "NI" },
        { "text": "Niger", "value": "NE" },
        { "text": "Nigeria", "value": "NG" },
        { "text": "Niue", "value": "NU" },
        { "text": "Norfolk Island", "value": "NF" },
        { "text": "Northern Mariana Islands", "value": "MP" },
        { "text": "Norway", "value": "NO" },
        { "text": "Oman", "value": "OM" },
        { "text": "Pakistan", "value": "PK" },
        { "text": "Palau", "value": "PW" },
        { "text": "Palestinian Territory, Occupied", "value": "PS" },
        { "text": "Panama", "value": "PA" },
        { "text": "Papua New Guinea", "value": "PG" },
        { "text": "Paraguay", "value": "PY" },
        { "text": "Peru", "value": "PE" },
        { "text": "Philippines", "value": "PH" },
        { "text": "Pitcairn", "value": "PN" },
        { "text": "Poland", "value": "PL" },
        { "text": "Portugal", "value": "PT" },
        { "text": "Puerto Rico", "value": "PR" },
        { "text": "Qatar", "value": "QA" },
        { "text": "Reunion", "value": "RE" },
        { "text": "Romania", "value": "RO" },
        { "text": "Russian Federation", "value": "RU" },
        { "text": "RWANDA", "value": "RW" },
        { "text": "Saint Helena", "value": "SH" },
        { "text": "Saint Kitts and Nevis", "value": "KN" },
        { "text": "Saint Lucia", "value": "LC" },
        { "text": "Saint Pierre and Miquelon", "value": "PM" },
        { "text": "Saint Vincent and the Grenadines", "value": "VC" },
        { "text": "Samoa", "value": "WS" },
        { "text": "San Marino", "value": "SM" },
        { "text": "Sao Tome and Principe", "value": "ST" },
        { "text": "Saudi Arabia", "value": "SA" },
        { "text": "Senegal", "value": "SN" },
        { "text": "Serbia and Montenegro", "value": "CS" },
        { "text": "Seychelles", "value": "SC" },
        { "text": "Sierra Leone", "value": "SL" },
        { "text": "Singapore", "value": "SG" },
        { "text": "Slovakia", "value": "SK" },
        { "text": "Slovenia", "value": "SI" },
        { "text": "Solomon Islands", "value": "SB" },
        { "text": "Somalia", "value": "SO" },
        { "text": "South Africa", "value": "ZA" },
        { "text": "South Georgia and the South Sandwich Islands", "value": "GS" },
        { "text": "Spain", "value": "ES" },
        { "text": "Sri Lanka", "value": "LK" },
        { "text": "Sudan", "value": "SD" },
        { "text": "Suriname", "value": "SR" },
        { "text": "Svalbard and Jan Mayen", "value": "SJ" },
        { "text": "Swaziland", "value": "SZ" },
        { "text": "Sweden", "value": "SE" },
        { "text": "Switzerland", "value": "CH" },
        { "text": "Syrian Arab Republic", "value": "SY" },
        { "text": "Taiwan, Province of China", "value": "TW" },
        { "text": "Tajikistan", "value": "TJ" },
        { "text": "Tanzania, United Republic of", "value": "TZ" },
        { "text": "Thailand", "value": "TH" },
        { "text": "Timor-Leste", "value": "TL" },
        { "text": "Togo", "value": "TG" },
        { "text": "Tokelau", "value": "TK" },
        { "text": "Tonga", "value": "TO" },
        { "text": "Trinidad and Tobago", "value": "TT" },
        { "text": "Tunisia", "value": "TN" },
        { "text": "Turkey", "value": "TR" },
        { "text": "Turkmenistan", "value": "TM" },
        { "text": "Turks and Caicos Islands", "value": "TC" },
        { "text": "Tuvalu", "value": "TV" },
        { "text": "Uganda", "value": "UG" },
        { "text": "Ukraine", "value": "UA" },
        { "text": "United Arab Emirates", "value": "AE" },
        { "text": "United Kingdom", "value": "GB" },
        { "text": "United States", "value": "US", synonym: ['USA', 'United States of America'] },
        { "text": "United States Minor Outlying Islands", "value": "UM" },
        { "text": "Uruguay", "value": "UY" },
        { "text": "Uzbekistan", "value": "UZ" },
        { "text": "Vanuatu", "value": "VU" },
        { "text": "Venezuela", "value": "VE" },
        { "text": "Viet Nam", "value": "VN" },
        { "text": "Virgin Islands, British", "value": "VG" },
        { "text": "Virgin Islands, U.S.", "value": "VI" },
        { "text": "Wallis and Futuna", "value": "WF" },
        { "text": "Western Sahara", "value": "EH" },
        { "text": "Yemen", "value": "YE" },
        { "text": "Zambia", "value": "ZM" },
        { "text": "Zimbabwe", "value": "ZW" }
    ];

    /*------------------------------------
 country select dropdown
--------------------------------------*/

    for (var i = 0; i < countries.length; i++) {
        countries[i].image = 'https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/' + countries[i].value.toLowerCase() + '.svg';
    }







    jSuites.dropdown(document.getElementById('dropdown'), {
        data: countries,
        autocomplete: true,
        multiple: false,
        width: '280px',
    });

    jSuites.dropdown(document.getElementById('dropdown-2'), {
        data: countries,
        autocomplete: true,
        multiple: false,
        width: '280px',
    });


    // 'use strict';

    //     /*------------------------------------
    //         Mobile Menu
    //     --------------------------------------*/

    //     $('#mobile-menu').meanmenu({
    //         meanMenuContainer: '.mobile-menu',
    //         meanScreenWidth: "991"
    //     });

    //     $('.side-icon > a').on('click', function(event){
    //         event.preventDefault();
    //         $('.side-bar-menu').addClass('active')
    //     });

    //     $('.close-icon > a').on('click', function(event){
    //         event.preventDefault();
    //         $('.side-bar-menu').removeClass('active')
    //     });


    //     /*-------------------------------------------
    //         Sticky Header
    //     --------------------------------------------- */

    //     let win = $(window);
    //     let sticky_id = $(".header-area");
    //     win.on('scroll', function () {
    //         let scroll = win.scrollTop();
    //         if (scroll < 245) {
    //             sticky_id.removeClass("sticky-header");
    //         } else {
    //             sticky_id.addClass("sticky-header");
    //         }
    //     });


    //     /*------------------------------------
    //         Overlay Close
    //     --------------------------------------*/
    //     $(window).scroll(function () {
    //         if ($(this).scrollTop() !== 0) {
    //             $('#scrollUp').fadeIn();
    //         } else {
    //             $('#scrollUp').fadeOut();
    //         }
    //     });

    //     $('#scrollUp').on('click', function () {
    //         $("html, body").animate({ scrollTop: 0 }, 600);
    //         return false;
    //     });

    //     /*------------------------------------
    //             Odometer Counter
    //         --------------------------------------*/

    //     $('.odometer').appear(function (e) {
    //         var odo = $(".odometer");
    //         odo.each(function () {
    //             var countNumber = $(this).attr("data-count");
    //             $(this).html(countNumber);
    //         });
    //     });

    //     /*------------------------------------
    //          skillbar plugin
    //      --------------------------------------*/


    //     $('.skillbar').skillbar({

    //         speed: 2000

    //     });


    //     /*------------------------------------
    //        venobox plugin
    //    --------------------------------------*/

    //     $('.venobox').venobox();


    //     /*------------------------------------
    //             Slider
    //         --------------------------------------*/

    //     if (jQuery(".slider-active-wrap .swiper-container").length > 0) {
    //         let sliderActive1 = '.slider-active-wrap .swiper-container';
    //         let sliderInit1 = new Swiper(sliderActive1, {
    //             // Optional parameters
    //             slidesPerView: 1,
    //             slidesPerColumn: 1,
    //             paginationClickable: true,
    //             loop: true,
    //             effect: 'fade',

    //             autoplay: {
    //                 delay: 5000,
    //             },

    //             // If we need pagination
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 // type: 'fraction',
    //                 clickable: true,
    //             },

    //             // Navigation arrows
    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev',
    //             },

    //             a11y: false
    //         });

    //         function animated_swiper(selector, init) {
    //             let animated = function animated() {
    //                 $(selector + ' [data-animation]').each(function () {
    //                     let anim = $(this).data('animation');
    //                     let delay = $(this).data('delay');
    //                     let duration = $(this).data('duration');

    //                     $(this).removeClass('anim' + anim)
    //                         .addClass(anim + ' animated')
    //                         .css({
    //                             webkitAnimationDelay: delay,
    //                             animationDelay: delay,
    //                             webkitAnimationDuration: duration,
    //                             animationDuration: duration
    //                         })
    //                         .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    //                             $(this).removeClass(anim + ' animated');
    //                         });
    //                 });
    //             };
    //             animated();
    //             // Make animated when slide change
    //             init.on('slideChange', function () {
    //                 $(sliderActive1 + ' [data-animation]').removeClass('animated');
    //             });
    //             init.on('slideChange', animated);
    //         }

    //         animated_swiper(sliderActive1, sliderInit1);
    //     }
    /*------------------------------------
          Destination  Slider
        --------------------------------------*/

    // Slider With Thumbs
    if (jQuery(".destination-slider-active .swiper-container").length > 0) {
        let destinationSlider = new Swiper('.destination-slider-active .swiper-container', {
            // Optional parameters
            slidesPerView: 5,
            slidesPerColumn: 1,
            loop: true,

            autoplay: {
                delay: 2000,
            },

            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            },

            a11y: false

        });
    }

    /*------------------------------------
     change background image & Hero text
 --------------------------------------*/



    $('#flight-tab').on('click', function (event) {
        event.preventDefault();
        $('.hero-area').addClass('active')
    });

    $('#visa-tab').on('click', function (event) {
        event.preventDefault();
        $('.hero-area').removeClass('active')
    });

    $("#flight-tab").click(function () {
        $(".hero-text").text("Where would you like to fly?");
    });
    $("#visa-tab").click(function () {
        $(".hero-text").text("Apply for a visa online in a few clicks.");
    });




    /*------------------------------------
            track dropdown
    --------------------------------------*/

    $(".track-btn").click(function () {
        $(".track-content").show();
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass("track-btn")
            && $(e.target).parents(".track-content").length === 0) {
            $(".track-content").hide();
        }
    });

    var trackLi = $('.track-content li');
   

    trackLi.click(function () {
        var liText = $(this).text();
        $('.track-btn span').text(liText)
        console.log(liText);
    })

 
    /*------------------------------------
    passengers category dropdown
     --------------------------------------*/

    $(".dropbtn").click(function () {
        $(".dropdown-content").show();
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass("dropbtn")
            && $(e.target).parents(".dropdown-content").length === 0) {
            $(".dropdown-content").hide();
        }
    });


       /*------------------------------------
            Classes dropdown
    --------------------------------------*/

    $(".classes-btn").click(function () {
        $(".classes-content").show();
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass("classes-btn")
            && $(e.target).parents(".classes-content").length === 0) {
            $(".classes-content").hide();
        }
    });

    var classesLi = $('.classes-content li');
   

    classesLi.click(function () {
        var liText = $(this).text();
        $('.classes-btn span').text(liText)
    })




    /*------------------------------------
    select datepicker calender
 --------------------------------------*/


    $('input[name="datetimes"]').daterangepicker({

        timePicker: true,

        startDate: moment().startOf('hour'),

        endDate: moment().startOf('hour').add(32, 'hour'),

        locale: {

            format: 'M/DD hh:mm A'

        }

    });

    /*------------------------------------
      counts plus minus
  --------------------------------------*/

    $(".category-counts").on("click", ".plus, .minus",
        function () {
            // Get current quantity values
            let qty = $(this).closest(".category-counts").find(".qty");
            let val = parseFloat(qty.val());
            let max = parseFloat(qty.attr("max"));
            let min = parseFloat(qty.attr("min"));


            // get input value 
            let adult = parseFloat($('#adult').val());
            let children = parseFloat($('#children').val());
            let infants = parseFloat($('#infants').val());
            var total = adult + children + infants;
            // console.log(total)


            // Change the value if plus or minus
            if ($(this).is(".plus")) {
                if (max && max <= val) {
                    qty.val(max);
                } else {
                    qty.val(val + 1).trigger("change");
                    $(".dropbtn span").text(total + 1);
                }
            } else {
                if (min && min >= val) {
                    qty.val(min);
                } else if (val > 0) {
                    qty.val(val - 1).trigger("change");
                    $(".dropbtn span").text(total - 1);
                }
            }
        }
    );



    /*------------------------------------
      Country select dropdown
  --------------------------------------*/




})(jQuery);
