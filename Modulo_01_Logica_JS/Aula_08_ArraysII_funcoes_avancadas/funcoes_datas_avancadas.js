//Funções avançadas - Datas

let  data = new Date();

console.log(data.getDate());
console.log(data.getMonth() + 1);
console.log(data.getFullYear());

console.log(data.toString());

data.setDate(data.getDate() + 720);//acrescenta mais 720 dias
console.log(data.toString());