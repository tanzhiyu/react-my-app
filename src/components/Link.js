import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onClick}) => {
  return (
   <button
     disabled={active}
     onClick={onClick}
     style={{
       marginRight: 10
     }}
   >
     {children}
   </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link