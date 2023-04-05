import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
     let {title,description,imageurl,newsUrl} = this.props;
    // console.log(newsUrl); 
    return (
        <div className="card" >
        <img src={!imageurl?"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80":imageurl}
        className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a rel="noreferrer" href= {newsUrl} target ="_blank"  className="btn btn-primary" >read more"</a>
        </div>
      </div>
    )
  }
}