import {
  Button,
  Typography,
  Box,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Table,
  IconButton,
  Pagination,
  Container,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Profile/Sidebar";
import { httpClient } from "../getApi";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { ModalAddNew, ModalEdit, style } from "../Components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import SelecTags from "../Components/Profile/SelectTags";
import { ButtonCustom } from "../Components/Header/Header";
import styled from "@emotion/styled";
const Profile = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listData, setListData] = useState([]);
  const [total, setTotal] = useState();
  const [postData, setPostData] = useState([]);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [tagName, setTagName] = useState("");
  const [idLine, setIdLine] = useState("");
  const [tag, setTag] = useState([]);
  const getPost = () => {
    httpClient.get(`posts?page=${currentPage}`).then((res) => {
      setListData(res.data.posts);
      setTotal(res.data?.total_page);
    });
  };
  const classified = () => {
    httpClient.get(`posts?tags=${tagName}`).then((res) => {
      setListData(res.data.posts);
      setTotal(res.data?.total_page);
    });
  };
  const getTags = () => {
    httpClient.get("/posts/tags").then((res) => setTag(res.data));
  };
  const deletePost = (id) => {
    httpClient.delete(`/posts/${id}`).then(() => getPost());
  };

  useEffect(() => {
    getTags();
  }, []);

  useEffect(() => {
    tagName ? classified() : getPost();
  }, [currentPage, tagName]);

  const handlePageClick = (currentPage) => {
    setCurrentPage(currentPage);
  };
  const TableCustom = styled(TableCell)({
    border: "1px solid black",
  });
  return (
    <>
      <Box display="flex">
        <Sidebar />
        <Container>
          <Box>
            <Box display="flex" justifyContent="space-between" mt="126px">
              <ButtonCustom
                onClick={() => setOpenAddNew(true)}
                sx={{
                  mb: "34.72px",
                }}
                variant="contained"
              >
                <Typography
                  textTransform="none"
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="160%"
                  letterSpacing="0.005em"
                  fontSize="16px"
                  padding="18px 68.7px 15.63px 81px"
                >
                  Add New
                </Typography>
              </ButtonCustom>
              <Box display="flex">
                <TextField
                  sx={{
                    width: "20vw",
                    height: "49px",
                  }}
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <SelecTags
                  tag={tag}
                  setTag={setTag}
                  tagName={tagName}
                  setTagName={setTagName}
                />
              </Box>
            </Box>
            <Box>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650, minHeight: 650 }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCustom>ID</TableCustom>
                      <TableCustom align="center">Title</TableCustom>
                      <TableCustom align="center">Description</TableCustom>
                      <TableCustom align="center">Tags</TableCustom>
                      <TableCustom align="center">Actions</TableCustom>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listData
                      .filter((value) => {
                        if (search === "") {
                          return value;
                        } else if (
                          value.title
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((row, index) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&th": { border: 10 },
                          }}
                        >
                          <TableCustom component="th" scope="row">
                            {index}
                          </TableCustom>
                          <TableCustom align="center">{row.title}</TableCustom>
                          <TableCustom align="center">
                            {row.description}
                          </TableCustom>
                          <TableCustom align="center">{row.tags}</TableCustom>
                          <TableCustom align="center">
                            <Box display="flex" justifyContent="center">
                              <IconButton
                                onClick={() => {
                                  setIdLine(row.id);
                                  setOpenEdit(true);
                                }}
                              >
                                <CreateIcon />
                              </IconButton>
                              <IconButton onClick={() => deletePost(row.id)}>
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </TableCustom>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{
                  float: "right",
                  margin: "36px 30px",
                }}
              >
                <Pagination
                  hidePrevButton
                  hideNextButton
                  onChange={(e) => {
                    handlePageClick(e.target.textContent);
                  }}
                  count={total}
                  variant="outlined"
                  color="primary"
                />
              </Box>
            </Box>
          </Box>
        </Container>
        <ModalEdit open={openEdit} setOpen={setOpenEdit} idLine={idLine} />
        <ModalAddNew
          getPost={getPost}
          setOpen={setOpenAddNew}
          open={openAddNew}
        />
      </Box>
    </>
  );
};

export default Profile;
