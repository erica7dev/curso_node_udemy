//exec linha por vez evitando erros

function a() {
  console.log("Executando a()")
}

function b() {
  console.log("Executando b()")
}

function c() {
  console.log("Executando c()")
}

function d() {
  console.log("Executando d()")
  a()
  b()
}

d()