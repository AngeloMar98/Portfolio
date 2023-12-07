class toggleThemeBtnView {
  _btn = document.querySelector(".toggleTheme");

  addHandlerClick() {
    this._btn?.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
    });
  }
}

export default new toggleThemeBtnView();
