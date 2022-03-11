import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={ROUTES.LOGIN}
                    element={
                        <Suspense fallback={<p>Loading...</p>}>
                            <Login />
                        </Suspense>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
