import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  token: state.auth.token,
  errors: state.auth.errors,
  loading: state.auth.loading
});

const mapDispatchToProps = (dispatch) => ({
  login: dispatch.auth.login,
  logout: dispatch.auth.logout
});

export default component => connect(mapStateToProps,mapDispatchToProps)(component);