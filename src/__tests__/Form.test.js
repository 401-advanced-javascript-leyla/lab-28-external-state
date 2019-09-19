import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Form from '../components/Form/Form.jsx';

Enzyme.configure({ adapter: new Adapter() });


describe('<Form />', () => {
  it('renders the Form component', () => {
    const newState = { name: 'hello', count: '0' };
    const handleNameChange = (newName) => {
      this.setState((previousState) => {
        return {
          name: newName,
          count: previousState.count + 1,
        };
      });
    };
    const app = shallow(<Form newState={newState} handleNameChange={handleNameChange} />);
    expect(app.find('form').exists()).toBeTruthy();
  });
});
