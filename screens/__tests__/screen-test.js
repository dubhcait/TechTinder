import React from 'react';
import renderer from 'react-test-renderer';

import HomeScreen from '../HomeScreen';
import LinkScreen from '../LinksScreen';



describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<LinkScreen />`', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LinkScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});