import News from "./admin/News";
import Login from "./admin/Login";
import Course from "./admin/Course";
import LayoutPage from "./admin/layout";
import React, { useEffect, useState } from "react";
import Statistics from "./admin/Statistics";
import FaqSection from "./admin/FaqSection";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { DefaultPage } from "./admin/Default";

export default function App() {
  const [access, setAccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { data } = await axios.post("/auth/token/exists");
      if (data.status === 200) {
        setAccess(true);
      } else {
        setAccess(false);
        navigate("/admin/login");
      }
    } catch (error) {
      setAccess(false);
      navigate("/admin/login");
    }
  }

  if (access === null) return null;

  return (
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route path="/admin" element={<LayoutPage />}>
        <Route index element={<Statistics />} />
        <Route path="/admin/news" element={<News />} />
        <Route path="/admin/news/:id" element={<News />} />
        <Route path="/admin/courses" element={<Course />} />
        <Route path="/admin/courses/:id" element={<Course />} />
        <Route path="/admin/faq-section" element={<FaqSection />} />
      </Route>
      <Route path="/admin/login" element={<Login access={access} />} />
    </Routes>
  );
}
