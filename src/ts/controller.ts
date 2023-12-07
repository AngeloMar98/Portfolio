import "core-js/stable";

import toggleLanguageView from "./View/toggleLanguageView.js";
import goSectionsBtnView from "./View/goSectionsBtnView.js";
import sectionNavView from "./View/sectionNavView.js";
import aboutmeBtnView from "./View/aboutmeBtnView.js";
import toggleThemeBtnView from "./View/toggleThemeBtnView.js";

const addHandlers = function () {
  toggleLanguageView.addClickHandler();
  goSectionsBtnView.addHandlerClick();
  sectionNavView.addHandlerObserver();
  sectionNavView.addHandlerClick();
  aboutmeBtnView.addHandlerClick();
  toggleThemeBtnView.addHandlerClick();
};

addHandlers();
