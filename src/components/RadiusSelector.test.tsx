import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { RadiusSelector } from './RadiusSelector'

describe('RadiusSelector', () => {
  it('exposes radius choices as a labelled radio group', () => {
    render(<RadiusSelector selected={5000} onSelect={vi.fn()} />)

    expect(screen.getByRole('radiogroup', { name: 'Radio de búsqueda' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: '5 km' })).toBeChecked()
  })
})
