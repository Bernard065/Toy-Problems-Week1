# Toy-Problems-Week1

Author : Bernard Bebeni
Date : 26 November 2022


Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

For our program to prompt the user to input the **student score,** we will install the prompt-syn node module using `
npm install prompt-sync

```javascript
bebeni@bebeni-840-G4:~/Development/code/Toy-Problems-Week1$ npm install prompt-sync

added 3 packages, and audited 4 packages in 3s

found 0 vulnerabilities
bebeni@bebeni-840-G4:~/Development/code/Toy-Problems-Week1$ 

```
In the Vs code, open the terminal and run node studentgrades.js. It should give you a prompt to enter students marks.


```javascript
****
For example 

bebeni@bebeni-840-G4:~/Development/code/Toy-Problems-Week1$ node studentgrades.js
Please a value between 0 and 100: 
****
```



Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

For our program to prompt the user to input the **car speed,** we will install the prompt-syn node module using `
npm install prompt-sync

```javascript
bebeni@bebeni-840-G4:~/Development/code/Toy-Problems-Week1$ npm install prompt-sync

added 3 packages, and audited 4 packages in 3s

found 0 vulnerabilities
bebeni@bebeni-840-G4:~/Development/code/Toy-Problems-Week1$ 

```

In the Vs code, open the terninal and run node speeddetector.js. It should give you a prompt to enter **car speed**.
```javascript
****
For example 

bebeni@bebeni-840-G4:~/Development/code/Toy-Problems-Week1$ node speeddetector.js
Please Enter Car Speed: 
****

```



Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm 

https://www.aren.co.ke/payroll/taxrates.htm

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye


In the Vs code, open the terninal and run node netsalary.js. It should give you a prompt to enter basic salary, total benefits and pensionable. It the calculates and outputs the PAYEE, NHIF deductions, NSSF deductions, Gross Salary.

```javascript
For example 

In the Toy-Problems-Week1 directory, cd to netSalary calculator directory using the cd netSalary calculator command and then run node netSalary.js and enter your gross monthly salary# Toy-Problems-Week1
