
const useFilterPargraph = (posts) => {
  
    const data=[]

    const parser = new DOMParser();
    const doc = parser.parseFromString(posts, 'text/html');
    const paragraphElement = doc.querySelectorAll('p');
    
    if (paragraphElement) {
        
        paragraphElement.forEach((pEL)=>{
            data.push(pEL.innerHTML)
        })

        return data.join(" ")
        
        
    } else {
      return null;
    }
};


export default useFilterPargraph