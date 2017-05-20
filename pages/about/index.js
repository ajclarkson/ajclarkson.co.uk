import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import include from 'underscore.string/include'
import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import ajclarkson from './ajclarkson.jpg'
import Helmet from 'react-helmet'
import { config } from 'config'


class About extends React.Component {
  render () {


    return (
      <div>
      <Helmet
        title={"About | " + config.blogTitle}
        meta={[
          {"name": "description", "content": "Developer with Ocado Technology, coffee nerd, ocassional blogger and cyclist"},
          {"name": "keywords", "content": "technology, blog"}
        ]}
      />
      <h2 className="page-title"><i className="fa fa-arrow-right "></i> About Me</h2>
        <img src={ajclarkson} className="bio-image" alt="Adam Clarkson | Software Developer"/><p>I'm a developer based in the UK with <Link to="http://ocadotechnology.com">Ocado Technology</Link>, and I spend my days working on the webshop side of the new Ocado Smart Platform.
        My focus is on devops and making releases awesome. I'm a big fan of GitlabCI, and I'm currently writing lots of custom tooling to support deployments of a large scale micro service architecture
        using it. It's great because I get to work with a modern Java/Node AWS stack, and write integrations for things like slack.</p>
        <p>In 2015 I submitted my Ph.D Thesis in Computer Science, on the topic of delivering content into Augmented Reality environments (if you're really keen, you can <Link to="http://etheses.dur.ac.uk/11332/">read it here</Link>).
        That gave me a great opportunity to work with some really exciting technology and spend a lot of time wearing head mounted displays (like a terminator).</p>
        <p>When I'm not working I try to find time to follow my interest in design, and find excuses to make things that look nice. I'm also pretty nerdy about coffee and have more
        methods of making it in the kitchen than space will reasonably allow.</p>


          <h3>About This Site</h3>
          <p>This site is written using React and webpack, built using Gatsby, and hosted on Gitlab Pages. It's a really nice flexible way of working, and closely resembles the workflow that I'd have for writing a front end app. Which is a refreshing change when it comes to static sites.</p>
          <p>It is always a work in progress, and I can't guarantee it will look the same from one visit to the next! Because all of my content is in markdown though, it means I can flip things around really easily and everything just works (in theory).</p>


      </div>
    )
  }
}

export default About

exports.data = {
  title: "About Me",
}
