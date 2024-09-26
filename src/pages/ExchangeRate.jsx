import React, { useEffect, useState } from "react";
const ExchangeRate = () => {
  const { balance, getData, setStartDate, setEndDate, startDate, endDate } =

  useEffect(() => {
    const getBalanceData = async () => {
      try {
        const result = await getData();
        // setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    getBalanceData();
  }, []);

  return (
    <div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
      </div>
    </div>
  );
};

export default ExchangeRate;
