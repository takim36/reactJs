import React from 'react';
import PropTypes from 'prop-types';
import DogDetails from './DogDetails';

const DogListItem = (props) => {
  const {
    dog,
    getRandomText,
    getBreadImage,
    imageInfo,
    randomTextInfo,
  } = props;
  const {subBreed, breed } = dog;
  return (
    <div className="col-md-12">
      {subBreed.length?
        subBreed.map((subBreed,key) => <DogDetails
            key={key}
            breedPattern={`${dog.breed}/${subBreed}`}
            getBreadImage={getBreadImage}
            selectedBread={`${dog.breed}-${subBreed}`}
            title={ `${dog.breed} - ${subBreed}`}
            getRandomText={getRandomText}
            image={imageInfo[`${dog.breed}-${subBreed}`]}
            randomText={randomTextInfo[`${dog.breed}-${subBreed}`]}
          />)
        :<DogDetails
          selectedBread={breed}
          breedPattern={`${breed}`}
          getBreadImage={getBreadImage}
          getRandomText={getRandomText}
          image={imageInfo[`${breed}`]}
          randomText={randomTextInfo[`${breed}`]}
          title={breed}  />}
    </div>
  );
};

DogListItem.propTypes = {
  dog: PropTypes.shape({}),
};

DogListItem.defaultProps = {
  dog: {},
};

export default DogListItem;
