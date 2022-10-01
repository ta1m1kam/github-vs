import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { USER_INFO } from '../../graphql/queries/UserInfo'

type PropTypes = {
  label: string
  onSubmit: (player: Player) => void
}

const PlayerInput = ({ label, onSubmit }: PropTypes) => {
  const [username, setUsername] = useState('')
  const [search, { loading, data: userInfo, error }] = useLazyQuery(USER_INFO, {
    variables: { username },
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    search({
      variables: { username },
    })
  }

  useEffect(() => {
    onSubmit(userInfo?.user)
  }, [onSubmit, userInfo])

  const handleChange = (event: any) => {
    setUsername(event?.target.value)
  }

  return (
    <form className="column player" onSubmit={handleSubmit}>
      <label htmlFor="username" className="player-label">
        {label}
      </label>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="row player-inputs">
          <input
            type="text"
            id="username"
            className="input-light"
            placeholder="github username"
            autoComplete="off"
            value={username}
            onChange={handleChange}
          />
          <button className="btn dark-btn" type="submit" disabled={!username}>
            Submit
          </button>
        </div>
      )}
    </form>
  )
}

export default PlayerInput
