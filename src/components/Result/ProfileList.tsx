type PropTypes = {
  profile: BattleProfile
}

const ProfileList = ({ profile }: PropTypes) => {
  if (!profile) return <h1>Error</h1>
  return (
    <ul className="card-list">
      <li>{profile.name}</li>
      {/* {profile.location && (
        <li>
          <Tooltip text="User's location">
            <FaCompass color="rgb(144, 115, 255)" size={22} />
            {profile.location}
          </Tooltip>
        </li>
      )} */}
      {/* {profile.company && (
        <li>
          <Tooltip text="User's company">
            <FaBriefcase color="#795548" size={22} />
            {profile.company}
          </Tooltip>
        </li>
      )} */}
      {/* <li>
        <FaUsers color="rgb(129, 195, 245)" size={22} />
        {profile.followers.toLocaleString()} followers
      </li>
      <li>
        <FaUserFriends color="rgb(64, 183, 95)" size={22} />
        {profile.following.toLocaleString()} following
      </li> */}
    </ul>
  )
}

export default ProfileList
