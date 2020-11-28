const input=document.getElementById("input");
const tablehead=document.getElementById("tablehead");
const data=document.getElementById("data");
var temp="";
input.addEventListener('change',()=>{
    readXlsxFile(input.files[0]).then((rows)=>{
        let [i,tax,age]=[0,0,0];
        rows.map((row,index)=>{
            console.log(row);
           if(i==0)
           { tablehead.display="block";            
        }
           if(i>0)
           {
               tax=row[3]*17/100;
            temp+="<tr>";
            temp+="<td>"+row[0]+"</td>"
            temp+="<td>"+row[1]+"</td>";                           
             temp+="<td>"+row[2]+"</td>";
             temp+="<td>"+row[3]+"</td>";
             temp+="<td>"+tax+"</td></tr>"
           }
           
           i++;
        })
        data.innerHTML=temp;
    })
})

