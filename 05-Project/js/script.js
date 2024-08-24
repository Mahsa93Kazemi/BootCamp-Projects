
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    const formGroups = document.querySelectorAll(".form-group");

    formGroups.forEach(function (group) {
      const input = group.querySelector("input, textarea, select");
      const errorMessage = group.querySelector(".error");
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
      input.style.borderColor = "";

      if (input.value.trim() === "") {
        isValid = false;
        errorMessage.textContent = `This field is required`;
        errorMessage.style.display = "block";
        input.style.borderColor = "var(--red)";
      } else if (input.type === "email" && !input.validity.valid) {
        isValid = false;
        errorMessage.textContent = `Please enter a valid email address`;
        errorMessage.style.display = "block";
        input.style.borderColor = "var(--red)";
      } else if (input.type === "radio") {
        const radioGroup = group.querySelectorAll("input[type='radio']");
        let isRadioSelected = false;

        radioGroup.forEach(function (radio) {
          if (radio.checked) {
            isRadioSelected = true;
            radio.parentElement.parentElement.style.backgroundColor = "initial";
          }
        });

        if (!isRadioSelected) {
          isValid = false;
          const radioErrorMessage = group.querySelector(".error");
          radioErrorMessage.textContent = `Please select a query type`;
          radioErrorMessage.style.display = "block";
          radioGroup[0].focus();
        }
      } else if (input.type === "checkbox" && !input.checked) {
        isValid = false;
        errorMessage.textContent = `To submit this form, please consent to being contacted`;
        errorMessage.style.display = "block";
        input.style.borderColor = "var(--red)";
      } else {
        input.style.borderColor = "var(--medium-green)";
      }
    });

    if (isValid) {
      console.log("Message Sent!");
      document.querySelector(".message-box").style.display = "block";
      setTimeout(function () {
        document.querySelector(".message-box").style.display = "none";
        document.getElementById("contactForm").reset();
      }, 3000);
    }
  });

let radioBtns = document.querySelectorAll("input[type=radio]");
radioBtns.forEach(function (inputElement, index) {
  inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      inputElement.checked = true;

      radioBtns.forEach(function (radio) {
        radio.parentElement.parentElement.style.backgroundColor = "initial";
      });

      inputElement.parentElement.parentElement.style.backgroundColor =
        "var(--light-green)";
    } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      let nextIndex = (index + 1) % radioBtns.length;
      radioBtns[nextIndex].focus();
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      let prevIndex = (index - 1 + radioBtns.length) % radioBtns.length;
      radioBtns[prevIndex].focus();
    }
  });

  inputElement.addEventListener("click", function () {
    radioBtns.forEach(function (radio) {
      radio.parentElement.parentElement.style.backgroundColor = "initial";
    });

    if (this.checked) {
      this.parentElement.parentElement.style.backgroundColor =
        "var(--light-green)";
    }
  });
});

document
  .querySelectorAll("input, textarea, select")
  .forEach(function (inputElement) {
    inputElement.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        let nextElement =
          inputElement.closest(".form-group").nextElementSibling;
        while (nextElement && !nextElement.matches(".form-group")) {
          nextElement = nextElement.nextElementSibling;
        }
        if (nextElement) {
          const nextInput = nextElement.querySelector(
            "input, textarea, select"
          );
          if (nextInput) nextInput.focus();
        }
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        let previousElement =
          inputElement.closest(".form-group").previousElementSibling;
        while (previousElement && !previousElement.matches(".form-group")) {
          previousElement = previousElement.previousElementSibling;
        }
        if (previousElement) {
          const prevInput = previousElement.querySelector(
            "input, textarea, select"
          );
          if (prevInput) prevInput.focus();
        }
      } else if (
        event.key === "Enter" &&
        (inputElement.tagName === "textarea" ||
          inputElement.type === "checkbox")
      ) {
        inputElement.dispatchEvent(new Event("input"));
      }
    });
  });

// افزودن مدیریت کیبورد برای checkbox
document.querySelectorAll("input[type=checkbox]").forEach(function (checkbox) {
  checkbox.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event("input"));
    }
  });

  checkbox.addEventListener("input", function () {
    const errorMessage = this.closest(".form-group").querySelector(".error");
    if (this.checked) {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
      this.style.borderColor = "var(--medium-green)";
    } else {
      errorMessage.textContent = `To submit this form, please consent to being contacted`;
      errorMessage.style.display = "block";
      this.style.borderColor = "var(--red)";
    }
  });
});

// مدیریت input در textarea
document.querySelectorAll("textarea").forEach(function (textarea) {
  textarea.addEventListener("input", function () {
    const errorMessage = this.closest(".form-group").querySelector(".error");
    if (this.value.trim() !== "") {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
      this.style.borderColor = "var(--medium-green)";
    } else {
      errorMessage.textContent = `This field is required`;
      errorMessage.style.display = "block";
      this.style.borderColor = "var(--red)";
    }
  });
});
