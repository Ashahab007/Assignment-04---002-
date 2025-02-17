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

//! Problem-02 :
/* 
Valid  Bangladeshi Number 
⚠️ Function Name Must be validContact()
এবার তোমার কাজ হলো validContact() নামে একটা ফাংশন তৈরি করা, যা কিছু শর্তের ভিত্তিতে  যাচাই করবে একটা Contact number ভ্যালিড কিনা।  একটি Contact number ভ্যালিড হবার শর্ত হলো 
Contact Number টি অবশ্যই 11 digit এর হতে হবে। 
Contact Number টি  শুরু হবে  "01" দিয়ে 
Contact Number এ কোন স্পেস থাকা যাবে না।   

উপরের শর্ত গুলো পুরন হলে ই সে true আউটপুট হিসেবে return করবে। না হলে false আউটপুট হিসেবে return করবে। 

📥 Input:
তোমার ফাংশন একটি   ইনপুট নেবে যা হবে একটি স্ট্রিং।  স্ট্রিং এর character গুলো অবশ্যই 0-9 এর ভেতরে দেয়া  হবে। 


🚀 Output:
তোমার ফাংশন টি একটা boolean Value (true/false) কে  return করবে। অবশ্যই তোমাকে কিন্তু boolean value ই return করতে হবে। 
Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


🚩Challenge:  যদি ইনপুট টি string না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 


SAMPLE INPUT    SAMPLE OUTPUT
"01819234567"           true
"0181923 4567"          false
"018192345679"          false
["01987654321"]         "Invalid"
"01345678900"           true
"02145678900"           false
true                    "Invalid"
*/

function validContact(contact) {
  if (typeof contact === "string") {
    if (
      contact.length === 11 &&
      contact.startsWith("01") &&
      !contact.includes(" ")
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

let inputNum = validContact("01819234567");
console.log(inputNum);

// ! Problem-03 :
/* 
Admission Success  (📚 Will He Succeed?)
⚠️ Function Name Must be willSuccess()
রাফি, বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার প্রস্তুতি নিচ্ছে। 🎓📖 সে বিভিন্ন মডেল টেস্ট দিয়েছে এবং প্রতিবার ভিন্ন ভিন্ন নম্বর পেয়েছে। কিন্তু সে দুশ্চিন্তায় আছে— সে কি চূড়ান্ত পরীক্ষায় সফল হতে পারবে?  রাফির জন্য তুমি willSuccess() নামে একটা ফাংশন লিখে দাও ,  যেটা একটা Number এর Array ইনপুট নেবে এবং রাফির রেজাল্ট এনালাইসিস করে রাফি কে guideline দিবে। 
মডেল টেস্টে 50 বা তার বেশী মার্ক মানে হলো Pass। আর 50 এর নিচে পাওয়া মানে হলো Fail. 
-	যদি Pass করা পরীক্ষার সংখ্যা  Fail করা পরীক্ষার সংখ্যা থেকে বেশি হয়, তাহলে সে মনে করবে যে সে প্রস্তুত এবং ফাংশন true রিটার্ন করবে 
-	অন্যথায়, সে মনে করবে এখনো প্রস্তুতি যথেষ্ট নয় এবং ফাংশন false রিটার্ন করবে 

📥 Input:
-	ফাংশন টি Input নেবে একটি Array
-	Array তে  Number Type এর ডাটা ই থাকবে।   
-	Example:   [55 , 75 , 41 , 33 , 0 , 87 , 91 ,  30 ]

🚀 Output:
ফাংশন টি একটা boolean Value (true/false) কে  return করবে। অবশ্যই তোমাকে কিন্তু boolean value ই return করতে হবে।  
Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা

🚩Challenge:  যদি ইনপুট টি Array না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 

SAMPLE INPUT	SAMPLE OUTPUT
[60, 70, 80, 40, 30]	true
[48 , 48 , 92 , 100 ]	false
[48, 48, 50, 50, 100]	true 
[ ]	false
[ 90 ]	true
[ 90 ,  99 , 87 , 48 , 34 , 49 ]	false
"100 , 100"	"Invalid"
90	"Invalid"

*/

function willSuccess(marks) {
  // You have to write your code here
}
