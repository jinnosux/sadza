$(document).ready(function() {
    var container = $(".content-container");
    var video = $("video");

    // Initialize opacity and video filter
    if (isMobile()) {
        container.css("opacity", 1);
    }
    else {
        container.css("opacity", 0); // Set initial opacity to 1 for mobile
    }
    video.css("filter", "brightness(1)");

    // When mouse enters the container (only for non-mobile), darken the video
    container.on("mouseenter", function() {
        if (!isMobile()) { // Check if not on mobile
            container.css("opacity", 1);
            video.css("filter", "brightness(0.4)");
        }
    });

    // When mouse leaves the container (only for non-mobile), hide it and make the video fully visible
    container.on("mouseleave", function() {
        if (!isMobile()) { // Check if not on mobile
            container.css("opacity", 0);
            video.css("filter", "brightness(1)");
        }
    });

    // Function to detect if the device is a mobile device
    function isMobile() {
        return window.innerWidth <= 768; // Adjust the breakpoint if needed
    }
});