import React, { useState } from "react";
import "../assets/Table.css";

const Table = ({ sales }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedSales = [...sales].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (typeof valueA === "string") {
      return sortConfig.direction === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else {
      return sortConfig.direction === "asc"
        ? valueA - valueB
        : valueB - valueA;
    }
  });

  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? " ▲" : " ▼";
    }
    return " ▲▼";
  };

  return (
    <div className="table-container">
      <table className="sales-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("weekEnding")}>
              Week Ending {renderSortIcon("weekEnding")}
            </th>
            <th onClick={() => handleSort("retailSales")}>
              Retail Sales {renderSortIcon("retailSales")}
            </th>
            <th onClick={() => handleSort("wholesaleSales")}>
              Wholesale Sales {renderSortIcon("wholesaleSales")}
            </th>
            <th onClick={() => handleSort("unitsSold")}>
              Units Sold {renderSortIcon("unitsSold")}
            </th>
            <th onClick={() => handleSort("retailerMargin")}>
              Retailer Margin {renderSortIcon("retailerMargin")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedSales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>${sale.retailSales.toLocaleString()}</td>
              <td>${sale.wholesaleSales.toLocaleString()}</td>
              <td>{sale.unitsSold.toLocaleString()}</td>
              <td>${sale.retailerMargin.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
