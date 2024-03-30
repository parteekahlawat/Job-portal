import axios from "axios";

export default async function InternshalaData() {
    const apiUrl = 'https://internshala.com/internships/';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    try {
        // Fetch data using Axios with CORS proxy
        const response = await axios.get(proxyUrl + apiUrl);
        const html = response.data; // Access the HTML content from the response

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Extract elements with class name .democlass
        console.log(doc)
        const element1 = doc.querySelectorAll('.internship_meta .heading_4_5');
        const element2 = doc.querySelectorAll('.internship_meta .heading_6');
        const element3 = doc.querySelectorAll('.internship_meta #location_names span');
        const element4 = doc.querySelectorAll('.internship_meta .stipend');
        
        // Extract the text content of each element
        const titleData = Array.from(element1).map(element => element.textContent?.trim()||'');
        const stipendData = Array.from(element4).map(element => element.textContent?.trim()||'');
        const companyNameData = Array.from(element2).map(element => element.textContent?.trim()||'');
        const locationData = Array.from(element3).map(element => element.textContent?.trim().replace("(Hybrid)", "").replaceAll(" ", '')||'');
        console.log(stipendData);

        return titleData;
    } catch (error) {
        console.error("Error fetching data from the API:", error);
        return null; // Or handle error in another appropriate manner
    }
}
