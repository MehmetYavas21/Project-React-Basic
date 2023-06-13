import { useEffect, useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";
import { RecipeList } from "../components/RecipeList";
import { Heading, Center } from "@chakra-ui/react";

export const RecipeListPage = ({ clickFn, setItem }) => {
  const greeting = "Welcome to Winc Recipe Finder!";
  const [searchField, setSearchField] = useState("");
  const [matchedRecipes, setMatchedRecipes] = useState();

  const recipesArray = [];
  data.hits.forEach((element) => {
    recipesArray.push(element);
  });

  const recipes = [];
  recipesArray.forEach((item) => recipes.push(item.recipe));

  useEffect(() => {
    setMatchedRecipes(recipes);
  }, []);

  const handleChange = (event) => {
    setSearchField(event.target.value);
    const matchedRecipes = recipes.filter((recipe) => {
      const label = recipe.label
        .toLowerCase()
        .includes(searchField.toLowerCase());
      const health = recipe.healthLabels.filter((item) => {
        return item.toLowerCase().includes(searchField.toLowerCase());
      });

      return label || (health.length > 0 ?? true);
    });
    setMatchedRecipes(matchedRecipes);
  };

  return (
    <>
      <Center
        flexDir={"column"}
        gap={4}
        size={["sm", "md", "lg", "xl"]}
        m="auto"
      >
        <Heading
          m="auto"
          size={["sm", "md", "lg", "xl"]}
          color={"white"}
          pt={10}
          alignSelf="center"
        >
          {greeting}
        </Heading>

        <TextInput
          border="1px solid #ddd"
          borderRadius="10"
          changeFn={handleChange}
          pl="10"
          cursor="pointer"
          w={200}
          mb={8}
          color="teal"
          placeholder="custom placeholder"
          _placeholder={{ color: "inherit" }}
        />
        {matchedRecipes && (
          <RecipeList
            recipes={matchedRecipes}
            clickFn={clickFn}
            setItem={setItem}

            // display="flex"
            // flexDirection="column"
            // alignSelf="center"
          />
        )}
      </Center>
    </>
  );
};
