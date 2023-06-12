import { Center, SimpleGrid, GridItem } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

// check the following line, it seems to be unnecessary "{recipes.map((recipe) => ("

export const RecipeList = ({ recipes, setItem }) => {
  return (
    <>
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          textAlign="center"
          rounded="lg"
          maxW="1224px"
          minH="80vh"
          pb="20"
        >
          {recipes.map((recipe) => (
            <>
              <GridItem width="auto" colSpan="1">
                <RecipeItem recipe={recipe} setItem={setItem} />
              </GridItem>
            </>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};
