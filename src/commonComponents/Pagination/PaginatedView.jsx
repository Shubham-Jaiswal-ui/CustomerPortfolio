import React from "react";
import "./index.css";
import { ViewSize } from "./ViewSize";
import { Pagination } from "./Pagination";
export const PaginatedView = (props) => {
	const {
		totalSize,
		itemsPerPage,
		setItemsPerPage,
		itemsPerPageOptions,
		setCurrentPage,
		currentPage,
	} = props;

	const totalPages = Math.ceil(totalSize / itemsPerPage);

	// Change items per page
	const handleItemsPerPageChange = (event) => {
		setItemsPerPage(Number(event.target.value));
		setCurrentPage(1); // Reset to first page when items per page changes
	};

	return (
		<div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				setCurrentPage={setCurrentPage}
			/>
			<ViewSize
				itemsPerPageOptions={itemsPerPageOptions}
				itemsPerPage={itemsPerPage}
				handleItemsPerPageChange={handleItemsPerPageChange}
			/>
		</div>
	);
};
