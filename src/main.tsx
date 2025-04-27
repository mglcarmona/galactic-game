import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Do you want to update?")) {
      updateSW(true);
    }
  },
});

render(<App />, document.getElementById("app")!);
