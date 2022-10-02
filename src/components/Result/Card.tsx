import React from 'react'

type PropTypes = {
  header: string
  subheader: number | undefined
  avatar: string | undefined
  href: string | undefined
  name: string | undefined
  children: React.ReactNode
}
const Card = ({
  header,
  subheader,
  avatar,
  href,
  name,
  children,
}: PropTypes) => {
  return (
    <div className={`card`}>
      <h4 className="header-lg center-text">{header}</h4>
      <img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
      {subheader && <h4 className="center-text">{subheader}</h4>}
      <h2 className="center-text">
        <a className="link" href={href}>
          {name}
        </a>
      </h2>
      {children}
    </div>
  )
}

export default Card
