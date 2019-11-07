import React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';
import TabBarIcon from '../TabBarIcon';

it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});

describe('<TabBarIcon /> link', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TabBarIcon name='link' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<TabBarIcon /> home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TabBarIcon name='home' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});