import { useRouter } from "next/router";
import PaginacaoItem from "./PaginacaoItem";
import * as styles from "./style.module.css";
import { useCallback } from "react";

const Paginacao = ({
  totalPages,
  page,
  hasPrevPage,
  hasNextPage,
  prevPage,
  nextPage,
}) => {
  const router = useRouter();
  const itensPaginacao = new Array(totalPages)
    .fill(0)
    .map((_, index) => index + 1);

  const changePage = useCallback(
    (page) => {
      router.replace({
        query: {
          ...router.query,
          page,
        },
      });
    },
    [router]
  );

  return (
    <div className={styles.paginacao}>
      <PaginacaoItem
        active={false}
        disabled={page === 1}
        number={"<<"}
        onClick={() => changePage(1)}
      />
      <PaginacaoItem
        active={false}
        disabled={!hasPrevPage}
        number={"<"}
        onClick={() => changePage(prevPage)}
      />
      {itensPaginacao.map((pageNumber) => (
        <PaginacaoItem
          active={pageNumber === page}
          number={pageNumber}
          onClick={() => changePage(pageNumber)}
        />
      ))}
      <PaginacaoItem
        active={false}
        disabled={!hasNextPage}
        number={">"}
        onClick={() => changePage(nextPage)}
      />
      <PaginacaoItem
        active={false}
        disabled={page === totalPages}
        number={">>"}
        onClick={() => changePage(totalPages)}
      />
    </div>
  );
};

export default Paginacao