import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs'
import Article from '../home/sections/article/Article'
const breadcrumbs = [
	{ label: 'Главная', href: '/' },
	{ label: 'Наши курсы', href: '#' }
]
const ArticlePage = () => {
	return (
		<div>
			<Breadcrumbs items={breadcrumbs} />
			<Article />
		</div>
	)
}

export default ArticlePage
