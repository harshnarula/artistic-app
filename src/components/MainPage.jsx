import MainCard from './MainCard'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ProfileCard from './ProfileCard'
import PaintingCard  from './PaintingCard'
import '../css/mainpage.css'

export default function MainPage(){
    return(
    <>
    <Navbar/>
    <div className='row'>
        <Sidebar/>
        <MainCard/>
        <ProfileCard/>
    </div>
    <PaintingCard/>
    
    </>
    )
    
}