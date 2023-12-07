class goSectionsBtnViews {
    constructor() {
        this._btn = document.querySelector(".goSectionsBtn");
        this._firstSection = document.querySelector("#technologies");
    }
    addHandlerClick() {
        var _a;
        (_a = this._btn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a;
            (_a = this._firstSection) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        });
    }
}
export default new goSectionsBtnViews();
