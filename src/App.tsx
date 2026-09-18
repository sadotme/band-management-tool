import { useState } from 'react'
import GigList from './components/GigList'
import './App.css' with { type: 'css' }
import type { Gig } from './types/Gig'

const initialGigs: Gig[] = [
  { id: 1, venue: 'The Rustic Tavern', date: '2026-10-03', confirmed: false },
  { id: 2, venue: 'Copper Room', date: '2026-10-18', confirmed: true },
  { id: 3, venue: 'Backyard Bash - Private Event', date: '2026-11-01', confirmed: false },
]

function App() {
  const [gigs, setGigs] = useState<Gig[]>(initialGigs)

  function handleToggleConfirm(id: number) {
    setGigs(
      gigs.map((gig) =>
        gig.id === id ? { ...gig, confirmed: !gig.confirmed } : gig
      )
    )
  }

  function handleAddGig(){
    const newGig: Gig = {id:Date.now(), venue: 'New Venue', date: '2026-12-01', confirmed: false};
    setGigs([...gigs, newGig]);
    
  }

  return (
    <div className="app">
      <h1>Band Management Tool</h1>
      <GigList gigs={gigs} onToggleConfirm={handleToggleConfirm} />
      <button onClick={handleAddGig}>Add New Gig</button>
    </div>
  )
}

export default App