// !FormatPhoneNumber
export const formatPhoneNumber = (value: string) => {
	if (!value) return ''
	const cleaned = value.replace(/\D/g, '')
	return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
}
// !FormatPhoneNumber

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
