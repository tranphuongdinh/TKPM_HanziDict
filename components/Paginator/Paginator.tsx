import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, PRIMARY_COLOR_HOVER } from "../../constants/style";
import { PaginatorProps } from "../../models/models";

const PaginatorWrapper = styled.div`
	display: flex:
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 20px 0;

	button {
		border: none;
		background: none;
		color: ${PRIMARY_COLOR};
		font-size: 1.5rem;
		transition: all .2s ease-in-out;
		&:hover {
			color: ${PRIMARY_COLOR_HOVER};
			cursor: pointer;
		}
		&.disabled {
			color: #ccc;
			cursor: not-allowed;
			pointer-events: none;
		}
	}

	ul {
		margin: 0;
		padding:0 ;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;

		li {
			margin: 0 5px;
			display: inline-block;
			padding: 2px 10px;
			border: 1px solid ${PRIMARY_COLOR};
			text-align: center;
			font-size: .9rem;
			line-height:1.75;
			cursor: pointer;
			border-radius: 5px;
			transition: all .2s ease-in-out;

			&:hover, &.active {
				background: ${PRIMARY_COLOR};
				color: #fff;
			}
		}
	}
`;

const Paginator: React.FC<PaginatorProps> = ({
    currentPage,
    count,
    totalPages,
    totalCount,
}) => {
    const router = useRouter();

    const handleChangePage = (page: number) => {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                page: page,
            },
        });
    };

    return (
        <PaginatorWrapper>
            <button
                className={`left ${currentPage <= 1 && "disabled"}`}
                onClick={() =>
                    currentPage > 1 && handleChangePage(currentPage - 1)
                }
            >
                <i className="fa-solid fa-angle-left"></i>
            </button>
            {currentPage < totalPages - 2 && (
                <ul>
                    {[...Array(3)].map((_, index) => {
                        const page = currentPage + index;
                        if (page > 0 && page <= totalPages)
                            return (
                                <li
                                    key={index}
                                    className={`${
                                        currentPage === page && "active"
                                    }`}
                                    onClick={() => handleChangePage(page)}
                                >
                                    {page}
                                </li>
                            );
                    })}
                    {currentPage < totalPages - 2 && <span>...</span>}
                    <li
                        onClick={() => {
                            handleChangePage(totalPages);
                        }}
                    >
                        {totalPages}
                    </li>
                </ul>
            )}
            {currentPage >= totalPages - 2 && (
                <ul>
                    {[...Array(3)].map((_, index) => {
                        const page = totalPages - 2 + index;
                        if (page <= totalPages && page > 0)
                            return (
                                <li
                                    key={index}
                                    className={`${
                                        currentPage === page && "active"
                                    }`}
                                    onClick={() => handleChangePage(page)}
                                >
                                    {page}
                                </li>
                            );
                    })}
                </ul>
            )}
            <button
                className={`${currentPage >= totalPages && "disabled"} right`}
                onClick={() =>
                    currentPage <= totalPages - 1 &&
                    handleChangePage(currentPage + 1)
                }
            >
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </PaginatorWrapper>
    );
};

export default Paginator;
