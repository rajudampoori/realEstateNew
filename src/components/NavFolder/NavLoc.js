import './navloc.css'
export default function NavLoc () {
  return (
    <div className='nav'>
      <p className='nochange'>
        <span className='circle'>1.</span> Basic info
      </p>
      <p className='nochange'>
        <span className='circle'>2.</span>Property Detail
      </p>
      <p className='nochange'>
        <span className='circle'>3.</span>General Info
      </p>
      <p className='Location'>
        <span className='circle-location'>4.</span>Location info
      </p>
    </div>
  )
}
