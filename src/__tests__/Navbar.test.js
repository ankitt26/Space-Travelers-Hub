import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Navbar from '../components/Navbar'
import Store from "../Redux/store";
import { MemoryRouter } from "react-router";

it("MyProfile component test", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={Store}>
          <Navbar />
        </Provider>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

