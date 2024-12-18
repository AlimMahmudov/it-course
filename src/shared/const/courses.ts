import { frontendMaterials } from './materials'

export const courses = [
	{
		id: 'cm300nsmq000008i57sntds1o',
		title: 'Frontend-разработчик',
		description:
			'Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты',
		description2:
			'Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции ',
		access: 'Навсегда',
		price: 46,
		duration: {
			modules: 5,
			materials: 75
		},
		course_about: {
			descriptions: [
				'Это всё, что ты видишь и кликаешь на сайте или в приложении - картинки, кнопочки, анимации и даже бесячая реклама.',
				'Самые главные инструменты frontend разработки сайтов это JavaScript, HTML и CSS.',
				'В Кыргызстане фронтенд-разработчики востребованы практически в каждой IT-компании. Это также одно из самых популярных направлений для фриланса и удаленной работы. Все потому, что в современном мире сайт нужен каждому'
			],
			this_for: 'Курс подойдет для людей с математическим складом ума.',
			learning: [
				'HTML',
				'Кроссплатформенность и кроссбраузерность',
				'CSS',
				'Управление версиями',
				'JavaScript',
				'Тестирование и отладка',
				'Soft skills (нетехнические навыки)'
			]
		},
		results: {
			descriptions: [
				'С каждым днем, с каждым месяцем, с каждым годом вы будете физически ощущать, как ваши мечты и цели воплощаются в реальность. И каждый день, каждый год вы будете видеть, что вы живете той жизнью, которую сами для себя выбрали, и именно по тому сценарию, который вы сами для себя создали.',
				'Ваш новый навык планирования изменит вашу жизнь и поможет отточить умение выстраивать дела в правильной последовательности. Сначала вы будете видеть на неделю вперед, потом - на месяц, потом - на год, а потом вы будете видеть весь свой путь. Система планирования Кайдзен позволит вам правильно планировать правильные вещи и увеличить степень контроля над своей жизнью, чтобы сделать её счастливой и успешной.'
			],
			outcomes:
				'Учитесь, применяйте полученные на курсе знания и будьте счастливы!'
		},
		program: {
			modules: [
				{ name: 'Reactivity', materials: frontendMaterials.Reactivity },
				{
					name: 'Reactive approach',
					materials: frontendMaterials['Reactive approach']
				},
				{
					name: 'Observable example',
					materials: frontendMaterials['Observable example']
				},
				{
					name: 'Implementing and subscribing to an observer',
					materials:
						frontendMaterials['Implementing and subscribing to an observer']
				},
				{
					name: 'Reactive Streams spec',
					materials: frontendMaterials['Reactive Streams spec']
				}
			]
		},
		master_class_leader: {
			name: 'Евгений Александрович',
			title: 'Frontend developer'
		}
	},
	{
		id: 'cm300o6sh000108i5gbebddxj',
		title: 'Backend-разработчик',
		description: 'Специалист, создающий логику для воплощения любой идеи в IT.',
		description2: 'Освойте серверную разработку и базы данных.',
		access: 'Навсегда',
		price: 55,
		duration: {
			modules: 4,
			materials: 80
		},
		course_about: {
			descriptions: [
				'Изучите основы работы с базами данных, включая SQL и NoSQL, а также получите навыки разработки серверной части веб-приложений. На курсе вы освоите концепции, которые лежат в основе создания и поддержки масштабируемых и эффективных серверных приложений.',
				'Курс включает в себя множество практических заданий и реальные кейсы из индустрии, что позволит вам применять полученные знания на практике. Вы научитесь работать с современными инструментами и фреймворками, что повысит вашу конкурентоспособность на рынке труда.'
			],
			this_for:
				'Курс подходит для тех, кто хочет углубиться в серверную часть разработки.',
			learning: [
				'Основы серверной архитектуры',
				'Работа с базами данных',
				'API и REST',
				'Управление серверами',
				'Безопасность веб-приложений'
			]
		},
		results: {
			descriptions: [
				'Вы научитесь создавать и поддерживать надежные серверы, которые могут обрабатывать большое количество запросов и данных. Эти навыки позволят вам эффективно справляться с нагрузками и обеспечивать высокую доступность ваших приложений.',
				'Оптимизация и работа с большими объемами данных станут частью вашей повседневной работы. Вы будете знакомы с различными методами оптимизации запросов и управления производительностью, что поможет вам улучшать работу существующих систем.',
				'Вы получите навыки работы с современными инструментами и фреймворками, которые помогут вам в разработке масштабируемых решений. Это сделает вас более ценным специалистом на рынке труда, способным решать сложные задачи и предлагать эффективные решения.'
			],
			outcomes:
				'Станьте backend-разработчиком, создающим эффективные серверные решения.'
		},
		program: {
			modules: [
				{ name: 'Основы серверной архитектуры', materials: [] },
				{ name: 'SQL и базы данных', materials: [] },
				{ name: 'Создание REST API', materials: [] },
				{ name: 'Оптимизация производительности серверов', materials: [] },
				{ name: 'Безопасность и шифрование данных', materials: [] }
			]
		},
		master_class_leader: {
			name: 'Антон Васильевич Петров',
			title: 'Backend-разработчик'
		}
	},
	{
		id: 'cm300oeya000208i5ar28ggix',
		title: 'UX / UI Дизайнер',
		description:
			'Креативный специалист, который придумывает дизайн и интерфейс продукта.',
		description2:
			'Проектирование удобных и красивых интерфейсов для пользователей.',
		access: 'Навсегда',
		price: 60,
		duration: {
			modules: 3,
			materials: 65
		},
		course_about: {
			descriptions: [
				'Вы изучите основные принципы проектирования пользовательских интерфейсов (UI), а также научитесь работать с современными инструментами для создания дизайна. Курс охватывает создание прототипов и макетов, а также основы цветовой теории, что позволит вам глубже понять визуальное восприятие.',
				'Кроме того, вы познакомитесь с анализом пользовательского опыта и проведением исследований, что поможет вам создавать более эффективные и интуитивно понятные интерфейсы. Это важный шаг к тому, чтобы научиться разрабатывать решения, которые действительно решают потребности пользователей.'
			],
			this_for:
				'Для тех, кто хочет освоить UX/UI дизайн и стать специалистом в этой области.',
			learning: [
				'Figma',
				'Психология восприятия',
				'Прототипирование',
				'Дизайн интерфейсов',
				'Работа с цветом и типографикой'
			]
		},
		results: {
			descriptions: [
				'Вы сможете проектировать понятные и функциональные интерфейсы, которые обеспечивают положительный пользовательский опыт и соответствуют современным требованиям. Эти навыки сделают вас ценным специалистом в команде разработки.',
				'Вы будете работать над внешним видом приложений и сайтов, научившись применять элементы дизайна и графику для достижения гармонии между эстетикой и функциональностью.',
				'Кроме того, вы будете создавать прототипы, которые легко тестировать на пользователях, что поможет вам получить ценные отзывы и внести улучшения на ранних стадиях разработки.'
			],
			outcomes:
				'Станьте UX/UI дизайнером и создавайте пользовательский опыт, который вдохновляет и удовлетворяет.'
		},
		program: {
			modules: [
				{ name: 'Основы дизайна', materials: [] },
				{ name: 'Работа с Figma', materials: [] },
				{ name: 'Прототипирование', materials: [] },
				{ name: 'Дизайн-системы', materials: [] },
				{ name: 'Создание пользовательских историй', materials: [] }
			]
		},
		master_class_leader: {
			name: 'Марина Викторовна',
			title: 'UX/UI дизайнер'
		}
	},
	{
		id: 'cm300oqcw000308i52wu976uu',
		title: 'DevOps-инженер',
		description:
			'Специалист, объединяющий программирование и инфраструктуру для оптимизации бизнеса.',
		description2: 'Изучение инструментов CI/CD и администрирования серверов.',
		access: 'Навсегда',
		price: 70,
		duration: {
			modules: 5,
			materials: 90
		},
		course_about: {
			descriptions: [
				'Вы изучите основы CI/CD и контейнеризации, что позволит вам автоматизировать процессы развертывания приложений и повысить их надежность. Курс охватывает администрирование серверов, что является критически важным навыком для поддержания и оптимизации серверной инфраструктуры.',
				'Вы также познакомитесь с работой с облачными сервисами и обеспечением безопасности в DevOps, что даст вам понимание, как защищать приложения и данные, а также автоматизировать множество процессов для повышения их эффективности.'
			],
			this_for:
				'Для тех, кто хочет работать с серверной инфраструктурой и стремится к развитию в области DevOps.',
			learning: [
				'CI/CD',
				'Docker и Kubernetes',
				'Администрирование Linux',
				'Облачные сервисы',
				'Мониторинг и логирование'
			]
		},
		results: {
			descriptions: [
				'Вы сможете настраивать и поддерживать серверы, обеспечивая их бесперебойную работу и высокую доступность для приложений и пользователей.',
				'Вы научитесь оптимизировать развертывание приложений, что позволит сократить время на выпуск новых версий и повысить эффективность командной работы.',
				'Кроме того, вы получите навыки управления жизненным циклом приложения, что включает в себя мониторинг, поддержку и оптимизацию систем на всех этапах их существования.'
			],
			outcomes:
				'Станьте DevOps-инженером и обеспечьте стабильность IT-инфраструктуры, что является залогом успешного функционирования бизнеса.'
		},
		program: {
			modules: [
				{ name: 'Основы DevOps', materials: [] },
				{ name: 'Контейнеризация', materials: [] },
				{ name: 'Автоматизация развертывания', materials: [] },
				{ name: 'Мониторинг', materials: [] },
				{ name: 'Настройка CI/CD пайплайнов', materials: [] }
			]
		},
		master_class_leader: {
			name: 'Иван Петрович',
			title: 'DevOps-инженер'
		}
	},
	{
		id: 'cm300p33d000408i5fa7k2vq9',
		title: 'Android-разработчик',
		description:
			'Создает, обновляет, усовершенствует мобильные приложения для устройств на Android.',
		description2:
			'Освоение разработки под Android, включая основы языка Kotlin и архитектуры приложений.',
		access: 'Навсегда',
		price: 65,
		duration: {
			modules: 6,
			materials: 75
		},
		course_about: {
			descriptions: [
				'Вы изучите основы платформы Android, а также язык программирования Kotlin, который является основным для разработки под Android. Курс включает в себя создание приложений с нуля, а также интеграцию с серверными API, что позволит вам создавать полноценные мобильные приложения.',
				'Вы получите навыки для разработки сложных приложений, работы с библиотеками и фреймворками, а также оптимизации приложений для различных устройств, что обеспечит высокий уровень производительности и отзывчивости ваших приложений.'
			],
			this_for:
				'Подойдет для тех, кто хочет создавать мобильные приложения для Android и развивать свои навыки в области программирования.',
			learning: [
				'Kotlin',
				'Android SDK',
				'UI дизайн',
				'Работа с API',
				'Базы данных',
				'Интеграция с сервисами',
				'Тестирование приложений'
			]
		},
		results: {
			descriptions: [
				'Вы научитесь создавать и публиковать приложения для Android, начиная с базовых функций и заканчивая сложными проектами с интеграцией различных сервисов.',
				'Вы будете работать с современными фреймворками и инструментами Android-разработки, что позволит вам оставаться в курсе последних трендов и технологий в области мобильного программирования.',
				'Кроме того, вы сможете улучшать пользовательский опыт через дизайн, что сделает ваши приложения более привлекательными и удобными для пользователей.'
			],
			outcomes:
				'Станьте Android-разработчиком и создавайте приложения для миллионов пользователей, внося свой вклад в развитие мобильного рынка.'
		},
		program: {
			modules: [
				{ name: 'Основы Android', materials: [] },
				{ name: 'Работа с UI', materials: [] },
				{ name: 'Интеграция с API', materials: [] },
				{ name: 'Хранение данных', materials: [] },
				{ name: 'Продвинутая разработка', materials: [] },
				{ name: 'Оптимизация производительности', materials: [] }
			]
		},
		master_class_leader: {
			name: 'Александр Михайлов',
			title: 'Android-разработчик'
		}
	},
	{
		id: 'cm300pa5k000508i50a1c7jjl',
		title: 'Java-разработчик',
		description:
			'Создает приложения разной сложности, используя язык программирования Java.',
		description2:
			'Изучение Java для создания серверных приложений и крупномасштабных систем.',
		access: 'Навсегда',
		price: 60,
		duration: {
			modules: 5,
			materials: 75
		},
		course_about: {
			descriptions: [
				'Вы изучите язык программирования Java с нуля, начиная с основ и заканчивая более сложными концепциями, такими как работа с многопоточностью и алгоритмами. Курс включает в себя создание серверных приложений, а также получение навыков для работы в корпоративной среде.',
				'Вы освоите популярные Java фреймворки и научитесь создавать и использовать RESTful API, что является важным аспектом современного программирования. Этот курс подходит как для начинающих, так и для тех, кто хочет углубить свои знания в Java.'
			],
			this_for:
				'Курс предназначен для тех, кто хочет стать профессионалом в разработке на Java и освоить навыки, востребованные на рынке труда.',
			learning: [
				'Основы Java',
				'ООП',
				'Работа с базами данных',
				'Java фреймворки',
				'Многопоточность',
				'Алгоритмы',
				'Тестирование приложений'
			]
		},
		results: {
			descriptions: [
				'Вы научитесь создавать серверные приложения и алгоритмы, а также работать с крупными базами данных и популярными фреймворками, что обеспечит вашу готовность к профессиональной деятельности.',
				'Вы сможете разрабатывать масштабируемые решения, используя лучшие практики программирования и архитектуры приложений. Это даст вам возможность стать высококлассным специалистом в области Java-разработки.'
			],
			outcomes:
				'Станьте Java-разработчиком и создавайте комплексные серверные решения, которые будут использоваться в реальных проектах.'
		},
		program: {
			modules: [
				{ name: 'Основы Java', materials: [] },
				{ name: 'ООП в Java', materials: [] },
				{ name: 'Работа с базами данных', materials: [] },
				{ name: 'Фреймворки', materials: [] },
				{ name: 'Алгоритмы и структуры данных', materials: [] },
				{ name: 'Разработка REST API', materials: [] }
			]
		},
		master_class_leader: {
			name: 'Дмитрий Иванов',
			title: 'Java-разработчик'
		}
	},
	{
		id: 'cm300pfl0000608i52rmhh4vr',
		title: 'C++ - разработчик',
		description:
			'Специалист по разработке высокопроизводительных систем, таких как поисковики и драйверы.',
		description2:
			'Освоение C++ для создания высокопроизводительных приложений и систем.',
		access: 'Навсегда',
		price: 70,
		duration: { modules: 7, materials: 85 },
		course_about: {
			descriptions: [
				'Изучите язык C++ и основы низкоуровневого программирования, включая принципы работы с памятью и управления ресурсами. Вы научитесь создавать эффективный и оптимизированный код, что является ключевым аспектом разработки высокопроизводительных систем.',
				'Курс охватывает важные темы, такие как алгоритмы и структуры данных, что позволит вам разрабатывать высоконагруженные приложения, способные обрабатывать большие объемы данных и обеспечивать высокую производительность.'
			],
			this_for:
				'Подходит для тех, кто хочет изучить разработку на уровне системного программного обеспечения и получить глубокие знания в области C++.',
			learning: [
				'Основы C++',
				'Управление памятью',
				'Алгоритмы',
				'Многопоточность',
				'Оптимизация кода',
				'Системное программирование'
			]
		},
		results: {
			descriptions: [
				'Вы научитесь разрабатывать производительный код, который способен эффективно работать в условиях высоких нагрузок. Вы сможете работать над проектами, связанными с разработкой драйверов, игр и высоконагруженных систем.',
				'В результате вы станете уверенным C++ разработчиком и будете способны создавать сложные системы, которые используются в самых разных отраслях.'
			],
			outcomes:
				'Станьте C++ разработчиком и создавайте сложные системы, которые имеют высокие требования к производительности.'
		},
		program: {
			modules: [
				{ name: 'Основы C++', materials: [] },
				{ name: 'Управление памятью', materials: [] },
				{ name: 'Многопоточность', materials: [] },
				{ name: 'Оптимизация', materials: [] },
				{ name: 'Алгоритмы и структуры данных', materials: [] }
			]
		},
		master_class_leader: {
			name: 'Сергей Павлов',
			title: 'C++ разработчик'
		}
	},
	{
		id: 'cm300pket000708i5a6dxgpgn',
		title: 'iOS - разработчик',
		description:
			'Создает приложения для мобильных устройств на платформе iOS, используя Swift и Xcode.',
		description2:
			'Изучение разработки под iOS для создания современных мобильных приложений.',
		access: 'Навсегда',
		price: 70,
		duration: { modules: 6, materials: 80 },
		course_about: {
			descriptions: [
				'Освойте язык Swift и основы разработки под iOS, начиная с простых приложений и постепенно переходя к более сложным проектам. Вы научитесь создавать интерфейсы с помощью SwiftUI и UIKit, а также интегрировать ваши приложения с API.',
				'Курс включает практические задания, которые помогут вам получить опыт в разработке мобильных приложений и подготовят вас к созданию современных приложений для экосистемы Apple.'
			],
			this_for:
				'Курс подходит для тех, кто хочет разрабатывать приложения для экосистемы Apple и стремится стать частью быстроразвивающегося мира мобильной разработки.',
			learning: [
				'Swift',
				'Xcode',
				'UIKit',
				'SwiftUI',
				'Работа с API',
				'Хранение данных'
			]
		},
		results: {
			descriptions: [
				'Создавайте и публикуйте приложения для iOS, которые могут использоваться миллионами пользователей по всему миру. Вы будете работать с современными инструментами разработки и получите знания, необходимые для создания качественных мобильных решений.',
				'Вы станете уверенным iOS-разработчиком, способным создавать функциональные и красивые приложения.'
			],
			outcomes:
				'Станьте iOS-разработчиком и создавайте приложения для миллионов пользователей, получая удовольствие от процесса разработки.'
		},
		program: {
			modules: [
				{ name: 'Основы Swift', materials: [] },
				{ name: 'Разработка интерфейсов', materials: [] },
				{ name: 'Работа с данными', materials: [] },
				{ name: 'Интеграция API', materials: [] },
				{ name: 'Продвинутые техники', materials: [] }
			]
		},
		master_class_leader: {
			name: 'Анна Смирнова',
			title: 'iOS-разработчик'
		}
	},
	{
		id: 'cm300pse4000808i588oi5z9t',
		title: 'Python - разработчик',
		description:
			'Специалист, который применяет язык Python для разработки веб-приложений, автоматизации и анализа данных.',
		description2:
			'Изучение Python для различных сфер, включая веб-разработку и научные вычисления.',
		access: 'Навсегда',
		price: 60,
		duration: { modules: 5, materials: 70 },
		course_about: {
			descriptions: [
				'Изучите основы языка Python и его применение в различных сферах, включая веб-разработку с использованием фреймворка Django. Курс охватывает создание веб-приложений, а также автоматизацию задач и анализ данных.',
				'Вы получите навыки, которые позволят вам разрабатывать современные решения для бизнеса и научных исследований, а также повысите свою конкурентоспособность на рынке труда.'
			],
			this_for:
				'Курс подходит как для начинающих, так и для тех, кто хочет расширить свои навыки в Python и изучить его применение в веб-разработке и аналитике.',
			learning: [
				'Основы Python',
				'Работа с библиотеками',
				'Django',
				'Обработка данных',
				'Автоматизация'
			]
		},
		results: {
			descriptions: [
				'Создавайте веб-приложения и автоматизируйте задачи, используя Python. Вы сможете работать с данными и применять Python в различных проектах, что открывает множество возможностей в карьере.',
				'Вы станете уверенным Python-разработчиком, способным решать сложные задачи и разрабатывать эффективные решения.'
			],
			outcomes:
				'Станьте Python-разработчиком и развивайте навыки в области программирования, получая возможность работать в самых разных сферах.'
		},
		program: {
			modules: [
				{ name: 'Основы Python', materials: [] },
				{ name: 'Создание веб-приложений', materials: [] },
				{ name: 'Работа с библиотеками', materials: [] },
				{ name: 'Анализ данных', materials: [] },
				{ name: 'Автоматизация процессов', materials: [] }
			]
		},
		master_class_leader: {
			name: 'Иван Кузнецов',
			title: 'Python-разработчик'
		}
	}
]
