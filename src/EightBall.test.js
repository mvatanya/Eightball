import React from 'react';
import { mount } from 'enzyme';
import EightBall from './EightBall';


it('renders without errors', function () {
  mount(<EightBall />);
});

it(`renders initial state`, function() {
  let wrapper = mount(<EightBall />)

  let id = wrapper.find('#message').first()
  console.log(id.html())
})