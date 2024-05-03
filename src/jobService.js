const fetchJobListings = async (offset) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const body = JSON.stringify({
      "limit": 10,
      "offset": offset 
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };
  
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      if (!response.ok) {
        throw new Error('Failed to fetch job listings');
      }
      const data = await response.json();
      return data.jdList;
      
    } catch (error) {
      console.error(error);
      return []; 
    }
  };
    
    export default fetchJobListings;