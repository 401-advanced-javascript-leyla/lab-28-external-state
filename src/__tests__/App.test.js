import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import App from '../components/App/App.jsx';

Enzyme.configure({ adapter: new Adapter() });


describe('<App />', () => {
  it('renders the App component', () => {
    const app = shallow(<App />);
    expect(app.find('div').exists()).toBeTruthy();
  });
});
