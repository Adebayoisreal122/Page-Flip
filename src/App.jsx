import React from 'react'
import Portfolio from './components/Portfolio'
import BgTexture from './assets/wooden.webp'
const App = () => {

  const BgTextureStyle = {
    backgroundImage: `url(${BgTexture})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1
  };
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={BgTextureStyle}>
      <Portfolio />
    </div>
  )
}

export default App
