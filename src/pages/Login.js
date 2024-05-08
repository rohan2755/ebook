import { useRef } from "react"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// export const Login = () => {
  // const email = useRef();
  // const password = useRef();

//   async function handleLogin(e){
//     e.preventDefault();
//     const authDetail = {
//       email: email.current.value,
//       password: password.current.value
//     }
//     const response = await fetch("http://localhost:8000/signin",{
//       method: "POST",
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(authDetail)
//     });

//     const data = await response.json()
//     console.log(data)
//   }
//   return (
//     <main>
//       <section>
//         <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
//       </section>        
//         <form onSubmit={handleLogin}>
//           <div className="mb-6">
//               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//               <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="shubham@example.com" required autoComplete="off" />
//           </div>
//           <div className="mb-6">
//               <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
//               <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//           </div>
//           <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
//         </form>
//         {/* <button className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button> */}
//     </main>
//   )
// }


export const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const authDetail = {
      email: email.current.value,
      password: password.current.value
    }

    try {
      const response = await fetch("http://localhost:8000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the login:", error.message);
    }
  }

  // const ProceedLogin = (e)=>{
  //   e.preventDefault();
  //   const authDetail = {
  //     email: email.current.value,
  //     password: password.current.value
  //   }
  //   fetch("http://localhost:8000/users/"+authDetail.email).then((res)=>{
  //     return res.json()
  //   }).then((resp)=>{
  //     console.log(resp);
  //     if(Object.keys(resp).length===0){
  //       toast.error('Please Enter valid username')
  //     }else{
  //       if(resp.password === password){
  //         toast.success('Logged In')
  //         navigate('/products')
  //       }
  //       else{
  //         toast.error('Please Enter valid password')
  //       }
  //     }
  //   }).catch((err)=>{
  //     toast.error('Login failed due to :'+err.message)
  //   })

  // }

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="shubham@example.com" required autoComplete="off" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
      </form>
    </main>
  );
};