import { useEffect, useState } from 'react'
import { Alert, Button } from '@heroui/react'
import { useFilters } from '../stores/useFilters'
import { usePrecios } from '../hooks/usePrecios'
import { useGeolocation } from '../hooks/useGeolocation'
import { StationMap } from './StationMap'
import { StationList } from './StationList'
import { Header } from './Header'
import { FilterModal } from './FilterModal'
import styles from './Dashboard.module.css'

export function Dashboard() {
  const { fuelType, coords, radius, setCoords } = useFilters()
  const { data: stations, isLoading, refetch, isFetching, isError } = usePrecios()
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Refresh stored location silently in the background
  const { coords: liveCoords, requestLocation } = useGeolocation()
  useEffect(() => {
    requestLocation()
  }, [requestLocation])
  useEffect(() => {
    if (liveCoords) setCoords(liveCoords)
  }, [liveCoords, setCoords])

  if (!fuelType || !coords) return null

  return (
    <div className={styles.container}>
      <Header onOpenFilters={() => setFiltersOpen(true)} />
      {isError && (
        <Alert className={styles.errorAlert} status="danger">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>No pudimos cargar precios</Alert.Title>
            <Alert.Description>Verifica tu conexión e inténtalo de nuevo.</Alert.Description>
          </Alert.Content>
          <Button size="sm" variant="danger" onPress={() => void refetch()}>
            Reintentar
          </Button>
        </Alert>
      )}
      <StationMap
        userCoords={coords}
        stations={stations ?? []}
        fuelType={fuelType}
        radius={radius}
      />
      <StationList
        stations={stations ?? []}
        fuelType={fuelType}
        userCoords={coords}
        loading={isLoading || isFetching}
        onRefresh={() => refetch()}
      />
      <FilterModal
        key={filtersOpen ? 'open' : 'closed'}
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
      />
    </div>
  )
}
