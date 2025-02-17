//! Problem-01 : Calculate the VAT Amount
/* ⚠️ Function Name Must be calculateVAT()
জাবেদ একজন সচেতন ব্যবসায়ী। প্রতিদিন তার দোকানে প্রচুর পণ্য বিক্রি হয়, এবং প্রতিটি পণ্যের ওপর নির্দিষ্ট পরিমাণ VAT যোগ হয়। জাবেদ সব পণ্যের VAT একসাথে হিসেব না করে প্রতিটি পণ্যের VAT আলাদা করে রাখতে চায়, যেন পরবর্তী সময়ে হিসেব করতে সুবিধা হয়।
তুমি যেহেতু একজন দক্ষ প্রোগ্রামার, তোমার কাজ হলো calculateVAT() নামে একটি ফাংশন তৈরি করা, যা কোনো পণ্যের মূল্য ইনপুট নিলে স্বয়ংক্রিয়ভাবে তার VAT হিসেব করে দিবে। 
 VAT Rate:  7.5%
📥 Input:
ফাংশনটি একটি পজিটিভ সংখ্যা (amount) ইনপুট নেবে, যা পণ্যের মূল্য।


🚀 Output:
ফাংশনটি 7.5% VAT ক্যালকুলেট করে একটি সংখ্যা রিটার্ন করবে।
Output দশমিক সংখ্যা হতে পারে।
Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


🚩Challenge:   
ইনপুট টি নাম্বার না হলে "Invalid"  স্ট্রিং  রিটার্ন করবে। 
ইনপুট টি পজিটিভ সংখ্যা না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 


💡Hints:  যদি ইনপুট amount = 1500 হয়, তাহলে VAT হবে: 1500 × 7.5 / 100 = 112.5 Taka

SAMPLE INPUT SAMPLE OUTPUT
1500         112.5
200             15
999         74.925
-500        "Invalid"
"101"       "Invalid"
"foo"       "Invalid"
*/

function calculateVAT(price) {
  if (typeof price === "number" && price > 0) {
    let vat = 7.5 / 100;
    let result = price * vat;
    return result;
  } else {
    return "Invalid";
  }
}

let productVat = calculateVAT(-500);
console.log(productVat);
