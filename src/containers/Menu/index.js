/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

// defines a function to set the hash (ancre/ancrage) in the URL
const setHash = (hash) => {
  // modifies the hash in the URL of the page
  window.document.location.hash = hash;
};

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services" onClick={() => setHash("#services")}>Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations" onClick={() => setHash("#realisations")}>Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe" onClick={() => setHash("#team")}>Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => setHash("#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
