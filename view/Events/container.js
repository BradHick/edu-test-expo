import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  token: state.auth.token,
  events: state.event.events,
  errors: state.event.errors,
  loading: state.event.loading,
  hasMoreEvents: state.event.hasMoreEvents
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: dispatch.event.fetchEvents,
  logout: dispatch.auth.logout
});

export default component => connect(mapStateToProps,mapDispatchToProps)(component);