const gigs = [
  { id: 1, venue: 'The Rustic Tavern', date: '2026-10-03' },
  { id: 2, venue: 'Copper Room', date: '2026-10-18' },
  { id: 3, venue: 'Backyard Bash - Private Event', date: '2026-11-01' },
]

function GigList() {
  return (
    <ul>
      {gigs.map((gig) => (
        <li key={gig.id}>
          {gig.venue} — {gig.date}
        </li>
      ))}
    </ul>
  )
}

export default GigList