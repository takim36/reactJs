import React , { Component } from 'react';
import reactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyDczr7LJX69-tVnV85kcabGDGguBeYnQHs';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { videos: [], selectedVideo: {}};
    this.videoSearch('tennis');
  }

  videoSearch = (query) => {
    YTSearch({key : API_KEY , term:query},(videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  };

  videoOnSelect = (video)  => {
      this.setState({selectedVideo: video});
 };

  render() {
    const videoSearch = _.debounce((query) =>{this.videoSearch(query)},1000);
    return (<div>
      <SearchBar videoSearch={videoSearch} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        videoOnSelect={this.videoOnSelect}
        videos ={this.state.videos} />
    </div>);
  }
}

reactDOM.render(<App/>,document.querySelector('.container'));