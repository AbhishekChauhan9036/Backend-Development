Week 3


const customerDetails = {
    "name": "Ashok",
    "daysSinceLastPurchase": 25,
    "daysSinceLastLogin": 15,
    "totalOrders": 19,
    "membershipDuration": .5
 }

 let discountOffer = 0

 // 4) If a user’s total order is greater than 20, assign them a discount offer of 25%
if(customerDetails.totalOrders > 20) {
    discountOffer = 25
}

// 3) If a customer has not logged in for the last 30 days and also not purchased something, assign a discount offer of 20%
if(customerDetails.daysSinceLastLogin > 30 && customerDetails.daysSinceLastPurchase > 30) {
    discountOffer = 20
}

// 2) if a customer has logged-in in the last 30 days but hasn’t purchased anything in these 30 days, assign a discount offer of 18%
if(customerDetails.daysSinceLastLogin <= 30 && customerDetails.daysSinceLastPurchase > 30) {
    discountOffer = 18
}

 // 1) If membership is more than a year old, assign them a discount offer of 5%

if(customerDetails.membershipDuration > 1) {
    discountOffer = 5
}


console.log(`The discount offer for ${customerDetails.name} is evaluated to be ${discountOffer}`) 

/*
You are given a customer details and you have been told to give a discount percentage to the customer based on the following details
- If a customer has not logged in for the last 30 days and also not purchased something, assign a discount offer of 20%
- if a customer has logged-in in the last 30 days but hasn’t purchased anything in these 30 days, assign a discount offer of 18%
- If a user’s total order is greater than 20, assign them a discount offer of 25%
- If membership is more than a year old, assign them a discount offer of 5%

Important Note : To maximise revenue the management has intructed that if customer is eligible for multiple offer we will provide them the minimum of all the eligible discount offers. 
What this means is For example there is a customer X who has logged in as well purchased an item in the last 30 days. Also X has a total number of order greater than 20. As per the algorithm above we want minimum of two, so the discount offer for customer X is 20 and not 25


Customer details
 
{
  “daysSinceLastPurchase”: 30,
  “daysSinceLastLogin”: 15,
  “totalOrders”: 5,
  “membershipDuration”: 1.5
}
*/





Book mentioned in the session - Atomic Habits by James Clear

A tweet by Professor Feynman's tribute Twitter account (https://twitter.com/proffeynman)
When one teaches, two learn.
