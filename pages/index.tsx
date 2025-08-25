import Box from "../src/components/Box/Box";
import theme from "../src/theme/theme";

export default function HomeScreen() {
  return (
    <main>
      <Box
        tag="main"
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
        }}
      >
        <h1>Hello There</h1>
        <span>General Kenobi...</span>
        <p>you're a bold one!</p>
      </Box>
    </main>
  );
}
