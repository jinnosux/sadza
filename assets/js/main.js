$(document).ready(function() {
    var container = $(".content-container");
    var video = $("#background-video");
    var desktopSource = $("#desktop-source");
    var mobileSource = $("#mobile-source");

    // Initialize opacity and video filter
    if (isMobile()) {
        container.css("opacity", 1);
        // Use the mobile video source
        video.attr("src", mobileSource.attr("src"));
    } else {
        container.css("opacity", 0); // Set initial opacity to 0 for desktop
        // Use the desktop video source
        video.attr("src", desktopSource.attr("src"));
    }

    video[0].load(); // Reload the video element with the selected source

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