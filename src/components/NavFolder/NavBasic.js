import './navbasic.css'
export default function NavBasic () {
  return (
    <div className='nav'>
      <p className='Basic'>
        <span className='circle-basic'>1.</span> Basic info
      </p>
      <p className='nochange'>
        <span className='circle'>2.</span>Property Detail
      </p>
      <p className='nochange'>
        <span className='circle'>3.</span>General Info
      </p>
      <p className='nochange'>
        <span className='circle'>4.</span>Location info
      </p>
    </div>
  )
}
