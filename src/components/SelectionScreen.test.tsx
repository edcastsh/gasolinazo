import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useFilters } from '../stores/useFilters'
import { SelectionScreen } from './SelectionScreen'

describe('SelectionScreen', () => {
  const getCurrentPosition = vi.fn()

  beforeEach(() => {
    useFilters.getState().reset()
    getCurrentPosition.mockReset()
    Object.defineProperty(navigator, 'geolocation', {
      configurable: true,
      value: { getCurrentPosition },
    })
  })

  it('requests location after radius selection', async () => {
    const user = userEvent.setup()
    render(<SelectionScreen />)

    await user.click(screen.getByRole('radio', { name: /regular/i }))
    await user.click(screen.getByRole('radio', { name: '5 km' }))

    expect(getCurrentPosition).toHaveBeenCalledOnce()
  })
})
