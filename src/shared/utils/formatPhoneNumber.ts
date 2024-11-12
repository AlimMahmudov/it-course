export const formatPhoneNumber = (value: string) => {
	if (!value) return ''
	const cleaned = value.replace(/\D/g, '')

	if (cleaned.startsWith('996')) {
		const match = cleaned.slice(3).match(/(\d{3})(\d{3})(\d{3})/)
		if (match) {
			return `+996 ${match[1]} ${match[2]} ${match[3]}`
		}
	}

	return `+${cleaned.replace(/(\d{3})(?=\d)/g, '$1 ')}`
}
