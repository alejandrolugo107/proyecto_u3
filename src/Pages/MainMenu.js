import Altas from '../Components/Altas';
import Navbar from '../Components/Navbar'

function MainMenu({ autorized }) {
    
    return (
        <div>
            <Navbar></Navbar>
            <Altas/>
        </div>
    );
}

export default MainMenu;