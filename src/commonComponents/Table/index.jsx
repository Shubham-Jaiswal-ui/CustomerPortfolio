import React from "react";
import Table from "react-bootstrap/Table";
import "./index.css";

export const TableView = (props) => {
	const { tableHeaders, tableBody } = props;
	return (
		<div className="table-wrapper">
			<Table striped bordered hover variant="dark">
				<thead className="sticky-header">
					<tr>
						{tableHeaders?.map((heading) => {
							return <th key={heading.key}>{heading.value}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{tableBody?.map((content) => {
						return (
							<tr key={content[tableHeaders[0].key]}>
								{tableHeaders?.map((heading, index) => {
									return (
										<td key={`${content[heading.key]}${index}`}>
											{content[heading.key]}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
