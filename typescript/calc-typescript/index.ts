import { question } from 'readline-sync';

type operator = '+' | '-' | '*' | '/';

function main(): void
{
  const firstStr: string = question('Enter first number:\n');
  const operator: string = question("Enter operator:\n");
  const secondStr: string = question('Enter second string:\n');

   const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
   if(validInput)
   {
     const firstNum: number = parseInt(firstStr);
     const secondNum: number = parseInt(secondStr);
     const result = calculate(firstNum,operator as operator,secondNum);
     console.log(result);
   }
   else{
    console.log('\n Invalid Input');
    main()
   }

function calculate(firstNum: number,operator: operator,secondNum: number)
{
  switch(operator)
  {
    case '+':
        return firstNum + secondNum;
    case '-':
        return firstNum - secondNum;
    case '*':
        return firstNum * secondNum;
    case '/':
         return firstNum / secondNum;

    }

}
function isOperator(operator: string): boolean{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':   
        case '/': 
              return true;
        default:
            return false;
    }
}
function isNumber(str: string): boolean 
{
    const maybenum = parseInt(str);
    const isNum: boolean = !isNaN(maybenum);
    return isNum;
}
}

main();