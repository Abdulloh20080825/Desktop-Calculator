const { app, BrowserWindow } = require('electron');
const os = require('node:os');

const createWin = function () {
	const win = new BrowserWindow({
		width: 300,
		height: 500,
		resizable: false,
	});
	win.setMenuBarVisibility(false);
	win.setTitle('Calculator');
	win.loadFile('index.html');
};

app.whenReady().then(() => {
	createWin();
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWin();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== os.platform()) {
		app.quit();
	}
});
