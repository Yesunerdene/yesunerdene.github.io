import React from "react";
import config from "../config";

function Techlonogy() {
  return (
    <div className="my-card my-info">
      <p className="card-title">Technological background</p>
      {config?.technologies?.map((item) => (
        <div key={item?.language}>
          <p className="title text-medium">
            {item.language}
            {/* {item?.techs?.map((subItem) => (
              <span key={subItem} className="title">{` | ${subItem}`}</span>
            ))} */}
          </p>
          <p className="title">
            <div className="tech-row mt01">
              {/* {item.language} */}
              {item?.techs?.map((subItem) => (
                // <span key={subItem} className="title">{`${subItem} , `}</span>
                <div className="tech" key={subItem}>
                  <p className="techtitle">{subItem}</p>
                </div>
              ))}
            </div>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Techlonogy;
