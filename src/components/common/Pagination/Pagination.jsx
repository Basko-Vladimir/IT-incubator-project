import React, {useState} from "react";
import styles from "./Pagination.module.css";

const Pagination = ({portionSize = 10, ...restProps}) => {
    const pagesCount = Math.ceil(restProps.totalCount / restProps.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionAmount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setCurrentPortion] = useState(1);
    const leftPortionLimit = (portionNumber - 1) * portionSize + 1;
    const rightPortionLimit = portionNumber * portionSize;

    const switchPortion = (e) => {
        switch (e.currentTarget.innerText) {
            case 'Next':
                setCurrentPortion(portionNumber + 1);
                break;
            case 'Previous':
                setCurrentPortion(portionNumber - 1);
                break;
        }
    };

    return (
        <div className={styles.pagesNumberBlock}>
            {portionNumber > 1 && <span onClick={switchPortion}>Previous</span>}
            {pages.filter(page => page >= leftPortionLimit && page <= rightPortionLimit).map(page => {
                return (
                    <span key={page}
                          className={restProps.currentPage === page ? styles.active : ''}
                          onClick={() => restProps.onChangePage(page)}> {page} </span>
                )
            })}
            {portionAmount > portionNumber && <span onClick={switchPortion}> Next</span>}
        </div>
    )
};

export default Pagination;