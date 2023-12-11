import React, { useEffect, useState } from "react";
import SinglePerson from "./SinglePerson";
import { InfinitySpin } from "react-loader-spinner";

const FetchData = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = "https://api.github.com/users";

  const fetchUser = async () => {
    setLoading(true);
    const response = await fetch(api);
    const data = await response.json();
    setPeople(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {people.map((person) => {
            return (
              <>
                <SinglePerson {...person} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchData;
