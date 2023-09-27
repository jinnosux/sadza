$(document).ready(function () {
  var container = $(".content-container");
  var video = $("#background-video");
  var desktopSource = $("#desktop-source");
  var mobileSource = $("#mobile-source");
  var muteToggle = $("#mute-toggle");
  var muteButton = $("#sound-div");

  // Set the video to be muted by default
  video[0].muted = true;

  // Function to toggle the mute state and update the icon
  function toggleMute() {
    video[0].muted = !video[0].muted;
    muteToggle.toggleClass("sound-mute", video[0].muted);
  }

  // Trigger a click event on the mute toggle to set the initial state
  muteToggle.click();

  // Add click event listener to toggle mute and update icon
  muteToggle.click(function () {
    toggleMute();
  });

  // Initialize opacity and video filter
  if (isMobile()) {
    container.css("opacity", 1);
    muteButton.hide();
    video.attr("src", mobileSource.attr("src"));
    $(".buttons-icons").hide();
    $(".buttons-icons-mobile").show();
  } else {
    container.css("opacity", 0);
    muteButton.css("opacity", 0);
    video.attr("src", desktopSource.attr("src"));
    $(".buttons-icons").show();
    $(".buttons-icons-mobile").hide();
    //muteButton.show();
  }

  video[0].load(); // Reload the video element with the selected source

  // When mouse enters the container (only for non-mobile), darken the video
  container.on("mouseenter", function () {
    if (!isMobile()) {
      // Check if not on mobile
      container.css("opacity", 1);
      video.addClass("blur-effect");
      muteButton.show();
      muteButton.css("opacity", 1);
    }
  });

  // When mouse leaves the container (only for non-mobile), hide it and make the video fully visible
  container.on("mouseleave", function () {
    if (!isMobile()) {
      container.css("opacity", 0);
      video.removeClass("blur-effect");
      muteButton.css("opacity", 0);
    }
  });

  muteButton.on("mouseenter", function () {
    if (!isMobile()) {
      container.css("opacity", 1);
      muteButton.show();
      video.addClass("blur-effect");
      muteButton.css("opacity", 1);
    }
  });

  muteButton.on("mouseleave", function () {
    if (!isMobile()) {
      container.css("opacity", 0);
      video.removeClass("blur-effect");
      muteButton.css("opacity", 0);
    }
  });

  // Function to detect if the device is a mobile device
  function isMobile() {
    return window.innerWidth <= 768; // Adjust the breakpoint if needed
  }
});
