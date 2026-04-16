//bai 1:  in kết quả phép nhân
function multiply(a, b) {
    let result = a * b;
    console.log(`kết quả của ${a} x ${b} = ${result}`);
};
multiply(2, 3);
multiply(5, 10);

//bai 2: viết hàm findMin nhận 3 tham số a,b,c trả về giá trị nhỏ nhất
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}
console.log(findMin(3, 4, 5));
console.log(findMin(9, 28, 19));

//bai 3
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}
console.log(calculateInterest(1000000, 15, 2));
console.log(calculateInterest(2000000, 7, 10));