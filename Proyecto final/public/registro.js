//funcion asyncronica para enlazar todos los elementos, guarda en constante para su posterior manipulación
document.addEventListener('DOMContentLoaded', ()=>{ 
    async function handleRegister(e){
        e.preventDefault();
        const username = document.getElementById('usuario').value;
        const email = document.getElementById('correo').value;
        const password =  document.getElementById('contraseña').value;

        try{
            const res = await fetch('http://localhost:5000/api/auth/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password})
            });
            const data = await res.json();
            if(res.status == 200){
                alert('Registro Exitoso');
            }else{
                alert(`Este usuario ya está registrado`);
            }
        }catch(error){
            console.error(error);
            alert('Error de registro de usuario');
        }
    }
    document.getElementById('registro').addEventListener('submit', handleRegister);
})