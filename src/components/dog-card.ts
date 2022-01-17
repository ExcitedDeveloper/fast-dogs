import {
  FASTElement,
  customElement,
  attr,
  html,
  css,
  observable,
} from "@microsoft/fast-element";

const template = html<DogCard>`
  <div class="dog-card">
    <span class="dog-breed">${(x) => x.breed}</span>
    <img src="${(x) => x.url}" class="dog-img" alt="dog image" />
  </div>
`;

const styles = css`
  .dog-card {
    border: 1px solid black;
    width: 400px;
    height: 400px;
    overflow: hidden;
    padding: 0.5em;
    margin-top: 1em;
  }

  .dog-breed {
    font-size: 1.5em;
    text-transform: capitalize;
  }

  .dog-img {
    width: 100%;
    max-height: 350px;
    object-fit: contain;
    padding-top: 1em;
  }
`;

const getBreedName = (url: string) => {
  if (!url) return `ERROR: URL empty`;

  const breedsPos = url.indexOf(`breeds/`);

  if (breedsPos < 0) return `ERROR: Could not find breeds/`;

  const slashPos = url.indexOf("/", breedsPos + 7);

  if (slashPos < 0) return `ERROR: Could not find slash`;

  if (slashPos < breedsPos + 7) return `ERROR: Positions invalid`;

  const breedSubstr = url.substring(breedsPos + 7, slashPos);

  const dashPos = breedSubstr.indexOf("-");

  if (dashPos < 0) return breedSubstr;

  const parts = breedSubstr.split("-");

  return `${parts[1]} ${parts[0]}`;
};

@customElement({ name: "dog-card", template, styles })
export class DogCard extends FASTElement {
  @observable breed!: string;
  @attr url!: string;

  connectedCallback() {
    super.connectedCallback();

    this.breed = getBreedName(this.url);
  }
}
