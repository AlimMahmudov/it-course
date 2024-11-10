import React from 'react'
import styles from './Register.module.scss'
import RegisterForm from '../components/register_form/RegisterForm'
import clsx from 'clsx'

type TRegisterProps = {
	course: ICourse | undefined
}

const Register: React.FC<TRegisterProps> = ({ course }) => {
	if (!course) {
		return <>Course not found</>
	}
	return (
		<section className={styles.course_register}>
			<div className={`${styles['container']} container`}>
				<h2>Зарегистрироваться на курс</h2>
				<div className={styles['parent']}>
					<div className={styles['course_card']}>
						<div className={styles['sections']}>
							<h3>Курс</h3>
							<h4>{course.title}</h4>
							<p>{course.description2.split('.')[0]}.</p>
						</div>
						<div className={clsx(styles['sections'], styles['pt'])}>
							<h3>Лектор</h3>
							<h4>{course.master_class_leader.name}</h4>
							<span>{course.master_class_leader.title}</span>
						</div>
						<div className={clsx(styles['sections'], styles.row, styles['pt'])}>
							<div className={styles['col']}>
								<h5>В курс входит</h5>
								<span>{course.duration.modules} модулей</span> <br />
								<span>{course.duration.materials} материалов</span>
							</div>
							<div className={styles['col']}>
								<h5>Доступ</h5>
								<span>{course.access}</span>
							</div>
						</div>
						<div className={clsx(styles['sections'], styles.last)}>
							<p>
								* - материалы включают уроки, тесты и задания. Некоторые
								материалы могут быть недоступны при самостоятельном обучении.{' '}
							</p>
						</div>
					</div>
					<RegisterForm course={course} />
				</div>
			</div>
		</section>
	)
}

export default Register
