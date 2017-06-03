import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Main } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  return (
    <div class="container main">
      <div id="my-tab-content" class="tab-content">
        <div class="tab-pane fade in active" id="home">
          <div class="row-fluid">
            <div class="title span1">
              <h2>Jimmy Ching M Chen</h2>
              <h3>Software Engineer</h3>
            </div>
            <div class="contact span1">
              <ul>
                <li>Irvine, CA</li>
                <li>chingmchen@gmail.com</li>
                <li>+1 (714) 603-3235</li>
              </ul>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span2"><h3>Skills</h3></div>
            <div class="span3">
              <ul class="span4">
                <li>Ruby on Rails, Python, C++, PHP, Javascript, Elixir, NodeJS, AngularJS, ReactJS</li>
              </ul>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span2"><h3>Experience</h3></div>
            <div class="span3">
              <h4>Spokeo, Software Developer</h4>
              <h5>March 2016- present</h5>
              <ul class="circle">
                <li>Modify KoaJS HTTP response component to increased cache performance by 40% (KoaJS, nodeJS).</li>
                <li>Improved automated backend unit test coverage for multiple microservices by 25% (Ruby on Rails).</li>
                <li>Oversee multiple development and expansion of Search Engine Optimization tools (Ruby on Rails).</li>
                <li>Created libraries to improve interactive efficiencies with  Amazon Web Services and internal microservices (Ruby).</li>
                <li>Redesign architecture of a key application to increase processing capability from 250,000 to 630,000 request per minute.</li>
                <li>Partnered with consumer and performance team lead in application architecture design.</li>
              </ul>
              <br></br>
              <h4>Broadbean Technology, Software Engineer</h4>
              <h5>May 2015 - Nov 2015</h5>
              <ul class="circle">
                <li>Developed and maintained frontend of SocialReferral application using AngularJS</li>
                <li>Expanded candidate database by enabling automated data exports from social media APIs with Cron</li>
                <li>Enhanced error handling by implementing backend unit testing and Test Driven Development</li>
                <li>Augmented backend MVC RESTful API functionality with Ruby on Rails, MongoDB architecture, and Grape</li>
                <li>Maintained Ubuntu Server</li>
              </ul>
              <br></br>
              <h4>D.R.McNatty & Associates, Full Stack Developer</h4>
              <h5>July 2013 - May 2015</h5>
              <ul class="circle">
                <li>Responsible for designing and developing highly distributed Ruby on Rails applications as dashboards</li>
                <li>Customize applications to enhance customer data in Oracle Primavera Contract Management and P6 using various tools such as Javascript, Ruby and Python, along with EmberJS, and Ruby on Rails Framework</li>
                <li>Setup and maintain Ubuntu Servers with capistrano and anisible scripts</li>
                <li>Develop and design Pentaho CDE Dashboard and Reports</li>
              </ul>
              <br></br>
              <h4>Innex Inc, Programming Intern</h4>
              <h5>July 2011 - January 2012</h5>
              <ul class="circle">
                <li>Developed email notification system using PHP, MsSQL, HTML, and CSS to inform customers when items are back in stock</li>
                <li>Generated Python and MsSQL scripts to translate customer orders to detailed Excel spreadsheets for itemization and storage locations</li>
              </ul>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span2"><h3>Education</h3></div>
            <div class="span3">
              <h4>University of California, Riverside</h4>
              <h5>Sept 2013</h5>
              <p>B.A., Economics</p>
              <p>Field of Study - Economics, Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
