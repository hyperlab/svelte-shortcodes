const replacer = match => `<${match.slice(1, -1)}>`;
export const compilePattern = tags => {
  const opening = new RegExp(
    `(\\[)(\\s*(${tags.join(
      '|'
    )})(\\s+([a-z0-9\\-_]+|([a-z0-9\\-_]+)\\s*=\\s*([a-z0-9\\-_]+|\\d+\\.\\d+|'[^']*'|"[^"]*")))*\\s*\\/?\\s*)(\\])`,
    'ig'
  );
  const closing = new RegExp(
    `(\\[)(\\s*\\/(${tags.join('|')})\\s*\\/?\\s*)(\\])`,
    'ig'
  );
  return text => text.replace(opening, replacer).replace(closing, replacer);
};
