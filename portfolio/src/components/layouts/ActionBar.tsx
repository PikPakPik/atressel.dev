import DownloadResume from "./DownloadResume"
import LangageMenu from "./LangageMenu"
import ThemeSwitch from "./ThemeSwitch"

const ActionBar = () => {
    return (
        <div className="fixed bottom-5 left-3 flex flex-col gap-3">
            <LangageMenu />
            <DownloadResume />
            <ThemeSwitch />
        </div>
    )
}

export default ActionBar