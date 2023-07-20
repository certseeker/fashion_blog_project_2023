const NavBar = () =>{

  return(
    <div className='nav' aria-label="Main Navigation" role="navigation">
      {/* <ul>
        <a href='/' className='home'>Home</a>
      </ul> */}
      <ul>
        <a href="/NavPages/Womens">Women's</a>
      </ul>
      <ul>
        <a href="/NavPages/Mens">Men's</a>
      </ul>
      <ul>
        <a href="/NavPages/OnTheStreet">On The Street</a>
      </ul>
      <ul>
        <a href="/NavPages/TheCatwalk">The Catwalk</a>
      </ul>
      <ul>
        <a href="/NavPages/AdWatch">AdWatch</a>
      </ul>
      <ul>
      <a href="/NavPages/About">About</a>
      </ul>
    </div>
  )
}

export default NavBar; 