import { createRoot } from "react-dom/client";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "../src/utils/firebaseConfig";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig} suspence={false}>
    <App />
  </FirebaseAppProvider>
);
