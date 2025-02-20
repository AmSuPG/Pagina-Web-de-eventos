//funcion asyncronica para enlazar todos los elementos, guarda en constante para su posterior manipulación
document.addEventListener('DOMContentLoaded', ()=>{ 
    async function handleLogin(e){
        e.preventDefault();
        const email = document.getElementById('correo_iniciar_sesion').value;
        const password =  document.getElementById('contraseña_iniciar_sesion').value;

        try{
            const res = await fetch('http://localhost:5000/api/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
            });
            const data = await res.json();
            if(res.status == 200){
                alert('Login Exitoso');
            }else{
                alert(`Error al ingresar ${data.msg}`);
            }
        }catch(error){
            console.error(error);
            alert('Error de inicio de sesión');
        }
    }
    document.getElementById('inicio_de_sesion').addEventListener('submit', handleLogin);
})