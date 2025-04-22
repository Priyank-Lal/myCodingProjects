import React from "react";
import "./BmiTable.css";

const BmiTable = () => {
    const data = [
        { classification: "Underweight", range: "< 18.5", risk: "Increased" },
        { classification: "Normal Weight", range: "18.5 - 24.9", risk: "Least" },
        { classification: "Overweight", range: "25.0 - 29.9", risk: "Increased" },
        { classification: "Obese Class I", range: "30.0 - 34.9", risk: "High" },
        { classification: "Obese Class II", range: "35.0 - 39.9", risk: "Very High" },
        { classification: "Obese Class III", range: ">= 40.0", risk: "Extremely High" },
    ];

    return (
        <div className="table-container">
            <table className="bmi-table">
                <thead>
                    <tr>
                        <th>Classification</th>
                        <th>BMI Range (Kg/m²)</th>
                        <th className="Health">Risk of Developing Health Problems</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx}>
                            <td>{row.classification}</td>
                            <td>{row.range}</td>
                            <td className="Health">{row.risk}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BmiTable;
