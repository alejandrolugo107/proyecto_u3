import navbarLogo from '../../src/navbarlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-ligh mb-4">

                <div className="container-fluid">

                    <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <a className="navbar-brand mt-2 mt-lg-0" href="">
                        <img
                        src={navbarLogo}
                        height="30"
                        alt="Logo"
                        loading="lazy"
                        />
                    </a>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" href="">Altas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="">Modificaciones</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="">Reportes</a>
                        </li>
                    </ul>

                    </div>
                

                    <div className="d-flex align-items-center">


                    <div className="dropdown">
                        <a
                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                        href=""
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                        <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                        >
                        <li>
                            <a className="dropdown-item" href="">Some news</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="">Another news</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="">Something else here</a>
                        </li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href=""
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                        </a>
                        <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                        >
                        <li>
                            <a className="dropdown-item" href="">My profile</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="">Settings</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="">Logout</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;