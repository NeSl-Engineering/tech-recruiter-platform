import Lesson from './Lesson'

const LessonPage = ({ params }: { params: { id: string } }) => {
	return <Lesson params={params} />
}

export default LessonPage
