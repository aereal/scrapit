import ArrowRight from "@mui/icons-material/ArrowRight"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import type {FC, ReactNode} from "react"

export const Item: FC<{children: ReactNode}> = ({children}) => (
  <ListItem>
    <ListItemIcon>
      <ArrowRight />
    </ListItemIcon>
    <ListItemText primary={children} />
  </ListItem>
)
