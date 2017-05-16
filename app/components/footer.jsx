import React from 'react'

const Footer = () => {
  return (
    <footer>
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
    </footer>
  )
}

export default Footer
