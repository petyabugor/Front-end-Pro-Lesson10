//1)
const today = new Date()
const otherDay = new Date(2022,8, 17)

function returnTrueorFalse(param) {
    let result= (new Date().getFullYear()===new Date(param).getFullYear()) 
    && (new Date().getMonth() === new Date(param).getMonth())
    && (new Date().getDate()===new Date(param).getDate()) ? 'true': 'false';
    return result
}   
console.log(returnTrueorFalse(1663078381101))
console.log(returnTrueorFalse(otherDay))
console.log(returnTrueorFalse(1663081101))


//2)
function returnDate(param) {
    let objDate=new Date(param)
    let date= objDate.getDate()
    console.log(date)
    let month= objDate.getMonth()+1
    month=(month < 10) ? '0' + month : month;
    console.log(month)
    let year= objDate.getFullYear()
    console.log(year)
    let hour= objDate.getHours()
    console.log(hour)
    let minutes= objDate.getMinutes()
    console.log(minutes)

    return `${date}.${month}.${year} ${hour}:${minutes}`
}
console.log(returnDate(1662997703614))


//или так
function returnDate2(param) {
    let objDate=new Date(param).toLocaleString().substr(0,17).replace(',','')
    return objDate
}
console.log(returnDate2(1662997703614))



//3)
const futureHours = new Date(2022,8, 14,10,3,4.567)
const futureDay = new Date(2022,8, 17)
const futureMonth = new Date(2022,12, 17)
const futureYear = new Date(2025,12, 17)

const pastHours = new Date(2022,8, 13,2,3,4.567)
const pastDay = new Date(2022,8, 10)
const pastMonth = new Date(2022,7, 01)
const pastYear = new Date(2020,8, 15)

function returnTime(params) {
    let start = new Date();
    console.log(+start)
    let end = new Date(params);
    let different= end-start
    console.log(different)
    if(different<0){
        if(Math.abs(different)<1000*60*60*24){
            return  `Прошло ${Math.ceil(Math.abs(different)/(1000*60*60))} часов`
        } 
        if(Math.abs(different)>1000*60*60*24 && Math.abs(different)<1000*60*60*24*31) {
            return  `Прошло ${Math.ceil(Math.abs(different)/(1000*60*60*24))} дня` 
        }
        if(Math.abs(different)>1000*60*60*24*31 && Math.abs(different)<31536000000) {
            return  `Прошло ${Math.ceil(Math.abs(different)/(1000*60*60*24*31))} месяца` 
        }
        if(Math.abs(different)>31536000000) {
            return  `Прошло ${Math.ceil(Math.abs(different)/(31536000000))} года` 
        }
    } 
    if(different>0){
        if(Math.abs(different)<1000*60*60*24){
            return  `Должно пройти ${Math.ceil(Math.abs(different)/(1000*60*60))} часов`
        } 
        if(Math.abs(different)>1000*60*60*24 && Math.abs(different)<1000*60*60*24*31) {
            return  `Должно пройти  ${Math.ceil(Math.abs(different)/(1000*60*60*24))} дня` 
        }
        if(Math.abs(different)>1000*60*60*24*31 && Math.abs(different)<31536000000) {
            return  `Должно пройти  ${Math.ceil(Math.abs(different)/(1000*60*60*24*31))} месяцев` 
        }
        if(Math.abs(different)>31536000000) {
            return  `Должно пройти  ${Math.ceil(Math.abs(different)/(31536000000))} года` 
        }
    };
}
console.log(returnTime(pastHours))
console.log(returnTime(pastDay))
console.log(returnTime(pastMonth))
console.log(returnTime(pastYear))

console.log(returnTime(futureHours))
console.log(returnTime(futureDay))
console.log(returnTime(futureMonth))
console.log(returnTime(futureYear))



