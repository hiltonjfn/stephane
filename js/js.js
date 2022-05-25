  function carregar(){
    conteudo.innerHTML = ` 
    <br>          
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100 confirmado">
          <div class="card-body">
            <p>Data :24/05/22 16h30</p>
            <hr>
            <div style="display: inline-block;">VD685</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Henrique Carlos (79840)</p>
            <p>Produto entregue para: <br> Amanda Oliveira (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" class="btn btn-primary">Ver nota</a>
          </div>
        </div>
      </div>
      
      <div class="col">
        <div class="card h-100 recebido" >
          <div class="card-body">
            <p>Data :23/05/22 17h10</p>
            <hr>
            <div style="display: inline-block;">VD685</div>
            <img  style="display: inline-block;width: 15pt;margin-top: -4px;transform: rotateY(180deg);" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Reseane macedo (81198)</p>
            <p>Produto entregue para: <br> Inez barreto (80815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 enviado">
          <div class="card-body">
            <p>Data :22/05/22 12h30</p>
            <hr>
            <div style="display: inline-block;">VD685</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Estevania Lopes (79840)</p>
            <p>Produto entregue para: <br> Ana Carla (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 enviado">
          <div class="card-body">
            <p>Data :22/05/22 12h30</p>
            <hr>
            <div style="display: inline-block;">VD185</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Luciana valim (10713)</p>
            <p>Produto entregue para: <br> Ana Carla (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 confirmado" >
          <div class="card-body">
            <p>Data :20/05/22 17h10</p>
            <hr>
            <div style="display: inline-block;">VD135</div>
            <img  style="display: inline-block;width: 15pt;margin-top: -4px;transform: rotateY(180deg);" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Reseane macedo (81198)</p>
            <p>Produto entregue para: <br> Inez barreto (80815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 confirmado">
          <div class="card-body">
            <p>Data :18/05/22 12h30</p>
            <hr>
            <div style="display: inline-block;">VD685</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Estevania Lopes (79840)</p>
            <p>Produto entregue para: <br> Roseane Macedo (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 enviado">
          <div class="card-body">
            <p>Data :16/05/22 12h30</p>
            <hr>
            <div style="display: inline-block;">VD185</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Luciana valim (10713)</p>
            <p>Produto entregue para: <br> Ana Carla (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 recebido" >
          <div class="card-body">
            <p>Data :15/05/22 17h10</p>
            <hr>
            <div style="display: inline-block;">VD685</div>
            <img  style="display: inline-block;width: 15pt;margin-top: -4px;transform: rotateY(180deg);" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Reseane macedo (81198)</p>
            <p>Produto entregue para: <br> Inez barreto (80815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 enviado">
          <div class="card-body">
            <p>Data :12/05/22 12h30</p>
            <hr>
            <div style="display: inline-block;">VD685</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Estevania Lopes (79840)</p>
            <p>Produto entregue para: <br> Ana Carla (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 enviado">
          <div class="card-body">
            <p>Data :10/05/22 12h30</p>
            <hr>
            <div style="display: inline-block;">VD185</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Luciana valim (10713)</p>
            <p>Produto entregue para: <br> Ana Carla (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 confirmado" >
          <div class="card-body">
            <p>Data :05/05/22 17h10</p>
            <hr>
            <div style="display: inline-block;">VD685</div>
            <img  style="display: inline-block;width: 15pt;margin-top: -4px;transform: rotateY(180deg);" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Reseane macedo (81198)</p>
            <p>Produto entregue para: <br> Inez barreto (80815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 confirmado">
          <div class="card-body">
            <p>Data :22/04/22 15h30</p>
            <hr>
            <div style="display: inline-block;">VD685</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Estevania Lopes (79840)</p>
            <p>Produto entregue para: <br> Ana Carla (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 confirmado">
          <div class="card-body">
            <p>Data :20/04/22 10h30</p>
            <hr>
            <div style="display: inline-block;">VD185</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Luciana valim (10713)</p>
            <p>Produto entregue para: <br> Ana Carla (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 confirmado" >
          <div class="card-body">
            <p>Data :13/04/22 17h10</p>
            <hr>
            <div style="display: inline-block;">VD185</div>
            <img  style="display: inline-block;width: 15pt;margin-top: -4px;transform: rotateY(180deg);" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Reseane macedo (81198)</p>
            <p>Produto entregue para: <br> Inez barreto (80815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 confirmado">
          <div class="card-body">
            <p>Data :12/04/22 12h30</p>
            <hr>
            <div style="display: inline-block;">VD685</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Estevania Lopes (79840)</p>
            <p>Produto entregue para: <br> Ana Carla (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 confirmado">
          <div class="card-body">
            <p>Data :02/04/22 12h30</p>
            <hr>
            <div style="display: inline-block;">VD185</div>
            <img style="display: inline-block;width: 15pt;margin-top: -4px;" src="img/arrow-png.webp" alt="">
            <div style="display: inline-block;">VD940</div>
            <p>Nota tirada por: <br> Luciana valim (10713)</p>
            <p>Produto entregue para: <br> Ana Carla (70815)</p>
            <a href="img/325577912_Grupo_dpsp_450.png" onclick="nota(1)" class="btn btn-primary">Ver nota</a>
        </div>
      </div>
      </div>
    
    



  </div>


  `
}
function nova_nota(){
    conteudo.innerHTML = `<br>

    <form class="row g-3">
      <div class="col-md-6">
  
        <label for="inputEmail4" class="form-label">Responsável por tirar a nota:</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <div class="col-md-6">
     
        <label for="inputPassword4" class="form-label">VD:</label>
        <input type="text" class="form-control" id="inputPassword4">
      </div>
      <div class="col-md-6">
        <label for="inputAddress" class="form-label">Responsável por receber a mercadoria:</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <div class="col-md-6">
        <label for="inputAddress2" class="form-label">VD:</label>
        <input type="text" class="form-control" id="inputPassword4">
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Codigo do produto:</label>
        <input type="text" class="form-control" id="inputAddress2">
        </div>
      </div>
    
      
      <div style="text-align: center;" class="col-12">
        <br>
        <button type="submit" class="btn btn-primary">Adicionar mais produtos</button>
        <div><!-- Button trigger modal -->
        <br>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Salvar
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">DPSP</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Nota lançada com sucesso!!!
        </div>
        <div class="modal-footer">
          <button type="button" onclick="carregar()" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
          
        </div>
      </div>
    </div>
      </div>
    </form>




    
    



  </div>`


}
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})



