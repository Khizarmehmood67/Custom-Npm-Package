import React, { useState } from 'react';
import { Header,Sidebar,SearchBar} from "custom-azure-project/dist";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
// import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
function App() {
  const items = [
    {
      icon: FaHome, // Assuming FaHome is imported from react-icons/fa
      text: "Home",
      link: "/home",
    },
    {
      icon: FaUser,
      text: "Profile",
      link: "/profile",
    },
    {
      icon: FaCog,
      text: "Settings",
      link: "/settings",
    },
    // Add more items as needed
  ];
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // Additional search logic if needed
  };
  return (
    <div className="App">
      <Header title="Microsoft Azure" user="Khizar@kodxsystem.com" />
      <Sidebar items={items} />
      <SearchBar
        searchValue={searchValue}
        handleChange={handleSearchChange}
      />
      <Profile/>
    </div>
  );
}

export default App;
