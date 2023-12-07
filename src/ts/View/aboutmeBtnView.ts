class aboutmeBtnView {
  _btn = document.querySelector(".aboutme_btn");
  _aboutme = document.getElementById("aboutMe");
  _aboutmeContainer = document.getElementById("aboutMeContainer");

  addHandlerClick() {
    this._btn?.addEventListener("click", () => {
      this._aboutme?.classList.remove("opacity-0");
      this._aboutmeContainer?.classList.add("header-shadow");
    });
  }
}

export default new aboutmeBtnView();
