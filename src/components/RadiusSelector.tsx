import { Label, Radio, RadioGroup } from '@heroui/react'
import type { RadiusValue } from '../stores/useFilters'
import styles from './RadiusSelector.module.css'

const RADIUS_OPTIONS: { value: RadiusValue; label: string }[] = [
  { value: 2500, label: '2.5 km' },
  { value: 5000, label: '5 km' },
  { value: 10000, label: '10 km' },
  { value: 15000, label: '15 km' },
]

interface Props {
  selected: RadiusValue
  onSelect: (radius: RadiusValue) => void
}

export function RadiusSelector({ selected, onSelect }: Props) {
  return (
    <RadioGroup
      name="search-radius"
      value={String(selected)}
      onChange={(value) => onSelect(Number(value) as RadiusValue)}
    >
      <Label>Radio de búsqueda</Label>
      <div className={styles.chips}>
        {RADIUS_OPTIONS.map((opt) => (
          <Radio
            key={opt.value}
            value={String(opt.value)}
            onClick={() => {
              if (selected === opt.value) onSelect(opt.value)
            }}
          >
            <Radio.Content
              className={`${styles.chip} ${selected === opt.value ? styles.active : ''}`}
            >
              {opt.label}
            </Radio.Content>
          </Radio>
        ))}
      </div>
    </RadioGroup>
  )
}
