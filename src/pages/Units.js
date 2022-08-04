import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import "../App.scss";
import Navbar from "../components/Navbar";
import { selectUnit } from "../rxutils/actions/units";

const Units = () => {
  const { units, loading } = useSelector((state) => state.units);
  const [wood, setWood] = useState({
    name: "Wood",
    value: 0,
    isChecked: false,
  });
  const [food, setFood] = useState({
    name: "Food",
    value: 0,
    isChecked: false,
  });
  const [gold, setGold] = useState({
    name: "Gold",
    value: 0,
    isChecked: false,
  });
  const [ageType, setAgeType] = useState("All");
  const [filteredData, setFilteredData] = useState(units);

  if (!units) {
    return <div>Loading...!</div>;
  }

  const filterAge = (string) => {
    document.getElementById(ageType).classList.toggle("active");
    document.getElementById(string).classList.toggle("active");
    setAgeType(string);
  };

  useMemo(() => {
    setFilteredData(units);
    if (wood.isChecked) {
      setFilteredData((data) =>
        data.filter((unit) => {
          if (unit.cost) return unit.cost.Wood >= wood.value;
        })
      );
    }
    if (food.isChecked) {
      setFilteredData((data) =>
        data.filter((unit) => {
          if (unit.cost) return unit.cost.Food >= food.value;
        })
      );
    }
    if (gold.isChecked) {
      setFilteredData((data) =>
        data.filter((unit) => {
          if (unit.cost) return unit.cost.Gold >= gold.value;
        })
      );
    }
    setFilteredData((data) =>
      data.filter((unit) => {
        if (ageType === "All") return true;
        else {
          return unit.age === ageType;
        }
      })
    );
  }, [wood, food, gold, ageType]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="ages">
          <div>Ages</div>
          <ul>
            <li id="All" className="active" onClick={() => filterAge("All")}>
              All
            </li>
            <li id="Dark" onClick={() => filterAge("Dark")}>
              Dark
            </li>
            <li id="Feudal" onClick={() => filterAge("Feudal")}>
              Feudal
            </li>
            <li id="Castle" onClick={() => filterAge("Castle")}>
              Castle
            </li>
            <li id="Imperial" onClick={() => filterAge("Imperial")}>
              Imperial
            </li>
          </ul>
        </div>
        <div className="costs">
          <div className="costs-title">Costs</div>
          <ul>
            <li>
              <input
                type="checkbox"
                value={wood.isChecked}
                onChange={(e) => {
                  setWood({ ...wood, isChecked: e.target.checked });
                }}
              />
              <div>{wood.name}</div>
              <div className="range-container">
                <div>{wood.value}</div>
                <input
                  disabled={!wood.isChecked}
                  max={200}
                  type="range"
                  value={wood.value}
                  onChange={(e) => {
                    setWood({ ...wood, value: parseInt(e.target.value) });
                  }}
                />
              </div>
              <div>0-200</div>
            </li>
            <li>
              <input
                type="checkbox"
                value={food.isChecked}
                onChange={(e) => {
                  setFood({ ...food, isChecked: e.target.checked });
                }}
              />
              <div>{food.name}</div>
              <div className="range-container">
                <div>{food.value}</div>
                <input
                  disabled={!food.isChecked}
                  max={200}
                  type="range"
                  value={food.value}
                  onChange={(e) => {
                    setFood({ ...food, value: parseInt(e.target.value) });
                  }}
                />
              </div>
              <div>0-200</div>
            </li>
            <li>
              <input
                type="checkbox"
                value={gold.isChecked}
                onChange={(e) => {
                  setGold({ ...gold, isChecked: e.target.checked });
                }}
              />
              <div>{gold.name}</div>
              <div className="range-container">
                <div>{gold.value}</div>
                <input
                  disabled={!gold.isChecked}
                  max={200}
                  type="range"
                  value={gold.value}
                  onChange={(e) => {
                    setGold({ ...gold, value: parseInt(e.target.value) });
                  }}
                />
              </div>
              <div>0-200</div>
            </li>
          </ul>
        </div>
        <div className="columns">
          <ul>
            <li>id</li>
            <li>name</li>
            <li>age</li>
            <li>costs</li>
          </ul>
        </div>
        <div className="units">
          <ul className="units-list">
            {filteredData.map((unit) => (
              <li key={unit.id}>
                <Link
                  to={{ pathname: `/detail/${unit.id}`, state: { data: unit } }}
                  className="link"
                >
                  <ul className="values-list">
                    <li>{unit.id}</li>
                    <li>{unit.name}</li>
                    <li>{unit.age}</li>
                    <li>
                      {unit.cost
                        ? Object.entries(unit.cost).map(
                            ([key, value] = entry, index) => (
                              <div key={index}>
                                {key} : {value},
                              </div>
                            )
                          )
                        : "-"}
                    </li>
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Units;
