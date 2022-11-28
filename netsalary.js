
//Return an instance of the prompt function
const prompt = require('prompt-sync')();

//prompt a user to input basic salary
const basicSalary = parseInt(prompt("Please enter your basic salary : "));

//prompts user to imput benefits 
const benefits =parseInt(prompt("Please enter your total benefits: "));

//prompts user to enter pensionable pay
const pensionablePay = parseInt(prompt("Please enter your pensionable pay: "));

//declare gross salary
const gross = parseInt(basicSalary + benefits);

//function to calculate gross salary
function grossSalary() {

    console.log("Your gross salary is: ", gross);
    
}

//function to calculate payee
function payeeCalculator() {


    if(gross <= 24,000) {
        console.log("Your PAYEE is: ", gross * 0.1);
    }

    else if(gross >= 24,001 && gross <= 32,333){
        console.log("Your PAYEE is: ", gross * 0.25);
    }

    else {
        console.log("Your PAYEE is: ", gross * 0.3)
    }
}


//function to calculate nhif deductions
function nhifDeductionsCalculator() {

    //If statement to return nhif monthly deductions
    if (gross > 100000) {
      const nhifMonthly = 1700;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    else if (gross >= 90000) {
      const nhifMonthly = 1600;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 80000) {
      const nhifMonthly = 1500;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 70000) {
      const nhifMonthly = 1400;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 60000) {
      const nhifMonthly = 1300;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 50000) {
      const nhifMonthly = 1200;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 45000) {
      const nhifMonthly = 1100;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 40000) {
      const nhifMonthly = 1000;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 35000) {
      const nhifMonthly = 950;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 30000) {
      const nhifMonthly = 900;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 25000) {
      const nhifMonthly = 850;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 20000) {
      const nhifMonthly = 750;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 15000) {
      const nhifMonthly = 600;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 12000) {
      const nhifMonthly = 500;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 8000) {
      const nhifMonthly = 400;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross >= 6000) {
      const nhifMonthly = 300;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    } 
    
    else if (gross < 5999) {
      const nhifMonthly = 150;
      console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
      return nhifMonthly;
    }
  }

//function to calculate nssf deductions
function nssfDeductionsCalculator() {

    const nssf = parseInt(pensionablePay * 0.06);
    console.log(`Your NSSF Deduction is : ${nssf}`);
}

//function to calculate net salary
function netSalary() {
    const payee = parseInt(payeeCalculator(gross));
    const nssf = parseInt(nssfDeductionsCalculator(gross));
    const nhif = parseInt(nhifDeductionsCalculator(gross));
    const net = parseInt(gross -payee -nssf -nhif);
    console.log("You Net Salary is: ", net)
}



//calling the grossSalary function
grossSalary();

//calling the payeeCalculator
payeeCalculator();

// calling the nhifDeductionsCalculator function
nhifDeductionsCalculator();

// calling the nssfDeductaionsCalculator function
nssfDeductionsCalculator();

//calling the net salary function
netSalary();
