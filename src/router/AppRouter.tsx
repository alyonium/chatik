import {Routes, Route} from "react-router-dom";
import AuthLayout from "../modules/auth/AuthLayout.tsx";
import Login from "../modules/auth/components/login/Login.tsx";
import Registration from "../modules/auth/components/registration/Registration.tsx";

const AppRouter = () => {
    return (<Routes>
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
        </Route>
    </Routes>)
}

export default AppRouter;