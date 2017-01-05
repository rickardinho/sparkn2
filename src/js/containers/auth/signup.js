import { connect } from 'react-redux';
import Signup from '../../components/auth/signup';
import { signupUser } from '../../actions/signup';


const mapDispatchToProps = () => ({
  handleSubmitForm: ({ firstname, surname, email, password }, dispatch) => {
    dispatch(signupUser(firstname, surname, email, password));
  }
});

export default connect(mapDispatchToProps)(Signup);
