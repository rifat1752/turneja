/* eslint-disable react/prop-types */
const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      btn0 btn1 z-0 rounded-md mt-5 md:mt-5
      font-semibold
        `}
    >
      {Icon && (
        <Icon
          size={24}
          className='
              absolute
              left-4
              top-3
            '
        />
      )}
      {label }
    </button>
  )
}

export default Button
