export const CodeBlock = ({ children, className = 'language-js' }) => {
  return (
    <pre lang="js">
      <code className={className}>{children}</code>
    </pre>
  )
}
