
$('.more-btn.link').animatedModal({
    animatedIn: "fadeIn",
    animatedOut: "fadeOut",
    animationDuration: "0s",
    beforeOpen: function () {

        $("#overlay-effect").addClass("animate-up").removeClass("animate-down"),
            $("#about").css({ animationDelay: ".5s", animationFillMode: "both" })
    },
    afterOpen: function () {

        $("#about").css({ animationFillMode: "none" })
    },
    beforeClose: function () {

        $("#overlay-effect").addClass("animate-down").removeClass("animate-up"),
            $("#about").css({ animationDelay: ".5s", animationFillMode: "both" })
    },
    afterClose: function () {

        $("#about").css({ animationFillMode: "none" })
    }
});