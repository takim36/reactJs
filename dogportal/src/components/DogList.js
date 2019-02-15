import React from 'react';
import PropTypes from 'prop-types';
import DogListItem from './DogListItem';

const DogList = (props) => {
  const {
    dogs,
    getRandomText,
    getBreadImage,
    imageInfo,
    randomTextInfo,
  } = props;
  return (
    <div className="col-md-12">
      {dogs.map(dog => <DogListItem
        key={dog.breed}
        dog={dog}
        getRandomText={getRandomText}
        imageInfo={imageInfo}
        randomTextInfo={randomTextInfo}
        getBreadImage={getBreadImage} />)}
    </div>
  );
};

DogList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.object),
};

DogList.defaultProps = {
  dogs: [],
};

export default DogList;
