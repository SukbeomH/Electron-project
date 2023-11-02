import { systemPreferences } from "electron";

export const mediaAccess = async (): Promise<void> => {
	const mic =
		systemPreferences.getMediaAccessStatus("microphone");
	const camera =
		systemPreferences.getMediaAccessStatus("camera");
	if (mic !== "granted") {
		await systemPreferences.askForMediaAccess("microphone");
	}
	if (camera !== "granted") {
		await systemPreferences.askForMediaAccess("camera");
	}
	return;
};
