import find from "find-process";
import { killList } from "./killList";
import { exec } from "child_process";

// Terminate Processes divided by OS
const killWindows = (appName: string): Promise<void> => {
	exec(`TASKKILL /F /IM ${appName}`);
	return;
};
const killMac = (appName: string): Promise<void> => {
	exec(`killall ${appName}`);
	return;
};

// Get Tasklist divided by OS And Kill
export const getTaskList = async (): Promise<void> => {
	const appList:{
    pid: number;
    name: string;
    cmd: string;
	}[] = await find("name", "");	
	const existApp: string[] = [];
	for (let app of appList) {
		existApp.push(app.name);
	}
	const killSet: string[] = [...new Set(existApp)];

	killList.forEach((listItem) => {
		killSet.forEach((killItem) => {
			if (killItem.toLowerCase().includes(listItem.toLowerCase())) {
				if (process.platform === "win32") {
					killWindows(killItem);
				} else if (process.platform === "darwin") {
					killMac(killItem);
				}
			}
		});
	});
};