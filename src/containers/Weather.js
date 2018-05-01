import React from 'react'
require('es6-promise').polyfill();
import fetchJsonp from 'fetch-jsonp'; 

class Weather extends React.Component {
  state = {
    weather: null
  }
  componentDidMount () {
    // const cityCode = 101210101
    // // const url = `/data/cityinfo/${cityCode}.html`
    // const url2 = 'http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=E4805d16520de693a3fe707cdc962045'
    const url = 'http://wthrcdn.etouch.cn/weather_mini?citykey=101210101'
    // const url3 = 'http://www.weather.com.cn/data/sk/101010100.html '
    fetchJsonp(url)
      .then(function(response) {
        return response.json()
      }).then((json)=> {
        console.log('parsed json', json)
        this.setState({
          weather: json.data
        })
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
  render () {
    const {  weather } = this.state
    return (
      <div>
        { this.state.weather
          ? <ul>
                <li>{ weather.city }</li>
                <li>{ weather.forecast[0].date }</li>
                <li>{weather.forecast[0].type }</li>
                <li>温度: { weather.wendu }℃</li>
                <li>{ weather.ganmao }</li>
            </ul>
          : <p>暂无天气数据</p>
        }
      </div>
    )
  }
}

export default Weather