import { useLazyQuery } from '@apollo/client'
import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProfileList from '../components/Result/ProfileList'
import { BATTLE_PROFILE } from '../graphql/queries/BattleProfile'
import { scoreCalculate } from '../utils/ScoreCalculate'

const Result = () => {
  const search = useLocation().search
  const { playerOne, playerTwo } = queryString.parse(search)
  const [searchBattleProfileOne, { data: battleProfileOne }] =
    useLazyQuery(BATTLE_PROFILE)
  const [searchBattleProfileTwo, { data: battleProfileTwo }] =
    useLazyQuery(BATTLE_PROFILE)

  const [winner, setWinner] = useState<BattleProfile>(null)
  const [loser, setLoser] = useState<BattleProfile>(null)

  useEffect(() => {
    console.log(playerOne)
    console.log(playerTwo)
    if (!battleProfileOne) {
      searchBattleProfileOne({ variables: { username: playerOne } })
    }
    if (!battleProfileTwo) {
      searchBattleProfileTwo({ variables: { username: playerTwo } })
    }
    console.log(battleProfileOne)
    console.log(battleProfileTwo)
  }, [playerOne, playerTwo])

  useEffect(() => {
    console.log('calc')
    console.log(battleProfileOne)
    const playerOneScore = scoreCalculate(battleProfileOne?.user)
    const playerTwoScore = scoreCalculate(battleProfileTwo?.user)
    console.log(playerOneScore)
    console.log(playerTwoScore)

    if (playerOneScore > playerTwoScore) {
      setWinner(battleProfileOne?.user)
      setLoser(battleProfileTwo?.user)
    } else {
      setWinner(battleProfileTwo?.user)
      setLoser(battleProfileOne?.user)
    }
    console.log(winner)
  }, [battleProfileOne, battleProfileTwo])

  return (
    <>
      <h1>Result</h1>
      <ProfileList profile={winner} />
      <ProfileList profile={loser} />
    </>
  )
}

export default Result
