import React from "react";
import { Circle } from "rc-progress";
import "./BmiDisplay.css"

export default function BmiDisplay({ finalResult, BmiPercentage, review }) {
    return (
        <div className="rcProgress"
            style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                gap: "30px",
                height: "422px",
                alignItems: "center",
            }}
        >
            <h2>Your BMI Value :</h2>

            <div className="CircleDiv" style={{ position: "relative", width: "256px", height: "256px" }}>
                <Circle
                    trailWidth={10}
                    percent={BmiPercentage > 100 ? 100 : BmiPercentage}
                    strokeWidth={10}
                    strokeColor={finalResult < 18.5 ? "rgba(41, 170, 225, 1)" :
                        finalResult > 18.5 && finalResult < 24.9 ? "rgba(140, 198, 62, 1)" :
                            finalResult > 25 && finalResult < 29.9 ? "rgba(254, 218, 0, 1)" :
                                finalResult > 30 && finalResult < 34.9 ? "rgba(248, 147, 31, 1)" :
                                    finalResult > 35 && finalResult < 39.9 ? "rgba(217, 130, 27, 1)" :
                                        finalResult >= 40 ? "rgba(254, 0, 0, 1)" :
                                            "green"
                    }

                    style={{
                        width: "100%", height: "100%", boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
                        borderRadius: '50%',
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "45px",
                        fontWeight: "bold",
                        color: "#333",
                    }}
                >
                    {finalResult}
                </div>
                <span style={{
                    display: 'inline-block',
                    marginTop: '35px',
                    fontSize: '24px',
                    fontWeight: 'bolder',
                    color:
                        finalResult < 18.5 ? "rgba(41, 170, 225, 1)" :
                            finalResult > 18.5 && finalResult < 24.9 ? "rgba(140, 198, 62, 1)" :
                                finalResult > 25 && finalResult < 29.9 ? "rgba(254, 218, 0, 1)" :
                                    finalResult > 30 && finalResult < 34.9 ? "rgba(248, 147, 31, 1)" :
                                        finalResult > 35 && finalResult < 39.9 ? "rgba(217, 130, 27, 1)" :
                                            finalResult >= 40 ? "rgba(254, 0, 0, 1)" :
                                                "green",
                }}> {review}  </span>
            </div>
        </div>
    );
}
