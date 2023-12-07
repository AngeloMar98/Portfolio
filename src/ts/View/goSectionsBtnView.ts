class goSectionsBtnViews {
  _btn: HTMLButtonElement | null = document.querySelector(".goSectionsBtn");
  _firstSection = document.querySelector("#technologies");

  addHandlerClick() {
    this._btn?.addEventListener("click", () => {
      this._firstSection?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

export default new goSectionsBtnViews();
