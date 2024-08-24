const dogImage = document.getElementById("dogImage");
const message = document.getElementById("message");
const refreshButton = document.getElementById("refreshButton");

async function fetchDogPhoto() {
  message.textContent = "Loading...";
  dogImage.style.display = "none";

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    if (data.status === "success") {
      const imageUrl = data.message;
      dogImage.src = imageUrl;
      dogImage.style.display = "block";
      message.textContent = "";

      // Save the image URL to localStorage
      localStorage.setItem("lastDogImage", imageUrl);
    } else {
      message.textContent = "Failed to fetch dog photo. Please try again.";
    }
  } catch (error) {
    message.textContent = "Failed to fetch dog photo. Please try again.";
  }
}

// Load the last dog image from localStorage if available
function loadLastDogPhoto() {
  const lastDogImage = localStorage.getItem("lastDogImage");
  if (lastDogImage) {
    dogImage.src = lastDogImage;
    dogImage.style.display = "block";
    message.textContent = "";
  } else {
    fetchDogPhoto();
  }
}

refreshButton.addEventListener("click", fetchDogPhoto);

// Load the last dog photo on page load
loadLastDogPhoto();

