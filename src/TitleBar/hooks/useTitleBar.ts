export const useTitleBar = () => {
    const appClose = () => window.electronAPI.appClose()
    const appMinimize = () => window.electronAPI.appMinimize()
    const appMaximize = () => window.electronAPI.appMaximize()

    return { appClose, appMaximize, appMinimize }
}