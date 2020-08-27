<script>
  export let node;
</script>

{#if node.tagName == 'h1'}
  <h1 {...node.attrs}>
    <slot />
  </h1>
{:else if node.tagName == 'h2'}
  <h2 {...node.attrs}>
    <slot />
  </h2>
{:else if node.tagName == 'h3'}
  <h3 {...node.attrs}>
    <slot />
  </h3>
{:else if node.tagName == 'h4'}
  <h4 {...node.attrs}>
    <slot />
  </h4>
{:else if node.tagName == 'h5'}
  <h5 {...node.attrs}>
    <slot />
  </h5>
{:else if node.tagName == 'h6'}
  <h6 {...node.attrs}>
    <slot />
  </h6>
{:else if node.tagName == 'div'}
  <div {...node.attrs}>
    <slot />
  </div>
{:else if node.tagName == 'header'}
  <header {...node.attrs}>
    <slot />
  </header>
{:else if node.tagName == 'footer'}
  <footer {...node.attrs}>
    <slot />
  </footer>
{:else if node.tagName == 'section'}
  <section {...node.attrs}>
    <slot />
  </section>
{:else if node.tagName == 'article'}
  <article {...node.attrs}>
    <slot />
  </article>
{:else if node.tagName == 'span'}
  <span {...node.attrs}>
    <slot />
  </span>
{:else if node.tagName == 'p'}
  <p {...node.attrs}>
    <slot />
  </p>
{:else if node.tagName == 'a'}
  <a {...node.attrs}>
    <slot />
  </a>
{:else if node.tagName == 'b'}
  <b {...node.attrs}>
    <slot />
  </b>
{:else if node.tagName == 'i'}
  <i {...node.attrs}>
    <slot />
  </i>
{:else if node.tagName == 'strong'}
  <strong {...node.attrs}>
    <slot />
  </strong>
{:else if node.tagName == 'em'}
  <em {...node.attrs}>
    <slot />
  </em>
{:else if node.tagName == 'ol'}
  <ol {...node.attrs}>
    <slot />
  </ol>
{:else if node.tagName == 'ul'}
  <ul {...node.attrs}>
    <slot />
  </ul>
{:else if node.tagName == 'li'}
  <li {...node.attrs}>
    <slot />
  </li>
{:else if node.tagName == 'table'}
  <table {...node.attrs}>
    <slot />
  </table>
{:else if node.tagName == 'tr'}
  <tr {...node.attrs}>
    <slot />
  </tr>
{:else if node.tagName == 'th'}
  <th {...node.attrs}>
    <slot />
  </th>
{:else if node.tagName == 'td'}
  <td {...node.attrs}>
    <slot />
  </td>
{:else if node.tagName == 'img'}
  <img {...node.attrs} />
{:else if node.tagName == 'iframe'}
  <iframe {...node.attrs} />
{:else if node.tagName == 'br'}
  <br {...node.attrs} />
{:else}{console.error('Unknown component', node)}{/if}
