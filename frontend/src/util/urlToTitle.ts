export const urlToTitle = (url: string) => {    
    const title = url.split('-')
    return capitalizeAndJoinStrings(title);
}


function capitalizeAndJoinStrings(arr: string[]): string {
    const capitalizedArr = arr.map((str) => {
      const firstLetter = str.charAt(0).toUpperCase();
      const restOfString = str.slice(1);
      return `${firstLetter}${restOfString}`;
    });
  
    return capitalizedArr.join(' ');
  }