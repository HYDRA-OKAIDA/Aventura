const avanca=document.querySelectorAll ('.btn-proximo') ;
const reiniciarBtn=document.getElementById('.btn-reiniciar');



avanca.forEach(button => {
    button.addEventListener ('click', fuction(){
      const atual=document.querySelector('.ativo');
      const proximoPasso='passo-'+this.getAttribute('data-proximo');
      
      atual.classList.remove('ativo')
      const proximoElemento=document.getElementById(proximoPasso);
      if(proximoElemento){
     proximoElemento.classList.add('ativo');
      } else{
     console.error(`Element com ID "${proximoPasso}" não encontrado.`);
    }
})