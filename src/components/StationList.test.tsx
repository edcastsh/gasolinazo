import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { StationList } from './StationList'

vi.mock('@tanstack/react-virtual', () => ({
  useVirtualizer: () => ({
    getTotalSize: () => 0,
    getVirtualItems: () => [],
    measureElement: vi.fn(),
  }),
}))

vi.mock('../stores/useViewport', () => ({
  useViewport: (selector: (state: { bounds: null }) => null) => selector({ bounds: null }),
  isWithinBounds: () => true,
}))

vi.mock('./StationCard', () => ({ StationCard: () => null }))

describe('StationList', () => {
  it('distinguishes an empty search from a search in progress', () => {
    const { rerender } = render(
      <StationList
        stations={[]}
        fuelType="regular"
        userCoords={{ lat: 25.8, lng: -109 }}
        loading={true}
        onRefresh={vi.fn()}
      />,
    )

    expect(screen.getByText('Buscando gasolineras...')).toBeVisible()
    expect(screen.queryByText('No se encontraron gasolineras en esta área')).not.toBeInTheDocument()

    rerender(
      <StationList
        stations={[]}
        fuelType="regular"
        userCoords={{ lat: 25.8, lng: -109 }}
        loading={false}
        onRefresh={vi.fn()}
      />,
    )

    expect(screen.getByText('No se encontraron gasolineras en esta área')).toBeVisible()
    expect(screen.queryByText('Buscando gasolineras...')).not.toBeInTheDocument()
  })
})
