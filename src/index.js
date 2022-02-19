
import {Twooo} from './module'
import {Oneee} from './mogule2'
console.log("123")

function fetchUsers(url, method = 'GET') {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = () => {
            if (xhr.status == '200') {
                resolve(xhr.response)
            } else {
                reject(xhr.status + ' ' + xhr.statusText)
            }
        }
        xhr.onerror = () => {
            reject(xhr.status + ' ' + xhr.statusText)
        }
        xhr.send()
    })
}
export{fetchUsers}
new Twooo()
new Oneee()

