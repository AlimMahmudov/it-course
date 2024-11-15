import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../const/export-env'

const csc_client = axios.create({
	baseURL: API_URL + '/api'
})

export async function getCountries<T>(): Promise<T> {
	try {
		const response = await csc_client.get('/countries')
		return response.data as T
	} catch (error) {
		console.log(error)
		return error as T
	}
}

export async function getCountry<T>(countryIso2: string): Promise<T> {
	try {
		const response = await csc_client.get(`/countries/${countryIso2}`)
		return response.data as T
	} catch (error) {
		console.log(error)
		return error as T
	}
}

export async function getCities<T>(countryIso2: string): Promise<T> {
	try {
		const response = await csc_client.get(`/countries/${countryIso2}/cities`)
		return response.data as T
	} catch (error) {
		console.log(error)
		return error as T
	}
}
