import List from "@mui/material/List"
import type {FC} from "react"
import {Item} from "./item"

interface NotesListProps {
  readonly items: string[]
}

export const NotesList: FC<NotesListProps> = ({items}) => (
  <List>
    {items.map((item) => (
      <Item key={item}>{item}</Item>
    ))}
  </List>
)
