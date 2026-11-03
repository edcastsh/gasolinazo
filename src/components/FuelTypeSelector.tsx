import { Fuel, Diamond, Truck } from 'lucide-react'
import { Label, Radio, RadioGroup } from '@heroui/react'
import type { FuelType } from '../stores/useFilters'
import styles from './FuelTypeSelector.module.css'

const FUEL_OPTIONS: { type: FuelType; label: string; Icon: typeof Fuel; desc: string }[] = [
  { type: 'regular', label: 'Regular', Icon: Fuel, desc: 'La más común' },
  { type: 'premium', label: 'Premium', Icon: Diamond, desc: 'Mayor octanaje' },
  { type: 'diesel', label: 'Diésel', Icon: Truck, desc: 'Para diésel' },
]

interface Props {
  selected: FuelType | null
  onSelect: (type: FuelType) => void
}

export function FuelTypeSelector({ selected, onSelect }: Props) {
  return (
    <RadioGroup
      name="fuel-type"
      value={selected ?? undefined}
      onChange={(value) => onSelect(value as FuelType)}
    >
      <Label>Tipo de gasolina</Label>
      <div className={styles.grid}>
        {FUEL_OPTIONS.map((opt) => (
          <Radio key={opt.type} value={opt.type}>
            <Radio.Content
              className={`${styles.card} ${selected === opt.type ? styles.active : ''}`}
            >
              <opt.Icon className={styles.icon} size={28} strokeWidth={1.5} />
              <span className={styles.label}>{opt.label}</span>
              <span className={styles.desc}>{opt.desc}</span>
            </Radio.Content>
          </Radio>
        ))}
      </div>
    </RadioGroup>
  )
}
