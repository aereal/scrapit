import {useCanShareValue} from "@/atoms"
import Button from "@mui/material/Button"
import type {FC} from "react"

export const SubmitButton: FC = () => (
  <Button
    disabled={!useCanShareValue()}
    variant="contained"
    color="primary"
    size="large"
    type="submit"
    fullWidth
  >
    Scrap
  </Button>
)
