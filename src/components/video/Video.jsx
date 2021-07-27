// import light from './light.mp4'; 
import light from './light2.mp4'; 


const Video = () => (
  <video className="light-video" autoPlay muted>
        <source src={light} type="video/mp4" />
      </video>
) 

export default Video; 