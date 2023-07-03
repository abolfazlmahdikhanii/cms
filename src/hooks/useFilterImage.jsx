const useFilterImage = (posts) => {
  
    

    const parser = new DOMParser();
    const doc = parser.parseFromString(posts, 'text/html');
    const imgElement = doc.querySelectorAll('img');
    
    if (imgElement) {
  

      
        
        return imgElement[0]?.getAttribute("src")
        
    } else {
      return null;
    }
};

export default useFilterImage