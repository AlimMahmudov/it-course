'use client'
import { AxiosError, AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'

type UseFetchState<T> = {
	isLoading: boolean
	status: number | null
	error: string | null
	isError: boolean
	data: T | null
}

type UseFetchOptions = {
	enabled: boolean
	queryKeys: any[]
	cacheKey?: string
	onSuccess?: (data: any) => void
	onError?: (error: AxiosError) => void
}

const cache = new Map<string, any>()

const useFetch = <T>(
	fetchFunction: () => Promise<T>,
	options?: Partial<UseFetchOptions>
) => {
	const { enabled = true, queryKeys = [], onSuccess, onError } = options ?? {}
	const cacheKey = queryKeys[0]
	const [state, setState] = useState<UseFetchState<T>>({
		isLoading: true,
		status: null,
		error: null,
		isError: false,
		data: null
	})

	useEffect(() => {
		if (!enabled) return

		const fetchData = async () => {
			if (cacheKey && cache.has(cacheKey)) {
				const cachedData = cache.get(cacheKey)
				setState({
					isLoading: false,
					status: 200,
					error: null,
					isError: false,
					data: cachedData
				})
				onSuccess && onSuccess(cachedData)
				return
			}

			try {
				setState(prev => ({
					...prev,
					isLoading: true,
					error: null,
					isError: false
				}))

				const response = await fetchFunction()
				const data = (response as AxiosResponse).data

				if (cacheKey) {
					cache.set(cacheKey, data)
				}

				setState({
					isLoading: false,
					status: 200,
					error: null,
					isError: false,
					data
				})

				onSuccess && onSuccess(data)
			} catch (error) {
				const axiosError = error as AxiosError
				setState({
					isLoading: false,
					status: axiosError.response?.status || null,
					error: axiosError.message || 'Что-то пошло не так',
					isError: true,
					data: null
				})

				onError && onError(axiosError)
			}
		}

		fetchData()
	}, [enabled, cacheKey, ...queryKeys])

	return state
}

export default useFetch
