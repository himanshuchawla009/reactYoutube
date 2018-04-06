import React,{Component} from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'
const API_KEY = "AIzaSyAoiOxs5RdVUn8Oz5zB3GpWsie0uvMvk28";
class App extends Component{
    constructor(props){ 
        super(props)
        this.state={
            videos : [],
            selectedVideo: null,
            term:"rajnikant"


           
        }
        
       this.videoSearch(this.state.term);

    }
    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(data) => {
            console.log(data)
            this.setState({videos:data})
            this.setState({selectedVideo:this.state.videos[0]})
            
            
        })
    }


    render(){
        const videoSearch = _.debounce((term) =>{
            return this.videoSearch(term)

        },300)

    
            return (
                <div className ="row">
                 <SearchBar onTermChange = {(term)=>{this.videoSearch(term)}}/>
                 <div  className="col-md-8 ">
                 <VideoDetail  
                 VideoSelected ={this.state.selectedVideo}/>
                 </div>
                 <div className="col-md-4">
                 <VideoList Videos = {this.state.videos}
                 onVideoSelect={(video)=>
                    {this.setState({selectedVideo : video})}}/>
                 </div>
            
                </div>


            )
        
    }

}

ReactDom.render(<App/>,document.querySelector('.container'));