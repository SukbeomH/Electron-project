import { exec, execSync } from "child_process";
import { BrowserWindow } from "electron";
import { app } from "electron";

// Get the number of displays
export const getHardWareDisplays = (): number => {
		if (process.platform === "darwin") {
		// execute the shell script to get the displays
		const displays = execSync(
			`system_profiler SPDisplaysDataType -json`
		).toString();
		// parse the displays
		const parsedDisplays = JSON.parse(displays);
		// spdisplays_ndrvs number is the number of displays
		const numberOfDisplays =
			parsedDisplays.SPDisplaysDataType[0].spdisplays_ndrvs
				.length;
		return Number(numberOfDisplays);
	} else if (process.platform === "win32") {
		// execute the shell script to get the displays(cmd)
		const displayCMD = Number(execSync(
			`for /F %M in ('wmic path Win32_PnPEntity where "Service='monitor' and Status='OK'" get DeviceID /VALUE ^ ^| find /C "=" ') do echo %M`
		));
		const displayPS = Number(execSync(
			`powershell.exe @(Get-CimInstance -Namespace root\\wmi -ClassName WmiMonitorBasicDisplayParams).Length`
		));
		// larger number is the number of displays
		const displays = displayCMD > displayPS ? displayCMD : displayPS;
		
		return displays;
	}
};

// Get Display information and check if there are more than one display in every 10 seconds
export function detectMonitor(url: string, window: BrowserWindow, timeout: NodeJS.Timeout): void {
	// get Monitors
	const monitors = getHardWareDisplays();
	// Check if there are more than one display
	if (monitors > 1) {
		clearInterval(timeout);
		window.loadURL(url);
	}
};
