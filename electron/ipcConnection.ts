import { BrowserWindow } from 'electron';

import { ipcControlWindow } from './ipcConnections/ipcControlWindow';
import { ipcReadFileTranslate } from './ipcConnections/ipcReadFileTranslate';
import { ipcGenerateFilesTranslate } from './ipcConnections/ipcGenerateFilesTranslate';
import { ipcControlTranslateProject } from './ipcConnections/ipcControlTranslateProject';
import { ipcTranslateGoogle } from './ipcConnections/ipcTranslateGoogle';

export const ipConnection = (app: Electron.App, win: BrowserWindow) => {

    ipcReadFileTranslate( app, win );

    ipcGenerateFilesTranslate( app, win );

    ipcControlWindow( app, win );

    ipcControlTranslateProject( app, win );

    ipcTranslateGoogle( app, win );

}