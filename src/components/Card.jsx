import profilePic from '../assets/profile.jpg'
import '../css/Card.css'

function Card() {
  return (
    <div className="card">
      <img className='card-image' src={profilePic} alt="profile picture" />
      <h2 className='card-title'>Sergio's Code</h2>
      <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora minima similique pariatur maxime consequatur ipsa cupiditate voluptates reprehenderit, aliquam sit doloribus qui voluptate mollitia quisquam eveniet sequi quo ducimus. Quis.</p>
    </div>
  );
}

export default Card