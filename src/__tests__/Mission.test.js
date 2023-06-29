import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Mission from '../components/Mission'
import Store from "../Redux/store";
import { MemoryRouter } from "react-router";

it("MyProfile component test", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={Store}>
          <Mission />
        </Provider>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

