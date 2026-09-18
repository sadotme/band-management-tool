
import type { Gig } from '../types/Gig'

interface GigListProps {
  gigs: Gig[]
  onToggleConfirm: (id: number) => void
}

function GigList({ gigs, onToggleConfirm }: GigListProps) {
  return (
    <ul>
      {gigs.map((gig) => (
        <li key={gig.id}>
          {gig.venue} — {gig.date} — {gig.confirmed ? 'Confirmed' : 'Pending'}
          <button onClick={() => onToggleConfirm(gig.id)}>
            {gig.confirmed ? 'Mark Pending' : 'Mark Confirmed'}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default GigList