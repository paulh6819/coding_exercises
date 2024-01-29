function addString(strA: string, strB: string){
        return strA + " " + strB
}

console.log(addString("hell","world"))

console.log("testing testing")


export function bestFriend(txt: string, a: string, b: string): boolean {
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