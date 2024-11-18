import React, { useCallback, useState } from 'react'
import styles from './Register.module.scss'
import clsx from 'clsx'
import PaymentProcessForm from '@/shared/components/payment_process_form/PaymentProcessForm'
import { useCourseRegisterMutation } from '@/shared/redux/api/courses'
import OutcomeMessage from '@/shared/components/outcome_message/OutcomeMessage'

type TRegisterProps = {
	course: CoursesTypes.Course
}

const Register: React.FC<TRegisterProps> = ({ course }) => {
	const [mutate, { error }] = useCourseRegisterMutation()
	const [open, setOpen] = useState(false)
	const e = error as unknown as { data: any }
	const error_message =
		e?.data && e.data?.detail ? e.data?.detail : JSON.stringify(e?.data)

	const onsubmit = useCallback(
		async (arg: IProcessPaymentArg) => {
			const { data } = await mutate({ course_id: course?.id, dto: arg })
			if (data && data.message) {
				setOpen(true)
			}
		},
		[mutate]
	)
	if (!course) {
		return <>Course not found</>
	}
	return (
		<section className={styles.course_register}>
			<OutcomeMessage
				open={open}
				onClose={() => setOpen(false)}
				title='Благодарим за покупку!!!'
				description={`Теперь вам доступен  курс “${course.title}”`}
				label='Ок, посмотреть покупку'
				redirect_url='/profile/my_purchases'
			/>
			<div className={`${styles['container']} container`}>
				<h2>Зарегистрироваться на курс</h2>
				<div className={styles['parent']}>
					<div className={styles['course_card']}>
						<div className={styles['sections']}>
							<h3>Курс</h3>
							<h4>{course.title}</h4>
							<p>{course.description.split('.').slice(0, 2).join('.')}.</p>
						</div>
						<div className={clsx(styles['sections'], styles['pt'])}>
							<h3>Лектор</h3>
							<h4>{course.instructor.fullname}</h4>
							<span>{course.instructor.specialization}</span>
						</div>
						<div className={clsx(styles['sections'], styles.row, styles['pt'])}>
							<div className={styles['col']}>
								<h5>В курс входит</h5>
								<span>{course.duration.modules} модулей</span> <br />
								<span>{course.duration.materials} материалов</span>
							</div>
							<div className={styles['col']}>
								<h5>Доступ</h5>
								<span>{course.access_level}</span>
							</div>
						</div>
						<div className={clsx(styles['sections'], styles.last)}>
							<p>
								* - материалы включают уроки, тесты и задания. Некоторые
								материалы могут быть недоступны при самостоятельном обучении.{' '}
							</p>
						</div>
					</div>
					<PaymentProcessForm
						error_message={error_message}
						onSubmit={onsubmit}
						price={course.price}
					/>
				</div>
			</div>
		</section>
	)
}

export default Register
