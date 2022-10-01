import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import React from 'react'

type PropTypes = {
  label: string
  username: string
  onReset: () => void
}

const PlayerPreview = ({ label, username, onReset }: PropTypes) => {
  return (
    <>
      <div className="column player">
        <h3 className="player-label">{label}</h3>
        <div className={`row`}>
          <div className="player-info">
            <img
              className="avatar-small"
              src={`https://github.com/${username}.png?size=200`}
              alt={`Avatar for ${username}`}
            />
            <a href={`https://github.com/${username}`} className="link">
              {username}
            </a>
          </div>
          <button className="btn-clear flex-center" onClick={onReset}>
            <HighlightOffIcon />
          </button>
        </div>
      </div>
    </>
  )
}

export default PlayerPreview
