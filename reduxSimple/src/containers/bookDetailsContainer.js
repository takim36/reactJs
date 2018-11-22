import { connect } from 'react-redux';
import BookDetails from '../components/bookDetails';

const mapStateToProps = (state) => {
  return {
    book: state.activeBook,
  };
};

export default connect(mapStateToProps)(BookDetails);