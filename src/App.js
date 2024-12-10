
import './App.css';
import CustomButton from './button';

import Footer from './Footer';
import SignUp from './signup';
function App() {
  
  return (
    <div className="App">
      <header>
        <img src='/logo.png' alt='blip'/>
        <CustomButton width="200px" height="60px" text="Contact" />
      </header>
      <img src="/logo-2.png" alt="logo" style={{justifySelf: "center", marginBottom: "20px"}} />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
