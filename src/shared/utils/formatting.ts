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

// !FormatEndDate
export const formatEndDate = (date: string) => {
	const dateObj = new Date(date)
	const day = String(dateObj.getDate()).padStart(2, '0')
	const month = String(dateObj.getMonth() + 1).padStart(2, '0')
	const year = dateObj.getFullYear() // Год

	return `${day}.${month}.${year} г`
}
// !FormatEndDate

// !FormatCommentDate
export const formatCommentDate = (date: string): string => {
	const currentDate = new Date()
	const commentDate = new Date(date)

	const diffInSeconds = Math.floor(
		(currentDate.getTime() - commentDate.getTime()) / 1000
	)
	const diffInMinutes = Math.floor(diffInSeconds / 60)
	const diffInHours = Math.floor(diffInMinutes / 60)
	const diffInDays = Math.floor(diffInHours / 24)

	if (diffInSeconds < 60) {
		// Если меньше минуты — показываем в секундах
		return `${diffInSeconds} сек назад`
	} else if (diffInMinutes < 60) {
		// Если меньше часа — показываем в минутах
		return `${diffInMinutes} мин назад`
	} else if (diffInHours < 24) {
		// Если меньше дня — показываем в часах
		return `${diffInHours} час${diffInHours > 1 ? 'а' : ''} назад`
	} else if (diffInDays === 1) {
		// Если прошло 1 день — пишем "вчера"
		return 'Вчера'
	} else if (diffInDays === 2) {
		// Если прошло 2 дня — пишем "позавчера"
		return 'Позавчера'
	} else {
		// Если прошло больше 2 дней — показываем дату в формате 24.10.2021
		const day = commentDate.getDate().toString().padStart(2, '0')
		const month = (commentDate.getMonth() + 1).toString().padStart(2, '0')
		const year = commentDate.getFullYear()

		return `${day}.${month}.${year}`
	}
}
// !FormatCommentDate
