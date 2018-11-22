import { connect } from 'react-redux';
import BookList from '../components/bookList';
import { activeBook } from '../actions';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

// activeBook: (book) => dispatch(activeBook(book)),
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({activeBook}, dispatch);
}*/
const mapDispatchToProps = dispatch => ({
  activeBook: (book) => {
    dispatch(activeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);