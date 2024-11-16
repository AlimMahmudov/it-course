import { useQuery } from '@tanstack/react-query'
import { getCities, getCountries } from '../utils/csc-api'
import { useCallback, useMemo, useState } from 'react'

type TProps = {
	state?: any
}

const useCSC = ({ state }: TProps) => {
	const { data: countries, isLoading: cnLoading } = useQuery<
		CSCTypes.Country[]
	>({
		queryKey: ['countries'],
		queryFn: getCountries
	})

	const _countryIso = useMemo(
		() =>
			countries && state
				? countries.find(cn => cn.name === state?.data?.country)?.iso2
				: '',
		[countries, state, cnLoading]
	)
	const [countryIso, setCountryIso] = useState(_countryIso)

	const { data: cities, isLoading: cLoading } = useQuery<CSCTypes.City[]>({
		queryKey: ['cities', countryIso, _countryIso, countries],
		queryFn: async () => getCities(String(countryIso || _countryIso)),
		enabled: String(countryIso || _countryIso).trim() !== ''
	})

	const changeCountryISO = useCallback(
		(iso: string) => setCountryIso(iso),
		[setCountryIso]
	)

	return {
		cities: {
			data: cities,
			isLoading: cLoading
		},
		countries: {
			data: countries,
			isLoading: cnLoading
		},
		countryIso,
		changeCountryISO
	}
}

export default useCSC
