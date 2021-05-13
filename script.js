let body=document.querySelector(".body")


let massiv=[3,1,5]
let sortirovka=bestShufle

function add(e){
    let p =document.createElement('p')
    p.innerHTML=e
    body.appendChild(p)
}
document.querySelector(".do").addEventListener("click",deploy)

function deploy(){
    let proverka= sortirovka(massiv)
    console.log(proverka)
    document.querySelector(".result").innerHTML=proverka
}


//  сортировка пузырем

// const bubbleSort = arr => {
//     for (let i = 0, endI = arr.length - 1; i < endI; i++) {
//         let wasSwap = false;
//         console.log("endI",endI,"endJ",endJ,"i",i,"y",y)
//         for (let j = 0, endJ = endI - i; j < endJ; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 wasSwap = true;
//             }
//         }
//         if (!wasSwap) break;
//     }
//     return arr;
// };


//  сортировка шейкер

// function shaker(values){
//     let left = 0;
//     let right = values.length - 1;
//     while (left <= right) {
//       for (let i = right; i > left; --i) {
//         if (values[i - 1] > values[i]) {


//             let b=values[i - 1]
//             values[i - 1]= values[i]
//             values[i]=b
//         }

//       }
//       ++left;
//       for (let i = left; i < right; ++i) {
//         if (values[i] > values[i + 1]) {
//             let b=values[i + 1]
//             values[i + 1]= values[i]
//             values[i]=b
//         }
//       }

//       --right;
//     }
//     return values
// }





// сортировка расческа


// function ras4eska(values){
//     const factor = 1.247; // Фактор уменьшения
//     let step = values.length -1;

//     while (step >= 1) {
//       console.log(step)
//       for (let i = 0; i + step < values.length; ++i) {
//         if (values[i] > values[i + step]) {

//                       let b=values[i + step]
//             values[i + step]= values[i]
//             values[i]=b
//         }
//       }
//       step = (step/factor).toFixed(2) ;
//     }
//     // сортировка пузырьком
//     for (let idx_i = 0; idx_i + 1 < values.length; ++idx_i) {
//       for (let idx_j = 0; idx_j + 1 < values.length - idx_i; ++idx_j) {
//         if (values[idx_j + 1] < values[idx_j]) {
// let b=values[idx_j]
// values[idx_j]=values[idx_j + 1]
// values[idx_j + 1]=b}
//         }
//       }
//     //       swap(values[idx_j], values[idx_j + 1]);
//     //     }
//     //   }
//     // }
//     return values
// }



// сортировка вставками

// function InsertionSort(values) {
//   for (let i = 1; i < values.length; ++i) {
//     let x = values[i];
//     let j = i;
//     while (j > 0 && values[j - 1] > x) {
//       values[j] = values[j - 1];
//       --j;
//       console.log("i",i,"j",j,'vak',values[j])
//     }
//     values[j] = x;
//   }

//   return values
// }

//сортировка выбором

// function SelectionSort(values) {
// console.log("start")

//   for (let i = 0; i < values.length; i++) {
//     let j = Math.min(...values.slice(i));
//     console.log(j,i)
//         let min = values.indexOf(j)
//         let b=values[min]
//         values[min]=values[i]
//         values[i]=b

//   }
//   // for (let i = 0; i <= values.length; i++) {

//   //   // let b=values[i + step]
//   //   //             values[i + step]= values[i]
//   //   //             values[i]=b
//   // }
//   return values
// }

// function qsort(e){
// elem=[...e]

//   if(elem.length <2) {return elem}
// else{
// pivot= elem[0]
// less=elem.filter((x)=>x<pivot)
// greater=elem.filter((x)=>x>pivot)

// return [...qsort(less),pivot,...qsort(greater)]
// }

// }


// function Shufle(arr){

//   let shufleArr=[...arr]

//  for (let i = 1; i < shufleArr.length; i++) {
//   Math.floor(Math.random() * (i  + 1));
// let randomIndex=RandomNumber(0,i)
// let time=shufleArr[i]
// shufleArr[i]=shufleArr[randomIndex]
// shufleArr[randomIndex]=time
//  }
//  return shufleArr
// }

