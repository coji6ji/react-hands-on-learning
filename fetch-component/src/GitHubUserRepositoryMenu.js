import React, { useEffect } from 'react'
import GitHubUserRepositoryReadme from './GitHubUserRepositoryReadme'
import { useIterator } from './hooks'

export default function GitHubUserRepositoryMenu({
  login,
  repositories,
  onSelect = f => f,
}) {
  const [{ name }, previous, next] = useIterator(repositories)

  useEffect(() => {
    if (!name) return
    onSelect(name)
  }, [name])

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <GitHubUserRepositoryReadme login={login} repository={name} />
    </>
  )
}
