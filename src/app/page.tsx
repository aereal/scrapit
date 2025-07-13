import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import {NotesList} from "../components/notes-list"
import {description, title} from "../metadata"

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1">{title}</Typography>
      <Typography>{description}</Typography>
      <NotesList
        items={[
          "ホーム画面に追加する",
          "ブックマークしたいページで共有メニューを開く",
          "Kiritoruを選ぶ",
          "ブックマークするScrapboxプロジェクトを入れる",
        ]}
      />
    </Container>
  )
}
