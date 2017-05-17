import React from 'react'

const Footer = () => {
  return (
    <footer >
      <div className="flexcontainer">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <ul>
          <li>
            <a href="https://github.com/saralein">
              <i className="fa fa-github" aria-hidden="true" title="Github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/smtrujillo/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <p>&copy; 2017 Sara Trujillo</p>
      </div>

      <a className="align-right" href="#top">
        <i className="fa fa-angle-up fa-3x" aria-hidden="true"></i>
      </a>
    </footer>
  )
}

export default Footer
