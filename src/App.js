import axios from "axios";
import Card from "./components/Card";
import "./App.scss";
import { useState, useEffect } from "react";
const url = "https://randomuser.me/api/";

const App = () => {
  const [user, setUser] = useState("");

  const users = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    users();
  }, []);
  return (
    <div>
      <div className="App">
        {user && <Card user={user} />}
      </div>
      <button className="button" onClick={users}>
        Random User
      </button>
    </div>
  );
};

export default App;
