'use client'
import React, { useEffect, useState } from 'react'
type DateSelectProps = {
	onDateChange: (date: string) => void
	defaultValues?: string
}
export const months = [
	{ value: '01', label: 'Январь' },
	{ value: '02', label: 'Февраль' },
	{ value: '03', label: 'Март' },
	{ value: '04', label: 'Апрель' },
	{ value: '05', label: 'Май' },
	{ value: '06', label: 'Июнь' },
	{ value: '07', label: 'Июль' },
	{ value: '08', label: 'Август' },
	{ value: '09', label: 'Сентябрь' },
	{ value: '10', label: 'Октябрь' },
	{ value: '11', label: 'Ноябрь' },
	{ value: '12', label: 'Декабрь' }
]

const DateSelect: React.FC<DateSelectProps> = ({
	onDateChange,
	defaultValues
}) => {
	const [_year, _month, _day] = String(defaultValues ?? '').split('-')
	const [day, setDay] = useState(_day ?? '')
	const [month, setMonth] = useState(_month ?? '')
	const [year, setYear] = useState(_year ?? '')

	useEffect(() => {
		if (day && month && year) {
			onDateChange(`${year}-${month}-${day}`)
		}
	}, [day, month, year])

	return (
		<div className={'date-selects'}>
			<div className='select-wr'>
				<select data-day value={day} onChange={e => setDay(e.target.value)}>
					<option value=''>День</option>
					{[...Array(31)].map((_, i) => (
						<option key={i} value={String(i + 1).padStart(2, '0')}>
							{i + 1}
						</option>
					))}
				</select>
			</div>
			<div className='select-wr'>
				<select value={month} onChange={e => setMonth(e.target.value)}>
					<option value=''>Месяц</option>
					{months.map((month, i) => (
						<option key={i} value={month.value}>
							{month.label}
						</option>
					))}
				</select>
			</div>

			<div className='select-wr'>
				<select value={year} onChange={e => setYear(e.target.value)}>
					<option value=''>Год</option>
					{[...Array(100)].map((_, i) => (
						<option key={i} value={String(new Date().getFullYear() - i)}>
							{new Date().getFullYear() - i}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default DateSelect
