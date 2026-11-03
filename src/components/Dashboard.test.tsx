import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { Gasolinera } from '../types/api'
import { Dashboard } from './Dashboard'

const refetch = vi.fn()
const queryResult = {
  data: [] as Gasolinera[],
  isLoading: false,
  isFetching: false,
  isError: true,
  refetch,
}

vi.mock('../stores/useFilters', () => ({
  useFilters: () => ({
    fuelType: 'regular',
    coords: { lat: 25.8, lng: -109 },
    radius: 5000,
    setCoords: vi.fn(),
  }),
}))

vi.mock('../hooks/usePrecios', () => ({
  usePrecios: () => queryResult,
}))

vi.mock('../hooks/useGeolocation', () => ({
  useGeolocation: () => ({ coords: null, requestLocation: vi.fn() }),
}))

vi.mock('./Header', () => ({ Header: () => <header /> }))
vi.mock('./StationMap', () => ({ StationMap: () => <div /> }))
vi.mock('./StationList', () => ({
  StationList: ({ stations }: { stations: Gasolinera[] }) => (
    <div>{stations.map((station) => station.name)}</div>
  ),
}))
vi.mock('./FilterModal', () => ({ FilterModal: () => null }))

describe('Dashboard', () => {
  it('shows a danger alert and retries after a price request fails', async () => {
    const user = userEvent.setup()
    refetch.mockReset()
    queryResult.data = []
    queryResult.isError = true
    render(<Dashboard />)

    expect(screen.getByText('No pudimos cargar precios')).toBeVisible()

    await user.click(screen.getByRole('button', { name: 'Reintentar' }))

    expect(refetch).toHaveBeenCalledOnce()
  })

  it('keeps previous stations visible when a refresh fails', () => {
    queryResult.data = [
      {
        placeId: 'station-1',
        name: 'Estación existente',
        permitCre: 'PL/1/EXP/ES/2015',
        coordinates: { lat: 25.8, lng: -109 },
        prices: { regular: 24.5 },
        extractedAt: '2026-11-03T12:00:00.000Z',
        source: 'test',
      },
    ]
    queryResult.isError = true

    render(<Dashboard />)

    expect(screen.getByText('Estación existente')).toBeVisible()
  })
})
