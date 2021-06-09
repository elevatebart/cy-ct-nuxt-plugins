import { mount } from "@cypress/vue";
import indexPage from "./index.vue";

describe("index page", () => {
  it("playground", () => {
    mount(indexPage);
  });
});
