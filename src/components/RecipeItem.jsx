import { Box, Image, Text, Center, List } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, setItem }) => {
  
  const VeganAndVegetarian = () => {
    return (
      <ul>
        {recipe.healthLabels.map((item) => {
          if (item == "Vegetarian" || item == "Vegan") {
            return (
              <li key={recipe.label} style={{ listStyle: "none" }}>
                {item}{" "}<hr />
              </li>
            );
          }
        })}
      </ul>
    );
  };

 const Diet = () => {
      return (
          <ul>
            {recipe.dietLabels.map((item) => (
                <li key={recipe.label} style={{listStyle: "none",}} > 
                {item}<hr />
                </li>
                ))}
          </ul>
          );
  };

  const Cautions = () => {
     return (
          <ul>
            {recipe.cautions.map((item) => (
                <li key={recipe.label} style={{listStyle: "none",}} > 
                {item}<hr />
                </li>
                ))}
          </ul>
          );
  };

  return (
    <Center flexDir={"column"} size={["sm", "md", "lg", "xl"]} m="auto" p="4">
      <Box
        background="#ddd"
        borderRadius="10px"
        width="100%"
        h="450px"
        cursor={"pointer"}
        onClick={() => setItem(recipe)}
      >
        <Box gap={1} display="flex" width="100%" flexDirection="column">
          <Image
            src={recipe.image}
            w="100%"
            h={150}
            borderRadius="10px"
            borderBottomRadius={0}
            alt={recipe.label}
          />
          <Box>
            <Text fontWeight={"450"} textTransform="uppercase" color="#999">
              {recipe.mealType}
            </Text>
            <Text textTransform="Capitalize" fontWeight="bolder">
              {recipe.label}
            </Text>
            <List
              bg="red.200"
              borderRadius="10"
              fontSize={["sm", "md", "lg"]}
              color="red.600"
              alignSelf="center"
              mb="1"
              ml="20%"
              mr="20%"
            >
              <VeganAndVegetarian />
            </List>
            <Box>
              {recipe.dietLabels != "" && (
                <Box display="flex" flexDirection="column">
                  <List
                    color="green.900"
                    bg="green.200"
                    borderRadius="10"
                    fontSize={["sm", "md", "lg"]}
                    h="auto"
                    pl={2}
                    pr={2}
                    m={1}
                    alignSelf="center"
                  >
                    <Diet />
                  </List>
                </Box>
              )}
            </Box>
            <Text textTransform="capitalize" p="1px" color="#666">
              {recipe.dishType}
            </Text>

            <Box>
              {recipe.cautions != "" && (
                <Box display="flex" flexDirection="column" p={1}>
                  <p>Coution:</p>
                  <List
                    textTransform="uppercase"
                    color="red"
                    backgroundColor="orange"
                    borderRadius="10"
                    fontSize={["sm", "md", "lg"]}
                    m="auto"
                    pl={2}
                    pr={2}
                  >
                    <Cautions />
                  </List>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};
