import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

const Header = withRouter(({ location }) => {
  console.log(location)
  const [isHome, setIsHome] = useState(false);
  const [header, setHeader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 100) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeHeader)

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, [])

  return (
    <div className={isHome && header ? 'header fixed-header ' : 'header'}>
      <a href="/">
        <img src="/pokemon_logo.png" alt="logo" style={{width: '150px'}}/>
      </a>
      <div className="menu">
        <p><a href="/">POKEMONS</a></p>
        <p><a href="/bag">MY BAG</a></p>
      </div>
    </div>
  )
})

export default withRouter(Header)
