import Box from "components/Box"

const Home = () => {
  return (
    <Box 
      as="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 50px)"
    >
      Home content
    </Box>
  );
};

export { Home as default }