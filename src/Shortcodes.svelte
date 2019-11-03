<script>
  import Parser from "html-parser-lite";
  import Children from "./Children.svelte";
  export let markup, components;
  const parser = new Parser();

  $: rootNode = parser.parse(markup);
</script>

<Children nodes={rootNode.childNodes} {components} />
