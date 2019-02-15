import { connect } from 'react-redux';
import {
  getDogs,
  getRandomText,
  getBreadImage,
} from '../actions';
import _ from 'lodash';
import App from '../components/app';


const mapStateToProps = (state) => {
  //console.log(state.dogs);
  const  dogs = _.map(state.dogs.all, (val,breed) => ({ subBreed:val,breed }));

  return {
    dogs,
    imageInfo: state.dogs.imageInfo,
    randomTextInfo: state.dogs.randomTextInfo,
  };
};

const mapDispatchToProps = dispatch => ({
  getDogs: () => dispatch(getDogs()),
  getBreadImage: (breedPattern,selectedBread) => dispatch(getBreadImage(breedPattern,selectedBread)),
  getRandomText: (selectedBread) => dispatch(getRandomText(selectedBread)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
