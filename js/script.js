// Function for the "Yes" button
function sayYes() {
  // Show the "Yay" message when clicking Yes
  document.getElementById("responseMessage").textContent = "Yay! Can’t wait for our date!";
  document.getElementById("responseMessage").style.display = "block";

  // Show the YouTube Shorts video in a responsive container when "Yes" is clicked
  document.getElementById("gifContainer").innerHTML = `
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/3NSBuZ0mlNo?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;
}

// Function for the "No" button
function sayNo() {
  // Show the "No" message along with "Try again" message
  document.getElementById("responseMessage").textContent = "Nuh-uh 🤓☝️ ,you can’t say no! Try again! 😊";
  document.getElementById("responseMessage").style.display = "block";

  // Show the YouTube Shorts video in a responsive container when "No" is clicked
  document.getElementById("gifContainer").innerHTML = `
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/oW2cJCemERQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;
}
