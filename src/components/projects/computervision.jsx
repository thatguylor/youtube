/* eslint-disable react/react-in-jsx-scope */
import htmlContent from '../../notebooks/DYOM_Assignment_2_Submission.html'

const ComputerVision = () => {
  return (
        <div dangerouslySetInnerHTML={ { __html: htmlContent } } />
  )
}
export default ComputerVision
