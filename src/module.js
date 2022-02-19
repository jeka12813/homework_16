
class Twooo {
    constructor() {
        this.pogodas = document.querySelector(".weather__forecasts")
        this.key = '1354067d4c5e5ba7d6625f68d153937b'
        this.urlWetherByDays = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${this.key}`
        this.initFoo()
        
    }
    
    initFoo() {
        fetchUsers(this.urlWetherByDays)
            .then((response) => {
                const data = JSON.parse(response)
                let result = ""
                data.list.forEach((item, index) => {
                    if ((index + 5) % 8 == 0) {
                        let template = this.pogodaas(item)
                        result = result + template
                    }
                    this.pogodas.innerHTML = result
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
    pogodaas(item) {
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        const date = new Date(item.dt * 1000)
        const dateMonth = date.getMonth()
        const dateden = date.getDate()
        let mes = month[dateMonth]
        const description = item.weather[0].description
        const iconSrc = ` http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
        return `
        <div class="two">
            <div class="day">
                <span>${dateden}  ${mes}</span>
            </div>
            <div class="day">
                <img src="${iconSrc}">
            </div>
            <div class="day">
                <span>${Math.round(item.main.temp)-273+" °C" }</span>
            </div>
        </div>
    `
    }
   
}

export{Twooo}
import { fetchUsers } from "./index"
