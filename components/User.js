import React from "react";
const user = (props)=>(
    <div>
        <h1>{props.name}</h1>
        <p>Age is {props.age}</p>
        <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </div>
)

export default user;