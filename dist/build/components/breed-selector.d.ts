import { FASTElement } from "@microsoft/fast-element";
export declare class BreedSelector extends FASTElement {
    handleAddBreed: any;
    breeds: string[];
    subBreeds: string[];
    selectedBreed: string;
    selectedSubBreed: string;
    selectedBreedUrl: string;
    callHandleAddBreed: any;
    allBreedsData: any;
    addBreedBtn: any;
    connectedCallback(): void;
    callAddBreed(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    handleAddBreedChanged(): void;
    handleBreedChange(event: Event): void;
    handleSubBreedChange(event: Event): void;
    fetchAllBreeds(): Promise<void>;
    fetchBreedUrl(): Promise<void>;
}
//# sourceMappingURL=breed-selector.d.ts.map