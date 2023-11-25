import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {
  render() {
    return (
      <div>
        <Newsitem title = "mytitle" description = "mydescription"></Newsitem>
        <Newsitem title = "mytitle" description = "mydescription"></Newsitem>
        <Newsitem title = "mytitle" description = "mydescription"></Newsitem>
        <Newsitem title = "mytitle" description = "mydescription"></Newsitem>
        <Newsitem title = "mytitle" description = "mydescription"></Newsitem>
        <Newsitem title = "mytitle" description = "mydescription"></Newsitem>
  
      </div>
    )
  }
}

export default News
