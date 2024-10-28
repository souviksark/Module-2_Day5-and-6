import { useForm } from "react-hook-form"

function Contact() {
    const { register, handleSubmit } = useForm()
    function OutPut(data){
        alert(`Entered User's name is ${data.fullName} User's email is ${data.email}`)
    }
    /* function onSubmit(data){
        console.log(data);
    } */
//js es6 concepts called variable destrucuring
/* 
const reg = {
    'fullName': 'Akshay',
    'email': 'akshayr@cloudthat.com',
    'message': 'this is message'
}
 */
  return (
    <div>
        <form onSubmit={handleSubmit(OutPut)}>
            <label >Enter your name</label>
            <input {...register('fullName')} type="text" />
            <br />
            <label htmlFor="">Enter your email</label>
            <input {...register('email')} type="email" />
            <br />
            <label htmlFor="">Enter your Message</label>
            <input {...register('msg')} type="text" />
            <br />
            <input type='submit' />
        </form>
    </div>
  )
}

export default Contact