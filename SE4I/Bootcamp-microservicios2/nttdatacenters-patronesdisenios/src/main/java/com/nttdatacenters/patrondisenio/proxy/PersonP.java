package com.nttdatacenters.patrondisenio.proxy;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class PersonP implements PersonaProxyInterface{

	private String name;

	private int age;

	@Override
	public void operacion() {
		System.out.println("Ejecutando la operacion");
		
	}
}
