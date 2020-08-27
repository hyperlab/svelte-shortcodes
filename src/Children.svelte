<script>
  import Fallback from "./Fallback.svelte";
  export let nodes, components, enableFallback =true;
  const ELEMENT_NODE = 1;
  const TEXT_NODE = 3;
</script>

{#each nodes as node (node)}
  {#if node.nodeType == TEXT_NODE}
    {node.textContent}
  {:else if node.nodeType == ELEMENT_NODE}
    {#if components[node.tagName]}
      <svelte:component this={components[node.tagName]} {...node.attrs}>
        <svelte:self nodes={node.childNodes} {components} />
      </svelte:component>
    {:else if enableFallback}
      <Fallback {node}>
        <svelte:self nodes={node.childNodes} {components} />
      </Fallback>
    {/if}
  {/if}
{/each}
