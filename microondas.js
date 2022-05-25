// MENU DISPONÍVEL

// pipoca, tempo de preparo - 10seg
// macarrão, tempo de preparo - 8seg
// carne, tempo de preparo - 15seg
// feijão, tempo de preparo - 12seg
// brigadeiro, tempo de preparo - 8seg

let microondas = function (comida, tempo) {

    let tempoPreparo = 0;
    let mensagem = 'Prato indisponível no momento';
  
    if (comida === 'pipoca') {
      tempoPreparo = 10
    } else if (comida === 'carne') {
      tempoPreparo = 15
    } else if (comida === 'feijao') {
      tempoPreparo = 12
    } else if (comida === 'macarrao' || comida === 'brigadeiro') {
      tempoPreparo = 8
    } else {
      console.log(mensagem);
      return;
    }
  
    if (tempo === tempoPreparo) {
      mensagem = 'Prato pronto, bom apetite'
    } else if (tempo < tempoPreparo) {
      mensagem = 'tempo insuficiente'
    } else if (tempo >= 2 * tempoPreparo && tempo < 3 * tempoPreparo) {
      mensagem = 'A comida queimou'
    } else if (tempo >= 3 * tempoPreparo) {
      mensagem = 'kabumm'
    } else {
      mensagem = 'comando inválido'
    }
  
    console.log(mensagem);
    return;

  }
  
  //Informar dentro dos () o prato que deseja cozinhar e o tempo de preparo, exemplo: tempoPreparo ('feijao', 12)

  microondas('pipoca', 10)