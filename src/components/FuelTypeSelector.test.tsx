import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { FuelTypeSelector } from './FuelTypeSelector'

describe('FuelTypeSelector', () => {
  it('exposes fuel choices as a labelled radio group', () => {
    render(<FuelTypeSelector selected="regular" onSelect={vi.fn()} />)

    expect(screen.getByRole('radiogroup', { name: 'Tipo de gasolina' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /regular/i })).toBeChecked()
  })
})
