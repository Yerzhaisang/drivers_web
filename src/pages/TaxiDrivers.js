import React from "react";
import { useState, useEffect } from "react";

const TaxiDrivers = () => {
  const [data, setData] = useState(null);

  // Component Did mount
  useEffect(() => {
    fetch("https://ergast.com/api/f1/drivers.json?limit=100")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // Component lifecycle
  console.log(data && data.MRData.DriverTable.Drivers);

  // Component mount
  return (
    <>
      <div>This is TaxiDrivers page</div>
      {data &&
        data.MRData.DriverTable.Drivers.map((item) => {
          return (
            <a href={item.url}>
              <p key={item.driverId}>{item.givenName}</p>
            </a>
          );
        })}
    </>
  );
};

export default TaxiDrivers;
