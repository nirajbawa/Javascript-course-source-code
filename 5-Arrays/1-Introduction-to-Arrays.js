let marks_class_12 = [100, 80, 70, 75, "not", false, null];

console.log("\n\narray index\n\n");


console.log(marks_class_12);
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);

console.log("\n\narray adding new marks\n\n");
marks_class_12[7] = 100; //adding new marks

console.log("\n\narray changing value marks\n\n");

marks_class_12[0] = 90; //changing value marks // arrays are mutable
console.log(marks_class_12[7]);

console.log(marks_class_12);

console.log("\n\narray length\n\n");

console.log(marks_class_12.length);


// array is not non primetive datatype it is an object type data type

console.log("\n\narray type\n\n");

console.log(typeof marks_class_12);

// arrays using for loop

console.log("\n\narrays using for loop\n\n");

for (let i = 0; i < marks_class_12.length; i++) {
    console.log(marks_class_12[i]);
}