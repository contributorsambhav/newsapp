import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {
  render() {
    return (
      <div>
        <h2>Top Headlines</h2>
        <div className="mx-auto row">

        <div className="col-md-4">
        <Newsitem title = "mytitle" description = "mydescription"></Newsitem>
        </div>
        <div className="col-md-4">
        <Newsitem title = "mytitle" description = "mydescription"></Newsitem>
        </div>
        <div className="col-md-4">
        <Newsitem title = "mytitle" description = "mydescription"></Newsitem>
        </div>
        
        </div>
      </div>
    )
  }
}

export default News
