import {
  FASTElement,
  customElement,
  attr,
  html,
  css,
  observable,
  when,
  repeat,
} from "@microsoft/fast-element";

const template = html<BreedSearch>`
  <div class="controls">
    <fast-button
      @click="${(x) => x.handleGetRandomBreed()}"
      }
      appearance="primary"
      >Random Breed</fast-button
    >
    <fast-button @click="${(x) => x.clearList()}" appearance="primary"
      >Clear List</fast-button
    >
    <breed-selector handleAddBreed="${x => x.handleAddBreed}"></breed-selector>
  </div>

  ${when(
    (x) => !x.ready,
    html<BreedSearch>` <div class="pt-1">Loading...</div>`
  )}

  <div class="breed-list">
    ${repeat(
      (x) => x.breeds,
      html<BreedSearch>` <dog-card url="${(x) => x}"></dog-card> `
    )}
  </div>
`;

const styles = css`
  .controls {
    display: flex;
    gap: 2em;
  }

  .breed-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
  }

  .pt-1 {
    padding-top: 1em;
  }
`;

const fetchRandomBreed = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  return await response.json();
};

@customElement({ name: "breed-search", template, styles })
export class BreedSearch extends FASTElement {
  @observable ready: boolean = true;
  @observable breeds: string[] = [];

  async handleGetRandomBreed(): Promise<void> {
    const breed = await fetchRandomBreed();

    this.breeds.unshift(breed.message);
  }

  handleAddBreed(url: string) {
    console.log(`handleAddBreed url = ${url}`)
  }

  clearList(): void {
    this.breeds = [];
  }
}
