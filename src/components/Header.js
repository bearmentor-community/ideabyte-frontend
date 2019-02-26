import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>LOGO</li>
          <li>Register</li>
          <li>Login</li>
        </nav>

        <h1>Share and improve your ideas with the world</h1>

        <div>
          <button>Get Started</button>
          <button>Explore Ideas</button>
        </div>
      </div>
    )
  }
}
