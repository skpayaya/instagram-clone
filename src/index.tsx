import ReactDOM from "react-dom";
import App from "./App";
import { firebase, FieldValue } from "./lib/firebase";
import { FirebaseContext } from "./context/firebase";
import "./styles/app.css";

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById("root")
);
