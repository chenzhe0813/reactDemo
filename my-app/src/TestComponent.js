import React from 'react';
function Avatar(props) {
  return (
  	<img classNa="Avatar"
  		src={props.author.avatarUrl}
        alt={props.author.name}
  	/>
  );
}
function UserInfo(props) {
  return (
      <div className="UserInfo">
        <Avatar author={props.author}/>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
  );
}
var testComponent = function(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}
export default testComponent;