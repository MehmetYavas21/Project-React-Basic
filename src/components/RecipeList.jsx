import { Center, SimpleGrid, GridItem } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

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
            <GridItem width="auto" colSpan="1" key={recipe.label}>
              <RecipeItem recipe={recipe} setItem={setItem} />
            </GridItem>
          ))}
        </SimpleGrid>
        </SimpleGrid>
      </Center>
    </>
  );
};
