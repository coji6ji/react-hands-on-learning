import React from 'react'
import Fetch from './Fetch'
import GitHubUserRepositoryMenu from './GitHubUserRepositoryMenu'

export default function GitHubUserRepositories({
  login,
  selectedRepository,
  onSelect = f => f,
}) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <GitHubUserRepositoryMenu
          repositories={data}
          selected={selectedRepository}
          onSelect={onSelect}
        />
      )}
    />
  )
}
