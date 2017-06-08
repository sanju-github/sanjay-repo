/*components are javascript code which produces html.
react is javascript library used to produce html. components(views) are snippets of code to produce html*/
//treat this as main file and all other files in components are subfiles.
import React,{ Component } from 'react';
import ReactDOM from  'react-dom';
import _ from 'lodash'; //library to delay the search and use debounce function.
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; //file path of Searchbar component.
import VideoList from './components/video_list'; //file path of VideoList component.
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDOZjEzZvpu7cwUFDelmkBy4__qIRgid38';// we need install npm package to work with this key npm install --save youtube-api-search

/*YTSearch ({key: API_KEY, term: 'surfboards'}, function(data){ //this is sample youtube api search data.
    console.log(data);
});*/

//Step 1
//Create a new component. This component should product some html.

/*const App = function(){ //This is class in ES5
    //jsx code
    return <div> Hi!</div>; 
}*/

//in main index.js we are rendering SearchBar component. Below App is base component. Here App is functional component because is doesn't have concept of state yet. only class based components have state. here functional component App is containing class based component SearchBar.

/*
here App is main component and all other searbar,video_list,video_detail,video_list_item are subcomponents. in react data flow downwards means from main component to subcomponents. So the youtube api response call should be in main component so that it will be available for all.
*/
/*
This is functional component and to work with state we need to convert it to class component.

const App = () =>
{
    return (
        
        <div>
        <SearchBar /> 
        </div>
    );
}*/
//class component to work with state. we have changed import React from 'react'; to import React,{ Component } from 'react';
class App extends Component {
    
    constructor(props){
        super(props);
        this.state = { 
          videos: [],
          selectedVideo: null
        
        }; //any name and empty array of videos as initial state.
        /*YTSearch ({key: API_KEY, term: 'Nike'},(videos) => { //here videos name can be any name.
        //console.log(videos);
            //this.setState({videos: videos}); when ever we have same key and value names. We can write as below.
            this.setState({ 
            videos:videos,
            selectedVideo: videos[0] //to avoid null   
                          
         }); // new state.
        });*/
        
        this.videoSearch('Nike');
    }
    
    videoSearch(term){
      YTSearch ({key: API_KEY, term: term},(videos) => { //here videos name can be any name.
        //console.log(videos);
            //this.setState({videos: videos}); when ever we have same key and value names. We can write as below.
            this.setState({ 
            videos:videos,
            selectedVideo: videos[0] //to avoid null   
                          
         }); // new state.
        });  
    }
   /*
   1.videos from App component to VideoList component. <VideoList videos={this.state.videos} /> 
   2. in class based components props are available anywhere  as this.props
   
   */
    
    render(){
        
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300 ) ;
        
        return (
        <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
         onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} /> 
        </div>
    );
        
    }
    
}



/*
babel converts jsx code to ES5 compatable.
http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=react%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&experimental=false&loose=false&spec=false&code=const%20App%20%3D%20function()%7B%0A%20%20%20%20%2F%2Fjsx%20code%0A%20%20%20%20return%20%3Cdiv%3E%20Hi!%3C%2Fdiv%3E%3B%20%0A%7D&playground=true

const App = function () {
    //jsx code
    return React.createElement(
        "div",
        null,
        " Hi!"
    );
};*/



//Step 2
// Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //to work this statement we need import React from 'react'; and import ReactDOM from  'react-dom'; and we have to instantiate the class "App" like <App />  or <App></App>.And mention where to render document.querySelector('.container')
//always one component per file.


