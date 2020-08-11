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
      <meta property="og:image" content="/icon.512x512.png" />
      <meta property="og:title" content="Kiritoru" />
      <meta
        property="og:description"
        content="Androidの共有メニューにScrapboxにブックマークするアクションを提供するアプリケーションです。"
      />
      <meta property="twitter:site" content="@aereal" />
      <meta property="twitter:creator" content="@aereal" />
      <meta
        property="twitter:title"
        content="Kiritoru - Scrap web pages with Scrapbox"
      />
      <meta property="twitter:image" content="/icon.512x512.png" />
      <meta
        property="twitter:description"
        content="Androidの共有メニューにScrapboxにブックマークするアクションを提供するアプリケーションです。"
      />
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
