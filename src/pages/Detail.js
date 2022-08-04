import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const Detail = () => {
  const { units } = useSelector((state) => state.units);
  const { id } = useParams();
  const [data, setData] = useState(units[id - 1]);

  return (
    <div className="detail">
      <ul>
        {Object.entries(data).map(([key, value] = entry, index) => {
          if (key === "cost" && value) {
            return (
              <>
                {value.Wood && (
                  <li>
                    <div className="key">Wood</div>
                    <div className="value">{value.Wood}</div>
                  </li>
                )}
                {value.Food && (
                  <li>
                    <div className="key">Food</div>
                    <div className="value">{value.Food}</div>
                  </li>
                )}
                {value.Gold && (
                  <li>
                    <div className="key">Gold</div>
                    <div className="value">{value.Gold}</div>
                  </li>
                )}
              </>
            );
          }
          return (
            <li key={index}>
              <div className="key">{key}</div>
              <div className="value">{value}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Detail;
