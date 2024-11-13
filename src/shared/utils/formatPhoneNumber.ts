export const formatPhoneNumber = (value: string) => {
	if (!value) return ''
	const cleaned = value.replace(/\D/g, '')

	return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
}
