import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Store from "../Redux/store";
// import { MemoryRouter } from "react-router";
import MyProfile from "../components/MyProfile";

it("MyProfile component test", () => {
  const tree = renderer
    .create(
      <Provider store={Store}>
        <MyProfile />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
