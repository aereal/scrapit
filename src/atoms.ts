import {atom, useAtomValue, useSetAtom} from "jotai"

const title = atom("")

export const useTitleValue = () => useAtomValue(title)
export const useSetTitle = () => useSetAtom(title)

const url = atom("")

export const useURLValue = () => useAtomValue(url)
export const useSetURL = () => useSetAtom(url)

const project = atom("")

export const useProjectValue = () => useAtomValue(project)
export const useSetProject = () => useSetAtom(project)

const canShare = atom((get) => get(url) !== "" && get(project) !== "")

export const useCanShareValue = () => useAtomValue(canShare)
