import React, { Component } from 'react'
import Newsitems from './Newsitems.js'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'sports',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0

    }
  }
  async updatenew() {
    this.props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62463bfdf14247dcba350476872cac3b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    this.props.setProgress(100);

  }
  async componentDidMount() {
    this.updatenew();
  }

  // handlepreviousclick = async () => {

  //   this.setState({ page: this.state.page - 1 })
  //   this.updatenew();

  // }
  // handlenextclick = async () => {

  //   this.setState({ page: this.state.page + 1 })
  //   this.updatenew();



  // }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62463bfdf14247dcba350476872cac3b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })

  }

  render() {
    return (
     <>
        <h2>bantknews</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          style={{ display: 'flex', flexDirection: 'column-reverse' , overflow:'none'}} //To put endMessage and loader to the top.
          // inverse={true} //
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
          
         
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              // console.log(element.url);
              return <div className="col-md-4" key={element.url}>
                <Newsitems title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
            {/* //previous next */}
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlepreviousclick}>&larr; previous</button>
            <button disabled={this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handlenextclick}>next &larr;</button>
            </div> */}




          </div> 
          </div>
        </InfiniteScroll>
        </>


    )
  }
}
