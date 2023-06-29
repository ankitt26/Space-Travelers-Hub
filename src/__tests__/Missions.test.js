import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Missions from '../components/Mission';
import Store from '../Redux/store';

it('MyProfile component test', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={Store}>
          <Missions />
        </Provider>
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
