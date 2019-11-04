<script>
  import Shortcodes from "../src/Shortcodes.svelte";
  import Heading from "./Heading.svelte";

  let markup = `<div>
    <h1>H1 Text</h1>
    [heading]Heading[/heading]
    <p>body</p>
  </div>`;

  let components = {
    heading: Heading
  };
</script>

<Shortcodes {components} {markup} />
