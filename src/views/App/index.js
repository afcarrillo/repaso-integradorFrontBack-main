import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get("http://localhost:1337/api")
      .then((response) => response.data)
      .then((data) => console.log("This is your data: ", data));
  }, []);

  return <div>Hello world</div>;
};

export default App;
