import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Form from '../components/Form/Form.jsx';

Enzyme.configure({ adapter: new Adapter() });


describe('<Form />', () => {
  it('renders the Form component', () => {
    const app = shallow(<Form />);
    expect(app.find('form').exists()).toBeTruthy();
  });
});
