import { MatchStatus } from '@prisma/client'

export interface TeamWithStats {
  id: string
  name: string
  logoUrl?: string | null
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDiff: number
  points: number
}

export interface MatchWithTeams {
  id: string
  matchday: number
  date: Date
  location: string
  status: MatchStatus
  homeTeam: { id: string; name: string; logoUrl?: string | null }
  awayTeam: { id: string; name: string; logoUrl?: string | null }
  homeScore?: number | null
  awayScore?: number | null
}
