// import { readFileSync } from "fs";

// const fileReader = function (filepath) {
//   return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
// };

// const scrabbleWords = fileReader("./sowpods.txt");


function addString(strA: string, strB: string){
        return strA + " " + strB
}

console.log(addString("hell","world"))

console.log("testing testing")


 function bestFriend(txt: string, a: string, b: string): boolean {
    let txtArr: string[] = txt.split("");
     let aCount: number = 0;
     let afterCount: number = 0;
     for(let i = 0; i < txtArr.length; i++){
       if(txtArr[i] === a ){
              aCount += 1;
            }
            if(txtArr[i] === a && txtArr[i + 1] === b){
              afterCount += 1;
            }
     }
     console.log(aCount,afterCount);
     if(aCount === afterCount){
       return true
     }else{
       return false
     }
   }

   function multipleOfIndex(array:number[]):number[] {
  
    let resultArry: number[] = []
    
    for(let i = 1; i < array.length; i++){
        if(  array[i] % i === 0){
             resultArry.push(array[i])
        }
    }
        return resultArry
  }

  const wordsList: string[] =["hey","hello","world","hi","helloWordLongVersion","ververyveryveryveryveryveryLongString","eeeeeeeeeeeteyetyetyetyeteytyeteyteyteyteyetyetyeteyteyeteyteyeteyteyte"] 

  //how many words in this list have more than three letters
  //homework --> figure out how to solve this with reduce and use the documentation 

  function moreThanThree(arr:string[]):number{
   
   
    let result: string[] = arr.reduce((acc,word) => {
  
         if(word.length > 3){
              acc.push(word)
         }
             return acc
   },[] as string[])




    return result.length
  }

  console.log(moreThanThree(wordsList))


  //only E's for vowels and at least 15 letters long

  //redo it using joe's method

  function onlyEs15(arr:string[]):string[]{
      let wordsOver14: string[] = []
      let result:string[] = []
      let wordsWithAUIO:string[] = []
      for( let word of arr){
        if( word.length > 14 ){
           wordsOver14.push(word)
        }
      }


        for(let word of wordsOver14){
           if(word.includes("a") || word.includes("u") ||word.includes("o") ||word.includes("i")){
            wordsWithAUIO.push(word)
           }
        }

        for(let word of wordsOver14){
            if( !wordsWithAUIO.includes(word)){
               result.push(word)
            }
        }
       

     return result
  }

  console.log(onlyEs15(wordsList))