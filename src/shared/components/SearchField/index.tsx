import { TextField } from "@mui/material";

export const SearchField = ({ handleChange }: any) => {
  return (
    <TextField fullWidth placeholder="Search games" onChange={handleChange} />
  );
};
