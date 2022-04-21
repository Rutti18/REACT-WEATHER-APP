const ReportSection = (data) => {
    return (
        <section className="reportSection">
            <div className="first-container">
                <table>
                    <tbody>
                        <tr>
                        <td>
                                <div className="reponseDiv">
                                    <div className="current-city">
                                        <h1><span> </span> <span className="city" id="city"></span></h1> <br/>
                                    </div>
                                    <div className="current-date">
                                        <h3><span></span><span className="currentDate" id="currentDate"></span></h3>
                                        &nbsp; &nbsp;
                                        <h3><span></span><span className="currentTime" id="currentTime"></span></h3> <br/>
                                    </div>
                                    <div className="temperature">
                                        <h3><span></span><span className="FeelsLike" id="FeelsLike">  </span></h3>                                     
                                    </div>
                                    <div className="feelsLike">
                                        <h4>feels like</h4>
                                    </div>
                                    <div className="humidity">
                                        <h3><span></span><span className="Humidity" id="Humidity">  </span></h3>
                                    </div>
                                    <div className="Humidity">
                                        <h4>humidity</h4>
                                    </div>

                                    <div className="current-temperature">
                                        <h1><span></span><span className="currentTemp" id="currentTemp"></span></h1><br/>
                                        <div></div>
                                    </div>  
                                    {/* <div>
                                        <img src="../public/icon/01d@2x.png"  id="sunny" style={{display: "none"}}/>
                                    </div> */}
                                    <div className="current-conditions">
                                        <h3><span></span><span className="currentContition" id="currentContition"></span> <span id="icon"> </span></h3><br/>
                                    </div>                                                                         
                                    <div className="temperature">
                                        <h3><span></span><span className="TempHiLow" id="TempHiLow"> </span></h3><br/>
                                    </div>
                                    <div className="modReq">
                                        <div className="day1" id="dayOne"> <br/> <span id="dayOneDate"> </span> <br/> <span id="dayOneTemp">  </span> <br/> <span id="dayOneCond"> </span>  </div>
                                        <div className="day2" id="dayTwo"> <br/> <span id="dayTwoDate"> </span> <br/><span id="dayTwoTemp"> </span> <br/> <span id="dayTwoCond"> </span>  </div>
                                        <div className="day3" id="dayThree"> <br/> <span id="dayThreeDate"> </span><br/> <span id="dayThreeTemp"></span> <br/> <span id="dayThreeCond"> </span> </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="weather-forecast"> 
                                    <h1>WEATHER <br/> FORECAST</h1>
                                </div>
                            </td>     
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>  
    );
}
  
export default ReportSection;

{/* <img src="" id="dayOneWeather"/>
<img  src="" id="dayTwoWeather"/>
<img src="" id="dayThreeWeather"/> */}