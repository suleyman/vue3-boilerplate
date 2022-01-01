import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld", () => {
  it("should render message correctly", () => {
    const message = "Test Message";
    const wrapper = shallowMount(HelloWorld, {
      props: {
        message
      }
    });
    // check that the message is rendered
    expect(wrapper.get("[data-test-id=\"message\"]").text()).toEqual("Test Message");
  });
});