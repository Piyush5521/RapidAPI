


let setCompanyName = $(".container");

const url = 'https://linkedin-data-api.p.rapidapi.com/get-company-insights?username=amazon';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'enter your api here',
		'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
	}
};

async function fetchCompanyInsights() {
	try {
		const response = await fetch(url, options);
		const result = await response.json(); 
		console.log(result.data.company.name);
        let companyName = result.data.company.name;
        $(".container").text(companyName); 
	} catch (error) {
		console.error(error);
	}
}


// Call the async function
fetchCompanyInsights();
