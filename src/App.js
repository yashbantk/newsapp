
import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter,
  Route,

  Routes,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 100;
  apiKey =
  state ={
    progress :0
  }
  setProgress =(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <BrowserRouter>
        <div>

          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />

          <Routes>
            <Route path="/" element={<News setProgress = {this.setProgress} apiKey ={this.apiKey}  key ="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/sports" element={<News setProgress = {this.setProgress} apiKey ={this.apiKey}  key ="sports" pageSize={5} country="in" category="sports" />} />
            <Route path="/business" element={<News setProgress = {this.setProgress} apiKey ={this.apiKey}  key ="business" pageSize={5} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress = {this.setProgress} apiKey ={this.apiKey}  key ="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route path="/health" element={<News setProgress = {this.setProgress} apiKey ={this.apiKey}  key="health"pageSize={5} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress = {this.setProgress} apiKey ={this.apiKey}  key="science" pageSize={5} country="in" category="science" />} />
            <Route path="/technology" element={<News setProgress = {this.setProgress} apiKey ={this.apiKey}  key ="technology" pageSize={5} country="in" category="technology" />} />

          </Routes>
        </div>
      </BrowserRouter>


    )
  }
}
