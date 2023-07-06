import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { users } from './data/users'
import TwitterFollowCard from './components/twitterFollowCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="App">
        {
          users.map(({ userName, name, isFollowing})=> (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    </>
  )
}

export default App
