import { Suspense } from "react";

import { Outlet } from 'react-router-dom';

import AppBar from "components/AppBar"
import Box from "./Box";

const Layout = () => {
  return (
    <Box mx="auto" px="20px" maxWidth="960px">
      <AppBar />
      <Suspense fallback={<> Loading </>}>
        <Outlet  />
      </Suspense>
    </Box>
  );
};

export { Layout as default }