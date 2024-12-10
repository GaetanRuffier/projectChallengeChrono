const Button = ({fn, text, disb=true}) => {
 
    return <button onClick={fn} disabled={disb}>
     {text}
    </button>
   }
   
   
   export default Button