import React, { useState } from "react";
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = () => {};

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a User"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="userChat">
        <img
          src="https://media.licdn.com/dms/image/D5635AQFOcceVKb3VZg/profile-framedphoto-shrink_400_400/0/1675297581656?e=1676070000&v=beta&t=gWh3-8326aoU4UGL3O0mRBcVO3y8NnnQWQAGTORVL6o"
          alt=""
        />
        <div className="userChatInfo">
          <span>Mary Nghiem</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
