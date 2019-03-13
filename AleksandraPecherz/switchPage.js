var Nav = (function () {
    var nav = $(".Menu"),
        section = $(".section"),
        link = nav.find(".menuLink"),
        navHight = nav.innerHeight(),
        hasT = false;

    var switchPage = function (e) {
        var self = $(this);
        var ChosenMenuLinkBottom = self.parents(".MenuLinkBottom").index();
        var ChosenSection = section.eq(ChosenMenuLinkBottom);
        var CurrentActiveSection = $("section.section--active");
        var t = $(e.target);

        if (!hasT) {
            if (ChosenMenuLinkBottom == CurrentActiveSection.index()) {
                return false;
            }
            CurrentActiveSection.addClass("section--hidden").removeClass("section--active");

            ChosenSection.addClass("section--active");

            hasT = true;

            CurrentActiveSection.on("transitionend webkitTransitionend", function () {
                $(this).removeClass("section--hidden");
                hasT = false;
                CurrentActiveSection.off("transitionend webkitTransitionend");
            });
        }
        return false;
    };



    var bindActions = function () {
        link.on("click", switchPage);
        $(document).on("ready", function () {
            transform: "translateY(" + navHight + "px)"
        });
    };

    var init = function () {
        bindActions();
    };

    return {
        init: init
    };
})();

Nav.init();