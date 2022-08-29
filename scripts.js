/*
Crear objetos
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Modelando clases
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta

Rectángulos
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados

5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
(TABLA)
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones por consola para probar todas estas funcionalidades
*/

let opcion = parseInt(prompt('Para desarrollar un ejercicio, ingrese un numero entre 1-7'))

if(isNaN(opcion)){
    document.write('El valor ingresado no es un numero o se ingreso un string null...')
}else{
    switch(opcion){
        case 1:
            alert('Crear objetos\n1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.')
    
            const auto={
                color: 'Blanco',
                marca: 'Toyota',
                modelo: 2022,
                encendido: false,
            
                encendido(){
                    this.encendido=false
                    return this.encendido
                },
            
                apagado(){
                    this.encendido=true
                    return this.encendido
                }
            }
            document.write('Abrir la consola para ver el resultado')
            console.log(auto)
        break;
        case 2:
            alert('Modelando clases\n2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:\nUna propiedad titular con el valor "Alex".\nUna propiedad saldo, teniendo como valor inicial 0.\nUn método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro\nUn método extraer() que permita retirar la cantidad pasada como parámetro.\nUn método informar() que retorne la información del estado de la cuenta. \n\nUtiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta')
    
            class Porgrama{
                constructor(nombre){
                    this.nombre=nombre,
                    this.saldo=0
                }
                ingresar(dinero){
                    this.saldo += dinero
                    document.write(`Ingreso exitoso, se ingreso $${dinero} <br>`)
                }
    
                extraer(dinero){
                    if(this.saldo<dinero){
                        document.write(`No se pudo realizar la extraccion porque el saldo $${this.saldo} es menor al dinero que se desea retirar $${dinero} <br>`)
                    }else{
                        this.saldo -= dinero
                        document.write(`Extraccion exitosa, se extrajo $${dinero} <br>`)
                    }
                }
    
                informar(){
                    document.write(`La cuenta a nombre de ${this.nombre} tiene un saldo de $${this.saldo} <br>`)
                }
            }
    
            const cuenta = new Porgrama('Gabriel');
            cuenta.informar()
            cuenta.ingresar(50000)
            cuenta.informar()
            cuenta.extraer(40000)
            cuenta.informar()
        break;
        case 3:
            alert('Rectángulos\n3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área')
    
            class Figura{
                constructor(base, altura){
                    this.base=base
                    this.altura=altura
                }
    
                getBase(){
                    return this.base
                }
    
                getAltura(){
                    return this.altura
                }
    
                setBase(base){
                    this.base=base
                }
    
                setAltura(altura){
                    this.altura=altura
                }
    
                mostrar(){
                    document.write(`Este rectangulo tiene una base de ${this.base} y una altura de ${this.altura} <br>`)
                }
    
                area(){
                    document.write(`El area del rectangulo es ${this.base*this.altura} <br>`)
                }
    
                perimetro(){
                    document.write(`El perimetro del rectangulo es ${2*(this.base+this.altura)} <br>`)
                }
            }
    
            const rectangulo1 = new Figura(4,7)
            const rectangulo2 = new Figura(15,3)
            
            rectangulo1.mostrar()
            rectangulo1.area()
            rectangulo1.perimetro()
            rectangulo2.mostrar()
            rectangulo2.area()
            rectangulo2.perimetro()
        break;
        case 4:
            alert('4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.\nPosteriormente, cree tres instancias de este objeto y guárdalas en un array.\nPor último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados')
    
            class Producto{
                constructor(codigo, nombre, precio){
                    this.codigo=codigo
                    this.nombre=nombre
                    this.precio=precio
                }
    
                getDatos(){
                    document.write(`El producto "${this.nombre}" tiene un precio de $${this.precio} y su codigo es ${this.codigo} <br>`)
                }
            }
    
            let productos = []
    
            while(productos.length<3){
                let codigo = parseInt(prompt('Ingrese el codigo del producto'))
                let nombre = prompt('Ingrese el nombre del producto')
                let precio = parseFloat(prompt('Ingrese el precio del producto'))
                if(!isNaN(codigo) && nombre != '' && !isNaN(precio)){
                    productos.push(new Producto(codigo, nombre, precio))
                }
            }
    
            for(let producto of productos){
                producto.getDatos()
            }
        break;
        case 5:
            alert('5- Crea una clase llamada Persona que siga las siguientes condiciones:\nSus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.\nLos métodos que se debe poder utilizar  son:\nmostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.\nPara realizar este método tener en cuenta la siguiente tabla de generaciones:\n(TABLA)\nesMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.\nmostrarDatos: devuelve toda la información del objeto.\ngeneraDNI(): genera un número aleatorio de 8 cifras.')
    
            class Persona{
                constructor(nombre,edad,sexo,peso,altura,año){
                    this.nombre=nombre
                    this.edad=edad
                    this.dni=Math.round(Math.random() * (99999999 - 1)+1)
                    this.sexo=sexo
                    this.peso=peso
                    this.altura=altura
                    this.año=año
                }
    
                mostrarGeneracion(){
                    if(this.año>=1994 && this.año<=2010){
                        document.write(`${this.nombre} pertenece a la generacion "Z" y su rasgo es la "Irreverencia" <br>`)
                    }else if(this.año>=1981 && this.año<=1993){
                        document.write(`${this.nombre} pertenece a la generacion "Y" (Millennials) y su rasgo es la "Frustacion" <br>`)
                    }else if(this.año>=1969 && this.año<=1980){
                        document.write(`${this.nombre} pertenece a la generacion "X" y su rasgo es la "Obsesion por el exito" <br>`)
                    }else if(this.año>=1949 && this.año<=1998){
                        document.write(`${this.nombre} pertenece a la generacion "Baby Boom" y su rasgo es la "Ambicion" <br>`)
                    }else if(this.año>=1930 && this.año<=1948){
                        document.write(`${this.nombre} pertenece a la generacion "Silent Generation" (Los niños de la posguerra) y su rasgo es la "Austeridad" <br>`)
                    }else{
                        document.write(`${this.nombre} no pertenece a ninguna generacion ya establecida... <br>`)
                    }
                }
    
                esMayorDeEdad(){
                    (this.edad>=18) ? document.write(`${this.nombre} tiene ${this.edad} años, por lo tanto, es mayor de edad <br>`) : document.write(`${this.nombre} tiene ${this.edad} años, por lo tanto, es menor de edad <br>`)
                }
    
                mostrarDatos(){
                    document.write(`${this.nombre} tiene ${this.edad} años, su DNI es ${this.dni}, mide ${this.altura} metros, pesa ${this.peso} kg, su sexo es "${this.sexo}" y nacio en el año ${this.año} <br>`)
                }
            }
    
            let personitas = []
    
            while(personitas.length<3){
                let nombre= prompt('Ingrese el nombre de la persona')
                let edad= parseInt(prompt('Ingrese la edad de la persona'))
                let sexo = prompt('Ingrese el sexo de la persona ("H" para hombre y "M" para mujer)').toUpperCase()
                let peso = parseFloat(prompt('Ingrese el peso de la persona en kg (solo el numero)'))
                let altura = parseFloat(prompt('Ingrese la altura de la persona en metros (solo el numero)'))
                let año = parseInt(prompt('Ingrese el año de nacimiento de la persona'))
                if(nombre != '' && !isNaN(edad) && (sexo=='H' || sexo=='M') && !isNaN(peso) && !isNaN(altura) && !isNaN(año)){
                    personitas.push(new Persona(nombre, edad, sexo, peso, altura, año))
                }
            }
    
            for(let person of personitas){
                person.mostrarDatos()
                person.mostrarGeneracion()
                person.esMayorDeEdad()
                document.write('----------------------------------------------------------------------------- <br>')
            }
        break;
        case 6:
            alert('6- Crear una clase Libro que contenga al menos las siguientes propiedades:\nISBN\nTítulo\nAutor\nNúmero de páginas\n\nCrear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:\n\n“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”\n\nCrear al menos 2 objetos libros y utilizar el método mostrarLibro();\nPor último, indicar cuál de los 2 objetos “libros” tiene más páginas.')
    
            class Libro{
                constructor(ISBN, titulo, autor, numPag){
                    this.ISBN=ISBN
                    this.titulo=titulo
                    this.autor=autor
                    this.numPag=numPag
                }
    
                getISBN(){
                    return this.ISBN
                }
    
                getTitulo(){
                    return this.titulo
                }
    
                getAutor(){
                    return this.autor
                }
    
                getNumPag(){
                    return this.numPag
                }
    
                setISBN(ISBN){
                    this.ISBN=ISBN
                }
    
                setTitulo(titulo){
                    this.titulo=titulo
                }
    
                setAutor(autor){
                    this.autor=autor
                }
    
                setNumPag(numPag){
                    this.numPag=numPag
                }
                
                mostrarLibro(){
                    document.write(`El libro "${this.titulo}" con ISBN [${this.ISBN}] creado por el/la autor/a "${this.autor}" tiene ${this.numPag} páginas <br>`)
                }
            }
    
            const libro1 = new Libro('978-3-16-148410-0', 'HTML', 'Juan Campos', 150)
            const libro2 = new Libro('872-1-10-165719-3', 'CSS', 'Flor Rodriguez', 200)
    
            libro1.mostrarLibro()
            libro2.mostrarLibro()
    
            if(libro1.getNumPag()>libro2.getNumPag()){
                document.write(`El libro "${libro1.getTitulo()}" tiene mas páginas que "${libro2.getTitulo()}"`)
            }else if(libro1.getNumPag()===libro2.getNumPag()){
                document.write('Ambos libros tienen la misma cantidad de páginas')
            }else{
                document.write(`El libro "${libro2.getTitulo()}" tiene mas páginas que "${libro1.getTitulo()}"`)
            }
        break;
        case 7:
            alert('7- Nos piden realizar una agenda telefónica de contactos.\n\nUn contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.\n\nUna agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).\n\nLos métodos de la agenda serán los siguientes:\n\naniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.\nexisteContacto(Conctacto): indica si el contacto pasado existe o no.\nlistarContactos(): Lista toda la agenda\nbuscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.\neliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla\nagendaLlena(): indica si la agenda está llena.\nhuecosLibres(): indica cuántos contactos más podemos ingresar.\n\nCrea un menú con opciones por consola para probar todas estas funcionalidades')

            class Contacto{
                constructor(nombre,telefono){
                    this.nombre=nombre
                    this.telefono=telefono
                }
            
                getNombre(){
                    return this.nombre
                }
            
                getTelefono(){
                    return this.telefono
                }
            
                contactoInfo(){
                    document.write(`Nombre: ${this.nombre}, Telefono: ${this.telefono} <br>`)
                }
            
                contactoInfoConsola(){
                    return `Nombre: ${this.nombre}, Telefono: ${this.telefono}`
                }
            }
            
            let agendaContacto
            let tamañoAgenda
            
            //FUNCION AÑADIR CONTACTO
            const aniadirContacto = () =>{
                if(agendaContacto.length>=tamañoAgenda){
                    document.write('Ya no puede almacenar a mas contactos <br>')
                    console.log('Ya no puede almacenar a mas contactos')
                }else{
                    let nombre = prompt(`${agendaContacto.length+1}/${tamañoAgenda}- Ingrese el nombre del contacto`).trim().toLowerCase()
                    let telefono = parseInt(prompt(`${agendaContacto.length+1}/${tamañoAgenda}- Ingrese el numero telefonico del contacto`))
                    if(nombre != '' && isNaN(nombre) && !isNaN(telefono)){
                        agendaContacto.push(new Contacto(nombre, telefono))
                    }
                }
            }
            
            //FUNCION LISTAR CONTACTOS
            const listarContactos = () =>{
                if(agendaContacto.length<1)
                {
                    document.write('No hay contactos a mostrar, intente agendar a 1 persona <br>')
                    console.log('No hay contactos a mostrar, intente agendar a 1 persona')
                }else{
                    for(let personaContacto of agendaContacto){
                        personaContacto.contactoInfo()
                        console.log(personaContacto.contactoInfoConsola())
                    }
                    document.write('--------------------------------------------------------- <br>')
                    console.log('------------------------------------------------------')
                }
            }
            
            // FUNCION BUSCAR CONTACTO POR NOMBRE Y MOSTRAR SU TELEFONO
            const buscarContacto = () =>{
                if(agendaContacto.length<1)
                {
                    document.write('No hay contactos a mostrar, intente agendar a 1 persona <br>')
                    console.log('No hay contactos a mostrar, intente agendar a 1 persona')
                }else{
                    let nombreXTelefono
                    do{
                        nombreXTelefono = prompt('Escriba el nombre de la persona a buscar, para mostrar su numero telefonico')
                    }while(!isNaN(nombreXTelefono) || nombreXTelefono=='')
                    let encontrado = false
                    let obtenerTelefono
                    for(let tel of agendaContacto){
                        if(tel.getNombre()==nombreXTelefono){
                            encontrado=true
                            obtenerTelefono=tel.getTelefono()
                        }
                    }
                    if(encontrado){
                        document.write(`${nombreXTelefono} tiene el siguiente numero telefonico: ${obtenerTelefono} <br>`)
                        console.log(`${nombreXTelefono} tiene el siguiente numero telefonico: ${obtenerTelefono}`)
                    }else{
                        document.write(`No pudimos encontrar su numero telefonico porque "${nombreXTelefono}" no existe en sus contactos <br>`)
                        console.log(`No pudimos encontrar su numero telefonico porque "${nombreXTelefono}" no existe en sus contactos`)
                    }
                }
            }
            
            //FUNCION PARA SABER SI EXISTE O NO EL CONTACTO
            const existeContacto = () =>{
                if(agendaContacto.length<1)
                {
                    document.write('No hay contactos a mostrar, intente agendar a 1 persona <br>')
                    console.log('No hay contactos a mostrar, intente agendar a 1 persona')
                }else{
                    let contactoExiste
                    do{
                        contactoExiste = prompt('Escriba el nombre de la persona para saber si existe entre sus contacos')
                    }while(!isNaN(contactoExiste) || contactoExiste=='')
                    let encontrado = false
                    for(const existe of agendaContacto){
                        if(existe.getNombre()==contactoExiste){
                            encontrado=true
                        }
                    }
                    if(encontrado){
                        document.write(`"${contactoExiste}" se encuentra entre sus contactos <br>`)
                        console.log(`"${contactoExiste}" se encuentra entre sus contactos`)
                    }else{
                        document.write(`"${contactoExiste}" no existe entre sus contactos <br>`)
                        console.log(`"${contactoExiste}" no existe entre sus contactos`)
                    }
                }
            }
            
            //FUNCION PARA SABER SI LA AGENDA ESTA LLENA
            const agendaLlena = () =>{
                if(agendaContacto.length == tamañoAgenda){
                    document.write('La agenda se encuentra llena <br>')
                    console.log('La agenda se encuentra llena')
                }else{
                    document.write('La agenda no se encuentra llena <br>')
                    console.log('La agenda no se encuentra llena')
                }
            }
            
            //FUNCION PARA SABER SI HAY ESPACIO DISPONIBLE EN LA AGENDA
            const huecosLibres = () =>{
                if(agendaContacto.length<tamañoAgenda){
                    document.write(`Queda(n) ${tamañoAgenda-agendaContacto.length} espacio(s) disponible(s) <br>`)
                    console.log(`Queda(n) ${tamañoAgenda-agendaContacto.length} espacio(s) disponible(s)`)
                }else{
                    document.write('Ya no queda espacio para seguir agendando <br>')
                    console.log('Ya no queda espacio para seguir agendando')
                }
            }
            
            //FUNCION PARA ELIMINAR A UN CONTACTO
            const eliminarContacto = () =>{
                if(agendaContacto.length<1)
                {
                    document.write('No hay contactos para eliminar <br>')
                    console.log('No hay contactos para eliminar')
                }else{
                    let eliminarUsuario
                    do{
                        eliminarUsuario = prompt('Escriba el nombre de la persona para eliminarla de sus contactos')
                    }while(!isNaN(eliminarUsuario) || eliminarUsuario=='')
                    let encontrado = false
                    let eliminarPersona
                    for(const eliminar of agendaContacto){
                        if(eliminar.getNombre()==eliminarUsuario){
                            encontrado=true
                            eliminarPersona=agendaContacto.indexOf(eliminar)
                            agendaContacto.splice(eliminarPersona,1)
                        }
                    }
                    if(encontrado){
                        document.write(`"${eliminarUsuario}" ha sido eliminado/a de sus contactos <br>`)
                        console.log(`"${eliminarUsuario}" ha sido eliminado/a de sus contactos`)
                    }else{
                        document.write(`No pudimos eliminar a "${eliminarUsuario}" porque no existe entre sus contactos <br>`)
                        console.log(`No pudimos eliminar a "${eliminarUsuario}" porque no existe entre sus contactos`)
                    }
                }
            }
            
            
            do{
                agendaContacto = [] // aqui se guardaran los nombres y telefonos
                tamañoAgenda = parseInt((prompt('Ingrese el limite de contactos que desee agendar (Ingrese "1" como minimo)')))
            }while(isNaN(tamañoAgenda) || tamañoAgenda<=0)
            
            while(true){
                let option = prompt('BIENVENIDO/A, INGRESE UNA OPCION\n1- Añadir contacto\n2- Consultar si existe el contacto\n3- Listar toda la agenda\n4- Buscar por nombre y mostrar su numero telefonico\n5- Eliminar contacto\n6- Consultar si la agenda esta llena\n7- Consultar cuantos contactos podemos agregar\nPARA SALIR, HAGA CLIC EN CANCELAR')
            
                if(option == null)
                    break
                
                option = parseInt(option)
                if(isNaN(option)){
                        document.write('El codigo ingresado no es un numero... <br>')
                        console.log('El codigo ingresado no es un numero...')
                }else{
                    switch(option){
                        case 1:
                            aniadirContacto()
                        break;
                        case 2:
                            existeContacto()
                        break;
                        case 3:
                            listarContactos()
                        break;
                        case 4:
                            buscarContacto()
                        break;
                        case 5:
                            eliminarContacto()
                        break;
                        case 6:
                            agendaLlena()
                        break;
                        case 7:
                            huecosLibres()
                        break;
                        default:
                            document.write('Digite un numero entre el 1-7 <br>')
                            console.log('Digite un numero entre el 1-7')
                    }
                }
            }
        break;
        default: document.write('El valor ingresado no se encuentra en el rango del 1-7')
    }
}