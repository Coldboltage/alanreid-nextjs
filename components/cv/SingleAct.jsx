import { useState, useEffect } from 'react'



export const SingleAct = ({ site, title, ...data }) => {
  const [userData, setUserData] = useState(null)


  useEffect(() => {
    const fetchData = async (url, state) => {
      const response = await fetch(url)
      const data = await response.json()
      if (userData === null) {
        state(data)
      }
    }
    if (userData === null) fetchData(data.data.user, setUserData)

  }, [data.data.user, userData])


  if (userData !== null && site === "codewars") {
    return (
      <div className='flex flex-col gap-2'>
        <h3 className="text-2xl">{title}</h3>
        <section className=''>
          <p>Username: <a className='underline decoration-[#26a8ed] underline-offset-2' href="https://www.codewars.com/users/Coldboltage">{userData.username}</a></p>
          <p>Challenges: {userData.codeChallenges.totalCompleted}</p>
          <p>Rank: {userData.ranks.overall.score}</p>
          <p>Leaderboard: {userData.leaderboardPosition}</p>
        </section>

      </div>
    )
  }

  return (
    <></>
  )
}
