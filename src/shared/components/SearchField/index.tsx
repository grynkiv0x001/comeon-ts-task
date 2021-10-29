import { TextField } from "@mui/material";

export const SearchField = ({ handleChange }: any) => {
  return (
    <TextField fullWidth label="Search" onChange={handleChange} />
  );
};
