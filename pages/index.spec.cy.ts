import { mount } from "@cypress/vue";
import indexPage from "./index.vue";
import Logo from "~/components/Logo.vue";

describe("index page", () => {
  let $toastPlugin: any;
  let showStub: any;
  beforeEach(() => {
    showStub = cy.stub();
    $toastPlugin = {
      install(Vue: any) {
        Vue.prototype.$toast = {
          show: showStub
        };
      }
    };
  });

  it("playground", () => {
    mount(indexPage, {
      extensions: { components: { Logo }, plugins: [$toastPlugin] }
    });
    expect(showStub).not.to.have.been.called;
    cy.wait(2200).then(() => {
      expect(showStub).to.have.been.calledOnce;
    });
  });
});
