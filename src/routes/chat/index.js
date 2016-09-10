import { injectReducer } from '../../store/reducers';
import { reducer } from './reducers';
import ChatContainer from './containers/ChatContainer';

export default store => ({
  path: 'chat',
  getComponent(nextState, cb) {
    injectReducer(store, { key: 'chat', reducer });
    cb(null, ChatContainer);
  }
});
