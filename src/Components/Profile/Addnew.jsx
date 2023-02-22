import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { httpClient } from "../../getApi";

const Addnew = ({ setOpen, getPost }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const submitCheck = (event) => {
    event.preventDefault();
    httpClient
      .post("posts", {
        title: title,
        description: description,
        tags: [tags],
      })
      .then((res) => {
        setOpen(false);
        getPost();
      })
      .catch((eror) => console.log(eror));
  };
  return (
    <>
      <Typography mb={3} variant="h6" textAlign="center">
        Add New Post
      </Typography>
      <Box component="form" onSubmit={submitCheck}>
        <TextField
          fullWidth
          name="title"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          label="title"
          variant="filled"
        />
        <TextField
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          id="description"
          label="description"
          variant="filled"
          sx={{
            my: 2,
          }}
        />
        <TextField
          name="tags"
          type="text"
          fullWidth
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          id="tags"
          label="tags"
          variant="filled"
        />
        <Button sx={{ mt: 2 }} variant="contained" fullWidth type="submit">
          Send
        </Button>
      </Box>
    </>
  );
};

export default Addnew;
