import { switchTheme } from "./components/switchTheme.js";
import { getGeoData } from "./src/api/geoData.js";
import { getWeatherByForm } from "./components/inputForm.js";

export function initApp() {
  switchTheme();
  getGeoData();
  getWeatherByForm();
}
