$(document).ready(function() {
    var container = $(".content-container");
    var video = $("video");

    // Initialize opacity and video filter
    container.css("opacity", 0);
    video.css("filter", "brightness(0.9)");

    // When mouse enters the container, make it fully visible and darken the video
    container.on("mouseenter", function() {
        container.css("opacity", 1);
        video.css("filter", "brightness(0.4)");
    });

    // When mouse leaves the container, hide it and make the video fully visible
    container.on("mouseleave", function() {
        container.css("opacity", 0);
        video.css("filter", "brightness(0.9)");
    });
});