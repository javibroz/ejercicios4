// Escribe un programa JavaScript que cree una clase llamada "CuentaBancaria" con
// propiedades para el número de cuenta y el saldo. Incluye métodos para depositar y retirar
// dinero de la cuenta. Cree algunas instancias de la clase "CuentaBancaria", deposita algo de
// dinero y retira una parte. Después de esto, crea una subclase “CuentaAhorro” que funcione
// de forma similar a la CuentaBancaria pero que nunca permita retirar fondos de forma que el
// saldo quede por debajo de 0. Además, las cuentas de ahorro deben de tener una propiedad
// que sea el tipo de interés. Después, crea métodos para hacer transferencias entre cuentas
// bancarias.

class CuentaBancaria {
    constructor(numeroDeCuenta, saldo=0) {
        this.numeroDeCuenta = numeroDeCuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
        console.log(`Se depositó ${cantidad}€. Saldo final: ${this.saldo}€`)
    }

    retirar(cantidad) {
        this.saldo -= cantidad;
        console.log(`Se retiró ${cantidad}€. Saldo final: ${this.saldo}€`)

    }


    static hacerTransferencia(cuentaOrigen,cuentaDestino,cantidad) {
        if (cuentaOrigen.saldo > cantidad){
            cuentaOrigen.retirar(cantidad);
            cuentaDestino.depositar(cantidad);
            console.log('Transferencia hecha.')
        } else {
            console.log('Saldo insuficiente')
        }
        


    }

}

class CuentaAhorro extends CuentaBancaria {
    constructor(numeroDeCuenta, saldo, tipoDeInteres) {
        super(numeroDeCuenta, saldo)
        this.tipoDeInteres = tipoDeInteres;
    }

    retirar(cantidad) {

        if (this.saldo < cantidad) {
            console.log(`No hay saldo suficiente`)
            return;
        } else {
            super.retirar(cantidad);
        }
    }

}

const miCuenta = new CuentaBancaria('ES1234', 100.00);
console.log(`Saldo inicial: ${miCuenta.saldo}€`)
miCuenta.depositar(25);
miCuenta.retirar(90)


const miCuentaAhorro = new CuentaAhorro('ES2468', 50.00);
console.log(`Saldo inicial CuentaAhorro: ${miCuentaAhorro.saldo}`)
miCuentaAhorro.retirar(100);


const cuentaA = new CuentaBancaria('ES0909',100);
const cuentaB = new CuentaBancaria('ES8888',200);

CuentaBancaria.hacerTransferencia(cuentaA,cuentaB, 15)

//******************************************************************** */

//  Escribe un programa en JavaScript que cree una clase llamada 'Empleado' con propiedades para
//      el nombre y el salario mensual. 
//  Incluye un método para calcular el salario anual en 14 pagas. 
//  Crea una subclase llamada 'Gerente' que herede de la clase 'Empleado' y 
//  agrega una propiedad adicional para el departamento del que es jefe.
//  Extiende el método de cálculo del salario anual para incluir bonificaciones para los gerentes.
//  Crea dos instancias de la clase 'Gerente' y calcule su salario anual.

class Empleado{

    constructor(nombre,salarioMensual){
        this.nombre = nombre;
        this.salarioMensual = salarioMensual;
    }
calcularSalarioAnual(){
    return this.salarioMensual * 14;
}
}

class Gerente extends Empleado{
    constructor(nombre,salarioMensual,departamento,bonificacion){
        super(nombre,salarioMensual);
        this.departamento = departamento;
        this.bonificacion = bonificacion;
    

    }

    calcularSalarioAnual(){
        return super.calcularSalarioAnual() + this.bonificacion;
    }

    
}

 gerenteContabilidad = new Gerente('Juan',1000,'Contabilidad',6000);
 gerenteMarketing = new Gerente('Ana',2000,'Marketing',2000);

 console.log(`El gerente de ${gerenteContabilidad.departamento} tiene un salario anual de ${gerenteContabilidad.calcularSalarioAnual()}`);
 console.log(`La gerente de ${gerenteMarketing.departamento} tiene un salario anual de ${gerenteMarketing.calcularSalarioAnual()}`)

 //******************************************************************************************** */

 