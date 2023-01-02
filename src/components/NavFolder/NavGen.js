import './navgen.css'
export default function NavGen () {
  return (
    <div className='nav'>
      <p className='nochange'>
        <span className='circle'>1.</span> Basic info
      </p>
      <p className='nochange'>
        <span className='circle'>2.</span>Property Detail
      </p>
      <p className='General'>
        <span className='circle-general'>3.</span>General Info
      </p>
      <p className='nochange'>
        <span className='circle'>4.</span>Location info
      </p>
    </div>
  )
}
