import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { Formik } from "formik"; //form library
import * as yup from "yup"; //validation library
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone"; //file upload library
import FlexBetween from "components/FlexBetween";

const Form = () => {
  return <div></div>;
};

export default Form;
