import React from 'react';
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {

    const { name, main, weather } = resultado;
    if (!name) return null;
    const code = weather[0].icon;
    const url = `http://openweathermap.org/img/wn/${code}@2x.png`

    return (
        <div className="card-panel z-depth-4  col s12">
            <div className=" z-depth-4 icon ">
                <img className="img" src={url} alt="icon" />
            </div>
            <div className="white-text">
                <h2 className="left-align">{name}:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - 273.15, 10).toFixed(2)}
                    <span>&#x2103;</span>
                </p>
                <p>Temperatura Máxima:
                    {parseFloat(main.temp_max - 273.15, 10).toFixed(2)}
                    <span>&#x2103;</span>
                </p>
                <p>Temperatura Minima:
                    {parseFloat(main.temp_min - 273.15, 10).toFixed(2)}
                    <span>&#x2103;</span>
                </p>

            </div>
        </div >
    );
}
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;
