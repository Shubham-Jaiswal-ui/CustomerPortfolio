import React, { useEffect, useState } from "react";
import { TableView } from "../commonComponents/Table";
import { PaginatedView } from "../commonComponents/Pagination";
import Spinner from "react-bootstrap/Spinner";
import { apiCaller } from "../utils/apiCaller";
import "./index.css";
const {
	FETCH_DATA_URL,
	HTTP_METHODS: { GET },
} = require("../utils/constants");

export const FundsList = () => {
	const tableHeaders = [
		{ key: "s.no", value: "S.No" },
		{ key: "percentage.funded", value: "Percentage funded" },
		{ key: "amt.pledged", value: "Amount pledged" },
	];

	const itemsPerPageOptions = [5, 10, 20, 30, 50];
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
	const [selectedData, setSelectedData] = useState([]);
	const [customerData, setCustomerData] = useState({
		isLoading: true,
		error: "",
		data: [],
	});

	const fetchCustomerData = async () => {
		const { response, error } = await apiCaller({
			apiUrl: FETCH_DATA_URL,
			method: GET,
		});

		setCustomerData({
			...customerData,
			data: response,
			isLoading: false,
			error,
		});
	};
	useEffect(() => {
		fetchCustomerData();
	}, []);

	useEffect(() => {
		const extractedData = customerData?.data?.slice(
			(currentPage - 1) * itemsPerPage,
			itemsPerPage * currentPage
		);
		setSelectedData(extractedData);
	}, [customerData, itemsPerPage, currentPage]);
	if (customerData.isLoading) {
		return <Spinner animation="border" variant="dark" />;
	}
	if (customerData?.error) {
		return <div className="error-text">Error in fetching the response!</div>;
	}
	return (
		<div>
			<TableView tableHeaders={tableHeaders} tableBody={selectedData} />
			<PaginatedView
				totalSize={customerData?.data?.length}
				itemsPerPage={itemsPerPage}
				setItemsPerPage={setItemsPerPage}
				itemsPerPageOptions={itemsPerPageOptions}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};
