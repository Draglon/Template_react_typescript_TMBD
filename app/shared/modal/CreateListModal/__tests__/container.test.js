import * as React from 'react';
import configureStore from 'redux-mock-store';
import { createListRequest } from '../../../../store/theMovieDB/myLists/actions';

import CreateListModalContainer from '../container';

describe('<CreateListModalContainer />', () => {
  const store = configureStore()({});
  store.dispatch = jest.fn();
  const wrapper = shallow(<CreateListModalContainer store={store} />);
  const container = wrapper.dive();
  const instance = container.instance();

  describe('showModal()', () => {
    it('should call showModal()', () => {
      instance.showModal();
      expect(container.state('modalVisible')).toEqual(true);
    });
  });

  describe('hideModal()', () => {
    it('should call hideModal()', () => {
      instance.hideModal();
      expect(container.state('modalVisible')).toEqual(false);
    });
  });

  describe('handleSubmit()', () => {
    it('should call handleSubmit()', () => {
      const values = { name: 'listname', description: 'description' };
      const actions = { setSubmitting: jest.fn() };
      instance.handleSubmit(values, actions);

      expect(actions.setSubmitting).toHaveBeenCalledWith(true);
      expect(store.dispatch).toHaveBeenCalledWith(
        createListRequest({ values, actions, hideModal: instance.hideModal }),
      );
    });
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
