import { useLazyQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/Result/Card'
import ProfileList from '../components/Result/ProfileList'
import { BATTLE_PROFILE } from '../graphql/queries/BattleProfile'
import { scoreCalculate } from '../utils/ScoreCalculate'

const Result = () => {
  const search = useLocation().search
  const { playerOne, playerTwo } = queryString.parse(search)
  const [searchBattleProfileOne, { loading, data: battleProfileOne }] =
    useLazyQuery(BATTLE_PROFILE)
  const [searchBattleProfileTwo, { data: battleProfileTwo }] =
    useLazyQuery(BATTLE_PROFILE)

  const [winner, setWinner] = useState<BattleProfile>(null)
  const [loser, setLoser] = useState<BattleProfile>(null)

  useEffect(() => {
    if (!battleProfileOne) {
      searchBattleProfileOne({ variables: { username: playerOne } })
    }
    if (!battleProfileTwo) {
      searchBattleProfileTwo({ variables: { username: playerTwo } })
    }
  }, [
    battleProfileOne,
    battleProfileTwo,
    playerOne,
    playerTwo,
    searchBattleProfileOne,
    searchBattleProfileTwo,
  ])

  useEffect(() => {
    const playerOneScore = scoreCalculate(battleProfileOne?.user)
    const playerTwoScore = scoreCalculate(battleProfileTwo?.user)

    if (playerOneScore > playerTwoScore) {
      setWinner({ ...battleProfileOne?.user, score: playerOneScore })
      setLoser({ ...battleProfileTwo?.user, score: playerTwoScore })
    } else {
      setWinner({ ...battleProfileTwo?.user, score: playerTwoScore })
      setLoser({ ...battleProfileOne?.user, score: playerOneScore })
    }
  }, [battleProfileOne, battleProfileTwo])

  return (
    <>
      <h1>Result</h1>
      <div className="grid space-around container-sm">
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Card
              header="Winner"
              subheader={winner?.score}
              avatar={winner?.avatarUrl}
              href={winner?.url}
              name={winner?.name}
            >
              <ProfileList profile={winner} />
            </Card>
            <Card
              header="Winner"
              subheader={loser?.score}
              avatar={loser?.avatarUrl}
              href={loser?.url}
              name={loser?.name}
            >
              <ProfileList profile={loser} />
            </Card>
          </>
        )}
      </div>
    </>
  )
}

export default Result
