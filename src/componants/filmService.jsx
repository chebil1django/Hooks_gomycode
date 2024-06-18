const baseUrl = process.env.REACT_APP_API_BASE_URL;
console.log(baseUrl)

export async function getProducts(){
    const response = await fetch('./db2.json');
    if(response.ok) return response.json();
    throw response;
}