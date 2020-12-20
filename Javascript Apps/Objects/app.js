// // var plan1 = {
// //      name: "Basic",
// //      price: 3.99,
// //      space: 100,
// //      transfer: 1000,
// //      pages: 10
// // }
// // plan1.discountmonths=[6,7,11]
// // //console.log(plan1.discountmonths[2])
// // //propertyExists = "market" in plan1;                            // To check wheather this property exists in object or not
// //                                                                 // property name in qoutes and object name without qoutes   
// // //console.log(propertyExists)           
// // //create a function that gives a dissount when condition matches


// // plan1.calanual = function calanual(dispercent) {
// //     var price = this.price
// //     var currdate = new Date();
// //     var mon = currdate.getMonth()
// //  for (let index = 0; index < this.discountmonths.length; index++) {
// //      if (this.discountmonths[index] === mon) {
// //         price =  price * dispercent
// //         break;
// //      }    
// //  }
// //  return price *12;
// // }


// // alert(plan1.calanual(.8))    




function Plan(name, price, space, transfer, pages, discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.calcAnnual = function(percentIfDisc) {
    var bestPrice = this.price;
    
     var currDate = new Date();
     var thisMo = currDate.getMonth();
     for (var i = 0; i < this.discountMonths.length; i++) {
     if (this.discountMonths[i] === thisMo) {
     bestPrice = this.price * percentIfDisc;
     break;
     }
     }
     return bestPrice * 12;
     }
    }


var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);

var annualPrice = p2.calcAnnual(.8);

console.log(annualPrice)

