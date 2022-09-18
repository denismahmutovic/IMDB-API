import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginacija = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(14);

  // const strane = Math.ceil(totalPosts / postsPerPage);
  // setPages(strane);

  function handleChange(event, value) {
    setPage(value);
    setCurrentPage(value);
    window.scroll(0, 0);
  }

  return (
    <div style={{ margin: "40px" }}>
      <Stack spacing={3}>
        {/* <Typography>Page: {page}</Typography> */}
        <Pagination
          size="large"
          variant="outlined"
          shape="rounded"
          count={pages}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default Paginacija;
