export const getDate=()=>{
    const date = new Date();
    let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    };
    let d=new Intl.DateTimeFormat("en-US", options).format(date)
    // console.log(d);
    return d
}