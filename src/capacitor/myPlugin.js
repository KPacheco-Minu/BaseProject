import { Plugins } from "@capacitor/core";

const { MyPlugin } = Plugins;

export const openNativeCamera = async () => {
  try {
    await MyPlugin.openCamera();
  } catch (err) {
    console.error("Error opening camera");
  }
};