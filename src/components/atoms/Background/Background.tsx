//Components
import Box from "../Box/Box";

interface BackgroundProps {
  children?: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  const imageUrl = "/images/gradient-bg-code-and-coffe.png";
  return(
    <Box 
      styleSheet={{
          width: '100%',
          minHeight: '100%',
          backgroundImage: `url("${imageUrl}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative'
        }}
    >
      {children}
    </Box>

  ) 
}