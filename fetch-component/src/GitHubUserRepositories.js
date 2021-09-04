import React from 'react'
import Fetch from './Fetch'
import GitHubUserRepositoryMenu from './GitHubUserRepositoryMenu'

export default function GitHubUserRepositories({ login, onSelect = f => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <GitHubUserRepositoryMenu
          login={login}
          repositories={data}
          onSelect={onSelect}
        />
      )}
    />
  )
}
