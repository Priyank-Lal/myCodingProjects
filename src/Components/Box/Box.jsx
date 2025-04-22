import React, { use, useEffect, useState } from 'react'
import './Box.css'
import BmiDisplay from '../BmiDisplay/BmiDisplay'

const Box = ({ setBmi, setBmiPercent, setReview }) => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')


    const BmiCalc = (event) => {
        event.preventDefault();

        if (!weight || !height || !age || !gender) {
            return;
        }

        const Bmi = weight / (height * height);
        const finalBmi = parseFloat(Bmi.toFixed(2));
        const percentage = ((finalBmi - 1) * 100) / (40 - 1);

        setBmi(finalBmi);
        setBmiPercent(percentage);


        if (gender === "male" || gender === "female") {
            if (age <= 5) {
                if (Bmi < 14) {
                    setReview("Underweight for Age")
                } else if (Bmi < 17) { setReview("Healthy weight for Age") }
                else if (Bmi < 19) {
                    setReview("Overweight for Age")
                } else { setReview("Obese for Age") }
            } else if (age <= 10) {
                if (Bmi < 14.5) {
                    setReview("Underweight for Age")
                } else if (Bmi < 18) { setReview("Healthy weight for Age") }
                else if (Bmi < 20) {
                    setReview("Overweight for Age")
                } else {
                    setReview("Obese for Age")
                }
            } else {
                if (Bmi < 17) {
                    setReview("Underweight for Age")
                } else if (Bmi < 22) { setReview("Healthy weight for Age") }
                else if (Bmi < 24) {
                    setReview("Overweight for Age")
                } else {
                    setReview("Obese for Age")
                }
            }
        };
    }

    return (
        <>
            <div className="box">

                <div className="heading">
                    <span>BMI Calculator</span>
                </div>

                <form onSubmit={BmiCalc}>
                    <div className="inputInformationDiv">
                        <div className="weightInputDiv">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Weight</span>
                                <input type="number"
                                    inputMode="numeric"
                                    step="any"
                                    min="0" onChange={(e) => { setWeight(e.target.value) }} value={weight} required className="form-control no-spinner" placeholder="Enter Your weight in KG" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className="heightInputDiv">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Height</span>
                                <input type="number"
                                    inputMode="numeric"
                                    step="any"
                                    min="0" onChange={(e) => { setHeight(e.target.value) }} value={height} required className="form-control no-spinner" placeholder="Enter Your Height in meters" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className="ageInputDiv">
                            <div className="input-group mb-3">
                                <span style={{
                                    width: '72px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }} className="input-group-text" id="basic-addon1">Age</span>
                                <input type="number"
                                    inputMode="numeric"
                                    step="any"
                                    min="0" onChange={(e) => { setAge(e.target.value) }} value={age} required className="form-control no-spinner" placeholder="Enter Your Age" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className="genderInputDiv">
                            <span className="input-group-text" id="basic-addon1">Gender</span>
                            <div className='radioBox'>
                                <div className="radioInput">
                                    <div>
                                        <label style={{ marginBottom: '2px', display: 'flex', gap: '7px' }} >
                                            <input onClick={() => { setGender('male'); }} id='male' required type="radio" name="Gender" />
                                            Male
                                        </label>
                                    </div>
                                    <div>
                                        <label style={{ marginBottom: '2px', display: 'flex', gap: '7px' }} >
                                            <input onClick={() => { setGender('female'); }} id='female' type="radio" name="Gender" />
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            marginTop: '27'
                        }}>
                            <button type='Submit' className=' Enter-btn '>Enter</button>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Box