import Button from "@mui/material/Button";
import type { FC } from "react";

interface SubmitButtonProps {
  readonly disabled: boolean;
}

export const SubmitButton: FC<SubmitButtonProps> = ({ disabled }) => (
  <Button
    disabled={disabled}
    variant="contained"
    color="primary"
    size="large"
    type="submit"
    fullWidth
  >
    Scrap
  </Button>
);
