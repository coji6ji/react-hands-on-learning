import React, { useState } from 'react'
import SearchForm from './SearchForm'
import GitHubUser from './GitHubUser'
import GitHubUserRepositories from './GitHubUserRepositories'
import GitHubUserRepositoryReadme from './GitHubUserRepositoryReadme'

export default function App() {
  const [login, setLogin] = useState()
  const [repository, setRepository] = useState()
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GitHubUser login={login} />}
      {login && (
        <GitHubUserRepositories
          login={login}
          selectedRepository={repository}
          onSelect={setRepository}
        />
      )}
      {login && repository && (
        <GitHubUserRepositoryReadme login={login} repository={repository} />
      )}
    </>
  )
}
