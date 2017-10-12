import React from 'react';
import ArticleList from '../ArticleList';
import ArticleItem from '../ArticleItem';
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

  ArticleItem.propTypes = {}; // to remove warning about propTypes in tests

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);

    expect(wrapper.getElement().props.children.length).toBe(2);
    expect(wrapper.find('ArticleItem').length).toBe(2);

    expect(wrapper).toMatchSnapshot();

  });

});
