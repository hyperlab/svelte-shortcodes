<script>
  import Parser from "html-parser-lite";

  import { compilePattern } from "./shortcodes.js";
  import Children from "./Children.svelte";

  export let markup, components;
  const parser = new Parser();

  $: codesToHtml = compilePattern(Object.keys(components));
  $: rootNode = parser.parse(codesToHtml(markup));
</script>

<Children nodes={rootNode.childNodes} {components} />
