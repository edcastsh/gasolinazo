import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

vi.mock('../stores/useFilters', () => ({
  useFilters: () => ({ fuelType: 'regular', radius: 5000 }),
}))

describe('Header', () => {
  it('opens filters from its keyboard-accessible button', async () => {
    const user = userEvent.setup()
    const onOpenFilters = vi.fn()
    render(<Header onOpenFilters={onOpenFilters} />)

    expect(screen.getByText('Regular · 5 km')).toBeVisible()

    await user.tab()
    await user.keyboard('{Enter}')

    expect(onOpenFilters).toHaveBeenCalledOnce()
  })
})
