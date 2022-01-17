import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastCombobox,
  fastOption,
} from "@microsoft/fast-components";
import { DogCard } from "../src/components/dog-card";
import { BreedSearch } from "../src/components/breed-search";
import { BreedSelector } from "../src/components/breed-selector";

provideFASTDesignSystem().register(
  fastCard(),
  fastButton(),
  fastCombobox(),
  fastOption()
);

DogCard;
BreedSearch;
BreedSelector;
