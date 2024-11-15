'use client'
import Breadcrumbs from '@/shared/components/breadcrumbs/Breadcrumbs'
import { articles } from '@/shared/const/articles'
import { useParams } from 'next/navigation'
import Comments from './sections/comments/Comments'
import Hero from './sections/hero/Hero'
import Other from './sections/other-articles/Other'

const ArticleDetailPage = () => {
	const { articleid } = useParams()
	const findArticle = articles.find(article => article.id === Number(articleid))
	const breadcrumb = findArticle?.article_content.title
		.split(' ')[0]
		.concat(' ')
		.concat(`${findArticle?.article_content.title.split(' ')[1]}...`)
	const breadcrumbs = [
		{ label: 'Главная', href: '/' },
		{ label: 'Статья', href: '/article' },
		{ label: breadcrumb!, href: '#' }
	]
	if (!findArticle) {
		return <h1>not found articles</h1>
	}
	return (
		<div className='container'>
			<Breadcrumbs items={breadcrumbs} />
			<Hero article={findArticle} />
			<Comments />
			<Other />
		</div>
	)
}

export default ArticleDetailPage
