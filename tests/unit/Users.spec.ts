import { shallowMount } from "@vue/test-utils";
import { IUser } from "@/interfaces/user";
import Users from "@/components/Users.vue";

describe("Users", () => {
  it("should render users correctly", () => {
    const users: IUser[] = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
    ];
    const wrapper = shallowMount(Users, {
      props: {
        users
      }
    });
    // check that the user's name is rendered
    expect(wrapper.get("[data-test-id=\"name\"]").text()).toEqual("Leanne Graham");
  });
});