import React from 'react'
import Navbar from'./components/Navbar/Navbar';
import HotelList from './components/HotelList'
import './App.scss';


function App(){
  return (
    <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmFpcm9iaSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100%'
    }}>
    

      <div className="app">
          <Navbar />
          <HotelList/>
        </div>

    </div>
  );
}

export default App;