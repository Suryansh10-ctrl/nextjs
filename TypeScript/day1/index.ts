// let a:any=10
// a="surya"
// console.log(a);

// Type inference nd annotation:
/**
 * Inference: ma khud se type ko samajh leta hai
 * ex: let a=10
 * Annotation: ma khud se type ko define karta hu
 * ex: let a:number=10
 */

// Array:
// let arr:number[] = [90,80,89,69]
// console.log(arr);


// Tuples: they are statcially defined array

// let arr:[number,string,boolean]=[10,"surya",true]
// console.log(arr);


// enums: they are used to define a set of named constants

enum Role{
    ADMIN,
    USER,
    SUP_ADMIN
}

let user = Role.SUP_ADMIN;
console.log(user); 