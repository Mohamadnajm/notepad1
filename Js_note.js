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

// _____________if elseif else condition____________
let number =20;
// if (number < 10 && number >0){
//     console.log("number is less than 10 and greater than 0");
// }else if(number >=10 && number <=20){
//     console.log("number is between 10 and 20");
// }else{
//     console.log("number is greater than 20");
// };

// number === 0 ? consol.log("redobl") : number === 20 ? consol.log("admis") : console.log("error");
// console.log(compary);

    let ismn = "elzero web school";
    if ((ismn.length*2).toString() === "34"){
        console.log("yess");}
    console.log(ismn.charAt());
    console.log(ismn.indexOf("w"));
    // _________________
    if(ismn.charAt(ismn.indexOf("w")) === "w"){
        console.log("yess");
    };
    console.log(ismn.charAt(ismn.indexOf("w"))) /////////////
    // ________________
    if(ismn.length !== "string"){
        console.log("yess");
    };
    if(typeof(ismn.length) === "number"){
        console.log("yess");
    };
    console.log((ismn.slice(0,6)).repeat(2) === "elzeroelzero");
    if (ismn){
        console.log("yess");
    };
console.log((ismn.slice(0,6)).repeat(2))  
// console.log(ismn.length);
// _______________switch case_____________