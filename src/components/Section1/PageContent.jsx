import LeftContent from './LeftContent'
import RightContent from './RightContent'
const PageContent = (props) => {
  return (
    <div className='px-3 h-[90vh]  flex gap-10 items-center py-12'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default PageContent