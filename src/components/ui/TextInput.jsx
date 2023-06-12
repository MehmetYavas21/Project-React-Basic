import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => (
  <Input
    onChange={changeFn}
    variant={"flushed"}
    {...props}
    color="white"
    placeholder="search for recipe"
    _placeholder={{ opacity: 0.8, color: "blue.300" }}
    size={["sm", "md", "lg", "xl"]}
    width="auto"
  />
);
