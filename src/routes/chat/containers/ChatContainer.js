import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../actions';
import ChatView from '../components/ChatView';

const mapStateToProps = state => ({
  isLoading: state.chat.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatView);
