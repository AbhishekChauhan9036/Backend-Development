/*  We have populated the solutions for the 10 easiest problems for your support.
    Click on the SUBMIT button to make a submission to this problem.*/

    importPackage(java.util);
    importPackage(java.lang);
    
    let input = new Scanner (System.in);
    let inputs = input.nextLine().split(' ');
    
    let withdrawal = parseFloat(inputs[0]);
    let balance = parseFloat(inputs[1]);
    
    if((0 < withdrawal && withdrawal <= 2000) 
      && (0 < balance && balance <= 2000) 
      && ((withdrawal +0.5) <= balance) 
      && (withdrawal % 5) === 0) {
      
      balance -= withdrawal + 0.50;
    }
    
    print(balance);
    
    