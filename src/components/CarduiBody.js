import { Box, useStyleConfig } from "@chakra-ui/react";
function CarduiBody(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("CarduiBody", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default CarduiBody;