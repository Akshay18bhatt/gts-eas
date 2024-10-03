



const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const extractDate = (timestamp) => {


    const extract = new Date((+timestamp));
    const year = extract.getFullYear();
    const monthNum = extract.getMonth();
    const month = months[extract.getMonth()];
    const date = extract.getDate();

    return { year, month:[monthNum<10?"0"+monthNum:monthNum,month], date };
}