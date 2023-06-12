import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Center } from "@chakra-ui/react";

export const App = () => {
  const [getItem, setItem] = useState(false);

  return (
    <Center flexDir={"column"} bg={"blue.700"} height="100%">
      {getItem ? (
        <RecipePage item={getItem} setItem={setItem} />
      ) : (
        <>
          <RecipeListPage clickFn={setItem} setItem={setItem} />
        </>
      )}
    </Center>
  );
};
