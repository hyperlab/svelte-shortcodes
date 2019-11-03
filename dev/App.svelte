<script>
  import Shortcodes from "../src/Shortcodes.svelte";
  import Heading from "./Heading.svelte";
  let markup = `<div><h1>Text</h1><p>body</p></div>`;
  let components = {
    h1: Heading
  };
</script>

<Shortcodes {components} {markup} />
