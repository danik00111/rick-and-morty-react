import './Landing.css';

const Landing =()=> (<>
  <div className="landing">
    <div className="landing-shadow"/>
    <div className="landing-images">
      <img className="landingimg-main" src="src/assets/landing1.png" alt="Rick and Morty, standing atop their space cruiser, holding futuristic guns in their hands."/>
      <img className="landingimg-logo" src="src/assets/rnm-logo.png" alt='"RICK AND MORTY"'/>
      <img className="landingimg-particles" src="src/assets/particles.png" alt="Particles"/>
    </div>
    <div className="landing-text">
      If you're a fan of Rick and Morty, you don't want to miss out on our app!
      <br/>
      Start exploring the endless possibilities of Rick and Morty!
    </div>
  </div>
</>);

export default Landing;