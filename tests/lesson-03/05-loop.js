// bài 1: tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
};
console.log(sum);

// bài 2: in bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`bảng cửu chương ${i} là: `);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

// bài 3: tạo 1 mảng chứa các số lẻ từ 1 đến 99
const arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 == 1) {
        arr.push(i);
    }
}
console.log(arr);

// bài 4: in ra 10 email dựa trên tên người dùng và số TT
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
}


// bài 5: tính tổng doanh thu của 1 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu
let revenues = [
    { month: 1, total: 200 },
    { month: 2, total: 200 },
    { month: 3, total: 200 },
    { month: 4, total: 200 },
    { month: 5, total: 200 },
    { month: 6, total: 200 },
    { month: 7, total: 200 },
    { month: 8, total: 200 },
    { month: 9, total: 200 },
    { month: 10, total: 200 },
    { month: 11, total: 200 },
    { month: 12, total: 200 }
]
let sum1 = 0;
for (let i = 0; i < revenues.length; i++) {
    sum1 += revenues[i].total;
}
console.log(`tổng doanh thu của cả năm là; ${sum1}`)
