import FamilydeluxInfo from './FamilydeluxInfo'
import Famdlx from '../images/room-12.jpeg'
function FamilyDelux() {
  return (
    <div className="single-room">
        <img className="single-room-images" src={Famdlx}/>
        <FamilydeluxInfo/>
      </div>
  )
}

export default FamilyDelux