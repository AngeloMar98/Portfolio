class sectionNavView {
    constructor() {
        this._nav = document.querySelector(".section-nav");
        this._header = document.querySelector("header");
        this._currSectionHL = document.querySelector(".currSectionHL");
        this._technologies = document.querySelector("#technologies");
        this._projects = document.querySelector("#projects");
        this._contactme = document.querySelector("#contactme");
        this._aboutme = document.getElementById("aboutMe");
        this._aboutmeContainer = document.getElementById("aboutMeContainer");
        this._shortScreen = window.matchMedia("(max-height: 440px)");
    }
    _changeObserver() {
        const short = this._shortScreen.matches;
        const observerHide = new IntersectionObserver(() => {
            this._nav.classList.add("-translate-y-full");
        }, {
            root: null,
            threshold: 0.7,
            rootMargin: "50px",
        });
        const observerShow = new IntersectionObserver(() => {
            var _a, _b, _c;
            (_a = this._currSectionHL) === null || _a === void 0 ? void 0 : _a.classList.add("translate-x-0");
            (_b = this._currSectionHL) === null || _b === void 0 ? void 0 : _b.classList.remove("translate-x-full");
            (_c = this._currSectionHL) === null || _c === void 0 ? void 0 : _c.classList.remove("translate-x-[200%]");
            this._nav.classList.remove("-translate-y-full");
        }, {
            root: null,
            threshold: short ? 0.6 : 1,
            rootMargin: "50px",
        });
        const observerProjects = new IntersectionObserver(() => {
            var _a, _b, _c, _d, _e;
            this._nav.classList.remove("-translate-y-full");
            7;
            (_a = this._currSectionHL) === null || _a === void 0 ? void 0 : _a.classList.add("translate-x-full");
            (_b = this._currSectionHL) === null || _b === void 0 ? void 0 : _b.classList.remove("translate-x-0");
            (_c = this._currSectionHL) === null || _c === void 0 ? void 0 : _c.classList.remove("translate-x-[200%]");
            (_d = this._aboutme) === null || _d === void 0 ? void 0 : _d.classList.add("opacity-0");
            (_e = this._aboutmeContainer) === null || _e === void 0 ? void 0 : _e.classList.remove("header-shadow");
        }, {
            root: null,
            /* PROJECTS IS SHORT FOR NOW, SHOULD BE LONGER. PRONE TO CHANGE THIS VALUE */
            threshold: short ? 0.6 : 1,
        });
        const observerContactMe = new IntersectionObserver(() => {
            var _a, _b, _c, _d, _e;
            this._nav.classList.remove("-translate-y-full");
            (_a = this._currSectionHL) === null || _a === void 0 ? void 0 : _a.classList.add("translate-x-[200%]");
            (_b = this._currSectionHL) === null || _b === void 0 ? void 0 : _b.classList.remove("translate-x-full");
            (_c = this._currSectionHL) === null || _c === void 0 ? void 0 : _c.classList.remove("translate-x-0");
            (_d = this._aboutme) === null || _d === void 0 ? void 0 : _d.classList.add("opacity-0");
            (_e = this._aboutmeContainer) === null || _e === void 0 ? void 0 : _e.classList.remove("header-shadow");
        }, {
            root: null,
            threshold: short ? 0.6 : 0.8,
            rootMargin: "50px",
        });
        this._header !== null && observerHide.observe(this._header);
        this._technologies !== null && observerShow.observe(this._technologies);
        this._projects !== null && observerProjects.observe(this._projects);
        this._contactme !== null && observerContactMe.observe(this._contactme);
    }
    addHandlerObserver() {
        this._changeObserver();
        window.addEventListener("resize", this._changeObserver.bind(this));
    }
    addHandlerClick() {
        var _a;
        (_a = this._nav) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
            const button = e.target.closest("button");
            if (!button)
                return;
            const section = button.dataset.section;
            if (section === "technologies" ||
                section === "projects" ||
                section === "contactme") {
                this[`_${section}`].scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    }
}
export default new sectionNavView();
