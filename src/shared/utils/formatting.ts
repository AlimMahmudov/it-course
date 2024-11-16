// !FormatCardNumber
export const formatCardNumber = (value: string) => {
	const cleaned = value.replace(/\D/g, '')
	const formatted = cleaned.slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ')
	return formatted
}
// !FormatCardNumber

// !FormatExpiryDate
export const formatExpiryDate = (date: string) => {
	const [year, month] = date.split('-')
	return `${month}/${year.slice(-2)}`
}
// !FormatExpiryDate
