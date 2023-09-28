import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopThirteen = React.lazy(() => import("pages/DesktopThirteen"));
const Succes = React.lazy(() => import("pages/Succes"));
const Password = React.lazy(() => import("pages/Password"));
const DesktopSeventeen = React.lazy(() => import("pages/DesktopSeventeen"));
const EmptyStates = React.lazy(() => import("pages/EmptyStates"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const DesktopFifteen = React.lazy(() => import("pages/DesktopFifteen"));
const DesktopEleven = React.lazy(() => import("pages/DesktopEleven"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopTen = React.lazy(() => import("pages/DesktopTen"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopNine = React.lazy(() => import("pages/DesktopNine"));
const DesktopTwelve = React.lazy(() => import("pages/DesktopTwelve"));
const DesktopFourteen = React.lazy(() => import("pages/DesktopFourteen"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const Desktop = React.lazy(() => import("pages/Desktop"));
const DesktopSixteen = React.lazy(() => import("pages/DesktopSixteen"));
const Landing = React.lazy(() => import("pages/Landing"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopsixteen" element={<DesktopSixteen />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/desktopsix" element={<DesktopSix />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/desktopfourteen" element={<DesktopFourteen />} />
          <Route path="/desktoptwelve" element={<DesktopTwelve />} />
          <Route path="/desktopnine" element={<DesktopNine />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
          <Route path="/desktopten" element={<DesktopTen />} />
          <Route path="/desktopseven" element={<DesktopSeven />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/desktopeleven" element={<DesktopEleven />} />
          <Route path="/desktopfifteen" element={<DesktopFifteen />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/emptystates" element={<EmptyStates />} />
          <Route path="/desktopseventeen" element={<DesktopSeventeen />} />
          <Route path="/password" element={<Password />} />
          <Route path="/succes" element={<Succes />} />
          <Route path="/desktopthirteen" element={<DesktopThirteen />} />
          <Route path="/landing" element={<Landing />} />

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
