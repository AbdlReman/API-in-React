import React from "react";

const SinglePerson = ({ avatar_url, login, organizations_url }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card p-3 rounded-o">
          <img src={avatar_url} />
          <h6>{login}</h6>
          <a href="">{organizations_url}</a>
        </div>
      </div>
    </>
  );
};

export default SinglePerson;
