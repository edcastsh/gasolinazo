import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { StationCard } from './StationCard'

describe('StationCard', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('shows rank, name, distance, selected price, and cheapest state', () => {
    render(
      <StationCard
        station={{
          placeId: 'station-1',
          name: 'Pemex Centro',
          coordinates: { lat: 25.8, lng: -109 },
          prices: { regular: 24.5 },
          distance: 1234,
        }}
        fuelType="regular"
        rank={1}
        isCheapest={true}
      />,
    )

    expect(screen.getByText('1')).toBeVisible()
    expect(screen.getByText('Pemex Centro')).toBeVisible()
    expect(screen.getByText('1.2 km')).toBeVisible()
    expect(screen.getByText('$24.50')).toBeVisible()
    expect(screen.getByText('Más barata')).toBeVisible()
  })

  it('opens the current route from keyboard activation', async () => {
    const user = userEvent.setup()
    const open = vi.fn()
    vi.stubGlobal('open', open)

    render(
      <StationCard
        station={{
          placeId: 'station-1',
          name: 'Pemex Centro',
          coordinates: { lat: 25.8, lng: -109 },
          prices: { regular: 24.5 },
        }}
        fuelType="regular"
        rank={1}
      />,
    )

    await user.tab()
    await user.keyboard('{Enter}')

    expect(open).toHaveBeenCalledWith(
      'https://www.google.com/maps/dir/?api=1&destination=25.8,-109&travelmode=driving&destination_place_id=station-1',
      '_blank',
    )
  })
})
