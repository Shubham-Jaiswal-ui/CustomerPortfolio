export const apiCaller = async ({ apiUrl, method }) => {
	try {
		const response = await fetch(apiUrl, {
			method,
		});
		const result = await response.json();
		return { response: result, error: "" };
	} catch (error) {
		console.log("Error occured: ", { error });
		return { error, response: null };
	}
};
