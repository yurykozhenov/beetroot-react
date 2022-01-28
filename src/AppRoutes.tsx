import React from "react";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import AuthPage from "./components/AuthPage";

const MainPage = React.lazy(() => import("./components/MainPage"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="/users/:userId/:postId" element={<UserDetailsPage />} />
      <Route path="*" element={<>Page Not Found</>} />
    </Routes>
  );
}

function UserDetailsPage() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  console.log("params", params);
  console.log("searchParams", searchParams.get("someParam"));
  console.log("searchParams", searchParams.get("someParam2"));

  // useEffect(() => {
  //   fetch(`http://.../${params.userId}`)
  // }, [params.userId]);

  return null;
}
