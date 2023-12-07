class sectionNavView {
  _nav: HTMLElement | null = document.querySelector(".section-nav");
  _header: HTMLElement | null = document.querySelector("header");
  _currSectionHL: HTMLElement | null = document.querySelector(".currSectionHL");
  _technologies = document.querySelector("#technologies");
  _projects = document.querySelector("#projects");
  _contactme = document.querySelector("#contactme");
  _aboutme = document.getElementById("aboutMe");
  _aboutmeContainer = document.getElementById("aboutMeContainer");

  addHandlerObserver() {
    console.log(this._currSectionHL);

    const observerHide = new IntersectionObserver(
      () => {
        this._nav!.classList.add("-translate-y-full");
      },
      {
        root: null,
        threshold: 1,
      }
    );

    const observerShow = new IntersectionObserver(
      () => {
        console.log("technologies");
        this._currSectionHL?.classList.add("translate-x-0");
        this._currSectionHL?.classList.remove("translate-x-full");
        this._currSectionHL?.classList.remove("translate-x-[200%]");

        this._aboutme?.classList.add("opacity-0");
        this._aboutmeContainer?.classList.remove("header-shadow");

        this._nav!.classList.remove("-translate-y-full");
      },
      {
        root: null,
        threshold: 1,
        rootMargin: "50px",
      }
    );

    const observerProjects = new IntersectionObserver(
      () => {
        console.log("projects");
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
        threshold: 0.8,
      }
    );

    const observerContactMe = new IntersectionObserver(
      () => {
        console.log("contactme");
        this._nav!.classList.remove("-translate-y-full");
        this._currSectionHL?.classList.add("translate-x-[200%]");
        this._currSectionHL?.classList.remove("translate-x-full");
        this._currSectionHL?.classList.remove("translate-x-0");

        this._aboutme?.classList.add("opacity-0");
        this._aboutmeContainer?.classList.remove("header-shadow");
      },
      {
        root: null,
        threshold: 1,
        rootMargin: "50px",
      }
    );

    this._header !== null && observerHide.observe(this._header);
    this._technologies !== null && observerShow.observe(this._technologies);
    this._projects !== null && observerProjects.observe(this._projects);
    this._contactme !== null && observerContactMe.observe(this._contactme);
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
