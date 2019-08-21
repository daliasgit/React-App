// const multiplyer = {
//     numbers: [1, 2, 3],
//     multiplyBy: 3,
//     multiply () {
//         return this.numbers.map(number => number * this.multiplyBy);
//     }
// };

// console.log(multiplyer.multiply());

const user = {
    name: 'Dalia',
    cities: ['Oslo', 'NY', 'Dublin'],
    placeToLive(){
        // this.cities.forEach((city)=>{
        //     console.log(this.name + ' live in ' + city );
        return this.cities.map((city)=>this.name + ' live in ' + city);
    }
};

console.log(user.placeToLive());

