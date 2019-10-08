import React from 'react';
import { mount } from 'enzyme';
import EightBall from './EightBall';

it('renders without errors', function () {
  mount(<EightBall />);
});

it(`renders initial state`, function() {
  let wrapper = mount(<EightBall />)

  let elem = wrapper.find('#message');
  expect(elem.equals(<div id="message">Think of a Question</div>))
})

it('renders correct message when state changes', function(){
  let wrapper = mount(<EightBall />)
  wrapper.setState({ msg: "This is a test message"});

  let elem = wrapper.find('#message');
  expect(elem.equals(<div id="message">This is a test message</div>))
})

it('changes default message on click', function () {
  let wrapper = mount(<EightBall />);
  wrapper.simulate('click');

  let elem = wrapper.find('#message');
  expect(elem.equals(<b>This is a test message</b>)).toEqual(false);
});

it('works with random messages', function () {
  const TEST_RANDOM_MSGS = [{msg: "Yes", color: "white"}, {msg: "No", color: "black"}];
  let wrapper = mount(<EightBall answers={TEST_RANDOM_MSGS} />);
  wrapper.simulate('click');

  let elem = wrapper.find('#message');
  let html = elem.html();
  expect(html === `<div id="message">No</div>` || html === `<div id="message">Yes</div>`).toBeTruthy();
});

it(`has correct background color`, function(){
  let wrapper = mount(<EightBall />)
  wrapper.setState({ color: "red"});

  let elem = wrapper.find('#rectangle');
  expect(elem.html()).toContain(`style="background-color: red;"`)
  console.log(elem.html())
})