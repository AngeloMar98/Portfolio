class aboutmeBtnView {
    constructor() {
        this._btn = document.querySelector(".aboutme_btn");
        this._aboutme = document.getElementById("aboutMe");
        this._aboutmeContainer = document.getElementById("aboutMeContainer");
    }
    addHandlerClick() {
        var _a;
        (_a = this._btn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a, _b;
            (_a = this._aboutme) === null || _a === void 0 ? void 0 : _a.classList.remove("opacity-0");
            (_b = this._aboutmeContainer) === null || _b === void 0 ? void 0 : _b.classList.add("header-shadow");
        });
    }
}
export default new aboutmeBtnView();
