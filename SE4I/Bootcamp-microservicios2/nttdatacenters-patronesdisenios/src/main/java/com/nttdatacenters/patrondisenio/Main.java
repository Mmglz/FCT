package com.nttdatacenters.patrondisenio;

import com.nttdatacenters.patrondisenio.builder.PersonBuilder;
import com.nttdatacenters.patrondisenio.cadenamando.Unidad;
import com.nttdatacenters.patrondisenio.cadenamando.UnidadDeMando;
import com.nttdatacenters.patrondisenio.decorator.Person;
import com.nttdatacenters.patrondisenio.decorator.PersonDecorator;
import com.nttdatacenters.patrondisenio.decorator.PersonInterface;
import com.nttdatacenters.patrondisenio.facade.FacadePerson;
import com.nttdatacenters.patrondisenio.facade.PersonF;
import com.nttdatacenters.patrondisenio.prototype.PersonPrototype;
import com.nttdatacenters.patrondisenio.proxy.AbstractPersonProxy;
import com.nttdatacenters.patrondisenio.proxy.PersonP;
import com.nttdatacenters.patrondisenio.proxy.ProxyBBDD;
import com.nttdatacenters.patrondisenio.singleton.PersonSingleton;

public class Main {

	public static void main(String[] args) {

		// SINGLETON
		PersonSingleton perSingleton = PersonSingleton.getInstance("PSingleton", 45);
		perSingleton.getName();
		perSingleton.getAge();
		
		System.out.println(perSingleton.getName());
		System.out.println(perSingleton.getAge());
		
		System.out.println("");
		
		// PROTOTYPE
		PersonPrototype original = new PersonPrototype("PPrototype", 2);
		
		PersonPrototype clon = (PersonPrototype) original.clone();
		System.out.println(clon.getAge());
		System.out.println(clon.getName());
		
		System.out.println("");
		
		// BUILDER
		PersonBuilder pB = PersonBuilder.builder().age(50).name("PBuilder").build();

		System.out.println(pB.getAge());
		System.out.println(pB.getName());
		
		System.out.println("");

		// DECORATOR
		PersonInterface personI = new Person();
		personI.setName("PDecorator");
		
		PersonInterface personI2 = new PersonDecorator(personI);
		
		System.out.println(personI2.getName());
		
		System.out.println("");
		
		// FACADE
		/* Sin Facade */
		PersonF estudiante = new PersonF();
		estudiante.setAge(18);
		estudiante.setName("Maria");

		/* Con Facade */
		FacadePerson estudianteF = new FacadePerson("Lucas");

		System.out.println(estudiante);
		System.out.println(estudianteF);
		
		System.out.println("");

		// PROXY
		PersonP p = PersonP.builder().age(20).name("PProxy").build();
		AbstractPersonProxy proxyBBDD = new ProxyBBDD(p);
		proxyBBDD.operacion();
		
		System.out.println("");

		// CADENA DE MANDO
		Unidad capitan = new Unidad("capitan");
		Unidad cabo = new Unidad("comandante");
		Unidad soldado = new Unidad("soldado");

		capitan.estableceMando(cabo);
		cabo.estableceMando(soldado);

		UnidadDeMando peloton = new UnidadDeMando();

		peloton.anadirEjercito(capitan);
		peloton.anadirEjercito(cabo);
		peloton.anadirEjercito(soldado);

		peloton.ejecutaOrden("Matar a Aurelio");

	}
}
