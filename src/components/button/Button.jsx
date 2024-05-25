
const Button = ({ id, name, value, disabled, onClick }) => {
    return (
        <button
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Button;