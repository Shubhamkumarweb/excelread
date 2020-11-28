const usertotal=document.getElementById("total_users");
const user24=document.getElementById("user_24hr");
const salestotal=document.getElementById("total_sales");
const sales24=document.getElementById("sales_24hr");
var data;
var [i,j,k,l,a,b]=[0,0,0,0,false,false];
fetch("https://cors-anywhere.herokuapp.com/https://api.myzila.com/LiveDashboard").then(res=>{res.json()
.then((info)=>{
    console.log(info.data);
   data= info.data;
  let zila= setInterval(()=>{
       if(i<Math.floor(data.sales))
       {
           i+=411;
       }
       else{
           i=data.sales;
           a=true;
       }
       if(j<Math.floor(data.total_sale_24_hour))
       {
           j+=7;
       }
       else{
           j=data.total_sale_24_hour;
           
       }
       
       if(k<Math.floor(data.users))
       {
        k+=5;
       }
       else{
           b=true;
       }
       if(l<Math.floor(data.user_last_24_hour))
       {
        l++;
       }
    usertotal.innerHTML=k;
    salestotal.innerHTML=i+".42";
    sales24.innerHTML=j;
    user24.innerHTML=l;
    // console.log("running");
    if(a&&b)
    {
        // console.log("stopped");
    clearInterval(zila);
    }
   },1);
})
})