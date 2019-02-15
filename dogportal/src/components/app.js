import React, {Component} from 'react';
import Header from './common/Header';
import CustomButton from './common/CustomButton';
import DogList from './DogList';
import * as strings from '../utils/constants';
import _ from 'lodash';

class App extends Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    const {
      getDogs,
    } = this.props;
    getDogs();
  }

  componentDidUpdate(prevProps) {
    const { dogs } = this.props;
    if (JSON.stringify(dogs) !== JSON.stringify(prevProps.dogs)) {
      this.setState({ dogs });
    }
  }

  sortBy= (order)  => {
    const {
      dogs,
    } = this.state;
    this.setState({dogs: _.orderBy(dogs, ['breed'],[order])})

  }

  render() {
    const {
      getRandomText,
      imageInfo,
      randomTextInfo,
      getBreadImage,
    } = this.props;

    const {
      dogs,
    } = this.state;

    return (
      <main role="main">
        <Header headerText={strings.WELCOME}/>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="btn-toolbar btn-sm pb-3" role="group">
              <CustomButton buttonClass="btn btn-secondary mr-3" buttonText="ASC" onClick={() => this.sortBy('asc')}/>
              <CustomButton buttonClass="btn btn-secondary" buttonText="DESC" onClick={() => this.sortBy('desc')}/>
            </div>
            <div className="row">
              {!dogs ? (<div>{strings.LOADING}</div>) :
                (<DogList dogs={dogs}
                          imageInfo={imageInfo}
                          randomTextInfo={randomTextInfo}
                          getRandomText={getRandomText}
                          getBreadImage={getBreadImage} />)}
            </div>
          </div>
        </div>
        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="#">{strings.BACK_TO_TOP}</a>
            </p>
            <p>{strings.FOOTER_TEXT}</p>
          </div>
        </footer>
      </main>
    );
  }
}

export default App;
