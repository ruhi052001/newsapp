import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description,imageUrl,newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/02/11/1600x900/Turkey_1676087044843_1676087045074_1676087045074.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
