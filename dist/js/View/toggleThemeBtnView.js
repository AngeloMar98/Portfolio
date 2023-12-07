class toggleThemeBtnView {
    constructor() {
        this._btn = document.querySelector(".toggleTheme");
    }
    addHandlerClick() {
        var _a;
        (_a = this._btn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            document.documentElement.classList.toggle("dark");
        });
    }
}
export default new toggleThemeBtnView();
