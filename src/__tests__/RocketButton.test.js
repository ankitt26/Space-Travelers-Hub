import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import RocketButton from '../components/RocketButton';
import Store from '../Redux/store';

it('MyProfile component test', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={Store}>
          <RocketButton />
        </Provider>
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
