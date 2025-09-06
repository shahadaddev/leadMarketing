import logo from "../../../assets/logo/logo.jpeg";

const Navbar = () => {
  const navigation = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/", name: "About Us" },
    { id: 3, link: "/", name: "Our Works" },
    { id: 4, link: "/", name: "Services" },
    { id: 5, link: "/", name: "Team" },
    { id: 6, link: "/", name: "Career" },
    { id: 6, link: "/", name: "Contact" },
  ];

  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="">{navigation}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
