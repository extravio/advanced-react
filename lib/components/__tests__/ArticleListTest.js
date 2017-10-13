import React from 'react';
import ArticleList from '../ArticleList';
import { shallow } from 'enzyme';
import 'enzyme-react-16-adapter-setup';
import 'babel-polyfill';



describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);

    expect(wrapper.getElement().props.children.length).toBe(2);
    expect(wrapper.find('ArticleItemContainer').length).toBe(2);

    expect(wrapper).toMatchSnapshot();

  });

});
