const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// @ts-ignore
sign_up_btn.addEventListener("click", () => {
  // @ts-ignore
  container.classList.add("sign-up-mode");
});

// @ts-ignore
sign_in_btn.addEventListener("click", () => {
  // @ts-ignore
  container.classList.remove("sign-up-mode");
});
                        
                        