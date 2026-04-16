//bai 1
let car = {
    make: "Toyota",
    model: "Corrolla",
    year: 2021
};
console.log(`năm sản xuất xe là: ${car.year}`); //in ra năm sản xuất của xe

//bai 2
let person = {
    name: "Nga",
    address: {
        street: "Hung Vuong",
        city: "Ha Noi",
        country: "VN"
    }
};
console.log(`Tên đường của ${person.name} là: ${person.address.street}`);// in ra tên đường

//bai 3
let student = {
    name: "Nga",
    grades: {
        math: 10,
        english: 9
    }
};
console.log(`điểm môn toán của ${student["name"]} là : ${student["grades"]["math"]} `); //in ra điểm môn toán

//bai 4
let setting = {
    volume: "high",
    brightness: 100
};
setting.volume = "low";
console.log(setting.volume); //in ra gia tri volume sau khi thay doi

//bai 5
let bike = {};
bike.color = "red"; // thêm thuộc tính color cho bike
console.log(bike.color);

//bai 6
let employee = {
    name: "Nga",
    age: 18
};
delete employee.age; // xoá thuộc tính của employee
console.log(employee);

//bai 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log(school);

