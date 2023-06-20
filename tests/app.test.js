import { shallowMount } from "@vue/test-utils";
import App from "../src/App.vue";

test("hide competitie", function () {
  const wrapper = shallowMount(App);
  const x = wrapper.get("#uitslagen");
  console.log(x.html());
  expect(x.html()).toContain("todo");
});
