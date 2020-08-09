import React, {FC} from "react"
import Head from "next/head"
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
  Typography,
} from "@material-ui/core"
import {ArrowRight} from "@material-ui/icons"

const Home: FC = () => (
  <>
    <Head>
      <title>Kiritoru</title>
      <link rel="icon" href="/logo.512x512.webp" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Container maxWidth="sm">
      <Typography variant="h1">Kiritoru</Typography>
      <Typography>
        Androidの共有メニューにScrapboxにブックマークするアクションを提供するアプリケーションです。
      </Typography>
      <NotesList
        lines={[
          "ホーム画面に追加する",
          "ブックマークしたいページで共有メニューを開く",
          "Kiritoruを選ぶ",
          "ブックマークするScrapboxプロジェクトを入れる",
        ]}
      />
    </Container>
  </>
)
export default Home

interface NotesListProps {
  readonly lines: string[]
}

const NotesList: FC<NotesListProps> = ({lines}) => (
  <List dense>
    {lines.map((l) => (
      <ListItem key={l}>
        <ListItemIcon>
          <ArrowRight />
        </ListItemIcon>
        <ListItemText primary={l} />
      </ListItem>
    ))}
  </List>
)
