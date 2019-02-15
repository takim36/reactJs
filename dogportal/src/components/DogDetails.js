import React, {Component} from 'react';
import * as strings from '../utils/constants';

class DogDetails extends Component {
  componentDidMount() {
    const {
      getRandomText,
      selectedBread,
      getBreadImage,
      breedPattern,
    } = this.props;

    getRandomText(selectedBread);
    getBreadImage(breedPattern, selectedBread);

  }

  render() {
    const {
      title,
      image,
      randomText,
    } = this.props;
    return (
      <div className="jumbotron">
          <h2 className="pb-3 text-uppercase">{title}</h2>
          {image ?
            (<img className="card-img-top pb-3"  src={image} alt={title} title={title}/>) :
            <div className="body pb-3">{strings.LOADING}</div>}
          <div>
            {randomText ?
              <div className="body pb-3">{randomText}</div> :
              <div className="body pb-3">{strings.LOADING}</div>}
          </div>
        </div>
    );
  }
}

export default DogDetails;
