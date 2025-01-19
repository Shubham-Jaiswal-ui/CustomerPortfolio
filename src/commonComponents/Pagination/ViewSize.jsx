import React from "react";
import "./index.css";
export const ViewSize = (props) => {
	const { itemsPerPageOptions, itemsPerPage, handleItemsPerPageChange } = props;
	return (
		<div className="items-per-page">
			<label>Items per page: </label>
			<select value={itemsPerPage} onChange={handleItemsPerPageChange}>
				{itemsPerPageOptions.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};
