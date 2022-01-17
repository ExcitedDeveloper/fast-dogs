import {
  FASTElement,
  customElement,
  attr,
  html,
  css,
  observable,
  repeat,
  when,
} from "@microsoft/fast-element";

const template = html<BreedSelector>`
  <div class="breed-selector">
    <fast-combobox
      autocomplete="both"
      :value="${(x) => x.selectedBreed}"
      @change="${(x, c) => x.handleBreedChange(c.event)}"
    >
      ${repeat(
        (x) => x.breeds,
        html<string>` <fast-option>${(x) => x}</fast-option> `
      )}
    </fast-combobox>

    ${when(
      (x) => x.subBreeds.length > 0,
      html<BreedSelector>`
        <fast-combobox
          autocomplete="both"
          @change="${(x, c) => x.handleSubBreedChange(c.event)}"
        >
          ${repeat(
            (x) => x.subBreeds,
            html<string>` <fast-option>${(x) => x}</fast-option> `
          )}
        </fast-combobox>
      `
    )}
    ${when(
      (x) =>
        x.selectedSubBreed.length > 0 ||
        (x.subBreeds.length <= 0 && x.selectedBreed.length > 0),
      html<BreedSelector>` <fast-button id="addBreed">Add Breed</fast-button> `
    )}
  </div>
`;

const styles = css`
  .breed-selector {
    display: flex;
    gap: 0.5em;
  }
`;

const capitalize = (words: string) => {
  return words
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
};

const getSubBreeds = (breedsData: any, currBreed: string) => {
  return breedsData.message[currBreed.toLowerCase()];
};

@customElement({ name: "breed-selector", template, styles })
export class BreedSelector extends FASTElement {
  @attr handleAddBreed: any;
  @observable breeds: string[] = [];
  @observable subBreeds: string[] = [];
  @observable selectedBreed: string = "";
  @observable selectedSubBreed: string = "";
  @observable selectedBreedUrl: string = "";
  @observable callHandleAddBreed: any;
  allBreedsData: any = {};
  addBreedBtn: any;

  connectedCallback() {
    super.connectedCallback();

    this.fetchAllBreeds();

    this.addBreedBtn = this.shadowRoot!.querySelector(".add-breed");

    if (this.addBreedBtn) console.log(`found add breed button`);
  }

  callAddBreed() {
    console.log(`callAddBreed url = ${this.selectedBreedUrl}`);
    this.handleAddBreed(this.selectedBreedUrl);
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === "handleaddbreed") {
      console.log(`handleAddBreed changed`);
      if (!this.addBreedBtn) return;

      console.log(`addEventListener`);
      this.addBreedBtn.addEventListener("click", this.callAddBreed.bind(this));
    }
  }

  handleAddBreedChanged() {
    console.log(
      `handleAddBreed changed; handleAddBreed = ${this.handleAddBreed}`
    );
  }

  handleBreedChange(event: Event) {
    this.selectedBreed = (event.target! as HTMLSelectElement).value;
    this.selectedSubBreed = "";
    this.subBreeds = getSubBreeds(this.allBreedsData, this.selectedBreed).map(
      (breed: string) => capitalize(breed)
    );

    if (this.subBreeds.length <= 0) {
      if (this.selectedBreed.length <= 0) {
        this.selectedBreedUrl = "";
      } else {
        this.fetchBreedUrl();
      }
    }
  }

  handleSubBreedChange(event: Event) {
    this.selectedSubBreed = (event.target! as HTMLSelectElement).value;
    console.log(`selectedSubBreed = ${this.selectedSubBreed}`);
  }

  async fetchAllBreeds(): Promise<void> {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    this.allBreedsData = await response.json();
    this.breeds = Object.keys(this.allBreedsData.message).map((key) =>
      capitalize(key)
    );
  }

  // all breed = https://dog.ceo/api/breed/hound/images
  // all sub breeds = https://dog.ceo/api/breed/hound/afghan/images
  async fetchBreedUrl(): Promise<void> {
    let response;

    if (this.selectedSubBreed.length <= 0) {
      response = await fetch(
        `https://dog.ceo/api/breed/${this.selectedBreed.toLowerCase()}/images`
      );
    } else {
      response = await fetch(
        `https://dog.ceo/api/breed/${this.selectedBreed.toLowerCase()}/${this.selectedSubBreed.toLowerCase()}/images`
      );
    }

    const json = await response.json();

    this.selectedBreedUrl =
      json.message[Math.floor(Math.random() * json.message.length) + 1];
  }
}
