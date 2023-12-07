class sectionNavView {
  _nav: HTMLElement | null = document.querySelector(".section-nav");
  _header: HTMLElement | null = document.querySelector("header");
  _currSectionHL: HTMLElement | null = document.querySelector(".currSectionHL");
  _technologies = document.querySelector("#technologies");
  _projects = document.querySelector("#projects");
  _contactme = document.querySelector("#contactme");
  _aboutme = document.getElementById("aboutMe");
  _aboutmeContainer = document.getElementById("aboutMeContainer");
  _shortScreen = window.matchMedia("(max-height: 440px)");

  _changeObserver() {
    const short = this._shortScreen.matches;

    const observerHide = new IntersectionObserver(
      (entry) => {
        if (!entry[0].isIntersecting) return;
        this._nav!.classList.add("-translate-y-full");
      },
      {
        root: null,
        threshold: 0.7,
        rootMargin: "50px",
      }
    );

    const observerShow = new IntersectionObserver(
      (entry) => {
        if (!entry[0].isIntersecting) return;
        this._currSectionHL?.classList.add("translate-x-0");
        this._currSectionHL?.classList.remove("translate-x-full");
        this._currSectionHL?.classList.remove("translate-x-[200%]");

        this._nav!.classList.remove("-translate-y-full");
      },
      {
        root: null,
        threshold: short ? 0.6 : 1,
        rootMargin: "50px",
      }
    );

    const observerProjects = new IntersectionObserver(
      (entry) => {
        if (!entry[0].isIntersecting) return;
        this._nav!.classList.remove("-translate-y-full");
        7;
        this._currSectionHL?.classList.add("translate-x-full");
        this._currSectionHL?.classList.remove("translate-x-0");
        this._currSectionHL?.classList.remove("translate-x-[200%]");

        this._aboutme?.classList.add("opacity-0");
        this._aboutmeContainer?.classList.remove("header-shadow");
      },
      {
        root: null,
        /* PROJECTS IS SHORT FOR NOW, SHOULD BE LONGER. PRONE TO CHANGE THIS VALUE */
        threshold: short ? 0.6 : 1,
      }
    );

    const observerContactMe = new IntersectionObserver(
      (entry) => {
        if (!entry[0].isIntersecting) return;
        this._nav!.classList.remove("-translate-y-full");
        this._currSectionHL?.classList.add("translate-x-[200%]");
        this._currSectionHL?.classList.remove("translate-x-full");
        this._currSectionHL?.classList.remove("translate-x-0");

        this._aboutme?.classList.add("opacity-0");
        this._aboutmeContainer?.classList.remove("header-shadow");
      },
      {
        root: null,
        threshold: short ? 0.6 : 0.8,
        rootMargin: "50px",
      }
    );

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
    this._nav?.addEventListener("click", (e: any) => {
      const button = e.target.closest("button");
      if (!button) return;

      const section: string = button.dataset.section;
      if (
        section === "technologies" ||
        section === "projects" ||
        section === "contactme"
      ) {
        this[`_${section}`]!.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }
}

export default new sectionNavView();
