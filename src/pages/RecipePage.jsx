import {
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { Button } from "../components/ui/Button";
import { data } from "../utils/data";

export const RecipePage = ({ item, setItem }) => {
  
  const goBack = () => {
    setItem("");
  };
  
  const handleChage = (recipe) => {
    const selectedItem = data.hits.filter((item) => {
      return item.recipe.label == recipe.target.value;
    });

    setItem(selectedItem[0].recipe);
  };
  const SelectionBox = () => {
    return (
      <select onChange={(recipe) => handleChage(recipe)}>
        {data.hits.map((re) => {
          return <option key={re.recipe.label}>{re.recipe.label}</option>;
        })}
      </select>
    );
  };

  const Diet = () => {
      return (
          <ul>
        {item.dietLabels.map((item) => (
          <li key={item.label} style={{ listStyle: "none" }}>
            {item}
          </li>
        ))}
      </ul>
          );
  };

 const Cautions = () => {
      return (
      <ul>
        {item.cautions.map((item) => (
          <li key={item.label} style={{ listStyle: "none" }}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const energy = item.totalNutrients.ENERC_KCAL.quantity;
  const energyNumber = Math.trunc(energy);
  const carbonHid = item.totalNutrients.CHOCDF.quantity;
  const carbonHidNum = Math.trunc(carbonHid);
  const protein = item.totalNutrients.PROCNT.quantity;
  const proteinNum = Math.trunc(protein);
  const fat = item.totalNutrients.FAT.quantity;
  const fatNum = Math.trunc(fat);
  const cholestrl = item.totalNutrients.CHOLE.quantity;
  const cholestrlNum = Math.trunc(cholestrl);
  const sodyum = item.totalNutrients.NA.quantity;
  const sodyumNum = Math.trunc(sodyum);

  return (
    <Center
      display="flex"
      flexDir={"column"}
      gap={4}
      background="white"
      width={["sm", "md", "lg", "xl"]}
      w="90%"
      p="5"
      height="100%"
    >
      <SelectionBox />
      <Button onClick={goBack}>
        <Text>Main Page</Text>
      </Button>

      <Image
        src={item.image}
        w={["sm", "md", "lg", "xl"]}
        h="30vh"
        alt={item.label}
      />
      <Flex alignself="center" justify="center" width="100%" gap="2">
        <Flex flexDir="column">
          <Text
            fontWeight={"450"}
            as="medium"
            textTransform="uppercase"
            opacity="0.8"
            color="#999"
          >
            {item.mealType}
          </Text>
          <Heading
            fontSize={"2xl"}
            color="green.800"
            textTransform="capitalize"
          >
            {item.label}
          </Heading>
          <Text>Total Cooking time: {item.totalTime} Minutes</Text>
          <Text>Serving: {item.yield}</Text>
          <Box>
            <Text fontSize="2xl" color="gray.400" size={["sm", "md", "lg"]}>
              Ingredients:
            </Text>
            {item.ingredientLines.map((ingrdtn) => (
              <Text key={item.label}> {ingrdtn}</Text>
            ))}
          </Box>
        </Flex>
        <Flex flexDir="column">
          <h2> Health Labels: </h2>

          <SimpleGrid
            columns={{ sm: 1, lg: 2 }}
            spacing="1"
            textAlign="center"
            rounded="lg"
            mr="5"
          >
            {item.healthLabels.map((healthLab) => {
              return (
                <Text
                columns={{ sm: 1, md: 2 }}
                key={item.label}
                bg="purple.100"
                color="purple.800"
                borderRadius="5"
              >
                {healthLab}
              </Text>
              )
            })
          }
          </SimpleGrid>
          {item.dietLabels != "" && (
            <Box>
              <p>Diet :</p>
              <Text
                background="green.300"
                width="auto"
                borderRadius="8"
                pl="1"
                color="green.900"
              >
                <Diet />
              </Text>
            </Box>
          )}
          <Box display="flex" gap="3">
            {item.cautions != "" && (
              <Box display="flex" flexDirection="column">
                <p>Coution:</p>
                <Text
                  textTransform="uppercase"
                  color="red"
                  backgroundColor="orange"
                  borderRadius="10"
                  paddingLeft="5px"
                  paddingRight="5px"
                  width="auto"
                  fontSize="0.9em"
                >
                  <Cautions />
                </Text>
              </Box>
            )}
          </Box>
          <Flex flexDir="column">
            <Box>
              <Text> Total nutrients:</Text>
            </Box>
            <SimpleGrid
              bg="gray.50"
              columns={{ sm: 1, md: 2 }}
              spacing="8"
              textAlign="center"
              rounded="lg"
              color="gray.500"
            >
              {" "}
              <Text flexDir="row">{energyNumber} Calories</Text>
              <Text flexDir="row">{carbonHidNum} g Carbs</Text>
              <Text flexDir="row">{proteinNum} g Protein</Text>
              <Text flexDir="row">{fatNum} g FAT</Text>
              <Text flexDir="row">{cholestrlNum} mg Cholesterol </Text>
              <Text flexDir="row">{sodyumNum} mg Sodium</Text>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      <Button onClick={goBack}>
        <Text>Main Page</Text>
      </Button>
    </Center>
  );
};
