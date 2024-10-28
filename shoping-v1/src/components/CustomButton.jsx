//import "../Assets/CSS/button.css"

function CustomButton({ name = 'Default button', bgColor = 'blue', cr = 'white'}){
    return(
        <div>
            <button 
            style={{
                color: cr,
                backgroundColor: bgColor,
                fontSize: '20px',
                boxShadow: '2px 2px 3px',
                borderRadius: '10px',
                padding: '2%'
            }}
            >{name}</button>
        </div>
    )
}

export default CustomButton

//how to write inline css in React
//how to pass values in component