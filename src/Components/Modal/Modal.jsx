import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Outlet } from "react-router-dom";
import Addnew from "../Profile/Addnew";
import EditPost from "../Profile/EditPost";
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: 400, sm: "80vw", xs: "80vw" },
  height: { md: 400, sm: "80vh", xs: "80vh" },
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 3,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export const ModalAddNew = (props) => {
  const { open, setOpen, getPost } = props;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { md: 400, sm: "80vw", xs: "80vw" },
    height: { md: 400, sm: "80vh", xs: "80vh" },
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: 3,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton onClick={() => setOpen(false)}>
          <CloseSharpIcon />
        </IconButton>
        <Addnew setOpen={setOpen} getPost={getPost} />
      </Box>
    </Modal>
  );
};
export const ModalEdit = (props) => {
  const { open, setOpen, getPost, idLine } = props;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { md: 400, sm: "80vw", xs: "80vw" },
    height: { md: 400, sm: "80vh", xs: "80vh" },
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: 3,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton onClick={() => setOpen(false)}>
          <CloseSharpIcon />
        </IconButton>
        <EditPost setOpen={setOpen} idLine={idLine} />
      </Box>
    </Modal>
  );
};
