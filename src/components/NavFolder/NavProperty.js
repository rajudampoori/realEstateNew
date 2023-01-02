import './navprop.css'
export default function NavProperty () {
  return (
    <div className='nav'>
      <p className='nochange'>
        <span className='circle'>1.</span> Basic info
      </p>
      <p className='Property'>
        <span className='circle-prop'>2.</span>Property Detail
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
