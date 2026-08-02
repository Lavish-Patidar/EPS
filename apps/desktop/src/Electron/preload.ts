import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel: string, data?: unknown) => {
      const validChannels = ['app-version'];
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, data);
      }
    },
    on: (channel: string, func: (event: unknown, data?: unknown) => void) => {
      const validChannels = ['app-version'];
      if (validChannels.includes(channel)) {
        ipcRenderer.on(channel, (event, data) => func(event, data));
      }
    },
    off: (channel: string, func: (event: unknown, data?: unknown) => void) => {
      const validChannels = ['app-version'];
      if (validChannels.includes(channel)) {
        ipcRenderer.off(channel, func);
      }
    },
    invoke: (channel: string, data?: unknown) => {
      const validChannels = ['app-version'];
      if (validChannels.includes(channel)) {
        return ipcRenderer.invoke(channel, data);
      }
    },
  },
});
