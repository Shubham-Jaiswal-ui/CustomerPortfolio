import React from "react";
import "./index.css";

export const Pagination = (props) => {
	const { currentPage, totalPages, setCurrentPage } = props;
	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	// Change current page
	const createPageNumbers = () => {
		const pages = [];
		const ellipsis = "...";

		if (totalPages <= 5) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			// Add first page
			pages.push(1);

			// Add ellipsis after first page if needed
			if (currentPage > 3) {
				pages.push(ellipsis);
			}

			// Add current page and surrounding pages
			if (currentPage > 2 && currentPage < totalPages - 1) {
				pages.push(currentPage - 1, currentPage, currentPage + 1);
			} else if (currentPage === 2) {
				pages.push(2, 3);
			} else if (currentPage === totalPages - 1) {
				pages.push(totalPages - 2, totalPages - 1);
			}

			// Add ellipsis before last page if needed
			if (currentPage < totalPages - 2) {
				pages.push(ellipsis);
			}

			// Add last page
			pages.push(totalPages);
		}

		return pages;
	};

	const pageNumbers = createPageNumbers();
	return (
		<div className="pagination">
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Prev
			</button>

			{pageNumbers.map((page, index) => (
				<span key={index}>
					{page === "..." ? (
						<span className="ellipsis">...</span>
					) : (
						<button
							onClick={() => handlePageChange(page)}
							className={page === currentPage ? "active" : ""}
						>
							{page}
						</button>
					)}
				</span>
			))}

			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	);
};
