# svelte-shortcodes

Embed Svelte components inside rich content from any CMS using shortcodes. A
concept we have shamelessly stolen [from WordPress](https://codex.wordpress.org/Shortcode_API).

You can also use this module to replace matching html elements with a custom
Svelte component of your choice.

## Installation

```sh
yarn add --dev svelte-shortcodes # or npm i --save-dev svelte-shortcodes
```

## Usage

The Shortcodes component will replace every occurrence of the component `name`
with a Svelte component of your choice. Both WordPress-style shortcodes and the
html tag names will be replaced.

```
<script>
  import { Shortcodes } from "svelte-shortcodes";
  import Heading from "./Heading.svelte";
  import ResponsiveImage from "./ResponsiveImage.svelte";

  let markup = `
    [heading]Heading[/heading]
    <img src="logo.png" alt="Svelte logo">
    <p>Text...</p>
  `;

  // { [name: string]: Component }
  let components = {
    heading: Heading,
    img: ResponsiveImage
  };
</script>

<Shortcodes {components} {markup} />
```

Checkout the code inside `/dev` for a full example.

## Development

There is a dev app available inside the `/dev` folder that can be used for
testing and experimenting with the components. To start it simply run:

```sh
yarn dev # or npm run dev
```

## Todo

- [ ] Add tests
- [ ] Consider separating html tag names from shortcodes
- [ ] Find a better way to handle html fallback ([relevant svelte issue](https://github.com/sveltejs/svelte/issues/2324))
