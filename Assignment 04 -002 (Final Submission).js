function calculateVAT(price) {
  if (typeof price === "number" && price > 0) {
    let vat = 7.5 / 100;
    let result = price * vat;
    return result;
  } else {
    return "Invalid";
  }
}

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

function willSuccess(marks) {
  if (Array.isArray(marks)) {
    let max = [];
    let min = [];
    for (const number of marks) {
      if (number >= 50) {
        max.push(number);
      } else {
        min.push(number);
      }
    }
    if (max.length > min.length) {
      return true;
    } else if (max.length === min.length) {
      return false;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

function validProposal(person1, person2) {
  let ageDifference = Math.abs(person1.age - person2.age);
  if (typeof person1 === "object" && typeof person2 === "object") {
    if (person1.gender !== person2.gender && ageDifference <= 7) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

function calculateSleepTime(times) {
  let typeCheck = times.every(function checkType(val) {
    return typeof val === "number";
  });
  if (Array.isArray(times) && typeCheck) {
    let total = 0;
    for (const time of times) {
      total += time;
    }
    let miliSec = total * 1000;
    let date = new Date(miliSec);
    let hours = Math.floor(miliSec / 3600 / 1000);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let totaTime = {};
    totaTime.hour = hours;
    totaTime.minute = minutes;
    totaTime.second = seconds;
    return totaTime;
  } else {
    return "Invalid";
  }
}
