// let title="notepad";
// let descrption=
//     `Lorem ipsum is placeholder
//     text commonly used in
//     the graphic, print`;
// let date="25/11";
// let markup = `
//     <div class="card">
//         <div class="child">
//             <h3>${title}</h3>
//             <p>${descrption}</p> 
//             <span>${date}</span>
//         </div>
//     </div>`;  
//     document.write(`${markup} `);



// console.log(parseInt("568.395"));
// console.log(parseFloat("568.395"));
// ____________________
    // console.log(100);
    // console.log(+"215");
    // console.log(+"0xff");
    // console.log(+null);
    // console.log(+true);
    // console.log(+false);
// ______________math_______________________

// let a = 1_00;
// let b =2_00.0;
// let c =1e2;
// let d =2.4;

// console.log(Math.min(a,b,c,d));
// console.log(a**Math.floor(d));
// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(parseInt(d));

// console.log(200/2);

// ________________string_________________
// let name = "  mohamad";
// let a = "aaaaaa";
// console.log(name.trim().charAt(4).toUpperCase());
// console.log(name.length);
//______________2__
// let a = "elzero web school" ;
// console.log(a.slice(2,6).toUpperCase());
// console.log(a[13].repeat(8).toUpperCase());
// console.log(a.split(" ",1));//-----------------
// console.log(a.charAt(0).toUpperCase()+a.slice(1,6));
// // _______________
// console.log(a.charAt(0).toUpperCase()+a.slice(1,7)+a.slice(11,a.length-1)+a.charAt(a.length-1).toUpperCase());
// // ________________
// console.log(a.charAt(a.length-1).toUpperCase());

// // _____________if elseif else condition____________---------------------------------------------------------------------
// let number =20;
// // if (number < 10 && number >0){
// //     console.log("number is less than 10 and greater than 0");
// // }else if(number >=10 && number <=20){
// //     console.log("number is between 10 and 20");
// // }else{
// //     console.log("number is greater than 20");
// // };

// // number === 0 ? consol.log("redobl") : number === 20 ? consol.log("admis") : console.log("error");
// // console.log(compary);

//     let ismn = "elzero web school";
//     if ((ismn.length*2).toString() === "34"){
//         console.log("yess");}
//     console.log(ismn.charAt());
//     console.log(ismn.indexOf("w"));
//     // _________________
//     if(ismn.charAt(ismn.indexOf("w")) === "w"){
//         console.log("yess");
//     };
//     console.log(ismn.charAt(ismn.indexOf("w"))) /////////////
//     // ________________
//     if(ismn.length !== "string"){
//         console.log("yess");
//     };
//     if(typeof(ismn.length) === "number"){
//         console.log("yess");
//     };
//     console.log((ismn.slice(0,6)).repeat(2) === "elzeroelzero");
//     if (ismn){
//         console.log("yess");
//     };
// console.log((ismn.slice(0,6)).repeat(2))  
// // console.log(ismn.length);
// // _______________switch case_____________
// job = "support";
// salary = "";
// switch (job) {
//     case "manager":
//         salary = 8000;
//         break;
//     case "IT":
//     case "support":
//         salary = 5000;
//         break;
//     case "programmer":
//     case "designer":
//         salary = 10000;
//         break;
//     default:
//         salary = 3000;
//         break;
// };

// console.log(` job = ${job} salary = ${salary}`);
// // ------------------------------------------
// let holidays=3;
// let money =0;
// if (holidays === 0){
//     money = 5000;
//     console.log(` my maey is ${money}`);
// }else if (holidays === 1 || holidays === 2){
//     money = 3000;
//     console.log(` my monney is ${money}`);
// }else if (holidays === 3){
//     money = 2000;
//     console.log(` my money is ${money}`);
// }else{
//     console.log("How many holidays?")
// };
// _________________________array_________________________________________________________________
// let zero =0;
// let counter =3;
// let my = [15,85,2,3,6,"ahmed" , "mazero", "Elham" ,895,2589,"888",999999, "osama" ,"gmail","ameer"];
// let newmy_number =[];
// let newmy_string =[];
//     for (let i = 0; i <my.length; i++){
//         if(typeof my[i] === "number"){
//             newmy_number.push(my[i]);
//         }else if(typeof my[i] === "string"){
//             newmy_string.push(my[i]);
//         }else{
//             console.log(Error)
//         }}
// for (let i = 0; i < newmy_number.length; i++){
//     document.write(`${newmy_string[i]} => ${newmy_number[i]} <br>`)
//     }
// console.log(newmy_number);
// console.log(newmy_string);
// _________________________________________________________________________________________________
// ______________________________________loop chalenge______________________________________________________
let admins = ["ahmad" , "samir" ,"rabia" ,"mohamad","sokaina"]
let myEmployees =["samira","ahlam","marwa","rachid","sofian","sara",
                    "amin","arwa","mecail","montasir","rabiaa","rokaya"]
document.write(`<div>We Have ${admins.length} Admins </div>`)
admins.map((i, index)=>{
    console.log(`${i} has ${index+1}`)
})
// for(let i =0; i<admins.length ; i++){
    // document.write(`<div> 
    // <h3>The Admin For team ${i} Is ${admins[i]}</h3>
    // <h4>Team Members</h4>
    // </div>`)
    // // console.log(admins[i])
    // for(let k =0 ; k<myEmployees.length ; k++)
        
    //     if(admins[i][0]===myEmployees[k][0]){

    //         document.write(`- ${myEmployees[k]} <br>`)

    //     }
        
    
    // }
    ;
