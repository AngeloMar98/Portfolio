import UKflag from "./../../../src/assets/img/UI_icons/uk.svg";
import ITAflag from "./../../../src/assets/img/UI_icons/italy.svg";

// const UKflag = "./../../../src/assets/img/UI_icons/uk.svg";
// const ITAflag = "./../../../src/assets/img/UI_icons/italy.svg";

class toggleLanguageView {
  _btn: HTMLButtonElement | null = document.querySelector(".toggleLanguage");
  _btnImg: HTMLImageElement | null | undefined =
    this._btn?.querySelector("img");
  _content: HTMLElement[] = Array.from(document.querySelectorAll("[data-ita]"));

  addClickHandler() {
    this._btn!.addEventListener("click", () => {
      console.log("hello world");
      this._btn!.dataset.currlang =
        this._btn!.dataset.currlang === "ita" ? "eng" : "ita";

      this._btnImg!.src =
        this._btn!.dataset.currlang === "ita" ? `${ITAflag}` : `${UKflag}`;

      this._content.forEach(
        (text) =>
          (text.textContent =
            text.dataset[this._btn!.dataset.currlang || "eng"] || "")
      );
    });
  }
}

export default new toggleLanguageView();
