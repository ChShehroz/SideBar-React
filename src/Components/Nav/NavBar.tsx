import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavBarProps {
  handleSidebarToggle: () => void;
}

const NavBar = ({ handleSidebarToggle }: NavBarProps) => {
  return (
    <div className="px-0 py-2 pt-5 mx-6 mt-6 max-h-screen flex flex-wrap items-center justify-between">
      <div className="hover:cursor-pointer flex items-center">
        <FontAwesomeIcon onClick={() => handleSidebarToggle()} icon={faBars} />
      </div>
    </div>
  );
};

export default NavBar;
